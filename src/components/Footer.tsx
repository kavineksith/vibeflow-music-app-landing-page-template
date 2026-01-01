import React from 'react';
import { Music, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/10 bg-black pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-500">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">VibeFlow</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              The next generation music player built for those who live in the moment. Experience sound in a whole new light.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Copyright</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© 2024 VibeFlow Music. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 hover:text-fuchsia-400 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 hover:text-cyan-400 transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 hover:text-red-500 transition-all">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 hover:text-white transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};