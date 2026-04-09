import { FileText, Bell, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const benefits = [
  { icon: FileText, text: "Distribution notices and tax documents" },
  { icon: Bell, text: "Important fund updates and required shareholder communications" },
  { icon: Shield, text: "Access to offering documents, PPMs, financial reports, and statements" },
  { icon: Calendar, text: "Time-sensitive information that may relate to liquidity, elections, or fund actions" },
];

const ThankYouInvestorAccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-abyss to-abyss/95">
      <Navigation />
      <main className="pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-accent/20 mb-4">
              <Shield className="w-8 h-8 text-gold-accent" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-display font-medium text-cream">
              Important Information for DTC Investors
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 text-left space-y-6">
            <p className="text-cream/85 font-body leading-relaxed text-lg">
              Because your investment was made through a custodial bank or broker account and
              processed via the Depository Trust Corporation ("DTC"), we do not receive your
              individual contact details directly.
            </p>
            <p className="text-cream/85 font-body leading-relaxed text-lg">
              As a result, we are unable to provide you with account-specific information
              unless you register for the portal.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 text-left space-y-6">
            <h2 className="text-xl lg:text-2xl font-display font-medium text-gold-accent">
              Why Registration Is Important
            </h2>
            <p className="text-cream/75 font-body leading-relaxed">
              In recent months, we've identified several cases where investors holding through
              a bank or broker account did not receive essential communications related to
              their investments.
            </p>
            <p className="text-cream/85 font-body leading-relaxed">
              Registering for the Oak Investor Portal ensures you receive:
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-accent/20 flex items-center justify-center mt-0.5">
                    <benefit.icon className="w-4 h-4 text-gold-accent" />
                  </div>
                  <span className="text-cream/80 font-body">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <p className="text-cream/80 font-body">
              Thank you for registering. Our team will be in touch with you shortly.
            </p>
          </div>

          <Button
            onClick={() => navigate("/investor-access")}
            variant="outline"
            className="border-cream/30 text-cream hover:bg-white/10 font-body font-medium h-12 px-8"
          >
            Register Another Investor
          </Button>
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-white/10 mt-12 mb-24">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-cream/50 text-sm font-body">
            © {new Date().getFullYear()} Oak Real Estate Partners. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ThankYouInvestorAccess;
