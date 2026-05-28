'use client';

import { useState } from 'react';
import styles from './DBlockPeriodicTable.module.css';
import { LaTeX } from '../ui/LaTeX';

interface IonData {
  symbol: string;
  charge: number;
  dCount: number;
  group: number;
  period: number;
  highSpin: { t2g: number; eg: number; cfse: string; classification: 'labile' | 'inert' };
  lowSpin: { t2g: number; eg: number; cfse: string; classification: 'labile' | 'inert' };
}

const IONS: IonData[] = [
  { symbol: 'Ti', charge: 3, dCount: 1, group: 4, period: 4, highSpin: { t2g: 1, eg: 0, cfse: '-0.4Δo', classification: 'labile' }, lowSpin: { t2g: 1, eg: 0, cfse: '-0.4Δo', classification: 'labile' } },
  { symbol: 'V', charge: 3, dCount: 2, group: 5, period: 4, highSpin: { t2g: 2, eg: 0, cfse: '-0.8Δo', classification: 'labile' }, lowSpin: { t2g: 2, eg: 0, cfse: '-0.8Δo', classification: 'labile' } },
  { symbol: 'Cr', charge: 3, dCount: 3, group: 6, period: 4, highSpin: { t2g: 3, eg: 0, cfse: '-1.2Δo', classification: 'inert' }, lowSpin: { t2g: 3, eg: 0, cfse: '-1.2Δo', classification: 'inert' } },
  { symbol: 'Mn', charge: 2, dCount: 5, group: 7, period: 4, highSpin: { t2g: 3, eg: 2, cfse: '0', classification: 'labile' }, lowSpin: { t2g: 5, eg: 0, cfse: '-2.0Δo+2P', classification: 'inert' } },
  { symbol: 'Fe', charge: 3, dCount: 5, group: 8, period: 4, highSpin: { t2g: 3, eg: 2, cfse: '0', classification: 'labile' }, lowSpin: { t2g: 5, eg: 0, cfse: '-2.0Δo+2P', classification: 'inert' } },
  { symbol: 'Fe', charge: 2, dCount: 6, group: 8, period: 5, highSpin: { t2g: 4, eg: 2, cfse: '-0.4Δo', classification: 'labile' }, lowSpin: { t2g: 6, eg: 0, cfse: '-2.4Δo+3P', classification: 'inert' } },
  { symbol: 'Co', charge: 3, dCount: 6, group: 9, period: 4, highSpin: { t2g: 4, eg: 2, cfse: '-0.4Δo', classification: 'labile' }, lowSpin: { t2g: 6, eg: 0, cfse: '-2.4Δo+3P', classification: 'inert' } },
  { symbol: 'Co', charge: 2, dCount: 7, group: 9, period: 5, highSpin: { t2g: 5, eg: 2, cfse: '-0.8Δo', classification: 'labile' }, lowSpin: { t2g: 6, eg: 1, cfse: '-1.8Δo+3P', classification: 'labile' } },
  { symbol: 'Ni', charge: 2, dCount: 8, group: 10, period: 4, highSpin: { t2g: 6, eg: 2, cfse: '-1.2Δo', classification: 'labile' }, lowSpin: { t2g: 6, eg: 2, cfse: '-1.2Δo', classification: 'labile' } },
  { symbol: 'Cu', charge: 2, dCount: 9, group: 11, period: 4, highSpin: { t2g: 6, eg: 3, cfse: '-0.6Δo', classification: 'labile' }, lowSpin: { t2g: 6, eg: 3, cfse: '-0.6Δo', classification: 'labile' } },
  { symbol: 'Zn', charge: 2, dCount: 10, group: 12, period: 4, highSpin: { t2g: 6, eg: 4, cfse: '0', classification: 'labile' }, lowSpin: { t2g: 6, eg: 4, cfse: '0', classification: 'labile' } },
];

export function DBlockPeriodicTable() {
  const [selected, setSelected] = useState<IonData | null>(null);
  const [isLowSpin, setIsLowSpin] = useState(false);

  const config = selected ? (isLowSpin ? selected.lowSpin : selected.highSpin) : null;

  return (
    <div className={styles.container}>
      <div className={styles.tableGrid}>
        {IONS.map((ion, i) => {
          const currentConfig = isLowSpin ? ion.lowSpin : ion.highSpin;
          const isInert = currentConfig.classification === 'inert';
          return (
            <button
              key={i}
              className={`${styles.ionCell} ${isInert ? styles.inert : styles.labile} ${selected === ion ? styles.selected : ''}`}
              onClick={() => setSelected(ion)}
            >
              <span className={styles.ionSymbol}>{ion.symbol}<sup>{ion.charge}+</sup></span>
              <span className={styles.ionD}>d<sup>{ion.dCount}</sup></span>
            </button>
          );
        })}
      </div>

      <div className={styles.controls}>
        <div className={styles.toggleGroup}>
          <button className={`${styles.toggleBtn} ${!isLowSpin ? styles.active : ''}`} onClick={() => setIsLowSpin(false)}>High-Spin</button>
          <button className={`${styles.toggleBtn} ${isLowSpin ? styles.active : ''}`} onClick={() => setIsLowSpin(true)}>Low-Spin</button>
        </div>
        <div className={styles.legendRow}>
          <span className={styles.legendItem}><span className={`${styles.legendDot} ${styles.labileDot}`}></span>Labile</span>
          <span className={styles.legendItem}><span className={`${styles.legendDot} ${styles.inertDot}`}></span>Inert</span>
        </div>
      </div>

      {selected && config && (
        <div className={styles.popup}>
          <h4 className={styles.popupTitle}>{selected.symbol}<sup>{selected.charge}+</sup> — d<sup>{selected.dCount}</sup></h4>
          <div className={styles.orbitalDiagram}>
            <div className={styles.orbitalLevel}>
              <span className={styles.orbitalLabel}>e<sub>g</sub></span>
              <div className={styles.orbitalBoxes}>
                {[0, 1].map(i => (
                  <div key={i} className={styles.orbitalBox}>
                    {i < config.eg ? (config.eg > 2 || (config.eg === 2 && i < 2) ? '↑↓' : '↑') : ''}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.orbitalGap}>
              <LaTeX>{'\\Delta_o'}</LaTeX>
            </div>
            <div className={styles.orbitalLevel}>
              <span className={styles.orbitalLabel}>t<sub>2g</sub></span>
              <div className={styles.orbitalBoxes}>
                {[0, 1, 2].map(i => (
                  <div key={i} className={styles.orbitalBox}>
                    {i < config.t2g ? (config.t2g > 3 && i < config.t2g - 3 ? '↑↓' : '↑') : ''}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.popupInfo}>
            <div>CFSE: <strong><LaTeX>{config.cfse}</LaTeX></strong></div>
            <div className={`${styles.classification} ${config.classification === 'inert' ? styles.classInert : styles.classLabile}`}>
              {config.classification === 'inert' ? '🔴 INERT' : '🟢 LABILE'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
