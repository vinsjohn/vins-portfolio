import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCard = ({ value, label, delay }: { value: number, label: string, delay: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="bg-[#1F2029] p-11 text-center hover:bg-[#CAFF00]/5 transition-colors"
    >
      <div className="font-heading text-4xl md:text-6xl font-black text-[#CAFF00] drop-shadow-[0_0_28px_rgba(202,255,0,0.22)] mb-2.5">
        {count}+
      </div>
      <div className="font-mono-tech text-[0.6rem] tracking-[0.35em] text-[#B5B6C7] uppercase">
        {label}
      </div>
    </motion.div>
  );
};

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="bg-[#1F2029] py-24 px-6 md:px-12">
      <div className="text-center mb-14">
        <div className="font-mono-tech text-[0.57rem] tracking-[0.45em] text-[#CAFF00] flex items-center justify-center gap-3.5 uppercase mb-3.5">
          <span className="w-5 h-[1px] bg-[#CAFF00] shadow-[0_0_4px_#CAFF00]" />
          Committed to Excellence
        </div>
        <div className="font-mono-tech text-[0.58rem] tracking-[0.42em] text-[#B5B6C7] uppercase">
          Numbers that speak for themselves
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#CAFF00]/10 border border-[#CAFF00]/10">
        <StatCard value={150} label="Projects Delivered" delay={0.1} />
        <StatCard value={5} label="Years Experience" delay={0.2} />
        <StatCard value={60} label="Corporate Clients" delay={0.3} />
        <StatCard value={3} label="Countries Active" delay={0.4} />
      </div>
    </section>
  );
};
