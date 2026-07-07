export type TaskStatus = "Not Started" | "In Progress" | "In Review" | "Complete" | "Archived";
export type TaskPriority = "CRITICAL" | "TRAILING" | "LAUNCH";

export interface BrownieTask {
  id: number;
  task: string;
  priority: string;
  platform: string;
  status: TaskStatus;
  assigned: string;
  category: string;
  due_date?: string | null;
  link_urls?: string[] | null;
  image_urls?: string[] | null;
}

export const categories = [
  "Digital Advertising Creative",
  "Landing Pages",
  "Gated Content Assets",
  "Email Marketing (SFMC)",
  "Sales Enablement Materials",
  "Video Content",
  "Analytics & Tracking",
  "CRM & Platform Integration",
  "Website & SEO",
  "Compliance & Legal",
  "Campaign Operations",
];

export const assignees = ["Matt", "Dawson", "Nicole", "Ray", "Unassigned"];

export const initialTasks: BrownieTask[] = [
  // Digital Advertising Creative
  { id: 1, task: "Design & export 5-8 original static ads (1080×1080) from HTML designs", priority: "CRITICAL", platform: "Canva", status: "In Progress", assigned: "Matt", category: "Digital Advertising Creative" },
  { id: 3, task: "Produce 2 video ads (15–30 sec) — Ads 7 & 8", priority: "TRAILING", platform: "Runway ML + Adobe Premiere Pro", status: "Not Started", assigned: "Dawson", category: "Digital Advertising Creative" },
  { id: 4, task: "Create platform-specific ad variants (LinkedIn, Stories, Display sizes)", priority: "TRAILING", platform: "Figma + Canva Pro", status: "In Progress", assigned: "Matt", category: "Digital Advertising Creative" },
  { id: 45, task: "Create 5-8 organic social graphics", priority: "TRAILING", platform: "Canva", status: "Not Started", assigned: "Matt", category: "Digital Advertising Creative" },

  // Landing Pages
  { id: 5, task: "Build 5 fear-trigger landing pages", priority: "CRITICAL", platform: "Lovable", status: "Not Started", assigned: "Dawson", category: "Landing Pages" },
  { id: 6, task: "Build thank-you / confirmation pages with next-step CTAs", priority: "CRITICAL", platform: "Lovable", status: "Not Started", assigned: "Dawson", category: "Landing Pages" },

  // Gated Content Assets
  { id: 7, task: "Draft & design 'The 2026 Accredited Investor Risk Report' (6-page PDF)", priority: "TRAILING", platform: "Claude → Canva", status: "Not Started", assigned: "Nicole", category: "Gated Content Assets" },
  { id: 8, task: "Draft & design 'What Insurance Companies Know' white paper", priority: "TRAILING", platform: "Claude → Canva", status: "In Progress", assigned: "Nicole", category: "Gated Content Assets" },
  { id: 9, task: "Draft & design 'The 8-Cycle Track Record' timeline document", priority: "TRAILING", platform: "Claude → Canva", status: "Not Started", assigned: "Nicole", category: "Gated Content Assets" },

  // Email Marketing (SFMC)
  { id: 10, task: "Draft & load 8-email nurture sequence into SFMC Journey Builder", priority: "CRITICAL", platform: "SFMC Journey Builder", status: "In Progress", assigned: "Dawson", category: "Email Marketing (SFMC)" },
  { id: 46, task: "Load in final and approved email sequence into SFMC", priority: "CRITICAL", platform: "SFMC Journey Builder", status: "Not Started", assigned: "Dawson", category: "Email Marketing (SFMC)" },
  { id: 11, task: "Build 'The Oak Report' monthly newsletter template", priority: "TRAILING", platform: "SFMC Content Builder", status: "Not Started", assigned: "Dawson", category: "Email Marketing (SFMC)" },
  { id: 12, task: "Pre-draft & load 3 re-engagement trigger email templates", priority: "TRAILING", platform: "SFMC Automation Studio", status: "Not Started", assigned: "Dawson", category: "Email Marketing (SFMC)" },

  // Sales Enablement Materials
  { id: 13, task: "Create one-page investment summary", priority: "TRAILING", platform: "Claude → InDesign / Canva Pro", status: "Not Started", assigned: "Unassigned", category: "Sales Enablement Materials" },
  { id: 14, task: "Create sample loan summary / anonymized case study", priority: "TRAILING", platform: "Claude → Adobe InDesign", status: "Not Started", assigned: "Unassigned", category: "Sales Enablement Materials" },
  { id: 15, task: "Create capital stack diagram (SVG)", priority: "TRAILING", platform: "Adobe Illustrator / Figma", status: "Not Started", assigned: "Unassigned", category: "Sales Enablement Materials" },
  { id: 16, task: "Draft principal bios document", priority: "TRAILING", platform: "Claude → Microsoft Word", status: "Not Started", assigned: "Unassigned", category: "Sales Enablement Materials" },
  { id: 17, task: "Create institutional client reference sheet", priority: "TRAILING", platform: "Canva Pro / Adobe InDesign", status: "Not Started", assigned: "Unassigned", category: "Sales Enablement Materials" },
  { id: 18, task: "Draft conversation prep document (pre-call protocol)", priority: "TRAILING", platform: "Microsoft Word / Google Docs", status: "Not Started", assigned: "Unassigned", category: "Sales Enablement Materials" },
  { id: 19, task: "Review & update Private Placement Memorandum (PPM)", priority: "TRAILING", platform: "Microsoft Word + Legal", status: "Not Started", assigned: "Unassigned", category: "Sales Enablement Materials" },

  // Video Content
  { id: 20, task: "Produce 60–90 sec explainer video: 'How OREP's Structure Works'", priority: "TRAILING", platform: "Runway ML + Premiere Pro", status: "Not Started", assigned: "Unassigned", category: "Video Content" },
  { id: 21, task: "Produce 2–3 min principal introduction video", priority: "TRAILING", platform: "Professional production + Premiere", status: "Not Started", assigned: "Unassigned", category: "Video Content" },

  // Analytics & Tracking
  { id: 22, task: "Build UTM parameter framework for all 10 ads across all platforms", priority: "CRITICAL", platform: "Google Analytics 4 + UTM.io", status: "Not Started", assigned: "Unassigned", category: "Analytics & Tracking" },
  { id: 23, task: "Deploy conversion tracking pixels (LinkedIn, Meta, GA4)", priority: "CRITICAL", platform: "Google Tag Manager", status: "Not Started", assigned: "Unassigned", category: "Analytics & Tracking" },
  { id: 24, task: "Configure lead scoring model", priority: "CRITICAL", platform: "SFMC Einstein + Juniper Square", status: "Not Started", assigned: "Unassigned", category: "Analytics & Tracking" },
  { id: 25, task: "Set up campaign dashboard", priority: "TRAILING", platform: "SFMC Intelligence / Databox", status: "Not Started", assigned: "Unassigned", category: "Analytics & Tracking" },

  // CRM & Platform Integration
  { id: 26, task: "Configure SFMC Journey Builder nurture sequence logic & load content", priority: "CRITICAL", platform: "SFMC (existing)", status: "Not Started", assigned: "Unassigned", category: "CRM & Platform Integration" },
  { id: 27, task: "Configure Juniper Square investor portal for campaign converts", priority: "CRITICAL", platform: "Juniper Square (existing)", status: "Not Started", assigned: "Unassigned", category: "CRM & Platform Integration" },
  { id: 28, task: "Set up lead routing & assignment rules in Salesforce CRM", priority: "CRITICAL", platform: "Salesforce Sales Cloud", status: "Not Started", assigned: "Unassigned", category: "CRM & Platform Integration" },

  // Website & SEO
  { id: 29, task: "Build campaign microsite / landing hub", priority: "TRAILING", platform: "Webflow / WordPress", status: "Not Started", assigned: "Unassigned", category: "Website & SEO" },
  { id: 30, task: "Draft & publish 3–5 SEO blog articles (1/week from Week 3)", priority: "TRAILING", platform: "WordPress + Clearscope", status: "Not Started", assigned: "Unassigned", category: "Website & SEO" },

  // Compliance & Legal
  { id: 31, task: "Draft & get legal approval for ad disclaimer / disclosure copy", priority: "CRITICAL", platform: "Internal legal review", status: "Not Started", assigned: "Unassigned", category: "Compliance & Legal" },
  { id: 32, task: "Set up accredited investor verification on lead-capture forms", priority: "CRITICAL", platform: "Juniper Square / Verify Investor", status: "Not Started", assigned: "Unassigned", category: "Compliance & Legal" },

  // Campaign Operations
  { id: 33, task: "Lock brand guidelines", priority: "CRITICAL", platform: "Internal", status: "Not Started", assigned: "Unassigned", category: "Campaign Operations" },
  { id: 34, task: "Set up LinkedIn Campaign Manager — audiences, creatives, UTMs", priority: "CRITICAL", platform: "LinkedIn Campaign Manager", status: "Not Started", assigned: "Unassigned", category: "Campaign Operations" },
  { id: 35, task: "Set up Meta Ads Manager — lookalike build, pixel verification", priority: "CRITICAL", platform: "Meta Ads Manager", status: "Not Started", assigned: "Unassigned", category: "Campaign Operations" },
  { id: 36, task: "Conduct condensed 2-hour sales team training session", priority: "CRITICAL", platform: "Internal", status: "Not Started", assigned: "Unassigned", category: "Campaign Operations" },
  { id: 37, task: "Complete compliance / legal review of all ad creative", priority: "CRITICAL", platform: "Internal legal", status: "Not Started", assigned: "Unassigned", category: "Campaign Operations" },
  { id: 38, task: "Soft launch Ads 1 & 5 on LinkedIn + Meta", priority: "LAUNCH", platform: "LinkedIn + Meta", status: "Not Started", assigned: "Unassigned", category: "Campaign Operations" },
  { id: 39, task: "QA landing pages across devices & verify conversion tracking", priority: "LAUNCH", platform: "Unbounce + GTM", status: "Not Started", assigned: "Unassigned", category: "Campaign Operations" },
  { id: 40, task: "Activate email nurture sequence (form-triggered)", priority: "LAUNCH", platform: "SFMC Journey Builder", status: "Not Started", assigned: "Unassigned", category: "Campaign Operations" },
  { id: 41, task: "Full launch all 5 original ads on LinkedIn + Meta + Instagram", priority: "LAUNCH", platform: "LinkedIn + Meta + Instagram", status: "Not Started", assigned: "Unassigned", category: "Campaign Operations" },
  { id: 42, task: "Activate retargeting audiences (72hr rule, email non-clickers)", priority: "LAUNCH", platform: "LinkedIn + Meta", status: "Not Started", assigned: "Unassigned", category: "Campaign Operations" },
  { id: 43, task: "Initiate A/B testing (subject lines, LP headlines, CTA phrasing)", priority: "LAUNCH", platform: "Unbounce + SFMC", status: "Not Started", assigned: "Unassigned", category: "Campaign Operations" },
  { id: 44, task: "Set up niche platforms (FT Digital, YouTube, Investopedia, Barron's)", priority: "TRAILING", platform: "Various", status: "Not Started", assigned: "Unassigned", category: "Campaign Operations" },
];
