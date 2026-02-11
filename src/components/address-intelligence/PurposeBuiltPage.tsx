import { useState, useRef, useEffect } from 'react';

export function PurposeBuiltPage() {
  return (
    <div className="purpose-built-page">
      <Hero />
      <CoreCapabilities />
      <RiskAnalysis />
      <HeadToHead />
      <Decision />
      <Faq />
      <RelatedPillars />
    </div>
  );
}

function Hero() {
  return (
    <div className="hero">

      <div className="hero-badge"><span className="pulse-dot"></span><span style={{ position: 'relative', zIndex: 1 }}>Pillar 4 · Competitive Clarity</span></div>
      <h1>Postal Validation <span className="accent">≠ Payment Validation</span></h1>
      <p className="hero-sub">Generic address tools solve a fundamentally different problem. Postal validation asks &quot;can a letter be delivered here?&quot; Payment compliance asks &quot;does this address identify a legal entity across 195 countries and 50+ writing systems?&quot;</p>
      <div className="btn-row">
        <button className="btn btn-accent">See the Difference <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></button>
        <button className="btn btn-outline" onClick={() => window.location.href = '/roi-calculator'}>Calculate Your ROI</button>
      </div>
    </div>
  );
}

function CoreCapabilities() {
  return (
    <div className="section">
      <div className="section-label">Core Capabilities</div>
      <div className="section-title">The Six Capabilities Generic Tools Lack</div>
      <div className="feature-grid">
        <div className="feature-item">
          <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></div>
          <div className="feature-text"><h4>Financial ID Preservation</h4><p>Recognises LEI, IBAN, BIC embedded in address blocks and routes them to the correct ISO 20022 fields.</p></div>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg></div>
          <div className="feature-text"><h4>Geographic Disambiguation</h4><p>&quot;London&quot; appears in six countries. &quot;Paris&quot; is in France and Texas. Multi-dimensional context resolves ambiguity deterministically.</p></div>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V4h16v3" /><path d="M9 20h6" /><path d="M12 4v16" /></svg></div>
          <div className="feature-text"><h4>Multi-Script Normalisation</h4><p>Native parsing for Latin, Cyrillic, Arabic, CJK, Devanagari, Thai, Hebrew—across 50+ writing systems.</p></div>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
          <div className="feature-text"><h4>Entity-Level De-Duplication</h4><p>Identifies when different address representations refer to the same legal entity—not just the same physical location.</p></div>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg></div>
          <div className="feature-text"><h4>Deterministic Audit Trails</h4><p>Complete resolution provenance: input, parsing decisions, disambiguation logic, confidence scoring—immutable records.</p></div>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
          <div className="feature-text"><h4>Real-Time Processing</h4><p>Sub-100ms resolution, consistent results for identical inputs, graceful degradation under peak load.</p></div>
        </div>
      </div>
    </div>
  );
}

function RiskAnalysis() {
  const alertStyle = {
    background: 'linear-gradient(135deg,rgba(220,53,69,0.1),rgba(220,53,69,0.05))',
    border: '1px solid rgba(220,53,69,0.2)',
    color: 'var(--alert-red)'
  };

  return (
    <div className="section">
      <div className="section-label">Risk Analysis</div>
      <div className="section-title">Why LLMs Fail at Payment Address Parsing</div>
      <div className="content-block" style={{ marginTop: 'var(--space-lg)' }}>
        <p>LLMs demonstrate impressive natural language capabilities but are <strong>architecturally unsuited</strong> for payment address resolution.</p>
      </div>
      <div className="feature-grid">
        <div className="feature-item">
          <div className="feature-icon" style={alertStyle}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
          </div>
          <div className="feature-text"><h4>Hallucination Risk</h4><p>May invent postal codes, select wrong cities, or fabricate building numbers. In payments, that&apos;s a regulatory failure.</p></div>
        </div>
        <div className="feature-item">
          <div className="feature-icon" style={alertStyle}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
          </div>
          <div className="feature-text"><h4>Non-Deterministic Output</h4><p>Same input → different output across invocations. Sanctions screening results change. Audit trail becomes unreliable.</p></div>
        </div>
        <div className="feature-item">
          <div className="feature-icon" style={alertStyle}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
          </div>
          <div className="feature-text"><h4>Latency Incompatibility</h4><p>1–5 seconds per request. Payment processing requires sub-100ms. An order-of-magnitude gap.</p></div>
        </div>
        <div className="feature-item">
          <div className="feature-icon" style={alertStyle}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
          </div>
          <div className="feature-text"><h4>Missing Audit Provenance</h4><p>Black-box reasoning. Cannot explain why an address was parsed a particular way. Regulators require explainability.</p></div>
        </div>
      </div>
    </div>
  );
}

