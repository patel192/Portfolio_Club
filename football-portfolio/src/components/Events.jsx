import { CircleDot, Trophy, Zap, Music, Medal, BookOpen, Flame, School } from 'lucide-react';

const EVENTS_LIST = [
  { month: 'Jan', name: 'Summer Football Camp',    type: 'Club',         Icon: CircleDot  },
  { month: 'Feb', name: 'Inter-School Tournament', type: 'Combined',     Icon: Trophy     },
  { month: 'Mar', name: 'Skating Championship',    type: 'Events',       Icon: Zap        },
  { month: 'Apr', name: 'Dance Showcase',          type: 'Events',       Icon: Music      },
  { month: 'May', name: 'Football League Season',  type: 'Club',         Icon: Medal      },
  { month: 'Jun', name: 'Chess Championship',      type: 'Events',       Icon: BookOpen   },
  { month: 'Jul', name: 'Youth Sports Festival',   type: 'Combined',     Icon: Flame      },
  { month: 'Aug', name: 'School Sports Camp',      type: 'Events',       Icon: School     },
];

const typeColor = t => t === 'Club' ? '#F5A623' : t === 'Events' ? '#E63329' : 'var(--primary)';

export const Events = () => (
  <section id="events" style={{ background: 'var(--bg)', padding: '6rem 1.5rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="section-tag">What's Coming</span>
        <h2 className="section-title">Upcoming Events <span>2026</span></h2>
        <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Sponsors gain visibility across our full 2026 calendar — maximum touchpoints, maximum brand exposure.
        </p>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {[['#F5A623','Club Events'],['#E63329','Astrive Events'],['var(--primary)','Combined']].map(([c, l]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: c, flexShrink: 0 }} />{l}
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.9rem' }}>
        {EVENTS_LIST.map(ev => (
          <div
            key={ev.name}
            className="t-card"
            style={{
              borderRadius: '0.875rem', padding: '1.25rem',
              display: 'flex', alignItems: 'center', gap: '1rem',
              borderLeft: `3px solid ${typeColor(ev.type)}`,
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.boxShadow = 'var(--glow)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = 'var(--card-shadow)'; }}
          >
            <div style={{
              minWidth: '44px', height: '44px', borderRadius: '0.5rem',
              background: 'var(--primary-muted)', display: 'flex',
              alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
            }}>
              <ev.Icon size={16} style={{ color: typeColor(ev.type) }} />
              <div style={{ fontSize: '0.55rem', fontWeight: 700, color: 'var(--primary)', fontFamily: 'Outfit, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '2px' }}>{ev.month}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text)', marginBottom: '0.15rem' }}>
                {ev.name}
              </div>
              <div style={{ fontSize: '0.7rem', color: typeColor(ev.type), fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>
                {ev.type}
              </div>
            </div>
            <div style={{
              fontSize: '0.63rem', fontWeight: 700, padding: '0.2rem 0.55rem', borderRadius: '2rem',
              background: 'var(--primary-muted)', color: 'var(--primary)', whiteSpace: 'nowrap',
              fontFamily: 'Outfit, sans-serif',
            }}>Upcoming</div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '2rem', padding: '1.25rem 1.5rem',
        background: 'var(--primary-muted)', borderRadius: '0.875rem',
        border: '1px solid var(--border-accent)', textAlign: 'center',
      }}>
        <p style={{ color: 'var(--text)', fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.9rem' }}>
          Sponsor now and secure brand placement across all 2026 events in Vadodara!
        </p>
      </div>
    </div>
  </section>
);
