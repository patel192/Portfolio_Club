import React from 'react';
import { Quote, Play, Star } from 'lucide-react';

const TESTIMONIALS_DATA = [
  {
    name: "Vikram Singh",
    role: "Official Partner",
    text: "The professional environment and the sheer scale of their events in Vadodara is impressive. A perfect platform for brand growth.",
    image: "https://ui-avatars.com/api/?name=Vikram+Singh&background=F5A623&color=fff"
  },
  {
    name: "Arjun Mehta",
    role: "Club Member Parent",
    text: "Beyond just football, they focus on discipline and character. My son has shown immense growth since joining the academy.",
    image: "https://ui-avatars.com/api/?name=Arjun+Mehta&background=E63329&color=fff"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" style={{ background: 'var(--bg)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag">Success Stories</span>
          <h2 className="section-title">What Our <span>Community Says</span></h2>
          <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '3rem',
          alignItems: 'start' // Changed from center to start for better alignment
        }}>
          
          {/* Left Column: Video Testimonial */}
          <div style={{ position: 'relative' }}>
            <div style={{ 
              borderRadius: '1.25rem', 
              overflow: 'hidden', 
              boxShadow: 'var(--glow)', 
              border: '2px solid var(--border-accent)', 
              /* 
                 FIX: If your video is vertical, change 16/9 to 9/16.
                 If you want it to adjust automatically, remove aspectRatio and 
                 the video will take its natural size.
              */
              aspectRatio: '16/9', 
              background: '#000', // Black bars will show on sides if contain is used
              position: 'relative',
              zIndex: 2
            }}>
              <video 
                src="/testimonial/testimonial-video.mp4" 
                controls // Added controls so users can unmute/seek
                autoPlay 
                loop 
                muted 
                playsInline 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  /* 
                     FIX: 'contain' ensures the whole video is visible 
                     without cropping the top or bottom.
                  */
                  objectFit: 'contain', 
                  display: 'block' 
                }} 
              />
              
              {/* Feature Badge */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'var(--primary)',
                padding: '0.4rem 0.8rem',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                zIndex: 3
              }}>
                <Play size={12} fill="white" color="white" />
                <span style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 800, fontFamily: 'Outfit' }}>WATCH</span>
              </div>
            </div>
          </div>

          {/* Right Column: Review Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {TESTIMONIALS_DATA.map((item, index) => (
              <div 
                key={index}
                className="t-card"
                style={{
                  padding: '1.5rem',
                  borderRadius: '1.25rem',
                  background: 'var(--card-bg)',
                  boxShadow: 'var(--card-shadow)',
                  position: 'relative',
                  border: '1px solid var(--border-color)'
                }}
              >
                <Quote size={40} style={{ position: 'absolute', top: '1rem', right: '1rem', opacity: 0.1, color: 'var(--primary)' }} />
                
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.75rem' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="var(--primary)" color="var(--primary)" />)}
                </div>

                <p style={{ 
                  fontStyle: 'italic', 
                  color: 'var(--text)', 
                  marginBottom: '1.25rem',
                  lineHeight: '1.6',
                  fontSize: '0.9rem',
                  fontFamily: 'Outfit, sans-serif'
                }}>
                  "{item.text}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <img src={item.image} alt={item.name} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--primary)' }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text)', fontWeight: 700 }}>{item.name}</h4>
                    <p style={{ margin: 0, fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 600 }}>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};