function HeadToHead() {
  return (
    <div className="section">
      <div className="section-label">Head-to-Head</div>
      <div className="section-title">Three-Way Comparison</div>
      <div style={{ overflowX: 'auto' }}>
        <table className="comp-table" style={{ marginTop: 'var(--space-lg)' }}>
          <thead><tr><th>Dimension</th><th>Postal APIs</th><th>Raw LLMs</th><th style={{ color: 'var(--teal-500)' }}>ioNova Purpose-Built</th></tr></thead>
          <tbody>
            <tr><td>ISO 20022 output</td><td>Not supported</td><td>Inconsistent</td><td>Native XML elements</td></tr>
            <tr><td>Financial ID handling</td><td>Not supported</td><td>Unreliable</td><td>Automatic (LEI, IBAN, BIC)</td></tr>
            <tr><td>Disambiguation</td><td>Postal-code-based</td><td>Probabilistic</td><td>Payment-context-aware</td></tr>
            <tr><td>Processing latency</td><td>200–500ms</td><td>1,000–5,000ms</td><td>Sub-100ms</td></tr>
            <tr><td>Deterministic output</td><td>Yes</td><td>No</td><td>Yes</td></tr>
            <tr><td>Audit trail</td><td>Basic valid/invalid</td><td>None</td><td>Full provenance chain</td></tr>
            <tr><td>Hallucination risk</td><td>Zero</td><td>Significant</td><td>Zero</td></tr>
            <tr><td>Script coverage</td><td>Major Latin markets</td><td>Training-dependent</td><td>195 countries, 50+ scripts</td></tr>
            <tr><td>Track record</td><td>Postal domain</td><td>Experimental</td><td>30+ years, 10B+ transactions</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Decision() {
  return (
    <div className="section">
      <div className="section-label">Decision</div>
      <div className="section-title">Build vs. Buy vs. Retrofit</div>
      <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
        <div className="card">
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>Build In-House</div>
          <p style={{ fontSize: '13px', color: 'var(--text-label)', lineHeight: 1.6 }}>18–36 months to production. 195-country parsing rules. Maintenance exceeds build cost in 2–3 years. Feasible only for the largest institutions.</p>
        </div>
        <div className="card">
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>Retrofit Postal Tools</div>
          <p style={{ fontSize: '13px', color: 'var(--text-label)', lineHeight: 1.6 }}>Fragile integration chain. Fails where postal and payment requirements intersect—where compliance risk is highest.</p>
        </div>
        <div className="card card-accent">
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700, color: 'var(--teal-500)', marginBottom: '8px' }}>Buy Purpose-Built ✓</div>
          <p style={{ fontSize: '13px', color: 'var(--text-label)', lineHeight: 1.6 }}>10–16 weeks. ISO 20022 native. 195 countries from day one. Lowest total cost of ownership and lowest compliance risk.</p>
        </div>
      </div>
    </div>
  );
}

