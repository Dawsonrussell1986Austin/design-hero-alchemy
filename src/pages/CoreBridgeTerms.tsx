import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";

const CoreBridgeTerms = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Lending", href: "/lending" },
          { label: "Bridge Loans", href: "/lending/bridge" },
          { label: "Core Bridge" }
        ]}
      />

      {/* Cream background for content */}
      <div className="bg-silver-mist">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              {/* Text Content */}
              <div>
                {/* Program Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-garnet-edge/15 text-garnet-edge border border-garnet-edge/30 shadow-sm">
                    Bridge Loans
                  </span>
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-6 leading-tight">
                  Core Bridge
                </h1>
                <p className="text-lg lg:text-xl font-body font-medium text-gold-accent mb-6">
                  Floating-rate bridge lending program for institutional-quality commercial real estate assets
                </p>
                <p className="text-lg font-body text-obsidian/80 leading-relaxed mb-8">
                  Designed for assets that are in transition, are currently cash flowing (1.00x or greater) and require additional funds/time to reach stabilization.
                </p>

                {/* Why Consider This Program */}
                <div className="bg-cream/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-6 shadow-lg mb-8">
                  <h3 className="text-lg font-semibold text-obsidian mb-4 pb-2 border-b border-obsidian/20">
                    Why Consider This Program?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">You're seeking short-term funding to rehabilitate, reposition or stabilize an asset</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">You need financing to complete a property acquisition or redevelopment project</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">You need flexible, non-permanent capital to implement the renovation and stabilization of a core commercial real estate asset</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Image and Download */}
              <div className="space-y-6">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/core-bridge-hero-new.png" 
                    alt="Commercial real estate financing"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Financing Parameters Table */}
            <div className="bg-cream/80 backdrop-blur-sm border border-obsidian/20 rounded-lg p-8">
              <h2 className="text-2xl font-display font-medium text-obsidian mb-8 text-center">
                Financing Parameters
              </h2>
              
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full">
                  <tbody className="divide-y divide-obsidian/10">
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Property Types</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Multifamily, Industrial, Retail, Mixed Use, Hospitality, Office, Medical Office, Self-Storage, Manufactured Housing</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Loan Amount</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">$2 Million to $50 Million+</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Loan Purpose</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Acquisition, Refinance, Situational, Stabilization</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Property Location</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Primary and secondary markets only</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Maximum LTV/LTC</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Up to 80% LTV (based on stabilized value) Up to 75% LTC (based on transaction underwriting)</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Interest Rate</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">1-Month Term SOFR plus 450BPs - 550BPs (interest only)</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Loan Term</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">12 to 36 months (fully extended)</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Floor / Rate Cap</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">The rate/floor will be set at the closing of the loan. No Rate Cap will be required</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Extensions</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Up to two (2) extensions of 6 months each, at market extension fees</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Origination Fees & Exit Fees</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Market-competitive fees based on the loan size, leverage, complexity and timing of the transaction</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Lien Position</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Senior Position (secondary financing prohibited)</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Funding Structure</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Full funding with holdback</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Recourse</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Non-recourse, other than standard "bad boy acts" or recourse structure for higher-risk transactions</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Timing to Close</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Typically, 30 to 45 days from acceptance of LOI and receipt of deposits</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Debt Service Reserve</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Properties must provide at least break-even debt service coverage (1.00x on existing cash flow based on proposed loan amount)</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Prepayment Penalty</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Minimum interest, generally half of the initial loan term</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">TI/LC and Future Advances</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Future funding facility toward tenant improvements, leasing commissions and other approved costs</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Deposits</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Expense deposit adequate to cover costs for third-party reports, legal fees and other customary due diligence or underwriting costs</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CoreBridgeTerms;