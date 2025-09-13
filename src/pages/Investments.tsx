import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, DollarSign, Award, BarChart3, Lock, Activity, Target, Building, CreditCard, Settings } from "lucide-react";

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
          { label: "Why Oak" }
        ]}
      />
      
      {/* Cream background for content */}
      <div className="bg-silver-mist">
        {/* Content Section with Image */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              {/* Text Content */}
              <div>
                {/* Program Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-garnet-edge/15 text-garnet-edge border border-garnet-edge/30 shadow-sm">
                    Why Oak
                  </span>
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-6 leading-tight">
                  A Platform Built for Performance
                </h1>
                <p className="text-lg lg:text-xl font-body font-normal text-obsidian/80 leading-relaxed mb-6">
                  Oak was founded over a decade ago with a simple mission: to unlock local community value through real estate enhancement and redevelopment. We design lending products that transform potential into progress—supporting housing, and driving efficiencies across retail, industrial, and suburban office sectors. This isn't theory—it's practice. Every day, we partner with developers and community stakeholders who depend on our capital to deliver measurable results for local economies.
                </p>
                <p className="text-lg lg:text-xl font-body font-normal text-obsidian/80 leading-relaxed mb-6">
                  Where traditional banks are slow and inefficient, Oak is built for speed and clarity. We provide timely, practical solutions that empower real estate sponsors to execute their business plans with confidence. Our platform is designed for fast, efficient, and scalable commercial real estate transactions.
                </p>
                <p className="text-lg lg:text-xl font-body font-normal text-obsidian/80 leading-relaxed mb-8">
                  From day one, Oak has committed to an institutional framework rooted in best practices. We've built a company on ethics, accountability, transparency, and durability—principles that ensure we're not just financing projects, but fueling long-term community growth.
                </p>
                
                {/* Oak's Investment Focus - Under text */}
                <div className="bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-obsidian mb-4 pb-2 border-b border-obsidian/20">
                    Oak's Investment Focus
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">First-lien, senior-position loans</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Short-duration debt strategies</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Small-balance and middle-market commercial real estate</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Highly structured, risk-conscious transactions</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Bridge loans, HUD-insured debt, and hybrid structures</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Image with Overlay Cards - Expanded Height */}
              <div className="relative h-full">
                <img 
                  src="/lovable-uploads/987e604e-d758-49f3-b324-b191ee0fa935.png"
                  alt="Investment platform illustration"
                  className="w-full h-full object-cover rounded-lg shadow-xl min-h-[600px]"
                />
                
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
              
              {/* Responsive Bento Box Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 md:h-[600px]">
                {/* Asset-backed Collateral - Large with Image */}
                <div className="md:col-span-2 md:row-span-4 relative overflow-hidden bg-gradient-to-br from-silver-mist/10 to-silver-mist/20 backdrop-blur-sm rounded-xl border border-garnet-edge/30 hover:border-garnet-edge/50 transition-all duration-300 group min-h-[300px] md:min-h-0">
                  {/* Background Image with Fade */}
                  <div className="absolute inset-0">
                    <img 
                      src="/lovable-uploads/2d3fe4fa-9cca-491b-b199-929c12b00e11.png"
                      alt="Collateral backing"
                      className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-obsidian/30 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-transparent to-obsidian/20"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-center">
                    <div className="flex items-start space-x-4">
                      <Shield className="h-6 w-6 md:h-8 md:w-8 text-garnet-edge group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-silver-mist mb-3">Asset-backed Collateral</h3>
                        <p className="text-silver-mist/90 leading-relaxed text-base md:text-lg">
                          Asset-backed collateral secured with a mortgage or first deed trust, providing tangible security for your investment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Predictable Income - Top Right */}
                <div className="md:col-span-2 md:row-span-1 p-4 md:p-6 bg-gradient-to-br from-silver-mist/10 to-silver-mist/20 backdrop-blur-sm rounded-xl border border-garnet-edge/30 hover:border-garnet-edge/50 transition-all duration-300 group min-h-[120px] md:min-h-0">
                  <div className="flex items-center space-x-4 h-full">
                    <DollarSign className="h-5 w-5 md:h-6 md:w-6 text-garnet-edge group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-silver-mist mb-2">Predictable Income Streams</h3>
                      <p className="text-silver-mist/80 leading-relaxed text-sm md:text-base">Lease-based income streams designed for consistency.</p>
                    </div>
                  </div>
                </div>

                {/* Downside Protection - Middle Right */}
                <div className="md:col-span-1 md:row-span-2 p-4 bg-gradient-to-br from-silver-mist/10 to-silver-mist/20 backdrop-blur-sm rounded-xl border border-garnet-edge/30 hover:border-garnet-edge/50 transition-all duration-300 group min-h-[150px] md:min-h-0">
                  <div className="h-full flex flex-col justify-center text-center">
                    <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-garnet-edge mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-base md:text-lg font-bold text-silver-mist mb-3">Downside Protection</h3>
                    <p className="text-silver-mist/80 text-sm leading-relaxed">Senior position and conservative LTV ratios for enhanced protection.</p>
                  </div>
                </div>

                {/* Institutional Discipline - Middle Right */}
                <div className="md:col-span-1 md:row-span-2 p-4 bg-gradient-to-br from-silver-mist/10 to-silver-mist/20 backdrop-blur-sm rounded-xl border border-garnet-edge/30 hover:border-garnet-edge/50 transition-all duration-300 group min-h-[150px] md:min-h-0">
                  <div className="h-full flex flex-col justify-center text-center">
                    <Award className="h-5 w-5 md:h-6 md:w-6 text-garnet-edge mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-base md:text-lg font-bold text-silver-mist mb-3">Institutional Discipline</h3>
                    <p className="text-silver-mist/80 text-sm leading-relaxed">Rigorous underwriting and strategic asset selection processes.</p>
                  </div>
                </div>

                {/* Market Cycle Resilience - Bottom Right */}
                <div className="md:col-span-2 md:row-span-1 p-4 md:p-6 bg-gradient-to-br from-silver-mist/10 to-silver-mist/20 backdrop-blur-sm rounded-xl border border-garnet-edge/30 hover:border-garnet-edge/50 transition-all duration-300 group min-h-[120px] md:min-h-0">
                  <div className="flex items-center space-x-4 h-full">
                    <BarChart3 className="h-5 w-5 md:h-6 md:w-6 text-garnet-edge group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-silver-mist mb-2">Market Cycle Resilience</h3>
                      <p className="text-silver-mist/80 leading-relaxed text-sm md:text-base">Investments engineered to weather market cycles through disciplined structuring.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Income Strategies Section - Cream Background */}
      <div className="bg-silver-mist">
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-6">
                  Investment strategies rooted in structure — not speculation.
                </h2>
                <p className="text-lg text-obsidian/80 leading-relaxed max-w-4xl mx-auto">
                  Private real estate credit offers unique benefits over corporate credit and equity strategies:
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4 p-6 bg-white/50 backdrop-blur-sm border border-obsidian/10 rounded-lg hover:bg-white/60 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-3">
                    <Lock className="h-6 w-6 text-garnet-edge group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold text-obsidian">Collateral Security</h3>
                  </div>
                  <p className="text-obsidian/80 leading-relaxed">
                    Loans backed by income-producing real estate
                  </p>
                </div>
                
                <div className="space-y-4 p-6 bg-white/50 backdrop-blur-sm border border-obsidian/10 rounded-lg hover:bg-white/60 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-3">
                    <DollarSign className="h-6 w-6 text-garnet-edge group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold text-obsidian">Cash Flow Predictability</h3>
                  </div>
                  <p className="text-obsidian/80 leading-relaxed">
                    Structured payments and interest income
                  </p>
                </div>
                
                <div className="space-y-4 p-6 bg-white/50 backdrop-blur-sm border border-obsidian/10 rounded-lg hover:bg-white/60 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-3">
                    <Activity className="h-6 w-6 text-garnet-edge group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold text-obsidian">Low Volatility</h3>
                  </div>
                  <p className="text-obsidian/80 leading-relaxed">
                    Less correlated to public market swings
                  </p>
                </div>
                
                <div className="space-y-4 p-6 bg-white/50 backdrop-blur-sm border border-obsidian/10 rounded-lg hover:bg-white/60 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="h-6 w-6 text-garnet-edge group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold text-obsidian">Risk Efficiency</h3>
                  </div>
                  <p className="text-obsidian/80 leading-relaxed">
                    Strong collateralization and underwriting discipline
                  </p>
                </div>
                
                <div className="space-y-4 p-6 bg-white/50 backdrop-blur-sm border border-obsidian/10 rounded-lg hover:bg-white/60 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-3">
                    <TrendingUp className="h-6 w-6 text-garnet-edge group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold text-obsidian">Inflation Resilience</h3>
                  </div>
                  <p className="text-obsidian/80 leading-relaxed">
                    Real estate's natural hedge against inflation
                  </p>
                </div>
                
                <div className="space-y-4 p-6 bg-white/50 backdrop-blur-sm border border-obsidian/10 rounded-lg hover:bg-white/60 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-3">
                    <Target className="h-6 w-6 text-garnet-edge group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold text-obsidian">Asset Appreciation Potential</h3>
                  </div>
                  <p className="text-obsidian/80 leading-relaxed">
                    Exposure to value growth alongside income
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Rest of content with dark background */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">


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
                <div className="space-y-4 p-8 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg hover:border-accent-brown/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-3">
                    <Building className="h-6 w-6 text-garnet-edge group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-medium text-silver-mist">Diversified Credit Funds</h3>
                  </div>
                  <p className="text-silver-mist/80 leading-relaxed">
                    Targeting CRE debt across multiple markets and property types
                  </p>
                </div>
                
                <div className="space-y-4 p-8 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg hover:border-accent-brown/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-3">
                    <CreditCard className="h-6 w-6 text-garnet-edge group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-medium text-silver-mist">Income-Generating Structured Credit</h3>
                  </div>
                  <p className="text-silver-mist/80 leading-relaxed">
                    Investments designed for consistent cash flow generation
                  </p>
                </div>
                
                <div className="space-y-4 p-8 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg hover:border-accent-brown/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-3">
                    <Settings className="h-6 w-6 text-garnet-edge group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-medium text-silver-mist">Custom Investment Vehicles</h3>
                  </div>
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
                  className="border-2 border-silver-mist/40 text-silver-mist hover:bg-silver-mist hover:text-obsidian hover:border-garnet-edge px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm backdrop-blur-sm bg-transparent"
                  onClick={() => window.location.href = '/contact'}
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