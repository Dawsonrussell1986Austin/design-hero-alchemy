import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DollarSign, Calendar, TrendingUp, Shield, Building, MapPin, Target, Layers, Percent, Clock, FileText, CreditCard, Coins, Timer } from "lucide-react";
import { useState } from "react";

const CoreBridge = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      // Google Ads conversion event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion_event_submit_lead_form');
      }
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
          { label: "Lending", href: "/lending" }
        ]}
        quickLinks={[
          { label: "Overview", href: "/lending" },
          { label: "Core Bridge", href: "/lending/bridge/core-bridge" },
          { label: "Core-Plus Bridge", href: "/lending/bridge/core-plus-bridge" },
          { label: "Opportunistic Bridge", href: "/lending/bridge/opportunistic-bridge" },
          { label: "Participating Bridge", href: "/lending/bridge/participating-bridge" }
        ]}
      />

      {/* Cream background for content */}
      <div className="bg-silver-mist">
        {/* Content Section with Image */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">
              {/* Text Content */}
              <div>
                {/* Program Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-garnet-edge/15 text-garnet-edge border border-garnet-edge/30 shadow-sm">
                    Core Bridge Program
                  </span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-obsidian mb-4 sm:mb-6 leading-tight">
                  Flexible Bridge Financing for Institutional-Quality Assets in Transition
                </h1>
                <p className="text-lg lg:text-xl font-body font-normal text-obsidian/80 leading-relaxed mb-8">
                  Oak's Core Bridge lending program is designed for income-producing commercial real estate assets that are in transition and require short-term capital to reach stabilization. Ideal for borrowers with assets that are already cash-flowing (1.00x DSCR or greater), this program offers a streamlined path to stabilizing, refinancing, or recapitalizing a property without sacrificing speed or structure.
                </p>
                
                {/* Who Should Consider - Integrated */}
                <h2 className="text-xl font-display font-medium text-obsidian mb-6">
                  Who Should Consider This Program?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-obsidian mb-1">Acquisition & Repositioning</h3>
                      <p className="text-obsidian/80 text-sm">Sponsors acquiring or repositioning a commercial property and need transitional capital</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-obsidian mb-1">Stabilization Strategy</h3>
                      <p className="text-obsidian/80 text-sm">Sponsors seeking to enhance or stabilize performance before securing long-term financing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-garnet-edge rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-obsidian mb-1">Rapid Execution</h3>
                      <p className="text-obsidian/80 text-sm">Sponsors needing rapid execution to close an urgent transaction with certainty of execution</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative">
                <img 
                  src="/core-bridge-hero-new.png"
                  alt="Core Bridge financing program"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content - Always Show */}
        <section className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="max-w-6xl mx-auto">
              
              {/* Loan Basics */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-obsidian mb-6 border-b border-obsidian/20 pb-2">
                  Loan Basics
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-cream/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
                    <div className="flex items-center mb-3">
                      <DollarSign className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Loan Amount</h4>
                    </div>
                    <p className="text-obsidian/80">$2 Million – $50 Million+</p>
                  </div>
                  <div className="bg-cream/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.1s'}}>
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Loan Term</h4>
                    </div>
                    <p className="text-obsidian/80">12 to 36 months (Fully Extended)</p>
                  </div>
                  <div className="bg-cream/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.2s'}}>
                    <div className="flex items-center mb-3">
                      <Percent className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Interest Rate</h4>
                    </div>
                    <p className="text-obsidian/80">1-Month Term SOFR + 450 – 550 bps (Interest-Only)</p>
                  </div>
                  <div className="bg-cream/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.3s'}}>
                    <div className="flex items-center mb-3">
                      <TrendingUp className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Max LTV / LTC</h4>
                    </div>
                    <p className="text-obsidian/80">Up to 80% LTV (stabilized)<br/>Up to 75% LTC (based on underwriting)</p>
                  </div>
                  <div className="bg-cream/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.4s'}}>
                    <div className="flex items-center mb-3">
                      <Layers className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Lien Position</h4>
                    </div>
                    <p className="text-obsidian/80">Senior (no secondary financing permitted)</p>
                  </div>
                  <div className="bg-cream/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.5s'}}>
                    <div className="flex items-center mb-3">
                      <Shield className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Recourse</h4>
                    </div>
                    <p className="text-obsidian/80">Generally non-recourse, with carve outs for "bad boy" acts</p>
                  </div>
                </div>
              </div>

              {/* Property & Geography */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-obsidian mb-6 border-b border-obsidian/20 pb-2">
                  Property & Geography
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-cream/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.6s'}}>
                    <div className="flex items-center mb-3">
                      <Building className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Property Types</h4>
                    </div>
                    <p className="text-obsidian/80">Multifamily, Industrial, Retail, Mixed-Use, Hospitality, Office, Medical Office, Self-Storage, Manufactured Housing</p>
                  </div>
                  <div className="bg-cream/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.7s'}}>
                    <div className="flex items-center mb-3">
                      <MapPin className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Geography</h4>
                    </div>
                    <p className="text-obsidian/80">Primary and secondary U.S. markets</p>
                  </div>
                  <div className="bg-cream/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.8s'}}>
                    <div className="flex items-center mb-3">
                      <Target className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Purpose</h4>
                    </div>
                    <p className="text-obsidian/80">Acquisition, Refinance, Stabilization, Redevelopment</p>
                  </div>
                  <div className="bg-cream/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.9s'}}>
                    <div className="flex items-center mb-3">
                      <Coins className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Funding Structure</h4>
                    </div>
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
                  <div className="bg-cream/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '1.0s'}}>
                    <div className="flex items-center mb-3">
                      <Percent className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Rate Floor / Cap</h4>
                    </div>
                    <p className="text-obsidian/80">Set at closing; No rate cap required</p>
                  </div>
                  <div className="bg-cream/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '1.1s'}}>
                    <div className="flex items-center mb-3">
                      <Clock className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Extensions</h4>
                    </div>
                    <p className="text-obsidian/80">Up to two (2) extensions of 6 months each, subject to market fees</p>
                  </div>
                  <div className="bg-cream/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '1.2s'}}>
                    <div className="flex items-center mb-3">
                      <FileText className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Fees</h4>
                    </div>
                    <p className="text-obsidian/80">Competitive market-based origination and exit fees</p>
                  </div>
                  <div className="bg-cream/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '1.3s'}}>
                    <div className="flex items-center mb-3">
                      <CreditCard className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Prepayment</h4>
                    </div>
                    <p className="text-obsidian/80">Minimum interest, typically half the initial loan term</p>
                  </div>
                  <div className="bg-cream/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '1.4s'}}>
                    <div className="flex items-center mb-3">
                      <DollarSign className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Closing Timeline</h4>
                    </div>
                    <p className="text-obsidian/80">30–45 days from LOI acceptance and deposit receipt</p>
                  </div>
                  <div className="bg-cream/70 backdrop-blur-xl border border-obsidian/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '1.5s'}}>
                    <div className="flex items-center mb-3">
                      <Timer className="h-5 w-5 text-garnet-edge mr-2" />
                      <h4 className="font-semibold text-obsidian">Debt Service Reserve</h4>
                    </div>
                    <p className="text-obsidian/80">Minimum 1.00x DSCR on in-place cash flow</p>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CoreBridge;