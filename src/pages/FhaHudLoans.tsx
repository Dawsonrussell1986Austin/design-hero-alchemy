import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { FinancialServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";

const FhaHudLoans = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="FHA/HUD Loan Programs"
        description="FHA/HUD insured financing from Johnson Capital Multifamily. Long-term government-backed loans for multifamily, affordable housing, senior living, and healthcare properties."
        canonicalUrl="/lending/fha-hud"
      />
      <FinancialServiceSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://oakrealestatepartners.com/' },
          { name: 'Lending', url: 'https://oakrealestatepartners.com/lending' },
          { name: 'FHA/HUD Loans', url: 'https://oakrealestatepartners.com/lending/fha-hud' }
        ]}
      />
      {/* Navigation */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Lending", href: "/lending" },
          { label: "FHA/HUD Loan Programs" }
        ]}
      />

      {/* Cream background for content */}
      <div className="bg-silver-mist">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-16">
              {/* Text Content */}
              <div>
                {/* Program Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-garnet-edge/15 text-garnet-edge border border-garnet-edge/30 shadow-sm">
                    FHA/HUD Loan Programs
                  </span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-obsidian mb-4 sm:mb-6 leading-tight">
                  Long-Term Government-Backed Financing
                </h1>
                <p className="text-lg lg:text-xl font-body font-medium text-accent-brown mb-6">
                  FHA/HUD insured loan programs for multifamily, affordable housing, senior living, and healthcare properties.
                </p>
                <p className="text-lg font-body text-obsidian/80 leading-relaxed mb-8">
                  Johnson Capital Multifamily (JCM) provides comprehensive FHA/HUD insured financing solutions offering long term, government-backed capital with competitive rates and favorable terms.
                </p>

                {/* Key Features */}
                <div className="bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-obsidian mb-4 pb-2 border-b border-obsidian/20">
                    FHA/HUD Program Advantages
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Long-term fixed-rate financing up to 40 years</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Government insurance reduces lending risk</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Non-recourse financing available</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Streamlined refinancing options</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/33fb7950-e7d9-426c-b448-ca4b55752614.png"
                  alt="FHA/HUD financing programs"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Section: Multifamily & Affordable Housing Programs */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-display font-medium text-obsidian mb-2">
                Multifamily & Affordable Housing Programs
              </h2>
              <p className="text-lg text-obsidian/70 mb-8">
                Comprehensive financing solutions for multifamily and affordable housing developments
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                
                {/* HUD 221(D)4 & 220 */}
                <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-xl p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 flex-shrink-0">
                       <img 
                         src="/lovable-uploads/d4969f74-dcee-4460-ad73-a02e76a666b7.png"
                         alt="Multifamily construction"
                         className="w-full h-full object-cover rounded-lg shadow-md"
                       />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-medium text-obsidian group-hover:text-accent-brown transition-colors duration-300 mb-1">
                        HUD 221(D)(4) & 220
                      </h3>
                      <p className="text-sm font-medium text-accent-brown tracking-wider">
                        New Construction/Substantial Rehabilitation
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-obsidian/80 leading-relaxed mb-6">
                    Construction or substantial rehabilitation financing for multifamily properties. Ideal for new developments and major renovations.
                  </p>
                  
                  <Button 
                    onClick={() => window.location.href = "/lending/fha-hud/hud-221"}
                    className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-3 font-medium"
                  >
                    View Terms & Details
                  </Button>
                </div>

                {/* HUD 223(F) */}
                <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-xl p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 flex-shrink-0">
                       <img 
                         src="/lovable-uploads/fc8f59e9-2126-48bf-8315-153205395564.png"
                         alt="Multifamily acquisition"
                         className="w-full h-full object-cover rounded-lg shadow-md"
                       />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-medium text-obsidian group-hover:text-accent-brown transition-colors duration-300 mb-1">
                        HUD 223(F)
                      </h3>
                      <p className="text-sm font-medium text-accent-brown tracking-wider">
                        Acquisition/Refinance
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-obsidian/80 leading-relaxed mb-6">
                    Acquisition or refinance of existing multifamily properties. Perfect for stabilized assets with established cash flow.
                  </p>
                  
                  <Button 
                    onClick={() => window.location.href = "/lending/fha-hud/hud-232-223f"}
                    className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-3 font-medium"
                  >
                    View Terms & Details
                  </Button>
                </div>

                {/* HUD 223(A)7 */}
                <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-xl p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 flex-shrink-0">
                       <img 
                         src="/lovable-uploads/55aa3358-a2c6-4c6c-8c48-9e0d1cdca6a6.png"
                         alt="Streamlined refinance"
                         className="w-full h-full object-cover rounded-lg shadow-md"
                       />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-medium text-obsidian group-hover:text-accent-brown transition-colors duration-300 mb-1">
                        HUD 223(A)(7)
                      </h3>
                      <p className="text-sm font-medium text-accent-brown tracking-wider">
                        Streamlined Refinance
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-obsidian/80 leading-relaxed mb-6">
                    Streamlined refinance of existing HUD-financed multifamily properties. Expedited processing with reduced documentation requirements.
                  </p>
                  
                  <Button 
                    onClick={() => window.location.href = "/lending/fha-hud/hud-232-223a7"}
                    className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-3 font-medium"
                  >
                    View Terms & Details
                  </Button>
                </div>

                {/* HUD 241(A) */}
                <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-xl p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 flex-shrink-0">
                       <img 
                         src="/lovable-uploads/96eba6e1-209d-482d-b123-727083eb911b.png"
                         alt="Capital improvements"
                         className="w-full h-full object-cover rounded-lg shadow-md"
                       />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-medium text-obsidian group-hover:text-accent-brown transition-colors duration-300 mb-1">
                        HUD 241(A)
                      </h3>
                      <p className="text-sm font-medium text-accent-brown tracking-wider">
                        Supplemental Loans
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-obsidian/80 leading-relaxed mb-6">
                    Supplemental loans for capital improvements to FHA-insured multifamily properties. Finance renovations while maintaining existing loan.
                  </p>
                  
                  <Button 
                    onClick={() => window.location.href = "/lending/fha-hud/hud-241a"}
                    className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-3 font-medium"
                  >
                    View Terms & Details
                  </Button>
                </div>

              </div>
            </div>

            {/* Section: Senior Housing & Healthcare Programs */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-display font-medium text-obsidian mb-2">
                Senior Housing & Healthcare Programs
              </h2>
              <p className="text-lg text-obsidian/70 mb-8">
                Specialized financing for senior living facilities and healthcare properties
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                
                {/* 232/221(D)4 */}
                <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-xl p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 flex-shrink-0">
                       <img 
                         src="/lovable-uploads/7565248c-d249-4e32-a9ea-2a1d142000c5.png"
                         alt="Senior housing construction"
                         className="w-full h-full object-cover rounded-lg shadow-md"
                       />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-medium text-obsidian group-hover:text-accent-brown transition-colors duration-300 mb-1">
                        232/221(D)(4)
                      </h3>
                      <p className="text-sm font-medium text-accent-brown tracking-wider">
                        Senior Housing Construction
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-obsidian/80 leading-relaxed mb-6">
                    Construction or substantial rehabilitation of senior housing and healthcare facilities. Designed for assisted living, memory care, and skilled nursing facilities.
                  </p>
                  
                  <Button 
                    onClick={() => window.location.href = "/lending/fha-hud/hud-232-221"}
                    className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-3 font-medium"
                  >
                    View Terms & Details
                  </Button>
                </div>

                {/* 232/223(F) */}
                <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-xl p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 flex-shrink-0">
                       <img 
                         src="/lovable-uploads/fb5863d0-f4f3-4076-bfbb-e85094de2ac0.png"
                         alt="Senior housing acquisition"
                         className="w-full h-full object-cover rounded-lg shadow-md"
                       />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-medium text-obsidian group-hover:text-accent-brown transition-colors duration-300 mb-1">
                        232/223(F)
                      </h3>
                      <p className="text-sm font-medium text-accent-brown tracking-wider">
                        Senior Housing Acquisition
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-obsidian/80 leading-relaxed mb-6">
                    Acquisition or refinance of existing senior housing and healthcare facilities. Perfect for stabilized senior living properties.
                  </p>
                  
                  <Button 
                    onClick={() => window.location.href = "/lending/fha-hud/hud-232-223f"}
                    className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-3 font-medium"
                  >
                    View Terms & Details
                  </Button>
                </div>

                {/* 232/223(A)(7) */}
                <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-xl p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 flex-shrink-0">
                        <img 
                          src="/lovable-uploads/55aa3358-a2c6-4c6c-8c48-9e0d1cdca6a6.png"
                          alt="Senior housing refinance"
                          className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-medium text-obsidian group-hover:text-accent-brown transition-colors duration-300 mb-1">
                        232/223(A)(7)
                      </h3>
                      <p className="text-sm font-medium text-accent-brown tracking-wider">
                        Streamlined Senior Refinance
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-obsidian/80 leading-relaxed mb-6">
                    Streamlined refinance of existing HUD-financed senior housing and healthcare properties. Expedited processing for qualifying properties.
                  </p>
                  
                  <Button 
                    onClick={() => window.location.href = "/lending/fha-hud/hud-232-223a7"}
                    className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-3 font-medium"
                  >
                    View Terms & Details
                  </Button>
                </div>

                {/* 241(A) Senior */}
                <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-xl p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 flex-shrink-0">
                       <img 
                         src="/lovable-uploads/31e1b162-9145-4925-ab7c-9c706b33cbec.png"
                         alt="Senior housing improvements"
                         className="w-full h-full object-cover rounded-lg shadow-md"
                       />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-medium text-obsidian group-hover:text-accent-brown transition-colors duration-300 mb-1">
                        241(A) Senior
                      </h3>
                      <p className="text-sm font-medium text-accent-brown tracking-wider">
                        Senior Housing Supplemental
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-obsidian/80 leading-relaxed mb-6">
                    Supplemental mortgage insurance for HUD-insured senior housing and healthcare properties. Finance improvements while maintaining existing financing.
                  </p>
                  
                  <Button 
                    onClick={() => window.location.href = "/lending/fha-hud/hud-241a"}
                    className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-3 font-medium"
                  >
                    View Terms & Details
                  </Button>
                </div>

              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-display font-medium text-obsidian mb-4">
                Ready to Explore FHA/HUD Financing?
              </h3>
              <p className="text-lg text-obsidian/80 leading-relaxed mb-6 max-w-3xl mx-auto">
                Johnson Capital Multifamily specialists can help you navigate the application process and determine the best program for your multifamily, senior housing, or healthcare property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-accent-brown hover:bg-accent-brown/90 text-white px-8 py-3 font-medium"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Johnson Capital Multifamily
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-accent-brown text-accent-brown hover:bg-accent-brown hover:text-white px-8 py-3 font-medium"
                  onClick={() => window.location.href = '/contact'}
                >
                  Request Program Information
                </Button>
              </div>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default FhaHudLoans;