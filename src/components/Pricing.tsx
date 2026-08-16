// NEW: Pricing section matching Services design system
import React from 'react';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-black py-24 px-6 md:px-12">
      <div className="font-mono-tech text-[0.57rem] tracking-[0.45em] text-[#CAFF00] flex items-center gap-3.5 uppercase mb-3.5">
        <span className="w-5 h-[1px] bg-[#CAFF00] shadow-[0_0_4px_#CAFF00]" />
        Investment
      </div>
      <h2 className="font-heading text-3xl md:text-6xl font-black text-white uppercase tracking-wider leading-tight mb-12">
        PACKAGES & <span className="text-[#CAFF00]">PRICING</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#CAFF00]/10 border border-[#CAFF00]/10">
        
        {/* CARD 1: ESSENTIAL */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="bg-[#1F2029] p-10 md:p-12 relative overflow-hidden group hover:bg-[#CAFF00]/5 hover:border-[#CAFF00]/30 transition-colors"
        >
          <div className="absolute top-0 left-0 w-[3px] h-0 bg-[#CAFF00] shadow-[0_0_8px_#CAFF00] transition-all duration-400 group-hover:h-full" />
          <span className="font-mono-tech text-[0.56rem] tracking-[0.38em] text-[#CAFF00] block mb-4.5">// 01</span>
          <span className="text-3xl block mb-3.5 opacity-80">🎬</span>
          <div className="font-heading text-xl font-black text-white uppercase tracking-wider mb-3.5">ESSENTIAL PACKAGE</div>
          <div className="mb-5">
            <div className="font-mono-tech text-xl text-[#CAFF00]">from AED 1,500</div>
            <div className="font-mono-tech text-[0.6rem] text-[#CAFF00]/70 mt-1">~ £350 / $440</div>
          </div>
          <p className="font-light text-[0.86rem] leading-relaxed text-[#B5B6C7] mb-5">
            For growing brands and startups needing professional visual content to establish their presence.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {['HALF-DAY SHOOT', '1 LOCATION', '1-MIN FINAL VIDEO', 'COLOUR GRADING', 'DIGITAL DELIVERY', 'HD FORMAT'].map(tag => (
              <span key={tag} className="font-mono-tech text-[0.54rem] tracking-[0.2em] text-[#B5B6C7]/45 border border-[#B5B6C7]/12 px-3 py-1.5 uppercase">{tag}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 font-mono-tech text-[0.58rem] tracking-[0.28em] text-[#CAFF00] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            Book Essential →
          </a>
        </motion.div>

        {/* CARD 2: PROFESSIONAL */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-[#1F2029] p-10 md:p-12 relative overflow-hidden group hover:bg-[#CAFF00]/5 hover:border-[#CAFF00]/30 transition-colors"
        >
          <div className="absolute top-0 left-0 w-[3px] h-0 bg-[#CAFF00] shadow-[0_0_8px_#CAFF00] transition-all duration-400 group-hover:h-full" />
          <div className="mb-4">
            <span className="font-mono-tech text-[0.5rem] tracking-[0.3em] text-black bg-[#CAFF00] px-3 py-1 uppercase inline-block mb-3">
              Most Popular
            </span>
            <span className="font-mono-tech text-[0.56rem] tracking-[0.38em] text-[#CAFF00] block">// 02</span>
          </div>
          <span className="text-3xl block mb-3.5 opacity-80">🎥</span>
          <div className="font-heading text-xl font-black text-white uppercase tracking-wider mb-3.5">PROFESSIONAL PACKAGE</div>
          <div className="mb-5">
            <div className="font-mono-tech text-xl text-[#CAFF00]">from AED 3,500</div>
            <div className="font-mono-tech text-[0.6rem] text-[#CAFF00]/70 mt-1">~ £800 / $1,000</div>
          </div>
          <p className="font-light text-[0.86rem] leading-relaxed text-[#B5B6C7] mb-5">
            For established corporate and EPC/PMC clients requiring broadcast-quality content with full post-production.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {['FULL-DAY SHOOT', '3 LOCATIONS', '3-MIN VIDEO + 60S CUT', 'CINEMATIC GRADING', 'MOTION GRAPHICS', 'DRONE AVAILABLE', '48HR RUSH OPTION', 'LICENSED MUSIC'].map(tag => (
              <span key={tag} className="font-mono-tech text-[0.54rem] tracking-[0.2em] text-[#B5B6C7]/45 border border-[#B5B6C7]/12 px-3 py-1.5 uppercase">{tag}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 font-mono-tech text-[0.58rem] tracking-[0.28em] text-[#CAFF00] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            Book Professional →
          </a>
        </motion.div>

        {/* CARD 3: ENTERPRISE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-[#1F2029] p-10 md:p-12 relative overflow-hidden group hover:bg-[#CAFF00]/5 hover:border-[#CAFF00]/30 transition-colors"
        >
          <div className="absolute top-0 left-0 w-[3px] h-0 bg-[#CAFF00] shadow-[0_0_8px_#CAFF00] transition-all duration-400 group-hover:h-full" />
          <span className="font-mono-tech text-[0.56rem] tracking-[0.38em] text-[#CAFF00] block mb-4.5">// 03</span>
          <span className="text-3xl block mb-3.5 opacity-80">🏢</span>
          <div className="font-heading text-xl font-black text-white uppercase tracking-wider mb-3.5">ENTERPRISE / BESPOKE</div>
          <div className="mb-5">
            <div className="font-mono-tech text-xl text-[#CAFF00]">Custom Pricing</div>
            <div className="font-mono-tech text-[0.6rem] text-[#CAFF00]/70 mt-1">Tailored to your project scope</div>
          </div>
          <p className="font-light text-[0.86rem] leading-relaxed text-[#B5B6C7] mb-5">
            For large-scale productions, multi-day shoots, documentary-style brand films, and global projects.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {['MULTI-DAY PRODUCTION', 'FULL CREW', 'UNLIMITED LOCATIONS', 'COMPLETE POST-SUITE', 'DEDICATED PM', 'SOURCE FILES', 'WORLDWIDE TRAVEL', 'PRIORITY PIPELINE'].map(tag => (
              <span key={tag} className="font-mono-tech text-[0.54rem] tracking-[0.2em] text-[#B5B6C7]/45 border border-[#B5B6C7]/12 px-3 py-1.5 uppercase">{tag}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 font-mono-tech text-[0.58rem] tracking-[0.28em] text-[#CAFF00] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            Request a Quote →
          </a>
        </motion.div>

      </div>

      <p className="font-mono-tech text-[0.56rem] tracking-[0.3em] text-[#B5B6C7]/50 text-center mt-12 uppercase">
        // Starting rates shown. Final pricing varies by scope, location & timeline.
        AED + GBP + USD pricing available. Payment plans on request.
      </p>
    </section>
  );
};