'use client';

import { useProgress } from '../../../lib/progress';
import styles from './ProgressTracker.module.css';

interface ProgressTrackerProps {
  block: 'A' | 'B';
  total: number;
  label: string;
}

export function ProgressTracker({ block, total, label }: ProgressTrackerProps) {
  const { completedModules } = useProgress();
  
  // Count how many modules in the specified block are completed
  const completedCount = completedModules.filter(id => 
    id.toLowerCase().startsWith(block.toLowerCase())
  ).length;

  const percentage = Math.round((completedCount / total) * 100);
  
  const blockClass = block === 'A' ? styles.blockA : styles.blockB;

  return (
    <div className={`${styles.tracker} ${blockClass}`}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <span className={styles.count}>{completedCount} / {total}</span>
      </div>
      <div className={styles.barContainer}>
        <div 
          className={styles.barFill} 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
