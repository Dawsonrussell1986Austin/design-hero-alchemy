import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-silver-mist">
      {/* Header with dark background */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Contact" }
        ]}
      />
        
      {/* Contact Section with Image Background and Glassmorphic Form */}
      <section className="py-16 px-6 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            
            {/* Main Title */}
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-4 leading-tight">
                Get in <span className="text-accent-brown">Touch</span>
              </h1>
              <p className="text-lg lg:text-xl font-body font-normal text-obsidian/80 max-w-2xl mx-auto">
                Whether you're seeking bridge financing or exploring investment opportunities.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Side - Contact Form */}
              <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-2xl p-8 shadow-lg">
                <h2 className="text-xl font-display font-medium text-obsidian mb-6">Send Us a Message</h2>
                
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm text-obsidian mb-2">First Name *</label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        className="bg-white border-obsidian/20 text-obsidian"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm text-obsidian mb-2">Last Name *</label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        className="bg-white border-obsidian/20 text-obsidian"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-obsidian mb-2">Email *</label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="bg-white border-obsidian/20 text-obsidian"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm text-obsidian mb-2">Phone</label>
                      <Input
                        id="phone"
                        type="tel"
                        className="bg-white border-obsidian/20 text-obsidian"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm text-obsidian mb-2">Company</label>
                      <Input
                        id="company"
                        type="text"
                        className="bg-white border-obsidian/20 text-obsidian"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-obsidian mb-2">Message *</label>
                    <Textarea
                      id="message"
                      rows={5}
                      required
                      className="bg-white border-obsidian/20 text-obsidian resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div>
                    <label htmlFor="attachment" className="block text-sm text-obsidian mb-2">Attachment</label>
                    <p className="text-xs text-obsidian/60 mb-2">Upload pro forma, executive summary, or other relevant documents</p>
                    <Input
                      id="attachment"
                      type="file"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                      className="bg-white border-obsidian/20 text-obsidian file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-obsidian/5 file:text-obsidian hover:file:bg-obsidian/10"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-3 font-medium"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Right Side - Image with Glassmorphic Contact Info */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
                {/* Background Image */}
                <img 
                  src="/lovable-uploads/abdf8150-965c-4bb4-89dc-307370b6762b.png"
                  alt="Professional business workspace with modern materials and coffee setup"
                  className="w-full h-full object-cover"
                />
                
                {/* Dark Overlay for Better Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-l from-obsidian/40 via-transparent to-obsidian/60"></div>

                {/* Glassmorphic Contact Info Cards */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-sm w-full">
                    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg p-4 text-center shadow-lg">
                      <MapPin className="h-8 w-8 text-accent-brown mx-auto mb-2" />
                      <h3 className="text-sm font-medium text-white mb-1">Office</h3>
                      <a 
                        href="https://maps.google.com/?q=5925+Carnegie+Boulevard,+Suite+110,+Charlotte,+NC+28209" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-white/90 hover:text-accent-brown transition-colors block"
                      >
                        5925 Carnegie Boulevard<br />Suite 110<br />Charlotte, NC 28209
                      </a>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg p-4 text-center shadow-lg">
                      <Phone className="h-8 w-8 text-accent-brown mx-auto mb-2" />
                      <h3 className="text-sm font-medium text-white mb-1">Phone</h3>
                      <a href="tel:+19802886627" className="text-xs text-white/90 hover:text-accent-brown transition-colors">980.288.6627</a>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg p-4 text-center shadow-lg">
                      <Mail className="h-8 w-8 text-accent-brown mx-auto mb-2" />
                      <h3 className="text-sm font-medium text-white mb-1">Email</h3>
                      <a href="mailto:info@oakrepartners.com" className="text-xs text-white/90 hover:text-accent-brown transition-colors">info@oakrepartners.com</a>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg p-4 text-center shadow-lg">
                      <Clock className="h-8 w-8 text-accent-brown mx-auto mb-2" />
                      <h3 className="text-sm font-medium text-white mb-1">Hours</h3>
                      <p className="text-xs text-white/90">Mon-Fri: 9AM-6PM EST</p>
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