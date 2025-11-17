import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Video, Calendar, Users } from "lucide-react";

const WebinarRegistration = () => {
  const [searchParams] = useSearchParams();
  const webinarType = searchParams.get('type') || 'red-oak-investor';

  const webinarTitles = {
    'red-oak-investor': 'Join Our Exclusive Red Oak Quarterly Financial Update Webinar',
    'oak-accounting': 'Join Our Exclusive Oak Institutional Quarterly Financial Update Webinar',
    'oak-investment': 'Join Our Exclusive Oak Real Estate Partners Investor Webinar'
  };

  const demioHashes = {
    'red-oak-investor': 'WsUAdDrAu9eGJvcD',
    'oak-accounting': 'xZ9YFGemsi5DKfBR',
    'oak-investment': 'IaQROe5ALcV9ouMm'
  };

  const webinarContent = {
    'red-oak-investor': {
      title: webinarTitles['red-oak-investor'],
      topics: [
        {
          icon: Video,
          title: 'Portfolio Performance',
          description: 'Review Red Oak investment performance, returns, and key metrics from the current period.'
        },
        {
          icon: Calendar,
          title: 'Market Updates',
          description: 'Get insights on market trends affecting Red Oak investments and future opportunities.'
        },
        {
          icon: Users,
          title: 'Investor Q&A',
          description: 'Ask questions directly to the management team about your Red Oak investments.'
        }
      ]
    },
    'oak-accounting': {
      title: webinarTitles['oak-accounting'],
      topics: [
        {
          icon: Video,
          title: 'Financial Statements',
          description: 'Comprehensive review of financial statements, accounting practices, and reporting standards.'
        },
        {
          icon: Calendar,
          title: 'Tax Strategies',
          description: 'Learn about tax planning opportunities, deductions, and compliance requirements for your investments.'
        },
        {
          icon: Users,
          title: 'Compliance Updates',
          description: 'Stay informed about regulatory changes and compliance requirements affecting your accounts.'
        }
      ]
    },
    'oak-investment': {
      title: webinarTitles['oak-investment'],
      topics: [
        {
          icon: Video,
          title: 'Investment Opportunities',
          description: 'Explore current and upcoming investment opportunities with detailed deal analysis and projections.'
        },
        {
          icon: Calendar,
          title: 'Portfolio Strategy',
          description: 'Learn about strategic portfolio management, diversification, and long-term growth planning.'
        },
        {
          icon: Users,
          title: 'Deal Structures',
          description: 'Understand the structure of investment deals, terms, and expected returns for new opportunities.'
        }
      ]
    }
  };

  const currentWebinar = webinarContent[webinarType as keyof typeof webinarContent] || webinarContent['red-oak-investor'];

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
                {currentWebinar.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-silver-mist/80 leading-relaxed font-body font-normal">
                Join us quarterly for investor updates, deal insights, and market trends. Each session provides a clear overview of portfolio performance, new opportunities, and the latest developments shaping commercial real estate.
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
                  data-hash={demioHashes[webinarType as keyof typeof demioHashes] || demioHashes['red-oak-investor']} 
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

      <Footer />
    </div>
  );
};

export default WebinarRegistration;
