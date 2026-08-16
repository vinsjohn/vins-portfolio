import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudySectionProps {
  className?: string;
}

const CaseStudySection = ({ className = '' }: CaseStudySectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`relative w-screen h-screen overflow-hidden bg-dark ${className}`}>
      <div className="absolute inset-0 w-full h-full" style={{ backgroundImage: 'url(/bts_bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-dark/50" />
      </div>

      <div className={`absolute card-frame group cursor-pointer transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 -translate-x-[70vw] -rotate-3'
      }`} style={{ left: '7vw', top: '14vh', width: '42vw', height: '72vh' }}>
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: 'url(/project_poster.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
      </div>

      <div className={`absolute transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[40vw]'}`}
        style={{ left: '56vw', top: '18vh', width: '36vw' }}>
        <h2 className="font-heading font-black text-section text-foreground uppercase tracking-tight mb-2">The Weight of Silence</h2>
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">Short Film / 12 min / 2025</p>
      </div>

      <div className={`absolute transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-[40vw] translate-y-[6vh]'}`}
        style={{ left: '56vw', top: '44vh', width: '36vw' }}>
        <p className="text-foreground/80 text-base leading-relaxed mb-6">A quiet story about distance, memory, and the moments we choose to keep. Shot on location over three days, edited for restraint—so every cut lands.</p>
        <p className="text-foreground/60 text-sm leading-relaxed">This project explores the delicate balance between what is shown and what is implied, using minimal dialogue and maximal visual storytelling.</p>
      </div>

      <button onClick={() => alert('Case study coming soon!')} className={`absolute flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime hover:text-lime-dark transition-colors cta-underline transition-all duration-700 delay-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`} style={{ left: '56vw', top: '74vh' }}>
        <span>Read the case study</span><ArrowRight className="w-4 h-4" />
      </button>
    </section>
  );
};

export default CaseStudySection;
