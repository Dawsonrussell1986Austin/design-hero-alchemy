import SEOHead from "@/components/SEOHead";
import "./SeptemberInvite.css";
import "./RoswellInvite.css";

const RoswellInvite = () => {
  return (
    <main className="september-invite roswell-invite" id="top">
      <SEOHead
        title="Oak Roswell RSVP"
        description="Reserve your seat at The Oak Companies' private reception at Brookfield Country Club in Roswell, Georgia, September 23, 2026."
        canonicalUrl="/roswellinvite"
      />

      <header className="site-header">
        <img
          src="/septemberinvite/oak-wordmark.png"
          alt="The Oak Companies"
          className="wordmark"
        />
        <span className="header-note">The Oak Companies / Roswell</span>
      </header>

      <section className="information-band" aria-label="Event information">
        <div>
          <span>Date &amp; time</span>
          <strong>Wednesday, September 23, 2026</strong>
          <small>5:30 PM &ndash; 7:00 PM EST</small>
        </div>
        <div>
          <span>Location</span>
          <strong>Brookfield Country Club</strong>
          <small>
            Private Event Room / 100 Willow Run Rd, Roswell, GA 30075
          </small>
        </div>
        <div>
          <span>Refreshments</span>
          <strong>Hors d&apos;oeuvres / Wine &amp; beer</strong>
          <small>Complimentary</small>
        </div>
        <div>
          <span>Reservations</span>
          <strong>Invitation only</strong>
        </div>
      </section>

      <section className="hero">
        <div className="arc" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            A private evening reception / invitation only
          </p>
          <h1>
            An evening with The Oak Companies.
            <em>Roswell, Georgia.</em>
          </h1>
          <p className="hero-intro">
            Join us in the private event room at Brookfield Country Club for an
            evening of conversation and an inside look at the Oak platform.
            Complimentary hors d&apos;oeuvres, wine, and beer will be served,
            followed by a company overview and open Q&amp;A with the Oak team.
          </p>
        </div>

        <aside className="rsvp-panel" aria-labelledby="rsvp-title">
          <p className="eyebrow">Invitation only. Seats are limited.</p>
          <h2 id="rsvp-title">Reserve your seat.</h2>
          <p className="form-intro">
            Wednesday, September 23, 2026 / 5:30&ndash;7:00 PM EST / Brookfield
            Country Club, Roswell
          </p>
          <iframe
            src="https://go.oakrepartners.com/l/1105131/2026-09-03/b5d5jb"
            title="Oak Roswell RSVP form"
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

      <section className="forum-intro content-section">
        <p className="eyebrow">The evening</p>
        <div>
          <h2>Ninety minutes. One conversation.</h2>
          <p>
            Meet the Oak team over hors d&apos;oeuvres, wine, and beer, hear a
            focused overview of The Oak Companies, then bring your questions
            directly to the people behind the platform.
          </p>
        </div>
      </section>

      <section className="day-two content-section">
        <div className="section-heading">
          <p className="eyebrow">Agenda / Wednesday, September 23</p>
          <h2>The evening&apos;s agenda.</h2>
          <span>
            5:30 PM&ndash;7:00 PM EST / Brookfield Country Club, Private Event
            Room
          </span>
        </div>
        <div className="session-grid">
          <article>
            <span>01 / 5:30&ndash;6:00 PM</span>
            <h3>Networking</h3>
            <p>
              Arrive and settle in. Meet the Oak team and fellow guests over
              complimentary hors d&apos;oeuvres, wine, and beer.
            </p>
          </article>
          <article>
            <span>02 / 6:00&ndash;6:40 PM</span>
            <h3>The Oak Company overview</h3>
            <p>
              A focused look at The Oak Companies: the platform, the people,
              and the discipline behind private real estate credit.
            </p>
          </article>
          <article>
            <span>03 / 6:40&ndash;7:00 PM</span>
            <h3>Q&amp;A</h3>
            <p>
              The floor is yours. Bring your questions directly to the Oak
              team before the evening wraps at 7:00 PM.
            </p>
          </article>
        </div>
      </section>

      <section className="closing-cta content-section" aria-label="Reserve your seat">
        <p className="eyebrow">Brookfield Country Club / Roswell, Georgia</p>
        <p className="closing-line">
          Come with questions. Leave with a clear picture of how Oak works.
        </p>
        <a href="#top">Reserve your seat ↗</a>
      </section>

      <footer>
        <div>
          <span>The Oak Companies</span>
          <span>Private real estate credit</span>
        </div>
        <p>
          By invitation only. Please RSVP to confirm your reservation.
        </p>
      </footer>
    </main>
  );
};

export default RoswellInvite;
