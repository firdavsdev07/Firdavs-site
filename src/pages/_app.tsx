import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/lib/themeContext";
import { Navbar } from "@/components/Navbar";
import { Loader } from "@/components/Loader";
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <ThemeProvider>
      {isReady && <Loader />}
      <div className={`min-h-screen bg-light dark:bg-dark transition-opacity duration-300 ${!isReady ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main className="pt-16">
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  );
}
