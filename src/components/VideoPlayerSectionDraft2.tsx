
const VideoPlayerSectionDraft2 = () => {

  useEffect(() => {
    // Load Wistia embed script
    const script = document.createElement('script');
    script.src = 'https://fast.wistia.com/embed/wn4w0z7jch.js';
    script.async = true;
    script.type = 'module';
    document.head.appendChild(script);

    const playerScript = document.createElement('script');
    playerScript.src = 'https://fast.wistia.com/player.js';
    playerScript.async = true;
    document.head.appendChild(playerScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(playerScript);
    };
  }, []);

  return (
    <div className="relative bg-cream py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-display font-medium text-abyss mb-6">
              See How Oak Operates
            </h2>
            <p className="text-abyss/70 text-lg font-body max-w-3xl mx-auto leading-relaxed">
              A specialist CRE lending platform. Principal-governed credit. Institutional standards on every transaction.
            </p>
          </div>

          {/* Video Player Container */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-accent/30 bg-obsidian/50 backdrop-blur-sm">
              {/* Decorative gradient overlay on edges */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/10 via-transparent to-deep-petrol/10 pointer-events-none z-10"></div>
              
              {/* Video Player */}
                <div className="relative aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/wnxzr0hs-0U?si=fzb8XDXqx8csrItL" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-deep-petrol/30 rounded-full blur-3xl"></div>
          </div>

          {/* Bottom text */}
          <div className="text-center mt-12">
            <p className="text-abyss/50 text-sm font-body max-w-2xl mx-auto italic">
              "Where strength meets stewardship in every transaction"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerSectionDraft2;
