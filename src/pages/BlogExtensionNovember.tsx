import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import businessPartnership from "@/assets/handshake-business.png";

const BlogExtensionNovember = () => {
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
          { label: "The Oak Companies Announces Extension to November 30, 2024" }
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
                <span className="text-sm text-graphite-fog/70">October 31, 2024</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-6 leading-tight">
                The Oak Companies Announces Extension to November 30, 2024
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
                  <strong>FOR IMMEDIATE RELEASE</strong><br />
                  Charlotte, NC. (October 31, 2024) – ROCF II Series, a series of Oak Capital Fund Series, LLC (the Company) today announced that it has extended the application deadline.
                </p>
                
                <p className="text-abyss leading-relaxed mb-6">
                  The extension provides additional time for qualified investors to participate in this institutional-quality commercial real estate credit investment opportunity. The fund continues to focus on disciplined bridge lending strategies across high-growth markets.
                </p>

                <p className="text-abyss leading-relaxed mb-6">
                  "We have received strong interest from institutional and qualified investors seeking exposure to our commercial real estate credit platform," said a spokesperson for The Oak Companies. "This extension allows us to accommodate additional qualified participants while maintaining our rigorous investment standards."
                </p>

                <p className="text-abyss leading-relaxed mb-6">
                  ROCF II Series represents the continuation of The Oak Companies' successful bridge lending program, targeting value-add commercial real estate opportunities with attractive risk-adjusted returns. The fund employs conservative loan-to-value ratios and focuses on established markets with strong fundamentals.
                </p>

                <p className="text-abyss leading-relaxed">
                  Qualified investors interested in learning more about ROCF II Series should contact The Oak Companies directly. All investments are subject to suitability requirements and minimum investment thresholds.
                </p>
              </div>
            </div>

            {/* Related articles suggestion */}
            <div className="mt-12 pt-8 border-t border-abyss/20">
              <h3 className="text-xl font-display font-medium text-abyss mb-6">Related News</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/news/atlanta-financing" className="group">
                  <div className="bg-cream/60 backdrop-blur-sm border border-abyss/20 rounded-lg p-6 hover:bg-cream/80 transition-all duration-300">
                    <h4 className="font-medium text-abyss group-hover:text-garnet-edge transition-colors">
                      The Oak Companies Provides $8.65M Financing for Atlanta Property
                    </h4>
                    <p className="text-sm text-graphite-fog/70 mt-2">April 30, 2025</p>
                  </div>
                </Link>
                <Link to="/news/indianapolis-financing" className="group">
                  <div className="bg-cream/60 backdrop-blur-sm border border-abyss/20 rounded-lg p-6 hover:bg-cream/80 transition-all duration-300">
                    <h4 className="font-medium text-abyss group-hover:text-garnet-edge transition-colors">
                      The Oak Companies Provides $10.30 Million in Financing
                    </h4>
                    <p className="text-sm text-graphite-fog/70 mt-2">April 16, 2025</p>
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

export default BlogExtensionNovember;