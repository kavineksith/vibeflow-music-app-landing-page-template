import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Play } from 'lucide-react';

const PlaylistCard: React.FC<{ title: string; subtitle: string; image: string; color: string }> = ({ title, subtitle, image, color }) => (
  <div className="group relative w-64 h-80 flex-shrink-0 cursor-pointer rounded-3xl overflow-hidden">
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
    
    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
      <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color }}>{subtitle}</p>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    </div>

    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-sm">
      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center pl-1 hover:scale-110 transition-transform">
        <Play className="w-8 h-8 fill-white text-white" />
      </div>
    </div>
  </div>
);

export const Playlists: React.FC = () => {
  return (
    <section id="playlists" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading title="Trending Now" subtitle="See what the world is vibing to right this second." align="left" />
        
        <div className="flex gap-6 overflow-x-auto pb-12 pt-4 hide-scrollbar select-none cursor-grab active:cursor-grabbing">
          <PlaylistCard 
            title="Neon Drive" 
            subtitle="Retrowave" 
            image="https://images.unsplash.com/photo-1555664424-778a69022365?q=80&w=1000&auto=format&fit=crop" 
            color="#00ffff" 
          />
          <PlaylistCard 
            title="Sad Boi Hours" 
            subtitle="Lo-Fi / Chill" 
            image="https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop" 
            color="#a855f7" 
          />
          <PlaylistCard 
            title="Gym Pump" 
            subtitle="Phonk / Trap" 
            image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" 
            color="#ff00ff" 
          />
          <PlaylistCard 
            title="Golden Hour" 
            subtitle="Indie Pop" 
            image="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1000&auto=format&fit=crop" 
            color="#fbbf24" 
          />
          <PlaylistCard 
            title="Underground" 
            subtitle="Techno" 
            image="https://images.unsplash.com/photo-1574169208507-84376194878f?q=80&w=1000&auto=format&fit=crop" 
            color="#ef4444" 
          />
        </div>
      </div>
    </section>
  );
};