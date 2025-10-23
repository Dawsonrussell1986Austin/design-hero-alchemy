import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  company: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Insert into Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          first_name: validatedData.firstName,
          last_name: validatedData.lastName,
          email: validatedData.email,
          phone: validatedData.phone || null,
          company: validatedData.company || null,
          message: validatedData.message,
        });

      if (error) throw error;

      // Show success message
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            
            {/* Main Title */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-obsidian mb-4 leading-tight px-2">
                Get in <span className="text-accent-brown">Touch</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-body font-normal text-obsidian/80 max-w-2xl mx-auto px-2">
                Whether you're seeking bridge financing or exploring investment opportunities.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              
              {/* Left Side - Contact Form */}
              <div className="bg-white/80 backdrop-blur-sm border border-obsidian/10 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg order-2 lg:order-1">
                <h2 className="text-xl font-display font-medium text-obsidian mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm text-obsidian mb-2">First Name *</label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
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
                        value={formData.lastName}
                        onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white border-obsidian/20 text-obsidian"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm text-obsidian mb-2">Company</label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white border-obsidian/20 text-obsidian resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>


                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white py-3 font-medium"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Right Side - Image with Glassmorphic Contact Info */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px] lg:h-[600px] order-1 lg:order-2">
                {/* Background Image */}
                <img 
                  src="/lovable-uploads/abdf8150-965c-4bb4-89dc-307370b6762b.png"
                  alt="Professional business workspace with modern materials and coffee setup"
                  className="w-full h-full object-cover"
                />
                
                {/* Dark Overlay for Better Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-l from-obsidian/40 via-transparent to-obsidian/60"></div>

                {/* Glassmorphic Contact Info Cards */}
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-xs sm:max-w-sm w-full">
                    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg p-2 sm:p-3 lg:p-4 text-center shadow-lg">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-accent-brown mx-auto mb-1 sm:mb-2" />
                      <h3 className="text-xs sm:text-sm font-medium text-white mb-1">Office</h3>
                      <a 
                        href="https://maps.google.com/?q=5925+Carnegie+Boulevard,+Suite+110,+Charlotte,+NC+28209" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] sm:text-xs text-white/90 hover:text-accent-brown transition-colors block leading-tight"
                      >
                        5925 Carnegie Blvd<br />Suite 110<br />Charlotte, NC 28209
                      </a>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg p-2 sm:p-3 lg:p-4 text-center shadow-lg">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-accent-brown mx-auto mb-1 sm:mb-2" />
                      <h3 className="text-xs sm:text-sm font-medium text-white mb-1">Phone</h3>
                      <a href="tel:+19802886627" className="text-[10px] sm:text-xs text-white/90 hover:text-accent-brown transition-colors">980.288.6627</a>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg p-2 sm:p-3 lg:p-4 text-center shadow-lg">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-accent-brown mx-auto mb-1 sm:mb-2" />
                      <h3 className="text-xs sm:text-sm font-medium text-white mb-1">Email</h3>
                      <a href="mailto:info@oakrepartners.com" className="text-[10px] sm:text-xs text-white/90 hover:text-accent-brown transition-colors break-all">info@oakrepartners.com</a>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg p-2 sm:p-3 lg:p-4 text-center shadow-lg">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-accent-brown mx-auto mb-1 sm:mb-2" />
                      <h3 className="text-xs sm:text-sm font-medium text-white mb-1">Hours</h3>
                      <p className="text-[10px] sm:text-xs text-white/90 leading-tight">Mon-Fri<br />9AM-6PM EST</p>
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