import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import TransactionCard from "@/components/TransactionCard";
import { featuredTransactions } from "@/data/transactions";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building, MapPin, DollarSign, Filter } from "lucide-react";

const Transactions = () => {
  const [filteredTransactions, setFilteredTransactions] = useState(featuredTransactions);
  const [filters, setFilters] = useState({
    location: "all",
    propertyType: "all",
    loanType: "all",
    loanSize: "all"
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Extract unique values for filters
  const uniqueLocations = [...new Set(featuredTransactions.map(t => t.location))].sort((a, b) => {
    // Sort regions East to West
    const regionOrder = [
      'NORTHEAST REGION',
      'SOUTHEAST REGION', 
      'MIDWEST REGION',
      'NORTHWEST REGION',
      'SOUTHWEST REGION',
      'WEST REGION'
    ];
    return regionOrder.indexOf(a) - regionOrder.indexOf(b);
  });
  const uniquePropertyTypes = [...new Set(featuredTransactions.map(t => t.propertyType))].sort((a, b) => {
    // Sort by transaction volume/importance
    const propertyOrder = [
      'MULTIFAMILY',      // Most common
      'INDUSTRIAL',       
      'OFFICE',
      'RETAIL',
      'MEDICAL OFFICE',
      'SELF-STORAGE',
      'MIXED USE',
      'HOSPITALITY'
    ];
    return propertyOrder.indexOf(a) - propertyOrder.indexOf(b);
  });
  const uniqueLoanTypes = [...new Set(featuredTransactions.map(t => t.loanType))].sort((a, b) => {
    // Sort by preferred order: Participating, Opportunistic, Core-Plus, Core, HUD
    const loanOrder = [
      'PARTICIPATING BRIDGE LOAN',
      'OPPORTUNISTIC BRIDGE LOAN',
      'CORE-PLUS BRIDGE LOAN',
      'CORE-PLUS BRIDGE',        // Handle inconsistency in data
      'CORE BRIDGE LOAN',
      'HUD MULTIFAMILY - 221D4'
    ];
    return loanOrder.indexOf(a) - loanOrder.indexOf(b);
  }).map(loanType => {
    // Normalize display names
    if (loanType === 'HUD MULTIFAMILY - 221D4') return 'FHA/HUD';
    if (loanType === 'CORE-PLUS BRIDGE') return 'CORE-PLUS BRIDGE LOAN';
    return loanType;
  }).filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates

  // Filter transactions based on selected filters
  const applyFilters = () => {
    let filtered = featuredTransactions;

    if (filters.location !== "all") {
      filtered = filtered.filter(t => t.location === filters.location);
    }

    if (filters.propertyType !== "all") {
      filtered = filtered.filter(t => t.propertyType === filters.propertyType);
    }

    if (filters.loanType !== "all") {
      // Handle filter mapping back to original data
      let originalLoanType = filters.loanType;
      if (filters.loanType === "FHA/HUD") originalLoanType = "HUD MULTIFAMILY - 221D4";
      if (filters.loanType === "CORE-PLUS BRIDGE LOAN") {
        filtered = filtered.filter(t => t.loanType === "CORE-PLUS BRIDGE LOAN" || t.loanType === "CORE-PLUS BRIDGE");
      } else {
        filtered = filtered.filter(t => t.loanType === originalLoanType);
      }
    }

    if (filters.loanSize !== "all") {
      filtered = filtered.filter(t => {
        const amount = parseFloat(t.loanSize.replace(/[$,]/g, ""));
        switch (filters.loanSize) {
          case "under-5m":
            return amount < 5000000;
          case "5m-10m":
            return amount >= 5000000 && amount < 10000000;
          case "10m-20m":
            return amount >= 10000000 && amount < 20000000;
          case "over-20m":
            return amount >= 20000000;
          default:
            return true;
        }
      });
    }

    setFilteredTransactions(filtered);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    
    // Apply filters immediately
    let filtered = featuredTransactions;

    if (newFilters.location !== "all") {
      filtered = filtered.filter(t => t.location === newFilters.location);
    }

    if (newFilters.propertyType !== "all") {
      filtered = filtered.filter(t => t.propertyType === newFilters.propertyType);
    }

    if (newFilters.loanType !== "all") {
      // Handle filter mapping back to original data
      let originalLoanType = newFilters.loanType;
      if (newFilters.loanType === "FHA/HUD") originalLoanType = "HUD MULTIFAMILY - 221D4";
      if (newFilters.loanType === "CORE-PLUS BRIDGE LOAN") {
        filtered = filtered.filter(t => t.loanType === "CORE-PLUS BRIDGE LOAN" || t.loanType === "CORE-PLUS BRIDGE");
      } else {
        filtered = filtered.filter(t => t.loanType === originalLoanType);
      }
    }

    if (newFilters.loanSize !== "all") {
      filtered = filtered.filter(t => {
        const amount = parseFloat(t.loanSize.replace(/[$,]/g, ""));
        switch (newFilters.loanSize) {
          case "under-5m":
            return amount < 5000000;
          case "5m-10m":
            return amount >= 5000000 && amount < 10000000;
          case "10m-20m":
            return amount >= 10000000 && amount < 20000000;
          case "over-20m":
            return amount >= 20000000;
          default:
            return true;
        }
      });
    }

    setFilteredTransactions(filtered);
  };

  const clearFilters = () => {
    setFilters({
      location: "all",
      propertyType: "all", 
      loanType: "all",
      loanSize: "all"
    });
    setFilteredTransactions(featuredTransactions);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Transactions" }
        ]}
      />
      
      {/* Cream background for hero content */}
      <div className="bg-silver-mist">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              {/* Text Content */}
              <div>
                {/* Program Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-garnet-edge/15 text-garnet-edge border border-garnet-edge/30 shadow-sm">
                    Transaction Portfolio
                  </span>
                </div>
                
                
                <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian mb-8 leading-tight">
                  Disciplined execution. Diverse markets. Consistent performance.
                </h1>
                <p className="text-lg lg:text-xl font-body font-normal text-obsidian/80 leading-relaxed mb-8">
                  Our transaction history demonstrates Oak's commitment to disciplined underwriting and strategic asset selection across diverse commercial real estate markets. Each transaction reflects our focus on capital preservation and risk-adjusted returns.
                </p>
                
                {/* Transaction Stats - Under text */}
                <div className="bg-white/60 backdrop-blur-sm border border-obsidian/20 rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-obsidian mb-4 pb-2 border-b border-obsidian/20">
                    Portfolio Overview
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-garnet-edge">{featuredTransactions.length}</p>
                      <p className="text-sm text-obsidian/70">Transactions</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-garnet-edge">8</p>
                      <p className="text-sm text-obsidian/70">Property Types</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-garnet-edge">6</p>
                      <p className="text-sm text-obsidian/70">Regions</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-garnet-edge">Various</p>
                      <p className="text-sm text-obsidian/70">Loan Programs</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-obsidian/20">
                    <p className="text-xs text-obsidian/60 leading-relaxed">
                      Transactions shown include loans from Oak and affiliated entities. Not all loans represent full cycle completions.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image with Overlay Cards */}
              <div className="relative h-full">
                <img 
                  src="/lovable-uploads/a88bb4c5-3244-4ce3-8a84-1ccb5866d937.png"
                  alt="Transaction portfolio illustration"
                  className="w-full h-full object-cover rounded-lg shadow-xl min-h-[600px]"
                />
                
                {/* Glassmorphic Overlay Cards */}
                <div className="absolute inset-0 flex flex-col justify-center space-y-4 p-6">
                  <h2 className="text-xl font-bold text-white text-center drop-shadow-lg mb-2">Market Coverage</h2>
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-4 shadow-lg">
                    <h3 className="text-lg font-bold text-white text-center drop-shadow-lg">Primary Markets</h3>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-4 shadow-lg">
                    <h3 className="text-lg font-bold text-white text-center drop-shadow-lg">Secondary Markets</h3>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-4 shadow-lg">
                    <h3 className="text-lg font-bold text-white text-center drop-shadow-lg">Tertiary Markets</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Combined Filters and Transactions Section */}
      <div className="bg-silver-mist">
        {/* Title Section */}
        <section className="pt-12 pb-8 px-6">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-3xl lg:text-4xl font-display font-medium text-obsidian leading-tight">
                Oak Real Estate Partner Transactions
              </h1>
            </div>
          </div>
        </section>

        {/* Filters Section - Seamless */}
        <section className="pb-8 px-6">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  {/* Location Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-obsidian/70 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Location
                    </label>
                    <Select value={filters.location} onValueChange={(value) => handleFilterChange("location", value)}>
                      <SelectTrigger className="bg-white border-obsidian/20 text-obsidian">
                        <SelectValue placeholder="All Locations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        {uniqueLocations.map(location => (
                          <SelectItem key={location} value={location}>{location}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Property Type Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-obsidian/70 flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Property Type
                    </label>
                    <Select value={filters.propertyType} onValueChange={(value) => handleFilterChange("propertyType", value)}>
                      <SelectTrigger className="bg-white border-obsidian/20 text-obsidian">
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        {uniquePropertyTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Loan Size Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-obsidian/70 flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      Loan Size
                    </label>
                    <Select value={filters.loanSize} onValueChange={(value) => handleFilterChange("loanSize", value)}>
                      <SelectTrigger className="bg-white border-obsidian/20 text-obsidian">
                        <SelectValue placeholder="All Sizes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Sizes</SelectItem>
                        <SelectItem value="under-5m">Under $5M</SelectItem>
                        <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                        <SelectItem value="10m-20m">$10M - $20M</SelectItem>
                        <SelectItem value="over-20m">Over $20M</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Loan Type Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-obsidian/70 flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Loan Type
                    </label>
                    <Select value={filters.loanType} onValueChange={(value) => handleFilterChange("loanType", value)}>
                      <SelectTrigger className="bg-white border-obsidian/20 text-obsidian">
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        {uniqueLoanTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-sm text-obsidian/60">
                    Showing {filteredTransactions.length} of {featuredTransactions.length} transactions
                  </p>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={clearFilters}
                    className="text-obsidian/70 hover:text-obsidian hover:bg-obsidian/10"
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transactions Grid Section */}
        <section className="pb-12 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {filteredTransactions.map((transaction) => (
                <TransactionCard key={transaction.id} transaction={transaction} />
              ))}
            </div>

            {filteredTransactions.length === 0 && (
              <div className="text-center py-12">
                <p className="text-obsidian/70 text-lg">No transactions match your current filters.</p>
                <Button 
                  onClick={clearFilters}
                  className="mt-4 bg-accent-brown hover:bg-accent-brown/90 text-white"
                >
                  Clear All Filters
                </Button>
              </div>
            )}

            <div className="text-center mt-12">
              <p className="text-obsidian/70 text-sm mb-2">
                Transactions include loans from Oak Real Estate Partners and affiliated entities including Red Oak Capital Holdings and Johnson Capital Multifamily. Not all loans represent full cycle completions.
              </p>
              <p className="text-obsidian/70 text-sm">
                * Past performance does not guarantee future results. All investments involve risk of loss.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Transactions;