import { useRef, useEffect, useState } from 'react';
import { PillarNav } from './PillarNav';

interface Props {
  navigate: (page: string) => void;
}

export function OverlayFirstPage({ navigate }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    if (!containerRef.current) return;
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

    const elements = containerRef.current.querySelectorAll('.reveal');
    elements.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="hero">
        <div className="hero-orb"></div>
        <PillarNav activePage="overlay" onNavigate={navigate} />
        <div className="hero-badge"><span className="pulse-dot"></span> Platform Pillar — Overlay-First Deployment</div>
        <h1>Don't Replace Your Systems.<br /><span className="accent">Make Them Intelligent.</span></h1>
        <p className="hero-sub">We overlay intelligence on top of your existing infrastructure — reading your data, enriching your workflows, and embedding copilots directly in the tools your teams already use. Start read-only. Prove value. Then expand.</p>
      </div>

      <div className="section reveal">
        <div className="section-header"><div className="section-label">The Problem</div><h2 className="section-title">The Graveyard of Enterprise AI Is Filled with Rip-and-Replace Projects</h2></div>
        <div className="prose">
          <p>The average enterprise MDM implementation takes <strong>18–24 months</strong>, costs <strong>$2–10M</strong>, and requires migrating data from dozens of source systems. 70% of large-scale data transformation projects fail to deliver expected outcomes.</p>
          <p>The fundamental insight: <strong>you don't need to move data to make it intelligent.</strong> You need to read data where it lives, resolve entities across systems in real-time, and inject intelligence into existing workflows — without asking anyone to abandon tools they've spent years mastering.</p>
        </div>
      </div>

      <div className="section reveal">
        <div className="section-header"><div className="section-label">How It Works</div><h2 className="section-title">From Read-Only Pilot to Governed Automation — at Your Pace</h2></div>
        <div className="steps">
          <div className="step"><div className="step-n">1</div><div><div className="step-title">Connect &amp; Read (Weeks 1–2)</div><div className="step-body">Pre-built connectors and read-only APIs. No data migration. No schema changes. No system downtime. The platform ingests entity data in parallel with normal operations.</div><div className="step-tag">Zero system disruption</div></div></div>
          <div className="step"><div className="step-n">2</div><div><div className="step-title">Embed &amp; Prove (Weeks 3–8)</div><div className="step-body">Copilots appear as embedded panels within your existing work queues — compliance case management, payment operations, HR onboarding. Analysts see intelligence alongside normal tools, not instead of them.</div><div className="step-tag">40–50% time savings in triage</div></div></div>
          <div className="step"><div className="step-n">3</div><div><div className="step-title">Expand &amp; Govern (Weeks 9–12+)</div><div className="step-body">Add write-back capabilities, enable agent-prepared actions, connect additional sources. Every expansion requires governance approval and is instrumented for rollback.</div><div className="step-tag">60–70% time savings at scale</div></div></div>
        </div>
      </div>

      <div className="section reveal">
        <div className="section-header"><div className="section-label">Comparison</div><h2 className="section-title">Overlay-First vs. Traditional Implementation</h2></div>
        <table className="token-table">
          <thead><tr><th>Dimension</th><th>Traditional MDM</th><th style={{ background: 'rgba(95,207,208,.08)', color: 'var(--teal-500)' }}>ioNova Overlay-First</th></tr></thead>
          <tbody>
            <tr><td>Time to First Value</td><td>12–18 months</td><td className="chk"><strong>90 days</strong></td></tr>
            <tr><td>Data Migration</td><td>Required — months of ETL</td><td className="chk">Not required — reads data in place</td></tr>
            <tr><td>System Disruption</td><td>High — users learn new tools</td><td className="chk">Minimal — embedded in existing tools</td></tr>
            <tr><td>Implementation Cost</td><td>$2–10M+</td><td className="chk"><strong>Pilot from $75K</strong></td></tr>
            <tr><td>Risk Profile</td><td>High — big-bang deployment</td><td className="chk">Low — incremental, reversible</td></tr>
            <tr><td>Rollback Option</td><td>Extremely difficult</td><td className="chk">Simple — remove overlay, systems unchanged</td></tr>
          </tbody>
        </table>
      </div>

      <div className="faq-section reveal" id="faq-overlay" itemScope itemType="https://schema.org/FAQPage">
        <div className="section-header"><div className="section-label">Frequently Asked Questions</div><h2 className="section-title">Overlay-First Deployment — Your Questions Answered</h2></div>
        <div className="faq-list">
          {[
            {
              q: 'What does "overlay-first" mean and how does it avoid rip-and-replace?',
              a: <p><strong>Overlay-first</strong> means ioNova layers intelligence on top of your existing systems rather than replacing them. The platform uses pre-built connectors and read-only APIs to ingest entity data in parallel with normal operations — no data migration, no schema changes, no system downtime. Copilots appear as embedded panels within your existing work queues (compliance case management, payment operations, HR onboarding), so analysts see intelligence alongside their normal tools, not instead of them. This is fundamentally different from traditional MDM which requires an 18–24 month migration project. With overlay-first, you can start in weeks and roll back at any time with systems completely unchanged.</p>
            },
            {
              q: "How long does it take to deploy ioNova and see first value?",
              a: <p>ioNova follows a three-phase deployment model designed for <strong>90-day time-to-value</strong>. Phase 1 (Weeks 1–2): Connect and Read — pre-built connectors establish read-only access to your source systems with zero disruption. Phase 2 (Weeks 3–8): Embed and Prove — copilots are embedded in existing workflows, delivering 40–50% time savings in triage. Phase 3 (Weeks 9–12+): Expand and Govern — write-back capabilities and agent-prepared actions are added with governance approval. Compare this to traditional MDM implementations averaging 12–18 months to first value, at 10–100× the cost.</p>
            },
            {
              q: "What happens to our existing systems during and after deployment?",
              a: <p>Your existing systems remain completely intact. ioNova begins with <strong>read-only access</strong> — it observes and resolves entities without modifying any source data. Write-back capabilities are only enabled in Phase 3 with explicit governance approval. If you ever need to remove ioNova, the rollback is simple: remove the overlay, and your systems are exactly as they were before. This is a stark contrast to traditional MDM where once data is migrated and schemas restructured, rollback is extremely difficult or practically impossible.</p>
            },
            {
              q: "How much does it cost to pilot ioNova's entity intelligence platform?",
              a: <p>ioNova pilots start from <strong>$75K</strong>, compared to traditional MDM implementations costing $2–10M+. The overlay-first model inherently reduces risk: you prove value with a focused use case (a single compliance workflow, one entity domain) before expanding. There is no upfront commitment to a multi-year platform migration. Every expansion phase requires governance approval and is instrumented for rollback, meaning you invest incrementally based on demonstrated outcomes rather than projected ROI.</p>
            },
            {
              q: "Can ioNova integrate with our existing CRM, ERP, and compliance systems?",
              a: <p>Yes. ioNova is built with <strong>pre-built connectors</strong> for enterprise systems across CRM, ERP, compliance case management, payment platforms, HR systems, and supply chain management tools. The platform is designed to read data where it lives — across your existing infrastructure — and resolve entities in real-time without requiring data consolidation. Copilots embed directly within your existing interfaces as sidebar panels, so your teams continue working in familiar tools while gaining entity intelligence capabilities.</p>
            }
          ].map((item, i) => (
            <div key={i} className={`faq-item ${openFaqs[i] ? 'open' : ''}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <div className="faq-q" itemProp="name" onClick={() => toggleFaq(i)}>
                {item.q}<svg className="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
              </div>
              <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div className="faq-a-inner" itemProp="text">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-band"><h2 className="cta-hl">Ready to Prove Value in 90 Days <span className="text-grad">Without Touching Your Systems?</span></h2><p className="cta-sub">No data migration. No rip-and-replace. Just intelligence, overlaid.</p><div className="cta-btns"><a className="btn btn-accent btn-lg">Plan Your Overlay Pilot</a><a className="btn btn-outline">Download Implementation Playbook</a></div></div>
    </div>
  );
}
