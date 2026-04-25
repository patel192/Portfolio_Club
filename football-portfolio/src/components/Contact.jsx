import { useState } from 'react';
import { Phone, Mail, MapPin, Camera, ArrowRight, Handshake } from 'lucide-react';

const FIELDS = [
  { id: 'name',    label: 'Your Name',       type: 'text',  placeholder: 'John Smith'       },
  { id: 'company', label: 'Company / Brand', type: 'text',  placeholder: 'XYZ Business'     },
  { id: 'email',   label: 'Email Address',   type: 'email', placeholder: 'you@example.com'  },
  { id: 'phone',   label: 'Phone Number',    type: 'tel',   placeholder: '+91 98765 43210'  },
];

const INFO = [
  { Icon: Phone,     label: 'Phone',     value: '+91 98765 43210'        },
  { Icon: Mail,      label: 'Email',     value: 'dbsc.astrive@gmail.com' },
  { Icon: MapPin,    label: 'Location',  value: 'Vadodara, Gujarat'      },
  { Icon: Camera, label: 'Instagram', value: '@dbsc_official'         },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', tier: 'Gold', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', company: '', email: '', phone: '', tier: 'Gold', message: '' });
  };

  const inputStyle = {
    width: '100%', padding: '0.82rem 1rem',
    borderRadius: '0.6rem', border: '1.5px solid var(--border)',
    background: 'var(--surface-2)', color: 'var(--text)',
    fontFamily: 'Inter, sans-serif', fontSize: '0.875rem',
    outline: 'none', transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.75rem',
    color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem',
    textTransform: 'uppercase', letterSpacing: '0.07em',
  };

  return (
    <section id="contact" style={{ background: 'var(--bg)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact <span>Us</span></h2>
          <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Interested in sponsorship or collaboration? We'd love to hear from you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

          {/* Info panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            <div className="t-card" style={{ borderRadius: '1.25rem', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                <img src="/logos/club-logo.png"  alt="DBSC"     style={{ height: '34px' }} />
                <img src="/logos/event-logo.png" alt="Aastrive" style={{ height: '26px' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {INFO.map(i => (
                  <div key={i.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '38px', height: '38px', borderRadius: '0.5rem', flexShrink: 0,
                      background: 'var(--primary-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <i.Icon size={16} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, fontFamily: 'Outfit, sans-serif' }}>{i.label}</div>
                      <div style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem' }}>{i.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="t-card" style={{
              borderRadius: '1.25rem', padding: '1.5rem',
              background: 'var(--primary-muted)', borderColor: 'var(--border-accent)',
              display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
            }}>
              <Handshake size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--text)', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                  Ready to Partner?
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6 }}>
                  We'll respond within 24 hours with your sponsorship proposal and portfolio PDF.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="t-card" style={{ borderRadius: '1.25rem', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {FIELDS.map(f => (
              <div key={f.id}>
                <label htmlFor={f.id} style={labelStyle}>{f.label}</label>
                <input
                  id={f.id} type={f.type} placeholder={f.placeholder}
                  value={form[f.id]}
                  onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                  required={f.id === 'name' || f.id === 'email'}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--border-accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
            ))}

            <div>
              <label htmlFor="tier" style={labelStyle}>Sponsorship Tier Interest</label>
              <select
                id="tier" value={form.tier}
                onChange={e => setForm(p => ({ ...p, tier: e.target.value }))}
                style={{ ...inputStyle, cursor: 'pointer' }}
              >
                <option value="Gold">Gold Sponsor — ₹50,000+</option>
                <option value="Silver">Silver Sponsor — ₹25,000+</option>
                <option value="Bronze">Bronze Sponsor — ₹10,000+</option>
                <option value="Custom">Custom / Discuss</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea
                id="message" rows={4} placeholder="Tell us about your brand and what you're looking for..."
                value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = 'var(--border-accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {sent ? 'Message Sent!' : 'Send Sponsorship Inquiry'}
              {!sent && <ArrowRight size={16} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
