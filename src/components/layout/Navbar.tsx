import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileCheck, TrendingUp, Map, Cpu, CheckCircle, BookOpen, FileText, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuIndicator,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
];

const addressIntelligenceItems = [
  {
    label: "The Mandate",
    //description: "Understand ISO 20022 requirements and the critical timeline.",
    href: "/address-intelligence/structured-address-mandate",
    icon: FileCheck,
  },
  {
    label: "The Strategic Value",
    //description: "Beyond compliance: 98% STP and operational excellence.",
    href: "/address-intelligence/business-value",
    icon: TrendingUp,
  },
  {
    label: "The Roadmap",
    //description: "Strategies for a 10-16 week zero-disruption rollout.",
    href: "/address-intelligence/implementation",
    icon: Map,
  },
  {
    label: "The Technology",
    //description: "Why generic LLMs and postal tools fail at payments.",
    href: "/address-intelligence/why-purpose-built",
    icon: Cpu,
  },
];

const resourcesItems = [
  {
    label: "Blogs",
    href: "/resources",
    icon: BookOpen,
  },
  {
    label: "Whitepaper",
    href: "/resources#whitepaper",
    icon: FileText,
  },
  {
    label: "ISO 20022 Compliance Checklist",
    href: "/resources#checklist",
    icon: ClipboardCheck,
  },
];

const rightNavItems = [
  { label: "Company", href: "/company" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isAddressIntelligenceActive = location.pathname.startsWith(
    "/address-intelligence"
  );
  const isResourcesActive = location.pathname === "/resources" || location.hash.startsWith("#whitepaper") || location.hash.startsWith("#checklist");
  // Attach navbar purely based on scroll position for all pages
  const isAttached = isScrolled;

  return (
    <header className={cn(
      "fixed left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300",
      isAttached ? "top-0" : "top-6"
    )}>
      <nav className="pointer-events-auto flex items-center justify-between w-full max-w-7xl h-16 lg:h-20 rounded-full border border-border/50 bg-white/80 shadow-2xl backdrop-blur-xl px-6 lg:px-8 transition-all">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mr-8">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-navy-950">io</span>
            <span className="text-2xl font-bold text-gradient">Nova</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/"
            className={cn(
              "text-sm font-medium text-navy-900 transition-colors hover:text-blue-600 px-4 py-2 rounded-full hover:bg-slate-100/50",
              isActive("/") && "text-blue-600 font-semibold bg-blue-50/50"
            )}
          >
            Home
          </Link>
          <Link
            to="/platform"
            className={cn(
              "text-sm font-medium text-navy-900 transition-colors hover:text-blue-600 px-4 py-2 rounded-full hover:bg-slate-100/50",
              isActive("/platform") && "text-blue-600 font-semibold bg-blue-50/50"
            )}
          >
            Platform
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-slate-100/50 focus:bg-slate-100/50 data-[active]:bg-blue-50/50 data-[state=open]:bg-slate-100/50 h-auto py-2 px-4 rounded-full text-navy-900 hover:text-blue-600 font-medium",
                    isAddressIntelligenceActive && "text-blue-600 font-semibold bg-blue-50/50"
                  )}
                >
                  Address Intelligence
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[240px] gap-1 p-2 bg-white rounded-xl shadow-xl border border-border/50">
                    {addressIntelligenceItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className={cn(
                              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-navy-900 transition-all hover:bg-blue-50 hover:text-blue-700",
                              isActive(item.href) && "bg-blue-50 text-blue-700"
                            )}
                          >
                            <item.icon className="h-4 w-4 shrink-0" />
                            <span>{item.label}</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuIndicator className="fill-white mt-3 lg:mt-5 scale-[1.5]" />
            </NavigationMenuList>
          </NavigationMenu>

          {rightNavItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "text-sm font-medium text-navy-900 transition-colors hover:text-blue-600 px-4 py-2 rounded-full hover:bg-slate-100/50",
                isActive(item.href) && "text-blue-600 font-semibold bg-blue-50/50"
              )}
            >
              {item.label}
            </Link>
          ))}

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-slate-100/50 focus:bg-slate-100/50 data-[active]:bg-blue-50/50 data-[state=open]:bg-slate-100/50 h-auto py-2 px-4 rounded-full text-navy-900 hover:text-blue-600 font-medium",
                    isResourcesActive && "text-blue-600 font-semibold bg-blue-50/50"
                  )}
                >
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-1 p-2 bg-white rounded-xl shadow-xl border border-border/50">
                    {resourcesItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className={cn(
                              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-navy-900 transition-all hover:bg-blue-50 hover:text-blue-700",
                              isActive(item.href) && "bg-blue-50 text-blue-700"
                            )}
                          >
                            <item.icon className="h-4 w-4 shrink-0" />
                            <span>{item.label}</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuIndicator className="fill-white mt-3 lg:mt-5 scale-[1.5]" />
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block ml-4">
          <Button variant="hero" className="rounded-full px-6" asChild>
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
            <X className="h-6 w-6 text-navy-950" />
          ) : (
            <Menu className="h-6 w-6 text-navy-950" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-full left-4 right-4 mt-2 rounded-2xl border border-border/50 bg-white/95 shadow-2xl backdrop-blur-xl p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-4 fade-in duration-200">
          <Link
            to="/"
            className="block text-base font-medium text-navy-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/platform"
            className="block text-base font-medium text-navy-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            Platform
          </Link>

          <div className="space-y-2">
            <div className="text-base font-medium text-navy-900">Address Intelligence</div>
            <div className="pl-4 space-y-3 border-l-2 border-primary/10 ml-1">
              {addressIntelligenceItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center gap-3 text-sm font-medium text-navy-600 hover:text-blue-600 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>


          {rightNavItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block text-base font-medium text-navy-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="space-y-2">
            <div className="text-base font-medium text-navy-900">Resources</div>
            <div className="pl-4 space-y-3 border-l-2 border-primary/10 ml-1">
              {resourcesItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center gap-3 text-sm font-medium text-navy-600 hover:text-blue-600 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Button variant="hero" size="lg" className="w-full rounded-full mt-2" asChild>
            <Link to="/demo" onClick={() => setMobileMenuOpen(false)}>
              View a Demo
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
