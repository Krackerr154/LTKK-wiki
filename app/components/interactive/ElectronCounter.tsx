'use client';

import { useState } from 'react';
import styles from './ElectronCounter.module.css';
import { LaTeX } from '../ui/LaTeX';

interface Metal { symbol: string; group: number; ionicE: number; neutralE: number; label: string; }
interface Ligand { name: string; symbol: string; neutralE: number; ionicE: number; charge: number; }

const METALS: Metal[] = [
  { symbol: 'Ti', group: 4, neutralE: 4, ionicE: 4, label: 'Ti (Golongan 4)' },
  { symbol: 'V', group: 5, neutralE: 5, ionicE: 5, label: 'V (Golongan 5)' },
  { symbol: 'Cr', group: 6, neutralE: 6, ionicE: 6, label: 'Cr (Golongan 6)' },
  { symbol: 'Mn', group: 7, neutralE: 7, ionicE: 7, label: 'Mn (Golongan 7)' },
  { symbol: 'Fe', group: 8, neutralE: 8, ionicE: 8, label: 'Fe (Golongan 8)' },
  { symbol: 'Co', group: 9, neutralE: 9, ionicE: 9, label: 'Co (Golongan 9)' },
  { symbol: 'Ni', group: 10, neutralE: 10, ionicE: 10, label: 'Ni (Golongan 10)' },
  { symbol: 'Mo', group: 6, neutralE: 6, ionicE: 6, label: 'Mo (Golongan 6)' },
  { symbol: 'Ru', group: 8, neutralE: 8, ionicE: 8, label: 'Ru (Golongan 8)' },
  { symbol: 'Rh', group: 9, neutralE: 9, ionicE: 9, label: 'Rh (Golongan 9)' },
  { symbol: 'Pd', group: 10, neutralE: 10, ionicE: 10, label: 'Pd (Golongan 10)' },
  { symbol: 'Ir', group: 9, neutralE: 9, ionicE: 9, label: 'Ir (Golongan 9)' },
  { symbol: 'Pt', group: 10, neutralE: 10, ionicE: 10, label: 'Pt (Golongan 10)' },
];

const LIGANDS: Ligand[] = [
  { name: 'CO (karbonil)', symbol: 'CO', neutralE: 2, ionicE: 2, charge: 0 },
  { name: 'PPh₃ (fosfin)', symbol: 'PPh₃', neutralE: 2, ionicE: 2, charge: 0 },
  { name: 'η⁵-Cp (siklopentadienil)', symbol: 'η⁵-Cp', neutralE: 5, ionicE: 6, charge: -1 },
  { name: 'η⁶-C₆H₆ (benzena)', symbol: 'η⁶-arena', neutralE: 6, ionicE: 6, charge: 0 },
  { name: 'Cl⁻ (klorida)', symbol: 'Cl⁻', neutralE: 1, ionicE: 2, charge: -1 },
  { name: 'H⁻ (hidrida)', symbol: 'H⁻', neutralE: 1, ionicE: 2, charge: -1 },
  { name: 'η²-C₂H₄ (etilena)', symbol: 'η²-C₂H₄', neutralE: 2, ionicE: 2, charge: 0 },
  { name: 'CH₃⁻ (metil)', symbol: 'CH₃⁻', neutralE: 1, ionicE: 2, charge: -1 },
  { name: 'NO⁺ (nitrosil)', symbol: 'NO⁺', neutralE: 3, ionicE: 2, charge: 1 },
  { name: 'Ikatan M-M', symbol: 'M-M', neutralE: 1, ionicE: 1, charge: 0 },
];

interface AddedLigand { ligand: Ligand; count: number; }

