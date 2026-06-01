'use client';

import React from 'react';
import styles from './StructureDiagram.module.css';

/* ============================================================
 * StructureDiagram — schematic but chemically complete SVG of
 * how a ligand coordinates to a metal centre. Shows hydrogens,
 * double bonds, aromatic rings and oxygen so students see the
 * *real* structure behind each η / μ symbol, not just a number.
 * ========================================================== */

export type StructureKind =
  | 'eta1'
  | 'eta2'
  | 'eta3'
  | 'eta5'
  | 'eta6'
  | 'mu2'
  | 'mu3'
  | 'co_terminal'
  | 'hydride'
  | 'phosphine';

const COLOR = {
  metal: '#d4a017',
  carbon: '#8b5cf6',   // coordinating carbon (highlighted)
  hydrogen: '#94a3b8',
  oxygen: '#ef4444',
  bond: 'rgba(255,255,255,0.4)',
  coord: '#a78bfa',
  aromatic: 'rgba(167,139,250,0.55)',
  phosphorus: '#f59e0b',
  hydrideH: '#38bdf8',
};

type Pt = { x: number; y: number };

function Bond({ a, b, color = COLOR.bond, width = 2, dashed = false, opacity = 1 }: { a: Pt; b: Pt; color?: string; width?: number; dashed?: boolean; opacity?: number }) {
  return <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={color} strokeWidth={width} strokeDasharray={dashed ? '4 3' : undefined} opacity={opacity} strokeLinecap="round" />;
}

function DoubleBond({ a, b, color = COLOR.bond, width = 2, gap = 3.5 }: { a: Pt; b: Pt; color?: string; width?: number; gap?: number }) {
  // perpendicular offset
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const ox = (-dy / len) * gap;
  const oy = (dx / len) * gap;
  return (
    <>
      <line x1={a.x + ox} y1={a.y + oy} x2={b.x + ox} y2={b.y + oy} stroke={color} strokeWidth={width} strokeLinecap="round" />
      <line x1={a.x - ox} y1={a.y - oy} x2={b.x - ox} y2={b.y - oy} stroke={color} strokeWidth={width} strokeLinecap="round" />
    </>
  );
}

function Metal({ p, label = 'M' }: { p: Pt; label?: string }) {
  return (
    <>
      <circle cx={p.x} cy={p.y} r={16} fill={COLOR.metal} />
      <text x={p.x} y={p.y + 4} textAnchor="middle" fill="#1a1a1a" fontSize={12} fontWeight={700}>{label}</text>
    </>
  );
}

function Carbon({ p, r = 10 }: { p: Pt; r?: number }) {
  return (
    <>
      <circle cx={p.x} cy={p.y} r={r} fill={COLOR.carbon} />
      <text x={p.x} y={p.y + 3.3} textAnchor="middle" fill="white" fontSize={8.5} fontWeight={600}>C</text>
    </>
  );
}

function Hydrogen({ p }: { p: Pt }) {
  return (
    <>
      <circle cx={p.x} cy={p.y} r={6.5} fill={COLOR.hydrogen} />
      <text x={p.x} y={p.y + 2.6} textAnchor="middle" fill="#0a0e17" fontSize={7} fontWeight={700}>H</text>
    </>
  );
}

function Oxygen({ p }: { p: Pt }) {
  return (
    <>
      <circle cx={p.x} cy={p.y} r={10} fill={COLOR.oxygen} />
      <text x={p.x} y={p.y + 3.3} textAnchor="middle" fill="white" fontSize={8.5} fontWeight={600}>O</text>
    </>
  );
}

function LabeledAtom({ p, label, fill, r = 11, fontSize = 8.5 }: { p: Pt; label: string; fill: string; r?: number; fontSize?: number }) {
  return (
    <>
      <circle cx={p.x} cy={p.y} r={r} fill={fill} />
      <text x={p.x} y={p.y + fontSize * 0.38} textAnchor="middle" fill="white" fontSize={fontSize} fontWeight={600}>{label}</text>
    </>
  );
}

function ring(cx: number, cy: number, radius: number, sides: number, rotationDeg: number): Pt[] {
  return Array.from({ length: sides }, (_, i) => {
    const a = (rotationDeg + (360 / sides) * i) * (Math.PI / 180);
    return { x: cx + radius * Math.cos(a), y: cy + radius * Math.sin(a) };
  });
}
function outward(center: Pt, vertex: Pt, dist: number): Pt {
  const dx = vertex.x - center.x;
  const dy = vertex.y - center.y;
  const len = Math.hypot(dx, dy) || 1;
  return { x: vertex.x + (dx / len) * dist, y: vertex.y + (dy / len) * dist };
}

