import { Linkedin } from "lucide-react";

const FooterDraft3 = () => {
  return (
    <footer className="bg-abyss py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            
            <div className="sm:col-span-2 lg:col-span-2 space-y-6">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/5f1c8481-e8d3-4d2a-88d6-54df790bcf6c.png" 
                  alt="OAK Real Estate Partners" 
                  className="h-16 w-auto opacity-90"
                />
              </div>
              <p className="text-cream/80 leading-relaxed font-body max-w-md">
                Private commercial real estate credit, structured for protection, built for performance, and guided by partnership in the creation of long-term value.
              </p>
              <a 
                href="https://www.linkedin.com/company/oak-real-estate-partners/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cream/80 hover:text-gold-accent transition-colors font-body mt-4"
              >
                <Linkedin className="w-5 h-5" />
                <span>Follow us</span>
              </a>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-display font-medium text-cream">Quick Links</h4>
              <nav className="space-y-3">
                {["About", "Leadership", "Lending", "Investing", "Transactions", "News", "Contact"].map((link) => (
                  <a key={link} href={`/${link.toLowerCase()}`} className="block text-cream/80 hover:text-gold-accent transition-colors font-body">{link}</a>
                ))}
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-display font-medium text-cream">Contact</h4>
              <div className="space-y-4 text-cream/80">
                <div>
                  <p className="font-display text-sm">Office</p>
                  <a href="https://maps.google.com/?q=5925+Carnegie+Boulevard,+Suite+110,+Charlotte,+NC+28209" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-cream/80 hover:text-gold-accent transition-colors block">
                    5925 Carnegie Boulevard<br />Suite 110<br />Charlotte, NC 28209
                  </a>
                </div>
                <div>
                  <p className="font-display text-sm">Phone</p>
                  <a href="tel:+19802886627" className="font-body text-sm text-cream/80 hover:text-gold-accent transition-colors">980.288.6627</a>
                </div>
                <div>
                  <p className="font-display text-sm">Email</p>
                  <a href="mailto:ir@oakrepartners.com" className="font-body text-sm text-cream/80 hover:text-gold-accent transition-colors">ir@oakrepartners.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-graphite-fog/30 pt-8 mb-6">
            <p className="text-center text-cream/60 text-xs font-sans leading-relaxed max-w-6xl mx-auto">
              This website and the information contained herein provides general information related to the overall business, loan programs and experience of White Oak Capital Holdings, LLC d/b/a/ Oak Real Estate Partners ("OAK") and its controlled affiliates and does not necessarily differentiate as between those entities. This website and the information contained herein does NOT constitute an offer to sell, nor a solicitation of an offer to purchase, any security. Offers will only be made through an offering circular, private placement memorandum or prospectus, and only where permitted by law.
            </p>
          </div>

          <div className="border-t border-graphite-fog/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6 text-sm text-cream/60 font-display">
                <a href="/privacy" className="hover:text-gold-accent transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-gold-accent transition-colors">Terms of Service</a>
                <a href="/disclosures" className="hover:text-gold-accent transition-colors">Disclosures</a>
              </div>
              <p className="text-sm text-cream/60 font-display">
                © 2025 White Oak Capital Holdings, LLC d/b/a Oak Real Estate Partners. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDraft3;
