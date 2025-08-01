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
    <Card className="bg-white/20 backdrop-blur-md border border-white/30 overflow-hidden hover:border-accent-brown/50 hover:shadow-xl hover:bg-white/30 transition-all duration-300 group shadow-lg">
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
        <div className="absolute top-3 left-3 bg-garnet-edge/90 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-medium uppercase tracking-wide z-10 shadow-md border border-white/20">
          {transaction.propertyType}
        </div>
      </div>
      <CardContent className="p-6 bg-white/10 backdrop-blur-sm border-t border-white/20">
        <h3 className="text-lg font-semibold text-obsidian mb-4 leading-tight border-b border-garnet-edge/20 pb-3">
          {transaction.name}
        </h3>
        
        <div className="space-y-3">
          <div className="text-deep-petrol text-sm font-medium border-b border-garnet-edge/20 pb-2">
            {transaction.location}
          </div>
          
          <div className="text-accent-brown text-xl font-bold border-b border-garnet-edge/20 pb-2">
            {transaction.loanSize}
          </div>
          
          <div className="text-deep-petrol/80 text-sm leading-tight">
            {transaction.loanType}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionCard;