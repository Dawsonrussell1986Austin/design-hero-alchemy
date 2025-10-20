import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const formSchema = z.object({
  firstName: z.string().trim().min(1, { message: "First name is required" }).max(100),
  lastName: z.string().trim().min(1, { message: "Last name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  optIn: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive updates",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const InvestorForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      optIn: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // TODO: Add your form handler here
    console.log("Form data:", data);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Thank you for subscribing to our investor updates!");
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-10">
      <h2 className="text-2xl lg:text-3xl font-display font-medium text-obsidian mb-2">
        Stay Connected
      </h2>
      <p className="text-graphite-fog mb-8 font-body leading-relaxed">
        Join our monthly Investor Update Calls and receive important updates about your investment.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-obsidian font-body font-medium">
                  First Name <span className="text-accent-brown">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white border-graphite-fog/20 focus:border-accent-brown focus:ring-accent-brown/20 font-body"
                    placeholder="John"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-obsidian font-body font-medium">
                  Last Name <span className="text-accent-brown">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white border-graphite-fog/20 focus:border-accent-brown focus:ring-accent-brown/20 font-body"
                    placeholder="Doe"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-obsidian font-body font-medium">
                  Email <span className="text-accent-brown">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    className="bg-white border-graphite-fog/20 focus:border-accent-brown focus:ring-accent-brown/20 font-body"
                    placeholder="john.doe@example.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="optIn"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-graphite-fog/20 p-4 bg-silver-mist/30">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="border-graphite-fog/40 data-[state=checked]:bg-accent-brown data-[state=checked]:border-accent-brown"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm text-obsidian font-body font-normal cursor-pointer">
                    I agree to receive monthly investor updates and important information about my investment
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white font-body font-medium h-12 text-base"
          >
            {isSubmitting ? "Submitting..." : "Subscribe to Updates"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default InvestorForm;
