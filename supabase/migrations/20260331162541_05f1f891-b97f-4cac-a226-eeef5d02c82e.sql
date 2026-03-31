
CREATE TABLE public.brownie_tasks (
  id INTEGER PRIMARY KEY,
  task TEXT NOT NULL,
  priority TEXT NOT NULL,
  platform TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'Not Started',
  assigned TEXT NOT NULL DEFAULT 'Unassigned',
  category TEXT NOT NULL
);

ALTER TABLE public.brownie_tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read brownie tasks"
  ON public.brownie_tasks FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can update brownie tasks"
  ON public.brownie_tasks FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can insert brownie tasks"
  ON public.brownie_tasks FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Seed all 44 tasks
INSERT INTO public.brownie_tasks (id, task, priority, platform, status, assigned, category) VALUES
(1, 'Design & export 5-8 original static ads (1080×1080) from HTML designs', 'LAUNCH-CRITICAL', 'Canva', 'In Progress', 'Matt', 'Digital Advertising Creative'),
(3, 'Produce 2 video ads (15–30 sec) — Ads 7 & 8', 'TRAILING', 'Runway ML + Adobe Premiere Pro', 'Not Started', 'Dawson', 'Digital Advertising Creative'),
(4, 'Create platform-specific ad variants (LinkedIn, Stories, Display sizes)', 'TRAILING', 'Figma + Canva Pro', 'In Progress', 'Matt', 'Digital Advertising Creative'),
(45, 'Create 5-8 organic social graphics', 'TRAILING', 'Canva', 'Not Started', 'Matt', 'Digital Advertising Creative'),
(5, 'Build 5 fear-trigger landing pages', 'LAUNCH-CRITICAL', 'Lovable', 'Not Started', 'Dawson', 'Landing Pages'),
(6, 'Build thank-you / confirmation pages with next-step CTAs', 'LAUNCH-CRITICAL', 'Lovable', 'Not Started', 'Dawson', 'Landing Pages'),
(7, 'Draft & design ''The 2026 Accredited Investor Risk Report'' (6-page PDF)', 'TRAILING', 'Claude → Canva', 'Not Started', 'Nicole', 'Gated Content Assets'),
(8, 'Draft & design ''What Insurance Companies Know'' white paper', 'TRAILING', 'Claude → Canva', 'In Progress', 'Nicole', 'Gated Content Assets'),
(9, 'Draft & design ''The 8-Cycle Track Record'' timeline document', 'TRAILING', 'Claude → Canva', 'Not Started', 'Nicole', 'Gated Content Assets'),
(10, 'Draft & load 8-email nurture sequence into SFMC Journey Builder', 'LAUNCH-CRITICAL', 'SFMC Journey Builder', 'In Progress', 'Dawson', 'Email Marketing (SFMC)'),
(46, 'Load in final and approved email sequence into SFMC', 'LAUNCH-CRITICAL', 'SFMC Journey Builder', 'Not Started', 'Dawson', 'Email Marketing (SFMC)'),
(11, 'Build ''The Oak Report'' monthly newsletter template', 'TRAILING', 'SFMC Content Builder', 'Not Started', 'Dawson', 'Email Marketing (SFMC)'),
(12, 'Pre-draft & load 3 re-engagement trigger email templates', 'TRAILING', 'SFMC Automation Studio', 'Not Started', 'Dawson', 'Email Marketing (SFMC)'),
(13, 'Create one-page investment summary', 'TRAILING', 'Claude → InDesign / Canva Pro', 'Not Started', 'Unassigned', 'Sales Enablement Materials'),
(14, 'Create sample loan summary / anonymized case study', 'TRAILING', 'Claude → Adobe InDesign', 'Not Started', 'Unassigned', 'Sales Enablement Materials'),
(15, 'Create capital stack diagram (SVG)', 'TRAILING', 'Adobe Illustrator / Figma', 'Not Started', 'Unassigned', 'Sales Enablement Materials'),
(16, 'Draft principal bios document', 'TRAILING', 'Claude → Microsoft Word', 'Not Started', 'Unassigned', 'Sales Enablement Materials'),
(17, 'Create institutional client reference sheet', 'TRAILING', 'Canva Pro / Adobe InDesign', 'Not Started', 'Unassigned', 'Sales Enablement Materials'),
(18, 'Draft conversation prep document (pre-call protocol)', 'TRAILING', 'Microsoft Word / Google Docs', 'Not Started', 'Unassigned', 'Sales Enablement Materials'),
(19, 'Review & update Private Placement Memorandum (PPM)', 'TRAILING', 'Microsoft Word + Legal', 'Not Started', 'Unassigned', 'Sales Enablement Materials'),
(20, 'Produce 60–90 sec explainer video: ''How OREP''s Structure Works''', 'TRAILING', 'Runway ML + Premiere Pro', 'Not Started', 'Unassigned', 'Video Content'),
(21, 'Produce 2–3 min principal introduction video', 'TRAILING', 'Professional production + Premiere', 'Not Started', 'Unassigned', 'Video Content'),
(22, 'Build UTM parameter framework for all 10 ads across all platforms', 'LAUNCH-CRITICAL', 'Google Analytics 4 + UTM.io', 'Not Started', 'Unassigned', 'Analytics & Tracking'),
(23, 'Deploy conversion tracking pixels (LinkedIn, Meta, GA4)', 'LAUNCH-CRITICAL', 'Google Tag Manager', 'Not Started', 'Unassigned', 'Analytics & Tracking'),
(24, 'Configure lead scoring model', 'LAUNCH-CRITICAL', 'SFMC Einstein + Juniper Square', 'Not Started', 'Unassigned', 'Analytics & Tracking'),
(25, 'Set up campaign dashboard', 'TRAILING', 'SFMC Intelligence / Databox', 'Not Started', 'Unassigned', 'Analytics & Tracking'),
(26, 'Configure SFMC Journey Builder nurture sequence logic & load content', 'LAUNCH-CRITICAL', 'SFMC (existing)', 'Not Started', 'Unassigned', 'CRM & Platform Integration'),
(27, 'Configure Juniper Square investor portal for campaign converts', 'LAUNCH-CRITICAL', 'Juniper Square (existing)', 'Not Started', 'Unassigned', 'CRM & Platform Integration'),
(28, 'Set up lead routing & assignment rules in Salesforce CRM', 'LAUNCH-CRITICAL', 'Salesforce Sales Cloud', 'Not Started', 'Unassigned', 'CRM & Platform Integration'),
(29, 'Build campaign microsite / landing hub', 'TRAILING', 'Webflow / WordPress', 'Not Started', 'Unassigned', 'Website & SEO'),
(30, 'Draft & publish 3–5 SEO blog articles (1/week from Week 3)', 'TRAILING', 'WordPress + Clearscope', 'Not Started', 'Unassigned', 'Website & SEO'),
(31, 'Draft & get legal approval for ad disclaimer / disclosure copy', 'LAUNCH-CRITICAL', 'Internal legal review', 'Not Started', 'Unassigned', 'Compliance & Legal'),
(32, 'Set up accredited investor verification on lead-capture forms', 'LAUNCH-CRITICAL', 'Juniper Square / Verify Investor', 'Not Started', 'Unassigned', 'Compliance & Legal'),
(33, 'Lock brand guidelines', 'LAUNCH-CRITICAL', 'Internal', 'Not Started', 'Unassigned', 'Campaign Operations'),
(34, 'Set up LinkedIn Campaign Manager — audiences, creatives, UTMs', 'LAUNCH-CRITICAL', 'LinkedIn Campaign Manager', 'Not Started', 'Unassigned', 'Campaign Operations'),
(35, 'Set up Meta Ads Manager — lookalike build, pixel verification', 'LAUNCH-CRITICAL', 'Meta Ads Manager', 'Not Started', 'Unassigned', 'Campaign Operations'),
(36, 'Conduct condensed 2-hour sales team training session', 'LAUNCH-CRITICAL', 'Internal', 'Not Started', 'Unassigned', 'Campaign Operations'),
(37, 'Complete compliance / legal review of all ad creative', 'LAUNCH-CRITICAL', 'Internal legal', 'Not Started', 'Unassigned', 'Campaign Operations'),
(38, 'Soft launch Ads 1 & 5 on LinkedIn + Meta', 'LAUNCH', 'LinkedIn + Meta', 'Not Started', 'Unassigned', 'Campaign Operations'),
(39, 'QA landing pages across devices & verify conversion tracking', 'LAUNCH', 'Unbounce + GTM', 'Not Started', 'Unassigned', 'Campaign Operations'),
(40, 'Activate email nurture sequence (form-triggered)', 'LAUNCH', 'SFMC Journey Builder', 'Not Started', 'Unassigned', 'Campaign Operations'),
(41, 'Full launch all 5 original ads on LinkedIn + Meta + Instagram', 'LAUNCH', 'LinkedIn + Meta + Instagram', 'Not Started', 'Unassigned', 'Campaign Operations'),
(42, 'Activate retargeting audiences (72hr rule, email non-clickers)', 'LAUNCH', 'LinkedIn + Meta', 'Not Started', 'Unassigned', 'Campaign Operations'),
(43, 'Initiate A/B testing (subject lines, LP headlines, CTA phrasing)', 'LAUNCH', 'Unbounce + SFMC', 'Not Started', 'Unassigned', 'Campaign Operations'),
(44, 'Set up niche platforms (FT Digital, YouTube, Investopedia, Barron''s)', 'TRAILING', 'Various', 'Not Started', 'Unassigned', 'Campaign Operations');
