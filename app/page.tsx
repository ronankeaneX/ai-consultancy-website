import HeroSection from '@/components/sections/HeroSection';
import ProblemStatement from '@/components/sections/ProblemStatement';
import ServicesPreview from '@/components/sections/ServicesPreview';
import Differentiator from '@/components/sections/Differentiator';
import BusinessAuditForm from '@/components/sections/BusinessAuditForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemStatement />
      <ServicesPreview />
      <Differentiator />
      <BusinessAuditForm />
    </main>
  );
}
