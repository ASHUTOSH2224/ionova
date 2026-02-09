import { useRef, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { AppWrapper } from '@/components/AppWrapper';

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);

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
    el.querySelectorAll('.reveal').forEach((item) => observer.observe(item)); // Keep .reveal selector support if we add it back, though manually animating is better in React

    // Staggered fade-in for cards (re-implementing logic for React components if needed, or using CSS animations)
    // The original code used vanilla JS to querySelectors. In React we often let CSS handle it or use refs.
    // For now, I will keep the structure but we might loose the specific JS animation unless I add refs to everything.
    // However, the CSS likely handles .visible.

    // Check if we need to port the fadeObs logic. 
    // The original code: el.querySelectorAll('.philosophy-card, .kpi-tile, .leader-card, .why-card')
    // We can add a class or ref to these elements.

    // Let's assume standard CSS classes first.
    return () => observer.disconnect();
  }, []);

  return (
    <AppWrapper>
      <Layout>
        <div className="ds-v5">
          <div className="container">
            <AboutContent />
          </div>
        </div>
      </Layout>
    </AppWrapper>
  );
}

function AboutContent() {
  return (
    <div className="about-content">
      {/* SVG Defs */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5FCFD0" />
            <stop offset="50%" stopColor="#43ADC1" />
            <stop offset="100%" stopColor="#3C75B5" />
          </linearGradient>
        </defs>
      </svg>

      <Hero />
      <Philosophy />
      <Platform />
      <Leadership />
      <WhyThisTeam />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="story">
      <div className="hero-badge">
        <span className="pulse-dot"></span>
        <span style={{ position: 'relative', zIndex: 1 }}>The Entity Intelligence Company</span>
      </div>
      <h1>Every Enterprise Runs on Entities.<br /><span className="accent">Most Can&apos;t Trust Them.</span></h1>
      <p className="hero-subtitle">Every critical decision — approving a payment, clearing a counterparty, onboarding a customer — depends on knowing <em>who or what you&apos;re dealing with</em>. ioNova makes entity data trustworthy.</p>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="section" id="philosophy">
      <div className="section-header">
        <div className="section-label">Our Philosophy</div>
        <h2 className="section-title">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <svg style={{ width: '28px', height: '28px', strokeWidth: '1.5', color: 'var(--teal-500)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
          </span>
          Knowledge First, Not Model First
        </h2>
        <p className="section-desc">70% of enterprise AI projects fail — not because the technology is inadequate, but because organisations start with the model and force-fit it to their business.</p>
      </div>

      <div className="narrative" style={{ marginBottom: 'var(--space-xl)' }}>
        <p>Entity data — the people, companies, products, and transactions that flow through every enterprise — is scattered across dozens of systems, duplicated in conflicting formats, and silently degrading every downstream process. <strong>&quot;Acme Corp&quot;</strong> in your CRM is <strong>&quot;ACME Corporation&quot;</strong> in your ERP and <strong>&quot;Acme Inc.&quot;</strong> in compliance. Multiply this across millions of entities, and the result is a trust deficit costing billions annually.</p>
      </div>

      <div className="narrative-highlight">
        ioNova is built on <strong>Knowledge First AI™</strong> — we start with the enterprise&apos;s own knowledge, structure it into an Enterprise Knowledge Model, and only then deploy AI on top. This is why we achieve what generic AI cannot.
      </div>

      <div className="philosophy-grid" style={{ marginTop: 'var(--space-xl)' }}>
        <div className="philosophy-card">
          <div className="philosophy-icon ic-teal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          </div>
          <div className="philosophy-title">Deterministic Accuracy</div>
          <div className="philosophy-desc">Zero hallucinations in production. Every AI output is grounded in verified enterprise knowledge, not generated from parametric memory.</div>
        </div>
        <div className="philosophy-card">
          <div className="philosophy-icon ic-blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
          </div>
          <div className="philosophy-title">Audit-Grade Evidence</div>
          <div className="philosophy-desc">Every decision is explainable, every claim citable. Governance isn&apos;t bolted on — it&apos;s the architectural foundation.</div>
        </div>
        <div className="philosophy-card">
          <div className="philosophy-icon ic-cyan">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
          </div>
          <div className="philosophy-title">100% User Adoption</div>
          <div className="philosophy-desc">A proven methodology refined across 50+ enterprise implementations with zero project failures — built for how regulated enterprises actually operate.</div>
        </div>
        <div className="philosophy-card">
          <div className="philosophy-icon ic-navy">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
          </div>
          <div className="philosophy-title">No Rip & Replace</div>
          <div className="philosophy-desc">Overlays intelligence on existing infrastructure without data migration. Resolves entities in real-time across 50+ systems in under 200ms.</div>
        </div>
      </div>
    </section>
  );
}

function Platform() {
  return (
    <section className="section" id="platform">
      <div className="section-header">
        <div className="section-label">The Platform</div>
        <h2 className="section-title">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <svg style={{ width: '28px', height: '28px', strokeWidth: '1.5', color: 'var(--teal-500)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
          </span>
          Entity Intelligence, Unified
        </h2>
        <p className="section-desc">The first system to unify Named Entity Recognition, golden record creation, evidence-first AI copilots, and permissioned agentic automation — all governed from day one.</p>
      </div>

      <div className="kpi-grid">
        <div className="kpi-tile">
          <div className="kpi-value gradient">$5T+</div>
          <div className="kpi-label">Processed Annually</div>
        </div>
        <div className="kpi-tile">
          <div className="kpi-value gradient">55+</div>
          <div className="kpi-label">Countries Served</div>
        </div>
        <div className="kpi-tile">
          <div className="kpi-value gradient">&lt;200ms</div>
          <div className="kpi-label">Resolution Latency</div>
        </div>
        <div className="kpi-tile">
          <div className="kpi-value gradient">50+</div>
          <div className="kpi-label">System Integrations</div>
        </div>
      </div>

      <div className="narrative" style={{ marginTop: 'var(--space-xl)' }}>
        <p>All enterprise entities reduce to four core types: <strong>Individual, Company, Product, and Transaction</strong>. One architecture with universal applicability across six domains.</p>
      </div>

      <div className="sub-label">Domains Served</div>
      <div className="domains-row">
        <span className="domain-tag">Financial Services</span>
        <span className="domain-tag">Healthcare</span>
        <span className="domain-tag">Sales & Marketing</span>
        <span className="domain-tag">Human Resources</span>
        <span className="domain-tag">Supply Chain</span>
        <span className="domain-tag">Risk & Compliance</span>
      </div>

      <div className="narrative-highlight" style={{ marginTop: 'var(--space-xl)' }}>
        Within financial services, ioNova powers the industry&apos;s only <strong>ISO 20022-native address resolution</strong> capability — transforming unstructured address data into fully structured output using Agentic AI with deterministic accuracy, ahead of the <strong>November 2026 deadline</strong> for structured addresses in every cross-border payment message.
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="section" id="leadership">
      <div className="section-header">
        <div className="section-label">Leadership</div>
        <h2 className="section-title">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <svg style={{ width: '28px', height: '28px', strokeWidth: '1.5', color: 'var(--teal-500)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
          </span>
          The Team Behind the Platform
        </h2>
        <p className="section-desc">100+ years of combined experience across AI, banking technology, payments, compliance, and enterprise security. Forged over three decades of building AI systems at the heart of global financial infrastructure.</p>
      </div>

      <div className="leaders-grid">
        <div className="leader-card featured">
          <div className="leader-inner">
            <div>
              <div className="leader-avatar">PD</div>
              <div className="leader-name">Parth Desai</div>
              <div className="leader-role">Founder & CEO</div>
              <div className="leader-creds">MS AI, Georgia Tech · Yale AI Lab · HBS · INSEAD</div>
              <div className="leader-stats">
                <div className="leader-stat">
                  <div className="leader-stat-value">30+</div>
                  <div className="leader-stat-label">Years in AI</div>
                </div>
                <div className="leader-stat">
                  <div className="leader-stat-value">$5T+</div>
                  <div className="leader-stat-label">Processed / Year</div>
                </div>
                <div className="leader-stat">
                  <div className="leader-stat-value">55+</div>
                  <div className="leader-stat-label">Countries</div>
                </div>
              </div>
            </div>
            <div>
              <div className="leader-bio">
                <p>One of the earliest practitioners to apply AI to financial services — and one of the few who has done so continuously for over 30 years.</p>
                <p style={{ marginTop: 'var(--space-sm)' }}>AI foundations laid at Georgia Tech and Yale&apos;s AI Lab under Professor Roger Schank, researching natural language understanding — the same discipline powering ioNova today. Founded his first AI-for-banking company in 1994, building platforms now processing <strong>$5T+ annually across 55+ countries</strong> for Tier 1 global banks.</p>
                <p style={{ marginTop: 'var(--space-sm)' }}>Built <strong>Pelican AI</strong>, <strong>ACE Software Solutions</strong>, and <strong>PelicanPay</strong> — each advancing AI&apos;s role in financial services. Developed the <strong>Knowledge First AI™</strong> methodology after witnessing billions wasted on AI projects that started with models instead of knowledge.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="leader-card">
          <div className="leader-avatar">IT</div>
          <div className="leader-name">Ishan Tarunesh</div>
          <div className="leader-role">Co-Founder & CTO</div>
          <div className="leader-creds">B.Tech CS, IIT Bombay · ACL & EACL Published · AIR 33 JEE</div>
          <div className="leader-bio">
            Leads technology strategy, platform architecture, and ioNova&apos;s proprietary NER and cascade entity resolution engines. Published NLP research on multilingual modelling and cross-lingual text processing maps directly to ioNova&apos;s core: parsing, normalising, and resolving entity data across languages, scripts, and formats.
          </div>
        </div>

        <div className="leader-card">
          <div className="leader-avatar">DM</div>
          <div className="leader-name">Devavrat Mahajan</div>
          <div className="leader-role">Co-Founder & COO</div>
          <div className="leader-creds">B.Tech, IIT Bombay · MBA, IIM Ahmedabad · Amazon AI/ML · Kearney</div>
          <div className="leader-bio">
            Runs ioNova&apos;s commercial engine — enterprise partnerships, product operations, and go-to-market. At Amazon, built AI/ML data tools delivering measurable savings at scale. Co-built and scaled an AI services company to <strong>$5M+ valuation</strong> serving 50+ global customers, entirely bootstrapped.
          </div>
        </div>

        <div className="leader-card">
          <div className="leader-avatar">SN</div>
          <div className="leader-name">Saumitra Naik</div>
          <div className="leader-role">VP, Operations & Delivery</div>
          <div className="leader-creds">20+ Years Enterprise Implementation</div>
          <div className="leader-bio">
            <strong>200+ enterprise implementations</strong> for global financial institutions. Led delivery teams of 130+ professionals with <strong>98% on-time delivery</strong> and zero critical project failures. Ensures every client deployment meets the rigorous standards regulated institutions demand.
          </div>
        </div>

        <div className="leader-card">
          <div className="leader-avatar">MM</div>
          <div className="leader-name">Mangesh Malekar</div>
          <div className="leader-role">VP, Customer Success</div>
          <div className="leader-creds">20+ Years Technology, SaaS & AI/ML</div>
          <div className="leader-bio">
            <strong>100+ implementations</strong> managing a portfolio exceeding <strong>$100M in project value</strong>, with 95% satisfaction rate and 100% client retention. Bridges delivery teams and senior business stakeholders to progress every engagement from pilot to production to expansion.
          </div>
        </div>

        <div className="leader-card">
          <div className="leader-avatar">SD</div>
          <div className="leader-name">Samir Dharia</div>
          <div className="leader-role">CISO & VP, Security & Compliance</div>
          <div className="leader-creds">30+ Years IT Security · Apple · Lucent · Bluestar</div>
          <div className="leader-bio">
            Maintained a <strong>zero-breach security record</strong> across three decades spanning Apple, Lucent Technologies, and Bluestar Infotech. Achieved ISO 27001, SOC 1 Type II, and GDPR compliance. Ensures ioNova meets the stringent security requirements of Tier 1 banks.
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyThisTeam() {
  return (
    <section className="section" id="why">
      <div className="section-header">
        <div className="section-label">Why This Team</div>
        <h2 className="section-title">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <svg style={{ width: '28px', height: '28px', strokeWidth: '1.5', color: 'var(--teal-500)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          </span>
          The Rare Intersection
        </h2>
        <p className="section-desc">Entity intelligence demands expertise that few organisations possess simultaneously.</p>
      </div>

      <div className="why-grid">
        <div className="why-card">
          <div className="why-icon ic-teal" style={{ background: 'linear-gradient(135deg,rgba(95,207,208,0.12),rgba(67,173,193,0.08))', border: '1px solid rgba(67,173,193,0.2)', color: 'var(--teal-500)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
          </div>
          <div className="why-title">Domain Depth</div>
          <div className="why-desc">30+ years pioneering AI in banking. Deep knowledge of how payments flow, compliance decisions are made, and entity data propagates across systems.</div>
        </div>
        <div className="why-card">
          <div className="why-icon ic-blue" style={{ background: 'linear-gradient(135deg,rgba(94,161,220,0.12),rgba(60,117,181,0.08))', border: '1px solid rgba(94,161,220,0.2)', color: 'var(--blue-400)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" /></svg>
          </div>
          <div className="why-title">AI & NLP Research</div>
          <div className="why-desc">Published at ACL and EACL. Advanced capabilities to extract, normalise, match, and resolve entities across languages, formats, and data quality levels.</div>
        </div>
        <div className="why-card">
          <div className="why-icon ic-cyan" style={{ background: 'linear-gradient(135deg,rgba(95,207,208,0.12),rgba(142,205,242,0.08))', border: '1px solid rgba(95,207,208,0.2)', color: 'var(--cyan-400)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          </div>
          <div className="why-title">Enterprise Discipline</div>
          <div className="why-desc">Every AI decision grounded in verified knowledge — not statistical probability — with full auditability at production scale. Zero project failures across 50+ implementations.</div>
        </div>
      </div>

      <div className="cta-banner">
        <div className="cta-title">Purpose-Built for Regulated Industries</div>
        <div className="cta-desc">The only entity intelligence platform trusted by the world&apos;s leading financial institutions for their most consequential data challenges.</div>
        <div className="cta-tagline">ioNova AI · Powered by Knowledge First AI™</div>
      </div>
    </section>
  );
}
