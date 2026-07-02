import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Building2, Landmark, TrendingUp, Star } from "lucide-react";

// Demio registration hash for the 9% Bond Fund investor webinar.
const DEMIO_HASH = "Qwtk1BXqQ1lwi0j4";

const DemioForm = () => (
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
);

const scrollToRegister = () => {
  document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
};

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
      const forms = document.querySelectorAll(".demio-registration-form");
      forms.forEach((form) => {
        if (!form.getAttribute("data-fb-tracked")) {
          form.setAttribute("data-fb-tracked", "true");
          form.addEventListener("submit", handleDemioSubmit);
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      document.querySelectorAll(".demio-registration-form").forEach((form) => {
        form.removeEventListener("submit", handleDemioSubmit);
      });
      const existingScript = document.getElementById("demio-js");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const offerings = [
    {
      icon: Building2,
      name: "Bridge Lending",
      highlight: "Senior Secured",
      description:
        "Short-duration, first-position commercial real estate loans backed by hard assets and conservative loan-to-value ratios.",
      points: [
        "First-lien, senior secured positions",
        "Hard-asset commercial real estate collateral",
        "Disciplined, cycle-tested underwriting",
      ],
    },
    {
      icon: TrendingUp,
      name: "Oak Bond Fund",
      highlight: "9% Target",
      description:
        "Income-focused private credit strategy designed to deliver consistent monthly distributions from a diversified loan portfolio.",
      points: [
        "Monthly income potential",
        "Diversified across borrowers and markets",
        "Available for qualified investors",
      ],
      featured: true,
    },
    {
      icon: Landmark,
      name: "Agency & HUD",
      highlight: "Institutional",
      description:
        "FHA/HUD and agency-backed financing programs that pair government-supported structures with Oak's origination expertise.",
      points: [
        "Government-supported loan programs",
        "Long-term, fixed-rate structures",
        "Institutional-grade execution",
      ],
    },
  ];

  const stats = [
    { value: "150+", label: "Years of combined experience*" },
    { value: "$5B", label: "Bridge loans completed in the last 10 years*" },
    { value: "$18B", label: "Total transactions*" },
  ];

  // NOTE: Placeholder testimonials — replace with compliance-approved investor
  // quotes before relying on this section in production.
  const testimonials = [
    {
      name: "Jeffrey P.",
      quote:
        "The team walked me through exactly how the loans are secured. The monthly income has been steady and the communication is excellent.",
    },
    {
      name: "Karen W.",
      quote:
        "I wanted real estate exposure without the headaches of owning property directly. Oak's credit strategy has been a great fit for my portfolio.",
    },
    {
      name: "Branden F.",
      quote:
        "What stood out was the discipline. These are people who have been through multiple market cycles and it shows in how they underwrite.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
      <Navigation />

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold-accent/15 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-garnet-edge/15 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]"></div>
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left — copy */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-accent/40 bg-gold-accent/10 px-4 py-1.5 text-xs font-body uppercase tracking-[0.2em] text-gold-accent">
                Live Investor Webinar
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-silver-mist leading-[1.05] tracking-tight">
                Invest Deeper into Oak Real Estate Partners
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-silver-mist/85 leading-relaxed font-body">
                Register for a live webinar to learn how you could earn an annual
                interest rate of up to <span className="text-gold-accent font-medium">9%</span>{" "}
                with our real estate bond fund.*
              </p>

              <p className="text-sm sm:text-base text-silver-mist/70 leading-relaxed font-body max-w-lg">
                Real estate lending that improves communities, and the American
                economy. Start building income backed by hard assets, guided by
                institutional discipline from a team that has navigated eight market
                cycles over 35 years.
              </p>

              <Button
                size="lg"
                onClick={scrollToRegister}
                className="bg-gold-accent hover:bg-gold-accent/90 text-cream px-8 py-6 text-base font-body font-medium tracking-wide rounded-sm hover:scale-105 transition-all duration-300"
              >
                BEGIN YOUR INVESTMENT JOURNEY
              </Button>
            </div>

            {/* Right — registration form */}
            <div id="register-hero" className="bg-silver-mist rounded-xl shadow-2xl p-8">
              <h2 className="text-2xl font-display font-medium text-abyss mb-2">
                Join Our Bond Fund Webinar
              </h2>
              <p className="text-graphite-fog mb-6 font-body">
                Reserve your seat for this exclusive investor session.
              </p>
              <DemioForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Offerings (three columns) ===== */}
      <section className="py-20 px-4 bg-silver-mist">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-abyss mb-4">
              More Ways to Fuel Your Portfolio
            </h2>
            <p className="text-graphite-fog font-body leading-relaxed">
              Oak Real Estate Partners offers multiple ways to participate in private
              commercial real estate credit — each backed by hard assets and
              cycle-tested underwriting.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {offerings.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.name}
                  className={`rounded-xl p-8 flex flex-col ${
                    o.featured
                      ? "bg-abyss text-silver-mist ring-2 ring-gold-accent shadow-2xl md:-translate-y-2"
                      : "bg-white text-abyss shadow-lg"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 ${
                      o.featured ? "bg-gold-accent/20" : "bg-gold-accent/10"
                    }`}
                  >
                    <Icon className="h-7 w-7 text-gold-accent" />
                  </div>
                  <div className="text-xs font-body uppercase tracking-[0.2em] text-gold-accent mb-1">
                    {o.highlight}
                  </div>
                  <h3 className="text-2xl font-display font-medium mb-3">{o.name}</h3>
                  <p
                    className={`font-body leading-relaxed mb-6 ${
                      o.featured ? "text-silver-mist/80" : "text-graphite-fog"
                    }`}
                  >
                    {o.description}
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {o.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 font-body text-sm">
                        <ShieldCheck className="h-5 w-5 text-gold-accent shrink-0 mt-0.5" />
                        <span className={o.featured ? "text-silver-mist/90" : "text-graphite-fog"}>
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={scrollToRegister}
                    className={`w-full font-body font-medium ${
                      o.featured
                        ? "bg-gold-accent hover:bg-gold-accent/90 text-cream"
                        : "bg-abyss hover:bg-abyss/90 text-silver-mist"
                    }`}
                  >
                    GET STARTED
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-5xl lg:text-6xl font-display font-medium text-gold-accent mb-3">
                  {s.value}
                </div>
                <div className="text-sm font-body uppercase tracking-wide text-silver-mist/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Registration (main) ===== */}
      <section id="register" className="py-20 px-4 bg-silver-mist">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-abyss mb-3">
              Join Our Bond Fund Webinar
            </h2>
            <p className="text-graphite-fog font-body leading-relaxed">
              Register now to reserve your seat. You'll receive live insights on how
              Oak's real estate credit strategy generates income backed by hard assets.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <DemioForm />
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-silver-mist text-center mb-12">
            Hear What Our Investors Are Saying
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-graphite-fog/30 backdrop-blur-sm border border-gold-accent/20 rounded-xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-accent text-gold-accent" />
                  ))}
                </div>
                <p className="text-silver-mist/85 font-body leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gold-accent/20 flex items-center justify-center text-gold-accent font-display font-medium">
                    {t.name.charAt(0)}
                  </div>
                  <div className="font-body font-medium text-silver-mist">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Disclaimer ===== */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs text-silver-mist/50 font-body leading-relaxed">
            *Target and historical figures are for illustrative purposes only and are
            not a guarantee of future performance. Investments involve risk, including
            the possible loss of principal. Rates and availability may vary and certain
            offerings are limited to accredited investors. This is not an offer to sell
            or a solicitation of an offer to buy any security. Please review all
            offering documents and consult your financial, legal, and tax advisors.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestWebinar;
