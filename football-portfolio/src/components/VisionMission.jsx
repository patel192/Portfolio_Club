import { Telescope, Target, Trophy } from 'lucide-react';

const MISSIONS = [
  'Develop youth football talent through structured coaching programs',
  'Organize professional sports events with community impact',
  'Create athlete exposure platforms and competitive opportunities',
  'Drive community sports development across Vadodara and Gujarat',
];

export const VisionMission = () => (
  <section style={{ background: 'var(--bg-alt)', padding: '6rem 1.5rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="section-tag">Our Purpose</span>
        <h2 className="section-title">Vision &amp; <span>Mission</span></h2>
        <div className="divider" style={{ margin: '1rem auto' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>

        {/* Vision */}
        <div className="t-card" style={{ borderRadius: '1.25rem', padding: '2.5rem', textAlign: 'center' }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '0.875rem',
            background: 'var(--primary-muted)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem',
          }}>
            <Telescope size={24} style={{ color: 'var(--primary)' }} />
          </div>
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>
            Vision
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.9rem' }}>
            To become one of Gujarat's most recognized grassroots football development clubs — a hub where young athletes grow into disciplined, competitive, and community-driven champions.
          </p>
        </div>

        {/* Mission */}
        <div className="t-card" style={{ borderRadius: '1.25rem', padding: '2.5rem' }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '0.875rem',
            background: 'var(--primary-muted)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem',
          }}>
            <Target size={24} style={{ color: 'var(--primary)' }} />
          </div>
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.25rem', textAlign: 'center' }}>
            Mission
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {MISSIONS.map((m, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: 'var(--primary)', marginTop: '7px', flexShrink: 0,
                }} />
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{m}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme */}
        <div className="t-card" style={{
          borderRadius: '1.25rem', padding: '2.5rem', textAlign: 'center',
          background: 'var(--primary-muted)', borderColor: 'var(--border-accent)',
        }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '0.875rem',
            background: 'var(--surface)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem',
            border: '1px solid var(--border-accent)',
          }}>
            <Trophy size={24} style={{ color: 'var(--primary)' }} />
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.75rem' }}>
            Our Theme
          </div>
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.4rem', fontWeight: 900, color: 'var(--text)', marginBottom: '1rem', lineHeight: 1.2 }}>
            "Champions Beyond The Game"
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>
            A unified theme bridging sports excellence and event professionalism — representing both DBSC and Astrive Events under one powerful identity.
          </p>
        </div>
      </div>
    </div>
  </section>
);
