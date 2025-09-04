import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative z-20 min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] xl:min-h-[80vh] px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden mobile-nav-safe">
      {/* Animated gradient glow backgrounds */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent-brown/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-garnet-edge/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-accent-brown/10 to-garnet-edge/10 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-silver-mist leading-[0.9] tracking-tight animate-fade-in">
                Where Strength
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[0.9] tracking-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <span className="text-silver-mist">Meets</span>
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[0.9] tracking-tight animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <span className="text-silver-mist">Stewardship.</span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-silver-mist/80 max-w-lg leading-relaxed font-body font-normal animate-fade-in mobile-text-scale" style={{ animationDelay: "0.6s" }}>
              Private commercial real estate credit, structured for protection, built for performance, and guided by partnership in the creation of long-term value.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Link to="/lending">
                <Button 
                  size="lg" 
                  className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-8 py-3 text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm hover:scale-105 hover:shadow-lg hover:shadow-accent-brown/20"
                >
                  Borrowers
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/investments">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-silver-mist bg-silver-mist/10 text-white hover:bg-silver-mist hover:text-obsidian px-8 py-3 text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-silver-mist/20"
                >
                  Why Oak
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Column - Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-6 lg:space-y-0 mt-8 lg:mt-0">
            {/* 150+ Years */}
            <div className="bg-deep-petrol/20 backdrop-blur-sm border border-silver-mist/10 rounded-lg p-4 sm:p-6 lg:p-8 animate-fade-in hover:scale-105 transition-all duration-300 hover:bg-deep-petrol/30 mobile-friendly-card touch-target" style={{ animationDelay: "1s" }}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-silver-mist mb-2 lg:mb-3">150+</div>
              <div className="text-xs sm:text-xs lg:text-sm font-body text-silver-mist/70 uppercase tracking-wide">
                YEARS OF EXPERIENCE
              </div>
            </div>
            
            {/* $5B Bridge */}
            <div className="bg-deep-petrol/20 backdrop-blur-sm border border-[#b1beab]/30 rounded-lg p-4 sm:p-6 lg:p-8 animate-fade-in hover:scale-105 transition-all duration-300 hover:bg-deep-petrol/30 mobile-friendly-card touch-target" style={{ animationDelay: "1.2s" }}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-silver-mist mb-2 lg:mb-3">$5B</div>
              <div className="text-xs sm:text-xs lg:text-sm font-body text-silver-mist/70 uppercase tracking-wide mb-1 lg:mb-2">
                BRIDGE LOANS COMPLETED¹
              </div>
              <div className="text-xs font-body text-[#b1beab]/80 mb-2">
                in the Last 10 Years
              </div>
              <div className="text-[10px] font-body text-[#b1beab]/60 leading-tight">
                ¹ "Bridge loans structured" reflects the aggregate original principal amount of bridge loans that members of Oak's current management team underwrote/structured and that closed while at Red Oak Capital Holdings, White Oak Capital Holdings, and related affiliates during the last ten years. Figures are rounded and unaudited.
              </div>
            </div>
            
            {/* $18B Transactions */}
            <div className="bg-deep-petrol/20 backdrop-blur-sm border border-silver-mist/10 rounded-lg p-4 sm:p-6 lg:p-8 animate-fade-in hover:scale-105 transition-all duration-300 hover:bg-deep-petrol/30 mobile-friendly-card touch-target" style={{ animationDelay: "1.4s" }}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-silver-mist mb-2 lg:mb-3">$210B</div>
              <div className="text-xs sm:text-xs lg:text-sm font-body text-silver-mist/70 uppercase tracking-wide">
                TOTAL LOAN VOLUME
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;