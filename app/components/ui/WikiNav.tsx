'use client';

import Link from 'next/link';
import { Home, BookOpen, Layers } from 'lucide-react';
import { getPart } from '../../../lib/modules';
import styles from './WikiNav.module.css';

/**
 * Persistent module navigation: lists every article in the current part
 * grouped by section and marks the active one. Rendered in the sidebar of
 * each article so readers can jump anywhere within the part.
 */
export function WikiNav({ activeId, partId = '3' }: { activeId?: string; partId?: string }) {
  const part = getPart(partId);
  if (!part) return null;

  return (
    <nav className={styles.nav} aria-label="Navigasi modul">
      <Link href="/" className={styles.homeLink}>
        <Home size={15} />
        <span>Pilih Bagian</span>
      </Link>
      <Link href={`/parts/${part.id}`} className={styles.homeLink}>
        <Layers size={15} />
        <span>{part.label}: {part.title}</span>
      </Link>
      {part.sections.map((section) => (
        <div key={section.block} className={styles.group}>
          <div className={`${styles.groupTitle} ${section.block === 'A' ? styles.blockA : styles.blockB}`}>
            {section.title}
          </div>
          <ul className={styles.list}>
            {section.articles.map((a) => {
              const content = (
                <>
                  <span className={styles.itemCode}>{a.code}</span>
                  <span className={styles.itemTitle}>{a.title}</span>
                </>
              );
              if (!a.available) {
                return (
                  <li key={a.id}>
                    <span className={`${styles.item} ${styles.itemDisabled}`} aria-disabled="true">
                      {content}
                    </span>
                  </li>
                );
              }
              return (
                <li key={a.id}>
                  <Link
                    href={`/modules/${a.id}`}
                    className={`${styles.item} ${a.id === activeId ? styles.active : ''}`}
                    aria-current={a.id === activeId ? 'page' : undefined}
                  >
                    {content}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <Link href="/glossary" className={styles.glossaryLink}>
        <BookOpen size={15} />
        <span>Glosarium</span>
      </Link>
    </nav>
  );
}
