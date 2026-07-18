// Build-time prerendering: renders every static route of the SPA to
// dist/<route>/index.html so search engines and AI crawlers that don't
// execute JavaScript can read the real page content. Vercel serves files
// from the filesystem before applying the SPA rewrite in vercel.json, so
// prerendered pages are picked up automatically; routes that fail to
// render server-side are skipped and continue to work as client-rendered
// pages through the rewrite.
//
// Runs as part of `npm run build`:
//   vite build  ->  vite build --ssr  ->  node scripts/prerender.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// The SSR bundle externalizes react/react-dom/react-router; without this
// Node resolves their development builds (double-rendering under
// StrictMode, which duplicates helmet head tags).
process.env.NODE_ENV = process.env.NODE_ENV || "production";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrEntry = path.join(distDir, "server", "entry-server.js");
const templatePath = path.join(distDir, "index.html");

// Routes that should not be prerendered even though they are static:
// internal drafts/previews and pages that are only meaningful with JS.
const EXCLUDE = new Set([
  "/homepage-draft",
  "/homepage-draft-2",
  "/homepage-draft-3",
  "/cinnamonroll",
  "/ad-creatives",
  "/campaign-emails",
]);

function extractRoutes() {
  const appSource = fs.readFileSync(path.join(root, "src", "App.tsx"), "utf8");
  const routes = [];
  for (const match of appSource.matchAll(/<Route\s+path="([^"]+)"/g)) {
    const p = match[1];
    if (p === "*" || p.includes(":") || EXCLUDE.has(p)) continue;
    routes.push(p);
  }
  return [...new Set(routes)];
}

function injectHelmet(template, helmet) {
  const title = helmet?.title?.toString() ?? "";
  const meta = helmet?.meta?.toString() ?? "";
  const link = helmet?.link?.toString() ?? "";
  const script = helmet?.script?.toString() ?? "";

  let html = template;

  // Only strip the template's default tags when the page provides its own
  // via react-helmet-async (SEOHead); otherwise keep the static defaults.
  if (/<title/.test(title)) {
    html = html.replace(/<title>[\s\S]*?<\/title>\n?/, "");
    html = html.replace(/^\s*<meta name="description"[^>]*\/>\n?/m, "");
  }
  if (/property="og:/.test(meta)) {
    html = html.replace(/^\s*<meta property="og:[^>]*\/>\n?/gm, "");
    html = html.replace(/^\s*<meta property="twitter:[^>]*\/>\n?/gm, "");
  }

  const headTags = [title, meta, link, script].filter(Boolean).join("\n    ");
  if (headTags) {
    html = html.replace("</head>", `    ${headTags}\n  </head>`);
  }
  return html;
}

async function main() {
  if (!fs.existsSync(ssrEntry)) {
    console.error(`prerender: SSR bundle not found at ${ssrEntry} — run the ssr build first.`);
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, "utf8");
  if (template.includes("data-rh=")) {
    console.error(
      "prerender: dist/index.html already contains prerendered head tags — run `vite build` first for a clean template."
    );
    process.exit(1);
  }
  const { render } = await import(pathToFileURL(ssrEntry).href);

  const routes = extractRoutes();
  const rendered = [];
  const skipped = [];

  for (const route of routes) {
    try {
      const { html: appHtml, helmet } = render(route);
      let pageHtml = injectHelmet(template, helmet);
      pageHtml = pageHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      const outFile =
        route === "/"
          ? templatePath
          : path.join(distDir, route.replace(/^\//, ""), "index.html");
      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      fs.writeFileSync(outFile, pageHtml);
      rendered.push(route);
    } catch (err) {
      skipped.push(`${route}  (${err.message?.split("\n")[0]})`);
    }
  }

  // The SSR bundle is a build tool, not a deployable asset.
  fs.rmSync(path.join(distDir, "server"), { recursive: true, force: true });

  console.log(`prerender: ${rendered.length} routes rendered to static HTML.`);
  if (skipped.length) {
    console.warn(`prerender: ${skipped.length} routes skipped (still served as SPA):`);
    for (const s of skipped) console.warn(`  - ${s}`);
  }
}

main().catch((err) => {
  console.error("prerender failed:", err);
  process.exit(1);
});
