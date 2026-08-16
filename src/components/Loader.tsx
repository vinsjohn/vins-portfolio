import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STATUSES = ['INITIALIZING SYSTEM...', 'LOADING ASSETS...', 'CALIBRATING PIXEL GRID...', 'SYSTEM READY.'];

export const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const statusIndex = Math.min(Math.floor(progress / 25), 3);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center gap-6"
        >
          <div className="font-mono-tech text-[0.7rem] tracking-[0.55em] text-white/50 uppercase">
            ▪ PIXEL <span className="text-[#CAFF00]">WHITE</span> STUDIO
          </div>
          <div className="w-[220px] h-[1px] bg-[#CAFF00]/10 overflow-hidden">
            <motion.div 
              className="h-full bg-[#CAFF00] shadow-[0_0_8px_#CAFF00]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="font-mono-tech text-[0.58rem] tracking-[0.3em] text-[#CAFF00] uppercase">
            {STATUSES[statusIndex]}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
