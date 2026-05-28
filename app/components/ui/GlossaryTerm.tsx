'use client';

import { useState } from 'react';
import { glossaryData } from '../../../lib/glossary';
import { Info } from 'lucide-react';
import styles from './GlossaryTerm.module.css';

interface GlossaryTermProps {
  termId: string;
  children: React.ReactNode;
}

export function GlossaryTerm({ termId, children }: GlossaryTermProps) {
  const [isOpen, setIsOpen] = useState(false);
  const termData = glossaryData.find(t => t.id === termId);

  if (!termData) {
    return <span className={styles.unknown}>{children}</span>;
  }

  return (
    <span 
      className={styles.container}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className={styles.text}>{children}</span>
      
      {isOpen && (
        <div className={styles.tooltip}>
          <div className={styles.tooltipHeader}>
            <Info size={14} className={styles.icon} />
            <span className={styles.tooltipTerm}>{termData.term}</span>
          </div>
          <div className={styles.tooltipBody}>
            {termData.definition}
          </div>
        </div>
      )}
    </span>
  );
}
