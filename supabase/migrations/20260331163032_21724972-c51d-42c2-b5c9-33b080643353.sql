
CREATE TABLE public.brownie_task_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  task_id INTEGER NOT NULL REFERENCES public.brownie_tasks(id) ON DELETE CASCADE,
  author TEXT NOT NULL DEFAULT 'Team',
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.brownie_task_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read brownie task notes"
  ON public.brownie_task_notes FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can insert brownie task notes"
  ON public.brownie_task_notes FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can delete brownie task notes"
  ON public.brownie_task_notes FOR DELETE
  TO anon, authenticated
  USING (true);
