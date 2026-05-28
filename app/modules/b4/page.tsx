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

const IR_DATA = [
  { charge: -2, label: '[V(CO)₆]²⁻', vCO: 1859, backbonding: 'Very Strong' },
  { charge: -1, label: '[Co(CO)₄]⁻', vCO: 1890, backbonding: 'Strong' },
  { charge: 0, label: 'Ni(CO)₄', vCO: 2060, backbonding: 'Moderate' },
  { charge: 1, label: '[Mn(CO)₆]⁺', vCO: 2090, backbonding: 'Weak' },
  { charge: 2, label: 'Free CO', vCO: 2143, backbonding: 'None' },
];

const CO_MODES = [
  { mode: 'Terminal', range: '1850–2120 cm⁻¹', desc: 'Single M–C≡O bond. Most common mode.' },
  { mode: 'μ₂-Bridging', range: '1750–1850 cm⁻¹', desc: 'CO bridges two metal centers. More back-bonding weakens C–O.' },
  { mode: 'μ₃-Bridging', range: '1620–1730 cm⁻¹', desc: 'CO bridges three metal centers. Maximum back-bonding.' },
];

export default function ModuleB4() {
  const [selectedCharge, setSelectedCharge] = useState(2); // index into IR_DATA

  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Back to Course</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Module B4" moduleTitle="Metal Carbonyl Compounds" block="B">
        <ConceptOverview>
          <p>Metal carbonyl bonding involves the <strong>synergic bonding mechanism</strong>:</p>
          <ol>
            <li><strong>σ-donation:</strong> The lone pair on CO donates into an empty metal d-orbital, forming a M–C σ-bond.</li>
            <li><strong>π-backbonding:</strong> The electron-rich metal shifts density from filled d-orbitals into the empty π* anti-bonding orbital of CO.</li>
          </ol>
          <p>Consequences of back-donation:</p>
          <ul>
            <li>Strengthens the M–C bond (shorter, stronger).</li>
            <li>Weakens the C≡O bond (lower stretching frequency in IR).</li>
          </ul>
          <p>Free CO has <LaTeX>{'\\nu_{CO} = 2143\\ \\text{cm}^{-1}'}</LaTeX>. Coordinated CO shifts to 1800–2000 cm⁻¹. Anionic complexes push it even lower due to enhanced back-bonding.</p>
        </ConceptOverview>

        <KeyEquations>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            <strong>Key relationship:</strong> More electron density at the metal → more π-backbonding → weaker C–O bond → lower <LaTeX>{'\\nu_{CO}'}</LaTeX>.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--text-muted)' }}>Bonding Mode</th>
                  <th style={{ textAlign: 'center', padding: '0.5rem', color: 'var(--text-muted)' }}>ν(CO) Range</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--text-muted)' }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {CO_MODES.map((m, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                    <td style={{ padding: '0.5rem', color: '#a78bfa', fontWeight: 600 }}>{m.mode}</td>
                    <td style={{ padding: '0.5rem', textAlign: 'center', color: 'var(--text-primary)' }}>{m.range}</td>
                    <td style={{ padding: '0.5rem', color: 'var(--text-muted)' }}>{m.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </KeyEquations>

        <WorkedExamples>
          <p style={{ color: 'var(--text-secondary)' }}>Use the interactive IR graph below to see how complex charge affects the C–O stretching frequency. Drag the slider to explore the relationship between back-bonding and ν(CO).</p>
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Misconception</p>
            <p>A lower ν(CO) means the M–C bond is weaker.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Correction</p>
            <p>Lower ν(CO) means the <strong>C≡O bond is weaker</strong> (more π* occupation). The M–C bond is actually <strong>stronger</strong> due to enhanced back-bonding.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Adjust the complex charge to see how ν(CO) shifts with back-bonding intensity:</p>
          <div style={{ marginBottom: '1.5rem' }}>
            <input type="range" min={0} max={4} value={selectedCharge} onChange={e => setSelectedCharge(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#8b5cf6' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              <span>−2 (anionic)</span>
              <span>0 (neutral)</span>
              <span>+2 (cationic)</span>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{IR_DATA[selectedCharge].label}</div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: selectedCharge <= 1 ? '#6ee7b7' : selectedCharge >= 3 ? '#fca5a5' : '#60a5fa' }}>
              {IR_DATA[selectedCharge].vCO} cm⁻¹
            </div>
            <div style={{ marginTop: '0.75rem' }}>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Back-bonding: </span>
              <span style={{ fontWeight: 600, color: selectedCharge <= 1 ? '#6ee7b7' : selectedCharge >= 3 ? '#fca5a5' : '#60a5fa' }}>
                {IR_DATA[selectedCharge].backbonding}
              </span>
            </div>
            <div style={{ marginTop: '1rem', height: '12px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${((2143 - IR_DATA[selectedCharge].vCO) / (2143 - 1859)) * 100}%`, background: 'linear-gradient(90deg, #6ee7b7, #8b5cf6)', borderRadius: '6px', transition: 'width 300ms' }}></div>
            </div>
            <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>π-backbonding intensity</div>
          </div>
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>What ν(CO) would you expect for cationic <LaTeX>{'[Mn(CO)_6]^+'}</LaTeX>?</span>,
              options: [
                { text: '1700 cm⁻¹', isCorrect: false },
                { text: '1850 cm⁻¹', isCorrect: false },
                { text: '~2090 cm⁻¹ (close to free CO)', isCorrect: true },
                { text: '2500 cm⁻¹', isCorrect: false },
              ],
              explanation: <span>Cationic complex has less electron density for back-bonding. ν(CO) stays high, close to free CO (2143 cm⁻¹).</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: 'B3', moduleId: 'b3', moduleTitle: 'The 18-Electron Rule' }]}
            feedsInto={[
              { label: 'B5', moduleId: 'b5', moduleTitle: 'Metallocenes' },
              { label: 'B6', moduleId: 'b6', moduleTitle: 'Organometallic Catalysis' },
            ]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
