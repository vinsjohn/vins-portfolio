import React from 'react';
import { motion } from 'framer-motion';
import { CASE_STUDIES } from '../constants';

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="bg-black relative">
      {/* Section Header */}
      <div className="px-6 md:px-12 lg:px-20 pt-24 pb-12">
        <div className="section-label mb-4">Case Studies</div>
        <h2 className="font-heading text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-wider leading-[0.95]">
          SELECTED<br />
          <span className="text-[#CAFF00]">WORK.</span>
        </h2>
        <p className="font-mono-tech text-[0.6rem] tracking-[0.3em] text-[#B5B6C7]/50 uppercase mt-4 max-w-lg">
          Real projects. Real clients. Real results. Each case study shows the brief, process, and outcome.
        </p>
      </div>

      {/* Case Study Cards */}
      <div className="space-y-0">
        {CASE_STUDIES.map((study, idx) => (
          <motion.article
            key={study.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className={`relative min-h-[85vh] flex flex-col ${
              idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } border-t border-[#CAFF00]/10`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-[55%] relative overflow-hidden min-h-[40vh] lg:min-h-0">
              <div
                className="absolute inset-0 bg-cover bg-center brightness-[0.6] saturate-[0.7] transition-transform duration-700 hover:scale-[1.03]"
                style={{ backgroundImage: `url(${study.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/50" />

              {/* Index number overlay */}
              <div className="absolute top-8 left-8 font-heading text-[8rem] md:text-[12rem] font-black text-white/[0.04] leading-none select-none">
                {study.index}
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-[45%] px-6 md:px-12 lg:px-16 py-12 lg:py-20 flex flex-col justify-center relative">
              {/* Index */}
              <div className="font-mono-tech text-[0.55rem] tracking-[0.45em] text-[#CAFF00]/40 uppercase mb-3">
                // PROJECT {study.index}
              </div>

              {/* Client & Industry */}
              <h3 className="font-heading text-2xl md:text-4xl font-black text-white uppercase tracking-wider leading-tight mb-2">
                {study.client}
              </h3>
              <div className="font-mono-tech text-[0.58rem] tracking-[0.3em] text-[#CAFF00] uppercase mb-8">
                {study.industry}
              </div>

              {/* Brief */}
              <div className="mb-8">
                <div className="font-mono-tech text-[0.52rem] tracking-[0.35em] text-[#B5B6C7]/40 uppercase mb-2">
                  // The Brief
                </div>
                <p className="font-light text-[0.9rem] leading-relaxed text-[#B5B6C7]">
                  {study.brief}
                </p>
              </div>

              {/* What I Did */}
              <div className="mb-8">
                <div className="font-mono-tech text-[0.52rem] tracking-[0.35em] text-[#B5B6C7]/40 uppercase mb-3">
                  // What I Delivered
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.deliverables.map((item) => (
                    <span
                      key={item}
                      className="font-mono-tech text-[0.55rem] tracking-[0.2em] text-[#CAFF00]/80 border border-[#CAFF00]/20 px-3 py-1.5 uppercase bg-[#CAFF00]/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div className="border-l-2 border-[#CAFF00] pl-5">
                <div className="font-mono-tech text-[0.52rem] tracking-[0.35em] text-[#B5B6C7]/40 uppercase mb-2">
                  // Result
                </div>
                <p className="font-heading text-base md:text-lg font-semibold text-white leading-relaxed italic">
                  "{study.result}"
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-tech text-[0.48rem] tracking-[0.2em] text-[#B5B6C7]/30 border border-[#B5B6C7]/8 px-2.5 py-1 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
