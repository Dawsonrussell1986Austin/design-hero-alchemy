import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimplePageHeader from "@/components/SimplePageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Lending = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      {/* Navigation */}
      <Navigation />
      
      {/* Simple Page Header */}
      <SimplePageHeader title="Lending" />

      {/* Overview Section */}
      <div className="py-20 bg-silver-mist/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-silver-mist/90 text-lg leading-relaxed">
              <p>
                Oak offers structured capital solutions for commercial real estate borrowers nationwide. Our national lending platform combines efficiency and innovation with institutional-grade standards and a comprehensive underwriting discipline.
              </p>
              <p>
                We provide both short-term private bridge loans and long-term, government-backed FHA/HUD-insured mortgages—individually or in a seamless Bridge-to-FHA structure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bridge Loan Programs */}
      <div className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-12 text-center">
              Bridge Loan Programs
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div 
                className="space-y-4 p-8 bg-silver-mist/5 backdrop-blur-sm rounded-lg border border-accent-brown/30 hover:bg-silver-mist/10 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group"
                onClick={() => window.location.href = "/lending/core-bridge"}
              >
                <h3 className="text-xl font-medium text-accent-brown group-hover:text-garnet-edge transition-colors duration-300">Core Bridge</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  Loans for stabilizing properties, currently at or above breakdown cash flow. (≥1.00x DSCR)
                </p>
                <p className="text-garnet-edge text-sm italic">
                  Click to learn more →
                </p>
              </div>
              
              <div 
                className="space-y-4 p-8 bg-silver-mist/5 backdrop-blur-sm rounded-lg border border-accent-brown/30 hover:bg-silver-mist/10 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group"
                onClick={() => window.location.href = "/lending/core-plus-bridge"}
              >
                <h3 className="text-xl font-medium text-accent-brown group-hover:text-garnet-edge transition-colors duration-300">Core-Plus Bridge</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  Loans for stabilizing properties, currently below breakdown cash flow.
                </p>
                <p className="text-garnet-edge text-sm italic">
                  Click to learn more →
                </p>
              </div>
              
              <Link to="/lending/opportunistic-bridge" className="block">
                <div className="space-y-4 p-8 bg-silver-mist/5 backdrop-blur-sm rounded-lg border border-accent-brown/30 hover:bg-silver-mist/10 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group">
                  <h3 className="text-xl font-medium text-accent-brown group-hover:text-garnet-edge transition-colors duration-300">Opportunistic Bridge</h3>
                  <p className="text-silver-mist/80 leading-relaxed">
                    Higher-leverage loans for value-add strategies and capital improvements.
                  </p>
                  <p className="text-garnet-edge text-sm italic">
                    Click to learn more →
                  </p>
                </div>
              </Link>
              
              <Link to="/lending/participating-bridge" className="block">
                <div className="space-y-4 p-8 bg-silver-mist/5 backdrop-blur-sm rounded-lg border border-accent-brown/30 hover:bg-silver-mist/10 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group">
                  <h3 className="text-xl font-medium text-accent-brown group-hover:text-garnet-edge transition-colors duration-300">Participating Bridge</h3>
                  <p className="text-silver-mist/80 leading-relaxed">
                    High leverage, highly structured loans for sponsors seeking adaptive re-use capital and shared appreciation.
                  </p>
                  <p className="text-garnet-edge text-sm italic">
                    Click to learn more →
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FHA/HUD Loan Programs */}
      <div className="py-20 bg-silver-mist/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-8">
                FHA/HUD Loan Programs
              </h2>
              <h3 className="text-2xl font-light text-garnet-edge mb-6">
                Long-Term, Government-Backed Financing for Essential Real Estate Assets
              </h3>
              <p className="text-lg text-silver-mist/80 leading-relaxed max-w-4xl mx-auto">
                Oak's subsidiary, Johnson Capital Multifamily, provides FHA/HUD-insured loan programs. These financing solutions provide long-term, government-backed capital for multifamily, affordable housing, senior living, and healthcare properties.
              </p>
              <p className="text-lg text-silver-mist/80 leading-relaxed max-w-4xl mx-auto mt-4">
                With a deep understanding of HUD programs and a commitment to execution certainty, Oak offers tailored solutions that align with mission-driven real estate strategies.
              </p>
            </div>

            {/* Multifamily & Affordable Housing Programs */}
            <div className="mb-16">
              <h4 className="text-2xl font-medium text-silver-mist mb-8 text-center">
                Multifamily & Affordable Housing Programs
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 p-6 bg-silver-mist/10 backdrop-blur-sm rounded-lg border border-accent-brown/40 hover:bg-silver-mist/15 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group">
                  <h5 className="text-lg font-semibold text-silver-mist group-hover:text-accent-brown transition-colors duration-300">Construction/Substantial Rehabilitation of Multifamily Properties</h5>
                  <p className="text-silver-mist/80 font-medium">HUD 221(d)(4) & 220</p>
                  <p className="text-accent-brown text-sm font-medium">
                    Click to learn more →
                  </p>
                </div>
                
                <div className="space-y-3 p-6 bg-silver-mist/10 backdrop-blur-sm rounded-lg border border-accent-brown/40 hover:bg-silver-mist/15 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group">
                  <h5 className="text-lg font-semibold text-silver-mist group-hover:text-accent-brown transition-colors duration-300">Acquisition or Refinance of Multifamily Properties</h5>
                  <p className="text-silver-mist/80 font-medium">HUD 223(f)</p>
                  <p className="text-accent-brown text-sm font-medium">
                    Click to learn more →
                  </p>
                </div>
                
                <div className="space-y-3 p-6 bg-silver-mist/10 backdrop-blur-sm rounded-lg border border-accent-brown/40 hover:bg-silver-mist/15 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group">
                  <h5 className="text-lg font-semibold text-silver-mist group-hover:text-accent-brown transition-colors duration-300">Streamlined Refinance of Existing HUD-Financed Properties</h5>
                  <p className="text-silver-mist/80 font-medium">HUD 223(a)(7)</p>
                  <p className="text-accent-brown text-sm font-medium">
                    Click to learn more →
                  </p>
                </div>
                
                <div className="space-y-3 p-6 bg-silver-mist/10 backdrop-blur-sm rounded-lg border border-accent-brown/40 hover:bg-silver-mist/15 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group">
                  <h5 className="text-lg font-semibold text-silver-mist group-hover:text-accent-brown transition-colors duration-300">Supplemental Loans for Capital Improvement</h5>
                  <p className="text-silver-mist/80 font-medium">HUD 241(a)</p>
                  <p className="text-accent-brown text-sm font-medium">
                    Click to learn more →
                  </p>
                </div>
              </div>
            </div>

            {/* Senior Housing & Healthcare Programs */}
            <div className="mb-16">
              <h4 className="text-2xl font-medium text-silver-mist mb-8 text-center">
                Senior Housing & Healthcare Programs
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 p-6 bg-silver-mist/10 backdrop-blur-sm rounded-lg border border-accent-brown/40 hover:bg-silver-mist/15 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group">
                  <h5 className="text-lg font-semibold text-silver-mist group-hover:text-accent-brown transition-colors duration-300">Construction/Substantial Rehabilitation of Senior Housing & Healthcare</h5>
                  <p className="text-silver-mist/80 font-medium">HUD 232/221(d)(4)</p>
                  <p className="text-accent-brown text-sm font-medium">
                    Click to learn more →
                  </p>
                </div>
                
                <div className="space-y-3 p-6 bg-silver-mist/10 backdrop-blur-sm rounded-lg border border-accent-brown/40 hover:bg-silver-mist/15 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group">
                  <h5 className="text-lg font-semibold text-silver-mist group-hover:text-accent-brown transition-colors duration-300">Acquisition or Refinance of Senior Housing & Healthcare</h5>
                  <p className="text-silver-mist/80 font-medium">HUD 232/223(f)</p>
                  <p className="text-accent-brown text-sm font-medium">
                    Click to learn more →
                  </p>
                </div>
                
                <div className="space-y-3 p-6 bg-silver-mist/10 backdrop-blur-sm rounded-lg border border-accent-brown/40 hover:bg-silver-mist/15 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group">
                  <h5 className="text-lg font-semibold text-silver-mist group-hover:text-accent-brown transition-colors duration-300">Streamlined Refinance of Existing HUD-Financed Senior Assets</h5>
                  <p className="text-silver-mist/80 font-medium">HUD 232/223(a)(7)</p>
                  <p className="text-accent-brown text-sm font-medium">
                    Click to learn more →
                  </p>
                </div>
                
                <div className="space-y-3 p-6 bg-silver-mist/10 backdrop-blur-sm rounded-lg border border-accent-brown/40 hover:bg-silver-mist/15 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group">
                  <h5 className="text-lg font-semibold text-silver-mist group-hover:text-accent-brown transition-colors duration-300">Supplemental Mortgage Insurance for Capital Improvements</h5>
                  <p className="text-silver-mist/80 font-medium">HUD 241(a)</p>
                  <p className="text-accent-brown text-sm font-medium">
                    Click to learn more →
                  </p>
                </div>
              </div>
            </div>

            {/* Available Properties */}
            <div className="text-center mb-12">
              <p className="text-lg text-silver-mist/80 leading-relaxed">
                Available through Oak's FHA/HUD platform, these loans provide long-term, government-backed financing for:
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="p-6 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg hover:from-accent-brown/30 hover:to-garnet-edge/30 transition-all duration-300">
                  <h5 className="text-lg font-medium text-silver-mist">Multifamily housing</h5>
                </div>
                <div className="p-6 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg hover:from-accent-brown/30 hover:to-garnet-edge/30 transition-all duration-300">
                  <h5 className="text-lg font-medium text-silver-mist">Affordable housing</h5>
                </div>
                <div className="p-6 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg hover:from-accent-brown/30 hover:to-garnet-edge/30 transition-all duration-300">
                  <h5 className="text-lg font-medium text-silver-mist">Senior living and healthcare</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bridge-to-FHA Transition */}
      <div className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-12">
              Bridge-to-FHA Transition
            </h2>
            <p className="text-lg text-silver-mist/80 leading-relaxed mb-12">
              Our integrated platform ensures smooth execution from initial bridge loan to FHA takeout, offering:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4 p-6 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg hover:from-accent-brown/30 hover:to-garnet-edge/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-medium text-silver-mist">Faster access to capital</h3>
              </div>
              
              <div className="space-y-4 p-6 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg hover:from-accent-brown/30 hover:to-garnet-edge/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-medium text-silver-mist">Minimized downtime</h3>
              </div>
              
              <div className="space-y-4 p-6 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg hover:from-accent-brown/30 hover:to-garnet-edge/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-medium text-silver-mist">Full lifecycle financing execution with a predefined exit</h3>
              </div>
              
              <div className="space-y-4 p-6 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg hover:from-accent-brown/30 hover:to-garnet-edge/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-medium text-silver-mist">Alignment of borrower and lender interests</h3>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
              >
                Learn More About Our Lending Programs
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-silver-mist/40 text-silver-mist hover:bg-silver-mist hover:text-obsidian hover:border-garnet-edge px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm backdrop-blur-sm"
              >
                Contact Our Lending Team
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

export default Lending;