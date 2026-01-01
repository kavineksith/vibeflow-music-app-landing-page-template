import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Showcase } from './components/Showcase';
import { Playlists } from './components/Playlists';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Playlists />
        <Pricing />
        
        {/* Bottom CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="glass-card rounded-[3rem] p-12 md:p-24 border-t border-white/20 shadow-[0_0_100px_rgba(0,255,255,0.1)]">
              <h2 className="text-5xl md:text-7xl font-black mb-8">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">Vibe?</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-3">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" className="w-5 h-5 invert" alt="Apple" />
                   App Store
                </button>
                <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all flex items-center justify-center gap-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" className="w-6 h-6" alt="Android" />
                  Google Play
                </button>
              </div>
            </div>
          </div>
          {/* Background Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-fuchsia-600/20 blur-[150px] -z-10" />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;