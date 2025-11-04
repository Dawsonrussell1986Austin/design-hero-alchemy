import { Sparkles, Calendar, Users, Music, MapPin, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import christmasOrnament from "@/assets/christmas-ornament.png";

const OakChristmasParty = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      <Navigation />
      
      {/* Hero/Welcome Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-white/20 animate-float">❄</div>
          <div className="absolute top-40 right-20 text-white/20 animate-float" style={{ animationDelay: '1s' }}>✨</div>
          <div className="absolute bottom-20 left-1/4 text-white/20 animate-float" style={{ animationDelay: '2s' }}>❄</div>
          <div className="absolute top-60 right-1/3 text-white/20 animate-float" style={{ animationDelay: '1.5s' }}>✨</div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
            <div className="flex-1 text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fadeInUp">
                Oak Christmas Party
              </h1>
              <p className="text-xl md:text-2xl text-slate-whisper animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                Celebrating Another Year of Excellence Together
              </p>
            </div>
            <div className="flex-shrink-0 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <img 
                src={christmasOrnament} 
                alt="Christmas ornament decoration" 
                className="w-64 h-auto md:w-80 lg:w-96 rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-gold-leaf animate-fadeInUp mt-12" style={{ animationDelay: '0.4s' }}>
            <Calendar className="w-5 h-5" />
            <span className="text-lg">December 2025</span>
          </div>
        </div>
      </section>

      {/* Message from CEO */}
      <section className="py-16 bg-obsidian/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Heart className="w-8 h-8 text-gold-leaf" />
                <CardTitle className="text-3xl text-white">A Message from Our CEO</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-slate-whisper space-y-4 text-lg leading-relaxed">
              <p>
                Dear Oak Family,
              </p>
              <p>
                As we gather to celebrate this holiday season, I'm filled with immense gratitude for each and every one of you. This year has been remarkable, and it's your dedication, innovation, and unwavering commitment that has made Oak Real Estate Partners the success it is today.
              </p>
              <p>
                The holidays are a time to reflect on our achievements and look forward to the possibilities ahead. Together, we've not only met our goals but exceeded them, creating lasting value for our clients and building something truly special.
              </p>
              <p>
                Thank you for being part of this incredible journey. Here's to a joyful holiday season and an even brighter year ahead!
              </p>
              <p className="text-gold-leaf font-semibold pt-4">
                With appreciation and warm wishes,<br />
                [CEO Name]
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Calendar className="w-12 h-12 text-gold-leaf mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Event Agenda</h2>
            <p className="text-slate-whisper text-lg">Your evening at a glance</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { time: "6:00 PM", event: "Arrival & Cocktail Reception", icon: "🥂" },
              { time: "7:00 PM", event: "Welcome Remarks & CEO Address", icon: "🎤" },
              { time: "7:30 PM", event: "Dinner Service Begins", icon: "🍽️" },
              { time: "8:30 PM", event: "Awards & Recognition", icon: "🏆" },
              { time: "9:00 PM", event: "Dancing & Entertainment", icon: "💃" },
              { time: "11:00 PM", event: "Event Concludes", icon: "✨" },
            ].map((item, index) => (
              <Card 
                key={index} 
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="flex items-center gap-6 p-6">
                  <span className="text-4xl">{item.icon}</span>
                  <div className="flex-1">
                    <p className="text-gold-leaf font-semibold text-lg">{item.time}</p>
                    <p className="text-white text-xl">{item.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Things to Do Section */}
      <section className="py-16 bg-obsidian/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <MapPin className="w-12 h-12 text-gold-leaf mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Things to Do</h2>
            <p className="text-slate-whisper text-lg">Make the most of your evening</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Photo Booth",
                description: "Capture memories with colleagues in our festive photo booth",
                icon: "📸"
              },
              {
                title: "Secret Santa Exchange",
                description: "Participate in our annual gift exchange tradition",
                icon: "🎁"
              },
              {
                title: "Holiday Cocktails",
                description: "Enjoy signature drinks at our premium open bar",
                icon: "🍹"
              },
              {
                title: "Dance Floor",
                description: "Show off your moves to holiday classics and favorites",
                icon: "🕺"
              },
              {
                title: "Networking Lounge",
                description: "Connect with colleagues in our cozy lounge area",
                icon: "💼"
              },
              {
                title: "Dessert Bar",
                description: "Indulge in gourmet desserts and holiday treats",
                icon: "🍰"
              }
            ].map((activity, index) => (
              <Card 
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="text-5xl mb-3 text-center">{activity.icon}</div>
                  <CardTitle className="text-white text-xl text-center">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-whisper text-center">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Oak Holiday Playlist with QR Code */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Music className="w-12 h-12 text-gold-leaf mx-auto mb-4 animate-pulse" />
            <h2 className="text-4xl font-bold text-white mb-4">Oak Holiday Playlist</h2>
            <p className="text-slate-whisper text-lg">Scan to enjoy our curated holiday music collection</p>
          </div>

          <Card className="max-w-md mx-auto bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="bg-white p-6 rounded-lg inline-block mb-6">
                {/* Placeholder for QR Code */}
                <div className="w-64 h-64 bg-gradient-to-br from-obsidian to-graphite-fog flex items-center justify-center rounded">
                  <div className="text-white/30 text-center">
                    <Music className="w-16 h-16 mx-auto mb-2" />
                    <p className="text-sm">QR Code</p>
                    <p className="text-xs">Scan with your phone</p>
                  </div>
                </div>
              </div>
              <p className="text-white text-lg mb-2">Scan to Access Spotify Playlist</p>
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