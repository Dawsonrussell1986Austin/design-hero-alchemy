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
      bio: "39 years in institutional CRE lending. Former President of Money360, where he led growth from $24M to $850M in AUM. More than $10B in CRE originated over his career. Led Oak through its formation and through the 2022–2024 rate environment. Based in Charlotte, North Carolina. Responsible for national lending operations and business development."
    },
    {
      name: "Raymond T. Davis", 
      title: "President & Chief Strategy Officer",
      image: "/lovable-uploads/837db76c-f393-41f0-aeeb-03c5f011e440.png",
      bio: "More than 20 years in real estate finance, strategy, fund formation, and M&A. Leads strategic initiatives and corporate development. Drives expansion of the insurance SMA platform and institutional distribution."
    },
    {
      name: "Kevin P. Kennedy",
      title: "Chief Sales & Distribution Officer",
      image: "/lovable-uploads/kevin-kennedy-headshot.jpg",
      bio: "26 years at BlackRock, most recently as Managing Director and Divisional Sales Director. Leads capital acquisition, platform distribution, and broker-dealer relationships."
    },
    {
      name: "Paul Cleary",
      title: "Chief Operating Officer",
      image: "/lovable-uploads/4c4da614-0fa8-433e-a2a3-077a4b57da10.png", 
      bio: "Former COO of Money360. MBA, UC Irvine. JD, USD Law. Manages day-to-day operations across business units and geographies. Accountable for the systems and processes that enforce the Oak credit standard at scale."
    },
    {
      name: "Thomas A. McGovern", 
      title: "Chief Financial Officer",
      image: "/lovable-uploads/tom-mcgovern-headshot.jpg",
      bio: "More than 20 years on Wall Street, including roles at Nomura, Morgan Stanley, and Lehman Brothers. CPA. CFA. Oversees financial operations, reporting, and strategic financial planning."
    },
    {
      name: "Robert R. Kaplan, Jr.",
      title: "Chief Legal Officer & EVP, Corporate Development",
      image: "/lovable-uploads/95be19e9-56b5-4d13-963d-51e2ac72fa2b.png",
      bio: "More than $4B in securities transactions. Recognized by Best Lawyers since 2013. Expertise in securities law, regulatory compliance, and complex transaction structuring."
    },
    {
      name: "Matthew Webster",
      title: "EVP & Chief Credit Officer", 
      image: "/lovable-uploads/matt-webster-headshot.jpg",
      bio: "More than 30 years in CRE. Former Global Head of Real Estate Finance at HSBC. CFA. Leads credit analysis and risk management. Sets the framework every Oak loan is approved against: senior-secured, first-lien, 55–75% stabilized LTV."
    },
    {
      name: "Brook Scardina",
      title: "Capital Markets & Investments",
      image: "/lovable-uploads/54494c6c-43d1-47ee-bdba-724c370778b3.png",
      bio: "More than 20 years in institutional capital markets. Approximately $12B deployed over his career. Former roles with Georgia Tech Foundation and UNC Management Company. Leads external capital markets strategy for Oak's institutional sector. Based in Irvine, California."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Leadership Team"
        description="Eight market cycles. More than $25 billion in combined CRE financings. Meet the Oak Real Estate Partners leadership team."
        canonicalUrl="/leadership"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://oakrealestatepartners.com/' },
          { name: 'Leadership', url: 'https://oakrealestatepartners.com/leadership' }
        ]}
      />
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
        <Navigation />
      </div>
      
      <Breadcrumb 
        items={[
          { label: "Our Firm", href: "/" },
          { label: "Leadership" }
        ]}
        quickLinks={[
          { label: "About us", href: "/about" }
        ]}
      />

      {/* Hero Section */}
      <div className="bg-silver-mist">
        <div className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8 text-abyss">
                  <h1 className="text-3xl lg:text-4xl font-display font-medium text-abyss leading-tight">
                    The team has been <span className="text-gold-accent">here before.</span>
                  </h1>
                  <p className="text-lg lg:text-xl font-body font-normal text-abyss/80 leading-relaxed">
                    Eight market cycles. More than $25 billion in combined CRE financings across the team's prior careers at BlackRock, HSBC, Nomura, Morgan Stanley, and Lehman Brothers, among others.<sup>2</sup> At Oak: 33 full-cycle loans, 19% net IRR, 21.9% gross IRR, no principal losses to date.<sup>1</sup>
                  </p>
                  
                  {/* Stats Bar */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-cream/60 border border-abyss/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-display font-medium text-gold-accent mb-1">$25B+</div>
                      <div className="text-xs font-body text-abyss/60 uppercase tracking-wide">Team Career CRE Financings<sup>2</sup></div>
                    </div>
                    <div className="bg-cream/60 border border-abyss/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-display font-medium text-gold-accent mb-1">150+</div>
                      <div className="text-xs font-body text-abyss/60 uppercase tracking-wide">Years Combined Experience</div>
                    </div>
                    <div className="bg-cream/60 border border-abyss/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-display font-medium text-gold-accent mb-1">$10B+</div>
                      <div className="text-xs font-body text-abyss/60 uppercase tracking-wide">Originated by CEO Over Career<sup>2</sup></div>
                    </div>
                    <div className="bg-cream/60 border border-abyss/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-display font-medium text-gold-accent mb-1">33</div>
                      <div className="text-xs font-body text-abyss/60 uppercase tracking-wide">Oak Full-Cycle Loans<sup>1</sup></div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button 
                      size="lg"
                      className="bg-gold-accent hover:bg-gold-accent/90 text-abyss px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
                      onClick={() => window.location.href = "/contact"}
                    >
                      Contact Our Team
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="/lovable-uploads/a62fb2ce-f8ae-45b6-be2e-0063bf99e0c0.png"
                      alt="Modern conference room"
                      className="w-full h-[600px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-abyss/30 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Operational Philosophy Overlay */}
                  <div className="absolute inset-x-0 top-8 flex justify-center">
                    <div className="bg-silver-mist/20 backdrop-blur-md rounded-lg border border-silver-mist/30 p-8 max-w-lg shadow-lg">
                      <div className="space-y-6">
                        <div className="text-center">
                          <h4 className="text-lg font-medium text-gold-accent mb-2">Operational Excellence</h4>
                          <p className="text-cream text-sm leading-relaxed">
                            Execution demonstrated across origination, underwriting, closing, servicing, and capital markets. $200M cumulative Oak originations. $8.3B 2025 pipeline evaluated.
                          </p>
                        </div>
                        <div className="text-center">
                          <h4 className="text-lg font-medium text-gold-accent mb-2">Disciplined Approach</h4>
                          <p className="text-cream text-sm leading-relaxed">
                            A consistent methodology for every counterparty. CM1/CM2 NAIC designation standards apply to every Oak transaction.
                          </p>
                        </div>
                        <div className="text-center">
                          <h4 className="text-lg font-medium text-gold-accent mb-2">Trusted Partnership</h4>
                          <p className="text-cream text-sm leading-relaxed">
                            Principal-governed credit. Borrowers and investors talk to decision-makers, not to analysts relaying decisions made elsewhere.
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
                Each profile reflects a verifiable track record — not a title.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((leader) => (
                <div 
                  key={leader.name}
                  className="bg-silver-mist/5 rounded-sm border border-garnet-edge/20 overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    const slugMap: Record<string, string> = {
                      "Gary Bechtel": "/leadership/gary-bechtel",
                      "Paul Cleary": "/leadership/paul-cleary",
                      "Matthew Webster": "/leadership/matthew-webster",
                      "Kevin P. Kennedy": "/leadership/kevin-kennedy",
                      "Raymond T. Davis": "/leadership/raymond-davis",
                      "Robert R. Kaplan, Jr.": "/leadership/robert-kaplan",
                      "Thomas A. McGovern": "/leadership/thomas-mcgovern",
                      "Brook Scardina": "/leadership/brook-scardina",
                    };
                    const href = slugMap[leader.name];
                    if (href) window.location.href = href;
                  }}
                >
                  <div className="aspect-square bg-gradient-to-br from-graphite-fog to-graphite-fog p-8 flex items-center justify-center">
                    {leader.image ? (
                      <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className={`w-full h-full object-cover rounded-sm ${["Thomas A. McGovern", "Kevin P. Kennedy", "Matthew Webster", "Gary Bechtel"].includes(leader.name) ? "filter grayscale" : ""} ${["Kevin P. Kennedy", "Matthew Webster", "Gary Bechtel"].includes(leader.name) ? "object-top" : ""} ${leader.name === "Thomas A. McGovern" ? "object-[center_20%]" : ""}`}
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
                    <p className="text-garnet-edge text-xs">
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-gold-accent hover:bg-gold-accent/90 text-abyss px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Our Team
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-abyss text-abyss hover:bg-abyss hover:text-silver-mist hover:border-abyss px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm"
                onClick={() => window.location.href = '/investing'}
              >
                Explore Investment Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Leadership;
