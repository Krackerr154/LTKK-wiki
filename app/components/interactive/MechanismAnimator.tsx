'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MechanismAnimator.module.css';

type MechanismType = 'D' | 'A' | 'I';

interface AnimationStep {
  label: string;
  description: string;
  coordNumber: number;
}

const STEPS: Record<MechanismType, AnimationStep[]> = {
  D: [
    { label: 'Mulai', description: 'Kompleks oktahedral berkoordinasi 6 [ML₅X]', coordNumber: 6 },
    { label: 'Disosiasi (lambat)', description: 'Gugus pergi X terlepas → zat antara berkoordinasi 5 [ML₅]', coordNumber: 5 },
    { label: 'Asosiasi (cepat)', description: 'Gugus masuk Y berkoordinasi → produk [ML₅Y]', coordNumber: 6 },
  ],
  A: [
    { label: 'Mulai', description: 'Kompleks oktahedral berkoordinasi 6 [ML₅X]', coordNumber: 6 },
    { label: 'Asosiasi (lambat)', description: 'Gugus masuk Y menyerang → zat antara berkoordinasi 7 [ML₅XY]', coordNumber: 7 },
    { label: 'Disosiasi (cepat)', description: 'Gugus pergi X terlepas → produk [ML₅Y]', coordNumber: 6 },
  ],
  I: [
    { label: 'Mulai', description: 'Kompleks oktahedral berkoordinasi 6 [ML₅X]', coordNumber: 6 },
    { label: 'Pertukaran', description: 'Pertukaran serempak: X terlepas saat Y masuk melalui keadaan transisi tunggal', coordNumber: 6 },
    { label: 'Produk', description: 'Produk [ML₅Y] terbentuk — tanpa zat antara', coordNumber: 6 },
  ],
};

function MechanismColumn({ type, step }: { type: MechanismType; step: number }) {
  const currentStep = STEPS[type][step];
  const colorMap = { D: '#3b82f6', A: '#8b5cf6', I: '#f59e0b' };
  const color = colorMap[type];

  // SVG positions for the ball-and-stick model
  const cx = 100, cy = 100, r = 14;
  const ligandPositions = [
    { x: cx, y: cy - 50, label: 'L' },
    { x: cx + 50, y: cy, label: step === 0 ? 'X' : step === 2 ? 'Y' : type === 'D' ? '' : type === 'A' ? 'X' : 'Y' },
    { x: cx, y: cy + 50, label: 'L' },
    { x: cx - 50, y: cy, label: 'L' },
  ];

  // X leaving / Y entering positions
  const showX = step === 0 || (type === 'A' && step === 1);
  const showY = step === 2 || (type === 'A' && step === 1);
  const showIntermediate = (type === 'D' && step === 1) || (type === 'A' && step === 1);

  return (
    <div className={styles.column}>
      <div className={styles.columnHeader} style={{ borderColor: color }}>
        <span className={styles.mechLabel} style={{ color }}>{type === 'D' ? 'Disosiatif (D)' : type === 'A' ? 'Asosiatif (A)' : 'Pertukaran (I)'}</span>
      </div>
      <div className={styles.svgWrap}>
        <svg viewBox="0 0 200 200" className={styles.svg}>
          {/* Metal center */}
          <circle cx={cx} cy={cy} r={r + 4} fill="#d4a017" opacity={0.9} />
          <text x={cx} y={cy + 4} textAnchor="middle" fill="#1a1a1a" fontSize={11} fontWeight={700}>M</text>

          {/* Spectator ligands */}
          {ligandPositions.map((pos, i) => (
            <g key={i}>
              <line x1={cx} y1={cy} x2={pos.x} y2={pos.y} stroke="rgba(255,255,255,0.3)" strokeWidth={2} />
              {pos.label && (
                <>
                  <circle cx={pos.x} cy={pos.y} r={r - 2} fill={pos.label === 'X' ? '#ef4444' : pos.label === 'Y' ? '#10b981' : '#64748b'} />
                  <text x={pos.x} y={pos.y + 4} textAnchor="middle" fill="white" fontSize={9} fontWeight={600}>{pos.label}</text>
                </>
              )}
            </g>
          ))}

          {/* Leaving X */}
          {showX && step > 0 && type === 'D' && (
            <motion.g initial={{ x: 0 }} animate={{ x: 50, opacity: step === 1 ? 0.5 : 0 }} transition={{ duration: 0.5 }}>
              <circle cx={cx + 50} cy={cy} r={r - 2} fill="#ef4444" />
              <text x={cx + 50} y={cy + 4} textAnchor="middle" fill="white" fontSize={9} fontWeight={600}>X</text>
            </motion.g>
          )}

          {/* Entering Y */}
          {showY && type === 'A' && step === 1 && (
            <motion.g initial={{ x: -60 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
              <circle cx={cx + 65} cy={cy - 35} r={r - 2} fill="#10b981" />
              <text x={cx + 65} y={cy - 31} textAnchor="middle" fill="white" fontSize={9} fontWeight={600}>Y</text>
            </motion.g>
          )}
        </svg>
      </div>
      <div className={styles.coordBadge}>CN = <strong>{currentStep.coordNumber}</strong></div>
      <div className={styles.stepDesc}>{currentStep.description}</div>
    </div>
  );
}

export function MechanismAnimator() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const maxStep = 2;

  const play = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setStep(0);
    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current > maxStep) {
        clearInterval(interval);
        setIsPlaying(false);
        return;
      }
      setStep(current);
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.columns}>
        <MechanismColumn type="D" step={step} />
        <MechanismColumn type="A" step={step} />
        <MechanismColumn type="I" step={step} />
      </div>
      <div className={styles.controls}>
        <button className={styles.controlBtn} onClick={() => setStep(Math.max(0, step - 1))} disabled={isPlaying}>⏮ Sebel.</button>
        <button className={`${styles.controlBtn} ${styles.playBtn}`} onClick={play} disabled={isPlaying}>
          {isPlaying ? '⏳ Memutar...' : '▶ Putar'}
        </button>
        <button className={styles.controlBtn} onClick={() => setStep(Math.min(maxStep, step + 1))} disabled={isPlaying}>Lanjut ⏭</button>
      </div>
      <div className={styles.stepIndicator}>
        {[0, 1, 2].map(s => (
          <div key={s} className={`${styles.dot} ${s === step ? styles.activeDot : ''}`} />
        ))}
      </div>
    </div>
  );
}
