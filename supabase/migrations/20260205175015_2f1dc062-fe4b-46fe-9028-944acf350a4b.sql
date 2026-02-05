-- Create table for investor access submissions
CREATE TABLE public.investor_access_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  state TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.investor_access_submissions ENABLE ROW LEVEL SECURITY;

-- Allow edge functions to insert (using service role)
CREATE POLICY "Allow insert via service role" 
ON public.investor_access_submissions 
FOR INSERT 
WITH CHECK (true);