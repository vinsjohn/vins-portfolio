import { useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import WorkGridSection from './sections/WorkGridSection';
import ProjectGallerySection from './sections/ProjectGallerySection';
import CaseStudySection from './sections/CaseStudySection';
import BTSSection from './sections/BTSSection';
import PhilosophySection from './sections/PhilosophySection';
import TestimonialsSection from './sections/TestimonialsSection';
import DeliverablesSection from './sections/DeliverablesSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';
import Navigation from './components/Navigation';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative bg-dark">
      <div className="grain-overlay" />
      <div className="vignette-overlay" />
      <Navigation />
      <main className="relative">
        <HeroSection className="z-10" />
        <WorkGridSection className="z-20" />
        <ProjectGallerySection className="z-25" />
        <CaseStudySection className="z-30" />
        <BTSSection className="z-40" />
        <PhilosophySection className="z-50" />
        <TestimonialsSection className="z-50" />
        <DeliverablesSection className="z-50" />
        <ContactSection className="z-50" />
        <FooterSection className="z-50" />
      </main>
    </div>
  );
}

export default App;
