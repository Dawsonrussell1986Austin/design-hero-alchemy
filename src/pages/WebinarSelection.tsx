import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const WebinarSelection = () => {
  const webinars = [
    {
      id: "red-oak-investor",
      title: "Red Oak Quarterly Financial Update",
      description: "Monthly updates on Red Oak investments, portfolio performance, and market insights for our investor community.",
      icon: TrendingUp,
      color: "text-accent-brown",
      bgColor: "bg-accent-brown/10",
      link: "/webinar-registration?type=red-oak-investor"
    },
    {
      id: "oak-accounting",
      title: "Oak Institutional Quarterly Financial Update",
      description: "Comprehensive accounting review sessions covering financial statements, tax strategies, and compliance updates.",
      icon: Calculator,
      color: "text-deep-petrol",
      bgColor: "bg-deep-petrol/10",
      link: "/webinar-registration?type=oak-accounting"
    },
    {
      id: "oak-investment",
      title: "Oak Real Estate Partners Investor Webinar",
      description: "In-depth analysis of investment opportunities, deal structures, and strategic portfolio management.",
      icon: Calendar,
      color: "text-graphite-fog",
      bgColor: "bg-graphite-fog/10",
      link: "/webinar-registration?type=oak-investment"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-silver-mist leading-tight tracking-tight mb-6">
            Select Your Webinar
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-silver-mist/80 leading-relaxed font-body font-normal max-w-3xl mx-auto">
            Choose the webinar that best fits your interests. Each session provides exclusive insights, expert analysis, and opportunities to engage with our team.
          </p>
        </div>
      </section>

      {/* Webinar Selection Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {webinars.map((webinar) => {
              const IconComponent = webinar.icon;
              return (
                <Card 
                  key={webinar.id} 
                  className="bg-silver-mist border-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  <CardHeader className="flex-1">
                    <div className={`w-16 h-16 ${webinar.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className={`h-8 w-8 ${webinar.color}`} />
                    </div>
                    <CardTitle className="text-2xl font-display font-medium text-obsidian">
                      {webinar.title}
                    </CardTitle>
                    <CardDescription className="text-deep-petrol font-body leading-relaxed pt-2">
                      {webinar.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Link to={webinar.link}>
                      <Button 
                        className="w-full bg-accent-brown hover:bg-accent-brown/90 text-silver-mist font-body"
                        size="lg"
                      >
                        Register Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 px-4 bg-silver-mist/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl lg:text-3xl font-display font-medium text-silver-mist mb-4">
            What to Expect
          </h2>
          <p className="text-silver-mist/80 font-body leading-relaxed mb-8">
            All webinars feature live Q&A sessions, expert presentations, and exclusive insights you won't find anywhere else. Sessions are typically held monthly and run for 45-60 minutes.
          </p>
          <div className="grid gap-6 md:grid-cols-3 text-left">
            <div className="space-y-2">
              <div className="text-accent-brown font-display font-medium">Live Sessions</div>
              <p className="text-sm text-silver-mist/70 font-body">Interact directly with our team and ask questions in real-time</p>
            </div>
            <div className="space-y-2">
              <div className="text-accent-brown font-display font-medium">Expert Insights</div>
              <p className="text-sm text-silver-mist/70 font-body">Learn from industry veterans with decades of experience</p>
            </div>
            <div className="space-y-2">
              <div className="text-accent-brown font-display font-medium">Exclusive Access</div>
              <p className="text-sm text-silver-mist/70 font-body">Get information and analysis not available to the general public</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebinarSelection;
