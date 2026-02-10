import { useRef, useEffect, useState } from 'react';


interface Props {
  navigate: (page: string) => void;
}

export function ProgressiveAutonomyPage({ navigate }: Props) {
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

        <div className="hero-badge"><span className="pulse-dot"></span> Platform Pillar — Progressive Autonomy</div>
        <h1>The Safest Path to AI Automation<br /><span className="accent">Is the One You Control.</span></h1>
        <p className="hero-sub">Most AI platforms offer a binary choice: manual process or full automation. ioNova offers a graduated ladder. Start with AI that explains. Graduate to AI that recommends. Then prepare. Then execute. Each step gated by governance.</p>
      </div>

      <div className="section reveal">
        <div className="section-header"><div className="section-label">The Problem</div><h2 className="section-title">The All-or-Nothing Automation Trap</h2></div>
        <div className="prose">
          <p>Enterprise AI adoption stalls at the governance gate. Not because the technology can't automate, but because organizations can't govern what they can't control. When an AI agent makes a wrong decision in a regulated workflow — approving a suspicious transaction, misrouting a payment — the consequences range from fines to reputational damage to real human harm.</p>
          <p>Progressive autonomy resolves this tension. Instead of asking "Should we automate?" it asks <strong>"At what level of autonomy should this workflow operate today, and what evidence would justify advancing it?"</strong></p>
        </div>
      </div>

      <div className="section reveal">
        <div className="section-header"><div className="section-label">The Four Levels</div><h2 className="section-title">Governance Gates Between Each Level. Evidence at Every Step.</h2></div>
        <div className="levels">
          <div className="lvl"><div className="lvl-badge lb0">Level 0</div><div><div className="lvl-title">Explain</div><div className="lvl-mode">AI answers questions · Humans make all decisions</div><div className="lvl-desc">Responds to analyst queries with entity intelligence and evidence. Surfaces data, relationships, risk indicators — all with citations. Never suggests or initiates action. <strong>Best for:</strong> initial deployment, high-risk domains.</div></div></div>
          <div className="lvl"><div className="lvl-badge lb1">Level 1</div><div><div className="lvl-title">Recommend</div><div className="lvl-mode">AI suggests actions · Humans approve every one</div><div className="lvl-desc">Analyzes entity data and recommends specific actions — case routing, risk classifications, escalation paths. Tracks acceptance rates for model improvement. <strong>Best for:</strong> established workflows with proven accuracy.</div></div></div>
          <div className="lvl"><div className="lvl-badge lb2">Level 2</div><div><div className="lvl-title">Prepare</div><div className="lvl-mode">AI drafts outputs · Humans review before submission</div><div className="lvl-desc">Pre-fills forms, drafts SAR narratives, structures regulatory filings. Presents work in approval queue. Tracks edit rates to measure quality. <strong>Best for:</strong> high-volume documentation workflows.</div></div></div>
          <div className="lvl"><div className="lvl-badge lb3">Level 3</div><div><div className="lvl-title">Execute</div><div className="lvl-mode">AI acts autonomously · Pre-approved, low-risk, reversible</div><div className="lvl-desc">Operates with strict allowlists. Monitors own operations for anomalies. Self-escalates to human review when confidence drops. Full audit trail for every automated action. <strong>Best for:</strong> well-understood, high-volume, low-risk workflows.</div></div></div>
        </div>
      </div>

      <div className="section reveal">
        <div className="section-header"><div className="section-label">Governance Gates</div><h2 className="section-title">Advancing Requires Proof, Not Permission</h2></div>
        <table className="token-table">
          <thead><tr><th>Gate</th><th>Transition</th><th>Required Evidence</th></tr></thead>
          <tbody>
            <tr><td><span className="badge badge-accent">Gate 1</span></td><td>Level 0 → 1</td><td>Demonstrated accuracy; analyst satisfaction; model validation report</td></tr>
            <tr><td><span className="badge badge-accent">Gate 2</span></td><td>Level 1 → 2</td><td>Acceptance rate &gt;85%; zero critical errors in 90 days; MRM review</td></tr>
            <tr><td><span className="badge badge-accent">Gate 3</span></td><td>Level 2 → 3</td><td>Edit rate &lt;15%; 6 months sustained quality; regulatory review; rollback tested</td></tr>
          </tbody>
        </table>
      </div>

      <div className="faq-section reveal" id="faq-autonomy" itemScope itemType="https://schema.org/FAQPage">
        <div className="section-header"><div className="section-label">Frequently Asked Questions</div><h2 className="section-title">Progressive Autonomy — Your Questions Answered</h2></div>
        <div className="faq-list">
          {[
            {
              q: "What is progressive autonomy in AI and how is it different from full automation?",
              a: <p><strong>Progressive autonomy</strong> is a graduated approach to AI automation where AI systems advance through clearly defined levels of independence — from explanation to recommendation to preparation to execution — with governance gates between each level. Unlike full automation (which presents a binary "manual vs. automated" choice), progressive autonomy lets organizations start with AI that answers questions (Level 0: Explain), then advances to suggesting actions (Level 1: Recommend), drafting outputs (Level 2: Prepare), and finally executing autonomously (Level 3: Execute). Each advancement requires documented evidence of accuracy, committee approval, and defined rollback procedures. This resolves the fundamental tension in enterprise AI adoption: teams get AI capabilities immediately while governance teams maintain complete control.</p>
            },
            {
              q: "What are the four levels of AI autonomy in ioNova?",
              a: <p>ioNova defines four autonomy levels: <strong>Level 0 (Explain)</strong> — AI answers questions with entity intelligence and cited evidence, while humans make all decisions; ideal for initial deployment and high-risk domains. <strong>Level 1 (Recommend)</strong> — AI analyzes entity data and suggests specific actions like case routing or risk classifications, while humans approve every recommendation. <strong>Level 2 (Prepare)</strong> — AI pre-fills forms, drafts SAR narratives, and structures regulatory filings, presented in approval queues for human review. <strong>Level 3 (Execute)</strong> — AI acts autonomously for pre-approved, low-risk, reversible operations with strict allowlists, anomaly self-monitoring, and full audit trails.</p>
            },
            {
              q: "What evidence is required to advance between autonomy levels?",
              a: <p>Each governance gate requires specific evidence thresholds: <strong>Gate 1</strong> (Level 0→1) requires demonstrated accuracy, analyst satisfaction surveys, and a model validation report. <strong>Gate 2</strong> (Level 1→2) requires an acceptance rate above 85%, zero critical errors over 90 days, and a completed Model Risk Management (MRM) review. <strong>Gate 3</strong> (Level 2→3) is the most stringent, requiring an edit rate below 15%, six months of sustained quality metrics, regulatory review, and tested rollback procedures. Autonomy can be dialed back at any time — for the entire platform, a specific workflow, or a single entity type.</p>
            },
            {
              q: "How does agentic AI governance work in regulated environments?",
              a: <p><strong>Agentic AI governance</strong> ensures that autonomous AI operations remain auditable, controllable, and compliant with regulatory requirements. In ioNova, even at Level 3 (Execute), the AI operates within strict allowlists defining exactly which actions it can take, continuously monitors its own operations for anomalies, and self-escalates to human review when confidence drops below threshold. Every autonomous action generates an immutable audit trail. This approach aligns with the Federal Reserve's SR 11-7 guidance on model risk management and the EU AI Act's requirements for human oversight of high-risk AI systems — making it possible to deploy agentic AI in regulated workflows without compromising compliance.</p>
            },
            {
              q: "Can autonomy levels be set differently for different workflows?",
              a: <p>Yes. Autonomy is configurable per workflow, per entity type, and per risk category. An organization might operate at <strong>Level 3 (Execute)</strong> for low-risk payment reconciliation, <strong>Level 2 (Prepare)</strong> for SAR narrative drafting, <strong>Level 1 (Recommend)</strong> for KYC risk classification, and <strong>Level 0 (Explain)</strong> for novel sanctions scenarios — all simultaneously within the same platform. This granularity means high-volume, well-understood tasks can be automated for 60–90% average handling time reduction, while sensitive or novel scenarios retain full human oversight.</p>
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

      <div className="cta-band"><h2 className="cta-hl">Start at Level Zero. <span className="text-grad">Advance on Evidence.</span></h2><p className="cta-sub">Your pace. Your governance. Your evidence threshold.</p><div className="cta-btns"><a className="btn btn-accent btn-lg">See Progressive Autonomy in Action</a><a className="btn btn-outline">Download Governance Framework</a></div></div>
    </div>
  );
}
