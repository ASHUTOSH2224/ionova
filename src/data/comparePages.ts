export interface ComparePage {
  slug: string;
  path: string;
  title: string;
  description: string;
  keywords: string;
  headHtml: string;
  contentHtml: string;
}

const linkRewrites: Record<string, string> = {
  "ionova-vs-alternatives-summary-v5.html": "/compare",
  "ionova-vs-loqate-v5.html": "/compare/loqate",
  "ionova-vs-catalyst-di-v5.html": "/compare/catalyst-di",
  "ionova-vs-smarty-v5.html": "/compare/smarty",
  "ionova-vs-geopostcodes-v5.html": "/compare/geopostcodes",
  "ionova-vs-structx-v5.html": "/compare/structx",
  "ionova-vs-alpina-txflow-v5.html": "/compare/alpina-txflow",
  "ionova-vs-melissa-v5.html": "/compare/melissa",
  "ionova-vs-ntt-addresstune-v5.html": "/compare/ntt-addresstune",
  "ionova-vs-addresshub-v5.html": "/compare/addresshub",
  "ionova-vs-swift-ai-parser-v5.html": "/compare/swift-ai-address-model",
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
  return decodeHtmlEntities(
    extractMatch(
      html,
      /<title>([\s\S]*?)<\/title>/i,
      "ioNova Compare | ISO 20022 Structured Address Alternatives",
    ),
  );
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

function rewriteLinks(html: string) {
  let rewritten = html;

  for (const [from, to] of Object.entries(linkRewrites)) {
    rewritten = rewritten.replaceAll(`href="${from}"`, `href="${to}"`);
  }

  return rewritten.replaceAll('href="#"', 'href="/demo"');
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
      if (trimmed.startsWith(".compare-shell")) return trimmed;
      if (trimmed === "body" || trimmed === "html" || trimmed === ":root") {
        return ".compare-shell";
      }
      if (trimmed === "*") return ".compare-shell *";
      if (trimmed.startsWith("::")) return `.compare-shell ${trimmed}`;
      return `.compare-shell ${trimmed}`;
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

function scopeCompareCss(css: string) {
  const withoutComments = css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/html\[data-theme="dark"\]\s*\{[\s\S]*?\}/g, "")
    .replace(/html\[data-theme="dark"\][^{]*\{[\s\S]*?\}/g, "")
    .replace(/html\[data-theme="light"\]/g, ":root");

  return `.compare-shell{isolation:isolate;position:relative;}\n${scopeCssBlock(withoutComments)}`;
}

function getPathForSlug(slug: string) {
  return slug === "index" ? "/compare" : `/compare/${slug}`;
}

function getCanonicalJsonUrl(slug: string) {
  const path = getPathForSlug(slug);
  return `https://ionova.ai${path}`;
}

export function buildComparePageFromHtml(slug: string, html: string): ComparePage {
  const path = getPathForSlug(slug);
  const title = extractTitle(html);
  const description = extractMetaContent(html, "description");
  const keywords = extractMetaContent(
    html,
    "keywords",
    "ISO 20022 structured addresses, hybrid addresses, address compliance, ioNova ARS",
  );
  const style = scopeCompareCss(extractStyle(html));
  const jsonLd = extractJsonLd(html);
  const contentHtml = rewriteLinks(extractMainContent(html));

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

export function getCompareCanonicalOverride(slug: string) {
  return getCanonicalJsonUrl(slug);
}
