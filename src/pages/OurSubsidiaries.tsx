import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Mail, Linkedin } from "lucide-react";

const OurSubsidiaries = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Our Firm", href: "/about" },
          { label: "Our Subsidiaries", href: "/subsidiaries" }
        ]} 
      />

      {/* Cream background for content */}
      <div className="bg-silver-mist">
        {/* Content Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            
            <div className="mb-16">
              {/* Program Badge */}
              <div className="mb-4 text-center">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-garnet-edge/25 text-garnet-edge border border-garnet-edge/50 shadow-sm">
                  Our Subsidiaries
                </span>
              </div>
              
              <div className="text-center">
                <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-6 leading-tight">
                  Strategic Subsidiaries Extending Our Market Reach
                </h1>
                <p className="text-lg lg:text-xl font-body font-medium text-accent-brown mb-6">
                  Specialized expertise across commercial real estate and multifamily lending landscapes.
                </p>
                <p className="text-lg font-body text-obsidian/80 leading-relaxed max-w-4xl mx-auto">
                  Oak's strategic subsidiaries extend our capabilities in specialized markets, providing comprehensive solutions across the commercial real estate and multifamily lending landscape.
                </p>
              </div>
            </div>

          {/* Johnson Capital Multifamily Section */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-obsidian mb-4 tracking-tight">
                    JOHNSON CAPITAL MULTIFAMILY
                  </h2>
                  <p className="text-lg text-deep-petrol max-w-3xl mx-auto">
                    A leading originator of FHA multifamily loans, specializing in MAP and LEAN programs with a proven track record of success in affordable housing finance.
                  </p>
                </div>
                
                {/* Johnson Team Grid */}
                <div className="bg-silver-mist/30 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/72acba3c-0e00-4a56-b2b0-312d8d8d20f8.png" 
                            alt="Janet Bujko" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-obsidian mb-2">Janet Bujko</h3>
                        <p className="text-sm text-deep-petrol mb-4">SVP/CHIEF UNDERWRITER - MAP AND LEAN PROGRAMS</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/c66e3a2e-945c-491f-9234-87f426bb79f3.png" 
                            alt="Jason Pumpelly" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-obsidian mb-2">Jason Pumpelly</h3>
                        <p className="text-sm text-deep-petrol mb-4">PRESIDENT</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/9d94a353-d253-43ef-8f26-ba5b48847381.png" 
                            alt="Guy Johnson" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-obsidian mb-2">Guy Johnson</h3>
                        <p className="text-sm text-deep-petrol mb-4">PRINCIPAL</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/e8f32d5e-1126-478e-9860-811f1e095458.png" 
                            alt="Matthew J. Morgan" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-obsidian mb-2">Matthew J. Morgan</h3>
                        <p className="text-sm text-deep-petrol mb-4">UNDERWRITER</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/0bc2aab8-ce33-43a0-936d-422b00463acd.png" 
                            alt="Kevin M. Kirton" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-obsidian mb-2">Kevin M. Kirton</h3>
                        <p className="text-sm text-deep-petrol mb-4">UNDERWRITER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Red Oak Capital Holdings Section */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-accent-brown mb-4 tracking-tight">
                    RED OAK CAPITAL HOLDINGS
                  </h2>
                  <p className="text-lg text-deep-petrol max-w-3xl mx-auto mb-8">
                    Our commercial real estate lending subsidiary, providing specialized financing solutions funded by the retail investment community.
                  </p>
                </div>
                
                {/* Red Oak Team Grid 1 */}
                <div className="bg-silver-mist/30 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-obsidian mb-6 text-center">Asset Management & Operations Team</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/31c8e413-e49d-45f0-b289-23cef6842eed.png" 
                            alt="Ryan Anderson" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-obsidian mb-2">Ryan Anderson</h4>
                        <p className="text-sm text-deep-petrol mb-4">VICE PRESIDENT, ASSET MANAGEMENT</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/374c72eb-53c2-4e84-b46e-b78e58ef7a85.png" 
                            alt="Stratos Athanassiades" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-obsidian mb-2">Stratos Athanassiades</h4>
                        <p className="text-sm text-deep-petrol mb-4">REGIONAL MANAGER</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/55c42f2a-0ab2-49c3-94da-646480e1fcc7.png" 
                            alt="Dylan Beaulieu" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-obsidian mb-2">Dylan Beaulieu</h4>
                        <p className="text-sm text-deep-petrol mb-4">PRIMARY SERVICING MANAGER</p>
                      </div>
                    </div>
                    
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/1900f810-94ae-41a2-a5c3-61a55ad00f66.png" 
                            alt="Nicolas Jans" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-obsidian mb-2">Nicolas Jans</h4>
                        <p className="text-sm text-deep-petrol mb-4">REGIONAL MANAGER</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/1747f8f3-160f-49d4-b713-dd72be51d004.png" 
                            alt="Mac Culbertson" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-obsidian mb-2">Mac Culbertson</h4>
                        <p className="text-sm text-deep-petrol mb-4">ANALYST</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Red Oak Team Grid 2 */}
                <div className="bg-silver-mist/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-obsidian mb-6 text-center">Finance & Operations Team</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/76c2daaa-5415-480e-85df-16119fbc639a.png" 
                            alt="Ryan Ellis" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-obsidian mb-2">Ryan Ellis</h4>
                        <p className="text-sm text-deep-petrol mb-4">VICE PRESIDENT, FINANCE</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/b73b34cc-ac9e-499c-b7ac-c09f2097413e.png" 
                            alt="Thomas J. Gorski" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-obsidian mb-2">Thomas J. Gorski</h4>
                        <p className="text-sm text-deep-petrol mb-4">SENIOR CRE UNDERWRITER</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/569d91ea-63ba-4d6d-ae15-e224a63f481c.png" 
                            alt="James Myatt" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-obsidian mb-2">James Myatt</h4>
                        <p className="text-sm text-deep-petrol mb-4">LOAN ADMINISTRATOR</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/d79e003e-2083-4515-bd8c-da4e7748ef9d.png" 
                            alt="Jamie Tripp" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-obsidian mb-2">Jamie Tripp</h4>
                        <p className="text-sm text-deep-petrol mb-4">VICE PRESIDENT OF INTERNAL OPERATIONS</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/172b9df3-c5a8-4a00-83f7-12c550923d84.png" 
                            alt="Rob Mendham" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-obsidian mb-2">Rob Mendham</h4>
                        <p className="text-sm text-deep-petrol mb-4">MANAGER, INFORMATION TECHNOLOGY</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/dceb532f-a791-412e-a1fc-638c2122d06d.png" 
                            alt="Tanner Morgan" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-obsidian mb-2">Tanner Morgan</h4>
                        <p className="text-sm text-deep-petrol mb-4">CONTROLLER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default OurSubsidiaries;