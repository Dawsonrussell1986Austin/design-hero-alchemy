import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Play, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { videoCategories, Video } from "@/data/videoCategories";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': {
        'media-id'?: string;
        aspect?: string;
        className?: string;
      };
    }
  }
}

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
    <div className="bg-cream border border-obsidian/20 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
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
          <Play className="h-5 w-5 text-gold-accent" />
          {video.title}
        </h3>
        <p className="font-body text-graphite-fog leading-relaxed">{video.description}</p>
      </div>
    </div>
  );
};

const VideoCategory = () => {
  const { categoryId } = useParams();
  const category = videoCategories.find(cat => cat.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-silver-mist flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-display text-obsidian mb-4">Category Not Found</h1>
          <Link to="/investor-education">
            <Button className="bg-gold-accent hover:bg-gold-accent/90">
              Back to Video Library
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Resources", href: "/investor-education" },
          { label: category.question }
        ]}
      />

      {/* Main Content */}
      <div className="bg-silver-mist min-h-screen">
        {/* Header Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <Link to="/investor-education">
              <Button 
                variant="outline" 
                className="mb-8 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-cream"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Categories
              </Button>
            </Link>
            
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-display font-medium text-obsidian">
                {category.question}
              </h1>
              <p className="text-xl font-body text-graphite-fog leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {category.videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-abyss via-obsidian to-graphite-fog">
          <div className="container mx-auto max-w-4xl text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-display font-medium text-silver-mist">
              Ready to Learn More?
            </h2>
            <p className="text-xl font-body text-silver-mist/90 leading-relaxed">
              Explore more video categories or get in touch with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/investor-education">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-silver-mist text-silver-mist hover:bg-silver-mist/10 font-body font-medium px-8 py-6 text-lg rounded-md"
                >
                  Explore More Videos
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-gold-accent hover:bg-gold-accent/90 text-cream font-body font-medium px-8 py-6 text-lg rounded-md"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VideoCategory;
