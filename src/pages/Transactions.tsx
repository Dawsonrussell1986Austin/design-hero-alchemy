import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import TransactionCard from "@/components/TransactionCard";
import { featuredTransactions } from "@/data/transactions";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building, MapPin, DollarSign, Filter } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { FinancialServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";

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
      'HOSPITALITY',
      'SENIOR LIVING'
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
      <SEOHead
        title="Transaction Portfolio"
        description="Oak Real Estate Partners transaction history. Browse our portfolio of commercial real estate loans across multifamily, industrial, office, retail, and healthcare properties nationwide."
        canonicalUrl="/transactions"
      />
      <FinancialServiceSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://oakrealestatepartners.com/' },
          { name: 'Transactions', url: 'https://oakrealestatepartners.com/transactions' }
        ]}
      />
      {/* Navigation + Hero on dark background (matches homepage) */}
      <div className="relative bg-gradient-to-br from-abyss via-obsidian to-graphite-fog overflow-hidden">
        <Navigation />

        {/* Breadcrumb */}
        <div className="relative z-20">
          <Breadcrumb
            items={[
              { label: "Transactions" }
            ]}
          />
        </div>

        {/* Hero Section - homepage style */}
        <section className="relative z-20 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-24 overflow-hidden">
          {/* Ghost typography */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:flex items-center justify-end">
            <span className="font-display font-medium text-cream/[0.04] text-[18rem] md:text-[26rem] lg:text-[34rem] leading-none -mr-20 md:-mr-32 lg:-mr-48 select-none">
              Oak
            </span>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* Eyebrow Label */}
            <p className="text-xs sm:text-sm text-gold-accent/70 font-body uppercase tracking-[0.25em] mb-4 sm:mb-8">
              Transaction Portfolio
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-normal leading-[1.1] tracking-tight mb-6 sm:mb-10">
              <span className="text-cream">Disciplined Execution.</span>
              <br />
              <span className="text-cream">Diverse Markets.</span>
              <br />
              <span className="text-gold-accent">Consistent Performance.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg lg:text-xl text-silver-mist/60 max-w-3xl mx-auto leading-relaxed font-body font-normal mb-12 sm:mb-16">
              Oak's transaction history reflects disciplined underwriting and strategic asset selection across diverse commercial real estate markets — focused on capital preservation and risk-adjusted returns.
            </p>

            {/* Statistics Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2">{featuredTransactions.length}</div>
                <div className="text-[10px] sm:text-xs font-body text-cream/60 uppercase tracking-wider">Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2">$395M+</div>
                <div className="text-[10px] sm:text-xs font-body text-cream/60 uppercase tracking-wider">Total Loan Volume</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2">9</div>
                <div className="text-[10px] sm:text-xs font-body text-cream/60 uppercase tracking-wider">Property Types</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-gold-accent mb-2">6</div>
                <div className="text-[10px] sm:text-xs font-body text-cream/60 uppercase tracking-wider">Regions</div>
              </div>
            </div>

            {/* Footnote */}
            <div className="mt-12">
              <p className="text-xs text-silver-mist/40 font-body leading-relaxed max-w-3xl mx-auto">
                Transactions shown include loans from Oak and affiliated entities. Not all loans represent full cycle completions.
              </p>
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
              <h1 className="text-3xl lg:text-4xl font-display font-medium text-abyss leading-tight">
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
                    <label className="text-sm font-medium text-abyss/70 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Location
                    </label>
                    <Select value={filters.location} onValueChange={(value) => handleFilterChange("location", value)}>
                      <SelectTrigger className="bg-cream border-abyss/20 text-abyss">
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
                    <label className="text-sm font-medium text-abyss/70 flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Property Type
                    </label>
                    <Select value={filters.propertyType} onValueChange={(value) => handleFilterChange("propertyType", value)}>
                      <SelectTrigger className="bg-cream border-abyss/20 text-abyss">
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
                    <label className="text-sm font-medium text-abyss/70 flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      Loan Size
                    </label>
                    <Select value={filters.loanSize} onValueChange={(value) => handleFilterChange("loanSize", value)}>
                      <SelectTrigger className="bg-cream border-abyss/20 text-abyss">
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
                    <label className="text-sm font-medium text-abyss/70 flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Loan Type
                    </label>
                    <Select value={filters.loanType} onValueChange={(value) => handleFilterChange("loanType", value)}>
                      <SelectTrigger className="bg-cream border-abyss/20 text-abyss">
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
                  <p className="text-sm text-abyss/60">
                    Showing {filteredTransactions.length} of {featuredTransactions.length} transactions
                  </p>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={clearFilters}
                    className="text-abyss/70 hover:text-abyss hover:bg-abyss/10"
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
                <p className="text-abyss/70 text-lg">No transactions match your current filters.</p>
                <Button 
                  onClick={clearFilters}
                  className="mt-4 bg-gold-accent hover:bg-gold-accent/90 text-cream"
                >
                  Clear All Filters
                </Button>
              </div>
            )}

            <div className="text-center mt-12">
              <p className="text-abyss/70 text-sm mb-2">
                Transactions include loans from Oak Real Estate Partners and affiliated entities including Red Oak Capital Holdings and Johnson Capital Multifamily. Not all loans represent full cycle completions.
              </p>
              <p className="text-abyss/70 text-sm">
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