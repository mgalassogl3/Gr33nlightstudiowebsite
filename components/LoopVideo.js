'use client';

import { useEffect, useRef, useState } from 'react';

// Muted looping clip that plays only while it's on screen — keeps a page full
// of loops smooth on phones and saves battery and data. Tap to toggle sound.
export default function LoopVideo({ src, poster, title }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (!('IntersectionObserver' in window)) {
      v.play().catch(() => {});
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (v.paused) v.play().catch(() => {});
  };

  return (
    <button type="button" className="loopVideo" onClick={toggle} aria-label={`${muted ? 'Play sound for' : 'Mute'} ${title || 'clip'}`}>
      <video ref={ref} src={src} poster={poster} muted loop playsInline preload="metadata" />
      <span className="loopSound" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5 6 9H3v6h3l5 4V5Z" fill="currentColor" />
          {muted ? <path d="m22 9-6 6M16 9l6 6" /> : <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />}
        </svg>
      </span>
    </button>
  );
}
