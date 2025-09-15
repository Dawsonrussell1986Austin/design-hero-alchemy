import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";

const BridgeLoans = () => {
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
          { label: "Bridge Loans" }
        ]}
      />

      {/* Cream background for content */}
      <div className="bg-silver-mist">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Text Content */}
              <div>
                {/* Program Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-garnet-edge/15 text-garnet-edge border border-garnet-edge/30 shadow-sm">
                    Bridge Loan Programs
                  </span>
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-6 leading-tight">
                  Short-Term Commercial Real Estate Financing
                </h1>
                <p className="text-lg lg:text-xl font-body font-medium text-accent-brown mb-6">
                  Flexible bridge loans designed for acquisition, renovation, and stabilization strategies.
                </p>
                <p className="text-lg font-body text-obsidian/80 leading-relaxed mb-8">
                  Our bridge loan programs provide short-term financing solutions tailored to your investment strategy. From stabilized properties to complex value-add opportunities, we offer competitive terms and efficient execution.
                </p>

                {/* Key Features */}
                <div className="bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-obsidian mb-4 pb-2 border-b border-obsidian/20">
                    Why Choose Oak Bridge Loans
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Fast approval and closing timelines</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Competitive rates and flexible terms</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Experienced underwriting team</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Coordination with JCM for FHA takeout options</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/a2b3d13e-2fcb-4199-aa99-a8a09cc71442.png"
                  alt="Bridge loans for commercial real estate"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Bridge Loan Programs Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Core Bridge */}
              <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-xl p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src="/lovable-uploads/914ef162-2add-4296-9a39-2d81ce9fabfb.png"
                      alt="Core Bridge financing"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-medium text-obsidian group-hover:text-accent-brown transition-colors duration-300 mb-2">
                      Core Bridge
                    </h3>
                    <p className="text-sm font-medium text-accent-brown uppercase tracking-wider">
                      Stabilized Properties
                    </p>
                  </div>
                </div>
                
                <p className="text-obsidian/80 leading-relaxed mb-6">
                  Loans for stabilized properties currently at or above breakdown cash flow. Ideal for acquisitions of performing assets or light capital improvements.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-obsidian/70">Loan Amount:</span>
                    <span className="text-sm font-medium text-obsidian">$2M - $50M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-obsidian/70">LTV:</span>
                    <span className="text-sm font-medium text-obsidian">Up to 80%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-obsidian/70">Term:</span>
                    <span className="text-sm font-medium text-obsidian">12-36 months</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => window.location.href = "/lending/bridge/core-bridge"}
                  className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-3 font-medium"
                >
                  View Terms & Details
                </Button>
              </div>

              {/* Core-Plus Bridge */}
              <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-xl p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src="/lovable-uploads/bb8b02f0-9440-4394-a855-8d5e2ebf4100.png"
                      alt="Core-Plus Bridge financing"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-medium text-obsidian group-hover:text-accent-brown transition-colors duration-300 mb-2">
                      Core-Plus Bridge
                    </h3>
                    <p className="text-sm font-medium text-accent-brown uppercase tracking-wider">
                      Light Value-Add
                    </p>
                  </div>
                </div>
                
                <p className="text-obsidian/80 leading-relaxed mb-6">
                  Loans for properties currently below breakdown cash flow with light renovation or lease-up potential. Perfect for properties needing modest improvements.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-obsidian/70">Loan Amount:</span>
                    <span className="text-sm font-medium text-obsidian">$2M - $50M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-obsidian/70">LTV:</span>
                    <span className="text-sm font-medium text-obsidian">Up to 75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-obsidian/70">Term:</span>
                    <span className="text-sm font-medium text-obsidian">24-36 months</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => window.location.href = "/lending/bridge/core-plus-bridge"}
                  className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-3 font-medium"
                >
                  View Terms & Details
                </Button>
              </div>

              {/* Opportunistic Bridge */}
              <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-xl p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src="/lovable-uploads/6007eb22-bc11-4f64-97d4-5a5d82ce5650.png"
                      alt="Opportunistic Bridge financing"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-medium text-obsidian group-hover:text-accent-brown transition-colors duration-300 mb-2">
                      Opportunistic Bridge
                    </h3>
                    <p className="text-sm font-medium text-accent-brown uppercase tracking-wider">
                      Value-Add Strategies
                    </p>
                  </div>
                </div>
                
                <p className="text-obsidian/80 leading-relaxed mb-6">
                  Higher-leverage loans for value-add strategies and capital improvements. Designed for experienced sponsors with proven renovation and repositioning expertise.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-obsidian/70">Loan Amount:</span>
                    <span className="text-sm font-medium text-obsidian">$2M - $50M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-obsidian/70">LTV:</span>
                    <span className="text-sm font-medium text-obsidian">Up to 85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-obsidian/70">Term:</span>
                    <span className="text-sm font-medium text-obsidian">24-36 months</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => window.location.href = "/lending/bridge/opportunistic-bridge"}
                  className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-3 font-medium"
                >
                  View Terms & Details
                </Button>
              </div>

              {/* Participating Bridge */}
              <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-xl p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src="/lovable-uploads/1e3bbbae-9b54-429f-9eea-10bb9a1ee2be.png"
                      alt="Participating Bridge financing"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-medium text-obsidian group-hover:text-accent-brown transition-colors duration-300 mb-2">
                      Participating Bridge
                    </h3>
                    <p className="text-sm font-medium text-accent-brown uppercase tracking-wider">
                      Shared Appreciation
                    </p>
                  </div>
                </div>
                
                <p className="text-obsidian/80 leading-relaxed mb-6">
                  High leverage, highly structured loans for sponsors seeking adaptive re-use capital and shared appreciation. Features equity participation and performance incentives.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-obsidian/70">Loan Amount:</span>
                    <span className="text-sm font-medium text-obsidian">$2M - $30M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-obsidian/70">LTV:</span>
                    <span className="text-sm font-medium text-obsidian">Up to 90%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-obsidian/70">Term:</span>
                    <span className="text-sm font-medium text-obsidian">24-48 months</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => window.location.href = "/lending/bridge/participating-bridge"}
                  className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-3 font-medium"
                >
                  View Terms & Details
                </Button>
              </div>

            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-display font-medium text-obsidian mb-4">
                Ready to Discuss Your Bridge Loan Needs?
              </h3>
              <p className="text-lg text-obsidian/80 leading-relaxed mb-6 max-w-3xl mx-auto">
                Our experienced lending team can help you determine the right bridge loan program for your investment strategy and provide competitive terms with efficient execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-accent-brown hover:bg-accent-brown/90 text-white px-8 py-3 font-medium"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Lending Team
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-accent-brown text-accent-brown hover:bg-accent-brown hover:text-white px-8 py-3 font-medium"
                  onClick={() => window.location.href = '/contact'}
                >
                  Request Rate Quote
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

export default BridgeLoans;