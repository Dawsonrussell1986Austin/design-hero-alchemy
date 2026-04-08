import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";


const OpportunisticBridge = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Lending", href: "/lending" }
        ]}
        quickLinks={[
          { label: "Overview", href: "/lending" },
          { label: "Core Bridge", href: "/lending/bridge/core-bridge" },
          { label: "Core-Plus Bridge", href: "/lending/bridge/core-plus-bridge" },
          { label: "Opportunistic Bridge", href: "/lending/bridge/opportunistic-bridge" },
          { label: "Participating Bridge", href: "/lending/bridge/participating-bridge" }
        ]}
      />

      {/* Cream background for content */}
      <div className="bg-silver-mist">
        {/* Content Section with Image */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Text Content */}
              <div>
                {/* Program Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-garnet-edge/15 text-garnet-edge border border-garnet-edge/30 shadow-sm">
                    PROGRAM | OPPORTUNISTIC BRIDGE
                  </span>
                </div>
                
                <h1 className="text-2xl lg:text-3xl font-display font-medium text-obsidian mb-6 leading-tight">
                  Higher-leverage, floating-rate bridge lending program for commercial real estate assets that have a substantial value-creation component. The loan includes a small equity component in the form of a higher LTC in exchange for a higher interest rate and exit fees.
                </h1>
                
                {/* Why Consider This Program */}
                <div className="mb-8">
                  <h2 className="text-xl font-display font-medium text-obsidian mb-4">
                    WHY CONSIDER THIS PROGRAM?
                  </h2>
                  <ul className="space-y-3 text-obsidian/80">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-obsidian rounded-full mt-2 flex-shrink-0"></span>
                      <span>You're seeking short-term funding to rehabilitate, reposition or stabilize an asset</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-obsidian rounded-full mt-2 flex-shrink-0"></span>
                      <span>You need financing with an equity component provided by the lender</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-obsidian rounded-full mt-2 flex-shrink-0"></span>
                      <span>You need flexible, non-permanent capital to implement a conversion, expansion or renovation of a core commercial real estate asset</span>
                    </li>
                  </ul>
                </div>

              </div>
              
              {/* Image */}
              <div className="relative">
                <div className="bg-cream/70 backdrop-blur-xl border border-obsidian/10 p-8 rounded-lg shadow-xl">
                  <img 
                    src="/lovable-uploads/6007eb22-bc11-4f64-97d4-5a5d82ce5650.png"
                    alt="Opportunistic Bridge financing program"
                    className="w-full h-auto rounded-lg mb-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financing Parameters Table */}
        <section className="container mx-auto px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="bg-cream/70 backdrop-blur-xl border border-obsidian/10 rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-display font-medium text-garnet-edge mb-8 uppercase tracking-wide">
                FINANCING PARAMETERS
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="space-y-1">
                    <tr className="border-b border-obsidian/10">
                      <td className="py-4 pr-8 font-semibold text-obsidian bg-silver-mist/50 pl-4">Property Types</td>
                      <td className="py-4 text-obsidian/80 pl-4">Multifamily, Industrial, Retail, Mixed Use, Hospitality, Office, Medical Office, Self-Storage, Manufactured Housing</td>
                    </tr>
                    <tr className="border-b border-obsidian/10">
                      <td className="py-4 pr-8 font-semibold text-obsidian bg-silver-mist/50 pl-4">Loan Amount</td>
                      <td className="py-4 text-obsidian/80 pl-4">$2 Million to $50 Million+</td>
                    </tr>
                    <tr className="border-b border-obsidian/10">
                      <td className="py-4 pr-8 font-semibold text-obsidian bg-silver-mist/50 pl-4">Loan Purpose</td>
                      <td className="py-4 text-obsidian/80 pl-4">Acquisition, Refinance, Conversion, Rehabilitation, Situational, Stabilization</td>
                    </tr>
                    <tr className="border-b border-obsidian/10">
                      <td className="py-4 pr-8 font-semibold text-obsidian bg-silver-mist/50 pl-4">Property Location</td>
                      <td className="py-4 text-obsidian/80 pl-4">Primary, Secondary & select Tertiary markets with a minimum population of 50,000 to 100,000 people</td>
                    </tr>
                    <tr className="border-b border-obsidian/10">
                      <td className="py-4 pr-8 font-semibold text-obsidian bg-silver-mist/50 pl-4">Maximum LTV/LTC</td>
                      <td className="py-4 text-obsidian/80 pl-4">Up to 85% LTV (based on stabilized value)<br/>Up to 90% LTC (based on transaction underwriting)</td>
                    </tr>
                    <tr className="border-b border-obsidian/10">
                      <td className="py-4 pr-8 font-semibold text-obsidian bg-silver-mist/50 pl-4">Interest Rate</td>
                      <td className="py-4 text-obsidian/80 pl-4">1-Month Term SOFR plus 600BPs – 700BPs (interest only)</td>
                    </tr>
                    <tr className="border-b border-obsidian/10">
                      <td className="py-4 pr-8 font-semibold text-obsidian bg-silver-mist/50 pl-4">Loan Term</td>
                      <td className="py-4 text-obsidian/80 pl-4">18 – 36 months (fully extended)</td>
                    </tr>
                    <tr className="border-b border-obsidian/10">
                      <td className="py-4 pr-8 font-semibold text-obsidian bg-silver-mist/50 pl-4">Floor / Rate Cap</td>
                      <td className="py-4 text-obsidian/80 pl-4">The rate/floor will be set at the closing of the loan. No Rate Cap will be required</td>
                    </tr>
                    <tr className="border-b border-obsidian/10">
                      <td className="py-4 pr-8 font-semibold text-obsidian bg-silver-mist/50 pl-4">Extensions</td>
                      <td className="py-4 text-obsidian/80 pl-4">Up to two (2) extensions of 6 months each, at market extension fees</td>
                    </tr>
                    <tr className="border-b border-obsidian/10">
                      <td className="py-4 pr-8 font-semibold text-obsidian bg-silver-mist/50 pl-4">Origination Fees & Exit Fees</td>
                      <td className="py-4 text-obsidian/80 pl-4">Market competitive fees based on the loan size, leverage, complexity and timing of the transaction</td>
                    </tr>
                    <tr className="border-b border-obsidian/10">
                      <td className="py-4 pr-8 font-semibold text-obsidian bg-silver-mist/50 pl-4">Lien Position</td>
                      <td className="py-4 text-obsidian/80 pl-4">Senior Position (secondary financing prohibited)</td>
                    </tr>
                    <tr className="border-b border-obsidian/10">
                      <td className="py-4 pr-8 font-semibold text-obsidian bg-silver-mist/50 pl-4">Funding Structure</td>
                      <td className="py-4 text-obsidian/80 pl-4">Full funding with holdback</td>
                    </tr>
                    <tr className="border-b border-obsidian/10">
                      <td className="py-4 pr-8 font-semibold text-obsidian bg-silver-mist/50 pl-4">Recourse</td>
                      <td className="py-4 text-obsidian/80 pl-4">Non-recourse, other than standard "bad boy acts" or recourse structure for higher-risk transactions</td>
                    </tr>
                    <tr className="border-b border-obsidian/10">
                      <td className="py-4 pr-8 font-semibold text-obsidian bg-silver-mist/50 pl-4">Timing to Close</td>
                      <td className="py-4 text-obsidian/80 pl-4">Typically 30 to 45 days from acceptance of LOI and receipt of deposits</td>
                    </tr>
                    <tr className="border-b border-obsidian/10">
                      <td className="py-4 pr-8 font-semibold text-obsidian bg-silver-mist/50 pl-4">Debt Service Reserve</td>
                      <td className="py-4 text-obsidian/80 pl-4">Below 1.00X DSCR acceptable if supported by a debt service reserve (cash-flowing assets preferred)</td>
                    </tr>
                    <tr className="border-b border-obsidian/10">
                      <td className="py-4 pr-8 font-semibold text-obsidian bg-silver-mist/50 pl-4">Prepayment Penalty</td>
                      <td className="py-4 text-obsidian/80 pl-4">Minimum interest, generally half of initial loan term</td>
                    </tr>
                    <tr className="border-b border-obsidian/10">
                      <td className="py-4 pr-8 font-semibold text-obsidian bg-silver-mist/50 pl-4">TI/LC and Future Advances</td>
                      <td className="py-4 text-obsidian/80 pl-4">Future funding facility toward tenant improvements, leasing commissions, rehabilitation and conversion costs</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-8 font-semibold text-obsidian bg-silver-mist/50 pl-4">Deposits</td>
                      <td className="py-4 text-obsidian/80 pl-4">Expense deposit adequate to cover costs for third-party reports, legal fees and other customary due diligence or underwriting costs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OpportunisticBridge;