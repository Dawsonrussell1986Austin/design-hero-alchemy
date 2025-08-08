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
                    poster="/lovable-uploads/a871f442-5ea6-4eb1-a845-6d39eab1f679.png"
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
              Why Private Credit Real Estate Lending?
            </h2>
            <p className="text-lg text-deep-petrol leading-relaxed max-w-4xl mx-auto font-body">
              In a broad market of investment types where many types have evolving uncertainties, exposure to private credit that is senior secured and backed by income producing commercial real estate assets offers several key advantages:
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
                Restrictive banking regulations requiring increased capital reserves for banks have constrained their ability to provide debt capital, creating a unique opportunity for experienced private credit providers to generate highly attractive returns with lower levels of risk.
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
              <p className="text-deep-petrol leading-relaxed font-body text-sm">
                Deal structure and comprehensive institutional credit underwriting standards mitigate risk and protect against capital impairment. Private credit's lending opportunities are secured by hard commercial real estate assets that carry a significant amount of intrinsic value with downside protection during times of market distress.
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
                Exposure to the commercial real estate asset class with a private credit strategy enhances diversification and risk-efficiency while reducing an investment portfolio's volatility all while delivering a return stream uncorrelated with other investment types.
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
                Private credit strategies are designed to generate stable, consistent cash flows for investors seeking reliable income with upside capture opportunity.
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
                Private credit's historical performance has demonstrated higher yield premiums which can contribute to the optimization of an investment portfolio.
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
                Our strategy is designed to capture latent value in overlooked market niches while prioritizing downside protection, income consistency, and return performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPrivateCredit;