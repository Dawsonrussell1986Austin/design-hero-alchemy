// Post-build step: stamp per-route <title>, meta description, social tags,
// and canonical URL into a static HTML file for every indexable route.
//
// The app is a client-rendered SPA, so without this every raw route serves
// the same index.html head to crawlers and link unfurlers. Vercel serves a
// matching static file (dist/<route>/index.html) before falling back to the
// SPA rewrite, so these files are what bots and view-source see.
//
// Run automatically via `npm run build`.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes, BASE_URL, SITE_NAME, DEFAULT_TITLE } from './route-meta.mjs';

const distDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const template = readFileSync(join(distDir, 'index.html'), 'utf8');

const escapeHtml = (s) =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

let warnings = 0;

function setTag(html, pattern, replacement, label, path) {
  if (!pattern.test(html)) {
    console.warn(`[route-meta] WARNING: could not find ${label} for ${path}`);
    warnings++;
    return html;
  }
  return html.replace(pattern, replacement);
}

function setMeta(html, attr, key, value, path) {
  const pattern = new RegExp(`(<meta\\s+${attr}="${escapeRegExp(key)}"\\s+content=")[^"]*(")`);
  // Function replacement so "$" in content (e.g. "$2M") isn't parsed as a group reference
  return setTag(html, pattern, (_, open, close) => `${open}${escapeHtml(value)}${close}`, `meta ${key}`, path);
}

for (const route of routes) {
  const fullTitle = route.title ? `${route.title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const canonical = `${BASE_URL}${route.path === '/' ? '/' : route.path}`;

  let html = template;
  html = setTag(html, /<title>[^<]*<\/title>/, () => `<title>${escapeHtml(fullTitle)}</title>`, '<title>', route.path);
  html = setMeta(html, 'name', 'description', route.description, route.path);
  html = setMeta(html, 'property', 'og:title', fullTitle, route.path);
  html = setMeta(html, 'property', 'og:description', route.description, route.path);
  html = setMeta(html, 'property', 'og:url', canonical, route.path);
  html = setMeta(html, 'property', 'twitter:title', fullTitle, route.path);
  html = setMeta(html, 'property', 'twitter:description', route.description, route.path);
  html = setMeta(html, 'property', 'twitter:url', canonical, route.path);
  html = setTag(
    html,
    /<\/head>/,
    () => `<link rel="canonical" href="${escapeHtml(canonical)}" />\n  </head>`,
    '</head>',
    route.path
  );

  const outFile =
    route.path === '/' ? join(distDir, 'index.html') : join(distDir, route.path.slice(1), 'index.html');
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, html);
}

if (warnings > 0) {
  console.error(`[route-meta] Completed with ${warnings} warning(s) — check index.html meta tags.`);
  process.exit(1);
}
console.log(`[route-meta] Wrote per-route meta for ${routes.length} routes.`);
