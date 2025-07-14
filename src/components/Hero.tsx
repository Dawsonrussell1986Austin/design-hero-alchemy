
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import WhyPrivateCredit from "./WhyPrivateCredit";
import OurEdge from "./OurEdge";
import RecentNews from "./RecentNews";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      {/* Navigation Bar */}
      <Navigation />

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/79f542dd-9050-464b-a493-e43f24efafa9.png"
          alt="Architectural background"
          className="w-full h-full object-contain opacity-80"
        />
      </div>

      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-40 z-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-garnet-edge/10 to-[#b1beab]/20"></div>
      </div>
      
      {/* Main hero content */}
      <HeroSection />

      {/* Why Private Credit Section */}
      <WhyPrivateCredit />

      {/* Our Edge Section */}
      <OurEdge />

      {/* Recent News Section */}
      <RecentNews />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Hero;
