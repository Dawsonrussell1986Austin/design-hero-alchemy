
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import WhyPrivateCredit from "./WhyPrivateCredit";
import OurEdge from "./OurEdge";
import OfferingTrailers from "./OfferingTrailers";
import RecentNews from "./RecentNews";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      {/* Navigation Bar */}
      <Navigation />

      {/* Architectural background image */}
      <div className="absolute inset-0 z-10">
        <img 
          src="/lovable-uploads/20c8717f-c139-4b9a-8d06-9b489e183620.png"
          alt="Architectural background"
          className="w-full h-full object-contain opacity-80"
        />
      </div>

      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-40 z-15">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-garnet-edge/10 to-transparent"></div>
      </div>
      
      {/* Main hero content */}
      <HeroSection />

      {/* Why Private Credit Section */}
      <WhyPrivateCredit />

      {/* Our Edge Section */}
      <OurEdge />

      {/* Offering Trailers Section */}
      <OfferingTrailers />

      {/* Recent News Section */}
      <RecentNews />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Hero;
