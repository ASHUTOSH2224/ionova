import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Platform", href: "/#platform" },
  { label: "Company", href: "/company" },
  { label: "Resources", href: "/resources" },
  { label: "ROI Calculator", href: "/#roi-calculator" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-navy-950">io</span>
            <span className="text-2xl font-bold text-gradient">Nova</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "text-sm font-medium text-text-label transition-colors hover:text-blue-600",
                location.pathname === item.href && "text-blue-600"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="hero" size="lg" asChild>
            <Link to="/demo">View a Demo</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container space-y-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block text-base font-medium text-text-label transition-colors hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="hero" size="lg" className="w-full" asChild>
              <Link to="/demo" onClick={() => setMobileMenuOpen(false)}>
                View a Demo
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
