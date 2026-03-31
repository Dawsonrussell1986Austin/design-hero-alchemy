import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const MarketCorrection = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLDivElement>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const OptInForm = ({ id }: { id?: string }) => (
    <div id={id} className="bg-obsidian rounded-sm p-8 sm:p-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-transparent border-silver-mist/15 text-silver-mist placeholder:text-silver-mist/30 h-12 font-body rounded-none border-t-0 border-x-0 border-b focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-accent-brown px-0"
            required
          />
          <Input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="bg-transparent border-silver-mist/15 text-silver-mist placeholder:text-silver-mist/30 h-12 font-body rounded-none border-t-0 border-x-0 border-b focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-accent-brown px-0"
            required
          />
        </div>
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border-silver-mist/15 text-silver-mist placeholder:text-silver-mist/30 h-12 font-body rounded-none border-t-0 border-x-0 border-b focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-accent-brown px-0"
          required
        />
        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white font-display text-sm tracking-[0.1em] uppercase h-13 rounded-none"
          >
            {isSubmitting ? "Submitting..." : "Get the Report"}
            {!isSubmitting && <ArrowRight className="ml-3 h-4 w-4" />}
          </Button>
        </div>
        <p className="text-silver-mist/20 text-[11px] font-body text-center pt-1 tracking-wide">
          No spam. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col selection:bg-accent-brown/30 selection:text-white">
      <SEOHead
        title="2026 Institutional Investor Report"
        description="79% of institutional investors expect a market correction in 2026. Learn how senior-secured, real-asset-backed lending is structured to protect capital."
        canonicalUrl="/market-correction-report"
      />

      {/* ═══════════════════════════════════════════
          SECTION 1 — THE HOOK
          Full-viewport dark hero with the 79% stat
      ═══════════════════════════════════════════ */}
      <section className="relative bg-obsidian min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-20 pt-16 pb-12 overflow-hidden">
        {/* Ghost watermark */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.025]">
          <span className="text-[32rem] font-serif font-bold text-silver-mist leading-none block">
            79
          </span>
        </div>

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <div className="w-10 h-[2px] bg-accent-brown mb-3" />
            <p className="text-accent-brown font-display text-[10px] sm:text-xs tracking-[0.3em] uppercase">
              Oak Real Estate Partners
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-5xl mt-auto mb-auto">
          <p className="text-accent-brown font-display text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-8 sm:mb-12">
            2026 Institutional Investor Data
          </p>

          <h1 className="font-serif text-[6rem] sm:text-[8rem] lg:text-[12rem] font-bold text-silver-mist leading-[0.85] tracking-tighter">
            79%
          </h1>

          <div className="mt-6 sm:mt-8 max-w-2xl">
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-silver-mist/90 leading-[1.3]">
              of institutional investors expect<br className="hidden sm:block" /> a market correction in 2026.
            </p>
          </div>

          <p className="text-silver-mist/40 font-body text-sm sm:text-base leading-relaxed mt-8 max-w-md">
            Not a dip. Not a rotation. A correction — the kind that reshapes portfolios overnight.
          </p>

          <button
            onClick={scrollToForm}
            className="group mt-10 sm:mt-14 inline-flex items-center gap-3 text-accent-brown font-display text-xs tracking-[0.2em] uppercase hover:gap-5 transition-all duration-300"
          >
            <span>Read the report</span>
            <ArrowRight className="h-4 w-4" />
            <span className="block w-16 h-[1px] bg-accent-brown/50 group-hover:w-24 transition-all duration-300" />
          </button>
        </div>

        {/* Bottom stats */}
        <div className="relative z-10 border-t border-silver-mist/[0.07] pt-8 mt-12">
          <div className="grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl">
            {[
              { stat: "49%", note: "expect 10–20% decline" },
              { stat: "45%", note: "cite geopolitical risk as #1 fear" },
              { stat: "63%", note: "cite valuations as top risk" },
            ].map((d) => (
              <div key={d.stat}>
                <p className="text-xl sm:text-2xl font-serif font-bold text-silver-mist">{d.stat}</p>
                <p className="text-silver-mist/30 font-body text-[10px] sm:text-xs mt-1 leading-snug">{d.note}</p>
              </div>
            ))}
          </div>
          <p className="text-silver-mist/15 font-body text-[9px] mt-6 tracking-wider uppercase">
            Source: 2026 Institutional Investor Survey
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — THE GAP
          Why this matters — banks retreated
      ═══════════════════════════════════════════ */}
      <section className="bg-obsidian px-6 sm:px-12 lg:px-20 py-24 lg:py-36 border-t border-silver-mist/[0.05]">
        <div className="max-w-5xl">
          <p className="text-accent-brown font-display text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-12 sm:mb-16">
            Annual CRE Lending Gap
          </p>

          <h2 className="font-serif text-6xl sm:text-7xl lg:text-[8rem] font-bold text-silver-mist leading-[0.85] tracking-tight">
            $300B
          </h2>

          <div className="mt-6 max-w-xl">
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-silver-mist leading-[1.15]">
              Banks retreated.
            </p>
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl italic text-accent-brown leading-[1.15]">
              We didn't.
            </p>
          </div>

          <p className="text-silver-mist/40 font-body text-sm sm:text-base leading-relaxed mt-10 max-w-lg">
            $3 trillion in CRE loans maturing in the next three years. Banks are permanently pulling back from small-balance commercial lending. Oak fills the gap with institutional-grade underwriting on the loans no one else will touch.
          </p>

          <div className="border-t border-silver-mist/[0.07] pt-8 mt-16 sm:mt-20">
            <div className="grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl">
              {[
                { stat: "$2–$20M", label: "Loan Size\nSweet Spot" },
                { stat: "88%", label: "Market Still Held\nby Retreating Banks" },
                { stat: "$8.3B", label: "Pipeline Evaluated\nin 2025" },
              ].map((d) => (
                <div key={d.stat}>
                  <p className="text-xl sm:text-2xl font-serif font-bold text-silver-mist">{d.stat}</p>
                  <p className="text-accent-brown/60 font-body text-[10px] sm:text-xs mt-1 whitespace-pre-line leading-snug">{d.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — EVERY DOLLAR HAS AN ADDRESS
          Light section — Named collateral
      ═══════════════════════════════════════════ */}
      <section className="bg-[#FAF8F4] px-6 sm:px-12 lg:px-20 py-24 lg:py-36">
        <div className="max-w-5xl">
          <div className="w-12 h-[2px] bg-accent-brown mb-6" />
          <p className="text-accent-brown font-display text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-16">
            Oak Real Estate Partners
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[4.5rem] text-obsidian leading-[1.05] max-w-3xl">
            Every dollar<br />
            has an <span className="italic text-accent-brown">address.</span>
          </h2>

          <p className="text-graphite-fog font-body text-sm sm:text-base leading-relaxed max-w-lg mt-10 mb-20">
            No blind pools. No "black box" allocations. Every loan is backed by a specific, identifiable commercial property with institutional underwriting. You know the address, the collateral, and the capital stack — before you invest.
          </p>

          {/* Sample Position */}
          <div className="bg-obsidian overflow-hidden">
            <div className="px-6 py-4 border-b border-silver-mist/[0.07]">
              <p className="text-accent-brown font-body text-[10px] tracking-[0.2em] uppercase">Sample Position</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {[
                { label: "Asset", line1: "Mixed-Use", line2: "Retail/Office" },
                { label: "Position", line1: "Senior Secured", line2: "1st Lien" },
                { label: "LTV", line1: "62%", line2: "Stabilized" },
                { label: "Term", line1: "24 Months", line2: "SOFR + Spread" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`px-6 py-6 ${i > 0 ? "border-l border-silver-mist/[0.07]" : ""} ${i >= 2 ? "border-t sm:border-t-0 border-silver-mist/[0.07]" : ""}`}
                >
                  <p className="text-accent-brown/50 font-body text-[10px] tracking-wider uppercase mb-3">{item.label}</p>
                  <p className="text-silver-mist font-display text-sm font-medium leading-snug">{item.line1}</p>
                  <p className="text-silver-mist/60 font-body text-sm">{item.line2}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <div className="w-20 h-[2px] bg-accent-brown mb-5" />
            <p className="font-serif text-lg sm:text-xl italic text-accent-brown">
              Not a promise. A structure.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — TRACK RECORD
          Dark section — $40.5M through everything
      ═══════════════════════════════════════════ */}
      <section className="bg-obsidian px-6 sm:px-12 lg:px-20 py-24 lg:py-36">
        <div className="max-w-5xl">
          <div className="w-12 h-[2px] bg-accent-brown mb-6" />
          <p className="text-silver-mist/40 font-display text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-16">
            Net Profit · 33 Full-Cycle Loans
          </p>

          <h2 className="font-serif text-6xl sm:text-7xl lg:text-[8rem] font-bold text-silver-mist leading-[0.85] tracking-tight">
            $40.5M
          </h2>
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl italic text-accent-brown leading-tight mt-4">
            Through everything.
          </p>

          {/* Crisis cards */}
          <div className="grid sm:grid-cols-3 gap-[1px] bg-silver-mist/[0.07] mt-20 mb-20">
            {[
              { title: "COVID-19", year: "2020", line1: "Global shutdown.", line2: "Every dollar returned." },
              { title: "Rate Shock", year: "2022–23", line1: "Fastest hiking cycle", line2: "in modern history." },
              { title: "Geopolitical", year: "2022–26", line1: "Ongoing disruption.", line2: "Portfolio held firm." },
            ].map((item) => (
              <div key={item.title} className="bg-obsidian p-6 sm:p-8">
                <p className="font-display font-semibold text-silver-mist text-sm">{item.title}</p>
                <p className="text-accent-brown/60 font-body text-xs mt-1 mb-4">{item.year}</p>
                <p className="text-silver-mist/40 font-body text-sm leading-relaxed">
                  {item.line1}<br />{item.line2}
                </p>
              </div>
            ))}
          </div>

          {/* Performance metrics */}
          <div className="border-t border-accent-brown/20 pt-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-8">
              {[
                { value: "19%", line1: "Net IRR", line2: "(Unlevered)" },
                { value: "1.22x", line1: "Net", line2: "MOIC" },
                { value: "100%", line1: "Capital", line2: "Recovery" },
                { value: "33", line1: "Full-Cycle", line2: "Loans" },
              ].map((item) => (
                <div key={item.value}>
                  <p className="text-3xl sm:text-4xl font-serif font-bold text-silver-mist">{item.value}</p>
                  <p className="text-accent-brown/60 font-body text-[10px] tracking-wider uppercase mt-3">{item.line1}</p>
                  <p className="text-accent-brown/60 font-body text-[10px] tracking-wider uppercase">{item.line2}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-silver-mist/30 font-body text-sm leading-relaxed max-w-md mt-14 italic">
            Not hypothetical. Not back-tested. Real capital deployed, real returns delivered, through the worst conditions of the last two decades.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — FEE STRUCTURE + LIQUIDITY
          Light section — Two powerful arguments
      ═══════════════════════════════════════════ */}
      <section className="bg-[#FAF8F4] px-6 sm:px-12 lg:px-20 py-24 lg:py-36">
        <div className="max-w-5xl">
          {/* Fee Structure */}
          <div className="mb-28 lg:mb-36">
            <div className="w-12 h-[2px] bg-accent-brown mb-6" />
            <p className="text-accent-brown font-display text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-16">
              Oak Real Estate Partners
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[4.5rem] text-obsidian leading-[1.05] max-w-3xl">
              Your returns<br />
              shouldn't fund<br />
              <span className="italic text-accent-brown">someone else's carry.</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-[1px] bg-silver-mist/50 mt-16 overflow-hidden">
              <div className="bg-[#FAF8F4] p-6 sm:p-8">
                <p className="font-display font-semibold text-obsidian text-xs tracking-wider uppercase mb-5">Typical PE Fund</p>
                <div className="space-y-3 text-graphite-fog font-body text-sm">
                  <p>2% management fee</p>
                  <p>20% carried interest</p>
                  <p>10–12 year lock-up</p>
                  <p>Blind pool allocation</p>
                </div>
              </div>
              <div className="bg-obsidian p-6 sm:p-8">
                <p className="font-display font-semibold text-accent-brown text-xs tracking-wider uppercase mb-5">Oak Real Estate Partners</p>
                <div className="space-y-3 text-silver-mist/70 font-body text-sm">
                  <p>Transparent, aligned fees</p>
                  <p>No carried interest drag</p>
                  <p>12–36 month duration</p>
                  <p>Named collateral on every loan</p>
                </div>
              </div>
            </div>

            <p className="text-graphite-fog font-body text-sm leading-relaxed max-w-md mt-10">
              Every basis point matters. We built a fee structure that aligns our interests with yours — not the other way around.
            </p>
          </div>

          {/* Liquidity */}
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[4.5rem] text-obsidian leading-[1.05] max-w-3xl">
              Your capital<br />
              shouldn't be <span className="italic text-accent-brown">trapped</span><br />
              for a decade.
            </h2>

            <div className="mt-16 space-y-3">
              <div className="bg-graphite-fog/20 py-3.5 px-6 w-full">
                <p className="text-graphite-fog font-body text-sm">Typical PE Lock-up: 10–12 Years</p>
              </div>
              <div>
                <div className="bg-accent-brown py-3.5 px-6 w-[28%] min-w-[200px]">
                  <p className="text-white font-display text-sm font-medium">Oak: 12–36 Months</p>
                </div>
                <p className="font-serif text-base sm:text-lg italic text-accent-brown mt-4 ml-1">
                  Capital returned. Reinvested. Compounding.
                </p>
              </div>
            </div>

            <p className="text-graphite-fog font-body text-sm leading-relaxed max-w-md mt-10">
              Short-duration bridge loans that self-liquidate in 12–36 months. No capital calls years into the future. No delayed exits. Your money works — and comes back — on your timeline.
            </p>

            <div className="border-t border-obsidian/10 pt-8 mt-14">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-8">
                {[
                  { value: "12–36 Mo", label: "Loan Duration" },
                  { value: "SOFR+", label: "Floating Rate" },
                  { value: "$50K", label: "Minimum" },
                  { value: "Quarterly", label: "Distributions" },
                ].map((d) => (
                  <div key={d.value}>
                    <p className="text-xl sm:text-2xl font-serif font-bold text-obsidian">{d.value}</p>
                    <p className="text-accent-brown/80 font-body text-[10px] tracking-[0.15em] uppercase mt-2">{d.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — THE CLOSE
          Dark section — Emotional CTA + Form
      ═══════════════════════════════════════════ */}
      <section ref={formRef} className="bg-obsidian px-6 sm:px-12 lg:px-20 py-24 lg:py-36">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-silver-mist/90 leading-[1.4] italic">
              If a correction arrives in the next 90 days,<br className="hidden sm:block" />
              does your portfolio hold?
            </p>
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl italic text-accent-brown leading-[1.4] mt-2">
              Or does it just feel like it will?
            </p>
            <p className="text-silver-mist/30 font-body text-sm mt-8 max-w-md mx-auto">
              The gap between those two answers is where fortunes are quietly lost.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <p className="text-silver-mist font-display text-sm tracking-[0.15em] uppercase mb-8 text-center">
              Get the Full Report
            </p>
            <OptInForm id="report-form" />
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="bg-obsidian border-t border-silver-mist/[0.05] px-6 sm:px-12 lg:px-20 py-8">
        <div className="max-w-5xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <p className="font-display font-semibold text-silver-mist text-xs tracking-wider">Oak Real Estate Partners</p>
            <p className="text-silver-mist/20 font-body text-[10px] tracking-[0.15em] uppercase mt-1">
              Institutional CRE Lending · Senior Secured · Real Assets
            </p>
          </div>
          <a
            href="https://oakrepartners.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-brown font-body text-xs tracking-wide hover:underline underline-offset-4"
          >
            oakrepartners.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MarketCorrection;
