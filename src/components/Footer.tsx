import { Github, Instagram, Send } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/firdavs_flow/',
      label: 'Instagram'
    },
    {
      icon: Github,
      href: 'https://github.com/Firdavs-Normurodov',
      label: 'GitHub'
    },
    {
      icon: Send,
      href: 'https://t.me/firdavs24075',
      label: 'Telegram'
    }
  ];

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'works', label: 'Works' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-30" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Firdavs Normurodov
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Full-stack Developer crafting beautiful and functional web experiences
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScroll(link.id)}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:firdavsnormurodov435@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  firdavsnormurodov435@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+998888000724"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  +998 88 800 07 24
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {currentYear} Firdavs Normurodov. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 md:mt-0">
              Made with in Uzbekistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
