export interface Service {
  id: string;
  num: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  links?: { label: string; url: string }[];
}

export interface Project {
  id: string;
  category: 'Corporate' | 'Real Estate' | 'Podcast' | 'Presentation' | 'Wedding' | 'Photography' | 'Macro' | 'Street' | 'Architecture' | 'Product' | 'Food' | 'Fashion' | 'Nature & Wildlife' | 'Photojournalism' | 'Advertising' | 'AI Content';
  title: string;
  image: string;
  span: string;
  description?: string;
}

export interface CaseStudy {
  id: string;
  index: string;        // "01", "02", etc.
  client: string;
  industry: string;
  brief: string;
  deliverables: string[];
  result: string;
  image: string;        // Hero image for the case study
  tags: string[];
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  initial: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
