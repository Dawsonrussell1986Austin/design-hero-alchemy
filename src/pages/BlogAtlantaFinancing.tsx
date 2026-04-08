import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import businessPartnership from "@/assets/handshake-business.png";

const BlogAtlantaFinancing = () => {
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
          { label: "The Oak Companies Provides $8.65M Financing for Atlanta Property" }
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
                <span className="text-sm text-graphite-fog/70">April 30, 2025</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-6 leading-tight">
                The Oak Companies Provides $8.65M Financing for Atlanta Property
              </h1>
            </div>

            {/* Featured image */}
            <div className="mb-8">
              <img 
                src={businessPartnership}
                alt="Commercial Real Estate Partnership"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Article content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-cream/60 backdrop-blur-sm border border-abyss/20 rounded-lg p-8">
                <p className="text-lg text-abyss leading-relaxed mb-6">
                  The Oak Companies has closed an $8.65-million bridge loan for the acquisition and renovation of Garden Courts Apartments.
                </p>
                
                <p className="text-abyss leading-relaxed mb-6">
                  This comprehensive financing solution will support the borrower's acquisition of the multifamily property and fund a strategic renovation program designed to enhance the asset's value and appeal to residents. The transaction represents The Oak Companies' continued commitment to providing flexible capital solutions for value-add multifamily investments.
                </p>

                <p className="text-abyss leading-relaxed mb-6">
                  Garden Courts Apartments is strategically located in the Atlanta metropolitan area, benefiting from the region's strong economic growth and rental demand fundamentals. The property renovation will include unit upgrades, common area enhancements, and improved amenities to maximize occupancy and rental rates.
                </p>

                <p className="text-abyss leading-relaxed mb-6">
                  "This financing demonstrates our ability to structure creative solutions for multifamily acquisitions and renovations," said a senior executive at The Oak Companies. "We're excited to support this value-creation opportunity in one of the country's most dynamic rental markets."
                </p>

                <p className="text-abyss leading-relaxed mb-6">
                  The bridge loan was structured with competitive terms and flexible repayment options to accommodate the acquisition timeline and renovation schedule. The Oak Companies' expertise in multifamily financing enabled a smooth closing process and provided the borrower with the certainty needed to complete the transaction.
                </p>

                <p className="text-abyss leading-relaxed">
                  The Oak Companies remains an active bridge lender in the multifamily sector, providing debt capital for acquisitions, refinancings, and value-add opportunities across major metropolitan markets throughout the United States.
                </p>
              </div>
            </div>

            {/* Related articles suggestion */}
            <div className="mt-12 pt-8 border-t border-abyss/20">
              <h3 className="text-xl font-display font-medium text-abyss mb-6">Related News</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/news/philadelphia-midrise" className="group">
                  <div className="bg-cream/60 backdrop-blur-sm border border-abyss/20 rounded-lg p-6 hover:bg-cream/80 transition-all duration-300">
                    <h4 className="font-medium text-abyss group-hover:text-garnet-edge transition-colors">
                      The Oak Companies Provides Bridge Loan for Philadelphia Midrise
                    </h4>
                    <p className="text-sm text-graphite-fog/70 mt-2">May 6, 2025</p>
                  </div>
                </Link>
                <Link to="/news/atlanta-acquisition-loan" className="group">
                  <div className="bg-cream/60 backdrop-blur-sm border border-abyss/20 rounded-lg p-6 hover:bg-cream/80 transition-all duration-300">
                    <h4 className="font-medium text-abyss group-hover:text-garnet-edge transition-colors">
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

export default BlogAtlantaFinancing;