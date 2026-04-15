import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play } from "lucide-react";
import SEOHead from "@/components/SEOHead";

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

interface PastWebinar {
  id: string;
  title: string;
  date: string;
  description: string;
  mediaId: string;
  thumbnail?: string;
}

// Add past webinars here as they become available
const pastWebinars: PastWebinar[] = [
  {
    id: "risk-before-returns-feb-2026",
    title: "Risk Before Returns: How Oak Thinks About Downside Protection in Private Credit",
    date: "February 12, 2026",
    description: "Matt Webster, Oak's Chief Credit Officer, discusses how Oak evaluates and mitigates risk in real estate private credit — before a single dollar of capital is deployed.",
    mediaId: "i6sw318ela",
  },
  {
    id: "special-situation-cre-jan-2026",
    title: "Special Situation Commercial Real Estate",
    date: "January 8, 2026",
    description: "Oak President and Chief Strategy Officer Ray Davis discusses special situation commercial real estate. Not distressed. Not speculative. Just good real estate going through change. That's the core of special situation commercial real estate, and it's where Oak Real Estate Partners has built its platform.",
    mediaId: "ol7nphf8a0",
  },
];

const PastWebinars = () => {
  useEffect(() => {
    // Load Wistia player script
    const playerScript = document.createElement('script');
    playerScript.src = 'https://fast.wistia.com/player.js';
    playerScript.async = true;
    document.head.appendChild(playerScript);

    return () => {
      if (document.head.contains(playerScript)) {
        document.head.removeChild(playerScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Past Webinars — On-Demand"
        description="Watch past Oak Real Estate Partners webinars on-demand covering market updates, fund performance, and investment strategy."
        canonicalUrl="/past-webinars"
      />
      {/* Navigation */}
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
        <Navigation />
      </div>

      {/* Main Content - Cream Background */}
      <div className="bg-silver-mist">
        {/* Header Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <div className="mx-auto w-20 h-20 bg-gold-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Play className="h-10 w-10 text-gold-accent" fill="currentColor" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-display font-medium text-abyss">
                Watch Our Webinars
              </h1>
              <p className="text-xl font-body text-graphite-fog leading-relaxed">
                Missed our last webinar? No problem, browse past webinars below and watch on your own time.
              </p>
            </div>
          </div>
        </section>

        {/* Webinar Grid */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            {pastWebinars.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {pastWebinars.map((webinar) => (
                  <div 
                    key={webinar.id}
                    className="bg-abyss rounded-xl overflow-hidden shadow-lg border-2 border-gold-accent/20 hover:border-gold-accent transition-all duration-300"
                  >
                    {/* Video Player */}
                    <div className="relative aspect-video overflow-hidden">
                      <wistia-player 
                        media-id={webinar.mediaId}
                        aspect="1.7777777777777777"
                        className="w-full h-full"
                      />
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-6 space-y-3 bg-abyss">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-body text-gold-accent font-semibold">
                          {webinar.date}
                        </span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-display font-medium text-cream leading-tight">
                        {webinar.title}
                      </h3>
                      <div className="font-body text-silver-mist/90 leading-relaxed whitespace-pre-line">
                        {webinar.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="mx-auto w-24 h-24 bg-abyss/10 rounded-full flex items-center justify-center mb-6">
                  <Play className="h-12 w-12 text-abyss/40" />
                </div>
                <h3 className="text-2xl font-display font-medium text-abyss mb-4">
                  Coming Soon
                </h3>
                <p className="text-lg font-body text-graphite-fog max-w-md mx-auto">
                  Past webinar recordings will be available here after our upcoming sessions. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PastWebinars;
