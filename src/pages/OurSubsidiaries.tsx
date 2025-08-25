import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Mail, Linkedin } from "lucide-react";

const OurSubsidiaries = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-silver-mist via-silver-mist to-charcoal-gray">
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
              <p className="text-xl text-charcoal-gray/80 leading-relaxed">
                Oak's strategic subsidiaries extend our capabilities in specialized markets, providing comprehensive solutions across the commercial real estate and multifamily lending landscape.
              </p>
            </div>
          </section>

          {/* Johnson Capital Multifamily Section */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-obsidian mb-4 tracking-tight">
                  JOHNSON CAPITAL MULTIFAMILY
                </h2>
                <p className="text-lg text-charcoal-gray/80 max-w-3xl mx-auto">
                  A leading originator of FHA multifamily loans, specializing in MAP and LEAN programs with a proven track record of success in affordable housing finance.
                </p>
              </div>
              
              {/* Johnson Team Grid */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-charcoal-gray/5 rounded-lg p-6 hover:bg-charcoal-gray/10 transition-colors duration-300">
                      <h3 className="font-bold text-obsidian mb-2">Janet Bujko</h3>
                      <p className="text-sm text-charcoal-gray/70 mb-4">SVP/CHIEF UNDERWRITER - MAP AND LEAN PROGRAMS</p>
                      <div className="flex justify-center space-x-3">
                        <a href="mailto:" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-charcoal-gray/5 rounded-lg p-6 hover:bg-charcoal-gray/10 transition-colors duration-300">
                      <h3 className="font-bold text-obsidian mb-2">Jason Pumpelly</h3>
                      <p className="text-sm text-charcoal-gray/70 mb-4">PRESIDENT</p>
                      <div className="flex justify-center space-x-3">
                        <a href="mailto:" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-charcoal-gray/5 rounded-lg p-6 hover:bg-charcoal-gray/10 transition-colors duration-300">
                      <h3 className="font-bold text-obsidian mb-2">Guy Johnson</h3>
                      <p className="text-sm text-charcoal-gray/70 mb-4">PRINCIPAL</p>
                      <div className="flex justify-center space-x-3">
                        <a href="mailto:" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-charcoal-gray/5 rounded-lg p-6 hover:bg-charcoal-gray/10 transition-colors duration-300">
                      <h3 className="font-bold text-obsidian mb-2">Matthew J. Morgan</h3>
                      <p className="text-sm text-charcoal-gray/70 mb-4">UNDERWRITER</p>
                      <div className="flex justify-center space-x-3">
                        <a href="mailto:" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-charcoal-gray/5 rounded-lg p-6 hover:bg-charcoal-gray/10 transition-colors duration-300">
                      <h3 className="font-bold text-obsidian mb-2">Kevin M. Kirton</h3>
                      <p className="text-sm text-charcoal-gray/70 mb-4">UNDERWRITER</p>
                      <div className="flex justify-center space-x-3">
                        <a href="mailto:" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
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
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-garnet-edge mb-4 tracking-tight">
                  RED OAK CAPITAL HOLDINGS
                </h2>
                <p className="text-lg text-charcoal-gray/80 max-w-3xl mx-auto">
                  Our comprehensive asset management and investment operations subsidiary, providing specialized expertise in commercial real estate finance and portfolio management.
                </p>
              </div>
              
              {/* Red Oak Team Grid 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
                <h3 className="text-xl font-bold text-obsidian mb-6 text-center">Asset Management & Operations Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-charcoal-gray/5 rounded-lg p-6 hover:bg-charcoal-gray/10 transition-colors duration-300">
                      <h4 className="font-bold text-obsidian mb-2">Ryan Anderson</h4>
                      <p className="text-sm text-charcoal-gray/70 mb-4">VICE PRESIDENT, ASSET MANAGEMENT</p>
                      <div className="flex justify-center space-x-3">
                        <a href="mailto:" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-charcoal-gray/5 rounded-lg p-6 hover:bg-charcoal-gray/10 transition-colors duration-300">
                      <h4 className="font-bold text-obsidian mb-2">Stratos Athanassiades</h4>
                      <p className="text-sm text-charcoal-gray/70 mb-4">REGIONAL MANAGER</p>
                      <div className="flex justify-center space-x-3">
                        <a href="mailto:" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-charcoal-gray/5 rounded-lg p-6 hover:bg-charcoal-gray/10 transition-colors duration-300">
                      <h4 className="font-bold text-obsidian mb-2">Dylan Beaulieu</h4>
                      <p className="text-sm text-charcoal-gray/70 mb-4">MANAGER, INVESTOR OPERATIONS</p>
                      <div className="flex justify-center space-x-3">
                        <a href="mailto:" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-charcoal-gray/5 rounded-lg p-6 hover:bg-charcoal-gray/10 transition-colors duration-300">
                      <h4 className="font-bold text-obsidian mb-2">David K. Christensen</h4>
                      <p className="text-sm text-charcoal-gray/70 mb-4">REGIONAL MANAGER</p>
                      <div className="flex justify-center space-x-3">
                        <a href="mailto:" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-charcoal-gray/5 rounded-lg p-6 hover:bg-charcoal-gray/10 transition-colors duration-300">
                      <h4 className="font-bold text-obsidian mb-2">Nicolas Jans</h4>
                      <p className="text-sm text-charcoal-gray/70 mb-4">REGIONAL MANAGER</p>
                      <div className="flex justify-center space-x-3">
                        <a href="mailto:" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-charcoal-gray/5 rounded-lg p-6 hover:bg-charcoal-gray/10 transition-colors duration-300">
                      <h4 className="font-bold text-obsidian mb-2">Mac Culbertson</h4>
                      <p className="text-sm text-charcoal-gray/70 mb-4">ANALYST</p>
                      <div className="flex justify-center space-x-3">
                        <a href="mailto:" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Red Oak Team Grid 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-xl font-bold text-obsidian mb-6 text-center">Finance & Operations Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-charcoal-gray/5 rounded-lg p-6 hover:bg-charcoal-gray/10 transition-colors duration-300">
                      <h4 className="font-bold text-obsidian mb-2">Ryan Ellis</h4>
                      <p className="text-sm text-charcoal-gray/70 mb-4">VICE PRESIDENT, FINANCE</p>
                      <div className="flex justify-center space-x-3">
                        <a href="mailto:" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-charcoal-gray/5 rounded-lg p-6 hover:bg-charcoal-gray/10 transition-colors duration-300">
                      <h4 className="font-bold text-obsidian mb-2">Thomas J. Gorski</h4>
                      <p className="text-sm text-charcoal-gray/70 mb-4">SENIOR CRE UNDERWRITER</p>
                      <div className="flex justify-center space-x-3">
                        <a href="mailto:" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-charcoal-gray/5 rounded-lg p-6 hover:bg-charcoal-gray/10 transition-colors duration-300">
                      <h4 className="font-bold text-obsidian mb-2">James Myatt</h4>
                      <p className="text-sm text-charcoal-gray/70 mb-4">LOAN ADMINISTRATOR</p>
                      <div className="flex justify-center space-x-3">
                        <a href="mailto:" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-charcoal-gray/5 rounded-lg p-6 hover:bg-charcoal-gray/10 transition-colors duration-300">
                      <h4 className="font-bold text-obsidian mb-2">Jamie Tripp</h4>
                      <p className="text-sm text-charcoal-gray/70 mb-4">VICE PRESIDENT OF INTERNAL OPERATIONS</p>
                      <div className="flex justify-center space-x-3">
                        <a href="mailto:" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-charcoal-gray/5 rounded-lg p-6 hover:bg-charcoal-gray/10 transition-colors duration-300">
                      <h4 className="font-bold text-obsidian mb-2">Rob Mendham</h4>
                      <p className="text-sm text-charcoal-gray/70 mb-4">MANAGER, INFORMATION TECHNOLOGY</p>
                      <div className="flex justify-center space-x-3">
                        <a href="mailto:" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-charcoal-gray/5 rounded-lg p-6 hover:bg-charcoal-gray/10 transition-colors duration-300">
                      <h4 className="font-bold text-obsidian mb-2">Tanner Morgan</h4>
                      <p className="text-sm text-charcoal-gray/70 mb-4">CONTROLLER</p>
                      <div className="flex justify-center space-x-3">
                        <a href="mailto:" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-garnet-edge hover:text-garnet-edge/80 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
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