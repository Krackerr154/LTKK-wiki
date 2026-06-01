'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import styles from './Complex3D.module.css';

/* ============================================================
 * Complex3D — dependency-free pseudo-3D coordination complex.
 *
 * Seamless morphing: the structure never remounts between steps.
 * Each atom's 3D direction vector is interpolated from its
 * previous state to its new state while the whole thing keeps
 * rotating. Persisting atoms glide to new positions; new atoms
 * fly in from outside; removed atoms fly out and fade. The
 * enter/leave diff is derived automatically from the ligand sets.
 *
 * All animated values live in component state, updated only inside
 * a requestAnimationFrame effect (no ref reads/writes during render).
 * ========================================================== */

export type Geo3D =
  | 'octahedral'
  | 'squareplanar'
  | 'tetrahedral'
  | 'trigonal'
  | 'trigonalbipyramidal'
  | 'linear';

type V3 = [number, number, number];

const t = 1 / Math.sqrt(3);
const deg = (d: number) => (d * Math.PI) / 180;

const GEO: Record<Geo3D, V3[]> = {
  octahedral: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]],
  squareplanar: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0]],
  tetrahedral: [[t, t, t], [t, -t, -t], [-t, t, -t], [-t, -t, t]],
  trigonal: [[1, 0, 0], [-1, 0, 0], [0, 1, 0]],
  trigonalbipyramidal: [
    [0, 1, 0], [0, -1, 0],
    [Math.cos(deg(90)), 0, Math.sin(deg(90))],
    [Math.cos(deg(210)), 0, Math.sin(deg(210))],
    [Math.cos(deg(330)), 0, Math.sin(deg(330))],
  ],
  linear: [[0, 1, 0], [0, -1, 0]],
};

const VACANCY: Partial<Record<Geo3D, V3>> = { trigonal: [0, -1, 0] };

function ligandColor(label: string): string {
  const l = label.toLowerCase();
  if (l.includes('cl')) return '#34d399';
  if (l.includes('cn') || l.includes('co')) return '#38bdf8';
  if (l.includes('pph') || l === 'p' || l.startsWith('pr')) return '#f59e0b';
  if (l.includes('alkena')) return '#22d3ee';
  if (l.includes('alkil') || l.includes('alkana') || l === 'r') return '#fbbf24';
  if (l === 'h' || l.includes('hidrida')) return '#38bdf8';
  if (l.startsWith('h₂o') || l.startsWith('h2o') || l.includes('oh')) return '#60a5fa';
  if (l.includes('nh') || l.includes('en') || l.includes('py')) return '#a78bfa';
  if (l.includes('f')) return '#f87171';
  if (l === 'x' || l.includes('br') || l.includes('i')) return '#f59e0b';
  return '#94a3b8';
}

const SIZE = 300;
const C = SIZE / 2;
const WORLD = 92;
const CAM = 460;
const TILT = deg(-22);
const METAL = '#d4a017';
const METAL_R = 26;
const FAR = 2.8;
const MORPH_MS = 850;

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const easeInOut = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const lerp = (a: number, b: number, e: number) => a + (b - a) * e;
const lerpV = (a: V3, b: V3, e: number): V3 => [lerp(a[0], b[0], e), lerp(a[1], b[1], e), lerp(a[2], b[2], e)];
const scaleV = (a: V3, k: number): V3 => [a[0] * k, a[1] * k, a[2] * k];
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

interface Atom { label: string; dir: V3; }
function atomsOf(geometry: Geo3D, ligands: string[]): Atom[] {
  return GEO[geometry].map((d, i) => ({ label: ligands[i] ?? 'L', dir: d }));
}

interface Projected { x: number; y: number; depth: number; scale: number; }
function project([vx, vy, vz]: V3, yaw: number): Projected {
  const x = vx * WORLD, y = vy * WORLD, z = vz * WORLD;
  const cy = Math.cos(yaw), sy = Math.sin(yaw);
  const rx = x * cy + z * sy;
  const rz = -x * sy + z * cy;
  const cx = Math.cos(TILT), sx = Math.sin(TILT);
  const fy = y * cx - rz * sx;
  const fz = y * sx + rz * cx;
  const scale = CAM / (CAM - fz);
  return { x: C + rx * scale, y: C - fy * scale, depth: fz, scale };
}

interface Matched {
  persist: { from: V3; to: V3; label: string }[];
  entering: { to: V3; label: string }[];
  leaving: { from: V3; label: string }[];
}
function matchAtoms(prev: Atom[], cur: Atom[]): Matched {
  const used = new Set<number>();
  const persist: Matched['persist'] = [];
  const entering: Matched['entering'] = [];
  cur.forEach((c) => {
    let best = -1;
    for (let pi = 0; pi < prev.length; pi++) {
      if (used.has(pi) || prev[pi].label !== c.label) continue;
      if (best === -1 || dot(prev[pi].dir, c.dir) > dot(prev[best].dir, c.dir)) best = pi;
    }
    if (best >= 0) { used.add(best); persist.push({ from: prev[best].dir, to: c.dir, label: c.label }); }
    else entering.push({ to: c.dir, label: c.label });
  });
  const leaving = prev.filter((_, pi) => !used.has(pi)).map((p) => ({ from: p.dir, label: p.label }));
  return { persist, entering, leaving };
}

const identityMatch = (atoms: Atom[]): Matched => ({
  persist: atoms.map((a) => ({ from: a.dir, to: a.dir, label: a.label })),
  entering: [],
  leaving: [],
});

interface Complex3DProps {
  geometry: Geo3D;
  metal: string;
  ligands: string[];
  /** changing this key triggers a seamless morph to the new state */
  stepKey: number | string;
}

