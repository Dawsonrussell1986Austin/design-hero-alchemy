// Per-route SEO metadata used by scripts/apply-route-meta.mjs at build time.
// Keep titles/descriptions in sync with each page's <SEOHead> props so the
// static HTML served for a raw route matches what React renders client-side.
// `title: null` uses the site-default title.

export const SITE_NAME = 'Oak Real Estate Partners';
export const BASE_URL = 'https://www.oakrepartners.com';
export const DEFAULT_TITLE = `${SITE_NAME} - Commercial Real Estate Lending & Investment`;

export const routes = [
  {
    path: '/',
    title: null,
    description:
      'Oak Real Estate Partners specializes in commercial real estate lending and investment solutions. Bridge loans, HUD financing, and private equity opportunities.',
  },
  {
    path: '/about',
    title: 'About Us',
    description:
      'Oak Real Estate Partners is a vertically integrated CRE credit platform focused on the $2M–$20M bridge loan market — the small-balance segment of the roughly $300 billion annual CRE lending gap.',
  },
  {
    path: '/lending',
    title: 'Commercial Real Estate Lending',
    description:
      'Senior-secured bridge loans for commercial real estate. $2M–$20M. Term sheets in 48 hours. Credit decisions governed by principals, not committee chains.',
  },
  {
    path: '/whyoak',
    title: 'Why Oak - Investment Platform',
    description:
      'Purpose-built for a market that cannot be served by the majors. Oak combines insurance SMA infrastructure, co-investment capital, FHA/HUD permanent financing, and principal-governed underwriting.',
  },
  {
    path: '/investing',
    title: 'Investing',
    description:
      "Senior-secured, first-lien CRE debt. Named collateral. Institutional underwriting. Oak's 33 full-cycle loans have delivered a 19% net IRR (21.9% gross) to date.",
  },
  {
    path: '/investors',
    title: 'Investor Portal',
    description:
      'Oak Real Estate Partners investor portal. Stay updated with monthly calls, transparent reporting, and senior-position commercial real estate lending strategies.',
  },
  {
    path: '/contact',
    title: 'Contact Us',
    description:
      'Get in touch with Oak Real Estate Partners. Contact our team for commercial real estate lending inquiries, bridge loans, and HUD financing questions.',
  },
  {
    path: '/leadership',
    title: 'Leadership Team',
    description:
      'Eight market cycles. More than $25 billion in combined CRE financings. Meet the Oak Real Estate Partners leadership team.',
  },
  {
    path: '/subsidiaries',
    title: 'Our Subsidiaries',
    description:
      "Oak's subsidiary platform is the permanent financing engine that completes the lending cycle. Approximately $225M FHA pipeline.",
  },
  {
    path: '/lending/bridge',
    title: 'Bridge Loans - Short-Term CRE Financing',
    description:
      'Commercial real estate bridge loans from Oak Real Estate Partners. Core, Core-Plus, Opportunistic, and Participating bridge programs for acquisition, renovation, and stabilization.',
  },
  {
    path: '/lending/fha-hud',
    title: 'FHA/HUD Loan Programs',
    description:
      'FHA/HUD insured financing from Johnson Capital Multifamily. Long-term government-backed loans for multifamily, affordable housing, senior living, and healthcare properties.',
  },
  {
    path: '/lending/bridge/core-bridge',
    title: 'Core Bridge — Loan Terms',
    description:
      "Detailed loan terms and structure for Oak Real Estate Partners' Core Bridge lending program.",
  },
  {
    path: '/lending/bridge/core-plus-bridge',
    title: 'Core Plus Bridge Lending Program',
    description:
      "Explore Oak's Core Plus Bridge lending program for value-add commercial real estate bridge financing.",
  },
  {
    path: '/lending/bridge/opportunistic-bridge',
    title: 'Opportunistic Bridge Lending Program',
    description:
      "Oak's Opportunistic Bridge program for higher-yield commercial real estate bridge lending opportunities.",
  },
  {
    path: '/lending/bridge/participating-bridge',
    title: 'Participating Bridge Lending Program',
    description:
      "Oak's Participating Bridge program offering co-investment opportunities in commercial real estate bridge loans.",
  },
  {
    path: '/lending/fha-hud/hud-241a',
    title: 'HUD 241(a) Supplemental Loan Terms',
    description:
      'FHA/HUD 241(a) supplemental loan program terms for improvements to existing HUD-insured properties.',
  },
  {
    path: '/lending/fha-hud/hud-232-223a7',
    title: 'HUD 232/223(a)(7) Loan Terms',
    description:
      'FHA/HUD 232/223(a)(7) refinance loan program terms for existing HUD-insured healthcare facilities.',
  },
  {
    path: '/lending/fha-hud/hud-232-223f',
    title: 'HUD 232/223(f) Loan Terms',
    description:
      'FHA/HUD 232/223(f) loan program terms for acquisition or refinance of existing healthcare and senior living facilities.',
  },
  {
    path: '/lending/fha-hud/hud-232-221',
    title: 'HUD 232/221(d)4 Loan Terms',
    description:
      'FHA/HUD 232/221(d)4 loan program terms for new construction of healthcare and senior living facilities.',
  },
  {
    path: '/lending/fha-hud/hud-221',
    title: 'HUD 221(d)4 & 220 Loan Terms',
    description:
      'FHA/HUD 221(d)4 and 220 loan program terms for new construction and substantial rehabilitation of multifamily properties.',
  },
  {
    path: '/leadership/gary-bechtel',
    title: 'Gary Bechtel — Leadership',
    description:
      'Meet Gary Bechtel, a senior leader at Oak Real Estate Partners with decades of CRE lending experience.',
  },
  {
    path: '/leadership/paul-cleary',
    title: 'Paul Cleary — Leadership',
    description: 'Meet Paul Cleary, a key member of the Oak Real Estate Partners leadership team.',
  },
  {
    path: '/leadership/kevin-kennedy',
    title: 'Kevin Kennedy — Leadership',
    description: 'Meet Kevin Kennedy, a key member of the Oak Real Estate Partners leadership team.',
  },
  {
    path: '/leadership/raymond-davis',
    title: 'Raymond Davis — Leadership',
    description: 'Meet Raymond Davis, a key member of the Oak Real Estate Partners leadership team.',
  },
  {
    path: '/leadership/matthew-webster',
    title: 'Matthew Webster — Leadership',
    description: 'Meet Matthew Webster, a key member of the Oak Real Estate Partners leadership team.',
  },
  {
    path: '/leadership/robert-kaplan',
    title: 'Robert Kaplan — Leadership',
    description: 'Meet Robert Kaplan, a key member of the Oak Real Estate Partners leadership team.',
  },
  {
    path: '/leadership/thomas-mcgovern',
    title: 'Thomas A. McGovern — Leadership',
    description: 'Meet Thomas A. McGovern, a senior leader at Oak Real Estate Partners.',
  },
  {
    path: '/leadership/brook-scardina',
    title: 'Brook Scardina — Leadership',
    description: 'Meet Brook Scardina, a key member of the Oak Real Estate Partners leadership team.',
  },
  {
    path: '/oak-parallel-bridge-credit-fund',
    title: 'Oak Parallel Bridge Credit Fund — Onboarding',
    description:
      'Onboarding instructions for ERISA accounts including pension plans, IRAs, and qualified retirement accounts.',
  },
  {
    path: '/oak-institutional-credit-solutions',
    title: 'Oak Institutional Credit Solutions — Onboarding',
    description:
      'Onboarding instructions for non-ERISA accounts including foundations, endowments, insurance, and trust accounts.',
  },
  {
    path: '/news',
    title: 'News & Announcements',
    description:
      'Latest news and announcements from Oak Real Estate Partners. Stay updated on transactions, market insights, and company developments in commercial real estate lending.',
  },
  {
    path: '/blog',
    title: 'Blog - Insights & Articles',
    description:
      'Expert insights on commercial real estate lending, private equity strategies, and market trends from Oak Real Estate Partners. Articles on bridge loans, HUD financing, and investment opportunities.',
  },
  {
    path: '/webinars',
    title: 'Upcoming Webinars',
    description:
      'Browse and register for upcoming Oak Real Estate Partners webinars on investment strategy and market updates.',
  },
  {
    path: '/transactions',
    title: 'Transaction Portfolio',
    description:
      'Oak Real Estate Partners transaction history. Browse our portfolio of commercial real estate loans across multifamily, industrial, office, retail, and healthcare properties nationwide.',
  },
  {
    path: '/investor-education',
    title: 'Investor Education',
    description:
      "Educational video resources covering Oak Real Estate Partners' investment strategy, credit analysis, and risk management.",
  },
  {
    path: '/video',
    title: 'Video — Investor Education',
    description:
      'Watch educational content from Oak Real Estate Partners covering CRE lending and investment strategy.',
  },
  {
    path: '/blog/private-credit-lending-gap',
    title: "Private Equity's Role in the Current Lending Gap",
    description:
      'Explore how private equity is expanding to fill the lending gap left by traditional banks, and why special situation commercial real estate offers unique opportunities.',
  },
  {
    path: '/blog/oak-finds-opportunity',
    title: "How Oak Finds Opportunity Where Banks Can't",
    description:
      'Learn how Oak Real Estate Partners finds compelling investment opportunities in transitional commercial real estate. Special situation assets, conservative lending, and capital protection strategies.',
  },
  {
    path: '/news/philadelphia-midrise',
    title: 'Bridge Loan for Philadelphia Midrise',
    description:
      'The Oak Companies provides a bridge loan for a midrise commercial real estate property in Philadelphia.',
  },
  {
    path: '/news/atlanta-acquisition-loan',
    title: '$8.7M Multifamily Acquisition Loan in Atlanta',
    description:
      'Oak Capital provides an $8.7M acquisition loan for a multifamily property in the Atlanta metro area.',
  },
  {
    path: '/news/atlanta-financing',
    title: '$8.65M Financing for Atlanta Property',
    description:
      'The Oak Companies provides $8.65M in financing for an Atlanta commercial real estate property.',
  },
  {
    path: '/news/indianapolis-financing',
    title: '$10.3M Financing in Indianapolis',
    description:
      'The Oak Companies provides $10.30 million in financing for a commercial real estate property in Indianapolis.',
  },
  {
    path: '/news/extension-november-2024',
    title: 'Extension to November 30, 2024',
    description:
      'The Oak Companies announces an extension of its offering period to November 30, 2024.',
  },
  {
    path: '/news/dallas-deal-sheet',
    title: 'Dallas-Fort Worth Deal Sheet',
    description:
      "Oak Real Estate Partners featured in this week's Dallas-Fort Worth commercial real estate deal sheet.",
  },
  {
    path: '/news/extension-october-2024',
    title: 'Extension to October 31, 2024',
    description:
      'The Oak Companies announces an extension of its offering period to October 31, 2024.',
  },
  {
    path: '/news/extension-september-2024',
    title: 'Extension to September 30, 2024',
    description:
      'The Oak Companies announces an extension of its offering period to September 30, 2024.',
  },
  {
    path: '/news/extension-july-2024',
    title: 'Extension of Expiration Time Announced',
    description:
      'The Oak Companies announces an extension of the expiration time for its current offering period.',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy',
    description:
      'Oak Real Estate Partners privacy policy. Learn how we collect, use, and protect your personal information.',
  },
  {
    path: '/terms',
    title: 'Terms of Service',
    description:
      'Oak Real Estate Partners terms of service. Read the terms and conditions governing use of our website.',
  },
  {
    path: '/disclosures',
    title: 'Disclosures',
    description:
      'Oak Real Estate Partners disclosures and disclaimers. Important regulatory and legal information for investors.',
  },
  {
    path: '/disclaimer',
    title: 'Disclaimer',
    description:
      'Oak Real Estate Partners website disclaimer. Important information about the use of content on our website.',
  },
];
