import { usePageNavigation } from '@/hooks/usePageNavigation';
import { PlatformPage } from '@/components/entity-intelligence/PlatformPage';
import { EvidenceFirstPage } from '@/components/entity-intelligence/EvidenceFirstPage';
import { OverlayFirstPage } from '@/components/entity-intelligence/OverlayFirstPage';
import { ProgressiveAutonomyPage } from '@/components/entity-intelligence/ProgressiveAutonomyPage';
import { CascadeIntelligencePage } from '@/components/entity-intelligence/CascadeIntelligencePage';
import { GovernancePage } from '@/components/entity-intelligence/GovernancePage';
import { SpaFooter } from '@/components/design-system/SpaFooter';
import { Layout } from '@/components/layout/Layout';
import { AppWrapper } from '@/components/AppWrapper';

const pages = ['platform', 'evidence', 'overlay', 'autonomy', 'cascade', 'governance'];

export default function EntityIntelligenceSPA() {
  const { activePage, navigate } = usePageNavigation(pages, 'platform');

  return (
    <AppWrapper>
      <Layout>
        <div className="ds-v5">
          {activePage === 'platform' && <PlatformPage navigate={navigate} />}
          {activePage === 'evidence' && <EvidenceFirstPage navigate={navigate} />}
          {activePage === 'overlay' && <OverlayFirstPage navigate={navigate} />}
          {activePage === 'autonomy' && <ProgressiveAutonomyPage navigate={navigate} />}
          {activePage === 'cascade' && <CascadeIntelligencePage navigate={navigate} />}
          {activePage === 'governance' && <GovernancePage navigate={navigate} />}
          <SpaFooter />
        </div>
      </Layout>
    </AppWrapper>
  );
}
