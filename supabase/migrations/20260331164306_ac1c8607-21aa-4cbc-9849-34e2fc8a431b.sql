
CREATE TABLE public.team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  email text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read team members" ON public.team_members
  FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Anyone can update team members" ON public.team_members
  FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Anyone can insert team members" ON public.team_members
  FOR INSERT TO anon, authenticated WITH CHECK (true);

INSERT INTO public.team_members (name, email) VALUES
  ('Matt', 'matt@example.com'),
  ('Dawson', 'dawson@example.com'),
  ('Nicole', 'nicole@example.com'),
  ('Ray', 'ray@example.com');
