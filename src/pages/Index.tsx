import Hero from "@/components/Hero";
import SEOHead from "@/components/SEOHead";
import { OrganizationSchema, FinancialServiceSchema, WebSiteSchema } from "@/components/StructuredData";

const Index = () => {
  return (
    <div>
      <SEOHead 
        canonicalUrl="/"
        description="One platform for the full life of a commercial real estate loan. Oak originates, underwrites, and services middle-market CRE credit — $2–$20M bridge loans and FHA/HUD permanent financing, all in-house."
      />
      <OrganizationSchema />
      <FinancialServiceSchema />
      <WebSiteSchema />
      <Hero />
    </div>
  );
};

export default Index;
