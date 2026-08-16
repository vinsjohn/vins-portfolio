import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Work', id: 'work' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Process', id: 'philosophy' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-dark/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="w-full px-6 lg:px-10 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-heading font-bold text-lg tracking-tight text-foreground hover:text-lime transition-colors"
          >
            VINS JOHN
          </button>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="font-mono text-xs uppercase tracking-widest text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2"
          >
            <span>Menu</span>
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[200] bg-dark/95 backdrop-blur-xl transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="w-full h-full flex flex-col">
          <div className="px-6 lg:px-10 py-6 flex items-center justify-between">
            <span className="font-heading font-bold text-lg tracking-tight text-foreground">VINS JOHN</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="font-mono text-xs uppercase tracking-widest text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground hover:text-lime transition-colors duration-300"
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="px-6 lg:px-10 py-8 flex items-center justify-between text-foreground/60">
            <span className="font-mono text-xs">Dubai, UAE</span>
            <span className="font-mono text-xs">vinsjohn2016@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