function Faq() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    answerRefs.current.forEach((el, i) => {
      if (!el) return;
      if (openFaqIndex === i) {
        el.style.maxHeight = el.scrollHeight + 'px';
      } else {
        el.style.maxHeight = '0px';
      }
    });
  }, [openFaqIndex]);

  const faqs = [
    {
      q: "Why can't postal address validation APIs handle payment compliance?",
      a: "Postal validation APIs are designed to answer \"can a letter be delivered here?\"—a fundamentally different question from \"does this address identify a legal entity in a format satisfying ISO 20022, sanctions screening, and payment routing?\" Postal tools lack ISO 20022 XML output, cannot handle financial identifiers (LEI, IBAN, BIC) embedded in address blocks, provide only postal-code-based disambiguation rather than payment-context-aware resolution, and cover primarily major Latin markets. They offer basic valid/invalid responses rather than the deterministic audit trails regulators require for payment compliance."
    },
    {
      q: "Why are LLMs unsuitable for payment address parsing and sanctions compliance?",
      a: "Large language models fail at payment address parsing for four critical reasons. First, they produce non-deterministic output: the same input may yield different results across invocations, making sanctions screening results unreliable and audit trails meaningless. Second, they hallucinate—inventing postal codes, fabricating building numbers, or selecting wrong cities, which constitutes a regulatory failure in payments. Third, they operate at 1–5 seconds per request, an order of magnitude slower than the sub-100ms required for payment processing. Fourth, they are black boxes with no explainability—regulators require institutions to demonstrate exactly why an address was parsed a particular way."
    },
    {
      q: "What is geographic disambiguation in payment address resolution?",
      a: "Geographic disambiguation is the ability to determine which specific location is referenced when an address contains ambiguous place names. \"London\" appears in the United Kingdom, Canada, United States, and three other countries. \"Paris\" exists in France and Texas. \"Frankfurt\" could be Frankfurt am Main or Frankfurt an der Oder. Purpose-built address intelligence uses multi-dimensional context—including currency, BIC code, correspondent banking relationships, and surrounding address elements—to resolve these ambiguities deterministically. Postal tools use only postal-code-based matching; LLMs use probabilistic guessing. Neither approach meets the certainty threshold required for payment routing and sanctions screening."
    },
    {
      q: "How does purpose-built address intelligence differ from generic address validation APIs?",
      a: "Generic address validation APIs produce standardised postal output; purpose-built intelligence produces native ISO 20022 structured XML elements. Generic tools do not support financial identifier handling (LEI, IBAN, BIC); purpose-built systems automatically recognise and route these to correct fields. Generic tools cover major markets; purpose-built covers 195 countries and 50+ writing systems. Generic provides basic valid/invalid results; purpose-built delivers full deterministic provenance chains. Generic achieves marginal STP improvement; purpose-built transforms STP from ~40% to 98%+. The implementation timeline for generic retrofitting is 6–18 months; purpose-built deploys in 10–16 weeks."
    },
    {
      q: "What is deterministic address resolution and why does it matter for payments?",
      a: "Deterministic address resolution means that identical input always produces identical output—every time, across every invocation, regardless of when or how many times the request is processed. This is critical for payment compliance because sanctions screening must produce consistent results: if the same address triggers a hit today, it must trigger the same hit tomorrow. Audit trails must be reproducible: regulators expect the same input to produce the same documented resolution path. Non-deterministic systems (like LLMs) fundamentally cannot satisfy these requirements, as their probabilistic architecture inherently introduces variation between runs."
    },
    {
      q: "Should financial institutions build, buy, or retrofit address intelligence?",
      a: "Building in-house requires 18–36 months to production, development of 195-country parsing rules, and ongoing maintenance that exceeds initial build cost within 2–3 years—feasible only for the very largest global institutions. Retrofitting postal tools creates a fragile integration chain that fails precisely where postal and payment requirements intersect, which is where compliance risk is highest. Buying a purpose-built solution delivers ISO 20022 native compliance in 10–16 weeks, covers 195 countries from day one, and offers the lowest total cost of ownership and compliance risk profile. For institutions facing the November 2026 deadline, buy is the only option with a realistic timeline."
    }
  ];

  return (
    <div className="section">
      <div className="section-label">FAQ</div>
      <div className="section-title">Purpose-Built Intelligence FAQs</div>
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${openFaqIndex === i ? 'open' : ''}`}
          >
            <div
              className="faq-q"
              onClick={() =>
                setOpenFaqIndex((prev) => (prev === i ? null : i))
              }
            >
              {item.q}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div
              className="faq-a"
              ref={(el) => {
                answerRefs.current[i] = el;
              }}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RelatedPillars() {
  return (
    <div className="section">
      <div className="section-label">Explore</div>
      <div className="section-title">Related Pillars</div>
      <div className="related-grid">
        <div className="related-card" onClick={() => window.location.href = '/address-intelligence/structured-address-mandate'} style={{ cursor: 'pointer' }}>
          <h4>Regulatory Mandate →</h4><p>What EPC, SWIFT, and CPMI require before November 2026.</p>
        </div>
        <div className="related-card" onClick={() => window.location.href = '/address-intelligence/structured-address-value'} style={{ cursor: 'pointer' }}>
          <h4>Business Value →</h4><p>The $8–12B problem and the economics of structured data.</p>
        </div>
        <div className="related-card" onClick={() => window.location.href = '/address-intelligence/address-implementation'} style={{ cursor: 'pointer' }}>
          <h4>Implementation Guide →</h4><p>Sidecar architecture and deployment timeline.</p>
        </div>
      </div>
    </div>
  );
}
