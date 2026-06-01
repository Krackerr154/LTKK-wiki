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
const addV = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const len = (a: V3) => Math.hypot(a[0], a[1], a[2]) || 1;
const norm = (a: V3): V3 => scaleV(a, 1 / len(a));
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
function perp(v: V3): V3 {
  const ref: V3 = Math.abs(v[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
  return norm(cross(v, ref));
}
// piecewise-linear path through evenly-spaced waypoints
function pathAt(points: V3[], e: number): V3 {
  if (points.length === 1) return points[0];
  const segs = points.length - 1;
  const s = clamp01(e) * segs;
  const i = Math.min(Math.floor(s), segs - 1);
  return lerpV(points[i], points[i + 1], s - i);
}

export type ReactionKind =
  | 'none'
  | 'dissociation'        // a group simply leaves
  | 'association'         // a group simply binds
  | 'oxidative-addition'  // a molecule approaches, then splits onto the metal
  | 'reductive-elimination' // two groups combine, then depart together
  | 'migratory-insertion'; // a group migrates onto a neighbour, forming a new ligand

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
  /** the reaction type driving this transition (choreographs the motion) */
  reaction?: ReactionKind;
}

export function Complex3D({ geometry, metal, ligands, stepKey, reaction = 'none' }: Complex3DProps) {
  const prefersReduced = useReducedMotion();

  // Animated values that drive rendering — only updated inside effects/rAF.
  const [yaw, setYaw] = useState(0.6);
  const [progress, setProgress] = useState(1); // 0..1 morph completion (1 = settled)
  const [match, setMatch] = useState<Matched>(() => identityMatch(atomsOf(geometry, ligands)));
  const [activeReaction, setActiveReaction] = useState<ReactionKind>('none');

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
    setActiveReaction(reaction);
    prevAtomsRef.current = cur;
    prevKeyRef.current = stepKey;
    if (prefersReduced) {
      morphStartRef.current = -Infinity;
      setProgress(1);
    } else {
      morphStartRef.current = performance.now();
      setProgress(0);
    }
  }, [stepKey, geometry, ligands, reaction, prefersReduced]);

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
  const rxn = progress < 1 ? activeReaction : 'none';

  // Build the live atom set with reaction-aware choreography.
  interface Live { key: string; label: string; color: string; dir: V3; op: number; noMetalBond?: boolean }
  const live: Live[] = [];

  // For oxidative addition we keep the two H atoms together as an intact H₂
  // molecule (side-by-side, with an H–H bond) during approach, then break the
  // bond and let them spread to their cis sites. `hhBond` carries the live
  // endpoints of that bond while it still exists (split phase < ~0.6).
  let hhBond: { a: V3; b: V3; op: number } | null = null;

  // Persisting atoms glide along their path to the new positions.
  match.persist.forEach((p, i) => {
    live.push({ key: `p${i}`, label: p.label, color: ligandColor(p.label), dir: lerpV(p.from, p.to, e), op: 1 });
  });

  // Entering atoms: trajectory depends on the reaction.
  if (rxn === 'oxidative-addition' && match.entering.length >= 2) {
    const tA = match.entering[0].to;
    const tB = match.entering[1].to;
    const mid = norm(addV(tA, tB));          // shared approach direction
    const side = perp(mid);                   // axis the H₂ molecule lies along
    const SPLIT_AT = 0.55;                    // bond breaks ~55% through
    const HH_HALF = 0.32;                     // half the H–H separation as a molecule
    const dockDist = 1.35;                    // how close the intact H₂ sits to Rh

    // approach factor (0→1) until SPLIT_AT, then the atoms separate to targets
    const approach = clamp01(e / SPLIT_AT);
    const sep = clamp01((e - SPLIT_AT) / (1 - SPLIT_AT));

    // intact H₂ centre travels in from far to the docking distance
    const centerR = lerp(FAR, dockDist, easeInOut(approach));
    const center = scaleV(mid, centerR);
    const hA0 = addV(center, scaleV(side, HH_HALF));
    const hB0 = addV(center, scaleV(side, -HH_HALF));

    // after split, each H moves from its molecule position to its final site
    const hA = lerpV(hA0, tA, easeInOut(sep));
    const hB = lerpV(hB0, tB, easeInOut(sep));

    const opPair = clamp01(e * 2);
    // while still an intact H₂ molecule (before split), don't draw M–H bonds —
    // the H–H bond is shown instead; M–H bonds fade in as they separate.
    const stillMolecule = sep < 0.15;
    live.push({ key: 'e0', label: match.entering[0].label, color: ligandColor('h'), dir: hA, op: opPair, noMetalBond: stillMolecule });
    live.push({ key: 'e1', label: match.entering[1].label, color: ligandColor('h'), dir: hB, op: opPair, noMetalBond: stillMolecule });

    if (sep < 1) {
      hhBond = { a: hA, b: hB, op: clamp01(1 - sep * 1.4) * opPair };
    }

    // any further entering atoms (rare) fall back to a straight glide
    match.entering.slice(2).forEach((en, k) => {
      live.push({ key: `e${k + 2}`, label: en.label, color: ligandColor(en.label), dir: pathAt([scaleV(en.to, FAR), en.to], e), op: clamp01(e * 1.4) });
    });
  } else {
    match.entering.forEach((en, i) => {
      const target = en.to;
      const op = clamp01(e * 1.4);
      let path: V3[];
      if (rxn === 'migratory-insertion') {
        // the new group forms near the metal then settles into place (short hop)
        path = [scaleV(target, 1.55), target];
      } else {
        // generic association: glide straight in along the bond axis
        path = [scaleV(target, FAR), target];
      }
      live.push({ key: `e${i}`, label: en.label, color: ligandColor(en.label), dir: pathAt(path, e), op });
    });
  }

  // Leaving atoms: trajectory depends on the reaction.
  if (e < 1) {
    match.leaving.forEach((lv, i) => {
      const start = lv.from;
      let path: V3[];
      if (rxn === 'reductive-elimination' && match.leaving.length >= 1) {
        // groups first migrate together toward a shared exit vector, then leave
        const exit = norm(start);
        path = [start, scaleV(exit, 1.15), scaleV(exit, FAR)];
      } else {
        path = [start, scaleV(norm(start), FAR)];
      }
      live.push({ key: `l${i}`, label: lv.label, color: ligandColor(lv.label), dir: pathAt(path, e), op: clamp01(1 - e * 1.2) });
    });
  }

  const metalP = project([0, 0, 0], yaw);
  const projected = live.map((a) => ({ ...a, p: project(a.dir, yaw) }));
  const vac = VACANCY[geometry];
  const vacP = vac ? project(vac, yaw) : null;
  const hhA = hhBond ? project(hhBond.a, yaw) : null;
  const hhB = hhBond ? project(hhBond.b, yaw) : null;

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
        a.noMetalBond ? null : (
          <line
            key={`b${a.key}`}
            x1={metalP.x} y1={metalP.y} x2={a.p.x} y2={a.p.y}
            stroke="rgba(255,255,255,0.38)"
            strokeWidth={4 * a.p.scale}
            strokeLinecap="round"
            opacity={a.op * depthOpacity(a.p.depth)}
          />
        )
      ))}

      {/* intact H–H bond while the H₂ molecule is still bonded (oxidative addition) */}
      {hhBond && hhA && hhB && (
        <line
          x1={hhA.x} y1={hhA.y} x2={hhB.x} y2={hhB.y}
          stroke="#bae6fd"
          strokeWidth={4.5 * ((hhA.scale + hhB.scale) / 2)}
          strokeLinecap="round"
          opacity={hhBond.op}
        />
      )}

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
