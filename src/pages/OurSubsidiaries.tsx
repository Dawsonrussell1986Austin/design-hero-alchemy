import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const OurSubsidiaries = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Our Subsidiaries"
        description="Oak's subsidiary platform is the permanent financing engine that completes the lending cycle. Approximately $225M FHA pipeline."
        canonicalUrl="/subsidiaries"
      />
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
        <Navigation />
      </div>
      
      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Our Firm", href: "/about" },
          { label: "Our Subsidiaries" }
        ]} 
      />

      <div className="bg-silver-mist">
        {/* Hero */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-6 leading-tight">
              The other end of the <span className="text-gold-accent">bridge.</span>
            </h1>
            <p className="text-lg lg:text-xl font-body font-normal text-abyss/80 leading-relaxed">
              Oak's subsidiary platform is the permanent financing engine that completes the lending cycle — converting bridge loans into government-backed permanent capital without a change of lender, counterparty, or underwriting standard. Approximately $225M FHA pipeline.
            </p>
          </div>
        </section>

        {/* Red Oak Capital Holdings */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-cream rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gold-accent mb-4 tracking-tight">
                    RED OAK CAPITAL HOLDINGS
                  </h2>
                  <p className="text-lg text-graphite-fog max-w-3xl mx-auto mb-8">
                    Our commercial real estate lending subsidiary, providing specialized financing solutions funded by the retail investment community.
                  </p>
                </div>
                
                {/* Asset Management Team */}
                <div className="bg-silver-mist/30 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-abyss mb-6 text-center">Asset Management & Operations Team</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { name: "Ryan Anderson", title: "VICE PRESIDENT, ASSET MANAGEMENT", image: "/lovable-uploads/31c8e413-e49d-45f0-b289-23cef6842eed.png" },
                      { name: "Stratos Athanassiades", title: "REGIONAL MANAGER", image: "/lovable-uploads/374c72eb-53c2-4e84-b46e-b78e58ef7a85.png" },
                      { name: "Dylan Beaulieu", title: "PRIMARY SERVICING MANAGER", image: "/lovable-uploads/55c42f2a-0ab2-49c3-94da-646480e1fcc7.png" },
                      { name: "Nicolas Jans", title: "REGIONAL MANAGER", image: "/lovable-uploads/1900f810-94ae-41a2-a5c3-61a55ad00f66.png" },
                      { name: "Kate Smith", title: "SR. CRE ANALYST", image: null },
                    ].map((person, i) => (
                      <div key={i} className="text-center">
                        <div className="bg-cream rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                            {person.image ? (
                              <img src={person.image} alt={person.name} className="w-full h-full object-cover grayscale" />
                            ) : (
                              <div className="w-full h-full bg-graphite-fog/30 flex items-center justify-center">
                                <span className="text-graphite-fog/40 text-4xl font-display">KS</span>
                              </div>
                            )}
                          </div>
                          <h4 className="font-bold text-abyss mb-2">{person.name}</h4>
                          <p className="text-sm text-graphite-fog mb-4">{person.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Finance & Operations Team */}
                <div className="bg-silver-mist/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-abyss mb-6 text-center">Finance & Operations Team</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { name: "Ryan Ellis", title: "VICE PRESIDENT, FINANCE", image: "/lovable-uploads/76c2daaa-5415-480e-85df-16119fbc639a.png" },
                      { name: "Thomas J. Gorski", title: "VP, UNDERWRITING", image: "/lovable-uploads/b73b34cc-ac9e-499c-b7ac-c09f2097413e.png" },
                      { name: "James Myatt", title: "SENIOR LOAN ADMINISTRATOR", image: "/lovable-uploads/569d91ea-63ba-4d6d-ae15-e224a63f481c.png" },
                      { name: "Jamie Tripp", title: "VICE PRESIDENT OF INTERNAL OPERATIONS", image: "/lovable-uploads/d79e003e-2083-4515-bd8c-da4e7748ef9d.png" },
                      { name: "Rob Mendham", title: "MANAGER, INFORMATION TECHNOLOGY", image: "/lovable-uploads/172b9df3-c5a8-4a00-83f7-12c550923d84.png" },
                      { name: "Tanner Morgan", title: "CONTROLLER", image: "/lovable-uploads/dceb532f-a791-412e-a1fc-638c2122d06d.png" },
                    ].map((person, i) => (
                      <div key={i} className="text-center">
                        <div className="bg-cream rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                            <img src={person.image} alt={person.name} className="w-full h-full object-cover grayscale" />
                          </div>
                          <h4 className="font-bold text-abyss mb-2">{person.name}</h4>
                          <p className="text-sm text-graphite-fog mb-4">{person.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Oak Flywheel */}
        <section className="py-16 bg-cream/40">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-medium text-abyss mb-6">
                One relationship. Every stage of the capital stack.
              </h2>
              <p className="text-lg font-body text-abyss/80 leading-relaxed mb-6">
                The typical CRE borrower uses one lender for the bridge, another for permanent financing, and a third-party servicer in between. Each transition introduces new underwriting, new terms, and new counterparty risk.
              </p>
              <p className="text-lg font-body text-abyss/80 leading-relaxed">
                Oak eliminates those transitions. Bridge origination through Oak, stabilization, permanent FHA/HUD financing through JCM, institutional servicing — same team, same standards, same relationship. A meaningful share of Oak's bridge portfolio is designed to transition into FHA permanent financing at stabilization, creating a structural recurring-revenue component for the platform.
              </p>
            </div>
          </div>
        </section>

        {/* Johnson Capital Multifamily */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-cream rounded-lg shadow-lg p-8 mb-12">
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-4 tracking-tight">
                    Johnson Capital Multifamily
                  </h2>
                  <h3 className="text-xl font-display font-medium text-gold-accent mb-4">
                    Permanent capital. Government-backed. Institutionally executed.
                  </h3>
                  <p className="text-lg text-graphite-fog max-w-4xl leading-relaxed">
                    Johnson Capital Multifamily, acquired in 2024, is Oak's FHA/HUD subsidiary. Government-insured permanent financing for multifamily, affordable housing, senior living, and healthcare properties. JCM operates as the exit platform for qualifying Oak bridge loans and as a recurring revenue engine for the platform, generating servicing-fee revenue on the permanent book.
                  </p>
                </div>

                {/* FHA/HUD Programs Table */}
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gold-accent">
                        <th className="text-left py-4 px-4 font-display font-medium text-abyss text-sm">Program</th>
                        <th className="text-left py-4 px-4 font-display font-medium text-abyss text-sm">Application</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["FHA 223(f)", "Stabilized multifamily. Non-recourse, 35-year fully amortizing. Permanent takeout for qualifying Oak bridge loans at stabilization."],
                        ["FHA 221(d)(4)", "Ground-up multifamily and major renovation. Government-backed construction financing."],
                        ["FHA 232", "Assisted living, memory care, skilled nursing. Government-backed permanent financing."],
                        ["Affordable Housing", "LIHTC, Section 8, and income-restricted multifamily. Government financing aligned with community development mandates."],
                      ].map(([program, application], i) => (
                        <tr key={i} className="border-b border-abyss/10 hover:bg-silver-mist/30 transition-colors">
                          <td className="py-3 px-4 font-body font-medium text-abyss text-sm whitespace-nowrap">{program}</td>
                          <td className="py-3 px-4 font-body text-abyss/80 text-sm">{application}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* JCM Team Grid */}
                <div className="bg-silver-mist/30 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { name: "Janet Bujko", title: "SVP/CHIEF UNDERWRITER - MAP AND LEAN PROGRAMS", image: "/lovable-uploads/72acba3c-0e00-4a56-b2b0-312d8d8d20f8.png" },
                      { name: "Jason Pumpelly", title: "PRESIDENT", image: "/lovable-uploads/jason-sutherland-headshot.jpg?v=2" },
                      { name: "Guy Johnson", title: "PRINCIPAL", image: "/lovable-uploads/9d94a353-d253-43ef-8f26-ba5b48847381.png" },
                      { name: "Matthew J. Morgan", title: "UNDERWRITER", image: "/lovable-uploads/e8f32d5e-1126-478e-9860-811f1e095458.png" },
                      { name: "Kevin M. Kirton", title: "UNDERWRITER", image: "/lovable-uploads/0bc2aab8-ce33-43a0-936d-422b00463acd.png" },
                    ].map((person, i) => (
                      <div key={i} className="text-center">
                        <div className="bg-cream rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                            <img src={person.image} alt={person.name} className="w-full h-full object-cover grayscale" />
                          </div>
                          <h3 className="font-bold text-abyss mb-2">{person.name}</h3>
                          <p className="text-sm text-graphite-fog mb-4">{person.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="py-16 bg-cream/40">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gold-accent hover:bg-gold-accent/90 text-abyss px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
                  onClick={() => window.location.href = '/lending'}
                >
                  Learn About Bridge Lending
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-abyss text-abyss hover:bg-abyss hover:text-silver-mist px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 rounded-sm"
                  onClick={() => window.location.href = '/lending/fha-hud'}
                >
                  Explore FHA/HUD Programs
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-abyss px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 rounded-sm"
                  onClick={() => window.location.href = '/contact'}
                >
                  Talk to Our Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default OurSubsidiaries;
