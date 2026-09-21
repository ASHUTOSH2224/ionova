import { useState, useEffect } from "react";
import { Link, useLocation } from "@/lib/router-shim";
import { Menu, X, FileCheck, Cpu, CheckCircle, BadgeCheck, Monitor, Shield, MapPin, DollarSign, Code, ChevronDown, LayoutGrid, Terminal, Plug, FileText, Video, Mic, Layers, Box, Route, Building2, ShieldCheck, BookOpenText, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuIndicator,
} from "@/components/ui/navigation-menu";
import { compareFooterLinks } from "@/data/compareLinks";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  description?: string;
  href: string;
  icon: LucideIcon;
};

type NavGroup = {
  label?: string;
  items: NavItem[];
};

type NavSection = {
  title: string;
  groups: NavGroup[];
};

const solutionsOverview = [
  {
    label: "Solutions Overview",
    description: "One engine, seven ways to deploy it",
    href: "/solutions",
    icon: LayoutGrid,
  },
];

const solutionsBuyers = [
  {
    label: "Corporate Treasury",
    description: "Fix beneficiary data at source",
    href: "/solutions/corporate-treasury",
    icon: BadgeCheck,
  },
  {
    label: "Shared Service Centres",
    description: "Fix once, every entity inherits",
    href: "/solutions/shared-service-centres",
    icon: Layers,
  },
];

const solutionsBuilders = [
  {
    label: "TMS & ERP Vendors",
    description: "Ship compliance as a billable feature",
    href: "/solutions/tms-erp-vendors",
    icon: Box,
  },
  {
    label: "Banks & PSPs",
    description: "Two businesses, one engine",
    href: "/solutions/banks",
    icon: Building2,
  },
  {
    label: "Payment & Messaging Hubs",
    description: "Enforce at the network edge",
    href: "/solutions/payment-hubs",
    icon: Route,
  },
  {
    label: "API Providers (VOP / CoP)",
    description: "One API, sub-100ms address verdict",
    href: "/solutions/vop-cop-providers",
    icon: CheckCircle,
  },
];

const solutionsBeneficiary = [
  {
    label: "Financial Crime Compliance",
    description: "Sharper screening from structured data",
    href: "/solutions/compliance",
    icon: ShieldCheck,
  },
];

const addressIntelligenceOverview = [
  {
    label: "Overview",
    description: "The missing layer in payment infrastructure",
    href: "/address-intelligence",
    icon: MapPin,
  },
];

const addressIntelligencePillars = [
  {
    label: "Structured Address Mandate",
    description: "Pillar 1 \u2014 Regulatory mandate & Nov 2026 deadline",
    href: "/address-intelligence/structured-address-mandate",
    icon: FileCheck,
  },
  {
    label: "Business Value",
    description: "Pillar 2 \u2014 The $8\u201312B problem & ROI metrics",
    href: "/address-intelligence/structured-address-value",
    icon: DollarSign,
  },
  {
    label: "Implementation Guide",
    description: "Pillar 3 \u2014 Sidecar architecture, 2\u20134 weeks",
    href: "/address-intelligence/address-implementation",
    icon: Code,
  },
  {
    label: "Why Purpose-Built",
    description: "Pillar 4 \u2014 Postal \u2260 payment validation. 246 countries",
    href: "/address-intelligence/purpose-built-address-solution",
    icon: Shield,
  },
];

const addressIntelligenceSolutions = [
  {
    label: "For Banks",
    description: "Hit 98% STP before the Nov 2026 deadline",
    href: "/address-intelligence/for-banks",
    icon: Building2,
  },
  {
    label: "For Corporates",
    description: "Stop payment rejections before Nov 2026",
    href: "/address-intelligence/for-corporates",
    icon: BadgeCheck,
  },
];

const arsPlatformOverview = [
  {
    label: "Platform Overview",
    description: "The ARS platform \u2014 deterministic, four components",
    href: "/ionova-ars",
    icon: LayoutGrid,
  },
];

