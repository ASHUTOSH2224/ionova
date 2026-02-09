import { ScrollReveal } from '@/components/design-system/ScrollReveal';
import { HeroBadge } from '@/components/design-system/HeroBadge';
import { FaqAccordion } from '@/components/design-system/FaqAccordion';

interface OverviewPageProps {
  navigate: (page: string) => void;
}

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const overviewFaqs = [
  {
    q: 'What is the difference between address validation and address intelligence?',
    a: 'Address validation confirms that a physical location exists\u2014"can a letter be delivered here?" Address intelligence resolves, structures, and enriches address data for financial compliance\u2014"does this address identify a legal entity in a format that satisfies ISO 20022, sanctions screening, and payment routing across 195 countries?" These are fundamentally different problems.',
  },
  {
    q: 'What is the difference between structured and hybrid addresses?',
    a: (
      <>
        A structured address populates all components in dedicated XML elements: &lt;StrtNm&gt;, &lt;BldgNb&gt;, &lt;TwnNm&gt;, &lt;PstCd&gt;, &lt;Ctry&gt;.
        A hybrid uses some structured elements plus free-text address lines. Structured is the regulatory mandate; hybrid is the allowed fallback.
        Because hybrid is a subset of structured, delivering structured automatically satisfies hybrid with identical implementation effort.
      </>
    ),
  },
  {
    q: 'What does ISO 20022 require for payment addresses?',
    a: 'ISO 20022 mandates that payment messages contain address data in structured XML elements rather than free-text blocks. This means addresses must be broken into discrete, semantically tagged components\u2014street name, building number, postal code, town name, and country code\u2014within the ISO 20022 postal address schema. The European Payments Council (EPC), SWIFT CBPR+, and CPMI/BIS all converge on structured addressing as the target state, with November 2026 as the enforcement milestone for SWIFT traffic.',
  },
  {
    q: 'How does address intelligence improve sanctions screening?',
    a: (
      <>
        When address data is unstructured, sanctions screening engines perform string-level matching, which generates enormous false positive rates\u2014often exceeding 95%.
        For example, "Cuba Street, Wellington" triggers Cuba sanctions alerts. With structured addresses, screening operates at field level:
        matching &lt;Ctry&gt; against sanctioned jurisdictions and &lt;TwnNm&gt; against city databases independently.
        This reduces false positives by approximately 30%, allowing compliance teams to focus on genuine risk rather than clearing noise.
      </>
    ),
  },
  {
    q: 'Can AI or LLMs be used for payment address parsing?',
    a: 'Large language models (LLMs) are architecturally unsuited for payment address compliance. They produce non-deterministic output\u2014identical inputs may yield different results across invocations\u2014which is incompatible with sanctions screening and audit requirements. LLMs can hallucinate postal codes, fabricate building numbers, or select the wrong city. They also introduce 1\u20135 second latency per request (payments require sub-100ms), and operate as black boxes without the explainability regulators demand. Purpose-built, deterministic address resolution engines are the only approach that satisfies regulatory, operational, and audit requirements simultaneously.',
  },
  {
    q: 'How does it work with existing payment systems?',
    a: 'ioNova operates as a "sidecar" service\u2014connecting to existing payment infrastructure via standard API without replacing or modifying core systems. Integration works with MuleSoft, Volante, Finastra, and similar middleware solutions.',
  },
  {
    q: 'How long does implementation take?',
    a: 'Typical implementation completes in 10\u201316 weeks: weeks 1\u20134 for analysis and configuration, weeks 5\u201310 for integration and testing, and weeks 11\u201316 for production deployment. No legacy system changes are required.',
  },
  {
    q: 'What countries and writing systems does address intelligence support?',
    a: "ioNova's address intelligence engine covers 195 countries and over 50 writing systems natively\u2014including Latin, Cyrillic, Arabic, Chinese, Japanese, Korean (CJK), Devanagari, Thai, and Hebrew scripts. This is critical for cross-border payment processing where addresses arrive in multiple scripts and formats. Unlike postal validation tools that focus primarily on major Latin markets, purpose-built payment address resolution handles script normalisation, transliteration, and multi-format parsing from day one.",
  },
];

