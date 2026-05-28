'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { ElectronCounter } from '../../components/interactive/ElectronCounter';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleB3() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Back to Course</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Module B3" moduleTitle="The 18-Electron Rule" block="B">
        <ConceptOverview>
          <p>The <strong>18-Electron Rule</strong> is the inorganic equivalent of the octet rule. Transition metals have 9 valence orbitals (1s + 3p + 5d). Filling all with paired electrons requires exactly <strong>18 electrons</strong>, giving a highly stable closed-shell configuration.</p>
          <p>Two counting methods exist:</p>
          <ol>
            <li><strong>Neutral Atom (Covalent) Method:</strong> Metal is treated as neutral (oxidation state 0). Ligands as neutral radicals.</li>
            <li><strong>Donor-Pair (Ionic) Method:</strong> Metal is assigned its formal oxidation state. Ligands as closed-shell ions.</li>
          </ol>
          <p><strong>Important exception:</strong> 16-electron complexes are very stable for <LaTeX>{'d^8'}</LaTeX> metals in square planar geometry (<LaTeX>{'Pt(II), Pd(II), Rh(I), Ir(I)'}</LaTeX>).</p>
        </ConceptOverview>

        <KeyEquations>
          <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--text-muted)' }}>Ligand</th>
                  <th style={{ textAlign: 'center', padding: '0.5rem', color: 'var(--text-muted)' }}>Covalent (e⁻)</th>
                  <th style={{ textAlign: 'center', padding: '0.5rem', color: 'var(--text-muted)' }}>Ionic (e⁻)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['CO', '2', '2'], ['PR₃', '2', '2'], ['Cl⁻', '1', '2'],
                  ['η⁵-Cp', '5', '6'], ['η²-C₂H₄', '2', '2'], ['H⁻', '1', '2'], ['M–M bond', '1', '1'],
                ].map(([lig, cov, ion], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                    <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>{lig}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'center', color: 'var(--accent-primary)' }}>{cov}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'center', color: '#a78bfa' }}>{ion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Electron Counting for Ferrocene"
            problem={<p>Count valence electrons for <LaTeX>{'Fe(\\eta^5\\text{-}Cp)_2'}</LaTeX> using the ionic method.</p>}
            steps={[
              { title: 'Assign charges', content: <p>Each Cp⁻ has charge −1. Two Cp⁻ → total charge −2. Complex is neutral → Fe must be +2.</p> },
              { title: 'Count electrons', content: <div><p>Fe²⁺ (Group 8, d⁶) = 6e⁻</p><p>2 × η⁵-Cp (2 × 6e⁻) = 12e⁻</p><p><strong>Total = 6 + 12 = 18e⁻ ✅</strong></p></div> },
            ]}
          />
          <WorkedExample
            title="Electron Counting for Mn₂(CO)₁₀"
            problem={<p>Count valence electrons per Mn center using the covalent method.</p>}
            steps={[
              { title: 'Per Mn center', content: <div><p>Mn⁰ (Group 7) = 7e⁻</p><p>5 × CO (5 × 2e⁻) = 10e⁻</p><p>1 × Mn–Mn bond = 1e⁻</p><p><strong>Total = 7 + 10 + 1 = 18e⁻ ✅</strong></p></div> },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Misconception</p>
            <p>Any complex without 18 electrons is unstable and cannot exist.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Correction</p>
            <p>The 18e rule is a guideline. Many stable complexes exist with 16e (square planar catalysts) or even 19-20e (metallocenes with anti-bonding occupancy).</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Select a metal and add ligands to count valence electrons. Toggle between ionic and covalent methods — both yield the same total!</p>
          <ElectronCounter />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>What is the electron count of Vaska&#39;s complex, <LaTeX>{'[IrCl(CO)(PPh_3)_2]'}</LaTeX>? (Ir is Group 9)</span>,
              options: [
                { text: '18', isCorrect: false },
                { text: '16', isCorrect: true },
                { text: '14', isCorrect: false },
                { text: '12', isCorrect: false },
              ],
              explanation: <span>Ionic: Ir(I) d⁸ = 8e⁻, Cl⁻ = 2e⁻, CO = 2e⁻, 2×PPh₃ = 4e⁻. Total = 8+2+2+4 = 16e⁻ (stable for d⁸ square planar).</span>,
            },
            {
              question: <span>How many electrons does a μ₂-bridging carbonyl contribute to the overall electron count?</span>,
              options: [
                { text: '1', isCorrect: false },
                { text: '2', isCorrect: true },
                { text: '3', isCorrect: false },
                { text: '4', isCorrect: false },
              ],
              explanation: <span>A bridging CO donates 2 electrons total (one pair shared between the two metal centers).</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: 'B2', moduleId: 'b2', moduleTitle: 'Ligands and Nomenclature' }]}
            feedsInto={[
              { label: 'B4', moduleId: 'b4', moduleTitle: 'Metal Carbonyl Compounds' },
              { label: 'B6', moduleId: 'b6', moduleTitle: 'Organometallic Catalysis' },
            ]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
