import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";

const AccreditedInvestorReport = () => {
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
        title="Accredited Investor Report"
        description="Request the Accredited Investor Report from Oak Real Estate Partners."
        canonicalUrl="/accredited-investor-report"
        noIndex
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

        <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-[1.1] font-light text-center mb-8 sm:mb-10" style={{ ...serif, color: "#ffffff" }}>
          Accredited Investor Report
        </h1>

        {/* Form embed */}
        <div className="w-full max-w-2xl p-4 sm:p-6" style={{ border: "1px solid rgba(240,236,227,0.08)", background: "rgba(255,255,255,0.02)" }}>
          <iframe
            src="https://go.oakrepartners.com/l/1105131/2026-07-09/b57s1v"
            width="100%"
            height="800"
            title="Accredited Investor Report Form"
            frameBorder="0"
            scrolling="no"
            allowTransparency
            style={{ border: 0, overflow: "hidden" }}
          />
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

export default AccreditedInvestorReport;
