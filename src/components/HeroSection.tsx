import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative z-20 min-h-[85vh] px-6 py-20">
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
            
            {/* CTA Button */}
            <div className="flex">
              <Button 
                size="lg" 
                className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 rounded-sm"
              >
                Investment Offerings
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;