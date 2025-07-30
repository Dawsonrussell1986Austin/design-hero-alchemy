import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-20 bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-sm">
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
              <button className="flex items-center text-obsidian hover:text-accent-brown transition-all duration-300 font-sans font-medium text-sm tracking-wide">
                Our Firm
                <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute w-full h-0.5 bg-accent-brown scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 bottom-0"></div>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full mt-2 w-48 bg-background border border-border/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <a 
                    href="/about" 
                    className="block px-4 py-2 text-sm text-obsidian hover:bg-accent-brown/10 hover:text-accent-brown transition-colors duration-200"
                  >
                    About Us
                  </a>
                  <a 
                    href="/leadership" 
                    className="block px-4 py-2 text-sm text-obsidian hover:bg-accent-brown/10 hover:text-accent-brown transition-colors duration-200"
                  >
                    Leadership
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative">
              <a href="/lending" className="flex items-center text-obsidian hover:text-accent-brown transition-all duration-300 font-sans font-medium text-sm tracking-wide">
                Lending
                <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </a>
              <div className="absolute w-full h-0.5 bg-accent-brown scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 bottom-0"></div>
            </div>
            <div className="group relative">
              <a href="#" className="flex items-center text-obsidian hover:text-accent-brown transition-all duration-300 font-sans font-medium text-sm tracking-wide">
                Investments
                <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </a>
              <div className="absolute w-full h-0.5 bg-accent-brown scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 bottom-0"></div>
            </div>
            <a href="/news" className="group relative text-obsidian hover:text-accent-brown transition-all duration-300 font-sans font-medium text-sm tracking-wide">
              News
              <div className="absolute w-full h-0.5 bg-accent-brown scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 bottom-0"></div>
            </a>
            <a href="/contact" className="group relative text-obsidian hover:text-accent-brown transition-all duration-300 font-sans font-medium text-sm tracking-wide">
              Contact
              <div className="absolute w-full h-0.5 bg-accent-brown scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 bottom-0"></div>
            </a>
          </div>
          
          {/* Desktop Investor Login Button */}
          <Button 
            className="hidden lg:flex items-center bg-obsidian hover:bg-obsidian/90 text-silver-mist px-8 py-3 font-sans font-semibold text-sm tracking-wide rounded-none transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border-2 border-obsidian hover:border-accent-brown"
          >
            Investor Login
          </Button>

          {/* Mobile Hamburger Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-obsidian hover:bg-obsidian/10 rounded-none p-2"
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
                      href="#" 
                      className="block text-silver-mist hover:text-garnet-edge transition-all duration-300 font-sans font-medium text-xl py-4 px-0 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative">
                        Investments
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