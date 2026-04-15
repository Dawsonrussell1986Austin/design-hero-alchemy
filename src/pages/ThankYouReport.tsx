import { useEffect } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const ThankYouReport = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,800;1,400;1,700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const serif = { fontFamily: "'Playfair Display', Georgia, serif" };
  const sans = { fontFamily: "'Montserrat', 'Lato', sans-serif" };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(135deg, #060D14, #082233, #233F52)" }}>
      <SEOHead
        title="Thank You — Your Report is Ready"
        description="Your 2026 Institutional Investor Report is on its way."
        canonicalUrl="/thank-you-report"
      />

      <section className="flex-1 flex flex-col justify-center items-center px-4 sm:px-12 lg:px-20 py-16 sm:py-24">
        {/* Logo */}
        <a href="/" className="mb-10 sm:mb-12">
          <img
            src="/lovable-uploads/white_oak.png"
            alt="Oak Real Estate Partners"
            className="h-8 sm:h-10 md:h-12 w-auto"
          />
        </a>

        {/* Download report — immediately below logo */}
        <div className="w-full max-w-xl p-6 sm:p-8 text-center mb-12 sm:mb-16" style={{ border: "1px solid rgba(240,236,227,0.08)", background: "rgba(255,255,255,0.02)" }}>
          <p className="text-xs sm:text-sm tracking-[0.4em] uppercase mb-4" style={{ ...sans, color: "#C7A74C", fontWeight: 500 }}>
            Your Report Is Ready
          </p>
          <a
            href="/documents/2026-market-correction-report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-3 py-3 px-10 text-[11px] tracking-[0.3em] uppercase transition-opacity hover:opacity-90"
            style={{ ...sans, backgroundColor: "#C7A74C", color: "#060D14", fontWeight: 600 }}
          >
            <Download className="h-4 w-4" />
            Download the Report
          </a>
        </div>

        {/* Check your inbox section */}
        <div className="max-w-lg mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ border: "1px solid rgba(199,167,76,0.3)" }}>
              <Mail className="h-5 w-5" style={{ color: "#C7A74C" }} />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-[1.1] font-light" style={{ ...serif, color: "#ffffff" }}>
            Now check your inbox.
          </h1>

          <p className="text-base sm:text-lg leading-[1.7] mt-5 max-w-md mx-auto" style={{ ...sans, color: "#6C7D80", fontWeight: 400 }}>
            Over the next few days, we'll send you a series of insights on how institutional investors are positioning in today's market — and how Oak's approach fits in.
          </p>

          <p className="text-sm leading-[1.7] mt-4 max-w-sm mx-auto" style={{ ...sans, color: "#4A5C5F", fontWeight: 400 }}>
            If you don't see our first email within a few minutes, check your spam folder.
          </p>

          {/* Back to site */}
          <a
            href="/"
            className="inline-flex items-center gap-2 mt-10 text-sm tracking-wide hover:underline underline-offset-4 transition-opacity"
            style={{ ...sans, color: "#C7A74C", fontWeight: 400 }}
          >
            Visit oakrepartners.com <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="px-4 sm:px-12 lg:px-20 py-8" style={{ borderTop: "1px solid rgba(240,236,227,0.04)" }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase" style={{ ...sans, color: "#E4E3E1", fontWeight: 500 }}>Oak Real Estate Partners</p>
            <p className="text-[9px] tracking-[0.2em] uppercase mt-1" style={{ ...sans, color: "rgba(240,236,227,0.15)", fontWeight: 300 }}>
              Institutional CRE Lending · Senior Secured · Real Assets
            </p>
          </div>
          <a href="https://oakrepartners.com" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-wide hover:underline underline-offset-4" style={{ ...sans, color: "#C7A74C", fontWeight: 400 }}>
            oakrepartners.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ThankYouReport;
