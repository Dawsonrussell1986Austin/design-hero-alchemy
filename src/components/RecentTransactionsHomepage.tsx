import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { featuredTransactions } from "@/data/transactions";

interface Transaction {
  id: number;
  name: string;
  location: string;
  loanSize: string;
  loanType: string;
  propertyType: string;
  image: string;
  realImage?: string;
}

interface TransactionCardHomepageProps {
  transaction: Transaction;
}

const TransactionCardHomepage = ({ transaction }: TransactionCardHomepageProps) => {
  return (
    <Card className="bg-white/90 border border-obsidian/20 overflow-hidden hover:bg-white transition-all duration-300 group shadow-lg h-full">
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={transaction.image}
          alt={transaction.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 absolute inset-0 group-hover:opacity-0"
        />
        {transaction.realImage && (
          <img 
            src={transaction.realImage}
            alt={`${transaction.name} - Real Photo`}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 absolute inset-0 opacity-0 group-hover:opacity-100"
          />
        )}
        <div className="absolute top-3 left-3 bg-accent-brown/90 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-body font-medium uppercase tracking-wide z-10 shadow-md border border-white/20">
          {transaction.propertyType}
        </div>
      </div>
      <CardContent className="p-6 flex-1 bg-white">
        <h3 className="text-lg font-display font-medium text-obsidian mb-4 leading-tight border-b border-obsidian/20 pb-3">
          {transaction.name}
        </h3>
        
        <div className="space-y-3">
          <div className="text-obsidian/70 text-sm font-body border-b border-obsidian/20 pb-2">
            {transaction.location}
          </div>
          
          <div className="text-accent-brown text-xl font-display font-medium border-b border-obsidian/20 pb-2">
            {transaction.loanSize}
          </div>
          
          <div className="text-obsidian/60 text-sm font-body leading-tight pt-2">
            {transaction.loanType}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const RecentTransactionsHomepage = () => {
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
            <h2 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-8">
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
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full flex-shrink-0 items-stretch pb-4"
                >
                  {featuredTransactions
                    .slice(pageIndex * transactionsPerPage, (pageIndex + 1) * transactionsPerPage)
                    .map((transaction) => (
                      <TransactionCardHomepage key={transaction.id} transaction={transaction} />
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
                className="bg-accent-brown hover:bg-accent-brown/90 text-silver-mist px-12 py-4 font-body font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-sm"
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

export default RecentTransactionsHomepage;