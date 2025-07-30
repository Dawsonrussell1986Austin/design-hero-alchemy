import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CoreBridge = () => {
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
      <div className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light text-accent-brown mb-6">
              Core Bridge Program
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light text-silver-mist mb-8 leading-relaxed">
              Flexible Bridge Financing for Institutional-Quality Assets in Transition
            </h2>
            <p className="text-lg text-silver-mist/80 leading-relaxed max-w-3xl mx-auto">
              Oak's Core Bridge lending program is designed for income-producing commercial real estate assets that are in transition and require short-term capital to reach stabilization. Ideal for borrowers with assets that are already cash-flowing (1.00x DSCR or greater), this program offers a streamlined path to stabilizing, refinancing, or recapitalizing a property without sacrificing speed or structure.
            </p>
          </div>
        </div>
      </div>

      {/* Who Should Consider Section */}
      <div className="py-16 bg-silver-mist/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-light text-silver-mist mb-8 text-center">
              Who Should Consider Oak's Core Bridge Program?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                <p className="text-silver-mist/80 leading-relaxed">
                  Sponsors acquiring or repositioning a commercial property and need transitional capital
                </p>
              </div>
              <div className="p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                <p className="text-silver-mist/80 leading-relaxed">
                  Sponsors seeking to enhance or stabilize performance before securing long-term financing
                </p>
              </div>
              <div className="p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                <p className="text-silver-mist/80 leading-relaxed">
                  Sponsors needing flexible terms and certainty of execution from an experienced lending partner
                </p>
              </div>
              <div className="p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                <p className="text-silver-mist/80 leading-relaxed">
                  Sponsors needing rapid execution to close an urgent transaction
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
              Oak delivers competitive Loan-to-Cost (LTC) ratios and interest rates incorporated with institutional underwriting standards, increasing the opportunity for successful take-out-financing. With a focus on efficiency and transparency, we offer tailored bridge solutions with a level of care and responsiveness that sets us apart from other small- and mid-balance lenders.
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
                    <td className="p-4 text-silver-mist">Floating-rate loans for cash-flowing assets in transition.</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Core-Plus Bridge</td>
                    <td className="p-4 text-silver-mist">Fixed-rate loans for non-cash-flowing properties with strong fundamentals.</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Opportunistic Bridge</td>
                    <td className="p-4 text-silver-mist">Higher-leverage loans for value-add or repositioning strategies.</td>
                  </tr>
                  <tr className="hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Participating Bridge</td>
                    <td className="p-4 text-silver-mist">Flexible capital with an equity component, aligning Oak with your upside.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* FHA/HUD Loan Programs Table */}
      <div className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-light text-silver-mist mb-8 text-center">
              FHA/HUD Loan Programs
            </h3>
            <p className="text-center text-garnet-edge mb-8 text-lg">
              Long-Term, Government-Backed Financing for Impact-Driven Real Estate
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-silver-mist/10 backdrop-blur-sm border border-accent-brown/30 rounded-lg shadow-lg">
                <thead>
                  <tr className="border-b border-accent-brown/30 bg-accent-brown/20">
                    <th className="text-left p-4 text-silver-mist font-semibold">Category</th>
                    <th className="text-left p-4 text-silver-mist font-semibold">Program</th>
                    <th className="text-left p-4 text-silver-mist font-semibold">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td rowSpan={4} className="p-4 text-silver-mist font-medium align-top">Multifamily & Affordable Housing</td>
                    <td className="p-4 text-silver-mist">HUD 221(d)(4) & 220</td>
                    <td className="p-4 text-silver-mist">Construction or Substantial Rehab of Multifamily Properties</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist">HUD 223(f)</td>
                    <td className="p-4 text-silver-mist">Acquisition or Refinance of Stabilized Multifamily</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist">HUD 223(a)(7)</td>
                    <td className="p-4 text-silver-mist">Streamlined Refinance of Existing HUD Loans</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist">HUD 241(a)</td>
                    <td className="p-4 text-silver-mist">Supplemental Loans for Capital Improvements</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td rowSpan={4} className="p-4 text-silver-mist font-medium align-top">Senior Housing & Healthcare</td>
                    <td className="p-4 text-silver-mist">HUD 232/221(d)(4)</td>
                    <td className="p-4 text-silver-mist">Construction or Rehab of Senior Housing or Healthcare</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist">HUD 232/223(f)</td>
                    <td className="p-4 text-silver-mist">Acquisition or Refinance of Stabilized Properties</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist">HUD 232/223(a)(7)</td>
                    <td className="p-4 text-silver-mist">Streamlined Refinance of Existing HUD Loans</td>
                  </tr>
                  <tr className="hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist">HUD 241(a)</td>
                    <td className="p-4 text-silver-mist">Supplemental Mortgage Insurance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Core Bridge Financing Parameters */}
      <div className="py-16 bg-silver-mist/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-light text-silver-mist mb-8 text-center">
              Core Bridge Financing Parameters
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
                    <td className="p-4 text-silver-mist">Acquisition, Refinance, Stabilization, Redevelopment</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Geography</td>
                    <td className="p-4 text-silver-mist">Primary and secondary U.S. markets</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Max LTV / LTC</td>
                    <td className="p-4 text-silver-mist">Up to 75% LTV (stabilized); Up to 75% LTC (based on underwriting)</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Interest Rate</td>
                    <td className="p-4 text-silver-mist">1-Month Term SOFR + 450 – 550 bps (Interest-Only)</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Loan Term</td>
                    <td className="p-4 text-silver-mist">1 to 5 Years (Fully Extended)</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Rate Floor / Cap</td>
                    <td className="p-4 text-silver-mist">Set at closing; No rate cap required</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Extensions</td>
                    <td className="p-4 text-silver-mist">Up to 3 extensions of 12 months, subject to market fees</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Fees</td>
                    <td className="p-4 text-silver-mist">Competitive market-based origination and exit fees</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Lien Position</td>
                    <td className="p-4 text-silver-mist">Senior (no secondary financing permitted)</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Funding Structure</td>
                    <td className="p-4 text-silver-mist">Full funding with customary holdbacks</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Recourse</td>
                    <td className="p-4 text-silver-mist">Generally non-recourse, with carve outs for "bad boy" acts</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Closing Timeline</td>
                    <td className="p-4 text-silver-mist">30–45 days from LOI acceptance and deposit receipt</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Debt Service Reserve</td>
                    <td className="p-4 text-silver-mist">Minimum 1.00x DSCR on in-place cash flow</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Prepayment</td>
                    <td className="p-4 text-silver-mist">Minimum interest, typically half the initial loan term</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20 hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Future Advances</td>
                    <td className="p-4 text-silver-mist">Available for TI/LC and other approved costs</td>
                  </tr>
                  <tr className="hover:bg-silver-mist/5 transition-colors duration-200">
                    <td className="p-4 text-silver-mist font-medium">Deposits</td>
                    <td className="p-4 text-silver-mist">Sufficient to cover third-party reports, legal, and underwriting diligence</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-light text-silver-mist mb-8">
              Ready to Explore Core Bridge Financing?
            </h3>
            <p className="text-lg text-silver-mist/80 leading-relaxed mb-12">
              Connect with our lending team to discuss how Oak's Core Bridge program can support your commercial real estate goals.
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

export default CoreBridge;