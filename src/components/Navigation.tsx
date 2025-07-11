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
            <img 
              src="/lovable-uploads/71932cd7-9481-49c5-8971-a718dfd8a289.png" 
              alt="OAK Real Estate Partners" 
              className="h-14 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-12">
            <div className="group relative">
              <a href="#" className="flex items-center text-obsidian hover:text-accent-brown transition-all duration-300 font-sans font-medium text-sm tracking-wide">
                Our Firm
                <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </a>
              <div className="absolute w-full h-0.5 bg-accent-brown scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 bottom-0"></div>
            </div>
            <div className="group relative">
              <a href="#" className="flex items-center text-obsidian hover:text-accent-brown transition-all duration-300 font-sans font-medium text-sm tracking-wide">
                Platform
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
            <a href="#" className="group relative text-obsidian hover:text-accent-brown transition-all duration-300 font-sans font-medium text-sm tracking-wide">
              News
              <div className="absolute w-full h-0.5 bg-accent-brown scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 bottom-0"></div>
            </a>
            <a href="#" className="group relative text-obsidian hover:text-accent-brown transition-all duration-300 font-sans font-medium text-sm tracking-wide">
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
            <SheetContent side="right" className="w-[350px] bg-background/98 backdrop-blur-xl border-l border-border/20">
              <div className="flex flex-col space-y-8 mt-12 px-2">
                <div className="space-y-6">
                  <a 
                    href="#" 
                    className="block text-obsidian hover:text-accent-brown transition-all duration-300 font-sans font-medium text-lg py-3 px-4 rounded-sm hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Firm
                  </a>
                  <a 
                    href="#" 
                    className="block text-obsidian hover:text-accent-brown transition-all duration-300 font-sans font-medium text-lg py-3 px-4 rounded-sm hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Platform
                  </a>
                  <a 
                    href="#" 
                    className="block text-obsidian hover:text-accent-brown transition-all duration-300 font-sans font-medium text-lg py-3 px-4 rounded-sm hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Investments
                  </a>
                  <a 
                    href="#" 
                    className="block text-obsidian hover:text-accent-brown transition-all duration-300 font-sans font-medium text-lg py-3 px-4 rounded-sm hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    News
                  </a>
                  <a 
                    href="#" 
                    className="block text-obsidian hover:text-accent-brown transition-all duration-300 font-sans font-medium text-lg py-3 px-4 rounded-sm hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </div>
                <div className="pt-6 border-t border-border/20">
                  <Button 
                    className="w-full bg-obsidian hover:bg-obsidian/90 text-silver-mist px-8 py-4 font-sans font-semibold text-base tracking-wide rounded-none transition-all duration-300 hover:shadow-lg border-2 border-obsidian hover:border-accent-brown"
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