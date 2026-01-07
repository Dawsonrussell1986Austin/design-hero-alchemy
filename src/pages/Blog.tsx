import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "How Oak Finds Opportunity Where Banks Can't",
      excerpt: "In today's commercial real estate market, many investors hear a lot of noise about private credit, distressed assets, and market dislocation. What often gets lost is a simpler truth: some of the most compelling opportunities aren't distressed at all — they're just in transition.",
      date: "January 7, 2026",
      image: "/lovable-uploads/7d64e74a-873e-40ba-9f71-203a1eaa0fb6.png",
      slug: "oak-finds-opportunity"
    },
    {
      title: "Private Credit's Role in the Current Lending Gap Is Expanding — Here's Why",
      excerpt: "Over the past eighteen months, the commercial real estate lending environment has shifted dramatically. Regional and mid-sized banks have pulled back more than $90B in commercial real estate lending since early 2023, creating a noticeable gap between borrower demand and traditional credit supply.",
      date: "December 3, 2025",
      image: "/lovable-uploads/7d64e74a-873e-40ba-9f71-203a1eaa0fb6.png",
      slug: "private-credit-lending-gap"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header with dark background */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Blog" }
        ]}
      />
      
      {/* Cream background for content */}
      <div className="bg-silver-mist">

      {/* Blog Articles Section */}
      <div className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-8 leading-tight">
                Insights & <span className="text-accent-brown">Articles</span>
              </h2>
              <p className="text-lg text-deep-petrol/80 max-w-2xl mx-auto">
                Expert perspectives on commercial real estate lending, investment strategies, and market trends.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-2xl overflow-hidden hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="h-4 w-4 text-accent-brown" />
                      <span className="text-sm text-deep-petrol/70">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-display font-medium text-obsidian mb-4 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-deep-petrol/80 leading-relaxed text-sm font-body font-normal mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    {post.slug ? (
                      <Link to={`/blog/${post.slug}`}>
                        <Button 
                          variant="outline"
                          className="border-accent-brown/30 text-accent-brown hover:bg-accent-brown hover:text-silver-mist text-sm px-6 py-2 rounded-lg transition-all duration-300 group-hover:scale-105"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        variant="outline"
                        className="border-accent-brown/30 text-accent-brown hover:bg-accent-brown hover:text-silver-mist text-sm px-6 py-2 rounded-lg transition-all duration-300 group-hover:scale-105"
                        disabled
                      >
                        Coming Soon
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
              Stay <span className="text-accent-brown">Informed</span>
            </h2>
            
            <div className="bg-background/20 backdrop-blur-xl border border-silver-mist/20 rounded-3xl p-12 mb-16 hover:bg-background/30 transition-all duration-500">
              <p className="text-lg lg:text-xl font-body font-normal text-silver-mist/90 leading-relaxed mb-8">
                Subscribe to receive the latest articles, market insights, and industry developments.
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

export default Blog;