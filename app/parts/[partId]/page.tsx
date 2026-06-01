import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { WIKI_PARTS, getPart } from '../../../lib/modules';
import { PartIndex } from '../../components/ui/PartIndex';
import styles from './page.module.css';

export function generateStaticParams() {
  return WIKI_PARTS.map((p) => ({ partId: p.id }));
}

export default async function PartPage({ params }: { params: Promise<{ partId: string }> }) {
  const { partId } = await params;
  const part = getPart(partId);
  if (!part) notFound();

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Pilih Bagian Lain</span>
          </Link>
          <div className={styles.partLabel}>{part.label}</div>
          <h1 className={styles.title}>{part.title}</h1>
          <p className={styles.subtitle}>{part.subtitle}</p>
        </div>
      </header>
      <div className={styles.content}>
        <PartIndex part={part} />
      </div>
    </main>
  );
}
