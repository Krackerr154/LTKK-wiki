'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import styles from './TabbedExplorer.module.css';

export interface ExplorerTab {
  label: string;
  /** optional small color swatch shown on the tab + panel */
  color?: string;
  heading?: ReactNode;
  body: ReactNode;
}

/**
 * Generic tabbed panel used for descriptive-chemistry comparisons,
 * reaction-type galleries, and step explorers. Pure presentation.
 */
export function TabbedExplorer({ tabs }: { tabs: ExplorerTab[] }) {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <div className={styles.container}>
      <div className={styles.tabs} role="tablist">
        {tabs.map((t, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            className={`${styles.tab} ${i === active ? styles.active : ''}`}
            onClick={() => setActive(i)}
            style={i === active && t.color ? { borderColor: t.color, color: t.color } : undefined}
          >
            {t.color && <span className={styles.swatch} style={{ background: t.color }} />}
            {t.label}
          </button>
        ))}
      </div>
      <div className={styles.panel} role="tabpanel">
        {current.heading && (
          <h4 className={styles.heading} style={current.color ? { color: current.color } : undefined}>
            {current.heading}
          </h4>
        )}
        <div className={styles.body}>{current.body}</div>
      </div>
    </div>
  );
}
