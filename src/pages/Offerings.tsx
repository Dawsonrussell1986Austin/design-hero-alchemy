import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { TrendingUp, PieChart, Building2, Landmark, CandlestickChart, BarChart3 } from "lucide-react";

const Offerings = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Offerings" }
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
                <p className="text-lg lg:text-xl font-body font-medium text-accent-brown mb-6">
                  Institutional-quality opportunities. Transparent structures. Professional management.
                </p>
                <p className="text-lg lg:text-xl font-body font-normal text-obsidian/80 leading-relaxed mb-8">
                  Oak offers a curated selection of investment vehicles designed for sophisticated investors seeking consistent returns through disciplined real estate credit strategies. Each offering undergoes rigorous due diligence and structural analysis.
                </p>
                
                {/* Investment Focus - Under text */}
                <div className="bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-obsidian mb-4 pb-2 border-b border-obsidian/20">
                    Our Investment Philosophy
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Rigorous underwriting and due diligence</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Capital preservation focused structures</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Transparent reporting and investor communication</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-obsidian/80 leading-relaxed">Diversified portfolio construction</p>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg"
                      className="bg-accent-brown hover:bg-accent-brown/90 text-white px-8 py-3 font-medium"
                    >
                      Investor Login
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-2 border-accent-brown text-accent-brown hover:bg-accent-brown hover:text-white px-8 py-3 font-medium"
                      onClick={() => window.location.href = '/webinar'}
                    >
                      Investor Presentation
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Image with Overlay Cards */}
              <div className="relative h-full">
                <img 
                  src="/lovable-uploads/2ee5069e-2fc0-4c5d-aff9-ac1b38fe9635.png"
                  alt="Investment offerings illustration"
                  className="w-full h-full object-cover rounded-lg shadow-xl min-h-[600px]"
                />
                
                {/* Glassmorphic Overlay Cards */}
                <div className="absolute inset-0 flex flex-col justify-center space-y-4 p-6">
                  <h2 className="text-xl font-bold text-white text-center drop-shadow-lg mb-2">Investment Structures</h2>
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-4 shadow-lg hover:bg-white/30 transition-all duration-300">
                    <h3 className="text-lg font-bold text-white text-center drop-shadow-lg">Regulation D 506(c)</h3>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-4 shadow-lg hover:bg-white/30 transition-all duration-300">
                    <h3 className="text-lg font-bold text-white text-center drop-shadow-lg">Regulation A+ Tier II</h3>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-4 shadow-lg hover:bg-white/30 transition-all duration-300">
                    <h3 className="text-lg font-bold text-white text-center drop-shadow-lg">Private Placements</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Contact Section - Dark Background */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <section className="py-20 bg-silver-mist/5 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-8">
                Ready to Explore Opportunities?
              </h2>
              <p className="text-lg text-silver-mist/80 leading-relaxed mb-12">
                Connect with our investment professionals to learn more about current offerings and qualification requirements for institutional-quality real estate credit investments.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg"
                  className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
                >
                  Investor Login
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-silver-mist/40 text-silver-mist hover:bg-silver-mist hover:text-obsidian hover:border-garnet-edge px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm backdrop-blur-sm bg-transparent"
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

export default Offerings;