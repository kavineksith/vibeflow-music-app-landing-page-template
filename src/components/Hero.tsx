import React from 'react';
import { Play, ArrowRight, Zap } from 'lucide-react';
import { GlassButton } from './ui/GlassButton';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/30 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-cyan-500/30 text-cyan-300 text-sm font-semibold tracking-wide animate-float">
            <Zap className="w-4 h-4 fill-cyan-300" />
            <span>#1 Music App for Gen Z</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
            Feel the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 text-glow">
              Music.
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Experience sound like never before with AI-driven playlists, immersive 8D audio, and a community that vibrates on your frequency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <GlassButton variant="primary" glow className="text-lg">
              Download Now <ArrowRight className="w-5 h-5" />
            </GlassButton>
            <GlassButton variant="secondary" className="text-lg">
              <Play className="w-5 h-5 fill-white" /> Try Demo
            </GlassButton>
          </div>
          
          <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-70">
            <div>
              <p className="text-2xl font-bold">10M+</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Downloads</p>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div>
              <p className="text-2xl font-bold">4.9/5</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Rating</p>
            </div>
          </div>
        </div>

        {/* Visual / Mockup */}
        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative w-[300px] h-[600px] md:w-[350px] md:h-[700px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl animate-float">
            {/* Screen Content */}
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-gray-900">
              {/* Header inside phone */}
              <div className="h-full w-full relative bg-[url('https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Now Playing UI Mockup */}
                <div className="absolute bottom-0 w-full p-6 pb-12 flex flex-col gap-6 glass-card rounded-t-[2.5rem]">
                   {/* Waveform */}
                   <div className="flex justify-center items-end gap-1 h-12 mb-2">
                     {[...Array(12)].map((_, i) => (
                       <div 
                         key={i} 
                         className="w-1.5 bg-cyan-400 rounded-full animate-pulse"
                         style={{ 
                           height: `${Math.random() * 100}%`,
                           animationDelay: `${i * 0.1}s` 
                         }}
                       />
                     ))}
                   </div>
                   
                   <div className="text-center space-y-1">
                     <h3 className="text-2xl font-bold text-white">Neon Nights</h3>
                     <p className="text-purple-300">The Midnight</p>
                   </div>

                   <div className="flex justify-between items-center px-4">
                      <div className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/20 cursor-pointer">
                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[10px] border-r-white transform rotate-180" />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-fuchsia-600 to-cyan-500 shadow-[0_0_30px_rgba(255,0,255,0.4)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-white ml-1" />
                      </div>
                      <div className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/20 cursor-pointer">
                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 -left-10 md:left-0 p-4 glass rounded-2xl animate-float animation-delay-2000 flex items-center gap-3 max-w-[200px]">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">🎵</div>
            <div>
              <p className="text-xs text-gray-400">Now Trending</p>
              <p className="font-bold text-sm">Hyperpop Hits</p>
            </div>
          </div>

          <div className="absolute bottom-40 -right-4 md:right-0 p-4 glass rounded-2xl animate-float animation-delay-4000 flex items-center gap-3 max-w-[200px]">
             <div className="w-10 h-10 rounded-full overflow-hidden">
               <img src="https://picsum.photos/100/100?random=1" alt="User" className="w-full h-full object-cover" />
             </div>
             <div>
               <p className="text-xs text-gray-400">Friend Activity</p>
               <p className="font-bold text-sm">Sarah is listening...</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};