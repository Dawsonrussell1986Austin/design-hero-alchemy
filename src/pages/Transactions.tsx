import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimplePageHeader from "@/components/SimplePageHeader";
import TransactionCard from "@/components/TransactionCard";
import { featuredTransactions } from "@/data/transactions";

const Transactions = () => {

  return (
    <div className="min-h-screen">
      {/* Header with dark background */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
        <SimplePageHeader title="Transactions" />
      </div>
      
      {/* Cream background for content */}
      <div className="bg-silver-mist">

      {/* Featured Transactions Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {featuredTransactions.map((transaction) => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-deep-petrol/70 text-sm">
              * Past performance does not guarantee future results. All investments involve risk of loss.
            </p>
          </div>
        </div>
      </section>

      </div>

      <Footer />
    </div>
  );
};

export default Transactions;