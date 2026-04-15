import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const ThomasMcGovern = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
      <SEOHead
        title="Thomas A. McGovern — Leadership"
        description="Meet Thomas A. McGovern, a senior leader at Oak Real Estate Partners."
        canonicalUrl="/leadership/thomas-mcgovern"
      />
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
                    src="/lovable-uploads/tom-mcgovern-headshot.jpg"
                    alt="Thomas A. McGovern"
                    className="w-full h-full object-cover object-[center_20%] rounded-sm filter grayscale"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-light text-gold-accent mb-3">Thomas A. McGovern</h1>
                  <p className="text-silver-mist font-medium mb-4 uppercase tracking-wide text-lg">
                    Chief Financial Officer
                  </p>
                  <div className="flex space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-garnet-edge hover:text-silver-mist hover:bg-garnet-edge/20 p-2"
                      onClick={() => window.location.href = 'mailto:tmcgovern@redoakcapitalholdings.com'}
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-garnet-edge hover:text-silver-mist hover:bg-garnet-edge/20 p-2"
                      onClick={() => window.open('https://www.linkedin.com/in/thomas-a-mcgovern/', '_blank')}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Short intro on the same section */}
                <div className="space-y-4 text-silver-mist/80 leading-relaxed">
                  <p className="text-lg">
                    Thomas A. McGovern serves as Chief Financial Officer of Oak Real Estate Partners (OREP) where he applies his 
                    strategic and tactical expertise to help drive the firm's continued enterprise growth. As a multifunctional executive, 
                    he leads the national commercial real estate finance company's financial accounting and reporting, investor communications, and ERP system efforts.
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
              including Morgan Stanley, Cypress Associates, RBC Capital Markets and, most recently, Nomura where, as Executive 
              Director, he executed $14 billion in high-yield financing and led the firm's insurance services coverage 
              and private equity sponsor relationship efforts.
            </p>
            
            <p className="text-lg leading-relaxed">
              Thomas earned a master's degree in business administration (MBA) from the Darden Graduate School of Business at the University of Virginia and is a summa cum laude graduate of Hamilton College 
              with a degree in economics. A Certified Public Accountant (CPA), he also holds a Chartered Financial Analyst 
              (CFA) designation and a Series 79 securities license from the Financial Industry Regulatory Authority (FINRA).
            </p>
          </div>
        </div>
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ThomasMcGovern;