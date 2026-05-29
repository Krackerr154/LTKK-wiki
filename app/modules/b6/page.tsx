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
  { step: 1, title: 'Disosiasi Ligan', desc: 'PPh₃ terdisosiasi dari [RhCl(PPh₃)₃] untuk membuka situs koordinasi.', oxState: '+1', eCount: 14, type: 'Substitusi' },
  { step: 2, title: 'Adisi Oksidatif H₂', desc: 'H₂ bertambah di seberang pusat Rh, membentuk kompleks dihidrida Rh(III).', oxState: '+3', eCount: 16, type: 'Adisi Oksidatif' },
  { step: 3, title: 'Koordinasi Alkena', desc: 'Substrat alkena berkoordinasi dengan logam melalui ikatan π-nya.', oxState: '+3', eCount: 18, type: 'Substitusi' },
  { step: 4, title: 'Penyisipan Migrasi', desc: 'Sebuah hidrida bermigrasi dan menyisip ke dalam alkena yang terkoordinasi, membentuk gugus alkil.', oxState: '+3', eCount: 16, type: 'Penyisipan' },
  { step: 5, title: 'Eliminasi Reduktif', desc: 'Alkil dan hidrida yang tersisa bergabung dan terlepas sebagai produk terhidrogenasi (alkana).', oxState: '+1', eCount: 14, type: 'Eliminasi Reduktif' },
  { step: 6, title: 'Regenerasi Katalis', desc: 'PPh₃ berkoordinasi kembali dan substrat kembali, meregenerasi katalis aktif 16e⁻.', oxState: '+1', eCount: 16, type: 'Regenerasi' },
];

const REACTION_TYPES = [
  { name: 'Adisi Oksidatif', delta_ox: '+2', delta_cn: '+2', requirement: '≤16e⁻, logam kaya elektron', example: '[IrCl(CO)(PPh₃)₂] + H₂ → [Ir(H)₂Cl(CO)(PPh₃)₂]' },
  { name: 'Eliminasi Reduktif', delta_ox: '−2', delta_cn: '−2', requirement: 'Dua ligan cis, miskin elektron atau padat secara sterik', example: '[Pd(CH₃)(Ph)(PPh₃)₂] → CH₃-Ph + [Pd(PPh₃)₂]' },
  { name: 'Penyisipan Migrasi', delta_ox: '0', delta_cn: '−1', requirement: 'Ligan tak jenuh cis + ikatan M–R', example: 'M–CH₃ + CO → M–C(O)CH₃' },
  { name: 'Substitusi Ligan', delta_ox: '0', delta_cn: '0', requirement: 'Ligan labil atau situs terbuka', example: '[Ni(CO)₄] + PPh₃ → [Ni(CO)₃(PPh₃)] + CO' },
];

