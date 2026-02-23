'use client';

import { useId } from 'react';

type Variant = 'hero' | 'section' | 'minimal';

interface GeometricDecorProps {
  variant?: Variant;
  className?: string;
  /** Espeja horizontalmente — útil para alternar entre secciones */
  flip?: boolean;
}

export default function GeometricDecor({
  variant = 'section',
  className = '',
  flip = false,
}: GeometricDecorProps) {
  const raw = useId();
  const uid = raw.replace(/:/g, '');

  const W = 1440;
  const H = 900;
  const isHero = variant === 'hero';
  const isSection = variant === 'section' || isHero;

  /* ── Grid lines ─────────────────────────────────────── */
  const gridLines: React.ReactNode[] = [];
  const gSpacing = 50;
  for (let x = gSpacing; x < W; x += gSpacing) {
    gridLines.push(
      <line
        key={`gv${x}`}
        x1={x} y1={0} x2={x} y2={H}
        stroke="rgba(255,255,255,0.038)"
        strokeWidth="0.5"
      />
    );
  }
  for (let y = gSpacing; y < H; y += gSpacing) {
    gridLines.push(
      <line
        key={`gh${y}`}
        x1={0} y1={y} x2={W} y2={y}
        stroke="rgba(255,255,255,0.038)"
        strokeWidth="0.5"
      />
    );
  }

  /* ── Manga speed lines from top-right corner ─────────── */
  const r4 = (n: number) => Math.round(n * 10000) / 10000;
  const speedLines: React.ReactNode[] = [];
  if (isHero) {
    const ox = W + 60;
    const oy = -60;
    for (let i = 0; i < 32; i++) {
      const t = i / 32;
      const angle = Math.PI * 0.78 + t * (Math.PI * 0.49);
      const len = 900 + (i % 7) * 140;
      const sw = i % 7 === 0 ? '1.2' : i % 3 === 0 ? '0.7' : '0.4';
      const op = 0.04 + (i % 4) * 0.012;
      speedLines.push(
        <line
          key={`sl${i}`}
          x1={ox} y1={oy}
          x2={r4(ox + Math.cos(angle) * len)}
          y2={r4(oy + Math.sin(angle) * len)}
          stroke="white"
          strokeWidth={sw}
          opacity={op}
        />
      );
    }
  }

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <defs>
        {/* Diagonal stripe pattern — rellena círculos con tramado manga */}
        <pattern
          id={`dstripe-${uid}`}
          patternUnits="userSpaceOnUse"
          width="10"
          height="10"
          patternTransform="rotate(45)"
        >
          <line
            x1="0" y1="-1" x2="0" y2="11"
            stroke="rgba(56,189,248,0.22)"
            strokeWidth="2.5"
          />
        </pattern>

        {/* Halftone / screen-tone — punteado manga estilo */}
        <pattern
          id={`htone-${uid}`}
          patternUnits="userSpaceOnUse"
          width="9"
          height="9"
        >
          <circle cx="4.5" cy="4.5" r="1.1" fill="rgba(255,255,255,0.03)" />
        </pattern>
      </defs>

      {/* ── GRID técnico ────────────────────────────────── */}
      <g>{gridLines}</g>

      {/* ── HALFTONE zona (hero) ── screen-tone abajo-izquierda */}
      {isHero && (
        <rect
          x={0} y={H * 0.55}
          width={W * 0.40} height={H * 0.45}
          fill={`url(#htone-${uid})`}
          opacity={0.75}
        />
      )}

      {/* ── PARALELOGRAMOS ──────────────────────────────── */}

      {/* Grande principal — derecha, inclinado */}
      <polygon
        points={`
          ${W * 0.71},0
          ${W * 0.87},0
          ${W * 0.80},${H}
          ${W * 0.64},${H}
        `}
        fill="rgba(37,99,235,0.075)"
        stroke="rgba(37,99,235,0.20)"
        strokeWidth="0.5"
      />

      {/* Mediano secundario — superpuesto, más arriba */}
      <polygon
        points={`
          ${W * 0.84},0
          ${W * 0.99},0
          ${W * 0.94},${H * 0.52}
          ${W * 0.79},${H * 0.52}
        `}
        fill="rgba(56,189,248,0.04)"
        stroke="rgba(56,189,248,0.13)"
        strokeWidth="0.5"
      />

      {/* Pequeño acento — esquina inferior izquierda (hero) */}
      {isHero && (
        <polygon
          points={`
            0,${H * 0.87}
            ${W * 0.15},${H * 0.87}
            ${W * 0.11},${H}
            0,${H}
          `}
          fill="rgba(37,99,235,0.07)"
          stroke="rgba(37,99,235,0.16)"
          strokeWidth="0.5"
        />
      )}

      {/* ── CÍRCULOS RAYADOS ─────────────────────────────── */}

      {/* Grande — esquina superior derecha */}
      <circle
        cx={W * 0.91} cy={H * 0.16}
        r={isHero ? 120 : 80}
        fill={`url(#dstripe-${uid})`}
        opacity={0.55}
      />
      <circle
        cx={W * 0.91} cy={H * 0.16}
        r={isHero ? 120 : 80}
        fill="none"
        stroke="rgba(56,189,248,0.30)"
        strokeWidth="1.5"
      />
      {/* Anillo exterior sutil */}
      <circle
        cx={W * 0.91} cy={H * 0.16}
        r={isHero ? 148 : 100}
        fill="none"
        stroke="rgba(37,99,235,0.10)"
        strokeWidth="0.5"
      />

      {/* Pequeño — esquina inferior izquierda */}
      {isSection && (
        <>
          <circle
            cx={W * 0.07} cy={H * 0.83}
            r={isHero ? 72 : 48}
            fill={`url(#dstripe-${uid})`}
            opacity={0.35}
          />
          <circle
            cx={W * 0.07} cy={H * 0.83}
            r={isHero ? 72 : 48}
            fill="none"
            stroke="rgba(37,99,235,0.28)"
            strokeWidth="1"
          />
        </>
      )}

      {/* Círculo sólido pequeño — acento */}
      <circle cx={W * 0.50} cy={H * 0.015} r={4} fill="rgba(56,189,248,0.45)" />
      <circle cx={W * 0.51} cy={H * 0.015} r={2.2} fill="rgba(56,189,248,0.25)" />

      {/* ── LÍNEAS DE ACCIÓN MANGA ───────────────────────── */}
      {isHero && <g>{speedLines}</g>}

      {/* ── VIÑETA MANGA — marco panel (hero, muy sutil) ── */}
      {isHero && (
        <g opacity={0.065}>
          <rect
            x={W * 0.022} y={H * 0.045}
            width={W * 0.29} height={H * 0.39}
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
          <rect
            x={W * 0.028} y={H * 0.058}
            width={W * 0.29} height={H * 0.39}
            fill="none"
            stroke="rgba(56,189,248,0.7)"
            strokeWidth="0.5"
          />
          {/* Esquina cortada — detalle manga */}
          <line
            x1={W * 0.022} y1={H * 0.045 + 16}
            x2={W * 0.022 + 16} y2={H * 0.045}
            stroke="rgba(56,189,248,0.5)"
            strokeWidth="1"
          />
        </g>
      )}

      {/* ── LÍNEAS DE ACENTO HORIZONTAL ─────────────────── */}
      <g>
        <line
          x1={0} y1={H * 0.97} x2={W * 0.26} y2={H * 0.97}
          stroke="rgba(56,189,248,0.17)"
          strokeWidth="0.5"
        />
        <line
          x1={W * 0.272} y1={H * 0.97} x2={W * 0.29} y2={H * 0.97}
          stroke="rgba(56,189,248,0.55)"
          strokeWidth="1"
        />
        <circle cx={W * 0.295} cy={H * 0.97} r={2} fill="rgba(56,189,248,0.40)" />
      </g>

      {/* ── ド — TIPOGRAFÍA DE IMPACTO ───────────────────── */}
      {isSection && (
        <text
          x={W - 24}
          y={H - 12}
          textAnchor="end"
          fontSize={isHero ? 310 : 210}
          fontWeight="900"
          fill="rgba(30,58,138,0.13)"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            userSelect: 'none',
          }}
        >
          ド
        </text>
      )}

      {/* ── KANJIS ADICIONALES — fondo temático manga ───── */}
      {isSection && (
        <g
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif', userSelect: 'none' }}
          aria-hidden="true"
        >
          {/* 呪 maldición (JJK) — top-left */}
          <text
            x={W * 0.06}
            y={220}
            fontSize="220"
            fontWeight="900"
            fill="rgba(30,58,138,0.08)"
            transform={`rotate(-8, ${W * 0.06}, 220)`}
          >呪</text>

          {/* 滅 destrucción (KnY) — mid-right */}
          <text
            x={W * 0.78}
            y={H * 0.55}
            fontSize="180"
            fontWeight="900"
            fill="rgba(30,58,138,0.07)"
            transform={`rotate(12, ${W * 0.78}, ${H * 0.55})`}
          >滅</text>

          {/* 鬼 demonio (TG) — bot-left */}
          <text
            x={W * 0.02}
            y={H - 20}
            fontSize="260"
            fontWeight="900"
            fill="rgba(30,58,138,0.06)"
            transform={`rotate(0, ${W * 0.02}, ${H - 20})`}
          >鬼</text>

          {/* 神 dios — top-center */}
          <text
            x={W * 0.46}
            y={140}
            fontSize="140"
            fontWeight="900"
            fill="rgba(30,58,138,0.09)"
            transform={`rotate(-5, ${W * 0.46}, 140)`}
          >神</text>

          {/* 死 muerte (DN) — mid-left */}
          <text
            x={W * 0.12}
            y={H * 0.52}
            fontSize="200"
            fontWeight="900"
            fill="rgba(30,58,138,0.07)"
            transform={`rotate(15, ${W * 0.12}, ${H * 0.52})`}
          >死</text>

          {/* 業 karma/pecado — top-right */}
          <text
            x={W * 0.89}
            y={120}
            fontSize="120"
            fontWeight="900"
            fill="rgba(30,58,138,0.06)"
            transform={`rotate(-12, ${W * 0.89}, 120)`}
          >業</text>

          {/* 炎 llama — bot-center */}
          <text
            x={W * 0.44}
            y={H - 30}
            fontSize="160"
            fontWeight="900"
            fill="rgba(30,58,138,0.08)"
            transform={`rotate(6, ${W * 0.44}, ${H - 30})`}
          >炎</text>

          {/* 斬 cortar (Bleach) — mid-center */}
          <text
            x={W * 0.5}
            y={H * 0.5}
            fontSize="190"
            fontWeight="900"
            fill="rgba(30,58,138,0.05)"
            transform={`rotate(-18, ${W * 0.5}, ${H * 0.5})`}
          >斬</text>

          {/* 終 final/fin — bot-right */}
          <text
            x={W * 0.87}
            y={H - 20}
            fontSize="110"
            fontWeight="900"
            fill="rgba(30,58,138,0.07)"
            transform={`rotate(8, ${W * 0.87}, ${H - 20})`}
          >終</text>
        </g>
      )}

      {/* ── Texto decorativo técnico (hero) ── */}
      {isHero && (
        <text
          x={W * 0.022}
          y={H * 0.985}
          fontSize="10.5"
          fill="rgba(56,189,248,0.22)"
          style={{ fontFamily: 'monospace', userSelect: 'none' }}
        >
          {'// FULL STACK DEVELOPER · PANAMA · v2026'}
        </text>
      )}
    </svg>
  );
}
