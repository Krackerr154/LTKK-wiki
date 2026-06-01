'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion, AnimatePresence, type Transition } from 'framer-motion';
import { Complex3D, type Geo3D, type ReactionKind } from './Complex3D';
import styles from './WilkinsonCycle.module.css';

interface CycleStep {
  step: number;
  title: string;
  desc: string;
  oxState: string;
  eCount: number;
  type: string;
  /** species shown at the metal centre for this step */
  species: string;
  /** small reagent label entering (in) / leaving (out) at this step */
  reagentIn?: string;
  reagentOut?: string;
  /** coordination geometry + ligand labels for the structure diagram */
  geometry: Geo3D;
  ligands: string[];
  /** reaction type that produces THIS species (drives the entry animation) */
  reaction: ReactionKind;
}

const STEPS: CycleStep[] = [
  { step: 1, title: 'Disosiasi Ligan', desc: 'PPh₃ terdisosiasi dari [RhCl(PPh₃)₃] untuk membuka situs koordinasi.', oxState: '+1', eCount: 14, type: 'Substitusi', species: '[RhCl(PPh₃)₂]', reagentOut: '−PPh₃', geometry: 'trigonal', ligands: ['PPh₃', 'PPh₃', 'Cl'], reaction: 'dissociation' },
  { step: 2, title: 'Adisi Oksidatif H₂', desc: 'H₂ mendekat sebagai molekul, lalu ikatan H–H terputus dan kedua H menempel cis pada Rh — keadaan oksidasi naik +2.', oxState: '+3', eCount: 16, type: 'Adisi Oksidatif', species: '[RhH₂Cl(PPh₃)₂]', reagentIn: '+H₂', geometry: 'trigonalbipyramidal', ligands: ['H', 'H', 'PPh₃', 'PPh₃', 'Cl'], reaction: 'oxidative-addition' },
  { step: 3, title: 'Koordinasi Alkena', desc: 'Substrat alkena berkoordinasi dengan logam melalui ikatan π-nya.', oxState: '+3', eCount: 18, type: 'Substitusi', species: '[RhH₂Cl(η²-alkena)(PPh₃)₂]', reagentIn: '+alkena', geometry: 'octahedral', ligands: ['H', 'PPh₃', 'alkena', 'PPh₃', 'Cl', 'H'], reaction: 'association' },
  { step: 4, title: 'Penyisipan Migrasi', desc: 'Sebuah hidrida bermigrasi dan menyisip ke dalam alkena yang terkoordinasi, membentuk gugus alkil baru.', oxState: '+3', eCount: 16, type: 'Penyisipan', species: '[RhH(alkil)Cl(PPh₃)₂]', geometry: 'trigonalbipyramidal', ligands: ['H', 'alkil', 'PPh₃', 'PPh₃', 'Cl'], reaction: 'migratory-insertion' },
  { step: 5, title: 'Eliminasi Reduktif', desc: 'Alkil dan hidrida bergabung lebih dulu, lalu terlepas bersama sebagai produk alkana — keadaan oksidasi turun −2.', oxState: '+1', eCount: 14, type: 'Eliminasi Reduktif', species: '[RhCl(PPh₃)₂]', reagentOut: '−alkana', geometry: 'trigonal', ligands: ['PPh₃', 'PPh₃', 'Cl'], reaction: 'reductive-elimination' },
  { step: 6, title: 'Regenerasi Katalis', desc: 'PPh₃ berkoordinasi kembali dan substrat kembali, meregenerasi katalis aktif 16e⁻.', oxState: '+1', eCount: 16, type: 'Regenerasi', species: '[RhCl(PPh₃)₃]', reagentIn: '+PPh₃', geometry: 'squareplanar', ligands: ['PPh₃', 'PPh₃', 'Cl', 'PPh₃'], reaction: 'association' },
];

const N = STEPS.length;
const STEP_MS = 2200;

// Geometry of the cycle ring
const CX = 130;
const CY = 130;
const R = 92;

function nodePos(i: number): { x: number; y: number } {
  // start at top (-90°) and go clockwise
  const angle = (-90 + (360 / N) * i) * (Math.PI / 180);
  return { x: CX + R * Math.cos(angle), y: CY + R * Math.sin(angle) };
}

function eColor(e: number): string {
  return e === 18 ? '#6ee7b7' : e === 16 ? '#fbbf24' : '#fca5a5';
}

function arcPath(i: number): string {
  const a = nodePos(i);
  const b = nodePos((i + 1) % N);
  // shorten endpoints so the arrow sits between nodes, not under them
  const shorten = 22;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const ax = a.x + (dx / len) * shorten;
  const ay = a.y + (dy / len) * shorten;
  const bx = b.x - (dx / len) * shorten;
  const by = b.y - (dy / len) * shorten;
  // curve outward along the ring
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;
  const ox = (mx - CX);
  const oy = (my - CY);
  const ol = Math.hypot(ox, oy) || 1;
  const bow = 14;
  const cxp = mx + (ox / ol) * bow;
  const cyp = my + (oy / ol) * bow;
  return `M ${ax} ${ay} Q ${cxp} ${cyp} ${bx} ${by}`;
}

