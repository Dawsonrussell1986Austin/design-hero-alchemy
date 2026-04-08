import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import atlantaSkyline from "@/assets/atlanta-skyline-clouds.png";

const BlogDallasDealSheet = () => {
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
          { label: "This Week's Dallas-Fort Worth Deal Sheet" }
        ]}
      />

      {/* Content */}
      <div className="bg-silver-mist pt-8 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link to="/news">
              <Button variant="ghost" className="mb-8 text-obsidian hover:text-garnet-edge">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to News
              </Button>
            </Link>

            {/* Article header */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="h-4 w-4 text-gold-accent" />
                <span className="text-sm text-graphite-fog/70">April 21, 2025</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-6 leading-tight">
                This Week's Dallas-Fort Worth Deal Sheet
              </h1>
            </div>

            {/* Featured image */}
            <div className="mb-8">
              <img 
                src={atlantaSkyline}
                alt="Dallas-Fort Worth Commercial Real Estate"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Article content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-cream/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-8">
                <p className="text-lg text-obsidian leading-relaxed mb-6">
                  <strong>Westmount Realty Capital Sells 1980s-Era Multifamily Property</strong><br />
                  After adding extensive upgrades, a Dallas-based company sold a 45-year-old apartment complex in Arlington.
                </p>
                
                <p className="text-obsidian leading-relaxed mb-6">
                  The Dallas-Fort Worth multifamily market continues to demonstrate resilience and growth potential, with investors actively pursuing value-add opportunities across the metroplex. This week's transactions highlight the ongoing demand for quality rental housing in one of the nation's fastest-growing regions.
                </p>

                <p className="text-obsidian leading-relaxed mb-6">
                  The Arlington property sale represents a successful value-add strategy execution, where extensive capital improvements transformed an aging asset into a competitive rental community. The renovations included unit upgrades, common area enhancements, and exterior improvements that significantly increased the property's market appeal.
                </p>

                <p className="text-obsidian leading-relaxed mb-6">
                  "The DFW market offers compelling opportunities for disciplined investors willing to execute comprehensive improvement programs," noted a market analyst. "Properties like this Arlington complex demonstrate how strategic capital deployment can unlock substantial value creation potential."
                </p>

                <p className="text-obsidian leading-relaxed">
                  The transaction reflects broader trends in the DFW multifamily sector, where investors continue to target well-located properties with renovation upside in submarkets with strong employment growth and demographic tailwinds.
                </p>
              </div>
            </div>

            {/* Related articles suggestion */}
            <div className="mt-12 pt-8 border-t border-obsidian/20">
              <h3 className="text-xl font-display font-medium text-obsidian mb-6">Related News</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/news/indianapolis-financing" className="group">
                  <div className="bg-cream/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-6 hover:bg-cream/80 transition-all duration-300">
                    <h4 className="font-medium text-obsidian group-hover:text-garnet-edge transition-colors">
                      The Oak Companies Provides $10.30 Million in Financing
                    </h4>
                    <p className="text-sm text-graphite-fog/70 mt-2">April 16, 2025</p>
                  </div>
                </Link>
                <Link to="/news/atlanta-acquisition-loan" className="group">
                  <div className="bg-cream/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-6 hover:bg-cream/80 transition-all duration-300">
                    <h4 className="font-medium text-obsidian group-hover:text-garnet-edge transition-colors">
                      Oak Capital Provides $8.7M Acquisition Loan for Multifamily Property
                    </h4>
                    <p className="text-sm text-graphite-fog/70 mt-2">May 2, 2025</p>
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

export default BlogDallasDealSheet;