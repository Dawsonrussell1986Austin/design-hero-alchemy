import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { OrganizationSchema, BreadcrumbSchema } from "@/components/StructuredData";

const Leadership = () => {
  const leadershipTeam = [
    {
      name: "Gary Bechtel",
      title: "Chief Executive Officer",
      image: "/lovable-uploads/gary-bechtel-headshot.jpg",
      bio: "Gary Bechtel is Chief Executive Officer of Red Oak Capital Holdings, responsible for managing the national commercial real estate finance firm's lending operations and business development efforts for the company, based in Charlotte, North Carolina."
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
      name: "Matthew Webster",
      title: "Executive Vice President / Chief Credit Officer", 
      image: "/lovable-uploads/matt-webster-headshot.jpg",
      bio: "Matthew leads credit analysis and risk management, ensuring all lending decisions meet Oak's disciplined underwriting standards."
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
      image: "/lovable-uploads/tom-mcgovern-headshot.jpg",
      bio: "Thomas oversees all financial operations, reporting, and strategic financial planning to support Oak's continued growth and stability."
    },
    {
      name: "Kevin P. Kennedy",
      title: "Chief Sales and Distribution Officer",
      image: "/lovable-uploads/kevin-kennedy-headshot.jpg",
      bio: "Kevin P. Kennedy is a Managing Principal and Chief Sales and Distribution officer with Red Oak Capital Holdings, responsible for capital acquisition, platform distribution and broker dealer-relationships for the firm's offerings."
    },
    {
      name: "Brook Scardina",
      title: "Capital Markets & Investments",
      image: "/lovable-uploads/54494c6c-43d1-47ee-bdba-724c370778b3.png",
      bio: "Brook Scardina leads Capital Markets & Investments for Oak Real Estate Partners, where he leads the external capital markets strategy for the national fund manager focused on the institutional investment sector. Based in Irvine, California."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Leadership Team"
        description="Meet Oak Real Estate Partners' experienced leadership team with $18B+ in transaction experience. Executives in commercial real estate lending, investment management, and strategic development."
        canonicalUrl="/leadership"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://oakrealestatepartners.com/' },
          { name: 'Leadership', url: 'https://oakrealestatepartners.com/leadership' }
        ]}
      />
      {/* Navigation */}
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Our Firm", href: "/" },
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
                <div className="space-y-8 text-abyss">
                  <h1 className="text-3xl lg:text-4xl font-display font-medium text-abyss leading-tight">
                    Operational Expertise Backed by <span className="text-gold-accent">$18B+<sup>³</sup> in Transactions</span>
                  </h1>
                  <p className="text-lg lg:text-xl font-body font-normal text-abyss leading-relaxed">
                    Oak's leadership team brings unmatched experience and depth to our real estate lending operations, 
                    investment management, and long-term strategic initiatives. We are seasoned operators, not theorists — 
                    practitioners who have executed on more than $18 billion in transaction volume over decades, across 
                    cycles, geographies, and asset classes.
                  </p>
                  
                  <p className="text-xs text-abyss/60 font-sans mb-6">
                    ³ Represents experience of current management team, whether at Oak or predecessor firms.
                  </p>
                  
                  <div className="pt-4">
                    <Button 
                      size="lg"
                      className="bg-gold-accent hover:bg-gold-accent/90 text-silver-mist px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
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
                      src="/lovable-uploads/a62fb2ce-f8ae-45b6-be2e-0063bf99e0c0.png"
                      alt="Modern conference room with green chairs"
                      className="w-full h-[600px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-abyss/30 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Glassmorphic Values Card Overlay */}
                  <div className="absolute inset-x-0 top-8 flex justify-center">
                     <div className="bg-silver-mist/20 backdrop-blur-md rounded-lg border border-silver-mist/30 p-8 max-w-lg shadow-lg">
                       <div className="space-y-6">
                          <div className="text-center">
                            <h4 className="text-lg font-medium text-garnet-edge mb-2">Operational Excellence</h4>
                            <p className="text-cream text-base leading-relaxed">
                              Proven execution across all business functions
                            </p>
                          </div>
                          <div className="text-center">
                            <h4 className="text-lg font-medium text-garnet-edge mb-2">Disciplined Approach</h4>
                            <p className="text-cream text-base leading-relaxed">
                              Consistent methodology for all stakeholders
                            </p>
                          </div>
                          <div className="text-center">
                            <h4 className="text-lg font-medium text-garnet-edge mb-2">Trusted Partnership</h4>
                            <p className="text-cream text-base leading-relaxed">
                              Reliable service for borrowers and investors
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
      <div className="py-20 bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-display font-light text-silver-mist mb-8">
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
                    } else if (leader.name === "Matthew Webster") {
                      window.location.href = "/leadership/matthew-webster";
                    } else if (leader.name === "Kevin P. Kennedy") {
                      window.location.href = "/leadership/kevin-kennedy";
                    } else if (leader.name === "Raymond T. Davis") {
                      window.location.href = "/leadership/raymond-davis";
                    } else if (leader.name === "Robert R. Kaplan, Jr.") {
                      window.location.href = "/leadership/robert-kaplan";
                    } else if (leader.name === "Thomas A. McGovern") {
                      window.location.href = "/leadership/thomas-mcgovern";
                    } else if (leader.name === "Brook Scardina") {
                      window.location.href = "/leadership/brook-scardina";
                    }
                  }}
                >
                  <div className="aspect-square bg-gradient-to-br from-graphite-fog to-graphite-fog p-8 flex items-center justify-center">
                    {leader.image && (leader.name === "Gary Bechtel" || leader.name === "Raymond T. Davis" || leader.name === "Paul Cleary" || leader.name === "Matthew Webster" || leader.name === "Kevin P. Kennedy" || leader.name === "Robert R. Kaplan, Jr." || leader.name === "Thomas A. McGovern" || leader.name === "Brook Scardina") ? (
                      <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className={`w-full h-full object-cover rounded-sm ${leader.name === "Thomas A. McGovern" || leader.name === "Kevin P. Kennedy" || leader.name === "Matthew Webster" || leader.name === "Gary Bechtel" ? "filter grayscale" : ""} ${leader.name === "Kevin P. Kennedy" || leader.name === "Matthew Webster" || leader.name === "Gary Bechtel" ? "object-top" : ""} ${leader.name === "Thomas A. McGovern" ? "object-[center_20%]" : ""}`}
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
                      <p className="text-gold-accent font-medium text-sm uppercase tracking-wide">
                        {leader.title}
                      </p>
                    </div>
                    <p className="text-silver-mist/80 text-sm leading-relaxed">
                      {leader.bio}
                    </p>
                    <p className="text-garnet-edge text-xs italic">
                      Click to read full bio →
                    </p>
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
            <h2 className="text-3xl lg:text-4xl font-display font-light text-abyss mb-8">
              Ready to Work with Our Team?
            </h2>
            <p className="text-lg text-abyss/80 leading-relaxed mb-12">
              Connect with Oak's leadership team to discuss how our experience and disciplined approach 
              can benefit your real estate financing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-gold-accent hover:bg-gold-accent/90 text-silver-mist px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Leadership
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-abyss text-abyss hover:bg-abyss hover:text-silver-mist hover:border-abyss px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm"
                onClick={() => window.location.href = '/about'}
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