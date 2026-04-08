import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";

const Hud232223fTerms = () => {
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
          { label: "FHA/HUD Loans", href: "/lending/fha-hud" },
          { label: "232/223(f)" }
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
                    FHA/HUD Loans
                  </span>
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-6 leading-tight">
                  232/223(F)
                </h1>
                <p className="text-lg lg:text-xl font-body font-medium text-gold-accent mb-6">
                  Multifamily Refinance or Acquisition
                </p>
                <p className="text-lg font-body text-abyss/80 leading-relaxed mb-8">
                  Refinancing of existing Multifamily (minimum 5 units) structures with proven debt service coverage performance.
                </p>

                {/* Why Consider This Program */}
                <div className="bg-cream/60 backdrop-blur-sm border border-abyss/20 rounded-lg p-6 shadow-lg mb-8">
                  <h3 className="text-lg font-semibold text-abyss mb-4 pb-2 border-b border-abyss/20">
                    Why Consider This Program?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-abyss/80 leading-relaxed">You're refinancing or acquiring multifamily properties with 5+ units</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-abyss/80 leading-relaxed">Your property has demonstrated debt service coverage for at least 3 months</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-abyss/80 leading-relaxed">You need long-term, non-recourse financing for multifamily properties</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Image and Download */}
              <div className="space-y-6">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/conference-table-image.png" 
                    alt="Professional multifamily financing consultation"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Financing Parameters Table */}
            <div className="bg-cream/80 backdrop-blur-sm border border-abyss/20 rounded-lg p-8">
              <h2 className="text-2xl font-display font-medium text-abyss mb-8 text-center">
                Financing Parameters
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="divide-y divide-obsidian/10">
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Eligible Properties</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Refinancing of existing Multifamily (minimum 5 units) structures that have at least one full month of Debt Service Coverage Ratio being 1.15 for a market rate property, 1.11 for an affordable property or for a broadly affordable property. The property must have this consecutive coverage for at least 3-months prior to loan endorsement.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Commercial Space</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Eligible for up to 25% of total net rentable area and 20% of EGL.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Borrower</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Single asset and single purpose entity, either for-profit or non-profit.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Maximum Mortgage Limits</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">
                        <div>The lesser of:</div>
                        <div className="mt-2 space-y-1 text-xs">
                          <div>a) Applicable percentage of LTV.</div>
                          <div>b) Applicable debt service coverage ratio.</div>
                          <div>c) 87% of transaction costs, if purchase transaction.</div>
                          <div>d) HUD statutory limits.</div>
                          <div>e) Greater of 100% of transaction costs or 80% LTV if refinance cash out transaction.</div>
                          <div>f) For market rate properties, applicable factors: 87% LTV, 1.15 DSCR.</div>
                          <div>g) For affordable and broadly affordable properties: 90% LTV,1.11 DSCR.</div>
                          <div>h) For Manufactured Home Community Program: 90% LTV Maximum, 1.11 DSCR, No Cash Out</div>
                        </div>
                        <div className="mt-4 text-xs">
                          <div>* If built and occupied for 3-years or more, the Property must have a stabilized average physical occupancy of 85%. If less than 3-years of age, the property may have at least 1-month physical occupancy of not less than 85% with 60 days of that same occupancy prior to Endorsement.</div>
                          <div className="mt-2">* 50% of cash out funded at closing; remainder upon completion of non-critical repairs.</div>
                          <div className="mt-2">* Other parameters apply to mortgage over $120 million.</div>
                          <div className="mt-2">* Other than the above constraints, there are no minimum or maximum loan sizes.</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Amortization & Term</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">A maximum term of the lesser of: 35 years fully amortizing or 75% of remaining economic life.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Interest Rate</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Fixed rate determined by market conditions at the time of rate lock.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Mortgage Insurance Premium</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">1% payable at closing, 0.60% (0.35% for affordable and 0.25% for broadly affordable) annually or 0.25% for GreenMIP, escrowed monthly. Subject to change by HUD.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Recourse</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Non-recourse.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Assumability</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Fully assumable, subject to HUD approval.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Prepayment</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Negotiable. Best rates typically have 1-2 year lockout with declining prepayment penalty for remainder of first 10 years.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Third Party Reports</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Typically Appraisal, PCNA, and Phase I ESA. Other reports as needed.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Escrows</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Escrows for taxes, insurance and mortgage insurance premium are required.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Replacement Reserves</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Initial and monthly deposits required based on long term physical needs.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Repair Escrow</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Cash or a letter of credit for up to 20% of the estimated cost of repairs.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">HUD Application Fee</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">$3 per $1,000 of requested mortgage.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">HUD Inspection Fee</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Greater of 1% of the cost of repairs or $30 per unit ($1,500 max if repairs are less than $100k).</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Rate Lock Deposit</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Typically 0.5% of mortgage amount, refunded at closing.</td>
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

export default Hud232223fTerms;