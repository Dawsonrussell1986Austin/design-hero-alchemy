import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import blogBuildingHero from "@/assets/blog-building-collage.png";
import SEOHead from "@/components/SEOHead";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

const BlogOakFindsOpportunity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="How Oak Finds Opportunity Where Banks Can't"
        description="Learn how Oak Real Estate Partners finds compelling investment opportunities in transitional commercial real estate. Special situation assets, conservative lending, and capital protection strategies."
        canonicalUrl="/blog/oak-finds-opportunity"
        ogType="article"
        article={{
          publishedTime: '2026-01-07',
          author: 'Oak Real Estate Partners'
        }}
      />
      <ArticleSchema
        headline="How Oak Finds Opportunity Where Banks Can't"
        description="In today's commercial real estate market, many investors hear a lot of noise about private credit, distressed assets, and market dislocation. What often gets lost is a simpler truth: some of the most compelling opportunities aren't distressed at all — they're just in transition."
        datePublished="2026-01-07"
        author="Oak Real Estate Partners"
        url="/blog/oak-finds-opportunity"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://oakrealestatepartners.com/' },
          { name: 'Blog', url: 'https://oakrealestatepartners.com/blog' },
          { name: 'How Oak Finds Opportunity', url: 'https://oakrealestatepartners.com/blog/oak-finds-opportunity' }
        ]}
      />
      {/* Header with dark background */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How Oak Finds Opportunity Where Banks Can't" }
        ]}
      />
      
      {/* Article Content */}
      <div className="bg-silver-mist py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/blog" className="inline-flex items-center text-accent-brown hover:text-accent-brown/80 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            {/* Article Header */}
            <div className="mb-12">
              <p className="text-deep-petrol/70 mb-4">January 7, 2026</p>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-display font-medium text-obsidian leading-tight mb-8">
                How Oak Finds Opportunity Where Banks Can't
              </h1>
            </div>
            
            {/* Featured Image */}
            <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-12">
              <img 
                src={blogBuildingHero}
                alt="Commercial Real Estate Building"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-deep-petrol/90 leading-relaxed mb-6">
                In today's commercial real estate market, many investors hear a lot of noise about private credit, distressed assets, and market dislocation. What often gets lost is a simpler truth: some of the most compelling opportunities aren't distressed at all — they're just in transition.
              </p>
              
              <p className="text-lg text-deep-petrol/90 leading-relaxed mb-6 font-semibold">
                At Oak Real Estate Partners, this is the space we focus on.
              </p>
              
              <h2 className="text-2xl font-display font-medium text-obsidian mt-12 mb-6">
                The Market Gap Banks Can't Fill
              </h2>
              
              <p className="text-lg text-deep-petrol/90 leading-relaxed mb-6">
                Traditional banks are excellent lenders — when properties look perfect. High occupancy. Stable cash flow. No renovations underway. No changes in ownership or tenants.
              </p>
              
              <p className="text-lg text-deep-petrol/90 leading-relaxed mb-6 font-semibold">
                But real estate doesn't always work that way.
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-deep-petrol/90">
                <li>A quality apartment building may need time to renovate vacant units.</li>
                <li>A shopping center may be repositioning its tenant mix.</li>
                <li>An office or industrial property may be between leases.</li>
              </ul>
              
              <p className="text-lg text-deep-petrol/90 leading-relaxed mb-6">
                In these moments, banks often step back — not because the property is bad, but because it doesn't fit their narrow lending criteria or timelines. Approvals can take months, and many transitional assets simply don't qualify.
              </p>
              
              <p className="text-lg text-deep-petrol/90 leading-relaxed mb-6 font-semibold">
                That gap is where Oak operates.
              </p>
              
              <h2 className="text-2xl font-display font-medium text-obsidian mt-12 mb-6">
                What Are "Special Situation" Assets?
              </h2>
              
              <p className="text-lg text-deep-petrol/90 leading-relaxed mb-6">
                Special situation assets are good properties going through temporary change. These are not distressed or speculative bets. They are typically:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-deep-petrol/90">
                <li>Located in strong markets</li>
                <li>Owned by experienced operators</li>
                <li>Backed by real, income-producing real estate</li>
                <li>In a defined transition period (usually 12–24 months)</li>
              </ul>
              
              <p className="text-lg text-deep-petrol/90 leading-relaxed mb-6">
                Examples include properties being renovated, re-leased, stabilized, or repositioned before refinancing with a traditional lender.
              </p>
              
              <p className="text-lg text-deep-petrol/90 leading-relaxed mb-6">
                Because banks can't move quickly or flexibly in these situations, borrowers are willing to pay higher interest rates for certainty and speed. That creates an opportunity for lenders who understand both the real estate and the transition.
              </p>
              
              <h2 className="text-2xl font-display font-medium text-obsidian mt-12 mb-6">
                How Oak Approaches Risk and Protection
              </h2>
              
              <p className="text-lg text-deep-petrol/90 leading-relaxed mb-6 font-semibold">
                Oak's strategy starts with capital protection.
              </p>
              
              <p className="text-lg text-deep-petrol/90 leading-relaxed mb-6">
                Every loan we make is:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-deep-petrol/90">
                <li>Senior-secured (first lien position)</li>
                <li>Backed by real property collateral</li>
                <li>Structured at conservative loan-to-value levels (typically 60–70%)</li>
              </ul>
              
              <p className="text-lg text-deep-petrol/90 leading-relaxed mb-6">
                In simple terms, we don't lend $1.00 for every $1.00 of property value. We lend $0.60–$0.70. That cushion helps protect capital if values soften or timelines extend.
              </p>
              
              <p className="text-lg text-deep-petrol/90 leading-relaxed mb-6">
                We also work only with experienced property owners and actively monitor each loan throughout its life — we don't lend and walk away.
              </p>
              
              <h2 className="text-2xl font-display font-medium text-obsidian mt-12 mb-6">
                Why This Opportunity Exists Today
              </h2>
              
              <p className="text-lg text-deep-petrol/90 leading-relaxed mb-6">
                Several structural trends are working together to create strong demand for this type of financing:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-deep-petrol/90">
                <li>Banks and insurance companies are lending less to smaller commercial real estate projects</li>
                <li>A large wave of low-rate loans from prior years is coming due</li>
                <li>Higher interest rates have made refinancing more difficult</li>
                <li>Property owners need time and flexibility to stabilize assets</li>
              </ul>
              
              <p className="text-lg text-deep-petrol/90 leading-relaxed mb-6">
                For investors, this has translated into higher income opportunities backed by real assets and conservative structures — when managed with discipline.
              </p>
              
              <h2 className="text-2xl font-display font-medium text-obsidian mt-12 mb-6">
                A Conservative Alternative Within Private Credit
              </h2>
              
              <p className="text-lg text-deep-petrol/90 leading-relaxed mb-6">
                Oak's role in the private credit market isn't about chasing the highest returns or taking unnecessary risk. It's about solving real problems for property owners while prioritizing downside protection for investors.
              </p>
              
              <p className="text-lg text-deep-petrol/90 leading-relaxed mb-6">
                The result is an investment approach focused on:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-deep-petrol/90">
                <li>Current income</li>
                <li>Capital preservation</li>
                <li>Short-to-intermediate loan durations</li>
                <li>Real estate as collateral</li>
              </ul>
              
              <p className="text-lg text-deep-petrol/90 leading-relaxed mb-12">
                It's not complicated — but it does require experience, judgment, and the ability to move quickly when banks can't.
              </p>
              
              {/* CTA Section */}
              <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol rounded-2xl p-8 lg:p-12 text-center">
                <h3 className="text-2xl font-display font-medium text-silver-mist mb-4">
                  How Oak Finds Opportunity Where Banks Can't
                </h3>
                <p className="text-silver-mist/80 mb-4">
                  A 20-minute overview of our investment approach, market backdrop, and risk management philosophy.
                </p>
                <p className="text-silver-mist/60 text-sm mb-8">
                  If you can't attend live, a recording will be shared with all registrants.
                </p>
                <a 
                  href="https://my.demio.com/ref/IaQROe5ALcV9ouMm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-lg">
                    Register for the Webinar
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogOakFindsOpportunity;