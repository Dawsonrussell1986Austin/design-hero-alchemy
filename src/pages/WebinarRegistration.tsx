import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Users, CheckCircle, Play, Award } from "lucide-react";

const WebinarRegistration = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Webinar Registration" }
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
                    <Award className="w-4 h-4 mr-2" />
                    Exclusive Webinar
                  </span>
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-6 leading-tight">
                  Master Real Estate Credit Investing
                </h1>
                <p className="text-lg lg:text-xl font-body font-medium text-accent-brown mb-6">
                  Join industry experts for an exclusive webinar on private credit strategies that deliver consistent returns.
                </p>
                <p className="text-lg font-body text-obsidian/80 leading-relaxed mb-8">
                  Discover current market opportunities, proven risk management strategies, and essential due diligence processes that institutional investors use to maximize returns in commercial real estate credit.
                </p>
                
                {/* Webinar Details Cards */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-4 text-center shadow-sm">
                    <Calendar className="h-6 w-6 text-garnet-edge mx-auto mb-2" />
                    <h3 className="text-sm font-semibold text-obsidian mb-1">Date</h3>
                    <p className="text-xs text-obsidian/70">August 15, 2025</p>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-4 text-center shadow-sm">
                    <Clock className="h-6 w-6 text-garnet-edge mx-auto mb-2" />
                    <h3 className="text-sm font-semibold text-obsidian mb-1">Time</h3>
                    <p className="text-xs text-obsidian/70">2:00 PM EST</p>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-4 text-center shadow-sm">
                    <Users className="h-6 w-6 text-garnet-edge mx-auto mb-2" />
                    <h3 className="text-sm font-semibold text-obsidian mb-1">Duration</h3>
                    <p className="text-xs text-obsidian/70">60 Minutes</p>
                  </div>
                </div>

                {/* Preview Button */}
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-accent-brown text-accent-brown hover:bg-accent-brown hover:text-white px-8 py-3 font-medium"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Preview Webinar Content
                </Button>
              </div>
              
              {/* Registration Form */}
              <div className="relative">
                <div className="bg-white/80 backdrop-blur-sm border border-obsidian/20 rounded-lg p-8 shadow-xl">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-display font-medium text-obsidian mb-2">
                      Register Free
                    </h3>
                    <p className="text-sm text-obsidian/70">
                      Secure your spot in this exclusive presentation
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="First Name *"
                        required
                        className="w-full bg-white border-obsidian/20 focus:border-accent-brown focus:ring-accent-brown/20 text-obsidian placeholder:text-obsidian/50 py-3"
                      />
                    </div>

                    <div>
                      <Input
                        type="text"
                        placeholder="Last Name *"
                        required
                        className="w-full bg-white border-obsidian/20 focus:border-accent-brown focus:ring-accent-brown/20 text-obsidian placeholder:text-obsidian/50 py-3"
                      />
                    </div>

                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address *"
                        required
                        className="w-full bg-white border-obsidian/20 focus:border-accent-brown focus:ring-accent-brown/20 text-obsidian placeholder:text-obsidian/50 py-3"
                      />
                    </div>

                    <div>
                      <Input
                        type="text"
                        placeholder="Company *"
                        required
                        className="w-full bg-white border-obsidian/20 focus:border-accent-brown focus:ring-accent-brown/20 text-obsidian placeholder:text-obsidian/50 py-3"
                      />
                    </div>

                    <div>
                      <Input
                        type="text"
                        placeholder="Job Title"
                        className="w-full bg-white border-obsidian/20 focus:border-accent-brown focus:ring-accent-brown/20 text-obsidian placeholder:text-obsidian/50 py-3"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-4 text-lg font-medium mt-6"
                    >
                      Register Now
                    </Button>

                    <p className="text-xs text-obsidian/50 text-center mt-4">
                      By registering, you agree to receive webinar updates from Oak Real Estate Partners.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* What You'll Learn Section - Dark Background */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <section className="py-20 bg-silver-mist/5 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-display font-medium text-silver-mist mb-6">
                  What You'll Learn
                </h2>
                <p className="text-xl text-silver-mist/80 leading-relaxed max-w-4xl mx-auto">
                  Gain exclusive insights from industry professionals with decades of experience in commercial real estate credit.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent-brown mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-silver-mist mb-3">Market Opportunities</h3>
                      <p className="text-silver-mist/80 leading-relaxed">
                        Discover current trends and emerging opportunities in the private credit real estate market with real-world case studies.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent-brown mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-silver-mist mb-3">Risk Management</h3>
                      <p className="text-silver-mist/80 leading-relaxed">
                        Learn proven strategies for mitigating risk while maximizing returns through disciplined underwriting processes.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent-brown mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-silver-mist mb-3">Portfolio Diversification</h3>
                      <p className="text-silver-mist/80 leading-relaxed">
                        Understand how real estate credit enhances risk-adjusted returns and fits into institutional portfolio allocation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent-brown mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-silver-mist mb-3">Due Diligence Process</h3>
                      <p className="text-silver-mist/80 leading-relaxed">
                        Master essential steps for evaluating credit opportunities including market analysis and borrower assessment.
                      </p>
                    </div>
                  </div>
                </div>
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

export default WebinarRegistration;