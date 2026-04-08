import SEOHead from "@/components/SEOHead";

const display = { fontFamily: "'Playfair Display', Georgia, serif" };
const sans = { fontFamily: "'Lato', sans-serif" };

const AdCard = ({ children }: { children: React.ReactNode }) => (
  <div
    className="w-[1080px] h-[1080px] flex-shrink-0 relative overflow-hidden"
    style={{ background: "linear-gradient(135deg, #060D14, #082233, #233F52)" }}
  >
    {children}
  </div>
);

const AdCreatives = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A1520" }}>
      <SEOHead title="Ad Creatives" description="Social media ad designs for Oak Real Estate Partners" canonicalUrl="/ad-creatives" />

      {/* Header */}
      <div className="px-8 py-12 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{ ...sans, color: "#C7A74C", fontWeight: 500 }}>Internal Assets</p>
        <h1 className="text-3xl font-light" style={{ ...display, color: "#FAF7F2" }}>Ad Creatives — 1080 × 1080</h1>
        <p className="text-sm mt-3" style={{ ...sans, color: "#6C7D80" }}>Right-click any ad to save. Each is exactly 1080×1080px.</p>
      </div>

      {/* Ad Grid */}
      <div className="flex flex-col items-center gap-16 px-8 pb-24">

        {/* ═══ AD 1: The Big Stat ═══ */}
        <AdCard>
          {/* Watermark */}
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 select-none pointer-events-none" style={{ opacity: 0.03 }}>
            <span className="text-[42rem] font-light leading-none block" style={{ ...display, color: "#E4E3E1" }}>79</span>
          </div>
          <div className="relative z-10 flex flex-col justify-between h-full p-16">
            <div className="flex justify-between items-start">
              <img src="/lovable-uploads/white_oak.png" alt="Oak" className="h-10 w-auto" />
              <p className="text-[9px] tracking-[0.4em] uppercase" style={{ ...sans, color: "#C7A74C", fontWeight: 500 }}>2026 Investor Data</p>
            </div>
            <div className="text-center">
              <h2 className="text-[12rem] font-light leading-[0.85] tracking-tight" style={{ ...display, color: "#FAF7F2", letterSpacing: "-0.03em" }}>79%</h2>
              <p className="text-3xl leading-[1.15] mt-6 font-light max-w-[700px] mx-auto" style={{ ...display, color: "#FAF7F2" }}>
                of institutional investors expect a market correction in <em style={{ color: "#D4B35C", fontWeight: 300 }}>2026.</em>
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm leading-[1.6] max-w-[480px] mx-auto" style={{ ...sans, color: "#6C7D80", fontWeight: 400 }}>
                Are you structured for what's coming — or just hoping it won't?
              </p>
              <div className="mt-8 inline-flex items-center gap-3 py-3 px-10 text-[11px] tracking-[0.3em] uppercase" style={{ ...sans, backgroundColor: "#C7A74C", color: "#060D14", fontWeight: 600 }}>
                Get the Full Report
              </div>
            </div>
          </div>
        </AdCard>

        {/* ═══ AD 2: Three Stats ═══ */}
        <AdCard>
          <div className="relative z-10 flex flex-col justify-between h-full p-16">
            <div>
              <img src="/lovable-uploads/white_oak.png" alt="Oak" className="h-10 w-auto" />
              <p className="text-[9px] tracking-[0.4em] uppercase mt-6" style={{ ...sans, color: "#C7A74C", fontWeight: 500 }}>The Numbers Behind the Shift</p>
            </div>
            <div className="grid grid-cols-3 gap-8 text-center">
              {[
                { stat: "49%", label: "expect a 10–20%\nmarket decline" },
                { stat: "45%", label: "cite geopolitical\nrisk as #1 fear" },
                { stat: "63%", label: "cite elevated\nvaluations as top concern" },
              ].map((d) => (
                <div key={d.stat}>
                  <p className="text-7xl font-light" style={{ ...display, color: "#FAF7F2" }}>{d.stat}</p>
                  <p className="text-xs mt-4 leading-[1.6] whitespace-pre-line" style={{ ...sans, color: "#6C7D80", fontWeight: 400 }}>{d.label}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className="w-16 h-[1px] mx-auto mb-6" style={{ backgroundColor: "rgba(199,167,76,0.3)" }} />
              <p className="text-xl leading-[1.3] font-light max-w-[600px] mx-auto" style={{ ...display, color: "#FAF7F2" }}>
                The institutions tracking this data aren't waiting for the correction to <em style={{ color: "#D4B35C" }}>arrive.</em>
              </p>
            </div>
          </div>
        </AdCard>

        {/* ═══ AD 3: Quote / Positioning ═══ */}
        <AdCard>
          <div className="relative z-10 flex flex-col justify-between h-full p-16">
            <div className="flex justify-between items-start">
              <img src="/lovable-uploads/white_oak.png" alt="Oak" className="h-10 w-auto" />
              <p className="text-[9px] tracking-[0.4em] uppercase" style={{ ...sans, color: "#C7A74C", fontWeight: 500 }}>Oak Real Estate Partners</p>
            </div>
            <div className="pl-8" style={{ borderLeft: "2px solid #C7A74C" }}>
              <p className="text-3xl leading-[1.25] font-light max-w-[700px]" style={{ ...display, color: "#FAF7F2" }}>
                Senior-secured, first-lien bridge loans on income-producing commercial real estate.
              </p>
              <p className="text-base leading-[1.6] mt-6 max-w-[600px]" style={{ ...sans, color: "#6C7D80", fontWeight: 300 }}>
                Every dollar backed by a specific property you can see, value, and verify. Not a ticker. Not a blind pool. An address.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-[1px]" style={{ backgroundColor: "rgba(240,236,227,0.05)" }}>
              {[
                { title: "Senior-Secured", text: "First-lien position on every loan." },
                { title: "Real Asset Backed", text: "Tied to specific, income-producing property." },
                { title: "Downside Structured", text: "Physical, verifiable collateral." },
              ].map((c) => (
                <div key={c.title} className="p-6 text-center" style={{ backgroundColor: "rgba(6,13,20,0.6)" }}>
                  <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ ...sans, color: "#E4E3E1", fontWeight: 600 }}>{c.title}</p>
                  <p className="text-xs leading-[1.6]" style={{ ...sans, color: "#6C7D80", fontWeight: 300 }}>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </AdCard>

        {/* ═══ AD 4: Urgency / CTA ═══ */}
        <AdCard>
          <div className="relative z-10 flex flex-col justify-between h-full p-16">
            <img src="/lovable-uploads/white_oak.png" alt="Oak" className="h-10 w-auto" />
            <div className="text-center">
              <p className="text-2xl leading-[1.3] font-light max-w-[700px] mx-auto" style={{ ...display, color: "rgba(255,255,255,0.85)" }}>
                If a correction arrives in the next 90 days, does your portfolio hold?
              </p>
              <p className="text-3xl leading-[1.2] font-light mt-6" style={{ ...display, color: "#D4B35C" }}>
                Or does it just feel like it will?
              </p>
              <div className="w-12 h-[1px] mx-auto my-10" style={{ backgroundColor: "rgba(199,167,76,0.3)" }} />
              <p className="text-sm max-w-[400px] mx-auto" style={{ ...sans, color: "#6C7D80", fontWeight: 400 }}>
                The gap between those two answers is where fortunes are quietly lost.
              </p>
              <div className="mt-10 inline-flex items-center gap-3 py-3.5 px-12 text-[11px] tracking-[0.3em] uppercase" style={{ ...sans, backgroundColor: "#C7A74C", color: "#060D14", fontWeight: 600 }}>
                Download the 2026 Report
              </div>
            </div>
            <p className="text-[9px] tracking-[0.3em] uppercase text-center" style={{ ...sans, color: "rgba(240,236,227,0.15)", fontWeight: 400 }}>
              oakrepartners.com
            </p>
          </div>
        </AdCard>

        {/* ═══ AD 5: Bar Chart Visual ═══ */}
        <AdCard>
          <div className="relative z-10 flex flex-col justify-between h-full p-16">
            <div className="flex justify-between items-start">
              <img src="/lovable-uploads/white_oak.png" alt="Oak" className="h-10 w-auto" />
              <p className="text-[9px] tracking-[0.4em] uppercase" style={{ ...sans, color: "#C7A74C", fontWeight: 500 }}>Institutional Sentiment</p>
            </div>
            <div>
              <p className="text-xl leading-[1.3] font-light mb-14 max-w-[600px]" style={{ ...display, color: "#FAF7F2" }}>
                Year-over-year, more institutions are bracing for a correction.
              </p>
              <div className="flex items-end justify-center gap-16 h-[340px]">
                {[
                  { label: "2024", pct: 35, color: "rgba(199,167,76,0.2)" },
                  { label: "2025", pct: 55, color: "rgba(199,167,76,0.4)" },
                  { label: "2026", pct: 79, color: "#C7A74C", active: true },
                ].map((bar) => (
                  <div key={bar.label} className="flex flex-col items-center gap-3 h-full justify-end">
                    {bar.active && (
                      <span className="text-lg font-light" style={{ ...sans, color: "#FAF7F2", fontWeight: 600 }}>79%</span>
                    )}
                    <div className="w-24 rounded-sm" style={{ height: `${bar.pct}%`, backgroundColor: bar.color }} />
                    <span className="text-[10px] tracking-[0.25em] uppercase mt-1" style={{ ...sans, color: "#6C7D80", fontWeight: 400 }}>{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 py-3 px-10 text-[11px] tracking-[0.3em] uppercase" style={{ ...sans, backgroundColor: "#C7A74C", color: "#060D14", fontWeight: 600 }}>
                See the Full Data
              </div>
            </div>
          </div>
        </AdCard>

        {/* ═══ AD 6: Minimal / Typographic ═══ */}
        <AdCard>
          <div className="relative z-10 flex flex-col justify-center items-center h-full p-20 text-center">
            <p className="text-[9px] tracking-[0.5em] uppercase mb-12" style={{ ...sans, color: "#C7A74C", fontWeight: 500 }}>Oak Real Estate Partners</p>
            <p className="text-5xl leading-[1.15] font-light max-w-[750px]" style={{ ...display, color: "#FAF7F2" }}>
              Not a dip.<br />Not a rotation.<br />
              <span className="block mt-4" style={{ color: "#D4B35C" }}>A correction.</span>
            </p>
            <div className="w-16 h-[1px] my-12" style={{ backgroundColor: "rgba(199,167,76,0.3)" }} />
            <p className="text-sm leading-[1.7] max-w-[440px]" style={{ ...sans, color: "#6C7D80", fontWeight: 400 }}>
              The kind that reshapes portfolios overnight and punishes the unprepared. See how institutional investors are structuring around it.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 py-3.5 px-12 text-[11px] tracking-[0.3em] uppercase" style={{ ...sans, backgroundColor: "#C7A74C", color: "#060D14", fontWeight: 600 }}>
              Get the Report
            </div>
            <img src="/lovable-uploads/white_oak.png" alt="Oak" className="h-8 w-auto mt-auto pt-8 opacity-40" />
          </div>
        </AdCard>

      </div>
    </div>
  );
};

export default AdCreatives;
