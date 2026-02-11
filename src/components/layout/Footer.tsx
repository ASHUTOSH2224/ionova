export function Footer() {
  const footerLinks = {
    platform: {
      title: "PLATFORM",
      links: [
        { label: "Address Intelligence", href: "/address-intelligence" },
        { label: "Entity Intelligence", href: "/platform#entity" },
        { label: "Cascade Engine", href: "/platform#cascade" },
        { label: "Governance", href: "/platform#governance" },
      ],
    },
    resources: {
      title: "RESOURCES",
      links: [
        { label: "All Content", href: "/blogs" },
        { label: "Blogs", href: "/blogs" },
        // { label: "Podcasts", href: "/blogs#podcasts" },
        // { label: "Videos", href: "/blogs#videos" },
        // { label: "Newsletters", href: "/blogs#newsletters" },
      ],
    },
    solutions: {
      title: "SOLUTIONS",
      links: [
        {
          label: "Structured Address Mandate",
          href: "/address-intelligence#mandate",
        },
        { label: "Business Value", href: "/address-intelligence#business" },
        {
          label: "Implementation",
          href: "/address-intelligence#implementation",
        },
        {
          label: "Purpose-Built Solution",
          href: "/address-intelligence#purpose",
        },
      ],
    },
    company: {
      title: "COMPANY",
      links: [
        { label: "About", href: "/company" },
        { label: "Contact", href: "/demo" },
        { label: "ROI Calculator", href: "/demo" },
      ],
    },
  };

  return (
    <footer className="border-t border-[#D0DAEB] bg-[#F4F7FB]">
      <div className="mx-auto max-w-[1200px] px-6 pt-10 pb-6 md:px-8 md:pt-12 md:pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          {/* Brand Column */}
          <div className="max-w-[300px]">
            <a href="/" className="inline-block mb-5">
              <span
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  letterSpacing: "-0.3px",
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #5FCFD0, #43ADC1, #3C75B5, #243574)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  io
                </span>
                <span style={{ color: "#0E1935" }}> Nova AI</span>
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
                  fontFamily: "'Outfit', system-ui, sans-serif",
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
          <div className="flex gap-6">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
