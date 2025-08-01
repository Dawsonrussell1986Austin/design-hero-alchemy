import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const RecentTransactions = () => {
  const recentTransactions = [
    {
      amount: "$10.55M",
      type: "Multifamily",
      description: "Development of over 550 Apartments",
      location: "Ridgefield Park, NJ",
      image: "/lovable-uploads/403d76e1-5d7b-4f4c-b865-ee5d118a616d.png"
    },
    {
      amount: "$8M",
      type: "Single-Family",
      description: "Acquisition and Development of Six Residential Lots",
      location: "Austin, TX",
      image: "/lovable-uploads/3842fd81-69ed-40e9-abc5-b0c4ac8bd5c8.png"
    },
    {
      amount: "$13.5M",
      type: "Multifamily",
      description: "Development of 40-Unit Multifamily",
      location: "Brooklyn, NY",
      image: "/lovable-uploads/fd2a1b7e-1f4e-466b-84b8-06939b630008.png"
    },
    {
      amount: "$5.3M",
      type: "Multifamily",
      description: "Development of 24-Unit Condominium",
      location: "Calabash, NC",
      image: "/lovable-uploads/bbf1d0ba-8235-42b5-9a58-4b08ebd053e9.png"
    },
    {
      amount: "$12.8M",
      type: "Mixed-Use",
      description: "Acquisition and Renovation of Commercial Complex",
      location: "Denver, CO",
      image: "/lovable-uploads/ba58a644-5b83-4a4f-a16d-2e36b0520c76.png"
    },
    {
      amount: "$7.2M",
      type: "Office",
      description: "Acquisition of Class A Office Building",
      location: "Atlanta, GA",
      image: "/lovable-uploads/c171f798-a069-4350-b147-7cc49432b34a.png"
    },
    {
      amount: "$9.8M",
      type: "Retail",
      description: "Development of Shopping Center",
      location: "Phoenix, AZ",
      image: "/lovable-uploads/d74a20fd-2006-4e11-ad03-64a5f76e567f.png"
    },
    {
      amount: "$15.2M",
      type: "Industrial",
      description: "Acquisition of Warehouse Complex",
      location: "Miami, FL",
      image: "/lovable-uploads/e97b4477-fafb-49f0-b011-b4eb2dcd6a0a.png"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-obsidian mb-8">
              Recent Transactions
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end mb-8 gap-2">
            <button className="p-2 border border-deep-petrol/20 rounded hover:bg-deep-petrol/10 transition-colors">
              <ChevronLeft className="h-5 w-5 text-deep-petrol" />
            </button>
            <button className="p-2 border border-deep-petrol/20 rounded hover:bg-deep-petrol/10 transition-colors">
              <ChevronRight className="h-5 w-5 text-deep-petrol" />
            </button>
          </div>

          {/* Transactions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {recentTransactions.map((transaction, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img 
                    src={transaction.image}
                    alt={transaction.description}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-medium text-obsidian">
                    {transaction.amount} {transaction.type}
                  </h3>
                  <p className="text-deep-petrol text-sm leading-relaxed">
                    {transaction.description}
                  </p>
                  <p className="text-accent-brown text-sm font-medium italic">
                    {transaction.location}
                  </p>
                </div>
              </div>
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