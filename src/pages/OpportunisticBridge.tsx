import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const OpportunisticBridge = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      <Navigation />
      
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-24">
        <Link to="/lending">
          <Button variant="outline" className="mb-8 bg-white/10 hover:bg-white/20 border-silver-mist/30 text-silver-mist">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lending Programs
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-silver-mist mb-6">
            Opportunistic Bridge Program
          </h1>
          <p className="text-xl text-silver-mist/90 mb-4">
            Higher-Leverage Capital for Value-Add and Conversion Strategies
          </p>
          <p className="text-lg text-silver-mist/80 leading-relaxed">
            Oak's Opportunistic Bridge program is designed for commercial real estate sponsors pursuing substantial value creation—such as repositioning, conversion, or redevelopment. This higher-leverage loan offering includes an embedded equity component, allowing borrowers to access more capital up front in exchange for a slightly higher rate structure. It's a smart solution for projects with a clear path to upside but capital gaps to close.
          </p>
        </div>
      </section>

      {/* Who Should Consider Section */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-silver-mist mb-8 text-center">
            Who Should Consider Oak's Opportunistic Bridge Program?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-silver-mist mb-3">
                Transformation Projects
              </h3>
              <p className="text-silver-mist/80">
                Sponsors executing a significant transformation—such as a renovation, expansion, or conversion
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-silver-mist mb-3">
                Higher Leverage Needs
              </h3>
              <p className="text-silver-mist/80">
                Sponsors needing more leverage than traditional bridge options typically allow
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-silver-mist mb-3">
                Strategic Partnership
              </h3>
              <p className="text-silver-mist/80">
                Sponsors seeking a financing partner who can provide not just capital, but structured alignment with their project's success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Oak Section */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-silver-mist mb-8">
            Why Choose Oak?
          </h2>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-lg">
            <p className="text-lg text-silver-mist/90 leading-relaxed">
              Oak offers access to enhanced leverage through higher loan-to-cost (LTC) structures that reduce the equity burden for borrowers. With deep experience in transitional and value-add strategies, we understand the nuances of complex business plans—and we underwrite accordingly, combining creative structuring with institutional discipline.
            </p>
          </div>
        </div>
      </section>

      {/* Bridge Loan Programs at a Glance */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-silver-mist mb-8 text-center">
            Bridge Loan Programs at a Glance
          </h2>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-4 font-semibold text-silver-mist">Program</th>
                    <th className="text-left p-4 font-semibold text-silver-mist">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Core Bridge</td>
                    <td className="p-4 text-silver-mist/80">Floating-rate loans for cash-flowing assets in transition</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Core-Plus Bridge</td>
                    <td className="p-4 text-silver-mist/80">Flexible capital for non-stabilized properties with upside potential</td>
                  </tr>
                  <tr className="border-b border-white/10 bg-garnet-edge/20">
                    <td className="p-4 font-semibold text-silver-mist">Opportunistic Bridge</td>
                    <td className="p-4 text-silver-mist/90 font-medium">High-LTC loans with embedded equity component for value-add strategies</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-silver-mist">Participating Bridge</td>
                    <td className="p-4 text-silver-mist/80">Flexible loans with equity participation aligned to sponsor performance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunistic Bridge Financing Parameters */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-silver-mist mb-8 text-center">
            Opportunistic Bridge Financing Parameters
          </h2>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-4 font-semibold text-silver-mist">Criteria</th>
                    <th className="text-left p-4 font-semibold text-silver-mist">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Property Types</td>
                    <td className="p-4 text-silver-mist/80">Multifamily, Industrial, Retail, Mixed-Use, Hospitality, Office, Medical Office, Self-Storage, Manufactured Housing</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Loan Amount</td>
                    <td className="p-4 text-silver-mist/80">$1 Million – $10 Million</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Purpose</td>
                    <td className="p-4 text-silver-mist/80">Acquisition, Refinance, Conversion, Rehabilitation, Stabilization</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Geography</td>
                    <td className="p-4 text-silver-mist/80">Primary, secondary, and select tertiary U.S. markets (min. pop. 50K–100K)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Max LTV / LTC</td>
                    <td className="p-4 text-silver-mist/80">Up to 75% LTV (stabilized); Up to 90% LTC (underwritten)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Interest Rate</td>
                    <td className="p-4 text-silver-mist/80">1-Month Term SOFR + 600 – 700 bps (Interest-Only)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Loan Term</td>
                    <td className="p-4 text-silver-mist/80">1 to 3 Years (Fully Extended)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Rate Floor / Cap</td>
                    <td className="p-4 text-silver-mist/80">Rate/floor set at closing; No rate cap required</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Extensions</td>
                    <td className="p-4 text-silver-mist/80">Up to 4 extensions of 6 months each, at standard market fees</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Fees</td>
                    <td className="p-4 text-silver-mist/80">Competitive origination and exit fees based on loan complexity</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Lien Position</td>
                    <td className="p-4 text-silver-mist/80">Senior (no secondary financing permitted)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Funding Structure</td>
                    <td className="p-4 text-silver-mist/80">Full funding with customary holdbacks</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Recourse</td>
                    <td className="p-4 text-silver-mist/80">Typically non-recourse, with standard carve-outs</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Closing Timeline</td>
                    <td className="p-4 text-silver-mist/80">30–45 days from LOI acceptance and deposit receipt</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Debt Service Reserve</td>
                    <td className="p-4 text-silver-mist/80">Below 1.00x DSCR acceptable with reserve; preference for some in-place cash flow</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Prepayment</td>
                    <td className="p-4 text-silver-mist/80">Minimum interest, typically half the initial loan term</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-silver-mist">Future Advances</td>
                    <td className="p-4 text-silver-mist/80">Available for TI/LC, conversion, and approved rehabilitation costs</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-silver-mist">Deposits</td>
                    <td className="p-4 text-silver-mist/80">Sufficient to cover third-party reports, legal, and due diligence</td>
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

export default OpportunisticBridge;