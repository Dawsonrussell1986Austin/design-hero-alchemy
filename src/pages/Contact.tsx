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

            {/* Image with Glassmorphic Form Overlay */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px]">
              {/* Background Image */}
              <img 
                src="/lovable-uploads/92a36f88-ed8d-4cdb-9d92-4a575fcc03bc.png"
                alt="Modern office interior"
                className="w-full h-full object-cover"
              />
              
              {/* Dark Overlay for Better Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-transparent to-obsidian/60"></div>

              {/* Glassmorphic Form Overlay */}
              <div className="absolute inset-0 flex items-center justify-end pr-8">
                <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-8 w-full max-w-md shadow-2xl">
                  <h2 className="text-2xl font-semibold text-white mb-6 text-center">Send Us a Message</h2>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm text-white/90 mb-2">First Name *</label>
                        <Input
                          id="firstName"
                          type="text"
                          required
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm text-white/90 mb-2">Last Name *</label>
                        <Input
                          id="lastName"
                          type="text"
                          required
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-white/90 mb-2">Email *</label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm text-white/90 mb-2">Phone</label>
                        <Input
                          id="phone"
                          type="tel"
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm text-white/90 mb-2">Company</label>
                        <Input
                          id="company"
                          type="text"
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm text-white/90 mb-2">Message *</label>
                      <Textarea
                        id="message"
                        rows={4}
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info Cards - Positioned Over Image */}
              <div className="absolute bottom-8 left-8">
                <div className="grid grid-cols-2 gap-3 max-w-sm">
                  <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-lg p-3 text-center">
                    <MapPin className="h-5 w-5 text-accent-brown mx-auto mb-1" />
                    <p className="text-xs text-white/90 font-medium">123 Main Street<br />New York, NY</p>
                  </div>
                  
                  <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-lg p-3 text-center">
                    <Phone className="h-5 w-5 text-accent-brown mx-auto mb-1" />
                    <p className="text-xs text-white/90 font-medium">(555) 123-4567</p>
                  </div>
                  
                  <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-lg p-3 text-center">
                    <Mail className="h-5 w-5 text-accent-brown mx-auto mb-1" />
                    <p className="text-xs text-white/90 font-medium">info@oakrep.com</p>
                  </div>
                  
                  <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-lg p-3 text-center">
                    <Clock className="h-5 w-5 text-accent-brown mx-auto mb-1" />
                    <p className="text-xs text-white/90 font-medium">Mon-Fri 9AM-6PM</p>
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