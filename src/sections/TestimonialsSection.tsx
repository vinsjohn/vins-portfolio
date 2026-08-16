import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const collaborators = ['Northlight Studio', 'Haven Records', 'Mosaic Agency'];

  return (
    <section ref={sectionRef} className={`relative min-h-screen bg-dark py-24 lg:py-32 ${className}`}>
      <div className="relative z-10 w-full px-6 lg:px-16">
        <h2 className={`font-heading font-black text-section text-foreground uppercase tracking-tight mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>Collaborators</h2>

        <div className="flex flex-wrap gap-4 mb-16">
          {collaborators.map((name, index) => (
            <div key={index} className={`logo-card px-8 py-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: `${100 + index * 100}ms` }}>
              <span className="font-mono text-sm uppercase tracking-widest text-foreground/70">{name}</span>
            </div>
          ))}
        </div>

        <div className={`relative max-w-4xl mx-auto transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="card-frame p-8 lg:p-12">
            <Quote className="w-10 h-10 text-lime/40 mb-6" />
            <blockquote className="text-2xl lg:text-3xl font-heading font-medium text-foreground leading-tight mb-8">
              "Vins turned a mountain of footage into a story that actually lands. Calm, fast, and obsessively detailed."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <img src="/testimonial_portrait.jpg" alt="Maya O." className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-mono text-sm uppercase tracking-widest text-foreground/80">Maya O.</p>
                <p className="text-foreground/50 text-sm">Producer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
