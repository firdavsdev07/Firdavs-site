import { GetStaticProps } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Works } from '@/components/Works';
import { Contact } from '@/components/Contact';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getAllPosts } from '@/lib/graphql';
import type { Post } from '@/lib/types';
import { ThemeProvider } from '@/lib/themeContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  const router = useRouter();

  useEffect(() => {
    if (router.query.scrollToWorks === 'true') {
      const worksSection = document.getElementById('works');
      if (worksSection) {
        worksSection.scrollIntoView({ behavior: 'smooth' });
      }
      // Clean up the URL
      router.replace('/', undefined, { shallow: true });
    }
  }, [router]);

  return (
    <ThemeProvider>
      <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <Navbar />
        <Hero />
        <About />
        <div id="works">
        <Works  posts={posts} />
        </div>
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};
