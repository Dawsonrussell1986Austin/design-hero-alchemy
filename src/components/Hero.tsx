
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-obsidian via-gray-900 to-deep-petrol">
      {/* Navigation Bar */}
      <nav className="relative z-20 bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/90ee6cd5-c626-412e-a007-8192ed146eba.png" 
                alt="OAK Real Estate Partners" 
                className="h-10 w-auto"
              />
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-deep-petrol transition-colors font-medium">Our Firm</a>
              <a href="#" className="text-white hover:text-deep-petrol transition-colors font-medium">Platform</a>
              <a href="#" className="text-white hover:text-deep-petrol transition-colors font-medium">Investments</a>
              <a href="#" className="text-white hover:text-deep-petrol transition-colors font-medium">News</a>
              <a href="#" className="text-white hover:text-deep-petrol transition-colors font-medium">Contact</a>
            </div>
            
            {/* Investor Login Button */}
            <Button 
              className="bg-deep-petrol hover:bg-deep-petrol/90 text-white px-6 py-2 font-medium rounded-sm transition-all duration-300"
            >
              Investor Login
            </Button>
          </div>
        </div>
      </nav>

      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-40">
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
                <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight">
                  Private Credit,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-deep-petrol to-garnet-edge font-normal">
                    Engineered With
                  </span><br />
                  Institutional<br />
                  <span className="font-medium">Precision</span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                  We design reliable income strategies backed by hard assets and guided by 
                  principles built for serious allocators, from RIAs to institutions.
                </p>
              </div>
              
              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-deep-petrol hover:bg-deep-petrol/90 text-white px-8 py-4 text-lg font-medium rounded-sm transition-all duration-300 hover:scale-105 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-600 text-white hover:bg-white/10 px-8 py-4 text-lg font-medium rounded-sm transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="pt-8 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-4">Trusted by institutional investors</p>
                <div className="flex items-center space-x-8 text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm">SEC Registered</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">Institutional Grade</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - Stats cards */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              
              {/* Experience card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-5xl font-light text-white mb-2 group-hover:text-deep-petrol transition-colors">150+</h3>
                    <p className="text-gray-400 text-sm uppercase tracking-wide">Years of Experience</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-deep-petrol opacity-70" />
                </div>
              </div>
              
              {/* Bridge loans card */}
              <div className="bg-gradient-to-br from-deep-petrol/20 to-garnet-edge/20 backdrop-blur-sm border border-deep-petrol/30 rounded-lg p-8 hover:from-deep-petrol/30 hover:to-garnet-edge/30 transition-all duration-300">
                <h3 className="text-5xl font-light text-white mb-2">$5B</h3>
                <p className="text-gray-300 text-sm uppercase tracking-wide mb-2">of Bridge Completed</p>
                <p className="text-xs text-gray-400">in the Last 10 Years</p>
              </div>
              
              {/* Closed transactions card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-5xl font-light text-white mb-2">$18B</h3>
                <p className="text-gray-300 text-sm uppercase tracking-wide mb-2">Closed Transactions</p>
              </div>
              
              {/* Philosophy card */}
              <div className="bg-gradient-to-r from-garnet-edge/10 to-deep-petrol/10 backdrop-blur-sm border border-garnet-edge/20 rounded-lg p-6">
                <blockquote className="text-white/90 text-lg font-light italic leading-relaxed">
                  "We Don't Chase Headlines Or Offer Shortcuts."
                </blockquote>
                <p className="text-gray-400 text-sm mt-3">— Investment Philosophy</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
