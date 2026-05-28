import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from './page.module.css';

export default async function ModulePage({ params }: { params: Promise<{ moduleId: string }> }) {
  // We need to await params in Next.js 15+
  const resolvedParams = await params;
  const moduleId = resolvedParams.moduleId;
  const block = moduleId.charAt(0).toUpperCase();

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Back to Course</span>
          </Link>
          <div className={styles.moduleCode}>Module {moduleId.toUpperCase()}</div>
          <h1 className={styles.title}>Placeholder for {moduleId.toUpperCase()}</h1>
        </div>
      </header>
      <div className={styles.content}>
        <p>This is a placeholder page for Module {moduleId.toUpperCase()}.</p>
        <p>Block: {block}</p>
        {/* We will implement the ModuleLayout here in Phase 2 */}
      </div>
    </main>
  );
}
