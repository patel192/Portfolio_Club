import { CircleDot, School, GraduationCap, Trophy, TrendingUp, Activity, CalendarDays, Presentation, Music, Zap, BookOpen } from 'lucide-react';

const CARDS = [
  {
    img: '/logos/club-logo.png',
    name: 'Dwivedi Brothers Sporting Club',
    shortName: 'DBSC',
    accentColor: '#F5A623',
    desc: 'A professionally managed sports organization focused on developing football talent from grassroots to competitive levels — providing structured coaching, discipline, and professional exposure to young athletes across Vadodara.',
    tags: [
      { Icon: CircleDot,     label: 'Football Coaching'   },
      { Icon: School,        label: 'School Partnerships' },
      { Icon: GraduationCap, label: 'Academy Training'    },
      { Icon: Trophy,        label: 'Tournaments'         },
      { Icon: TrendingUp,    label: 'Player Development'  },
      { Icon: Activity,      label: 'Fitness Sessions'    },
    ],
  },
  {
    img: '/logos/event-logo.png',
    name: 'Astrive Events',
    shortName: 'Aastrive',
    accentColor: '#E63329',
    desc: 'An event consultancy and sports activity management company specializing in football, cricket, chess, skating, dance, and educational events — creating engaging sporting experiences for youth communities in Gujarat.',
    tags: [
      { Icon: CalendarDays, label: 'Sports Events'        },
      { Icon: Presentation, label: 'School Camps'         },
      { Icon: Trophy,       label: 'Tournament Mgmt'      },
      { Icon: Music,        label: 'Dance Workshops'      },
      { Icon: Zap,          label: 'Skating Camps'        },
      { Icon: BookOpen,     label: 'Seasonal Programs'    },
    ],
  },
];

export const About = () => (
  <section id="about" style={{ background: 'var(--bg)', padding: '6rem 1.5rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="section-tag">Who We Are</span>
        <h2 className="section-title">About <span>Us</span></h2>
        <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Two powerhouse organisations united by a single mission — to develop champions on and off the field.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
        {CARDS.map(card => (
          <div
            key={card.shortName}
            className="t-card"
            style={{
              borderRadius: '1.25rem', padding: '2.25rem',
              borderTop: `3px solid ${card.accentColor}`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 16px 48px ${card.accentColor}25`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--card-shadow)'; }}
          >
            <img src={card.img} alt={card.name} style={{ height: '50px', marginBottom: '1.25rem', objectFit: 'contain' }} />

            <div style={{ marginBottom: '0.25rem' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                {card.shortName === 'DBSC' ? 'Sporting Club' : 'Event Company'}
              </div>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.2rem', fontWeight: 800, color: card.accentColor, marginBottom: '1rem' }}>
                {card.name}
              </h3>
            </div>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              {card.desc}
            </p>

            {/* Capability tags with icons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {card.tags.map(({ Icon, label }) => (
                <span key={label} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                  padding: '0.3rem 0.7rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 600,
                  background: `${card.accentColor}14`, color: card.accentColor,
                  fontFamily: 'Outfit, sans-serif', border: `1px solid ${card.accentColor}25`,
                }}>
                  <Icon size={11} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
