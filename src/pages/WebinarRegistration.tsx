import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Users, Award, CheckCircle, Play } from "lucide-react";

const WebinarRegistration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Two-Column Section */}
      <div className="relative min-h-screen py-20">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/770999c1-3aa6-42b7-8889-bd354b357d1e.png"
            alt="Modern cityscape with geometric buildings"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="container mx-auto px-6 h-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 h-full items-start">
            
            {/* Left Column - Main Content */}
            <div className="space-y-12">
              {/* Hero Content */}
              <div className="space-y-8">
                <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <h1 className="text-5xl lg:text-7xl font-light text-silver-mist leading-[0.9] tracking-tight">
                    Master Real Estate
                  </h1>
                  <h1 className="text-5xl lg:text-7xl font-light leading-[0.9] tracking-tight">
                    <span className="text-accent-brown">Credit</span> <span className="text-garnet-edge">Investing</span>
                  </h1>
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <p className="text-xl text-silver-mist/80 leading-relaxed font-light">
                    Join industry experts for an exclusive webinar on 
                    <span className="text-garnet-edge"> private credit strategies</span> that deliver consistent returns.
                  </p>
                </div>
              </div>

              {/* Webinar Details */}
              <div className="grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="bg-background/20 backdrop-blur-md border border-silver-mist/20 rounded-xl p-6 text-center">
                  <Calendar className="h-8 w-8 text-accent-brown mx-auto mb-3" />
                  <h3 className="text-lg font-light text-silver-mist mb-1">Date</h3>
                  <p className="text-silver-mist/80 text-sm">August 15, 2025</p>
                </div>
                
                <div className="bg-background/20 backdrop-blur-md border border-silver-mist/20 rounded-xl p-6 text-center">
                  <Clock className="h-8 w-8 text-accent-brown mx-auto mb-3" />
                  <h3 className="text-lg font-light text-silver-mist mb-1">Time</h3>
                  <p className="text-silver-mist/80 text-sm">2:00 PM EST</p>
                </div>
                
                <div className="bg-background/20 backdrop-blur-md border border-silver-mist/20 rounded-xl p-6 text-center">
                  <Users className="h-8 w-8 text-accent-brown mx-auto mb-3" />
                  <h3 className="text-lg font-light text-silver-mist mb-1">Duration</h3>
                  <p className="text-silver-mist/80 text-sm">60 Minutes</p>
                </div>
              </div>

              {/* What You'll Learn */}
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-3xl lg:text-4xl font-light text-silver-mist">
                  What You'll <span className="text-accent-brown">Learn</span>
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent-brown mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-light text-silver-mist mb-2">Market Opportunities</h3>
                      <p className="text-silver-mist/70 text-sm">Discover current trends and emerging opportunities in the private credit real estate market.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent-brown mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-light text-silver-mist mb-2">Risk Management</h3>
                      <p className="text-silver-mist/70 text-sm">Learn proven strategies for mitigating risk while maximizing returns.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent-brown mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-light text-silver-mist mb-2">Portfolio Diversification</h3>
                      <p className="text-silver-mist/70 text-sm">Understand how real estate credit enhances risk-adjusted returns.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent-brown mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-light text-silver-mist mb-2">Due Diligence Process</h3>
                      <p className="text-silver-mist/70 text-sm">Master essential steps for evaluating credit opportunities.</p>
                    </div>
                  </div>
                </div>
              </div>


              {/* Preview Button */}
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-silver-mist/40 text-silver-mist hover:bg-silver-mist hover:text-obsidian hover:border-garnet-edge px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 rounded-sm backdrop-blur-sm"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Preview Webinar Content
                </Button>
              </div>
            </div>

            {/* Right Column - Registration Form */}
            <div className="lg:pl-8">
              <div className="bg-obsidian/90 border border-silver-mist/30 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl lg:text-3xl font-light text-silver-mist mb-3">
                    Register <span className="text-accent-brown">Free</span>
                  </h3>
                </div>

                <form className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="First Name *"
                      required
                      className="w-full bg-obsidian/20 border-silver-mist/30 focus:border-accent-brown focus:ring-accent-brown/20 text-silver-mist placeholder:text-silver-mist/50 py-3 rounded-lg backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <Input
                      type="text"
                      placeholder="Last Name *"
                      required
                      className="w-full bg-obsidian/20 border-silver-mist/30 focus:border-accent-brown focus:ring-accent-brown/20 text-silver-mist placeholder:text-silver-mist/50 py-3 rounded-lg backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      required
                      className="w-full bg-obsidian/20 border-silver-mist/30 focus:border-accent-brown focus:ring-accent-brown/20 text-silver-mist placeholder:text-silver-mist/50 py-3 rounded-lg backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <Input
                      type="text"
                      placeholder="Company *"
                      required
                      className="w-full bg-obsidian/20 border-silver-mist/30 focus:border-accent-brown focus:ring-accent-brown/20 text-silver-mist placeholder:text-silver-mist/50 py-3 rounded-lg backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <Input
                      type="text"
                      placeholder="Job Title"
                      className="w-full bg-obsidian/20 border-silver-mist/30 focus:border-accent-brown focus:ring-accent-brown/20 text-silver-mist placeholder:text-silver-mist/50 py-3 rounded-lg backdrop-blur-sm"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-accent-brown hover:bg-accent-brown/90 text-silver-mist py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-lg shadow-xl mt-6"
                  >
                    Register Now
                  </Button>

                  <p className="text-xs text-silver-mist/50 text-center mt-4">
                    By registering, you agree to receive webinar updates from Oak Real Estate Partners.
                  </p>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WebinarRegistration;