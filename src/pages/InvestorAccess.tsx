import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trackFormSubmission, trackConversion, trackLeadGeneration } from "@/lib/gtm";
import { FileText, Bell, Calendar, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import { supabase } from "@/integrations/supabase/client";

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "District of Columbia"
];

const InvestorAccess = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    phone: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    trackFormSubmission('investor_access_form', 'investor_access_page', true, {
      form_type: 'dtc_investor_registration',
    });

    trackConversion('investor_portal_registration', undefined, {
      conversion_action: 'dtc_investor_register',
      page_location: window.location.href,
    });

    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', { content_name: 'investor_access_form' });
    }

    trackLeadGeneration('investor_portal', 'investor_access_page', {
      form_name: 'dtc_investor_registration_form',
    });

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion_event_submit_lead_form');
    }

    try {
      const { data, error } = await supabase.functions.invoke('submit-investor-access', {
        body: formData,
      });

      if (error) {
        console.error('Error submitting form (non-blocking):', error);
      } else {
        console.log('Form submission successful:', data);
      }
    } catch (error) {
      console.error('Error submitting form (non-blocking):', error);
    } finally {
      setIsSubmitting(false);
      navigate("/thank-you-investor-access");
    }
  };

  const benefits = [
    { icon: FileText, text: "Distribution notices and tax documents" },
    { icon: Bell, text: "Important fund updates and required shareholder communications" },
    { icon: Shield, text: "Access to offering documents, PPMs, financial reports, and statements" },
    { icon: Calendar, text: "Time-sensitive information that may relate to liquidity, elections, or fund actions" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-abyss to-abyss/95">
      <Navigation />
      
      <main className="pt-28 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            <div className="bg-cream rounded-2xl shadow-2xl p-8 lg:p-10">
              <h1 className="text-2xl lg:text-3xl font-display font-medium text-abyss mb-6">
                Investor Portal Registration
              </h1>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-abyss font-body font-medium">
                      First Name <span className="text-gold-accent">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      placeholder="First name"
                      required
                      className="bg-cream border-graphite-fog/20 focus:border-gold-accent focus:ring-gold-accent/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-abyss font-body font-medium">
                      Last Name <span className="text-gold-accent">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      placeholder="Last name"
                      required
                      className="bg-cream border-graphite-fog/20 focus:border-gold-accent focus:ring-gold-accent/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-abyss font-body font-medium">
                    Email Address <span className="text-gold-accent">*</span>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                    required
                    className="bg-cream border-graphite-fog/20 focus:border-gold-accent focus:ring-gold-accent/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state" className="text-abyss font-body font-medium">
                    State <span className="text-gold-accent">*</span>
                  </Label>
                  <Select 
                    value={formData.state} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, state: value }))}
                    required
                  >
                    <SelectTrigger className="bg-cream border-graphite-fog/20 focus:border-gold-accent focus:ring-gold-accent/20">
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {US_STATES.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-abyss font-body font-medium">
                    Phone Number <span className="text-gold-accent">*</span>
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="(555) 123-4567"
                    required
                    className="bg-cream border-graphite-fog/20 focus:border-gold-accent focus:ring-gold-accent/20"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-accent hover:bg-gold-accent/90 text-cream font-body font-medium h-12 text-base mt-6"
                >
                  {isSubmitting ? "Submitting..." : "Register for Portal Access"}
                </Button>
              </form>
            </div>

            <div className="text-cream space-y-8">
              <div className="space-y-6">
                <h2 className="text-xl lg:text-2xl font-display font-medium text-cream/90">
                  Important Information for Investors
                </h2>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <p className="text-cream/80 font-body leading-relaxed">
                    Because your investment was made through a custodial bank or broker account and 
                    processed via the Depository Trust Corporation ("DTC"), we do not receive your 
                    individual contact details directly.
                  </p>
                  <p className="text-cream/80 font-body leading-relaxed mt-4">
                    As a result, we are unable to provide you with account-specific information 
                    unless you register for the portal.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-display font-medium text-gold-accent">
                  Why Registration Is Important
                </h3>
                
                <p className="text-cream/70 font-body leading-relaxed">
                  In recent months, we've identified several cases where investors holding through 
                  a bank or broker account did not receive essential communications related to 
                  their investments.
                </p>

                <p className="text-cream/80 font-body leading-relaxed">
                  Registering for the Oak Investor Portal ensures you receive:
                </p>

                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-accent/20 flex items-center justify-center mt-0.5">
                        <benefit.icon className="w-4 h-4 text-gold-accent" />
                      </div>
                      <span className="text-cream/80 font-body">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-white/10 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-cream/50 text-sm font-body">
            © {new Date().getFullYear()} Oak Real Estate Partners. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default InvestorAccess;
