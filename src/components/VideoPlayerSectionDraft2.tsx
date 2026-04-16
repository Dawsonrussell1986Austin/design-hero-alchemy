const VideoPlayerSectionDraft2 = () => {
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-accent/30">
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
