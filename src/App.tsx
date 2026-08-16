import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, Globe } from 'lucide-react';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CaseStudies } from './components/CaseStudies';
import { ProofBar } from './components/ProofBar';
import { Portfolio } from './components/Portfolio';
import { Photos } from './components/Photos';
import { About } from './components/About';
import { VideoModal } from './components/VideoModal';
import { ContactForm } from './components/ContactForm';
import { AdminPanel } from './components/AdminPanel';
import { Pricing } from './components/Pricing';
import { SERVICES } from './constants';

const App: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setIsAdminOpen(true);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="relative min-h-screen font-body selection:bg-[#CAFF00] selection:text-black grain-overlay scanlines">
      <Loader />
      <CustomCursor />
      <Navbar />
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      <main>
        {/* ═══ 1. HERO — Straight into work ═══ */}
        <Hero />

        {/* ═══ Live Status Bar ═══ */}
        <div className="relative z-10 overflow-hidden py-3 border-y border-[#CAFF00]/10 bg-black/85">
          <div className="flex whitespace-nowrap animate-marquee">
            {[1, 2].map((i) => (
              <div key={i} className="flex">
                <span className="font-mono-tech text-[0.58rem] tracking-[0.42em] text-[#CAFF00] px-10 flex items-center gap-3 uppercase">
                  <span className="text-[#CAFF00]">▪</span>
                  PIXEL WHITE STUDIO // DUBAI · UAE · WORLDWIDE
                </span>
                {['Corporate Video Production', 'Video Editing', 'Presentation Design', 'Podcast Recording', 'EPC · PMC · Real Estate', 'Dubai · Abu Dhabi · Worldwide', 'Pixel White Studio'].map((item) => (
                  <span key={item} className="font-mono-tech text-[0.58rem] tracking-[0.42em] text-[#B5B6C7] px-10 flex items-center gap-3 uppercase">
                    {item} <span className="text-[#CAFF00] text-[0.38rem]">▪</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ═══ 2. CASE STUDIES — The backbone ═══ */}
        <CaseStudies />

        {/* ═══ 3. PROOF BAR — Stats + Clients + Testimonials ═══ */}
        <ProofBar />

        {/* ═══ 4. RANGE — Portfolio + Photos grid ═══ */}
        <Portfolio />
        <Photos />

        {/* ═══ 5. ABOUT — Short, credibility-focused ═══ */}
        <About />

        {/* ═══ 6. SERVICES ═══ */}
        <section id="services" className="bg-black py-24 px-6 md:px-12">
          <div className="section-label mb-4">What I Do</div>
          <h2 className="font-heading text-3xl md:text-6xl font-black text-white uppercase tracking-wider leading-tight mb-12">
            SERVICES FOR<br /><span className="text-[#CAFF00]">PREMIUM CLIENTS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#B5B6C7]/10 border border-[#B5B6C7]/10">
            {SERVICES.map((svc, idx) => (
              <motion.div 
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="bg-black p-10 md:p-12 relative overflow-hidden group hover:bg-[#CAFF00]/5 transition-colors"
              >
                <div className="absolute top-0 left-0 w-[3px] h-0 bg-[#CAFF00] shadow-[0_0_8px_#CAFF00] transition-all duration-400 group-hover:h-full" />
                <span className="font-mono-tech text-[0.56rem] tracking-[0.38em] text-[#CAFF00] block mb-4.5">{svc.num}</span>
                <span className="text-3xl block mb-3.5 opacity-80">{svc.icon}</span>
                <div className="font-heading text-xl font-extrabold text-white uppercase tracking-wider mb-3.5">{svc.title}</div>
                <p className="font-light text-[0.86rem] leading-relaxed text-[#B5B6C7] mb-5">{svc.description}</p>
                {svc.links && (
                  <div className="flex flex-col gap-2 mb-5">
                    {svc.links.map(link => (
                      <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[#CAFF00] text-[0.8rem] hover:underline flex items-center gap-1">
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-5">
                  {svc.tags.map(tag => (
                    <span key={tag} className="font-mono-tech text-[0.54rem] tracking-[0.2em] text-[#B5B6C7]/45 border border-[#B5B6C7]/12 px-3 py-1.5 uppercase">{tag}</span>
                  ))}
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 font-mono-tech text-[0.58rem] tracking-[0.28em] text-[#CAFF00] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Enquire ↗
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══ 7. SHOWREEL ═══ */}
        <section id="reel" className="bg-black py-24 px-6 md:px-12 text-center">
          <div className="section-label justify-center mb-4">Watch</div>
          <h2 className="font-heading text-3xl md:text-6xl font-black text-white uppercase tracking-wider leading-tight mb-12">
            THE <span className="text-[#CAFF00]">SHOWREEL</span>
          </h2>
          <div className="max-w-4xl mx-auto aspect-video bg-[#1F2029] border border-[#CAFF00]/10 relative flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 opacity-30 pixel-grid" />
            <div className="absolute inset-0 bg-[url('/hero_reel.jpg')] bg-cover bg-center brightness-[0.25] saturate-[0.4]" />
            
            <button 
              onClick={() => setIsVideoModalOpen(true)}
              className="relative z-10 w-20 h-20 border border-[#CAFF00] flex items-center justify-center group-hover:bg-[#CAFF00] transition-all duration-300"
            >
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-[#CAFF00] ml-1 group-hover:border-l-black transition-colors" />
              <div className="absolute w-24 h-24 border border-[#CAFF00]/20 rounded-full animate-ping" />
            </button>

            <div className="absolute bottom-4 left-5 font-mono-tech text-[0.5rem] tracking-[0.28em] text-[#B5B6C7]/30 uppercase">VINS JOHN // PIXEL WHITE STUDIO</div>
            <div className="absolute bottom-4 right-5 font-mono-tech text-[0.5rem] tracking-[0.28em] text-[#CAFF00]/30 uppercase">SHOWREEL 2024 // 4K</div>
          </div>
          <div className="font-mono-tech text-[0.56rem] tracking-[0.3em] text-[#B5B6C7]/30 uppercase mt-4">↑ CLICK TO PLAY CINEMATIC REEL</div>
        </section>

        {/* ═══ 8. PROCESS ═══ */}
        <section id="process" className="bg-[#1F2029] py-24 px-6 md:px-12">
          <div className="section-label mb-4">How I Work</div>
          <h2 className="font-heading text-3xl md:text-6xl font-black text-white uppercase tracking-wider leading-tight mb-16">
            THE <span className="text-[#CAFF00]">PROCESS</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {[
              { step: '01', title: 'Brief', desc: 'We define your goals, audience, message, and technical requirements.' },
              { step: '02', title: 'Concept', desc: 'Shot lists, storyboards, and a production plan tailored to your brand.' },
              { step: '03', title: 'Production', desc: 'Filming, recording, or designing — executed with precision.' },
              { step: '04', title: 'Post', desc: 'Editing, grading, sound design, and motion graphics to polish your content.' },
              { step: '05', title: 'Delivery', desc: 'Final files delivered in your required formats, optimised for every platform.' }
            ].map((item, idx) => (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="text-center px-5 group"
              >
                <div className="w-16 h-16 border border-[#CAFF00]/25 rounded-full flex items-center justify-center mx-auto mb-6 font-mono-tech text-[0.58rem] text-[#CAFF00] bg-[#1F2029] relative z-10 transition-all group-hover:bg-[#CAFF00]/10 group-hover:border-[#CAFF00] group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(202,255,0,0.22)]">
                  {item.step}
                </div>
                <div className="font-heading text-lg font-extrabold text-white uppercase tracking-wider mb-2">{item.title}</div>
                <p className="font-light text-[0.78rem] leading-relaxed text-[#B5B6C7]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══ 9. PRICING ═══ */}
        <Pricing />

        {/* ═══ 10. CONTACT ═══ */}
        <section id="contact" className="bg-black py-24 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="section-label mb-4">Get In Touch</div>
            <h2 className="font-heading text-3xl md:text-6xl font-black text-white uppercase tracking-wider leading-tight mb-5">
              DROP US<br />A <span className="text-[#CAFF00]">LINE.</span>
            </h2>
            <p className="font-light text-[0.88rem] leading-relaxed text-[#B5B6C7] max-w-md mb-10">
              Ready to create something exceptional? I work with corporate clients, EPC companies, media teams, and real estate firms across Dubai, Abu Dhabi, and worldwide.
            </p>
            <div className="flex flex-col gap-5 mb-10">
              {[
                { label: 'Based In', val: 'Dubai & Abu Dhabi, UAE' },
                { label: 'Email', val: 'vinsjohn2016@gmail.com' },
                { label: 'Phone / WhatsApp', val: '+971 54 740 5766', accent: true },
                { label: 'Availability', val: '✦ Currently Available' }
              ].map(item => (
                <div key={item.label} className="border-l border-[#CAFF00]/25 pl-4">
                  <div className="font-mono-tech text-[0.52rem] tracking-[0.35em] text-[#CAFF00] uppercase mb-1">{item.label}</div>
                  <div className={`font-heading text-sm font-semibold ${item.accent ? 'text-[#CAFF00]' : 'text-white'}`}>{item.val}</div>
                </div>
              ))}
            </div>
            <div className="font-mono-tech text-[0.56rem] tracking-[0.42em] text-[#CAFF00] mb-4 uppercase">// We Are Social</div>
            <div className="flex flex-col gap-2.5">
              {[
                { name: 'Instagram', icon: <Instagram size={14} />, href: 'https://instagram.com' },
                { name: 'Behance', icon: <Globe size={14} />, href: 'https://behance.net' },
                { name: 'LinkedIn', icon: <Linkedin size={14} />, href: 'https://linkedin.com' },
                { name: 'Twitter', icon: <Twitter size={14} />, href: 'https://twitter.com' }
              ].map(social => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="font-mono-tech text-[0.62rem] tracking-[0.28em] text-[#B5B6C7] hover:text-[#CAFF00] uppercase flex items-center gap-3 transition-colors group">
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-2">
                    {social.icon}
                  </span> 
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <ContactForm />
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[#1F2029] border-t border-[#CAFF00]/10 py-10 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#hero" className="flex flex-col gap-0.5">
          <div className="font-mono-tech text-[0.7rem] tracking-[0.42em] text-white uppercase">▪ PIXEL WHITE STUDIO</div>
          <div className="font-mono-tech text-[0.48rem] tracking-[0.38em] text-[#B5B6C7] pl-3.5 uppercase">
            • BY <span className="text-[#CAFF00]/50">VINS JOHN</span>
          </div>
        </a>
        <ul className="flex flex-wrap justify-center gap-6">
          {['Work', 'Portfolio', 'About', 'Services', 'Contact'].map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="font-mono-tech text-[0.53rem] tracking-[0.24em] text-[#B5B6C7] hover:text-[#CAFF00] uppercase transition-colors">{link}</a>
            </li>
          ))}
        </ul>
        <div className="font-mono-tech text-[0.5rem] tracking-[0.25em] text-[#B5B6C7]/30 text-center md:text-right uppercase">
          © 2026 PIXEL WHITE STUDIO <span className="text-[#CAFF00]/40">// VINS JOHN</span><br />
          DUBAI · UAE · WORLDWIDE
        </div>
      </footer>
    </div>
  );
};

export default App;
