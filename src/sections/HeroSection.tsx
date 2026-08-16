import { useState, useEffect } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section id="hero" className={`relative w-screen h-screen overflow-hidden bg-dark ${className}`}>
        <div
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{
            backgroundImage: 'url(/hero_reel.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-dark/35" />
        </div>

        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div
            className={`absolute card-frame flex items-center justify-center transition-all duration-900 ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[18vh] scale-92'
            }`}
            style={{
              width: '78vw',
              height: '56vh',
              left: '50%',
              top: '52%',
              transform: 'translate(-50%, -50%)',
              transitionDelay: '200ms',
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/work_grid_bg.jpg)' }}
            >
              <div className="absolute inset-0 bg-dark/40" />
            </div>

            <span className="absolute top-[6%] left-[3%] font-mono text-xs uppercase tracking-widest text-foreground/70">
              Showreel — 2026
            </span>

            <button
              className={`play-button relative z-10 transition-all duration-500 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-60'
              }`}
              style={{ transitionDelay: '400ms' }}
              onClick={() => setIsVideoOpen(true)}
            >
              <Play className="w-6 h-6 text-foreground fill-foreground ml-1" />
            </button>

            <button
              className="absolute bottom-[6%] right-[3%] flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground/80 hover:text-lime transition-colors cta-underline"
              onClick={() => setIsVideoOpen(true)}
            >
              <span>Watch reel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div
            className={`absolute text-center transition-all duration-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ top: '86%', left: '50%', transform: 'translateX(-50%)', transitionDelay: '500ms' }}
          >
            <h1 className="font-heading font-black text-hero text-foreground uppercase tracking-tight whitespace-nowrap">
              Stories, Cut With Precision
            </h1>
          </div>

          <div
            className={`absolute text-center transition-all duration-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ top: '93%', left: '50%', transform: 'translateX(-50%)', transitionDelay: '600ms' }}
          >
            <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
              Director · Editor · Colorist
            </p>
          </div>
        </div>
      </section>

      <VideoPlayer
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        thumbnailUrl="/work_grid_bg.jpg"
        title="Showreel 2026"
        videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
      />
    </>
  );
};

export default HeroSection;
