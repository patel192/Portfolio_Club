import { useEffect, useRef, useState } from 'react';
import { GraduationCap, CircleDot, School, CalendarDays, Users, Home } from 'lucide-react';

const STATS = [
  { value: 300,  suffix: '+', label: 'Students Trained',        Icon: GraduationCap },
  { value: 50,   suffix: '+', label: 'Football Sessions',       Icon: CircleDot     },
  { value: 10,   suffix: '+', label: 'School Collaborations',   Icon: School        },
  { value: 5,    suffix: '+', label: 'Sports Events Organized', Icon: CalendarDays  },
  { value: 1000, suffix: '+', label: 'Audience Reach',          Icon: Users         },
  { value: 200,  suffix: '+', label: 'Families Connected',      Icon: Home          },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= value) { setCount(value); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, 1800 / steps);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.6rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>
      {count}{suffix}
    </span>
  );
};

export const Achievements = () => (
  <section id="achievements" style={{ background: 'var(--bg-alt)', padding: '6rem 1.5rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3.5rem', alignItems: 'start' }}>

        {/* Left: heading block */}
        <div style={{ position: 'sticky', top: '100px' }}>
          <span className="section-tag">Impact Numbers</span>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Our <span>Achievements</span></h2>
          <div className="divider" />
          <p className="section-desc" style={{ marginBottom: '2rem' }}>
            Sponsors invest in reach and impact. Here's what we've built — verified by community presence.
          </p>
          <a href="#sponsorship" className="btn-primary">View Sponsorship →</a>
        </div>

        {/* Right: bento grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="t-card"
              style={{
                borderRadius: '1rem', padding: '1.75rem',
                gridColumn: i === 0 ? 'span 2' : 'span 1',
                display: 'flex',
                flexDirection: i === 0 ? 'row' : 'column',
                alignItems: i === 0 ? 'center' : 'flex-start',
                gap: i === 0 ? '2rem' : '0.75rem',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--glow)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--card-shadow)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: i === 0 ? 1 : 'unset' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '0.6rem',
                  background: 'var(--primary-muted)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <stat.Icon size={20} style={{ color: 'var(--primary)' }} />
                </div>
                {i === 0 && <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>Our largest impact — growing every season through structured coaching and events.</div>}
              </div>
              <div>
                <Counter value={stat.value} suffix={stat.suffix} />
                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '0.3rem', fontWeight: 500 }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Mobile: collapse sticky */}
    <style>{`
      @media (max-width: 768px) {
        #achievements > div > div { grid-template-columns: 1fr !important; }
        #achievements > div > div > div:first-child { position: static !important; }
      }
    `}</style>
  </section>
);
