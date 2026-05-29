'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { EyringCalculator } from '../../components/interactive/EyringCalculator';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleA4() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Kursus</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul A4" moduleTitle="Parameter Aktivasi" block="A">
        <ConceptOverview>
          <p>Untuk menentukan mekanisme reaksi secara eksperimental, kita mempelajari kebergantungan konstanta laju terhadap suhu dan tekanan untuk mengekstraksi parameter termodinamika dari keadaan transisi:</p>
          <ol>
            <li><strong><LaTeX>{'\\Delta H^\\ddagger'}</LaTeX> (Entalpi Aktivasi):</strong> Energi yang dibutuhkan untuk meregangkan dan melemahkan ikatan. Nilai positif yang besar berkorespondensi dengan proses disosiatif.</li>
            <li><strong><LaTeX>{'\\Delta S^\\ddagger'}</LaTeX> (Entropi Aktivasi):</strong> Menunjukkan perubahan ketidakteraturan pada keadaan transisi.
              <ul>
                <li><LaTeX>{'\\Delta S^\\ddagger > 0'}</LaTeX>: <strong>Disosiatif</strong> (peningkatan ketidakteraturan).</li>
                <li><LaTeX>{'\\Delta S^\\ddagger < 0'}</LaTeX>: <strong>Asosiatif</strong> (penurunan ketidakteraturan).</li>
              </ul>
            </li>
            <li><strong><LaTeX>{'\\Delta V^\\ddagger'}</LaTeX> (Volume Aktivasi):</strong> Perubahan volume selama aktivasi.
              <ul>
                <li><LaTeX>{'\\Delta V^\\ddagger > 0'}</LaTeX>: <strong>Disosiatif</strong> (sistem berekspansi).</li>
                <li><LaTeX>{'\\Delta V^\\ddagger < 0'}</LaTeX>: <strong>Asosiatif</strong> (sistem berkontraksi).</li>
              </ul>
            </li>
          </ol>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="Persamaan Eyring"
            latex="\\ln\\left(\\frac{k}{T}\\right) = -\\frac{\\Delta H^\\ddagger}{R} \\cdot \\frac{1}{T} + \\left[ \\ln\\left(\\frac{k_B}{h}\\right) + \\frac{\\Delta S^\\ddagger}{R} \\right]"
            variables={[
              { symbol: 'k_B', definition: 'konstanta Boltzmann (1.381 × 10⁻²³ J/K)' },
              { symbol: 'h', definition: "konstanta Planck (6.626 × 10⁻³⁴ J·s)" },
              { symbol: 'R', definition: 'tetapan gas (8.314 J/mol·K)' },
            ]}
          />
          <EquationBlock
            label="Volume Aktivasi"
            latex="\\ln(k) = -\\frac{\\Delta V^\\ddagger}{RT} \\cdot P + \\ln(k_0)"
          />
        </KeyEquations>

        <WorkedExamples>
          <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
            Gunakan Kalkulator Eyring interaktif di bawah ini untuk memasukkan data suhu-laju dan mengekstraksi parameter aktivasi. Kalkulator secara otomatis melakukan regresi linier dan menentukan mekanismenya.
          </p>
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Larutan sepenuhnya tidak dapat dikompresi, sehingga tekanan tidak dapat memengaruhi laju reaksi.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Reorganisasi pelarut dan perubahan ikatan mengubah volume rongga yang mengelilingi kompleks, membuat konstanta laju sangat bergantung pada tekanan.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Masukkan pasangan data (T, k) dan perhatikan plot Eyring dibuat secara otomatis. Kemiringan memberikan <LaTeX>{'\\Delta H^\\ddagger'}</LaTeX> dan perpotongan memberikan <LaTeX>{'\\Delta S^\\ddagger'}</LaTeX>.</p>
          <EyringCalculator />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Entropi aktivasi <LaTeX>{'\\Delta S^\\ddagger = +115\\ \\text{J/mol·K}'}</LaTeX> menyiratkan:</span>,
              options: [
                { text: 'Mekanisme asosiatif.', isCorrect: false },
                { text: 'Mekanisme disosiatif.', isCorrect: true },
                { text: 'Tidak ada perubahan ketidakteraturan.', isCorrect: false },
                { text: 'Nol mutlak.', isCorrect: false },
              ],
              explanation: <span>Entropi aktivasi positif berarti keadaan transisi lebih tidak teratur, konsisten dengan disosiasi (pemutusan ikatan melepaskan fragmen).</span>,
            },
            {
              question: <span>Jika konstanta laju menurun pada tekanan tinggi, maka <LaTeX>{'\\Delta V^\\ddagger'}</LaTeX> adalah:</span>,
              options: [
                { text: 'Negatif, menunjukkan mekanisme asosiatif.', isCorrect: false },
                { text: 'Positif, menunjukkan mekanisme disosiatif.', isCorrect: true },
                { text: 'Nol.', isCorrect: false },
                { text: 'Kompleks.', isCorrect: false },
              ],
              explanation: <span>Volume aktivasi positif berarti sistem berekspansi pada keadaan transisi. Tekanan tinggi menghambat ekspansi ini, sehingga memperlambat laju.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: 'A3', moduleId: 'a3', moduleTitle: 'Mekanisme Substitusi: D, A, dan I' }]}
            feedsInto={[
              { label: 'A5', moduleId: 'a5', moduleTitle: 'Substitusi pada Kompleks Bujur Sangkar' },
              { label: 'A6', moduleId: 'a6', moduleTitle: 'Substitusi pada Kompleks Oktahedral' },
            ]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