function renderKind(kind: StructureKind): React.ReactNode {
  const M: Pt = { x: 100, y: 182 };

  switch (kind) {
    /* η¹ — single σ-donor carbon (e.g. M–CH₃) */
    case 'eta1': {
      const C: Pt = { x: 100, y: 96 };
      const hs: Pt[] = [
        { x: 100, y: 46 },
        { x: 60, y: 74 },
        { x: 140, y: 74 },
      ];
      return (
        <>
          {hs.map((h, i) => <Bond key={`hb${i}`} a={C} b={h} />)}
          <Bond a={M} b={C} color={COLOR.coord} width={3} />
          {hs.map((h, i) => <Hydrogen key={`h${i}`} p={h} />)}
          <Carbon p={C} />
          <Metal p={M} />
        </>
      );
    }

    /* η² — both carbons of a C=C π bond (ethylene, Dewar–Chatt–Duncanson) */
    case 'eta2': {
      const C1: Pt = { x: 72, y: 92 };
      const C2: Pt = { x: 128, y: 92 };
      const mid: Pt = { x: 100, y: 92 };
      const hs: [Pt, Pt][] = [
        [C1, { x: 40, y: 66 }],
        [C1, { x: 44, y: 122 }],
        [C2, { x: 160, y: 66 }],
        [C2, { x: 156, y: 122 }],
      ];
      return (
        <>
          {hs.map(([c, h], i) => <Bond key={`hb${i}`} a={c} b={h} />)}
          <DoubleBond a={C1} b={C2} />
          <Bond a={M} b={mid} color={COLOR.coord} width={3} />
          {hs.map(([, h], i) => <Hydrogen key={`h${i}`} p={h} />)}
          <Carbon p={C1} />
          <Carbon p={C2} />
          <Metal p={M} />
        </>
      );
    }

    /* η³ — three contiguous carbons of a delocalised allyl */
    case 'eta3': {
      const C1: Pt = { x: 56, y: 98 };
      const C2: Pt = { x: 100, y: 70 };
      const C3: Pt = { x: 144, y: 98 };
      const hs: [Pt, Pt][] = [
        [C2, { x: 100, y: 36 }],
        [C1, { x: 24, y: 80 }],
        [C1, { x: 32, y: 130 }],
        [C3, { x: 176, y: 80 }],
        [C3, { x: 168, y: 130 }],
      ];
      return (
        <>
          {hs.map(([c, h], i) => <Bond key={`hb${i}`} a={c} b={h} />)}
          {/* delocalised π framework */}
          <Bond a={C1} b={C2} />
          <Bond a={C2} b={C3} />
          <Bond a={C1} b={C2} color={COLOR.aromatic} width={2} dashed opacity={0.8} />
          <Bond a={C2} b={C3} color={COLOR.aromatic} width={2} dashed opacity={0.8} />
          {[C1, C2, C3].map((c, i) => <Bond key={`s${i}`} a={M} b={c} color={COLOR.coord} width={2.5} />)}
          {hs.map(([, h], i) => <Hydrogen key={`h${i}`} p={h} />)}
          {[C1, C2, C3].map((c, i) => <Carbon key={`c${i}`} p={c} />)}
          <Metal p={M} />
        </>
      );
    }

    /* η⁵ — cyclopentadienyl, all 5 C coordinate (aromatic) */
    case 'eta5': {
      const center: Pt = { x: 100, y: 82 };
      const verts = ring(center.x, center.y, 40, 5, -90);
      const hs = verts.map((v) => outward(center, v, 18));
      return (
        <>
          {verts.map((v, i) => <Bond key={`hb${i}`} a={v} b={hs[i]} />)}
          {verts.map((v, i) => <Bond key={`r${i}`} a={v} b={verts[(i + 1) % verts.length]} />)}
          <circle cx={center.x} cy={center.y} r={22} fill="none" stroke={COLOR.aromatic} strokeWidth={2} />
          {verts.map((v, i) => <Bond key={`s${i}`} a={M} b={v} color={COLOR.coord} width={1.6} opacity={0.85} />)}
          {hs.map((h, i) => <Hydrogen key={`h${i}`} p={h} />)}
          {verts.map((v, i) => <Carbon key={`c${i}`} p={v} r={9} />)}
          <Metal p={M} />
        </>
      );
    }

    /* η⁶ — arene, all 6 C coordinate (aromatic) */
    case 'eta6': {
      const center: Pt = { x: 100, y: 80 };
      const verts = ring(center.x, center.y, 42, 6, 0);
      const hs = verts.map((v) => outward(center, v, 18));
      return (
        <>
          {verts.map((v, i) => <Bond key={`hb${i}`} a={v} b={hs[i]} />)}
          {verts.map((v, i) => <Bond key={`r${i}`} a={v} b={verts[(i + 1) % verts.length]} />)}
          <circle cx={center.x} cy={center.y} r={24} fill="none" stroke={COLOR.aromatic} strokeWidth={2} />
          {verts.map((v, i) => <Bond key={`s${i}`} a={M} b={v} color={COLOR.coord} width={1.5} opacity={0.8} />)}
          {hs.map((h, i) => <Hydrogen key={`h${i}`} p={h} />)}
          {verts.map((v, i) => <Carbon key={`c${i}`} p={v} r={9} />)}
          <Metal p={M} />
        </>
      );
    }

    /* μ₂ — one CO bridging two metals (edge-bridging) */
    case 'mu2': {
      const M1: Pt = { x: 48, y: 158 };
      const M2: Pt = { x: 152, y: 158 };
      const C: Pt = { x: 100, y: 104 };
      const O: Pt = { x: 100, y: 52 };
      return (
        <>
          <Bond a={M1} b={M2} width={1.5} />
          <DoubleBond a={C} b={O} />
          <Bond a={M1} b={C} color={COLOR.coord} width={3} />
          <Bond a={M2} b={C} color={COLOR.coord} width={3} />
          <Oxygen p={O} />
          <Carbon p={C} />
          <Metal p={M1} />
          <Metal p={M2} />
        </>
      );
    }

    /* μ₃ — one CO capping a triangular face of three metals */
    case 'mu3': {
      const M1: Pt = { x: 52, y: 170 };
      const M2: Pt = { x: 148, y: 170 };
      const M3: Pt = { x: 100, y: 140 };
      const C: Pt = { x: 100, y: 86 };
      const O: Pt = { x: 100, y: 40 };
      return (
        <>
          <Bond a={M1} b={M2} width={1.5} />
          <Bond a={M1} b={M3} width={1.5} />
          <Bond a={M2} b={M3} width={1.5} />
          <DoubleBond a={C} b={O} />
          <Bond a={M1} b={C} color={COLOR.coord} width={2.5} />
          <Bond a={M2} b={C} color={COLOR.coord} width={2.5} />
          <Bond a={M3} b={C} color={COLOR.coord} width={2.5} />
          <Oxygen p={O} />
          <Carbon p={C} />
          <Metal p={M3} />
          <Metal p={M1} />
          <Metal p={M2} />
        </>
      );
    }

    /* Terminal CO — σ-donor + π-acceptor, M–C≡O */
    case 'co_terminal': {
      const C: Pt = { x: 100, y: 110 };
      const O: Pt = { x: 100, y: 56 };
      return (
        <>
          <Bond a={M} b={C} color={COLOR.coord} width={3} />
          {/* triple bond C≡O */}
          <line x1={C.x} y1={C.y} x2={O.x} y2={O.y} stroke={COLOR.bond} strokeWidth={2} strokeLinecap="round" />
          <line x1={C.x - 4} y1={C.y} x2={O.x - 4} y2={O.y} stroke={COLOR.bond} strokeWidth={2} strokeLinecap="round" />
          <line x1={C.x + 4} y1={C.y} x2={O.x + 4} y2={O.y} stroke={COLOR.bond} strokeWidth={2} strokeLinecap="round" />
          <Oxygen p={O} />
          <Carbon p={C} />
          <Metal p={M} />
        </>
      );
    }

    /* Hydride — single M–H σ bond */
    case 'hydride': {
      const Hp: Pt = { x: 100, y: 96 };
      return (
        <>
          <Bond a={M} b={Hp} color={COLOR.coord} width={3} />
          <LabeledAtom p={Hp} label="H" fill={COLOR.hydrideH} r={11} />
          <Metal p={M} />
        </>
      );
    }

    /* Phosphine PR₃ — σ-donor through P, three R groups */
    case 'phosphine': {
      const P: Pt = { x: 100, y: 102 };
      const rs: Pt[] = [
        { x: 100, y: 50 },
        { x: 56, y: 70 },
        { x: 144, y: 70 },
      ];
      return (
        <>
          {rs.map((rp, i) => <Bond key={`pb${i}`} a={P} b={rp} />)}
          <Bond a={M} b={P} color={COLOR.coord} width={3} />
          {rs.map((rp, i) => <LabeledAtom key={`r${i}`} p={rp} label="R" fill={COLOR.hydrogen} r={8.5} fontSize={8} />)}
          <LabeledAtom p={P} label="P" fill={COLOR.phosphorus} r={12} fontSize={9.5} />
          <Metal p={M} />
        </>
      );
    }
  }
}

export function StructureDiagram({
  kind,
  caption,
  compact = false,
}: {
  kind: StructureKind;
  caption?: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <figure className={`${styles.figure} ${compact ? styles.compact : ''}`}>
      <svg viewBox="0 0 200 210" className={styles.svg} role="img" aria-label={typeof caption === 'string' ? caption : `Diagram struktur ${kind}`}>
        {renderKind(kind)}
      </svg>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

/* Side-by-side row of structure diagrams with a shared legend. */
export function StructureGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.grid}>
      {children}
      <div className={styles.legend}>
        <span className={styles.legendItem}><span className={styles.dot} style={{ background: COLOR.metal }} /> Pusat logam (M)</span>
        <span className={styles.legendItem}><span className={styles.dot} style={{ background: COLOR.carbon }} /> Karbon berkoordinasi</span>
        <span className={styles.legendItem}><span className={styles.dot} style={{ background: COLOR.hydrogen }} /> Hidrogen</span>
        <span className={styles.legendItem}><span className={styles.dot} style={{ background: COLOR.oxygen }} /> Oksigen</span>
        <span className={styles.legendItem}><span className={styles.line} /> Ikatan ke logam</span>
      </div>
    </div>
  );
}
