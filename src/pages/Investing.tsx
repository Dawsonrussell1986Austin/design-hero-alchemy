import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, BarChart3, DollarSign, Target, MapPin } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { FinancialServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";

const Investing = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Investment Offerings"
        description="Strategic investment solutions from Oak Real Estate Partners. Institutional-quality private credit opportunities with transparent structures and professional management."
        canonicalUrl="/investing"
      />
      <FinancialServiceSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://oakrealestatepartners.com/' },
          { name: 'Investing', url: 'https://oakrealestatepartners.com/investing' }
        ]}
      />
      {/* Navigation */}
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Investing" }
        ]}
      />
      
      {/* Cream background for hero content */}
      <div className="bg-silver-mist">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              {/* Text Content */}
              <div>
                {/* Program Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-garnet-edge/15 text-garnet-edge border border-garnet-edge/30 shadow-sm">
                    Investment Offerings
                  </span>
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-6 leading-tight">
                  Strategic Investment Solutions
                </h1>
                <p className="text-lg lg:text-xl font-body font-medium text-gold-accent mb-6">
                  Institutional-quality opportunities. Transparent structures. Professional management.
                </p>
                <p className="text-lg lg:text-xl font-body font-normal text-obsidian/80 leading-relaxed mb-6">
                  Oak offers a curated selection of investment vehicles designed for sophisticated investors seeking consistent returns through disciplined real estate credit strategies. Our platform is capitalized by both retail and institutional investors, each offering undergoes rigorous due diligence and structural analysis.
                </p>
                
                <p className="text-lg lg:text-xl font-body font-normal text-obsidian/80 leading-relaxed mb-8">
                  We provide institutional-quality opportunities with transparent structures and professional management designed to deliver superior risk-adjusted returns through diversified commercial real estate credit investments.
                </p>
                
                {/* Investment Philosophy - Under text */}
                <div className="bg-cream/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-obsidian mb-4 pb-2 border-b border-obsidian/20">
                    Investor-Focused Philosophy
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Capital preservation and consistent yield generation</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Transparent reporting and investor communication</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Institutional-quality due diligence standards</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Diversified portfolio construction and risk management</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Image with Overlay Cards */}
              <div className="relative h-full">
                <img 
                  src="/lovable-uploads/40699a0f-8d8e-45b5-9bfe-ace25b76aa3a.png"
                  alt="Investment offerings illustration"
                  className="w-full h-full object-cover rounded-lg shadow-xl min-h-[600px]"
                />
                
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Why Private Credit Section */}
      <div className="relative z-10 bg-silver-mist py-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            

            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-8">
                Why Private Credit Real Estate Lending?
              </h2>
              <p className="text-lg text-graphite-fog leading-relaxed max-w-4xl mx-auto font-body">
                In a broad market of investment types where many types have evolving uncertainties, exposure to private credit that is senior secured and backed by income producing commercial real estate assets offers several key advantages:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Market Opportunity */}
              <div className="bg-background/60 backdrop-blur-sm border border-graphite-fog/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gold-accent/10 rounded-lg flex items-center justify-center mr-3">
                    <TrendingUp className="h-5 w-5 text-gold-accent" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-obsidian">Market Opportunity</h3>
                </div>
                <p className="text-graphite-fog leading-relaxed font-body text-sm">
                  Restrictive banking regulations requiring increased capital reserves for banks have constrained their ability to provide debt capital, creating a unique opportunity for experienced private credit providers to generate highly attractive returns with lower levels of risk.
                </p>
              </div>

              {/* Risk Mitigation */}
              <div className="bg-background/60 backdrop-blur-sm border border-graphite-fog/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gold-accent/10 rounded-lg flex items-center justify-center mr-3">
                    <Shield className="h-5 w-5 text-gold-accent" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-obsidian">Risk Mitigation</h3>
                </div>
                <p className="text-graphite-fog leading-relaxed font-body text-sm">
                  Deal structure and comprehensive institutional credit underwriting standards mitigate risk and protect against capital impairment. Private credit's lending opportunities are secured by hard commercial real estate assets that carry a significant amount of intrinsic value with downside protection during times of market distress.
                </p>
              </div>

              {/* Diversification */}
              <div className="bg-background/60 backdrop-blur-sm border border-graphite-fog/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gold-accent/10 rounded-lg flex items-center justify-center mr-3">
                    <BarChart3 className="h-5 w-5 text-gold-accent" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-obsidian">Diversification</h3>
                </div>
                <p className="text-graphite-fog leading-relaxed font-body text-sm">
                  Exposure to the commercial real estate asset class with a private credit strategy enhances diversification and risk-efficiency while reducing an investment portfolio's volatility all while delivering a return stream uncorrelated with other investment types.
                </p>
              </div>

              {/* Income Oriented */}
              <div className="bg-background/60 backdrop-blur-sm border border-graphite-fog/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gold-accent/10 rounded-lg flex items-center justify-center mr-3">
                    <DollarSign className="h-5 w-5 text-gold-accent" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-obsidian">Income Oriented</h3>
                </div>
                <p className="text-graphite-fog leading-relaxed font-body text-sm">
                  Private credit strategies are designed to generate stable, consistent cash flows for investors seeking reliable income with upside capture opportunity.
                </p>
              </div>

              {/* Performance */}
              <div className="bg-background/60 backdrop-blur-sm border border-graphite-fog/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gold-accent/10 rounded-lg flex items-center justify-center mr-3">
                    <Target className="h-5 w-5 text-gold-accent" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-obsidian">Performance</h3>
                </div>
                <p className="text-graphite-fog leading-relaxed font-body text-sm">
                  Private credit's historical performance has demonstrated higher yield premiums which can contribute to the optimization of an investment portfolio.
                </p>
              </div>

              {/* Our Strategy */}
              <div className="bg-background/60 backdrop-blur-sm border border-graphite-fog/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gold-accent/10 rounded-lg flex items-center justify-center mr-3">
                    <MapPin className="h-5 w-5 text-gold-accent" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-obsidian">Our Strategy</h3>
                </div>
                <p className="text-graphite-fog leading-relaxed font-body text-sm">
                  Our strategy is designed to capture latent value in overlooked market niches while prioritizing downside protection, income consistency, and return performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Section - Dark Background */}
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
        <section className="py-20 bg-silver-mist/5 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-8">
                Ready to Explore Investment Opportunities?
              </h2>
              <p className="text-lg text-silver-mist/80 leading-relaxed mb-12">
                Connect with our investment professionals to learn more about current offerings and qualification requirements. Access detailed investment information through our investor portal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg"
                  className="bg-gold-accent hover:bg-gold-accent/90 text-silver-mist px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm backdrop-blur-sm"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-silver-mist/40 text-silver-mist hover:bg-silver-mist hover:text-obsidian hover:border-garnet-edge px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm backdrop-blur-sm bg-transparent"
                  onClick={() => window.location.href = '/contact'}
                >
                  Schedule a Call
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

export default Investing;