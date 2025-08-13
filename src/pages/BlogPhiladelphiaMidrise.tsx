import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import SimplePageHeader from "@/components/SimplePageHeader";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogPhiladelphiaMidrise = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "News", href: "/news" },
          { label: "The Oak Companies Provides Bridge Loan for Philadelphia Midrise" }
        ]}
      />

      {/* Header */}
      <SimplePageHeader title="News Article" />
      
      {/* Content */}
      <div className="bg-silver-mist py-20">
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
                <Calendar className="h-4 w-4 text-accent-brown" />
                <span className="text-sm text-deep-petrol/70">May 6, 2025</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-6 leading-tight">
                The Oak Companies Provides Bridge Loan for Philadelphia Midrise
              </h1>
            </div>

            {/* Featured image */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/f67ec951-f2a1-40e1-a760-1a53e00c3cfa.png"
                alt="Ridge Avenue Apartments"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Article content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-8">
                <p className="text-lg text-obsidian leading-relaxed mb-6">
                  The Oak Companies has provided a $9.225-million bridge loan for the Ridge Avenue Apartments, a newly built residential community in Philadelphia.
                </p>
                
                <p className="text-obsidian leading-relaxed mb-6">
                  The financing will support the acquisition and stabilization of this modern multifamily property, which represents an excellent opportunity in Philadelphia's growing rental market. The Ridge Avenue Apartments feature contemporary amenities and are strategically located to attract quality tenants.
                </p>

                <p className="text-obsidian leading-relaxed mb-6">
                  "This transaction exemplifies our commitment to providing flexible bridge financing for quality multifamily assets," said a spokesperson for The Oak Companies. "The Philadelphia market continues to show strong fundamentals for rental housing, and this property is well-positioned to benefit from those trends."
                </p>

                <p className="text-obsidian leading-relaxed mb-6">
                  The bridge loan features competitive terms and will allow the borrower to complete the acquisition while implementing a value-add strategy to maximize the property's potential. The Oak Companies structured the financing to provide the flexibility needed for successful execution of the business plan.
                </p>

                <p className="text-obsidian leading-relaxed">
                  The Oak Companies continues to be an active lender in the multifamily bridge loan market, providing debt capital for acquisitions, refinancings, and value-add opportunities across the United States.
                </p>
              </div>
            </div>

            {/* Related articles suggestion */}
            <div className="mt-12 pt-8 border-t border-obsidian/20">
              <h3 className="text-xl font-display font-medium text-obsidian mb-6">Related News</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/news/atlanta-acquisition-loan" className="group">
                  <div className="bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-6 hover:bg-white/80 transition-all duration-300">
                    <h4 className="font-medium text-obsidian group-hover:text-garnet-edge transition-colors">
                      Oak Capital Provides $8.7M Acquisition Loan for Multifamily Property
                    </h4>
                    <p className="text-sm text-deep-petrol/70 mt-2">May 2, 2025</p>
                  </div>
                </Link>
                <Link to="/news/atlanta-financing" className="group">
                  <div className="bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-6 hover:bg-white/80 transition-all duration-300">
                    <h4 className="font-medium text-obsidian group-hover:text-garnet-edge transition-colors">
                      The Oak Companies Provides $8.65M Financing for Atlanta Property
                    </h4>
                    <p className="text-sm text-deep-petrol/70 mt-2">April 30, 2025</p>
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

export default BlogPhiladelphiaMidrise;