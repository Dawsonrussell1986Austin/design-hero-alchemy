import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimplePageHeader from "@/components/SimplePageHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const OpportunisticBridge = () => {
  return (
    <div className="min-h-screen">
      {/* Header with dark background */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
        <div className="pt-24 pb-8">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl lg:text-4xl font-medium text-silver-mist tracking-wide uppercase">
              Opportunistic Bridge Program
            </h1>
          </div>
        </div>
      </div>
      
      {/* Cream background for content */}
      <div className="bg-silver-mist">
        {/* Back Button */}
        <div className="container mx-auto px-6 pt-8">
          <Link to="/lending">
            <Button variant="ghost" className="mb-8 text-obsidian hover:bg-obsidian/10 p-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Lending Programs
            </Button>
          </Link>
        </div>

        {/* Content Section with Image */}
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-obsidian mb-6 leading-tight">
                  Higher-Leverage Capital for Value-Add and Conversion Strategies
                </h1>
                <p className="text-lg text-obsidian/80 leading-relaxed">
                  Oak's Opportunistic Bridge program is designed for commercial real estate sponsors pursuing substantial value creation—such as repositioning, conversion, or redevelopment. This higher-leverage loan offering includes an embedded equity component, allowing borrowers to access more capital up front in exchange for a slightly higher rate structure. It's a smart solution for projects with a clear path to upside but capital gaps to close.
                </p>
              </div>
              
              {/* Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/9a879281-cdc6-4044-9e95-3b82d65786ec.png"
                  alt="Bridge connecting to opportunity - symbolic representation of our bridge financing"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Consider Section */}
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-obsidian mb-8 text-center">
              Who Should Consider Oak's Opportunistic Bridge Program?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-obsidian mb-3">
                  Transformation Projects
                </h3>
                <p className="text-obsidian/80">
                  Sponsors executing a significant transformation—such as a renovation, expansion, or conversion
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-obsidian mb-3">
                  Higher Leverage Needs
                </h3>
                <p className="text-obsidian/80">
                  Sponsors needing more leverage than traditional bridge options typically allow
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-obsidian mb-3">
                  Strategic Partnership
                </h3>
                <p className="text-obsidian/80">
                  Sponsors seeking a financing partner who can provide not just capital, but structured alignment with their project's success
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Oak Section */}
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-obsidian mb-8">
              Why Choose Oak?
            </h2>
            <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-8 rounded-lg shadow-lg">
              <p className="text-lg text-obsidian/90 leading-relaxed">
                Oak offers access to enhanced leverage through higher loan-to-cost (LTC) structures that reduce the equity burden for borrowers. With deep experience in transitional and value-add strategies, we understand the nuances of complex business plans—and we underwrite accordingly, combining creative structuring with institutional discipline.
              </p>
            </div>
          </div>
        </section>

        {/* Opportunistic Bridge Financing Parameters */}
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-obsidian mb-12 text-center">
              Opportunistic Bridge Financing Parameters
            </h2>
            
            {/* Loan Basics */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-obsidian mb-6 border-b border-obsidian/20 pb-2">
                Loan Basics
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-obsidian mb-2">Loan Amount</h4>
                  <p className="text-obsidian/80">$1 Million – $10 Million</p>
                </div>
                <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-obsidian mb-2">Loan Term</h4>
                  <p className="text-obsidian/80">1 to 3 Years (Fully Extended)</p>
                </div>
                <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-obsidian mb-2">Interest Rate</h4>
                  <p className="text-obsidian/80">1-Month Term SOFR + 600 – 700 bps (Interest-Only)</p>
                </div>
                <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-obsidian mb-2">Max LTV / LTC</h4>
                  <p className="text-obsidian/80">Up to 75% LTV (stabilized)<br/>Up to 90% LTC (underwritten)</p>
                </div>
                <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-obsidian mb-2">Lien Position</h4>
                  <p className="text-obsidian/80">Senior (no secondary financing permitted)</p>
                </div>
                <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-obsidian mb-2">Recourse</h4>
                  <p className="text-obsidian/80">Typically non-recourse, with standard carve-outs</p>
                </div>
              </div>
            </div>

            {/* Property & Geography */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-obsidian mb-6 border-b border-obsidian/20 pb-2">
                Property & Geography
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-obsidian mb-2">Property Types</h4>
                  <p className="text-obsidian/80">Multifamily, Industrial, Retail, Mixed-Use, Hospitality, Office, Medical Office, Self-Storage, Manufactured Housing</p>
                </div>
                <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-obsidian mb-2">Geography</h4>
                  <p className="text-obsidian/80">Primary, secondary, and select tertiary U.S. markets (min. pop. 50K–100K)</p>
                </div>
                <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-obsidian mb-2">Purpose</h4>
                  <p className="text-obsidian/80">Acquisition, Refinance, Conversion, Rehabilitation, Stabilization</p>
                </div>
                <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-obsidian mb-2">Funding Structure</h4>
                  <p className="text-obsidian/80">Full funding with customary holdbacks</p>
                </div>
              </div>
            </div>

            {/* Terms & Fees */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-obsidian mb-6 border-b border-obsidian/20 pb-2">
                Terms & Fees
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-obsidian mb-2">Rate Floor / Cap</h4>
                  <p className="text-obsidian/80">Rate/floor set at closing; No rate cap required</p>
                </div>
                <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-obsidian mb-2">Extensions</h4>
                  <p className="text-obsidian/80">Up to 4 extensions of 6 months each, at standard market fees</p>
                </div>
                <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-obsidian mb-2">Fees</h4>
                  <p className="text-obsidian/80">Competitive origination and exit fees based on loan complexity</p>
                </div>
                <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-obsidian mb-2">Prepayment</h4>
                  <p className="text-obsidian/80">Minimum interest, typically half the initial loan term</p>
                </div>
                <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-obsidian mb-2">Deposits</h4>
                  <p className="text-obsidian/80">Sufficient to cover third-party reports, legal, and due diligence</p>
                </div>
                <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-obsidian mb-2">Closing Timeline</h4>
                  <p className="text-obsidian/80">30–45 days from LOI acceptance and deposit receipt</p>
                </div>
              </div>
            </div>

            {/* Special Considerations */}
            <div>
              <h3 className="text-xl font-semibold text-obsidian mb-6 border-b border-obsidian/20 pb-2">
                Special Considerations
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-obsidian mb-2">Debt Service Reserve</h4>
                  <p className="text-obsidian/80">Below 1.00x DSCR acceptable with reserve; preference for some in-place cash flow</p>
                </div>
                <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-obsidian mb-2">Future Advances</h4>
                  <p className="text-obsidian/80">Available for TI/LC, conversion, and approved rehabilitation costs</p>
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

export default OpportunisticBridge;