'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ElectronTransferAnimator.module.css';

type Mechanism = 'inner' | 'outer';

interface Stage {
  label: string;
  description: string;
}

const STAGES: Record<Mechanism, Stage[]> = {
  inner: [
    {
      label: 'Pendekatan',
      description:
        'Oksidan inert [Coᴵᴵᴵ(NH₃)₅Cl]²⁺ dan reduktan labil [Crᴵᴵ(H₂O)₆]²⁺ saling mendekat. Cr(II) yang labil siap melepas satu ligan air.',
    },
    {
      label: 'Pembentukan Jembatan',
      description:
        'Ligan klorida berjembatan mengikat kedua logam secara bersamaan, membentuk zat antara binuklear [Co–Cl–Cr].',
    },
    {
      label: 'Transfer Elektron',
      description:
        'Satu elektron mengalir dari Cr(II) ke Co(III) melalui jembatan kovalen Cl. Co tereduksi menjadi Co(II), Cr teroksidasi menjadi Cr(III).',
    },
    {
      label: 'Pemutusan Jembatan',
      description:
        'Jembatan terputus. Klorida ikut berpindah ke pusat Cr(III) yang kini inert → [Crᴵᴵᴵ(H₂O)₅Cl]²⁺, sementara Co(II) labil terlepas sebagai Co²⁺(aq).',
    },
  ],
  outer: [
    {
      label: 'Pendekatan',
      description:
        'Kedua kompleks bersifat inert (mis. [Fe(CN)₆]³⁻ / [Fe(CN)₆]⁴⁻). Tidak ada ligan yang dapat membentuk jembatan, sehingga keduanya hanya saling mendekat.',
    },
    {
      label: 'Reorganisasi (Franck–Condon)',
      description:
        'Sebelum transfer, panjang ikatan logam–ligan kedua kompleks harus menyesuaikan ke geometri perantara. Inilah penghalang reorganisasi inti teori Marcus.',
    },
    {
      label: 'Tunneling Elektron',
      description:
        'Dengan geometri yang cocok, elektron mengalami tunneling melalui ruang dari donor ke akseptor. Tidak ada ikatan yang putus atau terbentuk.',
    },
    {
      label: 'Pemisahan',
      description:
        'Kompleks-kompleks yang kini telah berganti bilangan oksidasi berelaksasi kembali ke geometri kesetimbangannya dan berpisah. Lingkungan koordinasi tetap utuh.',
    },
  ],
};

// Centre colours reflect the real colour of each species in aqueous solution.
const CO3_COLOR = '#c026d3'; // [Co(NH3)5Cl]2+  — magenta / purple-red
const CO2_COLOR = '#f472b6'; // [Co(H2O)6]2+    — pink (cobalt(II) aqua)
const CR2_COLOR = '#38bdf8'; // [Cr(H2O)6]2+    — sky blue (chromium(II) aqua)
const CR3_COLOR = '#22c55e'; // [Cr(H2O)5Cl]2+  — green (chloro-aqua chromium(III))
// Outer-sphere example: hexacyanoferrate redox couple
const FE_RED_COLOR = '#fcd34d'; // [Fe(CN)6]4- ferrocyanide — pale yellow (reduced)
const FE_OX_COLOR = '#d97706'; // [Fe(CN)6]3- ferricyanide — amber (oxidised)
const CL_COLOR = '#a3e635'; // chlorine / bridging chloride — yellow-green
const LIGAND_COLOR = '#64748b';
const ELECTRON_COLOR = '#fbbf24';

const CY = 92;
const VIEW_W = 280;
const VIEW_H = 184;

// Ligands arranged diagonally (X shape) so the horizontal axis stays clear
// for the bridge / partner, and the area above/below stays clear for labels.
const LIG_OFFSETS: Array<[number, number]> = [
  [-22, -22],
  [22, -22],
  [-22, 22],
  [22, 22],
];

interface ComplexProps {
  baseX: number;
  targetX: number;
  color: string;
  symbol: string;
  sublabel: string;
  /** reorganization "breathing": negative = contract, positive = expand, 0 = none */
  breathe?: number;
}

