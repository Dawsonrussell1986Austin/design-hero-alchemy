import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-silver-mist to-white">
      <SEOHead
        title="Thank You"
        description="Thank you for your interest in Oak Real Estate Partners. We'll be in touch soon."
        noIndex={true}
      />
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-cream/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-accent/10 rounded-full mb-6">
              <Check className="w-8 h-8 text-gold-accent" />
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-4">
              Thank You!
            </h1>
            
            <p className="text-lg text-graphite-fog mb-8 font-body leading-relaxed">
              We've received your submission and a member of our team will be in touch shortly. Thank you for your interest in Oak Real Estate Partners.
            </p>
            
            <div className="flex justify-center">
              <Button
                onClick={() => navigate("/")}
                className="bg-gold-accent hover:bg-gold-accent/90 text-cream font-body font-medium h-12 px-8"
              >
                Return Home
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;
