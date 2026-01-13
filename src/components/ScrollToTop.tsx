import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Track page view in Google Analytics for SPA navigation
    if (window.gtag) {
      window.gtag('config', 'G-RLZRTQNBDN', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}