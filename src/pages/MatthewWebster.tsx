import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const MatthewWebster = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
      <SEOHead
        title="Matthew Webster — Leadership"
        description="Meet Matthew Webster, a key member of the Oak Real Estate Partners leadership team."
        canonicalUrl="/leadership/matthew-webster"
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
                    src="/lovable-uploads/matt-webster-headshot.jpg"
                    alt="Matthew Webster"
                    className="w-full h-full object-cover object-top rounded-sm filter grayscale"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-light text-gold-accent mb-3">Matthew Webster</h1>
                  <p className="text-silver-mist font-medium mb-4 uppercase tracking-wide text-lg">
                    Executive Vice President / Chief Credit Officer
                  </p>
                  <div className="flex space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-garnet-edge hover:text-silver-mist hover:bg-garnet-edge/20 p-2"
                      onClick={() => window.location.href = 'mailto:mwebster@redoakcapitalholdings.com'}
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-garnet-edge hover:text-silver-mist hover:bg-garnet-edge/20 p-2"
                      onClick={() => window.open('https://www.linkedin.com/in/matthewawebster/', '_blank')}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Short intro on the same section */}
                <div className="space-y-4 text-silver-mist/80 leading-relaxed">
                  <p className="text-lg">
                    Matthew Webster serves as Chief Credit Officer of Oak Real Estate Partners (OREP), where he oversees 
                    the firm's credit strategy, portfolio risk management, and underwriting operations. Based in Charlotte, 
                    North Carolina, Matt plays a central role in shaping OREP's investment strategy.
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
              In addition to his role at OREP, Matt oversees credit and risk management at Red Oak Capital Holdings, 
              where he directs the firm's lending and asset management operations. His dual responsibilities across 
              OREP and Red Oak enable him to align structured lending strategies with institutional investment initiatives,
              ensuring an integrated approach to portfolio risk and capital allocation. Matt will also sit on both 
              companies' Credit and Investment Committees.
            </p>
            
            <p className="text-lg leading-relaxed">
              With more than 30 years of experience in capital markets, structured finance, and risk management, Matt 
              has worked across balance sheet and securitized lending, senior and mezzanine debt, equity investments, 
              and non-performing loan acquisitions. He has structured and executed over $250 billion in transactions 
              and worked with some of the world's most sophisticated institutional investors, including sovereign wealth 
              funds, global REITs, and alternative asset managers.
            </p>
            
            <p className="text-lg leading-relaxed">
              Before joining OREP, Matt was Global Head of Real Estate Finance at HSBC, managing more than $100 billion 
              in commercial real estate exposure. His expertise spans key roles at Morgan Stanley, Goldman Sachs, Hypo 
              Real Estate, and Fitch Ratings, where he led major capital markets initiatives and advised regulatory bodies 
              on financial stability and capital requirements.
            </p>
            
            <p className="text-lg leading-relaxed">
              Matt holds a Chartered Financial Analyst (CFA) certificate and earned dual bachelor's degrees in Business 
              Management and Economics from North Carolina State University. He frequently lectures at universities and 
              contributes to industry forums on commercial real estate finance and investment strategies.
            </p>
          </div>
        </div>
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MatthewWebster;