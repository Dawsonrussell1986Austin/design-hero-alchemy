
CREATE TABLE public.brownie_task_image_approvals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  task_id INTEGER NOT NULL REFERENCES public.brownie_tasks(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  reviewed_by TEXT,
  reviewed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(task_id, image_url)
);

ALTER TABLE public.brownie_task_image_approvals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read image approvals"
  ON public.brownie_task_image_approvals FOR SELECT
  TO anon, authenticated USING (true);

CREATE POLICY "Anyone can insert image approvals"
  ON public.brownie_task_image_approvals FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Anyone can update image approvals"
  ON public.brownie_task_image_approvals FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);
