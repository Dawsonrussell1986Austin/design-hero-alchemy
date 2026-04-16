import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { trackCTAClick } from "@/lib/gtm";

const HeroSection = () => {
  return (
    <div className="relative z-20 min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] xl:min-h-[80vh] px-4 sm:px-6 pt-28 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden mobile-nav-safe">
      {/* Smooth floating gradient backgrounds */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold-accent/15 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-garnet-edge/15 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-gold-accent/8 to-garnet-edge/8 rounded-full blur-3xl opacity-60 animate-[breathe_6s_ease-in-out_infinite]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-medium leading-tight tracking-tight opacity-0 animate-[slideUp_0.8s_ease-out_0.2s_forwards] text-silver-mist">
                Senior-secured CRE credit, built for the market banks abandoned.
              </h1>
            </div>
            
            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-silver-mist/80 max-w-lg leading-relaxed font-body font-normal opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] mobile-text-scale">
              A specialist lending platform led by principals with a combined $25 billion of CRE financing experience across eight market cycles. Oak's 33 full-cycle loans have produced a 19% net IRR with no principal losses to date.<sup>1</sup>
            </p>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-gold-accent font-display font-medium tracking-wide opacity-0 animate-[fadeInUp_0.8s_ease-out_0.7s_forwards]">
              Protected capital. Proven experience. Real assets.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
              <Link to="/investing" onClick={() => trackCTAClick('Institutional Investors', '/investing', 'hero_section')}>
                <Button 
                  size="lg" 
                  className="bg-gold-accent hover:bg-gold-accent/90 text-abyss px-8 py-3 text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm hover:scale-105 hover:shadow-lg hover:shadow-gold-accent/20"
                >
                  Institutional Investors
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/lending" onClick={() => trackCTAClick('Borrowers', '/lending', 'hero_section')}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-silver-mist bg-silver-mist/10 text-cream hover:bg-silver-mist hover:text-abyss px-8 py-3 text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-silver-mist/20"
                >
                  Borrowers
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/invest" onClick={() => trackCTAClick('RIA Partners', '/invest', 'hero_section')}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-gold-accent/50 bg-gold-accent/10 text-gold-accent hover:bg-gold-accent hover:text-abyss px-8 py-3 text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm backdrop-blur-sm hover:scale-105"
                >
                  RIA Partners
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Column - Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-5 mt-8 lg:mt-0">
            <div className="bg-graphite-fog/30 backdrop-blur-sm border border-gold-accent/20 rounded-lg p-4 sm:p-6 lg:p-7 opacity-0 animate-[slideInRight_0.8s_ease-out_1s_forwards] hover:scale-105 transition-all duration-300 hover:bg-graphite-fog/40 mobile-friendly-card touch-target">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2 lg:mb-3">$460M</div>
              <div className="text-xs sm:text-xs lg:text-sm font-body text-cream/70 uppercase tracking-wide">
                OAK AUM
              </div>
            </div>
            
            <div className="bg-graphite-fog/30 backdrop-blur-sm border border-gold-accent/20 rounded-lg p-4 sm:p-6 lg:p-7 opacity-0 animate-[slideInRight_0.8s_ease-out_1.2s_forwards] hover:scale-105 transition-all duration-300 hover:bg-graphite-fog/40 mobile-friendly-card touch-target">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2 lg:mb-3">$200M</div>
              <div className="text-xs sm:text-xs lg:text-sm font-body text-cream/70 uppercase tracking-wide">
                OAK CUMULATIVE ORIGINATIONS · 33 FULL-CYCLE LOANS
              </div>
            </div>
            
            <div className="bg-graphite-fog/30 backdrop-blur-sm border border-gold-accent/20 rounded-lg p-4 sm:p-6 lg:p-7 opacity-0 animate-[slideInRight_0.8s_ease-out_1.4s_forwards] hover:scale-105 transition-all duration-300 hover:bg-graphite-fog/40 mobile-friendly-card touch-target">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2 lg:mb-3">19% / 21.9%</div>
              <div className="text-xs sm:text-xs lg:text-sm font-body text-cream/70 uppercase tracking-wide">
                OAK NET / GROSS IRR — 33 FULL-CYCLE LOANS<sup>1</sup>
              </div>
            </div>

            <div className="bg-graphite-fog/30 backdrop-blur-sm border border-gold-accent/20 rounded-lg p-4 sm:p-6 lg:p-7 opacity-0 animate-[slideInRight_0.8s_ease-out_1.6s_forwards] hover:scale-105 transition-all duration-300 hover:bg-graphite-fog/40 mobile-friendly-card touch-target">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2 lg:mb-3">$25B+</div>
              <div className="text-xs sm:text-xs lg:text-sm font-body text-cream/70 uppercase tracking-wide">
                TEAM CAREER FINANCINGS ACROSS EIGHT CYCLES<sup>2</sup>
              </div>
            </div>
          </div>
          
          {/* Statistics Footnotes */}
          <div className="lg:col-span-2 mt-6">
            <p className="text-xs text-silver-mist/60 font-sans text-center leading-relaxed">
              <sup>1</sup> Oak Real Estate Partners performance since inception. Net of management fees and expenses. Past performance is not indicative of future results. <sup>2</sup> Aggregate CRE financings completed by current Oak principals during their prior careers at predecessor firms. Not Oak performance; presented as team experience only.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
