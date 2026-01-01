import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { WifiOff, Mic2, Wand2, Share2, Layers, Heart } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Wand2 className="w-8 h-8 text-cyan-400" />,
      title: "AI Recommendations",
      description: "Our smart algorithm understands your mood better than your best friend.",
      gradient: "from-cyan-500/20 to-blue-500/5"
    },
    {
      icon: <Mic2 className="w-8 h-8 text-fuchsia-400" />,
      title: "Real-Time Lyrics",
      description: "Sing along with time-synced lyrics that glow to the beat.",
      gradient: "from-fuchsia-500/20 to-pink-500/5"
    },
    {
      icon: <WifiOff className="w-8 h-8 text-emerald-400" />,
      title: "Offline Mode",
      description: "Keep the vibe going even when you're off the grid.",
      gradient: "from-emerald-500/20 to-green-500/5"
    },
    {
      icon: <Layers className="w-8 h-8 text-violet-400" />,
      title: "Immersive Audio",
      description: "Spatial audio support for a concert-like experience in your ears.",
      gradient: "from-violet-500/20 to-purple-500/5"
    },
    {
      icon: <Share2 className="w-8 h-8 text-orange-400" />,
      title: "Social Listening",
      description: "Host listening parties and jam with friends in real-time.",
      gradient: "from-orange-500/20 to-red-500/5"
    },
    {
      icon: <Heart className="w-8 h-8 text-rose-400" />,
      title: "Mood Matching",
      description: "Select your vibe and let us curate the perfect sonic landscape.",
      gradient: "from-rose-500/20 to-red-500/5"
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Packed with Power" 
          subtitle="Everything you need to elevate your listening experience to the next dimension." 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className={`glass-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.1)] group overflow-hidden relative`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors border border-white/5">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-glow transition-all">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};