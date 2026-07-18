import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema } from "@/components/StructuredData";

const About = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="About Us"
        description="Oak Real Estate Partners is a vertically integrated CRE credit platform focused on the $2M–$20M bridge loan market — the small-balance segment of the roughly $300 billion annual CRE lending gap."
        canonicalUrl="/about"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' }
      ]} />
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
        <Navigation />
      </div>
      
      <Breadcrumb 
        items={[
          { label: "Our Firm", href: "/" },
          { label: "About us" }
        ]}
        quickLinks={[
          { label: "Leadership", href: "/leadership" }
        ]}
      />
      
      <div className="bg-silver-mist">
        
        {/* Hero / Origin Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div className="space-y-8">
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-8 leading-tight">
                      Built for the market traditional banks have <span className="text-gold-accent">stepped back from.</span>
                    </h1>
                    <p className="text-lg lg:text-xl font-body font-normal text-graphite-fog leading-relaxed mb-6">
                      Oak Real Estate Partners is a vertically integrated CRE credit platform focused on the $2M–$20M bridge loan market — the small-balance segment of the roughly $300 billion annual CRE lending gap left by the bank retrenchment.<sup>5</sup>
                    </p>
                    
                    <div className="mt-8">
                      <a href="/leadership">
                        <Button 
                          size="lg"
                          className="bg-gold-accent hover:bg-gold-accent/90 text-abyss px-8 py-3 text-base font-body font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
                        >
                          Our Leadership Team
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="/lovable-uploads/9ab74e35-d4f1-4eff-bf61-dc4e3cd8fad1.png"
                      alt="Business handshake with architectural plans"
                      className="w-full h-[600px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-abyss/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Origin Section */}
        <section className="py-20 bg-cream/40">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-8 leading-tight">
                The market was dislocated. The opportunity was <span className="text-gold-accent">structural.</span>
              </h2>
              
              <div className="space-y-6 text-lg font-body text-abyss/80 leading-relaxed">
                <p>
                  When the largest banks pulled back from small-balance commercial real estate, they did not leave because the loans were bad. They left because the loans were small. The $2M–$20M bridge loan — the neighborhood apartment repositioning, the small hotel, the mixed-use building that does not fit a bank's credit box — does not fit the cost structure of a trillion-dollar institution.
                </p>
                <p>
                  What remains is $4.8 trillion in outstanding CRE mortgage debt,<sup>6</sup> roughly $2–3 trillion of it maturing over the next three years,<sup>7</sup> and an estimated $300 billion in annual small- and mid-balance lending demand that banks no longer efficiently serve.<sup>5</sup> Over the same period, private CRE credit AUM has grown from approximately $56 billion to over $200 billion.<sup>8</sup> The structural gap is still widening.
                </p>
                <p>
                  Gary Bechtel spent four decades in this market before building Oak. At Money360, he led the firm from $24 million to $850 million in AUM and originated more than $10 billion in CRE credit over his career.<sup>2</sup> Oak was founded to apply that same institutional underwriting discipline to a fragmented market — at a platform built from day one for it, rather than bolted onto a larger business with different priorities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Platform Section */}
        <section className="py-20 bg-abyss">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-display font-medium text-silver-mist mb-6 text-center">
                One platform. Every stage of the capital stack.
              </h2>
              <p className="text-lg font-body text-silver-mist/80 leading-relaxed max-w-4xl mx-auto text-center mb-16">
                Oak operates as a single vertically integrated platform. Origination, underwriting, closing, servicing, and capital markets all happen under one roof. Credit decisions are governed by principals who have operated through multiple cycles — not outsourced to third-party underwriters.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-silver-mist/5 border border-gold-accent/20 rounded-lg p-8">
                  <h3 className="text-xl font-display font-medium text-gold-accent mb-4">Insurance SMA Origination & Servicing</h3>
                  <p className="text-silver-mist/80 font-body leading-relaxed">
                    Oak underwrites SMAs for public and private insurance company counterparties, to CM1/CM2 NAIC designation standards.<sup>3</sup> Estimated annual deployment capacity exceeding $250M. The standards are portable across counterparties rather than built around one.
                  </p>
                </div>
                
                <div className="bg-silver-mist/5 border border-gold-accent/20 rounded-lg p-8">
                  <h3 className="text-xl font-display font-medium text-gold-accent mb-4">National Origination Engine</h3>
                  <p className="text-silver-mist/80 font-body leading-relaxed">
                    Approximately $8.3 billion in gross pipeline evaluated in 2025. $520M+ cumulative originations across the family of managed funds. Infrastructure built to scale from the current run-rate toward $1B+ in annual origination capacity.
                  </p>
                </div>
                
                <div className="bg-silver-mist/5 border border-gold-accent/20 rounded-lg p-8">
                  <h3 className="text-xl font-display font-medium text-gold-accent mb-4">Co-Investment Vehicle</h3>
                  <p className="text-silver-mist/80 font-body leading-relaxed">
                    Programmatic equity alongside Oak on every loan. Oak retains equity in every co-investment transaction, aligning the firm's balance sheet with investor outcomes.
                  </p>
                </div>
                
                <div className="bg-silver-mist/5 border border-gold-accent/20 rounded-lg p-8">
                  <h3 className="text-xl font-display font-medium text-gold-accent mb-4">FHA/HUD Exit Platform</h3>
                  <p className="text-silver-mist/80 font-body leading-relaxed">
                    Through Johnson Capital Multifamily, Oak offers government-backed permanent financing. Bridge-to-permanent under a single relationship. Approximately $225M FHA pipeline currently under review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <p className="text-xs font-body text-gold-accent uppercase tracking-[0.2em] mb-4 text-center">THE OAK STANDARD</p>
              <h2 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-8 text-center leading-tight max-w-4xl mx-auto">
                Know what you own. Know who is managing it. Know why it endures.
              </h2>
              <p className="text-lg font-body text-abyss/80 leading-relaxed max-w-4xl mx-auto text-center mb-16">
                Credit decisions at Oak are governed by principals who have spent an average of over two decades underwriting commercial real estate. Principal-governed credit means the people accountable for outcomes set the standard every file is measured against, and engage directly with the decision-makers at the borrowing entity. Certainty for borrowers. Accountability for investors.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-cream/60 border border-abyss/10 rounded-lg p-8 text-center">
                  <h3 className="text-xl font-display font-medium text-gold-accent mb-4">PROTECTION</h3>
                  <p className="text-abyss/80 font-body leading-relaxed text-sm">
                    Capital preservation first. Senior-secured, first-lien, 55–75% stabilized LTV on every loan. A structural requirement, not a style preference. 33 full-cycle Oak loans.
                  </p>
                </div>
                
                <div className="bg-cream/60 border border-abyss/10 rounded-lg p-8 text-center">
                  <h3 className="text-xl font-display font-medium text-gold-accent mb-4">TRANSPARENCY</h3>
                  <p className="text-abyss/80 font-body leading-relaxed text-sm">
                    The address, the collateral, the structure, the term, the exit. Disclosed in writing before capital is committed. No blind pools. No hidden leverage.
                  </p>
                </div>
                
                <div className="bg-cream/60 border border-abyss/10 rounded-lg p-8 text-center">
                  <h3 className="text-xl font-display font-medium text-gold-accent mb-4">EXPERIENCE</h3>
                  <p className="text-abyss/80 font-body leading-relaxed text-sm">
                    Combined team career track record of $25B+ in CRE financings.<sup>2</sup> Oak's own track record, since inception, is available through the investor portal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discipline and Stability */}
        <section className="py-20 bg-cream/40">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-8 leading-tight">
                  Discipline is a predictor of returns. It is a stronger predictor of <span className="text-gold-accent">survival.</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-cream/60 border border-abyss/10 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-display font-medium text-abyss mb-4">Control and Stability</h3>
                  <p className="text-graphite-fog leading-relaxed font-body text-sm">
                    Institutional systems and processes built for consistency across market environments — including the ones that are not benign. The Oak standard held through COVID, through 525 basis points of rate hikes,<sup>4</sup> and through the geopolitical disruption that followed.
                  </p>
                </div>
                
                <div className="bg-cream/60 border border-abyss/10 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-display font-medium text-abyss mb-4">Risk Discipline</h3>
                  <p className="text-graphite-fog leading-relaxed font-body text-sm">
                    Underwriting standards do not flex with market sentiment. 55–75% LTV on every loan, every cycle.
                  </p>
                </div>
                
                <div className="bg-cream/60 border border-abyss/10 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-display font-medium text-abyss mb-4">Predictability</h3>
                  <p className="text-graphite-fog leading-relaxed font-body text-sm">
                    Consistent underwriting produces reliable outcomes. 17-month average duration at Oak. SOFR-indexed floating rates. Short exposure windows with continuous repricing. Predictability is not boring. It is the point.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default About;
