import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CorePlusBridge = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      {/* Navigation */}
      <Navigation />
      
      {/* Back Button */}
      <div className="container mx-auto px-6 lg:px-8 pt-8">
        <Button 
          variant="ghost"
          className="text-silver-mist hover:text-accent-brown transition-all duration-300"
          onClick={() => navigate("/lending")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Lending Programs
        </Button>
      </div>

      {/* Hero Section */}
      <div className="relative py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/874bf40b-1604-47fe-a6ec-dda4da8ddf2c.png" 
            alt="Construction project development" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light text-accent-brown mb-6">
              Core-Plus Bridge Program
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light text-silver-mist mb-8 leading-relaxed">
              Transitional Capital for Non-Stabilized, Institutional-Quality Assets
            </h2>
            <p className="text-lg text-silver-mist/80 leading-relaxed max-w-3xl mx-auto">
              Oak's Core-Plus Bridge lending program is designed for high-potential commercial properties that are not yet cash-flowing (DSCR &lt; 1.00x) and need flexible, short-term financing to reach stabilization. This program supports sponsors executing redevelopment, repositioning, or lease-up strategies where a clear path to performance exists—but current cash flow does not.
            </p>
          </div>
        </div>
      </div>

      {/* Who Should Consider Section */}
      <div className="py-16 bg-silver-mist/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-light text-silver-mist mb-8 text-center">
              Who Should Consider Oak's Core-Plus Bridge Program?
            </h3>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                <p className="text-silver-mist/80 leading-relaxed">
                  Sponsors acquiring a property that needs time and capital to stabilize
                </p>
              </div>
              <div className="p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                <p className="text-silver-mist/80 leading-relaxed">
                  Sponsors executing a business plan that includes renovations or lease-up
                </p>
              </div>
              <div className="p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                <p className="text-silver-mist/80 leading-relaxed">
                  Sponsors requiring short-term capital to bridge the gap before permanent financing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Oak Section */}
      <div className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-light text-silver-mist mb-8">
              Why Choose Oak?
            </h3>
            <p className="text-lg text-silver-mist/80 leading-relaxed">
              With a sharp focus on asset fundamentals and upside potential, Oak provides institutional-quality underwriting and flexible structuring—even for assets still in transition. When the business plan is strong, our team can deliver higher LTC and tailored loan terms that support execution without delay.
            </p>
          </div>
        </div>
      </div>

      {/* Bridge Loan Programs Table */}
      <div className="py-16 bg-silver-mist/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-light text-silver-mist mb-8 text-center">
              Bridge Loan Programs at a Glance
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-silver-mist/10 backdrop-blur-sm border border-accent-brown/30 rounded-lg shadow-lg">
                <thead>
                  <tr className="border-b border-accent-brown/30 bg-accent-brown/20">
                    <th className="text-left p-4 text-silver-mist font-semibold">Program</th>
                    <th className="text-left p-4 text-silver-mist font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Core Bridge</td>
                    <td className="p-4 text-silver-mist">Floating-rate loans for stabilized, cash-flowing transitional assets</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Core-Plus Bridge</td>
                    <td className="p-4 text-silver-mist">Short-term capital for non-cash-flowing assets in transition</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Opportunistic Bridge</td>
                    <td className="p-4 text-silver-mist">Higher-leverage loans for value-add, redevelopment, and repositioning</td>
                  </tr>
                  <tr className="hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Participating Bridge</td>
                    <td className="p-4 text-silver-mist">Flexible loans with equity participation to align with sponsor performance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Core-Plus Bridge Financing Parameters */}
      <div className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-light text-silver-mist mb-8 text-center">
              Core-Plus Bridge Financing Parameters
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-silver-mist/10 backdrop-blur-sm border border-accent-brown/30 rounded-lg shadow-lg">
                <thead>
                  <tr className="border-b border-accent-brown/30 bg-accent-brown/20">
                    <th className="text-left p-4 text-silver-mist font-semibold">Criteria</th>
                    <th className="text-left p-4 text-silver-mist font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Property Types</td>
                    <td className="p-4 text-silver-mist">Multifamily, Industrial, Retail, Mixed-Use, Hospitality, Office, Medical Office, Self-Storage, Manufactured Housing</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Loan Amount</td>
                    <td className="p-4 text-silver-mist">$2 Million – $20 Million</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Purpose</td>
                    <td className="p-4 text-silver-mist">Acquisition, Refinance, Rehabilitation, Stabilization</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Geography</td>
                    <td className="p-4 text-silver-mist">Primary and secondary U.S. markets</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Max LTV / LTC</td>
                    <td className="p-4 text-silver-mist">Up to 75% LTV (stabilized); Up to 85% LTC (based on underwriting)</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Interest Rate</td>
                    <td className="p-4 text-silver-mist">1-Month Term SOFR + 500 – 600 bps (Interest-Only)</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Loan Term</td>
                    <td className="p-4 text-silver-mist">1 to 5 Years (Fully Extended)</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Rate Floor / Cap</td>
                    <td className="p-4 text-silver-mist">Floor set at closing; No rate cap required</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Extensions</td>
                    <td className="p-4 text-silver-mist">Up to 3 extensions of 12 months each, with standard market extension fees</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Fees</td>
                    <td className="p-4 text-silver-mist">Market-competitive origination and exit fees based on loan complexity</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Lien Position</td>
                    <td className="p-4 text-silver-mist">Senior (no secondary financing allowed)</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Funding Structure</td>
                    <td className="p-4 text-silver-mist">Full funding with holdbacks as needed</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Recourse</td>
                    <td className="p-4 text-silver-mist">Typically non-recourse with standard carve-outs</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Closing Timeline</td>
                    <td className="p-4 text-silver-mist">30–45 days from LOI acceptance and deposit receipt</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Debt Service Reserve</td>
                    <td className="p-4 text-silver-mist">Acceptable below 1.00x DSCR if reserve is structured to support coverage</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Prepayment</td>
                    <td className="p-4 text-silver-mist">Minimum interest, generally equal to half the initial loan term</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Future Advances</td>
                    <td className="p-4 text-silver-mist">TI/LC and other approved future costs may be structured into funding</td>
                  </tr>
                  <tr className="hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Deposits</td>
                    <td className="p-4 text-silver-mist">Covers third-party reports, legal, and standard due diligence</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-silver-mist/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-light text-silver-mist mb-8">
              Ready to Explore Core-Plus Bridge Financing?
            </h3>
            <p className="text-lg text-silver-mist/80 leading-relaxed mb-12">
              Connect with our lending team to discuss how Oak's Core-Plus Bridge program can support your transitional property goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
              >
                Contact Our Lending Team
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-silver-mist/40 text-silver-mist hover:bg-silver-mist hover:text-obsidian hover:border-garnet-edge px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm backdrop-blur-sm"
                onClick={() => navigate("/lending")}
              >
                View All Programs
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CorePlusBridge;