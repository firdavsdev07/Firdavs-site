import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getAllPosts, getPostBySlug } from '@/lib/graphql';
import { Post } from '@/lib/types';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Head from 'next/head';
import { useEffect } from 'react';

interface ProjectProps {
  post: Post;
}

export default function Project({ post }: ProjectProps) {
  const router = useRouter();

  useEffect(() => {
    // Listen for our custom scroll event
    const handleScrollToWorks = () => {
      const worksSection = document.getElementById('works');
      if (worksSection) {
        worksSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('scrollToWorks', handleScrollToWorks);
    
    // Check if we need to scroll on mount
    if (router.query.scrollToWorks === 'true') {
      handleScrollToWorks();
    }

    return () => {
      window.removeEventListener('scrollToWorks', handleScrollToWorks);
    };
  }, [router.query.scrollToWorks]);

  if (router.isFallback || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="animate-pulse flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    router.push({
      pathname: '/',
      query: { scrollToWorks: 'true' }
    });
  };

  return (
    <>
      <Head>
        <title>{post.title} | Portfolio</title>
        <meta name="description" content={post.description} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

        {/* Hero Section */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${post.image.url})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4 mb-4">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 text-center max-w-2xl px-4">
              {post.description}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          {/* Navigation and Links Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
            {/* Back Button */}
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors transform hover:-translate-x-1"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </button>

            {/* Project Links */}
            <div className="flex flex-wrap gap-4">
              {post.githubLink && (
                <a
                  href={post.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>Source Code</span>
                </a>
              )}
              {post.demoLink && (
                <a
                  href={post.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Content Container */}
          <div className="relative bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 p-8">
            {/* Technologies */}
            {post.technologies && post.technologies.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    Technologies Used
                  </span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {post.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech.text}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Content */}
            <div className="prose max-w-none
              prose-headings:text-gray-900 dark:prose-headings:text-white
              prose-p:text-gray-600 dark:prose-p:text-gray-300
              prose-a:text-primary hover:prose-a:text-primary/80
              prose-strong:text-gray-900 dark:prose-strong:text-white
              prose-code:text-primary dark:prose-code:text-primary
              prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800
              prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700
              prose-pre:rounded-xl prose-pre:p-4
              prose-img:rounded-xl prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: post.content.html }}
            />

            {/* Hover Effect Corner */}
            <div className="absolute top-0 right-0 h-24 w-24 transform translate-x-12 -translate-y-12">
              <div className="absolute inset-0 rotate-45 bg-gradient-to-r from-primary to-purple-600 blur-lg opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ProjectProps> = async ({ params }) => {
  try {
    const slug = params?.slug as string;
    const post = await getPostBySlug(slug);

    if (!post) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      notFound: true,
    };
  }
};
