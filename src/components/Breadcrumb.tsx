import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="bg-gradient-to-r from-obsidian via-graphite-fog to-deep-petrol py-6 border-b border-silver-mist/10">
      <div className="container mx-auto px-6">
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
      </div>
    </div>
  );
};

export default Breadcrumb;