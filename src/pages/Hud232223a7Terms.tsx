import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";

const Hud232223a7Terms = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Lending", href: "/lending" },
          { label: "FHA/HUD Loans", href: "/lending/fha-hud" },
          { label: "232/223(a)(7)" }
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
                
                <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-6 leading-tight">
                  232/223(a)(7)
                </h1>
                <p className="text-lg lg:text-xl font-body font-medium text-accent-brown mb-6">
                  Refinance of existing HUD-insured senior living and healthcare loans
                </p>
                <p className="text-lg font-body text-obsidian/80 leading-relaxed mb-8">
                  Refinance of an existing Nursing Home, Intermediate Care Facility, Board & Care Home or Assisted Living Facility.
                </p>

                {/* Why Consider This Program */}
                <div className="bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-6 shadow-lg mb-8">
                  <h3 className="text-lg font-semibold text-obsidian mb-4 pb-2 border-b border-obsidian/20">
                    Why Consider This Program?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">You want to refinance an existing HUD-insured healthcare facility</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Your facility is already under HUD's Mortgage Insurance Program</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">You need long-term, fixed-rate financing for your healthcare property</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Image and Download */}
              <div className="space-y-6">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/e30cd154-f15d-468b-b592-97afcb0b4189.png" 
                    alt="Senior living facility financing"
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                {/* Download Form */}
                <div className="space-y-4">
                  <input 
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-obsidian/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-garnet-edge focus:border-transparent"
                  />
                  <Button 
                    className="w-full bg-garnet-edge hover:bg-garnet-edge/90 text-white px-8 py-3 font-medium"
                  >
                    Download Flyer
                  </Button>
                </div>
              </div>
            </div>

            {/* Financing Parameters Table */}
            <div className="bg-white/80 backdrop-blur-sm border border-obsidian/20 rounded-lg p-8">
              <h2 className="text-2xl font-display font-medium text-obsidian mb-8 text-center">
                Financing Parameters
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="divide-y divide-obsidian/10">
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Purpose</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Refinance of an existing Nursing Home, Intermediate Care Facility, Board & Care Home or Assisted Living Facility.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Eligible Properties</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">The facility must already be insured under HUD's Mortgage Insurance Program.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Commercial Space</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Eligible for up to 20% of total square footage and 20% of EGI. Commercial Space that is intended to exclusively serve the residents of the project is not counted toward the 20 percent limit</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Maximum Mortgage Limits</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">
                        <div>The lesser of:</div>
                        <div className="mt-2 space-y-1 text-xs">
                          <div>a) Recommended % of LTV.</div>
                          <div>b) Recommended % of Purchase Price (if applicable).</div>
                          <div>c) Recommended Debt Service Coverage Ratio of at least 1.11.</div>
                          <div>d) Existing debt plus transaction costs and proposed repair.</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Amortization & Term</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">The term of the new refinance loan could be up to 40-years but will not exceed the remaining term of the existing loan. However, HUD may approve a term extension providing that a longer term benefits the longevity of the project within the FHA Fund. This loan extension cannot be greater than the term of the original loan at the time it was first insured by HUD. The minimum loan term may not be less than 10 years.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Interest Rate</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Fixed rate subject to market conditions at the time of rate lock.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Mortgage Insurance Premium</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">0.50% payable at closing, 0.55% annually (0.45% for affordable) - Subject to change by HUD.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Recourse</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Non-recourse.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Assumability</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Fully assumable, subject to HUD approval.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Prepayment</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Negotiable. Best rates typically have 1-2 year lockout with declining prepayment penalty for remainder of first 10 years.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Third Party Reports</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">PCNA, (only if one has not been performed within the last 10 years) and a Phase I (if a building addition was made to the property without HUD approval, PCNA determined needed repairs would not qualify as routine maintenance, or if the project will or has acquired land that was not insured under the original mortgage loan). Radon Testing would also be required if a Phase I Environmental is invoked per the above noted criteria.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Escrows</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Escrows for taxes, insurance and mortgage insurance premium are required.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Replacement Reserves</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Initial and monthly deposits required based on long term physical needs.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Repair Escrow</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Cash or a letter of credit for up to 10% of the estimated cost of non-critical repairs.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">HUD Application Fee</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">$1.50 per $1,000 of requested mortgage.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">HUD Inspection Fee</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">No Inspection Fee</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Rate Lock Deposit</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Typically 0.5% of mortgage amount, refunded at closing.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Professional Liability Insurance</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Minimum $1,000,000 / $3,000,000 coverage for operators / managers.</td>
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

export default Hud232223a7Terms;