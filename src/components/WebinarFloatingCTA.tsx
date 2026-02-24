import { Link, useLocation } from "react-router-dom";
import { Calendar, ArrowRight, X } from "lucide-react";
import { useState, useEffect } from "react";

const WebinarFloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if banner was dismissed in the last 48 hours
    const dismissedAt = localStorage.getItem('webinarBannerDismissed');
    if (dismissedAt) {
      const hoursSinceDismissal = (Date.now() - parseInt(dismissedAt)) / (1000 * 60 * 60);
      if (hoursSinceDismissal < 48) {
        return; // Don't show if dismissed within last 48 hours
      }
    }
    
    // Show the banner
    setIsVisible(true);

    // Auto-dismiss after 20 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  // Don't show on webinar registration page
  if (location.pathname === '/webinar-registration') {
    return null;
  }

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4" style={{ animation: 'fadeIn 0.3s ease-out' }}>
      <div className="bg-gradient-to-r from-accent-brown to-accent-brown/90 text-white rounded-xl shadow-2xl border-2 border-white/20 overflow-hidden">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={() => {
              setIsVisible(false);
              localStorage.setItem('webinarBannerDismissed', Date.now().toString());
            }}
            className="absolute top-3 right-3 p-1.5 hover:bg-white/20 rounded-md transition-colors z-10"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="p-4 pr-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Calendar className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display font-semibold text-base leading-tight">
                  Join Our Next Investor Webinar
                </h3>
                <p className="font-body text-xs text-white/90 mt-0.5">
                  Get exclusive insights into Oak's investment opportunities
                </p>
              </div>

              {/* CTA Button */}
              <Link 
                to="/webinar-registration?type=oak-investment"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-accent-brown px-5 py-2.5 rounded-lg font-body font-semibold text-sm hover:bg-silver-mist transition-all hover:shadow-lg group"
              >
                Register Today
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
