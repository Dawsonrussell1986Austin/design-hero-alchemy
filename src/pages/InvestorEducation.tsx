import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { BookOpen, Play, ArrowRight } from "lucide-react";
import { videoCategories } from "@/data/videoCategories";
import videoThumbWhoIsOak from "@/assets/video-thumb-who-is-oak.png";
import videoThumbStrategy from "@/assets/video-thumb-strategy.png";
import videoThumbCredit from "@/assets/video-thumb-credit.png";
import videoThumbRisk from "@/assets/video-thumb-risk.png";

const thumbnailMap: Record<string, string> = {
  "/src/assets/video-thumb-who-is-oak.png": videoThumbWhoIsOak,
  "/src/assets/video-thumb-strategy.png": videoThumbStrategy,
  "/src/assets/video-thumb-credit.png": videoThumbCredit,
  "/src/assets/video-thumb-risk.png": videoThumbRisk,
};

const InvestorEducation = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
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
              <div className="mx-auto w-20 h-20 bg-gold-accent/10 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="h-10 w-10 text-gold-accent" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-display font-medium text-abyss">
                Video Library
              </h1>
              <p className="text-xl font-body text-graphite-fog leading-relaxed">
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
                  <div className="bg-abyss rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 border-gold-accent/20 hover:border-gold-accent">
                    {/* Thumbnail Image with Overlay */}
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={thumbnailMap[category.thumbnail]} 
                        alt={category.question}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-abyss via-obsidian/60 to-transparent" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-cream/90 rounded-full flex items-center justify-center group-hover:bg-gold-accent group-hover:scale-110 transition-all duration-300 shadow-xl">
                          <Play className="h-10 w-10 text-abyss group-hover:text-cream ml-1" fill="currentColor" />
                        </div>
                      </div>
                      
                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl lg:text-3xl font-display font-medium text-cream group-hover:text-gold-accent transition-colors leading-tight">
                          {category.question}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-6 space-y-4 bg-abyss">
                      <p className="font-body text-silver-mist/90 leading-relaxed">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-lg font-body text-gold-accent font-semibold">
                          {category.videos.length} {category.videos.length === 1 ? 'Video' : 'Videos'}
                        </span>
                        <ArrowRight className="h-6 w-6 text-gold-accent group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
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
                className="bg-gold-accent hover:bg-gold-accent/90 text-cream font-body font-medium px-8 py-6 text-lg rounded-md transition-all duration-300 hover:shadow-lg"
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
