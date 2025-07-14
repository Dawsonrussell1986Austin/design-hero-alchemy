import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Users, Award, CheckCircle } from "lucide-react";

const WebinarRegistration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative min-h-[85vh] overflow-hidden">
        {/* Background texture overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-garnet-edge/10 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[85vh] px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="space-y-4 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-6xl lg:text-8xl font-light text-silver-mist leading-[0.9] tracking-tight">
                Master Real Estate
              </h1>
              <h1 className="text-6xl lg:text-8xl font-light leading-[0.9] tracking-tight">
                <span className="text-accent-brown">Credit</span> <span className="text-garnet-edge">Investing</span>
              </h1>
            </div>
            
            <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl lg:text-2xl text-silver-mist/80 max-w-4xl mx-auto leading-relaxed font-light">
                Join industry experts for an exclusive webinar on 
                <span className="text-garnet-edge"> private credit strategies</span> that deliver consistent returns.
              </p>
            </div>

            {/* Webinar Details */}
            <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-background/20 backdrop-blur-md border border-silver-mist/20 rounded-2xl p-8 hover:bg-background/30 transition-all duration-300">
                <Calendar className="h-12 w-12 text-accent-brown mx-auto mb-4" />
                <h3 className="text-xl font-light text-silver-mist mb-2">Date</h3>
                <p className="text-silver-mist/80">March 15, 2024</p>
              </div>
              
              <div className="bg-background/20 backdrop-blur-md border border-silver-mist/20 rounded-2xl p-8 hover:bg-background/30 transition-all duration-300">
                <Clock className="h-12 w-12 text-accent-brown mx-auto mb-4" />
                <h3 className="text-xl font-light text-silver-mist mb-2">Time</h3>
                <p className="text-silver-mist/80">2:00 PM EST</p>
              </div>
              
              <div className="bg-background/20 backdrop-blur-md border border-silver-mist/20 rounded-2xl p-8 hover:bg-background/30 transition-all duration-300">
                <Users className="h-12 w-12 text-accent-brown mx-auto mb-4" />
                <h3 className="text-xl font-light text-silver-mist mb-2">Duration</h3>
                <p className="text-silver-mist/80">60 Minutes</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 group rounded-sm"
              >
                Register Now - Free
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-silver-mist/40 text-silver-mist hover:bg-silver-mist hover:text-obsidian hover:border-garnet-edge px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm backdrop-blur-sm"
              >
                Download Agenda
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form Section */}
      <div className="relative z-10 bg-silver-mist py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-light text-obsidian mb-8 leading-tight">
                Secure Your <span className="text-accent-brown">Spot</span>
              </h2>
              <p className="text-2xl text-deep-petrol leading-relaxed max-w-3xl mx-auto font-light">
                Limited to 500 participants. Register today to guarantee your access to exclusive insights.
              </p>
            </div>

            {/* Registration Form */}
            <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-3xl p-12 hover:bg-background/80 transition-all duration-500">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="firstName" className="block text-lg font-light text-obsidian mb-3">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      className="w-full bg-cream border-deep-petrol/30 focus:border-accent-brown focus:ring-accent-brown/20 text-obsidian text-lg py-6 rounded-xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-lg font-light text-obsidian mb-3">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      className="w-full bg-cream border-deep-petrol/30 focus:border-accent-brown focus:ring-accent-brown/20 text-obsidian text-lg py-6 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-light text-obsidian mb-3">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-cream border-deep-petrol/30 focus:border-accent-brown focus:ring-accent-brown/20 text-obsidian text-lg py-6 rounded-xl"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="company" className="block text-lg font-light text-obsidian mb-3">
                      Company/Organization *
                    </label>
                    <Input
                      id="company"
                      type="text"
                      required
                      className="w-full bg-cream border-deep-petrol/30 focus:border-accent-brown focus:ring-accent-brown/20 text-obsidian text-lg py-6 rounded-xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="title" className="block text-lg font-light text-obsidian mb-3">
                      Job Title *
                    </label>
                    <Input
                      id="title"
                      type="text"
                      required
                      className="w-full bg-cream border-deep-petrol/30 focus:border-accent-brown focus:ring-accent-brown/20 text-obsidian text-lg py-6 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-lg font-light text-obsidian mb-3">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    className="w-full bg-cream border-deep-petrol/30 focus:border-accent-brown focus:ring-accent-brown/20 text-obsidian text-lg py-6 rounded-xl"
                  />
                </div>

                <div className="text-center">
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-16 py-6 text-xl font-medium tracking-wide transition-all duration-300 hover:scale-110 rounded-xl shadow-2xl"
                  >
                    Register for Free Webinar
                  </Button>
                  <p className="text-sm text-deep-petrol/70 mt-4">
                    By registering, you agree to receive webinar updates and relevant content from Oak Real Estate Partners.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="relative py-32 bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-garnet-edge/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-7xl font-light text-silver-mist mb-12 leading-tight">
                What You'll <span className="text-accent-brown">Learn</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="bg-background/20 backdrop-blur-md border border-silver-mist/20 rounded-2xl p-10 hover:bg-background/30 transition-all duration-300">
                <CheckCircle className="h-12 w-12 text-accent-brown mb-6" />
                <h3 className="text-2xl font-light text-silver-mist mb-6">Market Opportunities</h3>
                <p className="text-silver-mist/80 leading-relaxed font-light text-lg">
                  Discover current trends and emerging opportunities in the private credit real estate market.
                </p>
              </div>
              
              <div className="bg-background/20 backdrop-blur-md border border-silver-mist/20 rounded-2xl p-10 hover:bg-background/30 transition-all duration-300">
                <CheckCircle className="h-12 w-12 text-accent-brown mb-6" />
                <h3 className="text-2xl font-light text-silver-mist mb-6">Risk Management</h3>
                <p className="text-silver-mist/80 leading-relaxed font-light text-lg">
                  Learn proven strategies for mitigating risk while maximizing returns in real estate credit investments.
                </p>
              </div>
              
              <div className="bg-background/20 backdrop-blur-md border border-silver-mist/20 rounded-2xl p-10 hover:bg-background/30 transition-all duration-300">
                <CheckCircle className="h-12 w-12 text-accent-brown mb-6" />
                <h3 className="text-2xl font-light text-silver-mist mb-6">Portfolio Diversification</h3>
                <p className="text-silver-mist/80 leading-relaxed font-light text-lg">
                  Understand how real estate credit can enhance your investment portfolio's risk-adjusted returns.
                </p>
              </div>
              
              <div className="bg-background/20 backdrop-blur-md border border-silver-mist/20 rounded-2xl p-10 hover:bg-background/30 transition-all duration-300">
                <CheckCircle className="h-12 w-12 text-accent-brown mb-6" />
                <h3 className="text-2xl font-light text-silver-mist mb-6">Due Diligence Process</h3>
                <p className="text-silver-mist/80 leading-relaxed font-light text-lg">
                  Master the essential steps for evaluating real estate credit opportunities and sponsors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Speaker Section */}
      <div className="relative z-10 bg-silver-mist py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-light text-obsidian mb-8 leading-tight">
                Featured <span className="text-accent-brown">Speakers</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-2xl p-10 hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center">
                <div className="w-24 h-24 bg-accent-brown/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-12 w-12 text-accent-brown" />
                </div>
                <h3 className="text-2xl font-light text-obsidian mb-4">John Smith</h3>
                <p className="text-lg text-accent-brown mb-4">Managing Partner, Oak Real Estate Partners</p>
                <p className="text-deep-petrol leading-relaxed">
                  25+ years in commercial real estate finance with over $5B in transaction experience.
                </p>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-2xl p-10 hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center">
                <div className="w-24 h-24 bg-accent-brown/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-12 w-12 text-accent-brown" />
                </div>
                <h3 className="text-2xl font-light text-obsidian mb-4">Sarah Johnson</h3>
                <p className="text-lg text-accent-brown mb-4">Head of Investment Strategy</p>
                <p className="text-deep-petrol leading-relaxed">
                  Former institutional investor with expertise in alternative investments and portfolio optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-garnet-edge/10 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-6xl lg:text-8xl font-light text-silver-mist mb-16 leading-tight">
              Don't Miss <span className="text-garnet-edge">Out</span>
            </h2>
            
            <div className="bg-background/20 backdrop-blur-xl border border-silver-mist/20 rounded-3xl p-16 mb-16 hover:bg-background/30 transition-all duration-500">
              <p className="text-2xl text-silver-mist/90 leading-relaxed font-light mb-8">
                Join 500+ real estate professionals who are already registered for this exclusive webinar.
              </p>
              <p className="text-xl font-light text-garnet-edge leading-relaxed mb-8">
                Limited spots remaining. Secure your place today.
              </p>
              <div className="text-4xl font-light text-accent-brown mb-4">March 15, 2024 • 2:00 PM EST</div>
            </div>
            
            <Button 
              size="lg"
              className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-16 py-6 text-xl font-medium tracking-wide transition-all duration-300 hover:scale-110 rounded-sm shadow-2xl"
            >
              Register Now - It's Free
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WebinarRegistration;