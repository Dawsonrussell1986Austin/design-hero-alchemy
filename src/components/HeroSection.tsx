import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left column - Main content */}
          <div className="space-y-8 animate-fade-in">
            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-serif font-light text-silver-mist leading-tight">
                Where Strength <span className="text-silver-mist font-normal drop-shadow-lg">Meets</span><br />
                <span className="font-medium">Stewardship.</span>
              </h1>
              
              <p className="text-xl text-silver-mist/80 max-w-2xl leading-relaxed font-sans">
                Private commercial real estate credit, structured for protection, built for performance, and guided by partnership in the creation of long-term value.
              </p>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-garnet-edge hover:bg-garnet-edge/90 text-obsidian px-8 py-4 text-lg font-serif font-medium rounded-sm transition-all duration-300 hover:scale-105 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-obsidian text-obsidian hover:bg-obsidian hover:text-silver-mist px-8 py-4 text-lg font-serif font-medium rounded-sm transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-8 border-t border-deep-petrol">
              <p className="text-sm text-silver-mist/60 mb-4 font-serif uppercase tracking-wide">Trusted by institutional investors</p>
              <div className="flex items-center space-x-8 text-silver-mist/70">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm font-serif">SEC Registered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-serif">Institutional Grade</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Stats cards */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            
            {/* Experience card */}
            <div className="bg-silver-mist/5 backdrop-blur-sm border border-silver-mist/10 rounded-lg p-8 hover:bg-silver-mist/10 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-5xl font-serif font-light text-silver-mist mb-2 group-hover:text-garnet-edge transition-colors">150+</h3>
                  <p className="text-silver-mist/60 text-sm font-mono uppercase tracking-wide">Years of Experience</p>
                </div>
                <TrendingUp className="h-8 w-8 text-accent-brown opacity-70" />
              </div>
            </div>
            
            {/* Bridge loans card */}
            <div className="bg-gradient-to-br from-deep-petrol/20 to-garnet-edge/20 backdrop-blur-sm border border-deep-petrol/30 rounded-lg p-8 hover:from-deep-petrol/30 hover:to-garnet-edge/30 transition-all duration-300">
              <h3 className="text-5xl font-serif font-light text-silver-mist mb-2">$5B</h3>
              <p className="text-silver-mist/80 text-sm font-mono uppercase tracking-wide mb-2">of Bridge Completed</p>
              <p className="text-xs text-silver-mist/60 font-mono">in the Last 10 Years</p>
            </div>
            
            {/* Closed transactions card */}
            <div className="bg-silver-mist/5 backdrop-blur-sm border border-silver-mist/10 rounded-lg p-8 hover:bg-silver-mist/10 transition-all duration-300">
              <h3 className="text-5xl font-serif font-light text-silver-mist mb-2">$18B</h3>
              <p className="text-silver-mist/80 text-sm font-mono uppercase tracking-wide mb-2">Closed Transactions</p>
            </div>
            
            {/* Philosophy card - Enhanced */}
            <div className="bg-gradient-to-r from-accent-brown/15 to-deep-petrol/20 backdrop-blur-sm border border-accent-brown/20 rounded-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-brown to-deep-petrol"></div>
              <blockquote className="text-silver-mist text-2xl font-serif font-light italic leading-relaxed mb-4">
                "We Don't Chase Headlines Or Offer Shortcuts."
              </blockquote>
              <p className="text-silver-mist/60 text-sm font-mono uppercase tracking-wide">— Investment Philosophy</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;