export function OverviewPage({ navigate }: OverviewPageProps) {
  return (
    <div>
      {/* Hero */}
      <div className="hero">
        <div className="container">
          <HeroBadge text="Address Intelligence Platform" />
          <h1>
            The Missing Layer in Your <span className="accent">Payment Infrastructure</span>
          </h1>
          <p className="hero-sub">
            <strong>Every cross-border payment carries an address. Most of them are wrong.</strong> Unstructured,
            inconsistent address data costs the global payments industry $8&ndash;12 billion annually. With ISO 20022
            mandating structured addresses by November 2026, the question is whether you build to the floor&mdash;or the
            ceiling.
          </p>
          <div className="btn-row">
            <button className="btn btn-accent" onClick={() => navigate('business')}>
              Calculate Your Savings <ArrowIcon />
            </button>
            <button className="btn btn-outline">
              Request a Demo <ArrowIcon />
            </button>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="container">
        <ScrollReveal>
          <div className="kpi-grid">
            <div className="kpi-tile">
              <div className="kpi-value">$8-12B</div>
              <div className="kpi-label">Annual Industry Cost</div>
            </div>
            <div className="kpi-tile">
              <div className="kpi-value blue">98%+</div>
              <div className="kpi-label">STP Rate Achieved</div>
            </div>
            <div className="kpi-tile">
              <div className="kpi-value teal">~30%</div>
              <div className="kpi-label">Fewer False Positives</div>
            </div>
            <div className="kpi-tile">
              <div className="kpi-value">195</div>
              <div className="kpi-label">Countries Covered</div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* What Is Address Intelligence */}
      <div className="container">
        <ScrollReveal>
          <div className="section">
            <div className="section-label">Definition</div>
            <div className="section-title">What Is Address Intelligence?</div>
            <div className="content-block" style={{ marginTop: 'var(--space-lg)' }}>
              <p>
                Address intelligence is the capability to parse, validate, enrich, and structure postal address data
                within financial messaging systems to meet ISO 20022 compliance and operational quality standards.
              </p>
              <p>
                Unlike conventional address validation&mdash;which confirms whether a physical location exists for postal
                delivery&mdash;address intelligence operates at the intersection of{' '}
                <strong>regulatory compliance</strong>, <strong>financial crime prevention</strong>, and{' '}
                <strong>payment processing efficiency</strong>.
              </p>
              <p>
                It transforms unstructured address blocks into granular, semantically tagged components including{' '}
                <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', background: 'var(--surface-2)', padding: '2px 6px', borderRadius: '4px' }}>
                  &lt;StrtNm&gt;
                </code>
                ,{' '}
                <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', background: 'var(--surface-2)', padding: '2px 6px', borderRadius: '4px' }}>
                  &lt;TwnNm&gt;
                </code>
                ,{' '}
                <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', background: 'var(--surface-2)', padding: '2px 6px', borderRadius: '4px' }}>
                  &lt;PstCd&gt;
                </code>
                , and{' '}
                <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', background: 'var(--surface-2)', padding: '2px 6px', borderRadius: '4px' }}>
                  &lt;Ctry&gt;
                </code>
                &mdash;the regulatory format mandated by EPC, SWIFT, and CPMI/BIS.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Four Pillars */}
      <div className="container">
        <ScrollReveal>
          <div className="section">
            <div className="section-label">Core Framework</div>
            <div className="section-title">The Four Pillars of Address Intelligence</div>
            <div className="section-desc">
              Each pillar represents a critical dimension of the payment address challenge&mdash;with its own dedicated
              deep-dive.
            </div>

            <div className="pillar-grid">
              <div className="pillar-card" onClick={() => navigate('mandate')}>
                <div className="icon-container ic-teal">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <div className="pillar-num">Pillar 1 &middot; The Regulatory Mandate</div>
                <h3>ISO 20022 Structured Address Requirements</h3>
                <p>
                  Structured addresses are what regulators actually require. Hybrid is the allowed minimum
                  fallback&mdash;not the target. This distinction matters.
                </p>
                <span className="pillar-link">
                  Explore the mandate{' '}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>

              <div className="pillar-card" onClick={() => navigate('business')}>
                <div className="icon-container ic-blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div className="pillar-num">Pillar 2 &middot; The Business Case</div>
                <h3>Business Value Beyond Compliance</h3>
                <p>
                  The $8&ndash;12 billion cost of poor address data is a structural drain. Institutions that structure
                  addresses achieve 98%+ STP and 30&ndash;50x ROI.
                </p>
                <span className="pillar-link">
                  See the economics{' '}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>

              <div className="pillar-card" onClick={() => navigate('implementation')}>
                <div className="icon-container ic-cyan">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div className="pillar-num">Pillar 3 &middot; The Implementation Reality</div>
                <h3>One Integration. Full Compliance. Zero Legacy Overhaul.</h3>
                <p>
                  The sidecar architecture sits alongside existing infrastructure&mdash;connecting via API to MuleSoft,
                  Volante, and Finastra&mdash;in 10&ndash;16 weeks.
                </p>
                <span className="pillar-link">
                  See how it works{' '}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>

              <div className="pillar-card" onClick={() => navigate('purpose')}>
                <div className="icon-container ic-navy">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="pillar-num">Pillar 4 &middot; The Competitive Clarity</div>
                <h3>Why Payment Addresses Require Purpose-Built Intelligence</h3>
                <p>
                  Postal validation {'\u2260'} payment validation. Generic tools and off-the-shelf LLMs fail for
                  fundamentally different reasons.
                </p>
                <span className="pillar-link">
                  Understand why{' '}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Comparison Table */}
      <div className="container">
        <ScrollReveal>
          <div className="section">
            <div className="section-label">Differentiation</div>
            <div className="section-title">The ioNova Difference</div>
            <table className="comp-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Generic Tools</th>
                  <th>ioNova Intelligence</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Primary design</td><td>Postal delivery validation</td><td>Payment compliance resolution</td></tr>
                <tr><td>Output format</td><td>Standardised postal format</td><td>ISO 20022 structured XML elements</td></tr>
                <tr><td>Coverage</td><td>Major markets only</td><td>195 countries, 50+ writing systems</td></tr>
                <tr><td>Geographic disambiguation</td><td>Limited or none</td><td>Full context-aware resolution</td></tr>
                <tr><td>Financial ID preservation</td><td>Not supported</td><td>LEI, IBAN, BIC preserved</td></tr>
                <tr><td>Audit trail</td><td>Minimal</td><td>Full deterministic provenance</td></tr>
                <tr><td>STP improvement</td><td>Marginal</td><td>From ~40% to 98%+</td></tr>
                <tr><td>Implementation</td><td>6&ndash;18 months</td><td>10&ndash;16 weeks</td></tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>

      {/* Who Benefits */}
      <div className="container">
        <ScrollReveal>
          <div className="section">
            <div className="section-label">Stakeholders</div>
            <div className="section-title">Who Benefits from Address Intelligence</div>
            <div className="persona-grid">
              <div className="persona-card">
                <div className="persona-role">Heads of Payments Operations</div>
                <div className="persona-desc">
                  Reduce manual exception handling by up to 95% and achieve STP rates above 98% across cross-border
                  corridors.
                </div>
              </div>
              <div className="persona-card">
                <div className="persona-role">Chief Compliance Officers</div>
                <div className="persona-desc">
                  Meet the November 2026 structured address mandate with full regulatory documentation and deterministic
                  audit trails.
                </div>
              </div>
              <div className="persona-card">
                <div className="persona-role">Chief Technology Officers</div>
                <div className="persona-desc">
                  Integrate without legacy system replacement, using standard API connectivity to existing middleware
                  platforms.
                </div>
              </div>
              <div className="persona-card">
                <div className="persona-role">Financial Crime Teams</div>
                <div className="persona-desc">
                  Reduce sanctions screening false positives by ~30% through field-level address matching rather than
                  string comparison.
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* FAQ */}
      <div className="container">
        <ScrollReveal>
          <div className="section">
            <div className="section-label">FAQ</div>
            <div className="section-title">Frequently Asked Questions</div>
            <FaqAccordion items={overviewFaqs} schemaOrg={true} />
          </div>
        </ScrollReveal>
      </div>

      {/* CTA */}
      <div className="container">
        <ScrollReveal>
          <div className="cta-section">
            <h3>Start Your Address Intelligence Journey</h3>
            <p>
              The November 2026 deadline is approaching. The business case is proven. The implementation path is clear.
            </p>
            <div className="btn-row" style={{ marginTop: 0, animation: 'none' }}>
              <button className="btn btn-accent">
                Calculate Your ROI <ArrowIcon />
              </button>
              <button className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}>
                Request a Demo
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
