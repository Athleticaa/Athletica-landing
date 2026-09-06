import pg from 'pg';

export interface VercelRequest {
  method?: string;
  body?: any;
  query?: Record<string, string | string[]>;
}

export interface VercelResponse {
  status: (code: number) => VercelResponse;
  json: (data: any) => VercelResponse;
  end: () => VercelResponse;
  setHeader: (name: string, value: string) => VercelResponse;
}

const { Pool } = pg;

// Global in-memory fallback store for deployments without an attached DB
const memorySubmissions: Array<Record<string, unknown>> = [];

function getPool() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) return null;
  try {
    return new Pool({
      connectionString,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    });
  } catch (e) {
    console.warn("Failed to initialize Postgres pool:", e);
    return null;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const pool = getPool();

  if (req.method === 'POST') {
    const {
      email,
      whatsapp,
      clients_count,
      current_tools,
      biggest_pain,
      coaching_type,
      would_try_tool,
    } = req.body || {};

    if (!email || !whatsapp) {
      return res.status(400).json({ error: 'Email and WhatsApp number are required.' });
    }

    const payload = {
      email: String(email).trim().toLowerCase(),
      whatsapp: String(whatsapp).trim(),
      clients_count: clients_count || null,
      current_tools: current_tools || null,
      biggest_pain: biggest_pain || null,
      coaching_type: coaching_type || null,
      would_try_tool: would_try_tool || null,
      submitted_at: new Date().toISOString(),
    };

    if (pool) {
      try {
        await pool.query(
          `CREATE TABLE IF NOT EXISTS waitlist_submissions (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) NOT NULL,
            whatsapp VARCHAR(100) NOT NULL,
            clients_count VARCHAR(100),
            current_tools VARCHAR(255),
            biggest_pain TEXT,
            coaching_type VARCHAR(100),
            would_try_tool VARCHAR(255),
            submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )`
        );

        await pool.query(
          `INSERT INTO waitlist_submissions
            (email, whatsapp, clients_count, current_tools, biggest_pain, coaching_type, would_try_tool)
           VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [
            payload.email,
            payload.whatsapp,
            payload.clients_count,
            payload.current_tools,
            payload.biggest_pain,
            payload.coaching_type,
            payload.would_try_tool,
          ]
        );
        return res.status(201).json({ success: true, message: 'Submission saved to database.' });
      } catch (err) {
        console.error('Waitlist Database Insert Error:', err);
        // Fallback to memory store if DB insert fails
        memorySubmissions.push(payload);
        return res.status(201).json({ success: true, message: 'Submission recorded (fallback).' });
      } finally {
        await pool.end().catch(() => {});
      }
    } else {
      memorySubmissions.push(payload);
      return res.status(201).json({
        success: true,
        message: 'Submission recorded. (Configure DATABASE_URL to persist to PostgreSQL)',
      });
    }
  }

  if (req.method === 'GET') {
    if (pool) {
      try {
        const result = await pool.query(
          'SELECT * FROM waitlist_submissions ORDER BY submitted_at DESC'
        );
        return res.json({ submissions: result.rows, source: 'database' });
      } catch (err) {
        return res.json({ submissions: memorySubmissions, source: 'memory_fallback' });
      } finally {
        await pool.end().catch(() => {});
      }
    }
    return res.json({ submissions: memorySubmissions, source: 'memory' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
