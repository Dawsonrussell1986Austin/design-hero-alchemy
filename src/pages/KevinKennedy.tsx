import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";


const KevinKennedy = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
      <SEOHead
        title="Kevin Kennedy — Leadership"
        description="Meet Kevin Kennedy, a key member of the Oak Real Estate Partners leadership team."
        canonicalUrl="/leadership/kevin-kennedy"
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
                    src="/lovable-uploads/kevin-kennedy-headshot.jpg"
                    alt="Kevin P. Kennedy"
                    className="w-full h-full object-cover object-top rounded-sm grayscale"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-light text-gold-accent mb-3">Kevin P. Kennedy</h1>
                  <p className="text-silver-mist font-medium mb-4 uppercase tracking-wide text-lg">
                    Chief Sales and Distribution Officer
                  </p>
                  <div className="flex space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-garnet-edge hover:text-silver-mist hover:bg-garnet-edge/20 p-2"
                      onClick={() => window.location.href = 'mailto:kkennedy@redoakcapitalholdings.com'}
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-garnet-edge hover:text-silver-mist hover:bg-garnet-edge/20 p-2"
                      onClick={() => window.open('https://www.linkedin.com/in/kevinpskennedy/', '_blank')}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Short intro on the same section */}
                <div className="space-y-4 text-silver-mist/80 leading-relaxed">
                  <p className="text-lg">
                    Kevin P. Kennedy is a Managing Principal and Chief Sales and Distribution officer with Red Oak Capital Holdings, 
                    responsible for capital acquisition, platform distribution and broker dealer-relationships for the firm's offerings. 
                    He has been with the commercial real estate finance firm since its inception in 2016 and is based in the Detroit, Michigan area.
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
              Kevin has a long history in sales and leadership roles within the investment and asset management industry. 
              Before Red Oak, he spent 26 years at BlackRock, where he was most recently a Managing Director and Divisional 
              Sales Director. In this role, he led a team that marketed and sold BlackRock's active, passive and alternative 
              investments across a 22-state area. Kevin also spent the first decade of his career with Merrill Lynch Investment 
              Managers, last serving as a Director and Vice President in the Midwest.
            </p>
            
            <p className="text-lg leading-relaxed">
              A graduate of Pittsburgh's Duquesne University, Kevin holds Series 7, 24, 63, 65 and 66 licenses from the 
              Financial Industry Regulatory Authority (FINRA). He received a Certified Investment Management Analyst 
              certification (CIMA) designation from Wharton Executive Education-University of Pennsylvania in 2007.
            </p>
          </div>
        </div>
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default KevinKennedy;