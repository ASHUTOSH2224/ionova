// ioNova ARS Solutions — index used by the /solutions hub (SolutionsOverview.astro).
// Each solution's full page content lives in its own static view (src/views/Sol*.astro);
// this file only carries the light fields the hub card grid needs.

export type SolutionGroup = "Buyers" | "Builders & Intermediaries" | "Beneficiary";

export interface SolutionCard {
  slug: string;
  group: SolutionGroup;
  nav: string;
  navDesc: string;
  frame: string;
  icon: string;
  newp?: boolean;
}

/** SVG path bodies for the icons referenced by the hub cards. */
const ICON: Record<string, string> = {
  broom: '<path d="m13 11 6-6"/><path d="M11 13 5 19l-2-2 6-6"/><path d="M19 5a2.8 2.8 0 0 0-4 0l-2 2 4 4 2-2a2.8 2.8 0 0 0 0-4Z"/>',
  box: '<path d="M21 8V5a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
  gate: '<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0"/>',
  route: '<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M6 16V8a4 4 0 0 1 4-4h4"/><path d="m13 8 5-3-5-3"/>',
  check2: '<path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
};

export function icon(name: string, size = 20): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICON[name] || ""}</svg>`;
}

export const SOLUTIONS: SolutionCard[] = [
  { slug: "corporate-treasury", group: "Buyers", nav: "Corporate Treasury", navDesc: "Fix beneficiary data at source", frame: "A cost to neutralise", icon: "broom" },
  { slug: "tms-erp-vendors", group: "Builders & Intermediaries", nav: "TMS & ERP Vendors", navDesc: "Ship compliance as a billable feature", frame: "A service to monetise", icon: "box" },
  { slug: "shared-service-centres", group: "Buyers", nav: "Shared Service Centres", navDesc: "Fix once, every entity inherits", frame: "Centralise & multiply", icon: "layers", newp: true },
  { slug: "banks", group: "Builders & Intermediaries", nav: "Banks & PSPs", navDesc: "Two businesses, one engine", frame: "Monetise + own processing", icon: "gate" },
  { slug: "payment-hubs", group: "Builders & Intermediaries", nav: "Payment & Messaging Hubs", navDesc: "Enforce at the network edge", frame: "Monetise at the edge", icon: "route", newp: true },
  { slug: "vop-cop-providers", group: "Builders & Intermediaries", nav: "API Providers (VOP / CoP)", navDesc: "One API, sub-100ms address verdict", frame: "Monetise — narrow", icon: "check2", newp: true },
  { slug: "compliance", group: "Beneficiary", nav: "Financial Crime Compliance", navDesc: "Sharper screening from structured data", frame: "The beneficiary, not the buyer", icon: "shield" },
];
