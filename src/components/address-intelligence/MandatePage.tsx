import { ScrollReveal } from '@/components/design-system/ScrollReveal';
import { HeroBadge } from '@/components/design-system/HeroBadge';
import { FaqAccordion } from '@/components/design-system/FaqAccordion';

interface MandatePageProps {
  navigate: (page: string) => void;
}

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const mandateFaqs = [
  {
    q: 'What is the SWIFT ISO 20022 migration deadline for structured addresses?',
    a: "SWIFT's ISO 20022 address structuring enforcement begins in November 2026. This marks the point at which structured XML address elements will be required in cross-border payment messages sent over the SWIFT network via CBPR+. The migration timeline started with MT/MX coexistence in March 2023, with progressive milestones through November 2025. After November 2026, institutions sending unstructured or improperly formatted address data face increasing rejection rates and operational disruption.",
  },
  {
    q: 'Which regulatory bodies require structured addresses for cross-border payments?',
    a: (
      <>
        Three independent regulatory bodies converge on the same requirement. The European Payments Council (EPC) mandates structured elements for SEPA, with &lt;TwnNm&gt; and &lt;Ctry&gt; as minimum required fields. SWIFT CBPR+ requires structured addressing as best practice with hybrid as the minimum fallback. And CPMI/BIS, through the G20 roadmap for enhancing cross-border payments, identifies structured data as foundational to achieving speed, cost, transparency, and access targets. All three bodies designate structured&mdash;not hybrid&mdash;as the target state.
      </>
    ),
  },
  {
    q: "What happens if my institution doesn't comply with ISO 20022 address requirements by November 2026?",
    a: 'Non-compliant institutions face progressive enforcement tightening after November 2026. Payment messages with improperly structured address data will experience increasing rejection rates from correspondent banks and the SWIFT network. Beyond direct message rejection, institutions risk regulatory scrutiny, degraded sanctions screening accuracy, and escalating payment exception costs. The operational impact compounds: each rejected payment requires manual intervention costing $25\u201350, and correspondents may impose surcharges or restrict corridors for non-compliant originators.',
  },
  {
    q: 'Does hybrid-only ISO 20022 compliance meet the full regulatory mandate?',
    a: 'No. Hybrid is explicitly defined as the allowed minimum fallback\u2014not the target state. The EPC, SWIFT, and CPMI/BIS all designate fully structured addresses as the regulatory objective. This distinction matters because hybrid-only compliance delivers only marginal STP improvement (5\u201315%), does not enable field-level sanctions screening, and requires a second integration project when regulators tighten enforcement. Since the implementation effort for structured and hybrid is identical, there is no rational basis for targeting hybrid alone.',
  },
  {
    q: 'What ISO 20022 XML elements are required for a fully structured postal address?',
    a: (
      <>
        A fully structured ISO 20022 postal address uses the &lt;PstlAdr&gt; element with discrete sub-elements: &lt;StrtNm&gt; (street name), &lt;BldgNb&gt; (building number), &lt;BldgNm&gt; (building name), &lt;Flr&gt; (floor), &lt;PstBx&gt; (post office box), &lt;Room&gt; (room), &lt;PstCd&gt; (postal code), &lt;TwnNm&gt; (town name), &lt;TwnLctnNm&gt; (town location name), &lt;DstrctNm&gt; (district name), &lt;CtrySubDvsn&gt; (country sub-division), and &lt;Ctry&gt; (country code). This contrasts with hybrid format, which uses free-text &lt;AdrLine&gt; elements plus only &lt;TwnNm&gt; and &lt;Ctry&gt;.
      </>
    ),
  },
];

