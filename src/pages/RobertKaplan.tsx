import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RobertKaplan = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
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
                <div className="aspect-[4/5] bg-gradient-to-br from-graphite-fog to-deep-petrol rounded-sm p-4 max-w-sm mx-auto">
                  <img 
                    src="/lovable-uploads/95be19e9-56b5-4d13-963d-51e2ac72fa2b.png"
                    alt="Robert R. Kaplan, Jr."
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-light text-gold-accent mb-3">Robert R. Kaplan, Jr.</h1>
                  <p className="text-silver-mist font-medium mb-4 uppercase tracking-wide text-lg">
                    Chief Legal Officer and Executive Vice President for Corporate Development
                  </p>
                  <div className="flex space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-garnet-edge hover:text-silver-mist hover:bg-garnet-edge/20 p-2"
                      onClick={() => window.location.href = 'mailto:rkaplan@oakrepartners.com'}
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Short intro on the same section */}
                <div className="space-y-4 text-silver-mist/80 leading-relaxed">
                  <p className="text-lg">
                    Robert R. Kaplan, Jr. serves as Chief Legal Officer and Executive Vice President for Corporate Development, 
                    for Oak Real Estate Partners (OREP) and its affiliate, Red Oak Capital Holdings. A well-regarded expert 
                    in the federal JOBS Act, the veteran securities lawyer is also a pioneer and advocate in the revision 
                    and revitalization of SEC Regulation A.
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
              As Chief Legal Officer, Rob develops and leads the corporate legal strategy for OREP and Red Oak Capital Holdings; works 
              with other executive management team members to formulate and maintain internal audits, corporate compliance 
              programs and general management policies; and oversees delivery of legal services and resources to accomplish 
              corporate goals, strategies and priorities. In his role as EVP for Corporate Development, Rob works with the 
              companies' CEO and Chief Strategy Officer to devise and execute capital markets strategy and long-term growth 
              and development plans.
            </p>
            
            <p className="text-lg leading-relaxed">
              Throughout his nearly 30-year career, Rob has completed more than $4 billion worth of securities transactions, 
              institutional financings of real estate acquisitions and M&As. He is well-versed in the placement of alternative 
              investments in the retail, independent broker-dealer and registered investment advisor market. His career also 
              includes public sector experience, having served on the Virginia Board of Housing and Community Development.
            </p>
            
            <p className="text-lg leading-relaxed">
              Rob, who holds a Juris Doctor (JD) degree from the College of William & Mary's Marshall-Wythe School of Law, has 
              been recognized as a Best Lawyer in America within his fields each year since 2013. He was also named as the 
              2022 "Lawyer of the Year" by Best Lawyers® for leveraged buyouts and private equity law.
            </p>
          </div>
        </div>
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RobertKaplan;