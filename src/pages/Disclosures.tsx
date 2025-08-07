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
                  { label: "Disclosures" }
                ]}
              />
              <h1 className="text-4xl md:text-5xl font-display font-light text-silver-mist mb-6">
                Disclosures
              </h1>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg prose-slate">
              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">Investment Risks</h2>
                <p className="mb-4">
                  All investments involve risk, including the potential loss of principal. Real estate 
                  investments are subject to various risks including market conditions, property values, 
                  interest rates, and economic factors.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">No Guarantee of Returns</h2>
                <p className="mb-4">
                  Past performance is not indicative of future results. There can be no assurance that 
                  any investment strategy will achieve its investment objectives or avoid substantial losses.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">Accredited Investors Only</h2>
                <p className="mb-4">
                  Investment opportunities are available only to accredited investors as defined by 
                  applicable securities laws. Prospective investors must meet certain income or net worth 
                  requirements to participate in our investment programs.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">Professional Advice</h2>
                <p className="mb-4">
                  This information is not intended as investment, tax, or legal advice. Prospective 
                  investors should consult with their own professional advisors before making any 
                  investment decisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">No Public Solicitation</h2>
                <p className="mb-4">
                  The information contained on this website does not constitute a public offering of 
                  securities. Any offers to sell or solicitations of offers to buy securities will be 
                  made only to qualified investors through appropriate offering documents.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">Forward-Looking Statements</h2>
                <p className="mb-4">
                  This website may contain forward-looking statements that involve risks and uncertainties. 
                  Actual results may differ materially from those projected in any forward-looking statements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-medium mb-4">Questions</h2>
                <p>
                  For questions regarding these disclosures, please contact us at{" "}
                  <a href="mailto:compliance@oakrep.com" className="text-accent-brown hover:underline">
                    compliance@oakrep.com
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

export default Disclosures;