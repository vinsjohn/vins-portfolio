import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/5 p-10 border border-[#CAFF00]/30 flex flex-col items-center justify-center text-center min-h-[400px]"
      >
        <CheckCircle2 size={64} className="text-[#CAFF00] mb-6" />
        <h3 className="font-heading text-2xl font-black text-white uppercase mb-4">Message Received</h3>
        <p className="font-light text-[#B5B6C7] max-w-xs mx-auto mb-8">
          Thank you for reaching out. I'll review your project details and get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="font-mono-tech text-[0.6rem] tracking-[0.3em] text-[#CAFF00] border border-[#CAFF00]/30 px-6 py-3 uppercase hover:bg-[#CAFF00]/10 transition-all"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white/5 p-8 md:p-10 border border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pixel-grid pointer-events-none" />
      <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="font-mono-tech text-[0.53rem] tracking-[0.35em] text-[#B5B6C7] uppercase">Your Name</label>
            <input 
              required
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-white/5 border border-[#B5B6C7]/12 px-4 py-3.5 text-white text-sm outline-none focus:border-[#CAFF00] transition-colors" 
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono-tech text-[0.53rem] tracking-[0.35em] text-[#B5B6C7] uppercase">Email Address</label>
            <input 
              required
              type="email" 
              placeholder="your@email.com" 
              className="w-full bg-white/5 border border-[#B5B6C7]/12 px-4 py-3.5 text-white text-sm outline-none focus:border-[#CAFF00] transition-colors" 
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="font-mono-tech text-[0.53rem] tracking-[0.35em] text-[#B5B6C7] uppercase">Service Required</label>
          <select className="w-full bg-white/5 border border-[#B5B6C7]/12 px-4 py-3.5 text-white text-sm outline-none focus:border-[#CAFF00] transition-colors appearance-none cursor-pointer">
            <option className="bg-black">SELECT SERVICE</option>
            <option className="bg-black">Corporate Video Production</option>
            <option className="bg-black">Video Editing</option>
            <option className="bg-black">Podcast Recording</option>
            <option className="bg-black">Presentation Design</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="font-mono-tech text-[0.53rem] tracking-[0.35em] text-[#B5B6C7] uppercase">Project Details</label>
          <textarea 
            required
            placeholder="Tell me about your project..." 
            className="w-full h-32 bg-white/5 border border-[#B5B6C7]/12 px-4 py-3.5 text-white text-sm outline-none focus:border-[#CAFF00] transition-colors resize-none" 
          />
        </div>
        <button 
          disabled={status === 'sending'}
          className="w-full bg-[#CAFF00] text-black font-mono-tech text-[0.63rem] tracking-[0.38em] font-bold py-4.5 uppercase hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {status === 'sending' ? (
            <>TRANSMITTING...</>
          ) : (
            <>Send a Message <Send size={14} /></>
          )}
        </button>
        
        {/* NEW: WhatsApp CTA Button */}
        <a
          href="https://wa.me/971547405766"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mt-3 font-mono-tech text-[0.63rem] tracking-[0.38em] text-[#B5B6C7] bg-transparent px-8 py-4 uppercase border border-[#B5B6C7]/25 hover:border-[#CAFF00] hover:text-[#CAFF00] transition-all flex items-center justify-center gap-3"
        >
          💬 MESSAGE ON WHATSAPP →
        </a>
      </form>
    </div>
  );
};
