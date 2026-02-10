import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ChallengeSection } from "@/components/sections/ChallengeSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { LogosSection } from "@/components/sections/LogosSection";
import { ExploreSection } from "@/components/sections/ExploreSection";
import { DifferentiationSection } from "@/components/sections/DifferentiationSection";
import { ImplementationSection } from "@/components/sections/ImplementationSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABandSection } from "@/components/sections/CTABandSection";

import { AppWrapper } from "@/components/AppWrapper";

const IndexContent = () => {
  return (
    <Layout>
      <HeroSection />
      <ChallengeSection />
      <PillarsSection />
      <LogosSection />
      <ExploreSection />
      <DifferentiationSection />
      <ImplementationSection />
      <InsightsSection />
      <FAQSection />
      <CTABandSection />
    </Layout>
  );
};

const Index = () => (
  <AppWrapper>
    <IndexContent />
  </AppWrapper>
);

export default Index;
