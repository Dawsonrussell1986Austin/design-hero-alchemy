// Build-time per-route meta prerender.
//
// The app is a client-rendered SPA: the shipped index.html carries only the
// generic site-wide meta, and per-page <title>/description/OG tags are injected
// by react-helmet at runtime. Non-JS crawlers and social scrapers (Bing,
// Facebook, LinkedIn, Slack, X) never run that JS, so every URL looks identical
// to them.
//
// This script runs after `vite build`. For each route it writes a dedicated
// dist/<route>/index.html whose <head> contains the correct title, description,
// canonical and Open Graph / Twitter tags. Vercel serves these static files
// before falling back to the SPA rewrite, so scrapers get real per-page meta
// while the app still hydrates and behaves exactly as before.

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const PAGES = join(ROOT, "src", "pages");

const BASE_URL = "https://oakrepartners.com";
const SITE_NAME = "Oak Real Estate Partners";
const DEFAULT_TITLE = `${SITE_NAME} - Commercial Real Estate Lending & Investment`;
const DEFAULT_DESCRIPTION =
  "Oak Real Estate Partners specializes in commercial real estate lending and investment solutions. Bridge loans, HUD financing, and private credit opportunities.";
const DEFAULT_IMAGE = "/lovable-uploads/90ee6cd5-c626-412e-a007-8192ed146eba.png";

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// --- 1. Extract SEO data from each page's <SEOHead .../> usage ----------------
function attr(block, name) {
  const m = block.match(new RegExp(`${name}\\s*=\\s*"([^"]*)"`));
  return m ? m[1] : undefined;
}

function collectSeoFromPages() {
  const map = new Map(); // canonicalUrl -> seo
  for (const file of readdirSync(PAGES).filter((f) => f.endsWith(".tsx"))) {
    const src = readFileSync(join(PAGES, file), "utf8");
    const m = src.match(/<SEOHead\b([\s\S]*?)\/>/);
    if (!m) continue;
    const block = m[1];
    const canonicalUrl = attr(block, "canonicalUrl");
    if (!canonicalUrl) continue;
    map.set(canonicalUrl, {
      title: attr(block, "title"),
      description: attr(block, "description"),
      ogImage: attr(block, "ogImage"),
      ogType: attr(block, "ogType") || "website",
      noIndex: /noIndex\s*=\s*\{true\}|noIndex(?!\s*=)/.test(block),
    });
  }
  return map;
}

// --- 2. Route list from the sitemap ------------------------------------------
function routesFromSitemap() {
  const xml = readFileSync(join(DIST, "sitemap.xml"), "utf8");
  const paths = new Set();
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const p = m[1].replace(BASE_URL, "").trim() || "/";
    paths.add(p.replace(/\/$/, "") || "/");
  }
  return [...paths];
}

// Title-case a path segment as a sensible fallback title.
function titleFromPath(path) {
  const seg = path.split("/").filter(Boolean).pop() || "";
  return seg
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// --- 3. Build the <head> meta block ------------------------------------------
function metaBlock(path, seo) {
  const fullTitle = seo.title ? `${seo.title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const description = seo.description || DEFAULT_DESCRIPTION;
  const url = `${BASE_URL}${path === "/" ? "/" : path}`;
  const image = (seo.ogImage || DEFAULT_IMAGE).startsWith("http")
    ? seo.ogImage
    : `${BASE_URL}${seo.ogImage || DEFAULT_IMAGE}`;
  const lines = [
    `<title>${esc(fullTitle)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    seo.noIndex ? `<meta name="robots" content="noindex, nofollow" />` : "",
    `<meta property="og:type" content="${esc(seo.ogType)}" />`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:title" content="${esc(fullTitle)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(fullTitle)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
  ].filter(Boolean);
  return lines.join("\n    ");
}

// Strip the template's existing SEO tags so we can inject fresh per-route ones.
function stripExistingSeo(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+name="description"[^>]*>/gi, "")
    .replace(/<meta\s+name="keywords"[^>]*>/gi, "")
    .replace(/<link\s+rel="canonical"[^>]*>/gi, "")
    .replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, "")
    .replace(/<meta\s+property="twitter:[^"]*"[^>]*>/gi, "")
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, "");
}

// --- 4. Write per-route HTML --------------------------------------------------
const template = readFileSync(join(DIST, "index.html"), "utf8");
const seoMap = collectSeoFromPages();
const routes = routesFromSitemap();

let written = 0;
for (const path of routes) {
  const seo = seoMap.get(path) || {
    title: titleFromPath(path) || undefined,
    ogType: "website",
  };
  const head = metaBlock(path, seo);
  const html = stripExistingSeo(template).replace(
    /<\/head>/i,
    `    ${head}\n  </head>`
  );

  if (path === "/") {
    writeFileSync(join(DIST, "index.html"), html);
  } else {
    const outDir = join(DIST, path);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "index.html"), html);
  }
  written++;
}

console.log(
  `prerender-meta: wrote per-route meta for ${written} routes ` +
    `(${seoMap.size} with custom SEO, ${written - seoMap.size} via fallback).`
);
