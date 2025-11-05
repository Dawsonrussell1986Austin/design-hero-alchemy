import { Sparkles, Calendar, Users, Music, MapPin, Heart, Plane, Clock, Utensils, PartyPopper, Coffee, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import christmasOrnament from "@/assets/christmas-ornament.png";
import garyBechtel from "@/assets/gary-bechtel.png";
import merryOakChristmasHeader from "@/assets/merry-oak-christmas-header.png";
import winterCityBackground from "@/assets/winter-city-background.png";
import qrCodePlaylist from "@/assets/qr-code-playlist-placeholder.png";
import christmasGiftScene from "@/assets/christmas-gift-scene.png";

const OakChristmasParty = () => {
  const [currentActivity, setCurrentActivity] = useState(0);
  
  const activities = [
    {
      title: "NASCAR Hall of Fame",
      link: "https://www.nascarhall.com/",
      content: "Located right in Uptown Charlotte, this museum showcases racing history with interactive exhibits and simulator rides — great for a quick visit or pre-dinner stop."
    },
    {
      title: "Little Sugar Creek Greenway / Freedom Park",
      link: "https://www.carolinathreadtrailmap.org/trails/trail/little-sugar-creek-brandywine-to-7th",
      content: "A scenic stroll or casual bike ride along the greenway or around Freedom Park offers a relaxed escape without leaving the city."
    },
    {
      title: "🛍️ SouthPark Shopping & Stroll",
      content: (
        <div className="space-y-3">
          <p>
            <a 
              href="https://www.simon.com/mall/southpark" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-brown hover:underline font-semibold"
            >
              SouthPark Mall
            </a> – Just steps from your hotel. Browse luxury brands, enjoy upscale dining, or simply take a stroll through the elegant mall atmosphere.
          </p>
          <p>
            <a 
              href="https://southparkclt.org/go/symphony-park" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-brown hover:underline font-semibold"
            >
              Symphony Park & Green Spaces
            </a> – A quick walk or short ride allows you to enjoy a tranquil outdoor setting, perfect for a coffee break or a moment of calm.
          </p>
        </div>
      )
    },
    {
      title: "🍽️ Dining & Craft Cocktails",
      content: "Explore restaurants and rooftop bars in SouthPark's Sharon Road/Monroe Road corridor. Great spots for pre-dinner drinks or casual bites."
    },
    {
      title: "🎨 Art & Culture (15 Minutes or Less)",
      content: (
        <div className="space-y-3">
          <p>
            Head into Uptown Charlotte (≈ 10–12 min) for quick visits like the Bechtler Museum of Modern Art or the Levine Center for the Arts complex.
          </p>
          <p>
            For a peaceful escape: <a 
              href="https://winghavengardens.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-brown hover:underline font-semibold"
            >
              Wing Haven Gardens & Bird Sanctuary
            </a> – A hidden gem for a relaxing walk in nature, only ~8–10 minutes away.
          </p>
        </div>
      )
    },
    {
      title: "☕ Quick Relaxation",
      content: (
        <div className="space-y-3">
          <p>
            Grab a coffee or tea and lounge at a café near the hotel. Use the time to recharge and enjoy the SouthPark surroundings.
          </p>
          <p>
            Consider a short stop at the hotel spa or nearby wellness studio for a refresh during your stay.
          </p>
        </div>
      )
    }
  ];

  const nextActivity = () => {
    setCurrentActivity((prev) => (prev + 1) % activities.length);
  };

  const prevActivity = () => {
    setCurrentActivity((prev) => (prev - 1 + activities.length) % activities.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      <Navigation />
      
      {/* Hero/Welcome Section */}
      <section className="relative pt-20" style={{ backgroundColor: 'hsl(var(--header-blue))' }}>
        <div className="container mx-auto px-6 py-8">
          <img 
            src={merryOakChristmasHeader} 
            alt="A Very Merry Oak Christmas" 
            className="w-full max-w-5xl mx-auto h-auto object-contain"
          />
        </div>
      </section>

      {/* Message from CEO */}
      <section className="py-12 bg-silver-mist">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-obsidian mb-1">Welcome to the Oak Real Estate Partners</h2>
            <h2 className="text-2xl md:text-3xl font-display font-medium text-accent-brown">Holiday Celebration</h2>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[350px_1fr] gap-6 lg:gap-8 items-start bg-white rounded-lg shadow-xl p-6 md:p-8">
              {/* Left Column - Photo */}
              <div className="flex flex-col items-center lg:items-start space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent-brown/10 blur-xl rounded-lg"></div>
                  <img 
                    src={garyBechtel} 
                    alt="Gary Bechtel, CEO" 
                    className="relative w-full h-auto rounded-lg shadow-lg object-cover"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-display font-medium text-obsidian">Gary Bechtel</h3>
                  <p className="text-accent-brown font-body font-semibold">Chief Executive Officer</p>
                </div>
              </div>
              
              {/* Right Column - Message */}
              <div className="space-y-5">
                <div className="border-l-4 border-accent-brown pl-6">
                  <h3 className="text-xl md:text-2xl font-display font-medium text-obsidian mb-2">A Message from Our CEO</h3>
                </div>
                
                <div className="text-deep-petrol space-y-4 text-base md:text-lg leading-relaxed font-body">
                  <p>
                    As we close out another remarkable year, I want to take a moment to thank each of you — our team, partners, and guests — for being part of Oak's continued growth and success.
                  </p>
                  <p>
                    This evening is about connection, appreciation, and celebration. Every milestone we've achieved this year is the result of your dedication, collaboration, and belief in our mission. Together, we've built more than a company — we've built a community defined by trust, excellence, and shared purpose.
                  </p>
                  <p>
                    I hope tonight reminds you how much your contributions matter, not only to Oak's success but to the people beside you. Enjoy the evening — great food, great company, and the well-deserved chance to relax and celebrate all we've accomplished.
                  </p>
                  <p>
                    Here's to a strong close to 2025 and an even brighter year ahead.
                  </p>
                  <p className="text-accent-brown font-semibold pt-4 italic">
                    Warm regards,<br />
                    Gary Bechtel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="py-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${winterCityBackground})` }}
        />
        <div className="absolute inset-0 bg-obsidian/80" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-[#e8dcc8] mb-4">A Very Merry Oak Christmas - Holiday Party Agenda</h2>
            <div className="flex items-center justify-center gap-2 text-[#e8dcc8]/90 text-lg">
              <Calendar className="w-5 h-5 text-gold-leaf" />
              <p>December 3 – 5, 2025</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Wednesday */}
            <div className="bg-white/5 border-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-display font-medium text-[#e8dcc8] mb-6">Wednesday, December 3 – Arrival & Welcome</h3>
              
              <div className="space-y-6 text-[#e8dcc8]/90">
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <Plane className="w-5 h-5 text-gold-leaf mt-0.5 flex-shrink-0" />
                    <p className="font-semibold text-[#e8dcc8]">Arrivals – Guests arrive in Charlotte and check in at:</p>
                  </div>
                  <p className="text-lg ml-7">Renaissance Charlotte SouthPark</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=5501+Carnegie+Blvd+Charlotte+NC+28209" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-7 text-gold-leaf hover:underline inline-block"
                  >
                    5501 Carnegie Blvd | Charlotte, NC 28209
                  </a>
                </div>
                
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <Clock className="w-5 h-5 text-gold-leaf mt-0.5 flex-shrink-0" />
                    <p className="font-semibold text-[#e8dcc8]">5:00 PM (Optional) – Welcome Happy Hour at Legion Brewing South Park</p>
                  </div>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=5610+Carnegie+Blvd+Charlotte+NC+28209" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mb-1 ml-7 text-gold-leaf hover:underline inline-block"
                  >
                    5610 Carnegie Blvd (0.1 mi from hotel)
                  </a>
                  <p className="italic ml-7">Join us for casual drinks before the big night!</p>
                </div>
              </div>
            </div>

            {/* Thursday */}
            <div className="bg-white/5 border-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-display font-medium text-[#e8dcc8] mb-6">Thursday, December 4 – The Main Event</h3>
              
              <div className="space-y-6 text-[#e8dcc8]/90">
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <Clock className="w-5 h-5 text-gold-leaf mt-0.5 flex-shrink-0" />
                    <p className="font-semibold text-[#e8dcc8]">5:00 – 6:30 PM | Happy Hour</p>
                  </div>
                  <p className="text-lg text-[#e8dcc8] ml-7">Del Frisco's Double Eagle Steakhouse</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=4725+Piedmont+Row+Dr+Suite+170+Charlotte+NC+28209" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mb-1 ml-7 text-gold-leaf hover:underline inline-block"
                  >
                    4725 Piedmont Row Dr, Suite 170 | Charlotte, NC 28209
                  </a>
                  <p className="mb-2 font-medium ml-7">Del Frisco's – Mezzanine Point Room</p>
                  <p className="italic ml-7">Enjoy cocktails, conversation, and holiday cheer.</p>
                </div>
                
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-gold-leaf mt-0.5 flex-shrink-0" />
                    <p className="font-semibold text-[#e8dcc8]">6:30 – 7:00 PM | Holiday Message from Gary Bechtel, CEO</p>
                  </div>
                  <p className="italic ml-7">A short toast celebrating our team, partnerships, and another great year.</p>
                </div>
                
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <Utensils className="w-5 h-5 text-gold-leaf mt-0.5 flex-shrink-0" />
                    <p className="font-semibold text-[#e8dcc8]">7:00 PM | Dinner Service Begins</p>
                  </div>
                  <p className="italic ml-7">Order from the evening's curated menu.</p>
                </div>
                
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <PartyPopper className="w-5 h-5 text-gold-leaf mt-0.5 flex-shrink-0" />
                    <p className="font-semibold text-[#e8dcc8]">9:30 PM | Evening Concludes</p>
                  </div>
                  <p className="italic ml-7">Thank you for celebrating with us!</p>
                </div>
              </div>
            </div>

            {/* Friday */}
            <div className="bg-white/5 border-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-display font-medium text-[#e8dcc8] mb-6">Friday, December 5 – Farewell & Departures</h3>
              
              <div className="space-y-4 text-[#e8dcc8]/90">
                <div className="flex items-start gap-2">
                  <Coffee className="w-5 h-5 text-gold-leaf mt-0.5 flex-shrink-0" />
                  <p>Enjoy breakfast at your leisure before checkout.</p>
                </div>
                <div className="flex items-start gap-2">
                  <Plane className="w-5 h-5 text-gold-leaf mt-0.5 flex-shrink-0" />
                  <p>Depart Charlotte – wishing you safe travels and a happy holiday season!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do Section */}
      <section className="py-16 bg-silver-mist overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <MapPin className="w-10 h-10 text-accent-brown mx-auto mb-3" />
            <h2 className="text-3xl md:text-4xl font-display font-medium text-obsidian mb-4">Things to Do While You're Here</h2>
            <p className="text-deep-petrol text-lg font-body">Relax. Explore. Enjoy your time between events in SouthPark and Charlotte.</p>
          </div>

          <div className="max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-[1fr_500px] gap-12 items-center">
              {/* Left Column - Carousel Content */}
              <div className="relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl p-10 relative overflow-hidden">
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 w-2 h-full bg-accent-brown"></div>
                  
                  <div className="min-h-[280px] flex flex-col">
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl md:text-3xl font-display font-medium text-obsidian">
                          {activities[currentActivity].link ? (
                            <a 
                              href={activities[currentActivity].link}
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-accent-brown hover:underline transition-colors"
                            >
                              {activities[currentActivity].title}
                            </a>
                          ) : (
                            <span className="text-obsidian">{activities[currentActivity].title}</span>
                          )}
                        </h3>
                        <div className="text-sm text-deep-petrol/60 font-body">
                          {currentActivity + 1} / {activities.length}
                        </div>
                      </div>
                      <div className="text-deep-petrol font-body leading-relaxed text-lg">
                        {typeof activities[currentActivity].content === 'string' ? (
                          <p>{activities[currentActivity].content}</p>
                        ) : (
                          activities[currentActivity].content
                        )}
                      </div>
                    </div>
                    
                    {/* Navigation Controls */}
                    <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-200">
                      <button
                        onClick={prevActivity}
                        className="group flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-accent-brown text-accent-brown hover:bg-accent-brown hover:text-white transition-all duration-300 font-semibold"
                        aria-label="Previous activity"
                      >
                        <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        Previous
                      </button>
                      
                      {/* Pagination Dots */}
                      <div className="flex gap-2.5">
                        {activities.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentActivity(index)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                              index === currentActivity 
                                ? 'bg-accent-brown w-10' 
                                : 'bg-gray-300 w-2.5 hover:bg-accent-brown/50'
                            }`}
                            aria-label={`Go to activity ${index + 1}`}
                          />
                        ))}
                      </div>
                      
                      <button
                        onClick={nextActivity}
                        className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-brown text-white hover:bg-accent-brown/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                        aria-label="Next activity"
                      >
                        Next
                        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative lg:-ml-20">
                <div className="relative">
                  {/* Decorative background element */}
                  <div className="absolute -top-6 -right-6 w-full h-full bg-accent-brown/10 rounded-2xl"></div>
                  
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-h-[450px]">
                    <img 
                      src={christmasGiftScene} 
                      alt="Christmas gift scene with decorated tree and golden bokeh lights" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oak Holiday Playlist with QR Code */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-silver-mist mb-4">🌲 A Very Merry Oak Christmas Playlist</h2>
          </div>

          <div className="max-w-3xl mx-auto mb-8 text-center space-y-4">
            <p className="text-silver-mist text-lg font-body leading-relaxed">
              We've created something special to add a little extra cheer to your stay.
            </p>
            <p className="text-silver-mist text-lg font-body leading-relaxed">
              Scan the QR code below to listen to <span className="font-semibold text-gold-leaf">A Very Merry Oak Christmas</span> — a hand-picked playlist featuring some of our team's favorite holiday tunes. It's a mix of timeless classics and modern favorites to help you get in the holiday spirit.
            </p>
          </div>

          <Card className="max-w-md mx-auto bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="bg-white p-6 rounded-lg inline-block mb-6">
                <img 
                  src={qrCodePlaylist} 
                  alt="Scan to access A Very Merry Oak Christmas Playlist" 
                  className="w-64 h-64 object-contain"
                />
              </div>
              <p className="text-silver-mist text-lg mb-2">Scan to Access Spotify Playlist</p>
              <p className="text-slate-whisper">Available on Spotify, Apple Music, and YouTube</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OakChristmasParty;