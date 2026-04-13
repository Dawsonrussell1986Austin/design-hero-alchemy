import SEOHead from "@/components/SEOHead";
import DelayedReportPopup from "@/components/DelayedReportPopup";
import LandingDisclosure from "@/components/LandingDisclosure";
import LandingGHLForm from "@/components/LandingGHLForm";
import { ChevronDown } from "lucide-react";

const LandingInstitutional = () => {
  const display = { fontFamily: "'Playfair Display', Georgia, serif" };
  const sans = { fontFamily: "'Lato', sans-serif" };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(135deg, #060D14, #082233, #233F52)" }}>
      <SEOHead
        title="Invest Alongside Institutions | Oak Real Estate Partners"
        description="Your capital, invested alongside insurance companies, foundations, and endowments. Access the same structures institutions use to protect and grow capital."
        canonicalUrl="/invest-alongside-institutions"
      />
      <DelayedReportPopup source="Institutional Co-Investment landing page opt-in" />

      <section className="relative min-h-screen flex flex-col justify-between px-4 sm:px-12 lg:px-20 pt-10 sm:pt-14 pb-8 sm:pb-12 overflow-hidden">
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden sm:block" style={{ opacity: 0.03 }}>
          <span className="text-[16rem] sm:text-[22rem] font-light leading-none block" style={{ ...display, color: "#E4E3E1" }}>CO</span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <a href="/"><img src="/lovable-uploads/white_oak.png" alt="Oak Real Estate Partners" className="h-8 sm:h-10 md:h-12 w-auto" /></a>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto mt-auto mb-auto py-6 sm:py-8 w-full">
          <div>
            <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-6 sm:mb-10" style={{ ...sans, color: "#C7A74C", opacity: 0.8, fontWeight: 500 }}>
              Institutional Co-Investment
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[0.9] tracking-tight" style={{ ...display, color: "#FAF7F2", letterSpacing: "-0.02em" }}>
              Your capital, invested alongside{" "}
              <em style={{ color: "#D4B35C", fontWeight: 300 }}>insurance companies, foundations & endowments.</em>
            </h1>
            <p className="text-base sm:text-lg leading-[1.7] mt-6 sm:mt-8 max-w-[480px]" style={{ ...sans, color: "#6C7D80", fontWeight: 400, letterSpacing: "0.02em" }}>
              Access the same senior-secured, real-asset-backed structures that institutions use to protect and grow capital through every cycle.
            </p>
          </div>

          <div className="p-6 sm:p-8 md:p-10 text-left" style={{ border: "1px solid rgba(240,236,227,0.05)" }}>
            <LandingGHLForm />
          </div>
        </div>

        <div className="relative z-10 pt-6 sm:pt-8 mt-6 sm:mt-8" style={{ borderTop: "1px solid rgba(240,236,227,0.05)" }}>
          <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-16 max-w-4xl mx-auto text-center">
            {[
              { stat: "$18B+", note: "in institutional capital managed" },
              { stat: "$5B+", note: "in commercial real estate financed" },
              { stat: "35+", note: "years of management experience" },
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
              The institutions investing alongside you aren't{" "}
              <em style={{ color: "#C7A74C", fontWeight: 300 }}>guessing.</em>
            </h2>
            <div className="space-y-6">
              <p className="text-sm sm:text-base leading-[1.7]" style={{ ...sans, color: "#6C7D80", fontWeight: 300 }}>
                Insurance companies, foundations, and endowments don't invest on hope. They invest on structure — senior-secured positions, named collateral, and underwriting standards that have weathered 8 market cycles.
              </p>
              <p className="text-sm sm:text-base leading-[1.7]" style={{ ...sans, color: "#6C7D80", fontWeight: 300 }}>
                Oak Real Estate Partners gives accredited investors access to the same investment structures these institutions rely on. Same protections. Same collateral quality. Same seat at the table.
              </p>
            </div>
          </div>

          <div className="pl-6 sm:pl-8 mt-16" style={{ borderLeft: "1px solid #C7A74C" }}>
            <p className="text-lg sm:text-xl leading-[1.4] max-w-lg font-light" style={{ ...display, color: "#0A1520" }}>
              When your capital sits alongside institutional money, you inherit the same structural protections they demanded before writing a check.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-[1px] mt-20 overflow-hidden max-w-4xl mx-auto" style={{ backgroundColor: "rgba(17,24,39,0.06)" }}>
            {[
              { title: "Institutional Partners", text: "Insurance companies, foundations, and endowments co-invest in the same structures as individual investors." },
              { title: "Proven Through Cycles", text: "35+ years of management experience navigating 8 market cycles with institutional capital." },
              { title: "Same Structure", text: "Accredited investors access the same senior-secured, first-lien positions institutions demand." },
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
            Are you investing with the same protections as{" "}
            <span style={{ color: "#D4B35C" }}>the institutions sitting next to you?</span>
          </p>
          <p className="text-sm mt-8 max-w-md mx-auto" style={{ ...sans, color: "#6C7D80", fontWeight: 400 }}>
            If the answer isn't clear, it's time to look closer.
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

export default LandingInstitutional;