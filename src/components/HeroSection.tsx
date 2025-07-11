import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-[85vh] px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Project Overview Tag */}
        <div className="mb-8 animate-fade-in">
          <span className="inline-block px-6 py-2 text-sm font-mono uppercase tracking-[0.2em] text-silver-mist/70 border border-silver-mist/20 rounded-sm backdrop-blur-sm">
            [ Project Overview ]
          </span>
        </div>
        
        {/* Main Headline */}
        <div className="space-y-4 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-6xl lg:text-8xl font-light text-silver-mist leading-[0.9] tracking-tight">
            Where Strength
          </h1>
          <h1 className="text-6xl lg:text-8xl font-light leading-[0.9] tracking-tight">
            <span className="text-accent-brown">Meets</span> <span className="text-silver-mist">Stewardship.</span>
          </h1>
        </div>
        
        {/* Subtitle */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl lg:text-2xl text-silver-mist/80 max-w-4xl mx-auto leading-relaxed font-light">
            Private commercial real estate credit, structured for protection, built for 
            performance, and guided by partnership in the creation of long-term value.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button 
            size="lg" 
            className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 group rounded-sm"
          >
            Request Test Drive
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-silver-mist/30 text-silver-mist hover:bg-silver-mist hover:text-obsidian px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm backdrop-blur-sm"
          >
            Download Brochure
          </Button>
        </div>
        
        {/* Bottom Navigation Categories */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 text-silver-mist/60 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {[
            'THE RANGE',
            'DESIGN', 
            'PERSONALIZATION',
            'TECHNOLOGY',
            'KEY FEATURES',
            'ACCESSORIES'
          ].map((item, index) => (
            <button 
              key={item}
              className="text-sm font-mono uppercase tracking-[0.15em] hover:text-silver-mist transition-colors duration-300 group relative"
            >
              {item}
              <div className="absolute -bottom-1 left-0 w-full h-px bg-accent-brown scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;