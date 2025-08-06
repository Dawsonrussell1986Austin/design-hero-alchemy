import { Card, CardContent } from "@/components/ui/card";

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

interface TransactionCardProps {
  transaction: Transaction;
}

const TransactionCard = ({ transaction }: TransactionCardProps) => {
  return (
    <Card className="bg-white border border-obsidian/10 overflow-hidden hover:shadow-xl transition-all duration-300 group shadow-md h-full">
      {/* Property Type Badge */}
      <div className="relative">
        <div className="absolute top-4 left-4 bg-accent-brown text-white px-3 py-1 rounded text-xs font-medium uppercase tracking-wide z-10 shadow-sm">
          {transaction.propertyType}
        </div>
        
        {/* Sketch-style Illustration */}
        <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex items-center justify-center">
          <img 
            src={transaction.image}
            alt={transaction.name}
            className="w-full h-full object-contain opacity-70 group-hover:opacity-90 transition-opacity duration-300"
          />
        </div>
      </div>
      
      <CardContent className="p-6 bg-white">
        {/* Property Name */}
        <h3 className="text-xl font-display font-medium text-obsidian mb-4 leading-tight pb-3 border-b border-obsidian/10">
          {transaction.name}
        </h3>
        
        {/* Region */}
        <div className="text-obsidian/60 text-sm font-body uppercase tracking-wide mb-4 pb-3 border-b border-obsidian/10">
          {transaction.location}
        </div>
        
        {/* Loan Amount */}
        <div className="text-accent-brown text-2xl font-display font-medium mb-4 pb-3 border-b border-obsidian/10">
          {transaction.loanSize}
        </div>
        
        {/* Loan Type */}
        <div className="text-obsidian/60 text-sm font-body uppercase tracking-wide pt-1">
          {transaction.loanType}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionCard;