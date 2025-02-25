import { ArrowDown, Download, Github, Instagram, Send } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Firdavs-Normurodov",
      label: "GitHub",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/firdavs_flow",
      label: "LinkedIn",
    },
    {
      icon: Send,
      href: "https://t.me/firdavs24075",
      label: "Email",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-light dark:bg-dark overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

      {/* Content Container */}
      <div className="container mx-auto px-4 py-32 flex flex-col items-center text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Hello, I&apos;m Firdavs
          </span>
        </h1>

        {/* Subtitle with Typing Effect */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
          Full Stack Developer specializing in building exceptional digital
          experiences
        </p>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
          I craft responsive websites where technology meets creativity.
          Currently, I&apos;m focused on building accessible, human-centered
          products.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-3 text-lg font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-colors duration-300"
          >
            Contact Me
            <ArrowDown className="w-5 h-5" />
          </button>
          <Link
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 text-lg font-medium text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 rounded-full transition-colors duration-300"
          >
            Resume <Download className="w-5 h-5" />
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      </div>
    </section>
  );
}
