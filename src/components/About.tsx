import { ArrowRight, Code, Cpu, Globe2, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { Skills } from './Skills';

export function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Experienced in both frontend and backend development with modern JavaScript frameworks',
    },
    {
      icon: Globe2,
      title: 'Responsive Design',
      description: 'Creating websites that work seamlessly across all devices and screen sizes',
    },
    {
      icon: Cpu,
      title: 'Technical Expertise',
      description: 'Proficient in multiple programming languages and development tools',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Strong analytical skills and passion for solving complex technical challenges',
    },
  ];

  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="aspect-square w-full max-w-[500px] mx-auto overflow-hidden rounded-2xl">
                <Image
                  src="/assets/about.png"
                  alt="Profile"
                  fill
                  className="object-cover rounded-2xl"
                />
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-2xl opacity-60" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-600 to-primary rounded-full blur-2xl opacity-60" />
              </div>
              {/* Border Gradient */}
              <div className="absolute inset-0 rounded-2xl border-2 border-gray-200 dark:border-gray-700" />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                  About Me
                </span>
              </h2>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Hi! I&apos;m a passionate Full Stack Developer with a love for creating beautiful, functional, and user-friendly websites and applications.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  With expertise in both frontend and backend development, I specialize in building modern web applications using technologies like React, Next.js, Node.js, and various databases.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I&apos;m always eager to learn new technologies and take on challenging projects that push my boundaries and help me grow as a developer.
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  const worksSection = document.getElementById('works');
                  if (worksSection) {
                    worksSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-6 py-3 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 mt-16">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group relative p-8 bg-white/10 dark:bg-gray-900/50 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/20 dark:border-gray-700/30"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5 dark:from-primary/10 dark:to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              {/* Content */}
              <div className="relative">
                {/* Icon container */}
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 dark:from-primary/30 dark:to-purple-600/30 text-primary dark:text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h4>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <Skills />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white dark:bg-gray-900 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#1a1a1a_40%,#63e_100%)] opacity-30" />
      </div>
    </section>
  );
}
