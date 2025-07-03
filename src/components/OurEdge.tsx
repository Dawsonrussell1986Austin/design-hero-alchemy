const OurEdge = () => {
  return (
    <div className="relative z-10 bg-obsidian py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ 
                boxShadow: '0 0 60px 10px hsl(var(--accent-brown) / 0.3), 0 0 100px 20px hsl(var(--accent-brown) / 0.1)' 
              }}>
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
                    Every investment is <span className="text-garnet-edge font-medium">structured and underwritten</span> using industry best practices. We focus on <span className="text-garnet-edge font-medium">capital preservation</span>, generating <span className="text-garnet-edge font-medium">predictable</span> income, and building long-term trust.
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
                        <span className="text-garnet-edge font-medium">$21B+ in closed transactions</span> over the past three decades
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-base">
                        Institutional underwriting <span className="text-garnet-edge font-medium">coupled with deep market expertise</span>
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-garnet-edge rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-base">
                        Flexible capital <span className="text-garnet-edge font-medium">structures including debt and equity</span> for real estate sponsors
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