export default function ModuleB6() {
  const [cycleStep, setCycleStep] = useState(0);
  const [showReactionTypes, setShowReactionTypes] = useState(false);
  const current = CYCLE_STEPS[cycleStep];

  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Kursus</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul B6" moduleTitle="Katalisis Organologam" block="B">
        <ConceptOverview>
          <p>Senyawa organologam berfungsi sebagai <strong>katalis homogen</strong> yang kuat. Kekuatan katalitik mereka bergantung pada siklus logam melalui langkah-langkah reaksi utama:</p>
          <ol>
            <li><strong>Substitusi Ligan:</strong> Pertukaran ligan (asosiatif untuk 16e⁻, disosiatif untuk 18e⁻).</li>
            <li><strong>Adisi Oksidatif (OA):</strong> Logam menyisip ke dalam ikatan kovalen. OS meningkat +2, CN meningkat +2. Membutuhkan ≤16e⁻ dan pusat kaya elektron.</li>
            <li><strong>Eliminasi Reduktif (RE):</strong> Kebalikan dari OA — dua ligan cis bergabung dan terlepas. OS berkurang -2, CN berkurang -2.</li>
            <li><strong>Penyisipan Migrasi:</strong> Sebuah ligan tak jenuh menyisip ke dalam ikatan M–R yang berdekatan, menghasilkan situs kosong.</li>
          </ol>
          <p><strong>Katalis Wilkinson</strong> (<LaTeX>{'[RhCl(PPh_3)_3]'}</LaTeX>) adalah kompleks 16e⁻ untuk hidrogenasi homogen alkena.</p>
        </ConceptOverview>

        <KeyEquations>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--text-muted)' }}>Reaksi</th>
                  <th style={{ textAlign: 'center', padding: '0.5rem', color: 'var(--text-muted)' }}>ΔOS</th>
                  <th style={{ textAlign: 'center', padding: '0.5rem', color: 'var(--text-muted)' }}>ΔCN</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--text-muted)' }}>Persyaratan</th>
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
            title="Mengidentifikasi Langkah-Langkah Reaksi"
            problem={<p>Klasifikasikan: <LaTeX>{'[IrCl(CO)(PPh_3)_2] + H_2 \\rightarrow [Ir(H)_2Cl(CO)(PPh_3)_2]'}</LaTeX></p>}
            steps={[
              { title: 'Analisis reaktan', content: <p>Ir(I) (16e⁻, bilangan koordinasi 4).</p> },
              { title: 'Analisis produk', content: <p>Ir(III) (18e⁻, bilangan koordinasi 6).</p> },
              { title: 'Klasifikasikan', content: <p>OS meningkat +2, CN meningkat +2 → <strong>Adisi Oksidatif</strong>.</p> },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Adisi oksidatif dapat terjadi pada pusat logam mana pun.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>OA mensyaratkan logam untuk memiliki OS stabil +2 lebih tinggi, dan ruang untuk dua ligan baru. Kompleks 18e⁻ harus melepaskan ligan terlebih dahulu.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Telusuri siklus katalitik Wilkinson untuk hidrogenasi alkena:</p>

          {/* Cycle Step Display */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '1.5rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Langkah {current.step} dari 6</span>
              <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '20px', background: 'rgba(139,92,246,0.15)', color: '#a78bfa', fontWeight: 600 }}>{current.type}</span>
            </div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{current.title}</h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>{current.desc}</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ background: 'rgba(59,130,246,0.08)', borderRadius: '8px', padding: '0.5rem 1rem', textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>OS Rh</div>
                <div style={{ fontWeight: 700, color: '#60a5fa', fontSize: '1.125rem' }}>{current.oxState}</div>
              </div>
              <div style={{ background: current.eCount === 18 ? 'rgba(16,185,129,0.08)' : current.eCount === 16 ? 'rgba(245,158,11,0.08)' : 'rgba(239,68,68,0.08)', borderRadius: '8px', padding: '0.5rem 1rem', textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>Jumlah VE</div>
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
              ← Sebel.
            </button>
            <button onClick={() => setCycleStep(p => (p + 1) % 6)} style={{ padding: '0.5rem 1.25rem', borderRadius: '8px', border: '1px solid rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.15)', color: '#a78bfa', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontSize: '0.8125rem', fontWeight: 600 }}>
              Lanjut →
            </button>
          </div>
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Apa yang terjadi pada keadaan oksidasi logam selama eliminasi reduktif?</span>,
              options: [
                { text: 'Ia meningkat sebanyak 2.', isCorrect: false },
                { text: 'Ia menurun sebanyak 2.', isCorrect: true },
                { text: 'Ia tetap tidak berubah.', isCorrect: false },
                { text: 'Ia turun menjadi nol.', isCorrect: false },
              ],
              explanation: <span>Eliminasi reduktif adalah kebalikan dari adisi oksidatif — dua ligan bergabung dan terlepas, mengurangi OS sebanyak 2.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[
              { label: 'B3', moduleId: 'b3', moduleTitle: 'Aturan 18-Elektron' },
              { label: 'B4', moduleId: 'b4', moduleTitle: 'Senyawa Logam Karbonil' },
              { label: 'B5', moduleId: 'b5', moduleTitle: 'Metalosena' },
            ]}
            feedsInto={[]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
