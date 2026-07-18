import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema } from "@/components/StructuredData";

const Lending = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Commercial Real Estate Lending"
        description="Senior-secured bridge loans for commercial real estate. $2M–$20M. Term sheets in 48 hours. Credit decisions governed by principals, not committee chains."
        canonicalUrl="/lending"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Lending', url: '/lending' }
      ]} />
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
        <Navigation />
      </div>
      
      <Breadcrumb items={[{ label: "Lending" }]} />

      <div className="bg-silver-mist">
        {/* Hero */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h1 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-6 leading-tight">
                  Capital that moves when <span className="text-gold-accent">yours cannot.</span>
                </h1>
                <p className="text-lg lg:text-xl font-body font-normal text-abyss/80 leading-relaxed mb-6">
                  Senior-secured bridge loans for commercial real estate. $2M–$20M. Term sheets in 48 hours. Credit decisions governed by principals, not committee chains. $520M+ originated across Oak's managed funds to date.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/6b5ae029-afee-401f-a617-f33b5c24dd95.png"
                  alt="Bridge infrastructure over water"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* The Market */}
            <div className="max-w-4xl mx-auto mb-20">
              <p className="text-lg font-body text-abyss/80 leading-relaxed mb-6">
                Large institutional lenders set minimums at $50M or above. CMBS conduits require full stabilization. Large private credit funds pursue $100M+ transactions. The sponsor with a sound $8M apartment repositioning — credible track record, clear stabilization path, solid collateral — has been left to hard-money lenders and inconsistent terms.
              </p>
              <p className="text-lg font-body text-abyss/80 leading-relaxed">
                The structural context: roughly $4.8 trillion in outstanding CRE mortgage debt,<sup>6</sup> approximately $2–3 trillion maturing over the next three years,<sup>7</sup> and a substantial portion of small-balance CRE lending still held by banks that have signaled reduced appetite. Oak was built for the loan that does not fit a bank's credit box but is supported by sound collateral and credible sponsorship.
              </p>
            </div>

            {/* Loan Structure */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-display font-medium text-abyss mb-6">Every Oak loan. Same standard.</h2>
              <p className="text-lg font-body text-abyss/80 leading-relaxed mb-6">
                Senior-secured. First-lien. Floating rate indexed to SOFR. $2M–$20M. 12–36 month term. 55–75% stabilized LTV. These are structural requirements on every transaction. The discipline that protects investors is the same discipline that produces certainty at close for borrowers.
              </p>
              <p className="text-base font-body text-abyss/70 leading-relaxed">
                All bridge loans: SOFR-indexed, serving as a natural inflation hedge. Core and Core Plus programs: CM1/CM2-qualifying insurance-grade standards.<sup>3</sup>
              </p>
            </div>

            {/* Loan Programs Table */}
            <div className="mb-20">
              <h2 className="text-3xl font-display font-medium text-abyss mb-8 text-center">Five programs. One standard.</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gold-accent">
                      <th className="text-left py-4 px-4 font-display font-medium text-abyss text-sm">Program</th>
                      <th className="text-left py-4 px-4 font-display font-medium text-abyss text-sm">Size</th>
                      <th className="text-left py-4 px-4 font-display font-medium text-abyss text-sm">Term</th>
                      <th className="text-left py-4 px-4 font-display font-medium text-abyss text-sm">Spread (bps)</th>
                      <th className="text-left py-4 px-4 font-display font-medium text-abyss text-sm">Max LTV</th>
                      <th className="text-left py-4 px-4 font-display font-medium text-abyss text-sm">Orig. Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Core", "$2–$20M", "1–3 Yrs", "450–500", "75%", "2.00%"],
                      ["Core Plus", "$2–$20M", "1–3 Yrs", "525–600", "75%", "2.00%"],
                      ["Opportunistic", "$2–$20M", "1–3 Yrs", "650–700", "75%", "2.00%"],
                      ["Participating", "$2–$20M", "1–3 Yrs", "700–750", "75%", "2.00%"],
                      ["FHA/HUD", "$2–$20M", "Up to 40 Yrs", "Fixed Rate", "Varies", "Up to 3.5%"],
                    ].map(([program, size, term, spread, ltv, fee], i) => (
                      <tr key={i} className="border-b border-abyss/10 hover:bg-cream/60 transition-colors">
                        <td className="py-3 px-4 font-body font-medium text-abyss text-sm">{program}</td>
                        <td className="py-3 px-4 font-body text-abyss/80 text-sm">{size}</td>
                        <td className="py-3 px-4 font-body text-abyss/80 text-sm">{term}</td>
                        <td className="py-3 px-4 font-body text-abyss/80 text-sm">{spread}</td>
                        <td className="py-3 px-4 font-body text-abyss/80 text-sm">{ltv}</td>
                        <td className="py-3 px-4 font-body text-abyss/80 text-sm">{fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FHA/HUD Section */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-display font-medium text-abyss mb-6">
                The other end of the bridge. Government-backed. Institutionally executed.
              </h2>
              <p className="text-lg font-body text-abyss/80 leading-relaxed mb-4">
                Through Johnson Capital Multifamily, Oak's wholly owned FHA/HUD subsidiary, borrowers who begin with an Oak bridge loan can move to permanent government-backed financing without changing lenders, renegotiating terms, or introducing new counterparty risk. Approximately $225M FHA pipeline under review.
              </p>
              <p className="text-base font-body text-gold-accent font-medium">
                Originate with discipline. Stabilize with bridge capital. Permanently finance with FHA/HUD. One relationship.
              </p>
            </div>

            {/* The Oak Process */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-display font-medium text-abyss mb-8">Institutional underwriting. Human speed.</h2>
              <div className="space-y-6">
                {[
                  { day: "Day 1–2", title: "Term sheet.", desc: "Principal-to-principal conversation. You speak with a decision-maker at Oak." },
                  { day: "Day 3–10", title: "Underwriting.", desc: "Property-level analysis, borrower review, market assessment." },
                  { day: "Day 11–21", title: "Credit approval.", desc: "Every Oak loan approved against the principal-set credit standard." },
                  { day: "Day 22–30", title: "Closing.", desc: "Structured. Sequential. The terms at close match the terms in the letter of intent." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-6 p-6 bg-cream/60 border border-abyss/10 rounded-lg">
                    <div className="text-gold-accent font-display font-medium text-lg whitespace-nowrap">{step.day}</div>
                    <div>
                      <span className="font-display font-medium text-abyss">{step.title}</span>{" "}
                      <span className="font-body text-abyss/80">{step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What Oak Does Not Do */}
            <div className="max-w-4xl mx-auto mb-20 bg-abyss rounded-lg p-10">
              <h3 className="text-2xl font-display font-medium text-silver-mist mb-8">What Oak Does Not Do</h3>
              <div className="space-y-4">
                {[
                  "Oak does not outsource credit decisions to analysts who have not seen the property.",
                  "Oak does not change terms between letter of intent and closing as standard practice.",
                  "Oak does not require full stabilization on transitional assets with sound collateral.",
                  "Oak does not price risk it does not understand.",
                ].map((item, i) => (
                  <p key={i} className="text-silver-mist/90 font-body leading-relaxed border-l-2 border-gold-accent pl-4">{item}</p>
                ))}
                <p className="text-gold-accent font-body font-medium mt-6">
                  If the collateral is sound and the sponsorship is credible, Oak will find a way to close.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gold-accent hover:bg-gold-accent/90 text-abyss px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
                onClick={() => window.location.href = '/contact'}
              >
                Get a Term Sheet
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-abyss text-abyss hover:bg-abyss hover:text-silver-mist px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 rounded-sm"
                onClick={() => window.location.href = '/contact'}
              >
                Submit a Loan Request
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-abyss text-abyss hover:bg-abyss hover:text-silver-mist px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 rounded-sm"
                onClick={() => window.location.href = '/contact'}
              >
                Talk to a Principal
              </Button>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Lending;
