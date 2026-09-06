import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/**
 * These are baked into the client bundle at build time, which is expected for
 * the anon key. The waitlist table is protected by a row-level-security policy
 * that permits INSERT only — never add a SELECT policy for the anon role.
 */
export const supabase = url && anonKey ? createClient(url, anonKey) : null;

export const supabaseConfigured = Boolean(url && anonKey);
