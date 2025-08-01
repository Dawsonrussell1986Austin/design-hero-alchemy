import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
  quickLinks?: Array<{
    label: string;
    href: string;
  }>;
}

const Breadcrumb = ({ items, quickLinks }: BreadcrumbProps) => {
  return (
    <div className="bg-gradient-to-r from-obsidian via-graphite-fog to-deep-petrol py-6 border-b border-silver-mist/10 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <nav className="flex items-center space-x-2 text-silver-mist">
            {items.map((item, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 mx-2 text-silver-mist/60" />
                )}
                {item.href ? (
                  <a 
                    href={item.href}
                    className="text-silver-mist/80 hover:text-silver-mist transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-silver-mist font-medium">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </nav>
          
          {/* Quick Links */}
          {quickLinks && quickLinks.length > 0 && (
            <div className="flex items-center space-x-4">
              <span className="text-silver-mist/60 text-sm">Quick Links:</span>
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-silver-mist/80 hover:text-silver-mist hover:bg-white/10 px-3 py-1 rounded transition-all duration-200 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;