import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ChallengeSection } from "@/components/sections/ChallengeSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { LogosSection } from "@/components/sections/LogosSection";
import { ExploreSection } from "@/components/sections/ExploreSection";
import { CTASection } from "@/components/sections/CTASection";

import { AppWrapper } from "@/components/AppWrapper";

const IndexContent = () => {
  return (
    <Layout>
      <HeroSection />
      <LogosSection />
      <ChallengeSection />
      <PillarsSection />

      <ExploreSection />
      {/* <CTASection /> */}
    </Layout>
  );
};

const Index = () => (
  <AppWrapper>
    <IndexContent />
  </AppWrapper>
);

export default Index;
