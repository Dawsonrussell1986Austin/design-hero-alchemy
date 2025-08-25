import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";

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
          { label: "Lending" }
        ]}
      />

      {/* Cream background for content */}
      <div className="bg-silver-mist">
        {/* Content Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Text Content */}
              <div>
                {/* Program Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-garnet-edge/25 text-garnet-edge border border-garnet-edge/50 shadow-sm">
                    Lending Overview
                  </span>
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-6 leading-tight">
                  Structured Capital Solutions for Commercial Real Estate
                </h1>
                <p className="text-lg lg:text-xl font-body font-medium text-accent-brown mb-6">
                  Comprehensive financing solutions for every stage of your commercial real estate investment.
                </p>
                <p className="text-lg font-body text-obsidian/80 leading-relaxed">
                  Oak offers both short-term private bridge loans and long term, government-backed FHA/HUD insured mortgages—individually or in a seamless Bridge-to-FHA structure. Our national lending platform combines efficiency and innovation with institutional-grade standards.
                </p>
              </div>
              
              {/* Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/8f3977c3-14bd-4844-aff8-68613b31611e.png"
                  alt="Bridge infrastructure over water with reflections"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Two Main Loan Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              
              {/* Bridge Loans Card */}
              <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-xl p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/40f7469a-b5db-4904-bb2a-2065ad063b00.png"
                    alt="Bridge loans for commercial real estate"
                    className="w-full h-48 object-cover rounded-lg shadow-md mb-6"
                  />
                  <h2 className="text-2xl lg:text-3xl font-display font-medium text-obsidian mb-4 group-hover:text-accent-brown transition-colors duration-300">
                    Bridge Loan Programs
                  </h2>
                  <p className="text-lg font-body font-medium text-accent-brown mb-4">
                    Short-term private financing for acquisition, renovation, and stabilization
                  </p>
                  <p className="text-obsidian/80 leading-relaxed mb-6">
                    Our bridge loan programs provide flexible, short-term financing solutions for commercial real estate investors. From stabilized properties to value-add opportunities, we offer tailored structures to meet your investment strategy.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full"></div>
                      <span className="text-sm text-obsidian/80">Core Bridge - Stabilized properties</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full"></div>
                      <span className="text-sm text-obsidian/80">Core-Plus Bridge - Light value-add opportunities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full"></div>
                      <span className="text-sm text-obsidian/80">Opportunistic Bridge - Higher leverage strategies</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full"></div>
                      <span className="text-sm text-obsidian/80">Participating Bridge - Shared appreciation structures</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => window.location.href = "/lending/bridge"}
                  className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-3 font-medium"
                >
                  Explore Bridge Loan Programs
                </Button>
              </div>

              {/* FHA/HUD Loans Card */}
              <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-xl p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/d97430dc-5df2-43a1-84ee-7bf9d697fe35.png"
                    alt="FHA/HUD financing programs"
                    className="w-full h-48 object-cover rounded-lg shadow-md mb-6"
                  />
                  <h2 className="text-2xl lg:text-3xl font-display font-medium text-obsidian mb-4 group-hover:text-accent-brown transition-colors duration-300">
                    FHA/HUD Loan Programs
                  </h2>
                  <p className="text-lg font-body font-medium text-accent-brown mb-4">
                    Long-term, government-backed financing for essential real estate assets
                  </p>
                  <p className="text-obsidian/80 leading-relaxed mb-6">
                    Through our subsidiary Johnson Capital Multifamily, we provide FHA/HUD insured loan programs offering long term, government-backed capital for multifamily, affordable housing, senior living, and healthcare properties.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full"></div>
                      <span className="text-sm text-obsidian/80">Multifamily & Affordable Housing Programs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full"></div>
                      <span className="text-sm text-obsidian/80">Senior Housing & Healthcare Programs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full"></div>
                      <span className="text-sm text-obsidian/80">Construction & Substantial Rehabilitation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full"></div>
                      <span className="text-sm text-obsidian/80">Acquisition & Refinance Programs</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => window.location.href = "/lending/fha-hud"}
                  className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-3 font-medium"
                >
                  Explore FHA/HUD Programs
                </Button>
              </div>

            </div>

            {/* Bridge-to-FHA Transition */}
            <div className="bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-display font-medium text-obsidian mb-4">
                Bridge-to-FHA Transition
              </h3>
              <p className="text-lg text-obsidian/80 leading-relaxed mb-6 max-w-4xl mx-auto">
                Our integrated platform ensures smooth execution from initial bridge loan to FHA takeout, offering borrowers a seamless path from acquisition through long-term financing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/lending/fha-hud">
                  <Button 
                    variant="outline"
                    className="border-2 border-accent-brown text-accent-brown hover:bg-accent-brown hover:text-white px-8 py-3 font-medium"
                  >
                    Learn More About Integration
                  </Button>
                </a>
              </div>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Lending;