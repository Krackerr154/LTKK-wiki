'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import pageStyles from '../[moduleId]/page.module.css';

const CYCLE_STEPS = [
  { step: 1, title: 'Ligand Dissociation', desc: 'PPh₃ dissociates from [RhCl(PPh₃)₃] to open a coordination site.', oxState: '+1', eCount: 14, type: 'Substitution' },
  { step: 2, title: 'Oxidative Addition of H₂', desc: 'H₂ adds across the Rh center, forming a dihydride Rh(III) complex.', oxState: '+3', eCount: 16, type: 'Oxidative Addition' },
  { step: 3, title: 'Alkene Coordination', desc: 'The alkene substrate coordinates to the metal via its π-bond.', oxState: '+3', eCount: 18, type: 'Substitution' },
  { step: 4, title: 'Migratory Insertion', desc: 'A hydride migrates and inserts into the coordinated alkene, forming an alkyl group.', oxState: '+3', eCount: 16, type: 'Insertion' },
  { step: 5, title: 'Reductive Elimination', desc: 'The alkyl and remaining hydride couple and depart as the hydrogenated product (alkane).', oxState: '+1', eCount: 14, type: 'Reductive Elimination' },
  { step: 6, title: 'Catalyst Regeneration', desc: 'PPh₃ re-coordinates and the substrate returns, regenerating the 16e⁻ active catalyst.', oxState: '+1', eCount: 16, type: 'Regeneration' },
];

const REACTION_TYPES = [
  { name: 'Oxidative Addition', delta_ox: '+2', delta_cn: '+2', requirement: '≤16e⁻, electron-rich metal', example: '[IrCl(CO)(PPh₃)₂] + H₂ → [Ir(H)₂Cl(CO)(PPh₃)₂]' },
  { name: 'Reductive Elimination', delta_ox: '−2', delta_cn: '−2', requirement: 'Two cis ligands, electron-poor or sterically crowded', example: '[Pd(CH₃)(Ph)(PPh₃)₂] → CH₃-Ph + [Pd(PPh₃)₂]' },
  { name: 'Migratory Insertion', delta_ox: '0', delta_cn: '−1', requirement: 'Cis unsaturated ligand + M–R bond', example: 'M–CH₃ + CO → M–C(O)CH₃' },
  { name: 'Ligand Substitution', delta_ox: '0', delta_cn: '0', requirement: 'Labile ligand or open site', example: '[Ni(CO)₄] + PPh₃ → [Ni(CO)₃(PPh₃)] + CO' },
];

