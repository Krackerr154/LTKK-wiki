'use client';

import React from 'react';
import styles from './StructureDiagram.module.css';

/* ============================================================
 * ComplexStructure — parametric SVG of a whole coordination
 * complex in a named geometry, with configurable metal label
 * and ligand labels. Lets worked examples *show* the structure
 * (ferrocene, octahedral, square planar, etc.) instead of
 * relying on the student to picture it.
 * ========================================================== */

export type Geometry =
  | 'octahedral'
  | 'squareplanar'
  | 'tetrahedral'
  | 'linear'
  | 'sandwich'
  | 'trigonal'
  | 'trigonalbipyramidal';

type Pt = { x: number; y: number };

const METAL = '#d4a017';
const BOND = 'rgba(255,255,255,0.45)';
const RING = 'rgba(167,139,250,0.7)';

// Per-ligand color: highlight a "special" ligand differently if needed.
function ligandColor(label: string): string {
  const l = label.toLowerCase();
  if (l.includes('cl')) return '#34d399';
  if (l === 'x' || l.includes('br') || l.includes('i')) return '#f59e0b';
  if (l.includes('cn') || l.includes('co')) return '#38bdf8';
  if (l.startsWith('h₂o') || l.startsWith('h2o') || l.includes('oh')) return '#60a5fa';
  if (l.includes('nh') || l.includes('en') || l.includes('py')) return '#a78bfa';
  if (l.includes('pph') || l === 'p' || l.startsWith('pr')) return '#f59e0b';
  if (l.includes('alkena') || l.includes('alkena')) return '#22d3ee';
  if (l.includes('alkil') || l.includes('alkana') || l === 'r') return '#fbbf24';
  if (l === 'h' || l.includes('hidrida')) return '#38bdf8';
  if (l.includes('f')) return '#f87171';
  return '#64748b';
}

function Bond({ a, b, width = 2.5, dashed = false }: { a: Pt; b: Pt; width?: number; dashed?: boolean }) {
  return <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={BOND} strokeWidth={width} strokeDasharray={dashed ? '4 3' : undefined} strokeLinecap="round" />;
}

function Node({ p, label, fill, r = 14, fontSize = 9.5 }: { p: Pt; label: string; fill: string; r?: number; fontSize?: number }) {
  return (
    <>
      <circle cx={p.x} cy={p.y} r={r} fill={fill} />
      <text x={p.x} y={p.y + fontSize * 0.36} textAnchor="middle" fill={fill === METAL ? '#1a1a1a' : 'white'} fontSize={fontSize} fontWeight={700}>{label}</text>
    </>
  );
}

function MetalNode({ p, label }: { p: Pt; label: string }) {
  return <Node p={p} label={label} fill={METAL} r={18} fontSize={11} />;
}

function LigandNode({ p, label }: { p: Pt; label: string }) {
  // size scales down a touch for longer labels
  const r = label.length > 3 ? 15 : 13;
  const fontSize = label.length > 4 ? 7.5 : label.length > 2 ? 8.5 : 10;
  return <Node p={p} label={label} fill={ligandColor(label)} r={r} fontSize={fontSize} />;
}

interface ComplexStructureProps {
  geometry: Geometry;
  metal?: string;
  /** Ligand labels. Placement depends on geometry; extra labels are ignored. */
  ligands?: string[];
  /** For octahedral: 'z-out' elongates axial bonds, 'z-in' compresses them (Jahn-Teller). */
  distortion?: 'z-out' | 'z-in';
  /** Ring label for sandwich geometry (default "Cp"). */
  ring?: string;
  caption?: React.ReactNode;
}

