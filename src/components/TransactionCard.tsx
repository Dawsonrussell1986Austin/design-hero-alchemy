import { Card, CardContent } from "@/components/ui/card";
import transactionPlaceholder from "@/assets/transaction-placeholder.jpg";

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
    <Card className="bg-cream border border-abyss/10 overflow-hidden hover:shadow-xl transition-all duration-300 group shadow-md h-full">
      {/* Property Type Badge */}
      <div className="relative">
        <div className="absolute top-4 left-4 bg-gold-accent text-cream px-3 py-1 rounded text-xs font-medium uppercase tracking-wide z-10 shadow-sm">
          {transaction.propertyType}
        </div>
        
        {/* Sketch-style Illustration - Full Width */}
        <div className="aspect-video bg-abyss overflow-hidden relative">
          <img
            src={transaction.image && transaction.image !== "/placeholder.svg" ? transaction.image : transactionPlaceholder}
            alt={transaction.name}
            loading="lazy"
            width={1024}
            height={576}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 absolute inset-0 group-hover:opacity-0"
          />
          {transaction.realImage && (
            <img
              src={transaction.realImage}
              alt={`${transaction.name} - Real Photo`}
              loading="lazy"
              width={1024}
              height={576}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 absolute inset-0 opacity-0 group-hover:opacity-100"
            />
          )}
        </div>
      </div>
      
      <CardContent className="p-6 bg-cream">
        {/* Property Name */}
        <h3 className="text-xl font-display font-medium text-abyss mb-4 leading-tight pb-3 border-b border-abyss/10">
          {transaction.name}
        </h3>
        
        {/* Region */}
        <div className="text-abyss/60 text-sm font-body uppercase tracking-wide mb-4 pb-3 border-b border-abyss/10">
          {transaction.location}
        </div>
        
        {/* Loan Amount */}
        <div className="text-gold-accent text-2xl font-display font-medium mb-4 pb-3 border-b border-abyss/10">
          {transaction.loanSize}
        </div>
        
        {/* Loan Type */}
        <div className="text-abyss/60 text-sm font-body uppercase tracking-wide pt-1">
          {transaction.loanType}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionCard;