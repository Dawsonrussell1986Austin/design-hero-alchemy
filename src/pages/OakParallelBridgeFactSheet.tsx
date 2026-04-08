import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OakParallelBridgeFactSheet = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      <Navigation />
      
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-silver-mist leading-tight tracking-tight">
              Oak Parallel Bridge Credit Fund
            </h1>
            <p className="text-lg text-silver-mist/80 leading-relaxed font-body font-normal max-w-2xl mx-auto">
              Fund Fact Sheet
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-silver-mist">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 text-center">
            <p className="text-deep-petrol font-body leading-relaxed">
              Download the Oak Parallel Bridge Credit Fund Fact Sheet below.
            </p>
            <Button
              size="lg"
              className="bg-accent-brown hover:bg-accent-brown/90 text-cream font-body font-medium"
              asChild
            >
              <a href="/documents/Fact_Sheet_-_Oak_Parallel_Bridge_Credit_Fund.pdf" download target="_blank" rel="noopener noreferrer">
                <FileDown className="mr-2 h-5 w-5" />
                Download Fact Sheet
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OakParallelBridgeFactSheet;