export function ElectronCounter() {
  const [selectedMetal, setSelectedMetal] = useState<Metal>(METALS[4]); // Fe
  const [addedLigands, setAddedLigands] = useState<AddedLigand[]>([
    { ligand: LIGANDS[2], count: 2 }, // 2x Cp
  ]);
  const [overallCharge, setOverallCharge] = useState(0);
  const [method, setMethod] = useState<'ionic' | 'covalent'>('ionic');

  const addLigand = (lig: Ligand) => {
    const existing = addedLigands.find(a => a.ligand.symbol === lig.symbol);
    if (existing) {
      setAddedLigands(addedLigands.map(a => a.ligand.symbol === lig.symbol ? { ...a, count: a.count + 1 } : a));
    } else {
      setAddedLigands([...addedLigands, { ligand: lig, count: 1 }]);
    }
  };

  const removeLigand = (symbol: string) => {
    setAddedLigands(addedLigands.map(a => a.ligand.symbol === symbol ? { ...a, count: a.count - 1 } : a).filter(a => a.count > 0));
  };

  // Calculate total
  const ligandCharge = addedLigands.reduce((sum, a) => sum + a.ligand.charge * a.count, 0);
  const metalOxState = overallCharge - ligandCharge;
  const metalIonicE = selectedMetal.ionicE - metalOxState;

  let totalE: number;
  if (method === 'ionic') {
    totalE = metalIonicE + addedLigands.reduce((sum, a) => sum + a.ligand.ionicE * a.count, 0);
  } else {
    totalE = selectedMetal.neutralE + addedLigands.reduce((sum, a) => sum + a.ligand.neutralE * a.count, 0) - overallCharge;
  }

  const status = totalE === 18 ? 'stable' : totalE === 16 ? 'allowed' : totalE > 18 ? 'over' : 'under';

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <div className={styles.metalSelect}>
          <label>Logam</label>
          <select value={selectedMetal.symbol} onChange={e => setSelectedMetal(METALS.find(m => m.symbol === e.target.value)!)} className={styles.select}>
            {METALS.map(m => <option key={m.symbol} value={m.symbol}>{m.label}</option>)}
          </select>
        </div>
        <div className={styles.chargeSelect}>
          <label>Muatan Keseluruhan</label>
          <div className={styles.chargeButtons}>
            {[-2, -1, 0, 1, 2, 3].map(c => (
               <button key={c} className={`${styles.chargeBtn} ${overallCharge === c ? styles.activeCharge : ''}`} onClick={() => setOverallCharge(c)}>
                 {c > 0 ? `+${c}` : c}
               </button>
             ))}
          </div>
        </div>
      </div>

      <div className={styles.methodToggle}>
        <button className={`${styles.toggleBtn} ${method === 'ionic' ? styles.activeToggle : ''}`} onClick={() => setMethod('ionic')}>Metode Ionik</button>
        <button className={`${styles.toggleBtn} ${method === 'covalent' ? styles.activeToggle : ''}`} onClick={() => setMethod('covalent')}>Metode Kovalen</button>
      </div>

      <div className={styles.ligandDrawer}>
        <p className={styles.drawerLabel}>Tambahkan Ligan:</p>
        <div className={styles.ligandGrid}>
          {LIGANDS.map(l => (
            <button key={l.symbol} className={styles.ligandBtn} onClick={() => addLigand(l)}>
              <span>{l.symbol}</span>
              <span className={styles.eCount}>{method === 'ionic' ? l.ionicE : l.neutralE}e⁻</span>
            </button>
          ))}
        </div>
      </div>

      {addedLigands.length > 0 && (
        <div className={styles.addedList}>
          <p className={styles.drawerLabel}>Ligan Saat Ini:</p>
          {addedLigands.map(a => (
            <div key={a.ligand.symbol} className={styles.addedItem}>
              <span>{a.count}× {a.ligand.symbol}</span>
              <span className={styles.addedE}>{(method === 'ionic' ? a.ligand.ionicE : a.ligand.neutralE) * a.count}e⁻</span>
              <button className={styles.removeBtn} onClick={() => removeLigand(a.ligand.symbol)}>−</button>
            </div>
          ))}
        </div>
      )}

      <div className={`${styles.result} ${styles[status]}`}>
        <div className={styles.resultBreakdown}>
          <div>{method === 'ionic' ? `${selectedMetal.symbol}(${metalOxState >= 0 ? '+' : ''}${metalOxState}): ${metalIonicE}e⁻` : `${selectedMetal.symbol}⁰: ${selectedMetal.neutralE}e⁻`}</div>
          <div>+ Ligan: {addedLigands.reduce((sum, a) => sum + (method === 'ionic' ? a.ligand.ionicE : a.ligand.neutralE) * a.count, 0)}e⁻</div>
          {method === 'covalent' && overallCharge !== 0 && <div>− Koreksi muatan: {overallCharge}e⁻</div>}
        </div>
        <div className={styles.resultTotal}>
          <span className={styles.totalLabel}>Total</span>
          <span className={styles.totalValue}>{totalE}e⁻</span>
        </div>
        <div className={styles.statusBadge}>
          {status === 'stable' && '✅ 18e⁻ — Stabil (kulit tertutup)'}
          {status === 'allowed' && '🟡 16e⁻ — Stabil untuk square planar d⁸'}
          {status === 'over' && `⚠️ ${totalE}e⁻ — Elektron anti-ikatan terisi`}
          {status === 'under' && `🔵 ${totalE}e⁻ — Kekurangan elektron (reaktif)`}
        </div>
      </div>
    </div>
  );
}
