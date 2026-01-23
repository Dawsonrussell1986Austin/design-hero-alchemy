import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

const Disclosures = () => {
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
                  { label: "Disclaimers" }
                ]}
              />
              <h1 className="text-4xl md:text-5xl font-display font-light text-silver-mist mb-6">
                Disclaimers
              </h1>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg prose-slate">
              <p className="mb-8">
                If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at <a href="mailto:ir@oakrepartners.com" className="text-accent-brown hover:underline">ir@oakrepartners.com</a>.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">General Information Disclaimer</h2>
                <p className="mb-4">
                  All the information on this website - www.oakrepartners.com - is published in good faith and for general information purpose only. White Oak Capital Holdings, LLC d/b/a Oak Real Estate Partners does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (White Oak Capital Holdings, LLC d/b/a Oak Real Estate Partners), is strictly at your own risk. White Oak Capital Holdings, LLC d/b/a Oak Real Estate Partners will not be liable for any losses and/or damages in connection with the use of our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">External Links Disclaimer</h2>
                <p className="mb-4">
                  From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
                </p>
                <p className="mb-4">
                  Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">Consent</h2>
                <p className="mb-4">
                  By using our website, you hereby consent to our disclaimer and agree to its terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">Update</h2>
                <p className="mb-4">
                  Should we update, amend or make any changes to this document, those changes will be prominently posted here.
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

export default Disclosures;