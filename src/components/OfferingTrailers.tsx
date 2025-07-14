import { Play } from "lucide-react";
import { Button } from "./ui/button";

const OfferingTrailers = () => {
  const offerings = [
    {
      title: "Oak Institutional Credit Solutions, LLC",
      regulation: "Regulation D 506(c)",
      investorType: "Institutional Investors",
      thumbnail: "/lovable-uploads/28d9de58-4aff-4cbd-913e-1961d0271eb2.png",
    },
    {
      title: "Oak Parallel Bridge Credit Fund",
      regulation: "Regulation D 506(c)",
      investorType: "ERISA Institutional Investors",
      thumbnail: "/lovable-uploads/292125c9-67a2-4ead-b36f-a8ea1534aebc.png",
    },
    {
      title: "Red Oak Capital Fund VII, LLC",
      regulation: "Reg A+, Tier II Bond",
      investorType: "Retail, Non-Accredited Investors",
      thumbnail: "/lovable-uploads/2e03170c-dfef-4894-8917-fb149fd7b232.png",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pearl-white mb-6">
            Watch Our Offering Trailers
          </h2>
          <p className="text-xl text-pearl-white/80 max-w-3xl mx-auto">
            Discover our investment opportunities through these detailed presentations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-pearl-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-pearl-white/20 hover:border-garnet-edge/50 transition-all duration-300 group"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={offering.thumbnail}
                  alt={offering.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-obsidian/30 flex items-center justify-center">
                  <Button
                    size="icon"
                    className="w-16 h-16 rounded-full bg-garnet-edge/80 hover:bg-garnet-edge text-pearl-white border-2 border-pearl-white/30"
                  >
                    <Play className="w-6 h-6 ml-1" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pearl-white mb-3">
                  {offering.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <p className="text-cyan-mist font-medium">
                    {offering.regulation}
                  </p>
                  <p className="text-pearl-white/70 text-sm">
                    {offering.investorType}
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-garnet-edge/50 text-garnet-edge hover:bg-garnet-edge hover:text-pearl-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingTrailers;