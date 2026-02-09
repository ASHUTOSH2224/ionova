import { useRef, useEffect } from 'react';

interface Props {
  navigate: (page: string) => void;
}

export function BusinessValuePage({ navigate }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-nav]');
      if (target) {
        e.preventDefault();
        navigate(target.getAttribute('data-nav')!);
      }
    };
    el.addEventListener('click', handler);
    return () => el.removeEventListener('click', handler);
  }, [navigate]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const q = (e.target as HTMLElement).closest('.faq-q');
      if (q) {
        q.parentElement?.classList.toggle('open');
      }
    };
    el.addEventListener('click', handler);
    return () => el.removeEventListener('click', handler);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    el.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />;
}

const PAGE_HTML = `<div class="hero">
    <div class="breadcrumb"><a data-nav="overview" style="cursor:pointer">Home</a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg><a data-nav="overview" style="cursor:pointer">Address Intelligence</a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg><span>Business Value</span></div>
    <div class="hero-badge"><span class="pulse-dot"></span><span style="position:relative;z-index:1">Pillar 2 · The Business Case</span></div>
    <h1>Compliance Is the Floor. <span class="accent">Operational Excellence</span> Is the Ceiling.</h1>
    <p class="hero-sub">The same investment that satisfies regulators also eliminates billions in operational waste, transforms sanctions screening accuracy, and builds the data foundation for AI-driven payment automation.</p>
    <div class="btn-row"><button class="btn btn-accent">Calculate Your ROI <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button><button class="btn btn-outline">Request a Demo</button></div>
  </div>

  
  <div class="section">
    <div class="section-label">The Problem</div>
    <div class="section-title">The $8–12 Billion Problem</div>
    <div class="content-block" style="margin-top:var(--space-lg)">
      <p>Payment exceptions—transactions requiring manual intervention—are the largest category of operational waste in cross-border payments. Address-related exceptions are <strong>systemic</strong>: they stem from the structural mismatch between free-text capture and structured XML transmission.</p>
    </div>
    <div class="kpi-grid" style="grid-template-columns:repeat(2,1fr)">
      <div class="kpi-tile"><div class="kpi-value">$25-50</div><div class="kpi-label">Cost Per Payment Exception</div></div>
      <div class="kpi-tile"><div class="kpi-value blue">~40%</div><div class="kpi-label">Industry Average STP Rate</div></div>
    </div>

    <div class="alert alert-green" style="margin-top:var(--space-xl)"><div class="alert-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div><div class="alert-content"><div class="alert-title">Mid-Tier Institution Example (500K cross-border payments/year)</div><div class="alert-body">At 40% STP: 300,000 exceptions × $25–50 = <strong>$7.5M–$15M/year</strong>. At 98% STP: 10,000 exceptions. <strong>Annual savings: $7.25M–$14.5M</strong></div></div></div>
  </div>

  
  <div class="section">
    <div class="section-label">Operations</div>
    <div class="section-title">From 40% to 98%+ STP</div>
    <div class="content-block" style="margin-top:var(--space-lg)">
      <p>Structured address resolution eliminates the primary source of STP failure by converting unstructured data into deterministic, validated components <strong>before</strong> the payment enters the correspondent banking chain.</p>
    </div>
    <div class="feature-grid">
      <div class="feature-item"><div class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div><div class="feature-text"><h4>No Ambiguity at Intermediaries</h4><p>Each component occupies its designated XML field, eliminating free-text parsing at receiving institutions.</p></div></div>
      <div class="feature-item"><div class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div><div class="feature-text"><h4>No Format Conversion Errors</h4><p>Structured data survives format transformations intact—semantic meaning is encoded in structure.</p></div></div>
      <div class="feature-item"><div class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div><div class="feature-text"><h4>No Disambiguation Failures</h4><p>Resolves "London", "Paris", "Frankfurt" to the correct city at origin—not at the point of failure.</p></div></div>
      <div class="feature-item"><div class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div><div class="feature-text"><h4>Deterministic Results</h4><p>Identical input produces identical output—every time, across every invocation.</p></div></div>
    </div>
  </div>

  
  <div class="section">
    <div class="section-label">Compliance</div>
    <div class="section-title">Screening Precision: ~30% Fewer False Positives</div>
    <div class="content-block" style="margin-top:var(--space-lg)">
      <p>When address data is unstructured, screening engines cannot distinguish between semantic categories. "Cuba Street, Wellington" triggers Cuba sanctions alerts. "Paris Hilton, London" triggers alerts for both a jurisdiction and a city name. <strong>Industry false positive rates exceed 95%.</strong></p>
      <p>Structured addresses enable <strong>field-level screening</strong>: matching <code>&lt;Ctry&gt;</code> against sanctioned jurisdictions without false-matching street or city names. This reduces false positives by ~30%, freeing compliance teams for genuine risk.</p>
    </div>
  </div>

  
  <div class="section">
    <div class="section-label">Return</div>
    <div class="section-title">The Four Value Dimensions</div>
    <table class="comp-table" style="margin-top:var(--space-lg)">
      <thead><tr><th>Dimension</th><th>Metric</th><th>Impact</th></tr></thead>
      <tbody>
        <tr><td>STP Improvement</td><td>Exception rate reduction</td><td>40% → 98%+ STP (60–70% of savings)</td></tr>
        <tr><td>Screening Precision</td><td>False positive reduction</td><td>~30% fewer alerts (15–20%)</td></tr>
        <tr><td>Operational Efficiency</td><td>Staff reallocation</td><td>Fewer manual reviews (10–15%)</td></tr>
        <tr><td>AI Readiness</td><td>Structured data foundation</td><td>ML enablement (strategic)</td></tr>
      </tbody>
    </table>

    <div class="alert alert-green" style="margin-top:var(--space-lg)"><div class="alert-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div><div class="alert-content"><div class="alert-title">30–50x ROI within 12 months</div><div class="alert-body">For institutions processing 500,000+ cross-border payments annually.</div></div></div>
  </div>

  
  <div class="section">
    <div class="section-label">FAQ</div>
    <div class="section-title">Business Value FAQs</div>
    <div class="faq-list">
      <div class="faq-item"><div class="faq-q">How much do payment exceptions cost the banking industry annually?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div><div class="faq-a">Poor address data costs the global cross-border payments industry an estimated $8–12 billion annually. Individual payment exceptions cost $25–50 each in manual investigation, correspondent queries, and processing delays. A mid-tier institution processing 500,000 cross-border payments per year with the industry-average 40% STP rate generates approximately 300,000 exceptions annually, costing $7.5M–$15M. These costs are structural—they recur every year and scale with transaction volume.</div></div>
      <div class="faq-item"><div class="faq-q">What STP rate improvement can structured addresses deliver for cross-border payments?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div><div class="faq-a">Structured address resolution typically improves straight-through processing (STP) rates from the industry average of approximately 40% to above 98%. This transformative improvement occurs because structured addressing eliminates the primary source of STP failure: ambiguous, free-text address data that correspondent banks and intermediaries cannot parse consistently. Each address component occupies a designated XML field, removing the need for free-text interpretation at receiving institutions.</div></div>
      <div class="faq-item"><div class="faq-q">What is the ROI of implementing payment address intelligence?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div><div class="faq-a">Institutions processing 500,000 or more cross-border payments annually typically achieve 30–50x return on investment within the first 12 months of deployment. The ROI derives from four value dimensions: STP improvement (representing 60–70% of total savings), sanctions screening false positive reduction (15–20%), operational efficiency through staff reallocation (10–15%), and strategic AI/ML readiness through structured data foundations. The same investment that satisfies the November 2026 regulatory mandate also delivers this operational return.</div></div>
      <div class="faq-item"><div class="faq-q">How does structured address data reduce sanctions screening false positives?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div><div class="faq-a">Unstructured address data forces screening engines to perform string-level matching across entire address blocks, producing false positive rates exceeding 95%. "Cuba Street, Wellington" triggers Cuba sanctions alerts; "Paris Hilton, London" triggers alerts for both a jurisdiction and a city. Structured addresses enable field-level screening: matching &lt;Ctry&gt; against sanctioned jurisdictions independently of street or city names. This reduces false positives by approximately 30%, freeing financial crime teams to investigate genuine risk rather than clearing noise generated by string-matching artefacts.</div></div>
      <div class="faq-item"><div class="faq-q">What is the business case for structured addresses beyond regulatory compliance?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div><div class="faq-a">Compliance is the floor—operational excellence is the ceiling. Beyond satisfying ISO 20022 mandates, structured address data creates a foundation for AI-driven payment automation, enables predictive analytics on payment corridors, improves correspondent banking relationships through reliable data quality, reduces manual intervention headcount, and positions institutions for future regulatory requirements. Institutions that treat address structuring as a pure compliance exercise capture less than 20% of the available value.</div></div>
    </div>
  </div>

  
  <div class="section">
    <div class="section-label">Explore</div>
    <div class="section-title">Related Pillars</div>
    <div class="related-grid">
      <div class="related-card" data-nav="mandate" style="cursor:pointer"><h4>Regulatory Mandate →</h4><p>What EPC, SWIFT, and CPMI actually require for November 2026.</p></div>
      <div class="related-card" data-nav="implementation" style="cursor:pointer"><h4>Implementation Guide →</h4><p>The sidecar architecture and 10–16 week deployment timeline.</p></div>
      <div class="related-card" data-nav="purpose" style="cursor:pointer"><h4>Why Purpose-Built? →</h4><p>Postal validation ≠ payment validation. Why generic tools fail.</p></div>
    </div>
  </div>

<footer class="footer">
  <div class="footer-left">
    <span style="font-family:var(--font-display);font-weight:700;font-size:16px;color:var(--text-primary);letter-spacing:-0.3px"><span style="background:var(--gradient-brand);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">io</span>Nova AI</span>
  </div>
  <div class="footer-right">Address Intelligence · ISO 20022 · Feb 2026</div>
</footer>`;
