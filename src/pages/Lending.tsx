import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Lending = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Lending" },
          { label: "Overview" }
        ]}
        quickLinks={[
          { label: "Overview", href: "/lending" },
          { label: "Core Bridge", href: "/lending/core-bridge" },
          { label: "Core-Plus Bridge", href: "/lending/core-plus-bridge" },
          { label: "Opportunistic Bridge", href: "/lending/opportunistic-bridge" },
          { label: "Participating Bridge", href: "/lending/participating-bridge" }
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
                    Lending Overview
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-obsidian mb-6 leading-tight">
                  Structured Capital Solutions for Commercial Real Estate
                </h1>
                <p className="text-lg text-obsidian/80 leading-relaxed mb-6">
                  Oak offers structured capital solutions for commercial real estate borrowers nationwide. Our national lending platform combines efficiency and innovation with institutional-grade standards and a comprehensive underwriting discipline.
                </p>
                <p className="text-lg text-obsidian/80 leading-relaxed">
                  We provide both short-term private bridge loans and long-term, government-backed FHA/HUD-insured mortgages—individually or in a seamless Bridge-to-FHA structure.
                </p>
              </div>
              
              {/* Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/532a5a8d-e9d8-4e31-add3-a9ac474630da.png"
                  alt="Bridge over mountains at sunset"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Rest of content with dark background */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">

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

      {/* FHA/HUD Loan Programs - Condensed Section */}
      <div className="py-16 bg-silver-mist/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Content */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-silver-mist mb-4">
                  FHA/HUD Loan Programs
                </h2>
                <h3 className="text-xl text-accent-brown font-medium mb-6">
                  FHA/HUD-Insured Loan Programs
                </h3>
                <p className="text-lg text-silver-mist/80 leading-relaxed mb-8">
                  Long-Term, Government-Backed Financing for Essential Real Estate Assets
                </p>
                <p className="text-silver-mist/70 leading-relaxed mb-8">
                  Oak's subsidiary, Johnson Capital Multifamily, provides FHA/HUD-insured loan programs. These financing solutions provide long-term, government-backed capital for multifamily, affordable housing, senior living, and healthcare properties.
                </p>
                <p className="text-silver-mist/70 leading-relaxed mb-10">
                  With a deep understanding of HUD programs and a commitment to execution certainty, Oak offers tailored solutions that align with mission-driven real estate strategies.
                </p>

                <div className="space-y-8">
                  {/* Multifamily & Affordable Housing Programs */}
                  <div>
                    <h4 className="text-xl font-semibold text-silver-mist mb-4">
                      Multifamily & Affordable Housing Programs
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent-brown rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-silver-mist font-medium">Construction/Substantial Rehabilitation of Multifamily Properties:</span>
                          <span className="text-silver-mist/70"> HUD 221(d)(4) & 220</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent-brown rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-silver-mist font-medium">Acquisition or Refinance of Multifamily Properties:</span>
                          <span className="text-silver-mist/70"> HUD 223(f)</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent-brown rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-silver-mist font-medium">Streamlined Refinance of Existing HUD-Financed Properties:</span>
                          <span className="text-silver-mist/70"> HUD 223(a)(7)</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent-brown rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-silver-mist font-medium">Supplemental Loans for Capital Improvement:</span>
                          <span className="text-silver-mist/70"> HUD 241(a)</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Senior Housing & Healthcare Programs */}
                  <div>
                    <h4 className="text-xl font-semibold text-silver-mist mb-4">
                      Senior Housing & Healthcare Programs
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent-brown rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-silver-mist font-medium">Construction/Substantial Rehabilitation of Senior Housing & Healthcare:</span>
                          <span className="text-silver-mist/70"> HUD 232/221(d)(4)</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent-brown rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-silver-mist font-medium">Acquisition or Refinance of Senior Housing & Healthcare:</span>
                          <span className="text-silver-mist/70"> HUD 232/223(f)</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent-brown rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-silver-mist font-medium">Streamlined Refinance of Existing HUD-Financed Senior Assets:</span>
                          <span className="text-silver-mist/70"> HUD 232/223(a)(7)</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent-brown rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-silver-mist font-medium">Supplemental Mortgage Insurance for Capital Improvements:</span>
                          <span className="text-silver-mist/70"> HUD 241(a)</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-silver-mist/20">
                    <p className="text-silver-mist/80 mb-4">
                      Available through Oak's FHA/HUD platform, these loans provide long-term, government-backed financing for:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent-brown rounded-full flex-shrink-0"></div>
                        <span className="text-silver-mist">Multifamily housing</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent-brown rounded-full flex-shrink-0"></div>
                        <span className="text-silver-mist">Affordable housing</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent-brown rounded-full flex-shrink-0"></div>
                        <span className="text-silver-mist">Senior living and healthcare</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/0d0e2b87-2fc4-4799-8cde-2eb9dacccd41.png"
                  alt="FHA/HUD financing programs"
                  className="w-full h-full object-cover rounded-lg shadow-xl min-h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bridge-to-FHA Transition - Condensed */}
      <div className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-silver-mist mb-6">
              Bridge-to-FHA Transition
            </h2>
            <p className="text-lg text-silver-mist/80 leading-relaxed mb-8">
              Our integrated platform ensures smooth execution from initial bridge loan to FHA takeout, offering:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
                <h3 className="text-lg font-medium text-silver-mist">Faster access to capital</h3>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
                <h3 className="text-lg font-medium text-silver-mist">Minimized downtime</h3>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
                <h3 className="text-lg font-medium text-silver-mist">Full lifecycle financing execution</h3>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
                <h3 className="text-lg font-medium text-silver-mist">Aligned borrower and lender interests</h3>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-accent-brown hover:bg-accent-brown/90 text-white px-12 py-4 text-lg font-medium"
              >
                Learn More About Our Lending Programs
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-silver-mist/40 text-silver-mist hover:bg-silver-mist hover:text-obsidian px-12 py-4 text-lg font-medium bg-transparent"
              >
                Contact Our Lending Team
              </Button>
            </div>
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