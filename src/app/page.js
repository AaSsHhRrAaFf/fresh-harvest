
import AboutSection from '@/components/sections/AboutSection';
import HeroSection from '../components/sections/HeroSection';
import SeasonalBundle from '@/components/sections/SeasonalBundle';
import BlogSection from '@/components/sections/BlogSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* Other sections will go here */}
      <AboutSection/>
      <SeasonalBundle/>
      <TestimonialsSection/>
      <BlogSection/>
    </main>
  );
}
