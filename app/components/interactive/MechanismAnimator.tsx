'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion, type Transition } from 'framer-motion';
import styles from './MechanismAnimator.module.css';

type MechanismType = 'D' | 'A' | 'I';

interface AnimationStep {
  label: string;
  description: string;
  coordNumber: number;
}

const STEPS: Record<MechanismType, AnimationStep[]> = {
  D: [
    { label: 'Mulai', description: 'Kompleks oktahedral berkoordinasi 6 [ML₅X].', coordNumber: 6 },
    { label: 'Disosiasi (lambat)', description: 'Gugus pergi X terlepas → zat antara berkoordinasi 5 [ML₅].', coordNumber: 5 },
    { label: 'Asosiasi (cepat)', description: 'Gugus masuk Y berkoordinasi → produk [ML₅Y].', coordNumber: 6 },
  ],
  A: [
    { label: 'Mulai', description: 'Kompleks oktahedral berkoordinasi 6 [ML₅X].', coordNumber: 6 },
    { label: 'Asosiasi (lambat)', description: 'Gugus masuk Y menyerang → zat antara berkoordinasi 7 [ML₅XY].', coordNumber: 7 },
    { label: 'Disosiasi (cepat)', description: 'Gugus pergi X terlepas → produk [ML₅Y].', coordNumber: 6 },
  ],
  I: [
    { label: 'Mulai', description: 'Kompleks oktahedral berkoordinasi 6 [ML₅X].', coordNumber: 6 },
    { label: 'Pertukaran', description: 'Pertukaran serempak: X terlepas saat Y masuk melalui satu keadaan transisi.', coordNumber: 6 },
    { label: 'Produk', description: 'Produk [ML₅Y] terbentuk — tanpa zat antara.', coordNumber: 6 },
  ],
};

const MECH_LABEL: Record<MechanismType, string> = {
  D: 'Disosiatif (D)',
  A: 'Asosiatif (A)',
  I: 'Pertukaran (I)',
};
const MECH_COLOR: Record<MechanismType, string> = {
  D: '#3b82f6',
  A: '#8b5cf6',
  I: '#f59e0b',
};

const MAX_STEP = 2;
const STEP_MS = 1500;

// --- Geometry (SVG units, 200×200 viewBox) -------------------------------
const M = { x: 100, y: 100 };       // metal center
const SLOT = { x: 152, y: 100 };    // right-hand reaction site (X start / Y end)
const A_X = { x: 148, y: 70 };      // associative 7-coord: X pushed up
const A_Y = { x: 148, y: 130 };     // associative 7-coord: Y attacks below
const I_X = { x: 166, y: 76 };      // interchange TS: X half-detached (upper)
const I_Y = { x: 166, y: 124 };     // interchange TS: Y half-attached (lower)

const SPECTATORS = [
  { x: 100, y: 50 },
  { x: 100, y: 150 },
  { x: 50, y: 100 },
];

interface AtomCfg {
  x: number;
  y: number;
  opacity: number;
  bond: number;
  dashed?: boolean;
}

const HIDDEN_X: AtomCfg = { x: 200, y: 60, opacity: 0, bond: 0 };
const HIDDEN_Y: AtomCfg = { x: 205, y: 135, opacity: 0, bond: 0 };

/**
 * Returns the position/visibility of the reacting groups X and Y for a given
 * mechanism + step. The three mechanisms share one visual language:
 *   - X always begins in the right slot (CN 6).
 *   - Y always ends in the right slot (CN 6).
 * Only the middle step differs, which is the whole point of the comparison:
 *   - D  → slot empties (CN 5 intermediate)
 *   - A  → X and Y both bonded (CN 7 intermediate)
 *   - I  → both half-bonded, dashed (CN 6 transition state)
 */
function configFor(type: MechanismType, step: number): { X: AtomCfg; Y: AtomCfg } {
  if (step === 0) {
    return { X: { ...SLOT, opacity: 1, bond: 1 }, Y: HIDDEN_Y };
  }
  if (step === MAX_STEP) {
    return { X: HIDDEN_X, Y: { ...SLOT, opacity: 1, bond: 1 } };
  }
  switch (type) {
    case 'D':
      return { X: { x: 200, y: 100, opacity: 0, bond: 0 }, Y: HIDDEN_Y };
    case 'A':
      return {
        X: { ...A_X, opacity: 1, bond: 1 },
        Y: { ...A_Y, opacity: 1, bond: 1 },
      };
    case 'I':
      return {
        X: { ...I_X, opacity: 0.6, bond: 0.45, dashed: true },
        Y: { ...I_Y, opacity: 0.85, bond: 0.45, dashed: true },
      };
  }
}

