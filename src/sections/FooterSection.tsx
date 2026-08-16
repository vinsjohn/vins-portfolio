import { Instagram, Linkedin, Video } from 'lucide-react';

interface FooterSectionProps {
  className?: string;
}

const FooterSection = ({ className = '' }: FooterSectionProps) => {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/vins_john' },
    { icon: Video, label: 'Vimeo', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/vins-john-dubai-photographer' },
  ];

  return (
    <footer className={`relative bg-dark py-12 ${className}`}>
      <div className="relative z-10 w-full px-6 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <span className="font-heading font-bold text-2xl text-foreground mb-6">VINS JOHN</span>
          <div className="flex items-center gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-foreground/60 hover:text-lime hover:border-lime/50 transition-all"
                aria-label={link.label}>
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <a href="#work" className="font-mono text-xs uppercase tracking-widest text-foreground/50 hover:text-foreground transition-colors">Work</a>
            <a href="#gallery" className="font-mono text-xs uppercase tracking-widest text-foreground/50 hover:text-foreground transition-colors">Gallery</a>
            <a href="#philosophy" className="font-mono text-xs uppercase tracking-widest text-foreground/50 hover:text-foreground transition-colors">Process</a>
            <a href="#contact" className="font-mono text-xs uppercase tracking-widest text-foreground/50 hover:text-foreground transition-colors">Contact</a>
            <a href="#" className="font-mono text-xs uppercase tracking-widest text-foreground/50 hover:text-foreground transition-colors">Privacy</a>
          </div>
          <p className="text-foreground/40 text-sm mb-6">Site built with intent. No trackers. No bloat.</p>
          <p className="font-mono text-xs text-foreground/30">© 2026 Vins John. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
