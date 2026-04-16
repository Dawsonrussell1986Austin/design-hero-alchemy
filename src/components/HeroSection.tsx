import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { trackCTAClick } from "@/lib/gtm";

const HeroSection = () => {
  return (
    <div className="relative z-20 min-h-screen px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-28 overflow-hidden mobile-nav-safe">
      {/* Smooth floating gradient backgrounds */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold-accent/15 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-garnet-edge/15 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-gold-accent/8 to-garnet-edge/8 rounded-full blur-3xl opacity-60 animate-[breathe_6s_ease-in-out_infinite]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Main Content */}
          <div className="space-y-12">
            {/* Eyebrow Label */}
            <p className="text-xs sm:text-sm text-gold-accent/70 font-body uppercase tracking-[0.25em] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
              Every dollar has an address
            </p>

            {/* Main Headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-display font-normal leading-[1.05] tracking-tight opacity-0 animate-[slideUp_0.8s_ease-out_0.3s_forwards]">
                <span className="text-cream">Senior-Secured</span>
                <br />
                <span className="text-cream">CRE Credit.</span>
                <br />
                <span className="text-gold-accent">Principal-led.</span>
                <br />
                <span className="text-gold-accent">On the record.</span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-silver-mist/60 max-w-lg leading-relaxed font-body font-normal opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
              A specialist lending platform led by principals with a combined $25 billion of CRE financing experience across eight market cycles. Oak's 33 full-cycle loans have produced a 19% net IRR with no principal losses to date.<sup>1</sup>
            </p>
            
            {/* CTA Button */}
            <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
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
          </div>
          
          {/* Right Column - Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6 mt-8 lg:mt-0">
            <div className="bg-graphite-fog/30 backdrop-blur-sm border border-gold-accent/20 rounded-lg p-6 sm:p-7 lg:p-8 opacity-0 animate-[slideInRight_0.8s_ease-out_1s_forwards] hover:scale-[1.02] transition-all duration-300 hover:bg-graphite-fog/40 mobile-friendly-card touch-target">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-gold-accent mb-3">$460M</div>
              <div className="text-xs sm:text-sm font-body text-cream/70 uppercase tracking-wider">
                OAK AUM
              </div>
            </div>
            
            <div className="bg-graphite-fog/30 backdrop-blur-sm border border-gold-accent/20 rounded-lg p-6 sm:p-7 lg:p-8 opacity-0 animate-[slideInRight_0.8s_ease-out_1.2s_forwards] hover:scale-[1.02] transition-all duration-300 hover:bg-graphite-fog/40 mobile-friendly-card touch-target">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-gold-accent mb-3">$200M</div>
              <div className="text-xs sm:text-sm font-body text-cream/70 uppercase tracking-wider">
                OAK CUMULATIVE ORIGINATIONS · 33 FULL-CYCLE LOANS
              </div>
            </div>
            
            <div className="bg-graphite-fog/30 backdrop-blur-sm border border-gold-accent/20 rounded-lg p-6 sm:p-7 lg:p-8 opacity-0 animate-[slideInRight_0.8s_ease-out_1.4s_forwards] hover:scale-[1.02] transition-all duration-300 hover:bg-graphite-fog/40 mobile-friendly-card touch-target">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-gold-accent mb-3">19% / 21.9%</div>
              <div className="text-xs sm:text-sm font-body text-cream/70 uppercase tracking-wider">
                OAK NET / GROSS IRR — 33 FULL-CYCLE LOANS<sup>1</sup>
              </div>
            </div>

            <div className="bg-graphite-fog/30 backdrop-blur-sm border border-gold-accent/20 rounded-lg p-6 sm:p-7 lg:p-8 opacity-0 animate-[slideInRight_0.8s_ease-out_1.6s_forwards] hover:scale-[1.02] transition-all duration-300 hover:bg-graphite-fog/40 mobile-friendly-card touch-target">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-gold-accent mb-3">$25B+</div>
              <div className="text-xs sm:text-sm font-body text-cream/70 uppercase tracking-wider">
                TEAM CAREER FINANCINGS ACROSS EIGHT CYCLES<sup>2</sup>
              </div>
            </div>
          </div>
          
          {/* Statistics Footnotes */}
          <div className="lg:col-span-2 mt-10">
            <p className="text-xs text-silver-mist/50 font-sans text-center leading-relaxed max-w-5xl mx-auto">
              <sup>1</sup> Oak Real Estate Partners performance since inception. Net of management fees and expenses. Past performance is not indicative of future results. <sup>2</sup> Aggregate CRE financings completed by current Oak principals during their prior careers at predecessor firms. Not Oak performance; presented as team experience only.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
