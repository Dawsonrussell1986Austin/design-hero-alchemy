import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import blogBuildingHero from "@/assets/blog-building-collage.png";

const RecentNewsDraft3 = () => {
  const recentArticles = [
    {
      title: "How Oak Finds Opportunity Where Banks Can't",
      excerpt: "In today's commercial real estate market, many investors hear a lot of noise about private credit, distressed assets, and market dislocation.",
      date: "January 7, 2026",
      image: blogBuildingHero,
      slug: "oak-finds-opportunity",
      isBlog: true
    },
    {
      title: "Private Credit's Role in the Current Lending Gap Is Expanding — Here's Why",
      excerpt: "Over the past eighteen months, the commercial real estate lending environment has shifted dramatically.",
      date: "December 3, 2025",
      image: "/lovable-uploads/7d64e74a-873e-40ba-9f71-203a1eaa0fb6.png",
      slug: "private-credit-lending-gap",
      isBlog: true
    },
    {
      title: "OAK CAPITAL HOLDINGS PROVIDES BRIDGE LOAN FOR PHILADELPHIA MIDRISE",
      excerpt: "Oak Capital Holdings, LLC, has provided a $9.225-million bridge loan for the Ridge Avenue Apartments.",
      date: "May 6, 2025",
      image: "/lovable-uploads/4d884eb1-b32f-41c8-99ea-cd282f2e9ee9.png",
      slug: "philadelphia-midrise",
      isBlog: false
    }
  ];

  return (
    <div className="relative z-10 bg-cream py-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-8">
              Recent News & Updates
            </h2>
            <p className="text-lg text-graphite-fog leading-relaxed max-w-4xl mx-auto font-body">
              Stay informed with our latest transactions and market developments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {recentArticles.map((article, index) => (
              <div key={index} className="bg-silver-mist/60 backdrop-blur-sm border border-graphite-fog/15 rounded-lg overflow-hidden hover:bg-silver-mist/80 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="h-4 w-4 text-gold-accent" />
                    <span className="text-sm text-graphite-fog/70">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-display font-medium text-abyss mb-3 line-clamp-2 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-graphite-fog leading-relaxed font-body text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link to={article.isBlog ? `/blog/${article.slug}` : `/news/${article.slug}`}>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-gold-accent/30 text-gold-accent hover:bg-gold-accent hover:text-abyss text-xs px-4 py-2 rounded transition-all duration-300"
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
                className="bg-gold-accent hover:bg-gold-warm text-abyss px-8 py-3 font-body font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
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

export default RecentNewsDraft3;
