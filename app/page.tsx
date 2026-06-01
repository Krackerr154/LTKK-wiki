import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { PartSelector } from './components/ui/PartSelector';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h2 className={styles.courseCode}>KI 3231</h2>
          <h1 className={styles.title}>
            <span className={styles.gradientText}>Logam Transisi</span>
            <br />& Kimia Kompleks
          </h1>
          <p className={styles.subtitle}>
            Referensi interaktif untuk mata kuliah KI 3231. Pilih bagian yang ingin kamu pelajari
            untuk mulai menjelajah.
          </p>
        </div>
        <div className={styles.heroBackground}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
      </header>

      <div className={styles.content}>
        <PartSelector />

        <div className={styles.glossaryLink}>
          <Link href="/glossary" className={styles.glossaryBtn}>
            <BookOpen size={18} />
            <span>Lihat Glosarium Lengkap</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
