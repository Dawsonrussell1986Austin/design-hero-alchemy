import SEOHead from "@/components/SEOHead";

const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };
const sans = { fontFamily: "'Manrope', sans-serif" };

const colors = {
  void: "#07090f",
  abyss: "#0d1119",
  deep: "#111827",
  midnight: "#1a2333",
  slate: "#2d3d56",
  steel: "#4a607e",
  mist: "#8da0b8",
  ivory: "#f0ece3",
  parchment: "#faf7f2",
  gold: "#c9a84c",
  goldWarm: "#dbb96a",
  goldPale: "#eddfa0",
  goldDark: "#8a6d28",
};

const AdCard = ({ children, bg, label }: { children: React.ReactNode; bg: string; label: string }) => (
  <div className="flex flex-col items-center gap-3">
    <span className="text-[10px] tracking-[0.3em] uppercase" style={{ ...sans, color: "#2a3040", fontWeight: 400 }}>{label}</span>
    <div
      className="w-[1080px] h-[1080px] flex-shrink-0 relative overflow-hidden"
      style={{ background: bg }}
    >
      {children}
    </div>
  </div>
);

const AdCreatives = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#050709", fontFamily: "'Manrope', sans-serif" }}>
      <SEOHead title="Ad Creatives" description="Social media ad designs for Oak Real Estate Partners" canonicalUrl="/ad-creatives" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=Manrope:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />

      <div className="px-8 py-16 text-center">
        <p className="text-[11px] tracking-[0.4em] uppercase" style={{ ...sans, color: "#333a44", fontWeight: 200 }}>
          Oak Real Estate Partners — Redesigned Social Ad Campaign · 1080 × 1080
        </p>
        <div className="w-10 h-[1px] mx-auto mt-3.5" style={{ backgroundColor: "#222" }} />
      </div>

      <div className="flex flex-col items-center gap-20 px-8 pb-24">

        {/* ═══ AD 1: When Markets Panic ═══ */}
        <AdCard bg={colors.void} label="Ad 1 · Market Protection · Instagram / LinkedIn">
          {/* Noise overlay */}
          <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`
          }} />
          {/* Chaos chart */}
          <div className="absolute bottom-[360px] left-0 right-0 h-[400px] opacity-[0.18]">
            <svg viewBox="0 0 540 200" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="chaosGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <polyline points="0,180 25,160 45,175 65,120 80,145 100,90 118,130 135,80 155,115 175,60 190,95 210,40 230,75 250,30 265,65 285,20 300,55 320,15 340,50 355,10 375,45 390,5 405,40 425,25 445,60 460,30 475,70 495,45 515,80 540,55" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinejoin="round"/>
              <polyline points="0,180 25,160 45,175 65,120 80,145 100,90 118,130 135,80 155,115 175,60 190,95 210,40 230,75 250,30 265,65 285,20 300,55 320,15 340,50 355,10 375,45 390,5 405,40 425,25 445,60 460,30 475,70 495,45 515,80 540,55 540,200 0,200" fill="url(#chaosGrad)" stroke="none"/>
            </svg>
          </div>
          {/* Stable gold line */}
          <div className="absolute bottom-[400px] left-0 right-0 h-1">
            <div className="absolute -top-[60px] left-0 right-0 h-[120px]" style={{ background: "linear-gradient(transparent, rgba(201,168,76,0.04), transparent)" }} />
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent 0%, ${colors.gold} 20%, ${colors.goldWarm} 50%, ${colors.gold} 80%, transparent 100%)`, boxShadow: `0 0 12px rgba(201,168,76,0.4), 0 0 40px rgba(201,168,76,0.12)` }} />
          </div>
          {/* Chart labels */}
          <div className="absolute right-[104px] bottom-[420px] flex flex-col gap-1.5 items-end">
            <span className="text-[16px] tracking-[0.3em] uppercase" style={{ ...sans, color: colors.gold, opacity: 0.8 }}>OREP Portfolio</span>
            <span className="text-[16px] tracking-[0.2em] uppercase" style={{ ...sans, color: "rgba(255,255,255,0.2)" }}>Public Markets</span>
          </div>
          {/* Content */}
          <div className="absolute inset-0 p-[100px] flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[18px] tracking-[0.4em] uppercase" style={{ ...sans, color: colors.gold, fontWeight: 500, opacity: 0.8 }}>Oak Real Estate Partners</span>
              <div className="w-[64px] h-[64px] flex items-center justify-center" style={{ border: `1px solid rgba(201,168,76,0.3)` }}>
                <div className="w-[32px] h-[32px] rotate-45" style={{ border: `1px solid rgba(201,168,76,0.5)` }} />
              </div>
            </div>
            <div>
              <h2 style={{ ...serif, fontSize: "116px", fontWeight: 300, lineHeight: 1.0, color: "#fff", letterSpacing: "-0.02em" }}>
                When markets<br/><em style={{ fontStyle: "italic", color: colors.goldWarm, fontWeight: 300 }}>panic,</em><br/>yours doesn't.
              </h2>
              <p className="mt-10 max-w-[600px]" style={{ ...sans, fontSize: "22px", fontWeight: 300, color: colors.mist, lineHeight: 1.7, opacity: 0.75, letterSpacing: "0.02em" }}>
                Senior-secured, first-lien positions on income-producing real assets. Uncorrelated to public equity markets. Backed by property you can see and value.
              </p>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-[2px] mb-5" style={{ backgroundColor: colors.gold, opacity: 0.6 }} />
                <span style={{ ...serif, fontSize: "72px", fontWeight: 300, color: colors.goldWarm, lineHeight: 1, letterSpacing: "-0.02em" }}>$25B+</span>
                <span className="text-[16px] tracking-[0.25em] uppercase mt-1" style={{ ...sans, color: colors.steel, fontWeight: 400 }}>35 Years · 8 Cycles</span>
              </div>
              <div className="text-right">
                <span className="block text-[26px] tracking-[0.12em] uppercase" style={{ ...serif, fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>Oak Real Estate Partners</span>
                <span className="block text-[16px] tracking-[0.25em] uppercase mt-2" style={{ ...sans, fontWeight: 300, color: colors.steel }}>Financial Services Company · Senior Secured</span>
              </div>
            </div>
          </div>
        </AdCard>

        {/* ═══ AD 2: You Deserve to Know ═══ */}
        <AdCard bg={colors.parchment} label="Ad 2 · Transparency & Clarity · Instagram / LinkedIn">
          {/* Gold left bar */}
          <div className="absolute top-0 left-0 bottom-0 w-[6px]" style={{ background: `linear-gradient(180deg, ${colors.gold} 0%, ${colors.goldWarm} 50%, ${colors.goldDark} 100%)` }} />
          {/* Grid overlay */}
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)", backgroundSize: "120px 120px" }} />
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "104px 104px 96px 124px" }}>
            <div>
              <span className="text-[18px] tracking-[0.4em] uppercase mb-10 block" style={{ ...sans, color: colors.goldDark, fontWeight: 500 }}>Oak Real Estate Partners</span>
              <h2 style={{ ...serif, fontSize: "104px", fontWeight: 300, lineHeight: 1.0, color: colors.void, letterSpacing: "-0.02em" }}>
                You deserve<br/>to know <em style={{ fontStyle: "italic", color: colors.slate }}>exactly</em><br/>what you own.
              </h2>
            </div>
            <div className="pl-8 max-w-[680px]" style={{ borderLeft: `4px solid ${colors.gold}` }}>
              <p style={{ ...serif, fontSize: "28px", fontStyle: "italic", fontWeight: 400, color: colors.slate, lineHeight: 1.6 }}>
                Every OREP loan is secured by a specific, identifiable property — not a black box. Institutional underwriting. No hidden leverage. No "2 and 20" fee drag that erodes your returns.
              </p>
            </div>
            <div>
              <div className="w-full h-[2px] mb-12" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.15) 0%, transparent 100%)" }} />
              <div className="grid grid-cols-3">
                {[
                  { val: "1st Lien", label: "Senior-Secured\nOnly" },
                  { val: "No Blind\nPool", label: "Full Asset\nVisibility" },
                  { val: "12–36 Mo", label: "Bridge Loan\nDuration" },
                ].map((p, i) => (
                  <div key={i} className="flex flex-col gap-3" style={{ padding: "0 40px", borderRight: i < 2 ? "1px solid rgba(0,0,0,0.08)" : "none", paddingLeft: i === 0 ? "0" : "40px" }}>
                    <span className="whitespace-pre-line" style={{ ...serif, fontSize: "48px", fontWeight: 600, color: colors.void, lineHeight: 1.0, letterSpacing: "-0.01em" }}>{p.val}</span>
                    <span className="whitespace-pre-line text-[16px] tracking-[0.18em] uppercase" style={{ ...sans, fontWeight: 400, color: colors.steel, lineHeight: 1.5 }}>{p.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <span className="block text-[26px] tracking-[0.12em] uppercase" style={{ ...serif, fontWeight: 600, color: colors.void }}>Oak Real Estate Partners</span>
                <span className="block text-[16px] tracking-[0.22em] uppercase mt-1.5" style={{ ...sans, fontWeight: 300, color: colors.steel }}>Institutional · Transparent · Aligned</span>
              </div>
              <span className="text-[18px] tracking-[0.3em] uppercase pb-1.5" style={{ ...sans, fontWeight: 500, color: colors.goldDark, borderBottom: `2px solid ${colors.gold}` }}>Learn More →</span>
            </div>
          </div>
        </AdCard>

        {/* ═══ AD 3: Institutional Co-Investment ═══ */}
        <AdCard bg={colors.abyss} label="Ad 3 · Institutional Co-Investment · Instagram / LinkedIn">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")` }} />
          {/* Top gold rule */}
          <div className="absolute top-0 left-0 right-0 h-[4px]" style={{ background: `linear-gradient(90deg, transparent 0%, ${colors.gold} 30%, ${colors.goldWarm} 50%, ${colors.gold} 70%, transparent 100%)` }} />
          {/* Bottom rule */}
          <div className="absolute left-[104px] right-[104px] h-[2px]" style={{ bottom: "220px", backgroundColor: "rgba(201,168,76,0.15)" }} />
          {/* Footer bg */}
          <div className="absolute bottom-0 left-0 right-0 h-[220px]" style={{ backgroundColor: "rgba(0,0,0,0.4)", borderTop: "1px solid rgba(201,168,76,0.08)" }} />
          {/* Content */}
          <div className="absolute inset-0 flex flex-col" style={{ padding: "104px 104px 0" }}>
            <div className="flex items-center gap-6 mb-12">
              <div className="w-10 h-[2px]" style={{ backgroundColor: colors.gold, opacity: 0.6 }} />
              <span className="text-[18px] tracking-[0.38em] uppercase" style={{ ...sans, fontWeight: 500, color: colors.gold, opacity: 0.8 }}>Institutional-Grade Financial Services</span>
            </div>
            <h2 className="max-w-[680px]" style={{ ...serif, fontSize: "92px", fontWeight: 300, lineHeight: 1.02, color: "#fff", letterSpacing: "-0.02em" }}>
              Your capital,<br/>invested alongside<br/><em style={{ fontStyle: "italic", color: colors.goldWarm }}>insurance companies,</em><br/><em style={{ fontStyle: "italic", color: colors.goldWarm }}>foundations &amp; endowments.</em>
            </h2>
            {/* Metrics */}
            <div className="grid grid-cols-4 mt-auto mb-12" style={{ backgroundColor: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.12)" }}>
              {[
                { val: "$25B+", label: "Total\nFinanced" },
                { val: "8", label: "Market\nCycles" },
                { val: "35 Yrs", label: "Principal\nExperience" },
                { val: "$400M+", label: "Assets Under\nManagement" },
              ].map((m, i) => (
                <div key={i} className="flex flex-col gap-2.5" style={{ padding: "36px 32px", borderRight: i < 3 ? "1px solid rgba(201,168,76,0.1)" : "none" }}>
                  <span style={{ ...serif, fontSize: "48px", fontWeight: 600, color: colors.goldWarm, lineHeight: 1, letterSpacing: "-0.01em" }}>{m.val}</span>
                  <span className="whitespace-pre-line text-[15px] tracking-[0.15em] uppercase" style={{ ...sans, fontWeight: 400, color: colors.mist, opacity: 0.6, lineHeight: 1.4 }}>{m.label}</span>
                </div>
              ))}
            </div>
            <p className="max-w-[760px] mb-9" style={{ ...sans, fontSize: "23px", fontWeight: 300, color: colors.mist, lineHeight: 1.7, opacity: 0.7 }}>
              OREP originates, underwrites, and services commercial real estate loans for <strong style={{ color: colors.ivory, fontWeight: 500, opacity: 1 }}>insurance companies, foundations, and endowments</strong> — among the most stable, capital-disciplined enterprises in the world. As an Oak Real Estate Partners investor, <strong style={{ color: colors.ivory, fontWeight: 500, opacity: 1 }}>your capital is placed in the same senior-secured, first-lien positions as theirs.</strong>
            </p>
          </div>
          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 h-[220px] flex items-center justify-between" style={{ padding: "0 104px" }}>
            <div>
              <span className="block text-[26px] tracking-[0.12em] uppercase" style={{ ...serif, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>Oak Real Estate Partners</span>
              <span className="block text-[16px] tracking-[0.2em] uppercase mt-2" style={{ ...sans, fontWeight: 300, color: colors.steel }}>Affiliated with Red Oak Capital Holdings</span>
            </div>
            <p className="text-right max-w-[400px]" style={{ ...sans, fontSize: "15px", fontWeight: 300, color: "rgba(255,255,255,0.18)", lineHeight: 1.5 }}>
              For accredited investors only.<br/>Past performance does not guarantee future results.
            </p>
          </div>
        </AdCard>

        {/* ═══ AD 4: We've Been Here Before (Timeline) ═══ */}
        <AdCard bg={colors.ivory} label="Ad 4 · Track Record & Experience · Instagram / LinkedIn">
          {/* Background "8" */}
          <div className="absolute bottom-[200px] -right-10 select-none pointer-events-none" style={{ ...serif, fontSize: "480px", fontWeight: 700, color: "rgba(0,0,0,0.03)", lineHeight: 1 }}>8</div>
          {/* Vertical gold rule */}
          <div className="absolute left-[104px] top-[104px] bottom-[230px] w-[2px]" style={{ background: `linear-gradient(180deg, ${colors.gold} 0%, rgba(201,168,76,0.1) 100%)` }} />
          {/* Content */}
          <div className="absolute inset-0 flex flex-col" style={{ padding: "104px 104px 0 156px" }}>
            <span className="text-[18px] tracking-[0.38em] uppercase mb-10" style={{ ...sans, fontWeight: 500, color: colors.goldDark }}>35 Years · $25 Billion · 8 Market Cycles</span>
            <h2 className="max-w-[680px]" style={{ ...serif, fontSize: "100px", fontWeight: 300, lineHeight: 1.0, color: colors.void, letterSpacing: "-0.02em" }}>
              We've been<br/>here before.<br/><em style={{ fontStyle: "italic", color: colors.slate }}>We know the<br/>way through.</em>
            </h2>
            <div className="flex flex-col mt-14 flex-1">
              {[
                { year: "'90", event: "S&L Crisis" },
                { year: "'00", event: "Dot-Com Collapse" },
                { year: "'08", event: "Global Financial Crisis" },
                { year: "'20", event: "COVID-19 Shock" },
                { year: "'22", event: "Rate Shock & Liquidity Crisis" },
                { year: "Now", event: "What's Next — Navigated the Same", last: true },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-7 relative" style={{ padding: "14px 0" }}>
                  <div className="absolute flex-shrink-0" style={{
                    left: "-64px",
                    width: c.last ? "16px" : "12px",
                    height: c.last ? "16px" : "12px",
                    borderRadius: "50%",
                    backgroundColor: c.last ? colors.goldWarm : colors.gold,
                    boxShadow: c.last ? "0 0 10px rgba(201,168,76,0.5)" : "0 0 6px rgba(201,168,76,0.4)",
                  }} />
                  <span className="min-w-[64px]" style={{ ...sans, fontSize: "18px", fontWeight: c.last ? 700 : 600, letterSpacing: "0.1em", color: c.last ? colors.void : colors.goldDark }}>{c.year}</span>
                  <span style={{ ...sans, fontSize: "20px", fontWeight: c.last ? 500 : 300, color: c.last ? colors.void : colors.slate, letterSpacing: "0.02em" }}>{c.event}</span>
                </div>
              ))}
              <div className="w-full h-[2px] mt-8" style={{ backgroundColor: "rgba(0,0,0,0.08)" }} />
            </div>
          </div>
          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 h-[220px]" style={{ backgroundColor: colors.void }} />
          <div className="absolute bottom-0 left-0 right-0 h-[220px] flex items-center justify-between" style={{ padding: "0 104px" }}>
            <div>
              <span className="block text-[26px] tracking-[0.12em] uppercase" style={{ ...serif, fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>Oak Real Estate Partners</span>
              <span className="block text-[16px] tracking-[0.22em] uppercase mt-2" style={{ ...sans, fontWeight: 300, color: colors.steel }}>Protected Capital · Proven Experience · Real Assets</span>
            </div>
            <div className="flex gap-12">
              {[
                { val: "$25B+", label: "Financed" },
                { val: "$400M", label: "AUM" },
              ].map((s, i) => (
                <div key={i} className="text-right">
                  <span className="block" style={{ ...serif, fontSize: "44px", fontWeight: 600, color: colors.goldWarm, lineHeight: 1, letterSpacing: "-0.01em" }}>{s.val}</span>
                  <span className="block text-[15px] tracking-[0.2em] uppercase mt-1.5" style={{ ...sans, fontWeight: 300, color: colors.steel, opacity: 0.7 }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AdCard>

        {/* ═══ AD 5: 79% Research-Led ═══ */}
        <AdCard bg={colors.deep} label="Ad 5 · Research-Led Fear Hook · Instagram / LinkedIn">
          <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")` }} />
          {/* Big ghosted 79% */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[54%] whitespace-nowrap select-none pointer-events-none" style={{ ...serif, fontSize: "400px", fontWeight: 700, fontStyle: "italic", color: "transparent", WebkitTextStroke: "2px rgba(201,168,76,0.12)", letterSpacing: "-0.05em", lineHeight: 1 }}>79%</div>
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "104px" }}>
            <div className="flex justify-between items-start">
              <span className="text-[18px] tracking-[0.38em] uppercase" style={{ ...sans, fontWeight: 500, color: colors.gold, opacity: 0.8 }}>Oak Real Estate Partners</span>
            </div>
            <div>
              <div className="text-center relative z-[2]">
                <span style={{ ...serif, fontSize: "192px", fontWeight: 300, fontStyle: "italic", color: "#fff", lineHeight: 1, letterSpacing: "-0.03em" }}>
                  79<span style={{ fontSize: "120px", color: colors.goldWarm }}>%</span>
                </span>
                <p className="mt-4 text-[20px] tracking-[0.15em] uppercase" style={{ ...sans, fontWeight: 300, color: colors.mist, lineHeight: 1.6, opacity: 0.7 }}>
                  of institutional investors expect<br/>a market correction in 2026.
                </p>
              </div>
              <div className="w-[120px] h-[2px] mt-12 mb-12" style={{ background: `linear-gradient(90deg, ${colors.gold}, transparent)` }} />
              <div className="max-w-[680px]">
                <h3 style={{ ...serif, fontSize: "56px", fontWeight: 300, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
                  Be in the <em style={{ fontStyle: "italic", color: colors.goldWarm }}>21%</em> who<br/>already moved their capital<br/>to safer ground.
                </h3>
                <p className="mt-6" style={{ ...sans, fontSize: "21px", fontWeight: 300, color: colors.mist, lineHeight: 1.7, opacity: 0.65 }}>
                  Your capital, placed in senior-secured, first-lien positions alongside insurance companies, foundations, and endowments — the same institutions built to weather every cycle. Uncorrelated to public equity. No blind pool. No hidden leverage.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <span className="block text-[26px] tracking-[0.12em] uppercase" style={{ ...serif, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>Oak Real Estate Partners</span>
                <span className="block text-[16px] tracking-[0.22em] uppercase mt-2" style={{ ...sans, fontWeight: 300, color: colors.steel }}>Financial Services Company · Senior Secured · Real Assets</span>
              </div>
              <p className="text-right" style={{ ...sans, fontSize: "15px", fontWeight: 300, color: "rgba(255,255,255,0.15)", letterSpacing: "0.05em" }}>
                Source: Institutional<br/>Investor Survey 2026<br/>For accredited investors only.
              </p>
            </div>
          </div>
        </AdCard>

        {/* ═══ AD 6: $300B Market Gap ═══ */}
        <AdCard bg={colors.void} label="Ad 6 · CRE Lending Gap · Instagram / LinkedIn">
          <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`
          }} />
          {/* Ghost text */}
          <div className="absolute top-[80px] right-[-40px] select-none pointer-events-none" style={{ ...serif, fontSize: "400px", fontWeight: 700, color: "rgba(255,255,255,0.025)", lineHeight: 1 }}>$300B</div>
          <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "104px" }}>
            <div className="flex justify-between items-start">
              <span className="text-[18px] tracking-[0.4em] uppercase" style={{ ...sans, color: colors.gold, fontWeight: 500, opacity: 0.8 }}>Oak Real Estate Partners</span>
              <div className="w-[48px] h-[48px] flex items-center justify-center" style={{ border: "1px solid rgba(201,168,76,0.3)" }}>
                <div className="w-[24px] h-[24px] rotate-45" style={{ border: "1px solid rgba(201,168,76,0.5)" }} />
              </div>
            </div>
            <div>
              <span className="text-[18px] tracking-[0.3em] uppercase block mb-4" style={{ ...sans, color: colors.gold, fontWeight: 500, opacity: 0.8 }}>Annual CRE Lending Gap</span>
              <h2 style={{ ...serif, fontSize: "180px", fontWeight: 300, lineHeight: 0.9, color: colors.ivory, letterSpacing: "-0.02em" }}>$300B</h2>
              <div className="mt-8">
                <span className="block" style={{ ...serif, fontSize: "72px", fontWeight: 300, lineHeight: 1.1, color: colors.ivory }}>Banks retreated.</span>
                <span className="block" style={{ ...serif, fontSize: "72px", fontWeight: 300, fontStyle: "italic", lineHeight: 1.1, color: colors.goldWarm }}>We didn't.</span>
              </div>
              <p className="mt-10 max-w-[700px]" style={{ ...sans, fontSize: "22px", fontWeight: 300, color: colors.mist, lineHeight: 1.7, opacity: 0.75 }}>
                $3 trillion in CRE loans maturing in the next three years. Banks are permanently pulling back from small-balance commercial lending. Oak fills the gap with institutional-grade underwriting on the loans no one else will touch.
              </p>
            </div>
            <div>
              <div className="w-full h-[2px] mb-10" style={{ backgroundColor: "rgba(201,168,76,0.15)" }} />
              <div className="grid grid-cols-3 gap-0">
                {[
                  { val: "$2–$20M", label: "Loan Size\nSweet Spot" },
                  { val: "88%", label: "Market Still Held\nby Retreating Banks" },
                  { val: "$8.3B", label: "Pipeline Evaluated\nin 2025" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col gap-2" style={{ borderRight: i < 2 ? "1px solid rgba(201,168,76,0.1)" : "none", paddingRight: i < 2 ? "40px" : "0", paddingLeft: i > 0 ? "40px" : "0" }}>
                    <span style={{ ...serif, fontSize: "44px", fontWeight: 300, color: colors.ivory, lineHeight: 1 }}>{s.val}</span>
                    <span className="whitespace-pre-line text-[14px] tracking-[0.12em] uppercase" style={{ ...sans, fontWeight: 400, color: colors.gold, opacity: 0.7 }}>{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="w-full h-[2px] mt-10 mb-6" style={{ backgroundColor: "rgba(199,167,76,0.2)" }} />
              <span className="text-[16px] tracking-[0.15em]" style={{ ...sans, color: colors.gold, fontWeight: 400, opacity: 0.7 }}>oakrepartners.com</span>
              <div className="w-full h-[2px] mt-6 mb-4" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
              <div>
                <span className="block text-[20px]" style={{ ...sans, fontWeight: 600, color: colors.ivory }}>Oak Real Estate Partners</span>
                <span className="block text-[14px] tracking-[0.15em] uppercase mt-1" style={{ ...sans, fontWeight: 300, color: colors.steel }}>Institutional CRE Lending · Senior Secured · Real Assets</span>
              </div>
            </div>
          </div>
        </AdCard>

        {/* ═══ AD 7: Fee Trap ═══ */}
        <AdCard bg={colors.parchment} label="Ad 7 · Fee Structure Comparison · Instagram / LinkedIn">
          <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "104px" }}>
            <div>
              <div className="w-[80px] h-[4px] mb-4" style={{ backgroundColor: colors.gold }} />
              <span className="text-[18px] tracking-[0.35em] uppercase" style={{ ...sans, color: colors.slate, fontWeight: 400 }}>Oak Real Estate Partners</span>
            </div>
            <div>
              <h2 style={{ ...serif, fontSize: "92px", fontWeight: 300, lineHeight: 1.05, color: colors.void, letterSpacing: "-0.02em" }}>
                Your returns<br/>shouldn't fund<br/><em style={{ fontStyle: "italic", color: colors.goldDark }}>someone else's<br/>carry.</em>
              </h2>
            </div>
            {/* Comparison boxes */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-10" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
                <span className="block text-[20px] mb-4" style={{ ...sans, fontWeight: 600, color: colors.void }}>Typical PE Fund</span>
                {["2% management fee", "20% carried interest", "10–12 year lock-up", "Blind pool allocation"].map((t) => (
                  <p key={t} className="text-[18px] leading-[2]" style={{ ...sans, fontWeight: 300, color: colors.slate }}>{t}</p>
                ))}
              </div>
              <div className="p-10" style={{ backgroundColor: colors.void }}>
                <span className="block text-[20px] mb-4" style={{ ...sans, fontWeight: 600, color: colors.goldWarm }}>Oak Real Estate Partners</span>
                {["Transparent, aligned fees", "No carried interest drag", "12–36 month duration", "Named collateral on every loan"].map((t) => (
                  <p key={t} className="text-[18px] leading-[2]" style={{ ...sans, fontWeight: 300, color: colors.ivory }}>{t}</p>
                ))}
              </div>
            </div>
            <p className="max-w-[700px]" style={{ ...sans, fontSize: "22px", fontWeight: 300, fontStyle: "italic", color: colors.slate, lineHeight: 1.7 }}>
              Every basis point matters. We built a fee structure that aligns our interests with yours — not the other way around.
            </p>
            <div className="flex justify-between items-end">
              <div>
                <span className="block text-[20px]" style={{ ...sans, fontWeight: 600, color: colors.void }}>Oak Real Estate Partners</span>
                <span className="block text-[14px] tracking-[0.15em] uppercase mt-1" style={{ ...sans, fontWeight: 300, color: colors.steel }}>Institutional CRE Lending · Senior Secured · Real Assets</span>
              </div>
              <span className="text-[16px] tracking-[0.3em] uppercase pb-1" style={{ ...sans, fontWeight: 500, color: colors.goldDark, borderBottom: `2px solid ${colors.gold}` }}>Learn More</span>
            </div>
          </div>
        </AdCard>

        {/* ═══ AD 8: Liquidity / Capital Trapped ═══ */}
        <AdCard bg={colors.void} label="Ad 8 · Liquidity Advantage · Instagram / LinkedIn">
          <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`
          }} />
          <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "104px" }}>
            <span className="text-[18px] tracking-[0.4em] uppercase" style={{ ...sans, color: colors.gold, fontWeight: 500, opacity: 0.8 }}>Oak Real Estate Partners</span>
            <div>
              <h2 style={{ ...serif, fontSize: "100px", fontWeight: 300, lineHeight: 1.05, color: colors.ivory, letterSpacing: "-0.02em" }}>
                Your capital<br/>shouldn't be<br/><em style={{ fontStyle: "italic", color: colors.goldWarm }}>trapped</em><br/>for a decade.
              </h2>
            </div>
            {/* Duration comparison bars */}
            <div>
              <div className="w-full p-5 mb-1" style={{ backgroundColor: colors.slate }}>
                <span className="text-[18px] tracking-[0.12em]" style={{ ...sans, fontWeight: 400, color: colors.goldWarm }}>Typical PE Lock-up: 10–12 Years</span>
              </div>
              <div className="flex items-center text-[14px] tracking-[0.1em] mb-4" style={{ ...sans, color: colors.mist, opacity: 0.5 }}>
                {[0, 2, 4, 6, 8, 10].map((n) => (
                  <span key={n} className="flex-1 text-center">{n}</span>
                ))}
              </div>
              <div className="flex items-center gap-8">
                <div className="py-4 px-6" style={{ backgroundColor: colors.goldDark, width: "30%" }}>
                  <span className="text-[18px]" style={{ ...sans, fontWeight: 500, color: "#fff" }}>Oak: 12–36 Months</span>
                </div>
                <p style={{ ...serif, fontSize: "32px", fontWeight: 300, fontStyle: "italic", color: colors.goldWarm, lineHeight: 1.3 }}>
                  Capital returned.<br/>Reinvested. Compounding.
                </p>
              </div>
            </div>
            <div>
              <p className="max-w-[700px] mb-10" style={{ ...sans, fontSize: "20px", fontWeight: 300, color: colors.mist, lineHeight: 1.7, opacity: 0.75 }}>
                Short-duration bridge loans that self-liquidate in 12–36 months.<br/>
                No capital calls years into the future. No delayed exits.<br/>
                Your money works — and comes back — on your timeline.
              </p>
              <div className="w-full h-[2px] mb-8" style={{ backgroundColor: "rgba(201,168,76,0.15)" }} />
              <div className="grid grid-cols-4 gap-0">
                {[
                  { val: "12–36 Mo", label: "Loan Duration" },
                  { val: "SOFR+", label: "Floating Rate" },
                  { val: "$50K", label: "Minimum" },
                  { val: "Quarterly", label: "Distributions" },
                ].map((s, i) => (
                  <div key={i}>
                    <span className="block" style={{ ...serif, fontSize: "40px", fontWeight: 300, color: colors.ivory, lineHeight: 1 }}>{s.val}</span>
                    <span className="block text-[14px] tracking-[0.12em] uppercase mt-2" style={{ ...sans, fontWeight: 400, color: colors.gold, opacity: 0.7 }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="w-full h-[2px] mb-4" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
              <span className="block text-[20px]" style={{ ...sans, fontWeight: 600, color: colors.ivory }}>Oak Real Estate Partners</span>
              <span className="block text-[14px] tracking-[0.15em] uppercase mt-1" style={{ ...sans, fontWeight: 300, color: colors.steel }}>Institutional CRE Lending · Senior Secured · Real Assets</span>
            </div>
          </div>
        </AdCard>

        {/* ═══ AD 9: Crisis Proof / $40.5M ═══ */}
        <AdCard bg={colors.parchment} label="Ad 9 · Crisis-Proof Track Record · Instagram / LinkedIn">
          <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "104px" }}>
            <div className="flex items-center gap-6">
              <div className="w-[60px] h-[4px]" style={{ backgroundColor: colors.gold }} />
              <span className="text-[18px] tracking-[0.35em] uppercase" style={{ ...sans, fontWeight: 400, color: colors.slate }}>Net Profit · 33 Full-Cycle Loans</span>
            </div>
            <div>
              <h2 style={{ ...serif, fontSize: "160px", fontWeight: 300, lineHeight: 0.9, color: colors.void, letterSpacing: "-0.03em" }}>$40.5M</h2>
              <span className="block mt-2" style={{ ...serif, fontSize: "72px", fontWeight: 300, fontStyle: "italic", color: colors.goldDark, lineHeight: 1.1 }}>Through everything.</span>
            </div>
            {/* Crisis cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { title: "COVID-19", year: "2020", desc: "Global shutdown.\nEvery dollar returned." },
                { title: "Rate Shock", year: "2022–23", desc: "Fastest hiking cycle\nin modern history." },
                { title: "Geopolitical", year: "2022–26", desc: "Ongoing disruption.\nPortfolio held firm." },
              ].map((c) => (
                <div key={c.title} className="p-8" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <span className="block text-[20px]" style={{ ...sans, fontWeight: 700, color: colors.void }}>{c.title}</span>
                  <span className="block text-[16px] mt-1 mb-4" style={{ ...sans, fontWeight: 400, color: colors.goldDark }}>{c.year}</span>
                  <p className="whitespace-pre-line text-[16px]" style={{ ...sans, fontWeight: 300, color: colors.slate, lineHeight: 1.5 }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <div className="w-full h-[3px]" style={{ backgroundColor: colors.gold, opacity: 0.3 }} />
            {/* Stats */}
            <div className="grid grid-cols-4 gap-0">
              {[
                { val: "19%", label: "Net IRR\n(Unlevered)" },
                { val: "1.22x", label: "Net\nMOIC" },
                { val: "100%", label: "Capital\nRecovery" },
                { val: "33", label: "Full-Cycle\nLoans" },
              ].map((s) => (
                <div key={s.val}>
                  <span className="block" style={{ ...serif, fontSize: "52px", fontWeight: 300, color: colors.void, lineHeight: 1 }}>{s.val}</span>
                  <span className="whitespace-pre-line block text-[14px] tracking-[0.1em] uppercase mt-2" style={{ ...sans, fontWeight: 400, color: colors.steel }}>{s.label}</span>
                </div>
              ))}
            </div>
            <p className="max-w-[700px]" style={{ ...sans, fontSize: "20px", fontWeight: 300, fontStyle: "italic", color: colors.slate, lineHeight: 1.7 }}>
              Not hypothetical. Not back-tested. Real capital deployed, real returns delivered, through the worst conditions of the last two decades. Senior-secured, first-lien positions on income-producing commercial real estate.
            </p>
            <div className="flex justify-between items-end">
              <div>
                <span className="block text-[20px]" style={{ ...sans, fontWeight: 600, color: colors.void }}>Oak Real Estate Partners</span>
                <span className="block text-[14px] tracking-[0.15em] uppercase mt-1" style={{ ...sans, fontWeight: 300, color: colors.steel }}>Institutional CRE Lending · Senior Secured · Real Assets</span>
              </div>
              <span className="text-[16px]" style={{ ...sans, fontWeight: 400, color: colors.goldDark }}>oakrepartners.com</span>
            </div>
          </div>
        </AdCard>

        {/* ═══ AD 10: Named Collateral ═══ */}
        <AdCard bg={colors.void} label="Ad 10 · Named Collateral · Instagram / LinkedIn">
          <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`
          }} />
          <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "104px" }}>
            <span className="text-[18px] tracking-[0.4em] uppercase" style={{ ...sans, color: colors.gold, fontWeight: 500, opacity: 0.8 }}>Oak Real Estate Partners</span>
            <div>
              <h2 style={{ ...serif, fontSize: "110px", fontWeight: 300, lineHeight: 1.05, color: colors.ivory, letterSpacing: "-0.02em" }}>
                Every dollar<br/>has an<br/><em style={{ fontStyle: "italic", color: colors.goldWarm }}>address.</em>
              </h2>
            </div>
            {/* Sample position table */}
            <div style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
              <div className="px-8 py-4" style={{ borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
                <span className="text-[16px] tracking-[0.2em] uppercase" style={{ ...sans, fontWeight: 400, color: colors.gold }}>Sample Position</span>
              </div>
              <div className="grid grid-cols-4">
                {[
                  { label: "Asset", val: "Mixed-Use\nRetail/Office" },
                  { label: "Position", val: "Senior Secured\n1st Lien" },
                  { label: "LTV", val: "62%\nStabilized" },
                  { label: "Term", val: "24 Months\nSOFR + Spread" },
                ].map((c, i) => (
                  <div key={i} className="p-8" style={{ backgroundColor: "rgba(13,17,25,0.8)", borderRight: i < 3 ? "1px solid rgba(201,168,76,0.1)" : "none" }}>
                    <span className="block text-[14px] tracking-[0.12em] uppercase mb-3" style={{ ...sans, fontWeight: 400, color: colors.gold, opacity: 0.7 }}>{c.label}</span>
                    <span className="whitespace-pre-line block text-[22px]" style={{ ...sans, fontWeight: 500, color: colors.ivory, lineHeight: 1.4 }}>{c.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="max-w-[700px]" style={{ ...sans, fontSize: "20px", fontWeight: 300, color: colors.mist, lineHeight: 1.7, opacity: 0.75 }}>
              No blind pools. No "black box" allocations. Every loan is backed by a specific, identifiable commercial property with institutional underwriting. You know the address, the collateral, and the capital stack — before you invest.
            </p>
            <div>
              <div className="w-[200px] h-[3px] mb-4" style={{ backgroundColor: colors.gold, opacity: 0.4 }} />
              <p style={{ ...serif, fontSize: "36px", fontWeight: 300, fontStyle: "italic", color: colors.goldWarm, lineHeight: 1.3 }}>Not a promise. A structure.</p>
            </div>
            <div>
              <div className="w-full h-[2px] mb-4" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
              <span className="block text-[20px]" style={{ ...sans, fontWeight: 600, color: colors.ivory }}>Oak Real Estate Partners</span>
              <span className="block text-[14px] tracking-[0.15em] uppercase mt-1" style={{ ...sans, fontWeight: 300, color: colors.steel }}>Institutional CRE Lending · Senior Secured · Real Assets</span>
            </div>
          </div>
        </AdCard>

      </div>
    </div>
  );
};

export default AdCreatives;
