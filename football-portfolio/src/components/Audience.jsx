import { Users, Baby, PersonStanding, UserCheck, School, Building2, PartyPopper, Handshake } from 'lucide-react';

const GROUPS = [
  { age: '5–10 yrs',  label: 'Junior Athletes',  Icon: Baby,           pct: 35 },
  { age: '11–16 yrs', label: 'Youth Players',    Icon: PersonStanding, pct: 45 },
  { age: '17–25 yrs', label: 'Senior Prospects', Icon: UserCheck,      pct: 20 },
];

const PROFILES = [
  { Icon: Baby,          label: 'School Students'     },
  { Icon: Users,         label: 'Parents & Families'  },
  { Icon: PersonStanding,label: 'Youth Athletes'      },
  { Icon: UserCheck,     label: 'Sports Enthusiasts'  },
  { Icon: School,        label: 'Schools & Academies' },
  { Icon: Building2,     label: 'Local Community'     },
  { Icon: PartyPopper,   label: 'Event Attendees'     },
  { Icon: Handshake,     label: 'Corporate Partners'  },
];

export const Audience = () => (
  <section style={{ background: 'var(--bg)', padding: '6rem 1.5rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="section-tag">Who We Reach</span>
        <h2 className="section-title">Target <span>Audience</span></h2>
        <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Sponsors gain direct access to a diverse, engaged community of athletes, families and sports enthusiasts.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

        {/* Age Groups */}
        <div className="t-card" style={{ borderRadius: '1.25rem', padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
            <Users size={18} style={{ color: 'var(--primary)' }} />
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1rem', color: 'var(--text)' }}>
              Audience Age Distribution
            </h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {GROUPS.map(g => (
              <div key={g.age}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <g.Icon size={14} style={{ color: 'var(--primary)' }} />
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, color: 'var(--text)', fontSize: '0.875rem' }}>
                      {g.label} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>({g.age})</span>
                    </span>
                  </div>
                  <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.82rem', fontFamily: 'Outfit, sans-serif' }}>{g.pct}%</span>
                </div>
                <div style={{ height: '6px', borderRadius: '3px', background: 'var(--surface-2)' }}>
                  <div style={{ height: '100%', borderRadius: '3px', background: 'var(--primary)', width: `${g.pct}%`, transition: 'width 1s ease' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audience Profiles */}
        <div className="t-card" style={{ borderRadius: '1.25rem', padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
            <Building2 size={18} style={{ color: 'var(--primary)' }} />
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1rem', color: 'var(--text)' }}>
              Audience Profiles
            </h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
            {PROFILES.map(p => (
              <div key={p.label} style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.65rem 0.85rem', borderRadius: '0.6rem',
                background: 'var(--surface-2)', border: '1px solid var(--border)',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <p.Icon size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text)', fontFamily: 'Outfit, sans-serif' }}>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
