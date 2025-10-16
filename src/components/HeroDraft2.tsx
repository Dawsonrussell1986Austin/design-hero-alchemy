
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import VideoPlayerSectionDraft2 from "./VideoPlayerSectionDraft2";
import OurEdge from "./OurEdge";
import RecentNews from "./RecentNews";
import Footer from "./Footer";

const HeroDraft2 = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      {/* Navigation Bar */}
      <Navigation />
      
      {/* Main hero content */}
      <HeroSection />

      {/* Video Player Section */}
      <VideoPlayerSectionDraft2 />

      {/* Our Edge Section */}
      <OurEdge />

      {/* Recent News Section */}
      <RecentNews />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HeroDraft2;
