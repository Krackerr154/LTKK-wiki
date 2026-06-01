'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { ComplexStructure } from '../../components/ui/ComplexStructure';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { ElectronCounter } from '../../components/interactive/ElectronCounter';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleB3() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/3" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 3</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul B3" moduleTitle="Aturan 18-Elektron" block="B">
        <ConceptOverview>
          <p><strong>Aturan 18-Elektron</strong> adalah ekuivalen anorganik dari aturan oktet. Logam transisi memiliki 9 orbital valensi (1s + 3p + 5d). Mengisi semua orbital dengan elektron berpasangan membutuhkan tepat <strong>18 elektron</strong>, memberikan konfigurasi kulit tertutup yang sangat stabil.</p>
          <p>Ada dua metode penghitungan:</p>
          <ol>
            <li><strong>Metode Atom Netral (Kovalen):</strong> Logam diperlakukan sebagai netral (keadaan oksidasi 0). Ligan sebagai radikal netral.</li>
            <li><strong>Metode Pasangan-Donor (Ionik):</strong> Logam diberi keadaan oksidasi formalnya. Ligan sebagai ion kulit tertutup.</li>
          </ol>
          <p><strong>Pengecualian penting:</strong> Kompleks 16-elektron sangat stabil untuk logam <LaTeX>{'d^8'}</LaTeX> dalam geometri square planar (<LaTeX>{'Pt(II), Pd(II), Rh(I), Ir(I)'}</LaTeX>).</p>
        </ConceptOverview>

        <KeyEquations>
          <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--text-muted)' }}>Ligan</th>
                  <th style={{ textAlign: 'center', padding: '0.5rem', color: 'var(--text-muted)' }}>Kovalen (e⁻)</th>
                  <th style={{ textAlign: 'center', padding: '0.5rem', color: 'var(--text-muted)' }}>Ionik (e⁻)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['CO', '2', '2'], ['PR₃', '2', '2'], ['Cl⁻', '1', '2'],
                  ['η⁵-Cp', '5', '6'], ['η²-C₂H₄', '2', '2'], ['H⁻', '1', '2'], ['Ikatan M–M', '1', '1'],
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
            title="Penghitungan Elektron untuk Ferosena"
            problem={
              <div>
                <p>Hitung elektron valensi untuk <LaTeX>{'Fe(\\eta^5\\text{-}Cp)_2'}</LaTeX> menggunakan metode ionik.</p>
                <ComplexStructure
                  geometry="sandwich"
                  metal="Fe"
                  ring="Cp⁻"
                  caption={<>Ferosena: dua cincin Cp⁻ mengapit Fe (struktur sandwich, η⁵)</>}
                />
              </div>
            }
            steps={[
              { title: 'Tentukan muatan', content: <p>Setiap Cp⁻ memiliki muatan -1. Dua Cp⁻ → muatan total -2. Kompleks bersifat netral → Fe harus +2.</p> },
              { title: 'Hitung elektron', content: <div><p>Fe²⁺ (Golongan 8, d⁶) = 6e⁻</p><p>2 × η⁵-Cp (2 × 6e⁻) = 12e⁻</p><p><strong>Total = 6 + 12 = 18e⁻ ✅</strong></p></div> },
            ]}
          />
          <WorkedExample
            title="Penghitungan Elektron untuk Mn₂(CO)₁₀"
            problem={
              <div>
                <p>Hitung elektron valensi per pusat Mn menggunakan metode kovalen.</p>
                <ComplexStructure
                  geometry="octahedral"
                  metal="Mn"
                  ligands={['CO', 'CO', 'CO', 'CO', 'CO', 'Mn']}
                  caption={<>Tiap Mn berkoordinasi 5 CO + 1 ikatan Mn–Mn (oktahedral)</>}
                />
              </div>
            }
            steps={[
              { title: 'Per pusat Mn', content: <div><p>Mn⁰ (Golongan 7) = 7e⁻</p><p>5 × CO (5 × 2e⁻) = 10e⁻</p><p>1 × ikatan Mn–Mn = 1e⁻</p><p><strong>Total = 7 + 10 + 1 = 18e⁻ ✅</strong></p></div> },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Kompleks mana pun yang tidak memiliki 18 elektron tidak stabil dan tidak dapat ada.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Aturan 18e adalah sebuah pedoman. Banyak kompleks stabil ada dengan 16e (katalis square planar) atau bahkan 19-20e (metalosena dengan okupansi anti-ikatan).</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Pilih sebuah logam dan tambahkan ligan untuk menghitung elektron valensi. Beralih antara metode ionik dan kovalen — keduanya menghasilkan total yang sama!</p>
          <ElectronCounter />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Berapakah jumlah elektron kompleks Vaska, <LaTeX>{'[IrCl(CO)(PPh_3)_2]'}</LaTeX>? (Ir adalah Golongan 9)</span>,
              options: [
                { text: '18', isCorrect: false },
                { text: '16', isCorrect: true },
                { text: '14', isCorrect: false },
                { text: '12', isCorrect: false },
              ],
              explanation: <span>Ionik: Ir(I) d⁸ = 8e⁻, Cl⁻ = 2e⁻, CO = 2e⁻, 2×PPh₃ = 4e⁻. Total = 8+2+2+4 = 16e⁻ (stabil untuk square planar d⁸).</span>,
            },
            {
              question: <span>Berapa banyak elektron yang dikontribusikan oleh karbonil penjembatan μ₂ terhadap jumlah elektron keseluruhan?</span>,
              options: [
                { text: '1', isCorrect: false },
                { text: '2', isCorrect: true },
                { text: '3', isCorrect: false },
                { text: '4', isCorrect: false },
              ],
              explanation: <span>CO penjembatan mendonorkan total 2 elektron (satu pasangan dibagi antara dua pusat logam).</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: 'B2', moduleId: 'b2', moduleTitle: 'Ligan dan Tata Nama' }]}
            feedsInto={[
              { label: 'B4', moduleId: 'b4', moduleTitle: 'Senyawa Logam Karbonil' },
              { label: 'B6', moduleId: 'b6', moduleTitle: 'Katalisis Organologam' },
            ]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
