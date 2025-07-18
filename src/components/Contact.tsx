import { Github, Instagram, Mail, Phone, Send } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  const contactInfo = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/firdavs_flow/',
      username: '@firdavs_flow'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Firdavs-Normurodov',
      username: '@Firdavs-Normurodov'
    },
    {
      icon: Send,
      label: 'Telegram',
      href: 'https://t.me/firdavs240'
      username: '@firdavs240'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:firdavsnormurodov435@gmail.com',
      username: 'firdavsnormurodov435@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+998888000724',
      username: '+998 88 800 07 24'
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen bg-white dark:bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

      <div className="container mx-auto px-4 py-32">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out through any of these platforms. I&apos;m always open to new opportunities and connections!
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <Link
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-6 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <contact.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                      {contact.label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {contact.username}
                    </p>
                  </div>
                  {/* Hover Effect Corner */}
                  <div className="absolute top-0 right-0 h-24 w-24 transform translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300">
                    <div className="absolute inset-0 rotate-45 bg-gradient-to-r from-primary to-purple-600 blur-lg opacity-0 group-hover:opacity-20" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400">
            Looking forward to connecting with you!
          </p>
        </div>
      </div>
    </section>
  );
}
