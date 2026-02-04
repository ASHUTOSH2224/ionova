import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ChallengeSection } from "@/components/sections/ChallengeSection";
import { ROICalculatorSection } from "@/components/sections/ROICalculatorSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { ParisProblemSection } from "@/components/sections/ParisProblemSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ChallengeSection />
      <ROICalculatorSection />
      <PillarsSection />
      <ParisProblemSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
