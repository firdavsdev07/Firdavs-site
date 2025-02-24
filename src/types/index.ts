export interface Post {
  title: string;
  description: string;
  slug: string;
  technologies: {
    html: string;
    text: string;
  };
  image: {
    url: string;
  };
  content?: {
    html: string;
    text: string;
  };
  githubLink?: string;
  demoLink?: string;
  createdAt: string;
}

export type Theme = 'light' | 'dark';
