const OurEdge = () => {
  return (
    <div className="relative z-10">
      {/* The Oak Standard Section */}
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
        
        {/* Right side - Content */}
        <div className="bg-abyss flex items-center py-12 lg:py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl">
              
              {/* Section Label */}
              <p className="text-xs font-body text-gold-accent/80 uppercase tracking-[0.2em] mb-4">WHAT WE DO</p>
              
              {/* Title */}
              <h2 className="text-3xl lg:text-4xl font-display font-medium text-silver-mist mb-8">
                You deserve to know exactly what you own.
              </h2>
              
              {/* Main description */}
              <p className="text-lg lg:text-xl leading-relaxed font-body text-silver-mist/90 mb-6">
                Every Oak loan is secured by a specific, identifiable property. Senior-secured. First-lien. 55–75% stabilized LTV. Floating rate indexed to SOFR. 12–36 month terms. No blind pools. No hidden leverage.
              </p>

              <p className="text-base leading-relaxed font-body text-silver-mist/70 mb-12">
                This is a structural description of every position in the portfolio — not a philosophy.
              </p>

              {/* Key points */}
              <div className="space-y-8">
                <div className="border-l-4 border-gold-accent pl-6">
                  <div className="text-lg font-display font-medium text-gold-accent mb-2">Senior-secured. First-lien. Always.</div>
                  <p className="text-silver-mist/90 font-body text-sm leading-relaxed">Every Oak position sits at the top of the capital stack. At 55–75% stabilized LTV, the underlying property must lose 25–45% of its value before investor principal is at risk. Across 33 full-cycle Oak loans to date, we have incurred no principal losses.<sup className="text-silver-mist/60">1</sup></p>
                </div>
                
                <div className="border-l-4 border-gold-accent pl-6">
                  <div className="text-lg font-display font-medium text-gold-accent mb-2">Uncorrelated to public equity.</div>
                  <p className="text-silver-mist/90 font-body text-sm leading-relaxed">SOFR-indexed floating rates reprice automatically. Short duration (17-month average at Oak) means continuous maturity and repricing. CRE collateral values are driven by property-level income, not index flows.</p>
                </div>
                
                <div className="border-l-4 border-gold-accent pl-6">
                  <div className="text-lg font-display font-medium text-gold-accent mb-2">Transparent before you commit.</div>
                  <p className="text-silver-mist/90 font-body text-sm leading-relaxed">You know the address. You know the property. You know the LTV, the rate, the term, and the exit plan before a dollar is committed. This is how Oak operates by design, documented in the subscription materials for every investment.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Institutional Alignment Section */}
      <div className="bg-silver-mist py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-body text-gold-accent/80 uppercase tracking-[0.2em] mb-4 text-center">WHO INVESTS ALONGSIDE YOU</p>
            
            <h2 className="text-3xl lg:text-4xl font-display font-medium text-abyss mb-8 text-center leading-tight max-w-4xl mx-auto">
              Your capital, placed in the same positions as insurance company, foundation, and endowment capital.
            </h2>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg font-body text-abyss/80 leading-relaxed mb-6">
                Oak originates, underwrites, and services commercial real estate loans for institutional counterparties that operate to some of the most demanding capital standards in the market. Oak is currently underwriting separately managed accounts for a global insurer with demonstrated annual deployment demand of $250M+. Every loan Oak originates is built to CM1/CM2 NAIC insurance designation standards,<sup>3</sup> whether the loan goes on an insurance balance sheet or not.
              </p>
              <p className="text-lg font-body text-abyss/80 leading-relaxed">
                RIA and family office clients invest in the same senior-secured, first-lien positions, on the same documentation, at the same standards.
              </p>
            </div>

            {/* Proof Points */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-cream/60 border border-abyss/10 rounded-lg">
                <div className="text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2">$460M</div>
                <div className="text-xs font-body text-abyss/70 uppercase tracking-wide">Oak AUM</div>
              </div>
              <div className="text-center p-6 bg-cream/60 border border-abyss/10 rounded-lg">
                <div className="text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2">$200M</div>
                <div className="text-xs font-body text-abyss/70 uppercase tracking-wide">Oak Cumulative Originations</div>
              </div>
              <div className="text-center p-6 bg-cream/60 border border-abyss/10 rounded-lg">
                <div className="text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2">8</div>
                <div className="text-xs font-body text-abyss/70 uppercase tracking-wide">Market Cycles Navigated by Team<sup>2</sup></div>
              </div>
              <div className="text-center p-6 bg-cream/60 border border-abyss/10 rounded-lg">
                <div className="text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2">$250M+</div>
                <div className="text-xs font-body text-abyss/70 uppercase tracking-wide">Active Insurance SMA Annual Demand</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Track Record Section */}
      <div className="bg-abyss py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-body text-gold-accent/80 uppercase tracking-[0.2em] mb-4 text-center">OAK, ON THE RECORD</p>
            
            <h2 className="text-3xl lg:text-4xl font-display font-medium text-silver-mist mb-8 text-center">
              33 full-cycle loans. ~$200 million deployed. 19% net IRR.<sup className="text-silver-mist/60">1</sup>
            </h2>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg font-body text-silver-mist/80 leading-relaxed mb-6">
                Every manager in private credit claims a track record. Oak's is narrow, specific, and on the record: 33 full-cycle loans, completed at Oak, through COVID, 525 basis points of Federal Reserve rate hikes,<sup>4</sup> and the sustained rate environment that has followed.
              </p>
              <p className="text-lg font-body text-silver-mist/80 leading-relaxed">
                Across those 33 loans: 19% net IRR, 21.9% gross IRR, 1.22x net MOIC, 17-month average duration. On the loans that required workout — because every lender that underwrites at scale will eventually encounter one — Oak has recovered 100% of principal to date at an average realized return of 12.3%.<sup>1</sup>
              </p>
            </div>

            {/* Timeline Strip */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                {[
                  { year: "'90", event: "S&L Crisis" },
                  { year: "'00", event: "Dot-Com Collapse" },
                  { year: "'08", event: "Global Financial Crisis" },
                  { year: "'20", event: "COVID-19 Shock" },
                  { year: "'22", event: "Rate Shock & Liquidity Crisis" },
                  { year: "Now", event: "The environment the team was built for." },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-xl font-display font-medium mb-1 ${item.year === "Now" ? "text-gold-accent" : "text-silver-mist"}`}>{item.year}</div>
                    <div className="text-xs font-body text-silver-mist/60 max-w-[120px]">{item.event}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-silver-mist/50 text-center mt-6">
                Timeline reflects cycles navigated by current Oak principals during their prior careers. Oak Real Estate Partners was founded in [year].
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/investing">
                <button className="bg-gold-accent hover:bg-gold-accent/90 text-abyss px-8 py-3 text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm hover:scale-105">
                  See How We Invest
                </button>
              </a>
              <a href="/contact">
                <button className="border-2 border-silver-mist bg-silver-mist/10 text-cream hover:bg-silver-mist hover:text-abyss px-8 py-3 text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm">
                  Talk to Our Team
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEdge;
