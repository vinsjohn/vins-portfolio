// BUG FIX: Brighten portfolio images for better visibility
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const categories = ['All', 'Nature & Wildlife', 'Photojournalism', 'Advertising'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="work" className="bg-black py-24 px-6 md:px-12">
      <div className="font-mono-tech text-[0.57rem] tracking-[0.45em] text-[#CAFF00] flex items-center gap-3.5 uppercase mb-3.5">
        <span className="w-5 h-[1px] bg-[#CAFF00] shadow-[0_0_4px_#CAFF00]" />
        Selected Work
      </div>
      <h2 className="font-heading text-3xl md:text-6xl font-black text-white uppercase tracking-wider leading-tight mb-10">
        THE <span className="text-[#CAFF00]">PORTFOLIO</span>
      </h2>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`font-mono-tech text-[0.58rem] tracking-[0.22em] px-4 py-2 uppercase border transition-all ${
              filter === cat 
                ? 'text-[#CAFF00] border-[#CAFF00]/40 bg-[#CAFF00]/5' 
                : 'text-[#B5B6C7] border-[#B5B6C7]/15 hover:text-[#CAFF00] hover:border-[#CAFF00]/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-4 auto-rows-[250px] md:auto-rows-[320px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={`${project.span} relative overflow-hidden bg-[#1F2029] border border-white/10 hover:border-[#CAFF00]/50 group rounded-sm`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center brightness-[0.65] saturate-[0.75] transition-all duration-700 group-hover:brightness-[0.8] group-hover:saturate-[1] group-hover:scale-[1.06]"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-400" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col items-start">
                <div className="font-mono-tech text-[0.6rem] md:text-[0.65rem] tracking-[0.35em] text-[#CAFF00] uppercase mb-2 md:mb-3 drop-shadow-[0_0_8px_rgba(202,255,0,0.3)]">
                  {project.category}
                </div>
                <div className="font-heading text-xl md:text-3xl font-black text-white uppercase tracking-wider leading-tight drop-shadow-lg mb-4">
                  {project.title}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="font-mono-tech text-[0.6rem] tracking-[0.35em] text-white uppercase border border-[#CAFF00]/50 px-5 py-2.5 hover:bg-[#CAFF00] hover:text-black transition-all duration-300"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[3000] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 lg:p-12"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-full flex flex-col lg:flex-row bg-[#111115] border border-[#CAFF00]/20 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 text-[#B5B6C7] hover:text-[#CAFF00] hover:bg-black/80 border border-white/5 hover:border-[#CAFF00]/30 transition-all backdrop-blur"
              >
                <X size={20} />
              </button>

              <div className="w-full lg:w-[65%] h-[40vh] lg:h-[80vh] relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="w-full lg:w-[35%] p-8 lg:p-12 overflow-y-auto max-h-[50vh] lg:max-h-[80vh]">
                <div className="font-mono-tech text-[0.65rem] tracking-[0.4em] text-[#CAFF00] uppercase mb-4 opacity-80">
                  {selectedProject.category}
                </div>
                <h3 className="font-heading text-2xl lg:text-4xl font-black text-white uppercase tracking-wider leading-tight mb-8">
                  {selectedProject.title}
                </h3>
                
                <div className="h-[1px] w-12 bg-[#CAFF00]/30 mb-8" />
                
                <p className="text-[#B5B6C7] text-sm lg:text-base leading-relaxed mb-8">
                  {selectedProject.description || "A captivating visual exploration showcasing the pinnacle of photographic artistry. Experience the story unfolding through carefully crafted composition and emotional resonance."}
                </p>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full text-center font-mono-tech text-[0.6rem] tracking-[0.35em] text-[#CAFF00] uppercase border/80 border-[#CAFF00]/30 hover:border-[#CAFF00] px-5 py-4 hover:bg-[#CAFF00]/5 transition-all duration-300"
                >
                  Close Profile
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
