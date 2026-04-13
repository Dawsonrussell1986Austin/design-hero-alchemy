import SEOHead from "@/components/SEOHead";
import DelayedReportPopup from "@/components/DelayedReportPopup";
import LandingDisclosure from "@/components/LandingDisclosure";
import LandingGHLForm from "@/components/LandingGHLForm";
import { ChevronDown } from "lucide-react";

const LandingFeeStructure = () => {
  const display = { fontFamily: "'Playfair Display', Georgia, serif" };
  const sans = { fontFamily: "'Lato', sans-serif" };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(135deg, #060D14, #082233, #233F52)" }}>
      <SEOHead
        title="Aligned Fee Structure | Oak Real Estate Partners"
        description="Every basis point matters. We built a fee structure that aligns our interests with yours — not the other way around."
        canonicalUrl="/aligned-fee-structure"
      />
      <DelayedReportPopup source="Fee Structure landing page opt-in" />

      <section className="relative min-h-screen flex flex-col justify-between px-4 sm:px-12 lg:px-20 pt-10 sm:pt-14 pb-8 sm:pb-12 overflow-hidden">
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden sm:block" style={{ opacity: 0.03 }}>
          <span className="text-[20rem] sm:text-[28rem] font-light leading-none block" style={{ ...display, color: "#E4E3E1" }}>%</span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <a href="/"><img src="/lovable-uploads/white_oak.png" alt="Oak Real Estate Partners" className="h-8 sm:h-10 md:h-12 w-auto" /></a>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto mt-auto mb-auto py-6 sm:py-8 w-full">
          <div>
            <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-6 sm:mb-10" style={{ ...sans, color: "#C7A74C", opacity: 0.8, fontWeight: 500 }}>
              Investor-Aligned Fee Structure
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[0.9] tracking-tight" style={{ ...display, color: "#FAF7F2", letterSpacing: "-0.02em" }}>
              Your returns shouldn't fund{" "}
              <em style={{ color: "#D4B35C", fontWeight: 300 }}>someone else's carry.</em>
            </h1>
            <p className="text-base sm:text-lg leading-[1.7] mt-6 sm:mt-8 max-w-[480px]" style={{ ...sans, color: "#6C7D80", fontWeight: 400, letterSpacing: "0.02em" }}>
              Every basis point matters. We built a fee structure that aligns our interests with yours — not the other way around.
            </p>
          </div>

          <div className="p-6 sm:p-8 md:p-10 text-left" style={{ border: "1px solid rgba(240,236,227,0.05)" }}>
            <p className="text-xs sm:text-sm tracking-[0.35em] uppercase mb-2 text-center" style={{ ...sans, color: "#E4E3E1", fontWeight: 500 }}>
              Get the Full Report
            </p>
            <p className="text-sm sm:text-base mb-6 sm:mb-8 text-center" style={{ ...sans, color: "#6C7D80", fontWeight: 400 }}>
              Learn how Oak's fee structure is designed to protect your returns, not erode them.
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
              { stat: "0%", note: "hidden fees or performance carry" },
              { stat: "35+", note: "years of management experience" },
              { stat: "8", note: "market cycles navigated" },
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
              The "2 and 20" model wasn't built for{" "}
              <em style={{ color: "#C7A74C", fontWeight: 300 }}>you.</em>
            </h2>
            <div className="space-y-6">
              <p className="text-sm sm:text-base leading-[1.7]" style={{ ...sans, color: "#6C7D80", fontWeight: 300 }}>
                Most private credit funds charge management fees that compound quietly and performance fees that reward the manager regardless of how your capital actually performs.
              </p>
              <p className="text-sm sm:text-base leading-[1.7]" style={{ ...sans, color: "#6C7D80", fontWeight: 300 }}>
                Oak's fee structure was designed from the ground up to align incentives. We earn when you earn — not before, and not at your expense.
              </p>
            </div>
          </div>

          <div className="pl-6 sm:pl-8 mt-16" style={{ borderLeft: "1px solid #C7A74C" }}>
            <p className="text-lg sm:text-xl leading-[1.4] max-w-lg font-light" style={{ ...display, color: "#0A1520" }}>
              When your manager's carry comes before your return, you're not investing — you're subsidizing.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-[1px] mt-20 overflow-hidden max-w-4xl mx-auto" style={{ backgroundColor: "rgba(17,24,39,0.06)" }}>
            {[
              { title: "No Hidden Carry", text: "Your returns belong to you. Our fee structure doesn't erode your yield with performance-based extractions." },
              { title: "Transparent Costs", text: "Every fee is disclosed up front. No surprises buried in the operating agreement." },
              { title: "Aligned Incentives", text: "We co-invest alongside you. Our interests are structurally aligned, not just aspirationally." },
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
            Are your returns working for you?{" "}
            <span style={{ color: "#D4B35C" }}>Or for someone else's carry?</span>
          </p>
          <p className="text-sm mt-8 max-w-md mx-auto" style={{ ...sans, color: "#6C7D80", fontWeight: 400 }}>
            The difference between aligned fees and extractive fees compounds every year.
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="mt-10 inline-flex items-center gap-3 py-3 px-10 text-[11px] tracking-[0.3em] uppercase transition-opacity" style={{ ...sans, backgroundColor: "#C7A74C", color: "#060D14", fontWeight: 600 }}>
            Get the Report <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <LandingDisclosure />

      <footer className="px-6 sm:px-12 lg:px-20 py-8" style={{ backgroundColor: "#060D14", borderTop: "1px solid rgba(240,236,227,0.04)" }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <a href="/"><img src="/lovable-uploads/white_oak.png" alt="Oak Real Estate Partners" className="h-8 w-auto" /></a>
          <a href="https://oakrepartners.com" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-wide hover:underline underline-offset-4" style={{ ...sans, color: "#C7A74C", fontWeight: 400 }}>oakrepartners.com</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingFeeStructure;