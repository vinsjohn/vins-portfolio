// BUG FIX: Add passive: true to scroll listener for performance
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#case-studies' },
    { name: 'Portfolio', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[2000] flex items-center justify-between px-6 md:px-12 transition-all duration-300 border-b ${
          isScrolled ? 'h-[70px] bg-black/95 backdrop-blur-md border-[#CAFF00]/10' : 'h-[90px] bg-black/90 backdrop-blur-sm border-[#CAFF00]/5'
        }`}
      >
        <a href="#hero" className="flex flex-col gap-0.5 group">
          <div className="font-mono-tech text-[0.82rem] tracking-[0.42em] text-white flex items-center gap-2 uppercase">
            <span className="text-[#CAFF00] text-[0.55rem]">▪</span> PIXEL WHITE STUDIO
          </div>
          <div className="font-mono-tech text-[0.5rem] tracking-[0.38em] text-[#B5B6C7] pl-3.5 uppercase">
            • BY <span className="text-[#CAFF00]/50 group-hover:text-[#CAFF00] transition-colors">VINS JOHN</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-9">
          <nav>
            <ul className="flex gap-7">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-mono-tech text-[0.6rem] tracking-[0.28em] text-[#B5B6C7] hover:text-[#CAFF00] uppercase transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#CAFF00] shadow-[0_0_4px_#CAFF00] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <span className="font-mono-tech text-[0.5rem] tracking-[0.3em] text-[#CAFF00]/35 uppercase">// V3.1</span>
          <a 
            href="#contact" 
            className="font-mono-tech text-[0.6rem] tracking-[0.28em] text-black bg-[#CAFF00] px-5 py-2.5 uppercase hover:bg-white transition-colors"
          >
            Book a Call
          </a>
        </div>

        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[2001] bg-black flex flex-col items-center justify-center gap-9"
          >
            <button 
              className="absolute top-8 right-8 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-4xl font-black text-white hover:text-[#CAFF00] uppercase tracking-widest transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
