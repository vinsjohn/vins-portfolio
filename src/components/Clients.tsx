import React from 'react';

const CLIENTS = [
  "ON DEMAND",
  "X REALTY",
  "TOP LUXURY PROPERTY",
  "CENTREPOINT",
  "FABER VAALE",
  "DAMAC PROPERTIES",
  "SAMANA DEVELOPERS"
];

export const Clients: React.FC = () => {
  return (
    <section className="bg-[#1F2029] border-y border-[#CAFF00]/10 py-16 overflow-hidden">
      <div className="px-6 md:px-12 mb-10 flex flex-col items-center">
        <div className="font-mono-tech text-[0.57rem] tracking-[0.45em] text-[#CAFF00] flex items-center justify-center gap-3.5 uppercase">
          <span className="w-5 h-[1px] bg-[#CAFF00] shadow-[0_0_4px_#CAFF00]" />
          Trusted By
          <span className="w-5 h-[1px] bg-[#CAFF00] shadow-[0_0_4px_#CAFF00]" />
        </div>
      </div>
      
      <div className="relative z-10 w-full overflow-hidden flex">
        {/* Left and Right Fade for smooth marquee edge */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#1F2029] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#1F2029] to-transparent z-20 pointer-events-none" />
        
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center">
              {CLIENTS.map((client) => (
                <div key={`${i}-${client}`} className="flex items-center">
                  <span className="font-heading text-2xl md:text-4xl font-black text-[#B5B6C7]/30 hover:text-white px-10 md:px-20 transition-colors duration-300 uppercase tracking-wider cursor-default">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
