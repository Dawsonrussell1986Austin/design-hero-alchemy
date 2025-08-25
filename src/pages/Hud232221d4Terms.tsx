import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";

const Hud232221d4Terms = () => {
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
          { label: "232/221(d)4" }
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
                  232/221(d)4
                </h1>
                <p className="text-lg lg:text-xl font-body font-medium text-accent-brown mb-6">
                  New Construction or Sub-Rehab of Nursing Homes, Intermediate Care Facilities, Board and Care Home and Assisted Living Facilities
                </p>
                <p className="text-lg font-body text-obsidian/80 leading-relaxed mb-8">
                  New construction or substantial rehabilitation of Nursing Homes, Intermediate Care Facilities, Board and Care Home and Assisted Living Facilities.
                </p>

                {/* Why Consider This Program */}
                <div className="bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-6 shadow-lg mb-8">
                  <h3 className="text-lg font-semibold text-obsidian mb-4 pb-2 border-b border-obsidian/20">
                    Why Consider This Program?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">You're developing new healthcare facilities or substantially rehabilitating existing ones</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">You need long-term, non-recourse construction and permanent financing</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">You want competitive rates with HUD backing for healthcare properties</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Image and Download */}
              <div className="space-y-6">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/f5576c7b-21c8-4905-a2a0-ac782c602780.png" 
                    alt="Healthcare facility construction financing"
                    className="w-full h-64 object-cover"
                  />
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
                      <td className="py-4 px-6 text-sm text-obsidian/80">New construction or substantial rehabilitation of Nursing Homes, Intermediate Care Facilities, Board and Care Home and Assisted Living Facilities.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Borrower</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Single asset and single purpose entity, either for-profit or non-profit.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Maximum Mortgage Limits</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">
                        <div>New Construction: The lesser of:</div>
                        <div className="mt-2 space-y-1 text-xs">
                          <div>a) Recommended % of Loan to Value;</div>
                          <div>b) Recommended % of Replacement Cost; or</div>
                          <div>c) Recommended Debt Service Coverage Ratio.</div>
                        </div>
                        <div className="mt-4 text-xs">
                          <div>Substantial Rehabilitation: The lesser of: a) Recommended % of Loan to Value;</div>
                          <div className="mt-2 space-y-1">
                            <div>b) Recommended % of Rehabilitation Cost plus the lesser of: existing indebtedness or recommended % of as-is value for properties owned; or</div>
                            <div>c) Recommended % of purchase price or recommended % of as-is value for properties to be purchased; or</div>
                            <div>d) Recommended Debt Service Ratio.</div>
                          </div>
                        </div>
                        <div className="mt-4 text-xs">
                          <div>Cost of offsite improvements, FF&E, marketing, construction contingency and operating deficit reserve excluded from loan amount.</div>
                        </div>
                        <div className="mt-4 text-xs">
                          <div className="font-medium">Based on current economic and fiscal environment, HUD has recommended the following parameters:</div>
                          <div className="mt-2 space-y-1">
                            <div>New Construction - For Profit Assisted Living: 75% LTV, 1.45 DSCR.</div>
                            <div>New Construction - Non-Profit Assisted Living: 80% LTV, 1.45 DSCR</div>
                            <div>Sub-Rehab - For Profit Assisted Living: 80% LTV, 1.45 DSCR.</div>
                            <div>Sub-Rehab - Non-Profit Assisted Living: 85% LTV, 1.45 DSCR</div>
                          </div>
                        </div>
                        <div className="mt-4 text-xs">
                          <div className="font-medium">New Construction & Substantial Rehabilitation</div>
                          <div className="mt-2 space-y-1">
                            <div>- For Profit Skilled Nursing, Board and Care and Independent Living: 80% LTV, 1.45 DSCR.</div>
                            <div>- Non-Profit Skilled Nursing, Board and Care and Independent Living: 85% LTV, 1.45 DSCR.</div>
                            <div>*Other than the above constraints, there are no minimum or maximum loan sizes.</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Amortization & Term</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Interest only during the construction period, plus 40 years fully amortizing.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Interest Rate</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Fixed rate determined by market conditions at the time of rate lock.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Mortgage Insurance Premium</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">0.77% each year during construction and 0.77% annually (0.45% for affordable) (0.25% for Green Energy) Subject to change by HUD.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Recourse</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Non-recourse during both construction & permanent phases of financing.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Assumability</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Fully assumable with HUD approval.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Prepayment</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Negotiable. Best rates typically have 1-2 year lockout with declining prepayment penalty for remainder of first 10 years.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Third Party Reports</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Market study, Appraisal, Architectural and Costs Review and Environmental.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Escrows</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Escrows for debt service, mortgage insurance premium, taxes, insurance, replacement reserves, working capital, operating deficit, and minor movables are required.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Federal Labor Standards</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Federal prevailing wage & reporting requirements.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">Assurance of Completion</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">Payment & performance bond or cash deposit/letter of credit.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">HUD Application Fee</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">$3 per $1,000 of the requested mortgage.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">OZ HUD Application Fee</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">$2 per $1,000 of the requested mortgage.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-obsidian bg-obsidian/5">HUD Inspection Fee</td>
                      <td className="py-4 px-6 text-sm text-obsidian/80">$5 per 1,000 of the requested mortgage for new construction, and $5 per 1,000 of improvements cost for substantial rehabilitation.</td>
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

export default Hud232221d4Terms;