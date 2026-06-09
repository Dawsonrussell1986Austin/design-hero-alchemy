import { useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";
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
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#13192B" }}>
      <SEOHead
        title="Thank You — Your Report is Ready"
        description="Your 2026 Institutional Investor Report is on its way."
        canonicalUrl="/thank-you-report"
      />

      <section className="flex-1 flex flex-col justify-center items-center px-4 sm:px-12 lg:px-20 py-16 sm:py-24">
        {/* Logo */}
        <a href="/" className="mb-16 sm:mb-20">
          <img
            src="/lovable-uploads/white_oak.png"
            alt="Oak Real Estate Partners"
            className="h-8 sm:h-10 md:h-12 w-auto"
          />
        </a>

        <div className="max-w-2xl mx-auto text-center">

          <p className="text-xs sm:text-sm tracking-[0.4em] uppercase mb-6" style={{ ...sans, color: "#B89B5E", fontWeight: 500 }}>
            You're In
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-light" style={{ ...serif, color: "#ffffff" }}>
            Check your inbox.
          </h1>

          <p className="text-base sm:text-lg leading-[1.7] mt-6 max-w-md mx-auto" style={{ ...sans, color: "#9AA0AF", fontWeight: 400 }}>
            We've sent the 2026 Institutional Investor Report to your email. If you don't see it within a few minutes, check your spam folder.
          </p>

          {/* Download link */}
          <div className="mt-10 p-6 sm:p-8 text-center" style={{ border: "1px solid rgba(240,236,227,0.05)" }}>
            <p className="text-sm mb-4" style={{ ...sans, color: "#9AA0AF", fontWeight: 400 }}>
              Don't want to wait? Download it now.
            </p>
            <a
              href="/documents/2026-market-correction-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-3 py-3 px-8 text-[11px] tracking-[0.3em] uppercase transition-opacity hover:opacity-90"
              style={{ ...sans, backgroundColor: "#B89B5E", color: "#13192B", fontWeight: 600 }}
            >
              <Download className="h-4 w-4" />
              Download the Report
            </a>
          </div>

          {/* Back to site */}
          <a
            href="/"
            className="inline-flex items-center gap-2 mt-12 text-sm tracking-wide hover:underline underline-offset-4 transition-opacity"
            style={{ ...sans, color: "#B89B5E", fontWeight: 400 }}
          >
            Visit oakrepartners.com <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="px-4 sm:px-12 lg:px-20 py-8" style={{ borderTop: "1px solid rgba(240,236,227,0.04)" }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase" style={{ ...sans, color: "#F3EFE4", fontWeight: 500 }}>Oak Real Estate Partners</p>
            <p className="text-[9px] tracking-[0.2em] uppercase mt-1" style={{ ...sans, color: "rgba(240,236,227,0.15)", fontWeight: 300 }}>
              Institutional CRE Lending · Senior Secured · Real Assets
            </p>
          </div>
          <a href="https://oakrepartners.com" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-wide hover:underline underline-offset-4" style={{ ...sans, color: "#B89B5E", fontWeight: 400 }}>
            oakrepartners.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ThankYouReport;
