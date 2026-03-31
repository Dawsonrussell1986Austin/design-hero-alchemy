import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

/*
 * Landing-page-only palette (matched to Oak social ads):
 * --lp-dark:    #0C1A2A  (deep navy-black)
 * --lp-gold:    #C4A24B  (warm muted gold)
 * --lp-cream:   #E6E0D4  (warm cream headlines)
 * --lp-muted:   #8A8070  (steel-teal sublabels)
 * --lp-light:   #FAF5EE  (cream section bg)
 * --lp-body:    #1E3347  (dark navy on light bg)
 */

const MarketCorrection = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load Playfair Display for this page only
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

  // Shared serif style matching the ads
  const serif = { fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" };
  const sans = { fontFamily: "'Montserrat', 'Lato', sans-serif" };
  const body = { fontFamily: "'Lato', 'Montserrat', sans-serif" };

  const inputStyle: React.CSSProperties = {
    ...body,
    color: "#E6E0D4",
    borderBottom: "1px solid rgba(230,224,212,0.12)",
    background: "transparent",
    padding: "0",
    height: "48px",
    fontSize: "14px",
    width: "100%",
    outline: "none",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderRadius: 0,
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0C1A2A" }}>
      <SEOHead
        title="2026 Institutional Investor Report"
        description="79% of institutional investors expect a market correction in 2026. Learn how senior-secured, real-asset-backed lending is structured to protect capital."
        canonicalUrl="/market-correction-report"
      />

      {/* ════════ HERO ════════ */}
      <section className="relative min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-20 pt-14 pb-12 overflow-hidden">
        {/* Ghost watermark */}
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 select-none pointer-events-none" style={{ opacity: 0.03 }}>
          <span className="text-[28rem] sm:text-[36rem] font-bold leading-none block" style={{ ...serif, color: "#E6E0D4" }}>79</span>
        </div>

        {/* Logo */}
        <div className="relative z-10">
          <a href="/">
            <img
              src="/lovable-uploads/e323112f-3778-4823-a73c-459340f8fc23.png"
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
              <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-10" style={{ ...sans, color: "#C4A24B" }}>
                2026 Institutional Investor Data
              </p>
              <h1 className="text-[5rem] sm:text-[7rem] lg:text-[9rem] font-extrabold leading-[0.85] tracking-tight" style={{ ...serif, color: "#E6E0D4" }}>
                79%
              </h1>
              <p className="text-xl sm:text-2xl leading-[1.35] mt-6" style={{ ...serif, color: "rgba(230,224,212,0.8)" }}>
                of institutional investors expect a market correction in 2026.
              </p>
              <p className="text-sm leading-relaxed mt-8 max-w-sm" style={{ ...body, color: "#8A8070" }}>
                Not a dip. Not a rotation. A correction — the kind that reshapes portfolios overnight and punishes the unprepared.
              </p>
            </div>

            {/* Right — Form */}
            <div className="p-8 sm:p-10" style={{ border: "1px solid rgba(230,224,212,0.06)" }}>
              <p className="text-sm tracking-[0.15em] uppercase mb-2" style={{ ...sans, color: "#E6E0D4" }}>
                Get the Full Report
              </p>
              <p className="text-sm mb-8" style={{ ...body, color: "#8A8070" }}>
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
                    className="w-full flex items-center justify-center gap-3 py-3.5 text-sm tracking-[0.12em] uppercase transition-opacity disabled:opacity-50"
                    style={{ ...sans, backgroundColor: "#C4A24B", color: "#0C1A2A", fontWeight: 600 }}
                  >
                    {isSubmitting ? "Submitting..." : "Send Me the Report"}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </button>
                </div>
                <p className="text-[11px] text-center pt-1 tracking-wide" style={{ ...body, color: "rgba(230,224,212,0.15)" }}>
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="relative z-10 pt-8 mt-8" style={{ borderTop: "1px solid rgba(230,224,212,0.06)" }}>
          <div className="grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl">
            {[
              { stat: "49%", note: "expect 10–20% decline" },
              { stat: "45%", note: "cite geopolitical risk as #1 fear" },
              { stat: "63%", note: "cite valuations as top portfolio risk" },
            ].map((d) => (
              <div key={d.stat}>
                <p className="text-xl sm:text-2xl font-bold" style={{ ...serif, color: "#E6E0D4" }}>{d.stat}</p>
                <p className="text-[10px] sm:text-xs mt-1 leading-snug" style={{ ...body, color: "#8A8070" }}>{d.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ BODY — WARM CREAM ════════ */}
      <section className="px-6 sm:px-12 lg:px-20 py-24 lg:py-36" style={{ backgroundColor: "#FAF5EE" }}>
        <div className="max-w-4xl">
          <div className="w-12 h-[2px] mb-6" style={{ backgroundColor: "#C4A24B" }} />
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-16" style={{ ...sans, color: "#C4A24B" }}>
            Oak Real Estate Partners
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-2xl" style={{ ...serif, color: "#1E3347" }}>
            The institutions tracking this data aren't waiting for the correction to{" "}
            <em style={{ color: "#C4A24B", fontStyle: "italic" }}>arrive.</em>
          </h2>

          <p className="text-sm sm:text-base leading-relaxed max-w-lg mt-10" style={{ ...body, color: "#6B6358" }}>
            Insurance companies, foundations, endowments — the same institutions tracking these numbers are the ones who invest alongside Oak Real Estate Partners. They didn't wait. They structured around it.
          </p>

          {/* Blockquote */}
          <div className="pl-6 sm:pl-8 mt-16" style={{ borderLeft: "2px solid #C4A24B" }}>
            <p className="text-lg sm:text-xl leading-relaxed max-w-lg" style={{ ...serif, color: "#1E3347", fontStyle: "italic" }}>
              Senior-secured, first-lien bridge loans on income-producing commercial real estate. Every dollar backed by a specific property you can see, value, and verify. Not a ticker. Not a blind pool. An address.
            </p>
          </div>

          {/* Value prop cards */}
          <div className="grid sm:grid-cols-3 gap-[1px] mt-20 overflow-hidden" style={{ backgroundColor: "rgba(30,51,71,0.08)" }}>
            {[
              { title: "Senior-Secured", text: "First-lien position on every loan. Capital preservation is structural, not theoretical." },
              { title: "Real Asset Backed", text: "Every dollar tied to a specific, income-producing commercial property." },
              { title: "Downside Structured", text: "Behaves differently in stressed markets because the collateral is physical and verifiable." },
            ].map((card) => (
              <div key={card.title} className="p-6 sm:p-8" style={{ backgroundColor: "#FAF5EE" }}>
                <p className="text-xs tracking-wider uppercase mb-4" style={{ ...sans, color: "#1E3347", fontWeight: 600 }}>{card.title}</p>
                <p className="text-sm leading-relaxed" style={{ ...body, color: "#6B6358" }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CLOSING CTA — DARK ════════ */}
      <section className="px-6 sm:px-12 lg:px-20 py-24 lg:py-36" style={{ backgroundColor: "#0C1A2A" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl leading-[1.4]" style={{ ...serif, color: "rgba(230,224,212,0.8)", fontStyle: "italic" }}>
            If a correction arrives in the next 90 days, does your portfolio hold?
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl leading-[1.4] mt-2" style={{ ...serif, color: "#C4A24B", fontStyle: "italic" }}>
            Or does it just feel like it will?
          </p>
          <p className="text-sm mt-8 max-w-md mx-auto" style={{ ...body, color: "#8A8070" }}>
            The gap between those two answers is where fortunes are quietly lost.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-10 inline-flex items-center gap-3 py-3 px-10 text-sm tracking-[0.12em] uppercase transition-opacity"
            style={{ ...sans, backgroundColor: "#C4A24B", color: "#0C1A2A", fontWeight: 600 }}
          >
            Get the Report <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="px-6 sm:px-12 lg:px-20 py-8" style={{ backgroundColor: "#0C1A2A", borderTop: "1px solid rgba(230,224,212,0.05)" }}>
        <div className="max-w-4xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <p className="text-xs tracking-wider" style={{ ...sans, color: "#E6E0D4", fontWeight: 600 }}>Oak Real Estate Partners</p>
            <p className="text-[10px] tracking-[0.15em] uppercase mt-1" style={{ ...body, color: "rgba(230,224,212,0.2)" }}>
              Institutional CRE Lending · Senior Secured · Real Assets
            </p>
          </div>
          <a href="https://oakrepartners.com" target="_blank" rel="noopener noreferrer" className="text-xs tracking-wide hover:underline underline-offset-4" style={{ ...body, color: "#C4A24B" }}>
            oakrepartners.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MarketCorrection;
