import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowRight, ChevronDown } from "lucide-react";

  /*
   * Palette matched to OREP brand guidelines:
   * --abyss:     #060D14   (Primary dark bg)
   * --midnight:  #082233   (Midnight Navy)
   * --deep:      #0A1520   (Deep - supporting)
   * --slate:     #233F52   (Slate Blue - accent)
   * --soft-gray: #6C7D80   (Soft Gray - accent)
   * --stone:     #E4E3E1   (Soft Stone)
   * --cream:     #FAF7F2   (Cream - light bg)
   * --gold:      #C7A74C   (Gold - key accent)
   * --gold-warm: #D4B35C   (Gold Warm - supporting)
   * --copper:    #A85839   (Burnt Copper - accent)
   * --sage:      #AEBEA9   (Pale Sage - supporting)
   */

const MarketCorrection = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Montserrat is already loaded site-wide via the design system

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("investor_leads").insert({
        full_name: `${firstName.trim()} ${lastName.trim()}`,
        email: email.trim(),
        message: "Market Correction Report landing page opt-in",
      });
      if (error) throw error;
      navigate("/thank-you-report");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Font stacks matching the brand design system
  const display = { fontFamily: "'Montserrat', sans-serif" };
  const sans = { fontFamily: "'Montserrat', 'Lato', sans-serif" };

  const inputStyle: React.CSSProperties = {
    ...sans,
    color: "#E4E3E1",
    borderBottom: "1px solid rgba(240,236,227,0.1)",
    background: "transparent",
    padding: "0",
    height: "48px",
    fontSize: "13px",
    fontWeight: 300,
    letterSpacing: "0.02em",
    width: "100%",
    outline: "none",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderRadius: 0,
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(135deg, #060D14, #082233, #233F52)" }}>
      <SEOHead
        title="2026 Institutional Investor Report"
        description="79% of institutional investors expect a market correction in 2026. Learn how senior-secured, real-asset-backed lending is structured to protect capital."
        canonicalUrl="/market-correction-report"
      />

      {/* ════════ HERO ════════ */}
      <section className="relative min-h-screen flex flex-col justify-between px-4 sm:px-12 lg:px-20 pt-10 sm:pt-14 pb-8 sm:pb-12 overflow-hidden">
        {/* Ghost watermark */}
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden sm:block" style={{ opacity: 0.03 }}>
          <span className="text-[28rem] sm:text-[36rem] font-light leading-none block" style={{ ...display, color: "#E4E3E1" }}>79</span>
        </div>

        {/* Logo */}
        <div className="relative z-10">
          <a href="/">
            <img
              src="/lovable-uploads/white_oak.png"
              alt="Oak Real Estate Partners"
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </a>
        </div>

        {/* Two-column: copy + form */}
        <div className="relative z-10 max-w-5xl mt-auto mb-auto py-6 sm:py-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left — Copy */}
            <div>
              <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-6 sm:mb-10" style={{ ...sans, color: "#C7A74C", opacity: 0.8, fontWeight: 500 }}>
                2026 Institutional Investor Data
              </p>
              <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-light leading-[0.85] tracking-tight" style={{ ...display, color: "#FAF7F2", letterSpacing: "-0.02em" }}>
                79%
              </h1>
              <p className="text-xl sm:text-3xl md:text-4xl leading-[1.1] mt-4 sm:mt-6 font-light" style={{ ...display, color: "#FAF7F2" }}>
                Seventy-nine percent of institutional investors expect a market correction in{" "}
                <em style={{ color: "#D4B35C", fontWeight: 300 }}>2026.</em>
              </p>
              <p className="text-sm sm:text-base leading-[1.7] mt-6 sm:mt-8 max-w-[340px]" style={{ ...sans, color: "#6C7D80", fontWeight: 400, letterSpacing: "0.02em" }}>
                Not a dip. Not a rotation. A correction — the kind that reshapes portfolios overnight and punishes the unprepared.
              </p>
            </div>

            {/* Right — Form */}
            <div className="p-6 sm:p-8 md:p-10" style={{ border: "1px solid rgba(240,236,227,0.05)" }}>
              <p className="text-xs sm:text-sm tracking-[0.35em] uppercase mb-2" style={{ ...sans, color: "#E4E3E1", fontWeight: 500 }}>
                Get the Full Report
              </p>
              <p className="text-sm sm:text-base mb-6 sm:mb-8" style={{ ...sans, color: "#6C7D80", fontWeight: 400 }}>
                See the data driving institutional strategy — and how Oak structures around it.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={inputStyle} required />
                  <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} style={inputStyle} required />
                </div>
                <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} required />
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 py-3.5 text-[11px] tracking-[0.3em] uppercase transition-opacity disabled:opacity-50"
                    style={{ ...sans, backgroundColor: "#C7A74C", color: "#060D14", fontWeight: 600 }}
                  >
                    {isSubmitting ? "Submitting..." : "Send Me the Report"}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </button>
                </div>
                <p className="text-[10px] text-center pt-1 tracking-wide" style={{ ...sans, color: "rgba(240,236,227,0.12)", fontWeight: 300 }}>
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="relative z-10 pt-6 sm:pt-8 mt-6 sm:mt-8" style={{ borderTop: "1px solid rgba(240,236,227,0.05)" }}>
          <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-16 max-w-4xl mx-auto text-center">
            {[
              { stat: "49%", note: "expect 10–20% decline" },
              { stat: "45%", note: "cite geopolitical risk as #1 fear" },
              { stat: "63%", note: "cite elevated valuations as top concern" },
            ].map((d) => (
              <div key={d.stat}>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light" style={{ ...display, color: "#FAF7F2" }}>{d.stat}</p>
                <p className="text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2 leading-snug tracking-wide" style={{ ...sans, color: "#6C7D80", fontWeight: 400 }}>{d.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 flex justify-center mt-4 sm:mt-6">
          <div className="flex flex-col items-center gap-1 animate-bounce" style={{ animationDuration: "2s" }}>
            <span className="text-[9px] tracking-[0.3em] uppercase" style={{ ...sans, color: "rgba(240,236,227,0.3)", fontWeight: 400 }}>Scroll</span>
            <ChevronDown className="w-4 h-4" style={{ color: "rgba(240,236,227,0.3)" }} />
          </div>
        </div>
      </section>

      {/* ════════ BODY — PARCHMENT ════════ */}
      <section className="px-6 sm:px-12 lg:px-20 py-24 lg:py-36" style={{ backgroundColor: "#faf7f2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="w-12 h-[1px] mb-6" style={{ backgroundColor: "#C7A74C" }} />
          <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-16" style={{ ...sans, color: "#C7A74C", fontWeight: 500 }}>
            Oak Real Estate Partners
          </p>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.05] max-w-2xl font-light" style={{ ...display, color: "#0A1520", letterSpacing: "-0.01em" }}>
              The institutions tracking this data aren't waiting for the correction to{" "}
              <em style={{ color: "#C7A74C", fontWeight: 300 }}>arrive.</em>
            </h2>

            {/* Mini bar chart */}
            <div className="flex items-end justify-center gap-6 sm:gap-8 h-48">
              {[
                { label: "2024", height: "35%", color: "rgba(201,168,76,0.25)" },
                { label: "2025", height: "55%", color: "rgba(201,168,76,0.45)" },
                { label: "2026", height: "79%", color: "#C7A74C", active: true },
              ].map((bar) => (
                <div key={bar.label} className="flex flex-col items-center gap-2 h-full justify-end">
                  {bar.active && (
                    <span className="text-sm font-light" style={{ ...sans, color: "#0A1520", fontWeight: 600 }}>79%</span>
                  )}
                  <div
                    className="w-12 sm:w-16 rounded-sm transition-all"
                    style={{ height: bar.height, backgroundColor: bar.color }}
                  />
                  <span className="text-[10px] tracking-[0.2em] uppercase mt-1" style={{ ...sans, color: "#6C7D80", fontWeight: 400 }}>{bar.label}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm sm:text-base leading-[1.7] max-w-lg mt-10" style={{ ...sans, color: "#6C7D80", fontWeight: 300, letterSpacing: "0.02em" }}>
            Insurance companies, foundations, endowments — the same institutions tracking these numbers are the ones who invest alongside Oak Real Estate Partners. They didn't wait. They structured around it.
          </p>

          {/* Blockquote */}
          <div className="pl-6 sm:pl-8 mt-16" style={{ borderLeft: "1px solid #C7A74C" }}>
            <p className="text-lg sm:text-xl leading-[1.4] max-w-lg font-light" style={{ ...display, color: "#0A1520" }}>
              Senior-secured, first-lien bridge loans on income-producing commercial real estate. Every dollar backed by a specific property you can see, value, and verify. Not a ticker. Not a blind pool. An address.
            </p>
          </div>

          {/* Value prop cards */}
          <div className="grid sm:grid-cols-3 gap-[1px] mt-20 overflow-hidden max-w-4xl mx-auto" style={{ backgroundColor: "rgba(17,24,39,0.06)" }}>
            {[
              { title: "Senior-Secured", text: "First-lien position on every loan. Capital preservation is structural, not theoretical." },
              { title: "Real Asset Backed", text: "Every dollar tied to a specific, income-producing commercial property." },
              { title: "Downside Structured", text: "Behaves differently in stressed markets because the collateral is physical and verifiable." },
            ].map((card) => (
              <div key={card.title} className="p-8 sm:p-10 text-center" style={{ backgroundColor: "#faf7f2" }}>
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase mb-4" style={{ ...sans, color: "#082233", fontWeight: 600 }}>{card.title}</p>
                <p className="text-sm sm:text-base leading-[1.7]" style={{ ...sans, color: "#6C7D80", fontWeight: 300 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CLOSING CTA — DARK ════════ */}
      <section className="px-6 sm:px-12 lg:px-20 py-24 lg:py-36" style={{ backgroundColor: "#060D14" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl leading-[1.3] font-light" style={{ ...display, color: "rgba(255,255,255,0.85)" }}>
            If a correction arrives in the next 90 days, does your portfolio hold?{" "}
            <span style={{ color: "#D4B35C" }}>Or does it just feel like it will?</span>
          </p>
          <p className="text-sm mt-8 max-w-md mx-auto" style={{ ...sans, color: "#6C7D80", fontWeight: 400 }}>
            The gap between those two answers is where fortunes are quietly lost.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-10 inline-flex items-center gap-3 py-3 px-10 text-[11px] tracking-[0.3em] uppercase transition-opacity"
            style={{ ...sans, backgroundColor: "#C7A74C", color: "#060D14", fontWeight: 600 }}
          >
            Get the Report <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="px-6 sm:px-12 lg:px-20 py-8" style={{ backgroundColor: "#060D14", borderTop: "1px solid rgba(240,236,227,0.04)" }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <a href="/">
              <img src="/lovable-uploads/white_oak.png" alt="Oak Real Estate Partners" className="h-8 w-auto" />
            </a>
          </div>
          <a href="https://oakrepartners.com" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-wide hover:underline underline-offset-4" style={{ ...sans, color: "#C7A74C", fontWeight: 400 }}>
            oakrepartners.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MarketCorrection;
