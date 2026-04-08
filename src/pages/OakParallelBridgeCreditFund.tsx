import { FileDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OakParallelBridgeCreditFund = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-silver-mist leading-tight tracking-tight">
              Oak Parallel Bridge Credit Fund
            </h1>
            <p className="text-lg text-silver-mist/80 leading-relaxed font-body font-normal max-w-2xl mx-auto">
              Onboarding Instructions for ERISA accounts including public and corporate pension plans, IRAs and qualified accounts.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 bg-silver-mist">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-display font-medium text-obsidian">
                Onboarding Instructions
              </h2>
              <p className="text-deep-petrol font-body leading-relaxed">
                As outlined in the Fund Administrator Transition letter, HC Global Fund Services is now the independent fund administrator for the Oak Funds effective January 1, 2026. HC Global will facilitate investor onboarding and the processing of subscription booklets and required documentation.
              </p>
              <p className="text-deep-petrol font-body leading-relaxed">
                The Funds reside on both the Fidelity and Schwab platforms.
              </p>
            </div>

            {/* Download Section */}
            <div className="bg-obsidian/5 rounded-lg p-8 space-y-6">
              <h3 className="text-xl font-display font-medium text-obsidian">
                Download Subscription Documents
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gold-accent hover:bg-gold-accent/90 text-cream font-body font-medium"
                  asChild
                >
                  <a href="/documents/Oak_Parallel_Bridge_Credit_Fund_Subscription_Agreement.pdf" download target="_blank" rel="noopener noreferrer">
                    <FileDown className="mr-2 h-5 w-5" />
                    Subscription Agreement
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold-accent text-gold-accent hover:bg-gold-accent/10 font-body font-medium"
                  asChild
                >
                  <a href="/documents/HC_Global_AML_Requirements.pdf" download target="_blank" rel="noopener noreferrer">
                    <FileDown className="mr-2 h-5 w-5" />
                    KYC/AML Requirements
                  </a>
                </Button>
              </div>
              <p className="text-sm text-deep-petrol/70 font-body">
                Complete and upload the subscription booklet and required documentation to HC Global Fund Services team. The monthly close schedule and upload instructions will be provided upon request.
              </p>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-display font-medium text-obsidian">
                Support & Inquiries
              </h3>
              <p className="text-deep-petrol font-body leading-relaxed">
                All onboarding inquiries or investor level support can be directed to the HC Global Fund Services support team:
              </p>
              <a 
                href="mailto:InvestorRelations@hcglobalfs.com"
                className="inline-flex items-center gap-2 text-gold-accent hover:text-gold-accent/80 transition-colors font-body font-medium"
              >
                <Mail className="h-5 w-5" />
                InvestorRelations@hcglobalfs.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OakParallelBridgeCreditFund;
