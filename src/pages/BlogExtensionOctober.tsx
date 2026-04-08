import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import businessPartnership from "@/assets/handshake-business.png";

const BlogExtensionOctober = () => {
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
          { label: "The Oak Companies Announces Extension to October 31, 2024" }
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
                <span className="text-sm text-deep-petrol/70">September 24, 2024</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-6 leading-tight">
                The Oak Companies Announces Extension to October 31, 2024
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
              <div className="bg-cream/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-8">
                <p className="text-lg text-obsidian leading-relaxed mb-6">
                  <strong>FOR IMMEDIATE RELEASE</strong><br />
                  Charlotte, NC. (September 24, 2024) – ROCF II Series, a series of Oak Capital Fund Series, LLC (the Company) today announced that it has extended the application deadline and acceptance date to October 31, 2024.
                </p>
                
                <p className="text-obsidian leading-relaxed mb-6">
                  This extension reflects continued strong investor interest in The Oak Companies' commercial real estate credit platform. The additional time allows qualified investors to complete their due diligence and participate in this institutional-quality investment opportunity.
                </p>

                <p className="text-obsidian leading-relaxed mb-6">
                  ROCF II Series focuses on bridge lending opportunities across primary and secondary markets, employing conservative underwriting standards and maintaining disciplined loan-to-value ratios. The fund targets commercial real estate assets with clear value-creation potential and experienced sponsorship.
                </p>

                <p className="text-obsidian leading-relaxed mb-6">
                  "We continue to see robust demand from institutional and qualified individual investors seeking exposure to commercial real estate credit," said a representative of The Oak Companies. "This extension ensures we can accommodate qualified participants while maintaining our investment discipline."
                </p>

                <p className="text-obsidian leading-relaxed">
                  Interested qualified investors should contact The Oak Companies directly for additional information regarding investment criteria, terms, and documentation requirements.
                </p>
              </div>
            </div>

            {/* Related articles suggestion */}
            <div className="mt-12 pt-8 border-t border-obsidian/20">
              <h3 className="text-xl font-display font-medium text-obsidian mb-6">Related News</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/news/extension-november-2024" className="group">
                  <div className="bg-cream/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-6 hover:bg-cream/80 transition-all duration-300">
                    <h4 className="font-medium text-obsidian group-hover:text-garnet-edge transition-colors">
                      The Oak Companies Announces Extension to November 30, 2024
                    </h4>
                    <p className="text-sm text-deep-petrol/70 mt-2">October 31, 2024</p>
                  </div>
                </Link>
                <Link to="/news/extension-september-2024" className="group">
                  <div className="bg-cream/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-6 hover:bg-cream/80 transition-all duration-300">
                    <h4 className="font-medium text-obsidian group-hover:text-garnet-edge transition-colors">
                      The Oak Companies Announces Extension to September 30, 2024
                    </h4>
                    <p className="text-sm text-deep-petrol/70 mt-2">August 30, 2024</p>
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

export default BlogExtensionOctober;