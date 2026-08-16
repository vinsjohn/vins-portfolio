import type { Service, Project, Testimonial, CaseStudy } from './types';

/* ─────────────────────────────────────────────────────────────
   CASE STUDIES
   [NEED YOUR INPUT] Replace placeholder briefs/results with
   your real project details and outcomes.
   ───────────────────────────────────────────────────────────── */
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-ozr',
    index: '01',
    client: 'OZR Real Estate',
    industry: 'Real Estate · Dubai',
    brief: '[NEED YOUR INPUT] What was OZR Real Estate\'s brief or problem? E.g., "Needed high-quality property walkthrough videos for 12 premium listings to boost online engagement."',
    deliverables: ['Property Videos', 'Drone Footage', 'Social Media Edits', 'Brand Film'],
    result: '[NEED YOUR INPUT] What was the outcome? E.g., "Delivered 12 property videos in 3 weeks, content used across all social channels."',
    image: '/project_realestate.jpg',
    tags: ['Real Estate', 'Video Production', 'Drone', 'Dubai'],
  },
  {
    id: 'cs-epc',
    index: '02',
    client: 'Leading EPC Firm',
    industry: 'EPC · Engineering · Dubai',
    brief: '[NEED YOUR INPUT] What did this EPC company need? E.g., "Required a corporate documentary showcasing their mega infrastructure project for investor presentations."',
    deliverables: ['Corporate Documentary', 'Site Coverage', 'Interview Shoots', 'Post-Production'],
    result: '[NEED YOUR INPUT] What was the result? E.g., "Film used in board presentations and contributed to securing project extension."',
    image: '/project_epc.jpg',
    tags: ['EPC', 'Corporate', 'Documentary', 'Industrial'],
  },
  {
    id: 'cs-corporate',
    index: '03',
    client: 'PMC Consultancy',
    industry: 'PMC · Project Management · UAE',
    brief: '[NEED YOUR INPUT] What was the brief? E.g., "Needed end-to-end content production for their annual review and brand refresh."',
    deliverables: ['Brand Video', 'Event Coverage', 'Presentation Design', 'Social Content'],
    result: '[NEED YOUR INPUT] What was the outcome? E.g., "Annual review video distributed to 500+ stakeholders globally."',
    image: '/project_corporate.jpg',
    tags: ['PMC', 'Brand', 'Corporate', 'Event'],
  },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    num: '// 01',
    icon: '🎬',
    title: 'Corporate Video Production',
    description: 'End-to-end corporate video production for EPC companies, PMC firms, and enterprise clients. Cinematic quality, on time, every time.',
    tags: ['EPC / PMC', 'Brand Films', 'Corporate Docs', 'Event Coverage']
  },
  {
    id: '2',
    num: '// 02',
    icon: '📸',
    title: 'Wedding & Portrait Photography',
    description: 'Capturing timeless moments with a cinematic approach. Specializing in traditional and contemporary wedding storytelling.',
    tags: ['Wedding', 'Portraits', 'Event Coverage', 'Candid']
  },
  {
    id: '3',
    num: '// 03',
    icon: '🎙️',
    title: 'Podcast & Media Production',
    description: 'Professional podcast production — studio-quality audio recording, multi-camera video setup, and distribution-ready output.',
    tags: ['Multi-Cam', 'Audio Mastering', 'Corporate Podcast', 'Video Podcast']
  },
  {
    id: '4',
    num: '// 04',
    icon: '✂️',
    title: 'Professional Video Editing',
    description: 'High-end post-production with professional colour grading, sound design, and motion graphics.',
    tags: ['Colour Grading', 'Motion Graphics', 'Sound Design', 'Post-Production']
  },
  {
    id: '5',
    num: '// 05',
    icon: '💻',
    title: 'Custom Web Apps & Digital Invitations',
    description: 'Bespoke web applications and interactive digital invitations built with modern technologies. Check out my recent live projects below.',
    tags: ['Web Apps', 'Digital Invites', 'Interactive', 'AI Studio'],
    links: [
      { label: 'Keerthy & Vishnu Wedding Invitation', url: 'https://keerthy-vishnu-wedding-invitation-554937157434.us-west1.run.app/' },
      { label: 'Romeo & Rose Wedding Invitation', url: 'https://romeo-rose-wedding-invitation-527343595077.us-west1.run.app/' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'nw-landscape',
    category: 'Nature & Wildlife',
    title: 'THE DRAMATIC SCAPES - LANDSCAPE',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1280&q=80',
    span: 'col-span-12 md:col-span-7 row-span-2',
    description: 'Capturing the raw beauty and scale of natural environments. This series explores dramatic lighting and vast landscapes to convey the power of undisturbed nature.'
  },
  {
    id: 'nw-macro',
    category: 'Nature & Wildlife',
    title: 'SIGHT OF TINY WORLD - MACRO',
    image: 'https://images.unsplash.com/photo-1533158307587-828f0a76cf46?w=1280&q=80',
    span: 'col-span-12 md:col-span-5 row-span-1',
    description: 'A deep dive into the microscopic details of the natural world. Revealing hidden textures, vibrant colors, and intricate structures that are often overlooked by the naked eye.'
  },
  {
    id: 'pj-street',
    category: 'Photojournalism',
    title: 'RUSH AND CROWDED - STREET',
    image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=1280&q=80',
    span: 'col-span-12 md:col-span-5 row-span-1',
    description: 'Documenting the pulse of the city and the candid moments of daily life. This street photography collection captures authentic human interactions, decisive moments, and urban culture in motion.'
  },
  {
    id: 'pj-arch',
    category: 'Photojournalism',
    title: 'SILENT YET SPEAKING STRUCTURES - ARCHITECTURE',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1280&q=80',
    span: 'col-span-12 md:col-span-4 row-span-1',
    description: 'Highlighting the lines, shadows, and forms of modern and historical architecture. These images emphasize the geometric harmony and monumental presence of the built environment.'
  },
  {
    id: 'pj-portrait',
    category: 'Photojournalism',
    title: 'PIERCING EYES AND EXPRESSIONS - PORTRAIT',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1280&q=80',
    span: 'col-span-12 md:col-span-4 row-span-1',
    description: 'Intimate portraits that reveal the subject\'s inner life and character. Focusing on piercing eyes and unguarded expressions to tell profound human stories.'
  },
  {
    id: 'ad-product',
    category: 'Advertising',
    title: 'FRAMING IN THE ARTIFICATION - PRODUCT',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1280&q=80',
    span: 'col-span-12 md:col-span-4 row-span-1',
    description: 'Elevating everyday items into objects of desire through meticulous lighting and styling. Commercial product photography designed to highlight craftsmanship and aesthetic appeal.'
  },
  {
    id: 'ad-food',
    category: 'Advertising',
    title: 'TASTE OF THE HOT AND SPICY - FOOD',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=1280&q=80',
    span: 'col-span-12 md:col-span-6 row-span-1',
    description: 'Vibrant, mouth-watering food photography that focuses on texture, heat, and bold flavors. Styled to evoke the rich sensory experience of culinary arts.'
  },
  {
    id: 'ad-fashion',
    category: 'Advertising',
    title: 'FEEL THE NEW FASHIONABLE ERA - FASHION',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1280&q=80',
    span: 'col-span-12 md:col-span-6 row-span-1',
    description: 'Dynamic fashion editorial work capturing contemporary style and movement. Bridging the gap between commercial appeal and avant-garde artistry.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    text: "Vins delivered our corporate brand film on time and beyond our expectations. The quality was broadcast-level and the process was completely professional.",
    author: "Ahmed Al Rashidi",
    role: "Head of Comms · EPC Firm, Dubai",
    initial: "A"
  },
  {
    id: 't2',
    text: "The wedding photography for Meera & Vishnu was breathtaking. Vins captured every emotion with such grace and cinematic flair.",
    author: "Vishnu K.",
    role: "Groom",
    initial: "V"
  },
  {
    id: 't3',
    text: "His 'Sensation & Perception' series shows a deep understanding of visual storytelling. A true artist behind the lens.",
    author: "Creative Hut",
    role: "Institute of Photography",
    initial: "C"
  }
];
