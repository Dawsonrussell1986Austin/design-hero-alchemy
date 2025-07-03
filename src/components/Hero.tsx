
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import WhyPrivateCredit from "./WhyPrivateCredit";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      {/* Navigation Bar */}
      <Navigation />

      {/* Subtle architectural background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/a8349d0b-e18c-4e40-b05e-b43b801403c1.png"
          alt=""
          className="w-full h-full object-contain opacity-5"
        />
      </div>

      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-40 z-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
      
      {/* Main hero content */}
      <HeroSection />

      {/* Why Private Credit Section */}
      <WhyPrivateCredit />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Hero;
