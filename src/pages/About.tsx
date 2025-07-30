import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/83330b8e-1b82-4836-98fb-4d33bd9ab0fe.png" 
            alt="City skyline" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/40 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[85vh] px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="space-y-4 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-6xl lg:text-8xl font-light text-silver-mist leading-[0.9] tracking-tight">
                Investors Expect More
              </h1>
              <h1 className="text-6xl lg:text-8xl font-light leading-[0.9] tracking-tight">
                <span className="text-accent-brown">OAK Provides</span> <span className="text-garnet-edge">Disciplined Income & Growth</span>
              </h1>
            </div>
            
            <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl lg:text-2xl text-silver-mist/80 max-w-4xl mx-auto leading-relaxed font-light">
                A Non-Bank Financial Institution, acutely focused on real estate credit rooted in 
                <span className="text-garnet-edge"> discipline</span>, built for stability and across multiple market cycles.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                size="lg" 
                className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 group rounded-sm"
              >
                Our Approach
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-silver-mist/40 text-silver-mist hover:bg-silver-mist hover:text-obsidian hover:border-garnet-edge px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm backdrop-blur-sm"
              >
                Leadership Team
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Large Video/Image Section */}
      <div className="relative z-10 bg-silver-mist py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <div className="w-full">
                <div className="relative rounded-2xl overflow-hidden bg-obsidian/10 backdrop-blur-sm border border-deep-petrol/30 shadow-2xl">
                  <div className="aspect-[16/9] bg-gradient-to-br from-obsidian/20 to-deep-petrol/20 relative" style={{ minHeight: '60vh' }}>
                    <img 
                      src="/lovable-uploads/55f40082-fc81-4584-ab22-ec6acc5246a8.png"
                      alt="Professional pathway"
                      className="w-full h-full object-cover"
                      style={{
                        filter: 'contrast(1.1) brightness(0.95)'
                      }}
                    />
                    
                    {/* Custom overlay for branding */}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center max-w-4xl mx-auto px-8">
                        <h2 className="text-4xl lg:text-5xl font-light text-silver-mist mb-6">
                          Discipline and Stability
                        </h2>
                        <p className="text-xl text-silver-mist/90 leading-relaxed">
                          Discipline is a strong predictor of success, which in turn drives stability across multiple market cycles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glassmorphic Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-2xl p-8 hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl font-light text-obsidian mb-6">Control and Stability</h3>
                <p className="text-deep-petrol leading-relaxed font-light text-lg">
                  Discipline is a strong predictor of success, which in turn drives stability across market volatility.
                </p>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-2xl p-8 hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl font-light text-obsidian mb-6">Reduced Risk-Taking</h3>
                <p className="text-deep-petrol leading-relaxed font-light text-lg">
                  Disciplined organizations are less likely to engage in impulsive strategies that threaten stability.
                </p>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-2xl p-8 hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl font-light text-obsidian mb-6">Predictability</h3>
                <p className="text-deep-petrol leading-relaxed font-light text-lg">
                  Consistent habits and behaviors lead to greater reliability among investors and borrowers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Content Section */}
      <div className="relative py-32 bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/lovable-uploads/2e03170c-dfef-4894-8917-fb149fd7b232.png" 
            alt="Family journey" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-transparent to-obsidian/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-light text-silver-mist mb-12 leading-tight">
              Our <span className="text-accent-brown">Story</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 text-left">
                <p className="text-xl text-silver-mist/90 leading-relaxed font-light">
                  Oak is a premier real estate credit lender with our core business focus on senior secured loans 
                  backed by income-producing commercial properties. Our lending philosophy is grounded in real assets, 
                  an institutional discipline, and a commitment to long-term capital protection.
                </p>
                
                <p className="text-xl text-silver-mist/90 leading-relaxed font-light">
                  In a private credit landscape where polish often outpaces performance, Oak delivers industry 
                  leading expertise in a highly inefficient, fragmented and unserved sector of the market. 
                  We don't chase headlines—we create income strategies that prioritize downside protection, predictability, and trust.
                </p>
                
                <p className="text-xl text-silver-mist/90 leading-relaxed font-light">
                  With more than 150 years of combined experience across lending, capital markets, and structured finance, 
                  our team has navigated multiple real estate cycles. Collectively, we've structured over $5 billion in 
                  bridge loans and executed more than $18 billion in total transactions.
                </p>
              </div>
              
              <div className="bg-background/20 backdrop-blur-md border border-silver-mist/20 rounded-2xl p-12 hover:bg-background/30 transition-all duration-300">
                <h3 className="text-3xl font-light text-garnet-edge mb-8">Experience That Matters</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-light text-accent-brown mb-2">150+</div>
                    <div className="text-silver-mist/80">Years Combined Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light text-accent-brown mb-2">$5B+</div>
                    <div className="text-silver-mist/80">Bridge Loans Structured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light text-accent-brown mb-2">$18B+</div>
                    <div className="text-silver-mist/80">Total Transactions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Real Estate Credit Section */}
      <div className="relative z-10 bg-silver-mist py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-light text-obsidian mb-8 leading-tight">
                Why Real Estate Credit Lending <span className="text-accent-brown">Matters</span>
              </h2>
              <p className="text-2xl text-deep-petrol leading-relaxed max-w-5xl mx-auto font-light">
                At Oak, we focus on real estate credit that's backed by the property itself — and structured so 
                our investors' capital is prioritized to be repaid first. This approach offers clear advantages:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-2xl p-10 hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl font-light text-accent-brown mb-6">Collateral Security</h3>
                <p className="text-deep-petrol leading-relaxed font-light text-lg">
                  Every lending opportunity is backed by physical real estate, offering tangible assets 
                  in the event of default.
                </p>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-2xl p-10 hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl font-light text-accent-brown mb-6">Predictable Cash Flows</h3>
                <p className="text-deep-petrol leading-relaxed font-light text-lg">
                  Senior position loans generate stable and predictable income.
                </p>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-2xl p-10 hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl font-light text-accent-brown mb-6">Inflation Protection</h3>
                <p className="text-deep-petrol leading-relaxed font-light text-lg">
                  Real estate values and rental income often rise with inflation, helping preserve asset values.
                </p>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-2xl p-10 hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl font-light text-accent-brown mb-6">Low Volatility</h3>
                <p className="text-deep-petrol leading-relaxed font-light text-lg">
                  Real estate markets tend to be more stable and exhibit less volatility relative to public equities or debt markets.
                </p>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-2xl p-10 hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl font-light text-accent-brown mb-6">High Recovery Potential</h3>
                <p className="text-deep-petrol leading-relaxed font-light text-lg">
                  In adverse scenarios, hard real estate assets offer greater value recovery than intangible assets.
                </p>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-2xl p-10 hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl font-light text-accent-brown mb-6">Appreciation Opportunity</h3>
                <p className="text-deep-petrol leading-relaxed font-light text-lg">
                  In addition to current income, real estate assets have historically appreciated in value over time.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-2xl p-10 hover:from-accent-brown/30 hover:to-garnet-edge/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl font-light text-obsidian mb-6">Our Strategy</h3>
                <p className="text-deep-petrol leading-relaxed font-light text-lg">
                  Designed to unlock value while prioritizing downside protection, income consistency, and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section with Full-Screen Impact */}
      <div className="relative min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-garnet-edge/10 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-6xl lg:text-8xl font-light text-silver-mist mb-16 leading-tight">
              Our <span className="text-garnet-edge">Philosophy</span>
            </h2>
            
            <div className="bg-background/20 backdrop-blur-xl border border-silver-mist/20 rounded-3xl p-16 mb-16 hover:bg-background/30 transition-all duration-500">
              <p className="text-2xl text-silver-mist/90 leading-relaxed font-light mb-8">
                At Oak, integrity isn't a buzzword—it's a core value with a system to guide our growth. 
                It drives how we lend to our borrowers, how we service our loans and how we report to our 
                investors while servicing as a principal of how we treat our partners.
              </p>
              <p className="text-3xl font-light text-garnet-edge leading-relaxed">
                We're strong because we're structured. Dependable because we're disciplined. 
                Trusted for our consistent execution, especially when stakes are highest.
              </p>
            </div>
            
            <Button 
              size="lg"
              className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-16 py-6 text-xl font-medium tracking-wide transition-all duration-300 hover:scale-110 rounded-sm shadow-2xl"
            >
              Learn More About Our Approach
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;