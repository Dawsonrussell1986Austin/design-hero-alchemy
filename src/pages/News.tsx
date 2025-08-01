import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimplePageHeader from "@/components/SimplePageHeader";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      title: "OAK CAPITAL HOLDINGS PROVIDES BRIDGE LOAN FOR PHILADELPHIA MIDRISE",
      excerpt: "Oak Capital Holdings, LLC, has provided a $9.225-million bridge loan for the Ridge Avenue Apartments, a newly built residential community in Philadelphia.",
      date: "May 6, 2025",
      image: "/lovable-uploads/403d76e1-5d7b-4f4c-b865-ee5d118a616d.png"
    },
    {
      title: "OAK CAPITAL PROVIDES $8.7M ACQUISITION LOAN FOR MULTIFAMILY PROPERTY",
      excerpt: "EAST POINT, GA. — Oak Capital Holdings has provided an $8.7 million bridge loan for the acquisition and renovation of Garden Courts Apartments, an 86-unit multifamily community in the area.",
      date: "May 2, 2025",
      image: "/lovable-uploads/3842fd81-69ed-40e9-abc5-b0c4ac8bd5c8.png"
    },
    {
      title: "OAK CAPITAL HOLDINGS PROVIDES $8.65M FINANCING FOR THE ATLANTA",
      excerpt: "Oak Capital Holdings, LLC, a leading provider of private capital solutions for commercial real estate, has closed an $8.65-million bridge loan for the acquisition and renovation of Garden Courts Apartments.",
      date: "April 30, 2025",
      image: "/lovable-uploads/fd2a1b7e-1f4e-466b-84b8-06939b630008.png"
    },
    {
      title: "THIS WEEK'S DALLAS-FORT WORTH DEAL SHEET",
      excerpt: "Westmount Realty Capital Sells 1980s-Era Multifamily Property After adding extensive upgrades, a Dallas-based company sold a 45-year-old apartment complex in Arlington.",
      date: "April 21, 2025",
      image: "/lovable-uploads/3d74e083-1827-4c47-8309-022dc5ec46cf.png"
    },
    {
      title: "OAK CAPITAL HOLDINGS PROVIDES $10.30 MILLION IN FINANCING",
      excerpt: "Oak Capital Holdings, LLC provided a combined $10.30 million in financing for a pair of multifamily properties located in metropolitan Indianapolis. The separate bridge loans funded the acquisition and planned renovations.",
      date: "April 16, 2025",
      image: "/lovable-uploads/634f9046-a886-4d1d-81c0-abd82f0a7daf.png"
    },
    {
      title: "OAK CAPITAL HOLDINGS ANNOUNCES EXTENSION TO NOVEMBER 30, 2024",
      excerpt: "FOR IMMEDIATE RELEASE. Charlotte, NC. (October 31, 2024) – ROCF II Series, a series of Oak Capital Fund Series, LLC (the Company) today announced that it has extended the application deadline.",
      date: "October 31, 2024",
      image: "/lovable-uploads/89d8c150-21e7-428d-a059-cf90057a1204.png"
    },
    {
      title: "OAK CAPITAL HOLDINGS ANNOUNCES EXTENSION TO OCTOBER 31, 2024",
      excerpt: "FOR IMMEDIATE RELEASE. Charlotte, NC. (September 24, 2024) – ROCF II Series, a series of Oak Capital Fund Series, LLC (the Company) today announced that it has extended the application deadline.",
      date: "September 24, 2024",
      image: "/lovable-uploads/61420552-7df9-48c1-b18a-47010f1decaf.png"
    },
    {
      title: "OAK CAPITAL HOLDINGS ANNOUNCES EXTENSION TO SEPTEMBER 30, 2024",
      excerpt: "ROCF II Series, a series of Oak Capital Fund Series, LLC (the Company) today announced that it has extended the application deadline and acceptance date to September 30, 2024.",
      date: "August 30, 2024",
      image: "/lovable-uploads/91e1e90b-6a36-4bc1-96fc-955d2667a134.png"
    },
    {
      title: "OAK CAPITAL HOLDINGS ANNOUNCES EXTENSION OF EXPIRATION TIME",
      excerpt: "ROCF II Series, a series of Oak Capital Fund Series, LLC (the Company) today announced that it has extended the application deadline and acceptance date to September 30, 2024.",
      date: "July 31, 2024",
      image: "/lovable-uploads/3d74e083-1827-4c47-8309-022dc5ec46cf.png"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header with dark background */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
        <SimplePageHeader title="News" />
      </div>
      
      {/* Cream background for content */}
      <div className="bg-silver-mist">

      {/* News Articles Section */}
      <div className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-light text-obsidian mb-8 leading-tight">
                Recent <span className="text-accent-brown">Announcements</span>
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
                      <Calendar className="h-4 w-4 text-accent-brown" />
                      <span className="text-sm text-deep-petrol/70">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-light text-obsidian mb-4 line-clamp-2 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-deep-petrol/80 leading-relaxed text-sm mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Button 
                      variant="outline"
                      className="border-accent-brown/30 text-accent-brown hover:bg-accent-brown hover:text-silver-mist text-sm px-6 py-2 rounded-lg transition-all duration-300 group-hover:scale-105"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
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
            <h2 className="text-5xl lg:text-6xl font-light text-silver-mist mb-8 leading-tight">
              Stay <span className="text-accent-brown">Informed</span>
            </h2>
            
            <div className="bg-background/20 backdrop-blur-xl border border-silver-mist/20 rounded-3xl p-12 mb-16 hover:bg-background/30 transition-all duration-500">
              <p className="text-xl text-silver-mist/90 leading-relaxed font-light mb-8">
                Subscribe to receive the latest updates on Oak's transactions, market insights, and industry developments.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-obsidian/20 border-silver-mist/30 focus:border-accent-brown focus:ring-accent-brown/20 text-silver-mist placeholder:text-silver-mist/50 py-3 px-4 rounded-lg backdrop-blur-sm"
                />
                <Button 
                  className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-lg"
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