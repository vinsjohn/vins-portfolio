import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

/* ─── Stats data ────────────────────────────────────────── */
// [NEED YOUR INPUT] Update these with your real numbers
const STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '5+', label: 'Years in Industry' },
  { value: '6+', label: 'Industries Served' },
  { value: '3', label: 'Countries' },
];

/* ─── Named clients ─────────────────────────────────────── */
// [NEED YOUR INPUT] Add/remove client names you have permission to display
const CLIENT_NAMES = [
  'OZR Real Estate',
  'Creative Hut Institute',
  'EPC Contractors UAE',
  'PMC Consultancy',
  'Pixel White Studio',
  'Dubai Media Partners',
];

export const ProofBar: React.FC = () => {
  return (
    <section id="proof" className="bg-black relative overflow-hidden">
      {/* ── Stats Row ───────────────────────────────────── */}
      <div className="border-y border-[#CAFF00]/10 py-16 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="font-heading text-4xl md:text-6xl font-black text-[#CAFF00] leading-none group-hover:drop-shadow-[0_0_20px_rgba(202,255,0,0.3)] transition-all">
                {stat.value}
              </div>
              <div className="font-mono-tech text-[0.52rem] tracking-[0.35em] text-[#B5B6C7]/50 uppercase mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Client Marquee ──────────────────────────────── */}
      <div className="border-b border-[#CAFF00]/10 py-6 overflow-hidden">
        <div className="section-label px-6 md:px-12 lg:px-20 mb-4">
          Trusted By
        </div>
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2].map((dup) => (
            <div key={dup} className="flex">
              {CLIENT_NAMES.map((name) => (
                <span
                  key={`${dup}-${name}`}
                  className="font-heading text-lg md:text-2xl font-extrabold text-white/15 uppercase tracking-wider px-8 md:px-14 hover:text-[#CAFF00]/40 transition-colors"
                >
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Testimonials ────────────────────────────────── */}
      <div className="px-6 md:px-12 lg:px-20 py-20">
        <div className="section-label mb-4">Client Reviews</div>
        <h2 className="font-heading text-3xl md:text-6xl font-black text-white uppercase tracking-wider leading-tight mb-12">
          WHAT THEY <span className="text-[#CAFF00]">SAY</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#B5B6C7]/10">
          {TESTIMONIALS.map((testi, idx) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-black p-8 md:p-10 relative overflow-hidden hover:bg-[#CAFF00]/5 transition-colors"
            >
              {/* Giant quote mark */}
              <div className="absolute top-2 right-4 font-heading text-8xl font-black text-[#CAFF00]/5 leading-none select-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-[#CAFF00] text-[0.7rem] mb-4 drop-shadow-[0_0_6px_rgba(202,255,0,0.22)]">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-light text-[0.87rem] leading-relaxed text-[#B5B6C7] italic mb-6">
                "{testi.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-[#CAFF00]/30 flex items-center justify-center font-heading text-base font-extrabold text-[#CAFF00]">
                  {testi.initial}
                </div>
                <div>
                  <div className="font-heading text-[0.76rem] font-extrabold text-white uppercase tracking-wider">
                    {testi.author}
                  </div>
                  <div className="font-mono-tech text-[0.52rem] tracking-[0.2em] text-[#CAFF00] uppercase mt-0.5">
                    {testi.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
