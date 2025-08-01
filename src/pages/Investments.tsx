import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, DollarSign, Award, BarChart3 } from "lucide-react";

const Investments = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Investments" }
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
                    Investment Platform
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-obsidian mb-6 leading-tight">
                  A Platform Built for Performance
                </h1>
                <p className="text-xl text-accent-brown font-medium mb-6">
                  Direct lending. Disciplined structure. Durable results.
                </p>
                <p className="text-lg text-obsidian/80 leading-relaxed">
                  Oak is a vertically integrated Non-Bank Financial Institution focused on senior position commercial real estate lending in primary and secondary markets. Acting as both lender and sponsor, we offer institutional-quality investment opportunities with capital preservation, predictable income, and investment transparency.
                </p>
              </div>
              
              {/* Image with Overlay Cards */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/532a5a8d-e9d8-4e31-add3-a9ac474630da.png"
                  alt="Investment platform illustration"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                
                {/* Glassmorphic Overlay Cards */}
                <div className="absolute inset-0 flex flex-col justify-center space-y-4 p-6">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-4 shadow-lg hover:bg-white/30 transition-all duration-300">
                    <h3 className="text-lg font-bold text-white text-center drop-shadow-lg">RIA & Family Offices</h3>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-4 shadow-lg hover:bg-white/30 transition-all duration-300">
                    <h3 className="text-lg font-bold text-white text-center drop-shadow-lg">Foundations and Endowments</h3>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-4 shadow-lg hover:bg-white/30 transition-all duration-300">
                    <h3 className="text-lg font-bold text-white text-center drop-shadow-lg">Institutional Investors & Middle-Market Allocators</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Rest of content with dark background */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">

        {/* Bento Box Section */}
        <section className="py-20 bg-silver-mist/5 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              
              {/* True Bento Box Grid */}
              <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[600px]">
                {/* Asset-backed Collateral - Large */}
                <div className="col-span-2 row-span-2 p-8 bg-gradient-to-br from-silver-mist/10 to-silver-mist/20 backdrop-blur-sm rounded-xl border border-garnet-edge/30 hover:border-garnet-edge/50 transition-all duration-300 group">
                  <div className="flex items-start space-x-4 mb-4">
                    <Shield className="h-8 w-8 text-garnet-edge group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h3 className="text-2xl font-bold text-silver-mist mb-3">Asset-backed Collateral</h3>
                      <p className="text-silver-mist/80 leading-relaxed text-lg">
                        Asset-backed collateral secured with a mortgage or first deed trust, providing tangible security for your investment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Predictable Income - Medium */}
                <div className="col-span-2 row-span-1 p-6 bg-gradient-to-br from-silver-mist/10 to-silver-mist/20 backdrop-blur-sm rounded-xl border border-garnet-edge/30 hover:border-garnet-edge/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <DollarSign className="h-6 w-6 text-garnet-edge group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h3 className="text-xl font-bold text-silver-mist mb-2">Predictable Income Streams</h3>
                      <p className="text-silver-mist/80 leading-relaxed">Contract-based income streams designed for consistency.</p>
                    </div>
                  </div>
                </div>

                {/* Downside Protection - Medium */}
                <div className="col-span-1 row-span-1 p-4 bg-gradient-to-br from-silver-mist/10 to-silver-mist/20 backdrop-blur-sm rounded-xl border border-garnet-edge/30 hover:border-garnet-edge/50 transition-all duration-300 group">
                  <div className="text-center">
                    <TrendingUp className="h-6 w-6 text-garnet-edge mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold text-silver-mist mb-2">Downside Protection</h3>
                    <p className="text-silver-mist/80 text-sm leading-relaxed">Senior position and low LTV ratios.</p>
                  </div>
                </div>

                {/* Institutional Discipline - Medium */}
                <div className="col-span-1 row-span-1 p-4 bg-gradient-to-br from-silver-mist/10 to-silver-mist/20 backdrop-blur-sm rounded-xl border border-garnet-edge/30 hover:border-garnet-edge/50 transition-all duration-300 group">
                  <div className="text-center">
                    <Award className="h-6 w-6 text-garnet-edge mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold text-silver-mist mb-2">Institutional Discipline</h3>
                    <p className="text-silver-mist/80 text-sm leading-relaxed">Rigorous underwriting standards.</p>
                  </div>
                </div>

                {/* Market Cycle Resilience - Large */}
                <div className="col-span-2 row-span-1 p-6 bg-gradient-to-br from-silver-mist/10 to-silver-mist/20 backdrop-blur-sm rounded-xl border border-garnet-edge/30 hover:border-garnet-edge/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <BarChart3 className="h-6 w-6 text-garnet-edge group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h3 className="text-xl font-bold text-silver-mist mb-2">Market Cycle Resilience</h3>
                      <p className="text-silver-mist/80 leading-relaxed">Investments engineered to weather market cycles through disciplined structuring.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Real Estate Credit Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-6">
                  Why Real Estate Credit
                </h2>
                <p className="text-xl text-accent-brown font-medium">
                  Income strategies rooted in structure—not speculation.
                </p>
                <p className="text-lg text-silver-mist/80 leading-relaxed max-w-4xl mx-auto mt-6">
                  Private real estate credit offers unique benefits over corporate credit and equity strategies:
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-4 p-6 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                  <h3 className="text-lg font-medium text-silver-mist">Collateral Security</h3>
                  <p className="text-silver-mist/80 leading-relaxed">
                    Loans backed by income-producing real estate
                  </p>
                </div>
                
                <div className="space-y-4 p-6 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                  <h3 className="text-lg font-medium text-silver-mist">Cash Flow Predictability</h3>
                  <p className="text-silver-mist/80 leading-relaxed">
                    Structured payments and interest income
                  </p>
                </div>
                
                <div className="space-y-4 p-6 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                  <h3 className="text-lg font-medium text-silver-mist">Low Volatility</h3>
                  <p className="text-silver-mist/80 leading-relaxed">
                    Less correlated to public market swings
                  </p>
                </div>
                
                <div className="space-y-4 p-6 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                  <h3 className="text-lg font-medium text-silver-mist">Risk Efficiency</h3>
                  <p className="text-silver-mist/80 leading-relaxed">
                    Strong collateralization and underwriting discipline
                  </p>
                </div>
                
                <div className="space-y-4 p-6 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                  <h3 className="text-lg font-medium text-silver-mist">Inflation Resilience</h3>
                  <p className="text-silver-mist/80 leading-relaxed">
                    Real estate's natural hedge against inflation
                  </p>
                </div>
                
                <div className="space-y-4 p-6 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                  <h3 className="text-lg font-medium text-silver-mist">Asset Appreciation Potential</h3>
                  <p className="text-silver-mist/80 leading-relaxed">
                    Exposure to value growth alongside income
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Focus Section */}
        <section className="py-20 bg-silver-mist/5 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-12">
                Oak's Investment Focus
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-silver-mist/10 backdrop-blur-sm rounded-lg border border-accent-brown/30">
                  <h3 className="text-xl font-medium text-accent-brown mb-3">First-lien, senior-position loans</h3>
                </div>
                
                <div className="p-6 bg-silver-mist/10 backdrop-blur-sm rounded-lg border border-accent-brown/30">
                  <h3 className="text-xl font-medium text-accent-brown mb-3">Short-duration debt strategies</h3>
                </div>
                
                <div className="p-6 bg-silver-mist/10 backdrop-blur-sm rounded-lg border border-accent-brown/30">
                  <h3 className="text-xl font-medium text-accent-brown mb-3">Small-balance and middle-market commercial real estate</h3>
                </div>
                
                <div className="p-6 bg-silver-mist/10 backdrop-blur-sm rounded-lg border border-accent-brown/30">
                  <h3 className="text-xl font-medium text-accent-brown mb-3">Highly structured, risk-conscious transactions</h3>
                </div>
                
                <div className="p-6 bg-silver-mist/10 backdrop-blur-sm rounded-lg border border-accent-brown/30">
                  <h3 className="text-xl font-medium text-accent-brown mb-3">Bridge loans, HUD-insured debt, and hybrid structures</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aligned Offerings Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-6">
                  Aligned Offerings for Institutional Objectives
                </h2>
                <p className="text-lg text-silver-mist/80 leading-relaxed max-w-4xl mx-auto">
                  Each Oak investment is built to align with real-world investor priorities: capital preservation, consistent yield, and liquidity consideration. Our offerings include:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="space-y-4 p-8 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                  <h3 className="text-xl font-medium text-silver-mist">Diversified Credit Funds</h3>
                  <p className="text-silver-mist/80 leading-relaxed">
                    Targeting CRE debt across multiple markets and property types
                  </p>
                </div>
                
                <div className="space-y-4 p-8 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                  <h3 className="text-xl font-medium text-silver-mist">Income-Generating Structured Credit</h3>
                  <p className="text-silver-mist/80 leading-relaxed">
                    Investments designed for consistent cash flow generation
                  </p>
                </div>
                
                <div className="space-y-4 p-8 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                  <h3 className="text-xl font-medium text-silver-mist">Custom Investment Vehicles</h3>
                  <p className="text-silver-mist/80 leading-relaxed">
                    Tailored to specific allocator goals and requirements
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg"
                  className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
                >
                  Explore Investment Opportunities
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-silver-mist/40 text-silver-mist hover:bg-silver-mist hover:text-obsidian hover:border-garnet-edge px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm backdrop-blur-sm"
                >
                  Request Investment Materials
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

export default Investments;