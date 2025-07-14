
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

      {/* Background video */}
      <div className="absolute inset-0 z-10">
        <video 
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster="/lovable-uploads/20c8717f-c139-4b9a-8d06-9b489e183620.png"
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          {/* Fallback to image if video fails to load */}
          <img 
            src="/lovable-uploads/20c8717f-c139-4b9a-8d06-9b489e183620.png"
            alt="Architectural background"
            className="w-full h-full object-cover opacity-80"
          />
        </video>
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

      {/* Recent News Section */}
      <RecentNews />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Hero;
