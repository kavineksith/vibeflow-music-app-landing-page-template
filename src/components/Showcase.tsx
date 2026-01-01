import React from 'react';
import { SectionHeading } from './ui/SectionHeading';

const MockupScreen: React.FC<{ title: string; imageUrl: string; rotate?: string }> = ({ title, imageUrl, rotate = '0deg' }) => (
  <div 
    className="relative group transition-all duration-500 hover:z-20 hover:scale-105"
    style={{ transform: `rotate(${rotate})` }}
  >
    <div className="relative w-64 h-[500px] bg-black rounded-[2.5rem] border-4 border-gray-800 shadow-2xl overflow-hidden mx-auto">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-6 left-0 w-full text-center">
        <p className="text-white font-bold text-lg">{title}</p>
      </div>
    </div>
  </div>
);

export const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Stunning Interface" 
          subtitle="Designed to be fluid, intuitive, and absolutely beautiful on every screen." 
        />

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:-space-x-12 pt-10">
          <MockupScreen 
            title="Discovery" 
            imageUrl="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop" 
            rotate="-6deg"
          />
          <MockupScreen 
            title="Player" 
            imageUrl="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop" 
            rotate="0deg"
          />
          <MockupScreen 
            title="Lyrics" 
            imageUrl="https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1000&auto=format&fit=crop" 
            rotate="6deg"
          />
        </div>
      </div>
    </section>
  );
};