const arsPlatformComponents = [
  {
    label: "AI Engine",
    description: "Deterministic 7-step pipeline, sub-50ms P95",
    href: "/ionova-ars/engine",
    icon: Cpu,
  },
  {
    label: "Developer Portal",
    description: "Quick Start, 24 endpoints, sandbox",
    href: "/ionova-ars/developers",
    icon: Terminal,
  },
  {
    label: "Exceptions Workbench",
    description: "No-code resolution + Agentic Workbench",
    href: "/ionova-ars/workbench",
    icon: Monitor,
  },
  {
    label: "Channels & Integrations",
    description: "Sidecar deployment, 6 native channels",
    href: "/ionova-ars/integrations",
    icon: Plug,
  },
];

const resourcesItems = [
  {
    label: "Blogs",
    description: "Articles, analysis & technical deep-dives",
    href: "/blogs",
    icon: FileText,
  },
  {
    label: "Videos",
    description: "Explainers, product demos & webinars",
    href: "/videos",
    icon: Video,
  },
  {
    label: "Podcasts",
    description: "Conversations on payments & compliance",
    href: "/podcasts",
    icon: Mic,
  },
  {
    label: "Newsletter",
    description: "Resolved! — ISO 20022 insights & analysis",
    href: "/newsletter",
    icon: FileText,
  },
  {
    label: "Glossary",
    description: "ISO 20022 address terms, cited and defined",
    href: "/glossary",
    icon: BookOpenText,
  },
  {
    label: "Readiness Assessment",
    description: "Book a scored ISO 20022 traffic assessment",
    href: "/readiness-assessment",
    icon: FileCheck,
  },
  {
    label: "Press Room",
    description: "News, press releases & media coverage",
    href: "/press",
    icon: FileText,
  },
];

const compareItems: NavItem[] = compareFooterLinks.map((item) => ({
  ...item,
  icon: CheckCircle,
}));

const entityIntelligenceItems: NavItem[] = [
  {
    label: "Overview",
    description: "Governed entity resolution across regulated enterprises",
    href: "/entity-intelligence",
    icon: LayoutGrid,
  },
  {
    label: "Cascade Engine",
    description: "Multi-stage matching with production-grade economics",
    href: "/entity-intelligence/cascade",
    icon: Layers,
  },
  {
    label: "Evidence-First AI",
    description: "Cited copilots and audit-grade evidence packs",
    href: "/entity-intelligence/evidence",
    icon: FileCheck,
  },
  {
    label: "Progressive Autonomy",
    description: "Explain, recommend, prepare, and execute with controls",
    href: "/entity-intelligence/autonomy",
    icon: Route,
  },
  {
    label: "Governance-by-Design",
    description: "Model risk controls, drift monitoring, and replayability",
    href: "/entity-intelligence/governance",
    icon: ShieldCheck,
  },
  {
    label: "Overlay Deployment",
    description: "Layer intelligence over existing systems without rip-and-replace",
    href: "/entity-intelligence/overlay",
    icon: Plug,
  },
];

const addressMegaSections: NavSection[] = [
  {
    title: "Platform",
    groups: [
      { label: "Overview", items: arsPlatformOverview },
      { label: "Components", items: arsPlatformComponents },
    ],
  },
  {
    title: "Solutions",
    groups: [
      { label: "Overview", items: solutionsOverview },
      { label: "Buyers", items: solutionsBuyers },
      { label: "Builders", items: solutionsBuilders },
      { label: "Beneficiary", items: solutionsBeneficiary },
    ],
  },
  {
    title: "Product",
    groups: [
      { label: "Overview", items: addressIntelligenceOverview },
      { label: "Four Pillars", items: addressIntelligencePillars },
      { label: "Who We Serve", items: addressIntelligenceSolutions },
    ],
  },
  {
    title: "Compare",
    groups: [
      { items: compareItems },
    ],
  },
];

