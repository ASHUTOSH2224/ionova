import { Link } from "react-router-dom";
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
    <footer className="border-t border-border bg-gradient-hero text-sky-200">
      <div className="container py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center">
              <span className="text-2xl font-bold text-sky-200">io</span>
              <span className="text-2xl font-bold text-gradient-accent">Nova</span>
            </Link>
            <p className="mt-4 text-sm text-sky-200/70">
              AI-Native Address Resolution for ISO 20022 Compliance.
            </p>
            <div className="mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-200/10 transition-colors hover:bg-sky-200/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sky-200">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-sky-200/70 transition-colors hover:text-sky-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sky-200">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-sky-200/70 transition-colors hover:text-sky-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sky-200">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-sky-200/70 transition-colors hover:text-sky-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs text-sky-200/50">Bengaluru, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-sky-200/10 pt-8">
          <p className="text-center text-sm text-sky-200/50">
            © 2026 ioNova. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
