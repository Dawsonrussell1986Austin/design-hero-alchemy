import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import cedarMillThumbnail from "@/assets/cedar-mill-thumbnail.png";

const CedarMillCaseStudy = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      <Navigation />
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-display font-medium text-white mb-4">
              Ciel of Cedar Mill Case Study
            </h1>
            <p className="text-silver-mist/90 text-xl font-body">
              A Deal in the Wild
            </p>
          </div>

          {/* Video Player */}
          <div className="relative mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-accent-brown/30 bg-obsidian/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-brown/10 via-transparent to-deep-petrol/10 pointer-events-none z-10"></div>
              
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
                    <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/10 transition-colors flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all flex items-center justify-center shadow-lg">
                        <Play className="w-8 h-8 text-accent-brown ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-obsidian">
                    <p className="text-silver-mist/60 text-lg font-body">Video coming soon</p>
                  </div>
                )}
              </div>
            </div>

            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-brown/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-deep-petrol/30 rounded-full blur-3xl"></div>
          </div>

          {/* Call to Actions */}
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-display font-medium text-white mb-6">
              Ready to Learn More?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/webinar-registration?type=oak-investment">
                <Button 
                  size="lg"
                  className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-6 font-body font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm text-lg"
                >
                  Register for Webinar
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent-brown text-accent-brown hover:bg-accent-brown hover:text-white px-12 py-6 font-body font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm text-lg"
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