function DesktopMenuLink({
  item,
  isActive,
}: {
  item: NavItem;
  isActive: (path: string) => boolean;
}) {
  const Icon = item.icon;

  return (
    <NavigationMenuLink asChild>
      <Link
        to={item.href}
        className={cn(
          "flex items-start gap-2.5 rounded-lg px-2 py-2 text-xs transition-all hover:bg-blue-50 group",
          isActive(item.href) && "bg-blue-50"
        )}
      >
        <span
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-surface-2 text-blue-500 transition-colors group-hover:bg-blue-100",
            isActive(item.href) && "bg-blue-100 text-blue-600"
          )}
        >
          <Icon className="h-3.5 w-3.5" />
        </span>
        <span className="min-w-0">
          <span
            className={cn(
              "block font-medium text-navy-900 group-hover:text-blue-700 text-sm leading-snug",
              isActive(item.href) && "text-blue-700 font-semibold"
            )}
          >
            {item.label}
          </span>
          {item.description && (
            <span className="mt-0.5 block text-[11px] leading-snug text-slate-500">
              {item.description}
            </span>
          )}
        </span>
      </Link>
    </NavigationMenuLink>
  );
}

function DesktopMegaSection({
  section,
  isActive,
}: {
  section: NavSection;
  isActive: (path: string) => boolean;
}) {
  return (
    <div className="min-w-0">
      <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-teal-500">
        {section.title}
      </p>
      <div className="space-y-3">
        {section.groups.map((group, groupIndex) => (
          <div key={`${section.title}-${group.label ?? groupIndex}`}>
            {group.label && (
              <p className="px-1 pb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                {group.label}
              </p>
            )}
            <ul className="grid gap-0.5">
              {group.items.map((item) => (
                <li key={item.href}>
                  <DesktopMenuLink item={item} isActive={isActive} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileMenuSection({
  section,
  onNavigate,
}: {
  section: NavSection;
  onNavigate: () => void;
}) {
  return (
    <div className="space-y-2">
      <p className="text-[10px] font-semibold tracking-wider text-teal-500 uppercase pt-2 pb-0.5">
        {section.title}
      </p>
      {section.groups.map((group, groupIndex) => (
        <div key={`${section.title}-${group.label ?? groupIndex}`} className="space-y-1">
          {group.label && (
            <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase pt-1 pb-0.5">
              {group.label}
            </p>
          )}
          {group.items.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                to={item.href}
                data-astro-prefetch="tap"
                className="flex items-center gap-3 text-sm font-medium text-navy-600 hover:text-blue-600 py-1"
                onClick={onNavigate}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSections, setOpenMobileSections] = useState<Record<string, boolean>>({});
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileSection = (section: string) => {
    setOpenMobileSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    const [pathPart, hashPart] = path.split("#");
    const currentPath = location.pathname.replace(/\/+$/, "");
    const targetPath = pathPart.replace(/\/+$/, "");

    // Exact match for root
    if (path === "/" && location.pathname !== "/") {
      return false;
    }

    if (hashPart) {
      // For hash links like /address-intelligence#business
      return currentPath === targetPath && location.hash === `#${hashPart}`;
    }
    // For plain paths like /address-intelligence, only match if no hash is present
    return currentPath === targetPath && !location.hash;
  };
  const isAddressIntelligenceActive =
    location.pathname.startsWith("/address-intelligence") ||
    location.pathname.startsWith("/ionova-ars") ||
    location.pathname.startsWith("/solutions") ||
    location.pathname.startsWith("/compare");
  const isEntityIntelligenceActive = location.pathname.startsWith("/entity-intelligence");
  // Derived from resourcesItems so new entries are automatically covered.
  // Also covers sub-paths (/press/*, /news/*, /newsletter/*) and legacy hash anchors.
  const isResourcesActive =
    resourcesItems.some(item => location.pathname === item.href || location.pathname.startsWith(item.href + '/')) ||
    location.pathname.startsWith("/newsletter/") ||
    location.hash.startsWith("#whitepaper") ||
    location.hash.startsWith("#checklist");
  const isCompanyActive = location.pathname === "/company";
  // Attach navbar purely based on scroll position for all pages
  const isAttached = isScrolled;

  return (
    <header className={cn(
      "fixed left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300",
      isAttached ? "top-0" : "top-6"
    )}>
      <nav className="pointer-events-auto flex items-center justify-between w-full max-w-7xl h-16 lg:h-20 rounded-full border border-border/50 bg-white/80 shadow-2xl backdrop-blur-xl px-4 md:px-4 lg:px-8 transition-all">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 mr-2 md:mr-4 lg:mr-8 shrink-0">
          <img
            src="/Logo/ionova logo/logo.PNG"
            alt="ioNova AI logo"
            width={52}
            height={52}
            className="h-11 w-11 lg:h-[3.25rem] lg:w-[3.25rem] object-contain"
          />
          <span className="text-[1.35rem] lg:text-[1.55rem] font-bold text-navy-950 font-heading tracking-tight whitespace-nowrap">
            ioNova AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 min-[1100px]:gap-1 min-[1100px]:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-slate-100/50 focus:bg-slate-100/50 data-[active]:bg-blue-50/50 data-[state=open]:bg-slate-100/50 h-auto py-2 px-2 md:px-2 lg:px-4 rounded-full text-navy-900 hover:text-blue-600 font-medium text-base",
                    isAddressIntelligenceActive && "text-blue-600 font-semibold bg-blue-50/50"
                  )}
                >
                  Address Intelligence
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[860px] max-w-[calc(100vw-2rem)] rounded-[6px] border border-border/50 bg-white p-5 shadow-xl">
                    <div className="grid grid-cols-4 gap-4">
                      {addressMegaSections.map((section) => (
                        <DesktopMegaSection
                          key={section.title}
                          section={section}
                          isActive={isActive}
                        />
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuIndicator className="fill-white mt-3 lg:mt-5 scale-[1.5]" />
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-slate-100/50 focus:bg-slate-100/50 data-[active]:bg-blue-50/50 data-[state=open]:bg-slate-100/50 h-auto py-2 px-2 md:px-2 lg:px-4 rounded-full text-navy-900 hover:text-blue-600 font-medium text-base",
                    isEntityIntelligenceActive && "text-blue-600 font-semibold bg-blue-50/50"
                  )}
                >
                  Entity Intelligence
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[340px] rounded-[6px] border border-border/50 bg-white p-3 shadow-xl">
                    <p className="text-xs font-semibold tracking-wider text-teal-500 uppercase mb-1.5 px-1">
                      Entity Intelligence
                    </p>
                    <ul className="grid gap-0.5">
                      {entityIntelligenceItems.map((item) => (
                        <li key={item.href}>
                          <DesktopMenuLink item={item} isActive={isActive} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuIndicator className="fill-white mt-3 lg:mt-5 scale-[1.5]" />
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-slate-100/50 focus:bg-slate-100/50 data-[active]:bg-blue-50/50 data-[state=open]:bg-slate-100/50 h-auto py-2 px-2 md:px-2 lg:px-4 rounded-full text-navy-900 hover:text-blue-600 font-medium text-base",
                    isResourcesActive && "text-blue-600 font-semibold bg-blue-50/50"
                  )}
                >
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[280px] bg-white rounded-[6px] shadow-xl border border-border/50 p-3">
                    <p className="text-xs font-semibold tracking-wider text-teal-500 uppercase mb-1.5 px-1">Resources</p>
                    <ul className="grid gap-0.5">
                      {resourcesItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className={cn(
                                "flex items-center gap-2.5 px-2 py-2 rounded-lg text-xs transition-all hover:bg-blue-50 group",
                                isActive(item.href) && "bg-blue-50"
                              )}
                            >
                              <span className={cn(
                                "flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-surface-2 text-blue-500 group-hover:bg-blue-100 transition-colors",
                                isActive(item.href) && "bg-blue-100 text-blue-600"
                              )}>
                                <item.icon className="h-3.5 w-3.5" />
                              </span>
                              <span className={cn(
                                "font-medium text-navy-900 group-hover:text-blue-700 text-sm",
                                isActive(item.href) && "text-blue-700 font-semibold"
                              )}>{item.label}</span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuIndicator className="fill-white mt-3 lg:mt-5 scale-[1.5]" />
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            to="/company"
            data-astro-prefetch="viewport"
            className={cn(
              "text-base font-medium text-navy-900 transition-colors hover:text-blue-600 px-2 md:px-2 lg:px-4 py-2 rounded-full hover:bg-slate-100/50",
              isCompanyActive && "text-blue-600 font-semibold bg-blue-50/50"
            )}
          >
            Company
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden min-[1100px]:block ml-4">
          <Button variant="hero" className="rounded-full px-6" asChild>
            <Link to="/demo" data-astro-prefetch="viewport">View Demo</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="min-[1100px]:hidden"
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
        <div className="pointer-events-auto absolute top-full left-4 right-4 mt-2 rounded-[6px] border border-border/50 bg-white/95 shadow-2xl backdrop-blur-xl p-6 min-[1100px]:hidden flex flex-col gap-4 animate-in slide-in-from-top-4 fade-in duration-200 max-h-[80vh] overflow-y-auto">
          <div className="space-y-2">
            <button
              onClick={() => toggleMobileSection('address')}
              className="flex w-full items-center justify-between text-base font-medium text-navy-900"
            >
              Address Intelligence
              <ChevronDown className={cn("h-4 w-4 transition-transform", openMobileSections['address'] ? "rotate-180" : "")} />
            </button>
            {openMobileSections['address'] && (
              <div className="pl-4 space-y-4 border-l-2 border-primary/10 ml-1 animate-in slide-in-from-top-2 fade-in duration-200">
                {addressMegaSections.map((section) => (
                  <MobileMenuSection
                    key={section.title}
                    section={section}
                    onNavigate={() => setMobileMenuOpen(false)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <button
              onClick={() => toggleMobileSection('entity')}
              className="flex w-full items-center justify-between text-base font-medium text-navy-900"
            >
              Entity Intelligence
              <ChevronDown className={cn("h-4 w-4 transition-transform", openMobileSections['entity'] ? "rotate-180" : "")} />
            </button>
            {openMobileSections['entity'] && (
              <div className="pl-4 space-y-1 border-l-2 border-primary/10 ml-1 animate-in slide-in-from-top-2 fade-in duration-200">
                {entityIntelligenceItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    data-astro-prefetch="tap"
                    className="flex items-center gap-3 text-sm font-medium text-navy-600 hover:text-blue-600 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <button
              onClick={() => toggleMobileSection('resources')}
              className="flex w-full items-center justify-between text-base font-medium text-navy-900"
            >
              Resources
              <ChevronDown className={cn("h-4 w-4 transition-transform", openMobileSections['resources'] ? "rotate-180" : "")} />
            </button>
            {openMobileSections['resources'] && (
              <div className="pl-4 space-y-1 border-l-2 border-primary/10 ml-1 animate-in slide-in-from-top-2 fade-in duration-200">
                {resourcesItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    data-astro-prefetch="tap"
                    className="flex items-center gap-3 text-sm font-medium text-navy-600 hover:text-blue-600 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/company"
            data-astro-prefetch="tap"
            className="block text-base font-medium text-navy-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            Company
          </Link>

          <Button variant="hero" className="w-3/4 h-14 mx-auto rounded-full mt-2 text-lg" asChild>
            <Link to="/demo" data-astro-prefetch="tap" onClick={() => setMobileMenuOpen(false)}>
              View a Demo
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
