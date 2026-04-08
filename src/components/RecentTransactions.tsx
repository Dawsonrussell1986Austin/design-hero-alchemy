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
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-abyss mb-4">
              Recent Transactions
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end mb-8 gap-2">
            <button 
              onClick={prevPage}
              className="p-2 border border-graphite-fog/20 rounded hover:bg-graphite-fog/10 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-graphite-fog" />
            </button>
            <button 
              onClick={nextPage}
              className="p-2 border border-graphite-fog/20 rounded hover:bg-graphite-fog/10 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-graphite-fog" />
            </button>
          </div>

          {/* Transactions Grid - Smooth Scrolling Container */}
          <div className="overflow-hidden mb-12 pb-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentPage * 100}%)`,
              }}
            >
              {Array.from({ length: totalPages }, (_, pageIndex) => (
                <div 
                  key={pageIndex}
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full flex-shrink-0 items-stretch pb-4"
                >
                  {featuredTransactions
                    .slice(pageIndex * transactionsPerPage, (pageIndex + 1) * transactionsPerPage)
                    .map((transaction) => (
                      <TransactionCard key={transaction.id} transaction={transaction} />
                    ))
                  }
                </div>
              ))}
            </div>
          </div>

          {/* See More Button */}
          <div className="text-center">
            <Link to="/transactions">
              <Button 
                size="lg"
                className="bg-gold-accent hover:bg-gold-accent/90 text-silver-mist px-12 py-4 font-serif font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
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