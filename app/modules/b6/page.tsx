'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { ComplexStructure } from '../../components/ui/ComplexStructure';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { WilkinsonCycle } from '../../components/interactive/WilkinsonCycle';
import pageStyles from '../[moduleId]/page.module.css';

const REACTION_TYPES = [
  { name: 'Adisi Oksidatif', delta_ox: '+2', delta_cn: '+2', requirement: '≤16e⁻, logam kaya elektron', example: '[IrCl(CO)(PPh₃)₂] + H₂ → [Ir(H)₂Cl(CO)(PPh₃)₂]' },
  { name: 'Eliminasi Reduktif', delta_ox: '−2', delta_cn: '−2', requirement: 'Dua ligan cis, miskin elektron atau padat secara sterik', example: '[Pd(CH₃)(Ph)(PPh₃)₂] → CH₃-Ph + [Pd(PPh₃)₂]' },
  { name: 'Penyisipan Migrasi', delta_ox: '0', delta_cn: '−1', requirement: 'Ligan tak jenuh cis + ikatan M–R', example: 'M–CH₃ + CO → M–C(O)CH₃' },
  { name: 'Substitusi Ligan', delta_ox: '0', delta_cn: '0', requirement: 'Ligan labil atau situs terbuka', example: '[Ni(CO)₄] + PPh₃ → [Ni(CO)₃(PPh₃)] + CO' },
];

export default function ModuleB6() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/3" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 3</span></Link>
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
            problem={
              <div>
                <p>Klasifikasikan: <LaTeX>{'[IrCl(CO)(PPh_3)_2] + H_2 \\rightarrow [Ir(H)_2Cl(CO)(PPh_3)_2]'}</LaTeX></p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1rem' }}>
                  <ComplexStructure geometry="squareplanar" metal="Ir" ligands={['CO', 'PPh₃', 'Cl', 'PPh₃']} caption={<>Reaktan: Ir(I) square planar, 16e⁻, CN = 4</>} />
                  <ComplexStructure geometry="octahedral" metal="Ir" ligands={['H', 'PPh₃', 'CO', 'PPh₃', 'Cl', 'H']} caption={<>Produk: Ir(III) oktahedral, 18e⁻, CN = 6</>} />
                </div>
              </div>
            }
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
          <p style={{ marginBottom: '1rem' }}>Telusuri siklus katalitik Wilkinson untuk hidrogenasi alkena. Tekan <strong>Putar Siklus</strong> untuk melihat katalis bergerak melalui keenam langkah, atau klik nomor langkah pada diagram.</p>
          <WilkinsonCycle />
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