export function MandatePage({ navigate }: MandatePageProps) {
  return (
    <div>
      {/* Hero */}
      <div className="hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <ChevronRight />
            <a onClick={() => navigate('overview')}>Address Intelligence</a>
            <ChevronRight />
            <span>Structured Address Mandate</span>
          </div>
          <HeroBadge text="Pillar 1 &middot; Regulatory Mandate" />
          <h1>
            Structured Addresses Are the <span className="accent">Regulatory Mandate</span>
          </h1>
          <p className="hero-sub">
            Hybrid is the allowed minimum. This single misunderstanding has led hundreds of institutions to optimise for
            the floor rather than the ceiling&mdash;with <strong>identical implementation effort</strong> required either
            way.
          </p>
          <div className="btn-row">
            <button className="btn btn-accent">
              Download Compliance Checklist <ArrowIcon />
            </button>
            <button className="btn btn-outline">Calculate Savings</button>
          </div>
        </div>
      </div>

      {/* Amber Alert */}
      <div className="container">
        <ScrollReveal>
          <div className="alert alert-amber">
            <div className="alert-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <div className="alert-content">
              <div className="alert-title">November 2026 Enforcement Deadline</div>
              <div className="alert-body">
                SWIFT address structuring enforcement begins November 2026. Structured XML elements will be required in
                payment messages.
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* What Regulators Require */}
      <div className="container">
        <ScrollReveal>
          <div className="section">
            <div className="section-label">Regulatory Bodies</div>
            <div className="section-title">What Regulators Actually Require</div>
            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>European Payments Council (EPC)</h4>
                  <p>
                    Structured elements are the target state for SEPA. Hybrid is a transitional accommodation, not an
                    endpoint. Mandatory: <code>&lt;TwnNm&gt;</code> and <code>&lt;Ctry&gt;</code>.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                    <line x1="4" y1="22" x2="4" y2="15" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>SWIFT (CBPR+)</h4>
                  <p>
                    November 2026 marks the end of MT/MX coexistence for key traffic. Structured addressing is best
                    practice; hybrid is the minimum fallback.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>CPMI / BIS</h4>
                  <p>
                    G20 roadmap identifies structured data as foundational to achieving speed, cost, transparency, and
                    access targets for cross-border payments.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Converging Requirements</h4>
                  <p>
                    Three independent bodies, arriving at the same conclusion: structured addresses are the target state
                    for global payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Structured vs Hybrid */}
      <div className="container">
        <ScrollReveal>
          <div className="section">
            <div className="section-label">Key Distinction</div>
            <div className="section-title">Structured vs. Hybrid: Not Either/Or</div>
            <div className="content-block" style={{ marginTop: 'var(--space-lg)' }}>
              <p>
                Hybrid is a <strong>subset</strong> of structured. A system that produces structured output can trivially
                generate hybrid output. The reverse is not true. Investing in structured provides both formats
                simultaneously.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)', marginTop: 'var(--space-lg)' }}>
              <div className="code-block">
                <pre>
                  <span className="cmt">&lt;!-- STRUCTURED (Target State) --&gt;</span>{'\n'}
                  <span className="tag">&lt;PstlAdr&gt;</span>{'\n'}
                  {'  '}<span className="tag">&lt;StrtNm&gt;</span><span className="str">Bahnhofstrasse</span><span className="tag">&lt;/StrtNm&gt;</span>{'\n'}
                  {'  '}<span className="tag">&lt;BldgNb&gt;</span><span className="str">42</span><span className="tag">&lt;/BldgNb&gt;</span>{'\n'}
                  {'  '}<span className="tag">&lt;PstCd&gt;</span><span className="str">8001</span><span className="tag">&lt;/PstCd&gt;</span>{'\n'}
                  {'  '}<span className="tag">&lt;TwnNm&gt;</span><span className="str">Z{'\u00FC'}rich</span><span className="tag">&lt;/TwnNm&gt;</span>{'\n'}
                  {'  '}<span className="tag">&lt;Ctry&gt;</span><span className="str">CH</span><span className="tag">&lt;/Ctry&gt;</span>{'\n'}
                  <span className="tag">&lt;/PstlAdr&gt;</span>
                </pre>
              </div>
              <div className="code-block">
                <pre>
                  <span className="cmt">&lt;!-- HYBRID (Fallback Only) --&gt;</span>{'\n'}
                  <span className="tag">&lt;PstlAdr&gt;</span>{'\n'}
                  {'  '}<span className="tag">&lt;AdrLine&gt;</span><span className="str">42 Bahnhofstrasse</span><span className="tag">&lt;/AdrLine&gt;</span>{'\n'}
                  {'  '}<span className="tag">&lt;TwnNm&gt;</span><span className="str">Z{'\u00FC'}rich</span><span className="tag">&lt;/TwnNm&gt;</span>{'\n'}
                  {'  '}<span className="tag">&lt;Ctry&gt;</span><span className="str">CH</span><span className="tag">&lt;/Ctry&gt;</span>{'\n'}
                  <span className="tag">&lt;/PstlAdr&gt;</span>
                </pre>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Timeline Table */}
      <div className="container">
        <ScrollReveal>
          <div className="section">
            <div className="section-label">Timeline</div>
            <div className="section-title">The November 2026 Timeline</div>
            <table className="comp-table" style={{ marginTop: 'var(--space-lg)' }}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Milestone</th>
                  <th>Implication</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>March 2023</td><td>SWIFT begins MX/ISO 20022 coexistence</td><td>MT and MX messages run in parallel</td></tr>
                <tr><td>November 2025</td><td>First major coexistence milestone</td><td>Volume thresholds assessed</td></tr>
                <tr><td>November 2026</td><td>Address structuring enforcement</td><td>Structured fields required in messages</td></tr>
                <tr><td>Post-2026</td><td>Progressive enforcement tightening</td><td>Increasing rejection rates</td></tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>

      {/* Hybrid vs Structured Comparison */}
      <div className="container">
        <ScrollReveal>
          <div className="section">
            <div className="section-label">Comparison</div>
            <div className="section-title">Hybrid-Only vs. Fully Structured</div>
            <table className="comp-table" style={{ marginTop: 'var(--space-lg)' }}>
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>Hybrid-Only</th>
                  <th>Fully Structured</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Integration effort</td><td>Standard API integration</td><td>Standard API (identical)</td></tr>
                <tr><td>Regulatory compliance</td><td>Minimum acceptable</td><td>Full mandate compliance</td></tr>
                <tr><td>STP improvement</td><td>Marginal (5&ndash;15%)</td><td>Transformative (40% &rarr; 98%+)</td></tr>
                <tr><td>Sanctions screening</td><td>String-based matching</td><td>Field-level precision</td></tr>
                <tr><td>AI/ML readiness</td><td>Not supported</td><td>Full structured input</td></tr>
                <tr><td>Future upgrade</td><td>Yes&mdash;second integration</td><td>Already at target state</td></tr>
                <tr><td>ROI timeline</td><td>Limited, slow</td><td>30&ndash;50x within 12 months</td></tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>

      {/* FAQ */}
      <div className="container">
        <ScrollReveal>
          <div className="section">
            <div className="section-label">FAQ</div>
            <div className="section-title">Regulatory Mandate FAQs</div>
            <FaqAccordion items={mandateFaqs} schemaOrg={true} />
          </div>
        </ScrollReveal>
      </div>

      {/* Related Pillars */}
      <div className="container">
        <ScrollReveal>
          <div className="section">
            <div className="section-label">Explore</div>
            <div className="section-title">Related Pillars</div>
            <div className="related-grid">
              <div className="related-card" onClick={() => navigate('business')}>
                <h4>Business Value Beyond Compliance &rarr;</h4>
                <p>The $8&ndash;12 billion cost of poor address data and the economics of structured resolution.</p>
              </div>
              <div className="related-card" onClick={() => navigate('implementation')}>
                <h4>Implementation Guide &rarr;</h4>
                <p>Week-by-week timeline and sidecar architecture explained.</p>
              </div>
              <div className="related-card" onClick={() => navigate('purpose')}>
                <h4>Why Purpose-Built? &rarr;</h4>
                <p>Why postal tools and LLMs fail at payment address compliance.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
