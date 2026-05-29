'use client';

import React from 'react';
import styles from './ModuleLayout.module.css';
import { BookOpen, Calculator, Lightbulb, AlertTriangle, Puzzle, HelpCircle, Link2, CheckCircle } from 'lucide-react';
import { useProgress, markModuleComplete } from '../../../lib/progress';

interface ModuleSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

interface ModuleLayoutProps {
  moduleCode: string;
  moduleTitle: string;
  block: 'A' | 'B';
  children: React.ReactNode;
}

export function SectionWrapper({ id, title, icon, children }: ModuleSection) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionIcon}>{icon}</span>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <div className={styles.sectionContent}>
        {children}
      </div>
    </section>
  );
}

export function ConceptOverview({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="concept-overview" title="Ringkasan Konsep" icon={<BookOpen size={20} />}>
      {children}
    </SectionWrapper>
  );
}

export function KeyEquations({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="key-equations" title="Persamaan Utama" icon={<Calculator size={20} />}>
      {children}
    </SectionWrapper>
  );
}

export function WorkedExamples({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="worked-examples" title="Contoh Soal" icon={<Lightbulb size={20} />}>
      {children}
    </SectionWrapper>
  );
}

export function Misconceptions({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="misconceptions" title="Miskonsepsi Umum" icon={<AlertTriangle size={20} />}>
      {children}
    </SectionWrapper>
  );
}

export function InteractiveVisual({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="interactive-visual" title="Visual Interaktif" icon={<Puzzle size={20} />}>
      {children}
    </SectionWrapper>
  );
}

export function FormativeQuiz({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="formative-quiz" title="Kuis Formatif" icon={<HelpCircle size={20} />}>
      {children}
    </SectionWrapper>
  );
}

export function Connections({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="connections" title="Koneksi" icon={<Link2 size={20} />}>
      {children}
    </SectionWrapper>
  );
}

const SECTION_NAV = [
  { id: 'concept-overview', label: 'Ringkasan' },
  { id: 'key-equations', label: 'Persamaan' },
  { id: 'worked-examples', label: 'Contoh' },
  { id: 'misconceptions', label: 'Miskonsepsi' },
  { id: 'interactive-visual', label: 'Interaktif' },
  { id: 'formative-quiz', label: 'Kuis' },
  { id: 'connections', label: 'Koneksi' },
];

export function ModuleLayout({ moduleCode, moduleTitle, block, children }: ModuleLayoutProps) {
  const blockClass = block === 'A' ? styles.blockA : styles.blockB;
  
  // Extract module id from moduleCode (e.g., "Modul A1" -> "a1")
  const moduleId = moduleCode.replace(/^Modul\s+/i, '').toLowerCase();
  const { completedModules } = useProgress();
  const isCompleted = completedModules.includes(moduleId);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleMarkComplete = () => {
    markModuleComplete(moduleId);
  };

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <nav className={styles.sidebarNav}>
          <div className={`${styles.sidebarLabel} ${blockClass}`}>
            {moduleCode}
          </div>
          {SECTION_NAV.map((item) => (
            <button
              key={item.id}
              className={styles.navItem}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
      <div className={styles.mainContent}>
        <div className={styles.moduleHeader}>
          <span className={`${styles.moduleCodeBadge} ${blockClass}`}>{moduleCode}</span>
          <h1 className={styles.moduleTitle}>{moduleTitle}</h1>
        </div>
        {children}

        {/* Mark Complete */}
        <div className={styles.completeSection}>
          {isCompleted ? (
            <div className={styles.completedBadge}>
              <CheckCircle size={20} />
              <span>Modul Selesai</span>
            </div>
          ) : (
            <button className={`${styles.completeBtn} ${blockClass}`} onClick={handleMarkComplete}>
              <CheckCircle size={18} />
              <span>Tandai Modul Selesai</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

