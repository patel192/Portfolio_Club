import { GraduationCap, CircleDot, School, Users, ChevronDown, ArrowRight } from 'lucide-react';

const STATS = [
  { Icon: GraduationCap, num: '300+', lab: 'Students Trained'   },
  { Icon: CircleDot,     num: '50+',  lab: 'Sessions Done'       },
  { Icon: School,        num: '10+',  lab: 'School Partners'     },
  { Icon: Users,         num: '1K+',  lab: 'Audience Reach'      },
];

export const Hero = () => (
  <section
    id="home"
    style={{
      minHeight: '100vh',
      background: 'var(--hero-grad)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '72px',
    }}
  >
    {/* Background image */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'url(/images/image1.png)',
      backgroundSize: 'cover', backgroundPosition: 'center',
      opacity: 0.10, mixBlendMode: 'luminosity',
    }} />

    {/* Dot grid */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'radial-gradient(circle, var(--primary-glow) 1px, transparent 1px)',
      backgroundSize: '44px 44px', opacity: 0.22,
    }} />

    {/* Glow orbs */}
    <div style={{
      position: 'absolute', top: '18%', left: '10%',
      width: '480px', height: '480px', borderRadius: '50%',
      background: 'var(--primary-glow)', filter: 'blur(110px)', opacity: 0.25,
      pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute', bottom: '15%', right: '8%',
      width: '320px', height: '320px', borderRadius: '50%',
      background: 'var(--primary-glow)', filter: 'blur(90px)', opacity: 0.18,
      pointerEvents: 'none',
    }} />

    {/* Main content */}
    <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '2rem 1.5rem', maxWidth: '880px', margin: '0 auto', width: '100%' }}>

      {/* Dual logos */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        <img src="/logos/club-logo.png"  alt="DBSC"     style={{ height: '76px', filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.55))' }} />
        <div style={{ width: '1px', height: '52px', background: 'rgba(255,255,255,0.18)' }} />
        <img src="/logos/event-logo.png" alt="Aastrive" style={{ height: '95px', filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.45)) brightness(1.05)' }} />
      </div>

      {/* Badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        marginBottom: '1.5rem', padding: '0.4rem 1.1rem', borderRadius: '2rem',
        background: 'var(--primary-muted)', color: 'var(--primary)',
        fontFamily: 'Outfit, sans-serif', fontSize: '0.72rem', fontWeight: 700,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        border: '1px solid var(--primary-glow)',
        backdropFilter: 'blur(8px)',
      }}>
        Champions Beyond The Game
      </div>

      {/* Headline */}
      <h1 style={{
        fontFamily: 'Outfit, sans-serif',
        fontSize: 'clamp(2.4rem, 7vw, 5rem)',
        fontWeight: 900, lineHeight: 1.08, color: '#ffffff',
        marginBottom: '1rem',
        textShadow: '0 2px 32px rgba(0,0,0,0.55)',
        letterSpacing: '-0.02em',
      }}>
        Dwivedi Brothers<br />
        <span style={{ color: 'var(--primary)' }}>Sporting Club</span>
      </h1>

      <p style={{
        fontFamily: 'Outfit, sans-serif', fontWeight: 500,
        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
        color: 'rgba(255,255,255,0.72)', marginBottom: '0.5rem',
      }}>
        Powered by <span style={{ color: 'var(--primary)', fontWeight: 700 }}>Astrive Events</span>
      </p>

      <p style={{
        fontSize: '0.95rem', color: 'rgba(255,255,255,0.48)',
        margin: '0 auto 2.5rem', lineHeight: 1.6, maxWidth: '520px',
      }}>
        Building Athletes · Creating Experiences · Inspiring Communities
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '5rem' }}>
        <a href="#sponsorship" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
          View Sponsorship <ArrowRight size={16} />
        </a>
        <a href="#about" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          padding: '0.72rem 1.6rem', borderRadius: '0.5rem',
          border: '1.5px solid rgba(255,255,255,0.28)', color: 'rgba(255,255,255,0.82)',
          fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.92rem',
          textDecoration: 'none', transition: 'all 0.2s ease',
          backdropFilter: 'blur(6px)', background: 'rgba(255,255,255,0.05)',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)'; e.currentTarget.style.background = 'rgba(255,255,255,0.10)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
        >
          Learn More
        </a>
      </div>

      {/* Stats strip — SaaS style horizontal pills */}
      <div style={{
        display: 'inline-flex', gap: '0', borderRadius: '0.875rem',
        border: '1px solid rgba(255,255,255,0.12)',
        background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(14px)',
        overflow: 'hidden', flexWrap: 'wrap',
      }}>
        {STATS.map(({ Icon, num, lab }, i) => (
          <div key={lab} style={{
            padding: '1rem 1.75rem', textAlign: 'center',
            borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          }}>
            <Icon size={16} style={{ color: 'var(--primary)', opacity: 0.85 }} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>{num}</div>
            <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{lab}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Scroll cue */}
    <div style={{
      position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem',
      color: 'rgba(255,255,255,0.3)', animation: 'bounce 2s infinite',
      zIndex: 2,
    }}>
      <ChevronDown size={20} />
    </div>

    {/* Bottom fade */}
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
      background: 'linear-gradient(to bottom, transparent, var(--bg))',
      pointerEvents: 'none',
    }} />

    <style>{`
      @keyframes bounce {
        0%, 100% { transform: translateX(-50%) translateY(0); }
        50% { transform: translateX(-50%) translateY(8px); }
      }
    `}</style>
  </section>
);
