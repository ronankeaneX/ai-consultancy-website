import HeroSection from '@/components/sections/HeroSection';
import ProblemStatement from '@/components/sections/ProblemStatement';
import ServicesPreview from '@/components/sections/ServicesPreview';
import Differentiator from '@/components/sections/Differentiator';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemStatement />
      <ServicesPreview />
      <Differentiator />
    </main>
  );
}
