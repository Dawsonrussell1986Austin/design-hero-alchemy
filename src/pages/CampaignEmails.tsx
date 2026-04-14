import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const emails = [
  { id: 1, title: 'Email 1 — Intro', file: '/emails/email-1-intro.html' },
  { id: 2, title: 'Email 2 — Opacity', file: '/emails/email-2-opacity.html' },
  { id: 3, title: 'Email 3 — Institutional', file: '/emails/email-3-institutional.html' },
  { id: 4, title: 'Email 4 — Deal', file: '/emails/email-4-deal.html' },
  { id: 5, title: 'Email 5 — Track Record', file: '/emails/email-5-track-record.html' },
  { id: 6, title: 'Email 6 — FAQ', file: '/emails/email-6-faq.html' },
  { id: 7, title: 'Email 7 — Close', file: '/emails/email-7-close.html' },
];

const CampaignEmails = () => {
  const [selected, setSelected] = useState(emails[0]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f2f0ec]">
      <SEOHead title="Campaign Emails" noIndex />
      <Navigation />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="font-playfair text-3xl md:text-4xl text-oak-dark mb-2">Campaign Emails</h1>
          <p className="text-graphite-fog mb-8">Preview all email redesigns in the nurture sequence.</p>

          {/* Tab navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {emails.map((email) => (
              <button
                key={email.id}
                onClick={() => setSelected(email)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  selected.id === email.id
                    ? 'bg-[#0f1419] text-white'
                    : 'bg-white text-[#1a1a1a] border border-[#e8e4dd] hover:bg-[#f2f0ec]'
                }`}
              >
                {email.title}
              </button>
            ))}
          </div>

          {/* Email preview */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-oak-dark px-6 py-3 flex items-center justify-between">
              <span className="text-white/80 text-sm font-medium">{selected.title}</span>
              <a
                href={selected.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gold hover:underline"
              >
                Open in new tab ↗
              </a>
            </div>
            <iframe
              key={selected.id}
              src={selected.file}
              title={selected.title}
              className="w-full border-0"
              style={{ height: '80vh' }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CampaignEmails;
