
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import RecentTransactionsHomepage from "./RecentTransactionsHomepage";
import OurEdge from "./OurEdge";
import RecentNews from "./RecentNews";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      {/* Navigation Bar */}
      <Navigation />
      
      {/* Main hero content */}
      <HeroSection />

      {/* Recent Transactions Section */}
      <RecentTransactionsHomepage />

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
