import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ExternalLink, Play } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
}

interface ProjectGallerySectionProps {
  className?: string;
}

const ProjectGallerySection = ({ className = '' }: ProjectGallerySectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    { id: 1, title: 'Corporate Vision 2025', category: 'Corporate', client: 'Al-Futtaim Group', year: '2025', image: '/project_corporate.jpg', description: 'Annual corporate video showcasing company milestones, employee stories, and future vision.', tags: ['Corporate', 'Interview'] },
    { id: 2, title: 'Palm Jumeirah Estates', category: 'Real Estate', client: 'Nakheel Properties', year: '2025', image: '/project_realestate.jpg', description: 'Luxury property showcase featuring aerial cinematography and interior walkthroughs.', tags: ['Real Estate', 'Aerial'] },
    { id: 3, title: 'The Midnight Echo', category: 'Podcast', client: 'Haven Media', year: '2024', image: '/project_podcast.jpg', description: 'Complete podcast production including multi-camera setup and professional audio.', tags: ['Podcast', 'Multi-camera'] },
    { id: 4, title: 'Desert Bloom Wedding', category: 'Event', client: 'Private Client', year: '2024', image: '/project_event.jpg', description: 'Cinematic wedding coverage including ceremony, reception, and highlight reel.', tags: ['Wedding', 'Event'] },
    { id: 5, title: 'Lumina Fragrance', category: 'Commercial', client: 'Lumina Beauty', year: '2025', image: '/project_brand.jpg', description: 'High-end product commercial featuring slow-motion cinematography and studio lighting.', tags: ['Commercial', 'Product'] },
    { id: 6, title: 'Dubai From Above', category: 'Documentary', client: 'Tourism Dubai', year: '2024', image: '/project_aerial.jpg', description: 'Aerial documentary showcasing Dubai\'s architectural marvels and urban development.', tags: ['Documentary', 'Aerial'] },
    { id: 7, title: 'Social First Campaign', category: 'Social Media', client: 'Mosaic Agency', year: '2025', image: '/project_social.jpg', description: 'Vertical and square format content optimized for Instagram, TikTok, and YouTube Shorts.', tags: ['Social Media', 'Vertical'] },
    { id: 8, title: 'Industrial Excellence', category: 'EPC', client: 'Petrofac', year: '2024', image: '/project_epc.jpg', description: 'Industrial documentation and safety training videos for construction projects.', tags: ['Industrial', 'EPC'] },
    { id: 9, title: 'Voices of Change', category: 'Documentary', client: 'Independent', year: '2024', image: '/project_interview.jpg', description: 'Short documentary featuring interviews with UAE-based entrepreneurs.', tags: ['Documentary', 'Interview'] },
  ];

  const categories = ['All', 'Corporate', 'Real Estate', 'Commercial', 'Documentary', 'Event', 'Social Media', 'EPC'];
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter || p.tags.includes(activeFilter));

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className={`relative min-h-screen bg-dark py-24 lg:py-32 ${className}`}>
      <div className="plus-grid" />
      <div className="relative z-10 w-full px-6 lg:px-16">
        <div className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-mono text-xs uppercase tracking-widest text-lime mb-4 block">Portfolio</span>
          <h2 className="font-heading font-black text-section text-foreground uppercase tracking-tight">Selected Projects</h2>
          <p className="text-foreground/60 text-lg mt-4 max-w-2xl">A curated collection of work spanning corporate, commercial, documentary, and creative projects.</p>
        </div>

        <div className={`flex flex-wrap gap-3 mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveFilter(cat)} className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-widest transition-all ${
              activeFilter === cat ? 'bg-lime text-dark' : 'bg-white/5 text-foreground/60 hover:bg-white/10 hover:text-foreground'
            }`}>{cat}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={project.id} onClick={() => setSelectedProject(project)}
              className={`project-card card-frame group cursor-pointer overflow-hidden transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`} style={{ transitionDelay: `${150 + index * 50}ms` }}>
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${project.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-lime/90 flex items-center justify-center"><Play className="w-6 h-6 text-dark ml-1" /></div>
                </div>
                <div className="absolute top-3 left-3"><span className="px-3 py-1 rounded-full bg-dark/80 backdrop-blur-sm font-mono text-[10px] uppercase tracking-wider text-foreground/80">{project.category}</span></div>
                <div className="absolute top-3 right-3"><span className="font-mono text-xs text-foreground/60">{project.year}</span></div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-foreground mb-1 group-hover:text-lime transition-colors">{project.title}</h3>
                <p className="text-foreground/50 text-sm mb-3">{project.client}</p>
                <p className="text-foreground/60 text-sm line-clamp-2 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-white/5 font-mono text-[10px] uppercase tracking-wider text-foreground/50">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button onClick={() => alert('Full portfolio coming soon!')} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-lime text-dark font-mono text-xs uppercase tracking-widest hover:bg-lime-dark transition-colors">
            <span>View All Projects</span><ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-dark rounded-3xl border border-white/10" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-dark/80 flex items-center justify-center text-white hover:bg-lime hover:text-dark transition-colors"><span className="text-xl">&times;</span></button>
            <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${selectedProject.image})` }}><div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" /></div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div><span className="font-mono text-xs uppercase tracking-widest text-lime mb-2 block">{selectedProject.category}</span><h3 className="font-heading font-black text-3xl text-foreground">{selectedProject.title}</h3></div>
                <span className="font-mono text-sm text-foreground/50">{selectedProject.year}</span>
              </div>
              <p className="text-foreground/60 text-lg mb-6">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag, i) => <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 font-mono text-xs uppercase tracking-wider text-foreground/60">{tag}</span>)}
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => alert('Video player coming soon!')} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-lime text-dark font-mono text-xs uppercase tracking-widest hover:bg-lime-dark transition-colors"><Play className="w-4 h-4" /><span>Watch Video</span></button>
                <button onClick={() => alert('Case study coming soon!')} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-foreground font-mono text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"><ExternalLink className="w-4 h-4" /><span>View Case Study</span></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectGallerySection;
