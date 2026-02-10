import { useState } from 'react';

interface Props {
  navigate: (page: string) => void;
}

export function ImplementationPage({ navigate }: Props) {
  return (
    <div className="implementation-page">
      <Hero />
      <Architecture />
      <IntegrationPoints />
      <Timeline />
      <Safety />
      <Faq />
      <RelatedPillars navigate={navigate} />
    </div>
  );
}

function Hero() {
  return (
    <div className="hero">

      <div className="hero-badge"><span className="pulse-dot"></span><span style={{ position: 'relative', zIndex: 1 }}>Pillar 3 · Implementation</span></div>
      <h1>One Integration. Full Compliance. <span className="accent">Zero Legacy Overhaul.</span></h1>
      <p className="hero-sub">The most persistent objection to structured address compliance is the assumption that it requires replacing core payment systems. <strong>It does not.</strong> The integration effort is identical for hybrid and structured.</p>
      <div className="btn-row">
        <button className="btn btn-accent">See Architecture Demo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></button>
        <button className="btn btn-outline">Download Technical Overview</button>
      </div>
    </div>
  );
}

function Architecture() {
  return (
    <div className="section">
      <div className="section-label">Architecture</div>
      <div className="section-title">The &quot;Sidecar&quot; Architecture</div>
      <div className="content-block" style={{ marginTop: 'var(--space-lg)' }}>
        <p>The address resolution engine operates as an adjacent service. It does not replace any component. No modifications to core banking systems, payment engines, or legacy infrastructure.</p>
      </div>
      <div className="arch-diagram">
        <pre>{`  ┌─────────────────────────────────────────────────────────────┐
  │                    EXISTING INFRASTRUCTURE                   │
  │                                                             │
  │  ┌──────────┐    ┌───────────────┐    ┌──────────────────┐ │
  │  │ Payment  │───▶│  Middleware   │───▶│  Correspondent   │ │
  │  │ Initiation│   │  (MuleSoft,  │    │  Banking /       │ │
  │  │ System   │    │   Volante,   │    │  SWIFT Network   │ │
  │  │          │    │   Finastra)  │    │                  │ │
  │  └──────────┘    └──────┬───────┘    └──────────────────┘ │
  │                         │                                   │
  │                    API Call                                  │
  │                         │                                   │
  │                  ┌──────▼───────┐                           │
  │                  │   `}<span style={{ color: 'var(--cyan-400)' }}>ioNova</span>{`     │                           │
  │                  │   Address    │  ◀── SIDECAR SERVICE      │
  │                  │   Resolution │      (No core changes)    │
  │                  │   Engine     │                           │
  │                  └──────────────┘                           │
  │                                                             │
  └─────────────────────────────────────────────────────────────┘`}</pre>
      </div>
    </div>
  );
}

function IntegrationPoints() {
  return (
    <div className="section">
      <div className="section-label">Integration Points</div>
      <div className="section-title">Supported Middleware Platforms</div>
      <div className="feature-grid">
        <div className="feature-item">
          <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg></div>
          <div className="feature-text"><h4>MuleSoft Anypoint</h4><p>Pre-built connector available for Anypoint Exchange.</p></div>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg></div>
          <div className="feature-text"><h4>Volante VolPay</h4><p>Direct API integration with VolPay message transformation layer.</p></div>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg></div>
          <div className="feature-text"><h4>Finastra Fusion</h4><p>Integration via FusionFabric.cloud open API framework.</p></div>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg></div>
          <div className="feature-text"><h4>Custom / SWIFT Direct</h4><p>Standard REST API or Alliance Lite2 and Alliance Access paths.</p></div>
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div className="section">
      <div className="section-label">Timeline</div>
      <div className="section-title">Implementation: Week by Week</div>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-phase">Phase 1 · Weeks 1–4</div>
          <div className="timeline-title">Analysis & Configuration</div>
          <div className="timeline-desc">Audit data quality, map payment flows, identify integration points, configure country-specific parsing rules, define confidence thresholds, complete integration design.</div>
        </div>
        <div className="timeline-item">
          <div className="timeline-phase">Phase 2 · Weeks 5–10</div>
          <div className="timeline-title">Integration & Testing</div>
          <div className="timeline-desc">Implement API connection, build message interception, functional testing across corridors, validate ISO 20022 schema compliance, volume and performance testing.</div>
        </div>
        <div className="timeline-item active">
          <div className="timeline-phase">Phase 3 · Weeks 11–16</div>
          <div className="timeline-title">Deployment & Go-Live</div>
          <div className="timeline-desc">Staged rollout to production, monitor accuracy, extend to all corridors, optimise rules, complete knowledge transfer and operational handover.</div>
        </div>
      </div>
    </div>
  );
}

