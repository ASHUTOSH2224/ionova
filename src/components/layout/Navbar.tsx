import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
];

const addressIntelligenceItems = [
  {
    label: "ISO 20022 Structured Address Requirements",
    href: "/address-intelligence/structured-address-mandate",
  },
  {
    label: "Business Value Beyond Compliance",
    href: "/address-intelligence/business-value",
  },
  {
    label: "Implementing Structured Address Resolution",
    href: "/address-intelligence/implementation",
  },
  {
    label: "Why Payment Addresses Require Purpose-Built Intelligence",
    href: "/address-intelligence/why-purpose-built",
  },
];

const rightNavItems = [
  { label: "Company", href: "/company" },
  { label: "Resources", href: "/resources" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isAddressIntelligenceActive = location.pathname.startsWith(
    "/address-intelligence"
  );

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
          <Link
            to="/"
            className={cn(
              "text-sm font-medium text-text-label transition-colors hover:text-blue-600",
              isActive("/") && "text-blue-600"
            )}
          >
            Home
          </Link>
          <Link
            to="/platform"
            className={cn(
              "text-sm font-medium text-text-label transition-colors hover:text-blue-600",
              isActive("/platform") && "text-blue-600"
            )}
          >
            Platform
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "flex items-center gap-1 text-sm font-medium text-text-label transition-colors hover:text-blue-600 outline-none",
                isAddressIntelligenceActive && "text-blue-600"
              )}
            >
              Address Intelligence
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[300px]">
              {addressIntelligenceItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link
                    to={item.href}
                    className={cn(
                      "w-full cursor-pointer",
                      isActive(item.href) && "text-blue-600"
                    )}
                  >
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {rightNavItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "text-sm font-medium text-text-label transition-colors hover:text-blue-600",
                isActive(item.href) && "text-blue-600"
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
            <Link
              to="/"
              className="block text-base font-medium text-text-label transition-colors hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/platform"
              className="block text-base font-medium text-text-label transition-colors hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Platform
            </Link>

            <div className="space-y-2">
              <div className="text-base font-medium text-text-label">Address Intelligence</div>
              <div className="pl-4 space-y-2 border-l-2 border-border ml-1">
                {addressIntelligenceItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-sm font-medium text-text-label/80 transition-colors hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {rightNavItems.map((item) => (
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
