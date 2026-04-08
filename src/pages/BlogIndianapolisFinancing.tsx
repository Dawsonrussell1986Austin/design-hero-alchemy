import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import atlantaSkyline from "@/assets/atlanta-skyline-clouds.png";

const BlogIndianapolisFinancing = () => {
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
          { label: "The Oak Companies Provides $10.30 Million in Financing" }
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
                <span className="text-sm text-graphite-fog/70">April 16, 2025</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-6 leading-tight">
                The Oak Companies Provides $10.30 Million in Financing
              </h1>
            </div>

            {/* Featured image */}
            <div className="mb-8">
              <img 
                src={atlantaSkyline}
                alt="Indianapolis Multifamily Properties"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Article content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-cream/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-8">
                <p className="text-lg text-obsidian leading-relaxed mb-6">
                  The Oak Companies provided a combined $10.30 million in financing for a pair of multifamily properties located in metropolitan Indianapolis. The separate bridge loans funded the acquisition and planned renovations.
                </p>
                
                <p className="text-obsidian leading-relaxed mb-6">
                  This dual financing package demonstrates The Oak Companies' ability to structure comprehensive capital solutions for portfolio acquisitions. The Indianapolis market continues to show strong fundamentals for multifamily investments, with growing demand for quality rental housing.
                </p>

                <p className="text-obsidian leading-relaxed mb-6">
                  "These transactions highlight our commitment to supporting value-add multifamily strategies in growing markets," said a spokesperson for The Oak Companies. "Indianapolis offers attractive demographics and rental growth potential that align well with our investment criteria."
                </p>

                <p className="text-obsidian leading-relaxed mb-6">
                  The bridge financing will enable the borrowers to execute their renovation plans while capitalizing on favorable market conditions. The Oak Companies structured the loans to provide maximum flexibility during the value-enhancement period.
                </p>

                <p className="text-obsidian leading-relaxed">
                  With this transaction, The Oak Companies continues to expand its presence in the Midwest multifamily market, providing essential bridge capital for acquisition and renovation projects.
                </p>
              </div>
            </div>

            {/* Related articles suggestion */}
            <div className="mt-12 pt-8 border-t border-obsidian/20">
              <h3 className="text-xl font-display font-medium text-obsidian mb-6">Related News</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/news/philadelphia-midrise" className="group">
                  <div className="bg-cream/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-6 hover:bg-cream/80 transition-all duration-300">
                    <h4 className="font-medium text-obsidian group-hover:text-garnet-edge transition-colors">
                      The Oak Companies Provides Bridge Loan for Philadelphia Midrise
                    </h4>
                    <p className="text-sm text-graphite-fog/70 mt-2">May 6, 2025</p>
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

export default BlogIndianapolisFinancing;