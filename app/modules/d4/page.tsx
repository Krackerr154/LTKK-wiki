'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { ComplexStructure } from '../../components/ui/ComplexStructure';
import { HighlightTable } from '../../components/ui/StepVisuals';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { TabbedExplorer } from '../../components/interactive/TabbedExplorer';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleD4() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/2" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 2</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul 2.4" moduleTitle="Kimia Deskriptif Logam 4d & 5d (PGM)" block="B" partId="2" articleId="d4">
        <ConceptOverview>
          <p>
            Logam transisi yang lebih berat (<LaTeX>{'4d'}</LaTeX> dan <LaTeX>{'5d'}</LaTeX>) menunjukkan sifat
            kimia berbeda dari kerabat <LaTeX>{'3d'}</LaTeX>-nya. Modul ini berfokus pada Logam Golongan Platina
            (PGM) dan logam mulia.
          </p>
          <ul>
            <li><strong>Platina:</strong> sangat inert, titik leleh tinggi. <em>Cisplatin</em> (<LaTeX>{'cis\\text{-}[Pt(NH_3)_2Cl_2]'}</LaTeX>) obat antikanker square planar. Garam Hijau Magnus: <LaTeX>{'[Pt(NH_3)_4][PtCl_4]'}</LaTeX>.</li>
            <li><strong>Emas:</strong> sangat tak reaktif; hanya larut dalam aqua regia (<LaTeX>{'HNO_3 : HCl = 1:3'}</LaTeX>) membentuk <LaTeX>{'[AuCl_4]^-'}</LaTeX>.</li>
            <li><strong>Raksa:</strong> cair pada suhu ruang; membentuk amalgam. Raksa(I) hanya ada sebagai dimer <LaTeX>{'[Hg-Hg]^{2+}'}</LaTeX> berikatan logam–logam kovalen (diamagnetik).</li>
          </ul>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock label="Pelarutan emas oleh aqua regia" latex={'Au + HNO_3 + 4HCl \\rightarrow H[AuCl_4] + NO + 2H_2O'} />
          <EquationBlock label="Disproporsionasi kalomel oleh amonia" latex={'Hg_2Cl_2 + 2NH_3 \\rightarrow Hg\\ (\\text{hitam}) + HgNH_2Cl\\ (\\text{putih}) + NH_4^+ + Cl^-'} />
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Konduktivitas Molar Kompleks Pt(IV)"
            problem={
              <div>
                <p>Cocokkan konduktivitas molar (<LaTeX>{'\\Lambda_m'}</LaTeX>) empat kompleks platina(IV) dengan rumus koordinasinya (semua CN = 6).</p>
                <ComplexStructure
                  geometry="octahedral"
                  metal="Pt"
                  ligands={['NH₃', 'NH₃', 'Cl', 'Cl', 'NH₃', 'NH₃']}
                  caption={<>Contoh: <LaTeX>{'[Pt(NH_3)_4Cl_2]^{2+}'}</LaTeX> — oktahedral CN = 6, dua Cl⁻ di bola dalam (3 ion total)</>}
                />
              </div>
            }
            steps={[
              {
                title: 'Hubungan Λm dengan jumlah ion',
                content: (
                  <HighlightTable
                    columns={[{ header: 'Λm (perkiraan)' }, { header: 'Jenis elektrolit' }, { header: 'Jumlah ion' }]}
                    rows={[
                      { cells: ['≈ 0', 'non-elektrolit', '0'] },
                      { cells: ['≈ 100', '1:1', '2'] },
                      { cells: ['≈ 230', '1:2', '3'] },
                      { cells: ['≈ 400', '1:3', '4'] },
                    ]}
                  />
                ),
              },
              {
                title: 'Tentukan rumus koordinasi',
                content: (
                  <HighlightTable
                    columns={[{ header: 'Rumus empiris' }, { header: 'Rumus koordinasi' }, { header: 'Ion' }]}
                    rows={[
                      { cells: ['PtCl₄·2NH₃', '[Pt(NH₃)₂Cl₄]', '0'], highlight: 'blue' },
                      { cells: ['PtCl₄·3NH₃', '[Pt(NH₃)₃Cl₃]Cl', '2'], highlight: 'green' },
                      { cells: ['PtCl₄·4NH₃', '[Pt(NH₃)₄Cl₂]Cl₂', '3'], highlight: 'amber' },
                      { cells: ['PtCl₄·5NH₃', '[Pt(NH₃)₅Cl]Cl₃', '4'], highlight: 'purple' },
                    ]}
                  />
                ),
              },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Raksa(I) klorida ditulis sebagai <LaTeX>{'HgCl'}</LaTeX>.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Karena raksa(I) hanya ada sebagai kation dimer <LaTeX>{'[Hg_2]^{2+}'}</LaTeX>, rumus yang benar adalah <LaTeX>{'Hg_2Cl_2'}</LaTeX>.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Jelajahi kimia logam berat PGM dan logam mulia. Pilih tab untuk meninjau masing-masing logam.</p>
          <TabbedExplorer
            tabs={[
              {
                label: 'Platina', color: '#38bdf8', heading: <span>Platina — Cisplatin & Magnus</span>,
                body: <div><p>Pt sangat inert. <em>Cisplatin</em> mengikat DNA sel kanker, menggeser klorida membentuk taut silang yang menghambat replikasi. Garam Hijau Magnus: <LaTeX>{'[Pt(NH_3)_4][PtCl_4]'}</LaTeX>.</p></div>,
              },
              {
                label: 'Emas', color: '#f59e0b', heading: <span>Emas — Aqua Regia</span>,
                body: <div><p>Emas tak larut dalam <LaTeX>{'HNO_3'}</LaTeX> atau <LaTeX>{'HCl'}</LaTeX> sendiri. Aqua regia (1:3) menghasilkan klorin aktif yang mengoksidasi Au, sementara <LaTeX>{'Cl^-'}</LaTeX> menstabilkannya sebagai <LaTeX>{'[AuCl_4]^-'}</LaTeX>.</p></div>,
              },
              {
                label: 'Raksa', color: '#c084fc', heading: <span>Raksa — Dimer Hg₂²⁺</span>,
                body: <div><p>Raksa(I) = dimer <LaTeX>{'[Hg-Hg]^{2+}'}</LaTeX> dengan ikatan logam–logam (diamagnetik). Kalomel <LaTeX>{'Hg_2Cl_2'}</LaTeX> + amonia → menghitam. Reagen Nessler (<LaTeX>{'K_2HgI_4'}</LaTeX>) menguji ion amonium.</p></div>,
              },
            ]}
          />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Mengapa ion raksa(I) (<LaTeX>{'Hg_2^{2+}'}</LaTeX>) bersifat diamagnetik meski raksa(I) berkonfigurasi <LaTeX>{'d^{10}s^1'}</LaTeX>?</span>,
              options: [
                { text: 'Kedua elektron s lepas saat ionisasi.', isCorrect: false },
                { text: <span>Kedua atom raksa(I) membentuk ikatan kovalen <LaTeX>{'Hg-Hg'}</LaTeX>, memasangkan elektron <LaTeX>{'6s'}</LaTeX> tunggalnya di orbital molekul ikatan.</span>, isCorrect: true },
                { text: 'Ia adalah kompleks spin tinggi.', isCorrect: false },
                { text: 'Raksa mengalami spin crossover.', isCorrect: false },
              ],
              explanation: <span>Tiap <LaTeX>{'Hg^+'}</LaTeX> punya satu elektron tak berpasangan pada <LaTeX>{'6s'}</LaTeX>. Kedua ion membentuk ikatan logam–logam, memasangkan kedua elektron sehingga dimer diamagnetik.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: '2.1', moduleId: 'd1', moduleTitle: 'Tren Periodik & Karakteristik Logam Transisi' }]}
            feedsInto={[{ label: '2.5', moduleId: 'd5', moduleTitle: 'Analisis Kualitatif & Skema Pemisahan' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
