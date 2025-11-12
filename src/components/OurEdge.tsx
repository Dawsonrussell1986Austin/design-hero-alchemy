const OurEdge = () => {
  return (
    <div className="relative z-10 min-h-screen">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left side - Image */}
        <div 
          className="relative min-h-[400px] lg:min-h-screen"
          style={{
            backgroundImage: 'url(/edge-background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Right side - Content with brand color background */}
        <div className="bg-obsidian flex items-center py-12 lg:py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl">
              
              {/* Title */}
              <h2 className="text-4xl lg:text-5xl font-display font-medium text-silver-mist mb-12">
                Our Edge
              </h2>
              
              {/* Main description */}
              <p className="text-xl lg:text-2xl leading-relaxed font-body text-silver-mist mb-16">
                Every investment is structured and underwritten using industry best practices. We focus on <span className="text-garnet-edge font-medium">capital preservation</span>, generating <span className="text-garnet-edge font-medium">predictable</span> income, and building long-term <span className="text-garnet-edge font-medium">trust</span>.
              </p>

              {/* Key points */}
              <div className="space-y-8">
                <div className="border-l-4 border-garnet-edge pl-6">
                  <div className="text-lg font-display font-medium text-garnet-edge mb-2">Proven Experience</div>
                  <p className="text-silver-mist/90 font-body">$18B+ in closed transactions over the past three decades</p>
                </div>
                
                <div className="border-l-4 border-garnet-edge pl-6">
                  <div className="text-lg font-display font-medium text-garnet-edge mb-2">Deep Expertise</div>
                  <p className="text-silver-mist/90 font-body">Institutional underwriting coupled with deep market expertise</p>
                </div>
                
                <div className="border-l-4 border-garnet-edge pl-6">
                  <div className="text-lg font-display font-medium text-garnet-edge mb-2">Flexible Solutions</div>
                  <p className="text-silver-mist/90 font-body">Flexible capital structures including debt and equity for real estate sponsors</p>
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