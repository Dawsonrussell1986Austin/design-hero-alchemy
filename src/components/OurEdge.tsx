const OurEdge = () => {
  return (
    <div className="relative z-10 bg-obsidian py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/d2c5b2a3-700b-49d7-a9b6-4f8b05fd192b.png"
                  alt="Modern conference room"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Right column - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-serif font-light text-silver-mist mb-8">
                  Our Edge
                </h2>
                
                <div className="space-y-6 text-silver-mist/90 leading-relaxed">
                  <p className="text-lg font-sans">
                    Every investment is <span className="text-garnet-edge font-medium">structured and underwritten</span> <span className="text-garnet-edge font-medium">engineered to satisfy</span> institutional expectations 
                    using <span className="text-garnet-edge font-medium">through industry leading</span> best in-class practices. We focus on what matters: <span className="text-garnet-edge font-medium">protecting capital preservation</span>, generating <span className="text-garnet-edge font-medium">predictable</span> steady income, and building long-term trust. It's a 
                    commitment we embrace in all facets of our business.
                  </p>

                  {/* Highlighted quote */}
                  <div className="bg-accent-brown/20 border-l-4 border-accent-brown p-6 rounded-r-lg">
                    <p className="text-lg font-serif italic text-silver-mist">
                      uphold in every deal, every report, and every relationship.
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-base">
                        Institutional underwriting <span className="text-garnet-edge font-medium">coupled with deep market expertise allows for agility when facing complex lending opportunities.</span> <span className="line-through text-silver-mist/50">meets experienced facility</span>
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-base">
                        Robust internal controls and governance frameworks <span className="text-garnet-edge font-medium">designed to meet</span> institutional compliance standards.
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-base">
                        <span className="text-garnet-edge font-medium">$5B+ in bridge loans closed, serviced, and exited structured</span> over the last <span className="text-garnet-edge font-medium">three</span> decades
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-base">
                        <span className="line-through text-silver-mist/50">$18B+ in closed transactions (throughout, I have personally been involved in well over 200+ in transactions)</span> In total <span className="bg-accent-brown/30 px-2 py-1 rounded">over $21B in closed transactions</span> lending transactions closed, serviced and exited over the past three decades.
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-base">
                        FHA/HUD capabilities for long-term stability with predefined exits
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-base">
                        Flexible capital <span className="text-garnet-edge font-medium">structures including debt and equity</span> <span className="text-garnet-edge font-medium">is</span> designed to provide solutions for real estate <span className="text-garnet-edge font-medium">sponsors. borrowers and</span> <span className="line-through text-silver-mist/50">institutional investors</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEdge;