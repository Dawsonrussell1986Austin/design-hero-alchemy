import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': {
        'media-id'?: string;
        aspect?: string;
        className?: string;
      };
    }
  }
}

const VideoPage = () => {
  useEffect(() => {
    // Load Wistia embed script
    const script = document.createElement('script');
    script.src = 'https://fast.wistia.com/embed/wn4w0z7jch.js';
    script.async = true;
    script.type = 'module';
    document.head.appendChild(script);

    const playerScript = document.createElement('script');
    playerScript.src = 'https://fast.wistia.com/player.js';
    playerScript.async = true;
    document.head.appendChild(playerScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(playerScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      <Navigation />
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Video Player */}
          <div className="relative mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-accent-brown/30 bg-obsidian/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-brown/10 via-transparent to-deep-petrol/10 pointer-events-none z-10"></div>
              
              <div className="relative aspect-video">
                <wistia-player 
                  media-id="wn4w0z7jch"
                  aspect="1.7777777777777777"
                  className="w-full h-full"
                />
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
              <Link to="/webinar-registration">
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
                  className="border-2 border-silver-mist text-silver-mist hover:bg-silver-mist/10 px-12 py-6 font-body font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm text-lg"
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

export default VideoPage;
