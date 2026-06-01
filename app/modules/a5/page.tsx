'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { TransEffectVisualizer } from '../../components/interactive/TransEffectVisualizer';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleA5() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/3" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 3</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul A5" moduleTitle="Substitusi pada Kompleks Square Planar" block="A">
        <ConceptOverview>
          <p>Substitusi ligan dalam kompleks square planar <LaTeX>{'d^8'}</LaTeX> berkoordinasi 4 (biasanya <LaTeX>{'Pt(II), Pd(II), Au(III)'}</LaTeX>) terjadi secara eksklusif melalui mekanisme <strong>Asosiatif (A)</strong> atau <strong>Pertukaran-asosiatif (I<sub>a</sub>)</strong>.</p>
          <p>Kinetika reaksi mengikuti hukum laju dua jalur yang didorong oleh rute yang bersaing:</p>
          <ol>
            <li><strong>Jalur berbantuan pelarut (<LaTeX>{'k_1'}</LaTeX>):</strong> Pelarut berkoordinasi terlebih dahulu, kemudian gugus pergi digantikan.</li>
            <li><strong>Jalur serangan langsung (<LaTeX>{'k_2'}</LaTeX>):</strong> Nukleofil Y menyerang langsung membentuk zat antara trigonal bipyramidal berkoordinasi 5.</li>
          </ol>
          <p>Empat faktor utama yang mengendalikan laju:</p>
          <ol>
            <li><strong>Ligan yang Masuk (Y):</strong> Nukleofilisitas yang lebih tinggi meningkatkan laju (HSAB lunak-lunak).</li>
            <li><strong>Gugus Pergi (X):</strong> Ikatan M–X yang lemah memudahkan kepergian.</li>
            <li><strong>Stereokimia:</strong> Retensi konfigurasi melalui zat antara trigonal bipyramidal.</li>
            <li><strong>Efek Trans:</strong> Ligan spektator dapat memfasilitasi substitusi ligan yang <em>trans</em> terhadap dirinya sendiri.
              <ul>
                <li><strong>Ikatan σ (pengaruh trans):</strong> Pelemahan ikatan pada keadaan dasar.</li>
                <li><strong>Ikatan π (efek trans):</strong> Stabilisasi keadaan transisi oleh akseptor π.</li>
              </ul>
            </li>
          </ol>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="Hukum Laju Dua Jalur"
            latex={'k_{\\text{obs}} = k_1 + k_2[Y]'}
            variables={[
              { symbol: 'k_1', definition: 'konstanta laju orde pertama untuk serangan pelarut' },
              { symbol: 'k_2', definition: 'konstanta laju orde kedua untuk serangan nukleofilik langsung' },
            ]}
          />
          <EquationBlock
            label="Deret Efek Trans"
            latex={'CO \\approx CN^- \\approx C_2H_4 > PR_3 \\approx H^- > CH_3^- \\approx I^- > Br^- > Cl^- > py > NH_3 > OH^- > H_2O'}
          />
        </KeyEquations>

        <WorkedExamples>
          <p style={{ color: 'var(--text-secondary)' }}>Gunakan Visualisator Efek Trans interaktif di bawah ini untuk membangun kompleks square planar dan mengamati bagaimana berbagai ligan pengarah trans melemahkan ikatan tertentu.</p>
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Efek trans dan pengaruh trans adalah identik.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p><strong>Pengaruh trans</strong> adalah fenomena termodinamika keadaan dasar (panjang ikatan, konstanta kopling). <strong>Efek trans</strong> adalah fenomena kinetik (laju substitusi melalui stabilisasi keadaan transisi).</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Klik pada posisi ligan mana pun untuk menetapkan ligan yang berbeda. Ikatan trans ke ligan pengarah trans terkuat akan bersinar merah untuk menunjukkan bahwa ia telah melemah.</p>
          <TransEffectVisualizer />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Ligan mana yang akan memberikan efek trans kinetik terkuat?</span>,
              options: [
                { text: <span><LaTeX>{'Cl^-'}</LaTeX></span>, isCorrect: false },
                { text: <span><LaTeX>{'NH_3'}</LaTeX></span>, isCorrect: false },
                { text: <span><LaTeX>{'CN^-'}</LaTeX></span>, isCorrect: true },
                { text: <span><LaTeX>{'H_2O'}</LaTeX></span>, isCorrect: false },
              ],
              explanation: <span>Sianida adalah akseptor π yang sangat baik, yang menstabilkan zat antara berkoordinasi 5 dan mempercepat substitusi trans.</span>,
            },
            {
              question: <span>Apa geometri zat antara yang terbentuk selama substitusi square planar?</span>,
              options: [
                { text: 'Square pyramidal.', isCorrect: false },
                { text: 'Pentagonal bipyramidal.', isCorrect: false },
                { text: 'Trigonal bipyramidal.', isCorrect: true },
                { text: 'Tetrahedral.', isCorrect: false },
              ],
              explanation: <span>Kompleks square planar mengalami substitusi asosiatif membentuk zat antara trigonal bipyramidal berkoordinasi 5.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: 'A3', moduleId: 'a3', moduleTitle: 'Mekanisme Substitusi: D, A, dan I' }]}
            feedsInto={[{ label: 'B6', moduleId: 'b6', moduleTitle: 'Katalisis Organologam' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
