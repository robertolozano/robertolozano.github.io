// Project type for portfolio items
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubLink: string;
  liveLink?: string;
  category?: 'web' | 'ml' | 'mobile' | 'database' | 'other';
}

// Social media link type.
// `name` selects the mark rendered by <SocialIcon>, so no asset path is needed.
export interface SocialLink {
  name: string;
  url: string;
}

// Navigation link type
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

// Hero section data type
export interface HeroData {
  name: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  availability?: string;
}

// Professional experience entry
export interface Experience {
  id: string;
  role: string;
  company: string;
  employmentType?: string;
  location: string;
  dateRange: string;
  highlights: string[];
  techStack: string[];
}

// Education entry
export interface Education {
  id: string;
  degree: string;
  school: string;
  dateRange: string;
  logo?: string;
  monogram?: string;
  description: string;
  coursework?: string[];
}
