'use client';

import { useMemo, useState } from 'react';
import styles from './CrystalFieldSplitter.module.css';

type Geometry = 'octahedral' | 'tetrahedral';

// Returns electron counts per level for a given d-count, geometry and spin.
function distribute(dCount: number, geometry: Geometry, lowSpin: boolean) {
  if (geometry === 'octahedral') {
    // lower t2g (3 orbitals = 6 e), upper eg (2 orbitals = 4 e)
    let t2g = 0;
    let eg = 0;
    if (lowSpin) {
      t2g = Math.min(6, dCount);
      eg = Math.max(0, dCount - 6);
    } else {
      // high spin: fill singly across all 5 first (Hund), then pair
      const single = Math.min(5, dCount);
      const t2gSingle = Math.min(3, single);
      const egSingle = Math.max(0, single - 3);
      const extra = dCount - single; // pairs
      // pair into t2g first then eg
      const t2gPairs = Math.min(3 - 0, extra);
      t2g = t2gSingle + Math.min(t2gSingle, extra);
      eg = egSingle + Math.max(0, extra - t2gSingle);
      // simpler correct model below
      t2g = t2gSingle;
      eg = egSingle;
      let rem = extra;
      // add second electrons preferring t2g
      for (let i = 0; i < 3 && rem > 0; i++) { t2g++; rem--; }
      for (let i = 0; i < 2 && rem > 0; i++) { eg++; rem--; }
      void t2gPairs;
    }
    return { lower: t2g, upper: eg, lowerCap: 6, upperCap: 4, lowerLabel: 't₂g', upperLabel: 'eg' };
  }
  // tetrahedral: lower e (2 orbitals = 4e), upper t2 (3 orbitals = 6e); always high spin
  const single = Math.min(5, dCount);
  const eSingle = Math.min(2, single);
  const t2Single = Math.max(0, single - 2);
  let rem = dCount - single;
  let e = eSingle;
  let t2 = t2Single;
  for (let i = 0; i < 2 && rem > 0; i++) { e++; rem--; }
  for (let i = 0; i < 3 && rem > 0; i++) { t2++; rem--; }
  return { lower: e, upper: t2, lowerCap: 4, upperCap: 6, lowerLabel: 'e', upperLabel: 't₂' };
}

function countUnpaired(dCount: number, geometry: Geometry, lowSpin: boolean) {
  const { lower, upper, lowerCap, upperCap } = distribute(dCount, geometry, lowSpin);
  const lowerOrbs = lowerCap / 2;
  const upperOrbs = upperCap / 2;
  const unpairedIn = (electrons: number, orbs: number) => {
    if (electrons <= orbs) return electrons;
    return orbs - (electrons - orbs);
  };
  return unpairedIn(lower, lowerOrbs) + unpairedIn(upper, upperOrbs);
}

function OrbitalRow({ electrons, orbitals }: { electrons: number; orbitals: number }) {
  // distribute electrons across orbitals (singly first, then pair)
  const boxes: number[] = Array(orbitals).fill(0);
  let e = electrons;
  for (let i = 0; i < orbitals && e > 0; i++) { boxes[i]++; e--; }
  for (let i = 0; i < orbitals && e > 0; i++) { boxes[i]++; e--; }
  return (
    <div className={styles.orbitalRow}>
      {boxes.map((n, i) => (
        <span key={i} className={styles.orbitalBox}>
          {n >= 1 && <span className={styles.up}>↑</span>}
          {n >= 2 && <span className={styles.down}>↓</span>}
        </span>
      ))}
    </div>
  );
}

export function CrystalFieldSplitter() {
  const [dCount, setDCount] = useState(6);
  const [geometry, setGeometry] = useState<Geometry>('octahedral');
  const [lowSpin, setLowSpin] = useState(false);

  // tetrahedral is always high spin
  const effectiveLowSpin = geometry === 'tetrahedral' ? false : lowSpin;
  const dist = useMemo(() => distribute(dCount, geometry, effectiveLowSpin), [dCount, geometry, effectiveLowSpin]);
  const unpaired = countUnpaired(dCount, geometry, effectiveLowSpin);
  const mu = Math.sqrt(unpaired * (unpaired + 2)).toFixed(2);

  // CFSE in units of Δ
  const cfse = useMemo(() => {
    if (geometry === 'octahedral') {
      return (-0.4 * dist.lower + 0.6 * dist.upper).toFixed(1);
    }
    return (-0.6 * dist.lower + 0.4 * dist.upper).toFixed(1);
  }, [dist, geometry]);

  const splitSymbol = geometry === 'octahedral' ? '\u0394\u2092' : '\u0394\u209c';

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <label className={styles.label}>Geometri</label>
          <div className={styles.toggleGroup}>
            <button className={`${styles.toggleBtn} ${geometry === 'octahedral' ? styles.active : ''}`} onClick={() => setGeometry('octahedral')}>Oktahedral</button>
            <button className={`${styles.toggleBtn} ${geometry === 'tetrahedral' ? styles.active : ''}`} onClick={() => setGeometry('tetrahedral')}>Tetrahedral</button>
          </div>
        </div>
        <div className={styles.controlGroup}>
          <label className={styles.label}>Konfigurasi: d<sup>{dCount}</sup></label>
          <input type="range" min={1} max={10} value={dCount} onChange={(e) => setDCount(Number(e.target.value))} className={styles.slider} />
        </div>
        <div className={styles.controlGroup}>
          <label className={styles.label}>Spin</label>
          <div className={styles.toggleGroup}>
            <button
              className={`${styles.toggleBtn} ${!effectiveLowSpin ? styles.active : ''}`}
              onClick={() => setLowSpin(false)}
              disabled={geometry === 'tetrahedral'}
            >Spin Tinggi</button>
            <button
              className={`${styles.toggleBtn} ${effectiveLowSpin ? styles.active : ''}`}
              onClick={() => setLowSpin(true)}
              disabled={geometry === 'tetrahedral'}
            >Spin Rendah</button>
          </div>
        </div>
      </div>

      {geometry === 'tetrahedral' && (
        <p className={styles.note}>Kompleks tetrahedral selalu spin tinggi (Δₜ ≈ 4/9 Δₒ &lt; P).</p>
      )}

      <div className={styles.diagram}>
        <div className={styles.levelUpper}>
          <span className={styles.levelLabel}>{dist.upperLabel}</span>
          <OrbitalRow electrons={dist.upper} orbitals={dist.upperCap / 2} />
        </div>
        <div className={styles.gap}>
          <span className={styles.gapLabel}>{splitSymbol}</span>
        </div>
        <div className={styles.levelLower}>
          <span className={styles.levelLabel}>{dist.lowerLabel}</span>
          <OrbitalRow electrons={dist.lower} orbitals={dist.lowerCap / 2} />
        </div>
      </div>

      <div className={styles.readouts}>
        <div className={styles.readout}>
          <span className={styles.roLabel}>CFSE</span>
          <span className={styles.roValue}>{cfse} {splitSymbol}</span>
        </div>
        <div className={styles.readout}>
          <span className={styles.roLabel}>Elektron tak berpasangan</span>
          <span className={styles.roValue}>{unpaired}</span>
        </div>
        <div className={styles.readout}>
          <span className={styles.roLabel}>μ (spin-only)</span>
          <span className={styles.roValue}>{mu} BM</span>
        </div>
      </div>
    </div>
  );
}
