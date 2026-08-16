import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HERO_WORDS = ['VINS', 'JOHN.'];
const SUBTITLE_ITEMS = ['VIDEOGRAPHER', 'EDITOR', 'STORYTELLER'];

const letterVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -60, filter: 'blur(6px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      delay: 1.2 + i * 0.04,
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays on mobile
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked, that's fine — fallback image will show
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-start justify-end px-6 md:px-12 lg:px-20 pb-16 md:pb-24 overflow-hidden"
    >
      {/* ── Video Background ────────────────────────────── */}
      {/* 
        TODO: Replace with your real showreel video.
        Place your showreel MP4 in public/ and update the src below.
        Example: src="/showreel.mp4"
      */}
      <video
        ref={videoRef}
        className="video-bg brightness-[0.2] saturate-[0.3]"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero_reel.jpg"
      >
        {/* [NEED YOUR INPUT] Add your showreel video source here */}
        {/* <source src="/showreel.mp4" type="video/mp4" /> */}
      </video>

      {/* ── Overlays ────────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-[1]" />
      <div className="absolute inset-0 z-[1] opacity-20 pixel-grid" />

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative z-[2] w-full max-w-7xl">
        {/* Mono label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-mono-tech text-[0.55rem] tracking-[0.55em] text-[#CAFF00]/60 mb-6 uppercase"
        >
          ▪ PIXEL WHITE STUDIO // DUBAI · UAE
        </motion.div>

        {/* ── Kinetic Hero Typography ───────────────────── */}
        <div className="overflow-hidden">
          <h1 className="font-heading font-black text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.9] tracking-tight text-white uppercase" style={{ perspective: '800px' }}>
            {HERO_WORDS.map((word, wordIdx) => (
              <span key={wordIdx} className="inline-block mr-[2vw]">
                {word.split('').map((letter, letterIdx) => {
                  const globalIdx = wordIdx * 5 + letterIdx;
                  return (
                    <motion.span
                      key={letterIdx}
                      custom={globalIdx}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className={`inline-block ${word === 'JOHN.' ? 'text-[#CAFF00] drop-shadow-[0_0_40px_rgba(202,255,0,0.3)]' : ''}`}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex items-center gap-3 mt-6 md:mt-8"
        >
          {SUBTITLE_ITEMS.map((item, i) => (
            <React.Fragment key={item}>
              {i > 0 && <span className="text-[#CAFF00] text-[0.4rem]">◆</span>}
              <span className="font-mono-tech text-[0.65rem] md:text-[0.75rem] tracking-[0.35em] text-[#B5B6C7] uppercase">
                {item}
              </span>
            </React.Fragment>
          ))}
        </motion.div>

        {/* Industry tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.6 }}
          className="font-mono-tech text-[0.58rem] tracking-[0.3em] text-white/30 mt-3 uppercase"
        >
          Corporate · EPC · Real Estate · Media Production
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="flex flex-wrap gap-4 mt-10 md:mt-14"
        >
          <a
            href="#case-studies"
            className="magnetic-btn font-mono-tech text-[0.65rem] tracking-[0.3em] text-black bg-[#CAFF00] px-8 py-4 uppercase border border-[#CAFF00] hover:bg-white hover:shadow-[0_0_30px_rgba(202,255,0,0.4)] transition-all duration-300"
          >
            View Case Studies
          </a>
          <a
            href="#contact"
            className="magnetic-btn font-mono-tech text-[0.65rem] tracking-[0.3em] text-[#B5B6C7] px-8 py-4 uppercase border border-[#B5B6C7]/20 hover:border-[#CAFF00] hover:text-[#CAFF00] hover:bg-[#CAFF00]/5 transition-all duration-300"
          >
            Hire Me
          </a>
        </motion.div>
      </div>

      {/* ── Scroll Cue ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[2]"
      >
        <span className="font-mono-tech text-[0.45rem] tracking-[0.5em] text-[#B5B6C7]/40 uppercase">
          Scroll
        </span>
        <span className="text-[#CAFF00] text-xs terminal-cursor">▋</span>
      </motion.div>

      {/* ── Corner Decorations ──────────────────────────── */}
      <div className="absolute top-24 right-6 md:right-12 z-[2] text-right hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
        >
          <div className="font-mono-tech text-[0.48rem] tracking-[0.3em] text-[#CAFF00]/25 uppercase">
            // Available for work
          </div>
          <div className="font-mono-tech text-[0.48rem] tracking-[0.3em] text-[#B5B6C7]/20 uppercase mt-1">
            Dubai · Abu Dhabi · Remote
          </div>
        </motion.div>
      </div>
    </section>
  );
};
