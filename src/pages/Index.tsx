import Hero from "@/components/Hero";
import SEOHead from "@/components/SEOHead";
import { OrganizationSchema, FinancialServiceSchema, WebSiteSchema } from "@/components/StructuredData";

const Index = () => {
  return (
    <div>
      <SEOHead 
        canonicalUrl="/"
        description="Oak Real Estate Partners specializes in commercial real estate lending and investment solutions. Bridge loans, HUD financing, and private equity opportunities."
      />
      <OrganizationSchema />
      <FinancialServiceSchema />
      <WebSiteSchema />
      <Hero />
    </div>
  );
};

export default Index;
