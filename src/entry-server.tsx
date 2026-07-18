import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { AppRoutes } from "./App";
import "./index.css";

// Build-time entry used by scripts/prerender.mjs to render each route to
// static HTML so crawlers that don't execute JavaScript can read the pages.
export function render(url: string): { html: string; helmet?: HelmetServerState } {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
  return { html, helmet: helmetContext.helmet };
}
