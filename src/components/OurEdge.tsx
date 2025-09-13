const OurEdge = () => {
  return (
    <div className="relative z-10 py-32 min-h-screen flex items-center" style={{
      backgroundImage: 'url(/lovable-uploads/80b3bb45-54bb-47f2-86fc-ef25e3d0eea2.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-obsidian/75"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-display font-medium text-silver-mist mb-16">
            Our Edge
          </h2>
          
          {/* Main content */}
          <div className="space-y-12 text-silver-mist">
            
            {/* Main description */}
            <p className="text-xl lg:text-2xl leading-relaxed font-body">
              Every investment is structured and underwritten using industry best practices. We focus on <span className="text-garnet-edge font-medium">capital preservation</span>, generating <span className="text-garnet-edge font-medium">predictable</span> income, and building long-term <span className="text-garnet-edge font-medium">trust</span>.
            </p>


            {/* Key points grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-silver-mist/10 backdrop-blur-sm border border-silver-mist/20 rounded-lg p-8 hover:bg-silver-mist/15 transition-all duration-300">
                <div className="text-lg font-display font-medium text-garnet-edge mb-4">Proven Experience</div>
                <p className="text-silver-mist/90 font-body">in closed transactions over the past three decades</p>
              </div>
              
              <div className="bg-silver-mist/10 backdrop-blur-sm border border-silver-mist/20 rounded-lg p-8 hover:bg-silver-mist/15 transition-all duration-300">
                <div className="text-lg font-display font-medium text-garnet-edge mb-4">Deep Expertise</div>
                <p className="text-silver-mist/90 font-body">Institutional underwriting coupled with deep market expertise</p>
              </div>
              
              <div className="bg-silver-mist/10 backdrop-blur-sm border border-silver-mist/20 rounded-lg p-8 hover:bg-silver-mist/15 transition-all duration-300">
                <div className="text-lg font-display font-medium text-garnet-edge mb-4">Flexible Solutions</div>
                <p className="text-silver-mist/90 font-body">Flexible capital structures including debt and equity for real estate sponsors</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEdge;