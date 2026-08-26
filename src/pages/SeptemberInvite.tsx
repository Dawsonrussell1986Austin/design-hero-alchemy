import SEOHead from "@/components/SEOHead";
import "./SeptemberInvite.css";

const SeptemberInvite = () => {
  return (
    <main className="september-invite" id="top">
      <SEOHead
        title="Oak Charlotte RSVP"
        description="Reserve one of 14 seats at The Oak Companies' private due diligence forum in Charlotte, September 16-17, 2026."
        canonicalUrl="/septemberinvite"
      />

      <header className="site-header">
        <img
          src="/septemberinvite/oak-wordmark.png"
          alt="The Oak Companies"
          className="wordmark"
        />
        <span className="header-note">The Oak Companies / Charlotte</span>
      </header>

      <section className="hero">
        <div className="arc" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            A private due diligence forum / limited to 14 seats
          </p>
          <h1>
            The asset class behind institutional growth.
            <em>Now open to your diligence.</em>
          </h1>
          <p className="hero-intro">
            Private real estate credit has long played a role in the portfolios
            of insurance companies, foundations, and endowments. Join us inside
            the Oak platform to see how the people, process, technology, and
            credit discipline work together, and bring your questions directly
            to the leadership team.
          </p>
        </div>

        <aside className="rsvp-panel" aria-labelledby="rsvp-title">
          <p className="eyebrow">Fourteen seats. Direct access.</p>
          <h2 id="rsvp-title">Reserve your seat.</h2>
          <p className="form-intro">
            For broker-dealer, RIA, and institutional due diligence partners.
          </p>
          <iframe
            src="https://go.oakrepartners.com/l/1105131/2026-08-26/b5chv2"
            title="Oak Charlotte RSVP form"
            width="100%"
            height="500"
            type="text/html"
            frameBorder="0"
            allowTransparency
            className="rsvp-iframe"
            style={{ border: 0 }}
          />
        </aside>
      </section>

      <section className="information-band" aria-label="Event information">
        <div>
          <span>Date</span>
          <strong>September 16-17, 2026</strong>
        </div>
        <div>
          <span>Location</span>
          <strong>Oak Corporate Headquarters</strong>
          <small>Charlotte, North Carolina</small>
        </div>
        <div>
          <span>Designed for</span>
          <strong>Broker-dealer &amp; RIA diligence teams</strong>
        </div>
        <div>
          <span>Limited seats available</span>
          <strong>Limited to 14 attendees</strong>
        </div>
      </section>

      <section className="forum-intro content-section">
        <p className="eyebrow">Go beyond the presentation</p>
        <div>
          <h2>One working day. Fourteen seats.</h2>
          <p>
            Oak&apos;s senior leadership will walk you through how the platform
            works, then open the floor to your questions.
          </p>
        </div>
      </section>

      <section className="day-one content-section">
        <div className="day-label">
          <span>Day one</span>
          <strong>Tuesday, September 16</strong>
          <small>Dinner / 6:00 PM EST</small>
        </div>
        <div className="day-copy">
          <h3>Arrive Charlotte</h3>
          <p>
            Arrive in Charlotte, then join Oak&apos;s leadership for a hosted
            dinner in SouthPark at 6:00 PM EST. Meet the team informally before
            the working sessions begin the next morning.
          </p>
        </div>
      </section>

      <section className="day-two content-section">
        <div className="section-heading">
          <p className="eyebrow">Day two / Wednesday, September 17</p>
          <h2>Inside the Oak platform.</h2>
          <span>8:30 AM-1:00 PM EST / Oak Corporate Headquarters</span>
        </div>
        <div className="session-grid">
          <article>
            <span>01 / Platform</span>
            <h3>The integrated Oak platform</h3>
            <p>
              Raymond Davis on how Oak&apos;s businesses, teams, and oversight
              work together.
            </p>
          </article>
          <article>
            <span>02 / Credit</span>
            <h3>The credit process in action</h3>
            <p>
              Matt Webster follows a loan from sourcing and underwriting
              through servicing, management, and payoff.
            </p>
          </article>
          <article>
            <span>03 / Technology</span>
            <h3>LENS, live</h3>
            <p>
              See how a real loan file moves through Oak&apos;s proprietary
              credit-workflow platform.
            </p>
          </article>
          <article>
            <span>04 / Access</span>
            <h3>Open due diligence session</h3>
            <p>
              Direct questions for Davis, Webster, McGovern, Duren, and
              Kennedy.
            </p>
          </article>
        </div>
      </section>

      <section className="people content-section">
        <div className="section-heading">
          <p className="eyebrow">The people in the room</p>
          <h2>Fourteen seats. Five principals. No handlers.</h2>
        </div>
        <div className="people-grid">
          <div>
            <img
              src="/lovable-uploads/837db76c-f393-41f0-aeeb-03c5f011e440.png"
              alt="Raymond Davis"
              className="headshot"
            />
            <strong>Raymond Davis</strong>
            <span>President &amp; Chief Strategy Officer</span>
          </div>
          <div>
            <img
              src="/lovable-uploads/matt-webster-headshot.jpg"
              alt="Matt Webster"
              className="headshot"
            />
            <strong>Matt Webster</strong>
            <span>EVP &amp; Chief Credit Officer</span>
          </div>
          <div>
            <img
              src="/lovable-uploads/tom-mcgovern-headshot.jpg"
              alt="Thomas McGovern"
              className="headshot"
            />
            <strong>Thomas McGovern</strong>
            <span>Chief Financial Officer</span>
          </div>
          <div>
            <img
              src="/lovable-uploads/kevin-kennedy-headshot.jpg"
              alt="Kevin Kennedy"
              className="headshot"
            />
            <strong>Kevin Kennedy</strong>
            <span>Chief Sales Officer</span>
          </div>
          <div>
            <img
              src="/septemberinvite/nick-duren.jpg"
              alt="Nick Duren"
              className="headshot"
            />
            <strong>Nick Duren</strong>
            <span>Crescent Securities, Managing Broker-Dealer</span>
          </div>
        </div>
      </section>

      <section className="charlotte-panel" aria-label="Charlotte, North Carolina">
        <img src="/septemberinvite/charlotte.jpg" alt="Charlotte skyline" />
        <div className="photo-caption">
          <span>Charlotte, North Carolina</span>
          <p>
            Come with questions. Leave with the access and information you need
            to complete your evaluation of Oak.
          </p>
          <a href="#top">Reserve your seat ↗</a>
        </div>
      </section>

      <footer>
        <div>
          <span>The Oak Companies</span>
          <span>Private real estate credit</span>
        </div>
        <p>
          For broker-dealer, RIA, and institutional due diligence use only. Not
          for distribution to retail investors.
        </p>
      </footer>
    </main>
  );
};

export default SeptemberInvite;
