import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Transactions = () => {
  const featuredTransactions = [
    {
      id: 1,
      name: "Ridge Avenue Apartments",
      location: "NORTHEAST REGION",
      loanSize: "$9,225,000",
      loanType: "OPPORTUNISTIC BRIDGE LOAN",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/95be19e9-56b5-4d13-963d-51e2ac72fa2b.png"
    },
    {
      id: 2,
      name: "Panda Biotech",
      location: "SOUTHWEST REGION", 
      loanSize: "$9,750,000",
      loanType: "CORE-PLUS BRIDGE LOAN",
      propertyType: "INDUSTRIAL",
      image: "/lovable-uploads/98686462-3dfb-42d0-a276-b4a3258b443d.png"
    },
    {
      id: 3,
      name: "Gateway Shopping Center",
      location: "MIDWEST REGION",
      loanSize: "$14,500,000", 
      loanType: "CORE-PLUS BRIDGE",
      propertyType: "RETAIL",
      image: "/lovable-uploads/a1896c4a-6668-4b7a-8d37-c2d9ae2cb3e2.png"
    },
    {
      id: 4,
      name: "8th Street Apartments",
      location: "NORTHWEST REGION",
      loanSize: "$8,500,000",
      loanType: "OPPORTUNISTIC BRIDGE LOAN", 
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/c171f798-a069-4350-b147-7cc49432b34a.png"
    },
    {
      id: 5,
      name: "Canterbury Apartments", 
      location: "MIDWEST REGION",
      loanSize: "$8,600,000",
      loanType: "CORE-PLUS BRIDGE LOAN",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/ef0a0cca-4b1a-4e4b-adb1-8e51b9fca3d8.png"
    },
    {
      id: 6,
      name: "2 Scripps MOB",
      location: "WEST REGION", 
      loanSize: "$9,000,000",
      loanType: "OPPORTUNISTIC BRIDGE LOAN",
      propertyType: "MEDICAL OFFICE",
      image: "/lovable-uploads/f1c48a4f-00b5-4eaa-ad91-f6f857c4342f.png"
    },
    {
      id: 7,
      name: "The Enclave at Woodbridge",
      location: "SOUTHWEST REGION",
      loanSize: "$20,500,000", 
      loanType: "HUD MULTIFAMILY - 221D4",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/fd2a1b7e-1f4e-466b-84b8-06939b630008.png"
    },
    {
      id: 8,
      name: "4401 Fortune Place",
      location: "SOUTHEAST REGION",
      loanSize: "$10,180,000",
      loanType: "CORE-PLUS BRIDGE LOAN", 
      propertyType: "INDUSTRIAL",
      image: "/lovable-uploads/e323112f-3778-4823-a73c-459340f8fc23.png"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {featuredTransactions.map((transaction) => (
              <Card key={transaction.id} className="bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-garnet-edge/50 hover:bg-white/10 transition-all duration-300 group text-silver-mist shadow-2xl shadow-obsidian/20">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={transaction.image}
                    alt={transaction.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8 bg-transparent backdrop-blur-sm">
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