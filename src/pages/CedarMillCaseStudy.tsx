import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import cedarMillThumbnail from "@/assets/cedar-mill-thumbnail.png";
import SEOHead from "@/components/SEOHead";

const CedarMillCaseStudy = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
      <SEOHead
        title="Cedar Mill Case Study"
        description="Case study of Oak Real Estate Partners' Cedar Mill commercial real estate bridge lending transaction."
        canonicalUrl="/case-study/cedar-mill"
      />
      <Navigation />
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-display font-medium text-cream mb-4">
              Ciel of Cedar Mill Case Study
            </h1>
            <p className="text-silver-mist/90 text-xl font-body">
              A Deal in the Wild
            </p>
          </div>

          {/* Video Player */}
          <div className="relative mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-accent/30 bg-abyss/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/10 via-transparent to-graphite-fog/10 pointer-events-none z-10"></div>
              
              <div className="relative aspect-video">
                {!isPlaying ? (
                  <div 
                    className="absolute inset-0 cursor-pointer group"
                    onClick={() => setIsPlaying(true)}
                  >
                    <img 
                      src={cedarMillThumbnail} 
                      alt="Ciel of Cedar Mill Case Study" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-abyss/20 group-hover:bg-abyss/10 transition-colors flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-cream/90 group-hover:bg-cream group-hover:scale-110 transition-all flex items-center justify-center shadow-lg">
                        <Play className="w-8 h-8 text-gold-accent ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-abyss">
                    <p className="text-silver-mist/60 text-lg font-body">Video coming soon</p>
                  </div>
                )}
              </div>
            </div>

            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-graphite-fog/30 rounded-full blur-3xl"></div>
          </div>

          {/* Call to Actions */}
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-display font-medium text-cream mb-6">
              Ready to Learn More?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/webinar-registration?type=oak-investment">
                <Button 
                  size="lg"
                  className="bg-gold-accent hover:bg-gold-accent/90 text-silver-mist px-12 py-6 font-body font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm text-lg"
                >
                  Register for Webinar
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-cream px-12 py-6 font-body font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm text-lg"
                >
                  Contact Oak
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CedarMillCaseStudy;
