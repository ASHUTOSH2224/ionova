import { useRef, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { AppWrapper } from "@/components/AppWrapper";

export default function PrivacyPolicyPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    el.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <AppWrapper>
      <Layout>
        <div className="ds-v5" ref={ref}>
          <div className="container">
            <PrivacyPolicyContent />
          </div>
        </div>
      </Layout>
    </AppWrapper>
  );
}

function PrivacyPolicyContent() {
  return (
    <div className="about-content">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5FCFD0" />
            <stop offset="50%" stopColor="#43ADC1" />
            <stop offset="100%" stopColor="#3C75B5" />
          </linearGradient>
        </defs>
      </svg>

      <Hero />
      <MainContent />
      <AdditionalInfo />
      <ComplianceBanner />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-badge">
        <span className="pulse-dot"></span>
        <span style={{ position: "relative", zIndex: 1 }}>
          Privacy & Data Protection
        </span>
      </div>
      <h1>
        Your Data. Your Trust.
        <br />
        <span className="accent">Our Commitment.</span>
      </h1>
      <p className="hero-subtitle">
        Your privacy and data security are fundamental to how we build and
        operate our platform. This policy explains how we collect, use, and
        protect your information.
      </p>
    </section>
  );
}

function MainContent() {
  const philosophyCards = [
    {
      icon: "📄",
      iconClass: "ic-teal",
      title: "Information We Collect",
      desc: "We collect information you provide directly to us when using our services, including account details, payment information, communications, and usage data. We may also collect information automatically through cookies and similar technologies to improve your experience and analyze platform usage.",
    },
    {
      icon: "🔒",
      iconClass: "ic-blue",
      title: "How We Use Your Information",
      desc: "We use collected information to provide, maintain, and improve our services, process transactions, respond to inquiries, send updates and security alerts, monitor trends and activities, and detect and prevent fraudulent or illegal activity.",
    },
    {
      icon: "🛡️",
      iconClass: "ic-cyan",
      title: "Data Security",
      desc: "We implement industry-standard security measures including ISO 27001 certification, SOC 1 Type II compliance, GDPR compliant data handling, end-to-end encryption, regular security audits, and robust access controls to protect your information.",
    },
    {
      icon: "👁️",
      iconClass: "ic-navy",
      title: "Information Sharing",
      desc: "We do not sell your personal information. We may share your information only with your consent, with service providers, to comply with legal obligations, to protect rights and safety, or in connection with business transactions (with notice).",
    },
    {
      icon: "🌍",
      iconClass: "ic-teal",
      title: "International Data Transfers",
      desc: "Your information may be transferred internationally. We ensure appropriate safeguards through standard contractual clauses, adequacy decisions, and compliance with applicable data protection laws, processing data in accordance with this policy.",
    },
    {
      icon: "👥",
      iconClass: "ic-blue",
      title: "Your Rights",
      desc: "Depending on your location, you may have rights to access, correct, delete, restrict processing, or port your data, and withdraw consent. Contact us at privacy@ionova.ai to exercise these rights.",
    },
  ];

  return (
    <section className="section">
      <div className="section-header">
        <div className="section-label">Your Privacy Matters</div>
        <h2 className="section-title">How We Protect Your Information</h2>
        <p className="section-desc">
          ioNova AI ("we," "our," or "us") is committed to protecting your
          privacy and ensuring the security of your personal information. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you use our Entity Intelligence Platform and
          related services.
        </p>
      </div>

      <div className="philosophy-grid">
        {philosophyCards.map((card) => (
          <div key={card.title} className="philosophy-card">
            <div className={`philosophy-icon ${card.iconClass}`}>
              <span style={{ fontSize: "28px" }}>{card.icon}</span>
            </div>
            <h3 className="philosophy-title">{card.title}</h3>
            <p className="philosophy-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AdditionalInfo() {
  const additionalSections = [
    {
      title: "Cookies and Tracking Technologies",
      content:
        "We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings. Our platform may not function properly if cookies are disabled.",
    },
    {
      title: "Data Retention",
      content:
        "We retain your information for as long as necessary to provide our services and comply with legal obligations. When we no longer need your information, we securely delete or anonymize it.",
    },
    {
      title: "Children's Privacy",
      content:
        "Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.",
    },
    {
      title: "Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the 'Last Updated' date. Your continued use of our services after changes constitutes acceptance of the updated policy.",
    },
    {
      title: "Contact Us",
      content:
        "If you have questions or concerns about this Privacy Policy or our data practices, please contact us at: privacy@ionova.ai or ioNova AI, Attn: Privacy Team.",
    },
  ];

  return (
    <section className="section">
      <div className="section-header">
        <div className="section-label">Additional Information</div>
        <h2 className="section-title">Other Important Details</h2>
      </div>

      <div className="g2">
        {additionalSections.map((section) => (
          <div key={section.title} className="card">
            <h3 className="card-title">{section.title}</h3>
            <p className="card-body">{section.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ComplianceBanner() {
  return (
    <section className="section">
      <div className="cta-banner">
        <div style={{ marginBottom: "24px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <div className="badge badge-accent">ISO 27001</div>
          <div className="badge badge-accent">SOC 1 Type II</div>
          <div className="badge badge-accent">GDPR Compliant</div>
        </div>
        <h3 className="cta-title">Enterprise-Grade Security & Compliance</h3>
        <p className="cta-desc">
          Your data is protected by the same security standards trusted by Tier
          1 global financial institutions.
        </p>
        <div className="cta-tagline">
          ioNova AI · Powered by Knowledge First AI™
        </div>
      </div>
    </section>
  );
}
