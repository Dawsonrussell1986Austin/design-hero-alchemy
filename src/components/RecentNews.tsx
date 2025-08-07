import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const RecentNews = () => {
  const recentArticles = [
    {
      title: "OAK CAPITAL HOLDINGS PROVIDES BRIDGE LOAN FOR PHILADELPHIA MIDRISE",
      excerpt: "Oak Capital Holdings, LLC, has provided a $9.225-million bridge loan for the Ridge Avenue Apartments, a newly built residential community in Philadelphia.",
      date: "May 6, 2025",
      image: "/lovable-uploads/403d76e1-5d7b-4f4c-b865-ee5d118a616d.png",
      slug: "philadelphia-midrise"
    },
    {
      title: "OAK CAPITAL PROVIDES $8.7M ACQUISITION LOAN FOR MULTIFAMILY PROPERTY",
      excerpt: "EAST POINT, GA. — Oak Capital Holdings has provided an $8.7 million bridge loan for the acquisition and renovation of Garden Courts Apartments.",
      date: "May 2, 2025",
      image: "/lovable-uploads/3842fd81-69ed-40e9-abc5-b0c4ac8bd5c8.png",
      slug: "atlanta-acquisition-loan"
    },
    {
      title: "OAK CAPITAL HOLDINGS PROVIDES $8.65M FINANCING FOR THE ATLANTA",
      excerpt: "Oak Capital Holdings, LLC, has closed an $8.65-million bridge loan for the acquisition and renovation of Garden Courts Apartments.",
      date: "April 30, 2025",
      image: "/lovable-uploads/fd2a1b7e-1f4e-466b-84b8-06939b630008.png",
      slug: "atlanta-financing"
    }
  ];

  return (
    <div className="relative z-10 bg-silver-mist py-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-8">
              Recent News & Updates
            </h2>
            <p className="text-lg text-deep-petrol leading-relaxed max-w-4xl mx-auto font-body">
              Stay informed with our latest transactions and market developments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {recentArticles.map((article, index) => (
              <div key={index} className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg overflow-hidden hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="h-4 w-4 text-accent-brown" />
                    <span className="text-sm text-deep-petrol/70">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-display font-medium text-obsidian mb-3 line-clamp-2 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-deep-petrol leading-relaxed font-body text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link to={`/news/${article.slug}`}>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-accent-brown/30 text-accent-brown hover:bg-accent-brown hover:text-silver-mist text-xs px-4 py-2 rounded transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/news">
              <Button 
                size="lg"
                className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-8 py-3 font-body font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
              >
                View All News
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;