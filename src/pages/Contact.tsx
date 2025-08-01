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
        
      {/* Condensed Contact Section with Image */}
      <section className="py-16 px-6 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            
            {/* Main Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-obsidian mb-4 leading-tight">
                Get in <span className="text-accent-brown">Touch</span>
              </h1>
              <p className="text-lg text-obsidian/80 max-w-2xl mx-auto">
                Whether you're seeking bridge financing or exploring investment opportunities.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 items-start">
              
              {/* Left Side - Modern Interior Image */}
              <div className="lg:col-span-1">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="/lovable-uploads/92a36f88-ed8d-4cdb-9d92-4a575fcc03bc.png"
                    alt="Modern office interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Middle - Contact Info */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-lg p-4 text-center shadow-md">
                    <MapPin className="h-6 w-6 text-accent-brown mx-auto mb-2" />
                    <h3 className="text-sm font-medium text-obsidian mb-1">Office</h3>
                    <p className="text-xs text-obsidian/70">123 Main Street<br />New York, NY 10001</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-lg p-4 text-center shadow-md">
                    <Phone className="h-6 w-6 text-accent-brown mx-auto mb-2" />
                    <h3 className="text-sm font-medium text-obsidian mb-1">Phone</h3>
                    <p className="text-xs text-obsidian/70">(555) 123-4567</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-lg p-4 text-center shadow-md">
                    <Mail className="h-6 w-6 text-accent-brown mx-auto mb-2" />
                    <h3 className="text-sm font-medium text-obsidian mb-1">Email</h3>
                    <p className="text-xs text-obsidian/70">info@oakrep.com</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-lg p-4 text-center shadow-md">
                    <Clock className="h-6 w-6 text-accent-brown mx-auto mb-2" />
                    <h3 className="text-sm font-medium text-obsidian mb-1">Hours</h3>
                    <p className="text-xs text-obsidian/70">Mon-Fri: 9AM-6PM EST</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-medium text-obsidian mb-6">Send Us a Message</h2>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm text-obsidian mb-1">First Name *</label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        className="bg-white border-obsidian/20 text-obsidian text-sm py-2"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm text-obsidian mb-1">Last Name *</label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        className="bg-white border-obsidian/20 text-obsidian text-sm py-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-obsidian mb-1">Email *</label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="bg-white border-obsidian/20 text-obsidian text-sm py-2"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm text-obsidian mb-1">Phone</label>
                      <Input
                        id="phone"
                        type="tel"
                        className="bg-white border-obsidian/20 text-obsidian text-sm py-2"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm text-obsidian mb-1">Company</label>
                      <Input
                        id="company"
                        type="text"
                        className="bg-white border-obsidian/20 text-obsidian text-sm py-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-obsidian mb-1">Message *</label>
                    <Textarea
                      id="message"
                      rows={4}
                      required
                      className="bg-white border-obsidian/20 text-obsidian text-sm resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-accent-brown hover:bg-accent-brown/90 text-silver-mist py-2 text-sm font-medium"
                  >
                    Send Message
                  </Button>
                </form>
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