'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Lock, Layers } from 'lucide-react';
import { WIKI_PARTS } from '../../../lib/modules';
import styles from './PartSelector.module.css';

export function PartSelector() {
  const prefersReduced = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: prefersReduced ? 0 : 0.1 } },
  };
  const item = prefersReduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] as const } },
      };

  return (
    <motion.div className={styles.grid} variants={container} initial="hidden" animate="show">
      {WIKI_PARTS.map((part) => {
        const moduleCount = part.sections.reduce((n, s) => n + s.articles.length, 0);
        const isAvailable = part.status === 'available';
        const accentClass =
          part.accent === 'a' ? styles.accentA : part.accent === 'b' ? styles.accentB : styles.accentC;

        const card = (
          <>
            <div className={styles.cardTop}>
              <span className={`${styles.partLabel} ${accentClass}`}>{part.label}</span>
              {isAvailable ? (
                <span className={`${styles.status} ${styles.statusReady}`}>Tersedia</span>
              ) : (
                <span className={`${styles.status} ${styles.statusSoon}`}>
                  <Lock size={11} /> Segera Hadir
                </span>
              )}
            </div>
            <h3 className={styles.partTitle}>{part.title}</h3>
            <p className={styles.partSubtitle}>{part.subtitle}</p>
            <p className={styles.partDesc}>{part.description}</p>
            <div className={styles.cardFooter}>
              <span className={styles.moduleCount}>
                <Layers size={14} /> {moduleCount} modul
              </span>
              {isAvailable ? (
                <span className={styles.cta}>
                  Mulai belajar <ArrowRight size={15} />
                </span>
              ) : (
                <span className={styles.ctaMuted}>Lihat garis besar</span>
              )}
            </div>
          </>
        );

        return (
          <motion.div key={part.id} variants={item}>
            <Link
              href={`/parts/${part.id}`}
              className={`${styles.card} ${accentClass} ${!isAvailable ? styles.cardSoon : ''}`}
            >
              {card}
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
