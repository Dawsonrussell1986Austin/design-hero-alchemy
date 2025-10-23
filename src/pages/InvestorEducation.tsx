import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { BookOpen, Play, ArrowRight } from "lucide-react";
import { videoCategories } from "@/data/videoCategories";
import videoThumbWhoIsOak from "@/assets/video-thumb-who-is-oak.jpg";
import videoThumbStrategy from "@/assets/video-thumb-strategy.jpg";
import videoThumbCredit from "@/assets/video-thumb-credit.jpg";
import videoThumbRisk from "@/assets/video-thumb-risk.jpg";

const thumbnailMap: Record<string, string> = {
  "/src/assets/video-thumb-who-is-oak.jpg": videoThumbWhoIsOak,
  "/src/assets/video-thumb-strategy.jpg": videoThumbStrategy,
  "/src/assets/video-thumb-credit.jpg": videoThumbCredit,
  "/src/assets/video-thumb-risk.jpg": videoThumbRisk,
};

const InvestorEducation = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Investors", href: "/investors" },
          { label: "Education Library" }
        ]}
        quickLinks={[
          { label: "Get Investor Deck", href: "/investors" }
        ]}
      />

      {/* Main Content - Cream Background */}
      <div className="bg-silver-mist">
        {/* Header Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <div className="mx-auto w-20 h-20 bg-accent-brown/10 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="h-10 w-10 text-accent-brown" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-display font-medium text-obsidian">
                Video Library
              </h1>
              <p className="text-xl font-body text-deep-petrol leading-relaxed">
                Explore our comprehensive video library. Select a topic below to watch videos and learn more.
              </p>
            </div>
          </div>
        </section>

        {/* Category Tiles */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {videoCategories.map((category) => (
                <Link 
                  key={category.id} 
                  to={`/videos/${category.id}`}
                  className="group"
                >
                  <div className="bg-white border-2 border-obsidian/20 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-accent-brown transition-all duration-300 h-full">
                    {/* Thumbnail Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={thumbnailMap[category.thumbnail]} 
                        alt={category.question}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/10 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-accent-brown group-hover:scale-110 transition-all duration-300">
                          <Play className="h-8 w-8 text-obsidian group-hover:text-white ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-8 space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-2xl lg:text-3xl font-display font-medium text-obsidian group-hover:text-accent-brown transition-colors">
                          {category.question}
                        </h3>
                        <ArrowRight className="h-6 w-6 text-accent-brown opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                      </div>
                      
                      <p className="font-body text-deep-petrol leading-relaxed">
                        {category.description}
                      </p>
                      
                      <div className="pt-4">
                        <span className="text-sm font-body text-accent-brown font-medium">
                          {category.videos.length} {category.videos.length === 1 ? 'Video' : 'Videos'}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
          <div className="container mx-auto max-w-4xl text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-display font-medium text-silver-mist">
              Ready to Invest?
            </h2>
            <p className="text-xl font-body text-silver-mist/90 leading-relaxed">
              After reviewing our education materials, take the next step and get our full investor deck.
            </p>
            <a href="/investors">
              <Button 
                size="lg"
                className="bg-accent-brown hover:bg-accent-brown/90 text-white font-body font-medium px-8 py-6 text-lg rounded-md transition-all duration-300 hover:shadow-lg"
              >
                Get Investment Details
              </Button>
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default InvestorEducation;