export function WilkinsonCycle() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const prefersReduced = useReducedMotion();
  const current = STEPS[active];
  const transition: Transition = { duration: prefersReduced ? 0 : 0.45, ease: 'easeInOut' };

  // auto-advance loop (self-cleaning; loops continuously while playing)
  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setActive((s) => (s + 1) % N), STEP_MS);
    return () => clearTimeout(t);
  }, [playing, active]);

  const activePos = nodePos(active);
  const accent = eColor(current.eCount);

  return (
    <div className={styles.container}>
      {/* ---- Header ---- */}
      <div className={styles.header}>
        <span className={styles.stepLabel}>Langkah {current.step} dari {N}</span>
        <span className={styles.typeBadge}>{current.type}</span>
      </div>

      {/* ---- Two balanced visual panels ---- */}
      <div className={styles.visualRow}>
        {/* Cycle diagram */}
        <div className={styles.panel}>
          <div className={styles.panelLabel}>Siklus Katalitik</div>
          <svg viewBox="0 0 260 260" className={styles.svg} role="img" aria-label="Siklus katalitik Wilkinson">
            <defs>
              <marker id="wkArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M0 0 L10 5 L0 10 z" fill="rgba(167,139,250,0.85)" />
              </marker>
            </defs>

            {/* faint guide ring */}
            <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth={1} />

            {/* arcs between steps */}
            {STEPS.map((_, i) => (
              <path
                key={`arc${i}`}
                d={arcPath(i)}
                fill="none"
                stroke={i === active ? accent : 'rgba(167,139,250,0.28)'}
                strokeWidth={i === active ? 3.5 : 2}
                markerEnd="url(#wkArrow)"
              />
            ))}

            {/* central catalyst label */}
            <text x={CX} y={CY - 6} textAnchor="middle" fill="var(--text-muted)" fontSize={9}>Katalis</text>
            <text x={CX} y={CY + 9} textAnchor="middle" fill="#a78bfa" fontSize={12} fontWeight={700}>Wilkinson</text>

            {/* pulsing halo on the active node */}
            <motion.circle
              fill="none"
              stroke={accent}
              strokeWidth={2}
              initial={false}
              animate={{ cx: activePos.x, cy: activePos.y, r: prefersReduced ? 22 : [20, 26, 20], opacity: prefersReduced ? 0.6 : [0.6, 0.1, 0.6] }}
              transition={prefersReduced ? transition : { cx: transition, cy: transition, r: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }, opacity: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } }}
            />

            {/* step nodes */}
            {STEPS.map((s, i) => {
              const p = nodePos(i);
              const isActive = i === active;
              return (
                <g key={`node${i}`} onClick={() => { setPlaying(false); setActive(i); }} style={{ cursor: 'pointer' }}>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={isActive ? 18 : 15}
                    fill={isActive ? accent : 'rgba(255,255,255,0.06)'}
                    stroke={isActive ? accent : 'var(--border-light)'}
                    strokeWidth={2}
                  />
                  <text x={p.x} y={p.y + 4} textAnchor="middle" fill={isActive ? '#0a0e17' : 'var(--text-secondary)'} fontSize={12} fontWeight={700}>
                    {s.step}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Structure stage */}
        <div className={styles.panel} style={{ borderColor: `${accent}55`, boxShadow: `0 0 24px -10px ${accent}` }}>
          <div className={styles.panelLabel}>Struktur 3D</div>
          <div className={styles.stageInner}>
            <Complex3D
              geometry={current.geometry}
              metal="Rh"
              ligands={current.ligands}
              reaction={current.reaction}
              stepKey={active}
            />
          </div>
          <div className={styles.stageFooter}>
            <span className={styles.cnBadge} style={{ color: accent, borderColor: `${accent}66`, background: `${accent}1a` }}>CN = {current.ligands.length}</span>
            <span className={styles.species}>{current.species}</span>
          </div>
        </div>
      </div>

      {/* ---- Info band ---- */}
      <div className={styles.infoBand}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: prefersReduced ? 0 : 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReduced ? 0 : -6 }}
            transition={{ duration: prefersReduced ? 0 : 0.28 }}
          >
            <div className={styles.titleRow}>
              <h4 className={styles.title}>{current.title}</h4>
              {current.reagentIn && <span className={styles.reagentIn}>{current.reagentIn}</span>}
              {current.reagentOut && <span className={styles.reagentOut}>{current.reagentOut}</span>}
            </div>
            <p className={styles.desc}>{current.desc}</p>
          </motion.div>
        </AnimatePresence>

        <div className={styles.readouts}>
          <div className={styles.readout}>
            <span className={styles.roLabel}>Keadaan Oksidasi Rh</span>
            <span className={styles.roValue} style={{ color: '#60a5fa' }}>{current.oxState}</span>
          </div>
          <div className={styles.readout} style={{ borderColor: `${accent}40` }}>
            <span className={styles.roLabel}>Jumlah Elektron Valensi</span>
            <motion.span
              key={current.eCount}
              className={styles.roValue}
              style={{ color: accent }}
              initial={{ scale: prefersReduced ? 1 : 1.35 }}
              animate={{ scale: 1 }}
              transition={transition}
            >
              {current.eCount}e⁻
            </motion.span>
          </div>
        </div>
      </div>

      {/* ---- Controls ---- */}
      <div className={styles.controls}>
        <button className={styles.ctrlBtn} onClick={() => { setPlaying(false); setActive((s) => (s - 1 + N) % N); }}>
          ← Sebel.
        </button>
        <button className={`${styles.ctrlBtn} ${styles.playBtn}`} onClick={() => setPlaying((p) => !p)}>
          {playing ? '⏸ Jeda' : '▶ Putar Siklus'}
        </button>
        <button className={styles.ctrlBtn} onClick={() => { setPlaying(false); setActive((s) => (s + 1) % N); }}>
          Lanjut →
        </button>
      </div>
    </div>
  );
}
