import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

export const PromoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(e => console.log("Auto-play blocked:", e));
          setIsPlaying(true);
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="promo" style={{ background: 'var(--bg)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-tag">Cinematic Experience</span>
          <h2 className="section-title">The <span>Promo</span> Showcase</h2>
          <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Witness the energy, training intensity, and the spirit of sportsmanship at DBSC.
          </p>
        </div>

        <div style={{
          position: 'relative',
          borderRadius: '2rem',
          overflow: 'hidden',
          aspectRatio: '16/9',
          background: '#000',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          border: '1px solid var(--border)',
        }}>
          {/* Video element */}
          <video
            ref={videoRef}
            src="/videos/video1.mp4"
            loop
            muted={isMuted}
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          {/* Overlay controls */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '2rem',
            opacity: isPlaying ? 0 : 1,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none',
          }}>
             <h3 style={{ 
               fontFamily: 'Outfit, sans-serif', 
               color: '#fff', 
               fontSize: '2rem', 
               fontWeight: 800,
               marginBottom: '0.5rem' 
             }}>
               DBSC Season 2026
             </h3>
             <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', maxWidth: '400px' }}>
               A look back at our most successful training camp in Vadodara.
             </p>
          </div>

          {/* Interaction layer */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }} onClick={togglePlay}>
             {!isPlaying && (
               <div style={{
                 width: '80px', height: '80px', borderRadius: '50%',
                 background: 'var(--primary)', color: '#000',
                 display: 'flex', alignItems: 'center', justifyContent: 'center',
                 boxShadow: '0 0 40px var(--primary-glow)',
                 transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
               }}>
                 <Play fill="currentColor" size={32} />
               </div>
             )}
          </div>

          {/* Bottom control bar */}
          <div style={{
            position: 'absolute',
            bottom: '1.5rem',
            right: '1.5rem',
            display: 'flex',
            gap: '0.75rem',
          }}>
            <button 
              onClick={() => setIsMuted(!isMuted)}
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.2s ease'
              }}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <button 
              onClick={() => videoRef.current.requestFullscreen()}
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.2s ease'
              }}
            >
              <Maximize2 size={18} />
            </button>
          </div>
        </div>

        {/* Small thumbnails grid for other videos */}
        <div style={{ 
          marginTop: '3rem', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {[2, 3, 4].map(id => (
            <div key={id} style={{
              borderRadius: '1.25rem', overflow: 'hidden', 
              aspectRatio: '16/9', background: 'var(--surface-2)',
              border: '1px solid var(--border)', cursor: 'pointer',
              position: 'relative'
            }}
              onMouseEnter={e => e.currentTarget.querySelector('video').play()}
              onMouseLeave={e => {
                const v = e.currentTarget.querySelector('video');
                v.pause();
                v.currentTime = 0;
              }}
            >
              <video 
                src={`/videos/video${id}.mp4`} 
                muted loop playsInline 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} 
              />
              <div style={{
                position: 'absolute', bottom: '1rem', left: '1rem',
                color: '#fff', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.8rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)'
              }}>
                Video Clip #{id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
