import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const MarketCorrection = () => {
  const navigate = useNavigate();
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
    document.getElementById("report-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="2026 Institutional Investor Report"
        description="79% of institutional investors expect a market correction in 2026. Learn how senior-secured, real-asset-backed lending is structured to protect capital."
        canonicalUrl="/market-correction-report"
      />

      {/* Section 1 — Hero (Dark) */}
      <section className="relative bg-obsidian min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-24 overflow-hidden">
        {/* Ghost text background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
          <span className="text-[20rem] sm:text-[28rem] font-display font-bold text-silver-mist/[0.03] leading-none">
            79%
          </span>
        </div>

        <div className="relative z-10 max-w-4xl">
          <p className="text-accent-brown font-display text-xs sm:text-sm tracking-[0.25em] uppercase mb-10">
            2026 Institutional Investor Data
          </p>

          <h1 className="font-serif text-7xl sm:text-8xl lg:text-[9rem] font-bold text-silver-mist leading-[0.9] tracking-tight mb-6">
            79%
          </h1>

          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-silver-mist leading-[1.2] mb-4">
            expect a correction.
          </p>
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-[1.2]">
            <span className="text-silver-mist">The institutions are </span>
            <span className="italic text-accent-brown">already positioned.</span>
          </p>

          <p className="text-silver-mist/50 font-body text-base sm:text-lg leading-relaxed mt-10 max-w-xl">
            Not a dip. Not a rotation. A correction — the kind that reshapes portfolios overnight and punishes the unprepared.
          </p>

          {/* Stats row */}
          <div className="mt-16 pt-8 border-t border-silver-mist/10">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-silver-mist">49%</p>
                <p className="text-accent-brown/70 font-body text-xs sm:text-sm mt-1">expect 10–20%<br />decline</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-silver-mist">45%</p>
                <p className="text-accent-brown/70 font-body text-xs sm:text-sm mt-1">cite geopolitical risk<br />as #1 fear</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-silver-mist">63%</p>
                <p className="text-accent-brown/70 font-body text-xs sm:text-sm mt-1">cite valuations as<br />top portfolio risk</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — The Structure (Light/Cream) */}
      <section className="bg-[#FAF8F5] px-6 sm:px-12 lg:px-20 py-24 lg:py-32">
        <div className="max-w-4xl">
          <div className="w-16 h-[3px] bg-accent-brown mb-8" />
          <p className="text-accent-brown font-display text-xs tracking-[0.25em] uppercase mb-12">
            Oak Real Estate Partners
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-obsidian leading-[1.05] mb-6">
            Every dollar<br />
            has an{" "}
            <span className="italic text-accent-brown">address.</span>
          </h2>

          <p className="text-graphite-fog font-body text-base sm:text-lg leading-relaxed max-w-xl mt-8 mb-16">
            Senior-secured, first-lien bridge loans on income-producing commercial real estate. Every dollar backed by a specific property you can see, value, and verify. Not a ticker. Not a blind pool. An address.
          </p>

          {/* Sample Position Card */}
          <div className="bg-obsidian rounded-sm overflow-hidden mb-16">
            <div className="px-6 py-4 border-b border-silver-mist/10">
              <p className="text-accent-brown font-body text-xs tracking-[0.15em] uppercase">Sample Position</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-silver-mist/10">
              {[
                { label: "Asset", value: "Mixed-Use\nRetail/Office" },
                { label: "Position", value: "Senior Secured\n1st Lien" },
                { label: "LTV", value: "62%\nStabilized" },
                { label: "Term", value: "24 Months\nSOFR + Spread" },
              ].map((item) => (
                <div key={item.label} className="px-6 py-5">
                  <p className="text-accent-brown/70 font-body text-xs mb-2">{item.label}</p>
                  <p className="text-silver-mist font-display text-sm sm:text-base font-medium whitespace-pre-line leading-snug">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-graphite-fog font-body text-base leading-relaxed max-w-lg mb-8">
            No blind pools. No "black box" allocations. Every loan is backed by a specific, identifiable commercial property with institutional underwriting.
          </p>

          <div className="w-24 h-[2px] bg-accent-brown mb-4" />
          <p className="font-serif text-xl italic text-accent-brown">
            Not a promise. A structure.
          </p>
        </div>
      </section>

      {/* Section 3 — Track Record (Dark) */}
      <section className="bg-obsidian px-6 sm:px-12 lg:px-20 py-24 lg:py-32">
        <div className="max-w-4xl">
          <div className="w-16 h-[3px] bg-accent-brown mb-8" />
          <p className="text-silver-mist/60 font-display text-xs tracking-[0.25em] uppercase mb-12">
            Net Profit · 33 Full-Cycle Loans
          </p>

          <h2 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold text-silver-mist leading-[0.9] mb-4">
            $40.5M
          </h2>
          <p className="font-serif text-3xl sm:text-4xl italic text-accent-brown leading-tight mb-16">
            Through everything.
          </p>

          {/* Crisis cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-16">
            {[
              { title: "COVID-19", year: "2020", text: "Global shutdown.\nEvery dollar returned." },
              { title: "Rate Shock", year: "2022–23", text: "Fastest hiking cycle\nin modern history." },
              { title: "Geopolitical", year: "2022–26", text: "Ongoing disruption.\nPortfolio held firm." },
            ].map((item) => (
              <div key={item.title} className="border border-silver-mist/10 p-5 rounded-sm">
                <p className="font-display font-semibold text-silver-mist text-sm mb-1">{item.title}</p>
                <p className="text-accent-brown/70 font-body text-xs mb-3">{item.year}</p>
                <p className="text-silver-mist/60 font-body text-sm whitespace-pre-line leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Performance stats */}
          <div className="border-t border-accent-brown/30 pt-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { value: "19%", label: "Net IRR\n(Unlevered)" },
                { value: "1.22x", label: "Net\nMOIC" },
                { value: "100%", label: "Capital\nRecovery" },
                { value: "33", label: "Full-Cycle\nLoans" },
              ].map((item) => (
                <div key={item.value}>
                  <p className="text-3xl sm:text-4xl font-display font-bold text-silver-mist">{item.value}</p>
                  <p className="text-accent-brown/70 font-body text-xs mt-2 whitespace-pre-line">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-silver-mist/50 font-body text-base leading-relaxed max-w-lg mt-12 italic">
            Not hypothetical. Not back-tested. Real capital deployed, real returns delivered, through the worst conditions of the last two decades.
          </p>
        </div>
      </section>

      {/* Section 4 — Fee Structure (Light/Cream) */}
      <section className="bg-[#FAF8F5] px-6 sm:px-12 lg:px-20 py-24 lg:py-32">
        <div className="max-w-4xl">
          <div className="w-16 h-[3px] bg-accent-brown mb-8" />
          <p className="text-accent-brown font-display text-xs tracking-[0.25em] uppercase mb-12">
            Oak Real Estate Partners
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-obsidian leading-[1.05] mb-16">
            Your returns<br />
            shouldn't fund{" "}
            <span className="italic text-accent-brown">someone else's carry.</span>
          </h2>

          {/* Comparison cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <div className="border border-silver-mist/40 p-6 rounded-sm">
              <p className="font-display font-semibold text-obsidian text-sm mb-4">Typical PE Fund</p>
              <ul className="space-y-2 text-graphite-fog font-body text-sm">
                <li>2% management fee</li>
                <li>20% carried interest</li>
                <li>10–12 year lock-up</li>
                <li>Blind pool allocation</li>
              </ul>
            </div>
            <div className="bg-obsidian border border-accent-brown/20 p-6 rounded-sm">
              <p className="font-display font-semibold text-accent-brown text-sm mb-4">Oak Real Estate Partners</p>
              <ul className="space-y-2 text-silver-mist/80 font-body text-sm">
                <li>Transparent, aligned fees</li>
                <li>No carried interest drag</li>
                <li>12–36 month duration</li>
                <li>Named collateral on every loan</li>
              </ul>
            </div>
          </div>

          <p className="text-graphite-fog font-body text-base leading-relaxed max-w-lg">
            Every basis point matters. We built a fee structure that aligns our interests with yours — not the other way around.
          </p>
        </div>
      </section>

      {/* Section 5 — Liquidity (Dark) */}
      <section className="bg-obsidian px-6 sm:px-12 lg:px-20 py-24 lg:py-32">
        <div className="max-w-4xl">
          <p className="text-accent-brown font-display text-xs tracking-[0.25em] uppercase mb-12">
            Oak Real Estate Partners
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-silver-mist leading-[1.05] mb-6">
            Your capital<br />
            shouldn't be{" "}
            <span className="italic text-accent-brown">trapped</span>
            <br />
            for a decade.
          </h2>

          <p className="text-silver-mist/50 font-body text-base leading-relaxed max-w-xl mt-8 mb-16">
            Short-duration bridge loans that self-liquidate in 12–36 months. No capital calls years into the future. No delayed exits. Your money works — and comes back — on your timeline.
          </p>

          {/* Duration comparison */}
          <div className="space-y-4 mb-16">
            <div className="relative">
              <div className="bg-graphite-fog/60 rounded-sm py-3 px-5 w-full">
                <p className="text-silver-mist/70 font-body text-sm">Typical PE Lock-up: 10–12 Years</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-accent-brown rounded-sm py-3 px-5 w-[30%] min-w-[200px]">
                <p className="text-white font-display text-sm font-medium">Oak: 12–36 Months</p>
              </div>
              <p className="font-serif text-lg italic text-accent-brown mt-3 ml-1">
                Capital returned. Reinvested. Compounding.
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="border-t border-silver-mist/10 pt-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { value: "12–36 Mo", label: "Loan Duration" },
                { value: "SOFR+", label: "Floating Rate" },
                { value: "$50K", label: "Minimum" },
                { value: "Quarterly", label: "Distributions" },
              ].map((item) => (
                <div key={item.value}>
                  <p className="text-2xl sm:text-3xl font-display font-bold text-silver-mist">{item.value}</p>
                  <p className="text-accent-brown/70 font-body text-xs tracking-[0.1em] uppercase mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — CTA + Form (Light/Cream) */}
      <section id="report-form" className="bg-[#FAF8F5] px-6 sm:px-12 lg:px-20 py-24 lg:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-2xl sm:text-3xl text-obsidian italic leading-snug mb-3">
            If a correction arrives in the next 90 days, does your portfolio hold?
          </p>
          <p className="font-serif text-2xl sm:text-3xl italic leading-snug mb-10">
            <span className="text-accent-brown">Or does it just feel like it will?</span>
          </p>

          <p className="text-graphite-fog font-body text-base mb-12">
            The gap between those two answers is where fortunes are quietly lost.
          </p>

          {/* Form */}
          <div className="bg-obsidian rounded-sm p-8 sm:p-10 text-left">
            <h2 className="text-xl font-display font-medium text-silver-mist mb-2">
              Get the Full Report
            </h2>
            <p className="text-silver-mist/50 font-body text-sm mb-8">
              See the data driving institutional strategy — and how Oak structures around it.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-silver-mist/5 border-silver-mist/15 text-silver-mist placeholder:text-silver-mist/40 h-12 font-body rounded-sm"
                  required
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-silver-mist/5 border-silver-mist/15 text-silver-mist placeholder:text-silver-mist/40 h-12 font-body rounded-sm"
                  required
                />
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-silver-mist/5 border-silver-mist/15 text-silver-mist placeholder:text-silver-mist/40 h-12 font-body rounded-sm"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white font-body font-medium h-12 text-base rounded-sm"
              >
                {isSubmitting ? "Submitting..." : "Send Me the Report"}
                {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
              <p className="text-silver-mist/30 text-xs font-body text-center">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-obsidian border-t border-silver-mist/10 px-6 sm:px-12 lg:px-20 py-10">
        <div className="max-w-4xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="font-display font-semibold text-silver-mist text-sm">Oak Real Estate Partners</p>
            <p className="text-silver-mist/30 font-body text-xs tracking-[0.1em] uppercase mt-1">
              Institutional CRE Lending · Senior Secured · Real Assets
            </p>
          </div>
          <a
            href="https://oakrepartners.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-brown font-body text-sm hover:underline underline-offset-4"
          >
            oakrepartners.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MarketCorrection;
