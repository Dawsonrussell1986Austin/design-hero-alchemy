import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Header with dark background */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
        
        {/* Condensed Contact Section - All Above the Fold */}
        <section className="py-16 px-6 min-h-screen flex items-center">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              
              {/* Main Title */}
              <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-silver-mist mb-4 leading-tight">
                  Get in <span className="text-accent-brown">Touch</span>
                </h1>
                <p className="text-lg text-silver-mist/80 max-w-2xl mx-auto">
                  Whether you're seeking bridge financing or exploring investment opportunities.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                
                {/* Left Side - Contact Info */}
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                      <MapPin className="h-6 w-6 text-accent-brown mx-auto mb-2" />
                      <h3 className="text-sm font-medium text-silver-mist mb-1">Office</h3>
                      <p className="text-xs text-silver-mist/80">123 Main Street<br />New York, NY 10001</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                      <Phone className="h-6 w-6 text-accent-brown mx-auto mb-2" />
                      <h3 className="text-sm font-medium text-silver-mist mb-1">Phone</h3>
                      <p className="text-xs text-silver-mist/80">(555) 123-4567</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                      <Mail className="h-6 w-6 text-accent-brown mx-auto mb-2" />
                      <h3 className="text-sm font-medium text-silver-mist mb-1">Email</h3>
                      <p className="text-xs text-silver-mist/80">info@oakrep.com</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                      <Clock className="h-6 w-6 text-accent-brown mx-auto mb-2" />
                      <h3 className="text-sm font-medium text-silver-mist mb-1">Hours</h3>
                      <p className="text-xs text-silver-mist/80">Mon-Fri: 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <h2 className="text-xl font-medium text-silver-mist mb-6">Send Us a Message</h2>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm text-silver-mist mb-1">First Name *</label>
                        <Input
                          id="firstName"
                          type="text"
                          required
                          className="bg-obsidian/40 border-silver-mist/30 text-silver-mist text-sm py-2"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm text-silver-mist mb-1">Last Name *</label>
                        <Input
                          id="lastName"
                          type="text"
                          required
                          className="bg-obsidian/40 border-silver-mist/30 text-silver-mist text-sm py-2"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-silver-mist mb-1">Email *</label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="bg-obsidian/40 border-silver-mist/30 text-silver-mist text-sm py-2"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm text-silver-mist mb-1">Phone</label>
                        <Input
                          id="phone"
                          type="tel"
                          className="bg-obsidian/40 border-silver-mist/30 text-silver-mist text-sm py-2"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm text-silver-mist mb-1">Company</label>
                        <Input
                          id="company"
                          type="text"
                          className="bg-obsidian/40 border-silver-mist/30 text-silver-mist text-sm py-2"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm text-silver-mist mb-1">Message *</label>
                      <Textarea
                        id="message"
                        rows={4}
                        required
                        className="bg-obsidian/40 border-silver-mist/30 text-silver-mist text-sm resize-none"
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
      </div>

      <Footer />
    </div>
  );
};

export default Contact;