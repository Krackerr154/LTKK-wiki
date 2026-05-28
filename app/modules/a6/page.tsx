'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import pageStyles from '../[moduleId]/page.module.css';

const FACTORS = [
  { id: 'leaving', label: '1. Leaving Group', content: 'The weaker the M–X bond, the faster the reaction. Rate increases down the halogen group: F⁻ ≪ Cl⁻ < Br⁻ < I⁻. This is because the bond dissociation energy decreases as the halide radius increases.' },
  { id: 'spectator', label: '2. Spectator Ligand', content: 'Strong σ-donor spectator ligands increase electron density at the metal center, stabilizing the transition state during dissociation and accelerating the rate.' },
  { id: 'steric', label: '3. Steric Effect', content: 'Bulky ligands crowd the 6-coordinate ground state. Dissociation of the leaving group reduces crowding, causing significant rate acceleration (steric relief).' },
  { id: 'charge', label: '4. Ion Charge', content: 'Higher positive charge on the metal strengthens the electrostatic attraction to the leaving group, making dissociation difficult. Rate decreases as charge increases: M+ > M²⁺ > M³⁺.' },
  { id: 'stereo', label: '5. Stereochemistry', content: 'Dissociation can lead to a square pyramidal intermediate (retaining cis/trans) or a trigonal bipyramidal intermediate (allowing isomerization, yielding ~2:1 cis:trans ratio).' },
  { id: 'base', label: '6. Base Hydrolysis (SN1cb)', content: 'In the presence of OH⁻, substitution occurs via an exceptionally fast pathway: OH⁻ acts as a Brønsted base to deprotonate an amine ligand, creating a conjugate base (NH₂⁻) that rapidly ejects the leaving group via π-donation.' },
];

export default function ModuleA6() {
  const [activeTab, setActiveTab] = useState('leaving');
  const activeFactor = FACTORS.find(f => f.id === activeTab);

  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Back to Course</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Module A6" moduleTitle="Substitution in Octahedral Complexes" block="A">
        <ConceptOverview>
          <p>Ligand substitution in 6-coordinate octahedral complexes (primarily <LaTeX>{'Co(III)'}</LaTeX> and <LaTeX>{'Cr(III)'}</LaTeX>) proceeds almost exclusively via <strong>Dissociative (D)</strong> or <strong>Interchange-dissociative (I<sub>d</sub>)</strong> mechanisms.</p>
          <p>The substitution rates are controlled by six sub-factors, explored in the interactive dashboard below.</p>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="Conjugate Base (SN1cb) Rate Law"
            latex="\\text{Rate} = kK[Co(NH_3)_5Cl^{2+}][OH^-] = k_{\\text{obs}}[\\text{Complex}][OH^-]"
            variables={[
              { symbol: 'K', definition: 'equilibrium constant for the deprotonation pre-equilibrium' },
              { symbol: 'k', definition: 'rate constant for RDS dissociation of the conjugate base' },
            ]}
          />
        </KeyEquations>

        <WorkedExamples>
          <p style={{ color: 'var(--text-secondary)' }}>Explore each of the six factors controlling octahedral substitution in the interactive dashboard below.</p>
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Misconception</p>
            <p>Since base hydrolysis rate depends on [OH⁻], the mechanism must be an associative (S<sub>N</sub>2) attack by hydroxide.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Correction</p>
            <p>The mechanism is strictly dissociative (S<sub>N</sub>1cb). OH⁻ acts as a <strong>base</strong> to deprotonate a ligand, not as a nucleophile. [OH⁻] dependence comes from the pre-equilibrium.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Explore the six factors that control octahedral substitution rates:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {FACTORS.map(f => (
              <button
                key={f.id}
                onClick={() => setActiveTab(f.id)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  border: `1px solid ${activeTab === f.id ? 'rgba(59,130,246,0.4)' : 'var(--border-light)'}`,
                  background: activeTab === f.id ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.03)',
                  color: activeTab === f.id ? '#60a5fa' : 'var(--text-muted)',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.8125rem',
                  fontWeight: activeTab === f.id ? 600 : 400,
                  transition: 'all 150ms',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
          {activeFactor && (
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '1.5rem' }}>
              <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.125rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{activeFactor.label}</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{activeFactor.content}</p>
            </div>
          )}
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Why does <LaTeX>{'[Co(NH_2Me)_5Cl]^{2+}'}</LaTeX> undergo aquation faster than <LaTeX>{'[Co(NH_3)_5Cl]^{2+}'}</LaTeX>?</span>,
              options: [
                { text: 'Methylamine is a weaker base.', isCorrect: false },
                { text: 'The bulky methyl groups cause steric strain, which is relieved upon dissociation.', isCorrect: true },
                { text: 'Iron impurities catalyze the reaction.', isCorrect: false },
                { text: 'Methylamine acts as a better leaving group.', isCorrect: false },
              ],
              explanation: <span>Steric crowding in the reactant is relieved when coordination number drops from 6 to 5, driving steric acceleration.</span>,
            },
            {
              question: <span>In the S<sub>N</sub>1cb mechanism, what is the role of the amide (NH₂⁻) ligand?</span>,
              options: [
                { text: 'It acts as the leaving group.', isCorrect: false },
                { text: 'It acts as a strong π-donor, facilitating dissociation of the leaving group.', isCorrect: true },
                { text: 'It coordinates water.', isCorrect: false },
                { text: 'It serves as a spectator with no role.', isCorrect: false },
              ],
              explanation: <span>The amide group is a powerful π-donor, stabilizing the transition state and accelerating the ejection of the leaving group.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: 'A2', moduleId: 'a2', moduleTitle: 'Labile and Inert Complexes' }]}
            feedsInto={[{ label: 'A7', moduleId: 'a7', moduleTitle: 'Electron Transfer Reactions' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
