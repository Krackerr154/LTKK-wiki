'use client';

import React, { useState } from 'react';
import styles from './ModuleLayout.module.css';
import { BookOpen, Calculator, Lightbulb, AlertTriangle, Puzzle, HelpCircle, Link2, Menu, X } from 'lucide-react';
import { WikiNav } from './WikiNav';

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
  partId?: string;
  articleId?: string;
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

type SectionComponent = (props: { children: React.ReactNode }) => React.JSX.Element;

function withSectionId(component: SectionComponent, id: string): SectionComponent & { sectionId: string } {
  const tagged = component as SectionComponent & { sectionId: string };
  tagged.sectionId = id;
  return tagged;
}

export const ConceptOverview = withSectionId(function ConceptOverview({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="concept-overview" title="Ringkasan Konsep" icon={<BookOpen size={20} />}>
      {children}
    </SectionWrapper>
  );
}, 'concept-overview');

export const KeyEquations = withSectionId(function KeyEquations({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="key-equations" title="Persamaan Utama" icon={<Calculator size={20} />}>
      {children}
    </SectionWrapper>
  );
}, 'key-equations');

export const WorkedExamples = withSectionId(function WorkedExamples({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="worked-examples" title="Contoh Soal" icon={<Lightbulb size={20} />}>
      {children}
    </SectionWrapper>
  );
}, 'worked-examples');

export const Misconceptions = withSectionId(function Misconceptions({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="misconceptions" title="Miskonsepsi Umum" icon={<AlertTriangle size={20} />}>
      {children}
    </SectionWrapper>
  );
}, 'misconceptions');

export const InteractiveVisual = withSectionId(function InteractiveVisual({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="interactive-visual" title="Visual Interaktif" icon={<Puzzle size={20} />}>
      {children}
    </SectionWrapper>
  );
}, 'interactive-visual');

export const FormativeQuiz = withSectionId(function FormativeQuiz({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="formative-quiz" title="Kuis Formatif" icon={<HelpCircle size={20} />}>
      {children}
    </SectionWrapper>
  );
}, 'formative-quiz');

export const Connections = withSectionId(function Connections({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper id="connections" title="Topik Terkait" icon={<Link2 size={20} />}>
      {children}
    </SectionWrapper>
  );
}, 'connections');

const SECTION_NAV = [
  { id: 'concept-overview', label: 'Ringkasan' },
  { id: 'key-equations', label: 'Persamaan' },
  { id: 'worked-examples', label: 'Contoh' },
  { id: 'misconceptions', label: 'Miskonsepsi' },
  { id: 'interactive-visual', label: 'Interaktif' },
  { id: 'formative-quiz', label: 'Kuis' },
  { id: 'connections', label: 'Topik Terkait' },
] as const;

export function ModuleLayout({ moduleCode, moduleTitle, block, partId = '3', articleId: articleIdProp, children }: ModuleLayoutProps) {
  const blockClass = block === 'A' ? styles.blockA : styles.blockB;
  const [navOpen, setNavOpen] = useState(false);

  // Extract article id from moduleCode (e.g., "Modul A1" -> "a1") unless given explicitly.
  const articleId = articleIdProp ?? moduleCode.replace(/^Modul\s+/i, '').toLowerCase();

  // Determine which sections are actually rendered so the table of contents
  // only lists entries that exist on this page (e.g. A4 omits "Contoh").
  // Match on a static `sectionId` tag rather than function identity, which
  // is fragile across bundling/HMR boundaries.
  const presentIds = new Set(
    React.Children.toArray(children)
      .map((child) => {
        if (!React.isValidElement(child)) return null;
        const type = child.type as { sectionId?: string };
        return type?.sectionId ?? null;
      })
      .filter((id): id is string => Boolean(id))
  );
  const sectionNav = SECTION_NAV.filter((item) => presentIds.has(item.id));

  const scrollTo = (id: string) => {
    setNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.layout}>
      <button
        type="button"
        className={styles.navToggle}
        onClick={() => setNavOpen((v) => !v)}
        aria-expanded={navOpen}
        aria-controls="module-sidebar"
      >
        {navOpen ? <X size={16} /> : <Menu size={16} />}
        <span>{navOpen ? 'Tutup navigasi' : 'Navigasi & daftar isi'}</span>
      </button>
      <aside id="module-sidebar" className={`${styles.sidebar} ${navOpen ? styles.sidebarOpen : ''}`}>
        <WikiNav activeId={articleId} partId={partId} />
        <div className={styles.tocBlock}>
          <div className={styles.tocLabel}>Di halaman ini</div>
          <nav className={styles.sidebarNav}>
            {sectionNav.map((item) => (
              <button
                key={item.id}
                className={styles.navItem}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>
      <div className={styles.mainContent}>
        <div className={styles.moduleHeader}>
          <span className={`${styles.moduleCodeBadge} ${blockClass}`}>{moduleCode}</span>
          <h1 className={styles.moduleTitle}>{moduleTitle}</h1>
        </div>
        {children}
      </div>
    </div>
  );
}
