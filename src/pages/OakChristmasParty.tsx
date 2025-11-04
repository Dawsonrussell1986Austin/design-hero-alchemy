import { Sparkles, Calendar, Users, Music, MapPin, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import christmasOrnament from "@/assets/christmas-ornament.png";
import garyBechtel from "@/assets/gary-bechtel.png";

const OakChristmasParty = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
      <Navigation />
      
      {/* Hero/Welcome Section */}
      <section className="relative px-4 sm:px-6 pt-32 md:pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent-brown/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-garnet-edge/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 text-white/40 animate-float">❄</div>
            <div className="absolute top-40 right-20 text-white/40 animate-float" style={{ animationDelay: '1s' }}>✨</div>
            <div className="absolute bottom-20 left-1/4 text-white/40 animate-float" style={{ animationDelay: '2s' }}>❄</div>
            <div className="absolute top-60 right-1/3 text-white/40 animate-float" style={{ animationDelay: '1.5s' }}>✨</div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-[#e8dcc8] leading-tight tracking-tight opacity-0 animate-[slideUp_0.8s_ease-out_0.2s_forwards]">
                Oak Christmas Party
              </h1>
              <div className="space-y-3 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
                <p className="text-lg sm:text-xl md:text-2xl text-[#e8dcc8]/90 font-body leading-relaxed">
                  Celebrating Another Year of Excellence Together
                </p>
                <div className="flex items-center gap-3 text-[#e8dcc8]/90 pt-2">
                  <Calendar className="w-5 h-5" />
                  <span className="text-base sm:text-lg font-body">December 2025</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end opacity-0 animate-[slideInRight_0.8s_ease-out_0.6s_forwards]">
              <div className="relative">
                <div className="absolute inset-0 bg-gold-leaf/20 blur-2xl rounded-lg"></div>
                <img 
                  src={christmasOrnament} 
                  alt="Christmas ornament decoration" 
                  className="relative w-72 h-auto sm:w-80 md:w-96 lg:w-[28rem] rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from CEO */}
      <section className="py-16 bg-silver-mist">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-obsidian mb-2">Welcome to the Oak Real Estate Partners</h2>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-accent-brown">Holiday Celebration</h2>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="relative grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-12 items-start bg-white rounded-lg shadow-xl p-8 md:p-12 overflow-hidden">
              {/* Decorative gold scrollwork - top left corner */}
              <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gold-leaf" fill="currentColor">
                  <path d="M0,25 Q10,15 20,20 T35,15 Q40,10 45,15 L40,20 Q35,22 30,25 T20,30 Q15,35 10,30 T0,25 Z" />
                  <path d="M25,0 Q15,10 20,20 T15,35 Q10,40 15,45 L20,40 Q22,35 25,30 T30,20 Q35,15 30,10 T25,0 Z" />
                  <circle cx="15" cy="15" r="2" />
                  <circle cx="8" cy="8" r="1" />
                  <circle cx="22" cy="8" r="1" />
                </svg>
              </div>
              
              {/* Decorative gold scrollwork - top right corner */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none transform scale-x-[-1]">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gold-leaf" fill="currentColor">
                  <path d="M0,25 Q10,15 20,20 T35,15 Q40,10 45,15 L40,20 Q35,22 30,25 T20,30 Q15,35 10,30 T0,25 Z" />
                  <path d="M25,0 Q15,10 20,20 T15,35 Q10,40 15,45 L20,40 Q22,35 25,30 T30,20 Q35,15 30,10 T25,0 Z" />
                  <circle cx="15" cy="15" r="2" />
                  <circle cx="8" cy="8" r="1" />
                  <circle cx="22" cy="8" r="1" />
                </svg>
              </div>
              
              {/* Decorative gold scrollwork - bottom right corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 pointer-events-none transform rotate-180">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gold-leaf" fill="currentColor">
                  <path d="M0,25 Q10,15 20,20 T35,15 Q40,10 45,15 L40,20 Q35,22 30,25 T20,30 Q15,35 10,30 T0,25 Z" />
                  <path d="M25,0 Q15,10 20,20 T15,35 Q10,40 15,45 L20,40 Q22,35 25,30 T30,20 Q35,15 30,10 T25,0 Z" />
                  <circle cx="15" cy="15" r="2" />
                  <circle cx="8" cy="8" r="1" />
                  <circle cx="22" cy="8" r="1" />
                </svg>
              </div>
              
              {/* Decorative gold scrollwork - bottom left corner */}
              <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 pointer-events-none transform scale-x-[-1] rotate-180">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gold-leaf" fill="currentColor">
                  <path d="M0,25 Q10,15 20,20 T35,15 Q40,10 45,15 L40,20 Q35,22 30,25 T20,30 Q15,35 10,30 T0,25 Z" />
                  <path d="M25,0 Q15,10 20,20 T15,35 Q10,40 15,45 L20,40 Q22,35 25,30 T30,20 Q35,15 30,10 T25,0 Z" />
                  <circle cx="15" cy="15" r="2" />
                  <circle cx="8" cy="8" r="1" />
                  <circle cx="22" cy="8" r="1" />
                </svg>
              </div>
              
              {/* Left Column - Photo */}
              <div className="flex flex-col items-center lg:items-start space-y-4 relative z-10">
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
              <div className="space-y-5 relative z-10">
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
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Calendar className="w-12 h-12 text-gold-leaf mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-silver-mist mb-4">Event Agenda</h2>
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
                    <p className="text-silver-mist text-xl">{item.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Things to Do Section */}
      <section className="py-16 bg-silver-mist">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <MapPin className="w-12 h-12 text-accent-brown mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-obsidian mb-4">Things to Do</h2>
            <p className="text-deep-petrol text-lg">Make the most of your evening</p>
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
                className="bg-white border-obsidian/10 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="text-5xl mb-3 text-center">{activity.icon}</div>
                  <CardTitle className="text-obsidian text-xl text-center">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-deep-petrol text-center">{activity.description}</p>
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
            <h2 className="text-4xl font-bold text-silver-mist mb-4">Oak Holiday Playlist</h2>
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