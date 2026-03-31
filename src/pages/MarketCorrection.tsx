import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Shield, Building2, TrendingDown, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="2026 Institutional Investor Report"
        description="79% of institutional investors expect a market correction in 2026. Learn how senior-secured, real-asset-backed lending is structured to protect capital."
        canonicalUrl="/market-correction-report"
      />
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-obsidian via-graphite-fog to-obsidian pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-brown rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-deep-petrol rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Copy */}
            <div className="space-y-6">
              <p className="text-accent-brown font-display text-sm tracking-[0.2em] uppercase">
                2026 Institutional Investor Data
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-silver-mist leading-[0.95] tracking-tight">
                79%
              </h1>
              <p className="text-xl sm:text-2xl text-silver-mist/80 font-body leading-relaxed">
                of institutional investors expect a market correction in 2026.
              </p>
              <p className="text-silver-mist/60 font-body leading-relaxed max-w-lg">
                Not a dip. Not a rotation. A correction — the kind that reshapes portfolios overnight and punishes the unprepared. The institutions tracking this data are already positioning around it.
              </p>
            </div>

            {/* Right — Opt-in Form */}
            <div className="bg-background/[0.03] backdrop-blur-sm border border-silver-mist/10 rounded-xl p-8">
              <h2 className="text-xl font-display font-medium text-silver-mist mb-2">
                Get the Full Report
              </h2>
              <p className="text-silver-mist/60 font-body text-sm mb-6">
                See the data driving institutional strategy — and how Oak structures around it.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-silver-mist/5 border-silver-mist/15 text-silver-mist placeholder:text-silver-mist/40 h-12 font-body"
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="bg-silver-mist/5 border-silver-mist/15 text-silver-mist placeholder:text-silver-mist/40 h-12 font-body"
                    required
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-silver-mist/5 border-silver-mist/15 text-silver-mist placeholder:text-silver-mist/40 h-12 font-body"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white font-body font-medium h-12 text-base"
                >
                  {isSubmitting ? "Submitting..." : "Send Me the Report"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
                <p className="text-silver-mist/40 text-xs font-body text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-obsidian border-t border-silver-mist/10 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-display font-bold text-silver-mist">49%</p>
              <p className="text-silver-mist/50 font-body text-sm mt-1">expect 10–20% decline</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-display font-bold text-silver-mist">45%</p>
              <p className="text-silver-mist/50 font-body text-sm mt-1">cite geopolitical risk as #1 fear</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-display font-bold text-silver-mist">63%</p>
              <p className="text-silver-mist/50 font-body text-sm mt-1">cite valuations as top portfolio risk</p>
            </div>
          </div>
        </div>
      </section>

      {/* Body Content */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-12">
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-obsidian leading-tight">
                The institutions tracking this data aren't waiting for the correction to arrive.
              </h2>
              <p className="text-lg text-graphite-fog font-body leading-relaxed">
                Insurance companies, foundations, endowments — the same institutions tracking these numbers are the ones who invest alongside Oak Real Estate Partners. They didn't wait. They structured around it.
              </p>
            </div>

            <div className="border-l-2 border-accent-brown pl-6">
              <p className="text-lg font-body text-obsidian leading-relaxed italic">
                Senior-secured, first-lien bridge loans on income-producing commercial real estate. Every dollar backed by a specific property you can see, value, and verify. Not a ticker. Not a blind pool. An address.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-start space-y-3 p-5 rounded-lg bg-muted/50">
                <Shield className="h-6 w-6 text-accent-brown" />
                <h3 className="font-display font-medium text-obsidian text-sm">Senior-Secured</h3>
                <p className="text-sm text-graphite-fog font-body leading-relaxed">
                  First-lien position on every loan. Capital preservation is structural, not theoretical.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-3 p-5 rounded-lg bg-muted/50">
                <Building2 className="h-6 w-6 text-accent-brown" />
                <h3 className="font-display font-medium text-obsidian text-sm">Real Asset Backed</h3>
                <p className="text-sm text-graphite-fog font-body leading-relaxed">
                  Every dollar tied to a specific, income-producing commercial property.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-3 p-5 rounded-lg bg-muted/50">
                <TrendingDown className="h-6 w-6 text-accent-brown" />
                <h3 className="font-display font-medium text-obsidian text-sm">Downside Structured</h3>
                <p className="text-sm text-graphite-fog font-body leading-relaxed">
                  Behaves differently in stressed markets because the collateral is physical and verifiable.
                </p>
              </div>
            </div>

            {/* Closing CTA */}
            <div className="text-center pt-8 space-y-5">
              <p className="text-lg font-display text-obsidian italic">
                If a correction arrives in the next 90 days, does your portfolio hold?{" "}
                <span className="text-accent-brown">Or does it just feel like it will?</span>
              </p>
              <p className="text-graphite-fog font-body">
                The gap between those two answers is where fortunes are quietly lost.
              </p>
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-accent-brown hover:bg-accent-brown/90 text-white font-body font-medium h-12 px-8"
              >
                Get the Report <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketCorrection;
