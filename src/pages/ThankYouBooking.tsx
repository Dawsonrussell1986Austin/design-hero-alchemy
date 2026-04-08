import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Play, FileText, Video, ArrowRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ThankYouBooking = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Schedule');
    }
  }, []);

  const resources = [
    {
      icon: Video,
      title: "Investor Webinar",
      description: "Register for our next quarterly investor webinar to hear directly from our leadership team.",
      linkText: "Register Now",
      href: "/webinar-registration?type=oak-investment",
      internal: true,
    },
    {
      icon: Play,
      title: "Cedar Mill Case Study",
      description: "Watch a real deal walkthrough — see how Oak underwrites, structures, and executes.",
      linkText: "Watch Video",
      href: "/cedar-mill-case-study",
      internal: true,
    },
    {
      icon: FileText,
      title: "Oak Fact Sheet",
      description: "Download our firm overview with key metrics, strategy details, and track record.",
      linkText: "Download Fact Sheet",
      href: "https://app.oakrepartners.com/oak-fact-sheet-download",
      internal: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-silver-mist to-white">
      <SEOHead
        title="Thank You — Your Call is Booked"
        description="Your call with Oak Real Estate Partners is confirmed. Explore resources while you wait."
        noIndex={true}
      />
      <Navigation />

      <main className="flex-1 px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Confirmation */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-accent/10 rounded-full mb-6">
              <CalendarCheck className="w-8 h-8 text-gold-accent" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-4">
              You're All Set!
            </h1>
            <p className="text-lg text-graphite-fog font-body leading-relaxed max-w-2xl mx-auto">
              Your call has been booked. A member of our team will be in touch at the scheduled time. In the meantime, explore some of our resources below.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="bg-cream/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col items-start hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-accent/10 rounded-xl mb-4">
                  <resource.icon className="w-6 h-6 text-gold-accent" />
                </div>
                <h3 className="text-lg font-display font-medium text-obsidian mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-graphite-fog font-body leading-relaxed mb-4 flex-1">
                  {resource.description}
                </p>
                {resource.internal ? (
                  <Link
                    to={resource.href}
                    className="inline-flex items-center gap-1.5 text-gold-accent font-body font-medium text-sm hover:underline"
                  >
                    {resource.linkText} <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gold-accent font-body font-medium text-sm hover:underline"
                  >
                    {resource.linkText} <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Return Home */}
          <div className="text-center">
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="font-body font-medium h-12 px-8 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-cream"
            >
              Return Home
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYouBooking;
