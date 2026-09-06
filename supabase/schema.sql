-- Athletica waitlist storage.
-- Run once in the Supabase dashboard: SQL Editor → New query → Run.

create table if not exists public.waitlist_submissions (
  id            bigint generated always as identity primary key,
  email         text not null,
  whatsapp      text not null,
  clients_count text,
  current_tools text,
  biggest_pain  text,
  coaching_type text,
  would_try_tool text,
  submitted_at  timestamptz not null default now()
);

-- The landing page talks to Supabase directly with the public anon key, so the
-- table is only as safe as its policies. Enabling RLS denies everything by
-- default; the single policy below then re-opens INSERT and nothing else.
alter table public.waitlist_submissions enable row level security;

drop policy if exists "anon can join the waitlist" on public.waitlist_submissions;
create policy "anon can join the waitlist"
  on public.waitlist_submissions
  for insert
  to anon
  with check (
    email    is not null and length(email)    between 3 and 255 and
    whatsapp is not null and length(whatsapp) between 6 and 40
  );

-- Deliberately NO select/update/delete policy for anon: signups can be written
-- by the public form but only read from the dashboard or with the service_role
-- key. Do not add a select policy for anon — it would expose every signup.
