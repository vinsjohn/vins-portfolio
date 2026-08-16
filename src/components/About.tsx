import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#1F2029] flex flex-col-reverse lg:grid lg:grid-cols-2 min-h-[85vh]">
      {/* Text Side */}
      <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center">
        <div className="section-label mb-4">About</div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-wider leading-tight mt-3">
            PROFESSIONAL<br />
            <span className="text-[#CAFF00]">VISUAL</span><br />
            STORYTELLER
          </div>

          <p className="font-light text-[0.89rem] leading-relaxed text-[#B5B6C7] mt-6 max-w-md">
            I'm Vins John — a Dubai-based Videographer, Video Editor, and Visual Storyteller specializing in real estate, corporate, and brand-driven content. With hands-on experience across photography, videography, editing, and post-production, I help brands transform ideas into clear, engaging visual stories.
          </p>

          <p className="font-light text-[0.89rem] leading-relaxed text-[#B5B6C7] mt-4 max-w-md">
            Having worked closely with real estate teams, media studios, and growing brands in the UAE, I bring an end-to-end approach to content creation — from concept and shoot planning to final delivery optimized for digital platforms.
          </p>

          <div className="font-mono-tech text-[0.56rem] tracking-[0.38em] text-[#CAFF00] mt-9 mb-3.5 uppercase">
            // Serving Industries
          </div>
          <div className="flex flex-wrap gap-2">
            {['⚙️ EPC Companies', '🏗️ PMC Firms', '🏢 Corporate', '🏠 Real Estate', '📡 Media & Comms', '🌐 Global Remote'].map(
              (chip) => (
                <div
                  key={chip}
                  className="font-mono-tech text-[0.56rem] tracking-[0.2em] text-[#B5B6C7] border border-[#B5B6C7]/15 px-4 py-2 uppercase hover:text-[#CAFF00] hover:border-[#CAFF00]/30 transition-all"
                >
                  {chip}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* Image Side */}
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
  );
};
