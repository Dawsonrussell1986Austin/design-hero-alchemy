import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Video, Calendar, Users } from "lucide-react";

const WebinarRegistration = () => {
  useEffect(() => {
    // Load Demio script
    const script = document.createElement('script');
    script.id = 'demio-js';
    script.type = 'text/javascript';
    script.src = 'https://cdn.demio.com/production/dashboard/embed.bundle.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.getElementById('demio-js');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-silver-mist leading-tight tracking-tight">
                Join Our Exclusive Investor Webinar
              </h1>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-silver-mist/80 leading-relaxed font-body font-normal">
                Join us on the third week of every month for investor updates, deal insights, and market trends. Each session provides a clear overview of portfolio performance, new opportunities, and the latest developments shaping commercial real estate.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-silver-mist/90 font-body">
                  <Video className="h-5 w-5 text-accent-brown" />
                  <span>Live Q&A Session</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-silver-mist/90 font-body">
                  <Calendar className="h-5 w-5 text-accent-brown" />
                  <span>Expert Insights</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-silver-mist/90 font-body">
                  <Users className="h-5 w-5 text-accent-brown" />
                  <span>Limited Seats</span>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-silver-mist rounded-xl shadow-2xl p-8 mt-16 lg:mt-0">
              <h2 className="text-2xl font-display font-medium text-obsidian mb-2">
                Reserve Your Spot
              </h2>
              <p className="text-graphite-fog mb-6 font-body">
                Register now to secure your place in this exclusive webinar.
              </p>
              
              {/* Demio Embed */}
              <div className="demio-embed-container">
                <span 
                  className="demio-embed-registration" 
                  data-hash="98qou4sOdVpQ5PqL" 
                  data-api="api/v1" 
                  data-base-uri="https://my.demio.com/" 
                  data-form-width="100%" 
                  data-color="#022742" 
                  data-text="REGISTER"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 px-4 bg-silver-mist">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-display font-medium text-center mb-12 text-obsidian">
            What You'll Learn
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-accent-brown/10 rounded-lg flex items-center justify-center">
                <Video className="h-6 w-6 text-accent-brown" />
              </div>
              <h3 className="text-lg font-display font-medium text-obsidian">
                Investment Strategies
              </h3>
              <p className="text-deep-petrol font-body leading-relaxed">
                Discover proven methods for identifying and evaluating commercial real estate opportunities.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-accent-brown/10 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-accent-brown" />
              </div>
              <h3 className="text-lg font-display font-medium text-obsidian">
                Market Analysis
              </h3>
              <p className="text-deep-petrol font-body leading-relaxed">
                Learn how to analyze market trends and identify the best timing for your investments.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-accent-brown/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-accent-brown" />
              </div>
              <h3 className="text-lg font-display font-medium text-obsidian">
                Risk Management
              </h3>
              <p className="text-deep-petrol font-body leading-relaxed">
                Understand how to protect your capital and minimize risk in commercial real estate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebinarRegistration;
