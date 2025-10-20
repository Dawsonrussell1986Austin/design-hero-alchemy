import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Investors = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-silver-mist leading-tight tracking-tight">
                Thank You for Investing with Oak
              </h1>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-silver-mist/80 leading-relaxed font-body font-normal">
                We're grateful for your trust and excited to share what's next in our real estate credit strategy. Your commitment gives us the opportunity to do what we do best — protect and grow capital through disciplined real estate credit strategies.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-silver-mist/90 font-body">
                  <Building2 className="h-5 w-5 text-accent-brown" />
                  <span>Capital preservation first</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-silver-mist/90 font-body">
                  <TrendingUp className="h-5 w-5 text-accent-brown" />
                  <span>Attractive, risk-adjusted returns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-silver-mist/90 font-body">
                  <FileText className="h-5 w-5 text-accent-brown" />
                  <span>Transparent reporting</span>
                </div>
              </div>
            </div>

            {/* Opt-in Form */}
            <div className="bg-silver-mist rounded-xl shadow-2xl p-8 mt-16 lg:mt-0">
              <h2 className="text-2xl font-display font-medium text-obsidian mb-2">
                Stay Connected
              </h2>
              <p className="text-graphite-fog mb-6 font-body">
                Join our monthly Investor Update Calls and receive important updates about your investment.
              </p>
              <iframe 
                src="https://go.oakrepartners.com/l/1105131/2025-10-09/b4jkzt" 
                width="100%" 
                height="500" 
                style={{ border: 0 }}
                title="Investor Subscription Form"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-silver-mist">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-display font-medium text-center mb-12 text-obsidian">
            Our Commitment to You
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-accent-brown/10 rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-accent-brown" />
              </div>
              <h3 className="text-lg font-display font-medium text-obsidian">
                Senior-Position Lending
              </h3>
              <p className="text-deep-petrol font-body leading-relaxed">
                Focused exclusively on senior-position commercial real estate lending with disciplined underwriting.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-accent-brown/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-accent-brown" />
              </div>
              <h3 className="text-lg font-display font-medium text-obsidian">
                Monthly Update Calls
              </h3>
              <p className="text-deep-petrol font-body leading-relaxed">
                Review live deals, walk through real case studies, and see how your capital is working.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-accent-brown/10 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-accent-brown" />
              </div>
              <h3 className="text-lg font-display font-medium text-obsidian">
                Thoughtful Structure
              </h3>
              <p className="text-deep-petrol font-body leading-relaxed">
                Delivering structured credit solutions designed to prioritize capital preservation and generate attractive returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-obsidian to-graphite-fog">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-display font-medium text-silver-mist">
            We're Here to Help
          </h2>
          <p className="text-lg font-body font-normal text-silver-mist/80">
            We're excited to keep the conversation going and share how we're continuing to put your capital to work with discipline and care.
          </p>
          <Button
            size="lg"
            className="bg-accent-brown hover:bg-accent-brown/90 text-white text-base font-body font-medium"
            onClick={() =>
              document
                .querySelector("iframe")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Stay Updated
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;
