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

      {/* Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-br from-silver-mist via-silver-mist/95 to-garnet-edge/10 py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/5 via-transparent to-accent-brown/5"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            {/* Animated Badge */}
            <div className="mb-8 animate-fade-in">
              <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-white/80 backdrop-blur-sm text-obsidian border border-garnet-edge/30 shadow-lg">
                <div className="w-2 h-2 bg-accent-brown rounded-full mr-3 animate-pulse"></div>
                Our Subsidiaries
              </span>
            </div>
            
            {/* Hero Title */}
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-obsidian mb-8 leading-tight animate-fade-in">
              Strategic Subsidiaries
              <span className="block text-accent-brown">Extending Our Market Reach</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl font-body font-medium text-deep-petrol mb-8 animate-fade-in">
              Specialized expertise across commercial real estate and multifamily lending landscapes.
            </p>
            
            {/* Description */}
            <p className="text-lg font-body text-obsidian/80 leading-relaxed max-w-4xl mx-auto animate-fade-in">
              Oak's strategic subsidiaries extend our capabilities in specialized markets, providing comprehensive solutions across the commercial real estate and multifamily lending landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-7xl mx-auto">

            {/* Johnson Capital Multifamily Section */}
            <section className="mb-20">
              <div className="bg-gradient-to-br from-white to-silver-mist/20 rounded-3xl shadow-2xl overflow-hidden border border-garnet-edge/10">
                {/* Section Header */}
                <div className="bg-gradient-to-r from-obsidian to-graphite-fog p-12 text-center">
                  <div className="max-w-4xl mx-auto">
                    <div className="mb-6">
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white border border-white/30">
                        Multifamily Lending
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                      JOHNSON CAPITAL MULTIFAMILY
                    </h2>
                    <p className="text-xl text-silver-mist max-w-3xl mx-auto leading-relaxed">
                      A leading originator of FHA multifamily loans, specializing in MAP and LEAN programs with a proven track record of success in affordable housing finance.
                    </p>
                  </div>
                </div>
                
                {/* Johnson Team Grid */}
                <div className="p-12">
                  <div className="mb-8 text-center">
                    <h3 className="text-2xl font-bold text-obsidian mb-4">Leadership Team</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-brown to-garnet-edge mx-auto rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    <div className="group">
                      <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border border-garnet-edge/20 hover:border-accent-brown/40 hover:-translate-y-2 hover:scale-105">
                        <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-garnet-edge/20 group-hover:ring-accent-brown/40 transition-all duration-300">
                          <img 
                            src="/lovable-uploads/72acba3c-0e00-4a56-b2b0-312d8d8d20f8.png" 
                            alt="Janet Bujko" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-center">
                          <h3 className="font-bold text-obsidian mb-3 text-lg group-hover:text-accent-brown transition-colors duration-300">Janet Bujko</h3>
                          <p className="text-sm text-deep-petrol leading-relaxed font-medium">SVP/CHIEF UNDERWRITER<br/>MAP AND LEAN PROGRAMS</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border border-garnet-edge/20 hover:border-accent-brown/40 hover:-translate-y-2 hover:scale-105">
                        <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-garnet-edge/20 group-hover:ring-accent-brown/40 transition-all duration-300">
                          <img 
                            src="/lovable-uploads/c66e3a2e-945c-491f-9234-87f426bb79f3.png" 
                            alt="Jason Pumpelly" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-center">
                          <h3 className="font-bold text-obsidian mb-3 text-lg group-hover:text-accent-brown transition-colors duration-300">Jason Pumpelly</h3>
                          <p className="text-sm text-deep-petrol leading-relaxed font-medium">PRESIDENT</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border border-garnet-edge/20 hover:border-accent-brown/40 hover:-translate-y-2 hover:scale-105">
                        <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-garnet-edge/20 group-hover:ring-accent-brown/40 transition-all duration-300">
                          <img 
                            src="/lovable-uploads/9d94a353-d253-43ef-8f26-ba5b48847381.png" 
                            alt="Guy Johnson" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-center">
                          <h3 className="font-bold text-obsidian mb-3 text-lg group-hover:text-accent-brown transition-colors duration-300">Guy Johnson</h3>
                          <p className="text-sm text-deep-petrol leading-relaxed font-medium">PRINCIPAL</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border border-garnet-edge/20 hover:border-accent-brown/40 hover:-translate-y-2 hover:scale-105">
                        <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-garnet-edge/20 group-hover:ring-accent-brown/40 transition-all duration-300">
                          <img 
                            src="/lovable-uploads/e8f32d5e-1126-478e-9860-811f1e095458.png" 
                            alt="Matthew J. Morgan" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-center">
                          <h3 className="font-bold text-obsidian mb-3 text-lg group-hover:text-accent-brown transition-colors duration-300">Matthew J. Morgan</h3>
                          <p className="text-sm text-deep-petrol leading-relaxed font-medium">UNDERWRITER</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border border-garnet-edge/20 hover:border-accent-brown/40 hover:-translate-y-2 hover:scale-105">
                        <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-garnet-edge/20 group-hover:ring-accent-brown/40 transition-all duration-300">
                          <img 
                            src="/lovable-uploads/0bc2aab8-ce33-43a0-936d-422b00463acd.png" 
                            alt="Kevin M. Kirton" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-center">
                          <h3 className="font-bold text-obsidian mb-3 text-lg group-hover:text-accent-brown transition-colors duration-300">Kevin M. Kirton</h3>
                          <p className="text-sm text-deep-petrol leading-relaxed font-medium">UNDERWRITER</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Red Oak Capital Holdings Section */}
            <section className="mb-20">
              <div className="bg-gradient-to-br from-white to-accent-brown/5 rounded-3xl shadow-2xl overflow-hidden border border-accent-brown/10">
                {/* Section Header */}
                <div className="bg-gradient-to-r from-accent-brown to-deep-petrol p-12 text-center">
                  <div className="max-w-4xl mx-auto">
                    <div className="mb-6">
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white border border-white/30">
                        Asset Management
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                      RED OAK CAPITAL HOLDINGS
                    </h2>
                    <p className="text-xl text-silver-mist max-w-3xl mx-auto leading-relaxed">
                      Our comprehensive asset management and investment operations subsidiary, providing specialized expertise in commercial real estate finance and portfolio management.
                    </p>
                  </div>
                </div>
                
                {/* Red Oak Team Grid 1 */}
                <div className="p-12">
                  <div className="mb-12 text-center">
                    <h3 className="text-2xl font-bold text-obsidian mb-4">Asset Management & Operations Team</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-brown to-garnet-edge mx-auto rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    <div className="group">
                      <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border border-garnet-edge/20 hover:border-accent-brown/40 hover:-translate-y-2 hover:scale-105">
                        <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-garnet-edge/20 group-hover:ring-accent-brown/40 transition-all duration-300">
                          <img 
                            src="/lovable-uploads/31c8e413-e49d-45f0-b289-23cef6842eed.png" 
                            alt="Ryan Anderson" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold text-obsidian mb-3 text-lg group-hover:text-accent-brown transition-colors duration-300">Ryan Anderson</h4>
                          <p className="text-sm text-deep-petrol leading-relaxed font-medium">VICE PRESIDENT<br/>ASSET MANAGEMENT</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border border-garnet-edge/20 hover:border-accent-brown/40 hover:-translate-y-2 hover:scale-105">
                        <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-garnet-edge/20 group-hover:ring-accent-brown/40 transition-all duration-300">
                          <img 
                            src="/lovable-uploads/374c72eb-53c2-4e84-b46e-b78e58ef7a85.png" 
                            alt="Stratos Athanassiades" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold text-obsidian mb-3 text-lg group-hover:text-accent-brown transition-colors duration-300">Stratos Athanassiades</h4>
                          <p className="text-sm text-deep-petrol leading-relaxed font-medium">REGIONAL MANAGER</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border border-garnet-edge/20 hover:border-accent-brown/40 hover:-translate-y-2 hover:scale-105">
                        <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-garnet-edge/20 group-hover:ring-accent-brown/40 transition-all duration-300">
                          <img 
                            src="/lovable-uploads/55c42f2a-0ab2-49c3-94da-646480e1fcc7.png" 
                            alt="Dylan Beaulieu" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold text-obsidian mb-3 text-lg group-hover:text-accent-brown transition-colors duration-300">Dylan Beaulieu</h4>
                          <p className="text-sm text-deep-petrol leading-relaxed font-medium">MANAGER<br/>INVESTOR OPERATIONS</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border border-garnet-edge/20 hover:border-accent-brown/40 hover:-translate-y-2 hover:scale-105">
                        <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-garnet-edge/20 group-hover:ring-accent-brown/40 transition-all duration-300">
                          <img 
                            src="/lovable-uploads/49a1436a-e57e-4522-a2b9-b40f539e9803.png" 
                            alt="David K. Christensen" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold text-obsidian mb-3 text-lg group-hover:text-accent-brown transition-colors duration-300">David K. Christensen</h4>
                          <p className="text-sm text-deep-petrol leading-relaxed font-medium">REGIONAL MANAGER</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border border-garnet-edge/20 hover:border-accent-brown/40 hover:-translate-y-2 hover:scale-105">
                        <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-garnet-edge/20 group-hover:ring-accent-brown/40 transition-all duration-300">
                          <img 
                            src="/lovable-uploads/1900f810-94ae-41a2-a5c3-61a55ad00f66.png" 
                            alt="Nicolas Jans" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold text-obsidian mb-3 text-lg group-hover:text-accent-brown transition-colors duration-300">Nicolas Jans</h4>
                          <p className="text-sm text-deep-petrol leading-relaxed font-medium">REGIONAL MANAGER</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border border-garnet-edge/20 hover:border-accent-brown/40 hover:-translate-y-2 hover:scale-105">
                        <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-garnet-edge/20 group-hover:ring-accent-brown/40 transition-all duration-300">
                          <img 
                            src="/lovable-uploads/1747f8f3-160f-49d4-b713-dd72be51d004.png" 
                            alt="Mac Culbertson" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold text-obsidian mb-3 text-lg group-hover:text-accent-brown transition-colors duration-300">Mac Culbertson</h4>
                          <p className="text-sm text-deep-petrol leading-relaxed font-medium">ANALYST</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Red Oak Team Grid 2 */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-obsidian mb-4">Finance & Operations Team</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-brown to-garnet-edge mx-auto rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group">
                      <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border border-garnet-edge/20 hover:border-accent-brown/40 hover:-translate-y-2 hover:scale-105">
                        <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-garnet-edge/20 group-hover:ring-accent-brown/40 transition-all duration-300">
                          <img 
                            src="/lovable-uploads/76c2daaa-5415-480e-85df-16119fbc639a.png" 
                            alt="Ryan Ellis" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold text-obsidian mb-3 text-lg group-hover:text-accent-brown transition-colors duration-300">Ryan Ellis</h4>
                          <p className="text-sm text-deep-petrol leading-relaxed font-medium">VICE PRESIDENT<br/>FINANCE</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border border-garnet-edge/20 hover:border-accent-brown/40 hover:-translate-y-2 hover:scale-105">
                        <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-garnet-edge/20 group-hover:ring-accent-brown/40 transition-all duration-300">
                          <img 
                            src="/lovable-uploads/b73b34cc-ac9e-499c-b7ac-c09f2097413e.png" 
                            alt="Thomas J. Gorski" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold text-obsidian mb-3 text-lg group-hover:text-accent-brown transition-colors duration-300">Thomas J. Gorski</h4>
                          <p className="text-sm text-deep-petrol leading-relaxed font-medium">SENIOR CRE<br/>UNDERWRITER</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border border-garnet-edge/20 hover:border-accent-brown/40 hover:-translate-y-2 hover:scale-105">
                        <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-garnet-edge/20 group-hover:ring-accent-brown/40 transition-all duration-300">
                          <img 
                            src="/lovable-uploads/569d91ea-63ba-4d6d-ae15-e224a63f481c.png" 
                            alt="James Myatt" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold text-obsidian mb-3 text-lg group-hover:text-accent-brown transition-colors duration-300">James Myatt</h4>
                          <p className="text-sm text-deep-petrol leading-relaxed font-medium">LOAN ADMINISTRATOR</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border border-garnet-edge/20 hover:border-accent-brown/40 hover:-translate-y-2 hover:scale-105">
                        <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-garnet-edge/20 group-hover:ring-accent-brown/40 transition-all duration-300">
                          <img 
                            src="/lovable-uploads/d79e003e-2083-4515-bd8c-da4e7748ef9d.png" 
                            alt="Jamie Tripp" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold text-obsidian mb-3 text-lg group-hover:text-accent-brown transition-colors duration-300">Jamie Tripp</h4>
                          <p className="text-sm text-deep-petrol leading-relaxed font-medium">VP INTERNAL<br/>OPERATIONS</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border border-garnet-edge/20 hover:border-accent-brown/40 hover:-translate-y-2 hover:scale-105">
                        <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-garnet-edge/20 group-hover:ring-accent-brown/40 transition-all duration-300">
                          <img 
                            src="/lovable-uploads/172b9df3-c5a8-4a00-83f7-12c550923d84.png" 
                            alt="Rob Mendham" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold text-obsidian mb-3 text-lg group-hover:text-accent-brown transition-colors duration-300">Rob Mendham</h4>
                          <p className="text-sm text-deep-petrol leading-relaxed font-medium">MANAGER<br/>INFORMATION TECHNOLOGY</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border border-garnet-edge/20 hover:border-accent-brown/40 hover:-translate-y-2 hover:scale-105">
                        <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-garnet-edge/20 group-hover:ring-accent-brown/40 transition-all duration-300">
                          <img 
                            src="/lovable-uploads/dceb532f-a791-412e-a1fc-638c2122d06d.png" 
                            alt="Tanner Morgan" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold text-obsidian mb-3 text-lg group-hover:text-accent-brown transition-colors duration-300">Tanner Morgan</h4>
                          <p className="text-sm text-deep-petrol leading-relaxed font-medium">CONTROLLER</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OurSubsidiaries;