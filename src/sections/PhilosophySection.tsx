import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface PhilosophySectionProps {
  className?: string;
}

const PhilosophySection = ({ className = '' }: PhilosophySectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const bullets = [
    'Pacing first—then polish.',
    'Sound design is half the picture.',
    'Color that supports the story.',
    'Delivery built for every platform.',
  ];

  return (
    <section ref={sectionRef} id="philosophy" className={`relative min-h-screen bg-dark py-24 lg:py-32 ${className}`}>
      <div className="plus-grid" />
      <div className="relative z-10 w-full px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-[45%] lg:sticky lg:top-24 lg:self-start">
            <h2 className={`font-heading font-black text-section text-foreground uppercase tracking-tight mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>Editing is rhythm.</h2>
            <p className={`text-foreground/70 text-lg leading-relaxed mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}>If the cut doesn't serve the feeling, it doesn't stay.</p>
            <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className={`flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime hover:text-lime-dark transition-colors cta-underline transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
              <span>See selected work</span><ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:w-[55%] lg:pt-8">
            <ul className="space-y-8">
              {bullets.map((bullet, index) => (
                <li key={index} className={`flex items-start gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-lime/10 flex items-center justify-center">
                    <span className="font-mono text-xs text-lime">0{index + 1}</span>
                  </span>
                  <span className="text-foreground/80 text-base leading-relaxed pt-1">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
