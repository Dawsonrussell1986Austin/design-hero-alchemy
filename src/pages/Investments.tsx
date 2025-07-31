import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimplePageHeader from "@/components/SimplePageHeader";
import { Button } from "@/components/ui/button";

const Investments = () => {
  return (
    <div className="min-h-screen">
      {/* Header with dark background */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
        <SimplePageHeader title="Investments" />
      </div>
      
      {/* Cream background for content */}
      <div className="bg-silver-mist">

      {/* Platform Section */}
      <section className="py-20 bg-silver-mist/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-6">
                A Platform Built for Performance
              </h2>
              <p className="text-xl text-accent-brown font-medium mb-8">
                Direct lending. Disciplined structure. Durable results.
              </p>
              <p className="text-lg text-silver-mist/80 leading-relaxed max-w-4xl mx-auto">
                Oak is a vertically integrated Non-Bank Financial Institution focused on senior position commercial real estate lending in primary and secondary markets. Acting as both lender and sponsor, we offer institutional-quality investment opportunities to:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                <h3 className="text-xl font-medium text-silver-mist mb-3">RIA & Family Offices</h3>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                <h3 className="text-xl font-medium text-silver-mist mb-3">Foundations and Endowments</h3>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                <h3 className="text-xl font-medium text-silver-mist mb-3">Institutional Investors & Middle-Market Allocators</h3>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-silver-mist/80 leading-relaxed">
                Our investment vehicles are structured to provide <span className="text-accent-brown font-medium">Capital Preservation</span>, <span className="text-accent-brown font-medium">Predictable Income</span>, and <span className="text-accent-brown font-medium">Investment Transparency</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-12 text-center">
              What You Get with Oak
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4 p-6 bg-silver-mist/5 backdrop-blur-sm rounded-lg border border-accent-brown/30">
                <h3 className="text-xl font-medium text-accent-brown">Asset-backed Collateral</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  Asset-backed collateral secured with a mortgage or first deed trust.
                </p>
              </div>
              
              <div className="space-y-4 p-6 bg-silver-mist/5 backdrop-blur-sm rounded-lg border border-accent-brown/30">
                <h3 className="text-xl font-medium text-accent-brown">Institutional Disciplined Investment Decisions</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  Rigorous underwriting and strategic asset selection processes.
                </p>
              </div>
              
              <div className="space-y-4 p-6 bg-silver-mist/5 backdrop-blur-sm rounded-lg border border-accent-brown/30">
                <h3 className="text-xl font-medium text-accent-brown">Predictable Income Streams</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  Contract-based income streams designed for consistency.
                </p>
              </div>
              
              <div className="space-y-4 p-6 bg-silver-mist/5 backdrop-blur-sm rounded-lg border border-accent-brown/30">
                <h3 className="text-xl font-medium text-accent-brown">Downside Investment Protections</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  Senior position and low loan-to-value ratios for enhanced protection.
                </p>
              </div>
              
              <div className="space-y-4 p-6 bg-silver-mist/5 backdrop-blur-sm rounded-lg border border-accent-brown/30 md:col-span-2 lg:col-span-2">
                <h3 className="text-xl font-medium text-accent-brown">Market Cycle Resilience</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  Investments engineered to weather market cycles through disciplined structuring and risk management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Real Estate Credit Section */}
      <section className="py-20 bg-silver-mist/5 backdrop-blur-sm">
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
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-12">
              Oak's Investment Focus
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-silver-mist/5 backdrop-blur-sm rounded-lg border border-accent-brown/30">
                <h3 className="text-xl font-medium text-accent-brown mb-3">First-lien, senior-position loans</h3>
              </div>
              
              <div className="p-6 bg-silver-mist/5 backdrop-blur-sm rounded-lg border border-accent-brown/30">
                <h3 className="text-xl font-medium text-accent-brown mb-3">Short-duration debt strategies</h3>
              </div>
              
              <div className="p-6 bg-silver-mist/5 backdrop-blur-sm rounded-lg border border-accent-brown/30">
                <h3 className="text-xl font-medium text-accent-brown mb-3">Small-balance and middle-market commercial real estate</h3>
              </div>
              
              <div className="p-6 bg-silver-mist/5 backdrop-blur-sm rounded-lg border border-accent-brown/30">
                <h3 className="text-xl font-medium text-accent-brown mb-3">Highly structured, risk-conscious transactions</h3>
              </div>
              
              <div className="p-6 bg-silver-mist/5 backdrop-blur-sm rounded-lg border border-accent-brown/30">
                <h3 className="text-xl font-medium text-accent-brown mb-3">Bridge loans, HUD-insured debt, and hybrid structures</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aligned Offerings Section */}
      <section className="py-20 bg-silver-mist/5 backdrop-blur-sm">
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