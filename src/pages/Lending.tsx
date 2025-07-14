import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Lending = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative py-24 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-light text-obsidian leading-tight tracking-tight mb-8">
              Commercial Real Estate Lending, <span className="text-accent-brown">Built for Confidence</span>
            </h1>
            <p className="text-xl lg:text-2xl text-deep-petrol max-w-3xl mx-auto leading-relaxed font-light">
              Tailored debt solutions for real estate sponsors nationwide—from bridge loans to long-term HUD-insured financing.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-20 bg-gradient-to-r from-cream to-silver-mist/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-deep-petrol text-lg leading-relaxed">
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
      <div className="py-20 bg-cream">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-obsidian mb-12 text-center">
              Bridge Loan Programs
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 p-8 bg-cream/80 backdrop-blur-sm rounded-lg border border-accent-brown/30">
                <h3 className="text-xl font-medium text-accent-brown">Core Bridge</h3>
                <p className="text-deep-petrol leading-relaxed">
                  Loans for stabilizing properties, currently at or above breakdown cash flow. (≥1.00x DSCR)
                </p>
              </div>
              
              <div className="space-y-4 p-8 bg-cream/80 backdrop-blur-sm rounded-lg border border-accent-brown/30">
                <h3 className="text-xl font-medium text-accent-brown">Core-Plus Bridge</h3>
                <p className="text-deep-petrol leading-relaxed">
                  Loans for stabilizing properties, currently below breakdown cash flow.
                </p>
              </div>
              
              <div className="space-y-4 p-8 bg-cream/80 backdrop-blur-sm rounded-lg border border-accent-brown/30">
                <h3 className="text-xl font-medium text-accent-brown">Opportunistic Bridge</h3>
                <p className="text-deep-petrol leading-relaxed">
                  Higher-leverage loans for value-add strategies and capital improvements.
                </p>
              </div>
              
              <div className="space-y-4 p-8 bg-cream/80 backdrop-blur-sm rounded-lg border border-accent-brown/30">
                <h3 className="text-xl font-medium text-accent-brown">Participating Bridge</h3>
                <p className="text-deep-petrol leading-relaxed">
                  High leverage, highly structured loans for sponsors seeking adaptive re-use capital and shared appreciation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FHA/HUD Loan Programs */}
      <div className="py-20 bg-gradient-to-br from-silver-mist/20 to-cream">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-light text-obsidian mb-8">
                FHA/HUD Loan Programs
              </h2>
              <h3 className="text-2xl font-light text-garnet-edge mb-6">
                Long-Term, Government-Backed Financing for Essential Real Estate Assets
              </h3>
              <p className="text-lg text-deep-petrol leading-relaxed max-w-4xl mx-auto">
                Oak's subsidiary, Johnson Capital Multifamily, provides FHA/HUD-insured loan programs. These financing solutions provide long-term, government-backed capital for multifamily, affordable housing, senior living, and healthcare properties.
              </p>
              <p className="text-lg text-deep-petrol leading-relaxed max-w-4xl mx-auto mt-4">
                With a deep understanding of HUD programs and a commitment to execution certainty, Oak offers tailored solutions that align with mission-driven real estate strategies.
              </p>
            </div>

            {/* Multifamily & Affordable Housing Programs */}
            <div className="mb-16">
              <h4 className="text-2xl font-medium text-obsidian mb-8 text-center">
                Multifamily & Affordable Housing Programs
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 p-6 bg-cream/80 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                  <h5 className="text-lg font-medium text-accent-brown">Construction/Substantial Rehabilitation of Multifamily Properties</h5>
                  <p className="text-deep-petrol">HUD 221(d)(4) & 220</p>
                </div>
                
                <div className="space-y-3 p-6 bg-cream/80 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                  <h5 className="text-lg font-medium text-accent-brown">Acquisition or Refinance of Multifamily Properties</h5>
                  <p className="text-deep-petrol">HUD 223(f)</p>
                </div>
                
                <div className="space-y-3 p-6 bg-cream/80 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                  <h5 className="text-lg font-medium text-accent-brown">Streamlined Refinance of Existing HUD-Financed Properties</h5>
                  <p className="text-deep-petrol">HUD 223(a)(7)</p>
                </div>
                
                <div className="space-y-3 p-6 bg-cream/80 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                  <h5 className="text-lg font-medium text-accent-brown">Supplemental Loans for Capital Improvement</h5>
                  <p className="text-deep-petrol">HUD 241(a)</p>
                </div>
              </div>
            </div>

            {/* Senior Housing & Healthcare Programs */}
            <div className="mb-16">
              <h4 className="text-2xl font-medium text-obsidian mb-8 text-center">
                Senior Housing & Healthcare Programs
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 p-6 bg-cream/80 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                  <h5 className="text-lg font-medium text-accent-brown">Construction/Substantial Rehabilitation of Senior Housing & Healthcare</h5>
                  <p className="text-deep-petrol">HUD 232/221(d)(4)</p>
                </div>
                
                <div className="space-y-3 p-6 bg-cream/80 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                  <h5 className="text-lg font-medium text-accent-brown">Acquisition or Refinance of Senior Housing & Healthcare</h5>
                  <p className="text-deep-petrol">HUD 232/223(f)</p>
                </div>
                
                <div className="space-y-3 p-6 bg-cream/80 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                  <h5 className="text-lg font-medium text-accent-brown">Streamlined Refinance of Existing HUD-Financed Senior Assets</h5>
                  <p className="text-deep-petrol">HUD 232/223(a)(7)</p>
                </div>
                
                <div className="space-y-3 p-6 bg-cream/80 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                  <h5 className="text-lg font-medium text-accent-brown">Supplemental Mortgage Insurance for Capital Improvements</h5>
                  <p className="text-deep-petrol">HUD 241(a)</p>
                </div>
              </div>
            </div>

            {/* Available Properties */}
            <div className="text-center mb-12">
              <p className="text-lg text-deep-petrol leading-relaxed">
                Available through Oak's FHA/HUD platform, these loans provide long-term, government-backed financing for:
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="p-6 bg-cream/60 rounded-lg border border-garnet-edge/20">
                  <h5 className="text-lg font-medium text-garnet-edge">Multifamily housing</h5>
                </div>
                <div className="p-6 bg-cream/60 rounded-lg border border-garnet-edge/20">
                  <h5 className="text-lg font-medium text-garnet-edge">Affordable housing</h5>
                </div>
                <div className="p-6 bg-cream/60 rounded-lg border border-garnet-edge/20">
                  <h5 className="text-lg font-medium text-garnet-edge">Senior living and healthcare</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bridge-to-FHA Transition */}
      <div className="py-20 bg-cream">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-obsidian mb-12">
              Bridge-to-FHA Transition
            </h2>
            <p className="text-lg text-deep-petrol leading-relaxed mb-12">
              Our integrated platform ensures smooth execution from initial bridge loan to FHA takeout, offering:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4 p-6 bg-gradient-to-br from-accent-brown/10 to-garnet-edge/10 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                <h3 className="text-xl font-medium text-accent-brown">Faster access to capital</h3>
              </div>
              
              <div className="space-y-4 p-6 bg-gradient-to-br from-accent-brown/10 to-garnet-edge/10 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                <h3 className="text-xl font-medium text-accent-brown">Minimized downtime</h3>
              </div>
              
              <div className="space-y-4 p-6 bg-gradient-to-br from-accent-brown/10 to-garnet-edge/10 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                <h3 className="text-xl font-medium text-accent-brown">Full lifecycle financing execution with a predefined exit</h3>
              </div>
              
              <div className="space-y-4 p-6 bg-gradient-to-br from-accent-brown/10 to-garnet-edge/10 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                <h3 className="text-xl font-medium text-accent-brown">Alignment of borrower and lender interests</h3>
              </div>
            </div>
            
            <div className="mt-12">
              <Button 
                size="lg"
                className="bg-accent-brown hover:bg-accent-brown/90 text-cream px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
              >
                Learn More About Our Lending Programs
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