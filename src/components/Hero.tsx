
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import WhyPrivateCredit from "./WhyPrivateCredit";
import OurEdge from "./OurEdge";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      {/* Navigation Bar */}
      <Navigation />

      {/* Architectural background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/7078b5ad-cf31-456a-9b1a-9f74f2117a75.png"
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-40 z-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-garnet-edge/10 to-transparent"></div>
      </div>
      
      {/* Main hero content */}
      <HeroSection />

      {/* Why Private Credit Section */}
      <WhyPrivateCredit />

      {/* Our Edge Section */}
      <OurEdge />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Hero;
