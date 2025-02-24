export interface Post {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: {
    html: string;
  };
  image: {
    url: string;
  };
  technologies: Array<{
    text: string;
  }>;
  demoLink?: string;
  githubLink?: string;
  createdAt: string;
}
