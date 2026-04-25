import { Camera, MessageSquare, MessageCircle, ArrowRight } from 'lucide-react';

const NAV_LINKS = ['Home','About','Programs','Impact','Sponsorship','Events','Contact'];

export const Footer = () => (
  <footer style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', padding: '4rem 1.5rem 2rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      {/* Top grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>

        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <img src="/logos/club-logo.png"  alt="DBSC"     style={{ height: '38px' }} />
            <img src="/logos/event-logo.png" alt="Aastrive" style={{ height: '28px' }} />
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '240px' }}>
            Building Athletes, Creating Experiences, Inspiring Communities — across Vadodara and Gujarat.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem' }}>
            {[
              { Icon: Camera,        href: '#', label: 'Instagram' },
              { Icon: MessageSquare, href: '#', label: 'Facebook'  },
              { Icon: MessageCircle, href: '#', label: 'WhatsApp' },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} style={{
                width: '36px', height: '36px', borderRadius: '0.5rem',
                background: 'var(--primary-muted)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                textDecoration: 'none', transition: 'border-color 0.2s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <Icon size={15} style={{ color: 'var(--primary)' }} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            {NAV_LINKS.map(n => (
              <li key={n}>
                <a href={`#${n.toLowerCase()}`} style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  <ArrowRight size={12} /> {n}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sponsorship */}
        <div>
          <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Sponsorship
          </h4>
          {[['Gold','₹50,000+','#D4AF37'],['Silver','₹25,000+','#A8A9AD'],['Bronze','₹10,000+','#CD7F32']].map(([t, p, c]) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.55rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: c, flexShrink: 0 }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t} — {p}</span>
            </div>
          ))}
          <a href="#contact" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-flex', padding: '0.55rem 1.1rem', fontSize: '0.8rem' }}>
            Become a Sponsor
          </a>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Contact
          </h4>
          {[
            ['📞', '+91 98765 43210'],
            ['✉️', 'dbsc.astrive@gmail.com'],
            ['📍', 'Vadodara, Gujarat, India'],
          ].map(([ic, val]) => (
            <div key={val} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem', fontSize: '0.84rem', color: 'var(--text-muted)', alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0 }}>{ic}</span>
              <span>{val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
        <p style={{ color: 'var(--text-subtle)', fontSize: '0.78rem' }}>
          © 2026 Dwivedi Brothers Sporting Club & Astrive Events · Vadodara, Gujarat
        </p>
        <p style={{ color: 'var(--text-subtle)', fontSize: '0.78rem' }}>
          Built with care for Gujarat's sporting community
        </p>
      </div>
    </div>
  </footer>
);
