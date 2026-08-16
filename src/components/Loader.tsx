import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LINES = [
  { text: '> PIXEL_WHITE_STUDIO v3.2.0', delay: 0 },
  { text: '> INITIALIZING SYSTEM...', delay: 200 },
  { text: '> loading kernel modules .............. OK', delay: 400 },
  { text: '> mounting display .................... OK', delay: 700 },
  { text: '> calibrating color matrix ............ OK', delay: 1000 },
  { text: '> loading portfolio assets ............ OK', delay: 1300 },
  { text: '> connecting to DUBAI_NODE ............ OK', delay: 1600 },
  { text: '> VINS JOHN — SENIOR VIDEOGRAPHER', delay: 1900 },
  { text: '> SYSTEM READY. LAUNCHING...', delay: 2200 },
];

export const Loader: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.delay);
      timers.push(timer);
    });

    // Glitch and exit
    const glitchTimer = setTimeout(() => {
      setIsGlitching(true);
    }, 2600);
    timers.push(glitchTimer);

    const exitTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    timers.push(exitTimer);

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
          className={`fixed inset-0 z-[99999] bg-black flex flex-col items-start justify-center px-8 md:px-20 ${isGlitching ? 'glitch-text' : ''}`}
          ref={containerRef}
        >
          {/* Scanline overlay on loader */}
          <div className="absolute inset-0 pointer-events-none bg-repeating-linear-gradient opacity-10"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(202,255,0,0.02) 2px, rgba(202,255,0,0.02) 4px)'
            }}
          />

          {/* Studio name */}
          <div className="font-mono-tech text-[0.6rem] tracking-[0.55em] text-[#CAFF00]/30 uppercase mb-8">
            ▪ PIXEL WHITE STUDIO
          </div>

          {/* Terminal lines */}
          <div className="space-y-1 max-w-2xl">
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={`font-mono-tech text-[0.65rem] md:text-[0.75rem] tracking-[0.15em] uppercase ${
                  line.text.includes('OK') ? 'text-[#CAFF00]/60' :
                  line.text.includes('READY') ? 'text-[#CAFF00]' :
                  line.text.includes('VINS JOHN') ? 'text-white' :
                  'text-[#B5B6C7]/50'
                }`}
              >
                {line.text}
              </motion.div>
            ))}
          </div>

          {/* Blinking cursor */}
          {visibleLines < BOOT_LINES.length && (
            <div className="font-mono-tech text-[0.75rem] text-[#CAFF00] mt-2 terminal-cursor">▋</div>
          )}

          {/* Progress bar */}
          <div className="mt-10 w-full max-w-xs">
            <div className="w-full h-[2px] bg-[#CAFF00]/10 overflow-hidden">
              <motion.div
                className="h-full bg-[#CAFF00] shadow-[0_0_8px_#CAFF00]"
                initial={{ width: '0%' }}
                animate={{ width: `${(visibleLines / BOOT_LINES.length) * 100}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>
            <div className="font-mono-tech text-[0.48rem] tracking-[0.3em] text-[#B5B6C7]/30 uppercase mt-2">
              {Math.round((visibleLines / BOOT_LINES.length) * 100)}% COMPLETE
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
