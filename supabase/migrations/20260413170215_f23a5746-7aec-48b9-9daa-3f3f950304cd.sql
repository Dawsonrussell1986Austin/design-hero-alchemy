ALTER TABLE public.brownie_tasks ADD COLUMN link_urls text[] DEFAULT '{}'::text[];

-- Migrate existing data
UPDATE public.brownie_tasks SET link_urls = ARRAY[link_url] WHERE link_url IS NOT NULL AND link_url != '';

-- Drop old column
ALTER TABLE public.brownie_tasks DROP COLUMN link_url;