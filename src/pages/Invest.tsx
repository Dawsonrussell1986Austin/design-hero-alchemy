import { useEffect, useRef } from "react";
import { Play, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Invest = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

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
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      <SEOHead
        title="Invest with Oak | Oak RE Partners"
        description="Access the Oak Parallel Bridge Credit Fund fact sheet, investor resources, and learn how to invest with Oak RE Partners."
      />
      <Navigation />

      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-silver-mist leading-tight tracking-tight">
              Invest with Oak
            </h1>
            <p className="text-lg text-silver-mist/80 leading-relaxed font-body font-normal max-w-2xl mx-auto">
              Fill out the form below to receive the Oak Parallel Bridge Credit Fund Fact Sheet.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-silver-mist">
        <div className="container mx-auto max-w-xl">
          <div className="bg-white rounded-2xl shadow-lg p-8" ref={formContainerRef}>
            <iframe
              src="https://invest.oakrepartners.com/widget/form/u5nCHB3DqBF0njukPwuh"
              style={{ width: "100%", height: "377px", border: "none", borderRadius: "3px" }}
              id="inline-u5nCHB3DqBF0njukPwuh"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Oak Fact Sheet Download"
              data-height="377"
              data-layout-iframe-id="inline-u5nCHB3DqBF0njukPwuh"
              data-form-id="u5nCHB3DqBF0njukPwuh"
              title="Oak Fact Sheet Download"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-display font-medium text-obsidian text-center mb-10">
            More Investor Resources
          </h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
            {/* Webinar Card */}
            <div className="bg-silver-mist/50 rounded-2xl shadow-md p-8 flex flex-col items-center text-center space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-deep-petrol/10 rounded-full">
                <Video className="w-7 h-7 text-deep-petrol" />
              </div>
              <h3 className="text-xl font-display font-medium text-obsidian">
                Investor Webinar
              </h3>
              <p className="text-graphite-fog font-body text-sm leading-relaxed">
                Register for our upcoming investor webinar to learn about the fund strategy and ask questions live.
              </p>
              <Button
                variant="outline"
                className="border-deep-petrol text-deep-petrol hover:bg-deep-petrol hover:text-white font-body font-medium mt-auto"
                asChild
              >
                <Link to="/webinars">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  View Webinars
                </Link>
              </Button>
            </div>

            {/* Case Study Card */}
            <div className="bg-silver-mist/50 rounded-2xl shadow-md p-8 flex flex-col items-center text-center space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-deep-petrol/10 rounded-full">
                <Play className="w-7 h-7 text-deep-petrol" />
              </div>
              <h3 className="text-xl font-display font-medium text-obsidian">
                Case Study
              </h3>
              <p className="text-graphite-fog font-body text-sm leading-relaxed">
                Watch the Cedar Mill case study video walkthrough to see how Oak structures bridge credit investments.
              </p>
              <Button
                variant="outline"
                className="border-deep-petrol text-deep-petrol hover:bg-deep-petrol hover:text-white font-body font-medium mt-auto"
                asChild
              >
                <Link to="/cedar-mill-case-study">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Watch Video
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Invest;
