import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DollarSign, Calendar, TrendingUp, Shield, Building, MapPin, Target, Layers, Percent, Clock, FileText, CreditCard, Coins, Timer, Users } from "lucide-react";
import { useState } from "react";

const ParticipatingBridge = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setShowDetails(true);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Lending" },
          { label: "Participating Bridge" }
        ]}
        quickLinks={[
          { label: "Overview", href: "/lending" },
          { label: "Core Bridge", href: "/lending/core-bridge" },
          { label: "Core-Plus Bridge", href: "/lending/core-plus-bridge" },
          { label: "Opportunistic Bridge", href: "/lending/opportunistic-bridge" },
          { label: "Participating Bridge", href: "/lending/participating-bridge" }
        ]}
      />

      {/* Cream background for content */}
      <div className="bg-silver-mist">
        {/* Content Section with Image */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Text Content */}
              <div>
                {/* Program Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-garnet-edge/15 text-garnet-edge border border-garnet-edge/30 shadow-sm">
                    Participating Bridge Program
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-obsidian mb-6 leading-tight">
                  Flexible Loans with Equity Participation to Align with Sponsor Performance
                </h1>
                <p className="text-lg text-obsidian/80 leading-relaxed mb-8">
                  Oak's Participating Bridge program offers high leverage, highly structured loans for sponsors seeking adaptive re-use capital and shared appreciation. This innovative financing solution aligns lender and borrower interests through equity participation, creating partnerships that support ambitious real estate strategies.
                </p>
                
                {/* Who Should Consider - Integrated */}
                <h2 className="text-2xl font-bold text-obsidian mb-6">
                  Who Should Consider This Program?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-obsidian mb-1">High-Impact Projects</h3>
                      <p className="text-obsidian/80 text-sm">Sponsors with ambitious projects that need flexible capital and shared upside potential</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-obsidian mb-1">Partnership-Minded Borrowers</h3>
                      <p className="text-obsidian/80 text-sm">Borrowers who value aligned interests and seek a financing partner invested in their success</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-obsidian mb-1">Maximum Leverage Needs</h3>
                      <p className="text-obsidian/80 text-sm">Projects requiring the highest available leverage through innovative structure and shared appreciation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/e97b4477-fafb-49f0-b011-b4eb2dcd6a0a.png"
                  alt="Person climbing stairs towards success"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Email Opt-in Form or Detailed Content */}
        {!showDetails ? (
          <section className="container mx-auto px-6 pb-20">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-12 rounded-lg shadow-xl text-center">
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-obsidian mb-4">
                    Access Participating Bridge Details
                  </h2>
                  <p className="text-lg text-obsidian/80 leading-relaxed">
                    Get detailed loan basics, terms, fees, and equity participation structure for our Participating Bridge program. 
                    Enter your information below to access the complete program details.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 text-lg border border-obsidian/20 rounded-lg focus:ring-2 focus:ring-garnet-edge focus:border-garnet-edge"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 text-lg border border-obsidian/20 rounded-lg focus:ring-2 focus:ring-garnet-edge focus:border-garnet-edge"
                    />
                  </div>
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-lg"
                  >
                    Access Program Details
                  </Button>
                </form>
                
                <p className="text-sm text-obsidian/60 mt-6">
                  We respect your privacy. Your information will only be used to provide you with program details and relevant updates.
                </p>
              </div>
            </div>
          </section>
        ) : (
          <section className="container mx-auto px-6 pb-16">
            <div className="max-w-6xl mx-auto">
              
              {/* Thank you message */}
              <div className="bg-garnet-edge/15 border border-garnet-edge/40 rounded-lg p-6 mb-12 text-center">
                <h3 className="text-xl font-semibold text-garnet-edge mb-2">Thank you, {name}!</h3>
                <p className="text-obsidian">Here are the detailed Participating Bridge program specifications:</p>
              </div>
              
              {/* Loan Basics */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-obsidian mb-6 border-b border-obsidian/20 pb-2">
                  Loan Basics
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
                    <div className="flex items-center mb-3">
                      <DollarSign className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Loan Amount</h4>
                    </div>
                    <p className="text-obsidian/80">$1 Million – $10 Million</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.1s'}}>
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Loan Term</h4>
                    </div>
                    <p className="text-obsidian/80">1 to 3 Years (Fully Extended)</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.2s'}}>
                    <div className="flex items-center mb-3">
                      <Percent className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Interest Rate</h4>
                    </div>
                    <p className="text-obsidian/80">1-Month Term SOFR + 700 bps (Interest-Only)</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.3s'}}>
                    <div className="flex items-center mb-3">
                      <TrendingUp className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Max LTV / LTC</h4>
                    </div>
                    <p className="text-obsidian/80">Up to 75% LTV (stabilized)<br/>Up to 100% LTC (underwritten)</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.4s'}}>
                    <div className="flex items-center mb-3">
                      <Layers className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Lien Position</h4>
                    </div>
                    <p className="text-obsidian/80">Senior (no secondary financing permitted)</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.5s'}}>
                    <div className="flex items-center mb-3">
                      <Shield className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Recourse</h4>
                    </div>
                    <p className="text-obsidian/80">Non-recourse with customary carve-outs; structured recourse for higher-risk transactions</p>
                  </div>
                </div>
              </div>

              {/* Property & Geography */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-obsidian mb-6 border-b border-obsidian/20 pb-2">
                  Property & Geography
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.6s'}}>
                    <div className="flex items-center mb-3">
                      <Building className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Property Types</h4>
                    </div>
                    <p className="text-obsidian/80">Multifamily, Industrial, Retail, Mixed-Use, Hospitality, Office, Medical Office, Self-Storage, Manufactured Housing</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.7s'}}>
                    <div className="flex items-center mb-3">
                      <MapPin className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Geography</h4>
                    </div>
                    <p className="text-obsidian/80">Primary and Secondary U.S. Markets</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.8s'}}>
                    <div className="flex items-center mb-3">
                      <Target className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Purpose</h4>
                    </div>
                    <p className="text-obsidian/80">Acquisition, Refinance, Development, Conversion, Rehabilitation, Stabilization</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.9s'}}>
                    <div className="flex items-center mb-3">
                      <Coins className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Funding Structure</h4>
                    </div>
                    <p className="text-obsidian/80">Full funding with appropriate holdbacks</p>
                  </div>
                </div>
              </div>

              {/* Terms & Fees */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-obsidian mb-6 border-b border-obsidian/20 pb-2">
                  Terms & Fees
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '1.0s'}}>
                    <div className="flex items-center mb-3">
                      <Percent className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Rate Floor / Cap</h4>
                    </div>
                    <p className="text-obsidian/80">Rate/floor set at closing; No rate cap required</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '1.1s'}}>
                    <div className="flex items-center mb-3">
                      <Clock className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Extensions</h4>
                    </div>
                    <p className="text-obsidian/80">Up to 4 extensions of 6 months each, at standard market fees</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '1.2s'}}>
                    <div className="flex items-center mb-3">
                      <Users className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Exit Participation</h4>
                    </div>
                    <p className="text-obsidian/80">15% – 25% of value creation, based on project structure and returns</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '1.3s'}}>
                    <div className="flex items-center mb-3">
                      <CreditCard className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Prepayment</h4>
                    </div>
                    <p className="text-obsidian/80">Minimum interest, typically half the initial loan term</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '1.4s'}}>
                    <div className="flex items-center mb-3">
                      <DollarSign className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Closing Timeline</h4>
                    </div>
                    <p className="text-obsidian/80">30–45 days from LOI acceptance and deposit receipt</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '1.5s'}}>
                    <div className="flex items-center mb-3">
                      <Timer className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Debt Service Reserve</h4>
                    </div>
                    <p className="text-obsidian/80">Below 1.00x DSCR acceptable with reserve; preference for some in-place cash flow</p>
                  </div>
                </div>
              </div>

              {/* Special Considerations */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-obsidian mb-6 border-b border-obsidian/20 pb-2">
                  Special Considerations
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '1.6s'}}>
                    <div className="flex items-center mb-3">
                      <Building className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Future Advances</h4>
                    </div>
                    <p className="text-obsidian/80">Available for TI/LC, rehabilitation, and approved project costs</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '1.7s'}}>
                    <div className="flex items-center mb-3">
                      <FileText className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Deposits</h4>
                    </div>
                    <p className="text-obsidian/80">Sufficient to cover third-party reports, legal, and underwriting diligence</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ParticipatingBridge;