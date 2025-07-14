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
    <section className="relative py-24 bg-pearl-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-obsidian mb-6">
            Watch Our Offering Trailers
          </h2>
          <p className="text-xl text-obsidian/70 max-w-3xl mx-auto">
            Discover our investment opportunities through these detailed presentations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-silver-mist/20"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={offering.thumbnail}
                  alt={offering.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-obsidian/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    className="w-16 h-16 rounded-full bg-garnet-edge hover:bg-garnet-edge/90 text-white shadow-lg"
                  >
                    <Play className="w-6 h-6 ml-1" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-obsidian mb-3 leading-tight">
                  {offering.title}
                </h3>
                <div className="space-y-2 mb-6">
                  <p className="text-garnet-edge font-medium text-sm">
                    {offering.regulation}
                  </p>
                  <p className="text-obsidian/60 text-sm">
                    {offering.investorType}
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-garnet-edge text-garnet-edge hover:bg-garnet-edge hover:text-white transition-colors duration-200"
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