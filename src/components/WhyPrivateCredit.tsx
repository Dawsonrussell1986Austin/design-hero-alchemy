const WhyPrivateCredit = () => {
  return (
    <div className="relative z-10 bg-silver-mist py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Large Video Player */}
          <div className="mb-20">
            <div className="w-full">
              <div className="relative rounded-2xl overflow-hidden bg-obsidian/10 backdrop-blur-sm border border-deep-petrol/30 shadow-2xl">
                <div className="aspect-[16/9] bg-gradient-to-br from-obsidian/20 to-deep-petrol/20 relative" style={{ minHeight: '60vh' }}>
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    poster="/lovable-uploads/40f41be8-accc-4a72-a71a-e72c8e228281.png"
                    style={{
                      filter: 'contrast(1.1) brightness(0.95)'
                    }}
                  >
                    <source src="#" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Custom overlay for branding */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Play button overlay when paused */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-24 h-24 bg-garnet-edge/90 rounded-full flex items-center justify-center backdrop-blur-sm border border-silver-mist/20 shadow-lg">
                      <div className="w-0 h-0 border-l-[16px] border-l-obsidian border-y-[12px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-obsidian mb-8">
              Why Private Credit Real Estate Lending
            </h2>
            <p className="text-xl text-deep-petrol leading-relaxed max-w-4xl mx-auto font-sans">
              In a market based on evolving uncertainty, exposure to private credit that is senior secured and backed by income producing commercial real estate assets offers several key advantages:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Market Opportunity */}
            <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
              <h3 className="text-xl font-serif font-medium text-obsidian mb-4">Market Opportunity</h3>
              <p className="text-deep-petrol leading-relaxed font-sans text-sm">
                Restrictive banking regulations, legislative requirements, increased capital reserve ratios have created a unique opportunity for experienced private credit lenders to generate highly attractive returns with lower levels of risk.
              </p>
            </div>

            {/* Risk Mitigation */}
            <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
              <h3 className="text-xl font-serif font-medium text-obsidian mb-4">Risk Mitigation</h3>
              <p className="text-deep-petrol leading-relaxed font-sans text-sm mb-4">
                Deal structure & comprehensive institutional credit underwriting mitigates risk and protects against the impairment of capital.
              </p>
              <p className="text-deep-petrol leading-relaxed font-sans text-sm">
                The lending opportunities are secured by hard commercial real estate assets that carry a significant amount of intrinsic value with down-side protection during times of market distress.
              </p>
            </div>

            {/* Diversification */}
            <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
              <h3 className="text-xl font-serif font-medium text-obsidian mb-4">Diversification</h3>
              <p className="text-deep-petrol leading-relaxed font-sans text-sm">
                Exposure to the asset class and strategy can enhance the diversification and risk-efficiency while reducing the volatility within a portfolio through the delivery of an uncorrelated return stream.
              </p>
            </div>

            {/* Income Oriented */}
            <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
              <h3 className="text-xl font-serif font-medium text-obsidian mb-4">Income Oriented</h3>
              <p className="text-deep-petrol leading-relaxed font-sans text-sm">
                The strategy is designed to generate stable, consistent cash flows for investors seeking reliable income with up-side capture.
              </p>
            </div>

            {/* Performance */}
            <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
              <h3 className="text-xl font-serif font-medium text-obsidian mb-4">Performance</h3>
              <p className="text-deep-petrol leading-relaxed font-sans text-sm">
                History and performance points to a higher yield premium through exposure to private credit CRE, which can contribute to the optimization of a portfolio.
              </p>
            </div>

            {/* Our Strategy */}
            <div className="bg-gradient-to-br from-accent-brown/10 to-garnet-edge/10 backdrop-blur-sm border border-accent-brown/30 rounded-lg p-8 hover:from-accent-brown/15 hover:to-garnet-edge/15 transition-all duration-300">
              <h3 className="text-xl font-serif font-medium text-obsidian mb-4">Our Strategy</h3>
              <p className="text-deep-petrol leading-relaxed font-sans text-sm">
                Our strategy is designed to unlock value in underserved niches while prioritizing downside protection, income consistency, and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPrivateCredit;