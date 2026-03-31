
SELECT cron.schedule(
  'check-overdue-tasks-daily',
  '0 8 * * *',
  $$
  SELECT net.http_post(
    url:='https://yxymnshvmeblkbuvrqmv.supabase.co/functions/v1/check-overdue-tasks',
    headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4eW1uc2h2bWVibGtidXZycW12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxMDk4NDEsImV4cCI6MjA1NTY4NTg0MX0.8uBpKn3seWx9GdNu62Q6lVZiUENG6EVFPwV0TW6IHAg"}'::jsonb,
    body:='{}'::jsonb
  ) AS request_id;
  $$
);
