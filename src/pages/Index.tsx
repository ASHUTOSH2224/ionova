import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ChallengeSection } from "@/components/sections/ChallengeSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { ExploreSection } from "@/components/sections/ExploreSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ChallengeSection />
      <PillarsSection />
      <ExploreSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
