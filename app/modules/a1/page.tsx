'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import {
  ModuleLayout,
  ConceptOverview,
  KeyEquations,
  WorkedExamples,
  Misconceptions,
  InteractiveVisual,
  FormativeQuiz,
  Connections,
} from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { WorkedExample } from '../../components/ui/WorkedExample';
import {
  HighlightTable,
  StepReasoning,
  ResultBox,
  MiniReactionPath,
} from '../../components/ui/StepVisuals';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { EnergyProfileDiagram } from '../../components/interactive/EnergyProfileDiagram';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleA1() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/3" className={pageStyles.backLink}>
            <ArrowLeft size={16} />
            <span>Kembali ke Bagian 3</span>
          </Link>
        </div>
      </header>

      <ModuleLayout moduleCode="Modul A1" moduleTitle="Dasar-dasar Kinetika" block="A">
        {/* ===================== CONCEPT OVERVIEW ===================== */}
        <ConceptOverview>
          <p>
            Kinetika kimia adalah ilmu yang mempelajari laju proses kimia dan jalur molekuler
            yang mengubah reaktan menjadi produk. Sementara termodinamika menentukan apakah reaksi tersebut
            spontan (<LaTeX>{'\\Delta G^\\circ < 0'}</LaTeX>) dan menentukan keadaan kesetimbangan,
            kinetika lah yang mengatur kecepatan waktu-nyata dari perubahan kimia.
          </p>
          <p>
            <strong>Mekanisme reaksi</strong> adalah urutan tahap demi tahap dari reaksi elementer di mana
            perubahan kimia keseluruhan terjadi. Dalam setiap mekanisme multi-tahap, setiap tahap elementer
            terjadi dengan laju yang berbeda. Tahap elementer paling lambat disebut sebagai
            <strong> tahap penentu laju (Rate-Determining Step / RDS)</strong>, yang bertindak sebagai
            hambatan kinetik untuk keseluruhan reaksi.
          </p>
          <p>
            Sangat penting untuk membedakan dua konsep utama berikut:
          </p>
          <ol>
            <li>
              <strong>Keadaan Transisi (Kompleks Teraktivasi):</strong> Suatu keadaan yang berkorespondensi
              dengan energi potensial lokal maksimum di sepanjang koordinat reaksi. Ini mewakili susunan
              atom yang sangat tidak stabil dan sekilas (waktu paruh ≈ <LaTeX>{'10^{-13}\\ \\text{s}'}</LaTeX>)
              di mana ikatan diputus dan dibentuk secara bersamaan. Ini <strong>tidak dapat diisolasi</strong>.
            </li>
            <li>
              <strong>Zat Antara (Intermediet) Reaksi:</strong> Spesies kimia berbeda yang terletak pada
              energi potensial lokal minimum (sebuah &quot;lembah&quot;) di sepanjang koordinat reaksi.
              Zat antara memiliki ikatan yang terbentuk sempurna, memiliki waktu paruh yang terhingga, dan terkadang
              dapat dideteksi secara spektroskopi, ditangkap, atau bahkan diisolasi.
            </li>
          </ol>
          <p>
            Hubungan matematis antara laju reaksi dan konsentrasi reaktan dinyatakan dengan <strong>hukum laju</strong>.
            Orde reaksi (orde nol, pertama, atau kedua) memberikan wawasan mekanistik yang mendalam
            tentang molekularitas tahap penentu laju.
          </p>
        </ConceptOverview>

        {/* ===================== KEY EQUATIONS ===================== */}
        <KeyEquations>
          <EquationBlock
            label="Hukum Laju Umum"
            latex={'\\text{Laju} = k [A]^m [B]^n'}
            variables={[
              { symbol: 'k', definition: <>konstanta laju, bergantung pada suhu melalui persamaan Arrhenius <LaTeX>{'k = Ae^{-E_a/RT}'}</LaTeX></> },
              { symbol: '[A], [B]', definition: 'konsentrasi molar reaktan' },
              { symbol: 'm, n', definition: 'orde parsial reaksi, ditentukan secara eksperimental' },
            ]}
          />
          <EquationBlock
            label="Orde pertama (Unimolekuler)"
            latex={'\\text{Laju} = k[A]'}
          />
          <EquationBlock
            label="Orde kedua (Bimolekuler)"
            latex={'\\text{Laju} = k[A][B] \\quad \\text{atau} \\quad \\text{Laju} = k[A]^2'}
          />
        </KeyEquations>

        {/* ===================== WORKED EXAMPLES ===================== */}
        <WorkedExamples>
          <WorkedExample
            title="Penentuan Hukum Laju dan Mekanisme"
            problem={
              <div>
                <p>Untuk reaksi substitusi ligan:</p>
                <LaTeX display>{'[ML_5X]^{n+} + Y^- \\rightarrow [ML_5Y]^{n+} + X^-'}</LaTeX>
                <p>Laju awal berikut diukur pada 298 K:</p>
                <HighlightTable
                  columns={[
                    { header: 'Percobaan' },
                    { header: <>[ML₅X]ⁿ⁺ (M)</> },
                    { header: <>[Y⁻] (M)</> },
                    { header: <>Laju (M·s⁻¹)</> },
                  ]}
                  rows={[
                    { cells: ['1', '1.0 × 10⁻³', '0.10', '1.5 × 10⁻⁵'] },
                    { cells: ['2', '2.0 × 10⁻³', '0.10', '3.0 × 10⁻⁵'] },
                    { cells: ['3', '1.0 × 10⁻³', '0.20', '1.5 × 10⁻⁵'] },
                  ]}
                  caption="Data laju awal — bandingkan pasangan percobaan untuk mengisolasi pengaruh tiap reaktan."
                />
              </div>
            }
            steps={[
              {
                title: 'Bandingkan Percobaan 1 dan 2',
                content: (
                  <div>
                    <p>
                      Konsentrasi <LaTeX>{'[Y^-]'}</LaTeX> dijaga konstan, jadi setiap perubahan laju
                      hanya disebabkan oleh perubahan <LaTeX>{'[ML_5X]^{n+}'}</LaTeX>.
                    </p>
                    <HighlightTable
                      columns={[
                        { header: 'Percobaan' },
                        { header: <>[ML₅X]ⁿ⁺ (M)</> },
                        { header: <>[Y⁻] (M)</> },
                        { header: <>Laju (M·s⁻¹)</> },
                      ]}
                      rows={[
                        { cells: ['1', '1.0 × 10⁻³', '0.10', '1.5 × 10⁻⁵'], highlight: 'blue' },
                        { cells: ['2', '2.0 × 10⁻³', '0.10', '3.0 × 10⁻⁵'], highlight: 'blue' },
                      ]}
                    />
                    <StepReasoning
                      cause={{ label: <LaTeX>{'[ML_5X]'}</LaTeX>, factor: '× 2', trend: 'up' }}
                      effect={{ label: 'Laju', factor: '× 2', trend: 'up' }}
                      conclusion={
                        <>
                          Laju ∝ <LaTeX>{'[ML_5X]^1'}</LaTeX> → reaksi <strong>orde pertama</strong> terhadap
                          kompleks (<LaTeX>{'m = 1'}</LaTeX>).
                        </>
                      }
                      tone="blue"
                    />
                  </div>
                ),
              },
              {
                title: 'Bandingkan Percobaan 1 dan 3',
                content: (
                  <div>
                    <p>
                      Sekarang <LaTeX>{'[ML_5X]^{n+}'}</LaTeX> dijaga konstan, sehingga perubahan laju
                      hanya akibat perubahan <LaTeX>{'[Y^-]'}</LaTeX>.
                    </p>
                    <HighlightTable
                      columns={[
                        { header: 'Percobaan' },
                        { header: <>[ML₅X]ⁿ⁺ (M)</> },
                        { header: <>[Y⁻] (M)</> },
                        { header: <>Laju (M·s⁻¹)</> },
                      ]}
                      rows={[
                        { cells: ['1', '1.0 × 10⁻³', '0.10', '1.5 × 10⁻⁵'], highlight: 'amber' },
                        { cells: ['3', '1.0 × 10⁻³', '0.20', '1.5 × 10⁻⁵'], highlight: 'amber' },
                      ]}
                    />
                    <StepReasoning
                      cause={{ label: <LaTeX>{'[Y^-]'}</LaTeX>, factor: '× 2', trend: 'up' }}
                      effect={{ label: 'Laju', factor: '× 1', trend: 'same' }}
                      conclusion={
                        <>
                          Laju tidak berubah → reaksi <strong>orde nol</strong> terhadap ligan yang masuk
                          (<LaTeX>{'n = 0'}</LaTeX>).
                        </>
                      }
                      tone="amber"
                    />
                  </div>
                ),
              },
              {
                title: 'Tuliskan hukum laju',
                content: (
                  <div>
                    <p>Gabungkan kedua orde parsial (<LaTeX>{'m = 1'}</LaTeX>, <LaTeX>{'n = 0'}</LaTeX>):</p>
                    <LaTeX display>{'\\text{Laju} = k[ML_5X]^{n+}'}</LaTeX>
                    <ResultBox tone="info" label="Orde reaksi total">
                      <LaTeX>{'m + n = 1 + 0 = 1'}</LaTeX> → kinetika orde pertama secara keseluruhan.
                      Ligan masuk <LaTeX>{'Y^-'}</LaTeX> tidak muncul dalam hukum laju.
                    </ResultBox>
                  </div>
                ),
              },
              {
                title: 'Kesimpulan Mekanistik',
                content: (
                  <div>
                    <p>
                      Karena laju hanya bergantung pada kompleks dan tidak bergantung pada ligan yang masuk,
                      tahap penentu laju (RDS) hanyalah pelepasan <LaTeX>{'X^-'}</LaTeX> — ligan masuk
                      baru terlibat <em>setelah</em> RDS:
                    </p>
                    <MiniReactionPath
                      nodes={[
                        { formula: <>[ML₅X]</>, cn: 6, note: 'Kompleks awal' },
                        { formula: <>[ML₅]</>, cn: 5, note: 'Zat antara' },
                        { formula: <>[ML₅Y]</>, cn: 6, note: 'Produk' },
                      ]}
                      arrows={[
                        { label: <>−X⁻ (lambat, RDS)</>, tone: 'red' },
                        { label: <>+Y⁻ (cepat)</>, tone: 'green' },
                      ]}
                    />
                    <ResultBox tone="success" label="Mekanisme: Disosiatif (D)">
                      Penurunan bilangan koordinasi (6 → 5) pada tahap lambat adalah ciri khas jalur
                      <strong> disosiatif (D)</strong>, konsisten dengan hukum laju orde pertama yang teramati.
                    </ResultBox>
                  </div>
                ),
              },
            ]}
          />
        </WorkedExamples>

        {/* ===================== MISCONCEPTIONS ===================== */}
        <Misconceptions>
          <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>
              ❌ Miskonsepsi
            </p>
            <p>Energi bebas Gibbs negatif yang besar (<LaTeX>{'\\Delta G^\\circ \\ll 0'}</LaTeX>) menjamin reaksi yang cepat.</p>
          </div>
          <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>
              ✅ Koreksi
            </p>
            <p>
              Termodinamika hanya menentukan perbedaan energi antara reaktan dan produk
              (<LaTeX>{'K_{eq}'}</LaTeX>). Ia tidak menjelaskan apa pun mengenai penghalang energi aktivasi
              (<LaTeX>{'E_a'}</LaTeX>). Suatu reaksi bisa saja sangat spontan secara termodinamika namun
              inert secara kinetik akibat penghalang aktivasi yang sangat besar.
            </p>
          </div>
        </Misconceptions>

        {/* ===================== INTERACTIVE VISUAL ===================== */}
        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>
            Jelajahi bagaimana energi aktivasi memengaruhi laju reaksi. Geser tuas untuk menyesuaikan{' '}
            <LaTeX>{'E_a'}</LaTeX>, dan alihkan antara profil energi satu tahap dan dua tahap
            untuk melihat perbedaan antara keadaan transisi dan zat antara reaksi.
          </p>
          <EnergyProfileDiagram />
        </InteractiveVisual>

        {/* ===================== FORMATIVE QUIZ ===================== */}
        <FormativeQuiz>
          <Quiz
            questions={[
              {
                question: (
                  <span>Dalam profil energi, apa yang direpresentasikan oleh minimum lokal (lembah) di antara dua keadaan transisi?</span>
                ),
                options: [
                  { text: 'Penghalang energi aktivasi.', isCorrect: false },
                  { text: 'Keadaan transisi.', isCorrect: false },
                  { text: 'Zat antara (intermediet) reaksi.', isCorrect: true },
                  { text: 'Katalis.', isCorrect: false },
                ],
                explanation: (
                  <span>
                    Zat antara berada pada energi minimum lokal, artinya ia memiliki waktu paruh
                    terhingga dan ikatan yang stabil dan terbentuk sempurna. Hal ini membedakannya
                    dengan keadaan transisi, yang berada pada batas energi maksimum.
                  </span>
                ),
              },
              {
                question: (
                  <span>
                    Jika hukum laju substitusi adalah <LaTeX>{'\\text{Laju} = k[\\text{Kompleks}][\\text{Ligan}]'}</LaTeX>,
                    berapakah molekularitas dari tahap penentu laju?
                  </span>
                ),
                options: [
                  { text: 'Unimolekuler.', isCorrect: false },
                  { text: 'Bimolekuler.', isCorrect: true },
                  { text: 'Termolekuler.', isCorrect: false },
                  { text: 'Orde nol.', isCorrect: false },
                ],
                explanation: (
                  <span>
                    Karena kompleks dan ligan yang masuk muncul dalam hukum laju dengan orde parsial
                    1, tahap penentu lajunya adalah bimolekuler — ini memerlukan partisipasi simultan
                    dari kedua spesies.
                  </span>
                ),
              },
            ]}
          />
        </FormativeQuiz>

        {/* ===================== CONNECTIONS ===================== */}
        <Connections>
          <ConnectionLinks
            buildsOn={[
              { label: 'Prasyarat', moduleId: 'a1', moduleTitle: 'Kinetika universitas standar (diagram koordinat reaksi, hukum laju)' },
            ]}
            feedsInto={[
              { label: 'A3', moduleId: 'a3', moduleTitle: 'Mekanisme Substitusi: D, A, dan I' },
              { label: 'A4', moduleId: 'a4', moduleTitle: 'Parameter Aktivasi' },
            ]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
