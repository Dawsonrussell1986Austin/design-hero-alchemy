import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import SEOHead from "@/components/SEOHead";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Terms of Service"
        description="Oak Real Estate Partners terms of service. Read the terms and conditions governing use of our website."
        canonicalUrl="/terms"
      />
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-abyss py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Breadcrumb 
                items={[
                  { label: "Home", href: "/" },
                  { label: "Terms of Service" }
                ]}
              />
              <h1 className="text-4xl md:text-5xl font-display font-light text-silver-mist mb-6">
                Terms of Service
              </h1>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg prose-slate">
              <p className="text-lg text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing and using this website, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">Use License</h2>
                <p className="mb-4">
                  Permission is granted to temporarily download one copy of the materials on White Oak Capital Holdings, LLC d/b/a Oak Real Estate Partners' 
                  website for personal, non-commercial transitory viewing only.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">Disclaimer</h2>
                <p className="mb-4">
                  The materials on White Oak Capital Holdings, LLC d/b/a Oak Real Estate Partners' website are provided on an 'as is' basis. 
                  White Oak Capital Holdings, LLC d/b/a Oak Real Estate Partners makes no warranties, expressed or implied, and hereby disclaims 
                  and negates all other warranties including without limitation, implied warranties or 
                  conditions of merchantability, fitness for a particular purpose, or non-infringement 
                  of intellectual property or other violation of rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">Limitations</h2>
                <p className="mb-4">
                  In no event shall White Oak Capital Holdings, LLC d/b/a Oak Real Estate Partners or its suppliers be liable for any damages 
                  (including, without limitation, damages for loss of data or profit, or due to business 
                  interruption) arising out of the use or inability to use the materials on White Oak Capital Holdings, LLC d/b/a Oak Real Estate Partners' 
                  website, even if White Oak Capital Holdings, LLC d/b/a Oak Real Estate Partners or an authorized representative has been notified 
                  orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:legal@oakrep.com" className="text-gold-accent hover:underline">
                    legal@oakrep.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;