'use client';

import { useId } from 'react';

interface SectionDividerProps {
  /** Invierte la diagonal y la posición de los acentos */
  flip?: boolean;
  /** Muestra el parallelogramo central */
  accent?: boolean;
  className?: string;
}

/**
 * Separador angular entre secciones — estilo boceto técnico + toque manga.
 * Línea diagonal con acento geométrico y puntos de color.
 */
export default function SectionDivider({
  flip = false,
  accent = true,
  className = '',
}: SectionDividerProps) {
  const raw = useId();
  const uid = raw.replace(/:/g, '');
  const W = 1440;
  const H = 80;
  const top = flip ? H : 0;
  const bot = flip ? 0 : H;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ height: `${H}px` }}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Pequeño fragment de grid para el acento central */}
          <pattern
            id={`div-grid-${uid}`}
            patternUnits="userSpaceOnUse"
            width="20" height="20"
          >
            <line x1="0" y1="0" x2="0" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
            <line x1="0" y1="0" x2="20" y2="0" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          </pattern>
        </defs>

        {/* — Línea diagonal principal — */}
        <line
          x1={0} y1={top}
          x2={W} y2={bot}
          stroke="rgba(37,99,235,0.22)"
          strokeWidth="1"
        />

        {/* — Segunda línea offset (efecto doble) — */}
        <line
          x1={0} y1={top + (flip ? -4 : 4)}
          x2={W} y2={bot + (flip ? 4 : -4)}
          stroke="rgba(56,189,248,0.07)"
          strokeWidth="0.5"
        />

        {/* — Parallelogramo central — */}
        {accent && (
          <polygon
            points={`
              ${W * 0.465},${H * 0.15}
              ${W * 0.535},${H * 0.15}
              ${W * 0.525},${H * 0.85}
              ${W * 0.455},${H * 0.85}
            `}
            fill="rgba(37,99,235,0.11)"
            stroke="rgba(56,189,248,0.22)"
            strokeWidth="0.5"
          />
        )}

        {/* — Rect grid fragment junto al parallelogramo — */}
        <rect
          x={W * 0.41} y={0}
          width={W * 0.02} height={H}
          fill={`url(#div-grid-${uid})`}
          opacity={0.6}
        />

        {/* — Dot accent izquierdo — */}
        <circle
          cx={80} cy={flip ? H - 6 : 6}
          r={3}
          fill="rgba(56,189,248,0.45)"
        />
        <circle
          cx={96} cy={flip ? H - 6 : 6}
          r={1.8}
          fill="rgba(56,189,248,0.25)"
        />

        {/* — Dot accent derecho — */}
        <circle
          cx={W - 80} cy={flip ? 6 : H - 6}
          r={2.5}
          fill="rgba(37,99,235,0.45)"
        />

        {/* — Mini línea horizontal izquierda — */}
        <line
          x1={0} y1={flip ? H - 1 : 1}
          x2={W * 0.15} y2={flip ? H - 1 : 1}
          stroke="rgba(37,99,235,0.18)"
          strokeWidth="0.5"
        />

        {/* — Mini línea horizontal derecha — */}
        <line
          x1={W * 0.85} y1={flip ? 1 : H - 1}
          x2={W} y2={flip ? 1 : H - 1}
          stroke="rgba(56,189,248,0.18)"
          strokeWidth="0.5"
        />

        {/* — Acento diagonal de corte (ángulo agudo) junto a dot — */}
        <line
          x1={110} y1={flip ? H : 0}
          x2={130} y2={flip ? 0 : H}
          stroke="rgba(56,189,248,0.15)"
          strokeWidth="0.5"
        />
        <line
          x1={118} y1={flip ? H : 0}
          x2={138} y2={flip ? 0 : H}
          stroke="rgba(37,99,235,0.10)"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}