function render(props: ComplexStructureProps): React.ReactNode {
  const { geometry, metal = 'M', ligands = [], distortion, ring = 'Cp' } = props;
  const C: Pt = { x: 100, y: 105 };

  switch (geometry) {
    /* Octahedral: 4 equatorial (square, perspective) + 2 axial. ligands[0..5] */
    case 'octahedral': {
      const axialLen = distortion === 'z-out' ? 74 : distortion === 'z-in' ? 42 : 58;
      const top: Pt = { x: 100, y: C.y - axialLen };
      const bottom: Pt = { x: 100, y: C.y + axialLen };
      // equatorial rhombus (perspective square)
      const eqL: Pt = { x: 36, y: C.y };
      const eqR: Pt = { x: 164, y: C.y };
      const eqUp: Pt = { x: 116, y: C.y - 26 };
      const eqDn: Pt = { x: 84, y: C.y + 26 };
      const positions = [top, eqR, eqUp, eqL, eqDn, bottom];
      const labels = [
        ligands[0] ?? 'L', ligands[1] ?? 'L', ligands[2] ?? 'L',
        ligands[3] ?? 'L', ligands[4] ?? 'L', ligands[5] ?? 'L',
      ];
      return (
        <>
          {positions.map((pp, i) => (
            <Bond key={`b${i}`} a={C} b={pp} dashed={i === 2 || i === 4} />
          ))}
          {positions.map((pp, i) => <LigandNode key={`l${i}`} p={pp} label={labels[i]} />)}
          <MetalNode p={C} label={metal} />
        </>
      );
    }

    /* Square planar: 4 ligands at 90°. ligands[0..3] */
    case 'squareplanar': {
      const positions: Pt[] = [
        { x: 100, y: 40 },
        { x: 165, y: 105 },
        { x: 100, y: 170 },
        { x: 35, y: 105 },
      ];
      return (
        <>
          {positions.map((pp, i) => <Bond key={`b${i}`} a={C} b={pp} />)}
          {positions.map((pp, i) => <LigandNode key={`l${i}`} p={pp} label={ligands[i] ?? 'L'} />)}
          <MetalNode p={C} label={metal} />
        </>
      );
    }

    /* Tetrahedral: 4 ligands, 2 front + 2 back (perspective). */
    case 'tetrahedral': {
      const positions: Pt[] = [
        { x: 100, y: 38 },
        { x: 40, y: 150 },
        { x: 160, y: 150 },
        { x: 100, y: 122 },
      ];
      return (
        <>
          {positions.map((pp, i) => <Bond key={`b${i}`} a={C} b={pp} dashed={i === 3} />)}
          {positions.map((pp, i) => <LigandNode key={`l${i}`} p={pp} label={ligands[i] ?? 'L'} />)}
          <MetalNode p={C} label={metal} />
        </>
      );
    }

    /* Linear: 2 ligands at 180°. */
    case 'linear': {
      const a: Pt = { x: 30, y: 105 };
      const b: Pt = { x: 170, y: 105 };
      return (
        <>
          <Bond a={C} b={a} />
          <Bond a={C} b={b} />
          <LigandNode p={a} label={ligands[0] ?? 'L'} />
          <LigandNode p={b} label={ligands[1] ?? 'L'} />
          <MetalNode p={C} label={metal} />
        </>
      );
    }

    /* Sandwich: two parallel rings above & below the metal (metallocene). */
    case 'sandwich': {
      const top = 52;
      const bottom = 158;
      const cx = 100;
      return (
        <>
          {/* bonds from metal to ring centres */}
          <Bond a={C} b={{ x: cx, y: top }} width={1.6} />
          <Bond a={C} b={{ x: cx, y: bottom }} width={1.6} />
          {/* top ring (ellipse, perspective) */}
          <ellipse cx={cx} cy={top} rx={48} ry={13} fill="none" stroke={RING} strokeWidth={2.5} />
          <ellipse cx={cx} cy={top} rx={30} ry={7} fill="none" stroke={RING} strokeWidth={1.4} opacity={0.6} />
          {/* bottom ring */}
          <ellipse cx={cx} cy={bottom} rx={48} ry={13} fill="none" stroke={RING} strokeWidth={2.5} />
          <ellipse cx={cx} cy={bottom} rx={30} ry={7} fill="none" stroke={RING} strokeWidth={1.4} opacity={0.6} />
          <text x={cx + 60} y={top + 4} textAnchor="middle" fill={RING} fontSize={11} fontWeight={700}>{ring}</text>
          <text x={cx + 60} y={bottom + 4} textAnchor="middle" fill={RING} fontSize={11} fontWeight={700}>{ring}</text>
          <MetalNode p={C} label={metal} />
        </>
      );
    }

    /* Trigonal (T-shaped 3-coordinate): an open square-planar with one site vacant. */
    case 'trigonal': {
      const positions: Pt[] = [
        { x: 100, y: 40 },
        { x: 165, y: 105 },
        { x: 35, y: 105 },
      ];
      const vacancy: Pt = { x: 100, y: 170 };
      return (
        <>
          {positions.map((pp, i) => <Bond key={`b${i}`} a={C} b={pp} />)}
          {/* dashed marker showing the open coordination site */}
          <line x1={C.x} y1={C.y} x2={vacancy.x} y2={vacancy.y} stroke="rgba(255,255,255,0.25)" strokeWidth={2} strokeDasharray="3 4" />
          <circle cx={vacancy.x} cy={vacancy.y} r={11} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth={1.5} strokeDasharray="3 3" />
          <text x={vacancy.x} y={vacancy.y + 3} textAnchor="middle" fill="var(--text-muted)" fontSize={8}>kosong</text>
          {positions.map((pp, i) => <LigandNode key={`l${i}`} p={pp} label={ligands[i] ?? 'L'} />)}
          <MetalNode p={C} label={metal} />
        </>
      );
    }

    /* Trigonal bipyramidal (5-coordinate): 2 axial + 3 equatorial. */
    case 'trigonalbipyramidal': {
      const positions: Pt[] = [
        { x: 100, y: 32 },   // axial top
        { x: 100, y: 178 },  // axial bottom
        { x: 168, y: 118 },  // equatorial right
        { x: 32, y: 118 },   // equatorial left
        { x: 100, y: 96 },   // equatorial front (perspective)
      ];
      return (
        <>
          {positions.map((pp, i) => <Bond key={`b${i}`} a={C} b={pp} dashed={i === 4} />)}
          {positions.map((pp, i) => <LigandNode key={`l${i}`} p={pp} label={ligands[i] ?? 'L'} />)}
          <MetalNode p={C} label={metal} />
        </>
      );
    }
  }
}

export function ComplexStructure(props: ComplexStructureProps) {
  const { caption, geometry } = props;
  return (
    <figure className={styles.figure}>
      <svg viewBox="0 0 200 210" className={styles.svg} role="img" aria-label={typeof caption === 'string' ? caption : `Diagram kompleks ${geometry}`}>
        {render(props)}
      </svg>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
