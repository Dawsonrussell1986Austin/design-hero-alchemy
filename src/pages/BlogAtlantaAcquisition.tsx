import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import SimplePageHeader from "@/components/SimplePageHeader";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogAtlantaAcquisition = () => {
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
          { label: "Oak Capital Provides $8.7M Acquisition Loan for Multifamily Property" }
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
                <span className="text-sm text-deep-petrol/70">May 2, 2025</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-6 leading-tight">
                Oak Capital Provides $8.7M Acquisition Loan for Multifamily Property
              </h1>
            </div>

            {/* Featured image */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/3842fd81-69ed-40e9-abc5-b0c4ac8bd5c8.png"
                alt="Garden Courts Apartments"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Article content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-8">
                <p className="text-lg text-obsidian leading-relaxed mb-6">
                  EAST POINT, GA. — Oak Capital Holdings has provided an $8.7 million bridge loan for the acquisition and renovation of Garden Courts Apartments.
                </p>
                
                <p className="text-obsidian leading-relaxed mb-6">
                  The financing package will enable the borrower to acquire this well-positioned multifamily asset in the Atlanta metropolitan area and execute a comprehensive renovation program. Garden Courts Apartments represents a compelling value-add opportunity in one of the Southeast's most dynamic rental markets.
                </p>

                <p className="text-obsidian leading-relaxed mb-6">
                  Located in East Point, Georgia, the property benefits from proximity to major employment centers and transportation corridors throughout the Atlanta region. The renovation program will focus on unit upgrades, common area improvements, and enhanced amenities to attract quality residents.
                </p>

                <p className="text-obsidian leading-relaxed mb-6">
                  "We're pleased to support this acquisition and renovation project in the Atlanta market," commented a representative from Oak Capital Holdings. "The Atlanta multifamily sector continues to demonstrate strong fundamentals, and this property is well-positioned to capitalize on continued rental demand in the area."
                </p>

                <p className="text-obsidian leading-relaxed mb-6">
                  The bridge loan features flexible terms designed to accommodate the acquisition timeline and renovation schedule. Oak Capital Holdings worked closely with the borrower to structure financing that provides the necessary capital and flexibility for successful project execution.
                </p>

                <p className="text-obsidian leading-relaxed">
                  This transaction continues Oak Capital Holdings' active participation in providing bridge financing for multifamily acquisitions and value-add opportunities throughout the Southeast region.
                </p>
              </div>
            </div>

            {/* Related articles suggestion */}
            <div className="mt-12 pt-8 border-t border-obsidian/20">
              <h3 className="text-xl font-display font-medium text-obsidian mb-6">Related News</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/news/philadelphia-midrise" className="group">
                  <div className="bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-6 hover:bg-white/80 transition-all duration-300">
                    <h4 className="font-medium text-obsidian group-hover:text-garnet-edge transition-colors">
                      Oak Capital Holdings Provides Bridge Loan for Philadelphia Midrise
                    </h4>
                    <p className="text-sm text-deep-petrol/70 mt-2">May 6, 2025</p>
                  </div>
                </Link>
                <Link to="/news/atlanta-financing" className="group">
                  <div className="bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-6 hover:bg-white/80 transition-all duration-300">
                    <h4 className="font-medium text-obsidian group-hover:text-garnet-edge transition-colors">
                      Oak Capital Holdings Provides $8.65M Financing for Atlanta Property
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

export default BlogAtlantaAcquisition;