function MetalComplex({ baseX, targetX, color, symbol, sublabel, breathe = 0 }: ComplexProps) {
  const scaleKeyframes = breathe ? [1, 1 + breathe, 1] : 1;
  return (
    <motion.g animate={{ x: targetX - baseX }} transition={{ duration: 0.6 }}>
      {/* spectator ligands (breathe around the complex center) */}
      <motion.g
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        animate={{ scale: scaleKeyframes }}
        transition={{ duration: 1, repeat: breathe ? 1 : 0 }}
      >
        {LIG_OFFSETS.map(([dx, dy], i) => (
          <g key={i}>
            <line
              x1={baseX}
              y1={CY}
              x2={baseX + dx}
              y2={CY + dy}
              stroke="rgba(255,255,255,0.25)"
              strokeWidth={2}
            />
            <circle cx={baseX + dx} cy={CY + dy} r={7} fill={LIGAND_COLOR} />
          </g>
        ))}
      </motion.g>

      {/* metal center */}
      <motion.circle cx={baseX} cy={CY} r={18} animate={{ fill: color }} transition={{ duration: 0.6 }} />
      <text x={baseX} y={CY + 4} textAnchor="middle" fontSize={12} fontWeight={700} fill="#1a1a1a">
        {symbol}
      </text>
      {/* oxidation-state / role label, placed clear below the complex */}
      <text x={baseX} y={CY + 46} textAnchor="middle" fontSize={10} fill="#94a3b8">
        {sublabel}
      </text>
    </motion.g>
  );
}

