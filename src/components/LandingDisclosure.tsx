const sans = { fontFamily: "'Inter', system-ui, sans-serif" };

const LandingDisclosure = () => (
  <section className="px-6 sm:px-12 lg:px-20 py-16" style={{ backgroundColor: "#060D14", borderTop: "1px solid rgba(240,236,227,0.06)" }}>
    <div className="max-w-4xl mx-auto space-y-6" style={{ ...sans, color: "#6C7D80", fontSize: "11px", lineHeight: 1.8, fontWeight: 400 }}>
      <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "#9AA5A8" }}>
        THIS IS NOT AN OFFER TO BUY OR SELL SECURITIES
      </h3>

      <p>
        This document and any accompanying materials (collectively, the "Materials") are provided by White Oak Capital Holdings, LLC d/b/a Oak Real Estate Partners ("OAK") and its affiliates (collectively, "OAK" or the "Company") for informational purposes only. The Materials do not constitute an offer to sell, or a solicitation of an offer to buy, any security, investment product, or interest in any fund, vehicle, or entity managed by or affiliated with OAK.
      </p>

      <p>
        No offering of securities shall be made except by means of a definitive offering memorandum, private placement memorandum, or other offering document (each, an "Offering Document"), which will contain detailed information regarding the investment, including risk factors, terms, and conditions. Any such offering will be made only to qualified investors in accordance with applicable federal, state, and local securities laws and regulations.
      </p>

      <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase pt-2" style={{ color: "#9AA5A8" }}>No Investment Advice</h4>
      <p>
        The information contained in the Materials is not intended to provide, and should not be relied upon for, accounting, legal, tax, or investment advice. Nothing in the Materials should be construed as a recommendation to invest in any particular security, fund, or strategy. Prospective investors should consult their own legal, tax, financial, and other professional advisors before making any investment decision.
      </p>

      <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase pt-2" style={{ color: "#9AA5A8" }}>Forward-Looking Statements</h4>
      <p>
        The Materials may contain forward-looking statements, projections, estimates, or forecasts relating to anticipated future performance of investments, properties, or market conditions. Such statements are inherently uncertain and subject to risks, and actual results may differ materially from those expressed or implied. Oak Real Estate Partners does not undertake any obligation to update or revise any forward-looking statements, whether as a result of new information, future events, or otherwise.
      </p>

      <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase pt-2" style={{ color: "#9AA5A8" }}>No Guarantee of Performance</h4>
      <p>
        Past performance is not indicative of future results. Any historical data, returns, or projections presented in the Materials are provided for illustrative purposes only and are not guarantees of future performance. All investments involve risk, including the potential loss of principal. Real estate investments are subject to additional risks, including but not limited to illiquidity, changes in market conditions, environmental liabilities, changes in laws and regulations, and risks associated with the use of leverage.
      </p>

      <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase pt-2" style={{ color: "#9AA5A8" }}>Confidentiality</h4>
      <p>
        The Materials are confidential and are intended solely for the use of the person or entity to whom they are addressed. Any reproduction, distribution, or dissemination of the Materials, in whole or in part, without the prior written consent of Oak Real Estate Partners is strictly prohibited.
      </p>

      <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase pt-2" style={{ color: "#9AA5A8" }}>Regulatory Notice</h4>
      <p>
        Oak Real Estate Partners is not registered as a broker-dealer or investment adviser with the U.S. Securities and Exchange Commission or any state securities authority unless otherwise disclosed. The Materials have not been reviewed or approved by any federal, state, or other regulatory authority. No regulatory authority has passed upon the accuracy or adequacy of the Materials.
      </p>

      <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase pt-2" style={{ color: "#9AA5A8" }}>Limitation of Liability</h4>
      <p>
        To the fullest extent permitted by law, Oak Real Estate Partners, its members, managers, officers, directors, employees, agents, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use of, or reliance upon, any information contained in the Materials.
      </p>

      <p className="pt-4" style={{ color: "#9AA5A8" }}>
        By receiving and reviewing the Materials, you acknowledge and agree that you have read and understood this disclosure and that the Materials are provided on the terms set forth herein.
      </p>

      <p style={{ color: "#9AA5A8" }}>
        © Oak Real Estate Partners. All rights reserved.
      </p>
    </div>
  </section>
);

export default LandingDisclosure;