function ReactingAtom({
  cfg,
  label,
  color,
  transition,
}: {
  cfg: AtomCfg;
  label: string;
  color: string;
  transition: Transition;
}) {
  return (
    <>
      <motion.line
        x1={M.x}
        y1={M.y}
        stroke="rgba(255,255,255,0.35)"
        strokeWidth={2}
        strokeDasharray={cfg.dashed ? '4 3' : undefined}
        initial={false}
        animate={{ x2: cfg.x, y2: cfg.y, opacity: cfg.bond }}
        transition={transition}
      />
      <motion.g initial={false} animate={{ x: cfg.x, y: cfg.y, opacity: cfg.opacity }} transition={transition}>
        <circle r={12} fill={color} />
        <text y={3.5} textAnchor="middle" fill="white" fontSize={9} fontWeight={600}>
          {label}
        </text>
      </motion.g>
    </>
  );
}

function MechanismColumn({ type, step, transition }: { type: MechanismType; step: number; transition: Transition }) {
  const currentStep = STEPS[type][step];
  const color = MECH_COLOR[type];
  const { X, Y } = configFor(type, step);

  return (
    <div className={styles.column}>
      <div className={styles.columnHeader} style={{ borderColor: color }}>
        <span className={styles.mechLabel} style={{ color }}>{MECH_LABEL[type]}</span>
      </div>
      <div className={styles.svgWrap}>
        <svg viewBox="0 0 200 200" className={styles.svg}>
          {/* Spectator bonds + ligands (static) */}
          {SPECTATORS.map((pos, i) => (
            <line key={`b${i}`} x1={M.x} y1={M.y} x2={pos.x} y2={pos.y} stroke="rgba(255,255,255,0.35)" strokeWidth={2} />
          ))}

          {/* Reacting groups */}
          <ReactingAtom cfg={X} label="X" color="#ef4444" transition={transition} />
          <ReactingAtom cfg={Y} label="Y" color="#10b981" transition={transition} />

          {SPECTATORS.map((pos, i) => (
            <g key={`l${i}`}>
              <circle cx={pos.x} cy={pos.y} r={12} fill="#64748b" />
              <text x={pos.x} y={pos.y + 3.5} textAnchor="middle" fill="white" fontSize={9} fontWeight={600}>L</text>
            </g>
          ))}

          {/* Metal center (drawn last so it stays crisp on top) */}
          <circle cx={M.x} cy={M.y} r={18} fill="#d4a017" />
          <text x={M.x} y={M.y + 4} textAnchor="middle" fill="#1a1a1a" fontSize={11} fontWeight={700}>M</text>
        </svg>
      </div>
      <div className={styles.coordBadge}>CN = <strong>{currentStep.coordNumber}</strong></div>
      <div className={styles.stepLabel} style={{ color }}>{currentStep.label}</div>
      <div className={styles.stepDesc}>{currentStep.description}</div>
    </div>
  );
}

export function MechanismAnimator() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const prefersReduced = useReducedMotion();

  const transition: Transition = { duration: prefersReduced ? 0 : 0.55, ease: 'easeInOut' };

  // Drive auto-play with a self-cleaning timer so an unmount mid-play can
  // never call setState on a dead component. The "stop" happens inside the
  // async callback rather than synchronously in the effect body.
  useEffect(() => {
    if (!isPlaying || step >= MAX_STEP) return;
    const timer = setTimeout(() => {
      setStep((s) => Math.min(MAX_STEP, s + 1));
      if (step + 1 >= MAX_STEP) setIsPlaying(false);
    }, STEP_MS);
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const play = () => {
    if (isPlaying) return;
    if (step >= MAX_STEP) setStep(0);
    setIsPlaying(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.columns}>
        <MechanismColumn type="D" step={step} transition={transition} />
        <MechanismColumn type="A" step={step} transition={transition} />
        <MechanismColumn type="I" step={step} transition={transition} />
      </div>
      <div className={styles.controls}>
        <button className={styles.controlBtn} onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={isPlaying || step === 0}>
          ⏮ Sebel.
        </button>
        <button className={`${styles.controlBtn} ${styles.playBtn}`} onClick={play} disabled={isPlaying}>
          {isPlaying ? '⏳ Memutar...' : step >= MAX_STEP ? '↻ Ulangi' : '▶ Putar'}
        </button>
        <button className={styles.controlBtn} onClick={() => setStep((s) => Math.min(MAX_STEP, s + 1))} disabled={isPlaying || step === MAX_STEP}>
          Lanjut ⏭
        </button>
      </div>
      <div className={styles.stepIndicator}>
        {Array.from({ length: MAX_STEP + 1 }, (_, s) => (
          <button
            key={s}
            type="button"
            aria-label={`Langkah ${s + 1}`}
            className={`${styles.dot} ${s === step ? styles.activeDot : ''}`}
            onClick={() => !isPlaying && setStep(s)}
            disabled={isPlaying}
          />
        ))}
      </div>
    </div>
  );
}
