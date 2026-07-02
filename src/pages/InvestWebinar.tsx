import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShieldCheck, Building2, Landmark, TrendingUp } from "lucide-react";

// Demio registration hash for the Oak investor webinar.
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
        "Short-duration, first-position commercial real estate loans that give sponsors flexible capital while a property is stabilized or repositioned.",
      points: [
        "First-lien, senior secured positions",
        "Hard-asset commercial real estate collateral",
        "Disciplined, cycle-tested underwriting",
      ],
    },
    {
      icon: Landmark,
      name: "Agency & HUD Financing",
      highlight: "Government-Backed",
      description:
        "FHA/HUD and agency-backed programs that pair government-supported loan structures with Oak's origination and execution expertise.",
      points: [
        "Government-supported loan programs",
        "Long-term, fixed-rate structures",
        "Institutional-grade execution",
      ],
    },
    {
      icon: TrendingUp,
      name: "Structured Credit",
      highlight: "Debt & Equity",
      description:
        "Flexible capital structures — including debt and equity — built for real estate sponsors and backed by institutional underwriting.",
      points: [
        "Flexible debt and equity solutions",
        "Institutional underwriting and market expertise",
        "Focused on capital preservation",
      ],
    },
  ];

  const stats = [
    { value: "150+", label: "Years of combined experience*" },
    { value: "$5B", label: "Bridge loans completed in the last 10 years*" },
    { value: "$18B", label: "Total transactions*" },
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
                Looking for Income?
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-silver-mist leading-[1.05] tracking-tight">
                Protected Capital. Proven Experience. Real Income.
              </h1>

              <p className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-silver-mist leading-snug">
                Earn an annual interest rate of up to{" "}
                <span className="text-gold-accent">9%</span>*
              </p>

              <p className="text-base sm:text-lg text-silver-mist/85 leading-relaxed font-body">
                Join a live webinar to see how Oak Real Estate Partners generates
                income backed by hard-asset commercial real estate.
              </p>

              <p className="text-sm sm:text-base text-silver-mist/70 leading-relaxed font-body max-w-lg">
                Private commercial real estate credit, backed by hard assets and
                guided by institutional discipline — from a team that has
                successfully navigated eight market cycles over 35 years. Real estate
                lending that improves communities, and the American economy.
              </p>
            </div>

            {/* Right — registration form */}
            <div id="register-hero" className="bg-silver-mist rounded-xl shadow-2xl p-8">
              <h2 className="text-2xl font-display font-medium text-abyss mb-2">
                Join Our Investor Webinar
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
              What Oak Does
            </h2>
            <p className="text-graphite-fog font-body leading-relaxed">
              Oak Real Estate Partners originates and manages private commercial real
              estate credit across bridge lending, agency &amp; HUD financing, and
              structured capital — each backed by hard assets and cycle-tested
              underwriting.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {offerings.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.name}
                  className="rounded-xl p-8 flex flex-col bg-white text-abyss shadow-lg"
                >
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 bg-gold-accent/10">
                    <Icon className="h-7 w-7 text-gold-accent" />
                  </div>
                  <div className="text-xs font-body uppercase tracking-[0.2em] text-gold-accent mb-1">
                    {o.highlight}
                  </div>
                  <h3 className="text-2xl font-display font-medium mb-3">{o.name}</h3>
                  <p className="font-body leading-relaxed mb-6 text-graphite-fog">
                    {o.description}
                  </p>
                  <ul className="space-y-3 flex-1">
                    {o.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 font-body text-sm">
                        <ShieldCheck className="h-5 w-5 text-gold-accent shrink-0 mt-0.5" />
                        <span className="text-graphite-fog">{p}</span>
                      </li>
                    ))}
                  </ul>
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
              Join Our Investor Webinar
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
