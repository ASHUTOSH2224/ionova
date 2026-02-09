import { usePageNavigation } from '@/hooks/usePageNavigation';
import { OverviewPage } from '@/components/address-intelligence/OverviewPage';
import { MandatePage } from '@/components/address-intelligence/MandatePage';
import { BusinessValuePage } from '@/components/address-intelligence/BusinessValuePage';
import { ImplementationPage } from '@/components/address-intelligence/ImplementationPage';
import { PurposeBuiltPage } from '@/components/address-intelligence/PurposeBuiltPage';
import { SpaFooter } from '@/components/design-system/SpaFooter';
import { Layout } from '@/components/layout/Layout';
import { AppWrapper } from '@/components/AppWrapper';

const pages = ['overview', 'mandate', 'business', 'implementation', 'purpose'];

export default function AddressIntelligenceSPA() {
  const { activePage, navigate } = usePageNavigation(pages, 'overview');

  return (
    <AppWrapper>
      <Layout>
        <div className="ds-v5">
          {activePage === 'overview' && <OverviewPage navigate={navigate} />}
          {activePage === 'mandate' && <MandatePage navigate={navigate} />}
          {activePage === 'business' && <BusinessValuePage navigate={navigate} />}
          {activePage === 'implementation' && <ImplementationPage navigate={navigate} />}
          {activePage === 'purpose' && <PurposeBuiltPage navigate={navigate} />}
          <SpaFooter />
        </div>
      </Layout>
    </AppWrapper>
  );
}
