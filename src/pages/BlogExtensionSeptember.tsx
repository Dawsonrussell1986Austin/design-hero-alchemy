import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import philadelphiaMidrise from "@/assets/philadelphia-building.png";
import SEOHead from "@/components/SEOHead";

const BlogExtensionSeptember = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Extension to September 30, 2024"
        description="The Oak Companies announces an extension of its offering period to September 30, 2024."
        canonicalUrl="/blog/extension-september"
      />
      {/* Navigation */}
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "News", href: "/news" },
          { label: "The Oak Companies Announces Extension to September 30, 2024" }
        ]}
      />

      {/* Content */}
      <div className="bg-silver-mist pt-8 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link to="/news">
              <Button variant="ghost" className="mb-8 text-abyss hover:text-garnet-edge">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to News
              </Button>
            </Link>

            {/* Article header */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="h-4 w-4 text-gold-accent" />
                <span className="text-sm text-graphite-fog/70">August 30, 2024</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-6 leading-tight">
                The Oak Companies Announces Extension to September 30, 2024
              </h1>
            </div>

            {/* Featured image */}
            <div className="mb-8">
              <img 
                src={philadelphiaMidrise}
                alt="Oak Companies Investment Extension"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Article content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-cream/60 backdrop-blur-sm border border-abyss/20 rounded-lg p-8">
                <p className="text-lg text-abyss leading-relaxed mb-6">
                  ROCF II Series, a series of Oak Capital Fund Series, LLC (the Company) today announced that it has extended the application deadline and acceptance date to September 30, 2024.
                </p>
                
                <p className="text-abyss leading-relaxed mb-6">
                  The extension provides additional time for qualified investors to evaluate this commercial real estate credit investment opportunity. ROCF II Series continues the successful track record of The Oak Companies' disciplined bridge lending platform.
                </p>

                <p className="text-abyss leading-relaxed mb-6">
                  The fund targets commercial real estate bridge loans with conservative leverage profiles and focuses on experienced sponsors executing value-add business plans. Investment opportunities span multiple property types and geographic markets with strong fundamentals.
                </p>

                <p className="text-abyss leading-relaxed mb-6">
                  "We remain committed to providing institutional-quality investment opportunities while maintaining our rigorous underwriting standards," noted a spokesperson for The Oak Companies. "This extension ensures qualified investors have adequate time for thorough evaluation."
                </p>

                <p className="text-abyss leading-relaxed">
                  The Oak Companies continues to evaluate high-quality commercial real estate credit opportunities that align with the fund's investment objectives and risk parameters. Qualified investors seeking additional information should contact the company directly.
                </p>
              </div>
            </div>

            {/* Related articles suggestion */}
            <div className="mt-12 pt-8 border-t border-abyss/20">
              <h3 className="text-xl font-display font-medium text-abyss mb-6">Related News</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/news/extension-october-2024" className="group">
                  <div className="bg-cream/60 backdrop-blur-sm border border-abyss/20 rounded-lg p-6 hover:bg-cream/80 transition-all duration-300">
                    <h4 className="font-medium text-abyss group-hover:text-garnet-edge transition-colors">
                      The Oak Companies Announces Extension to October 31, 2024
                    </h4>
                    <p className="text-sm text-graphite-fog/70 mt-2">September 24, 2024</p>
                  </div>
                </Link>
                <Link to="/news/extension-july-2024" className="group">
                  <div className="bg-cream/60 backdrop-blur-sm border border-abyss/20 rounded-lg p-6 hover:bg-cream/80 transition-all duration-300">
                    <h4 className="font-medium text-abyss group-hover:text-garnet-edge transition-colors">
                      The Oak Companies Announces Extension of Expiration Time
                    </h4>
                    <p className="text-sm text-graphite-fog/70 mt-2">July 31, 2024</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogExtensionSeptember;