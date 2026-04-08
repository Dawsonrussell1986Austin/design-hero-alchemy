import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import businessPartnership from "@/assets/handshake-business.png";

const BlogExtensionJuly = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "News", href: "/news" },
          { label: "The Oak Companies Announces Extension of Expiration Time" }
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
                <span className="text-sm text-graphite-fog/70">July 31, 2024</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-6 leading-tight">
                The Oak Companies Announces Extension of Expiration Time
              </h1>
            </div>

            {/* Featured image */}
            <div className="mb-8">
              <img 
                src={businessPartnership}
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
                  This extension demonstrates The Oak Companies' commitment to ensuring qualified investors have sufficient time to evaluate this commercial real estate credit investment opportunity. The fund continues to focus on bridge lending strategies that have historically delivered attractive risk-adjusted returns.
                </p>

                <p className="text-abyss leading-relaxed mb-6">
                  ROCF II Series represents the continuation of The Oak Companies' successful commercial real estate lending platform, targeting opportunities with experienced sponsors and clear value creation potential. The fund maintains conservative underwriting practices while seeking to generate consistent returns for investors.
                </p>

                <p className="text-abyss leading-relaxed mb-6">
                  "We recognize the importance of providing adequate time for qualified investors to conduct thorough due diligence," said a representative of The Oak Companies. "This extension reflects our commitment to maintaining high standards while accommodating investor needs."
                </p>

                <p className="text-abyss leading-relaxed">
                  The Oak Companies continues to evaluate commercial real estate credit opportunities that meet its rigorous investment criteria. Qualified investors interested in learning more about ROCF II Series should contact the company for additional information.
                </p>
              </div>
            </div>

            {/* Related articles suggestion */}
            <div className="mt-12 pt-8 border-t border-abyss/20">
              <h3 className="text-xl font-display font-medium text-abyss mb-6">Related News</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/news/extension-september-2024" className="group">
                  <div className="bg-cream/60 backdrop-blur-sm border border-abyss/20 rounded-lg p-6 hover:bg-cream/80 transition-all duration-300">
                    <h4 className="font-medium text-abyss group-hover:text-garnet-edge transition-colors">
                      The Oak Companies Announces Extension to September 30, 2024
                    </h4>
                    <p className="text-sm text-graphite-fog/70 mt-2">August 30, 2024</p>
                  </div>
                </Link>
                <Link to="/news/extension-october-2024" className="group">
                  <div className="bg-cream/60 backdrop-blur-sm border border-abyss/20 rounded-lg p-6 hover:bg-cream/80 transition-all duration-300">
                    <h4 className="font-medium text-abyss group-hover:text-garnet-edge transition-colors">
                      The Oak Companies Announces Extension to October 31, 2024
                    </h4>
                    <p className="text-sm text-graphite-fog/70 mt-2">September 24, 2024</p>
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

export default BlogExtensionJuly;