const VideoPlayerSectionDraft2 = () => {
  return (
    <div className="relative bg-cream py-16 md:py-24 overflow-hidden">
      {/* Ghost typography */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:flex items-center justify-start">
        <span className="font-display font-medium italic text-abyss/[0.04] text-[16rem] md:text-[24rem] lg:text-[34rem] leading-none -ml-8 md:-ml-16 lg:-ml-24 select-none">
          Watch
        </span>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-abyss mb-4 md:mb-6">
              See How Oak Operates
            </h2>
            <p className="text-abyss/70 text-base md:text-lg font-body max-w-3xl mx-auto leading-relaxed">
              Watch Chief Strategy Officer, Ray Davis and Chief Sales and Distribution Officer, Kevin Kennedy discuss Commercial Real Estate lending and how Oak operates.
            </p>
          </div>

          {/* Video Player Container */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 md:border-4 border-gold-accent/30">
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
