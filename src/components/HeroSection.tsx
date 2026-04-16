import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackCTAClick } from "@/lib/gtm";

const HeroSection = () => {
  return (
    <div className="relative z-20 min-h-screen px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-28 overflow-hidden mobile-nav-safe flex flex-col items-center justify-center">
      
      <div className="max-w-5xl mx-auto text-center">
        {/* Eyebrow Label */}
        <p className="text-xs sm:text-sm text-gold-accent/70 font-body uppercase tracking-[0.25em] mb-10 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
          Every dollar has an address
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-normal leading-[1.1] tracking-tight mb-10 opacity-0 animate-[slideUp_0.8s_ease-out_0.3s_forwards]">
          <span className="text-cream">Senior-Secured</span>
          <br />
          <span className="text-cream italic">CRE Credit.</span>
          <br />
          <span className="text-gold-accent">Principal-led.</span>
          {" "}
          <span className="text-gold-accent">On the record.</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-silver-mist/60 max-w-2xl mx-auto leading-relaxed font-body font-normal mb-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
          A specialist lending platform led by principals with a combined $25 billion of CRE financing experience across eight market cycles. Oak's 33 full-cycle loans have produced a 19% net IRR with no principal losses to date.<sup>1</sup>
        </p>
        
        {/* CTA Button */}
        <div className="mb-20 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
          <a href="https://www.oakrepartners.com/videos/investment-strategy" onClick={() => trackCTAClick('Oak\'s Investment Strategy', 'https://www.oakrepartners.com/videos/investment-strategy', 'hero_section')}>
            <Button 
              size="lg" 
              className="bg-gold-accent hover:bg-gold-accent/90 text-abyss px-8 py-3.5 text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm hover:scale-105 hover:shadow-lg hover:shadow-gold-accent/20"
            >
              Oak's Investment Strategy
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_1s_forwards]">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2">$460M</div>
            <div className="text-[10px] sm:text-xs font-body text-cream/60 uppercase tracking-wider">Oak AUM</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2">$200M</div>
            <div className="text-[10px] sm:text-xs font-body text-cream/60 uppercase tracking-wider">Cumulative Originations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2">19%</div>
            <div className="text-[10px] sm:text-xs font-body text-cream/60 uppercase tracking-wider">Net IRR · 33 Loans<sup>1</sup></div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2">$25B+</div>
            <div className="text-[10px] sm:text-xs font-body text-cream/60 uppercase tracking-wider">Team Career Financings<sup>2</sup></div>
          </div>
        </div>

        {/* Footnotes */}
        <div className="mt-12">
          <p className="text-xs text-silver-mist/40 font-sans leading-relaxed max-w-4xl mx-auto">
            <sup>1</sup> Oak Real Estate Partners performance since inception. Net of management fees and expenses. Past performance is not indicative of future results. <sup>2</sup> Aggregate CRE financings completed by current Oak principals during their prior careers at predecessor firms. Not Oak performance; presented as team experience only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
