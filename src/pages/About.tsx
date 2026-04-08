import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Shield, TrendingDown, BarChart, Building2, DollarSign, ShieldCheck, Activity, RotateCcw, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema } from "@/components/StructuredData";

const About = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="About Us"
        description="Oak Real Estate Partners combines institutional discipline with private credit lending expertise. Over 150 years combined experience and $18B+ in total transactions."
        canonicalUrl="/about"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' }
      ]} />
      {/* Navigation */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Our Firm", href: "/" },
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
                    <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-8 leading-tight">
                      Private Credit Lending with <span className="text-gold-accent">Institutional Discipline</span>
                    </h1>
                    <p className="text-lg lg:text-xl font-body font-normal text-deep-petrol leading-relaxed mb-6">
                      Oak is a premier commercial real estate lender with a core business focus on senior secured loans backed by income producing properties. Our lending philosophy is grounded in real asset investment, institutional discipline, and a commitment to long-term capital protection.
                    </p>
                    
                    <p className="text-lg lg:text-xl font-body font-normal text-deep-petrol leading-relaxed mb-6">
                      Oak represents the combination of White Oak Capital Holdings (WOCH) and Red Oak Capital Holdings (ROCH), creating a single powerful platform of comprehensive lending services for commercial real estate borrowers and investors.
                    </p>
                    
                    <div className="mt-8">
                      <a href="/leadership">
                        <Button 
                          size="lg"
                          className="bg-gold-accent hover:bg-gold-accent/90 text-silver-mist px-8 py-3 text-base font-body font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
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
                      src="/lovable-uploads/9ab74e35-d4f1-4eff-bf61-dc4e3cd8fad1.png"
                      alt="Business handshake with architectural plans"
                      className="w-full h-[600px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 via-transparent to-transparent"></div>
                    
                    {/* Experience Stats Overlay Card */}
                    <div className="absolute bottom-6 right-6 bg-cream/95 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-6 shadow-xl max-w-sm">
                      <h3 className="text-lg font-display font-medium text-obsidian mb-4">Experience That Matters</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-xl font-display font-medium text-gold-accent mb-1">150+</div>
                          <div className="text-deep-petrol/80 font-body text-xs">Years Combined Experience</div>
                        </div>
                        <div>
                          <div className="text-xl font-display font-medium text-gold-accent mb-1">$5B+</div>
                          <div className="text-deep-petrol/80 font-body text-xs">Bridge Loans Structured</div>
                        </div>
                        <div>
                          <div className="text-xl font-display font-medium text-gold-accent mb-1">$18B</div>
                          <div className="text-deep-petrol/80 font-body text-xs">TOTAL TRANSACTIONS²</div>
                        </div>
                      </div>
                      <p className="text-xs text-deep-petrol/60 font-sans text-center mt-3">
                        Represents experience of current management team, whether at Oak or predecessor firms.
                      </p>
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
              src="/lovable-uploads/01825524-320f-4d0a-981d-ff536cf5d707.png"
              alt="Modern commercial building with green rooftop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-deep-petrol/50"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Column - Content */}
                <div className="space-y-8">
                  <h2 className="text-3xl lg:text-4xl font-display font-medium text-silver-mist leading-tight">
                    Our <span className="text-gold-accent">Philosophy</span>
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-lg font-body text-silver-mist/90 leading-relaxed">
                      At Oak, integrity isn't a buzzword—it's a core value with a system to guide our growth. 
                      It drives how we lend to our borrowers, how we service our loans and how we report to our 
                      investors while servicing as a principal of how we treat our partners.
                    </p>
                    
                    <p className="text-lg font-body text-silver-mist/90 leading-relaxed">
                      We're strong because we're well structured. Dependable because we're disciplined. 
                      Trusted for our consistent execution, especially when stakes are highest.
                    </p>
                  </div>
                </div>
                
                {/* Right Column - Visual Element */}
                <div className="relative">
                  <div className="bg-cream/95 backdrop-blur-sm border border-deep-petrol/20 rounded-xl p-12 shadow-xl">
                    <div className="space-y-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gold-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className="w-8 h-8 bg-gold-accent rounded-full"></div>
                        </div>
                        <h3 className="text-lg font-display font-medium text-obsidian mb-3">Structured</h3>
                        <p className="text-deep-petrol font-body text-sm">Systems and processes that ensure consistency</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-deep-petrol/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className="w-8 h-8 bg-deep-petrol rounded-full"></div>
                        </div>
                        <h3 className="text-lg font-display font-medium text-obsidian mb-3">Disciplined</h3>
                        <p className="text-deep-petrol font-body text-sm">Unwavering commitment to our principles</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-garnet-edge/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className="w-8 h-8 bg-garnet-edge rounded-full"></div>
                        </div>
                        <h3 className="text-lg font-display font-medium text-obsidian mb-3">Trusted</h3>
                        <p className="text-deep-petrol font-body text-sm">Reliable execution when it matters most</p>
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
                <h2 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-8 leading-tight">
                  Discipline and <span className="text-gold-accent">Stability</span>
                </h2>
                <p className="text-lg font-body text-deep-petrol leading-relaxed max-w-4xl mx-auto">
                  Discipline is a strong predictor of success, which in turn drives stability across multiple market cycles.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-cream/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-cream/80 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gold-accent/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gold-accent/20 transition-colors duration-300">
                      <Shield className="h-6 w-6 text-gold-accent" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-obsidian">Control and Stability</h3>
                  </div>
                  <p className="text-deep-petrol leading-relaxed font-body">
                    Discipline is a strong predictor of success, which in turn drives stability across market volatility.
                  </p>
                </div>
                
                <div className="group bg-cream/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-cream/80 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gold-accent/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gold-accent/20 transition-colors duration-300">
                      <TrendingDown className="h-6 w-6 text-gold-accent" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-obsidian">Reduced Risk-Taking</h3>
                  </div>
                  <p className="text-deep-petrol leading-relaxed font-body">
                    Disciplined organizations are less likely to engage in impulsive strategies that threaten stability.
                  </p>
                </div>
                
                <div className="group bg-cream/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-cream/80 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gold-accent/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gold-accent/20 transition-colors duration-300">
                      <BarChart className="h-6 w-6 text-gold-accent" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-obsidian">Predictability</h3>
                  </div>
                  <p className="text-deep-petrol leading-relaxed font-body">
                    Consistent habits and behaviors lead to greater reliability among investors and borrowers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default About;