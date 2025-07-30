import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RaymondDavis = () => {
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
                    src="/lovable-uploads/837db76c-f393-41f0-aeeb-03c5f011e440.png"
                    alt="Raymond T. Davis"
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-light text-accent-brown mb-3">Raymond T. Davis</h1>
                  <p className="text-silver-mist font-medium mb-4 uppercase tracking-wide text-lg">
                    President & Chief Strategy Officer
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
                    Raymond T. Davis is President & Chief Strategy Officer of Red Oak Capital Holdings and its affiliate, 
                    Oak Real Estate Partners (OREP). Operating out of Detroit, Michigan, he is charged with developing, 
                    communicating, and sustaining the companies' medium- and long-term strategic initiatives.
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
              Over the course of his 25-year career, Ray has gained significant expertise in capital markets, corporate 
              growth and strategic initiatives while working with family office pension funds and institutional clients.
            </p>
            
            <p className="text-lg leading-relaxed">
              A seasoned commercial real estate capital markets professional, Ray previously served as a Managing Principal 
              and Corporate Forensics Advisory Consultant for Archon Capital LP. He also co-founded JADDA Capital Management, 
              where he led origination and portfolio diversification efforts for the investment platform.
            </p>
            
            <p className="text-lg leading-relaxed">
              Ray, who studied business and economics at Wayne State University, holds a Series 22 license and Central 
              Registration Depository (CRD) registration from the Financial Industry Regulatory Authority (FINRA).
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-silver-mist mb-8">
              Connect with Raymond
            </h2>
            <p className="text-lg text-silver-mist/80 leading-relaxed mb-12">
              Interested in learning more about Oak's strategic initiatives and capital markets expertise?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
              >
                Contact Raymond
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

export default RaymondDavis;