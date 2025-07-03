
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Shield, TrendingUp, Users, Menu } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      {/* Navigation Bar */}
      <nav className="relative z-20 border-b border-deep-petrol bg-nav-light">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/71932cd7-9481-49c5-8971-a718dfd8a289.png" 
                alt="OAK Real Estate Partners" 
                className="h-12 w-auto"
              />
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-obsidian hover:text-garnet-edge transition-colors font-serif font-medium">Our Firm</a>
              <a href="#" className="text-obsidian hover:text-garnet-edge transition-colors font-serif font-medium">Platform</a>
              <a href="#" className="text-obsidian hover:text-garnet-edge transition-colors font-serif font-medium">Investments</a>
              <a href="#" className="text-obsidian hover:text-garnet-edge transition-colors font-serif font-medium">News</a>
              <a href="#" className="text-obsidian hover:text-garnet-edge transition-colors font-serif font-medium">Contact</a>
            </div>
            
            {/* Desktop Investor Login Button */}
            <Button 
              className="hidden md:block bg-garnet-edge hover:bg-garnet-edge/90 text-obsidian px-6 py-2 font-serif font-medium rounded-sm transition-all duration-300"
            >
              Investor Login
            </Button>

            {/* Mobile Hamburger Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-obsidian hover:bg-obsidian/10"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-obsidian border-l border-deep-petrol">
                <div className="flex flex-col space-y-6 mt-8">
                  <a 
                    href="#" 
                    className="text-silver-mist hover:text-garnet-edge transition-colors font-serif font-medium text-lg py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Firm
                  </a>
                  <a 
                    href="#" 
                    className="text-silver-mist hover:text-garnet-edge transition-colors font-serif font-medium text-lg py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Platform
                  </a>
                  <a 
                    href="#" 
                    className="text-silver-mist hover:text-garnet-edge transition-colors font-serif font-medium text-lg py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Investments
                  </a>
                  <a 
                    href="#" 
                    className="text-silver-mist hover:text-garnet-edge transition-colors font-serif font-medium text-lg py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    News
                  </a>
                  <a 
                    href="#" 
                    className="text-silver-mist hover:text-garnet-edge transition-colors font-serif font-medium text-lg py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                  <Button 
                    className="bg-garnet-edge hover:bg-garnet-edge/90 text-obsidian px-6 py-3 font-serif font-medium rounded-sm transition-all duration-300 mt-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Investor Login
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Subtle architectural background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/40f41be8-accc-4a72-a71a-e72c8e228281.png"
          alt=""
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-40 z-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
      
      {/* Main hero content */}
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

      {/* Why Private Credit Section */}
      <div className="relative z-10 bg-silver-mist py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-serif font-light text-obsidian mb-8">
                Why Private Credit Real Estate Lending
              </h2>
              <p className="text-xl text-deep-petrol leading-relaxed max-w-4xl mx-auto font-sans">
                In a market based on evolving uncertainty, exposure to private credit that is senior secured and backed by income producing commercial real estate assets offers several key advantages:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Market Opportunity */}
              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
                <h3 className="text-xl font-serif font-medium text-obsidian mb-4">Market Opportunity</h3>
                <p className="text-deep-petrol leading-relaxed font-sans text-sm">
                  Restrictive banking regulations, legislative requirements, increased capital reserve ratios have created a unique opportunity for experienced private credit lenders to generate highly attractive returns with lower levels of risk.
                </p>
              </div>

              {/* Risk Mitigation */}
              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
                <h3 className="text-xl font-serif font-medium text-obsidian mb-4">Risk Mitigation</h3>
                <p className="text-deep-petrol leading-relaxed font-sans text-sm mb-4">
                  Deal structure & comprehensive institutional credit underwriting mitigates risk and protects against the impairment of capital.
                </p>
                <p className="text-deep-petrol leading-relaxed font-sans text-sm">
                  The lending opportunities are secured by hard commercial real estate assets that carry a significant amount of intrinsic value with down-side protection during times of market distress.
                </p>
              </div>

              {/* Diversification */}
              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
                <h3 className="text-xl font-serif font-medium text-obsidian mb-4">Diversification</h3>
                <p className="text-deep-petrol leading-relaxed font-sans text-sm">
                  Exposure to the asset class and strategy can enhance the diversification and risk-efficiency while reducing the volatility within a portfolio through the delivery of an uncorrelated return stream.
                </p>
              </div>

              {/* Income Oriented */}
              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
                <h3 className="text-xl font-serif font-medium text-obsidian mb-4">Income Oriented</h3>
                <p className="text-deep-petrol leading-relaxed font-sans text-sm">
                  The strategy is designed to generate stable, consistent cash flows for investors seeking reliable income with up-side capture.
                </p>
              </div>

              {/* Performance */}
              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
                <h3 className="text-xl font-serif font-medium text-obsidian mb-4">Performance</h3>
                <p className="text-deep-petrol leading-relaxed font-sans text-sm">
                  History and performance points to a higher yield premium through exposure to private credit CRE, which can contribute to the optimization of a portfolio.
                </p>
              </div>

              {/* Our Strategy */}
              <div className="bg-gradient-to-br from-accent-brown/10 to-garnet-edge/10 backdrop-blur-sm border border-accent-brown/30 rounded-lg p-8 hover:from-accent-brown/15 hover:to-garnet-edge/15 transition-all duration-300">
                <h3 className="text-xl font-serif font-medium text-obsidian mb-4">Our Strategy</h3>
                <p className="text-deep-petrol leading-relaxed font-sans text-sm">
                  Our strategy is designed to unlock value in underserved niches while prioritizing downside protection, income consistency, and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
