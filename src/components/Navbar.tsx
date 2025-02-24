import { useState, useEffect } from 'react';
import { useTheme } from '@/lib/themeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useRouter } from 'next/router';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const router = useRouter();

  const navigateToSection = (sectionId: string) => {
    if (router.pathname !== '/') {
      router.push('/');
      return;
    }
  
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  // Handle scroll progress and section updates
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      
      const progress = (scrollTop / scrollableHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Only update active section on home page
      if (router.pathname === '/') {
        const sections = ['home', 'about', 'works', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    // Initialize scroll progress on page load
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [router.pathname]);

  // Handle scroll after navigation from other pages
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === '/') {
        setTimeout(() => {
          const element = document.getElementById('home');
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'works', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out transform">
        {/* Progress bar */}
        <div 
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 ease-out" 
          style={{ width: `${scrollProgress}%` }} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <button
              onClick={() => navigateToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
            >
              Firdavs
            </button>

            {/* Mobile menu button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-90"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-primary transform transition-transform duration-200 rotate-0 hover:rotate-180" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-900 dark:text-white transform transition-transform duration-200 rotate-0 hover:-rotate-180" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-90"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-900 dark:text-white transform rotate-0 transition-transform duration-200" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-900 dark:text-white transform rotate-0 transition-transform duration-200" />
                )}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => navigateToSection(item.id)}
                    className={`text-gray-900 dark:text-white transition-colors duration-200 ease-in-out group-hover:text-primary transform hover:scale-105 active:scale-95 ${
                      activeSection === item.id && router.pathname === '/' ? 'text-primary' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                  <div className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-200 ease-out ${
                    activeSection === item.id && router.pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </div>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-90"
                aria-label="Toggle theme"
              >
                <div className="transform transition-transform duration-300 ease-in-out hover:rotate-180">
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-primary" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-900 dark:text-white" />
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateToSection(item.id)}
                  className={`w-full text-left text-gray-900 dark:text-white transition-all duration-200 ease-in-out px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:translate-x-2 ${
                    activeSection === item.id && router.pathname === '/' ? 'text-primary bg-gray-100 dark:bg-gray-800 translate-x-2' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
