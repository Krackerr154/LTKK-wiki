'use client';

import { LaTeX } from './LaTeX';
import styles from './EquationBlock.module.css';

interface Variable {
  symbol: string;
  definition: string;
}

interface EquationBlockProps {
  latex: string;
  label?: string;
  variables?: Variable[];
}

/**
 * Renders a display-mode equation with an optional label and variable definitions.
 */
export function EquationBlock({ latex, label, variables }: EquationBlockProps) {
  return (
    <div className={styles.block}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.equation}>
        <LaTeX display>{latex}</LaTeX>
      </div>
      {variables && variables.length > 0 && (
        <div className={styles.variables}>
          <span className={styles.whereLabel}>Where:</span>
          <ul className={styles.variableList}>
            {variables.map((v, i) => (
              <li key={i} className={styles.variableItem}>
                <LaTeX>{v.symbol}</LaTeX>
                <span className={styles.variableDef}> — {v.definition}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
