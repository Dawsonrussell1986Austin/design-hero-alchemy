import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const Leadership = () => {
  const leadershipTeam = [
    {
      name: "Gary Bechtel",
      title: "Chief Executive Officer, Managing Principal",
      image: "/lovable-uploads/530fe815-0792-49e8-86f6-0355f22308eb.png",
      bio: "Gary Bechtel is Chief Executive Officer & Managing Principal of Red Oak Capital Holdings, responsible for managing the national commercial real estate finance firm's lending operations and business development efforts. He operates out of the firm's Grand Rapids, Michigan office."
    },
    {
      name: "Raymond T. Davis", 
      title: "President & Chief Strategy Officer",
      image: "/lovable-uploads/837db76c-f393-41f0-aeeb-03c5f011e440.png",
      bio: "Raymond leads strategic initiatives and corporate development, bringing decades of experience in real estate finance and investment management."
    },
    {
      name: "Paul Cleary",
      title: "Chief Operating Officer",
      image: "/lovable-uploads/4c4da614-0fa8-433e-a2a3-077a4b57da10.png", 
      bio: "Paul manages day-to-day operations and ensures operational excellence across all business units and geographic markets."
    },
    {
      name: "Robert R. Kaplan, Jr.",
      title: "Chief Legal Officer and Executive Vice President for Corporate Development",
      image: "/lovable-uploads/702c4778-1bc8-4b26-9ac4-3f885d228dc2.png",
      bio: "Robert leads all legal affairs and corporate development initiatives, providing strategic counsel on complex transactions and regulatory matters."
    },
    {
      name: "Thomas A. McGovern", 
      title: "Chief Financial Officer",
      image: "/lovable-uploads/702c4778-1bc8-4b26-9ac4-3f885d228dc2.png",
      bio: "Thomas oversees all financial operations, reporting, and strategic financial planning to support Oak's continued growth and stability."
    },
    {
      name: "Matthew Webster",
      title: "Chief Credit Officer, Senior Vice President", 
      image: "/lovable-uploads/702c4778-1bc8-4b26-9ac4-3f885d228dc2.png",
      bio: "Matthew leads credit analysis and risk management, ensuring all lending decisions meet Oak's disciplined underwriting standards."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-light text-silver-mist leading-tight tracking-tight mb-8">
              <span className="text-accent-brown">Proven Experience.</span>{" "}
              <span className="text-garnet-edge">Disciplined Execution.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-silver-mist/80 max-w-3xl mx-auto leading-relaxed font-light">
              Where expertise meets accountability—delivering results by action.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-20 bg-silver-mist/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8 text-silver-mist/90">
            <p className="text-lg leading-relaxed">
              Oak's leadership team brings unmatched experience and depth across our real estate lending operations, 
              investment management, and the company's long-term strategic initiatives. We are seasoned operators, 
              not theorists—practitioners who have executed more than $218 billion over decades in transactions across 
              cycles, geographies, and asset classes.
            </p>
            
            <p className="text-lg leading-relaxed">
              We take our fiduciary responsibility seriously. Every investment decision is guided by a disciplined 
              mindset and a shared commitment to protect investor capital.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Values */}
      <div className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-12 text-center">
              Leadership Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4 text-center">
                <h3 className="text-xl font-medium text-garnet-edge">Control and Stability</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  Maintaining disciplined oversight and consistent execution across all operations.
                </p>
              </div>
              <div className="space-y-4 text-center">
                <h3 className="text-xl font-medium text-garnet-edge">Disciplined Risk-Taking</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  Making calculated decisions based on thorough analysis and market expertise.
                </p>
              </div>
              <div className="space-y-4 text-center">
                <h3 className="text-xl font-medium text-garnet-edge">Predictability and Reliability</h3>
                <p className="text-silver-mist/80 leading-relaxed">
                  Delivering consistent results through proven processes and accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="py-20 bg-obsidian/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-8 text-center">
              Meet the Team
            </h2>
            <p className="text-lg text-silver-mist/80 leading-relaxed mb-16 text-center max-w-4xl mx-auto">
              Profiles include decades of industry experience, roles across the capital stack, and a consistent 
              track record of delivering value across market environments.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((leader, index) => (
                <div 
                  key={leader.name}
                  className="bg-silver-mist/5 rounded-sm border border-garnet-edge/20 overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square bg-gradient-to-br from-graphite-fog to-deep-petrol p-8 flex items-center justify-center">
                    {leader.image && (leader.name === "Gary Bechtel" || leader.name === "Raymond T. Davis" || leader.name === "Paul Cleary") ? (
                      <img src={leader.image} alt={leader.name} className="w-full h-full object-cover rounded-sm" />
                    ) : (
                      <div className="w-full h-full bg-silver-mist/10 rounded-sm flex items-center justify-center">
                        <span className="text-silver-mist/60 text-sm">Photo</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-medium text-silver-mist mb-2">{leader.name}</h3>
                      <p className="text-accent-brown font-medium text-sm uppercase tracking-wide">
                        {leader.title}
                      </p>
                    </div>
                    <p className="text-silver-mist/80 text-sm leading-relaxed">
                      {leader.bio}
                    </p>
                    <div className="flex space-x-3 pt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-garnet-edge hover:text-silver-mist hover:bg-garnet-edge/20 p-2"
                      >
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-garnet-edge hover:text-silver-mist hover:bg-garnet-edge/20 p-2"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Leader Detail - Gary Bechtel */}
      <div className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-silver-mist/5 rounded-sm border border-garnet-edge/20 p-8 lg:p-12">
              <div className="grid lg:grid-cols-5 gap-12 items-start">
                <div className="lg:col-span-2">
                  <div className="aspect-[4/5] bg-gradient-to-br from-graphite-fog to-deep-petrol rounded-sm p-4">
                    <img 
                      src="/lovable-uploads/530fe815-0792-49e8-86f6-0355f22308eb.png"
                      alt="Gary Bechtel"
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </div>
                </div>
                <div className="lg:col-span-3 space-y-6">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-2xl lg:text-3xl font-light text-accent-brown">Gary Bechtel</h3>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-garnet-edge hover:text-silver-mist hover:bg-garnet-edge/20 p-2"
                        >
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-garnet-edge hover:text-silver-mist hover:bg-garnet-edge/20 p-2"
                        >
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-silver-mist font-medium mb-6 uppercase tracking-wide">
                      Chief Executive Officer, Managing Principal
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-silver-mist/80 leading-relaxed">
                    <p>
                      Gary Bechtel is Chief Executive Officer & Managing Principal of Red Oak Capital Holdings, 
                      responsible for managing the national commercial real estate finance firm's lending operations 
                      and business development efforts. He operates out of the firm's Grand Rapids, Michigan office.
                    </p>
                    
                    <p>
                      In addition to his duties with Red Oak, Gary heads the investment management leadership team for 
                      Oak Real Estate Partners. As Managing Principal and CEO, he has direct oversight of all loan portfolios 
                      and operations for the firm, a national, multi-fund manager focused on the institutional investment sector.
                    </p>
                    
                    <p>
                      Over the course of his nearly 40-year career, Gary has been involved in the origination, underwriting, 
                      structuring, placement and closing of more than $10 billion in commercial debt transactions, utilizing 
                      various financing structures including permanent, bridge, equity, mezzanine, and construction loans.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-silver-mist/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-8">
              Ready to Work with Our Team?
            </h2>
            <p className="text-lg text-silver-mist/80 leading-relaxed mb-12">
              Connect with Oak's leadership team to discuss how our experience and disciplined approach 
              can benefit your investment strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
              >
                Contact Leadership
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-obsidian/40 text-obsidian hover:bg-obsidian hover:text-silver-mist hover:border-garnet-edge px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm backdrop-blur-sm"
              >
                View Our Approach
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

export default Leadership;