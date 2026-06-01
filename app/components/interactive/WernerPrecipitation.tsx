'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WernerPrecipitation.module.css';

interface WernerComplex {
  id: string;
  formula: string;
  inner: string;      // inner-sphere description
  innerCl: number;    // chloride bound inside (non-ionizable)
  outerCl: number;    // chloride outside (precipitates as AgCl)
  oxState: string;
  cn: number;
}

const COMPLEXES: WernerComplex[] = [
  { id: 'c3', formula: '[Co(NH₃)₆]Cl₃', inner: '6 × NH₃', innerCl: 0, outerCl: 3, oxState: '+3', cn: 6 },
  { id: 'c2', formula: '[Co(NH₃)₅Cl]Cl₂', inner: '5 × NH₃, 1 × Cl⁻', innerCl: 1, outerCl: 2, oxState: '+3', cn: 6 },
  { id: 'c1', formula: '[Co(NH₃)₄Cl₂]Cl', inner: '4 × NH₃, 2 × Cl⁻', innerCl: 2, outerCl: 1, oxState: '+3', cn: 6 },
  { id: 'c0', formula: '[Co(NH₃)₃Cl₃]', inner: '3 × NH₃, 3 × Cl⁻', innerCl: 3, outerCl: 0, oxState: '+3', cn: 6 },
];

export function WernerPrecipitation() {
  const [selected, setSelected] = useState(0);
  const [added, setAdded] = useState(false);
  const complex = COMPLEXES[selected];

  const pick = (i: number) => {
    setSelected(i);
    setAdded(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.picker}>
        {COMPLEXES.map((c, i) => (
          <button
            key={c.id}
            className={`${styles.pickBtn} ${selected === i ? styles.active : ''}`}
            onClick={() => pick(i)}
          >
            {c.formula}
          </button>
        ))}
      </div>

      <div className={styles.stage}>
        {/* Inner sphere */}
        <div className={styles.complexCore}>
          <div className={styles.metal}>Co<sup>{complex.oxState}</sup></div>
          <div className={styles.innerLabel}>{complex.inner}</div>
          <div className={styles.cnBadge}>CN = {complex.cn}</div>
        </div>

        {/* Outer-sphere chlorides */}
        <div className={styles.outerSphere}>
          <span className={styles.outerLabel}>Bola luar (ionisasi)</span>
          <div className={styles.ionRow}>
            {Array.from({ length: complex.outerCl }).map((_, i) => (
              <AnimatePresence key={i} mode="wait">
                {!added ? (
                  <motion.span
                    key="cl"
                    className={styles.clIon}
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Cl⁻
                  </motion.span>
                ) : (
                  <motion.span
                    key="agcl"
                    className={styles.agcl}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.12 }}
                  >
                    AgCl↓
                  </motion.span>
                )}
              </AnimatePresence>
            ))}
            {complex.outerCl === 0 && <span className={styles.noneLabel}>tidak ada</span>}
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <button
          className={styles.addBtn}
          onClick={() => setAdded(true)}
          disabled={added}
        >
          + Tambahkan AgNO₃ berlebih
        </button>
        <button className={styles.resetBtn} onClick={() => setAdded(false)} disabled={!added}>
          Reset
        </button>
      </div>

      <div className={`${styles.result} ${added ? styles.resultShown : ''}`}>
        {added ? (
          <p>
            Mengendap <strong>{complex.outerCl} mol AgCl</strong> per mol kompleks. Hanya{' '}
            {complex.outerCl} ion Cl⁻ di bola luar yang terionisasi; {complex.innerCl} Cl⁻ di bola
            dalam terikat erat ke logam dan <strong>tidak</strong> mengendap.
          </p>
        ) : (
          <p>Tekan tombol untuk menambahkan AgNO₃ dan lihat berapa mol AgCl yang mengendap.</p>
        )}
      </div>
    </div>
  );
}
