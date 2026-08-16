import { useEffect, useRef, useState } from 'react';

interface WorkGridSectionProps {
  className?: string;
}

const WorkGridSection = ({ className = '' }: WorkGridSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="work" className={`relative w-screen h-screen overflow-hidden bg-dark ${className}`}>
      <div className="absolute inset-0 w-full h-full" style={{
        backgroundImage: 'url(/work_grid_bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-dark/60" />
      </div>

      <div className={`absolute card-frame group cursor-pointer transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-[60vw] -translate-y-[40vh]'
      }`} style={{ left: '6vw', top: '10vh', width: '56vw', height: '52vh' }}>
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: 'url(/work_commercial.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 font-mono text-xs uppercase tracking-widest text-foreground/80">Commercial</span>
      </div>

      <div className={`absolute card-frame-sm group cursor-pointer transition-all duration-1000 delay-100 ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-[40vw] -translate-y-[30vh]'
      }`} style={{ right: '6vw', top: '10vh', width: '28vw', height: '24vh' }}>
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: 'url(/work_documentary.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 font-mono text-xs uppercase tracking-widest text-foreground/80">Documentary</span>
      </div>

      <div className={`absolute card-frame group cursor-pointer transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-[60vw] translate-y-[40vh]'
      }`} style={{ right: '6vw', top: '40vh', width: '56vw', height: '52vh' }}>
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: 'url(/work_music.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 font-mono text-xs uppercase tracking-widest text-foreground/80">Music Video</span>
      </div>

      <div className={`absolute card-frame-sm group cursor-pointer transition-all duration-1000 delay-100 ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-[40vw] translate-y-[30vh]'
      }`} style={{ left: '6vw', top: '68vh', width: '28vw', height: '24vh' }}>
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: 'url(/work_shortfilm.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 font-mono text-xs uppercase tracking-widest text-foreground/80">Short Film</span>
      </div>

      <h2 className={`absolute font-heading font-black text-section text-foreground uppercase tracking-tight transition-all duration-700 delay-200 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-92'
      }`} style={{ left: '50%', top: '54%', transform: 'translate(-50%, -50%)', textShadow: '0 4px 40px rgba(0,0,0,0.8)' }}>
        Featured Work
      </h2>
    </section>
  );
};

export default WorkGridSection;
