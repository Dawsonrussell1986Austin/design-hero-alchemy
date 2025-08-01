import { TrendingUp, Shield, BarChart3, DollarSign, Target, MapPin } from "lucide-react";

const WhyPrivateCredit = () => {
  return (
    <div className="relative z-10 bg-silver-mist py-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Large Video Player */}
          <div className="mb-20">
            <div className="w-full">
              <div className="relative rounded-2xl overflow-hidden bg-obsidian/10 backdrop-blur-sm border border-deep-petrol/30 shadow-2xl">
                <div className="aspect-[16/9] bg-gradient-to-br from-obsidian/20 to-deep-petrol/20 relative" style={{ minHeight: '60vh' }}>
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    poster="/lovable-uploads/c171f798-a069-4350-b147-7cc49432b34a.png"
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
                    <div className="w-32 h-32 bg-garnet-edge/90 rounded-full flex items-center justify-center backdrop-blur-sm border border-silver-mist/20 shadow-lg">
                      <div className="w-0 h-0 border-l-[20px] border-l-obsidian border-y-[16px] border-y-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-8">
              Why Private Credit Real Estate Lending
            </h2>
            <p className="text-lg text-deep-petrol leading-relaxed max-w-4xl mx-auto font-body">
              In a market based on evolving uncertainty, exposure to private credit that is senior secured and backed by income producing commercial real estate assets offers several key advantages:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Market Opportunity */}
            <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent-brown/10 rounded-lg flex items-center justify-center mr-3">
                  <TrendingUp className="h-5 w-5 text-accent-brown" />
                </div>
                <h3 className="text-lg font-display font-medium text-obsidian">Market Opportunity</h3>
              </div>
              <p className="text-deep-petrol leading-relaxed font-body text-sm">
                <strong>Restrictive banking regulations</strong>, legislative requirements, increased capital reserve ratios have created a unique opportunity for experienced private credit lenders to generate <strong>highly attractive returns</strong> with <strong>lower levels of risk</strong>.
              </p>
            </div>

            {/* Risk Mitigation */}
            <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent-brown/10 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="h-5 w-5 text-accent-brown" />
                </div>
                <h3 className="text-lg font-display font-medium text-obsidian">Risk Mitigation</h3>
              </div>
              <p className="text-deep-petrol leading-relaxed font-body text-sm mb-4">
                <strong>Deal structure</strong> & comprehensive institutional credit underwriting mitigates risk and protects against the <strong>impairment of capital</strong>.
              </p>
              <p className="text-deep-petrol leading-relaxed font-body text-sm">
                The lending opportunities are secured by <strong>hard commercial real estate assets</strong> that carry a significant amount of intrinsic value with <strong>down-side protection</strong> during times of market distress.
              </p>
            </div>

            {/* Diversification */}
            <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent-brown/10 rounded-lg flex items-center justify-center mr-3">
                  <BarChart3 className="h-5 w-5 text-accent-brown" />
                </div>
                <h3 className="text-lg font-display font-medium text-obsidian">Diversification</h3>
              </div>
              <p className="text-deep-petrol leading-relaxed font-body text-sm">
                Exposure to the asset class and strategy can enhance the <strong>diversification and risk-efficiency</strong> while reducing the volatility within a portfolio through the delivery of an <strong>uncorrelated return stream</strong>.
              </p>
            </div>

            {/* Income Oriented */}
            <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent-brown/10 rounded-lg flex items-center justify-center mr-3">
                  <DollarSign className="h-5 w-5 text-accent-brown" />
                </div>
                <h3 className="text-lg font-display font-medium text-obsidian">Income Oriented</h3>
              </div>
              <p className="text-deep-petrol leading-relaxed font-body text-sm">
                The strategy is designed to generate <strong>stable, consistent cash flows</strong> for investors seeking <strong>reliable income</strong> with up-side capture.
              </p>
            </div>

            {/* Performance */}
            <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent-brown/10 rounded-lg flex items-center justify-center mr-3">
                  <Target className="h-5 w-5 text-accent-brown" />
                </div>
                <h3 className="text-lg font-display font-medium text-obsidian">Performance</h3>
              </div>
              <p className="text-deep-petrol leading-relaxed font-body text-sm">
                History and performance points to a <strong>higher yield premium</strong> through exposure to private credit CRE, which can contribute to the <strong>optimization of a portfolio</strong>.
              </p>
            </div>

            {/* Our Strategy */}
            <div className="bg-background/60 backdrop-blur-sm border border-deep-petrol/20 rounded-lg p-8 hover:bg-background/80 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent-brown/10 rounded-lg flex items-center justify-center mr-3">
                  <MapPin className="h-5 w-5 text-accent-brown" />
                </div>
                <h3 className="text-lg font-display font-medium text-obsidian">Our Strategy</h3>
              </div>
              <p className="text-deep-petrol leading-relaxed font-body text-sm">
                Our strategy is designed to unlock value in <strong>underserved niches</strong> while prioritizing <strong>downside protection</strong>, income consistency, and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPrivateCredit;