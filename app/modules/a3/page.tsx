'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { MechanismAnimator } from '../../components/interactive/MechanismAnimator';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleA3() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Kursus</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul A3" moduleTitle="Mekanisme Substitusi: D, A, dan I" block="A">
        <ConceptOverview>
          <p>Reaksi substitusi ligan dalam kompleks logam transisi mengikuti tiga jalur utama:</p>
          <ol>
            <li><strong>Disosiatif (D):</strong> Proses dua tahap. Ligan pergi X terdisosiasi sepenuhnya terlebih dahulu, membentuk zat antara (intermediet) yang stabil dengan bilangan koordinasi yang berkurang. Ligan yang masuk Y kemudian berkoordinasi dalam tahap kedua yang cepat.</li>
            <li><strong>Asosiatif (A):</strong> Proses dua tahap. Ligan yang masuk Y berkoordinasi terlebih dahulu untuk membentuk zat antara dengan koordinasi yang diperluas. Ligan pergi X kemudian terlepas dalam tahap kedua yang cepat.</li>
            <li><strong>Pertukaran (Interchange / I):</strong> Reaksi satu tahap yang serempak (concerted) tanpa zat antara.
              <ul>
                <li><strong>I<sub>d</sub>:</strong> Didominasi oleh peregangan ikatan M–X (karakter disosiatif).</li>
                <li><strong>I<sub>a</sub>:</strong> Didominasi oleh pembentukan ikatan M–Y (karakter asosiatif).</li>
              </ul>
            </li>
          </ol>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="Disosiatif (D) — Kinetika Saturasi"
            latex="\\text{Laju} = \\frac{k_1 k_2 [ML_nX][Y]}{k_{-1}[X] + k_2[Y]}"
            variables={[
              { symbol: 'k_1', definition: 'konstanta laju disosiasi X' },
              { symbol: 'k_2', definition: 'konstanta laju asosiasi Y' },
            ]}
          />
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Pada [Y] yang tinggi: <LaTeX display>{'\\text{Laju} = k_1[ML_nX] \\quad \\text{(orde pertama semu)}'}</LaTeX>
          </p>
          <EquationBlock
            label="Asosiatif (A) — Orde Kedua"
            latex="\\text{Laju} = k_1[ML_nX][Y]"
          />
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Menguraikan Tahap Penentu Laju"
            problem={<p>Untuk <LaTeX>{'[Co(CN)_5(OH_2)]^{2-} + I^- \\rightarrow [Co(CN)_5I]^{3-} + H_2O'}</LaTeX>, laju tidak berubah ketika [I⁻] ditingkatkan dari 0.05 M menjadi 2.0 M. Identifikasi mekanismenya.</p>}
            steps={[
              { title: 'Amati kebergantungan laju', content: <p>Laju tidak bergantung pada [I⁻], sehingga ligan yang masuk tidak berpartisipasi dalam RDS.</p> },
              { title: 'Tuliskan hukum laju', content: <div><LaTeX display>{'\\text{Laju} = k[Co(CN)_5(OH_2)]^{2-}'}</LaTeX></div> },
              { title: 'Tentukan mekanisme', content: <p>Ini adalah mekanisme <strong>Disosiatif (D)</strong> — tahap lambatnya adalah disosiasi air membentuk zat antara berkoordinasi 5 <LaTeX>{'[Co(CN)_5]^{2-}'}</LaTeX>.</p> },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Mekanisme Pertukaran (I) memiliki zat antara sementara.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Mekanisme I adalah proses serempak satu tahap <strong>tanpa zat antara</strong>. Jika suatu zat antara memiliki waktu paruh fisik (&gt;10⁻¹³ s), reaksinya adalah D atau A, bukan I.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Tonton animasi ketiga mekanisme substitusi berdampingan. Gunakan tombol Play untuk melangkah perlahan atau memutar seluruh urutan secara otomatis.</p>
          <MechanismAnimator />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Dalam mekanisme Asosiatif (A), apa efek perubahan nukleofilisitas Y?</span>,
              options: [
                { text: 'Tidak ada efek.', isCorrect: false },
                { text: 'Laju menurun untuk nukleofil yang lebih baik.', isCorrect: false },
                { text: 'Laju meningkat untuk nukleofil yang lebih baik karena pembentukan ikatan adalah RDS.', isCorrect: true },
                { text: 'Reaksi bergeser ke mekanisme D.', isCorrect: false },
              ],
              explanation: <span>Pembentukan ikatan adalah tahap lambat dalam mekanisme A, jadi nukleofil yang lebih baik bereaksi lebih cepat.</span>,
            },
            {
              question: <span>Suatu kompleks oktahedral mengalami substitusi dengan Laju = k[Kompleks][Y]. Apa mekanismenya?</span>,
              options: [
                { text: 'Murni Disosiatif (D).', isCorrect: false },
                { text: <span>Asosiatif (A) atau Pertukaran-asosiatif (I<sub>a</sub>).</span>, isCorrect: true },
                { text: 'Kinetika orde nol.', isCorrect: false },
                { text: 'Tidak dapat ditentukan.', isCorrect: false },
              ],
              explanation: <span>Kinetika orde kedua membuktikan bahwa ligan yang masuk Y terlibat dalam RDS, konsisten dengan mekanisme A atau I<sub>a</sub>.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: 'A1', moduleId: 'a1', moduleTitle: 'Dasar-dasar Kinetika' }]}
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
