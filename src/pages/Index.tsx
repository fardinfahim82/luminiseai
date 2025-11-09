import HeroSection from "@/components/HeroSection";
import PainPromiseSection from "@/components/PainPromiseSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <PainPromiseSection />
      <HowItWorksSection />
      <ResultsSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;
