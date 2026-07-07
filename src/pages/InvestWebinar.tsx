import { useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Building2, Landmark, TrendingUp, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { trackDemioRegistrations } from "@/lib/demioTracking";

// Demio registration hash for the Oak investor webinar.
const DEMIO_HASH = "9SVesvnmHC1lTVqS";

const DemioForm = () => (
  <div className="demio-embed-container">
    <span
      className="demio-embed-registration"
      data-hash={DEMIO_HASH}
      data-api="api/v1"
      data-base-uri="https://my.demio.com/"
      data-form-width="100%"
      data-color="#022742"
      data-text="REGISTER"
    ></span>
  </div>
);

// Shared reveal-on-scroll animation, matching the site's editorial motion.
const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const InvestWebinar = () => {
  useEffect(() => {
    // Fire the Meta Pixel Lead event when a Demio registration completes.
    trackDemioRegistrations();

    // Load Demio embed script
    const script = document.createElement("script");
    script.id = "demio-js";
    script.type = "text/javascript";
    script.src = "https://cdn.demio.com/production/dashboard/embed.bundle.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
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
      <section className="relative overflow-hidden pt-32 sm:pt-40 lg:pt-44 pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8">
        {/* Ghost typography */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:flex items-center justify-end">
          <span className="font-display font-medium italic text-cream/[0.04] text-[18rem] md:text-[26rem] lg:text-[34rem] leading-none -mr-16 md:-mr-28 lg:-mr-40 select-none">
            Oak
          </span>
        </div>

        {/* Ambient glow */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-24 left-1/4 w-96 h-96 bg-gold-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-garnet-edge/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              <p className="text-xs sm:text-sm text-gold-accent/80 font-body uppercase tracking-[0.25em]">
                Looking for Income?
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-cream leading-[1.05] tracking-tight">
                Protected Capital.
                <br />
                Proven Experience.
                <br />
                <span className="text-gold-accent italic">Real Income.</span>
              </h1>

              <div>
                <p className="text-lg sm:text-xl font-display font-normal text-silver-mist/80 leading-snug">
                  Earn an annual interest rate of up to
                </p>
                <div className="flex items-start leading-none">
                  <span className="font-display font-medium text-gold-accent text-7xl sm:text-8xl lg:text-9xl leading-none tracking-tight">
                    9%
                  </span>
                  <span className="font-display text-gold-accent text-2xl sm:text-3xl mt-2">
                    *
                  </span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-silver-mist/70 leading-relaxed font-body max-w-lg">
                Join our live daily webinar to see how Oak Real Estate Partners
                generates income backed by hard-asset commercial real estate. Private
                CRE credit, guided by institutional discipline — from a team that has
                successfully navigated eight market cycles over 35 years.
              </p>

              <div>
                <a href="#register">
                  <Button
                    size="lg"
                    className="bg-gold-accent hover:bg-gold-accent/90 text-abyss px-8 py-3.5 text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm hover:scale-105 hover:shadow-lg hover:shadow-gold-accent/20"
                  >
                    Reserve Your Seat
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Right — registration form */}
            <motion.div
              id="register-hero"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="rounded-xl bg-cream border border-cream/10 shadow-2xl p-8"
            >
              <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-accent mb-3">
                Live Daily Investor Webinar
              </p>
              <h2 className="text-2xl font-display font-medium text-abyss mb-2">
                Join Our Investor Webinar
              </h2>
              <p className="text-graphite-fog mb-6 font-body">
                Reserve your seat for this exclusive investor session.
              </p>
              <DemioForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Offerings (three columns) ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <motion.div {...reveal} transition={{ duration: 0.5, ease: "easeOut" }} className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-accent/80 mb-4">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-cream mb-5 leading-[1.1] tracking-tight">
              Private credit, backed by
              <br className="hidden sm:block" />
              <span className="text-gold-accent italic"> hard assets.</span>
            </h2>
            <p className="text-silver-mist/70 font-body leading-relaxed">
              Oak Real Estate Partners originates and manages private commercial real
              estate credit across bridge lending, agency &amp; HUD financing, and
              structured capital — each backed by hard assets and cycle-tested
              underwriting.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {offerings.map((o, index) => {
              const Icon = o.icon;
              return (
                <motion.div
                  key={o.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                  className="group rounded-xl p-8 flex flex-col bg-cream/[0.03] border border-cream/10 backdrop-blur-sm transition-colors duration-300 hover:border-gold-accent/40"
                >
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 bg-gold-accent/10">
                    <Icon className="h-7 w-7 text-gold-accent" />
                  </div>
                  <div className="text-xs font-body uppercase tracking-[0.2em] text-gold-accent mb-2">
                    {o.highlight}
                  </div>
                  <h3 className="text-2xl font-display font-medium text-cream mb-3">
                    {o.name}
                  </h3>
                  <p className="font-body leading-relaxed mb-6 text-silver-mist/70">
                    {o.description}
                  </p>
                  <ul className="space-y-3 flex-1">
                    {o.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 font-body text-sm">
                        <ShieldCheck className="h-5 w-5 text-gold-accent shrink-0 mt-0.5" />
                        <span className="text-silver-mist/80">{p}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ===== Stats ===== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-cream/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            {stats.map((s, index) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
              >
                <div className="text-5xl lg:text-6xl font-display font-medium text-gold-accent mb-3">
                  {s.value}
                </div>
                <div className="text-sm font-body uppercase tracking-wide text-silver-mist/60">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Registration (main) ===== */}
      <section id="register" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <motion.div {...reveal} transition={{ duration: 0.5, ease: "easeOut" }} className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-accent/80 mb-4">
              Reserve Your Seat
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-cream mb-4 leading-[1.1] tracking-tight">
              Join Our Investor Webinar
            </h2>
            <p className="text-silver-mist/70 font-body leading-relaxed">
              Register now to reserve your seat. You'll receive live insights on how
              Oak's real estate credit strategy generates income backed by hard assets.
            </p>
          </div>
          <div className="bg-cream rounded-xl shadow-2xl p-8">
            <DemioForm />
          </div>
        </motion.div>
      </section>

      {/* ===== Disclaimer ===== */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs text-silver-mist/40 font-body leading-relaxed">
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
