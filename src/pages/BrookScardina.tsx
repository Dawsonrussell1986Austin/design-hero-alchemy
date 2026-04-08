import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BrookScardina = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
      {/* Navigation */}
      <Navigation />
      
      {/* Back Button */}
      <div className="container mx-auto px-6 lg:px-8 pt-8">
        <Button 
          variant="ghost"
          className="text-silver-mist hover:text-gold-accent transition-all duration-300"
          onClick={() => navigate("/leadership")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Leadership
        </Button>
      </div>

      {/* Hero Section */}
      <div className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <div className="aspect-[4/5] bg-gradient-to-br from-graphite-fog to-graphite-fog rounded-sm p-4 max-w-sm mx-auto">
                  <img 
                    src="/lovable-uploads/54494c6c-43d1-47ee-bdba-724c370778b3.png"
                    alt="Brook Scardina"
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-light text-gold-accent mb-3">Brook Scardina</h1>
                  <p className="text-silver-mist font-medium mb-4 uppercase tracking-wide text-lg">
                    Managing Partner, Capital Markets & Investments
                  </p>
                  <div className="flex space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-garnet-edge hover:text-silver-mist hover:bg-garnet-edge/20 p-2"
                      onClick={() => window.location.href = 'mailto:bscardina@oakrepartners.com'}
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-garnet-edge hover:text-silver-mist hover:bg-garnet-edge/20 p-2"
                      onClick={() => window.open('https://www.linkedin.com/in/brook-scardina-00bb5415/', '_blank')}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Short intro on the same section */}
                <div className="space-y-4 text-silver-mist/80 leading-relaxed">
                  <p className="text-lg">
                    Brook Scardina leads Capital Markets & Investments for Oak Real Estate Partners, 
                    where he leads the external capital markets strategy for the national fund manager focused on the 
                    institutional investment sector. He is responsible for advising on, solving and delivering alternative 
                    investment solutions that support the return objectives of institutional investors. He is based in Atlanta, GA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Bio Content */}
      <div className="py-16 bg-silver-mist/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6 text-silver-mist/90">
            <p className="text-lg leading-relaxed">
              Over the past two decades, Brook has been involved in the participation and underwriting of more than 
              $12 billion in capital deployed across multiple asset classes including equity, fixed income, diversifying 
              strategies, hedge funds and alternative assets, and complex investment strategies. His career includes roles 
              managing the financial and investment risk complexities for well-known organizations such as the Georgia Tech 
              Foundation, UNC Management Company and UPS Group Trust, a $29-billion defined benefit trust. Immediately prior 
              to joining OREP, Brook was Head of Institutional Consulting for Crescent Wealth Advisory.
            </p>
            
            <p className="text-lg leading-relaxed">
              Brook, who holds a Series 65 certification from the Financial Industry Regulatory Authority (FINRA), earned 
              master's degree in business administration (MBA) from Auburn University and a bachelor's degree in finance from 
              Georgia Southern University. He has served as a client advisory board member of the Bank of New York Mellon 
              and is the current Chairman of the Board for the Roswell United Methodist Foundation in Atlanta, where he is based.
            </p>
          </div>
        </div>
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BrookScardina;