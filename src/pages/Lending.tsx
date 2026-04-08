import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema } from "@/components/StructuredData";

const Lending = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Commercial Real Estate Lending"
        description="Oak Real Estate Partners offers bridge loans and HUD/FHA financing for commercial real estate. Senior secured loans backed by income-producing properties."
        canonicalUrl="/lending"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Lending', url: '/lending' }
      ]} />
      {/* Navigation */}
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
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
                
                <h1 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-6 leading-tight">
                  Structured Capital Solutions for Commercial Real Estate
                </h1>
                <p className="text-lg lg:text-xl font-body font-medium text-gold-accent mb-6">
                  Comprehensive financing solutions for every stage of your commercial real estate investment.
                </p>
                <p className="text-lg font-body text-abyss/80 leading-relaxed">
                  Oak offers short-term private bridge loans with seamless coordination to long-term government-backed financing through our subsidiary Johnson Capital Multifamily (JCM), which provides FHA/HUD insured mortgages. This integrated platform delivers comprehensive financing solutions for every stage of your commercial real estate investment.
                </p>
              </div>
              
              {/* Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/6b5ae029-afee-401f-a617-f33b5c24dd95.png"
                  alt="Bridge infrastructure over water with reflections"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Two Main Loan Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              
              {/* Bridge Loans Card */}
              <div className="bg-cream/80 backdrop-blur-sm border border-abyss/10 rounded-xl p-8 hover:bg-cream/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/e9d4be6f-f66b-4ec3-9cd1-bf0f44baf61f.png"
                    alt="Bridge loans for commercial real estate"
                    className="w-full h-48 object-cover rounded-lg shadow-md mb-6"
                  />
                  <h2 className="text-2xl lg:text-3xl font-display font-medium text-abyss mb-4 group-hover:text-gold-accent transition-colors duration-300">
                    Bridge Loan Programs
                  </h2>
                  <p className="text-lg font-body font-medium text-gold-accent mb-4">
                    Short-term private financing for acquisition, renovation, and stabilization
                  </p>
                  <p className="text-abyss/80 leading-relaxed mb-6">
                    Our bridge loan programs provide flexible, short-term financing solutions for commercial real estate investors. From stabilized properties to value-add opportunities, we offer tailored structures to meet your investment strategy.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full"></div>
                      <span className="text-sm text-abyss/80">Core Bridge - Stabilized properties</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full"></div>
                      <span className="text-sm text-abyss/80">Core-Plus Bridge - Light value-add opportunities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full"></div>
                      <span className="text-sm text-abyss/80">Opportunistic Bridge - Higher leverage strategies</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full"></div>
                      <span className="text-sm text-abyss/80">Participating Bridge - Shared appreciation structures</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => window.location.href = "/lending/bridge"}
                  className="w-full bg-gold-accent hover:bg-gold-accent/90 text-cream py-3 font-medium"
                >
                  Explore Bridge Loan Programs
                </Button>
              </div>

              {/* FHA/HUD Loans Card */}
              <div className="bg-cream/80 backdrop-blur-sm border border-abyss/10 rounded-xl p-8 hover:bg-cream/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/3eea10a2-658b-45bc-9a65-72f8dbf07c61.png"
                    alt="Government-backed FHA/HUD financing for commercial real estate"
                    className="w-full h-48 object-cover rounded-lg shadow-md mb-6"
                  />
                  <h2 className="text-2xl lg:text-3xl font-display font-medium text-abyss mb-4 group-hover:text-gold-accent transition-colors duration-300">
                    FHA/HUD Loan Programs
                  </h2>
                  <p className="text-lg font-body font-medium text-gold-accent mb-4">
                    Long-term, government-backed financing for essential real estate assets
                  </p>
                  <p className="text-abyss/80 leading-relaxed mb-6">
                    Johnson Capital Multifamily (JCM) provides FHA/HUD insured loan programs offering long term, government-backed capital for multifamily, affordable housing, senior living, and healthcare properties.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full"></div>
                      <span className="text-sm text-abyss/80">Multifamily & Affordable Housing Programs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full"></div>
                      <span className="text-sm text-abyss/80">Senior Housing & Healthcare Programs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full"></div>
                      <span className="text-sm text-abyss/80">Construction & Substantial Rehabilitation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full"></div>
                      <span className="text-sm text-abyss/80">Acquisition & Refinance Programs</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => window.location.href = "/lending/fha-hud"}
                  className="w-full bg-gold-accent hover:bg-gold-accent/90 text-cream py-3 font-medium"
                >
                  Explore FHA/HUD Programs
                </Button>
              </div>

            </div>

            <div className="bg-cream/60 backdrop-blur-sm border border-abyss/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-display font-medium text-abyss mb-4">
                Bridge-to-FHA Coordination
              </h3>
              <p className="text-lg text-abyss/80 leading-relaxed mb-6 max-w-4xl mx-auto">
                Through our subsidiary Johnson Capital Multifamily (JCM), we can coordinate seamless transitions from Oak bridge financing to FHA takeout loans, providing borrowers with an integrated financing solution from acquisition through long-term stabilization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/lending/fha-hud">
                  <Button 
                    variant="outline"
                    className="border-2 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-cream px-8 py-3 font-medium"
                  >
                    Learn More About JCM FHA Programs
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