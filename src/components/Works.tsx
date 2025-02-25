import { ExternalLink, Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/types";

interface WorksProps {
  posts: Post[];
}

export function Works({ posts }: WorksProps) {
  return (
    <section
      id="works"
      className="relative min-h-screen bg-white dark:bg-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

      <div className="container mx-auto px-4 py-32">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and
            experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10" />
                <Image
                  src={post.image.url}
                  alt={post.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="relative p-6 z-20 -mt-20">
                <Link href={`/work/${post.slug}`}>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transform group-hover:translate-x-2 transition-transform duration-300 hover:text-primary">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                  {post.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6 transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
                  {Array.isArray(post.technologies) &&
                    post.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {tech?.text || ""}
                      </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 transform group-hover:translate-x-2 transition-transform duration-300 delay-150">
                  {post.demoLink && (
                    <Link
                      href={post.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                    >
                      <Globe className="w-5 h-5" />
                      <span>Live Demo</span>
                    </Link>
                  )}
                  {post.githubLink && (
                    <Link
                      href={post.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>Source Code</span>
                    </Link>
                  )}
                  <Link
                    href={`/work/${post.slug}`}
                    className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors ml-auto"
                  >
                    <span>View Details</span>
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>

                {/* Hover Effect Corner */}
                <div className="absolute top-0 right-0 h-24 w-24 transform translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300">
                  <div className="absolute inset-0 rotate-45 bg-gradient-to-r from-primary to-purple-600 blur-lg opacity-0 group-hover:opacity-20" />
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl transition-colors duration-300" />
            </div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No projects to display yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
