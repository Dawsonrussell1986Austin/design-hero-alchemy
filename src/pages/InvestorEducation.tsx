import { useEffect } from "react";

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
import { BookOpen, Play } from "lucide-react";

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
        mediaId: "0eykhn0v2g",
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
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-video bg-muted">
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
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
          <Play className="h-4 w-4 text-primary" />
          {video.title}
        </h3>
        <p className="text-sm text-muted-foreground">{video.description}</p>
      </div>
    </div>
  );
};

const InvestorEducation = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Investor Education Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive video library to learn about our platform,
            market opportunity, and growth strategy.
          </p>
        </div>
      </section>

      {/* Video Library */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl space-y-16">
          {videoLibrary.map((category) => (
            <div key={category.category} className="space-y-6">
              <div className="border-b border-border pb-3">
                <h2 className="text-2xl font-bold text-foreground">
                  {category.category}
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {category.videos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to Invest?
          </h2>
          <p className="text-lg text-muted-foreground">
            After reviewing our education materials, take the next step and get
            our full investor deck.
          </p>
          <a
            href="/investors"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Investment Details
          </a>
        </div>
      </section>
    </div>
  );
};

export default InvestorEducation;
