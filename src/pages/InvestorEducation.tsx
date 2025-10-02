import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { BookOpen, Play } from "lucide-react";

// Declare Wistia player custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "media-id"?: string;
          aspect?: string;
        },
        HTMLElement
      >;
    }
  }
}

interface Video {
  id: string;
  title: string;
  description: string;
  mediaId: string;
}

interface VideoCategory {
  category: string;
  videos: Video[];
}

const videoLibrary: VideoCategory[] = [
  {
    category: "Getting Started",
    videos: [
      {
        id: "intro-1",
        title: "Introduction to Our Platform",
        description: "Learn the basics of our productivity platform and how it can transform your workflow.",
        mediaId: "yiyqt2ifnu",
      },
      {
        id: "intro-2",
        title: "Investment Overview",
        description: "Discover the investment opportunity and our growth trajectory in the productivity market.",
        mediaId: "0eykhn0v2g",
      },
    ],
  },
  {
    category: "Market & Growth",
    videos: [
      {
        id: "market-1",
        title: "Market Analysis",
        description: "Deep dive into the $50B productivity software market and our competitive advantage.",
        mediaId: "0eykhn0v2g",
      },
      {
        id: "market-2",
        title: "Growth Metrics",
        description: "Review our 40% month-over-month growth and key performance indicators.",
        mediaId: "0eykhn0v2g",
      },
    ],
  },
  {
    category: "Technology & Product",
    videos: [
      {
        id: "tech-1",
        title: "Platform Technology",
        description: "Explore the robust technology stack powering our scalable solution.",
        mediaId: "0eykhn0v2g",
      },
      {
        id: "tech-2",
        title: "Product Roadmap",
        description: "See what's coming next and how we're innovating in the productivity space.",
        mediaId: "0eykhn0v2g",
      },
    ],
  },
];

const VideoCard = ({ video }: { video: Video }) => {
  useEffect(() => {
    // Load Wistia player script
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = `https://fast.wistia.com/embed/${video.mediaId}.js`;
    script2.async = true;
    script2.type = "module";
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, [video.mediaId]);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative aspect-video bg-obsidian/5">
        <style>{`
          wistia-player[media-id='${video.mediaId}']:not(:defined) {
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${video.mediaId}/swatch');
            display: block;
            filter: blur(5px);
            padding-top: 56.25%;
          }
        `}</style>
        <wistia-player
          media-id={video.mediaId}
          aspect="1.7777777777777777"
          className="w-full h-full"
        />
      </div>
      <div className="p-6 space-y-3">
        <h3 className="font-display text-xl font-medium text-obsidian flex items-center gap-2">
          <Play className="h-5 w-5 text-accent-brown" />
          {video.title}
        </h3>
        <p className="font-body text-deep-petrol leading-relaxed">{video.description}</p>
      </div>
    </div>
  );
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
                Investor Education Library
              </h1>
              <p className="text-xl font-body text-deep-petrol leading-relaxed">
                Explore our comprehensive video library to learn about our platform, market opportunity, and growth strategy.
              </p>
            </div>
          </div>
        </section>

        {/* Video Library */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-7xl space-y-16">
            {videoLibrary.map((category) => (
              <div key={category.category} className="space-y-8">
                <div className="border-b-2 border-accent-brown pb-4">
                  <h2 className="text-3xl font-display font-medium text-obsidian">
                    {category.category}
                  </h2>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  {category.videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              </div>
            ))}
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
