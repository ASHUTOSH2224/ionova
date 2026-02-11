import React from 'react';
import { AppWrapper } from '@/components/AppWrapper';
import { Layout } from '@/components/layout/Layout';

// Entity Intelligence Components
import { PlatformPage } from '@/components/entity-intelligence/PlatformPage';
import { CascadeIntelligencePage } from '@/components/entity-intelligence/CascadeIntelligencePage';
import { EvidenceFirstPage } from '@/components/entity-intelligence/EvidenceFirstPage';
import { ProgressiveAutonomyPage } from '@/components/entity-intelligence/ProgressiveAutonomyPage';
import { GovernancePage } from '@/components/entity-intelligence/GovernancePage';
import { OverlayFirstPage } from '@/components/entity-intelligence/OverlayFirstPage';

// Address Intelligence Components
import { OverviewPage } from '@/components/address-intelligence/OverviewPage';
import { MandatePage } from '@/components/address-intelligence/MandatePage';
import { BusinessValuePage } from '@/components/address-intelligence/BusinessValuePage';
import { ImplementationPage } from '@/components/address-intelligence/ImplementationPage';
import { PurposeBuiltPage } from '@/components/address-intelligence/PurposeBuiltPage';

const PAGE_MAP: Record<string, React.ComponentType<any>> = {
    // Entity Intelligence
    'entity-overview': PlatformPage,
    'entity-cascade': CascadeIntelligencePage,
    'entity-evidence': EvidenceFirstPage,
    'entity-autonomy': ProgressiveAutonomyPage,
    'entity-governance': GovernancePage,
    'entity-overlay': OverlayFirstPage,

    // Address Intelligence
    'address-overview': OverviewPage,
    'address-mandate': MandatePage,
    'address-value': BusinessValuePage,
    'address-implementation': ImplementationPage,
    'address-purpose': PurposeBuiltPage,
};

interface PageLayoutProps {
    pageId: string;
    pageProps?: any;
}

export function PageLayout({ pageId, pageProps = {} }: PageLayoutProps) {
    const Component = PAGE_MAP[pageId];

    if (!Component) {
        return (
            <AppWrapper>
                <Layout>
                    <div className="ds-v5">
                        <div className="container py-20 text-center">
                            <h1 className="text-2xl font-bold text-red-600">Page Not Found</h1>
                            <p className="text-gray-600">The requested page component "{pageId}" could not be found.</p>
                        </div>
                    </div>
                </Layout>
            </AppWrapper>
        );
    }

    return (
        <AppWrapper>
            <Layout>
                <div className="ds-v5">
                    <div className="container">
                        <Component {...pageProps} />
                    </div>
                </div>
            </Layout>
        </AppWrapper>
    );
}
