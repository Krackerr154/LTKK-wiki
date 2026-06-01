'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { ComplexStructure } from '../../components/ui/ComplexStructure';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { TabbedExplorer } from '../../components/interactive/TabbedExplorer';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleC6() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/1" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 1</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul 1.6" moduleTitle="Distorsi Jahn-Teller" block="A" partId="1" articleId="c6">
        <ConceptOverview>
          <p>
            <strong>Teorema Jahn-Teller</strong> menyatakan: <em>setiap sistem molekul non-linear dalam keadaan
            dasar yang terdegenerasi secara elektronik akan mengalami distorsi geometri yang menghilangkan
            degenerasi, menurunkan simetri, dan menurunkan energi total.</em>
          </p>
          <p>
            Degenerasi elektronik muncul ketika sebuah elektron dapat menempati lebih dari satu orbital
            terdegenerasi (yaitu pengisian yang tidak merata pada kulit terdegenerasi). Pada kompleks
            oktahedral, orbital <LaTeX>{'d'}</LaTeX> terbelah menjadi <LaTeX>{'t_{2g}'}</LaTeX> dan <LaTeX>{'e_g'}</LaTeX>.
            Distorsi dapat terjadi pada keduanya, tetapi jauh lebih jelas pada orbital <LaTeX>{'e_g'}</LaTeX> karena
            orbital ini mengarah langsung ke ligan.
          </p>

          <h3>1. Distorsi Jahn-Teller Lemah (degenerasi di <LaTeX>{'t_{2g}'}</LaTeX>)</h3>
          <ul>
            <li>Terjadi pada <LaTeX>{'d^1'}</LaTeX> (<LaTeX>{'t_{2g}^1'}</LaTeX>), <LaTeX>{'d^2'}</LaTeX> (<LaTeX>{'t_{2g}^2'}</LaTeX>), spin rendah <LaTeX>{'d^4'}</LaTeX> (<LaTeX>{'t_{2g}^4'}</LaTeX>), dan spin rendah <LaTeX>{'d^5'}</LaTeX> (<LaTeX>{'t_{2g}^5'}</LaTeX>).</li>
            <li>Karena orbital <LaTeX>{'t_{2g}'}</LaTeX> mengarah di antara ligan, keuntungan energi dari distorsi sangat kecil dan sering terlalu lemah untuk terdeteksi secara eksperimen.</li>
          </ul>

          <h3>2. Distorsi Jahn-Teller Kuat (degenerasi di <LaTeX>{'e_g'}</LaTeX>)</h3>
          <ul>
            <li>Terjadi pada spin tinggi <LaTeX>{'d^4'}</LaTeX> (<LaTeX>{'t_{2g}^3 e_g^1'}</LaTeX>), spin rendah <LaTeX>{'d^7'}</LaTeX> (<LaTeX>{'t_{2g}^6 e_g^1'}</LaTeX>), dan <LaTeX>{'d^9'}</LaTeX> (<LaTeX>{'t_{2g}^6 e_g^3'}</LaTeX>, mis. <LaTeX>{'Cu^{2+}'}</LaTeX>).</li>
            <li>Pengisian <LaTeX>{'e_g'}</LaTeX> yang tidak merata (<LaTeX>{'d_{z^2}'}</LaTeX> vs. <LaTeX>{'d_{x^2-y^2}'}</LaTeX>) menyebabkan distorsi yang berat.</li>
          </ul>

          <h3>Jenis Geometri Distorsi</h3>
          <ul>
            <li><strong>Elongasi tetragonal (z-out, paling umum):</strong> terjadi ketika orbital <LaTeX>{'d_{z^2}'}</LaTeX> lebih terisi daripada <LaTeX>{'d_{x^2-y^2}'}</LaTeX> (mis. <LaTeX>{'d_{z^2}^2 d_{x^2-y^2}^1'}</LaTeX> pada sistem <LaTeX>{'d^9'}</LaTeX>). Dua ligan aksial pada sumbu z mengalami tolakan lebih besar dan terdorong keluar. Hasil: <strong>dua ikatan aksial panjang dan empat ikatan ekuatorial pendek</strong>.</li>
            <li><strong>Kompresi tetragonal (z-in):</strong> terjadi ketika orbital <LaTeX>{'d_{x^2-y^2}'}</LaTeX> lebih terisi (mis. <LaTeX>{'d_{z^2}^1 d_{x^2-y^2}^2'}</LaTeX>). Hasil: <strong>dua ikatan aksial pendek dan empat ikatan ekuatorial panjang</strong>.</li>
          </ul>

          <h3>Bukti Struktural (Panjang Ikatan Eksperimen)</h3>
          <ul>
            <li><strong><LaTeX>{'CuF_2'}</LaTeX> (<LaTeX>{'Cu^{2+}'}</LaTeX> <LaTeX>{'d^9'}</LaTeX>):</strong> empat ikatan ekuatorial <LaTeX>{'Cu-F'}</LaTeX> pendek pada <LaTeX>{'1{,}93\\ \\text{\\AA}'}</LaTeX> dan dua ikatan aksial <LaTeX>{'Cu-F'}</LaTeX> panjang pada <LaTeX>{'2{,}27\\ \\text{\\AA}'}</LaTeX>.</li>
            <li><strong><LaTeX>{'CrF_2'}</LaTeX> (<LaTeX>{'Cr^{2+}'}</LaTeX> spin tinggi <LaTeX>{'d^4'}</LaTeX>):</strong> empat ikatan <LaTeX>{'Cr-F'}</LaTeX> pendek pada <LaTeX>{'2{,}00\\ \\text{\\AA}'}</LaTeX> dan dua ikatan <LaTeX>{'Cr-F'}</LaTeX> panjang pada <LaTeX>{'2{,}43\\ \\text{\\AA}'}</LaTeX>.</li>
          </ul>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="Pembelahan Tingkat Energi (elongasi z-out)"
            latex={'e_g \\rightarrow d_{x^2-y^2}\\ (\\uparrow) + d_{z^2}\\ (\\downarrow)'}
          />
          <EquationBlock latex={'t_{2g} \\rightarrow d_{xy}\\ (\\uparrow) + d_{xz}, d_{yz}\\ (\\downarrow)'} />
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Memprediksi Aktivitas Jahn-Teller"
            problem={
              <div>
                <p>Prediksi apakah <LaTeX>{'[Fe(H_2O)_6]^{2+}'}</LaTeX> (spin tinggi <LaTeX>{'d^6'}</LaTeX>) dan <LaTeX>{'[Cr(H_2O)_6]^{3+}'}</LaTeX> (<LaTeX>{'d^3'}</LaTeX>) bersifat aktif Jahn-Teller, serta tentukan kekuatan distorsi yang diharapkan.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1rem' }}>
                  <ComplexStructure geometry="octahedral" metal="Cr" ligands={['H₂O', 'H₂O', 'H₂O', 'H₂O', 'H₂O', 'H₂O']} caption={<>Oktahedral normal — semua ikatan setara (tanpa distorsi)</>} />
                  <ComplexStructure geometry="octahedral" metal="M" distortion="z-out" ligands={['L', 'L', 'L', 'L', 'L', 'L']} caption={<>Elongasi tetragonal (z-out) — 2 ikatan aksial memanjang</>} />
                </div>
              </div>
            }
            steps={[
              {
                title: 'Analisis [Fe(H₂O)₆]²⁺',
                content: (
                  <div>
                    <ul>
                      <li>Ion logam: <LaTeX>{'Fe^{2+}'}</LaTeX> adalah sistem <LaTeX>{'d^6'}</LaTeX>.</li>
                      <li>Ligan: air adalah ligan medan lemah → spin tinggi, konfigurasi <LaTeX>{'t_{2g}^4 e_g^2'}</LaTeX>.</li>
                      <li>Orbital <LaTeX>{'e_g'}</LaTeX> (<LaTeX>{'d_{z^2}^1 d_{x^2-y^2}^1'}</LaTeX>) terisi simetris (tidak terdegenerasi).</li>
                      <li>Orbital <LaTeX>{'t_{2g}'}</LaTeX> terisi 4 elektron (<LaTeX>{'\\uparrow\\downarrow, \\uparrow, \\uparrow'}</LaTeX>); elektron keempat dapat menempati salah satu dari tiga orbital terdegenerasi → <strong>keadaan dasar terdegenerasi</strong>.</li>
                      <li><strong>Kesimpulan:</strong> kompleks <strong>aktif Jahn-Teller</strong>, tetapi karena degenerasi berada di tingkat <LaTeX>{'t_{2g}'}</LaTeX>, distorsinya <strong>lemah</strong> (sulit dideteksi).</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: 'Analisis [Cr(H₂O)₆]³⁺',
                content: (
                  <div>
                    <ul>
                      <li>Ion logam: <LaTeX>{'Cr^{3+}'}</LaTeX> adalah sistem <LaTeX>{'d^3'}</LaTeX>, konfigurasi <LaTeX>{'t_{2g}^3 e_g^0'}</LaTeX>.</li>
                      <li>Tingkat <LaTeX>{'e_g'}</LaTeX> kosong.</li>
                      <li>Tingkat <LaTeX>{'t_{2g}'}</LaTeX> terisi 3 elektron (<LaTeX>{'\\uparrow, \\uparrow, \\uparrow'}</LaTeX>), setiap orbital tepat satu elektron → keadaan simetris dan tidak terdegenerasi.</li>
                      <li><strong>Kesimpulan:</strong> kompleks <strong>tidak aktif Jahn-Teller</strong> (panjang ikatan logam–ligan sama persis).</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: 'Kesimpulan',
                content: <p>Degenerasi pada <LaTeX>{'e_g'}</LaTeX> menghasilkan distorsi kuat, degenerasi pada <LaTeX>{'t_{2g}'}</LaTeX> menghasilkan distorsi lemah, dan tingkat yang terisi simetris (seperti <LaTeX>{'t_{2g}^3'}</LaTeX>) tidak menghasilkan distorsi.</p>,
              },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Distorsi Jahn-Teller meningkatkan simetri molekul.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Distorsi justru <strong>menurunkan simetri</strong> (mis. dari oktahedral <LaTeX>{'O_h'}</LaTeX> menjadi tetragonal <LaTeX>{'D_{4h}'}</LaTeX>) untuk menghilangkan degenerasi dan menstabilkan keadaan elektronik.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Jelajahi sumber dan jenis distorsi Jahn-Teller. Pilih tab untuk meninjau degenerasi <LaTeX>{'t_{2g}'}</LaTeX> dan <LaTeX>{'e_g'}</LaTeX> serta dua mode distorsi tetragonal.</p>
          <TabbedExplorer
            tabs={[
              {
                label: 'Distorsi lemah (t2g)',
                color: '#38bdf8',
                heading: <span>Degenerasi pada <LaTeX>{'t_{2g}'}</LaTeX></span>,
                body: (
                  <div>
                    <p>Terjadi pada <LaTeX>{'d^1'}</LaTeX>, <LaTeX>{'d^2'}</LaTeX>, spin rendah <LaTeX>{'d^4'}</LaTeX>, dan spin rendah <LaTeX>{'d^5'}</LaTeX>.</p>
                    <p>Karena orbital <LaTeX>{'t_{2g}'}</LaTeX> mengarah <strong>di antara</strong> ligan, keuntungan energi distorsi sangat kecil sehingga umumnya terlalu lemah untuk dideteksi.</p>
                  </div>
                ),
              },
              {
                label: 'Distorsi kuat (eg)',
                color: '#f59e0b',
                heading: <span>Degenerasi pada <LaTeX>{'e_g'}</LaTeX></span>,
                body: (
                  <div>
                    <p>Terjadi pada spin tinggi <LaTeX>{'d^4'}</LaTeX> (<LaTeX>{'t_{2g}^3 e_g^1'}</LaTeX>), spin rendah <LaTeX>{'d^7'}</LaTeX> (<LaTeX>{'t_{2g}^6 e_g^1'}</LaTeX>), dan <LaTeX>{'d^9'}</LaTeX> (<LaTeX>{'Cu^{2+}'}</LaTeX>).</p>
                    <p>Orbital <LaTeX>{'e_g'}</LaTeX> mengarah <strong>langsung ke ligan</strong>, sehingga pengisian tak merata memicu distorsi yang berat dan terukur.</p>
                  </div>
                ),
              },
              {
                label: 'Elongasi tetragonal',
                color: '#c084fc',
                heading: <span>Elongasi tetragonal (z-out)</span>,
                body: (
                  <div>
                    <p>Terjadi ketika <LaTeX>{'d_{z^2}'}</LaTeX> lebih terisi daripada <LaTeX>{'d_{x^2-y^2}'}</LaTeX> (mis. <LaTeX>{'d_{z^2}^2 d_{x^2-y^2}^1'}</LaTeX>). Tolakan ekstra pada sumbu z mendorong dua ligan aksial keluar.</p>
                    <p><strong>Hasil:</strong> dua ikatan aksial panjang + empat ikatan ekuatorial pendek. Contoh nyata: <LaTeX>{'CuF_2'}</LaTeX> (<LaTeX>{'1{,}93'}</LaTeX> vs. <LaTeX>{'2{,}27\\ \\text{\\AA}'}</LaTeX>).</p>
                  </div>
                ),
              },
              {
                label: 'Kompresi tetragonal',
                color: '#34d399',
                heading: <span>Kompresi tetragonal (z-in)</span>,
                body: (
                  <div>
                    <p>Terjadi ketika <LaTeX>{'d_{x^2-y^2}'}</LaTeX> lebih terisi daripada <LaTeX>{'d_{z^2}'}</LaTeX> (mis. <LaTeX>{'d_{z^2}^1 d_{x^2-y^2}^2'}</LaTeX>).</p>
                    <p><strong>Hasil:</strong> dua ikatan aksial pendek + empat ikatan ekuatorial panjang. Mode ini jauh lebih jarang dijumpai daripada elongasi.</p>
                  </div>
                ),
              },
            ]}
          />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Konfigurasi logam transisi manakah yang menunjukkan distorsi Jahn-Teller paling kuat?</span>,
              options: [
                { text: <span><LaTeX>{'d^3'}</LaTeX> (oktahedral)</span>, isCorrect: false },
                { text: <span><LaTeX>{'d^8'}</LaTeX> (oktahedral)</span>, isCorrect: false },
                { text: <span>Spin tinggi <LaTeX>{'d^4'}</LaTeX> (oktahedral)</span>, isCorrect: true },
                { text: <span>Spin rendah <LaTeX>{'d^6'}</LaTeX> (oktahedral)</span>, isCorrect: false },
              ],
              explanation: <span>Spin tinggi <LaTeX>{'d^4'}</LaTeX> memiliki konfigurasi <LaTeX>{'t_{2g}^3 e_g^1'}</LaTeX>. Satu elektron pada tingkat <LaTeX>{'e_g'}</LaTeX> menciptakan degenerasi kuat pada orbital yang mengarah langsung ke ligan, sehingga mendorong distorsi yang intens.</span>,
            },
            {
              question: <span>Apa hasil geometri dari elongasi tetragonal (z-out)?</span>,
              options: [
                { text: 'Dua ikatan aksial pendek dan empat ikatan ekuatorial panjang.', isCorrect: false },
                { text: 'Dua ikatan aksial panjang dan empat ikatan ekuatorial pendek.', isCorrect: true },
                { text: 'Keenam ikatan logam–ligan memendek secara merata.', isCorrect: false },
                { text: 'Geometri berubah menjadi tetrahedral.', isCorrect: false },
              ],
              explanation: <span>Pada elongasi z-out, orbital <LaTeX>{'d_{z^2}'}</LaTeX> yang lebih terisi menolak ligan aksial sehingga keluar (memanjang), sementara empat ikatan ekuatorial memendek.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: '1.5', moduleId: 'c5', moduleTitle: 'Faktor Penentu Pembelahan Medan Kristal (Δ)' }]}
            feedsInto={[{ label: '1.7', moduleId: 'c7', moduleTitle: 'Teori Medan Ligan (LFT)' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
