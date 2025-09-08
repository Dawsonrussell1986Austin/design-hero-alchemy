import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-obsidian py-12 sm:py-16">
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
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-display font-medium text-silver-mist">Quick Links</h4>
              <nav className="space-y-3">
                <a href="/about" className="block text-silver-mist/80 hover:text-accent-brown transition-colors font-body">About</a>
                <a href="/leadership" className="block text-silver-mist/80 hover:text-accent-brown transition-colors font-body">Leadership</a>
                <a href="/lending" className="block text-silver-mist/80 hover:text-accent-brown transition-colors font-body">Lending</a>
                <a href="/investments" className="block text-silver-mist/80 hover:text-accent-brown transition-colors font-body">Investments</a>
                <a href="/transactions" className="block text-silver-mist/80 hover:text-accent-brown transition-colors font-body">Transactions</a>
                <a href="/news" className="block text-silver-mist/80 hover:text-accent-brown transition-colors font-body">News</a>
                <a href="/contact" className="block text-silver-mist/80 hover:text-accent-brown transition-colors font-body">Contact</a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-serif font-medium text-silver-mist">Contact</h4>
              <div className="space-y-4 text-silver-mist/80">
                <div>
                  <p className="font-serif text-sm">Office</p>
                  <p className="font-sans text-sm">5925 Carnegie Boulevard<br />Suite 110<br />Charlotte, NC 28209</p>
                </div>
                <div>
                  <p className="font-serif text-sm">Phone</p>
                  <p className="font-sans text-sm">980.288.6627</p>
                </div>
                <div>
                  <p className="font-serif text-sm">Email</p>
                  <p className="font-sans text-sm">info@oakrepartners.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Disclosure */}
          <div className="border-t border-deep-petrol/30 pt-8 mb-6">
            <p className="text-center text-silver-mist/70 text-sm font-sans leading-relaxed max-w-4xl mx-auto">
              Oak is a private real estate credit platform. Communications are for informational purposes only and do not constitute an offer to sell or a solicitation of an offer to buy securities.
            </p>
          </div>

          {/* Footnote Disclaimers */}
          <div className="mb-6 space-y-4">
            {/* Removed the three separate footnotes as they're now consolidated under the statistics */}
          </div>

          {/* Bottom Border and Copyright */}
          <div className="border-t border-deep-petrol/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6 text-sm text-silver-mist/60 font-serif">
                <a href="/privacy" className="hover:text-accent-brown transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-accent-brown transition-colors">Terms of Service</a>
                <a href="/disclosures" className="hover:text-accent-brown transition-colors">Disclosures</a>
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