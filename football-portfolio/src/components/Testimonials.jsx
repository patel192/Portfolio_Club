import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "My son's football skills have improved tremendously. The coaches are disciplined, professional, and truly care about each player's growth.",
    author: 'Ramesh Patel',
    role: 'Parent of U-12 Player',
    initials: 'RP',
  },
  {
    quote: "Astrive Events organized our school tournament flawlessly. Every detail was managed professionally. Highly recommended for any sports event.",
    author: 'Principal Sharma',
    role: 'Delhi Public School, Vadodara',
    initials: 'PS',
  },
  {
    quote: "The skating camp was an incredible experience for my daughter. Well-structured training, safe environment, and amazing coaches!",
    author: 'Priya Mehta',
    role: 'Parent of Skating Student',
    initials: 'PM',
  },
  {
    quote: "DBSC gave our kids the discipline and confidence they needed. Not just football — they are building character.",
    author: 'Suresh Dwivedi',
    role: 'Community Leader, Vadodara',
    initials: 'SD',
  },
];

export const Testimonials = () => (
  <section style={{ background: 'var(--bg-alt)', padding: '6rem 1.5rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="section-tag">What People Say</span>
        <h2 className="section-title">Testimonials</h2>
        <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Real words from parents, students, and school partners who've experienced our programs first-hand.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
        {TESTIMONIALS.map(t => (
          <div
            key={t.author}
            className="t-card"
            style={{
              borderRadius: '1.25rem', padding: '1.75rem',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--glow)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--card-shadow)'; }}
          >
            <div>
              <Quote size={20} style={{ color: 'var(--primary)', opacity: 0.5, marginBottom: '1rem' }} />
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.88rem' }}>
                {t.quote}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'var(--primary-muted)', border: '1.5px solid var(--border-accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                fontSize: '0.8rem', color: 'var(--primary)',
              }}>{t.initials}</div>
              <div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text)' }}>{t.author}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--primary)', fontWeight: 600 }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
