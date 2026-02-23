'use client';

import { useState, useEffect, useCallback } from 'react';

interface TypewriterEffectProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypewriterEffect({
  texts,
  speed = 70,
  deleteSpeed = 40,
  pauseDuration = 1800,
  className = '',
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const currentText = texts[textIndex] ?? '';

  const tick = useCallback(() => {
    if (phase === 'typing') {
      if (charIndex < currentText.length) {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else {
        setPhase('pausing');
      }
    } else if (phase === 'pausing') {
      // handled by separate timeout below
    } else if (phase === 'deleting') {
      if (charIndex > 0) {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setTextIndex((i) => (i + 1) % texts.length);
        setPhase('typing');
      }
    }
  }, [phase, charIndex, currentText, texts.length]);

  useEffect(() => {
    if (phase === 'pausing') {
      const timeout = setTimeout(() => {
        setPhase('deleting');
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    const delay = phase === 'typing' ? speed : deleteSpeed;
    const timeout = setTimeout(tick, delay);
    return () => clearTimeout(timeout);
  }, [phase, tick, speed, deleteSpeed, pauseDuration]);

  return (
    <span className={className}>
      {displayText}
      <span
        style={{
          opacity: showCursor ? 1 : 0,
          transition: 'opacity 0.1s',
          marginLeft: '2px',
          color: '#38BDF8',
        }}
      >
        |
      </span>
    </span>
  );
}
