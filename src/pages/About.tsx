import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-light text-silver-mist leading-tight tracking-tight mb-8">
              Investors Expect More - <span className="text-accent-brown">OAK Provides</span>{" "}
              <span className="text-garnet-edge">Disciplined Income & Growth</span>
            </h1>
            <p className="text-xl lg:text-2xl text-silver-mist/80 max-w-3xl mx-auto leading-relaxed font-light">
              A Non-Bank Financial Institution, acutely focused on real estate credit rooted in discipline, 
              built for stability and across multiple market cycles.
            </p>
          </div>
        </div>
      </div>

      {/* Discipline and Stability Section */}
      <div className="py-20 bg-silver-mist/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-12 text-center">
              Discipline and Stability
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-garnet-edge">Control and Stability</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  Discipline is a strong predictor of success, which in turn drives stability.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-garnet-edge">Reduced Risk-Taking</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  Disciplined organizations are less likely to engage in impulsive or risky strategies 
                  that could threaten their stability and overall financial well-being.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-garnet-edge">Predictability and Reliability</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  Discipline enables consistent habits and behaviors, leading to greater predictability 
                  and reliability within a company, which fosters stability among employees, investors, and borrowers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
            <div className="space-y-8 text-silver-mist/90">
              <p className="text-lg leading-relaxed">
                Oak is a premier real estate credit lender with our core business focus on senior secured loans 
                backed by income-producing commercial properties. Our lending philosophy is grounded in real assets, 
                an institutional discipline, and a commitment to long-term capital protection.
              </p>
              
              <p className="text-lg leading-relaxed">
                In a private credit landscape where polish often outpaces performance, Oak delivers industry 
                leading expertise in a highly inefficient, fragmented and unserved sector of the market. 
                We don't chase headlines—we create income strategies that prioritize downside protection, 
                predictability, and trust.
              </p>
              
              <p className="text-lg leading-relaxed">
                With more than 150 years of combined experience across lending, capital markets, and structured finance, 
                our team has navigated multiple real estate cycles. Collectively, we've structured over $5 billion 
                in bridge loans and executed more than $18 billion in total transactions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Real Estate Credit Lending Matters */}
      <div className="py-20 bg-obsidian/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-12 text-center">
              Why Real Estate Credit Lending Matters
            </h2>
            <p className="text-lg text-silver-mist/90 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
              At Oak, we focus on real estate credit that's backed by the property itself — and structured so 
              our investors' capital is prioritized to be repaid first. This approach offers clear advantages:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4 p-6 bg-silver-mist/5 rounded-sm border border-garnet-edge/20">
                <h3 className="text-xl font-medium text-accent-brown">Collateral Security</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  Every lending opportunity is backed by physical real estate, offering tangible assets 
                  in the event of default.
                </p>
              </div>
              
              <div className="space-y-4 p-6 bg-silver-mist/5 rounded-sm border border-garnet-edge/20">
                <h3 className="text-xl font-medium text-accent-brown">Predictable Cash Flows</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  Senior position loans generate stable and predictable income.
                </p>
              </div>
              
              <div className="space-y-4 p-6 bg-silver-mist/5 rounded-sm border border-garnet-edge/20">
                <h3 className="text-xl font-medium text-accent-brown">Inflation Protection</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  Real estate values and rental income often rise with inflation, helping preserve asset values.
                </p>
              </div>
              
              <div className="space-y-4 p-6 bg-silver-mist/5 rounded-sm border border-garnet-edge/20">
                <h3 className="text-xl font-medium text-accent-brown">Low Volatility</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  Real estate markets tend to be more stable and exhibit less volatility relative 
                  to public equities or debt markets.
                </p>
              </div>
              
              <div className="space-y-4 p-6 bg-silver-mist/5 rounded-sm border border-garnet-edge/20">
                <h3 className="text-xl font-medium text-accent-brown">High Recovery Potential</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  In adverse scenarios, hard real estate assets offer greater value recovery than intangible assets.
                </p>
              </div>
              
              <div className="space-y-4 p-6 bg-silver-mist/5 rounded-sm border border-garnet-edge/20">
                <h3 className="text-xl font-medium text-accent-brown">Appreciation Opportunity</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  In addition to current income, real estate assets have historically appreciated in value over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-12">Philosophy</h2>
            <div className="space-y-8 text-silver-mist/90">
              <p className="text-lg leading-relaxed">
                At Oak, integrity isn't a buzzword—it's a core value with a system to guide our growth. 
                It drives how we lend to our borrowers, how we service our loans and how we report to our 
                investors while serving as a principal of how we treat our partners.
              </p>
              <p className="text-xl font-medium text-garnet-edge leading-relaxed">
                We're strong because we're structured. Dependable because we're disciplined. 
                Trusted for our consistent execution, especially when stakes are highest.
              </p>
            </div>
            
            <div className="mt-12">
              <Button 
                size="lg"
                className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
              >
                Learn More About Our Approach
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;