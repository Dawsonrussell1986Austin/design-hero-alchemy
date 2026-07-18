import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { trackCTAClick } from "@/lib/gtm";

const OurEdge = () => {
  return (
    <div className="relative z-10">
      {/* Why This, Why Now Section */}
      <div className="relative bg-abyss py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Ghost typography */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:flex items-center justify-end">
          <span className="font-display font-medium italic text-cream/[0.04] text-[16rem] md:text-[24rem] lg:text-[32rem] leading-none -mr-10 md:-mr-20 lg:-mr-32 select-none">
            Now
          </span>
        </div>

        <div className="relative z-10 container mx-auto px-5 md:px-8 lg:px-16 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column */}
            <div>
              <p className="text-xs font-body text-gold-accent/80 uppercase tracking-[0.25em] mb-8">WHY THIS, WHY NOW</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-normal leading-[1.1] tracking-tight mb-8 md:mb-10">
                <span className="text-cream">The last cycle's defining credit platforms were </span>
                <span className="text-gold-accent italic">all built the same way.</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed font-body text-silver-mist/80 mb-5">
                The large-cap platforms that did this now manage hundreds of billions — and the yield premium that built them has compressed. The $2–$20 million segment is the dislocation that remains: a persistent premium institutional capital is actively seeking, that few counterparties can supply consistently.
              </p>
              <p className="text-base leading-relaxed font-body text-silver-mist/50 mb-10">
                Oak spent the years and the capital to become one. The infrastructure is built; what compounds now is scale.
              </p>
            </div>

            {/* Right Column - the playbook steps */}
            <div className="flex flex-col gap-6 lg:pt-16">
              {[
                { step: "01", text: "Identify a structural dislocation." },
                { step: "02", text: "Build the infrastructure to serve it." },
                { step: "03", text: "Prove the model." },
                { step: "04", text: "Then scale." },
              ].map((item) => (
                <div key={item.step} className="bg-abyss/50 backdrop-blur-md border-t-2 border-gold-accent/40 border-l border-r border-b border-gold-accent/10 rounded-lg p-6 md:p-8 transition-all duration-300 hover:bg-abyss/60 hover:border-gold-accent/30 hover:shadow-lg hover:shadow-gold-accent/5 flex items-center gap-6">
                  <span className="text-2xl font-display font-medium text-gold-accent/50">{item.step}</span>
                  <span className="text-lg md:text-xl font-display font-medium text-cream">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* The Oak Standard Section */}
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:flex items-center justify-end">
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
                  Every Oak loan is secured by a specific, identifiable property. Senior-secured. First-lien. 55–75% stabilized LTV. Floating rate indexed to SOFR. 12–36 month terms. No blind pools. No hidden leverage.
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
                  <p className="text-silver-mist/80 font-body text-sm leading-[1.8]">Every Oak position sits at the top of the capital stack. At 55–75% stabilized LTV, the underlying property must lose 25–45% of its value before investor principal is at risk.</p>
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

      {/* The Proof That Matters Most Section */}
      <div className="relative bg-silver-mist py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Ghost typography */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:flex items-center justify-start">
          <span className="font-display font-medium italic text-abyss/[0.04] text-[16rem] md:text-[24rem] lg:text-[32rem] leading-none -ml-8 md:-ml-16 lg:-ml-24 select-none">
            CM1
          </span>
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-body text-gold-accent/80 uppercase tracking-[0.25em] mb-6 text-center">THE PROOF THAT MATTERS MOST</p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-medium text-abyss mb-8 md:mb-10 text-center leading-tight max-w-4xl mx-auto">
              An insurance company places its capital through Oak's underwriting.
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-base md:text-lg font-body text-abyss/80 leading-relaxed mb-6">
                Insurance balance sheets carry the lowest commercial-mortgage loss rate of any lender class — roughly 0.43% — because they demand the most disciplined credit work in the market. (That 0.43% is an industry lender-class statistic, not Oak's realized rate; it is the standard Oak underwrites to.) Today one insurer runs a separately managed account on Oak's origination, underwriting, and servicing; two more use Oak's underwriting and servicing.
              </p>
              <p className="text-base md:text-lg font-body text-abyss/80 leading-relaxed">
                Producing insurance-grade, CM1/CM2-eligible assets at the $2–$20 million size — where institutional originators are scarce — is the least-replicable evidence that the platform works. It is the first thing Oak shows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* A Platform, Not a Fund Section */}
      <div className="relative bg-abyss py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Ghost typography */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:flex items-center justify-end">
          <span className="font-display font-medium text-cream/[0.04] text-[14rem] md:text-[20rem] lg:text-[28rem] leading-none -mr-8 md:-mr-12 lg:-mr-20 select-none">
            &infin;
          </span>
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold-accent/40" />
              <p className="text-xs font-body text-gold-accent uppercase tracking-[0.3em]">A Platform, Not a Fund</p>
              <div className="h-px w-12 bg-gold-accent/40" />
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-normal text-cream mb-10 leading-[1.15] tracking-tight">
              Each line makes the next one <span className="italic text-gold-accent">stronger.</span>
            </h2>

            <p className="text-base lg:text-lg font-body text-silver-mist/70 leading-[1.8] mb-6">
              Origination produces loans that asset management and servicing preserve and monetize. The insurance SMA multiplies origination volume beyond Oak's own balance sheet. Special-servicing experience sharpens underwriting on every new loan. And FHA/HUD converts a 12–36 month bridge into long-dated, government-backed permanent financing — keeping the full economic relationship inside the platform.
            </p>
            <p className="text-base lg:text-lg font-body text-silver-mist/70 leading-[1.8] mb-10">
              Proprietary, AI-assisted underwriting lets the platform add volume without adding proportional cost — every loan held to the same institutional standard, produced faster. The result is a flywheel: advantages built to compound with scale, not erode under it.
            </p>

            <a href="/about" onClick={() => trackCTAClick('See How the Platform Fits Together', '/about', 'platform_not_a_fund')}>
              <Button
                size="lg"
                className="bg-gold-accent hover:bg-gold-accent/90 text-abyss px-8 py-3.5 text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm hover:scale-105 hover:shadow-lg hover:shadow-gold-accent/20"
              >
                See How the Platform Fits Together
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* On the Record Section */}
      <div className="relative bg-abyss border-t border-gold-accent/10 py-16 md:py-24 lg:py-32 overflow-hidden">
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
              <p className="text-xs font-body text-gold-accent uppercase tracking-[0.3em]">On The Record</p>
              <div className="h-px w-12 bg-gold-accent/40" />
            </div>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-display font-normal text-cream mb-10 md:mb-16 text-center leading-[1.15] tracking-tight max-w-4xl mx-auto">
              A record built through the <span className="italic text-gold-accent">hardest credit cycle</span> in a generation.
            </h2>

            {/* Hero Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gold-accent/15 border border-gold-accent/15 mb-12 md:mb-20 rounded-sm overflow-hidden">
              {[
                { value: "33", label: "Full-Cycle Loans", note: "Oak-originated, completed at Oak" },
                { value: "$200M", label: "Full-Cycle Principal", note: "Aggregate, across the 33 loans" },
                { value: "$520M+", label: "Originated Since Inception", note: "Across the managed funds" },
                { value: "55–75%", label: "Loan-to-Value", note: "On every loan, every cycle" },
              ].map((stat, i) => (
                <div key={i} className="bg-abyss p-5 md:p-8 lg:p-10 text-center hover:bg-abyss/60 transition-colors duration-300">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-gold-accent mb-2 md:mb-3 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-sm font-body text-cream uppercase tracking-wider mb-1 md:mb-2">{stat.label}</div>
                  <div className="text-[10px] md:text-xs font-body text-silver-mist/50 hidden md:block">{stat.note}</div>
                </div>
              ))}
            </div>

            {/* Supporting Narrative */}
            <div className="max-w-3xl mx-auto mb-12 md:mb-20 text-center">
              <p className="text-base lg:text-lg font-body text-silver-mist/70 leading-[1.8]">
                33 full-cycle, Oak-originated loans — every one first-lien, senior-secured, floating-rate, short-duration, and underwritten to a 55–75% loan-to-value — completed across the COVID shock, the fastest monetary tightening in four decades, and the sustained CRE stress that followed. Full performance figures, with their methodology and context, are available through the investor portal.
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
                  See the Track Record
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

      {/* Two Ways In Section */}
      <div className="relative bg-silver-mist py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Ghost typography */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:flex items-center justify-start">
          <span className="font-display font-medium italic text-abyss/[0.04] text-[16rem] md:text-[24rem] lg:text-[30rem] leading-none -ml-8 md:-ml-16 lg:-ml-24 select-none">
            Two
          </span>
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-body text-gold-accent/80 uppercase tracking-[0.25em] mb-6 text-center">TWO WAYS IN</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-medium text-abyss mb-10 md:mb-16 text-center leading-tight max-w-4xl mx-auto">
              Two ways to work with Oak.
            </h2>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-cream/60 border border-abyss/10 rounded-lg p-8 md:p-10 flex flex-col">
                <h3 className="text-xl md:text-2xl font-display font-medium text-abyss mb-4">Institutional partners, RIAs & family offices.</h3>
                <p className="text-base font-body text-abyss/80 leading-relaxed mb-8 flex-1">
                  Capital placed in the same senior-secured, first-lien positions as Oak's insurance counterparties — the same documentation, the same standard. Detailed performance and offering information is available through the investor portal.
                </p>
                <a href="/investor-access" onClick={() => trackCTAClick('Investor Access', '/investor-access', 'two_ways_in')}>
                  <Button className="bg-gold-accent hover:bg-gold-accent/90 text-abyss px-8 py-3.5 text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm hover:scale-105">
                    Investor Access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>

              <div className="bg-cream/60 border border-abyss/10 rounded-lg p-8 md:p-10 flex flex-col">
                <h3 className="text-xl md:text-2xl font-display font-medium text-abyss mb-4">Borrowers.</h3>
                <p className="text-base font-body text-abyss/80 leading-relaxed mb-8 flex-1">
                  Senior-secured bridge loans, $2–$20 million, decided by principals in days — with a defined path to FHA/HUD permanent financing when the asset stabilizes.
                </p>
                <a href="/lending" onClick={() => trackCTAClick('Financing for Borrowers', '/lending', 'two_ways_in')}>
                  <Button className="bg-abyss hover:bg-abyss/90 text-cream px-8 py-3.5 text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm hover:scale-105">
                    Financing for Borrowers
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership & Access Section */}
      <div className="relative bg-abyss py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold-accent/40" />
              <p className="text-xs font-body text-gold-accent uppercase tracking-[0.3em]">Leadership & Access</p>
              <div className="h-px w-12 bg-gold-accent/40" />
            </div>

            <p className="text-lg md:text-xl lg:text-2xl font-display text-cream leading-relaxed mb-8">
              Built by lenders — 150+ years across CRE finance, capital markets, and servicing, with roles at BlackRock, Goldman Sachs, Morgan Stanley, Nomura, and HSBC.
            </p>

            <p className="text-base font-body text-silver-mist/70 leading-relaxed mb-10">
              Information on Oak's current and contemplated offerings is available exclusively through the secure investor portal.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a href="/investor-access" onClick={() => trackCTAClick('Enter Investor Portal', '/investor-access', 'leadership_access')}>
                <Button
                  size="lg"
                  className="bg-gold-accent hover:bg-gold-accent/90 text-abyss px-8 py-3.5 text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm hover:scale-105 hover:shadow-lg hover:shadow-gold-accent/20"
                >
                  Enter Investor Portal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="/leadership" onClick={() => trackCTAClick('Meet the Team', '/leadership', 'leadership_access')}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-silver-mist/40 bg-transparent text-cream hover:bg-silver-mist hover:text-abyss hover:border-silver-mist px-8 py-3.5 text-base font-body font-medium tracking-wide transition-all duration-300 rounded-sm"
                >
                  Meet the Team
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEdge;
