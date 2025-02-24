import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export function Loader() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad]);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-light/80 dark:bg-dark/80 backdrop-blur-md transition-all duration-300">
      <div className="relative flex flex-col items-center">
        {/* Main loader container */}
        <div className="relative w-32 h-32">
          {/* Multiple rotating rings */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border-2 border-primary/30 dark:border-primary/20"
              style={{
                transform: `scale(${1 + i * 0.15}) rotate(${i * 30}deg)`,
                opacity: 1 - i * 0.2,
              }}
            />
          ))}
          
          {/* Animated border */}
          <div 
            className="absolute inset-0 rounded-full border-2 border-primary animate-spin"
            style={{ 
              borderRightColor: 'transparent',
              borderBottomColor: 'transparent',
              animationDuration: '1.5s',
              animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }} 
          />

          {/* Inner rotating gradient circle */}
          <div className="absolute inset-4 rounded-full overflow-hidden">
            <div 
              className="w-full h-full bg-gradient-to-tr from-primary via-orange-500 to-primary animate-spin"
              style={{ animationDuration: '3s' }}
            />
          </div>

          {/* Center static circle */}
          <div className="absolute inset-[35%] rounded-full bg-white dark:bg-dark shadow-lg">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary/10 to-orange-500/10 animate-pulse" />
          </div>
        </div>

        {/* Loading text container */}
        <div className="mt-8 flex flex-col items-center">
          <div className="relative">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Loading
            </div>
            {/* Animated underline */}
            <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-orange-500">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white dark:via-dark to-transparent animate-shine"
                style={{
                  animation: 'shine 1.5s linear infinite',
                  backgroundSize: '200% 100%',
                }}
              />
            </div>
          </div>
          {/* Animated dots */}
          <div className="flex justify-center space-x-1 mt-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-orange-500"
                style={{
                  animation: 'bounce 1s infinite',
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-gradient-to-tr from-primary/20 to-orange-500/20 rounded-full blur-2xl animate-pulse" />
      </div>
    </div>
  );
}
