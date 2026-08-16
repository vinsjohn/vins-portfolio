import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Film, Palette, Smartphone, Volume2 } from 'lucide-react';

interface DeliverablesSectionProps {
  className?: string;
}

const DeliverablesSection = ({ className = '' }: DeliverablesSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const deliverables = [
    { icon: Film, title: "Director's Cut", description: 'Narrative-first assembly with pacing, sound, and intent.' },
    { icon: Palette, title: 'Color Grade', description: 'Consistent look: cinematic, clean, or bold.' },
    { icon: Smartphone, title: 'Social Versions', description: 'Vertical + square cuts, captions-safe, platform-optimized.' },
    { icon: Volume2, title: 'Sound Mix', description: 'Dialogue, music, and FX balanced for every environment.' },
  ];

  return (
    <section ref={sectionRef} className={`relative min-h-screen py-24 lg:py-32 ${className}`} style={{ backgroundColor: '#6B4C38' }}>
      <div className="relative z-10 w-full px-6 lg:px-16">
        <h2 className={`font-heading font-black text-section text-foreground uppercase tracking-tight mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>What I deliver</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {deliverables.map((item, index) => (
            <div key={index} className={`deliverable-card card-frame p-8 hover:-translate-y-1.5 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: `${100 + index * 100}ms` }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-lime" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className={`flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime hover:text-white transition-colors cta-underline transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
          <span>Request availability</span><ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default DeliverablesSection;
