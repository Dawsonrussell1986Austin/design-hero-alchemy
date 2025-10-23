import { Link } from "react-router-dom";
import { Calendar, ArrowRight, X } from "lucide-react";
import { useState } from "react";

const WebinarFloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4 animate-fade-in">
      <div className="bg-gradient-to-r from-accent-brown to-accent-brown/90 text-white rounded-xl shadow-2xl border-2 border-white/20 overflow-hidden">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 p-1.5 hover:bg-white/20 rounded-md transition-colors z-10"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="p-6 pr-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-1">
                <h3 className="font-display font-semibold text-lg">
                  Join Our Next Investor Webinar
                </h3>
                <p className="font-body text-sm text-white/90">
                  Get exclusive insights into Oak's investment opportunities and market strategies
                </p>
              </div>

              {/* CTA Button */}
              <Link 
                to="/webinar-registration"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-accent-brown px-6 py-3 rounded-lg font-body font-semibold text-sm hover:bg-silver-mist transition-all hover:shadow-lg group"
              >
                Register Free
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarFloatingCTA;
