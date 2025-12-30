import HeroSection from '@/components/sections/HeroSection';
import ProblemStatement from '@/components/sections/ProblemStatement';
import ServicesPreview from '@/components/sections/ServicesPreview';
import Differentiator from '@/components/sections/Differentiator';
import CaseStudies from '@/components/sections/CaseStudies';
import ProcessOverview from '@/components/sections/ProcessOverview';
import BusinessAuditForm from '@/components/sections/BusinessAuditForm';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemStatement />
      <ServicesPreview />
      <Differentiator />
      <CaseStudies />
      <ProcessOverview />
      <div id="audit-form">
        <BusinessAuditForm />
      </div>
      <FinalCTA />
    </>
  );
}
