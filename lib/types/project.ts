export interface ProjectImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  videoPreview?: string;
  github?: string;
  demo?: string;
  category: 'fullstack' | 'frontend' | 'backend';
  featured: boolean;
  isFreelance?: boolean;
  features?: string[];
  gallery?: ProjectImage[];
  readmeContent?: string;
}
