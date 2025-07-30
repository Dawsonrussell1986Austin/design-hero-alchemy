import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ParticipatingBridge = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-cream via-silver-mist to-warm-cream">
      <Navigation />
      
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-24">
        <Link to="/lending">
          <Button variant="outline" className="mb-8 bg-white/80 hover:bg-white border-accent-brown/30">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lending Programs
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal-blue mb-6">
            Participating Bridge Program
          </h1>
          <p className="text-xl text-charcoal-blue/80 mb-4">
            Flexible Loans with Equity Participation to Align with Sponsor Performance
          </p>
          <p className="text-lg text-charcoal-blue/70 leading-relaxed">
            Oak's Participating Bridge program offers high leverage, highly structured loans for sponsors seeking adaptive re-use capital and shared appreciation. This innovative financing solution aligns lender and borrower interests through equity participation, creating partnerships that support ambitious real estate strategies.
          </p>
        </div>
      </section>

      {/* Bridge Loan Programs at a Glance */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-blue mb-8 text-center">
            Bridge Loan Programs at a Glance
          </h2>
          <div className="bg-silver-mist/10 backdrop-blur-sm rounded-lg border border-accent-brown/40 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-accent-brown/40">
                    <th className="text-left p-4 font-semibold text-charcoal-blue">Program</th>
                    <th className="text-left p-4 font-semibold text-charcoal-blue">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Core Bridge</td>
                    <td className="p-4 text-charcoal-blue/80">Floating-rate loans for cash-flowing assets in transition</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Core-Plus Bridge</td>
                    <td className="p-4 text-charcoal-blue/80">Flexible capital for non-stabilized properties with upside potential</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Opportunistic Bridge</td>
                    <td className="p-4 text-charcoal-blue/80">High-LTC loans with embedded equity component for value-add strategies</td>
                  </tr>
                  <tr className="bg-accent-brown/5">
                    <td className="p-4 font-semibold text-charcoal-blue">Participating Bridge</td>
                    <td className="p-4 text-charcoal-blue/80 font-medium">Flexible loans with equity participation aligned to sponsor performance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Participating Bridge Financing Parameters */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-blue mb-8 text-center">
            Participating Bridge Financing Parameters
          </h2>
          <div className="bg-silver-mist/10 backdrop-blur-sm rounded-lg border border-accent-brown/40 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-accent-brown/40">
                    <th className="text-left p-4 font-semibold text-charcoal-blue">Criteria</th>
                    <th className="text-left p-4 font-semibold text-charcoal-blue">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Property Types</td>
                    <td className="p-4 text-charcoal-blue/80">Multifamily, Industrial, Retail, Mixed-Use, Hospitality, Office, Medical Office, Self-Storage, Manufactured Housing</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Loan Amount</td>
                    <td className="p-4 text-charcoal-blue/80">$1 Million – $10 Million</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Purpose</td>
                    <td className="p-4 text-charcoal-blue/80">Acquisition, Refinance, Development, Conversion, Rehabilitation, Stabilization</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Geography</td>
                    <td className="p-4 text-charcoal-blue/80">Primary and Secondary U.S. Markets</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Max LTV / LTC</td>
                    <td className="p-4 text-charcoal-blue/80">Up to 75% LTV (stabilized); Up to 100% LTC (underwritten)</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Interest Rate</td>
                    <td className="p-4 text-charcoal-blue/80">1-Month Term SOFR + 700 bps (Interest-Only)</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Loan Term</td>
                    <td className="p-4 text-charcoal-blue/80">1 to 3 Years (Fully Extended)</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Rate Floor / Cap</td>
                    <td className="p-4 text-charcoal-blue/80">Rate/floor set at closing; No rate cap required</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Extensions</td>
                    <td className="p-4 text-charcoal-blue/80">Up to 4 extensions of 6 months each, at standard market fees</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Exit Participation</td>
                    <td className="p-4 text-charcoal-blue/80">15% – 25% of value creation, based on project structure and returns</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Lien Position</td>
                    <td className="p-4 text-charcoal-blue/80">Senior (No secondary financing permitted)</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Funding Structure</td>
                    <td className="p-4 text-charcoal-blue/80">Full funding with appropriate holdbacks</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Recourse</td>
                    <td className="p-4 text-charcoal-blue/80">Non-recourse with customary carve-outs; structured recourse for higher-risk transactions</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Closing Timeline</td>
                    <td className="p-4 text-charcoal-blue/80">30–45 days from LOI acceptance and deposit receipt</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Debt Service Reserve</td>
                    <td className="p-4 text-charcoal-blue/80">Below 1.00x DSCR acceptable with reserve; preference for some in-place cash flow</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Prepayment</td>
                    <td className="p-4 text-charcoal-blue/80">Minimum interest, typically half the initial loan term</td>
                  </tr>
                  <tr className="border-b border-accent-brown/20">
                    <td className="p-4 font-medium text-charcoal-blue">Future Advances</td>
                    <td className="p-4 text-charcoal-blue/80">Available for TI/LC, rehabilitation, and approved project costs</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-charcoal-blue">Deposits</td>
                    <td className="p-4 text-charcoal-blue/80">Sufficient to cover third-party reports, legal, and underwriting diligence</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ParticipatingBridge;