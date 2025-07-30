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
      image: "/lovable-uploads/91b49f1e-c22c-4f5d-9789-e817c02902ed.png"
    },
    {
      id: 2,
      name: "Garden Courts Apartments",
      location: "SOUTHEAST REGION",
      loanSize: "$8,650,000",
      loanType: "OPPORTUNISTIC BRIDGE LOAN",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/a0c96762-6adf-454f-a26a-d05258556d17.png"
    },
    {
      id: 3,
      name: "Panda Biotech",
      location: "SOUTHWEST REGION", 
      loanSize: "$9,750,000",
      loanType: "CORE-PLUS BRIDGE LOAN",
      propertyType: "INDUSTRIAL",
      image: "/lovable-uploads/95843501-e896-453c-aad5-f41960a68828.png"
    },
    {
      id: 4,
      name: "Marblehead Apartments",
      location: "MIDWEST REGION",
      loanSize: "$1,700,000",
      loanType: "OPPORTUNISTIC BRIDGE LOAN",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/ba58a644-5b83-4a4f-a16d-2e36b0520c76.png"
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
      name: "8th Street Apartments",
      location: "NORTHWEST REGION",
      loanSize: "$8,500,000",
      loanType: "OPPORTUNISTIC BRIDGE LOAN", 
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/fd2a1b7e-1f4e-466b-84b8-06939b630008.png"
    },
    {
      id: 8,
      name: "Gateway Shopping Center",
      location: "MIDWEST REGION",
      loanSize: "$14,500,000", 
      loanType: "CORE-PLUS BRIDGE",
      propertyType: "RETAIL",
      image: "/lovable-uploads/e323112f-3778-4823-a73c-459340f8fc23.png"
    },
    {
      id: 9,
      name: "Minnesota Commons Apartments",
      location: "NORTHEAST REGION",
      loanSize: "$15,500,000",
      loanType: "OPPORTUNISTIC BRIDGE LOAN",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/d2c5b2a3-700b-49d7-a9b6-4f8b05fd192b.png"
    },
    {
      id: 10,
      name: "The Breakers Apartments",
      location: "SOUTHEAST REGION",
      loanSize: "$5,660,000",
      loanType: "CORE-PLUS BRIDGE LOAN",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/ce177ed1-07c9-4b54-86fa-0de9fb0ba3be.png"
    },
    {
      id: 11,
      name: "Eagle Crest Village",
      location: "NORTHWEST REGION",
      loanSize: "$4,500,000",
      loanType: "OPPORTUNISTIC BRIDGE LOAN",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/c40701c4-be9c-4192-b6ea-12fc78ad33be.png"
    },
    {
      id: 12,
      name: "Ocean Shores Apartments",
      location: "SOUTHEAST REGION",
      loanSize: "$7,700,000",
      loanType: "CORE-PLUS BRIDGE LOAN",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/a8349d0b-e18c-4e40-b05e-b43b801403c1.png"
    },
    {
      id: 13,
      name: "Laura Street Trio",
      location: "SOUTHEAST REGION",
      loanSize: "$6,300,000",
      loanType: "OPPORTUNISTIC BRIDGE LOAN",
      propertyType: "MIXED USE",
      image: "/lovable-uploads/89d8c150-21e7-428d-a059-cf90057a1204.png"
    },
    {
      id: 14,
      name: "Bon Air Apartments",
      location: "MIDWEST REGION",
      loanSize: "$4,000,000",
      loanType: "OPPORTUNISTIC BRIDGE LOAN",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/8751a90a-69d4-476a-9989-f106bb73f3e5.png"
    },
    {
      id: 15,
      name: "Hawaii Avenue Apartments",
      location: "NORTHEAST REGION",
      loanSize: "$5,800,000",
      loanType: "PARTICIPATING BRIDGE LOAN",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/837db76c-f393-41f0-aeeb-03c5f011e440.png"
    },
    {
      id: 16,
      name: "CHP Office Building",
      location: "WEST REGION",
      loanSize: "$8,000,000",
      loanType: "OPPORTUNISTIC BRIDGE LOAN",
      propertyType: "OFFICE",
      image: "/lovable-uploads/83330b8e-1b82-4836-98fb-4d33bd9ab0fe.png"
    },
    {
      id: 17,
      name: "Templecliff Apartments",
      location: "WEST REGION",
      loanSize: "$2,300,000",
      loanType: "OPPORTUNISTIC BRIDGE LOAN",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/79c2a7cf-32d1-4826-b96c-62d23008685e.png"
    },
    {
      id: 18,
      name: "Irondequoit Plaza",
      location: "NORTHEAST REGION",
      loanSize: "$8,600,000",
      loanType: "CORE BRIDGE LOAN",
      propertyType: "RETAIL",
      image: "/lovable-uploads/7078b5ad-cf31-456a-9b1a-9f74f2117a75.png"
    },
    {
      id: 19,
      name: "3850 W. Cortland Street",
      location: "MIDWEST REGION",
      loanSize: "$5,800,000",
      loanType: "OPPORTUNISTIC BRIDGE LOAN",
      propertyType: "INDUSTRIAL",
      image: "/lovable-uploads/71932cd7-9481-49c5-8971-a718dfd8a289.png"
    },
    {
      id: 20,
      name: "Extra Space Storage Property",
      location: "NORTHEAST REGION",
      loanSize: "$5,500,000",
      loanType: "PARTICIPATING BRIDGE LOAN",
      propertyType: "SELF-STORAGE",
      image: "/lovable-uploads/702c4778-1bc8-4b26-9ac4-3f885d228dc2.png"
    },
    {
      id: 21,
      name: "Minnesota Avenue Apartments",
      location: "NORTHEAST REGION",
      loanSize: "$2,650,000",
      loanType: "PARTICIPATING BRIDGE LOAN",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/634f9046-a886-4d1d-81c0-abd82f0a7daf.png"
    },
    {
      id: 22,
      name: "Arista Riverstone",
      location: "SOUTHWEST REGION",
      loanSize: "$28,500,000",
      loanType: "HUD MULTIFAMILY - 221D4",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/61420552-7df9-48c1-b18a-47010f1decaf.png"
    },
    {
      id: 23,
      name: "The Reserve by the Lake",
      location: "SOUTHWEST REGION",
      loanSize: "$22,250,000",
      loanType: "HUD MULTIFAMILY - 221D4",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/5f1c8481-e8d3-4d2a-88d6-54df790bcf6c.png"
    },
    {
      id: 24,
      name: "The Ravinia San Antonio",
      location: "SOUTHWEST REGION",
      loanSize: "$16,100,000",
      loanType: "HUD MULTIFAMILY - 221D4",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/55f40082-fc81-4584-ab22-ec6acc5246a8.png"
    },
    {
      id: 25,
      name: "The Enclave at Woodbridge",
      location: "SOUTHWEST REGION",
      loanSize: "$20,500,000", 
      loanType: "HUD MULTIFAMILY - 221D4",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/54494c6c-43d1-47ee-bdba-724c370778b3.png"
    },
    {
      id: 26,
      name: "The Waterford at Summer Park",
      location: "SOUTHWEST REGION",
      loanSize: "$16,450,000",
      loanType: "HUD MULTIFAMILY - 221D4",
      propertyType: "MULTIFAMILY",
      image: "/lovable-uploads/52f672d2-7426-4ab5-a99f-5955bbbba3de.png"
    },
    {
      id: 27,
      name: "4401 Fortune Place",
      location: "SOUTHEAST REGION",
      loanSize: "$10,180,000",
      loanType: "CORE-PLUS BRIDGE LOAN", 
      propertyType: "INDUSTRIAL",
      image: "/lovable-uploads/530fe815-0792-49e8-86f6-0355f22308eb.png"
    },
    {
      id: 28,
      name: "35-41 Mechanic Street",
      location: "NORTHEAST REGION",
      loanSize: "$2,500,000",
      loanType: "OPPORTUNISTIC BRIDGE LOAN",
      propertyType: "INDUSTRIAL",
      image: "/lovable-uploads/4c4da614-0fa8-433e-a2a3-077a4b57da10.png"
    },
    {
      id: 29,
      name: "Prairie Stone Commons",
      location: "MIDWEST REGION",
      loanSize: "$8,300,000",
      loanType: "CORE BRIDGE LOAN",
      propertyType: "OFFICE",
      image: "/lovable-uploads/4212ae30-dd8d-4c0d-a307-f5116851ce9d.png"
    },
    {
      id: 30,
      name: "Clarendon Hotel & Spa",
      location: "SOUTHWEST REGION",
      loanSize: "$16,500,000",
      loanType: "OPPORTUNISTIC BRIDGE LOAN",
      propertyType: "HOSPITALITY",
      image: "/lovable-uploads/40f41be8-accc-4a72-a71a-e72c8e228281.png"
    },
    {
      id: 31,
      name: "4850 W. Bloomingdale Avenue",
      location: "MIDWEST REGION",
      loanSize: "$3,250,000",
      loanType: "OPPORTUNISTIC BRIDGE LOAN",
      propertyType: "INDUSTRIAL",
      image: "/lovable-uploads/403d76e1-5d7b-4f4c-b865-ee5d118a616d.png"
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
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={transaction.image}
                    alt={transaction.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-garnet-edge/90 backdrop-blur-sm text-silver-mist px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                    {transaction.propertyType}
                  </div>
                </div>
                <CardContent className="p-6 bg-transparent backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-silver-mist mb-4 leading-tight">
                    {transaction.name}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="text-silver-mist/80 text-sm">
                      {transaction.location}
                    </div>
                    
                    <div className="text-garnet-edge text-lg font-semibold">
                      {transaction.loanSize}
                    </div>
                    
                    <div className="text-silver-mist/70 text-sm leading-tight">
                      {transaction.loanType}
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