import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import styles from './ConnectionLinks.module.css';

interface ConnectionItem {
  label: string;
  moduleId: string;
  moduleTitle: string;
}

interface ConnectionLinksProps {
  buildsOn?: ConnectionItem[];
  feedsInto?: ConnectionItem[];
}

/**
 * Displays cross-module navigation links at the bottom of each module page.
 */
export function ConnectionLinks({ buildsOn, feedsInto }: ConnectionLinksProps) {
  return (
    <div className={styles.container}>
      {buildsOn && buildsOn.length > 0 && (
        <div className={styles.group}>
          <span className={styles.label}>Prasyarat</span>
          <div className={styles.links}>
            {buildsOn.map((item) => (
              <Link key={item.moduleId} href={`/modules/${item.moduleId}`} className={styles.link}>
                <ArrowLeft size={14} />
                <span className={styles.linkCode}>{item.label}</span>
                <span className={styles.linkTitle}>{item.moduleTitle}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
      {feedsInto && feedsInto.length > 0 && (
        <div className={styles.group}>
          <span className={styles.label}>Topik Lanjutan</span>
          <div className={styles.links}>
            {feedsInto.map((item) => (
              <Link key={item.moduleId} href={`/modules/${item.moduleId}`} className={styles.link}>
                <span className={styles.linkCode}>{item.label}</span>
                <span className={styles.linkTitle}>{item.moduleTitle}</span>
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
