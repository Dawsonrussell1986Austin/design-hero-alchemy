import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackCTAClick } from "@/lib/gtm";

const HeroSection = () => {
  return (
    <div className="relative z-20 lg:min-h-screen px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 md:pt-44 lg:pt-48 pb-16 sm:pb-24 overflow-hidden flex flex-col items-center justify-start lg:justify-center">

      {/* Ghost typography */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:flex items-center justify-end">
        <span className="font-display font-medium italic text-cream/[0.04] text-[18rem] md:text-[26rem] lg:text-[38rem] leading-none -mr-20 md:-mr-32 lg:-mr-48 select-none">
          Oak
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Eyebrow Label */}
        <p className="text-xs sm:text-sm text-gold-accent/70 font-body uppercase tracking-[0.25em] mb-4 sm:mb-8">
          Every dollar has an address
        </p>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-normal leading-[1.1] tracking-tight mb-6 sm:mb-10">
          <span className="text-cream">One platform for the full life</span>
          <br />
          <span className="text-gold-accent">of a commercial real estate loan.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg lg:text-xl text-silver-mist/60 max-w-3xl mx-auto leading-relaxed font-body font-normal mb-8 sm:mb-12">
          Oak originates, underwrites, and services middle-market CRE credit — a $2–$20 million bridge today, government-backed permanent financing at stabilization — all in-house, to the standard institutions require. For sponsors, that's one relationship from first loan to final payoff; for insurance, foundation, and endowment partners, a disciplined origination engine at scale.
        </p>

        {/* CTA Buttons */}
        <div className="mb-12 sm:mb-20 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/about" onClick={() => trackCTAClick('Explore the Platform', '/about', 'hero_section')}>
            <Button
              size="lg"
              className="bg-gold-accent hover:bg-gold-accent/90 text-abyss px-8 py-3.5 text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm hover:scale-105 hover:shadow-lg hover:shadow-gold-accent/20"
            >
              Explore the Platform
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="/lending" onClick={() => trackCTAClick('Financing for Borrowers', '/lending', 'hero_section')}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-silver-mist/40 bg-transparent text-cream hover:bg-silver-mist hover:text-abyss hover:border-silver-mist px-8 py-3.5 text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm"
            >
              Financing for Borrowers
            </Button>
          </a>
          <a href="/investor-access" onClick={() => trackCTAClick('Investor Access', '/investor-access', 'hero_section')}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-silver-mist/40 bg-transparent text-cream hover:bg-silver-mist hover:text-abyss hover:border-silver-mist px-8 py-3.5 text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm"
            >
              Investor Access
            </Button>
          </a>
        </div>

        {/* Proof Bar — structural facts only */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2">$520M+</div>
            <div className="text-[10px] sm:text-xs font-body text-cream/60 uppercase tracking-wider">Originated Across Managed Funds</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2">33</div>
            <div className="text-[10px] sm:text-xs font-body text-cream/60 uppercase tracking-wider">Full-Cycle Loans</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2">3</div>
            <div className="text-[10px] sm:text-xs font-body text-cream/60 uppercase tracking-wider">Insurance-Company Relationships</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2">FHA MAP</div>
            <div className="text-[10px] sm:text-xs font-body text-cream/60 uppercase tracking-wider">Approved Platform</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
