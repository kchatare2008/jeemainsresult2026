import { Award, TrendingUp, Users, Phone, MapPin, Sparkles, Target } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <header className="relative z-10 backdrop-blur-xl bg-white/10 border-b border-white/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-blue-900 to-orange-900 p-3 rounded-full">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-orange-300">
                  Padhye Education
                </h1>
                <p className="text-blue-200 text-sm tracking-wider">Institute for Engineering Entrance Exams • Since 1988</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-blue-200 text-sm font-semibold">JEE Mains 2026 Results</span>
          </div>

          <h2 className="text-6xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-300 to-orange-300 leading-tight">
            Outstanding
            <br />Performance!
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Celebrating exceptional achievements of our brilliant students in JEE Mains Attempt-1 2026
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: TrendingUp, color: 'from-green-400 to-emerald-500', title: '99%+', desc: '9 Students Scored Above 99%ile', delay: '0s' },
            { icon: Award, color: 'from-blue-400 to-cyan-500', title: '98%+', desc: '29 Students Scored Above 98%ile', delay: '0.2s' },
            { icon: Target, color: 'from-orange-400 to-red-500', title: '97%+', desc: '42 Students Scored Above 97%ile', delay: '0.4s' }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative animate-bounce-in"
                style={{ animationDelay: stat.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300 rounded-2xl" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}></div>

                <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-8 text-center hover:border-white/40 transition-all duration-300 transform group-hover:scale-105">
                  <div className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-shadow`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-5xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                    {stat.title}
                  </h3>
                  <p className="text-gray-300 font-semibold">{stat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative mb-16 animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-orange-500/30 blur-3xl rounded-3xl"></div>

          <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 p-8 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 text-center mb-8">
              <h3 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-orange-300 mb-4">
                Complete Results
              </h3>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-orange-400 mx-auto rounded-full"></div>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="/result.jpg"
                alt="JEE Mains 2026 Results - Padhye Education"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-500 group-hover:brightness-110"
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/40 via-slate-900/40 to-orange-900/40 backdrop-blur-xl rounded-3xl border border-white/20 text-white p-12 mb-12 animate-slide-up">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-orange-300">
              Join Our Success Story
            </h3>
            <p className="text-blue-200 text-lg">Be part of the legacy since 1988</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                campus: 'Akola Campus',
                address1: 'Near Telephone Exchange Office,',
                address2: 'Toshniwal Layout, Akola',
                phone: '8956325653'
              },
              {
                campus: 'Kanheri Campus',
                address1: 'Barshitakli Road,',
                address2: 'Near Kanheri Sarap, Akola',
                phone: '9021714415'
              }
            ].map((campus, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 blur-lg opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>

                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform group-hover:scale-105">
                  <h4 className="text-2xl font-bold mb-4 flex items-center text-white">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-orange-400 flex items-center justify-center mr-3">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    {campus.campus}
                  </h4>
                  <p className="text-blue-100 mb-2">{campus.address1}</p>
                  <p className="text-blue-100 mb-6">{campus.address2}</p>
                  <a
                    href={`tel:${campus.phone}`}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{campus.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="relative z-10 bg-gradient-to-t from-slate-950 to-transparent backdrop-blur-lg border-t border-white/10 text-gray-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold mb-2">© 2026 Padhye Education, Akola. All rights reserved.</p>
          <p className="text-xs text-gray-500">Empowering students since 1988 • Inspiring excellence through quality education</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
