// BUG FIX: Add cinematic background image behind existing content
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-10 pt-32 pb-24 overflow-hidden">
      {/* Background Layers */}
      <img 
        src="https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=1920&q=80" 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover brightness-[0.25] z-[-2]"
      />
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(202,255,0,0.04)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(31,32,41,0.8)_0%,transparent_50%)]" />
      </div>
      <div className="absolute inset-0 z-[-1] opacity-30 pixel-grid" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="font-mono-tech text-[0.6rem] tracking-[0.55em] text-[#B5B6C7] mb-8 uppercase"
      >
        NEXT GEN CREATIVE STUDIO // DUBAI · UAE · WORLDWIDE
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="font-heading font-black text-5xl md:text-8xl tracking-[0.06em] leading-[1.05] text-white uppercase mb-4"
      >
        VINS <span className="text-[#CAFF00] drop-shadow-[0_0_24px_rgba(202,255,0,0.22)]">JOHN.</span>
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="font-mono-tech text-[0.68rem] tracking-[0.38em] text-[#B5B6C7] mt-4 leading-relaxed uppercase"
      >
        Senior Videographer & Video Editor<br />
        <strong className="text-[#CAFF00] font-normal">Corporate · EPC · Real Estate · Media</strong>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.8 }}
        className="flex items-center gap-2.5 mt-4 font-mono-tech text-[0.58rem] tracking-[0.35em] text-white/50 uppercase"
      >
        <span className="text-[#CAFF00] animate-pulse">◉</span> Dubai, UAE — Abu Dhabi — Remote & On-Site Worldwide
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-4 mt-12"
      >
        <a href="#work" className="font-mono-tech text-[0.65rem] tracking-[0.3em] text-black bg-[#CAFF00] px-8 py-4 uppercase border border-[#CAFF00] hover:bg-[#CAFF00]/80 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(202,255,0,0.4)] transition-all duration-300">
          View Portfolio
        </a>
        <a href="#reel" className="font-mono-tech text-[0.65rem] tracking-[0.3em] text-[#B5B6C7] bg-transparent px-8 py-4 uppercase border border-[#B5B6C7]/25 hover:border-[#CAFF00] hover:bg-[#CAFF00]/10 hover:text-[#CAFF00] hover:scale-[1.03] transition-all duration-300">
          Watch Showreel
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="hidden md:flex flex-wrap justify-center gap-2 mt-14 max-w-[760px]"
      >
        {['Corporate Video Production', 'Video Editing', 'Presentation Design', 'Podcast Recording', 'Digital Media', 'Visual Storytelling'].map((svc) => (
          <div key={svc} className="font-mono-tech text-[0.56rem] tracking-[0.25em] text-[#B5B6C7]/50 border border-[#B5B6C7]/10 px-3.5 py-1.5 uppercase hover:text-[#CAFF00] hover:border-[#CAFF00]/30 transition-all">
            {svc}
          </div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce"
      >
        <span className="font-mono-tech text-[0.48rem] tracking-[0.45em] text-[#B5B6C7] uppercase">Scroll</span>
        <span className="text-[#CAFF00] text-sm">↓</span>
      </motion.div>
    </section>
  );
};
