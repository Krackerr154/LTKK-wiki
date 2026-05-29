import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { ModuleCard } from './components/ui/ModuleCard';
import { ProgressTracker } from './components/ui/ProgressTracker';
import styles from './page.module.css';

export default function Home() {
  const blockAModules = [
    { id: 'a1', code: 'A1', title: 'Dasar-dasar Kinetika', isLocked: false },
    { id: 'a2', code: 'A2', title: 'Kompleks Labil dan Lembam', isLocked: false },
    { id: 'a3', code: 'A3', title: 'Mekanisme Substitusi: D, A, dan I', isLocked: false },
    { id: 'a4', code: 'A4', title: 'Parameter Aktivasi', isLocked: false },
    { id: 'a5', code: 'A5', title: 'Substitusi pada Kompleks Bujur Sangkar', isLocked: false },
    { id: 'a6', code: 'A6', title: 'Substitusi pada Kompleks Oktahedral', isLocked: false },
    { id: 'a7', code: 'A7', title: 'Reaksi Transfer Elektron', isLocked: false },
  ];

  const blockBModules = [
    { id: 'b1', code: 'B1', title: 'Karakteristik Umum dan Sejarah', isLocked: false },
    { id: 'b2', code: 'B2', title: 'Ligan dan Tata Nama', isLocked: false },
    { id: 'b3', code: 'B3', title: 'Aturan 18 Elektron', isLocked: false },
    { id: 'b4', code: 'B4', title: 'Senyawa Karbonil Logam', isLocked: false },
    { id: 'b5', code: 'B5', title: 'Metalosena dan Senyawa Sandwich', isLocked: false },
    { id: 'b6', code: 'B6', title: 'Katalisis Organologam', isLocked: false },
  ];

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
            Modul interaktif untuk menguasai mekanisme reaksi dan organologam.
          </p>
        </div>
        <div className={styles.heroBackground}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.trackers}>
          <ProgressTracker block="A" total={7} label="Progres Blok A" />
          <ProgressTracker block="B" total={6} label="Progres Blok B" />
        </div>

        <div className={styles.grid}>
          <section className={styles.blockSection}>
            <div className={styles.blockHeader}>
              <h3 className={styles.blockTitle}>Blok A</h3>
              <p className={styles.blockDesc}>Mekanisme Reaksi</p>
            </div>
            <div className={styles.moduleList}>
              {blockAModules.map((mod) => (
                <ModuleCard
                  key={mod.id}
                  id={mod.id}
                  code={mod.code}
                  title={mod.title}
                  isLocked={mod.isLocked}
                  block="A"
                />
              ))}
            </div>
          </section>

          <section className={styles.blockSection}>
            <div className={styles.blockHeader}>
              <h3 className={styles.blockTitle}>Blok B</h3>
              <p className={styles.blockDesc}>Organologam</p>
            </div>
            <div className={styles.moduleList}>
              {blockBModules.map((mod) => (
                <ModuleCard
                  key={mod.id}
                  id={mod.id}
                  code={mod.code}
                  title={mod.title}
                  isLocked={mod.isLocked}
                  block="B"
                />
              ))}
            </div>
          </section>
        </div>

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
