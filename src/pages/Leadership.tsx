import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
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
      image: "/lovable-uploads/95be19e9-56b5-4d13-963d-51e2ac72fa2b.png",
      bio: "Robert leads all legal affairs and corporate development initiatives, providing strategic counsel on complex transactions and regulatory matters."
    },
    {
      name: "Thomas A. McGovern", 
      title: "Chief Financial Officer",
      image: "/lovable-uploads/8751a90a-69d4-476a-9989-f106bb73f3e5.png",
      bio: "Thomas oversees all financial operations, reporting, and strategic financial planning to support Oak's continued growth and stability."
    },
    {
      name: "Matthew Webster",
      title: "Chief Credit Officer, Senior Vice President", 
      image: "/lovable-uploads/f5a3bb32-821d-40e0-bf1d-c02e5a2e29a9.png",
      bio: "Matthew leads credit analysis and risk management, ensuring all lending decisions meet Oak's disciplined underwriting standards."
    },
    {
      name: "Brook Scardina",
      title: "Managing Partner, Capital Markets & Investments",
      image: "/lovable-uploads/54494c6c-43d1-47ee-bdba-724c370778b3.png",
      bio: "Brook Scardina is Managing Partner, Capital Markets & Investments, for Oak Real Estate Partners (OREP), where he leads the external capital markets strategy for the national fund manager focused on the institutional investment sector."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Our Firm" },
          { label: "Leadership" }
        ]}
        quickLinks={[
          { label: "About us", href: "/about" }
        ]}
      />

      {/* Main Content Section - Cream Background */}
      <div className="bg-silver-mist">
        <div className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left Column - Content */}
                <div className="space-y-8 text-obsidian">
                  <h1 className="text-5xl lg:text-6xl font-light text-obsidian leading-tight">
                    Operational Expertise Backed by <span className="text-accent-brown">$218B in Transactions</span>
                  </h1>
                  <p className="text-lg lg:text-xl leading-relaxed">
                    Oak's leadership team brings unmatched experience and depth across our real estate lending operations, 
                    investment management, and the company's long-term strategic initiatives. We are seasoned operators, 
                    not theorists—practitioners who have executed more than $218 billion over decades in transactions across 
                    cycles, geographies, and asset classes.
                  </p>
                  
                  <p className="text-lg lg:text-xl leading-relaxed">
                    We take our fiduciary responsibility seriously. Every investment decision is guided by a disciplined 
                    mindset and a shared commitment to protect investor capital.
                  </p>
                  
                  <div className="pt-4">
                    <Button 
                      size="lg"
                      className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
                      onClick={() => window.location.href = "/contact"}
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
                
                {/* Right Column - Image with Glassmorphic Values Overlay */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="/lovable-uploads/7b292b7c-cd6f-4729-866e-b650516c9c44.png"
                      alt="Modern conference room"
                      className="w-full h-[600px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Glassmorphic Values Card Overlay */}
                  <div className="absolute inset-x-0 top-8 flex justify-center">
                    <div className="bg-silver-mist/10 backdrop-blur-md rounded-lg border border-silver-mist/20 p-8 max-w-lg">
                      <div className="space-y-6">
                        <div className="text-center">
                          <h4 className="text-lg font-medium text-garnet-edge mb-2">Control and Stability</h4>
                          <p className="text-silver-mist/90 text-base leading-relaxed">
                            Disciplined oversight and consistent execution.
                          </p>
                        </div>
                        <div className="text-center">
                          <h4 className="text-lg font-medium text-garnet-edge mb-2">Disciplined Risk-Taking</h4>
                          <p className="text-silver-mist/90 text-base leading-relaxed">
                            Calculated decisions based on thorough analysis.
                          </p>
                        </div>
                        <div className="text-center">
                          <h4 className="text-lg font-medium text-garnet-edge mb-2">Predictability and Reliability</h4>
                          <p className="text-silver-mist/90 text-base leading-relaxed">
                            Consistent results through proven processes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Team Cards */}
      <div className="py-20 bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-8">
                Meet the Team
              </h2>
              <p className="text-lg text-silver-mist/90 leading-relaxed max-w-4xl mx-auto">
                Profiles include decades of industry experience, roles across the capital stack, and a consistent 
                track record of delivering value across market environments.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((leader, index) => (
                <div 
                  key={leader.name}
                  className="bg-silver-mist/5 rounded-sm border border-garnet-edge/20 overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    if (leader.name === "Gary Bechtel") {
                      window.location.href = "/leadership/gary-bechtel";
                    } else if (leader.name === "Paul Cleary") {
                      window.location.href = "/leadership/paul-cleary";
                    } else if (leader.name === "Raymond T. Davis") {
                      window.location.href = "/leadership/raymond-davis";
                    } else if (leader.name === "Matthew Webster") {
                      window.location.href = "/leadership/matthew-webster";
                    } else if (leader.name === "Robert R. Kaplan, Jr.") {
                      window.location.href = "/leadership/robert-kaplan";
                    } else if (leader.name === "Thomas A. McGovern") {
                      window.location.href = "/leadership/thomas-mcgovern";
                    } else if (leader.name === "Brook Scardina") {
                      window.location.href = "/leadership/brook-scardina";
                    }
                  }}
                >
                  <div className="aspect-square bg-gradient-to-br from-graphite-fog to-deep-petrol p-8 flex items-center justify-center">
                    {leader.image && (leader.name === "Gary Bechtel" || leader.name === "Raymond T. Davis" || leader.name === "Paul Cleary" || leader.name === "Matthew Webster" || leader.name === "Robert R. Kaplan, Jr." || leader.name === "Thomas A. McGovern" || leader.name === "Brook Scardina") ? (
                      <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className={`w-full h-full object-cover rounded-sm ${leader.name === "Thomas A. McGovern" ? "filter grayscale" : ""}`}
                      />
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
                    <p className="text-garnet-edge text-xs italic">
                      Click to read full bio →
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


      {/* CTA Section */}
      <div className="py-20 bg-silver-mist">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-obsidian mb-8">
              Ready to Work with Our Team?
            </h2>
            <p className="text-lg text-obsidian/80 leading-relaxed mb-12">
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
                className="border-2 border-obsidian/40 text-obsidian hover:bg-obsidian hover:text-silver-mist hover:border-garnet-edge px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm"
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