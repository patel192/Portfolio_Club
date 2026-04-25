import { MapPin, Eye, Users, School, CircleDot, Heart, Smartphone } from 'lucide-react';

const REASONS = [
  { Icon: Eye,        title: 'Local Brand Visibility',     desc: 'Your brand displayed prominently at events, on jerseys, posters, and banners seen by the entire community.' },
  { Icon: Users,      title: 'Direct Family Access',       desc: 'Reach 200+ actively engaged families — parents who are key purchase decision-makers in household spending.' },
  { Icon: School,     title: 'School Network Reach',       desc: 'Gain visibility across 10+ partner schools, reaching students, teachers, and administration staff.' },
  { Icon: CircleDot,  title: 'Sports Audience Engagement', desc: 'Connect with a passionate, loyal sports audience that actively values brands supporting community athletics.' },
  { Icon: Heart,      title: 'Positive Brand Association', desc: 'Align your brand with youth development, sports excellence, and community welfare for powerful goodwill.' },
  { Icon: Smartphone, title: 'Digital Exposure',           desc: 'Featured in social media content, event reels, and WhatsApp broadcasts reaching 2,000+ monthly impressions.' },
];

export const WhySponsor = () => (
  <section style={{ background: 'var(--bg-alt)', padding: '6rem 1.5rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="section-tag">Sponsor Benefits</span>
        <h2 className="section-title">Why Sponsor <span>Us?</span></h2>
        <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Sponsoring DBSC & Astrive Events is not an expense — it's a strategic investment in local brand growth.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.1rem' }}>
        {REASONS.map(r => (
          <div
            key={r.title}
            className="t-card"
            style={{
              borderRadius: '1rem', padding: '1.6rem',
              display: 'flex', gap: '1rem', alignItems: 'flex-start',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--glow)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--card-shadow)'; }}
          >
            <div style={{
              width: '44px', height: '44px', borderRadius: '0.6rem', flexShrink: 0,
              background: 'var(--primary-muted)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}>
              <r.Icon size={18} style={{ color: 'var(--primary)' }} />
            </div>
            <div>
              <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.92rem', color: 'var(--text)', marginBottom: '0.35rem' }}>
                {r.title}
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem', lineHeight: 1.6 }}>{r.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sponsor message template */}
      <div style={{
        marginTop: '3rem', padding: '2.25rem',
        background: 'var(--primary-muted)', borderRadius: '1.25rem',
        border: '1px solid var(--border-accent)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
          <MapPin size={16} style={{ color: 'var(--primary)' }} />
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1rem', color: 'var(--text)' }}>
            Sponsor Outreach Message Template
          </h3>
        </div>
        <div style={{
          background: 'var(--surface)', borderRadius: '0.75rem', padding: '1.5rem',
          border: '1px solid var(--border)', color: 'var(--text-muted)',
          lineHeight: 1.8, fontSize: '0.88rem', fontStyle: 'italic',
        }}>
          <p>Hello Sir/Ma'am,</p>
          <p style={{ marginTop: '0.5rem' }}>We are reaching out from <strong style={{ color: 'var(--primary)', fontStyle: 'normal' }}>Dwivedi Brothers Sporting Club & Astrive Events</strong>. We organize professional sports and youth development events with strong community reach across students and families in Vadodara.</p>
          <p style={{ marginTop: '0.5rem' }}>We would love to explore a sponsorship collaboration for our upcoming events. We believe this partnership can create excellent local visibility and community engagement for your brand.</p>
          <p style={{ marginTop: '0.5rem' }}>Looking forward to connecting.</p>
        </div>
      </div>
    </div>
  </section>
);
