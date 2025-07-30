import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThomasMcGovern = () => {
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
                    src="/lovable-uploads/8751a90a-69d4-476a-9989-f106bb73f3e5.png"
                    alt="Thomas A. McGovern"
                    className="w-full h-full object-cover rounded-sm filter grayscale"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-light text-accent-brown mb-3">Thomas A. McGovern</h1>
                  <p className="text-silver-mist font-medium mb-4 uppercase tracking-wide text-lg">
                    Chief Financial Officer
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
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Short intro on the same section */}
                <div className="space-y-4 text-silver-mist/80 leading-relaxed">
                  <p className="text-lg">
                    Thomas A. McGovern is Chief Financial Officer of Red Oak Capital Holdings, where he applies his 
                    strategic and tactical capabilities to help drive the firm's continued enterprise growth. Based in 
                    Charlotte, North Carolina, the multifunctional executive leads the national commercial real estate 
                    finance company's financial accounting and reporting, investor communications, and ERP systems requisition efforts.
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
              Thomas' capital markets track record spans more than two decades of working with companies and sponsors 
              to effect private placements, high yield and investment-grade debt issuance, IPOs, and follow-on equity 
              offerings. He has served as an Investment Banker and Equity Research Analyst for financial services firms 
              including Morgan Stanley, Cypress Associates, RBC Capital Markets and, most recently, Nomura. As Executive 
              Director, he executed $14 billion in high-yield financing and led the firm's insurance services coverage 
              and private equity sponsor relationship efforts.
            </p>
            
            <p className="text-lg leading-relaxed">
              Thomas earned a master's degree in business administration from Charlottesville, VA's Darden Graduate 
              School of Business at the University of Virginia and is a summa cum laude graduate of Hamilton College 
              with a degree in economics. A Certified Public Accountant, he also holds a Chartered Financial Analyst 
              designation and a Series 79 securities license from the Financial Industry Regulatory Authority (FINRA).
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-8">
              Connect with Thomas
            </h2>
            <p className="text-lg text-silver-mist/80 leading-relaxed mb-12">
              Interested in learning more about Oak's financial strategy and capital markets expertise?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
              >
                Contact Thomas
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

export default ThomasMcGovern;