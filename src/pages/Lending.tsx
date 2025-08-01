import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
      
      {/* Bridge Loan Programs - Cream Background */}
      <div className="bg-silver-mist">
        <div className="py-6">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center space-x-6 p-8 bg-white/80 backdrop-blur-sm rounded-lg border border-obsidian/10 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group shadow-md">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-obsidian group-hover:text-accent-brown transition-colors duration-300 mb-2">Core Bridge</h3>
                    <p className="text-obsidian/60 leading-relaxed mb-4">
                      Loans for stabilizing properties, currently at or above breakdown cash flow. (≥1.00x DSCR)
                    </p>
                    <Button 
                      onClick={() => window.location.href = "/lending/core-bridge"}
                      className="bg-accent-brown hover:bg-accent-brown/90 text-white"
                    >
                      Learn more
                    </Button>
                  </div>
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src="/lovable-uploads/e3e45441-b983-4174-b86c-c9c473235e7b.png"
                      alt="Urban cityscape"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 p-8 bg-white/80 backdrop-blur-sm rounded-lg border border-obsidian/10 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group shadow-md">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-obsidian group-hover:text-accent-brown transition-colors duration-300 mb-2">Core-Plus Bridge</h3>
                    <p className="text-obsidian/60 leading-relaxed mb-4">
                      Loans for stabilizing properties, currently below breakdown cash flow.
                    </p>
                    <Button 
                      onClick={() => window.location.href = "/lending/core-plus-bridge"}
                      className="bg-accent-brown hover:bg-accent-brown/90 text-white"
                    >
                      Learn more
                    </Button>
                  </div>
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src="/lovable-uploads/874bf40b-1604-47fe-a6ec-dda4da8ddf2c.png"
                      alt="Construction development"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 p-8 bg-white/80 backdrop-blur-sm rounded-lg border border-obsidian/10 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group shadow-md">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-obsidian group-hover:text-accent-brown transition-colors duration-300 mb-2">Opportunistic Bridge</h3>
                    <p className="text-obsidian/60 leading-relaxed mb-4">
                      Higher-leverage loans for value-add strategies and capital improvements.
                    </p>
                    <Link to="/lending/opportunistic-bridge">
                      <Button className="bg-accent-brown hover:bg-accent-brown/90 text-white">
                        Learn more
                      </Button>
                    </Link>
                  </div>
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src="/lovable-uploads/9a879281-cdc6-4044-9e95-3b82d65786ec.png"
                      alt="Bridge to opportunity"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 p-8 bg-white/80 backdrop-blur-sm rounded-lg border border-obsidian/10 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group shadow-md">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-obsidian group-hover:text-accent-brown transition-colors duration-300 mb-2">Participating Bridge</h3>
                    <p className="text-obsidian/60 leading-relaxed mb-4">
                      High leverage, highly structured loans for sponsors seeking adaptive re-use capital and shared appreciation.
                    </p>
                    <Link to="/lending/participating-bridge">
                      <Button className="bg-accent-brown hover:bg-accent-brown/90 text-white">
                        Learn more
                      </Button>
                    </Link>
                  </div>
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src="/lovable-uploads/e97b4477-fafb-49f0-b011-b4eb2dcd6a0a.png"
                      alt="Climbing to success"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of content with dark background */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">

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

                <Accordion type="single" collapsible className="w-full space-y-4">
                  {/* Multifamily & Affordable Housing Programs */}
                  <AccordionItem value="multifamily" className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg px-6">
                    <AccordionTrigger className="text-xl font-semibold text-silver-mist hover:text-accent-brown py-4">
                      Multifamily & Affordable Housing Programs
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
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
                    </AccordionContent>
                  </AccordionItem>

                  {/* Senior Housing & Healthcare Programs */}
                  <AccordionItem value="senior" className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg px-6">
                    <AccordionTrigger className="text-xl font-semibold text-silver-mist hover:text-accent-brown py-4">
                      Senior Housing & Healthcare Programs
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
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
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Right Side - Image with Glassmorphic Overlay */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/0d0e2b87-2fc4-4799-8cde-2eb9dacccd41.png"
                  alt="FHA/HUD financing programs"
                  className="w-full h-full object-cover rounded-lg shadow-xl min-h-[500px]"
                />
                
                {/* Glassmorphic Card Overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl p-6 shadow-2xl">
                    <p className="text-white font-medium mb-4">
                      Available through Oak's FHA/HUD platform, these loans provide long-term, government-backed financing for:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent-brown rounded-full flex-shrink-0"></div>
                        <span className="text-white">Multifamily housing</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent-brown rounded-full flex-shrink-0"></div>
                        <span className="text-white">Affordable housing</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent-brown rounded-full flex-shrink-0"></div>
                        <span className="text-white">Senior living and healthcare</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bridge-to-FHA Transition - Cream Background */}
      <div className="bg-silver-mist">
        <div className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-obsidian mb-6">
                Bridge-to-FHA Transition
              </h2>
              <p className="text-lg text-obsidian/80 leading-relaxed mb-8">
                Our integrated platform ensures smooth execution from initial bridge loan to FHA takeout, offering:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-lg shadow-md">
                  <h3 className="text-lg font-medium text-obsidian">Faster access to capital</h3>
                </div>
                <div className="p-6 bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-lg shadow-md">
                  <h3 className="text-lg font-medium text-obsidian">Minimized downtime</h3>
                </div>
                <div className="p-6 bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-lg shadow-md">
                  <h3 className="text-lg font-medium text-obsidian">Full lifecycle financing execution</h3>
                </div>
                <div className="p-6 bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-lg shadow-md">
                  <h3 className="text-lg font-medium text-obsidian">Aligned borrower and lender interests</h3>
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
                  className="border-2 border-obsidian/40 text-obsidian hover:bg-obsidian hover:text-silver-mist px-12 py-4 text-lg font-medium bg-transparent"
                >
                  Contact Our Lending Team
                </Button>
              </div>
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