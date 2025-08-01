import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="block">
              <img 
                src="/lovable-uploads/e323112f-3778-4823-a73c-459340f8fc23.png" 
                alt="OAK" 
                className="h-14 w-auto transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-12">
            <div className="group relative">
              <button className={`flex items-center transition-all duration-300 font-sans font-medium text-sm tracking-wide ${
                scrolled ? 'text-gray-800 hover:text-garnet-edge' : 'text-gray-800 hover:text-garnet-edge'
              }`}>
                Our Firm
                <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className={`absolute w-full h-0.5 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 bottom-0 ${
                scrolled ? 'bg-garnet-edge' : 'bg-garnet-edge'
              }`}></div>
              
              {/* Dropdown Menu */}
              <div className={`absolute left-0 top-full w-48 border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 ${
                scrolled ? 'bg-white border-gray-200' : 'bg-white border-gray-200'
              }`}>
                <div className="py-2">
                  <a 
                    href="/about" 
                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                      scrolled ? 'text-gray-800 hover:bg-garnet-edge/20 hover:text-garnet-edge' : 'text-gray-800 hover:bg-garnet-edge/20 hover:text-garnet-edge'
                    }`}
                  >
                    About Us
                  </a>
                  <a 
                    href="/leadership" 
                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                      scrolled ? 'text-gray-800 hover:bg-garnet-edge/20 hover:text-garnet-edge' : 'text-gray-800 hover:bg-garnet-edge/20 hover:text-garnet-edge'
                    }`}
                  >
                    Leadership
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative">
              <button className={`flex items-center transition-all duration-300 font-sans font-medium text-sm tracking-wide ${
                scrolled ? 'text-gray-800 hover:text-garnet-edge' : 'text-gray-800 hover:text-garnet-edge'
              }`}>
                Lending
                <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className={`absolute w-full h-0.5 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 bottom-0 ${
                scrolled ? 'bg-garnet-edge' : 'bg-garnet-edge'
              }`}></div>
              
              {/* Lending Dropdown Menu */}
              <div className={`absolute left-0 top-full w-56 border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 ${
                scrolled ? 'bg-white border-gray-200' : 'bg-white border-gray-200'
              }`}>
                <div className="py-2">
                  <a 
                    href="/lending" 
                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                      scrolled ? 'text-gray-800 hover:bg-garnet-edge/20 hover:text-garnet-edge' : 'text-gray-800 hover:bg-garnet-edge/20 hover:text-garnet-edge'
                    }`}
                  >
                    Overview
                  </a>
                  <a 
                    href="/lending/core-bridge" 
                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                      scrolled ? 'text-gray-800 hover:bg-garnet-edge/20 hover:text-garnet-edge' : 'text-gray-800 hover:bg-garnet-edge/20 hover:text-garnet-edge'
                    }`}
                  >
                    Core Bridge
                  </a>
                  <a 
                    href="/lending/core-plus-bridge" 
                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                      scrolled ? 'text-gray-800 hover:bg-garnet-edge/20 hover:text-garnet-edge' : 'text-gray-800 hover:bg-garnet-edge/20 hover:text-garnet-edge'
                    }`}
                  >
                    Core-Plus Bridge
                  </a>
                  <a 
                    href="/lending/opportunistic-bridge" 
                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                      scrolled ? 'text-gray-800 hover:bg-garnet-edge/20 hover:text-garnet-edge' : 'text-gray-800 hover:bg-garnet-edge/20 hover:text-garnet-edge'
                    }`}
                  >
                    Opportunistic Bridge
                  </a>
                  <a 
                    href="/lending/participating-bridge" 
                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                      scrolled ? 'text-gray-800 hover:bg-garnet-edge/20 hover:text-garnet-edge' : 'text-gray-800 hover:bg-garnet-edge/20 hover:text-garnet-edge'
                    }`}
                  >
                    Participating Bridge
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative">
              <a href="/investments" className={`transition-all duration-300 font-sans font-medium text-sm tracking-wide ${
                scrolled ? 'text-gray-800 hover:text-garnet-edge' : 'text-gray-800 hover:text-garnet-edge'
              }`}>
                Investments
              </a>
              <div className={`absolute w-full h-0.5 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 bottom-0 ${
                scrolled ? 'bg-garnet-edge' : 'bg-garnet-edge'
              }`}></div>
            </div>
            <div className="group relative">
              <a href="/offerings" className={`transition-all duration-300 font-sans font-medium text-sm tracking-wide ${
                scrolled ? 'text-gray-800 hover:text-garnet-edge' : 'text-gray-800 hover:text-garnet-edge'
              }`}>
                Offerings
              </a>
              <div className={`absolute w-full h-0.5 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 bottom-0 ${
                scrolled ? 'bg-garnet-edge' : 'bg-garnet-edge'
              }`}></div>
            </div>
            <div className="group relative">
              <a href="/transactions" className={`transition-all duration-300 font-sans font-medium text-sm tracking-wide ${
                scrolled ? 'text-gray-800 hover:text-garnet-edge' : 'text-gray-800 hover:text-garnet-edge'
              }`}>
                Transactions
              </a>
              <div className={`absolute w-full h-0.5 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 bottom-0 ${
                scrolled ? 'bg-garnet-edge' : 'bg-garnet-edge'
              }`}></div>
            </div>
            <div className="group relative">
              <a href="/news" className={`transition-all duration-300 font-sans font-medium text-sm tracking-wide ${
                scrolled ? 'text-gray-800 hover:text-garnet-edge' : 'text-gray-800 hover:text-garnet-edge'
              }`}>
                News
              </a>
              <div className={`absolute w-full h-0.5 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 bottom-0 ${
                scrolled ? 'bg-garnet-edge' : 'bg-garnet-edge'
              }`}></div>
            </div>
            <a href="/contact" className={`group relative transition-all duration-300 font-sans font-medium text-sm tracking-wide ${
              scrolled ? 'text-gray-800 hover:text-garnet-edge' : 'text-gray-800 hover:text-garnet-edge'
            }`}>
              Contact
              <div className={`absolute w-full h-0.5 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 bottom-0 ${
                scrolled ? 'bg-garnet-edge' : 'bg-garnet-edge'
              }`}></div>
            </a>
          </div>
          
          {/* Desktop Investor Login Button */}
          <Button 
            className={`hidden lg:flex items-center px-6 py-2 font-sans font-medium text-sm tracking-wide rounded transition-all duration-300 hover:shadow-md ${
              scrolled 
                ? 'bg-accent-brown hover:bg-accent-brown/90 text-silver-mist border border-accent-brown' 
                : 'bg-accent-brown hover:bg-accent-brown/90 text-silver-mist border border-accent-brown'
            }`}
          >
            Investor Login
          </Button>

          {/* Mobile Hamburger Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden rounded-none p-2 ${
                  scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[380px] bg-obsidian border-l border-garnet-edge/20 p-0">
              <div className="flex flex-col h-full">
                {/* Header with Logo */}
                <div className="px-8 py-6 border-b border-garnet-edge/10">
                  <img 
                    src="/lovable-uploads/e323112f-3778-4823-a73c-459340f8fc23.png" 
                    alt="OAK" 
                    className="h-10 w-auto filter brightness-0 invert"
                  />
                </div>
                
                {/* Navigation Links */}
                <div className="flex-1 px-8 py-8">
                  <div className="space-y-1">
                    <a 
                      href="/about" 
                      className="block text-silver-mist hover:text-garnet-edge transition-all duration-300 font-sans font-medium text-xl py-4 px-0 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative">
                        Our Firm
                        <div className="absolute -bottom-1 left-0 w-0 h-px bg-garnet-edge transition-all duration-300 group-hover:w-full"></div>
                      </span>
                    </a>
                    <a 
                      href="/lending" 
                      className="block text-silver-mist hover:text-garnet-edge transition-all duration-300 font-sans font-medium text-xl py-4 px-0 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative">
                        Lending
                        <div className="absolute -bottom-1 left-0 w-0 h-px bg-garnet-edge transition-all duration-300 group-hover:w-full"></div>
                      </span>
                    </a>
                    <a 
                      href="/investments" 
                      className="block text-silver-mist hover:text-garnet-edge transition-all duration-300 font-sans font-medium text-xl py-4 px-0 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative">
                        Investments
                        <div className="absolute -bottom-1 left-0 w-0 h-px bg-garnet-edge transition-all duration-300 group-hover:w-full"></div>
                      </span>
                    </a>
                    <a 
                      href="/transactions" 
                      className="block text-silver-mist hover:text-garnet-edge transition-all duration-300 font-sans font-medium text-xl py-4 px-0 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative">
                        Transactions
                        <div className="absolute -bottom-1 left-0 w-0 h-px bg-garnet-edge transition-all duration-300 group-hover:w-full"></div>
                      </span>
                    </a>
                    <a 
                      href="/news" 
                      className="block text-silver-mist hover:text-garnet-edge transition-all duration-300 font-sans font-medium text-xl py-4 px-0 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative">
                        News
                        <div className="absolute -bottom-1 left-0 w-0 h-px bg-garnet-edge transition-all duration-300 group-hover:w-full"></div>
                      </span>
                    </a>
                    <a 
                      href="/contact" 
                      className="block text-silver-mist hover:text-garnet-edge transition-all duration-300 font-sans font-medium text-xl py-4 px-0 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative">
                        Contact
                        <div className="absolute -bottom-1 left-0 w-0 h-px bg-garnet-edge transition-all duration-300 group-hover:w-full"></div>
                      </span>
                    </a>
                  </div>
                </div>
                
                {/* Bottom CTA */}
                <div className="px-8 py-6 border-t border-garnet-edge/10">
                  <Button 
                    className="w-full bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-8 py-4 font-sans font-semibold text-lg tracking-wide rounded-none transition-all duration-300 hover:shadow-lg border-2 border-accent-brown hover:border-garnet-edge"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Investor Login
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;