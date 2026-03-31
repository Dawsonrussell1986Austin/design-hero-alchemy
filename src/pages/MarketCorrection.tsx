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

  return (
    <div className="min-h-screen flex flex-col selection:bg-accent-brown/30">
      <SEOHead
        title="2026 Institutional Investor Report"
        description="79% of institutional investors expect a market correction in 2026. Learn how senior-secured, real-asset-backed lending is structured to protect capital."
        canonicalUrl="/market-correction-report"
      />

      {/* Hero — Dark, form above the fold */}
      <section className="relative bg-obsidian min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-20 pt-16 pb-12 overflow-hidden">
        {/* Ghost watermark */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.025]">
          <span className="text-[32rem] font-serif font-bold text-silver-mist leading-none block">79</span>
        </div>

        {/* Top bar */}
        <div className="relative z-10">
          <div className="w-10 h-[2px] bg-accent-brown mb-3" />
          <p className="text-accent-brown font-display text-[10px] sm:text-xs tracking-[0.3em] uppercase">
            Oak Real Estate Partners
          </p>
        </div>

        {/* Two-column: copy + form */}
        <div className="relative z-10 max-w-5xl mt-auto mb-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Copy */}
            <div>
              <p className="text-accent-brown font-display text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-8">
                2026 Institutional Investor Data
              </p>
              <h1 className="font-serif text-[5rem] sm:text-[6rem] lg:text-[8rem] font-bold text-silver-mist leading-[0.85] tracking-tighter">
                79%
              </h1>
              <p className="font-serif text-lg sm:text-xl lg:text-2xl text-silver-mist/90 leading-[1.3] mt-6">
                of institutional investors expect a market correction in 2026.
              </p>
              <p className="text-silver-mist/40 font-body text-sm leading-relaxed mt-6 max-w-md">
                Not a dip. Not a rotation. A correction — the kind that reshapes portfolios overnight and punishes the unprepared.
              </p>
            </div>

            {/* Right — Form */}
            <div className="border border-silver-mist/[0.07] p-8 sm:p-10">
              <p className="text-silver-mist font-display text-sm tracking-[0.15em] uppercase mb-2">
                Get the Full Report
              </p>
              <p className="text-silver-mist/40 font-body text-sm mb-8">
                See the data driving institutional strategy — and how Oak structures around it.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <Input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="bg-transparent border-silver-mist/15 text-silver-mist placeholder:text-silver-mist/30 h-12 font-body rounded-none border-t-0 border-x-0 border-b focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-accent-brown px-0" required />
                  <Input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="bg-transparent border-silver-mist/15 text-silver-mist placeholder:text-silver-mist/30 h-12 font-body rounded-none border-t-0 border-x-0 border-b focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-accent-brown px-0" required />
                </div>
                <Input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-transparent border-silver-mist/15 text-silver-mist placeholder:text-silver-mist/30 h-12 font-body rounded-none border-t-0 border-x-0 border-b focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-accent-brown px-0" required />
                <div className="pt-3">
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white font-display text-sm tracking-[0.1em] uppercase h-13 rounded-none">
                    {isSubmitting ? "Submitting..." : "Send Me the Report"}
                    {!isSubmitting && <ArrowRight className="ml-3 h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-silver-mist/20 text-[11px] font-body text-center pt-1 tracking-wide">No spam. Unsubscribe anytime.</p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="relative z-10 border-t border-silver-mist/[0.07] pt-8 mt-12">
          <div className="grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl">
            {[
              { stat: "49%", note: "expect 10–20% decline" },
              { stat: "45%", note: "cite geopolitical risk as #1 fear" },
              { stat: "63%", note: "cite valuations as top portfolio risk" },
            ].map((d) => (
              <div key={d.stat}>
                <p className="text-xl sm:text-2xl font-serif font-bold text-silver-mist">{d.stat}</p>
                <p className="text-silver-mist/30 font-body text-[10px] sm:text-xs mt-1 leading-snug">{d.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body Content — Light/Cream */}
      <section className="bg-[#FAF8F4] px-6 sm:px-12 lg:px-20 py-24 lg:py-36">
        <div className="max-w-4xl">
          <div className="w-12 h-[2px] bg-accent-brown mb-6" />
          <p className="text-accent-brown font-display text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-16">
            Oak Real Estate Partners
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-obsidian leading-[1.1] max-w-2xl">
            The institutions tracking this data aren't waiting for the correction to{" "}
            <span className="italic text-accent-brown">arrive.</span>
          </h2>

          <p className="text-graphite-fog font-body text-sm sm:text-base leading-relaxed max-w-lg mt-10">
            Insurance companies, foundations, endowments — the same institutions tracking these numbers are the ones who invest alongside Oak Real Estate Partners. They didn't wait. They structured around it.
          </p>

          {/* Blockquote */}
          <div className="border-l-2 border-accent-brown pl-6 sm:pl-8 mt-16">
            <p className="font-serif text-lg sm:text-xl text-obsidian leading-relaxed italic max-w-lg">
              Senior-secured, first-lien bridge loans on income-producing commercial real estate. Every dollar backed by a specific property you can see, value, and verify. Not a ticker. Not a blind pool. An address.
            </p>
          </div>

          {/* Value prop cards */}
          <div className="grid sm:grid-cols-3 gap-[1px] bg-obsidian/10 mt-20 overflow-hidden">
            {[
              { title: "Senior-Secured", text: "First-lien position on every loan. Capital preservation is structural, not theoretical." },
              { title: "Real Asset Backed", text: "Every dollar tied to a specific, income-producing commercial property." },
              { title: "Downside Structured", text: "Behaves differently in stressed markets because the collateral is physical and verifiable." },
            ].map((card) => (
              <div key={card.title} className="bg-[#FAF8F4] p-6 sm:p-8">
                <p className="font-display font-semibold text-obsidian text-xs tracking-wider uppercase mb-4">{card.title}</p>
                <p className="text-graphite-fog font-body text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA — Dark */}
      <section className="bg-obsidian px-6 sm:px-12 lg:px-20 py-24 lg:py-36">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-silver-mist/90 leading-[1.4] italic">
            If a correction arrives in the next 90 days, does your portfolio hold?
          </p>
          <p className="font-serif text-xl sm:text-2xl lg:text-3xl italic text-accent-brown leading-[1.4] mt-2">
            Or does it just feel like it will?
          </p>
          <p className="text-silver-mist/30 font-body text-sm mt-8 max-w-md mx-auto">
            The gap between those two answers is where fortunes are quietly lost.
          </p>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-10 bg-accent-brown hover:bg-accent-brown/90 text-white font-display text-sm tracking-[0.1em] uppercase h-13 px-10 rounded-none"
          >
            Get the Report <ArrowRight className="ml-3 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="bg-obsidian border-t border-silver-mist/[0.05] px-6 sm:px-12 lg:px-20 py-8">
        <div className="max-w-4xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <p className="font-display font-semibold text-silver-mist text-xs tracking-wider">Oak Real Estate Partners</p>
            <p className="text-silver-mist/20 font-body text-[10px] tracking-[0.15em] uppercase mt-1">
              Institutional CRE Lending · Senior Secured · Real Assets
            </p>
          </div>
          <a href="https://oakrepartners.com" target="_blank" rel="noopener noreferrer" className="text-accent-brown font-body text-xs tracking-wide hover:underline underline-offset-4">
            oakrepartners.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MarketCorrection;
