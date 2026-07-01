import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Video, Calendar, Users, ShieldCheck, TrendingUp } from "lucide-react";

// Demio registration hash for the 9% Bond Fund investor webinar.
const DEMIO_HASH = "Qwtk1BXqQ1lwi0j4";

const InvestWebinar = () => {
  useEffect(() => {
    // Load Demio embed script
    const script = document.createElement("script");
    script.id = "demio-js";
    script.type = "text/javascript";
    script.src = "https://cdn.demio.com/production/dashboard/embed.bundle.js";
    script.async = true;
    document.body.appendChild(script);

    // Track Demio form submissions as conversions
    const handleDemioSubmit = () => {
      if ((window as any).fbq) {
        (window as any).fbq("track", "Lead", { content_name: "invest_webinar_registration" });
      }
      if ((window as any).gtag) {
        (window as any).gtag("event", "conversion_event_submit_lead_form");
      }
    };

    const interval = setInterval(() => {
      const form = document.querySelector(".demio-registration-form");
      if (form && !form.getAttribute("data-fb-tracked")) {
        form.setAttribute("data-fb-tracked", "true");
        form.addEventListener("submit", handleDemioSubmit);
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      const form = document.querySelector(".demio-registration-form");
      if (form) {
        form.removeEventListener("submit", handleDemioSubmit);
      }
      const existingScript = document.getElementById("demio-js");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const highlights = [
    {
      icon: TrendingUp,
      title: "Fund Overview",
      description:
        "How the 9% Interest Rate Bond Fund is structured, what backs it, and how income is generated.",
    },
    {
      icon: ShieldCheck,
      title: "Capital Protection",
      description:
        "The underwriting discipline and hard-asset collateral behind every loan we originate.",
    },
    {
      icon: Users,
      title: "Live Q&A",
      description:
        "Ask our team directly about strategy, terms, and how to participate as an investor.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        {/* Floating gradient accents (matches site hero) */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold-accent/15 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-garnet-edge/15 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]"></div>
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column — mirrors the ad creative */}
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="font-display font-medium text-silver-mist leading-[0.85] tracking-tight text-8xl sm:text-9xl">
                  9%
                </div>
                <div className="text-silver-mist/90 font-body uppercase tracking-[0.35em] text-sm sm:text-base pt-2">
                  Interest Rate Bond Fund
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-silver-mist leading-tight tracking-tight">
                Real estate lending that improves communities, and the American economy.
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-silver-mist/80 leading-relaxed font-body font-normal max-w-lg">
                Join our investor webinar to learn how Oak Real Estate Partners delivers
                private commercial real estate credit backed by hard assets, guided by
                institutional discipline, and built by a team that has navigated eight
                market cycles over 35 years.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-silver-mist/90 font-body">
                  <Video className="h-5 w-5 text-gold-accent" />
                  <span>Live Investor Session</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-silver-mist/90 font-body">
                  <Calendar className="h-5 w-5 text-gold-accent" />
                  <span>Expert Insights</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-silver-mist/90 font-body">
                  <Users className="h-5 w-5 text-gold-accent" />
                  <span>Limited Seats</span>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-silver-mist rounded-xl shadow-2xl p-8 mt-8 lg:mt-0">
              <h2 className="text-2xl font-display font-medium text-abyss mb-2">
                Join Our Investor Webinar
              </h2>
              <p className="text-graphite-fog mb-6 font-body">
                Register now to reserve your seat for this exclusive session.
              </p>

              {/* Demio Embed */}
              <div className="demio-embed-container">
                <span
                  className="demio-embed-registration"
                  data-hash={DEMIO_HASH}
                  data-api="api/v1"
                  data-base-uri="https://my.demio.com/"
                  data-form-width="100%"
                  data-color="#022742"
                  data-text="REGISTER NOW"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-graphite-fog/30 backdrop-blur-sm border border-gold-accent/20 rounded-lg p-8 hover:bg-graphite-fog/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gold-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-gold-accent" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-silver-mist mb-2">
                    {item.title}
                  </h3>
                  <p className="text-silver-mist/70 font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestWebinar;
