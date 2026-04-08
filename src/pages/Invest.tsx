import { useEffect } from "react";
import { Play, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Invest = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://invest.oakrepartners.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
      <SEOHead
        title="Invest with Oak | Oak RE Partners"
        description="Access the Oak Investment Fact Sheet, investor resources, and learn how to invest with Oak RE Partners."
      />
      <Navigation />

      <section className="relative overflow-hidden pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-silver-mist leading-tight tracking-tight">
              Oak Investment Fact Sheet
            </h1>
            <p className="text-base text-silver-mist/70 leading-relaxed font-body font-normal max-w-xl mx-auto">
              Enter your details below to receive the fact sheet directly to your inbox.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-lg">
          <iframe
            src="https://invest.oakrepartners.com/widget/form/u5nCHB3DqBF0njukPwuh"
            style={{ width: "100%", height: "450px", border: "none" }}
            id="inline-u5nCHB3DqBF0njukPwuh"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Oak Fact Sheet Download"
            data-height="450"
            data-layout-iframe-id="inline-u5nCHB3DqBF0njukPwuh"
            data-form-id="u5nCHB3DqBF0njukPwuh"
            title="Oak Fact Sheet Download"
          />
        </div>
      </section>

      <section className="py-16 px-4 bg-silver-mist mt-auto">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-display font-medium text-abyss text-center mb-10">
            More Investor Resources
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
            <Link
              to="/webinars"
              className="group bg-cream rounded-xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition-shadow"
            >
              <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 bg-graphite-fog/10 rounded-full group-hover:bg-graphite-fog/20 transition-colors">
                <Video className="w-6 h-6 text-graphite-fog" />
              </div>
              <div>
                <h3 className="text-base font-display font-medium text-abyss">
                  Investor Webinar
                </h3>
                <p className="text-sm text-graphite-fog font-body">
                  Register for an upcoming session
                </p>
              </div>
              <ArrowRight className="ml-auto w-4 h-4 text-graphite-fog group-hover:text-graphite-fog transition-colors shrink-0" />
            </Link>

            <Link
              to="/cedar-mill-case-study"
              className="group bg-cream rounded-xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition-shadow"
            >
              <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 bg-graphite-fog/10 rounded-full group-hover:bg-graphite-fog/20 transition-colors">
                <Play className="w-6 h-6 text-graphite-fog" />
              </div>
              <div>
                <h3 className="text-base font-display font-medium text-abyss">
                  Case Study
                </h3>
                <p className="text-sm text-graphite-fog font-body">
                  Watch the Cedar Mill walkthrough
                </p>
              </div>
              <ArrowRight className="ml-auto w-4 h-4 text-graphite-fog group-hover:text-graphite-fog transition-colors shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Invest;
