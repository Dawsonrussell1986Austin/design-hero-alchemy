import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

/*
 * Palette matched exactly to OREP ad design system:
 * --void:      #07090f
 * --abyss:     #0d1119
 * --deep:      #111827
 * --midnight:  #1a2333
 * --slate:     #2d3d56
 * --steel:     #4a607e
 * --mist:      #8da0b8
 * --ivory:     #f0ece3
 * --parchment: #faf7f2
 * --gold:      #c9a84c
 * --gold-warm: #dbb96a
 * --gold-dark: #8a6d28
 * --copper:    #b07d3a
 */

const MarketCorrection = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load Playfair Display for this page
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,800;1,400;1,700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

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
      navigate("/thank-you");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Font stacks matching the ad design system exactly
  const serif = { fontFamily: "'Playfair Display', Georgia, serif" };
  const sans = { fontFamily: "'Montserrat', 'Lato', sans-serif" };

  const inputStyle: React.CSSProperties = {
    ...sans,
    color: "#f0ece3",
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
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#07090f" }}>
      <SEOHead
        title="2026 Institutional Investor Report"
        description="79% of institutional investors expect a market correction in 2026. Learn how senior-secured, real-asset-backed lending is structured to protect capital."
        canonicalUrl="/market-correction-report"
      />

      {/* ════════ HERO ════════ */}
      <section className="relative min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-20 pt-14 pb-12 overflow-hidden">
        {/* Ghost watermark */}
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 select-none pointer-events-none" style={{ opacity: 0.03 }}>
          <span className="text-[28rem] sm:text-[36rem] font-light leading-none block" style={{ ...serif, color: "#f0ece3" }}>79</span>
        </div>

        {/* Logo */}
        <div className="relative z-10">
          <a href="/">
            <img
              src="/lovable-uploads/white_oak.png"
              alt="Oak Real Estate Partners"
              className="h-10 sm:h-12 w-auto"
            />
          </a>
        </div>

        {/* Two-column: copy + form */}
        <div className="relative z-10 max-w-5xl mt-auto mb-auto py-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Copy */}
            <div>
              <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-10" style={{ ...sans, color: "#c9a84c", opacity: 0.8, fontWeight: 500 }}>
                2026 Institutional Investor Data
              </p>
              <h1 className="text-[5rem] sm:text-[7rem] lg:text-[9rem] font-light leading-[0.85] tracking-tight" style={{ ...serif, color: "#ffffff", letterSpacing: "-0.02em" }}>
                79%
              </h1>
              <p className="text-2xl sm:text-3xl leading-[1.1] mt-6 font-light" style={{ ...serif, color: "#ffffff" }}>
                of institutional investors
                <br />expect a market
                <br />correction in{" "}
                <em style={{ color: "#dbb96a", fontStyle: "italic", fontWeight: 300 }}>2026.</em>
              </p>
              <p className="text-sm leading-[1.7] mt-8 max-w-[300px]" style={{ ...sans, color: "#a0a0a0", fontWeight: 400, letterSpacing: "0.02em" }}>
                Not a dip. Not a rotation. A correction — the kind that reshapes portfolios overnight and punishes the unprepared.
              </p>
            </div>

            {/* Right — Form */}
            <div className="p-8 sm:p-10" style={{ border: "1px solid rgba(240,236,227,0.05)" }}>
              <p className="text-[10px] tracking-[0.35em] uppercase mb-2" style={{ ...sans, color: "#f0ece3", fontWeight: 500 }}>
                Get the Full Report
              </p>
              <p className="text-sm mb-8" style={{ ...sans, color: "#a0a0a0", fontWeight: 400 }}>
                See the data driving institutional strategy — and how Oak structures around it.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={inputStyle} required />
                  <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} style={inputStyle} required />
                </div>
                <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} required />
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 py-3.5 text-[11px] tracking-[0.3em] uppercase transition-opacity disabled:opacity-50"
                    style={{ ...sans, backgroundColor: "#c9a84c", color: "#07090f", fontWeight: 600 }}
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
        <div className="relative z-10 pt-8 mt-8" style={{ borderTop: "1px solid rgba(240,236,227,0.05)" }}>
          <div className="grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl">
            {[
              { stat: "49%", note: "expect 10–20% decline" },
              { stat: "45%", note: "cite geopolitical risk as #1 fear" },
              { stat: "63%", note: "cite valuations as top portfolio risk" },
            ].map((d) => (
              <div key={d.stat}>
                <p className="text-xl sm:text-2xl font-light" style={{ ...serif, color: "#ffffff" }}>{d.stat}</p>
                <p className="text-[9px] sm:text-[10px] mt-1 leading-snug tracking-wide" style={{ ...sans, color: "#8da0b8", fontWeight: 300 }}>{d.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ BODY — PARCHMENT ════════ */}
      <section className="px-6 sm:px-12 lg:px-20 py-24 lg:py-36" style={{ backgroundColor: "#faf7f2" }}>
        <div className="max-w-4xl">
          <div className="w-12 h-[1px] mb-6" style={{ backgroundColor: "#c9a84c" }} />
          <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-16" style={{ ...sans, color: "#c9a84c", fontWeight: 500 }}>
            Oak Real Estate Partners
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.05] max-w-2xl font-light" style={{ ...serif, color: "#111827", letterSpacing: "-0.01em" }}>
            The institutions tracking this data aren't waiting for the correction to{" "}
            <em style={{ color: "#c9a84c", fontStyle: "italic", fontWeight: 300 }}>arrive.</em>
          </h2>

          <p className="text-[13px] sm:text-sm leading-[1.7] max-w-lg mt-10" style={{ ...sans, color: "#4a607e", fontWeight: 300, letterSpacing: "0.02em" }}>
            Insurance companies, foundations, endowments — the same institutions tracking these numbers are the ones who invest alongside Oak Real Estate Partners. They didn't wait. They structured around it.
          </p>

          {/* Blockquote */}
          <div className="pl-6 sm:pl-8 mt-16" style={{ borderLeft: "1px solid #c9a84c" }}>
            <p className="text-lg sm:text-xl leading-[1.4] max-w-lg font-light" style={{ ...serif, color: "#111827", fontStyle: "italic" }}>
              Senior-secured, first-lien bridge loans on income-producing commercial real estate. Every dollar backed by a specific property you can see, value, and verify. Not a ticker. Not a blind pool. An address.
            </p>
          </div>

          {/* Value prop cards */}
          <div className="grid sm:grid-cols-3 gap-[1px] mt-20 overflow-hidden" style={{ backgroundColor: "rgba(17,24,39,0.06)" }}>
            {[
              { title: "Senior-Secured", text: "First-lien position on every loan. Capital preservation is structural, not theoretical." },
              { title: "Real Asset Backed", text: "Every dollar tied to a specific, income-producing commercial property." },
              { title: "Downside Structured", text: "Behaves differently in stressed markets because the collateral is physical and verifiable." },
            ].map((card) => (
              <div key={card.title} className="p-6 sm:p-8" style={{ backgroundColor: "#faf7f2" }}>
                <p className="text-[9px] tracking-[0.3em] uppercase mb-4" style={{ ...sans, color: "#1a2333", fontWeight: 600 }}>{card.title}</p>
                <p className="text-[12px] leading-[1.7]" style={{ ...sans, color: "#4a607e", fontWeight: 300 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CLOSING CTA — DARK ════════ */}
      <section className="px-6 sm:px-12 lg:px-20 py-24 lg:py-36" style={{ backgroundColor: "#07090f" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl leading-[1.3] font-light" style={{ ...serif, color: "rgba(255,255,255,0.85)" }}>
            If a correction arrives in the next 90 days, does your portfolio hold?
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl leading-[1.3] mt-2 font-light" style={{ ...serif, color: "#dbb96a" }}>
            Or does it just feel like it will?
          </p>
          <p className="text-sm mt-8 max-w-md mx-auto" style={{ ...sans, color: "#a0a0a0", fontWeight: 400 }}>
            The gap between those two answers is where fortunes are quietly lost.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-10 inline-flex items-center gap-3 py-3 px-10 text-[11px] tracking-[0.3em] uppercase transition-opacity"
            style={{ ...sans, backgroundColor: "#c9a84c", color: "#07090f", fontWeight: 600 }}
          >
            Get the Report <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="px-6 sm:px-12 lg:px-20 py-8" style={{ backgroundColor: "#07090f", borderTop: "1px solid rgba(240,236,227,0.04)" }}>
        <div className="max-w-4xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase" style={{ ...sans, color: "#f0ece3", fontWeight: 500 }}>Oak Real Estate Partners</p>
            <p className="text-[9px] tracking-[0.2em] uppercase mt-1" style={{ ...sans, color: "rgba(240,236,227,0.15)", fontWeight: 300 }}>
              Institutional CRE Lending · Senior Secured · Real Assets
            </p>
          </div>
          <a href="https://oakrepartners.com" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-wide hover:underline underline-offset-4" style={{ ...sans, color: "#c9a84c", fontWeight: 400 }}>
            oakrepartners.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MarketCorrection;