function Safety() {
  return (
    <div className="section">
      <div className="section-label">Safety</div>
      <div className="section-title">The Automatic Fallback: Zero Payment Disruption</div>
      <div className="content-block" style={{ marginTop: 'var(--space-lg)' }}>
        <p>Every resolution attempt produces a <strong>confidence score</strong>. Above threshold → fully structured output. Below threshold → automatic fallback to hybrid format, populating maximum structured elements. <strong>No payment is ever held, delayed, or rejected.</strong></p>
        <p>Initial implementations achieve 85–90% full structuring rates, rising to <strong>95%+ within the first quarter</strong> of production operation.</p>
      </div>
      <div className="alert alert-green">
        <div className="alert-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></div>
        <div className="alert-content">
          <div className="alert-title">Circuit-Breaker Protection</div>
          <div className="alert-body">If the resolution service experiences disruption, payments route through the existing flow automatically. Zero downtime risk.</div>
        </div>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <div className="section">
      <div className="section-label">FAQ</div>
      <div className="section-title">Implementation FAQs</div>
      <div className="faq-list">
        <FaqItem
          q="Does implementing address intelligence require replacing core banking systems?"
          a="No. This is the most persistent misconception about structured address compliance. The ioNova address resolution engine operates as a sidecar service alongside existing infrastructure—it does not replace any component. No modifications are required to core banking systems, payment engines, or legacy infrastructure. The engine connects via standard API to existing middleware layers (MuleSoft, Volante, Finastra, or direct SWIFT connections) and processes addresses in the message flow without disrupting payment routing."
        />
        <FaqItem
          q="What is sidecar architecture for payment address resolution?"
          a="Sidecar architecture is a deployment pattern where the address resolution engine operates as an adjacent, independent service that intercepts payment messages via API call, resolves and structures the address data, and returns the enriched message—all without modifying the core payment flow. The middleware platform makes an API call to the sidecar service during message processing. If the service is unavailable, payments automatically route through the existing flow via a circuit-breaker mechanism. This means zero downtime risk and no dependency on the resolution engine for payment continuity."
        />
        <FaqItem
          q="How long does it take to implement ISO 20022 address structuring?"
          a="Typical implementation completes in 10–16 weeks across three phases. Phase 1 (weeks 1–4) covers data quality audit, payment flow mapping, integration point identification, and country-specific parsing rule configuration. Phase 2 (weeks 5–10) handles API connection implementation, message interception, functional testing across corridors, and ISO 20022 schema compliance validation. Phase 3 (weeks 11–16) manages staged production rollout, accuracy monitoring, corridor extension, and operational handover. Compare this to 18–36 months for building in-house or 6–18 months for retrofitting postal tools."
        />
        <FaqItem
          q="What middleware platforms support address intelligence integration?"
          a="ioNova provides pre-built integration for the most common payment middleware platforms: MuleSoft Anypoint (via pre-built connector on Anypoint Exchange), Volante VolPay (direct API integration with the message transformation layer), and Finastra Fusion (via the FusionFabric.cloud open API framework). For institutions using other platforms, a standard REST API is available, along with direct SWIFT integration paths via Alliance Lite2 and Alliance Access."
        />
        <FaqItem
          q="What happens if the address resolution service goes down during payment processing?"
          a="No payment is ever held, delayed, or rejected due to the address resolution service. A built-in circuit-breaker mechanism ensures that if the resolution service experiences any disruption, payments automatically route through the existing flow—exactly as they did before integration. Additionally, every resolution attempt produces a confidence score: addresses above the confidence threshold receive fully structured output, while those below the threshold automatically fall back to hybrid format, populating the maximum number of structured elements possible. Initial implementations achieve 85–90% full structuring, rising to 95%+ within the first quarter."
        />
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setIsOpen(!isOpen)}>
        {q}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
      </div>
      <div className="faq-a">{a}</div>
    </div>
  );
}

function RelatedPillars({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div className="section">
      <div className="section-label">Explore</div>
      <div className="section-title">Related Pillars</div>
      <div className="related-grid">
        <div className="related-card" onClick={() => navigate('mandate')} style={{ cursor: 'pointer' }}>
          <h4>Regulatory Mandate →</h4><p>What EPC, SWIFT, and CPMI require before November 2026.</p>
        </div>
        <div className="related-card" onClick={() => navigate('business')} style={{ cursor: 'pointer' }}>
          <h4>Business Value →</h4><p>The $8–12B problem and the economics of structured data.</p>
        </div>
        <div className="related-card" onClick={() => navigate('purpose')} style={{ cursor: 'pointer' }}>
          <h4>Why Purpose-Built? →</h4><p>Why postal APIs and LLMs fail at payment address compliance.</p>
        </div>
      </div>
    </div>
  );
}
