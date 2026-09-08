import SEOHead from "@/components/SEOHead";
import content from "./roswell-invite-content.html?raw";
import "./RoswellInvite.css";

// Static, version-controlled markup exported from the approved Claude Design project.
// No user input or remote HTML is injected.
const RoswellInvite = () => (
  <main className="roswell-design" id="top">
    <SEOHead title="Oak Roswell RSVP" description="Meet Kevin Kennedy and Brook Scardina at Brookfield Country Club on September 23, 2026. Reserve by September 16. Guests welcome." canonicalUrl="/roswellinvite" />
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </main>
);
export default RoswellInvite;
