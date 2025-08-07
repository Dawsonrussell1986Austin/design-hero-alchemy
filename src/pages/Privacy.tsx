import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-obsidian py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Breadcrumb 
                items={[
                  { label: "Home", href: "/" },
                  { label: "Privacy Policy" }
                ]}
              />
              <h1 className="text-4xl md:text-5xl font-display font-light text-silver-mist mb-6">
                Privacy Policy
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
                <h2 className="text-2xl font-display font-medium mb-4">Information We Collect</h2>
                <p className="mb-4">
                  We collect information you provide directly to us, such as when you contact us, 
                  request information about our services, or communicate with us.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect to provide, maintain, and improve our services, 
                  communicate with you, and comply with legal obligations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">Information Sharing</h2>
                <p className="mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this privacy policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:privacy@oakrep.com" className="text-accent-brown hover:underline">
                    privacy@oakrep.com
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

export default Privacy;