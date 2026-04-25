import {
  CircleDot, School, GraduationCap, Trophy, TrendingUp, Activity,
  CalendarDays, Presentation, Users, Music, Zap, BookOpen
} from 'lucide-react';

const COL_CLUB = [
  { Icon: CircleDot,      label: 'Football Coaching'    },
  { Icon: School,         label: 'School Partnerships'  },
  { Icon: GraduationCap,  label: 'Academy Training'     },
  { Icon: Trophy,         label: 'Tournaments'          },
  { Icon: TrendingUp,     label: 'Player Development'   },
  { Icon: Activity,       label: 'Fitness Sessions'     },
];

const COL_EVENT = [
  { Icon: CalendarDays,   label: 'Sports Events'        },
  { Icon: Presentation,   label: 'School Camps'         },
  { Icon: Trophy,         label: 'Tournament Management'},
  { Icon: Music,          label: 'Dance Workshops'      },
  { Icon: Zap,            label: 'Skating Camps'        },
  { Icon: BookOpen,       label: 'Seasonal Programs'    },
];

const ProgramCard = ({ Icon, label }) => (
  <div
    style={{
      display: 'flex', alignItems: 'center', gap: '0.75rem',
      padding: '0.85rem 1.1rem', borderRadius: '0.6rem',
      background: 'var(--surface-2)', border: '1px solid var(--border)',
      transition: 'all 0.2s ease', cursor: 'default',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'var(--border-accent)';
      e.currentTarget.style.background = 'var(--primary-muted)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.background = 'var(--surface-2)';
    }}
  >
    <Icon size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
    <span style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem', fontFamily: 'Outfit, sans-serif' }}>
      {label}
    </span>
  </div>
);

export const WhatWeDo = () => (
  <section id="programs" style={{ background: 'var(--bg)', padding: '6rem 1.5rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="section-tag">Our Offerings</span>
        <h2 className="section-title">What We <span>Do</span></h2>
        <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
        <p className="section-desc" style={{ margin: '0 auto' }}>
          From football academies to large-scale community events — here's how we create impact.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

        {/* Club */}
        <div className="t-card" style={{ borderRadius: '1.25rem', padding: '2rem', borderTop: '3px solid var(--primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <img src="/logos/club-logo.png" alt="DBSC" style={{ height: '38px' }} />
            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Sporting Club</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 800, color: 'var(--primary)' }}>Dwivedi Brothers</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {COL_CLUB.map(p => <ProgramCard key={p.label} {...p} />)}
          </div>
        </div>

        {/* Events */}
        <div className="t-card" style={{ borderRadius: '1.25rem', padding: '2rem', borderTop: '3px solid #E63329' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <img src="/logos/event-logo.png" alt="Aastrive" style={{ height: '32px' }} />
            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Event Company</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 800, color: '#E63329' }}>Astrive Events</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {COL_EVENT.map(p => <ProgramCard key={p.label} {...p} />)}
          </div>
        </div>
      </div>
    </div>
  </section>
);
