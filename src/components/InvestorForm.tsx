import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { trackFormSubmission } from "@/lib/gtm";

const InvestorForm = () => {
  const handleSubmit = () => {
    // Track form submission before it redirects
    trackFormSubmission('investor_subscription', 'investors_page', true);
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-10">
      <h2 className="text-2xl lg:text-3xl font-display font-medium text-obsidian mb-2">
        Stay Connected
      </h2>
      <p className="text-graphite-fog mb-8 font-body leading-relaxed">
        Join our monthly Investor Update Calls and receive important updates about your investment.
      </p>

      <form
        action="http://go.oakrepartners.com/l/1105131/2025-10-20/b4kkx7"
        method="post"
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="space-y-2">
          <Label htmlFor="first_name" className="text-obsidian font-body font-medium">
            First Name <span className="text-accent-brown">*</span>
          </Label>
          <Input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="First name"
            required
            className="bg-white border-graphite-fog/20 focus:border-accent-brown focus:ring-accent-brown/20 font-body"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="last_name" className="text-obsidian font-body font-medium">
            Last Name <span className="text-accent-brown">*</span>
          </Label>
          <Input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Last name"
            required
            className="bg-white border-graphite-fog/20 focus:border-accent-brown focus:ring-accent-brown/20 font-body"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-obsidian font-body font-medium">
            Email <span className="text-accent-brown">*</span>
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Work email"
            required
            className="bg-white border-graphite-fog/20 focus:border-accent-brown focus:ring-accent-brown/20 font-body"
          />
        </div>

        {/* Optional UTM tracking parameters */}
        <input type="hidden" name="utm_source" value="" />
        <input type="hidden" name="utm_medium" value="" />
        <input type="hidden" name="utm_campaign" value="" />

        {/* Honeypot for bot protection */}
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="flex items-start space-x-3 rounded-md border border-graphite-fog/20 p-4 bg-silver-mist/30">
          <Checkbox
            id="consent"
            required
            className="border-graphite-fog/40 data-[state=checked]:bg-accent-brown data-[state=checked]:border-accent-brown mt-0.5"
          />
          <Label
            htmlFor="consent"
            className="text-sm text-obsidian font-body font-normal cursor-pointer leading-relaxed"
          >
            I agree to receive monthly investor updates and important information about my investment
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full bg-accent-brown hover:bg-accent-brown/90 text-white font-body font-medium h-12 text-base"
        >
          Subscribe to Updates
        </Button>
      </form>
    </div>
  );
};

export default InvestorForm;
