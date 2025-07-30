import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Transactions = () => {
  const featuredTransactions = [
    {
      id: 1,
      name: "Metropolitan Plaza",
      location: "ATLANTA, GA",
      loanSize: "$45.0 MM",
      loanType: "BRIDGE",
      propertyType: "OFFICE",
      image: "/lovable-uploads/95be19e9-56b5-4d13-963d-51e2ac72fa2b.png"
    },
    {
      id: 2,
      name: "Riverside Commons",
      location: "AUSTIN, TX",
      loanSize: "$32.5 MM",
      loanType: "CONSTRUCTION",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/98686462-3dfb-42d0-a276-b4a3258b443d.png"
    },
    {
      id: 3,
      name: "Gateway Industrial",
      location: "PHOENIX, AZ",
      loanSize: "$28.0 MM",
      loanType: "BRIDGE",
      propertyType: "INDUSTRIAL",
      image: "/lovable-uploads/a1896c4a-6668-4b7a-8d37-c2d9ae2cb3e2.png"
    },
    {
      id: 4,
      name: "Harbor View Retail",
      location: "MIAMI, FL",
      loanSize: "$52.0 MM",
      loanType: "ACQUISITION",
      propertyType: "RETAIL",
      image: "/lovable-uploads/c171f798-a069-4350-b147-7cc49432b34a.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="bg-obsidian/90 backdrop-blur-sm border border-silver-mist/20 rounded-lg px-6 py-3 inline-block mb-6">
            <span className="text-silver-mist font-semibold tracking-wide">TRANSACTIONS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-silver-mist mb-8 leading-tight">
            Proven Track Record
          </h1>
          
          <p className="text-xl md:text-2xl text-silver-mist/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Oak sponsors institutionally-backed debt investment vehicles which have closed in excess of 
            <span className="text-garnet-edge font-semibold"> $2.5 billion </span>
            of debt transactions.*
          </p>
        </div>
      </section>

      {/* Featured Transactions Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredTransactions.map((transaction) => (
              <Card key={transaction.id} className="bg-obsidian/60 backdrop-blur-sm border border-silver-mist/20 overflow-hidden hover:border-garnet-edge/50 transition-all duration-300 group text-silver-mist">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={transaction.image}
                    alt={transaction.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8 bg-transparent">
                  <h3 className="text-2xl font-bold text-silver-mist mb-6">
                    {transaction.name}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-pale-sage text-sm font-medium">LOCATION:</span>
                      <span className="text-silver-mist font-semibold">{transaction.location}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-pale-sage text-sm font-medium">LOAN SIZE:</span>
                      <span className="text-garnet-edge font-bold text-lg">{transaction.loanSize}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-pale-sage text-sm font-medium">LOAN TYPE:</span>
                      <span className="text-silver-mist font-semibold">{transaction.loanType}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-pale-sage text-sm font-medium">PROPERTY TYPE:</span>
                      <span className="text-silver-mist font-semibold">{transaction.propertyType}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-pale-sage text-sm">
              * Past performance does not guarantee future results. All investments involve risk of loss.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transactions;