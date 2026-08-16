import { useEffect, useRef, useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ContactSectionProps {
  className?: string;
}

const ContactSection = ({ className = '' }: ContactSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true); }, 1500);
  };

  return (
    <section ref={sectionRef} id="contact" className={`relative min-h-screen bg-dark py-24 lg:py-32 ${className}`}>
      <div className="relative z-10 w-full px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className={`lg:w-[45%] transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            <h2 className="font-heading font-black text-section text-foreground uppercase tracking-tight mb-6">Let's make the next cut count.</h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-10">Tell me what you're building. I'll reply within 48 hours.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-lime" />
                <a href="mailto:vinsjohn2016@gmail.com" className="text-foreground/80 hover:text-lime transition-colors">vinsjohn2016@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-lime" />
                <a href="tel:+971547405766" className="text-foreground/80 hover:text-lime transition-colors">+971 54 740 5766</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-lime" />
                <span className="text-foreground/80">Dubai & Abu Dhabi, UAE</span>
              </div>
            </div>
          </div>

          <div className={`lg:w-[55%] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <div className="card-frame p-6 lg:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-lime/10 flex items-center justify-center mx-auto mb-6"><Send className="w-8 h-8 text-lime" /></div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Message sent!</h3>
                  <p className="text-foreground/60">I'll get back to you within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground/80">Name</Label>
                      <Input id="name" placeholder="Your name" required className="bg-white/5 border-white/10 text-foreground placeholder:text-foreground/40 focus:border-lime focus:ring-lime/20" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground/80">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required className="bg-white/5 border-white/10 text-foreground placeholder:text-foreground/40 focus:border-lime focus:ring-lime/20" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="text-foreground/80">Project Type</Label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/10 text-foreground focus:ring-lime/20"><SelectValue placeholder="Select type" /></SelectTrigger>
                        <SelectContent className="bg-dark-light border-white/10">
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="documentary">Documentary</SelectItem>
                          <SelectItem value="music">Music Video</SelectItem>
                          <SelectItem value="corporate">Corporate</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline" className="text-foreground/80">Timeline</Label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/10 text-foreground focus:ring-lime/20"><SelectValue placeholder="Select timeline" /></SelectTrigger>
                        <SelectContent className="bg-dark-light border-white/10">
                          <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                          <SelectItem value="standard">Standard (1 month)</SelectItem>
                          <SelectItem value="flexible">Flexible (2+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground/80">Message</Label>
                    <Textarea id="message" placeholder="Tell me about your project..." rows={5} required className="bg-white/5 border-white/10 text-foreground placeholder:text-foreground/40 focus:border-lime focus:ring-lime/20 resize-none" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-lime text-dark hover:bg-lime-dark font-mono text-xs uppercase tracking-widest py-6 transition-all">
                    {isSubmitting ? (
                      <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />Sending...</span>
                    ) : (
                      <span className="flex items-center gap-2"><Send className="w-4 h-4" />Send inquiry</span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
