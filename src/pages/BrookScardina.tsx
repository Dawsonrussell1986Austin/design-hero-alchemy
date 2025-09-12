import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BrookScardina = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      {/* Navigation */}
      <Navigation />
      
      {/* Back Button */}
      <div className="container mx-auto px-6 lg:px-8 pt-8">
        <Button 
          variant="ghost"
          className="text-silver-mist hover:text-accent-brown transition-all duration-300"
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
                <div className="aspect-[4/5] bg-gradient-to-br from-graphite-fog to-deep-petrol rounded-sm p-4 max-w-sm mx-auto">
                  <img 
                    src="/lovable-uploads/54494c6c-43d1-47ee-bdba-724c370778b3.png"
                    alt="Brook Scardina"
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-light text-accent-brown mb-3">Brook Scardina</h1>
                  <p className="text-silver-mist font-medium mb-4 uppercase tracking-wide text-lg">
                    Managing Partner, Capital Markets & Investments
                  </p>
                  <div className="flex space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-garnet-edge hover:text-silver-mist hover:bg-garnet-edge/20 p-2"
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
                    Brook Scardina leads Capital Markets & Investments for Oak Real Estate Partners (OREP), 
                    where he leads the external capital markets strategy for the national fund manager focused on the 
                    institutional investment sector. He is responsible for advising on, solving and delivering alternative 
                    investment solutions that support the return objectives of institutional investors. Based in Irvine, California.
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

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-8">
              Connect with Brook
            </h2>
            <p className="text-lg text-silver-mist/80 leading-relaxed mb-12">
              Interested in learning more about Oak's capital markets strategy and institutional investment solutions?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
              >
                Contact Brook
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-silver-mist/40 text-silver-mist hover:bg-silver-mist hover:text-obsidian hover:border-garnet-edge px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-sm backdrop-blur-sm"
              >
                View All Leadership
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BrookScardina;