import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimplePageHeader from "@/components/SimplePageHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

const Offerings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      <Navigation />
      
      {/* Simple Page Header */}
      <SimplePageHeader title="Offerings" />

      {/* Open Offerings Section */}
      <section className="py-20 bg-silver-mist/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-6">
                Open Offerings
              </h2>
              <p className="text-lg text-silver-mist/80 leading-relaxed">
                Currently available investment opportunities for qualified investors
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6 p-8 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-sm font-medium text-green-400 uppercase tracking-wide">Open</span>
                </div>
                <h3 className="text-2xl font-medium text-silver-mist">
                  Oak Institutional Credit Solutions, LLC
                </h3>
                <div className="space-y-2">
                  <p className="text-accent-brown font-medium">
                    Regulation D 506(c)
                  </p>
                </div>
                <Button 
                  size="lg"
                  className="w-full bg-accent-brown hover:bg-accent-brown/90 text-silver-mist font-medium tracking-wide transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>

              <div className="space-y-6 p-8 bg-gradient-to-br from-accent-brown/20 to-garnet-edge/20 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-sm font-medium text-green-400 uppercase tracking-wide">Open</span>
                </div>
                <h3 className="text-2xl font-medium text-silver-mist">
                  Oak Parallel Bridge Credit Fund
                </h3>
                <div className="space-y-2">
                  <p className="text-accent-brown font-medium">
                    Regulation D 506(c)
                  </p>
                </div>
                <Button 
                  size="lg"
                  className="w-full bg-accent-brown hover:bg-accent-brown/90 text-silver-mist font-medium tracking-wide transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closed Offerings Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-6">
                Closed to New Investors
              </h2>
              <p className="text-lg text-silver-mist/80 leading-relaxed">
                Previous offerings no longer accepting new investments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-4 p-6 bg-silver-mist/5 backdrop-blur-sm border border-silver-mist/20 rounded-lg opacity-75">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="h-5 w-5 text-silver-mist/60" />
                  <span className="text-sm font-medium text-silver-mist/60 uppercase tracking-wide">Closed</span>
                </div>
                <h3 className="text-lg font-medium text-silver-mist">
                  Oak Capital Intermediate Income Fund, LLC
                </h3>
                <p className="text-silver-mist/70 text-sm">
                  Reg A+, Tier II Bond
                </p>
                <p className="text-silver-mist/60 text-sm italic">
                  Closed to New Investors
                </p>
              </div>

              <div className="space-y-4 p-6 bg-silver-mist/5 backdrop-blur-sm border border-silver-mist/20 rounded-lg opacity-75">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="h-5 w-5 text-silver-mist/60" />
                  <span className="text-sm font-medium text-silver-mist/60 uppercase tracking-wide">Closed</span>
                </div>
                <h3 className="text-lg font-medium text-silver-mist">
                  Oak Capital Fund VI, LLC
                </h3>
                <p className="text-silver-mist/70 text-sm">
                  Reg A+, Tier II General Solicitation Offering
                </p>
                <p className="text-silver-mist/60 text-sm italic">
                  Closed to New Investors
                </p>
              </div>

              <div className="space-y-4 p-6 bg-silver-mist/5 backdrop-blur-sm border border-silver-mist/20 rounded-lg opacity-75">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="h-5 w-5 text-silver-mist/60" />
                  <span className="text-sm font-medium text-silver-mist/60 uppercase tracking-wide">Closed</span>
                </div>
                <h3 className="text-lg font-medium text-silver-mist">
                  Oak Capital Fund V, LLC
                </h3>
                <p className="text-silver-mist/70 text-sm">
                  Reg A+, Tier II Bond
                </p>
                <p className="text-silver-mist/60 text-sm italic">
                  Closed to New Investors
                </p>
              </div>

              <div className="space-y-4 p-6 bg-silver-mist/5 backdrop-blur-sm border border-silver-mist/20 rounded-lg opacity-75">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="h-5 w-5 text-silver-mist/60" />
                  <span className="text-sm font-medium text-silver-mist/60 uppercase tracking-wide">Closed</span>
                </div>
                <h3 className="text-lg font-medium text-silver-mist">
                  Oak Capital Fund IV, LLC
                </h3>
                <p className="text-silver-mist/70 text-sm">
                  Reg A+, Tier II Bond
                </p>
                <p className="text-silver-mist/60 text-sm italic">
                  Closed to New Investors
                </p>
              </div>

              <div className="space-y-4 p-6 bg-silver-mist/5 backdrop-blur-sm border border-silver-mist/20 rounded-lg opacity-75">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="h-5 w-5 text-silver-mist/60" />
                  <span className="text-sm font-medium text-silver-mist/60 uppercase tracking-wide">Closed</span>
                </div>
                <h3 className="text-lg font-medium text-silver-mist">
                  Oak Capital Fund III, LLC
                </h3>
                <p className="text-silver-mist/70 text-sm">
                  Reg A+, Tier II Bond
                </p>
                <p className="text-silver-mist/60 text-sm italic">
                  Closed to New Investors
                </p>
              </div>

              <div className="space-y-4 p-6 bg-silver-mist/5 backdrop-blur-sm border border-silver-mist/20 rounded-lg opacity-75">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="h-5 w-5 text-silver-mist/60" />
                  <span className="text-sm font-medium text-silver-mist/60 uppercase tracking-wide">Closed</span>
                </div>
                <h3 className="text-lg font-medium text-silver-mist">
                  Oak Capital Fund II, LLC
                </h3>
                <p className="text-silver-mist/70 text-sm">
                  Reg A+, Tier II Bond
                </p>
                <p className="text-silver-mist/60 text-sm italic">
                  Closed to New Investors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-silver-mist/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-8">
              Interested in Our Offerings?
            </h2>
            <p className="text-lg text-silver-mist/80 leading-relaxed mb-12">
              Contact our investment team to learn more about current opportunities and qualification requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
              >
                Contact Investment Team
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-silver-mist/40 text-silver-mist hover:bg-silver-mist hover:text-obsidian hover:border-garnet-edge px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm backdrop-blur-sm"
              >
                Request Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offerings;