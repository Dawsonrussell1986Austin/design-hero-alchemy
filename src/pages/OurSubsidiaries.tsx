import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Mail, Linkedin } from "lucide-react";

const OurSubsidiaries = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-silver-mist to-white">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Our Firm", href: "/about" },
              { label: "Our Subsidiaries", href: "/subsidiaries" }
            ]} 
          />
          
          {/* Header Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-obsidian mb-6 tracking-tight">
                Our Subsidiaries
              </h1>
              <p className="text-xl text-deep-petrol leading-relaxed max-w-3xl mx-auto">
                Oak's strategic subsidiaries extend our capabilities in specialized markets, providing comprehensive solutions across the commercial real estate and multifamily lending landscape.
              </p>
            </div>
          </section>

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
                        <h3 className="font-bold text-obsidian mb-2">Janet Bujko</h3>
                        <p className="text-sm text-deep-petrol mb-4">SVP/CHIEF UNDERWRITER - MAP AND LEAN PROGRAMS</p>
                        <div className="flex justify-center space-x-3">
                          <a href="mailto:" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <h3 className="font-bold text-obsidian mb-2">Jason Pumpelly</h3>
                        <p className="text-sm text-deep-petrol mb-4">PRESIDENT</p>
                        <div className="flex justify-center space-x-3">
                          <a href="mailto:" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <h3 className="font-bold text-obsidian mb-2">Guy Johnson</h3>
                        <p className="text-sm text-deep-petrol mb-4">PRINCIPAL</p>
                        <div className="flex justify-center space-x-3">
                          <a href="mailto:" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <h3 className="font-bold text-obsidian mb-2">Matthew J. Morgan</h3>
                        <p className="text-sm text-deep-petrol mb-4">UNDERWRITER</p>
                        <div className="flex justify-center space-x-3">
                          <a href="mailto:" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <h3 className="font-bold text-obsidian mb-2">Kevin M. Kirton</h3>
                        <p className="text-sm text-deep-petrol mb-4">UNDERWRITER</p>
                        <div className="flex justify-center space-x-3">
                          <a href="mailto:" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
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
                    Our comprehensive asset management and investment operations subsidiary, providing specialized expertise in commercial real estate finance and portfolio management.
                  </p>
                </div>
                
                {/* Red Oak Team Grid 1 */}
                <div className="bg-silver-mist/30 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-obsidian mb-6 text-center">Asset Management & Operations Team</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <h4 className="font-bold text-obsidian mb-2">Ryan Anderson</h4>
                        <p className="text-sm text-deep-petrol mb-4">VICE PRESIDENT, ASSET MANAGEMENT</p>
                        <div className="flex justify-center space-x-3">
                          <a href="mailto:" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <h4 className="font-bold text-obsidian mb-2">Stratos Athanassiades</h4>
                        <p className="text-sm text-deep-petrol mb-4">REGIONAL MANAGER</p>
                        <div className="flex justify-center space-x-3">
                          <a href="mailto:" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <h4 className="font-bold text-obsidian mb-2">Dylan Beaulieu</h4>
                        <p className="text-sm text-deep-petrol mb-4">MANAGER, INVESTOR OPERATIONS</p>
                        <div className="flex justify-center space-x-3">
                          <a href="mailto:" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <h4 className="font-bold text-obsidian mb-2">David K. Christensen</h4>
                        <p className="text-sm text-deep-petrol mb-4">REGIONAL MANAGER</p>
                        <div className="flex justify-center space-x-3">
                          <a href="mailto:" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <h4 className="font-bold text-obsidian mb-2">Nicolas Jans</h4>
                        <p className="text-sm text-deep-petrol mb-4">REGIONAL MANAGER</p>
                        <div className="flex justify-center space-x-3">
                          <a href="mailto:" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <h4 className="font-bold text-obsidian mb-2">Mac Culbertson</h4>
                        <p className="text-sm text-deep-petrol mb-4">ANALYST</p>
                        <div className="flex justify-center space-x-3">
                          <a href="mailto:" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
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
                        <h4 className="font-bold text-obsidian mb-2">Ryan Ellis</h4>
                        <p className="text-sm text-deep-petrol mb-4">VICE PRESIDENT, FINANCE</p>
                        <div className="flex justify-center space-x-3">
                          <a href="mailto:" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <h4 className="font-bold text-obsidian mb-2">Thomas J. Gorski</h4>
                        <p className="text-sm text-deep-petrol mb-4">SENIOR CRE UNDERWRITER</p>
                        <div className="flex justify-center space-x-3">
                          <a href="mailto:" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <h4 className="font-bold text-obsidian mb-2">James Myatt</h4>
                        <p className="text-sm text-deep-petrol mb-4">LOAN ADMINISTRATOR</p>
                        <div className="flex justify-center space-x-3">
                          <a href="mailto:" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <h4 className="font-bold text-obsidian mb-2">Jamie Tripp</h4>
                        <p className="text-sm text-deep-petrol mb-4">VICE PRESIDENT OF INTERNAL OPERATIONS</p>
                        <div className="flex justify-center space-x-3">
                          <a href="mailto:" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <h4 className="font-bold text-obsidian mb-2">Rob Mendham</h4>
                        <p className="text-sm text-deep-petrol mb-4">MANAGER, INFORMATION TECHNOLOGY</p>
                        <div className="flex justify-center space-x-3">
                          <a href="mailto:" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-silver-mist">
                        <h4 className="font-bold text-obsidian mb-2">Tanner Morgan</h4>
                        <p className="text-sm text-deep-petrol mb-4">CONTROLLER</p>
                        <div className="flex justify-center space-x-3">
                          <a href="mailto:" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-accent-brown hover:text-accent-brown/80 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OurSubsidiaries;