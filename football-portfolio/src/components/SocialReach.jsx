import { Smartphone, MessageCircle, Share2, School, Megaphone, Users, TrendingUp } from 'lucide-react';

const REACH = [
  { Icon: TrendingUp,    platform: 'Monthly Impressions', value: '2,000+', desc: 'Across all digital channels' },
  { Icon: MessageCircle, platform: 'WhatsApp Community',  value: '500+',   desc: 'Direct broadcast reach'     },
  { Icon: Share2,        platform: 'Social Media Reach',  value: '1,000+', desc: 'Instagram & Facebook'       },
  { Icon: School,        platform: 'School Network',      value: '10+',    desc: 'Institutional partners'     },
  { Icon: Megaphone,     platform: 'Event Poster Reach',  value: '5,000+', desc: 'Physical & digital posters' },
  { Icon: Users,         platform: 'Community Families',  value: '200+',   desc: 'Actively engaged parents'   },
];

export const SocialReach = () => (
  <section style={{ background: 'var(--bg-alt)', padding: '6rem 1.5rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3.5rem', alignItems: 'start' }}>

        {/* Left */}
        <div>
          <span className="section-tag">Brand Visibility</span>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Social <span>Reach</span></h2>
          <div className="divider" />
          <p className="section-desc" style={{ marginBottom: '2rem' }}>
            Your brand gets placed across multiple channels — digital, physical, and community networks — every single month.
          </p>
          <div style={{
            padding: '1.25rem 1.5rem', borderRadius: '0.875rem',
            background: 'var(--primary-muted)', border: '1px solid var(--border-accent)',
            display: 'flex', alignItems: 'center', gap: '0.75rem',
          }}>
            <TrendingUp size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>
              Growing fast — our reach expands with every event season.
            </p>
          </div>
        </div>

        {/* Right: metric grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
          {REACH.map(r => (
            <div
              key={r.platform}
              className="t-card"
              style={{
                borderRadius: '1rem', padding: '1.5rem',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--glow)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--card-shadow)'; }}
            >
              <div style={{
                width: '40px', height: '40px', borderRadius: '0.6rem',
                background: 'var(--primary-muted)', display: 'flex',
                alignItems: 'center', justifyContent: 'center', marginBottom: '1rem',
              }}>
                <r.Icon size={18} style={{ color: 'var(--primary)' }} />
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.8rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>
                {r.value}
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text)', margin: '0.4rem 0 0.2rem' }}>
                {r.platform}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        #social-reach-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);
