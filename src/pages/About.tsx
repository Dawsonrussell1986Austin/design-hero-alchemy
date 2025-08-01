import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Shield, TrendingDown, BarChart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Our Firm" },
          { label: "About us" }
        ]}
        quickLinks={[
          { label: "Leadership", href: "/leadership" }
        ]}
      />
      
      {/* Main Content - Cream Background */}
      <div className="bg-silver-mist">
        
        {/* Our Story Section - Left Text, Right Image */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                
                {/* Left Column - Text Content */}
                <div className="space-y-8">
                  <div>
                    <h1 className="text-5xl lg:text-6xl font-light text-obsidian mb-8 leading-tight">
                      Private Credit Lending with <span className="text-accent-brown">Institutional Discipline</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-deep-petrol max-w-lg leading-relaxed font-light mb-6">
                      Oak is a <span className="font-semibold">premier real estate credit lender</span> with our core business focus on <span className="font-semibold">senior secured loans</span> 
                      backed by income-producing commercial properties. Our lending philosophy is grounded in <span className="font-semibold">real assets, an institutional discipline, and a commitment to long-term capital protection</span>.
                    </p>
                    
                    <p className="text-lg lg:text-xl text-deep-petrol max-w-lg leading-relaxed font-light mb-6">
                      In a private credit landscape where polish often outpaces performance, Oak delivers <span className="font-semibold">industry leading expertise</span> in a highly inefficient, fragmented and unserved sector of the market. 
                      We don't chase headlines—we create income strategies that prioritize <span className="font-semibold">downside protection, predictability, and trust</span>.
                    </p>
                    
                    <div className="mt-8">
                      <a href="/leadership">
                        <Button 
                          size="lg"
                          className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
                        >
                          Our Leadership Team
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Image with Overlay Card */}
                <div className="relative">
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="/lovable-uploads/55f40082-fc81-4584-ab22-ec6acc5246a8.png"
                      alt="Professional pathway"
                      className="w-full h-[600px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 via-transparent to-transparent"></div>
                    
                    {/* Experience Stats Overlay Card */}
                    <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-6 shadow-xl max-w-sm">
                      <h3 className="text-xl font-light text-obsidian mb-4">Experience That Matters</h3>
                      <div className="grid grid-cols-1 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-light text-accent-brown mb-1">150+</div>
                          <div className="text-deep-petrol/80 text-xs">Years Combined Experience</div>
                        </div>
                        <div>
                          <div className="text-2xl font-light text-accent-brown mb-1">$5B+</div>
                          <div className="text-deep-petrol/80 text-xs">Bridge Loans Structured</div>
                        </div>
                        <div>
                          <div className="text-2xl font-light text-accent-brown mb-1">$210B+</div>
                          <div className="text-deep-petrol/80 text-xs">Total Transactions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 relative overflow-hidden bg-obsidian">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src="/lovable-uploads/674a9da9-1494-4665-8600-bd2709ef907b.png"
              alt="Abstract architectural design"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-deep-petrol/50"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Column - Content */}
                <div className="space-y-8">
                  <h2 className="text-4xl lg:text-5xl font-light text-silver-mist leading-tight">
                    Our <span className="text-accent-brown">Philosophy</span>
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-xl text-silver-mist/90 leading-relaxed font-light">
                      At Oak, integrity isn't a buzzword—it's a <span className="font-semibold">core value with a system</span> to guide our growth. 
                      It drives how we lend to our borrowers, how we service our loans and how we report to our 
                      investors while servicing as a principal of how we treat our partners.
                    </p>
                    
                    <p className="text-xl text-silver-mist/90 leading-relaxed font-light">
                      We're strong because we're structured. Dependable because we're disciplined. 
                      Trusted for our consistent execution, especially when stakes are highest.
                    </p>
                  </div>
                </div>
                
                {/* Right Column - Visual Element */}
                <div className="relative">
                  <div className="bg-white/95 backdrop-blur-sm border border-deep-petrol/20 rounded-xl p-12 shadow-xl">
                    <div className="space-y-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-accent-brown/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className="w-8 h-8 bg-accent-brown rounded-full"></div>
                        </div>
                        <h3 className="text-xl font-light text-obsidian mb-3">Structured</h3>
                        <p className="text-deep-petrol text-sm">Systems and processes that ensure consistency</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-deep-petrol/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className="w-8 h-8 bg-deep-petrol rounded-full"></div>
                        </div>
                        <h3 className="text-xl font-light text-obsidian mb-3">Disciplined</h3>
                        <p className="text-deep-petrol text-sm">Unwavering commitment to our principles</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-garnet-edge/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className="w-8 h-8 bg-garnet-edge rounded-full"></div>
                        </div>
                        <h3 className="text-xl font-light text-obsidian mb-3">Trusted</h3>
                        <p className="text-deep-petrol text-sm">Reliable execution when it matters most</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Discipline and Stability Cards */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-light text-obsidian mb-8 leading-tight">
                  Discipline and <span className="text-accent-brown">Stability</span>
                </h2>
                <p className="text-xl text-deep-petrol leading-relaxed max-w-4xl mx-auto">
                  Discipline is a strong predictor of success, which in turn drives stability across multiple market cycles.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group bg-white/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-white/80 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent-brown/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent-brown/20 transition-colors duration-300">
                      <Shield className="h-6 w-6 text-accent-brown" />
                    </div>
                    <h3 className="text-2xl font-light text-obsidian">Control and Stability</h3>
                  </div>
                  <p className="text-deep-petrol leading-relaxed font-light">
                    Discipline is a strong predictor of success, which in turn drives stability across market volatility.
                  </p>
                </div>
                
                <div className="group bg-white/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-white/80 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-deep-petrol/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-deep-petrol/20 transition-colors duration-300">
                      <TrendingDown className="h-6 w-6 text-deep-petrol" />
                    </div>
                    <h3 className="text-2xl font-light text-obsidian">Reduced Risk-Taking</h3>
                  </div>
                  <p className="text-deep-petrol leading-relaxed font-light">
                    Disciplined organizations are less likely to engage in impulsive strategies that threaten stability.
                  </p>
                </div>
                
                <div className="group bg-white/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-white/80 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-garnet-edge/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-garnet-edge/20 transition-colors duration-300">
                      <BarChart className="h-6 w-6 text-garnet-edge" />
                    </div>
                    <h3 className="text-2xl font-light text-obsidian">Predictability</h3>
                  </div>
                  <p className="text-deep-petrol leading-relaxed font-light">
                    Consistent habits and behaviors lead to greater reliability among investors and borrowers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Real Estate Credit Section */}
        <section className="py-20 bg-white/40">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-light text-obsidian mb-8 leading-tight">
                  Why Real Estate Credit Lending <span className="text-accent-brown">Matters</span>
                </h2>
                <p className="text-xl text-deep-petrol leading-relaxed max-w-5xl mx-auto font-light">
                  At Oak, we focus on real estate credit that's backed by the property itself — and structured so 
                  our investors' capital is prioritized to be repaid first. This approach offers clear advantages:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-white/80 transition-all duration-300">
                  <h3 className="text-xl font-light text-accent-brown mb-4">Collateral Security</h3>
                  <p className="text-deep-petrol leading-relaxed font-light">
                    Every lending opportunity is backed by physical real estate, offering tangible assets 
                    in the event of default.
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-white/80 transition-all duration-300">
                  <h3 className="text-xl font-light text-accent-brown mb-4">Predictable Cash Flows</h3>
                  <p className="text-deep-petrol leading-relaxed font-light">
                    Senior position loans generate stable and predictable income.
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-white/80 transition-all duration-300">
                  <h3 className="text-xl font-light text-accent-brown mb-4">Inflation Protection</h3>
                  <p className="text-deep-petrol leading-relaxed font-light">
                    Real estate values and rental income often rise with inflation, helping preserve asset values.
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-white/80 transition-all duration-300">
                  <h3 className="text-xl font-light text-accent-brown mb-4">Low Volatility</h3>
                  <p className="text-deep-petrol leading-relaxed font-light">
                    Real estate markets tend to be more stable and exhibit less volatility relative to public equities or debt markets.
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-white/80 transition-all duration-300">
                  <h3 className="text-xl font-light text-accent-brown mb-4">High Recovery Potential</h3>
                  <p className="text-deep-petrol leading-relaxed font-light">
                    In adverse scenarios, hard real estate assets offer greater value recovery than intangible assets.
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-white/80 transition-all duration-300">
                  <h3 className="text-xl font-light text-accent-brown mb-4">Appreciation Opportunity</h3>
                  <p className="text-deep-petrol leading-relaxed font-light">
                    In addition to current income, real estate assets have historically appreciated in value over time.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Button 
                  size="lg"
                  className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
                >
                  Learn More About Our Approach
                </Button>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;