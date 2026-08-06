import { compareFooterLinks } from "@/data/compareLinks";

export function Footer() {
  const footerLinks = {
    platform: {
      title: "PLATFORM",
      links: [
        { label: "Address Intelligence", href: "/address-intelligence" },
        { label: "Pricing", href: "/pricing" },
        { label: "Entity Intelligence", href: "/entity-intelligence" },
        { label: "Cascade Engine", href: "/entity-intelligence/cascade" },
        { label: "Governance", href: "/entity-intelligence/governance" },
      ],
    },
    resources: {
      title: "RESOURCES",
      links: [
        { label: "Blogs", href: "/blogs" },
        { label: "Videos", href: "/videos" },
        { label: "Podcasts", href: "/podcasts" },
        { label: "Glossary", href: "/glossary" },
        { label: "Readiness Assessment", href: "/readiness-assessment" },
      ],
    },
    solutions: {
      title: "SOLUTIONS",
      links: [
        {
          label: "Structured Address Mandate",
          href: "/address-intelligence/structured-address-mandate",
        },
        { label: "Business Value", href: "/address-intelligence/structured-address-value" },
        {
          label: "Implementation",
          href: "/address-intelligence/address-implementation",
        },
        {
          label: "Purpose-Built Solution",
          href: "/address-intelligence/purpose-built-address-solution",
        },
      ],
    },
    company: {
      title: "COMPANY",
      links: [
        { label: "About", href: "/company" },
        { label: "Contact", href: "/demo" },
        // { label: "ROI Calculator", href: "/roi-calculator" },
      ],
    },
    compare: {
      title: "COMPARE",
      links: compareFooterLinks,
    },
  };

  return (
    <footer className="border-t border-[#D0DAEB] bg-[#F4F7FB]">
      <div className="mx-auto max-w-[1200px] px-6 pt-10 pb-6 md:px-8 md:pt-12 md:pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr]">
          {/* Brand Column */}
          <div className="max-w-[300px]">
            <a href="/" className="flex items-center gap-3 mb-5">
              <img
                src="/Logo/ionova logo/logo.PNG"
                alt="ioNova AI logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-[#0E1935] tracking-tight whitespace-nowrap"
                style={{ fontFamily: "'Figtree', system-ui, sans-serif" }}
              >
                ioNova AI
              </span>
            </a>
            <p
              style={{
                fontFamily: "'Figtree', system-ui, sans-serif",
                fontSize: "14px",
                lineHeight: "1.7",
                color: "#466587",
              }}
            >
              Intelligent Data Infrastructure for Regulated Enterprises.
              AI-Native ISO 20022 Address Resolution.
            </p>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4
                style={{
                  fontFamily: "'Figtree', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  letterSpacing: "1.5px",
                  color: "#43ADC1",
                  marginBottom: "20px",
                }}
              >
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily: "'Figtree', system-ui, sans-serif",
                        fontSize: "14px",
                        color: "#2D3A4A",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      className="hover:text-[#3C75B5]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-14 mb-6 border-t border-[#D0DAEB]" />

        {/* Bottom Row */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p
            style={{
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontSize: "13px",
              color: "#8796A7",
            }}
          >
            &copy; 2026 ioNova AI. All rights reserved. | AI-Native ISO 20022
            Address Resolution
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy-policy"
              style={{
                fontFamily: "'Figtree', system-ui, sans-serif",
                fontSize: "13px",
                color: "#8796A7",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              className="hover:text-[#3C75B5]"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              style={{
                fontFamily: "'Figtree', system-ui, sans-serif",
                fontSize: "13px",
                color: "#8796A7",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              className="hover:text-[#3C75B5]"
            >
              Terms of Service
            </a>
            <a
              href="https://www.linkedin.com/company/ionova-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ioNova AI on LinkedIn"
              style={{
                color: "#8796A7",
                transition: "color 0.2s ease",
              }}
              className="hover:text-[#0A66C2]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
