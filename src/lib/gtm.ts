// Google Tag Manager event tracking utilities

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

// Ensure dataLayer exists
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

/**
 * Push a custom event to GTM dataLayer
 */
export const pushToDataLayer = (event: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(event);
  }
};

/**
 * Track button clicks
 */
export const trackButtonClick = (
  buttonName: string,
  buttonLocation: string,
  additionalData?: Record<string, unknown>
) => {
  pushToDataLayer({
    event: 'button_click',
    button_name: buttonName,
    button_location: buttonLocation,
    ...additionalData,
  });
};

/**
 * Track form submissions
 */
export const trackFormSubmission = (
  formName: string,
  formLocation: string,
  success: boolean,
  additionalData?: Record<string, unknown>
) => {
  pushToDataLayer({
    event: 'form_submission',
    form_name: formName,
    form_location: formLocation,
    form_success: success,
    ...additionalData,
  });
};

/**
 * Track conversion events (for high-value actions like lead forms)
 */
export const trackConversion = (
  conversionType: string,
  conversionValue?: number,
  additionalData?: Record<string, unknown>
) => {
  pushToDataLayer({
    event: 'conversion',
    conversion_type: conversionType,
    conversion_value: conversionValue,
    ...additionalData,
  });
};

/**
 * Track lead generation events
 */
export const trackLeadGeneration = (
  leadType: string,
  leadSource: string,
  additionalData?: Record<string, unknown>
) => {
  pushToDataLayer({
    event: 'generate_lead',
    lead_type: leadType,
    lead_source: leadSource,
    currency: 'USD',
    ...additionalData,
  });
};

/**
 * Track CTA clicks
 */
export const trackCTAClick = (
  ctaText: string,
  ctaDestination: string,
  ctaLocation: string
) => {
  pushToDataLayer({
    event: 'cta_click',
    cta_text: ctaText,
    cta_destination: ctaDestination,
    cta_location: ctaLocation,
  });
};

/**
 * Track external link clicks
 */
export const trackExternalLink = (
  linkUrl: string,
  linkText: string,
  linkLocation: string
) => {
  pushToDataLayer({
    event: 'external_link_click',
    link_url: linkUrl,
    link_text: linkText,
    link_location: linkLocation,
  });
};

/**
 * Track page/section views
 */
export const trackSectionView = (
  sectionName: string,
  pagePath: string
) => {
  pushToDataLayer({
    event: 'section_view',
    section_name: sectionName,
    page_path: pagePath,
  });
};
