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
  { charge: -2, label: '[V(CO)₆]²⁻', vCO: 1859, backbonding: 'Sangat Kuat' },
  { charge: -1, label: '[Co(CO)₄]⁻', vCO: 1890, backbonding: 'Kuat' },
  { charge: 0, label: 'Ni(CO)₄', vCO: 2060, backbonding: 'Sedang' },
  { charge: 1, label: '[Mn(CO)₆]⁺', vCO: 2090, backbonding: 'Lemah' },
  { charge: 2, label: 'CO Bebas', vCO: 2143, backbonding: 'Tidak Ada' },
];

const CO_MODES = [
  { mode: 'Terminal', range: '1850–2120 cm⁻¹', desc: 'Ikatan M–C≡O tunggal. Mode paling umum.' },
  { mode: 'Penjembatan-μ₂', range: '1750–1850 cm⁻¹', desc: 'CO menjembatani dua pusat logam. Lebih banyak ikatan balik melemahkan C–O.' },
  { mode: 'Penjembatan-μ₃', range: '1620–1730 cm⁻¹', desc: 'CO menjembatani tiga pusat logam. Ikatan balik maksimum.' },
];

export default function ModuleB4() {
  const [selectedCharge, setSelectedCharge] = useState(2); // index into IR_DATA

  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Kursus</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul B4" moduleTitle="Senyawa Logam Karbonil" block="B">
        <ConceptOverview>
          <p>Ikatan logam karbonil melibatkan <strong>mekanisme ikatan sinergis</strong>:</p>
          <ol>
            <li><strong>Donasi-σ:</strong> Pasangan elektron bebas pada CO mendonasikan elektron ke orbital d logam yang kosong, membentuk ikatan σ M–C.</li>
            <li><strong>Ikatan balik-π:</strong> Logam kaya elektron memindahkan rapatan elektron dari orbital d yang terisi ke orbital anti-ikatan π* CO yang kosong.</li>
          </ol>
          <p>Konsekuensi dari donasi balik:</p>
          <ul>
            <li>Memperkuat ikatan M–C (lebih pendek, lebih kuat).</li>
            <li>Melemahkan ikatan C≡O (frekuensi regangan yang lebih rendah pada IR).</li>
          </ul>
          <p>CO bebas memiliki <LaTeX>{'\\nu_{CO} = 2143\\ \\text{cm}^{-1}'}</LaTeX>. CO yang terkoordinasi bergeser ke 1800–2000 cm⁻¹. Kompleks anionik mendorongnya lebih rendah karena ikatan balik yang diperkuat.</p>
        </ConceptOverview>

        <KeyEquations>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            <strong>Hubungan utama:</strong> Lebih banyak rapatan elektron pada logam → lebih banyak ikatan balik-π → ikatan C–O lebih lemah → <LaTeX>{'\\nu_{CO}'}</LaTeX> lebih rendah.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--text-muted)' }}>Mode Ikatan</th>
                  <th style={{ textAlign: 'center', padding: '0.5rem', color: 'var(--text-muted)' }}>Rentang ν(CO)</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--text-muted)' }}>Deskripsi</th>
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
          <p style={{ color: 'var(--text-secondary)' }}>Gunakan grafik IR interaktif di bawah ini untuk melihat bagaimana muatan kompleks memengaruhi frekuensi regangan C–O. Seret penggeser untuk mengeksplorasi hubungan antara ikatan balik dan ν(CO).</p>
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Nilai ν(CO) yang lebih rendah berarti ikatan M–C lebih lemah.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Nilai ν(CO) yang lebih rendah berarti <strong>ikatan C≡O lebih lemah</strong> (okupansi π* lebih banyak). Ikatan M–C sebenarnya <strong>lebih kuat</strong> karena ikatan balik yang diperkuat.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Sesuaikan muatan kompleks untuk melihat bagaimana ν(CO) bergeser dengan intensitas ikatan balik:</p>
          <div style={{ marginBottom: '1.5rem' }}>
            <input type="range" min={0} max={4} value={selectedCharge} onChange={e => setSelectedCharge(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#8b5cf6' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              <span>-2 (anionik)</span>
              <span>0 (netral)</span>
              <span>+2 (kationik)</span>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{IR_DATA[selectedCharge].label}</div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: selectedCharge <= 1 ? '#6ee7b7' : selectedCharge >= 3 ? '#fca5a5' : '#60a5fa' }}>
              {IR_DATA[selectedCharge].vCO} cm⁻¹
            </div>
            <div style={{ marginTop: '0.75rem' }}>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Ikatan balik: </span>
              <span style={{ fontWeight: 600, color: selectedCharge <= 1 ? '#6ee7b7' : selectedCharge >= 3 ? '#fca5a5' : '#60a5fa' }}>
                {IR_DATA[selectedCharge].backbonding}
              </span>
            </div>
            <div style={{ marginTop: '1rem', height: '12px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${((2143 - IR_DATA[selectedCharge].vCO) / (2143 - 1859)) * 100}%`, background: 'linear-gradient(90deg, #6ee7b7, #8b5cf6)', borderRadius: '6px', transition: 'width 300ms' }}></div>
            </div>
            <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>intensitas ikatan balik-π</div>
          </div>
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Nilai ν(CO) apa yang Anda harapkan untuk <LaTeX>{'[Mn(CO)_6]^+'}</LaTeX> kationik?</span>,
              options: [
                { text: '1700 cm⁻¹', isCorrect: false },
                { text: '1850 cm⁻¹', isCorrect: false },
                { text: '~2090 cm⁻¹ (mendekati CO bebas)', isCorrect: true },
                { text: '2500 cm⁻¹', isCorrect: false },
              ],
              explanation: <span>Kompleks kationik memiliki lebih sedikit rapatan elektron untuk ikatan balik. ν(CO) tetap tinggi, mendekati CO bebas (2143 cm⁻¹).</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: 'B3', moduleId: 'b3', moduleTitle: 'Aturan 18-Elektron' }]}
            feedsInto={[
              { label: 'B5', moduleId: 'b5', moduleTitle: 'Metalosena' },
              { label: 'B6', moduleId: 'b6', moduleTitle: 'Katalisis Organologam' },
            ]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
