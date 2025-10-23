import { Link } from "react-router-dom";
import { Calendar, ArrowRight, X } from "lucide-react";
import { useState } from "react";

const WebinarBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-accent-brown to-accent-brown/90 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="hidden sm:flex items-center justify-center w-10 h-10 bg-white/20 rounded-full flex-shrink-0">
              <Calendar className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="font-body text-sm sm:text-base font-medium">
                <span className="hidden sm:inline">Join us for our next </span>
                <span className="font-semibold">Oak Investor Webinar</span>
                <span className="hidden md:inline"> – Learn about our investment opportunities</span>
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Link 
              to="/webinar-registration"
              className="inline-flex items-center gap-2 bg-white text-accent-brown px-4 py-2 rounded-md font-body font-semibold text-sm hover:bg-silver-mist transition-colors whitespace-nowrap group"
            >
              Register Now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 hover:bg-white/20 rounded-md transition-colors flex-shrink-0"
              aria-label="Close banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarBanner;
