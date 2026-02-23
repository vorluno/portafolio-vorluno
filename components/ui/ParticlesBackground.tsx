'use client';

import { useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  drift: number;
  delay: number;
  opacity: number;
  color: string;
}

export default function ParticlesBackground() {
  const particles = useMemo<Particle[]>(() => {
    const colors = [
      'rgba(37,99,235,0.7)',
      'rgba(56,189,248,0.6)',
      'rgba(147,197,253,0.5)',
      'rgba(255,255,255,0.4)',
      'rgba(96,165,250,0.6)',
    ];

    return Array.from({ length: 22 }, (_, i) => ({
      id: i,
      x: (i * 4.7 + 3) % 97,
      y: (i * 7.3 + 10) % 90,
      size: ((i * 3 + 2) % 4) + 2,
      duration: ((i * 1.7 + 6) % 8) + 7,
      drift: ((i * 11 + 5) % 60) - 30,
      delay: (i * 0.6) % 5,
      opacity: ((i * 0.07 + 0.15) % 0.35) + 0.15,
      color: colors[i % colors.length],
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            bottom: '-10px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animationName: 'particleFloat',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            opacity: p.opacity,
            ['--drift' as string]: `${p.drift}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
