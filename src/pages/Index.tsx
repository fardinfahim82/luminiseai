import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainPromiseSection from "@/components/PainPromiseSection";
import ROICalculatorSection from "@/components/ROICalculatorSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <PainPromiseSection />
      <ROICalculatorSection />
      <HowItWorksSection />
      <ResultsSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
