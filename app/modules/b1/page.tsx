'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import pageStyles from '../[moduleId]/page.module.css';

const TIMELINE = [
  { year: 1827, title: "Zeise's Salt", desc: 'William Zeise synthesizes K[PtCl₃(η²-C₂H₄)]⁻, the first transition metal-olefin complex.' },
  { year: 1890, title: 'Mond Process', desc: 'Ludwig Mond discovers Ni(CO)₄, enabling nickel purification via volatile carbonyl formation.' },
  { year: 1951, title: 'Ferrocene Discovery', desc: 'Kealy & Pauson synthesize Fe(η⁵-C₅H₅)₂, the first sandwich compound. Woodward and Wilkinson elucidate its structure.' },
  { year: 1965, title: "Wilkinson's Catalyst", desc: 'Geoffrey Wilkinson develops RhCl(PPh₃)₃, the first practical homogeneous hydrogenation catalyst.' },
  { year: 1973, title: 'Nobel Prize', desc: 'Ernst Otto Fischer and Geoffrey Wilkinson receive the Nobel Prize in Chemistry for metallocenes.' },
  { year: 2005, title: 'Grubbs & Schrock', desc: 'Nobel Prize for olefin metathesis catalysts — organometallic catalysis at its finest.' },
];

export default function ModuleB1() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Back to Course</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Module B1" moduleTitle="General Characteristics and History" block="B">
        <ConceptOverview>
          <p>Organometallic chemistry studies compounds containing at least one direct <strong>Metal–Carbon covalent bond</strong>. It bridges classical inorganic coordination chemistry and organic chemistry.</p>
          <p>Unlike classical complexes (high oxidation states, N/O/halogen donors), organometallic complexes often stabilize <strong>low oxidation states</strong> (0, −1, or low positive values) through strong σ-donor and π-acceptor ligands (CO, phosphines, cyclopentadienyl).</p>
          <p>Because low-oxidation-state metals are highly electron-rich, many organometallic compounds are <strong>pyrophoric</strong> (ignite on contact with air/moisture) and require synthesis under inert atmosphere (Schlenk lines, gloveboxes).</p>
        </ConceptOverview>

        <KeyEquations>
          <p style={{ color: 'var(--text-secondary)' }}>This module is conceptual — no key equations. The quantitative framework begins in Module B3 (18-Electron Rule).</p>
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Classical Complex vs. Organometallic Complex"
            problem={<p>Classify <LaTeX>{'[Co(NH_3)_6]Cl_3'}</LaTeX> and <LaTeX>{'[Co(CO)_4]^-'}</LaTeX> as classical or organometallic.</p>}
            steps={[
              { title: 'Analyze [Co(NH₃)₆]Cl₃', content: <p>Contains Co–N coordinate bonds (nitrogen donors). No metal–carbon bonds → <strong>classical coordination complex</strong>.</p> },
              { title: 'Analyze [Co(CO)₄]⁻', content: <p>Contains direct Co–C covalent bonds to carbon monoxide. Co is in oxidation state −1 (very low) → <strong>organometallic complex</strong>.</p> },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Misconception</p>
            <p>Any metal-containing compound that coordinates carbon is organometallic.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Correction</p>
            <p>Compounds where carbon is part of a non-metal-carbon bond (carbonates, some cyanides) are not organometallic. There must be a direct, covalent-type <strong>metal–carbon bond</strong>.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1.5rem' }}>Key milestones in organometallic chemistry:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {TIMELINE.map((event, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.25rem', paddingBottom: '1.5rem', position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '60px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#8b5cf6', border: '2px solid rgba(139,92,246,0.4)', zIndex: 1 }}></div>
                  {i < TIMELINE.length - 1 && <div style={{ width: '2px', flex: 1, background: 'rgba(139,92,246,0.2)' }}></div>}
                </div>
                <div style={{ flex: 1, paddingBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1.125rem', color: '#a78bfa' }}>{event.year}</span>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{event.title}</span>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>What is the oxidation state of Ir in Vaska&#39;s complex, <LaTeX>{'[IrCl(CO)(PPh_3)_2]'}</LaTeX>?</span>,
              options: [
                { text: '0', isCorrect: false },
                { text: '+1', isCorrect: true },
                { text: '+2', isCorrect: false },
                { text: '+3', isCorrect: false },
              ],
              explanation: <span>Cl⁻ is anionic, CO and PPh₃ are neutral. For a neutral complex: Ir + (−1) = 0, so Ir = +1.</span>,
            },
            {
              question: <span>Why are many organometallic compounds synthesized under inert atmospheres?</span>,
              options: [
                { text: 'Nitrogen acts as a catalyst.', isCorrect: false },
                { text: 'Low-oxidation-state metals are highly air-sensitive and pyrophoric.', isCorrect: true },
                { text: 'Argon stabilizes the glass vessels.', isCorrect: false },
                { text: 'Oxygen coordinates to form metallocenes.', isCorrect: false },
              ],
              explanation: <span>Low-valent metals are electron-rich and undergo rapid, exothermic oxidation by atmospheric O₂ or moisture.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[]}
            feedsInto={[
              { label: 'B2', moduleId: 'b2', moduleTitle: 'Ligands and Nomenclature' },
              { label: 'B3', moduleId: 'b3', moduleTitle: 'The 18-Electron Rule' },
            ]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
