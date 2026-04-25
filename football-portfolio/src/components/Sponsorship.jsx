import { Check, MapPin, Monitor, Star } from 'lucide-react';

const PACKAGES = [
  {
    tier: 'Gold',
    price: '₹50,000+',
    borderColor: '#D4AF37',
    bg: 'linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.04) 100%)',
    badge: 'Most Popular',
    benefits: [
      'Logo on Player Jersey',
      'Logo on All Event Posters',
      'Event Banners & Standees',
      'Social Media Promotions',
      'Trophy & Stage Branding',
      'VIP Mention in Every Event',
      'Certificate of Sponsorship',
      'Priority Brand Placement',
    ],
  },
  {
    tier: 'Silver',
    price: '₹25,000+',
    borderColor: '#A8A9AD',
    bg: 'linear-gradient(135deg, rgba(168,169,173,0.08) 0%, rgba(168,169,173,0.02) 100%)',
    badge: null,
    benefits: [
      'Event Poster Branding',
      'Social Media Mentions (3×)',
      'Standee Placement at Events',
      'Certificate of Sponsorship',
      'Event Stage Mention',
      'Digital Branding Package',
    ],
  },
  {
    tier: 'Bronze',
    price: '₹10,000+',
    borderColor: '#CD7F32',
    bg: 'linear-gradient(135deg, rgba(205,127,50,0.10) 0%, rgba(205,127,50,0.03) 100%)',
    badge: 'Starter',
    benefits: [
      'Event Mention by Anchor',
      'Poster Logo Placement',
      'Certificate Branding',
      'Social Media Shoutout (1×)',
    ],
  },
];

export const Sponsorship = () => (
  <section id="sponsorship" style={{ background: 'var(--bg)', padding: '6rem 1.5rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="section-tag">Partner With Us</span>
        <h2 className="section-title">Sponsorship <span>Packages</span></h2>
        <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Choose the right partnership level and get your brand in front of thousands of engaged community members.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
        {PACKAGES.map((pkg, i) => (
          <div
            key={pkg.tier}
            style={{
              borderRadius: '1.25rem', padding: '2.25rem',
              background: pkg.bg,
              border: `1.5px solid ${pkg.borderColor}`,
              position: 'relative', overflow: 'hidden',
              transform: i === 0 ? 'scale(1.02)' : 'scale(1)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              boxShadow: i === 0 ? `0 8px 40px ${pkg.borderColor}30` : 'var(--card-shadow)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = i === 0 ? 'scale(1.04)' : 'scale(1.02)'}
            onMouseLeave={e => e.currentTarget.style.transform = i === 0 ? 'scale(1.02)' : 'scale(1)'}
          >
            {pkg.badge && (
              <div style={{
                position: 'absolute', top: '1.25rem', right: '1.25rem',
                padding: '0.2rem 0.7rem', borderRadius: '2rem',
                background: pkg.borderColor, color: '#fff',
                fontSize: '0.68rem', fontWeight: 700, fontFamily: 'Outfit, sans-serif',
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>{pkg.badge}</div>
            )}

            {/* Tier label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Star size={16} style={{ color: pkg.borderColor }} fill={pkg.borderColor} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.75rem', fontWeight: 700, color: pkg.borderColor, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {pkg.tier} Sponsor
              </span>
            </div>

            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2rem', fontWeight: 900, color: 'var(--text)', marginBottom: '1.75rem', lineHeight: 1 }}>
              {pkg.price}
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: `${pkg.borderColor}40`, marginBottom: '1.5rem' }} />

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
              {pkg.benefits.map(b => (
                <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.87rem', color: 'var(--text-muted)' }}>
                  <Check size={14} style={{ color: pkg.borderColor, marginTop: '2px', flexShrink: 0 }} />
                  {b}
                </li>
              ))}
            </ul>

            <a href="#contact" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
              padding: '0.85rem', borderRadius: '0.6rem',
              background: pkg.borderColor, color: '#fff',
              fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.875rem',
              textDecoration: 'none', transition: 'opacity 0.2s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Become {pkg.tier} Sponsor
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
