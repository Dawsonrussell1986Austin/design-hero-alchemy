import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Building2, TrendingUp, FileText, Lock, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const investorSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  company: z.string().max(100).optional(),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(20),
  message: z.string().max(500).optional(),
});

type InvestorFormData = z.infer<typeof investorSchema>;

const Investors = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InvestorFormData>({
    resolver: zodResolver(investorSchema),
  });

  const onSubmit = async (data: InvestorFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("investor_leads").insert([{
        full_name: data.full_name,
        email: data.email,
        company: data.company || null,
        investment_range: data.phone,
        message: data.message || null,
      }]);

      if (error) {
        if (error.code === "23505") {
          toast.error("This email has already been registered");
        } else {
          throw error;
        }
      } else {
        setIsSuccess(true);
        toast.success("Thank you! We'll be in touch soon.");
        reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-silver-mist leading-tight tracking-tight">
                Stay Updated on OAK Real Estate Opportunities
              </h1>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-silver-mist/80 leading-relaxed font-body font-normal">
                Get exclusive access to investment updates, market insights, and new property opportunities.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-silver-mist/90 font-body">
                  <Building2 className="h-5 w-5 text-accent-brown" />
                  <span>Exclusive Deals</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-silver-mist/90 font-body">
                  <TrendingUp className="h-5 w-5 text-accent-brown" />
                  <span>Market Insights</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-silver-mist/90 font-body">
                  <FileText className="h-5 w-5 text-accent-brown" />
                  <span>Quarterly Reports</span>
                </div>
              </div>
            </div>

            {/* Opt-in Form */}
            <div className="bg-silver-mist rounded-xl shadow-2xl p-8 mt-8 lg:mt-0">
              {isSuccess ? (
                <div className="text-center space-y-4 py-8">
                  <div className="mx-auto w-16 h-16 bg-accent-brown/10 rounded-full flex items-center justify-center">
                    <Mail className="h-8 w-8 text-accent-brown" />
                  </div>
                  <h3 className="text-2xl font-display font-medium text-obsidian">
                    Thank You!
                  </h3>
                  <p className="text-graphite-fog font-body">
                    You're now subscribed to OAK investor updates and exclusive opportunities.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 bg-accent-brown hover:bg-accent-brown/90 text-white"
                  >
                    Submit Another
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-display font-medium text-obsidian mb-2">
                    Join Our Investor Network
                  </h2>
                  <p className="text-graphite-fog mb-6 font-body">
                    Subscribe to receive exclusive investment opportunities and market updates.
                  </p>
                   <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="full_name" className="text-graphite-fog font-body">Full Name *</Label>
                      <Input
                        id="full_name"
                        {...register("full_name")}
                        placeholder="John Doe"
                        className="bg-white"
                      />
                      {errors.full_name && (
                        <p className="text-sm text-destructive font-body">
                          {errors.full_name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-graphite-fog font-body">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="john@example.com"
                        className="bg-white"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive font-body">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-graphite-fog font-body">Company (Optional)</Label>
                      <Input
                        id="company"
                        {...register("company")}
                        placeholder="Your Company"
                        className="bg-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-graphite-fog font-body">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="+1 (555) 000-0000"
                        className="bg-white"
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive font-body">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-graphite-fog font-body">Message (Optional)</Label>
                      <textarea
                        id="message"
                        {...register("message")}
                        placeholder="Tell us about your investment interests..."
                        rows={3}
                        className="flex w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-graphite-fog font-body ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-brown focus-visible:ring-offset-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white text-base font-body font-medium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe to Updates"}
                    </Button>

                    <p className="text-xs text-graphite-fog/70 text-center font-body">
                      <Lock className="inline h-3 w-3 mr-1" />
                      Your information is secure and will never be shared.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-silver-mist">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-display font-medium text-center mb-12 text-obsidian">
            Why Join Our Investor Network
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-accent-brown/10 rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-accent-brown" />
              </div>
              <h3 className="text-lg font-display font-medium text-obsidian">
                Exclusive Opportunities
              </h3>
              <p className="text-deep-petrol font-body leading-relaxed">
                Get first access to off-market deals and pre-construction projects.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-accent-brown/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-accent-brown" />
              </div>
              <h3 className="text-lg font-display font-medium text-obsidian">
                Market Intelligence
              </h3>
              <p className="text-deep-petrol font-body leading-relaxed">
                Receive detailed market analysis and investment trend reports quarterly.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-accent-brown/10 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-accent-brown" />
              </div>
              <h3 className="text-lg font-display font-medium text-obsidian">
                Portfolio Updates
              </h3>
              <p className="text-deep-petrol font-body leading-relaxed">
                Track performance metrics and ROI across our active investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-obsidian to-graphite-fog">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-display font-medium text-silver-mist">
            Don't Miss the Next Opportunity
          </h2>
          <p className="text-lg font-body font-normal text-silver-mist/80">
            Join successful investors who trust OAK for exclusive real estate opportunities.
          </p>
          <Button
            size="lg"
            className="bg-accent-brown hover:bg-accent-brown/90 text-white text-base font-body font-medium"
            onClick={() =>
              document
                .querySelector("form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Subscribe Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;
