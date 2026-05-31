'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { MarcusCalculator } from '../../components/interactive/MarcusCalculator';
import { ElectronTransferAnimator } from '../../components/interactive/ElectronTransferAnimator';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleA7() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Kursus</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul A7" moduleTitle="Reaksi Transfer Elektron" block="A">
        <ConceptOverview>
          <p>Reaksi transfer elektron (redoks) dalam kimia koordinasi terjadi melalui dua jalur mekanistik yang berbeda:</p>
          <ol>
            <li><strong>Mekanisme Inner Sphere:</strong>
              <ul>
                <li>Memerlukan zat antara binuklear berjembatan — satu ligan berikatan dengan kedua logam secara bersamaan.</li>
                <li>Satu reaktan harus <strong>labil</strong> (untuk membentuk jembatan), yang lainnya <strong>inert</strong>.</li>
                <li>Transfer elektron terjadi melalui jembatan kovalen, yang sering ditransfer ke pusat yang baru menjadi inert.</li>
              </ul>
              <p style={{ marginTop: '0.5rem' }}>Contoh klasik:</p>
              <LaTeX display>{'[Co^{III}(NH_3)_5Cl]^{2+} + [Cr^{II}(H_2O)_6]^{2+} \\rightarrow [Cr^{III}(H_2O)_5Cl]^{2+} + Co^{2+}_{(aq)}'}</LaTeX>
            </li>
            <li><strong>Mekanisme Outer Sphere:</strong>
              <ul>
                <li>Kedua reaktan bersifat <strong>inert</strong> — tidak ada jembatan yang dapat terbentuk.</li>
                <li>Elektron mengalami tunneling melalui ruang dari donor ke akseptor.</li>
                <li>Ikatan logam-ligan harus mereorganisasi (prinsip Frank-Condon) sebelum transfer.</li>
                <li><strong>Teori Marcus-Hush</strong> menyediakan kerangka kerja kuantitatif.</li>
              </ul>
            </li>
          </ol>

          <div style={{ marginTop: '2rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              Bandingkan kedua jalur transfer elektron secara visual. Alihkan antara mekanisme <strong>inner sphere</strong> dan
              <strong> outer sphere</strong>, lalu putar animasi untuk melihat pembentukan jembatan, transfer elektron, dan reorganisasi
              Franck–Condon tahap demi tahap.
            </p>
            <ElectronTransferAnimator />
          </div>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="Persamaan Relasi Silang Marcus"
            latex={'k_{12} = (k_{11} \\cdot k_{22} \\cdot K_{12} \\cdot f_{12})^{1/2}'}
            variables={[
              { symbol: 'k_{12}', definition: 'konstanta laju terhitung untuk reaksi silang' },
              { symbol: 'k_{11}, k_{22}', definition: 'konstanta laju pertukaran sendiri untuk kedua pasangan redoks' },
              { symbol: 'K_{12}', definition: 'konstanta kesetimbangan untuk reaksi silang keseluruhan' },
              { symbol: 'f_{12}', definition: 'faktor koreksi (≈ 1.0 untuk sistem yang mirip secara struktural)' },
            ]}
          />
        </KeyEquations>

        <WorkedExamples>
          <p style={{ color: 'var(--text-secondary)' }}>Gunakan Kalkulator Marcus-Hush di bawah ini untuk memasukkan laju pertukaran sendiri dan konstanta kesetimbangan, menghitung laju silang teoretis, dan membandingkannya dengan nilai eksperimental untuk mengonfirmasi mekanismenya.</p>
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Transfer elektron selalu melibatkan transfer ligan.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Transfer ligan hanya terjadi pada mekanisme inner sphere tertentu. Pada mekanisme outer sphere, <strong>tidak ada ikatan yang putus atau terbentuk</strong> — elektron mengalami tunneling melalui ruang.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Masukkan laju pertukaran sendiri dan konstanta kesetimbangan untuk menghitung laju silang teoretis menggunakan persamaan Marcus. Bandingkan dengan nilai eksperimental untuk menentukan apakah reaksi tersebut mengikuti mekanisme outer sphere.</p>
          <MarcusCalculator />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Mengapa <LaTeX>{'[Co(NH_3)_6]^{3+}'}</LaTeX> hanya dapat bereaksi melalui mekanisme transfer elektron outer sphere?</span>,
              options: [
                { text: 'Amonia terlalu besar.', isCorrect: false },
                { text: 'Amonia tidak memiliki pasangan elektron bebas untuk membentuk jembatan.', isCorrect: true },
                { text: 'Ia tidak stabil secara termodinamika.', isCorrect: false },
                { text: 'Ia mengandung logam transisi.', isCorrect: false },
              ],
              explanation: <span>Untuk membentuk jembatan, sebuah ligan harus memiliki setidaknya dua pasangan elektron bebas (misalnya halida, azida). Amonia hanya memiliki satu pasangan elektron bebas, yang sudah berikatan dengan kobalt.</span>,
            },
            {
              question: <span>Dalam teori Marcus, apa signifikansi dari <LaTeX>{'k_{11}'}</LaTeX> dan <LaTeX>{'k_{22}'}</LaTeX>?</span>,
              options: [
                { text: 'Mereka adalah laju pertukaran ligan.', isCorrect: false },
                { text: 'Mereka adalah laju pertukaran sendiri, yang mencerminkan energi yang dibutuhkan untuk reorganisasi ikatan.', isCorrect: true },
                { text: 'Mereka mewakili konstanta kesetimbangan.', isCorrect: false },
                { text: 'Mereka adalah faktor tekanan.', isCorrect: false },
              ],
              explanation: <span>Laju pertukaran sendiri mencerminkan penghalang aktivasi internal (penyesuaian panjang ikatan) untuk transfer elektron tanpa gaya dorong termodinamika.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[
              { label: 'A2', moduleId: 'a2', moduleTitle: 'Kompleks Labil dan Inert' },
              { label: 'A6', moduleId: 'a6', moduleTitle: 'Substitusi pada Kompleks Oktahedral' },
            ]}
            feedsInto={[{ label: 'B6', moduleId: 'b6', moduleTitle: 'Katalisis Organologam (Redoks dalam siklus katalitik)' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
