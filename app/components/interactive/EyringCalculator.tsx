'use client';

import { useState, useMemo } from 'react';
import { LaTeX } from '../ui/LaTeX';
import styles from './EyringCalculator.module.css';

interface DataPoint { T: number; k: number; }

const R = 8.314;
const kB = 1.381e-23;
const h = 6.626e-34;

const SAMPLE_DATA: DataPoint[] = [
  { T: 298, k: 3.2e-5 },
  { T: 308, k: 8.1e-5 },
  { T: 318, k: 1.9e-4 },
  { T: 328, k: 4.2e-4 },
  { T: 338, k: 8.8e-4 },
];

export function EyringCalculator() {
  const [data, setData] = useState<DataPoint[]>(SAMPLE_DATA);

  const updatePoint = (i: number, field: 'T' | 'k', val: string) => {
    const next = [...data];
    next[i] = { ...next[i], [field]: Number(val) };
    setData(next);
  };

  const addRow = () => setData([...data, { T: 348, k: 0 }]);
  const removeRow = (i: number) => { if (data.length > 2) setData(data.filter((_, idx) => idx !== i)); };

  const results = useMemo(() => {
    const valid = data.filter(d => d.T > 0 && d.k > 0);
    if (valid.length < 2) return null;

    const xs = valid.map(d => 1 / d.T);
    const ys = valid.map(d => Math.log(d.k / d.T));

    const n = xs.length;
    const sumX = xs.reduce((a, b) => a + b, 0);
    const sumY = ys.reduce((a, b) => a + b, 0);
    const sumXY = xs.reduce((a, x, i) => a + x * ys[i], 0);
    const sumXX = xs.reduce((a, x) => a + x * x, 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    const dH = -slope * R; // J/mol
    const lnKbH = Math.log(kB / h);
    const dS = (intercept - lnKbH) * R; // J/(mol·K)

    const mechanism = dS > 0 ? 'Disosiatif (D/Id)' : dS < -50 ? 'Asosiatif (A/Ia)' : 'Pertukaran (I)';

    return { slope, intercept, dH, dS, mechanism, xs, ys };
  }, [data]);

  // SVG plot
  const W = 500, H = 300;
  const pad = { top: 30, right: 30, bottom: 50, left: 70 };

  return (
    <div className={styles.container}>
      <div className={styles.inputSection}>
        <h4 className={styles.inputTitle}>Input Data (T, k)</h4>
        <div className={styles.tableWrap}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>T (K)</th>
                <th>k (s⁻¹)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i}>
                  <td><input type="number" value={d.T} onChange={e => updatePoint(i, 'T', e.target.value)} className={styles.input} /></td>
                  <td><input type="text" value={d.k} onChange={e => updatePoint(i, 'k', e.target.value)} className={styles.input} /></td>
                  <td><button className={styles.removeBtn} onClick={() => removeRow(i)}>×</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className={styles.addBtn} onClick={addRow}>+ Tambah Baris</button>
        </div>
      </div>

      {results && (
        <>
          <div className={styles.plotSection}>
            <h4 className={styles.plotTitle}>Plot Eyring: ln(k/T) vs 1/T</h4>
            <div className={styles.svgWrap}>
              <svg viewBox={`0 0 ${W} ${H}`} className={styles.svg}>
                {(() => {
                  const xMin = Math.min(...results.xs) * 0.998;
                  const xMax = Math.max(...results.xs) * 1.002;
                  const yMin = Math.min(...results.ys) - 0.5;
                  const yMax = Math.max(...results.ys) + 0.5;
                  const sx = (v: number) => pad.left + ((v - xMin) / (xMax - xMin)) * (W - pad.left - pad.right);
                  const sy = (v: number) => pad.top + (1 - (v - yMin) / (yMax - yMin)) * (H - pad.top - pad.bottom);

                  return (
                    <>
                      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={H - pad.bottom} stroke="rgba(255,255,255,0.3)" />
                      <line x1={pad.left} y1={H - pad.bottom} x2={W - pad.right} y2={H - pad.bottom} stroke="rgba(255,255,255,0.3)" />
                      <text x={W / 2} y={H - 8} textAnchor="middle" fill="var(--text-muted)" fontSize={10}>1/T (K⁻¹)</text>
                      <text x={15} y={H / 2} textAnchor="middle" fill="var(--text-muted)" fontSize={10} transform={`rotate(-90, 15, ${H / 2})`}>ln(k/T)</text>

                      {/* Best fit line */}
                      <line x1={sx(xMin)} y1={sy(results.slope * xMin + results.intercept)} x2={sx(xMax)} y2={sy(results.slope * xMax + results.intercept)}
                        stroke="var(--accent-primary)" strokeWidth={2} strokeDasharray="6,3" opacity={0.7} />

                      {/* Data points */}
                      {results.xs.map((x, i) => (
                        <circle key={i} cx={sx(x)} cy={sy(results.ys[i])} r={5} fill="var(--accent-primary)" />
                      ))}
                    </>
                  );
                })()}
              </svg>
            </div>
          </div>

          <div className={styles.resultsGrid}>
            <div className={styles.resultCard}>
              <span className={styles.resultLabel}><LaTeX>{'\\Delta H^\\ddagger'}</LaTeX></span>
              <span className={styles.resultValue}>{(results.dH / 1000).toFixed(1)} kJ/mol</span>
            </div>
            <div className={styles.resultCard}>
              <span className={styles.resultLabel}><LaTeX>{'\\Delta S^\\ddagger'}</LaTeX></span>
              <span className={styles.resultValue}>{results.dS.toFixed(1)} J/(mol·K)</span>
            </div>
            <div className={`${styles.resultCard} ${styles.mechCard}`}>
              <span className={styles.resultLabel}>Mekanisme</span>
              <span className={styles.resultValue}>{results.mechanism}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
