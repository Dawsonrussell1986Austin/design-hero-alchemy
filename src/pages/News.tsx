import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import SimplePageHeader from "@/components/SimplePageHeader";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { OrganizationSchema, BreadcrumbSchema } from "@/components/StructuredData";

const News = () => {
  const newsArticles = [
    {
      title: "THE OAK COMPANIES PROVIDES BRIDGE LOAN FOR PHILADELPHIA MIDRISE",
      excerpt: "The Oak Companies has provided a $9.225-million bridge loan for the Ridge Avenue Apartments, a newly built residential community in Philadelphia.",
      date: "May 6, 2025",
      image: "/lovable-uploads/7d64e74a-873e-40ba-9f71-203a1eaa0fb6.png",
      slug: "philadelphia-midrise"
    },
    {
      title: "OAK CAPITAL PROVIDES $8.7M ACQUISITION LOAN FOR MULTIFAMILY PROPERTY",
      excerpt: "EAST POINT, GA. — The Oak Companies has provided an $8.7 million bridge loan for the acquisition and renovation of Garden Courts Apartments, an 86-unit multifamily community in the area.",
      date: "May 2, 2025",
      image: "/lovable-uploads/4d884eb1-b32f-41c8-99ea-cd282f2e9ee9.png",
      slug: "atlanta-acquisition-loan"
    },
    {
      title: "THE OAK COMPANIES PROVIDES $8.65M FINANCING FOR THE ATLANTA",
      excerpt: "The Oak Companies, a leading provider of private capital solutions for commercial real estate, has closed an $8.65-million bridge loan for the acquisition and renovation of Garden Courts Apartments.",
      date: "April 30, 2025",
      image: "/lovable-uploads/cccb1c23-6fdc-45cd-b7fe-dec532603687.png",
      slug: "atlanta-financing"
    },
    {
      title: "THIS WEEK'S DALLAS-FORT WORTH DEAL SHEET",
      excerpt: "Westmount Realty Capital Sells 1980s-Era Multifamily Property After adding extensive upgrades, a Dallas-based company sold a 45-year-old apartment complex in Arlington.",
      date: "April 21, 2025",
      image: "/lovable-uploads/d8141168-4c47-48f5-ad2f-5c933bca4b04.png",
      slug: "dallas-deal-sheet"
    },
    {
      title: "THE OAK COMPANIES PROVIDES $10.30 MILLION IN FINANCING",
      excerpt: "The Oak Companies provided a combined $10.30 million in financing for a pair of multifamily properties located in metropolitan Indianapolis. The separate bridge loans funded the acquisition and planned renovations.",
      date: "April 16, 2025",
      image: "/lovable-uploads/28b6260b-1406-4eab-a488-22e013d45c19.png",
      slug: "indianapolis-financing"
    },
    {
      title: "THE OAK COMPANIES ANNOUNCES EXTENSION TO NOVEMBER 30, 2024",
      excerpt: "FOR IMMEDIATE RELEASE. Charlotte, NC. (October 31, 2024) – ROCF II Series, a series of Oak Capital Fund Series, LLC (the Company) today announced that it has extended the application deadline.",
      date: "October 31, 2024",
      image: "/lovable-uploads/24298811-8997-4d25-aede-2af891615fb8.png",
      slug: "extension-november-2024"
    },
    {
      title: "THE OAK COMPANIES ANNOUNCES EXTENSION TO OCTOBER 31, 2024",
      excerpt: "FOR IMMEDIATE RELEASE. Charlotte, NC. (September 24, 2024) – ROCF II Series, a series of Oak Capital Fund Series, LLC (the Company) today announced that it has extended the application deadline.",
      date: "September 24, 2024",
      image: "/lovable-uploads/1d0ee0fb-7652-422c-8708-b56d61f1304c.png",
      slug: "extension-october-2024"
    },
    {
      title: "THE OAK COMPANIES ANNOUNCES EXTENSION TO SEPTEMBER 30, 2024",
      excerpt: "ROCF II Series, a series of Oak Capital Fund Series, LLC (the Company) today announced that it has extended the application deadline and acceptance date to September 30, 2024.",
      date: "August 30, 2024",
      image: "/lovable-uploads/f99afb6c-01df-4e96-a03b-151ca914423e.png",
      slug: "extension-september-2024"
    },
    {
      title: "THE OAK COMPANIES ANNOUNCES EXTENSION OF EXPIRATION TIME",
      excerpt: "ROCF II Series, a series of Oak Capital Fund Series, LLC (the Company) today announced that it has extended the application deadline and acceptance date to September 30, 2024.",
      date: "July 31, 2024",
      image: "/lovable-uploads/c86d708b-68f6-408c-92ec-d6851ddb868b.png",
      slug: "extension-july-2024"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="News & Announcements"
        description="Latest news and announcements from Oak Real Estate Partners. Stay updated on transactions, market insights, and company developments in commercial real estate lending."
        canonicalUrl="/news"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://oakrealestatepartners.com/' },
          { name: 'News', url: 'https://oakrealestatepartners.com/news' }
        ]}
      />
      {/* Header with dark background */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "News" }
        ]}
      />
      
      {/* Cream background for content */}
      <div className="bg-silver-mist">

      {/* News Articles Section */}
      <div className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-8 leading-tight">
                Recent <span className="text-gold-accent">Announcements</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <div key={index} className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-2xl overflow-hidden hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="h-4 w-4 text-gold-accent" />
                      <span className="text-sm text-deep-petrol/70">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-display font-medium text-obsidian mb-4 line-clamp-2 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-deep-petrol/80 leading-relaxed text-sm font-body font-normal mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                    {article.slug ? (
                      <Link to={`/news/${article.slug}`}>
                        <Button 
                          variant="outline"
                          className="border-gold-accent/30 text-gold-accent hover:bg-gold-accent hover:text-silver-mist text-sm px-6 py-2 rounded-lg transition-all duration-300 group-hover:scale-105"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        variant="outline"
                        className="border-gold-accent/30 text-gold-accent hover:bg-gold-accent hover:text-silver-mist text-sm px-6 py-2 rounded-lg transition-all duration-300 group-hover:scale-105"
                        disabled
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="relative py-32 bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-garnet-edge/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-medium text-silver-mist mb-8 leading-tight">
              Stay <span className="text-gold-accent">Informed</span>
            </h2>
            
            <div className="bg-background/20 backdrop-blur-xl border border-silver-mist/20 rounded-3xl p-12 mb-16 hover:bg-background/30 transition-all duration-500">
              <p className="text-lg lg:text-xl font-body font-normal text-silver-mist/90 leading-relaxed mb-8">
                Subscribe to receive the latest updates on Oak's transactions, market insights, and industry developments.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-obsidian/20 border-silver-mist/30 focus:border-gold-accent focus:ring-gold-accent/20 text-silver-mist placeholder:text-silver-mist/50 py-3 px-4 rounded-lg backdrop-blur-sm"
                />
                <Button 
                  className="bg-gold-accent hover:bg-gold-accent/90 text-silver-mist px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-lg"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default News;