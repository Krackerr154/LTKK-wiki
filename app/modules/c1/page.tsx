'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { HighlightTable, ResultBox } from '../../components/ui/StepVisuals';
import { ComplexStructure } from '../../components/ui/ComplexStructure';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { WernerPrecipitation } from '../../components/interactive/WernerPrecipitation';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleC1() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/1" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 1</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul 1.1" moduleTitle="Senyawa Koordinasi & Teori Werner" block="A" partId="1" articleId="c1">
        <ConceptOverview>
          <p>
            <strong>Senyawa koordinasi</strong> terdiri atas ion logam pusat (umumnya logam transisi) yang
            terikat pada sekumpulan molekul atau anion yang disebut <strong>ligan</strong>. Logam transisi
            memiliki orbital <LaTeX>{'d'}</LaTeX> kosong sehingga dapat bertindak sebagai asam Lewis (penerima
            pasangan elektron), sedangkan ligan memiliki setidaknya satu pasangan elektron bebas dan bertindak
            sebagai basa Lewis (pendonor pasangan elektron). Ikatan logam–ligan bersifat kovalen koordinasi (datif).
          </p>
          <p>Alfred Werner mengembangkan teori koordinasi pertama yang berhasil berdasarkan dua jenis valensi:</p>
          <ol>
            <li><strong>Valensi Primer (Tingkat Oksidasi):</strong> Mewakili muatan positif ion logam, yang dipenuhi semata-mata oleh ligan anionik. Valensi ini terionisasi dalam larutan.</li>
            <li><strong>Valensi Sekunder (Bilangan Koordinasi):</strong> Mewakili jumlah atom donor ligan yang terikat langsung ke logam. Valensi ini tidak terionisasi, terarah secara ruang (menghasilkan geometri stereokimia), dan dipenuhi oleh molekul netral maupun anion.</li>
          </ol>
          <p>Bilangan koordinasi (<LaTeX>{'CN'}</LaTeX>) dan geometri terkaitnya:</p>
          <ul>
            <li><strong><LaTeX>{'CN = 2'}</LaTeX>:</strong> Linear (mis. <LaTeX>{'[Ag(NH_3)_2]^+'}</LaTeX>).</li>
            <li><strong><LaTeX>{'CN = 4'}</LaTeX>:</strong> Tetrahedral (<LaTeX>{'[CoCl_4]^{2-}'}</LaTeX>) atau square planar (<LaTeX>{'[Ni(CN)_4]^{2-}'}</LaTeX>).</li>
            <li><strong><LaTeX>{'CN = 6'}</LaTeX>:</strong> Oktahedral (mis. <LaTeX>{'[Co(NH_3)_6]^{3+}'}</LaTeX>).</li>
          </ul>
          <p>Ligan diklasifikasikan menurut <strong>dentisitas</strong> (jumlah atom donor yang digunakan untuk mengikat logam):</p>
          <ul>
            <li><strong>Monodentat:</strong> Satu atom donor (<LaTeX>{'H_2O, NH_3, CO, CN^-, Cl^-'}</LaTeX>).</li>
            <li><strong>Bidentat:</strong> Dua atom donor, membentuk cincin kelat (<LaTeX>{'en, bpy, ox^{2-}'}</LaTeX>).</li>
            <li><strong>Polidentat:</strong> Banyak atom donor (<LaTeX>{'EDTA^{4-}'}</LaTeX> heksadentat).</li>
          </ul>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="Tingkat Oksidasi Logam"
            latex={'\\text{Tingkat Oksidasi} = \\text{Muatan total kompleks} - \\sum (\\text{Muatan ligan})'}
          />
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
            Uji pengendapan Werner: mereaksikan kompleks dengan <LaTeX>{'AgNO_3'}</LaTeX> berlebih hanya
            mengendapkan klorida bola luar yang dapat terionisasi:
          </p>
          <EquationBlock
            latex={'[Co(NH_3)_6]Cl_3 + 3AgNO_3 \\rightarrow [Co(NH_3)_6](NO_3)_3 + 3AgCl\\downarrow'}
          />
          <EquationBlock
            latex={'[Co(NH_3)_5Cl]Cl_2 + 2AgNO_3 \\rightarrow [Co(NH_3)_5Cl](NO_3)_2 + 2AgCl\\downarrow'}
          />
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Menentukan Rumus Koordinasi dari Pengendapan"
            problem={<p>Kompleks dengan rumus empiris <LaTeX>{'CoCl_3 \\cdot 5NH_3'}</LaTeX> dilarutkan dalam air. Penambahan <LaTeX>{'AgNO_3'}</LaTeX> berlebih mengendapkan 2,0 mol <LaTeX>{'AgCl'}</LaTeX> per mol kompleks. Tentukan rumus koordinasi serta valensi primer dan sekundernya.</p>}
            steps={[
              {
                title: 'Hitung klorida yang terionisasi',
                content: (
                  <div>
                    <p>Pengendapan 2 mol AgCl berarti tepat dua ion Cl⁻ berada di bola luar (terionisasi).</p>
                    <HighlightTable
                      columns={[{ header: 'Total Cl' }, { header: 'Cl bola luar' }, { header: 'Cl bola dalam' }]}
                      rows={[{ cells: ['3', '2', '1'], highlight: 'blue' }]}
                    />
                  </div>
                ),
              },
              {
                title: 'Susun rumus koordinasi',
                content: (
                  <div>
                    <p>Satu Cl⁻ dan lima NH₃ tersisa di bola dalam, terikat langsung ke Co: <strong>[Co(NH₃)₅Cl]Cl₂</strong>.</p>
                    <ComplexStructure
                      geometry="octahedral"
                      metal="Co"
                      ligands={['NH₃', 'NH₃', 'Cl', 'NH₃', 'NH₃', 'NH₃']}
                      caption={<>Bola dalam <LaTeX>{'[Co(NH_3)_5Cl]^{2+}'}</LaTeX> — oktahedral CN = 6 (1 Cl⁻ terikat, 2 Cl⁻ sisanya di bola luar)</>}
                    />
                  </div>
                ),
              },
              {
                title: 'Tentukan valensi',
                content: (
                  <ResultBox tone="success" label="Hasil">
                    Valensi primer (tingkat oksidasi) Co = <strong>+3</strong>. Valensi sekunder (bilangan
                    koordinasi) = <strong>6</strong> (5 NH₃ + 1 Cl⁻, geometri oktahedral).
                  </ResultBox>
                ),
              },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Setiap ligan dengan banyak atom pasti bersifat polidentat.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Dentisitas hanya bergantung pada jumlah atom yang <em>langsung</em> mendonorkan pasangan elektron. Amonia (<LaTeX>{'NH_3'}</LaTeX>) memiliki empat atom tetapi hanya satu pasangan bebas pada nitrogen, sehingga bersifat monodentat.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Pilih kompleks Werner, lalu tambahkan <LaTeX>{'AgNO_3'}</LaTeX> untuk melihat hanya klorida bola luar yang mengendap sebagai AgCl. Klorida bola dalam tetap terikat ke logam.</p>
          <WernerPrecipitation />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Berapakah bilangan koordinasi dan tingkat oksidasi besi dalam <LaTeX>{'[Fe(ox)_3]^{3-}'}</LaTeX>?</span>,
              options: [
                { text: 'CN=3, oksidasi = +3', isCorrect: false },
                { text: 'CN=6, oksidasi = +3', isCorrect: true },
                { text: 'CN=6, oksidasi = +6', isCorrect: false },
                { text: 'CN=3, oksidasi = −3', isCorrect: false },
              ],
              explanation: <span>Oksalat (<LaTeX>{'ox^{2-}'}</LaTeX>) bidentat. Tiga ligan bidentat menempati 3×2 = 6 situs. Oksidasi: <LaTeX>{'x + 3(-2) = -3 \\implies x = +3'}</LaTeX>.</span>,
            },
            {
              question: <span>Larutan <LaTeX>{'[Co(NH_3)_4Cl_2]Cl'}</LaTeX> diuji konduktivitasnya. Berapa mol ion yang dihasilkan per mol kompleks?</span>,
              options: [
                { text: '1', isCorrect: false },
                { text: '2', isCorrect: true },
                { text: '3', isCorrect: false },
                { text: '4', isCorrect: false },
              ],
              explanation: <span>Disosiasi menghasilkan satu kation kompleks <LaTeX>{'[Co(NH_3)_4Cl_2]^+'}</LaTeX> dan satu anion Cl⁻ = 2 mol ion.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: 'Prasyarat', moduleId: 'c1', moduleTitle: 'Ikatan kimia & teori asam-basa Lewis' }]}
            feedsInto={[
              { label: '1.2', moduleId: 'c2', moduleTitle: 'Isomerisme dalam Kompleks Koordinasi' },
              { label: '1.3', moduleId: 'c3', moduleTitle: 'Teori Ikatan Valensi (VBT)' },
            ]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
