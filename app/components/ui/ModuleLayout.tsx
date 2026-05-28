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
    <SectionWrapper id="concept-overview" title="Concept Overview" icon={<BookOpen size={20} />}>
      {children}
    </SectionWrapper>
  );
}

export function KeyEquations({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="key-equations" title="Key Equations" icon={<Calculator size={20} />}>
      {children}
    </SectionWrapper>
  );
}

export function WorkedExamples({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="worked-examples" title="Worked Examples" icon={<Lightbulb size={20} />}>
      {children}
    </SectionWrapper>
  );
}

export function Misconceptions({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="misconceptions" title="Common Misconceptions" icon={<AlertTriangle size={20} />}>
      {children}
    </SectionWrapper>
  );
}

export function InteractiveVisual({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="interactive-visual" title="Interactive Visual" icon={<Puzzle size={20} />}>
      {children}
    </SectionWrapper>
  );
}

export function FormativeQuiz({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="formative-quiz" title="Formative Quiz" icon={<HelpCircle size={20} />}>
      {children}
    </SectionWrapper>
  );
}

export function Connections({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="connections" title="Connections" icon={<Link2 size={20} />}>
      {children}
    </SectionWrapper>
  );
}

const SECTION_NAV = [
  { id: 'concept-overview', label: 'Overview' },
  { id: 'key-equations', label: 'Equations' },
  { id: 'worked-examples', label: 'Examples' },
  { id: 'misconceptions', label: 'Misconceptions' },
  { id: 'interactive-visual', label: 'Interactive' },
  { id: 'formative-quiz', label: 'Quiz' },
  { id: 'connections', label: 'Connections' },
];

export function ModuleLayout({ moduleCode, moduleTitle, block, children }: ModuleLayoutProps) {
  const blockClass = block === 'A' ? styles.blockA : styles.blockB;
  
  // Extract module id from moduleCode (e.g., "Module A1" -> "a1")
  const moduleId = moduleCode.replace(/^Module\s+/i, '').toLowerCase();
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
              <span>Module Completed</span>
            </div>
          ) : (
            <button className={`${styles.completeBtn} ${blockClass}`} onClick={handleMarkComplete}>
              <CheckCircle size={18} />
              <span>Mark Module as Complete</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

