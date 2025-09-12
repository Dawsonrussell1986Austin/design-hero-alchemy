import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GaryBechtel = () => {
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
                    src="/lovable-uploads/530fe815-0792-49e8-86f6-0355f22308eb.png"
                    alt="Gary Bechtel"
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-light text-accent-brown mb-3">Gary Bechtel</h1>
                  <p className="text-silver-mist font-medium mb-4 uppercase tracking-wide text-lg">
                    Chief Executive Officer
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
                      onClick={() => window.open("https://www.linkedin.com/in/gary-bechtel-45b2209/", "_blank")}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Short intro on the same section */}
                <div className="space-y-4 text-silver-mist/80 leading-relaxed">
                  <p className="text-lg">
                    Gary Bechtel heads the investment management leadership team at Oak Real Estate Partners (OREP). 
                    As CEO, he has direct oversight of all loan portfolios and operations for the 
                    company, based in Charlotte, North Carolina.
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
              In addition to his duties with OREP, Gary is Chief Executive Officer of Red Oak Capital Holdings, 
              a family of commercial real estate finance and investment companies that primarily cater to investors 
              within the Broker-Dealer and RIA channels. As such, he is responsible for managing the lending operations 
              and business development efforts for the firm, which provides commercial real estate lending, servicing, 
              workout, and turnaround products and services.
            </p>
            
            <p className="text-lg leading-relaxed">
              Over the course of his nearly 40-year career, he has been involved in the origination, underwriting, 
              structuring, placement and closing of more than $10 billion in commercial debt transactions, utilizing 
              various financing structures including permanent, bridge, equity, mezzanine, and construction loans.
            </p>
            
            <p className="text-lg leading-relaxed">
              Gary has held multiple leadership roles with both lenders and intermediaries throughout his career. 
              He joined OREP and Red Oak after serving as President of Money360, where he directed and executed the 
              firm's expansion strategy and sat on its Credit Committee and Board of Directors. Prior to that, he was 
              Chief Lending and Originations Officer of CU Business Partners, LLC, a major national credit union service 
              organization, preceded by positions with such companies as Grubb & Ellis, Meridian Capital, Johnson Capital 
              and FINOVA Realty Capital.
            </p>
            
            <p className="text-lg leading-relaxed">
              Gary attended the University of California, San Diego, majoring in economics. He currently sits on the 
              Executive Board of the California Bankers Association and has been a longtime member of the Mortgage 
              Bankers Association of America (MBA), National Association of Industrial and Office Properties (NAIOP), 
              and International Council of Shopping Centers (ICSC). Gary has been a featured moderator/speaker at 
              numerous industry events and is a frequent contributor to several regional and national publications.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-8">
              Connect with Gary
            </h2>
            <p className="text-lg text-silver-mist/80 leading-relaxed mb-12">
              Interested in learning more about Oak's investment approach and leadership philosophy?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
              >
                Contact Gary
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

export default GaryBechtel;