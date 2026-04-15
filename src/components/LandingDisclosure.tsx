const sans = { fontFamily: "'Inter', system-ui, sans-serif" };

const LandingDisclosure = () => (
  <section className="px-6 sm:px-12 lg:px-20 py-16" style={{ backgroundColor: "#060D14", borderTop: "1px solid rgba(240,236,227,0.06)" }}>
    <div className="max-w-4xl mx-auto" style={{ ...sans, color: "#6C7D80", fontSize: "11px", lineHeight: 1.8, fontWeight: 400 }}>
      <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "#9AA5A8" }}>
        THIS IS NOT AN OFFER TO BUY OR SELL SECURITIES
      </h3>

      <p className="mt-4">
        This document and any accompanying materials (collectively, the "Materials") are provided by White Oak Capital Holdings, LLC d/b/a Oak Real Estate Partners ("OAK") and its affiliates (collectively, "OAK" or the "Company") for informational purposes only. The Materials do not constitute an offer to sell, or a solicitation of an offer to buy, any security, investment product, or interest in any fund, vehicle, or entity managed by or affiliated with OAK.
      </p>

      <p className="mt-6" style={{ color: "#9AA5A8" }}>
        © White Oak Capital Holdings, LLC d/b/a Oak Real Estate Partners. All rights reserved.
      </p>
    </div>
  </section>
);

export default LandingDisclosure;
