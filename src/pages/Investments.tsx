import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { FinancialServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";

const Investments = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Why Oak - Investment Platform"
        description="Purpose-built for a market that cannot be served by the majors. Oak combines insurance SMA infrastructure, co-investment capital, FHA/HUD permanent financing, and principal-governed underwriting."
        canonicalUrl="/whyoak"
      />
      <FinancialServiceSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://oakrealestatepartners.com/' },
          { name: 'Why Oak', url: 'https://oakrealestatepartners.com/whyoak' }
        ]}
      />
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
        <Navigation />
      </div>
      
      <Breadcrumb items={[{ label: "Why Oak" }]} />
      
      <div className="bg-silver-mist">
        {/* Hero */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h1 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-6 leading-tight">
                  Purpose-built for a market that cannot be served by <span className="text-gold-accent">the majors.</span>
                </h1>
                <p className="text-lg lg:text-xl font-body font-normal text-abyss/80 leading-relaxed mb-8">
                  Oak combines insurance SMA infrastructure, co-investment capital, FHA/HUD permanent financing, and principal-governed underwriting in a single vertically integrated operation focused on the $2M–$20M bridge segment. Platform architecture built toward $1B+ in annual origination capacity.
                </p>
              </div>
              
              <div className="relative h-full">
                <img 
                  src="/lovable-uploads/987e604e-d758-49f3-b324-b191ee0fa935.png"
                  alt="Investment platform"
                  className="w-full h-full object-cover rounded-lg shadow-xl min-h-[400px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Market Thesis */}
        <section className="py-20 bg-cream/40">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-8">
                Banks pulled back. The gap widened. Oak was built for it.
              </h2>
              <p className="text-lg font-body text-abyss/80 leading-relaxed mb-6">
                The CRE capital stack has structurally reorganized. Approximately $4.8 trillion in outstanding CRE mortgage debt.<sup>6</sup> Roughly $2–3 trillion maturing over the next three years.<sup>7</sup> A substantial share of small-balance lending still on bank balance sheets that have signaled reduced appetite. Private CRE credit AUM has grown from approximately $56 billion to more than $200 billion in 15 years.<sup>8</sup>
              </p>
              <p className="text-lg font-body text-abyss/80 leading-relaxed">
                This is not a temporary dislocation. It is a sustained repricing of who provides CRE credit and at what scale. Oak was built specifically for the small-balance segment of that repricing.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      {/* Six Competitive Advantages */}
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-medium text-silver-mist mb-12 text-center">
              Six Competitive Advantages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "An underserved segment, owned.", desc: "Very few national lenders focus on the $2M–$20M CRE bridge segment. The space is fragmented, with limited institutional-quality competition. Oak was built specifically for it." },
                { title: "Active insurance SMA platform.", desc: <>Oak is currently underwriting and servicing SMAs for public and private insurers, with estimated annual deployment capacity exceeding $250M. CM1/CM2 NAIC designation standards<sup>3</sup> are counterparty-agnostic and portable across multiple insurers.</> },
                { title: "Vertically integrated.", desc: "In-house origination, underwriting, closing, and servicing on a proprietary technology stack. Every credit decision governed by principals, documented to institutional standards." },
                { title: "Workout track record.", desc: "Oak provides in-house special servicing and has actively worked out impaired CRE positions — direct evidence of recovery capability and a discipline that informs how Oak underwrites downside from the start." },
                { title: "Insurance-grade standard on every loan.", desc: <>CM1/CM2 NAIC designation standards<sup>3</sup> apply to every Oak transaction, not only the ones headed for an insurance balance sheet. The standard travels.</> },
                { title: "Scalable infrastructure.", desc: "Platform architecture built toward $1B+ annual origination capacity. Incremental origination volume produces incremental margin through operating leverage rather than proportional cost growth." },
              ].map((item, i) => (
                <div key={i} className="bg-silver-mist/5 border border-gold-accent/20 rounded-lg p-8 hover:bg-silver-mist/10 transition-all duration-300">
                  <div className="text-gold-accent font-display font-medium text-sm mb-1">{i + 1}.</div>
                  <h3 className="text-lg font-display font-medium text-silver-mist mb-3">{item.title}</h3>
                  <p className="text-silver-mist/80 font-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Built for the Current Environment */}
      <div className="bg-silver-mist py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-4 text-center">
              When the macro shifts, the collateral doesn't move with it.
            </h2>
            <p className="text-lg font-body text-abyss/80 text-center mb-12 max-w-3xl mx-auto">
              Several structural features of Oak's lending model are aligned with the macro risks investors are navigating today:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse max-w-4xl mx-auto">
                <thead>
                  <tr className="border-b-2 border-gold-accent">
                    <th className="text-left py-4 px-4 font-display font-medium text-abyss text-sm">Macro Risk</th>
                    <th className="text-left py-4 px-4 font-display font-medium text-abyss text-sm">Oak Structural Mitigant</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Inflation re-acceleration", "SOFR-indexed floating rates reprice with the benchmark"],
                    ["Geopolitical / tariff shock", "Domestic-only, tangible U.S. real estate assets"],
                    ["CRE valuation correction", "55–75% LTV equity cushion at close on every loan"],
                    ["Higher-for-longer rates", "Short duration (12–36 months) and continuous repricing"],
                    ["Private credit contagion", "No CLO exposure; senior-secured, first-lien positions"],
                    ["Sovereign yield spikes", "First-lien secured by tangible, income-producing collateral"],
                  ].map(([risk, mitigant], i) => (
                    <tr key={i} className="border-b border-abyss/10 hover:bg-cream/60 transition-colors">
                      <td className="py-3 px-4 font-body font-medium text-abyss text-sm">{risk}</td>
                      <td className="py-3 px-4 font-body text-abyss/80 text-sm">{mitigant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* For Borrowers */}
      <div className="bg-cream/40 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-medium text-abyss mb-6">
              Term sheets in 48 hours. Closings in 30 days. Certainty at every step.
            </h2>
            <p className="text-lg font-body text-abyss/80 leading-relaxed">
              Oak serves sponsors who have been left behind by the retrenchment of traditional lenders. $2M–$20M. Sound collateral. Credible sponsorship. Principal-to-principal from day one.
            </p>
          </div>
        </div>
      </div>

      {/* For Institutional Investors */}
      <div className="bg-silver-mist py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-medium text-abyss mb-6">
              In a market where opacity is common, clarity is the differentiator.
            </h2>
            <p className="text-lg font-body text-abyss/80 leading-relaxed mb-6">
              Most private credit funds describe their strategy. Oak documents the collateral. Most funds report quarterly. Oak supports loan-level transparency. Most funds lock capital for 7–10 years. Oak's bridge loans average 17 months at maturity.
            </p>
            <p className="text-lg font-body text-abyss/80 leading-relaxed">
              RIA, family office, foundation, and endowment capital is placed in the same senior-secured, first-lien positions as Oak's institutional insurance counterparties. Same documentation. Same underwriting standard.
            </p>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-gold-accent hover:bg-gold-accent/90 text-abyss px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
                onClick={() => window.location.href = '/investing'}
              >
                Explore Investment Solutions
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-silver-mist/40 text-silver-mist hover:bg-silver-mist hover:text-abyss px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm bg-transparent"
                onClick={() => window.location.href = '/lending'}
              >
                Get a Term Sheet
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-gold-accent/40 text-gold-accent hover:bg-gold-accent hover:text-abyss px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm bg-transparent"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Investments;
