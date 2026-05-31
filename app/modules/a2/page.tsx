'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { DBlockPeriodicTable } from '../../components/interactive/DBlockPeriodicTable';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleA2() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Kursus</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul A2" moduleTitle="Kompleks Labil dan Inert" block="A">
        <ConceptOverview>
          <p>Istilah <strong>labil</strong> dan <strong>inert</strong> murni merupakan deskripsi kinetik yang diciptakan oleh Henry Taube:</p>
          <ul>
            <li><strong>Kompleks labil:</strong> Mengalami pertukaran ligan yang cepat, biasanya dengan <LaTeX>{'t_{1/2} < 1\\ \\text{menit}'}</LaTeX> pada 25°C.</li>
            <li><strong>Kompleks inert:</strong> Mengalami pertukaran ligan yang lambat, dengan <LaTeX>{'t_{1/2} > 1\\ \\text{menit}'}</LaTeX>, seringkali memakan waktu berjam-jam atau berhari-hari.</li>
          </ul>
          <p>Kelabilan kinetik utamanya ditentukan oleh <strong>Energi Stabilisasi Medan Kristal (CFSE)</strong> dan konfigurasi elektron <LaTeX>{'d'}</LaTeX> yang spesifik. Ketika kompleks oktahedral berkoordinasi 6 bereaksi, ia harus berubah bentuk menjadi keadaan transisi berkoordinasi 5 atau berkoordinasi 7. Jika deformasi ini menyebabkan hilangnya CFSE dalam jumlah besar, maka kompleks tersebut bersifat inert.</p>
          <ul>
            <li><strong>Inert:</strong> Oktahedral <LaTeX>{'d^3'}</LaTeX> (misalnya, <LaTeX>{'Cr^{3+}'}</LaTeX>) dan spin rendah <LaTeX>{'d^6'}</LaTeX> (misalnya, <LaTeX>{'Co^{3+}'}</LaTeX>). Keduanya memiliki keadaan dasar yang sangat stabil.</li>
            <li><strong>Labil:</strong> <LaTeX>{'d^1, d^2'}</LaTeX>, spin tinggi <LaTeX>{'d^4, d^5, d^6'}</LaTeX>, dan <LaTeX>{'d^7, d^9, d^{10}'}</LaTeX>. Penghalang CFSE yang rendah atau nol.</li>
          </ul>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="Energi Stabilisasi Medan Kristal"
            latex={'\\text{CFSE} = (-0.4 \\cdot n_{t_{2g}} + 0.6 \\cdot n_{e_g})\\Delta_o + P \\cdot n_{\\text{pair}}'}
            variables={[
              { symbol: 'n_{t_{2g}}', definition: 'jumlah elektron pada orbital t₂g yang berenergi lebih rendah' },
              { symbol: 'n_{e_g}', definition: 'jumlah elektron pada orbital eg yang berenergi lebih tinggi' },
              { symbol: '\\Delta_o', definition: 'energi pembelahan medan kristal oktahedral' },
              { symbol: 'P', definition: 'energi pemasangan spin' },
            ]}
          />
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Jebakan Kestabilan Termodinamika vs. Kinetika"
            problem={<p>Analisis kestabilan dan kelabilan <LaTeX>{'[Ni(CN)_4]^{2-}'}</LaTeX> dan <LaTeX>{'[Co(NH_3)_6]^{3+}'}</LaTeX> dalam media asam.</p>}
            steps={[
              { title: 'Analisis [Ni(CN)₄]²⁻', content: <p><LaTeX>{'[Ni(CN)_4]^{2-}'}</LaTeX> memiliki <LaTeX>{'K_f \\approx 10^{30}'}</LaTeX> — <strong>sangat stabil secara termodinamika</strong>. Namun, sebagai kompleks square planar <LaTeX>{'d^8'}</LaTeX>, ia mengalami pertukaran ligan asosiatif dengan penghalang kinetik yang dapat diabaikan, menjadikannya <strong>labil secara kinetik</strong>.</p> },
              { title: 'Analisis [Co(NH₃)₆]³⁺', content: <p><LaTeX>{'[Co(NH_3)_6]^{3+}'}</LaTeX> tidak stabil secara termodinamika dalam asam (<LaTeX>{'K_{eq} \\approx 10^{25}'}</LaTeX> untuk penguraian). Namun, <LaTeX>{'Co^{3+}'}</LaTeX> adalah spin rendah <LaTeX>{'d^6'}</LaTeX> (<LaTeX>{'t_{2g}^6 e_g^0'}</LaTeX>) dengan CFSE maksimum (<LaTeX>{'-2.4\\Delta_o'}</LaTeX>). Hal ini membuatnya <strong>inert secara kinetik</strong>.</p> },
              { title: 'Poin Penting', content: <p>Kestabilan termodinamika ≠ kelabilan kinetik. Suatu kompleks bisa saja tidak stabil secara termodinamika namun inert secara kinetik (atau sebaliknya).</p> },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Jebakan Kritis</p>
            <p>&quot;Stabil secara termodinamika&quot; setara dengan &quot;inert secara kinetik.&quot;</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Termodinamika menentukan kesetimbangan (<LaTeX>{'\\Delta G^\\circ, K_f'}</LaTeX>). Kinetika menentukan kecepatan (<LaTeX>{'E_a, k'}</LaTeX>). Senyawa dapat menjadi sangat tidak stabil secara termodinamika namun bertahan tanpa batas waktu akibat sifat inert kinetik.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Klik ion logam transisi apa pun untuk melihat konfigurasi elektron d, CFSE, dan klasifikasi labil/inert. Alihkan antara spin tinggi dan spin rendah untuk melihat bagaimana kekuatan medan ligan mengubah prediksi.</p>
          <DBlockPeriodicTable />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Mengapa <LaTeX>{'[Cr(OH_2)_6]^{3+}'}</LaTeX> sangat inert secara kinetik dibandingkan dengan <LaTeX>{'[Fe(OH_2)_6]^{3+}'}</LaTeX>?</span>,
              options: [
                { text: <span><LaTeX>{'Cr^{3+}'}</LaTeX> adalah d³ dengan CFSE yang kuat, sedangkan <LaTeX>{'Fe^{3+}'}</LaTeX> adalah d⁵ spin tinggi dengan CFSE nol.</span>, isCorrect: true },
                { text: 'Air berikatan jauh lebih kuat dengan kromium daripada besi.', isCorrect: false },
                { text: 'Besi lebih besar dari kromium, yang mempercepat substitusi.', isCorrect: false },
                { text: 'Kromium mengalami substitusi asosiatif secara eksklusif.', isCorrect: false },
              ],
              explanation: <span>Oktahedral d³ memiliki keadaan dasar <LaTeX>{'t_{2g}^3'}</LaTeX> yang stabil dengan CFSE sebesar <LaTeX>{'-1.2\\Delta_o'}</LaTeX>. d⁵ spin tinggi memiliki CFSE nol, artinya tidak ada penghalang elektronik untuk disosiasi ligan.</span>,
            },
            {
              question: <span>Suatu kompleks memiliki waktu paruh pertukaran air 10⁻⁶ detik. Bagaimana klasifikasinya?</span>,
              options: [
                { text: 'Stabil secara termodinamika.', isCorrect: false },
                { text: 'Inert secara kinetik.', isCorrect: false },
                { text: 'Labil secara kinetik.', isCorrect: true },
                { text: 'Tidak stabil secara termodinamika.', isCorrect: false },
              ],
              explanation: <span>Kompleks apapun dengan t₁/₂ &lt; 1 menit pada suhu kamar diklasifikasikan sebagai labil secara kinetik.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: 'A1', moduleId: 'a1', moduleTitle: 'Dasar-dasar Kinetika' }]}
            feedsInto={[
              { label: 'A6', moduleId: 'a6', moduleTitle: 'Substitusi pada Kompleks Oktahedral' },
              { label: 'A7', moduleId: 'a7', moduleTitle: 'Reaksi Transfer Elektron' },
            ]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
