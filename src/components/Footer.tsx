import { Linkedin } from "lucide-react";
import { trackExternalLink, trackCTAClick } from "@/lib/gtm";

const Footer = () => {
  return (
    <footer className="bg-abyss py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            
            {/* Logo and Company Info */}
            <div className="sm:col-span-2 lg:col-span-2 space-y-6">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/5f1c8481-e8d3-4d2a-88d6-54df790bcf6c.png" 
                  alt="OAK Real Estate Partners" 
                  className="h-16 w-auto opacity-90"
                />
              </div>
              <p className="text-silver-mist/80 leading-relaxed font-body max-w-md">
                Private commercial real estate credit, structured for protection, built for performance, and guided by partnership in the creation of long-term value.
              </p>
              <a 
                href="https://www.linkedin.com/company/oak-real-estate-partners/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-silver-mist/80 hover:text-gold-accent transition-colors font-body mt-4"
                onClick={() => trackExternalLink('https://www.linkedin.com/company/oak-real-estate-partners/', 'Follow us on LinkedIn', 'footer')}
              >
                <Linkedin className="w-5 h-5" />
                <span>Follow us</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-display font-medium text-silver-mist">Quick Links</h4>
              <nav className="space-y-3">
                <a href="/about" className="block text-silver-mist/80 hover:text-gold-accent transition-colors font-body">About</a>
                <a href="/leadership" className="block text-silver-mist/80 hover:text-gold-accent transition-colors font-body">Leadership</a>
                <a href="/lending" className="block text-silver-mist/80 hover:text-gold-accent transition-colors font-body">Lending</a>
                <a href="/investing" className="block text-silver-mist/80 hover:text-gold-accent transition-colors font-body">Investing</a>
                <a href="/transactions" className="block text-silver-mist/80 hover:text-gold-accent transition-colors font-body">Transactions</a>
                <a href="/news" className="block text-silver-mist/80 hover:text-gold-accent transition-colors font-body">News</a>
                <a href="/contact" className="block text-silver-mist/80 hover:text-gold-accent transition-colors font-body">Contact</a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-serif font-medium text-silver-mist">Contact</h4>
              <div className="space-y-4 text-silver-mist/80">
                <div>
                  <p className="font-serif text-sm">Office</p>
                  <a 
                    href="https://maps.google.com/?q=5925+Carnegie+Boulevard,+Suite+110,+Charlotte,+NC+28209" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-silver-mist/80 hover:text-gold-accent transition-colors block"
                  >
                    5925 Carnegie Boulevard<br />Suite 110<br />Charlotte, NC 28209
                  </a>
                </div>
                <div>
                  <p className="font-serif text-sm">Phone</p>
                  <a href="tel:+19802886627" className="font-sans text-sm text-silver-mist/80 hover:text-gold-accent transition-colors">980.288.6627</a>
                </div>
                <div>
                  <p className="font-serif text-sm">Email</p>
                  <a href="mailto:ir@oakrepartners.com" className="font-sans text-sm text-silver-mist/80 hover:text-gold-accent transition-colors">ir@oakrepartners.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Disclosure */}
          <div className="border-t border-graphite-fog/30 pt-8 mb-6">
            <p className="text-center text-silver-mist/70 text-xs font-sans leading-relaxed max-w-6xl mx-auto">
              This website and the information contained herein provides general information related to the overall business, loan programs and experience of White Oak Capital Holdings, LLC d/b/a/ Oak Real Estate Partners ("OAK") and its controlled affiliates and does not necessarily differentiate as between those entities. This website and the information contained herein does NOT constitute an offer to sell, nor a solicitation of an offer to purchase, any security. Offers will only be made through an offering circular, private placement memorandum or prospectus, and only where permitted by law. Certain statements contained on this website constitute "forward looking statements". Any such statements, performance projections and results have been based upon assumptions, some of which will vary, perhaps materially, from actual events and do not constitute a prediction or representation as to actual performance. Prior performance of OAK or any of its affiliates is not indicative of future results. There is no assurance that the Company objectives will be achieved.
            </p>
          </div>

          {/* Footnote Disclaimers */}
          <div className="mb-6 space-y-2 max-w-6xl mx-auto">
            <p className="text-silver-mist/50 text-[11px] font-sans leading-relaxed">
              <sup>1</sup> Oak Real Estate Partners track record. All figures described as "Oak" performance reflect Oak Real Estate Partners since inception. "Full-cycle loan" means a loan that has been fully repaid or otherwise resolved as of the reporting date. Past performance is not indicative of future results.
            </p>
            <p className="text-silver-mist/50 text-[11px] font-sans leading-relaxed">
              <sup>2</sup> Team career track record. Figures described as "team," "career," or "prior firm" performance reflect the aggregate work completed by current Oak principals during their prior careers at predecessor firms and are not Oak Real Estate Partners performance. They are presented to describe the experience of the management team. Predecessor performance was achieved at different firms, under different mandates and fee structures, and may not be directly comparable to performance investors in Oak Real Estate Partners vehicles may experience. Past performance is not indicative of future results.
            </p>
            <p className="text-silver-mist/50 text-[11px] font-sans leading-relaxed">
              <sup>3</sup> NAIC CM1/CM2 designation. Refers to the National Association of Insurance Commissioners' Commercial Mortgage classification system used in insurance company capital treatment. CM1 is the highest-quality classification. "Built to CM1/CM2 standards" describes Oak's underwriting approach and does not constitute a representation that any specific loan will receive a particular NAIC designation for any particular counterparty.
            </p>
            <p className="text-silver-mist/50 text-[11px] font-sans leading-relaxed">
              <sup>4</sup> Federal Reserve rate hikes. Refers to the cumulative increase in the target federal funds rate from March 2022 through July 2023. Source: Federal Reserve Board. <sup>5</sup> CRE lending gap estimate. Estimates of the annual small- and mid-balance CRE lending gap vary by source and methodology. Sources consulted include Mortgage Bankers Association and Federal Reserve data. <sup>6</sup> Outstanding CRE mortgage debt. Source: Mortgage Bankers Association Commercial/Multifamily Mortgage Debt Outstanding quarterly report. Figure approximate and varies quarter to quarter. <sup>7</sup> CRE maturities. Source: Mortgage Bankers Association projections and Trepp CRE maturity tracking. Figures approximate. <sup>8</sup> Private CRE credit AUM growth. Source: Preqin and Pitchbook private credit AUM reporting for real-estate-focused strategies. Figures approximate and based on most recent publicly reported data.
            </p>
          </div>

          {/* Bottom Border and Copyright */}
          <div className="border-t border-graphite-fog/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6 text-sm text-silver-mist/60 font-serif">
                <a href="/privacy" className="hover:text-gold-accent transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-gold-accent transition-colors">Terms of Service</a>
                <a href="/disclosures" className="hover:text-gold-accent transition-colors">Disclosures</a>
              </div>
              <p className="text-sm text-silver-mist/60 font-serif">
                © 2025 White Oak Capital Holdings, LLC d/b/a Oak Real Estate Partners. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;