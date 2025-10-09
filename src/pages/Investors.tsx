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
                Stay Updated on OAK Real Estate Opportunities
              </h1>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-silver-mist/80 leading-relaxed font-body font-normal">
                Get exclusive access to investment updates, market insights, and new property opportunities.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-silver-mist/90 font-body">
                  <Building2 className="h-5 w-5 text-accent-brown" />
                  <span>Exclusive Deals</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-silver-mist/90 font-body">
                  <TrendingUp className="h-5 w-5 text-accent-brown" />
                  <span>Market Insights</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-silver-mist/90 font-body">
                  <FileText className="h-5 w-5 text-accent-brown" />
                  <span>Quarterly Reports</span>
                </div>
              </div>
            </div>

            {/* Opt-in Form */}
            <div className="bg-silver-mist rounded-xl shadow-2xl p-8 mt-16 lg:mt-0">
              <h2 className="text-2xl font-display font-medium text-obsidian mb-2">
                Join Our Investor Network
              </h2>
              <p className="text-graphite-fog mb-6 font-body">
                Subscribe to receive exclusive investment opportunities and market updates.
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
            Why Join Our Investor Network
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-accent-brown/10 rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-accent-brown" />
              </div>
              <h3 className="text-lg font-display font-medium text-obsidian">
                Exclusive Opportunities
              </h3>
              <p className="text-deep-petrol font-body leading-relaxed">
                Get first access to off-market deals and pre-construction projects.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-accent-brown/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-accent-brown" />
              </div>
              <h3 className="text-lg font-display font-medium text-obsidian">
                Market Intelligence
              </h3>
              <p className="text-deep-petrol font-body leading-relaxed">
                Receive detailed market analysis and investment trend reports quarterly.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-accent-brown/10 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-accent-brown" />
              </div>
              <h3 className="text-lg font-display font-medium text-obsidian">
                Portfolio Updates
              </h3>
              <p className="text-deep-petrol font-body leading-relaxed">
                Track performance metrics and ROI across our active investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-obsidian to-graphite-fog">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-display font-medium text-silver-mist">
            Don't Miss the Next Opportunity
          </h2>
          <p className="text-lg font-body font-normal text-silver-mist/80">
            Join successful investors who trust OAK for exclusive real estate opportunities.
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
            Subscribe Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;
