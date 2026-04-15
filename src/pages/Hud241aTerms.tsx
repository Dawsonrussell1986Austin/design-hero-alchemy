import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const Hud241aTerms = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="HUD 241(a) Supplemental Loan Terms"
        description="FHA/HUD 241(a) supplemental loan program terms for improvements to existing HUD-insured properties."
        canonicalUrl="/lending/fha-hud/241a-terms"
      />
      {/* Navigation */}
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Lending", href: "/lending" },
          { label: "FHA/HUD Loans", href: "/lending/fha-hud" },
          { label: "HUD 241(a)" }
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
                  HUD 241(A)
                </h1>
                <p className="text-lg lg:text-xl font-body font-medium text-gold-accent mb-6">
                  Supplemental Mortgage Insurance for HUD-Insured Multifamily Loans
                </p>
                <p className="text-lg font-body text-abyss/80 leading-relaxed mb-8">
                  Secondary financing for improvements or additions to properties with a HUD-insured first mortgage in need of repairs, substantial rehabilitation, or additional units.
                </p>

                {/* Why Consider This Program */}
                <div className="bg-cream/60 backdrop-blur-sm border border-abyss/20 rounded-lg p-6 shadow-lg mb-8">
                  <h3 className="text-lg font-semibold text-abyss mb-4 pb-2 border-b border-abyss/20">
                    Why Consider This Program?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-abyss/80 leading-relaxed">You need supplemental financing for improvements to multifamily properties</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-abyss/80 leading-relaxed">Your property has an existing HUD-insured first mortgage</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-abyss/80 leading-relaxed">You need funding for repairs, rehabilitation, or additional units</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Image and Download */}
              <div className="space-y-6">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/96eba6e1-209d-482d-b123-727083eb911b.png" 
                    alt="Healthcare facility financing"
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
                  <tbody className="divide-y divide-abyss/10">
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Purpose</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Secondary financing for improvements or additions to properties with a HUD-insured first mortgage in need of repairs, substantial rehabilitation, or additional units.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Borrower</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Single asset and single purpose entity, either for-profit or non-profit.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Maximum Mortgage Limits</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">
                        <div>The maximum loan amount will be the lesser of:</div>
                        <div className="mt-2 space-y-1 text-xs">
                          <div>a) 90% LTV</div>
                          <div>b) 90% LTC</div>
                          <div>c) Minimum DSCR of 1.11x (combined first and second mortgages)</div>
                          <div>d) HUD statutory per unit limitations</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Amortization & Term</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">If the existing loan has more than 25-years of amortization remaining, the term is generally coterminous with the first FHA-insured mortgage. If the remaining term is less than 25-years, then the supplemental loan will have an amortization period of up to 40-years; as long as the term is no greater than 75% of the project's remaining economic life.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Interest Rate</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Fixed for the term of the loan and determined at time of rate lock.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Mortgage Insurance Premium</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">
                        <div>Maximum loan amount will be the lesser of:</div>
                        <div className="mt-2 space-y-1 text-xs">
                          <div>a) 0.95% for Market Rate</div>
                          <div>b) 0.35% for Affordable</div>
                          <div>c) 0.25% for Broadly Affordable or Green Properties</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Recourse</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Non-recourse during both construction & permanent phases of financing.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Assumability</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Fully assumable, subject to HUD approval.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Prepayment</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Negotiable; 0-1 Year lockout, with a declining 1% per year penalty, open after year 10 with no yield maintenance or defeasance. Depending on market conditions, other pre-payment options are available.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Third Party Reports</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Market Study, Appraisal, Environmental Report and PCNA or AEC Review (as applicable - if major building changes are made to the project).</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Escrows</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">The supplemental loan will not require a second reserve escrow. However, it will require a new analysis of the existing reserves for replacement in place for the first FHA-insured mortgage. This new CNA assessment will determine the needs for the existing project along with any new additions from the supplemental loan.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">Federal Labor Standards</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">Federal prevailing wage & reporting requirements.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-abyss bg-abyss/5">HUD Application Fee</td>
                      <td className="py-4 px-6 text-sm text-abyss/80">$3 per $1,000 of the requested mortgage (1/2 required at Pre-Application) or $2 per $1,000 for OZ.</td>
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

export default Hud241aTerms;