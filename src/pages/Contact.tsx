import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimplePageHeader from "@/components/SimplePageHeader";
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
        <SimplePageHeader title="Contact" />
      </div>
      
      {/* Cream background for content */}
      <div className="bg-silver-mist">

      {/* Contact Information Cards Section */}
      <div className="relative z-10 bg-silver-mist py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-light text-obsidian mb-8 leading-tight">
                Get in <span className="text-accent-brown">Touch</span>
              </h2>
              <p className="text-2xl text-deep-petrol leading-relaxed max-w-5xl mx-auto font-light">
                Whether you're seeking bridge financing, exploring HUD-insured loans, or looking for a strategic lending partner.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-2xl p-8 hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center">
                <div className="w-16 h-16 bg-accent-brown/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-accent-brown" />
                </div>
                <h3 className="text-xl font-light text-obsidian mb-4">Office Location</h3>
                <p className="text-deep-petrol leading-relaxed">
                  123 Main Street<br />
                  New York, NY 10001
                </p>
              </div>

              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-2xl p-8 hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center">
                <div className="w-16 h-16 bg-accent-brown/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-accent-brown" />
                </div>
                <h3 className="text-xl font-light text-obsidian mb-4">Phone</h3>
                <p className="text-deep-petrol leading-relaxed">(555) 123-4567</p>
              </div>

              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-2xl p-8 hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center">
                <div className="w-16 h-16 bg-accent-brown/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-accent-brown" />
                </div>
                <h3 className="text-xl font-light text-obsidian mb-4">Email</h3>
                <p className="text-deep-petrol leading-relaxed">info@oakrep.com</p>
              </div>

              <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-2xl p-8 hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center">
                <div className="w-16 h-16 bg-accent-brown/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-accent-brown" />
                </div>
                <h3 className="text-xl font-light text-obsidian mb-4">Business Hours</h3>
                <p className="text-deep-petrol leading-relaxed">
                  Mon-Fri: 9:00 AM - 6:00 PM EST<br />
                  Weekends: By appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Contact Form Section with Background */}
        <div className="relative py-32 bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/ba06d097-e388-4be2-9884-ee8b0c10dcad.png" 
              alt="Construction and growth" 
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/60 to-transparent"></div>
          </div>
          
          {/* Background texture */}
          <div className="absolute inset-0 opacity-10 z-5">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-garnet-edge/20 to-transparent"></div>
          </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-light text-silver-mist mb-8 leading-tight">
                Send Us a <span className="text-accent-brown">Message</span>
              </h2>
              <p className="text-xl text-silver-mist/80 leading-relaxed max-w-3xl mx-auto font-light">
                Tell us about your project and how we can help you achieve your real estate investment goals.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-background/20 backdrop-blur-xl border border-silver-mist/20 rounded-3xl p-12 hover:bg-background/30 transition-all duration-500">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="firstName" className="block text-lg font-light text-silver-mist mb-3">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      className="w-full bg-obsidian/20 border-silver-mist/30 focus:border-accent-brown focus:ring-accent-brown/20 text-silver-mist placeholder:text-silver-mist/50 text-lg py-6 rounded-xl backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-lg font-light text-silver-mist mb-3">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      className="w-full bg-obsidian/20 border-silver-mist/30 focus:border-accent-brown focus:ring-accent-brown/20 text-silver-mist placeholder:text-silver-mist/50 text-lg py-6 rounded-xl backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-light text-silver-mist mb-3">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-obsidian/20 border-silver-mist/30 focus:border-accent-brown focus:ring-accent-brown/20 text-silver-mist placeholder:text-silver-mist/50 text-lg py-6 rounded-xl backdrop-blur-sm"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="phone" className="block text-lg font-light text-silver-mist mb-3">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      className="w-full bg-obsidian/20 border-silver-mist/30 focus:border-accent-brown focus:ring-accent-brown/20 text-silver-mist placeholder:text-silver-mist/50 text-lg py-6 rounded-xl backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-lg font-light text-silver-mist mb-3">
                      Company/Organization
                    </label>
                    <Input
                      id="company"
                      type="text"
                      className="w-full bg-obsidian/20 border-silver-mist/30 focus:border-accent-brown focus:ring-accent-brown/20 text-silver-mist placeholder:text-silver-mist/50 text-lg py-6 rounded-xl backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-lg font-light text-silver-mist mb-3">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    className="w-full bg-obsidian/20 border-silver-mist/30 focus:border-accent-brown focus:ring-accent-brown/20 text-silver-mist placeholder:text-silver-mist/50 text-lg py-6 rounded-xl backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-light text-silver-mist mb-3">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    required
                    className="w-full bg-obsidian/20 border-silver-mist/30 focus:border-accent-brown focus:ring-accent-brown/20 text-silver-mist placeholder:text-silver-mist/50 text-lg rounded-xl resize-none backdrop-blur-sm"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>

                <div className="text-center">
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-16 py-6 text-xl font-medium tracking-wide transition-all duration-300 hover:scale-110 rounded-xl shadow-2xl"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;