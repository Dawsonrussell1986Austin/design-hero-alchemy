import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowRight, ChevronDown } from "lucide-react";

const LandingLiquidity = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("investor_leads").insert({
        full_name: `${firstName.trim()} ${lastName.trim()}`,
        email: email.trim(),
        message: "Liquidity landing page opt-in",
      });
      if (error) throw error;
      navigate("/thank-you-report");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const display = { fontFamily: "'Playfair Display', Georgia, serif" };
  const sans = { fontFamily: "'Lato', sans-serif" };

  const inputStyle: React.CSSProperties = {
    ...sans, color: "#E4E3E1", borderBottom: "1px solid rgba(240,236,227,0.1)",
    background: "transparent", padding: "0", height: "48px", fontSize: "13px",
    fontWeight: 300, letterSpacing: "0.02em", width: "100%", outline: "none",
    borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: 0,
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(135deg, #060D14, #082233, #233F52)" }}>
      <SEOHead
        title="Capital on Your Timeline | Oak Real Estate Partners"
        description="No capital calls years into the future. No delayed exits. Your money works — and comes back — on your timeline."
        canonicalUrl="/capital-on-your-timeline"
      />

      <section className="relative min-h-screen flex flex-col justify-between px-4 sm:px-12 lg:px-20 pt-10 sm:pt-14 pb-8 sm:pb-12 overflow-hidden">
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden sm:block" style={{ opacity: 0.03 }}>
          <span className="text-[16rem] sm:text-[22rem] font-light leading-none block" style={{ ...display, color: "#E4E3E1" }}>10Y</span>
        </div>

        <div className="relative z-10">
          <a href="/"><img src="/lovable-uploads/white_oak.png" alt="Oak Real Estate Partners" className="h-8 sm:h-10 md:h-12 w-auto" /></a>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto mt-auto mb-auto py-6 sm:py-8">
          <div>
            <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-6 sm:mb-10" style={{ ...sans, color: "#C7A74C", opacity: 0.8, fontWeight: 500 }}>
              Shorter Duration Investing
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[0.9] tracking-tight" style={{ ...display, color: "#FAF7F2", letterSpacing: "-0.02em" }}>
              Your capital shouldn't be{" "}
              <em style={{ color: "#D4B35C", fontWeight: 300 }}>trapped</em> for a decade.
            </h1>
            <p className="text-sm sm:text-base leading-[1.7] mt-6 sm:mt-8 max-w-[480px]" style={{ ...sans, color: "#6C7D80", fontWeight: 400, letterSpacing: "0.02em" }}>
              No capital calls years into the future. No delayed exits. Your money works — and comes back — on your timeline.
            </p>
          </div>

          <div className="p-6 sm:p-8 md:p-10 text-left" style={{ border: "1px solid rgba(240,236,227,0.05)" }}>
            <p className="text-xs sm:text-sm tracking-[0.35em] uppercase mb-2 text-center" style={{ ...sans, color: "#E4E3E1", fontWeight: 500 }}>
              Get the Full Report
            </p>
            <p className="text-sm sm:text-base mb-6 sm:mb-8 text-center" style={{ ...sans, color: "#6C7D80", fontWeight: 400 }}>
              Learn how Oak's shorter-duration bridge lending structure keeps your capital accessible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={inputStyle} required />
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} style={inputStyle} required />
              </div>
              <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} required />
              <div className="pt-4">
                <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-3 py-3.5 text-[11px] tracking-[0.3em] uppercase transition-opacity disabled:opacity-50" style={{ ...sans, backgroundColor: "#C7A74C", color: "#060D14", fontWeight: 600 }}>
                  {isSubmitting ? "Submitting..." : "Send Me the Report"}{!isSubmitting && <ArrowRight className="h-4 w-4" />}
                </button>
              </div>
              <p className="text-[10px] text-center pt-1 tracking-wide" style={{ ...sans, color: "rgba(240,236,227,0.12)", fontWeight: 300 }}>No spam. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>

        <div className="relative z-10 pt-6 sm:pt-8 mt-6 sm:mt-8" style={{ borderTop: "1px solid rgba(240,236,227,0.05)" }}>
          <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-16 max-w-4xl mx-auto text-center">
            {[
              { stat: "12–36", note: "month typical loan duration" },
              { stat: "$0", note: "capital calls years into the future" },
              { stat: "150+", note: "loans originated and returned" },
            ].map((d) => (
              <div key={d.stat}>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light" style={{ ...display, color: "#FAF7F2" }}>{d.stat}</p>
                <p className="text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2 leading-snug tracking-wide" style={{ ...sans, color: "#6C7D80", fontWeight: 400 }}>{d.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex justify-center mt-4 sm:mt-6">
          <div className="flex flex-col items-center gap-1 animate-bounce" style={{ animationDuration: "2s" }}>
            <span className="text-[9px] tracking-[0.3em] uppercase" style={{ ...sans, color: "rgba(240,236,227,0.3)", fontWeight: 400 }}>Scroll</span>
            <ChevronDown className="w-4 h-4" style={{ color: "rgba(240,236,227,0.3)" }} />
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-12 lg:px-20 py-24 lg:py-36" style={{ backgroundColor: "#faf7f2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="w-12 h-[1px] mb-6" style={{ backgroundColor: "#C7A74C" }} />
          <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-16" style={{ ...sans, color: "#C7A74C", fontWeight: 500 }}>Oak Real Estate Partners</p>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.05] max-w-2xl font-light" style={{ ...display, color: "#0A1520", letterSpacing: "-0.01em" }}>
              Private credit shouldn't mean{" "}
              <em style={{ color: "#C7A74C", fontWeight: 300 }}>locked capital.</em>
            </h2>
            <div className="space-y-6">
              <p className="text-sm sm:text-base leading-[1.7]" style={{ ...sans, color: "#6C7D80", fontWeight: 300 }}>
                Most private credit funds lock your money for 7 to 10 years. Capital calls arrive unpredictably. Exits are delayed. And your money sits idle while the manager collects fees.
              </p>
              <p className="text-sm sm:text-base leading-[1.7]" style={{ ...sans, color: "#6C7D80", fontWeight: 300 }}>
                Oak's bridge lending model operates on shorter durations — typically 12 to 36 months. Your capital is deployed into income-producing commercial real estate, earns a return, and cycles back to you.
              </p>
            </div>
          </div>

          <div className="pl-6 sm:pl-8 mt-16" style={{ borderLeft: "1px solid #C7A74C" }}>
            <p className="text-lg sm:text-xl leading-[1.4] max-w-lg font-light" style={{ ...display, color: "#0A1520" }}>
              Your money works — and comes back — on your timeline. No decade-long lockups. No surprise capital calls. No delayed exits.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-[1px] mt-20 overflow-hidden max-w-4xl mx-auto" style={{ backgroundColor: "rgba(17,24,39,0.06)" }}>
            {[
              { title: "Shorter Duration", text: "Bridge loans with 12–36 month terms. Your capital isn't trapped in a decade-long vehicle." },
              { title: "No Surprise Calls", text: "No unpredictable capital calls years into the future. You know exactly when your money is deployed." },
              { title: "Built to Cycle", text: "Capital is deployed, earns a return, and comes back — structured for liquidity, not lockup." },
            ].map((card) => (
              <div key={card.title} className="p-8 sm:p-10 text-center" style={{ backgroundColor: "#faf7f2" }}>
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase mb-4" style={{ ...sans, color: "#082233", fontWeight: 600 }}>{card.title}</p>
                <p className="text-sm sm:text-base leading-[1.7]" style={{ ...sans, color: "#6C7D80", fontWeight: 300 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-12 lg:px-20 py-24 lg:py-36" style={{ backgroundColor: "#060D14" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl leading-[1.3] font-light" style={{ ...display, color: "rgba(255,255,255,0.85)" }}>
            Is your capital working on your timeline?{" "}
            <span style={{ color: "#D4B35C" }}>Or is it locked up working for someone else?</span>
          </p>
          <p className="text-sm mt-8 max-w-md mx-auto" style={{ ...sans, color: "#6C7D80", fontWeight: 400 }}>
            The best-performing portfolios balance yield with accessibility.
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="mt-10 inline-flex items-center gap-3 py-3 px-10 text-[11px] tracking-[0.3em] uppercase transition-opacity" style={{ ...sans, backgroundColor: "#C7A74C", color: "#060D14", fontWeight: 600 }}>
            Get the Report <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <footer className="px-6 sm:px-12 lg:px-20 py-8" style={{ backgroundColor: "#060D14", borderTop: "1px solid rgba(240,236,227,0.04)" }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <a href="/"><img src="/lovable-uploads/white_oak.png" alt="Oak Real Estate Partners" className="h-8 w-auto" /></a>
          <a href="https://oakrepartners.com" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-wide hover:underline underline-offset-4" style={{ ...sans, color: "#C7A74C", fontWeight: 400 }}>oakrepartners.com</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingLiquidity;