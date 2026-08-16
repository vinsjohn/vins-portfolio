// BUG FIX: Remove CONNECTING status and use static status
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, Globe } from 'lucide-react';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Portfolio } from './components/Portfolio';
import { Photos } from './components/Photos';
import { VideoModal } from './components/VideoModal';
import { ContactForm } from './components/ContactForm';
import { AdminPanel } from './components/AdminPanel';
import { Pricing } from './components/Pricing';
import { Clients } from './components/Clients';
import { SERVICES, TESTIMONIALS } from './constants';

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
    <div className="relative min-h-screen font-body selection:bg-[#CAFF00] selection:text-black">
      <Loader />
      <CustomCursor />
      <Navbar />
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />

      <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      <main>
        <Hero />

        {/* Live Status Bar */}
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

        <Stats />

        <Clients />

        {/* Services */}
        <section id="services" className="bg-black py-24 px-6 md:px-12">
          <div className="font-mono-tech text-[0.57rem] tracking-[0.45em] text-[#CAFF00] flex items-center gap-3.5 uppercase mb-3.5">
            <span className="w-5 h-[1px] bg-[#CAFF00] shadow-[0_0_4px_#CAFF00]" />
            What I Do
          </div>
          <h2 className="font-heading text-3xl md:text-6xl font-black text-white uppercase tracking-wider leading-tight mb-12">
            SERVICES FOR<br /><span className="text-[#CAFF00]">PREMIUM CLIENTS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#B5B6C7]/10 border border-[#B5B6C7]/10">
            {SERVICES.map((svc, idx) => (
              <motion.div 
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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

        {/* About */}
        <section id="about" className="bg-[#1F2029] flex flex-col-reverse lg:grid lg:grid-cols-2 min-h-[85vh]">
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <div className="font-mono-tech text-[0.57rem] tracking-[0.45em] text-[#CAFF00] flex items-center gap-3.5 uppercase mb-3.5">
              <span className="w-5 h-[1px] bg-[#CAFF00] shadow-[0_0_4px_#CAFF00]" />
              About
            </div>
            <div className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-wider leading-tight mt-5">
              PROFESSIONAL<br />
              <span className="text-[#CAFF00]">VISUAL</span><br />
              STORYTELLER
            </div>
            <p className="font-light text-[0.89rem] leading-relaxed text-[#B5B6C7] mt-6 max-w-md">
              I'm Vins John — a Dubai-based Videographer, Video Editor, and Visual Storyteller specializing in real estate, corporate, and brand-driven content. With hands-on experience across photography, videography, editing, and post-production, I help brands transform ideas into clear, engaging visual stories.
            </p>
            <p className="font-light text-[0.89rem] leading-relaxed text-[#B5B6C7] mt-6 max-w-md">
              Having worked closely with real estate teams, media studios, and growing brands in the UAE, I bring an end-to-end approach to content creation — from concept and shoot planning to final delivery optimized for digital platforms.
            </p>
            <div className="font-mono-tech text-[0.56rem] tracking-[0.38em] text-[#CAFF00] mt-9 mb-3.5 uppercase">// Serving Industries</div>
            <div className="flex flex-wrap gap-2">
              {['⚙️ EPC Companies', '🏗️ PMC Firms', '🏢 Corporate', '🏠 Real Estate', '📡 Media & Comms', '🌐 Global Remote'].map(chip => (
                <div key={chip} className="font-mono-tech text-[0.56rem] tracking-[0.2em] text-[#B5B6C7] border border-[#B5B6C7]/15 px-4 py-2 uppercase hover:text-[#CAFF00] hover:border-[#CAFF00]/30 transition-all">
                  {chip}
                </div>
              ))}
            </div>
          </div>
          <div className="flex bg-black items-center justify-center relative overflow-hidden min-h-[300px] py-12 lg:py-0">
            <div className="absolute top-5 left-5 w-12 h-12 border-t border-l border-[#CAFF00]/20" />
            <div className="w-[320px] h-[440px] relative border border-[#CAFF00]/15 flex flex-col items-center justify-center gap-2.5">
              <div className="absolute inset-3 border border-[#CAFF00]/5 pointer-events-none" />
              <img 
                src="https://lh3.googleusercontent.com/sitesv/APaQ0SSXlZt3pPgERVuQ0wYtnn7csWyChVo8hy4pa9wWvQbeD8muqYOcNltFfMYdbthzDxZxnNKsa9BGM1-cGjRThixoEdoG8ub8Wyn8Cuwfe4f6qdrR0khlfOEONSsGFS_xpcMXP3TfzXMMD8s6VZBF_dsXpALiFWEASxEo0-yVS6bHcGSKQvEbTu5N=w16383" 
                alt="Vins John" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-75"
              />
              <div className="absolute bottom-5 right-5 w-12 h-12 border-b border-r border-[#CAFF00]/20" />
            </div>
          </div>
        </section>

        <Portfolio />

        <Photos />

        {/* Reel */}
        <section id="reel" className="bg-black py-24 px-6 md:px-12 text-center">
          <div className="font-mono-tech text-[0.57rem] tracking-[0.45em] text-[#CAFF00] flex items-center justify-center gap-3.5 uppercase mb-3.5">
            <span className="w-5 h-[1px] bg-[#CAFF00] shadow-[0_0_4px_#CAFF00]" />
            Watch
          </div>
          <h2 className="font-heading text-3xl md:text-6xl font-black text-white uppercase tracking-wider leading-tight mb-12">
            THE <span className="text-[#CAFF00]">SHOWREEL</span>
          </h2>
          <div className="max-w-4xl mx-auto aspect-video bg-[#1F2029] border border-[#CAFF00]/10 relative flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 opacity-30 pixel-grid" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=1200&q=80')] bg-cover bg-center brightness-[0.25] saturate-[0.4]" />
            
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

        {/* Process */}
        <section id="process" className="bg-[#1F2029] py-24 px-6 md:px-12">
          <div className="font-mono-tech text-[0.57rem] tracking-[0.45em] text-[#CAFF00] flex items-center gap-3.5 uppercase mb-3.5">
            <span className="w-5 h-[1px] bg-[#CAFF00] shadow-[0_0_4px_#CAFF00]" />
            How I Work
          </div>
          <h2 className="font-heading text-3xl md:text-6xl font-black text-white uppercase tracking-wider leading-tight mb-16">
            THE <span className="text-[#CAFF00]">PROCESS</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            <div className="hidden lg:block absolute top-8 left={[8%]} right={[8%]} h={[1px]} bg-gradient-to-r from-transparent via-[#CAFF00]/30 to-transparent" />
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

        <Pricing />

        {/* Testimonials */}
        <section id="testimonials" className="bg-[#1F2029] py-24 px-6 md:px-12">
          <div className="font-mono-tech text-[0.57rem] tracking-[0.45em] text-[#CAFF00] flex items-center gap-3.5 uppercase mb-3.5">
            <span className="w-5 h-[1px] bg-[#CAFF00] shadow-[0_0_4px_#CAFF00]" />
            Client Reviews
          </div>
          <h2 className="font-heading text-3xl md:text-6xl font-black text-white uppercase tracking-wider leading-tight mb-12">
            WHAT THEY <span className="text-[#CAFF00]">SAY</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#B5B6C7]/10">
            {TESTIMONIALS.map((testi, idx) => (
              <motion.div 
                key={testi.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="bg-[#1F2029] p-10 relative overflow-hidden hover:bg-[#CAFF00]/5 transition-colors"
              >
                <div className="absolute top-2 right-4 font-heading text-8xl font-black text-[#CAFF00]/5 leading-none">"</div>
                <div className="flex gap-1 text-[#CAFF00] text-[0.7rem] mb-4 drop-shadow-[0_0_6px_rgba(202,255,0,0.22)]">
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <p className="font-light text-[0.87rem] leading-relaxed text-[#B5B6C7] italic mb-6">"{testi.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-[#CAFF00]/30 flex items-center justify-center font-heading text-base font-extrabold text-[#CAFF00]">
                    {testi.initial}
                  </div>
                  <div>
                    <div className="font-heading text-[0.76rem] font-extrabold text-white uppercase tracking-wider">{testi.author}</div>
                    <div className="font-mono-tech text-[0.52rem] tracking-[0.2em] text-[#CAFF00] uppercase mt-0.5">{testi.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-black py-24 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="font-mono-tech text-[0.57rem] tracking-[0.45em] text-[#CAFF00] flex items-center gap-3.5 uppercase mb-3.5">
              <span className="w-5 h-[1px] bg-[#CAFF00] shadow-[0_0_4px_#CAFF00]" />
              Get In Touch
            </div>
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

      <footer className="bg-[#1F2029] border-t border-[#CAFF00]/10 py-10 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#hero" className="flex flex-col gap-0.5">
          <div className="font-mono-tech text-[0.7rem] tracking-[0.42em] text-white uppercase">▪ PIXEL WHITE STUDIO</div>
          <div className="font-mono-tech text-[0.48rem] tracking-[0.38em] text-[#B5B6C7] pl-3.5 uppercase">
            • BY <span className="text-[#CAFF00]/50">VINS JOHN</span>
          </div>
        </a>
        <ul className="flex flex-wrap justify-center gap-6">
          {['Services', 'Work', 'Photos', 'About', 'Contact'].map(link => (
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
