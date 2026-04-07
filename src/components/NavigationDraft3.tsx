import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const NavigationDraft3 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-cream/95 backdrop-blur-xl border-b border-gold-accent/20 shadow-lg' 
        : 'bg-cream/90 backdrop-blur-sm border-b border-gold-accent/10'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <a href="/" className="block">
              <img 
                src="/lovable-uploads/e323112f-3778-4823-a73c-459340f8fc23.png" 
                alt="OAK" 
                className="h-10 sm:h-12 lg:h-14 w-auto transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-12">
            {[
              { label: "Our Firm", dropdown: [
                { href: "/about", label: "About Us" },
                { href: "/leadership", label: "Leadership" },
                { href: "/subsidiaries", label: "Our Subsidiaries" },
              ]},
              { label: "Lending", dropdown: [
                { href: "/lending", label: "Overview" },
                { href: "/lending/bridge", label: "Bridge Loan Programs" },
                { href: "/lending/fha-hud", label: "FHA/HUD Loan Programs" },
              ]},
            ].map((item) => (
              <div key={item.label} className="group relative">
                <button className="flex items-center transition-all duration-300 font-body font-medium text-sm tracking-wide text-abyss hover:text-gold-accent">
                  {item.label}
                  <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute w-full h-0.5 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 bottom-0 bg-gold-accent"></div>
                <div className="absolute left-0 top-full w-56 border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 bg-cream border-gold-accent/20">
                  <div className="py-2">
                    {item.dropdown.map((sub) => (
                      <a key={sub.href} href={sub.href} className="block px-4 py-2 text-sm text-abyss hover:bg-gold-accent/10 hover:text-gold-accent transition-colors duration-200">
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {["Why Oak", "Investing", "Transactions"].map((label) => (
              <div key={label} className="group relative">
                <a href={`/${label.toLowerCase().replace(" ", "")}`} className="transition-all duration-300 font-body font-medium text-sm tracking-wide text-abyss hover:text-gold-accent">
                  {label}
                </a>
                <div className="absolute w-full h-0.5 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 bottom-0 bg-gold-accent"></div>
              </div>
            ))}
            <div className="group relative">
              <button className="flex items-center transition-all duration-300 font-body font-medium text-sm tracking-wide text-abyss hover:text-gold-accent">
                Resources
                <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute w-full h-0.5 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 bottom-0 bg-gold-accent"></div>
              <div className="absolute left-0 top-full w-48 border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 bg-cream border-gold-accent/20">
                <div className="py-2">
                  {[
                    { href: "/news", label: "News" },
                    { href: "/blog", label: "Blog" },
                    { href: "/investor-education", label: "Videos" },
                    { href: "/webinars", label: "Webinars" },
                  ].map((sub) => (
                    <a key={sub.href} href={sub.href} className="block px-4 py-2 text-sm text-abyss hover:bg-gold-accent/10 hover:text-gold-accent transition-colors duration-200">
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop Contact Us Button */}
          <a href="/contact">
            <Button className="hidden lg:flex items-center px-6 py-2 font-body font-medium text-sm tracking-wide rounded transition-all duration-300 hover:shadow-md bg-gold-accent hover:bg-gold-warm text-abyss border border-gold-accent">
              Contact Us
            </Button>
          </a>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden rounded-none p-2 text-abyss hover:bg-gold-accent/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[380px] bg-abyss border-l border-gold-accent/20 p-0">
              <div className="flex flex-col h-full">
                <div className="px-6 sm:px-8 py-4 sm:py-6 border-b border-gold-accent/10">
                  <img src="/lovable-uploads/e323112f-3778-4823-a73c-459340f8fc23.png" alt="OAK" className="h-10 w-auto filter brightness-0 invert" />
                </div>
                <div className="flex-1 px-6 sm:px-8 py-6 sm:py-8 overflow-y-auto">
                  <div className="space-y-1">
                    {[
                      { section: "Our Firm", links: [
                        { href: "/about", label: "About Us" },
                        { href: "/leadership", label: "Leadership" },
                        { href: "/subsidiaries", label: "Our Subsidiaries" },
                      ]},
                      { section: "Lending", links: [
                        { href: "/lending", label: "Overview" },
                        { href: "/lending/bridge", label: "Bridge Loans" },
                        { href: "/lending/fha-hud", label: "FHA/HUD Programs" },
                      ]},
                    ].map((group) => (
                      <div key={group.section} className="space-y-2">
                        <span className="block text-cream/60 font-body font-medium text-sm py-2 px-0 uppercase tracking-wider">{group.section}</span>
                        {group.links.map((link) => (
                          <a key={link.href} href={link.href} className="block text-cream hover:text-gold-accent transition-all duration-300 font-body font-medium text-lg py-3 px-4 ml-2" onClick={() => setIsMenuOpen(false)}>
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ))}
                    {["Why Oak", "Investing", "Transactions", "News", "Blog", "Contact"].map((label) => (
                      <a key={label} href={`/${label.toLowerCase().replace(" ", "")}`} className="block text-cream hover:text-gold-accent transition-all duration-300 font-body font-medium text-xl py-4 px-0" onClick={() => setIsMenuOpen(false)}>
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavigationDraft3;
