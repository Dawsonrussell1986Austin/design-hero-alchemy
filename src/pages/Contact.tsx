import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
        
      {/* Contact Section with Image Background and Glassmorphic Form */}
      <section className="py-16 px-6 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            
            {/* Main Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-obsidian mb-4 leading-tight">
                Get in <span className="text-accent-brown">Touch</span>
              </h1>
              <p className="text-lg text-obsidian/80 max-w-2xl mx-auto">
                Whether you're seeking bridge financing or exploring investment opportunities.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Side - Contact Info */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-lg p-6 text-center shadow-md">
                    <MapPin className="h-8 w-8 text-accent-brown mx-auto mb-3" />
                    <h3 className="text-sm font-medium text-obsidian mb-2">Office</h3>
                    <p className="text-sm text-obsidian/70">123 Main Street<br />New York, NY 10001</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-lg p-6 text-center shadow-md">
                    <Phone className="h-8 w-8 text-accent-brown mx-auto mb-3" />
                    <h3 className="text-sm font-medium text-obsidian mb-2">Phone</h3>
                    <p className="text-sm text-obsidian/70">(555) 123-4567</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-lg p-6 text-center shadow-md">
                    <Mail className="h-8 w-8 text-accent-brown mx-auto mb-3" />
                    <h3 className="text-sm font-medium text-obsidian mb-2">Email</h3>
                    <p className="text-sm text-obsidian/70">info@oakrep.com</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-lg p-6 text-center shadow-md">
                    <Clock className="h-8 w-8 text-accent-brown mx-auto mb-3" />
                    <h3 className="text-sm font-medium text-obsidian mb-2">Hours</h3>
                    <p className="text-sm text-obsidian/70">Mon-Fri: 9AM-6PM EST</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Image with Glassmorphic Form Overlay */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
                {/* Background Image */}
                <img 
                  src="/lovable-uploads/92a36f88-ed8d-4cdb-9d92-4a575fcc03bc.png"
                  alt="Modern office interior"
                  className="w-full h-full object-cover"
                />
                
                {/* Dark Overlay for Better Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-l from-obsidian/60 via-transparent to-obsidian/40"></div>

                {/* Glassmorphic Form Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
                    <h2 className="text-xl font-semibold text-white mb-4 text-center">Send Us a Message</h2>
                    
                    <form className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="firstName" className="block text-xs text-white/90 mb-1">First Name *</label>
                          <Input
                            id="firstName"
                            type="text"
                            required
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm text-sm"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-xs text-white/90 mb-1">Last Name *</label>
                          <Input
                            id="lastName"
                            type="text"
                            required
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm text-sm"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs text-white/90 mb-1">Email *</label>
                        <Input
                          id="email"
                          type="email"
                          required
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm text-sm"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs text-white/90 mb-1">Phone</label>
                        <Input
                          id="phone"
                          type="tel"
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm text-sm"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs text-white/90 mb-1">Message *</label>
                        <Textarea
                          id="message"
                          rows={3}
                          required
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm resize-none text-sm"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      <Button 
                        type="submit"
                        className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-2 font-medium shadow-lg"
                      >
                        Send Message
                      </Button>
                    </form>
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