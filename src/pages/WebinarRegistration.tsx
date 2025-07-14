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
        <div className="container mx-auto px-6 h-full">
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

              {/* Speakers */}
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <h2 className="text-3xl lg:text-4xl font-light text-silver-mist">
                  Featured <span className="text-accent-brown">Speakers</span>
                </h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/20 backdrop-blur-md border border-silver-mist/20 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border-2 border-accent-brown/30">
                      <img 
                        src="/lovable-uploads/c40701c4-be9c-4192-b6ea-12fc78ad33be.png" 
                        alt="Matthew Webster"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-light text-silver-mist mb-1">Matthew Webster</h3>
                    <p className="text-sm text-accent-brown mb-2">Chief Credit Officer</p>
                    <p className="text-xs text-silver-mist/70">Senior Vice President</p>
                  </div>
                  
                  <div className="bg-background/20 backdrop-blur-md border border-silver-mist/20 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border-2 border-accent-brown/30">
                      <img 
                        src="/lovable-uploads/3cc6ebb2-ef33-4f7e-9d1e-8c49c2328871.png" 
                        alt="Raymond T. Davis"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-light text-silver-mist mb-1">Raymond T. Davis</h3>
                    <p className="text-sm text-accent-brown mb-2">President & CSO</p>
                    <p className="text-xs text-silver-mist/70">Chief Strategy Officer</p>
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
              <div className="bg-background/30 backdrop-blur-xl border border-silver-mist/20 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl lg:text-3xl font-light text-silver-mist mb-3">
                    Register <span className="text-accent-brown">Free</span>
                  </h3>
                  <p className="text-silver-mist/70 text-sm">
                    Limited to 500 participants
                  </p>
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

                {/* Urgency Element */}
                <div className="mt-6 p-4 bg-garnet-edge/20 backdrop-blur-sm border border-garnet-edge/30 rounded-lg text-center">
                  <p className="text-sm text-silver-mist font-medium">
                    ⏰ Only <span className="text-accent-brown">127 spots</span> remaining
                  </p>
                </div>
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