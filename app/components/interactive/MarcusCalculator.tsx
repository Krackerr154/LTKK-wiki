'use client';

import { useState } from 'react';
import styles from './MarcusCalculator.module.css';
import { LaTeX } from '../ui/LaTeX';

export function MarcusCalculator() {
  const [k11, setK11] = useState('1.1e5');
  const [k22, setK22] = useState('3.0e2');
  const [K12, setK12] = useState('1.37e6');
  const [f12, setF12] = useState('1.0');
  const [kExp, setKExp] = useState('1.4e7');

  const k11v = Number(k11);
  const k22v = Number(k22);
  const K12v = Number(K12);
  const f12v = Number(f12);
  const kExpv = Number(kExp);

  const k12calc = Math.sqrt(k11v * k22v * K12v * f12v);
  const isValid = k11v > 0 && k22v > 0 && K12v > 0 && f12v > 0;
  const ratio = kExpv > 0 && isValid ? kExpv / k12calc : 0;
  const isOuterSphere = ratio > 0.1 && ratio < 10;

  return (
    <div className={styles.container}>
      <div className={styles.inputGrid}>
        <div className={styles.field}>
          <label><LaTeX>{'k_{11}'}</LaTeX> (M⁻¹s⁻¹)</label>
          <input type="text" value={k11} onChange={e => setK11(e.target.value)} className={styles.input} />
          <span className={styles.hint}>Laju pertukaran sendiri (oksidator)</span>
        </div>
        <div className={styles.field}>
          <label><LaTeX>{'k_{22}'}</LaTeX> (M⁻¹s⁻¹)</label>
          <input type="text" value={k22} onChange={e => setK22(e.target.value)} className={styles.input} />
          <span className={styles.hint}>Laju pertukaran sendiri (reduktor)</span>
        </div>
        <div className={styles.field}>
          <label><LaTeX>{'K_{12}'}</LaTeX></label>
          <input type="text" value={K12} onChange={e => setK12(e.target.value)} className={styles.input} />
          <span className={styles.hint}>Konstanta kesetimbangan</span>
        </div>
        <div className={styles.field}>
          <label><LaTeX>{'f_{12}'}</LaTeX></label>
          <input type="text" value={f12} onChange={e => setF12(e.target.value)} className={styles.input} />
          <span className={styles.hint}>Faktor koreksi (≈ 1.0)</span>
        </div>
      </div>

      {isValid && (
        <div className={styles.resultSection}>
          <div className={styles.equationDisplay}>
            <LaTeX display>{'k_{12} = (k_{11} \\cdot k_{22} \\cdot K_{12} \\cdot f_{12})^{1/2}'}</LaTeX>
          </div>
          <div className={styles.resultCard}>
            <span className={styles.resultLabel}><LaTeX>{'k_{12}'}</LaTeX> (kalkulasi)</span>
            <span className={styles.resultValue}>{k12calc.toExponential(2)} M⁻¹s⁻¹</span>
          </div>
        </div>
      )}

      <div className={styles.comparisonSection}>
        <h4 className={styles.compTitle}>Bandingkan dengan Eksperimen</h4>
        <div className={styles.field}>
          <label><LaTeX>{'k_{12}'}</LaTeX> (eksperimental, M⁻¹s⁻¹)</label>
          <input type="text" value={kExp} onChange={e => setKExp(e.target.value)} className={styles.input} />
        </div>
        {isValid && kExpv > 0 && (
          <div className={styles.verdict}>
            <div className={styles.ratioDisplay}>
              Rasio k<sub>exp</sub>/k<sub>calc</sub> = <strong>{ratio.toFixed(2)}</strong>
            </div>
            <div className={`${styles.mechBadge} ${isOuterSphere ? styles.outer : styles.inner}`}>
              {isOuterSphere
                ? '✅ Konsisten dengan mekanisme Bola Luar'
                : '⚠️ Tidak konsisten — kemungkinan mekanisme Bola Dalam'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
