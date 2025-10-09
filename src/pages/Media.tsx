import SimplePageHeader from "@/components/SimplePageHeader";
import emailBanner from "@/assets/email-banner.png";
import thumbnail from "@/assets/thumbnail.png";

const Media = () => {
  return (
    <div className="min-h-screen bg-background">
      <SimplePageHeader title="Media" />
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <img 
            src={emailBanner} 
            alt="Oak Partners Email Banner" 
            className="w-full h-auto"
          />
          <img 
            src={thumbnail} 
            alt="Who is Oak Real Estate Partners" 
            className="w-full h-auto"
          />
          <iframe 
            src="https://go.oakrepartners.com/l/1105131/2025-10-09/b4jkzt" 
            width="100%" 
            height="500" 
            style={{ border: 0 }}
            title="Media Form"
          />
        </div>
      </div>
    </div>
  );
};

export default Media;
