import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: "Our Firm", href: "/" },
        { label: "About" }
      ]} />
      
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
                      Our <span className="text-accent-brown">Story</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-deep-petrol max-w-lg leading-relaxed font-light mb-6">
                      Oak is a premier real estate credit lender with our core business focus on senior secured loans 
                      backed by income-producing commercial properties. Our lending philosophy is grounded in real assets, 
                      an institutional discipline, and a commitment to long-term capital protection.
                    </p>
                    
                    <p className="text-lg lg:text-xl text-deep-petrol max-w-lg leading-relaxed font-light mb-6">
                      In a private credit landscape where polish often outpaces performance, Oak delivers industry 
                      leading expertise in a highly inefficient, fragmented and unserved sector of the market. 
                      We don't chase headlines—we create income strategies that prioritize downside protection, predictability, and trust.
                    </p>
                    
                    <p className="text-lg lg:text-xl text-deep-petrol max-w-lg leading-relaxed font-light">
                      With more than 150 years of combined experience across lending, capital markets, and structured finance, 
                      our team has navigated multiple real estate cycles. Collectively, we've structured over $5 billion in 
                      bridge loans and executed more than $18 billion in total transactions.
                    </p>
                  </div>
                  
                  {/* Experience Stats */}
                  <div className="bg-white/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8">
                    <h3 className="text-2xl font-light text-obsidian mb-6">Experience That Matters</h3>
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-light text-accent-brown mb-2">150+</div>
                        <div className="text-deep-petrol/80 text-sm">Years Combined Experience</div>
                      </div>
                      <div>
                        <div className="text-3xl font-light text-accent-brown mb-2">$5B+</div>
                        <div className="text-deep-petrol/80 text-sm">Bridge Loans Structured</div>
                      </div>
                      <div>
                        <div className="text-3xl font-light text-accent-brown mb-2">$210B+</div>
                        <div className="text-deep-petrol/80 text-sm">Total Transactions</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Image */}
                <div className="relative">
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="/lovable-uploads/55f40082-fc81-4584-ab22-ec6acc5246a8.png"
                      alt="Professional pathway"
                      className="w-full h-[600px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-white/40">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-light text-obsidian mb-12 leading-tight">
                Our <span className="text-accent-brown">Philosophy</span>
              </h2>
              
              <div className="bg-white/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-12 mb-12">
                <p className="text-xl text-deep-petrol leading-relaxed font-light mb-6">
                  At Oak, integrity isn't a buzzword—it's a core value with a system to guide our growth. 
                  It drives how we lend to our borrowers, how we service our loans and how we report to our 
                  investors while servicing as a principal of how we treat our partners.
                </p>
                <p className="text-2xl font-light text-accent-brown leading-relaxed">
                  We're strong because we're structured. Dependable because we're disciplined. 
                  Trusted for our consistent execution, especially when stakes are highest.
                </p>
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
                <div className="bg-white/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-white/80 transition-all duration-300">
                  <h3 className="text-2xl font-light text-obsidian mb-6">Control and Stability</h3>
                  <p className="text-deep-petrol leading-relaxed font-light">
                    Discipline is a strong predictor of success, which in turn drives stability across market volatility.
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-white/80 transition-all duration-300">
                  <h3 className="text-2xl font-light text-obsidian mb-6">Reduced Risk-Taking</h3>
                  <p className="text-deep-petrol leading-relaxed font-light">
                    Disciplined organizations are less likely to engage in impulsive strategies that threaten stability.
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-white/80 transition-all duration-300">
                  <h3 className="text-2xl font-light text-obsidian mb-6">Predictability</h3>
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