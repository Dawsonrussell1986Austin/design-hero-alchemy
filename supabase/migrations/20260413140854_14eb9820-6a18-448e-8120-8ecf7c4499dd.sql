
-- Create storage bucket for task images
INSERT INTO storage.buckets (id, name, public)
VALUES ('task-images', 'task-images', true);

-- Allow anyone to view task images
CREATE POLICY "Anyone can view task images"
ON storage.objects FOR SELECT
USING (bucket_id = 'task-images');

-- Allow anyone to upload task images
CREATE POLICY "Anyone can upload task images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'task-images');

-- Allow anyone to delete task images
CREATE POLICY "Anyone can delete task images"
ON storage.objects FOR DELETE
USING (bucket_id = 'task-images');

-- Add image_urls column to brownie_tasks
ALTER TABLE public.brownie_tasks
ADD COLUMN image_urls text[] DEFAULT '{}';
