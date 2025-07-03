import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-20 border-b border-deep-petrol bg-nav-light">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/71932cd7-9481-49c5-8971-a718dfd8a289.png" 
              alt="OAK Real Estate Partners" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-obsidian hover:text-garnet-edge transition-colors font-serif font-medium">Our Firm</a>
            <a href="#" className="text-obsidian hover:text-garnet-edge transition-colors font-serif font-medium">Platform</a>
            <a href="#" className="text-obsidian hover:text-garnet-edge transition-colors font-serif font-medium">Investments</a>
            <a href="#" className="text-obsidian hover:text-garnet-edge transition-colors font-serif font-medium">News</a>
            <a href="#" className="text-obsidian hover:text-garnet-edge transition-colors font-serif font-medium">Contact</a>
          </div>
          
          {/* Desktop Investor Login Button */}
          <Button 
            className="hidden md:block bg-garnet-edge hover:bg-garnet-edge/90 text-obsidian px-6 py-2 font-serif font-medium rounded-sm transition-all duration-300"
          >
            Investor Login
          </Button>

          {/* Mobile Hamburger Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-obsidian hover:bg-obsidian/10"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-obsidian border-l border-deep-petrol">
              <div className="flex flex-col space-y-6 mt-8">
                <a 
                  href="#" 
                  className="text-silver-mist hover:text-garnet-edge transition-colors font-serif font-medium text-lg py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Firm
                </a>
                <a 
                  href="#" 
                  className="text-silver-mist hover:text-garnet-edge transition-colors font-serif font-medium text-lg py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Platform
                </a>
                <a 
                  href="#" 
                  className="text-silver-mist hover:text-garnet-edge transition-colors font-serif font-medium text-lg py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Investments
                </a>
                <a 
                  href="#" 
                  className="text-silver-mist hover:text-garnet-edge transition-colors font-serif font-medium text-lg py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  News
                </a>
                <a 
                  href="#" 
                  className="text-silver-mist hover:text-garnet-edge transition-colors font-serif font-medium text-lg py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <Button 
                  className="bg-garnet-edge hover:bg-garnet-edge/90 text-obsidian px-6 py-3 font-serif font-medium rounded-sm transition-all duration-300 mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Investor Login
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;