export default function ModuleB6() {
  const [cycleStep, setCycleStep] = useState(0);
  const [showReactionTypes, setShowReactionTypes] = useState(false);
  const current = CYCLE_STEPS[cycleStep];

  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Back to Course</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Module B6" moduleTitle="Organometallic Catalysis" block="B">
        <ConceptOverview>
          <p>Organometallic compounds serve as powerful <strong>homogeneous catalysts</strong>. Their catalytic power relies on the metal cycling through key reaction steps:</p>
          <ol>
            <li><strong>Ligand Substitution:</strong> Exchange of ligands (associative for 16e⁻, dissociative for 18e⁻).</li>
            <li><strong>Oxidative Addition (OA):</strong> Metal inserts into a covalent bond. OS increases by +2, CN increases by +2. Requires ≤16e⁻ and electron-rich center.</li>
            <li><strong>Reductive Elimination (RE):</strong> Reverse of OA — two cis ligands couple and depart. OS decreases by −2, CN decreases by −2.</li>
            <li><strong>Migratory Insertion:</strong> An unsaturated ligand inserts into an adjacent M–R bond, generating a vacant site.</li>
          </ol>
          <p><strong>Wilkinson&apos;s Catalyst</strong> (<LaTeX>{'[RhCl(PPh_3)_3]'}</LaTeX>) is a 16e⁻ complex for homogeneous hydrogenation of alkenes.</p>
        </ConceptOverview>

        <KeyEquations>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--text-muted)' }}>Reaction</th>
                  <th style={{ textAlign: 'center', padding: '0.5rem', color: 'var(--text-muted)' }}>ΔOS</th>
                  <th style={{ textAlign: 'center', padding: '0.5rem', color: 'var(--text-muted)' }}>ΔCN</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--text-muted)' }}>Requirement</th>
                </tr>
              </thead>
              <tbody>
                {REACTION_TYPES.map((r, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                    <td style={{ padding: '0.5rem', color: '#a78bfa', fontWeight: 600 }}>{r.name}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'center', color: 'var(--text-primary)' }}>{r.delta_ox}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'center', color: 'var(--text-primary)' }}>{r.delta_cn}</td>
                    <td style={{ padding: '0.5rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>{r.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Identifying Reaction Steps"
            problem={<p>Classify: <LaTeX>{'[IrCl(CO)(PPh_3)_2] + H_2 \\rightarrow [Ir(H)_2Cl(CO)(PPh_3)_2]'}</LaTeX></p>}
            steps={[
              { title: 'Analyze reactant', content: <p>Ir(I) (16e⁻, coordination number 4).</p> },
              { title: 'Analyze product', content: <p>Ir(III) (18e⁻, coordination number 6).</p> },
              { title: 'Classify', content: <p>OS increased by +2, CN increased by +2 → <strong>Oxidative Addition</strong>.</p> },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Misconception</p>
            <p>Oxidative addition can occur at any metal center.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Correction</p>
            <p>OA requires the metal to have a stable OS +2 higher, and space for two new ligands. 18e⁻ complexes must lose a ligand first.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Step through the Wilkinson catalytic cycle for alkene hydrogenation:</p>

          {/* Cycle Step Display */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '1.5rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Step {current.step} of 6</span>
              <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '20px', background: 'rgba(139,92,246,0.15)', color: '#a78bfa', fontWeight: 600 }}>{current.type}</span>
            </div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{current.title}</h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>{current.desc}</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ background: 'rgba(59,130,246,0.08)', borderRadius: '8px', padding: '0.5rem 1rem', textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>Rh OS</div>
                <div style={{ fontWeight: 700, color: '#60a5fa', fontSize: '1.125rem' }}>{current.oxState}</div>
              </div>
              <div style={{ background: current.eCount === 18 ? 'rgba(16,185,129,0.08)' : current.eCount === 16 ? 'rgba(245,158,11,0.08)' : 'rgba(239,68,68,0.08)', borderRadius: '8px', padding: '0.5rem 1rem', textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>VE Count</div>
                <div style={{ fontWeight: 700, color: current.eCount === 18 ? '#6ee7b7' : current.eCount === 16 ? '#fbbf24' : '#fca5a5', fontSize: '1.125rem' }}>{current.eCount}e⁻</div>
              </div>
            </div>
          </div>

          {/* Step navigation */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            {CYCLE_STEPS.map((_, i) => (
              <button key={i} onClick={() => setCycleStep(i)} style={{
                width: '36px', height: '36px', borderRadius: '50%',
                border: `2px solid ${i === cycleStep ? '#8b5cf6' : 'var(--border-light)'}`,
                background: i === cycleStep ? 'rgba(139,92,246,0.2)' : 'transparent',
                color: i === cycleStep ? '#a78bfa' : 'var(--text-muted)',
                cursor: 'pointer', fontWeight: 700, fontSize: '0.875rem', fontFamily: "'Outfit', sans-serif",
                transition: 'all 150ms',
              }}>
                {i + 1}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
            <button onClick={() => setCycleStep(p => (p - 1 + 6) % 6)} style={{ padding: '0.5rem 1.25rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'transparent', color: 'var(--text-muted)', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontSize: '0.8125rem' }}>
              ← Prev
            </button>
            <button onClick={() => setCycleStep(p => (p + 1) % 6)} style={{ padding: '0.5rem 1.25rem', borderRadius: '8px', border: '1px solid rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.15)', color: '#a78bfa', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontSize: '0.8125rem', fontWeight: 600 }}>
              Next →
            </button>
          </div>
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>What happens to the metal oxidation state during reductive elimination?</span>,
              options: [
                { text: 'It increases by 2.', isCorrect: false },
                { text: 'It decreases by 2.', isCorrect: true },
                { text: 'It remains unchanged.', isCorrect: false },
                { text: 'It drops to zero.', isCorrect: false },
              ],
              explanation: <span>Reductive elimination is the reverse of oxidative addition — two ligands couple and depart, reducing the OS by 2.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[
              { label: 'B3', moduleId: 'b3', moduleTitle: 'The 18-Electron Rule' },
              { label: 'B4', moduleId: 'b4', moduleTitle: 'Metal Carbonyl Compounds' },
              { label: 'B5', moduleId: 'b5', moduleTitle: 'Metallocenes' },
            ]}
            feedsInto={[]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
