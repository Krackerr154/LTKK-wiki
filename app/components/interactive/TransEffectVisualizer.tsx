'use client';

import { useState } from 'react';
import styles from './TransEffectVisualizer.module.css';

const TRANS_SERIES = [
  { ligand: 'CO', strength: 10, piAcceptor: true },
  { ligand: 'CN⁻', strength: 9.5, piAcceptor: true },
  { ligand: 'C₂H₄', strength: 9, piAcceptor: true },
  { ligand: 'PR₃', strength: 8, piAcceptor: false },
  { ligand: 'H⁻', strength: 7.5, piAcceptor: false },
  { ligand: 'CH₃⁻', strength: 7, piAcceptor: false },
  { ligand: 'I⁻', strength: 6, piAcceptor: false },
  { ligand: 'SCN⁻', strength: 5.5, piAcceptor: false },
  { ligand: 'Br⁻', strength: 5, piAcceptor: false },
  { ligand: 'Cl⁻', strength: 4, piAcceptor: false },
  { ligand: 'py', strength: 3, piAcceptor: false },
  { ligand: 'NH₃', strength: 2, piAcceptor: false },
  { ligand: 'OH⁻', strength: 1.5, piAcceptor: false },
  { ligand: 'H₂O', strength: 1, piAcceptor: false },
];

interface Positions { top: string; right: string; bottom: string; left: string; }

export function TransEffectVisualizer() {
  const [positions, setPositions] = useState<Positions>({ top: 'Cl⁻', right: 'NH₃', bottom: 'Cl⁻', left: 'NH₃' });
  const [selectedPos, setSelectedPos] = useState<keyof Positions | null>(null);

  const getStrength = (ligand: string) => TRANS_SERIES.find(l => l.ligand === ligand)?.strength || 0;

  // Find which ligand is trans to the strongest trans-directing ligand
  const transPairs: [keyof Positions, keyof Positions][] = [['top', 'bottom'], ['left', 'right']];
  let weakestBond: keyof Positions | null = null;
  let maxTransStrength = -1;
  transPairs.forEach(([a, b]) => {
    const sA = getStrength(positions[a]);
    const sB = getStrength(positions[b]);
    if (sA > maxTransStrength) { maxTransStrength = sA; weakestBond = b; }
    if (sB > maxTransStrength) { maxTransStrength = sB; weakestBond = a; }
  });

  const assignLigand = (ligand: string) => {
    if (selectedPos) {
      setPositions({ ...positions, [selectedPos]: ligand });
      setSelectedPos(null);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.complexView}>
        <svg viewBox="0 0 280 280" className={styles.svg}>
          {/* Pt center */}
          <circle cx={140} cy={140} r={22} fill="#d4a017" />
          <text x={140} y={146} textAnchor="middle" fill="#1a1a1a" fontSize={14} fontWeight={700}>Pt</text>

          {/* Bonds and ligands */}
          {([
            { pos: 'top' as keyof Positions, x: 140, y: 50, bx: 140, by: 118 },
            { pos: 'right' as keyof Positions, x: 230, y: 140, bx: 162, by: 140 },
            { pos: 'bottom' as keyof Positions, x: 140, y: 230, bx: 140, by: 162 },
            { pos: 'left' as keyof Positions, x: 50, y: 140, bx: 118, by: 140 },
          ]).map(({ pos, x, y, bx, by }) => {
            const isWeak = pos === weakestBond;
            const isSelected = pos === selectedPos;
            return (
              <g key={pos} onClick={() => setSelectedPos(pos)} style={{ cursor: 'pointer' }}>
                <line x1={bx} y1={by} x2={x} y2={y}
                  stroke={isWeak ? '#ef4444' : 'rgba(255,255,255,0.4)'}
                  strokeWidth={isWeak ? 3 : 2}
                  strokeDasharray={isWeak ? '6,3' : 'none'} />
                <circle cx={x} cy={y} r={24} fill={isWeak ? 'rgba(239,68,68,0.15)' : isSelected ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.05)'}
                  stroke={isWeak ? '#ef4444' : isSelected ? '#3b82f6' : 'var(--border-light)'} strokeWidth={2} />
                <text x={x} y={y + 5} textAnchor="middle" fill={isWeak ? '#fca5a5' : 'var(--text-primary)'} fontSize={11} fontWeight={600}>
                  {positions[pos]}
                </text>
              </g>
            );
          })}

          {weakestBond && (
            <text x={140} y={270} textAnchor="middle" fill="#ef4444" fontSize={10} fontWeight={600}>
              ⚡ Ikatan melemah (trans terhadap pengarah terkuat)
            </text>
          )}
        </svg>
      </div>

      {selectedPos && (
        <div className={styles.ligandPicker}>
          <p className={styles.pickerLabel}>Pilih ligan untuk posisi {selectedPos}:</p>
          <div className={styles.ligandGrid}>
            {TRANS_SERIES.map(l => (
              <button key={l.ligand} className={styles.ligandBtn} onClick={() => assignLigand(l.ligand)}>
                <span>{l.ligand}</span>
                <span className={styles.ligandStrength}>{l.strength.toFixed(1)}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={styles.transSeriesBar}>
        <p className={styles.barLabel}>Kekuatan Efek Trans →</p>
        <div className={styles.barTrack}>
          {TRANS_SERIES.slice().reverse().map(l => (
            <div key={l.ligand} className={styles.barItem} style={{ flex: l.strength }}>
              <span className={styles.barItemLabel}>{l.ligand}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
