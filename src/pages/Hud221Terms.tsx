import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
const Hud221Terms = () => {

  return (
    <div className="min-h-screen">
      <SEOHead
        title="HUD 221(d)4 & 220 Loan Terms"
        description="FHA/HUD 221(d)4 and 220 loan program terms for new construction and substantial rehabilitation of multifamily properties."
        canonicalUrl="/lending/fha-hud/221-terms"
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
          { label: "221(d)4 & 220" }
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
                  HUD 221(d)4 & 220
                </h1>
                <p className="text-lg lg:text-xl font-body font-medium text-gold-accent mb-6">
                  New Construction or Substantial Rehabilitation of Multifamily Properties
                </p>
                <p className="text-lg font-body text-abyss/80 leading-relaxed mb-8">
                  New construction or substantial rehabilitation financing for multifamily properties. Ideal for new developments and major renovations with long-term, government-backed capital.
                </p>

                {/* Why Consider This Program */}
                <div className="bg-cream/60 backdrop-blur-sm border border-abyss/20 rounded-lg p-6 shadow-lg mb-8">
                  <h3 className="text-lg font-semibold text-abyss mb-4 pb-2 border-b border-abyss/20">
                    Why Consider This Program?
                  </h3>
                  <ul className="space-y-2 text-abyss/80">
                    <li className="flex items-start space-x-2">
                      <span className="text-garnet-edge mt-1">•</span>
                      <span>Up to 90% loan-to-cost for new construction</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-garnet-edge mt-1">•</span>
                      <span>40-year amortization with long-term fixed rates</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-garnet-edge mt-1">•</span>
                      <span>Non-recourse financing with government backing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-garnet-edge mt-1">•</span>
                      <span>Competitive interest rates below market</span>
                    </li>
                  </ul>
                </div>

              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/f3f4f547-a076-447d-ad82-a42bc7af0201.png"
                  alt="Multifamily housing development"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Financing Parameters Section */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-display font-medium text-abyss mb-8">
                Financing Parameters
              </h2>
              
              <div className="bg-cream/80 backdrop-blur-sm border border-abyss/10 rounded-xl p-8 shadow-lg">
                <table className="w-full">
                  <tbody className="space-y-4">
                    <tr className="border-b border-abyss/10">
                      <td className="py-4 font-semibold text-abyss">Maximum Loan Amount</td>
                      <td className="py-4 text-abyss/80">No statutory limit</td>
                    </tr>
                    <tr className="border-b border-abyss/10">
                      <td className="py-4 font-semibold text-abyss">Loan-to-Cost</td>
                      <td className="py-4 text-abyss/80">Up to 90% for new construction, 85% for substantial rehabilitation</td>
                    </tr>
                    <tr className="border-b border-abyss/10">
                      <td className="py-4 font-semibold text-abyss">Term</td>
                      <td className="py-4 text-abyss/80">Up to 40 years</td>
                    </tr>
                    <tr className="border-b border-abyss/10">
                      <td className="py-4 font-semibold text-abyss">Amortization</td>
                      <td className="py-4 text-abyss/80">40 years</td>
                    </tr>
                    <tr className="border-b border-abyss/10">
                      <td className="py-4 font-semibold text-abyss">Interest Rate</td>
                      <td className="py-4 text-abyss/80">Fixed rate based on current market conditions</td>
                    </tr>
                    <tr className="border-b border-abyss/10">
                      <td className="py-4 font-semibold text-abyss">Prepayment</td>
                      <td className="py-4 text-abyss/80">Various prepayment options available</td>
                    </tr>
                    <tr className="border-b border-abyss/10">
                      <td className="py-4 font-semibold text-abyss">Property Types</td>
                      <td className="py-4 text-abyss/80">Multifamily rental housing (5+ units)</td>
                    </tr>
                    <tr className="border-b border-abyss/10">
                      <td className="py-4 font-semibold text-abyss">Minimum DSCR</td>
                      <td className="py-4 text-abyss/80">1.15x - 1.20x (varies by market and property type)</td>
                    </tr>
                    <tr className="border-b border-abyss/10">
                      <td className="py-4 font-semibold text-abyss">Recourse</td>
                      <td className="py-4 text-abyss/80">Non-recourse (with standard carve-outs)</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-semibold text-abyss">Processing Time</td>
                      <td className="py-4 text-abyss/80">6-12 months from application to closing</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cream/40">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-8">
                Ready to Explore HUD 221(d)4 Financing?
              </h2>
              <p className="text-lg text-abyss/80 leading-relaxed mb-12">
                Our HUD specialists can help you navigate the application process and determine if this program is right for your multifamily development.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  className="bg-gold-accent hover:bg-gold-accent/90 text-cream px-12 py-4 text-lg font-medium"
                  onClick={() => window.location.href = "/contact"}
                >
                  Contact Our Team
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-abyss text-abyss hover:bg-abyss hover:text-cream px-12 py-4 text-lg font-medium"
                  onClick={() => window.location.href = "/lending/fha-hud"}
                >
                  View All HUD Programs
                </Button>
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

export default Hud221Terms;