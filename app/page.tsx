import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { ModuleCard } from './components/ui/ModuleCard';
import { ProgressTracker } from './components/ui/ProgressTracker';
import styles from './page.module.css';

export default function Home() {
  const blockAModules = [
    { id: 'a1', code: 'A1', title: 'Kinetics Foundations', isLocked: false },
    { id: 'a2', code: 'A2', title: 'Labile and Inert Complexes', isLocked: false },
    { id: 'a3', code: 'A3', title: 'Substitution Mechanisms: D, A, and I', isLocked: false },
    { id: 'a4', code: 'A4', title: 'Activation Parameters', isLocked: false },
    { id: 'a5', code: 'A5', title: 'Substitution in Square Planar Complexes', isLocked: false },
    { id: 'a6', code: 'A6', title: 'Substitution in Octahedral Complexes', isLocked: false },
    { id: 'a7', code: 'A7', title: 'Electron Transfer Reactions', isLocked: false },
  ];

  const blockBModules = [
    { id: 'b1', code: 'B1', title: 'General Characteristics and History', isLocked: false },
    { id: 'b2', code: 'B2', title: 'Ligands and Nomenclature', isLocked: false },
    { id: 'b3', code: 'B3', title: 'The 18-Electron Rule', isLocked: false },
    { id: 'b4', code: 'B4', title: 'Metal Carbonyl Compounds', isLocked: false },
    { id: 'b5', code: 'B5', title: 'Metallocenes and Sandwich Compounds', isLocked: false },
    { id: 'b6', code: 'B6', title: 'Organometallic Catalysis', isLocked: false },
  ];

  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h2 className={styles.courseCode}>KI 3231</h2>
          <h1 className={styles.title}>
            <span className={styles.gradientText}>Transition Metals</span>
            <br />& Complex Chemistry
          </h1>
          <p className={styles.subtitle}>
            Interactive modules for mastering reaction mechanisms and organometallics.
          </p>
        </div>
        <div className={styles.heroBackground}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.trackers}>
          <ProgressTracker block="A" total={7} label="Block A Progress" />
          <ProgressTracker block="B" total={6} label="Block B Progress" />
        </div>

        <div className={styles.grid}>
          <section className={styles.blockSection}>
            <div className={styles.blockHeader}>
              <h3 className={styles.blockTitle}>Block A</h3>
              <p className={styles.blockDesc}>Reaction Mechanisms</p>
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
              <h3 className={styles.blockTitle}>Block B</h3>
              <p className={styles.blockDesc}>Organometallics</p>
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
            <span>View Full Glossary</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
