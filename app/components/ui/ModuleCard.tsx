import Link from 'next/link';
import { ArrowRight, Lock } from 'lucide-react';
import { ArticleGlyph } from './ArticleGlyph';
import type { ArticleGlyph as GlyphKind } from '../../../lib/modules';
import styles from './ModuleCard.module.css';

interface ModuleCardProps {
  id: string;
  title: string;
  code: string;
  block: 'A' | 'B';
  summary?: string;
  tags?: string[];
  glyph?: GlyphKind;
  available?: boolean;
}

export function ModuleCard({ id, title, code, block, summary, tags, glyph, available = true }: ModuleCardProps) {
  const blockClass = block === 'A' ? styles.blockA : styles.blockB;
  const glyphColor = block === 'A' ? '#60a5fa' : '#c084fc';

  const inner = (
    <>
      <div className={styles.top}>
        {glyph && (
          <span className={styles.thumb} aria-hidden>
            <ArticleGlyph kind={glyph} color={glyphColor} />
          </span>
        )}
        <span className={styles.code}>{code}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      {summary && <p className={styles.summary}>{summary}</p>}
      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
      )}
      <div className={styles.footer}>
        {available ? (
          <span className={styles.readLink}>
            Baca artikel <ArrowRight size={14} />
          </span>
        ) : (
          <span className={styles.soonLink}>
            <Lock size={13} /> Segera hadir
          </span>
        )}
      </div>
    </>
  );

  if (!available) {
    return (
      <div className={`${styles.card} ${blockClass} ${styles.cardSoon}`} aria-disabled="true">
        {inner}
      </div>
    );
  }

  return (
    <Link href={`/modules/${id}`} className={`${styles.card} ${blockClass}`}>
      {inner}
    </Link>
  );
}
