import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative z-10 min-h-[85vh] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-light text-silver-mist leading-[0.9] tracking-tight">
                Where Strength
              </h1>
              <h1 className="text-5xl lg:text-7xl font-light leading-[0.9] tracking-tight">
                <span className="text-silver-mist">Meets</span>
              </h1>
              <h1 className="text-5xl lg:text-7xl font-light leading-[0.9] tracking-tight">
                <span className="text-silver-mist">Stewardship.</span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-silver-mist/80 max-w-lg leading-relaxed font-light">
              Private commercial real estate credit, structured for protection, built for performance, and guided by partnership in the creation of long-term value.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 rounded-sm"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-silver-mist/30 text-silver-mist hover:bg-silver-mist/10 hover:border-silver-mist/50 px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 rounded-sm backdrop-blur-sm"
              >
                Learn More
              </Button>
            </div>
            
            {/* Trusted Section */}
            <div className="pt-8 border-t border-silver-mist/20">
              <p className="text-sm text-silver-mist/60 mb-4 tracking-wide uppercase">
                TRUSTED BY INSTITUTIONAL INVESTORS
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full border border-silver-mist/40"></div>
                  <span className="text-sm text-silver-mist/70">SEC Registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-silver-mist/40 rounded-sm"></div>
                  <span className="text-sm text-silver-mist/70">Institutional Grade</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Statistics Cards */}
          <div className="space-y-6">
            {/* 150+ Years */}
            <div className="bg-deep-petrol/20 backdrop-blur-sm border border-silver-mist/10 rounded-lg p-8">
              <div className="text-5xl font-light text-silver-mist mb-2">150+</div>
              <div className="text-sm text-silver-mist/60 uppercase tracking-wide">
                YEARS OF EXPERIENCE
              </div>
            </div>
            
            {/* $5B Bridge */}
            <div className="bg-deep-petrol/20 backdrop-blur-sm border border-silver-mist/10 rounded-lg p-8">
              <div className="text-4xl font-light text-silver-mist mb-2">$5B</div>
              <div className="text-sm text-silver-mist/60 uppercase tracking-wide mb-1">
                OF BRIDGE COMPLETED
              </div>
              <div className="text-xs text-silver-mist/50">
                in the Last 10 Years
              </div>
            </div>
            
            {/* $18B Transactions */}
            <div className="bg-deep-petrol/20 backdrop-blur-sm border border-silver-mist/10 rounded-lg p-8">
              <div className="text-4xl font-light text-silver-mist mb-2">$210B</div>
              <div className="text-sm text-silver-mist/60 uppercase tracking-wide">
                CLOSED TRANSACTIONS
              </div>
            </div>
            
            {/* Philosophy Quote */}
            <div className="bg-gradient-to-r from-garnet-edge/10 to-accent-brown/10 backdrop-blur-sm border border-garnet-edge/20 rounded-lg p-8">
              <div className="text-lg italic text-silver-mist mb-3">
                "We Don't Chase Headlines Or Offer Shortcuts."
              </div>
              <div className="text-xs text-silver-mist/60 uppercase tracking-wide">
                — INVESTMENT PHILOSOPHY
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;