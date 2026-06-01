'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ModuleCard } from './ModuleCard';
import { WikiSearch } from './WikiSearch';
import type { WikiPart } from '../../../lib/modules';
import styles from './PartIndex.module.css';

/**
 * Renders a single part's article index: an optional search (only for parts
 * whose articles are built) plus the section grids with staggered entrance.
 */
export function PartIndex({ part }: { part: WikiPart }) {
  const prefersReduced = useReducedMotion();
  const isAvailable = part.status === 'available';

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: prefersReduced ? 0 : 0.06 } },
  };
  const item = prefersReduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
      };

  return (
    <div className={styles.wrapper}>
      {isAvailable ? (
        <WikiSearch />
      ) : (
        <div className={styles.notice}>
          Konten bagian ini sedang disiapkan. Berikut garis besar modul yang akan tersedia.
        </div>
      )}

      <div className={styles.sections}>
        {part.sections.map((section) => (
          <section key={section.block} className={styles.blockSection}>
            <div className={styles.blockHeader}>
              <h3 className={styles.blockTitle}>{section.title}</h3>
              <p className={styles.blockDesc}>{section.description}</p>
            </div>
            <motion.div
              className={styles.moduleList}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {section.articles.map((mod) => (
                <motion.div key={mod.id} variants={item}>
                  <ModuleCard
                    id={mod.id}
                    code={mod.code}
                    title={mod.title}
                    block={mod.block}
                    summary={mod.summary}
                    tags={mod.tags}
                    glyph={mod.glyph}
                    available={mod.available}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
}
