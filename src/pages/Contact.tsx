import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative py-24 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-light text-obsidian leading-tight tracking-tight mb-8">
              Let's <span className="text-accent-brown">Connect</span>
            </h1>
            <p className="text-xl lg:text-2xl text-deep-petrol max-w-3xl mx-auto leading-relaxed font-light">
              Ready to explore how Oak can support your real estate investment goals? We're here to help.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information and Form Section */}
      <div className="py-20 bg-gradient-to-r from-cream to-silver-mist/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-light text-obsidian mb-8">Get in Touch</h2>
                  <p className="text-lg text-deep-petrol leading-relaxed mb-8">
                    Whether you're seeking bridge financing, exploring HUD-insured loans, or looking for a strategic lending partner, our team is ready to discuss your needs.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-cream/80 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                    <MapPin className="h-6 w-6 text-accent-brown mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-obsidian mb-2">Office Location</h3>
                      <p className="text-deep-petrol">
                        123 Main Street<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-cream/80 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                    <Phone className="h-6 w-6 text-accent-brown mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-obsidian mb-2">Phone</h3>
                      <p className="text-deep-petrol">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-cream/80 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                    <Mail className="h-6 w-6 text-accent-brown mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-obsidian mb-2">Email</h3>
                      <p className="text-deep-petrol">info@oakrep.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-cream/80 backdrop-blur-sm rounded-lg border border-accent-brown/20">
                    <Clock className="h-6 w-6 text-accent-brown mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-obsidian mb-2">Business Hours</h3>
                      <p className="text-deep-petrol">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        Saturday - Sunday: By appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-cream/60 backdrop-blur-sm p-8 rounded-lg border border-accent-brown/30">
                <h3 className="text-2xl font-light text-obsidian mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-deep-petrol mb-2">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        className="w-full bg-cream border-accent-brown/30 focus:border-accent-brown focus:ring-accent-brown/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-deep-petrol mb-2">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        className="w-full bg-cream border-accent-brown/30 focus:border-accent-brown focus:ring-accent-brown/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-deep-petrol mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="w-full bg-cream border-accent-brown/30 focus:border-accent-brown focus:ring-accent-brown/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-deep-petrol mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      className="w-full bg-cream border-accent-brown/30 focus:border-accent-brown focus:ring-accent-brown/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-deep-petrol mb-2">
                      Company/Organization
                    </label>
                    <Input
                      id="company"
                      type="text"
                      className="w-full bg-cream border-accent-brown/30 focus:border-accent-brown focus:ring-accent-brown/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-deep-petrol mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      className="w-full bg-cream border-accent-brown/30 focus:border-accent-brown focus:ring-accent-brown/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-deep-petrol mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full bg-cream border-accent-brown/30 focus:border-accent-brown focus:ring-accent-brown/20 resize-none"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-accent-brown hover:bg-accent-brown/90 text-cream px-8 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="py-20 bg-cream">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-obsidian mb-12">
              Ready to Get Started?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4 p-6 bg-gradient-to-br from-accent-brown/10 to-garnet-edge/10 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                <h3 className="text-xl font-medium text-accent-brown">Bridge Financing</h3>
                <p className="text-deep-petrol leading-relaxed">
                  Fast, flexible capital for value-add opportunities and time-sensitive acquisitions.
                </p>
              </div>
              
              <div className="space-y-4 p-6 bg-gradient-to-br from-accent-brown/10 to-garnet-edge/10 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                <h3 className="text-xl font-medium text-accent-brown">HUD/FHA Loans</h3>
                <p className="text-deep-petrol leading-relaxed">
                  Long-term, government-backed financing for multifamily and healthcare properties.
                </p>
              </div>
              
              <div className="space-y-4 p-6 bg-gradient-to-br from-accent-brown/10 to-garnet-edge/10 backdrop-blur-sm border border-accent-brown/30 rounded-lg">
                <h3 className="text-xl font-medium text-accent-brown">Consultation</h3>
                <p className="text-deep-petrol leading-relaxed">
                  Strategic guidance and market insights from our experienced lending team.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-silver-mist/20 to-cream p-8 rounded-lg border border-accent-brown/20">
              <p className="text-lg text-deep-petrol leading-relaxed mb-6">
                <strong className="text-obsidian">Securities offered through Johnson Capital Real Estate Securities, LLC, Member FINRA/SIPC.</strong><br />
                Investment advisory services offered through Johnson Capital Investment Management Company, an SEC-registered investment adviser.
              </p>
              <p className="text-sm text-deep-petrol/80">
                This communication is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities or investment products.
              </p>
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