function InnerSphereScene({ step }: { step: number }) {
  const coBase = 62;
  const crBase = 200;

  const coX = step === 3 ? 46 : 62;
  const crX = step === 0 ? 210 : step === 3 ? 216 : 158;

  const coReduced = step >= 2;
  const crOxidized = step >= 2;

  // Bridging chloride: on Co initially, midway while bridged, on Cr after cleavage
  const clBase = 96;
  const clX = step === 0 ? coX + 36 : step <= 2 ? (coX + crX) / 2 : crX - 36;

  // Cl is bonded to Co up to/through the bridge, and to Cr from the bridge onward
  const coClBond = step <= 2;
  const clCrBond = step >= 1;

  return (
    <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className={styles.svg}>
      {/* Co–Cl bond — endpoints track the atoms so it stays connected while moving */}
      <motion.line
        animate={{ x1: coX, x2: clX, opacity: coClBond ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        y1={CY}
        y2={CY}
        stroke={CL_COLOR}
        strokeWidth={3}
        strokeDasharray={step === 0 ? '0' : '4 3'}
      />
      {/* Cl–Cr bond */}
      <motion.line
        animate={{ x1: clX, x2: crX, opacity: clCrBond ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        y1={CY}
        y2={CY}
        stroke={CL_COLOR}
        strokeWidth={3}
        strokeDasharray={step === 3 ? '0' : '4 3'}
      />

      <MetalComplex
        baseX={coBase}
        targetX={coX}
        color={coReduced ? CO2_COLOR : CO3_COLOR}
        symbol="Co"
        sublabel={coReduced ? 'Co(II)' : 'Co(III)'}
      />
      <MetalComplex
        baseX={crBase}
        targetX={crX}
        color={crOxidized ? CR3_COLOR : CR2_COLOR}
        symbol="Cr"
        sublabel={crOxidized ? 'Cr(III)' : 'Cr(II)'}
      />

      {/* bridging chloride (circle + label move together as a group) */}
      <motion.g animate={{ x: clX - clBase }} transition={{ duration: 0.6 }}>
        <circle cx={clBase} cy={CY} r={9} fill={CL_COLOR} />
        <text x={clBase} y={CY + 3} textAnchor="middle" fontSize={8} fontWeight={700} fill="#1a2e05">
          Cl
        </text>
      </motion.g>

      {/* electron transfer Cr -> Co */}
      {step === 2 && (
        <motion.g
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: coX - crX, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        >
          <circle cx={crX} cy={CY} r={5} fill={ELECTRON_COLOR} />
        </motion.g>
      )}
    </svg>
  );
}

function OuterSphereScene({ step }: { step: number }) {
  const aBase = 70;
  const bBase = 200;

  const aX = step === 0 ? 60 : step === 3 ? 46 : 80;
  const bX = step === 0 ? 210 : step === 3 ? 224 : 188;

  const donorOxidized = step >= 3;
  const acceptorReduced = step >= 3;

  const breatheStep = step === 1;
  const eStart = aX + 22;
  const eEnd = bX - 22;

  return (
    <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className={styles.svg}>
      <MetalComplex
        baseX={aBase}
        targetX={aX}
        color={donorOxidized ? FE_OX_COLOR : FE_RED_COLOR}
        symbol="Fe"
        sublabel={donorOxidized ? '[Fe(CN)₆]³⁻' : '[Fe(CN)₆]⁴⁻'}
        breathe={breatheStep ? -0.12 : 0}
      />
      <MetalComplex
        baseX={bBase}
        targetX={bX}
        color={acceptorReduced ? FE_RED_COLOR : FE_OX_COLOR}
        symbol="Fe"
        sublabel={acceptorReduced ? '[Fe(CN)₆]⁴⁻' : '[Fe(CN)₆]³⁻'}
        breathe={breatheStep ? 0.12 : 0}
      />

      {/* electron tunnels through space (no bridge) */}
      {step === 2 && (
        <>
          <motion.line
            x1={eStart}
            y1={CY}
            x2={eEnd}
            y2={CY}
            stroke={ELECTRON_COLOR}
            strokeWidth={1.5}
            strokeDasharray="3 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ duration: 1.2 }}
          />
          <motion.g
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: eEnd - eStart, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <circle cx={eStart} cy={CY} r={5} fill={ELECTRON_COLOR} />
          </motion.g>
        </>
      )}
    </svg>
  );
}

export function ElectronTransferAnimator() {
  const [mechanism, setMechanism] = useState<Mechanism>('inner');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stages = STAGES[mechanism];
  const maxStep = stages.length - 1;

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => clearTimer, []);

  const stop = () => {
    clearTimer();
    setIsPlaying(false);
  };

  const switchMechanism = (m: Mechanism) => {
    stop();
    setMechanism(m);
    setStep(0);
  };

  const goTo = (s: number) => {
    stop();
    setStep(s);
  };

  const play = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setStep(0);
    let current = 0;
    timerRef.current = setInterval(() => {
      current++;
      if (current > maxStep) {
        clearTimer();
        setIsPlaying(false);
        return;
      }
      setStep(current);
    }, 1800);
  };

  const accent = mechanism === 'inner' ? '#10b981' : '#8b5cf6';

  return (
    <div className={styles.container}>
      {/* Mechanism toggle */}
      <div className={styles.toggle}>
        <button
          className={`${styles.toggleBtn} ${mechanism === 'inner' ? styles.toggleActive : ''}`}
          onClick={() => switchMechanism('inner')}
        >
          Inner Sphere
        </button>
        <button
          className={`${styles.toggleBtn} ${mechanism === 'outer' ? styles.toggleActive : ''}`}
          onClick={() => switchMechanism('outer')}
        >
          Outer Sphere
        </button>
      </div>

      <div className={styles.stage}>
        <div className={styles.svgWrap}>
          {mechanism === 'inner' ? <InnerSphereScene step={step} /> : <OuterSphereScene step={step} />}
        </div>

        <div className={styles.stepBadge} style={{ color: accent, borderColor: accent }}>
          Tahap {step + 1}/{stages.length}: <strong>{stages[step].label}</strong>
        </div>
        <p className={styles.stepDesc}>{stages[step].description}</p>
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={styles.swatch} style={{ background: ELECTRON_COLOR }} /> elektron
        </span>
        {mechanism === 'inner' ? (
          <>
            <span className={styles.legendItem}>
              <span className={styles.swatch} style={{ background: CL_COLOR }} /> jembatan klorida (Cl)
            </span>
            <span className={styles.legendItem}>
              <span className={styles.swatch} style={{ background: LIGAND_COLOR }} /> ligan spektator
            </span>
            <span className={styles.legendItem}>
              <span className={styles.swatch} style={{ background: CR3_COLOR }} /> warna ion dalam air
            </span>
          </>
        ) : (
          <>
            <span className={styles.legendItem}>
              <span className={styles.swatch} style={{ background: LIGAND_COLOR }} /> ligan spektator
            </span>
            <span className={styles.legendItem}>
              <span className={styles.swatch} style={{ background: FE_RED_COLOR }} /> [Fe(CN)₆]⁴⁻ (kuning pucat)
            </span>
            <span className={styles.legendItem}>
              <span className={styles.swatch} style={{ background: FE_OX_COLOR }} /> [Fe(CN)₆]³⁻ (kuning tua)
            </span>
          </>
        )}
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <button className={styles.controlBtn} onClick={() => goTo(Math.max(0, step - 1))} disabled={isPlaying}>
          ⏮ Sebel.
        </button>
        <button className={`${styles.controlBtn} ${styles.playBtn}`} onClick={play} disabled={isPlaying}>
          {isPlaying ? '⏳ Memutar...' : '▶ Putar'}
        </button>
        <button className={styles.controlBtn} onClick={() => goTo(Math.min(maxStep, step + 1))} disabled={isPlaying}>
          Lanjut ⏭
        </button>
      </div>

      <div className={styles.stepIndicator}>
        {stages.map((_, s) => (
          <button
            key={s}
            aria-label={`Tahap ${s + 1}`}
            className={`${styles.dot} ${s === step ? styles.activeDot : ''}`}
            onClick={() => goTo(s)}
          />
        ))}
      </div>
    </div>
  );
}
