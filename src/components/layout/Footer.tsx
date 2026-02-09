import { Link } from "@/lib/router-shim";
import { Linkedin } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Home", href: "/" },
    { label: "Platform", href: "/platform" },
    { label: "Address Intelligence", href: "/address-intelligence/structured-address-mandate" },
  ],
  company: [
    { label: "Company", href: "/company" },
    { label: "Resources", href: "/resources" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16 lg:py-20 font-sans">
      <div className="container px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="inline-flex items-center font-heading">
              <span className="text-2xl font-bold text-navy-950">io</span>
              <span className="text-2xl font-bold text-gradient">Nova</span>
            </Link>
            <p className="text-[13px] leading-relaxed text-text-muted max-w-xs">
              AI-Native Address Resolution for ISO 20022 Compliance. Intelligent Data Infrastructure for Regulated Enterprises.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 transition-all hover:bg-blue-500/20 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.1em] text-navy-950 font-heading">
              Product
            </h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[13px] text-text-label transition-colors hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.1em] text-navy-950 font-heading">
              Company
            </h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[13px] text-text-label transition-colors hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.1em] text-navy-950 font-heading">
              Legal
            </h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[13px] text-text-label transition-colors hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-[11px] font-mono text-text-muted uppercase tracking-wider">Bengaluru, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-text-muted">
            © 2026 ioNova AI. All Rights Reserved.
          </p>
          <div className="flex items-center font-heading opacity-50 grayscale scale-75 md:scale-90">
            <span className="text-xl font-bold text-navy-950">io</span>
            <span className="text-xl font-bold text-navy-950">Nova</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
