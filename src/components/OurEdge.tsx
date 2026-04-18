import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { trackCTAClick } from "@/lib/gtm";

const OurEdge = () => {
  return (
    <div className="relative z-10">
      {/* What We Do Section */}
      <div 
        className="relative"
        style={{
          backgroundImage: 'url(/edge-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay - reduced for more photo visibility */}
        <div className="absolute inset-0 bg-abyss/50" />

        {/* Ghost typography */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-end hidden md:flex">
          <span className="font-display font-medium text-cream/[0.04] text-[20rem] md:text-[28rem] lg:text-[40rem] leading-none -mr-10 md:-mr-20 lg:-mr-32 select-none">
            OAK
          </span>
        </div>

        {/* Content on top */}
        <div className="relative z-10 py-16 md:py-28 lg:py-40">
          <div className="container mx-auto px-5 md:px-8 lg:px-16 max-w-7xl">
            
            {/* Two-column layout */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              
              {/* Left Column - Headline & Description */}
              <div>
                {/* Section Label */}
                <p className="text-xs font-body text-gold-accent/80 uppercase tracking-[0.25em] mb-8">WHAT WE DO</p>
                
                {/* Title - editorial style matching hero */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-normal leading-[1.1] tracking-tight mb-8 md:mb-10">
                  <span className="text-cream">You deserve to</span>
                  <br />
                  <span className="text-cream">know exactly</span>
                  <br />
                  <span className="text-gold-accent italic">what you own.</span>
                </h2>
                
                {/* Main description */}
                <p className="text-base md:text-lg lg:text-xl leading-relaxed font-body text-silver-mist/80 mb-5">
                  Every Oak loan is secured by a specific, identifiable property. Senior-secured. First-lien. 55–75% stabilized LTV. Floating rate indexed to SOFR. 12–36 month terms. Every Dollar has an Address. No hidden leverage.
                </p>

                <p className="text-base leading-relaxed font-body text-silver-mist/50 mb-10">
                  This is a structural description of every position in the portfolio — not a philosophy.
                </p>

                {/* CTA */}
                <a href="/transactions" onClick={() => trackCTAClick('See Our Transactions', '/transactions', 'what_we_do')}>
                  <Button 
                    size="lg" 
                    className="bg-gold-accent hover:bg-gold-accent/90 text-abyss px-8 py-3.5 text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm hover:scale-105 hover:shadow-lg hover:shadow-gold-accent/20"
                  >
                    See Our Transactions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
              
              {/* Right Column - Key Points as Cards */}
              <div className="flex flex-col gap-6 lg:pt-16">
                <div className="bg-abyss/50 backdrop-blur-md border-t-2 border-gold-accent/40 border-l border-r border-b border-gold-accent/10 rounded-lg p-8 transition-all duration-300 hover:bg-abyss/60 hover:border-gold-accent/30 hover:shadow-lg hover:shadow-gold-accent/5">
                  <div className="text-xl font-display font-medium text-gold-accent mb-4">Senior-secured. First-lien. Always.</div>
                  <p className="text-silver-mist/80 font-body text-sm leading-[1.8]">Every Oak position sits at the top of the capital stack. At 55–75% stabilized LTV, the underlying property must lose 25–45% of its value before investor principal is at risk. Across 33 full-cycle Oak loans to date, we have incurred no principal losses.<sup className="text-silver-mist/50">1</sup></p>
                </div>
                
                <div className="bg-abyss/50 backdrop-blur-md border-t-2 border-gold-accent/40 border-l border-r border-b border-gold-accent/10 rounded-lg p-5 md:p-8 transition-all duration-300 hover:bg-abyss/60 hover:border-gold-accent/30 hover:shadow-lg hover:shadow-gold-accent/5">
                  <div className="text-xl font-display font-medium text-gold-accent mb-4">Uncorrelated to public equity.</div>
                  <p className="text-silver-mist/80 font-body text-sm leading-[1.8]">SOFR-indexed floating rates reprice automatically. Short duration (17-month average at Oak) means continuous maturity and repricing. CRE collateral values are driven by property-level income, not index flows.</p>
                </div>
                
                <div className="bg-abyss/50 backdrop-blur-md border-t-2 border-gold-accent/40 border-l border-r border-b border-gold-accent/10 rounded-lg p-5 md:p-8 transition-all duration-300 hover:bg-abyss/60 hover:border-gold-accent/30 hover:shadow-lg hover:shadow-gold-accent/5">
                  <div className="text-xl font-display font-medium text-gold-accent mb-4">Transparent before you commit.</div>
                  <p className="text-silver-mist/80 font-body text-sm leading-[1.8]">You know the address. You know the property. You know the LTV, the rate, the term, and the exit plan before a dollar is committed. This is how Oak operates by design, documented in the subscription materials for every investment.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Institutional Alignment Section */}
      <div className="relative bg-silver-mist py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Ghost typography */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:flex items-center justify-start">
          <span className="font-display font-medium italic text-abyss/[0.04] text-[16rem] md:text-[24rem] lg:text-[32rem] leading-none -ml-8 md:-ml-16 lg:-ml-24 select-none">
            $460M
          </span>
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-body text-gold-accent/80 uppercase tracking-[0.25em] mb-6 text-center">WHO INVESTS ALONGSIDE YOU</p>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-medium text-abyss mb-8 md:mb-10 text-center leading-tight max-w-4xl mx-auto">
              Your capital is placed in the same position or within our managed funds using the same underwriting scrutiny as our Insurance Company, Foundation, and Endowment Capital.
            </h2>
            
            <div className="max-w-4xl mx-auto mb-10 md:mb-16">
              <p className="text-base md:text-lg font-body text-abyss/80 leading-relaxed mb-6">
                Oak originates, underwrites, and services commercial real estate loans for institutional counterparties that operate to some of the most demanding capital standards in the market. Oak is currently underwriting separately managed accounts for a global insurer with demonstrated annual deployment demand of $250M+. Every loan Oak originates is built to CM1/CM2 NAIC insurance designation standards,<sup>3</sup> whether the loan goes on an insurance balance sheet or not.
              </p>
              <p className="text-base md:text-lg font-body text-abyss/80 leading-relaxed">
                RIA and family office clients invest in the same senior-secured, first-lien positions, on the same documentation, at the same standards.
              </p>
            </div>

            {/* Proof Points */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              <div className="text-center p-5 md:p-8 bg-cream/60 border border-abyss/10 rounded-lg">
                <div className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2 md:mb-3">$460M</div>
                <div className="text-[10px] md:text-xs font-body text-abyss/70 uppercase tracking-wider">Oak AUM</div>
              </div>
              <div className="text-center p-5 md:p-8 bg-cream/60 border border-abyss/10 rounded-lg">
                <div className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2 md:mb-3">$200M</div>
                <div className="text-[10px] md:text-xs font-body text-abyss/70 uppercase tracking-wider">Oak Cumulative Originations</div>
              </div>
              <div className="text-center p-5 md:p-8 bg-cream/60 border border-abyss/10 rounded-lg">
                <div className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2 md:mb-3">8</div>
                <div className="text-[10px] md:text-xs font-body text-abyss/70 uppercase tracking-wider">Market Cycles Navigated by Team<sup>2</sup></div>
              </div>
              <div className="text-center p-5 md:p-8 bg-cream/60 border border-abyss/10 rounded-lg">
                <div className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2 md:mb-3">$250M+</div>
                <div className="text-[10px] md:text-xs font-body text-abyss/70 uppercase tracking-wider">Active Insurance SMA Annual Demand</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Track Record Section */}
      <div className="relative bg-abyss py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Ghost typography */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:flex items-center justify-end">
          <span className="font-display font-medium text-cream/[0.04] text-[18rem] md:text-[28rem] lg:text-[42rem] leading-none -mr-8 md:-mr-12 lg:-mr-20 select-none">
            33
          </span>
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold-accent/40" />
              <p className="text-xs font-body text-gold-accent uppercase tracking-[0.3em]">Oak, On The Record</p>
              <div className="h-px w-12 bg-gold-accent/40" />
            </div>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-display font-normal text-cream mb-10 md:mb-16 text-center leading-[1.15] tracking-tight max-w-4xl mx-auto">
              A track record that is <span className="italic text-gold-accent">narrow, specific,</span> and on the record.
            </h2>

            {/* Hero Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gold-accent/15 border border-gold-accent/15 mb-12 md:mb-20 rounded-sm overflow-hidden">
              {[
                { value: "33", label: "Full-Cycle Loans", note: "Completed at Oak" },
                { value: "$200M", label: "Capital Deployed", note: "Cumulative originations" },
                { value: "19%", label: "Net IRR", note: "Across full-cycle loans", sup: "1" },
                { value: "100%", label: "Principal Recovered", note: "On loans requiring workout", sup: "1" },
              ].map((stat, i) => (
                <div key={i} className="bg-abyss p-5 md:p-8 lg:p-10 text-center hover:bg-abyss/60 transition-colors duration-300">
                  <div className="text-3xl md:text-4xl lg:text-6xl font-display font-medium text-gold-accent mb-2 md:mb-3 leading-none">
                    {stat.value}{stat.sup && <sup className="text-xs md:text-base text-gold-accent/50">{stat.sup}</sup>}
                  </div>
                  <div className="text-[10px] md:text-sm font-body text-cream uppercase tracking-wider mb-1 md:mb-2">{stat.label}</div>
                  <div className="text-[10px] md:text-xs font-body text-silver-mist/50 hidden md:block">{stat.note}</div>
                </div>
              ))}
            </div>

            {/* Supporting Narrative */}
            <div className="max-w-3xl mx-auto mb-12 md:mb-20 text-center">
              <p className="text-base lg:text-lg font-body text-silver-mist/70 leading-[1.8]">
                33 full-cycle loans, completed at Oak, through COVID, 525 basis points of Federal Reserve rate hikes,<sup>4</sup> and the sustained rate environment that has followed. 21.9% gross IRR, 1.22x net MOIC, 17-month average duration. On loans requiring workout, an average realized return of 12.3%.<sup>1</sup>
              </p>
            </div>

            {/* Timeline */}
            <div className="mb-12 md:mb-20">
              <p className="text-xs font-body text-gold-accent/70 uppercase tracking-[0.25em] text-center mb-6 md:mb-10">Cycles Navigated</p>
              <div className="relative">
                <motion.div
                  className="absolute top-1.5 left-0 h-px bg-gradient-to-r from-transparent via-gold-accent/40 to-transparent hidden md:block origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                  style={{ right: 0 }}
                />
                <div className="grid grid-cols-3 md:grid-cols-6 gap-y-6 md:gap-y-10 gap-x-2 md:gap-x-4 relative">
                  {[
                    { year: "'90", event: "S&L Crisis" },
                    { year: "'00", event: "Dot-Com Collapse" },
                    { year: "'08", event: "Global Financial Crisis" },
                    { year: "'20", event: "COVID-19 Shock" },
                    { year: "'22", event: "Rate Shock & Liquidity Crisis" },
                    { year: "Now", event: "The environment the team was built for." },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="text-center flex flex-col items-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.15, ease: "easeOut" }}
                    >
                      <motion.div
                        className={`w-3 h-3 rounded-full mb-4 ring-4 ring-abyss ${item.year === "Now" ? "bg-gold-accent" : "bg-silver-mist/40"}`}
                        animate={item.year === "Now" ? {
                          boxShadow: [
                            "0 0 0 0 hsl(var(--gold-accent) / 0.5)",
                            "0 0 0 12px hsl(var(--gold-accent) / 0)",
                          ],
                        } : undefined}
                        transition={item.year === "Now" ? {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                        } : undefined}
                      />
                      <div className={`text-lg md:text-xl lg:text-2xl font-display font-medium mb-1 md:mb-2 ${item.year === "Now" ? "text-gold-accent" : "text-cream"}`}>{item.year}</div>
                      <div className="text-[10px] md:text-xs font-body text-silver-mist/60 max-w-[100px] md:max-w-[130px] leading-relaxed">{item.event}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-silver-mist/40 text-center mt-12 max-w-2xl mx-auto leading-relaxed">
                Timeline reflects cycles navigated by current Oak principals during their prior careers.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a href="/investing" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-gold-accent hover:bg-gold-accent/90 text-abyss px-8 md:px-10 py-3.5 md:py-4 text-sm md:text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm hover:scale-105">
                  See How We Invest
                </button>
              </a>
              <a href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-silver-mist/40 bg-transparent text-cream hover:bg-silver-mist hover:text-abyss hover:border-silver-mist px-8 md:px-10 py-3.5 md:py-4 text-sm md:text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm">
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
