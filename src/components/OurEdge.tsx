const OurEdge = () => {
  return (
    <div className="relative z-10 py-32 min-h-screen flex items-center" style={{
      backgroundImage: 'url(/lovable-uploads/cbf05626-78a4-421b-8e80-a7fd7386e857.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-obsidian/75"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Title */}
          <h2 className="text-6xl lg:text-7xl font-serif font-light text-silver-mist mb-16">
            Our Edge
          </h2>
          
          {/* Main content */}
          <div className="space-y-12 text-silver-mist">
            
            {/* Main description */}
            <p className="text-2xl lg:text-3xl font-light leading-relaxed font-serif">
              Every investment is <span className="text-garnet-edge font-medium">structured and underwritten</span> using industry best practices. We focus on <span className="text-garnet-edge font-medium">capital preservation</span>, generating <span className="text-garnet-edge font-medium">predictable</span> income, and building long-term trust.
            </p>


            {/* Key points grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-silver-mist/10 backdrop-blur-sm border border-silver-mist/20 rounded-lg p-8 hover:bg-silver-mist/15 transition-all duration-300">
                <div className="text-4xl font-serif font-light text-garnet-edge mb-4">$210B+</div>
                <p className="text-lg text-silver-mist/90">in closed transactions over the past three decades</p>
              </div>
              
              <div className="bg-silver-mist/10 backdrop-blur-sm border border-silver-mist/20 rounded-lg p-8 hover:bg-silver-mist/15 transition-all duration-300">
                <div className="text-lg font-serif font-medium text-garnet-edge mb-4">Deep Expertise</div>
                <p className="text-lg text-silver-mist/90">Institutional underwriting coupled with deep market expertise</p>
              </div>
              
              <div className="bg-silver-mist/10 backdrop-blur-sm border border-silver-mist/20 rounded-lg p-8 hover:bg-silver-mist/15 transition-all duration-300">
                <div className="text-lg font-serif font-medium text-garnet-edge mb-4">Flexible Solutions</div>
                <p className="text-lg text-silver-mist/90">Flexible capital structures including debt and equity for real estate sponsors</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEdge;