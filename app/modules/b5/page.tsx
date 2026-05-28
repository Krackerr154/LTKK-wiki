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

const METALLOCENES = [
  { metal: 'Fe', name: 'Ferrocene', electrons: 18, stability: 'Very Stable', color: '#10b981', desc: '18e⁻ closed-shell. Air-stable. Undergoes electrophilic aromatic substitution (Friedel-Crafts acylation).' },
  { metal: 'Co', name: 'Cobaltocene', electrons: 19, stability: 'Reducing Agent', color: '#f59e0b', desc: '19e⁻ — extra electron in anti-bonding orbital. Powerful 1e⁻ reducing agent. Easily oxidized to stable [CoCp₂]⁺ (18e⁻).' },
  { metal: 'Ni', name: 'Nickelocene', electrons: 20, stability: 'Reactive', color: '#ef4444', desc: '20e⁻ — two electrons in anti-bonding orbitals. Chemically unstable and highly reactive.' },
];

export default function ModuleB5() {
  const [selectedMetal, setSelectedMetal] = useState(0);
  const mc = METALLOCENES[selectedMetal];

  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Back to Course</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Module B5" moduleTitle="Metallocenes (Sandwich Compounds)" block="B">
        <ConceptOverview>
          <p>Metallocenes feature a <strong>sandwich structure</strong> — a transition metal atom between two parallel cyclopentadienyl (Cp, <LaTeX>{'C_5H_5^-'}</LaTeX>) rings.</p>
          <p><strong>Ferrocene</strong> (<LaTeX>{'Fe(\\eta^5\\text{-}C_5H_5)_2'}</LaTeX>) is the parent metallocene with exactly 18 valence electrons. The Cp⁻ ring possesses 6π electrons and is aromatic, so ferrocene undergoes electrophilic aromatic substitution.</p>
          <p>Changing the metal center alters the electron count and stability:</p>
          <ul>
            <li><strong>Cobaltocene (19e⁻):</strong> Anti-bonding orbital occupied → powerful reducing agent.</li>
            <li><strong>Nickelocene (20e⁻):</strong> Two anti-bonding electrons → highly reactive and unstable.</li>
          </ul>
        </ConceptOverview>

        <KeyEquations>
          <p style={{ color: 'var(--text-secondary)' }}>Electron counting for metallocenes follows the standard ionic method: M<sup>n+</sup> electrons + 2 × Cp⁻ (6e⁻ each) = total.</p>
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Comparative Reactivity of Metallocenes"
            problem={<p>Explain why Cobaltocene rapidly reacts with air while Ferrocene is completely air-stable.</p>}
            steps={[
              { title: 'Ferrocene (18e⁻)', content: <p>Closed-shell: all bonding orbitals filled, anti-bonding empty. Thermodynamically and kinetically stable.</p> },
              { title: 'Cobaltocene (19e⁻)', content: <p>Extra electron in anti-bonding orbital. Losing it via oxidation → 18e⁻ cobaltocenium [CoCp₂]⁺, which is very stable. Hence cobaltocene is a <strong>powerful reducing agent</strong>.</p> },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Misconception</p>
            <p>Cyclopentadienyl only coordinates in pentahapto (η⁵) mode.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Correction</p>
            <p>Cp can coordinate in monohapto (η¹) or trihapto (η³) modes depending on steric/electronic requirements.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Select a metal to compare metallocene structures and stability:</p>
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
            {METALLOCENES.map((m, i) => (
              <button key={i} onClick={() => setSelectedMetal(i)} style={{
                padding: '0.75rem 1.5rem', borderRadius: '10px',
                border: `2px solid ${selectedMetal === i ? m.color : 'var(--border-light)'}`,
                background: selectedMetal === i ? `${m.color}15` : 'rgba(255,255,255,0.03)',
                color: selectedMetal === i ? m.color : 'var(--text-muted)',
                cursor: 'pointer', fontFamily: "'Outfit', sans-serif", fontSize: '1rem', fontWeight: 700,
                transition: 'all 150ms',
              }}>
                {m.metal}
              </button>
            ))}
          </div>

          {/* Sandwich SVG Visualization */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <svg viewBox="0 0 200 200" style={{ width: '200px', height: '200px' }}>
              {/* Top Cp ring */}
              <ellipse cx={100} cy={55} rx={60} ry={15} fill="none" stroke={mc.color} strokeWidth={2} opacity={0.7} />
              <text x={100} y={60} textAnchor="middle" fill={mc.color} fontSize={10} opacity={0.6}>Cp⁻</text>
              {/* Bottom Cp ring */}
              <ellipse cx={100} cy={145} rx={60} ry={15} fill="none" stroke={mc.color} strokeWidth={2} opacity={0.7} />
              <text x={100} y={150} textAnchor="middle" fill={mc.color} fontSize={10} opacity={0.6}>Cp⁻</text>
              {/* Metal center */}
              <circle cx={100} cy={100} r={18} fill={mc.color} opacity={0.9} />
              <text x={100} y={105} textAnchor="middle" fill="#1a1a1a" fontSize={14} fontWeight={700}>{mc.metal}</text>
              {/* Bonds */}
              <line x1={100} y1={70} x2={100} y2={82} stroke={mc.color} strokeWidth={2} opacity={0.5} />
              <line x1={100} y1={118} x2={100} y2={130} stroke={mc.color} strokeWidth={2} opacity={0.5} />
            </svg>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${mc.color}40`, borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.25rem', color: mc.color, marginBottom: '0.5rem' }}>{mc.name}</h4>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{mc.electrons}e⁻</div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: mc.color, marginBottom: '0.75rem' }}>{mc.stability}</div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.875rem' }}>{mc.desc}</p>
          </div>
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Which metallocene is a highly potent 1-electron reducing agent?</span>,
              options: [
                { text: 'Ferrocene.', isCorrect: false },
                { text: 'Cobaltocene.', isCorrect: true },
                { text: 'Chromocene.', isCorrect: false },
              ],
              explanation: <span>With 19 electrons, cobaltocene readily loses one electron to reach the stable 18e⁻ cobaltocenium ion.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[
              { label: 'B2', moduleId: 'b2', moduleTitle: 'Ligands and Nomenclature' },
              { label: 'B3', moduleId: 'b3', moduleTitle: 'The 18-Electron Rule' },
            ]}
            feedsInto={[{ label: 'B6', moduleId: 'b6', moduleTitle: 'Organometallic Catalysis' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
