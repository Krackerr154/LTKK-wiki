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

const LIGAND_GALLERY = [
  { name: 'Methyl (CH₃⁻)', hapticity: 'η¹', electrons: '1 (cov) / 2 (ionic)', charge: '−1', desc: 'σ-donor only. Forms a single M–C bond.' },
  { name: 'Allyl (C₃H₅⁻)', hapticity: 'η³', electrons: '3 (cov) / 4 (ionic)', charge: '−1', desc: 'Delocalized π-system coordinates through 3 contiguous carbons.' },
  { name: 'Cyclopentadienyl (Cp⁻)', hapticity: 'η⁵', electrons: '5 (cov) / 6 (ionic)', charge: '−1', desc: 'All 5 carbons coordinate equally. 6π aromatic ring.' },
  { name: 'Benzene (C₆H₆)', hapticity: 'η⁶', electrons: '6 (cov) / 6 (ionic)', charge: '0', desc: 'All 6 carbons of the aromatic ring coordinate to the metal.' },
  { name: 'Ethylene (C₂H₄)', hapticity: 'η²', electrons: '2 (cov) / 2 (ionic)', charge: '0', desc: 'π-bond donates to metal (Dewar-Chatt-Duncanson model).' },
  { name: 'Carbonyl (CO)', hapticity: 'η¹', electrons: '2 (cov) / 2 (ionic)', charge: '0', desc: 'Terminal: σ-donor + π-acceptor. Can also bridge (μ₂, μ₃).' },
  { name: 'Hydride (H⁻)', hapticity: 'η¹', electrons: '1 (cov) / 2 (ionic)', charge: '−1', desc: 'Forms a direct M–H bond. Key in catalytic hydrogenation.' },
  { name: 'Phosphine (PR₃)', hapticity: 'η¹', electrons: '2 (cov) / 2 (ionic)', charge: '0', desc: 'Strong σ-donor, weak π-acceptor. Steric bulk tunable via R groups.' },
];

export default function ModuleB2() {
  const [selectedLigand, setSelectedLigand] = useState(0);

  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Back to Course</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Module B2" moduleTitle="Ligands and Nomenclature" block="B">
        <ConceptOverview>
          <p>Organometallic nomenclature introduces specific terms:</p>
          <ol>
            <li><strong>Hapticity (<LaTeX>{'\\eta'}</LaTeX> notation):</strong> The number of contiguous atoms in a ligand directly coordinated to the metal.
              <ul>
                <li><LaTeX>{'\\eta^1'}</LaTeX>-alkyl: one carbon coordinated</li>
                <li><LaTeX>{'\\eta^5'}</LaTeX>-cyclopentadienyl: all five carbons coordinated</li>
                <li><LaTeX>{'\\eta^6'}</LaTeX>-benzene: all six carbons coordinated</li>
              </ul>
            </li>
            <li><strong>Bridging Ligands (<LaTeX>{'\\mu'}</LaTeX> notation):</strong> A ligand shared between two or more metal centers (e.g., <LaTeX>{'\\mu_2'}</LaTeX>-CO bridges two metals).</li>
            <li><strong>Nomenclature Rules:</strong> List ligands alphabetically, specify hapticity before ligand name, name the metal with oxidation state in parentheses.</li>
          </ol>
        </ConceptOverview>

        <KeyEquations>
          <p style={{ color: 'var(--text-secondary)' }}>This module focuses on nomenclature conventions rather than mathematical equations. Refer to the Ligand Gallery below for electron contribution counts.</p>
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Naming a Metallocene Derivative"
            problem={<p>Determine the IUPAC name for <LaTeX>{'[Fe(\\eta^5\\text{-}C_5H_5)_2]'}</LaTeX>.</p>}
            steps={[
              { title: 'Identify ligands', content: <p>Two cyclopentadienyl rings (Cp⁻), coordinating through all 5 carbons (η⁵).</p> },
              { title: 'Determine oxidation state', content: <p>Complex is neutral. Each Cp⁻ has charge −1, so Fe must be +2 to balance.</p> },
              { title: 'Construct name', content: <p><strong>bis(η⁵-cyclopentadienyl)iron(II)</strong> — commonly known as ferrocene.</p> },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Misconception</p>
            <p>Hapticity (η) is the same as denticity.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Correction</p>
            <p><strong>Denticity</strong> = number of distinct coordinate bonds from non-contiguous donor atoms (e.g., EDTA). <strong>Hapticity</strong> = contiguous coordination of a continuous π-electron system.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Click any ligand to see its hapticity, electron contribution, and bonding description:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {LIGAND_GALLERY.map((lig, i) => (
              <button key={i} onClick={() => setSelectedLigand(i)} style={{
                padding: '0.5rem 1rem', borderRadius: '8px',
                border: `1px solid ${selectedLigand === i ? 'rgba(139,92,246,0.4)' : 'var(--border-light)'}`,
                background: selectedLigand === i ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.03)',
                color: selectedLigand === i ? '#a78bfa' : 'var(--text-muted)',
                cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontSize: '0.8125rem',
                fontWeight: selectedLigand === i ? 600 : 400, transition: 'all 150ms',
              }}>
                {lig.name}
              </button>
            ))}
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '1.5rem' }}>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.125rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              {LIGAND_GALLERY[selectedLigand].name}
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(139,92,246,0.08)', borderRadius: '8px', padding: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Hapticity</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#a78bfa' }}>{LIGAND_GALLERY[selectedLigand].hapticity}</div>
              </div>
              <div style={{ background: 'rgba(59,130,246,0.08)', borderRadius: '8px', padding: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Electrons</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: '#60a5fa' }}>{LIGAND_GALLERY[selectedLigand].electrons}</div>
              </div>
              <div style={{ background: 'rgba(16,185,129,0.08)', borderRadius: '8px', padding: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Charge</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#6ee7b7' }}>{LIGAND_GALLERY[selectedLigand].charge}</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.875rem' }}>{LIGAND_GALLERY[selectedLigand].desc}</p>
          </div>
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>What is the hapticity of the ethylene ligand in Zeise&#39;s salt, <LaTeX>{'[PtCl_3(\\eta^2\\text{-}C_2H_4)]^-'}</LaTeX>?</span>,
              options: [
                { text: '1', isCorrect: false },
                { text: '2', isCorrect: true },
                { text: '3', isCorrect: false },
                { text: '4', isCorrect: false },
              ],
              explanation: <span>Ethylene coordinates through both carbons of the double bond, giving hapticity η² = 2.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: 'B1', moduleId: 'b1', moduleTitle: 'History and General Characteristics' }]}
            feedsInto={[{ label: 'B3', moduleId: 'b3', moduleTitle: 'The 18-Electron Rule' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
