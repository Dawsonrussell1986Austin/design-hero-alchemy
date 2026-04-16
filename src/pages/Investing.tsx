import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, BarChart3, DollarSign, Target, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { FinancialServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";

const Investing = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Investing"
        description="Senior-secured, first-lien CRE debt. Named collateral. Institutional underwriting. Oak's 33 full-cycle loans have delivered a 19% net IRR (21.9% gross) to date."
        canonicalUrl="/investing"
      />
      <FinancialServiceSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://oakrealestatepartners.com/' },
          { name: 'Investing', url: 'https://oakrealestatepartners.com/investing' }
        ]}
      />
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
        <Navigation />
      </div>
      
      <Breadcrumb items={[{ label: "Investing" }]} />
      
      {/* Hero */}
      <div className="bg-silver-mist">
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h1 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-6 leading-tight">
                  You know what you own. Because we <span className="text-gold-accent">document it.</span>
                </h1>
                <p className="text-lg lg:text-xl font-body font-normal text-abyss/80 leading-relaxed mb-8">
                  Senior-secured, first-lien CRE debt. Named collateral. Institutional underwriting. Oak's 33 full-cycle loans have delivered a 19% net IRR (21.9% gross) to date.<sup>1</sup> The same structure that supports Oak's insurance company counterparties is available to RIAs, family offices, foundations, and endowments.
                </p>
              </div>
              
              <div className="relative h-full">
                <img 
                  src="/lovable-uploads/40699a0f-8d8e-45b5-9bfe-ace25b76aa3a.png"
                  alt="Investment offerings"
                  className="w-full h-full object-cover rounded-lg shadow-xl min-h-[400px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Investor Philosophy */}
        <section className="py-20 bg-cream/40">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-medium text-abyss mb-6">
                Where opacity is common, certainty has a premium.
              </h2>
              <p className="text-lg font-body text-abyss/80 leading-relaxed mb-6">
                Most private credit funds describe their sector. Oak documents the address. Most funds describe risk management philosophy. Oak documents the collateral — the property, the LTV, the SOFR-indexed rate, the maturity schedule.
              </p>
              <p className="text-lg font-body text-abyss/80 leading-relaxed">
                Senior-secured, first-lien lending at 55–75% stabilized LTV means that even if the underlying asset declines 25–45%, investor principal is structurally protected. That protection is contractual, not discretionary.
              </p>
            </div>
          </div>
        </section>

        {/* What "Know What You Own" Means */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-display font-medium text-abyss mb-8">What "Know What You Own" Means in Practice</h3>
              <div className="space-y-4">
                {[
                  "The address, the collateral, the structure, the term, and the exit are documented before capital is committed.",
                  "Senior-secured, first-lien on every loan — first claim on the asset.",
                  "55–75% stabilized LTV — a 25–45% equity cushion at close.",
                  "Floating rate indexed to SOFR — automatic repricing with the benchmark.",
                  "12–36 month terms; 17-month average duration at Oak.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="font-body text-abyss/80 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Track Record */}
      <div className="bg-abyss py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-medium text-silver-mist mb-12 text-center">
              33 full-cycle Oak loans. The record is specific.
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { stat: "19%", label: "NET IRR", detail: "33 Oak loans, unlevered, since inception" },
                { stat: "21.9%", label: "GROSS IRR", detail: "Weighted average across the same portfolio" },
                { stat: "1.22x", label: "NET MOIC", detail: "Full-cycle Oak portfolio" },
                { stat: "$40.5M", label: "NET PROFIT", detail: "Distributed to investors to date" },
                { stat: "12.3%", label: "RECOVERY RETURN", detail: "Average realized on Oak loans that required workout" },
                { stat: "17 mo.", label: "AVG DURATION", detail: "Short exposure, continuous repricing" },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-silver-mist/5 border border-gold-accent/20 rounded-lg">
                  <div className="text-3xl font-display font-medium text-gold-accent mb-2">{item.stat}</div>
                  <div className="text-xs font-body text-silver-mist/60 uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-xs font-body text-silver-mist/40">{item.detail}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-silver-mist/50 text-center leading-relaxed max-w-4xl mx-auto">
              All figures reflect Oak Real Estate Partners performance since inception. Net returns are net of management fees, expenses, and any performance compensation. Past performance is not indicative of future results. Full performance disclosures are available in the offering materials.
            </p>
          </div>
        </div>
      </div>

      {/* Institutional Co-Investment */}
      <div className="bg-silver-mist py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-medium text-abyss mb-6">
              Your capital, placed alongside insurance company, foundation, and endowment capital.
            </h2>
            <p className="text-lg font-body text-abyss/80 leading-relaxed mb-6">
              Oak originates, underwrites, and services CRE loans for insurance companies and other institutional counterparties operating to some of the most demanding capital standards in the market. Oak is currently underwriting SMAs for a global insurer with demonstrated annual deployment demand of $250M+. CM1/CM2 NAIC designation standards<sup>3</sup> apply on every insurance SMA transaction.
            </p>
            <p className="text-lg font-body text-abyss/80 leading-relaxed">
              RIA, family office, foundation, and endowment capital is placed in the same senior-secured, first-lien positions, on the same documentation.
            </p>
          </div>
        </div>
      </div>
      
      {/* Why CRE Private Credit Now */}
      <div className="bg-cream/40 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-4">
                A sustained repricing of CRE credit is underway.
              </h2>
              <p className="text-lg text-abyss/70 font-body">This is one way to be positioned for it.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: TrendingUp, title: "Market opportunity", desc: "Approximately $4.8 trillion in outstanding CRE mortgage debt. Roughly $2–3 trillion maturing over the next three years. Private CRE credit AUM has grown nearly 4x over 15 years. Structural, not cyclical." },
                { icon: Shield, title: "Risk discipline", desc: "Principal-governed credit on every loan. Senior-secured, first-lien, 55–75% stabilized LTV. A contractual description of every position in the portfolio." },
                { icon: BarChart3, title: "Diversification", desc: "Short-duration (17-month average at Oak), floating-rate, senior-secured CRE debt. Structurally differentiated from public equity exposure. Inflation-resistant by design." },
                { icon: DollarSign, title: "Income orientation", desc: "SOFR + 450–750 basis points depending on program. Contractual interest income from performing bridge loans against income-producing real assets." },
                { icon: Target, title: "Performance", desc: "Oak, since inception: 19% net IRR, 21.9% gross IRR, 1.22x net MOIC. Through COVID and through 525 basis points of rate hikes. Oak's specific performance, not an asset-class reference." },
                { icon: Zap, title: "Lower correlation", desc: "Private, first-lien CRE debt is structurally differentiated from public market movements. Domestic-only, tangible U.S. collateral. No CLO exposure." },
              ].map((item, i) => (
                <div key={i} className="bg-cream/60 border border-abyss/10 rounded-lg p-8 hover:bg-cream/80 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gold-accent/10 rounded-lg flex items-center justify-center mr-3">
                      <item.icon className="h-5 w-5 text-gold-accent" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-abyss">{item.title}</h3>
                  </div>
                  <p className="text-abyss/70 leading-relaxed font-body text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* For RIAs */}
      <div className="bg-silver-mist py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-medium text-abyss mb-6">
              Built for advisors who will not allocate blind.
            </h2>
            <p className="text-lg font-body text-abyss/80 leading-relaxed">
              RIAs allocating to Oak get what most private credit platforms will not provide: loan-level transparency, named collateral on every position, and direct access to the principals who govern credit decisions. No blind pools. No opaque structures.
            </p>
          </div>
        </div>
      </div>

      {/* For Foundations & Endowments */}
      <div className="bg-cream/40 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-medium text-abyss mb-6">
              The same structure insurance counterparties require. Available to you.
            </h2>
            <p className="text-lg font-body text-abyss/80 leading-relaxed">
              Foundations and endowments share a mandate with insurance company allocators: preserve capital, produce consistent income, maintain full visibility into holdings. Oak's platform was built to insurance company SMA standards — CM1/CM2 designation standards,<sup>3</sup> institutional reporting, rigorous underwriting on every loan. That same structure is available to foundation and endowment capital.
            </p>
          </div>
        </div>
      </div>

      {/* Investor-Focused Principles */}
      <div className="bg-silver-mist py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-cream/60 border border-abyss/20 rounded-lg p-8">
              <h3 className="text-lg font-display font-medium text-abyss mb-4 pb-2 border-b border-abyss/20">
                Investor-Focused Principles
              </h3>
              <div className="space-y-3">
                {[
                  "Capital preservation and consistent yield generation.",
                  "Transparent reporting at the loan level.",
                  "Institutional-quality due diligence on every transaction.",
                  "Diversified portfolio construction and disciplined risk management.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-gold-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-abyss/80 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
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
                onClick={() => window.location.href = '/contact'}
              >
                Request Information
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-silver-mist/40 text-silver-mist hover:bg-silver-mist hover:text-abyss px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm bg-transparent"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule a Call
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-gold-accent/40 text-gold-accent hover:bg-gold-accent hover:text-abyss px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm bg-transparent"
                onClick={() => window.location.href = '/invest'}
              >
                Download Overview
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Investing;
