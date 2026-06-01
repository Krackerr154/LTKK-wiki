'use client';

import React from 'react';
import { ArrowRight, ArrowUp, ArrowDown, Minus, CheckCircle2, Info, AlertTriangle, XCircle } from 'lucide-react';
import styles from './StepVisuals.module.css';

/* ============================================================
 * Reusable visual helpers for worked-example steps.
 * Goal: make each "langkah" concrete (tables, chips, diagrams)
 * so students don't have to picture the reasoning in their head.
 * ========================================================== */

type Tone = 'blue' | 'purple' | 'green' | 'amber' | 'red';
type Trend = 'up' | 'down' | 'same';

// ---------------------------------------------------------------
// 1. HighlightTable — data table with optional per-row highlight.
// ---------------------------------------------------------------
export interface TableColumn {
  header: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}
export interface TableRow {
  cells: React.ReactNode[];
  highlight?: Tone;
}
export function HighlightTable({
  columns,
  rows,
  caption,
}: {
  columns: TableColumn[];
  rows: TableRow[];
  caption?: React.ReactNode;
}) {
  return (
    <figure className={styles.tableFigure}>
      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((c, i) => (
                <th key={i} style={{ textAlign: c.align ?? 'left' }}>
                  {c.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri} className={r.highlight ? styles[`row_${r.highlight}`] : undefined}>
                {r.cells.map((cell, ci) => (
                  <td key={ci} style={{ textAlign: columns[ci]?.align ?? 'left' }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

// ---------------------------------------------------------------
// 2. ChangeChip — a single quantity change (e.g. "[X] × 2 ↑").
// ---------------------------------------------------------------
const TREND_ICON: Record<Trend, React.ReactNode> = {
  up: <ArrowUp size={13} />,
  down: <ArrowDown size={13} />,
  same: <Minus size={13} />,
};
export function ChangeChip({
  label,
  factor,
  trend,
}: {
  label: React.ReactNode;
  factor: React.ReactNode;
  trend: Trend;
}) {
  return (
    <span className={`${styles.chip} ${styles[`chip_${trend}`]}`}>
      <span className={styles.chipLabel}>{label}</span>
      <span className={styles.chipFactor}>
        {TREND_ICON[trend]} {factor}
      </span>
    </span>
  );
}

// ---------------------------------------------------------------
// 3. StepReasoning — "cause → effect ⟹ conclusion" deduction.
//    Makes the logic of order determination explicit & visual.
// ---------------------------------------------------------------
interface ChangeSpec {
  label: React.ReactNode;
  factor: React.ReactNode;
  trend: Trend;
}
export function StepReasoning({
  cause,
  effect,
  conclusion,
  tone = 'green',
}: {
  cause: ChangeSpec;
  effect: ChangeSpec;
  conclusion: React.ReactNode;
  tone?: Tone;
}) {
  return (
    <div className={styles.reasoning}>
      <div className={styles.reasoningFlow}>
        <ChangeChip {...cause} />
        <ArrowRight size={16} className={styles.flowArrow} />
        <ChangeChip {...effect} />
      </div>
      <div className={`${styles.conclusion} ${styles[`concl_${tone}`]}`}>
        <span className={styles.conclusionTag}>⟹</span>
        <span>{conclusion}</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// 4. ResultBox — boxed result / conclusion callout.
// ---------------------------------------------------------------
const RESULT_ICON = {
  info: <Info size={16} />,
  success: <CheckCircle2 size={16} />,
  warning: <AlertTriangle size={16} />,
  danger: <XCircle size={16} />,
};
export function ResultBox({
  tone = 'info',
  label,
  children,
}: {
  tone?: 'info' | 'success' | 'warning' | 'danger';
  label?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={`${styles.resultBox} ${styles[`result_${tone}`]}`}>
      <div className={styles.resultIcon}>{RESULT_ICON[tone]}</div>
      <div className={styles.resultBody}>
        {label && <div className={styles.resultLabel}>{label}</div>}
        <div>{children}</div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// 5. MiniReactionPath — labeled species nodes joined by arrows.
//    A lightweight schematic of a reaction pathway (e.g. D mech).
// ---------------------------------------------------------------
export interface PathNode {
  formula: React.ReactNode;
  cn?: number;
  note?: React.ReactNode;
}
export interface PathArrow {
  label?: React.ReactNode;
  tone?: Tone;
}
export function MiniReactionPath({
  nodes,
  arrows,
}: {
  nodes: PathNode[];
  arrows: PathArrow[];
}) {
  return (
    <div className={styles.path}>
      {nodes.map((node, i) => (
        <React.Fragment key={i}>
          <div className={styles.pathNode}>
            <span className={styles.pathFormula}>{node.formula}</span>
            {typeof node.cn === 'number' && (
              <span className={styles.pathCn}>CN = {node.cn}</span>
            )}
            {node.note && <span className={styles.pathNote}>{node.note}</span>}
          </div>
          {i < nodes.length - 1 && (
            <div className={`${styles.pathArrow} ${arrows[i]?.tone ? styles[`arrow_${arrows[i].tone}`] : ''}`}>
              {arrows[i]?.label && <span className={styles.pathArrowLabel}>{arrows[i]?.label}</span>}
              <ArrowRight size={20} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
