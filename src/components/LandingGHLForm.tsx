import { useEffect } from "react";

const LandingGHLForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://invest.oakrepartners.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://invest.oakrepartners.com/widget/form/ZLuKcTZDJl3PVHXmaSG9"
      style={{ width: "100%", height: "541px", border: "none", borderRadius: "3px" }}
      id="inline-ZLuKcTZDJl3PVHXmaSG9"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="2026 Accredited Investor Report"
      data-height="541"
      data-layout-iframe-id="inline-ZLuKcTZDJl3PVHXmaSG9"
      data-form-id="ZLuKcTZDJl3PVHXmaSG9"
      title="2026 Accredited Investor Report"
    />
  );
};

export default LandingGHLForm;
