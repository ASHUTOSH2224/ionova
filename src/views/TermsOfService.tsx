import { useRef, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { AppWrapper } from "@/components/AppWrapper";

export default function TermsOfServicePage() {
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
            <TermsOfServiceContent />
          </div>
        </div>
      </Layout>
    </AppWrapper>
  );
}

function TermsOfServiceContent() {
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
      <AdditionalTerms />
      <EnterpriseBanner />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-badge">
        <span className="pulse-dot"></span>
        <span style={{ position: "relative", zIndex: 1 }}>Legal Agreement</span>
      </div>
      <h1>
        Clear Terms
        <br />
        <span className="accent">Transparent Partnership</span>
      </h1>
      <p className="hero-subtitle">
        These terms govern your access to and use of the ioNova AI Entity
        Intelligence Platform. Built for enterprise trust and mutual success.
      </p>
    </section>
  );
}

function MainContent() {
  const termsCards = [
    {
      icon: "📜",
      iconClass: "ic-teal",
      title: "Acceptance of Terms",
      desc: "By accessing or using the ioNova AI Entity Intelligence Platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not access or use our services.",
    },
    {
      icon: "⚖️",
      iconClass: "ic-blue",
      title: "License & Access",
      desc: "We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our platform for your internal business purposes only. This does not include rights to resell, reverse engineer, or use for any illegal purpose.",
    },
    {
      icon: "✅",
      iconClass: "ic-cyan",
      title: "User Responsibilities",
      desc: "You are responsible for maintaining the confidentiality of your account credentials, all activities under your account, ensuring compliance with applicable laws, the accuracy of data you provide, and implementing appropriate security measures.",
    },
    {
      icon: "⚡",
      iconClass: "ic-navy",
      title: "Service Level & Availability",
      desc: "We strive to maintain high service availability with target uptime of 99.9% for production environments, resolution latency under 200ms, and regular maintenance windows with advance notice. We reserve the right to modify or suspend services with reasonable notice.",
    },
    {
      icon: "💡",
      iconClass: "ic-teal",
      title: "Intellectual Property",
      desc: "All intellectual property rights in the platform remain with ioNova AI. You retain ownership of your data, and we claim no ownership rights over it. We may use anonymized, aggregated data to improve our services.",
    },
    {
      icon: "⚠️",
      iconClass: "ic-blue",
      title: "Limitation of Liability",
      desc: "TO THE MAXIMUM EXTENT PERMITTED BY LAW: Our services are provided 'AS IS' without warranties. We are not liable for indirect or consequential damages. Our total liability shall not exceed fees paid by you in the 12 months preceding the claim.",
    },
  ];

  return (
    <section className="section">
      <div className="section-header">
        <div className="section-label">Terms & Conditions</div>
        <h2 className="section-title">Understanding Your Agreement</h2>
        <p className="section-desc">
          These Terms of Service ("Terms") govern your access to and use of the
          services, software, and websites (collectively, the "Services")
          provided by ioNova AI. By using our Services, you agree to these
          Terms and our Privacy Policy.
        </p>
      </div>

      <div className="philosophy-grid">
        {termsCards.map((card) => (
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

function AdditionalTerms() {
  const additionalSections = [
    {
      title: "Payment Terms",
      content:
        "Fees are based on your subscription plan and usage. Payment is due as specified in your agreement. We may change our fees with 30 days' notice. Failure to pay may result in service suspension or termination. All fees are non-refundable except as required by law or expressly stated in your agreement.",
    },
    {
      title: "Data Processing & Privacy",
      content:
        "Our processing of your data is governed by our Privacy Policy and applicable Data Processing Agreement. We comply with GDPR, ISO 27001, and SOC 1 Type II standards. You are the data controller and we act as your data processor. You are responsible for obtaining necessary consents and providing required notices to your end users.",
    },
    {
      title: "Confidentiality",
      content:
        "Each party agrees to maintain confidentiality of the other's confidential information and use it only for purposes of the agreement. This obligation survives termination for 5 years. Confidential information does not include information that is publicly available or independently developed.",
    },
    {
      title: "Termination",
      content:
        "Either party may terminate for convenience with 30 days' written notice. We may terminate immediately for breach of these terms. Upon termination, your access will cease and you must delete all copies of our software. Provisions that by their nature should survive will remain in effect.",
    },
    {
      title: "Indemnification",
      content:
        "You agree to indemnify and hold ioNova AI harmless from claims arising from your use of the services, violation of these terms, or infringement of third-party rights. We will notify you of claims and cooperate in defense, and you will have control of the defense and settlement.",
    },
    {
      title: "Governing Law & Disputes",
      content:
        "These terms are governed by the laws of the jurisdiction specified in your agreement, without regard to conflict of law principles. Disputes will be resolved through binding arbitration, except for claims of intellectual property infringement or breaches of confidentiality, which may be brought in court.",
    },
    {
      title: "Changes to Terms",
      content:
        "We may update these Terms of Service from time to time. Material changes will be notified via email or platform notice at least 30 days before taking effect. Your continued use after changes constitutes acceptance. If you don't agree to changes, you may terminate your account.",
    },
    {
      title: "Contact Information",
      content:
        "For questions about these Terms of Service, please contact us at: legal@ionova.ai or ioNova AI, Attn: Legal Department.",
    },
  ];

  return (
    <section className="section">
      <div className="section-header">
        <div className="section-label">Additional Terms</div>
        <h2 className="section-title">Other Important Terms</h2>
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

function EnterpriseBanner() {
  return (
    <section className="section">
      <div className="cta-banner">
        <h3 className="cta-title">Enterprise Agreements Available</h3>
        <p className="cta-desc">
          For enterprise customers, custom terms, SLAs, and data processing
          agreements are available. Contact our legal team to discuss your
          requirements.
        </p>
        <div className="btn-row">
          <a href="/demo" className="btn btn-accent">
            Contact Legal Team
          </a>
          <a 
            href="/privacy-policy" 
            className="btn" 
            style={{ 
              background: 'rgba(255,255,255,0.1)', 
              color: 'white', 
              border: '1.5px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
            }}
          >
            View Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
}
