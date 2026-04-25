import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { href: '#home',        label: 'Home'        },
  { href: '#about',       label: 'About'       },
  { href: '#promo',       label: 'Promo'       },
  { href: '#programs',    label: 'Programs'    },
  { href: '#achievements',label: 'Impact'      },
  { href: '#sponsorship', label: 'Sponsorship' },
  { href: '#events',      label: 'Events'      },
  { href: '#contact',     label: 'Contact'     },
];

export const Navbar = () => {
  const { theme, setTheme, themes } = useTheme();
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [themeOpen, setThemeOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const current = themes.find(t => t.id === theme);

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', height: '72px', gap: '1.5rem' }}>

        {/* Logos */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <img src="/logos/club-logo.png"  alt="DBSC Logo"     style={{ height: '42px', width: 'auto' }} />
          <div style={{ width: '1px', height: '30px', background: 'var(--border)' }} />
          <img src="/logos/event-logo.png" alt="Aastrive Logo" style={{ height: '34px', width: 'auto' }} />
        </div>

        {/* Desktop nav links */}
        <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', marginLeft: 'auto', alignItems: 'center' }} className="hidden-mobile">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Theme Switcher */}
        <div style={{ position: 'relative', marginLeft: '1rem', flexShrink: 0 }} className="hidden-mobile">
          <button
            id="theme-switcher-btn"
            onClick={() => setThemeOpen(o => !o)}
            className="theme-pill active"
            style={{ gap: '0.5rem' }}
          >
            <span>{current.icon}</span>
            <span>{current.label}</span>
            <span style={{ fontSize: '0.65rem', marginLeft: '2px' }}>▾</span>
          </button>

          {themeOpen && (
            <div
              style={{
                position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '0.75rem', padding: '0.5rem',
                boxShadow: 'var(--card-shadow)', minWidth: '180px',
                display: 'flex', flexDirection: 'column', gap: '0.25rem',
              }}
            >
              {themes.map(t => (
                <button
                  key={t.id}
                  id={`theme-${t.id}`}
                  onClick={() => { setTheme(t.id); setThemeOpen(false); }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                    padding: '0.55rem 0.75rem', borderRadius: '0.5rem',
                    border: 'none', cursor: 'pointer', textAlign: 'left',
                    background: t.id === theme ? 'var(--primary-muted)' : 'transparent',
                    color: t.id === theme ? 'var(--primary)' : 'var(--text-muted)',
                    fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.85rem',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span>{t.icon}</span>
                  <div>
                    <div>{t.label}</div>
                    <div style={{ fontSize: '0.7rem', opacity: 0.7, fontWeight: 400 }}>{t.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMenuOpen(o => !o)}
          style={{
            marginLeft: 'auto', background: 'none', border: 'none',
            cursor: 'pointer', color: 'var(--text)', fontSize: '1.4rem',
            display: 'none',
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(14px)', borderTop: '1px solid var(--border)', padding: '1rem 1.5rem 1.5rem' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} className="nav-link" onClick={() => setMenuOpen(false)} style={{ fontSize: '1rem' }}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {themes.map(t => (
              <button
                key={t.id}
                onClick={() => { setTheme(t.id); setMenuOpen(false); }}
                className={`theme-pill${t.id === theme ? ' active' : ''}`}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 901px) { .show-mobile { display: none !important; } }
      `}</style>
    </nav>
  );
};