export function Complex3D({ geometry, metal, ligands, stepKey }: Complex3DProps) {
  const prefersReduced = useReducedMotion();

  // Animated values that drive rendering — only updated inside effects/rAF.
  const [yaw, setYaw] = useState(0.6);
  const [progress, setProgress] = useState(1); // 0..1 morph completion (1 = settled)
  const [match, setMatch] = useState<Matched>(() => identityMatch(atomsOf(geometry, ligands)));

  // Refs hold mutable animation bookkeeping (touched only in effects/rAF).
  const yawRef = useRef(0.6);
  const morphStartRef = useRef<number>(-Infinity);
  const prevAtomsRef = useRef<Atom[]>(atomsOf(geometry, ligands));
  const prevKeyRef = useRef<number | string>(stepKey);

  // On step change: compute the match and (re)start the morph clock.
  useEffect(() => {
    if (prevKeyRef.current === stepKey) return;
    const cur = atomsOf(geometry, ligands);
    const m = matchAtoms(prevAtomsRef.current, cur);
    setMatch(m);
    prevAtomsRef.current = cur;
    prevKeyRef.current = stepKey;
    if (prefersReduced) {
      morphStartRef.current = -Infinity;
      setProgress(1);
    } else {
      morphStartRef.current = performance.now();
      setProgress(0);
    }
  }, [stepKey, geometry, ligands, prefersReduced]);

  // rAF loop: advance rotation + morph progress.
  useEffect(() => {
    let raf = 0;
    let last: number | null = null;
    const loop = (ts: number) => {
      const l = last ?? ts;
      const dt = Math.min(ts - l, 64);
      last = ts;
      if (!prefersReduced) {
        yawRef.current += dt * 0.0004;
        setYaw(yawRef.current);
      }
      const p = clamp01((ts - morphStartRef.current) / MORPH_MS);
      setProgress((cur) => (cur === p ? cur : p));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [prefersReduced]);

  const e = easeInOut(progress);

  // Build interpolated atom set.
  interface Live { key: string; label: string; color: string; dir: V3; op: number; }
  const live: Live[] = [];
  match.persist.forEach((p, i) => live.push({ key: `p${i}`, label: p.label, color: ligandColor(p.label), dir: lerpV(p.from, p.to, e), op: 1 }));
  match.entering.forEach((en, i) => live.push({ key: `e${i}`, label: en.label, color: ligandColor(en.label), dir: lerpV(scaleV(en.to, FAR), en.to, e), op: clamp01(e * 1.4) }));
  if (e < 1) match.leaving.forEach((lv, i) => live.push({ key: `l${i}`, label: lv.label, color: ligandColor(lv.label), dir: lerpV(lv.from, scaleV(lv.from, FAR), e), op: clamp01(1 - e * 1.2) }));

  const metalP = project([0, 0, 0], yaw);
  const projected = live.map((a) => ({ ...a, p: project(a.dir, yaw) }));
  const vac = VACANCY[geometry];
  const vacP = vac ? project(vac, yaw) : null;

  const depthOpacity = (d: number) => 0.7 + 0.3 * ((d + WORLD) / (2 * WORLD));

  const order = [
    ...projected.filter((a) => a.p.depth < 0).sort((a, b) => a.p.depth - b.p.depth),
    'METAL' as const,
    ...projected.filter((a) => a.p.depth >= 0).sort((a, b) => a.p.depth - b.p.depth),
  ];

  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className={styles.svg} role="img" aria-label={`Struktur 3D ${geometry}`}>
      <defs>
        <radialGradient id="c3dMetal" cx="36%" cy="32%" r="72%">
          <stop offset="0%" stopColor="#f6d889" />
          <stop offset="55%" stopColor={METAL} />
          <stop offset="100%" stopColor="#8f6a0e" />
        </radialGradient>
      </defs>

      {vacP && (
        <g opacity={geometry === 'trigonal' ? clamp01(e) : 1}>
          <line x1={metalP.x} y1={metalP.y} x2={vacP.x} y2={vacP.y} stroke="rgba(255,255,255,0.22)" strokeWidth={2.5} strokeDasharray="4 5" />
          <circle cx={vacP.x} cy={vacP.y} r={15 * vacP.scale} fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth={1.5} strokeDasharray="4 4" />
        </g>
      )}

      {projected.map((a) => (
        <line
          key={`b${a.key}`}
          x1={metalP.x} y1={metalP.y} x2={a.p.x} y2={a.p.y}
          stroke="rgba(255,255,255,0.38)"
          strokeWidth={4 * a.p.scale}
          strokeLinecap="round"
          opacity={a.op * depthOpacity(a.p.depth)}
        />
      ))}

      {order.map((item) => {
        if (item === 'METAL') {
          return (
            <g key="metal">
              <circle cx={metalP.x} cy={metalP.y} r={METAL_R + 6} fill={METAL} opacity={0.16} className={styles.pulse} />
              <circle cx={metalP.x} cy={metalP.y} r={METAL_R} fill="url(#c3dMetal)" stroke="rgba(255,255,255,0.3)" strokeWidth={1.5} />
              <circle cx={metalP.x - METAL_R * 0.32} cy={metalP.y - METAL_R * 0.34} r={METAL_R * 0.3} fill="rgba(255,255,255,0.45)" />
              <text x={metalP.x} y={metalP.y + METAL_R * 0.34} textAnchor="middle" fill="#1a1a1a" fontSize={METAL_R * 0.72} fontWeight={700}>{metal}</text>
            </g>
          );
        }
        const a = item;
        const long = a.label.length > 3;
        const r = (long ? 19 : 17) * a.p.scale;
        const fontSize = (a.label.length > 4 ? 8.5 : a.label.length > 2 ? 9.5 : 11) * a.p.scale;
        return (
          <g key={a.key} opacity={a.op * depthOpacity(a.p.depth)}>
            <circle cx={a.p.x} cy={a.p.y} r={r} fill={a.color} stroke="rgba(0,0,0,0.28)" strokeWidth={1.2} />
            <circle cx={a.p.x - r * 0.3} cy={a.p.y - r * 0.33} r={r * 0.3} fill="rgba(255,255,255,0.42)" />
            <text x={a.p.x} y={a.p.y + fontSize * 0.34} textAnchor="middle" fill="white" fontSize={fontSize} fontWeight={600}>{a.label}</text>
          </g>
        );
      })}
    </svg>
  );
}
