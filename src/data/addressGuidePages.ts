export interface AddressGuidePage {
  slug: string;
  path: string;
  title: string;
  description: string;
  keywords: string;
  headHtml: string;
  contentHtml: string;
}

const routeRewrites: Record<string, string> = {
  "ionova-vs-alternatives-summary-v5.html": "/compare",
  "iso-20022-deadline-checklist-v5.html": "/address-intelligence/iso-20022-deadline-checklist",
  "iso-20022-hybrid-addresses-explained-v5.html":
    "/address-intelligence/iso-20022-hybrid-addresses-explained",
};

const canonicalRewrites: Record<string, string> = {
  "https://ionova.ai/address-intelligence/hybrid-addresses":
    "https://ionova.ai/address-intelligence/iso-20022-hybrid-addresses-explained",
};

function extractMatch(html: string, pattern: RegExp, fallback = "") {
  return html.match(pattern)?.[1]?.trim() ?? fallback;
}

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&ndash;/g, "-")
    .replace(/&mdash;/g, "-");
}

function extractMetaContent(html: string, name: string, fallback = "") {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `<meta\\s+name=["']${escapedName}["']\\s+content=["']([^"']*)["'][^>]*>`,
    "i",
  );
  return decodeHtmlEntities(extractMatch(html, pattern, fallback));
}

function extractTitle(html: string) {
  return decodeHtmlEntities(extractMatch(html, /<title>([\s\S]*?)<\/title>/i));
}

function extractMainContent(html: string) {
  return extractMatch(html, /<main>([\s\S]*?)<\/main>/i);
}

function extractStyle(html: string) {
  return extractMatch(html, /<style>([\s\S]*?)<\/style>/i);
}

function extractJsonLd(html: string) {
  return extractMatch(
    html,
    /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i,
  );
}

function rewriteKnownUrls(html: string) {
  let rewritten = html;

  for (const [from, to] of Object.entries(routeRewrites)) {
    rewritten = rewritten.replaceAll(`href="${from}"`, `href="${to}"`);
  }

  for (const [from, to] of Object.entries(canonicalRewrites)) {
    rewritten = rewritten.replaceAll(from, to);
  }

  return rewritten;
}

function findMatchingBrace(css: string, openBraceIndex: number) {
  let depth = 0;

  for (let index = openBraceIndex; index < css.length; index += 1) {
    if (css[index] === "{") depth += 1;
    if (css[index] === "}") depth -= 1;
    if (depth === 0) return index;
  }

  return css.length - 1;
}

function prefixSelector(selectorText: string) {
  return selectorText
    .split(",")
    .map((selector) => {
      const trimmed = selector.trim();
      if (!trimmed) return selector;
      if (trimmed.startsWith(".address-guide-shell")) return trimmed;
      if (trimmed === "body" || trimmed === "html" || trimmed === ":root") {
        return ".address-guide-shell";
      }
      if (trimmed === "*") return ".address-guide-shell *";
      if (trimmed.startsWith("::")) return `.address-guide-shell ${trimmed}`;
      return `.address-guide-shell ${trimmed}`;
    })
    .join(",");
}

function scopeCssBlock(css: string): string {
  let output = "";
  let index = 0;

  while (index < css.length) {
    const nextBrace = css.indexOf("{", index);
    const nextSemicolon = css.indexOf(";", index);

    if (nextBrace === -1) {
      output += css.slice(index);
      break;
    }

    if (nextSemicolon !== -1 && nextSemicolon < nextBrace) {
      output += css.slice(index, nextSemicolon + 1);
      index = nextSemicolon + 1;
      continue;
    }

    const prelude = css.slice(index, nextBrace).trim();
    const closeBrace = findMatchingBrace(css, nextBrace);
    const body = css.slice(nextBrace + 1, closeBrace);

    if (!prelude) {
      output += css.slice(index, closeBrace + 1);
      index = closeBrace + 1;
      continue;
    }

    if (prelude.startsWith("@")) {
      if (/@(?:-\w+-)?keyframes\b/i.test(prelude)) {
        output += `${prelude}{${body}}`;
      } else {
        output += `${prelude}{${scopeCssBlock(body)}}`;
      }
    } else {
      output += `${prefixSelector(prelude)}{${body}}`;
    }

    index = closeBrace + 1;
  }

  return output;
}

function scopeAddressGuideCss(css: string) {
  const normalizedCss = css
    .replace(/(['"])Outfit\1/g, "'Figtree'")
    .replace(/\bOutfit\b/g, "Figtree")
    .replace(/--radius-md\s*:\s*10px/g, "--radius-md:6px")
    .replace(/--radius-lg\s*:\s*16px/g, "--radius-lg:6px")
    .replace(/--radius-xl\s*:\s*24px/g, "--radius-xl:6px");

  const withoutDarkTheme = normalizedCss
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/html\[data-theme="dark"\]\s*\{[\s\S]*?\}/g, "")
    .replace(/html\[data-theme="dark"\][^{]*\{[\s\S]*?\}/g, "")
    .replace(/html\[data-theme="light"\]/g, ":root");

  const scopedCss = scopeCssBlock(withoutDarkTheme);

  return `.address-guide-shell{isolation:isolate;position:relative;--font-display:'Figtree',system-ui,-apple-system,sans-serif;--radius-md:6px;--radius-lg:6px;--radius-xl:6px;}\n${scopedCss}\n.address-guide-shell{--font-display:'Figtree',system-ui,-apple-system,sans-serif;--radius-md:6px;--radius-lg:6px;--radius-xl:6px;}\n.address-guide-shell h1,.address-guide-shell h2{font-family:'Figtree',system-ui,-apple-system,sans-serif;font-style:italic;}\n.address-guide-shell .card,.address-guide-shell .kpi,.address-guide-shell .table-wrap,.address-guide-shell .app-card,.address-guide-shell .tl,.address-guide-shell .faq-item,.address-guide-shell .final-inner,.address-guide-shell .alert{border-radius:6px;}`;
}

function getPathForSlug(slug: string) {
  return `/address-intelligence/${slug}`;
}

export function buildAddressGuidePageFromHtml(slug: string, html: string): AddressGuidePage {
  const path = getPathForSlug(slug);
  const title = extractTitle(html);
  const description = extractMetaContent(html, "description");
  const keywords = extractMetaContent(
    html,
    "keywords",
    "ISO 20022 structured addresses, hybrid addresses, address compliance, ioNova ARS",
  );
  const style = scopeAddressGuideCss(extractStyle(html));
  const jsonLd = rewriteKnownUrls(extractJsonLd(html));
  const contentHtml = rewriteKnownUrls(extractMainContent(html));

  return {
    slug,
    path,
    title,
    description,
    keywords,
    headHtml: `<style>${style}</style>${jsonLd ? `\n<script type="application/ld+json">${jsonLd}</script>` : ""}`,
    contentHtml,
  };
}

export function getAddressGuideCanonicalOverride(slug: string) {
  return `https://ionova.ai${getPathForSlug(slug)}`;
}
