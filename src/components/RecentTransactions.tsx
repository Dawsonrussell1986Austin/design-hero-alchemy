import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import TransactionCard from "./TransactionCard";
import { featuredTransactions } from "@/data/transactions";

const RecentTransactions = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const transactionsPerPage = 4;
  const totalPages = Math.ceil(featuredTransactions.length / transactionsPerPage);

  const getCurrentTransactions = () => {
    const startIndex = currentPage * transactionsPerPage;
    return featuredTransactions.slice(startIndex, startIndex + transactionsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="bg-silver-mist py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-obsidian mb-4">
              Recent Transactions
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end mb-8 gap-2">
            <button 
              onClick={prevPage}
              className="p-2 border border-deep-petrol/20 rounded hover:bg-deep-petrol/10 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-deep-petrol" />
            </button>
            <button 
              onClick={nextPage}
              className="p-2 border border-deep-petrol/20 rounded hover:bg-deep-petrol/10 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-deep-petrol" />
            </button>
          </div>

          {/* Transactions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {getCurrentTransactions().map((transaction) => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
          </div>

          {/* See More Button */}
          <div className="text-center">
            <Link to="/transactions">
              <Button 
                size="lg"
                className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-4 font-serif font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
              >
                SEE MORE
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;