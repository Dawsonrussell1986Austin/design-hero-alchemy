// Fires a Meta Pixel `Lead` (and Google Ads conversion) when a Demio webinar
// registration succeeds.
//
// Demio renders its registration form *inline* in the page and submits it via
// AJAX (XHR/axios), so there is no native form `submit` event to listen for.
// Instead we watch the network for the successful registrant request that Demio
// makes to my.demio.com and fire the conversion once.

let installed = false;
let hasFired = false;

const fireLead = () => {
  if (hasFired) return;
  hasFired = true;
  const w = window as unknown as {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  };
  try {
    w.fbq?.("track", "Lead", { content_name: "webinar_registration" });
    w.gtag?.("event", "conversion_event_submit_lead_form");
  } catch {
    /* never let tracking break the page */
  }
};

// A Demio registration is a POST to a demio host whose path references the
// registrant/registration resource.
const isRegistrationRequest = (url?: string, method?: string) => {
  if (!url) return false;
  const u = url.toLowerCase();
  const m = (method || "GET").toUpperCase();
  return m === "POST" && u.includes("demio") && /registr/.test(u);
};

/**
 * Installs network interceptors (once per page load) that fire the Meta Pixel
 * `Lead` event when a Demio registration completes successfully.
 */
export const trackDemioRegistrations = () => {
  if (typeof window === "undefined" || installed) return;
  installed = true;

  // --- Patch fetch ---
  const originalFetch = window.fetch?.bind(window);
  if (originalFetch) {
    window.fetch = async (...args: Parameters<typeof fetch>) => {
      const [input, init] = args;
      const url =
        typeof input === "string"
          ? input
          : input instanceof URL
          ? input.href
          : (input as Request)?.url;
      const method =
        init?.method ||
        (typeof input !== "string" && !(input instanceof URL)
          ? (input as Request)?.method
          : undefined);
      const response = await originalFetch(...args);
      try {
        if (response.ok && isRegistrationRequest(url, method)) fireLead();
      } catch {
        /* ignore */
      }
      return response;
    };
  }

  // --- Patch XHR (axios and legacy requests use this) ---
  const OriginalOpen = XMLHttpRequest.prototype.open;
  const OriginalSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function (
    this: XMLHttpRequest & { __demioReg?: boolean },
    method: string,
    url: string | URL,
    ...rest: unknown[]
  ) {
    this.__demioReg = isRegistrationRequest(String(url), method);
    return OriginalOpen.call(this, method, url, ...rest);
  };

  XMLHttpRequest.prototype.send = function (
    this: XMLHttpRequest & { __demioReg?: boolean },
    ...args: unknown[]
  ) {
    if (this.__demioReg) {
      this.addEventListener("load", () => {
        if (this.status >= 200 && this.status < 300) fireLead();
      });
    }
    return OriginalSend.apply(this, args);
  };
};
