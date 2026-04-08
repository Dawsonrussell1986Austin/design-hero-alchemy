import { Button } from "@/components/ui/button";
import { Check, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ThankYouDownload = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-silver-mist to-white">
      <SEOHead
        title="Thank You"
        description="Thank you for submitting the form. Please check your inbox for the download link."
        noIndex={true}
      />
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-cream/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-brown/10 rounded-full mb-6">
              <Mail className="w-8 h-8 text-accent-brown" />
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-4">
              Thank You!
            </h1>
            
            <p className="text-lg text-graphite-fog mb-8 font-body leading-relaxed">
              Thank you for submitting the form. Please check your inbox for the download link.
            </p>
            
            <div className="flex justify-center">
              <Button
                onClick={() => navigate("/")}
                className="bg-accent-brown hover:bg-accent-brown/90 text-white font-body font-medium h-12 px-8"
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

export default ThankYouDownload;
