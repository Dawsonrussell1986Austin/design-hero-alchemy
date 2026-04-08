import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema } from "@/components/StructuredData";

const Contact = () => {
  useEffect(() => {
    // Load the GHL form embed script
    const script = document.createElement("script");
    script.src = "https://invest.oakrepartners.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-silver-mist">
      <SEOHead 
        title="Contact Us"
        description="Get in touch with Oak Real Estate Partners. Contact our team for commercial real estate lending inquiries, bridge loans, and HUD financing questions."
        canonicalUrl="/contact"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' }
      ]} />
      {/* Header with dark background */}
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Contact" }
        ]}
      />
        
      {/* Contact Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            
            {/* Main Title */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-abyss mb-4 leading-tight px-2">
                Get in <span className="text-gold-accent">Touch</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-body font-normal text-abyss/80 max-w-2xl mx-auto px-2">
                Whether you're seeking bridge financing or exploring investment opportunities.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              
              {/* Left Side - Embedded GHL Form */}
              <div className="bg-cream/80 backdrop-blur-sm border border-abyss/10 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg order-2 lg:order-1">
                <h2 className="text-xl font-display font-medium text-abyss mb-6">Send Us a Message</h2>
                <iframe
                  src="https://invest.oakrepartners.com/widget/form/794zC2IpExPALxESsWC5"
                  style={{ width: "100%", height: "600px", border: "none", borderRadius: "3px" }}
                  id="inline-794zC2IpExPALxESsWC5"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Contact Form"
                  data-height="undefined"
                  data-layout-iframe-id="inline-794zC2IpExPALxESsWC5"
                  data-form-id="794zC2IpExPALxESsWC5"
                  title="Contact Form"
                />
              </div>

              {/* Right Side - Image with Glassmorphic Contact Info */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px] lg:h-[600px] order-1 lg:order-2">
                {/* Background Image */}
                <img 
                  src="/lovable-uploads/abdf8150-965c-4bb4-89dc-307370b6762b.png"
                  alt="Professional business workspace with modern materials and coffee setup"
                  className="w-full h-full object-cover"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-abyss/40 via-transparent to-obsidian/60"></div>

                {/* Glassmorphic Contact Info Cards */}
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-xs sm:max-w-sm w-full">
                    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg p-2 sm:p-3 lg:p-4 text-center shadow-lg">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gold-accent mx-auto mb-1 sm:mb-2" />
                      <h3 className="text-xs sm:text-sm font-medium text-cream mb-1">Office</h3>
                      <a 
                        href="https://maps.google.com/?q=5925+Carnegie+Boulevard,+Suite+110,+Charlotte,+NC+28209" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] sm:text-xs text-cream/90 hover:text-gold-accent transition-colors block leading-tight"
                      >
                        5925 Carnegie Blvd<br />Suite 110<br />Charlotte, NC 28209
                      </a>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg p-2 sm:p-3 lg:p-4 text-center shadow-lg">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gold-accent mx-auto mb-1 sm:mb-2" />
                      <h3 className="text-xs sm:text-sm font-medium text-cream mb-1">Phone</h3>
                      <a href="tel:+19802886627" className="text-[10px] sm:text-xs text-cream/90 hover:text-gold-accent transition-colors">980.288.6627</a>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg p-2 sm:p-3 lg:p-4 text-center shadow-lg">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gold-accent mx-auto mb-1 sm:mb-2" />
                      <h3 className="text-xs sm:text-sm font-medium text-cream mb-1">Email</h3>
                      <a href="mailto:ir@oakrepartners.com" className="text-[10px] sm:text-xs text-cream/90 hover:text-gold-accent transition-colors break-all">ir@oakrepartners.com</a>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg p-2 sm:p-3 lg:p-4 text-center shadow-lg">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gold-accent mx-auto mb-1 sm:mb-2" />
                      <h3 className="text-xs sm:text-sm font-medium text-cream mb-1">Hours</h3>
                      <p className="text-[10px] sm:text-xs text-cream/90 leading-tight">Mon-Fri<br />9AM-6PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
