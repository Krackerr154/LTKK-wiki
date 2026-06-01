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

export default function ModuleC3() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/1" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 1</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul 1.3" moduleTitle="Teori Ikatan Valensi (VBT)" block="A" partId="1" articleId="c3">
        <ConceptOverview>
          <p>
            <strong>Teori Ikatan Valensi (VBT)</strong>, ketika diterapkan pada kimia koordinasi, memandang
            ikatan kovalen koordinasi sebagai tumpang tindih orbital ligan yang terisi pasangan elektron bebas
            dengan orbital terhibridisasi kosong dari pusat logam. Untuk menampung pasangan elektron ligan yang
            masuk, orbital atom kulit luar logam (<LaTeX>{'d, s, p'}</LaTeX>) harus bercampur membentuk himpunan
            <strong> orbital hibrida</strong> yang terarah sesuai geometri koordinasi.
          </p>
          <ul>
            <li><strong>Hibridisasi <LaTeX>{'sp'}</LaTeX>:</strong> bilangan koordinasi 2 (linear, mis. <LaTeX>{'[Ag(NH_3)_2]^+'}</LaTeX>).</li>
            <li><strong>Hibridisasi <LaTeX>{'sp^3'}</LaTeX>:</strong> bilangan koordinasi 4 (tetrahedral, mis. <LaTeX>{'[CoCl_4]^{2-}'}</LaTeX>, <LaTeX>{'[NiCl_4]^{2-}'}</LaTeX>).</li>
            <li><strong>Hibridisasi <LaTeX>{'dsp^2'}</LaTeX>:</strong> bilangan koordinasi 4 (square planar, mis. <LaTeX>{'[Ni(CN)_4]^{2-}'}</LaTeX>).</li>
            <li><strong>Hibridisasi <LaTeX>{'d^2sp^3'}</LaTeX>:</strong> bilangan koordinasi 6 (oktahedral orbital dalam; memakai orbital <LaTeX>{'3d'}</LaTeX> internal; umumnya spin rendah, mis. <LaTeX>{'[Fe(CN)_6]^{3-}'}</LaTeX>).</li>
            <li><strong>Hibridisasi <LaTeX>{'sp^3d^2'}</LaTeX>:</strong> bilangan koordinasi 6 (oktahedral orbital luar; memakai orbital <LaTeX>{'4d'}</LaTeX> eksternal; umumnya spin tinggi, mis. <LaTeX>{'[FeF_6]^{3-}'}</LaTeX>, <LaTeX>{'[Ni(NH_3)_6]^{2+}'}</LaTeX>).</li>
          </ul>
          <p>VBT menghubungkan jenis orbital hibrida dengan <strong>sifat magnetik</strong> kompleks:</p>
          <ul>
            <li><strong>Diamagnetik:</strong> semua elektron berpasangan (ditolak oleh medan magnet).</li>
            <li><strong>Paramagnetik:</strong> terdapat elektron tak berpasangan (ditarik oleh medan magnet).</li>
          </ul>

          <h3>Keterbatasan VBT</h3>
          <p>VBT mengalami kegagalan kritis yang memicu lahirnya CFT dan LFT:</p>
          <ol>
            <li>Tidak dapat memprediksi apakah suatu konfigurasi square planar (<LaTeX>{'dsp^2'}</LaTeX>) atau tetrahedral (<LaTeX>{'sp^3'}</LaTeX>) tanpa data magnetik terlebih dahulu (mis. <LaTeX>{'[Ni(CN)_4]^{2-}'}</LaTeX> square planar diamagnetik, sedangkan <LaTeX>{'[NiCl_4]^{2-}'}</LaTeX> tetrahedral paramagnetik).</li>
            <li>Gagal sepenuhnya menjelaskan spektrum serapan elektronik (warna) kompleks.</li>
            <li>Tidak dapat menjelaskan momen magnetik yang bergantung suhu.</li>
            <li>Tidak menjelaskan distorsi Jahn-Teller.</li>
          </ol>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="Momen Magnetik Spin-Only"
            latex={'\\mu_{\\text{eff}} = \\sqrt{n(n+2)}\\ \\text{BM}'}
            variables={[
              { symbol: 'n', definition: 'jumlah elektron tak berpasangan' },
              { symbol: '\\mu_{\\text{eff}}', definition: 'momen magnetik efektif dalam Bohr Magneton (BM)' },
            ]}
          />
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Deduksi VBT: Orbital Luar vs. Orbital Dalam"
            problem={
              <div>
                <p>Tinjau ikatan dan keadaan magnetik <LaTeX>{'[FeF_6]^{3-}'}</LaTeX> dan <LaTeX>{'[Fe(CN)_6]^{3-}'}</LaTeX> menggunakan VBT. Keduanya kompleks oktahedral berkoordinasi 6 dari <LaTeX>{'Fe(III)'}</LaTeX>.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                  <ComplexStructure geometry="octahedral" metal="Fe" ligands={['F', 'F', 'F', 'F', 'F', 'F']} caption={<><LaTeX>{'[FeF_6]^{3-}'}</LaTeX> — oktahedral, F⁻ medan lemah</>} />
                  <ComplexStructure geometry="octahedral" metal="Fe" ligands={['CN', 'CN', 'CN', 'CN', 'CN', 'CN']} caption={<><LaTeX>{'[Fe(CN)_6]^{3-}'}</LaTeX> — oktahedral, CN⁻ medan kuat</>} />
                </div>
              </div>
            }
            steps={[
              {
                title: 'Hitung elektron valensi logam',
                content: <p>Besi netral: <LaTeX>{'[Ar]\\,4s^2 3d^6'}</LaTeX>. Ion <LaTeX>{'Fe(III)'}</LaTeX>: <LaTeX>{'[Ar]\\,3d^5'}</LaTeX> (2 elektron lepas dari <LaTeX>{'4s'}</LaTeX>, 1 dari <LaTeX>{'3d'}</LaTeX>). Kelima elektron <LaTeX>{'3d'}</LaTeX> mula-mula semuanya tak berpasangan.</p>,
              },
              {
                title: 'Analisis [FeF₆]³⁻',
                content: <p>Fluorida (<LaTeX>{'F^-'}</LaTeX>) adalah ligan lemah dan tidak memaksa pemasangan elektron <LaTeX>{'3d'}</LaTeX>. Kelima elektron <LaTeX>{'3d'}</LaTeX> tetap tak berpasangan, sehingga logam memakai orbital kulit luar <LaTeX>{'4s + 4p + 4d'}</LaTeX>. Hibridisasi <strong><LaTeX>{'sp^3d^2'}</LaTeX></strong> (kompleks orbital luar), sangat <strong>paramagnetik</strong> (5 elektron tak berpasangan).</p>,
              },
              {
                title: 'Analisis [Fe(CN)₆]³⁻',
                content: <p>Sianida (<LaTeX>{'CN^-'}</LaTeX>) adalah ligan medan kuat yang memaksa pemasangan elektron <LaTeX>{'3d'}</LaTeX>. Kelima elektron <LaTeX>{'3d'}</LaTeX> ditekan menjadi <LaTeX>{'\\uparrow\\downarrow\\ \\uparrow\\downarrow\\ \\uparrow'}</LaTeX>, menyisakan dua orbital <LaTeX>{'3d'}</LaTeX> dalam yang kosong. Orbital ini bercampur dengan <LaTeX>{'4s'}</LaTeX> dan <LaTeX>{'4p'}</LaTeX>. Hibridisasi <strong><LaTeX>{'d^2sp^3'}</LaTeX></strong> (kompleks orbital dalam), <strong>paramagnetik</strong> (1 elektron tak berpasangan).</p>,
              },
              {
                title: 'Kesimpulan',
                content: <p>Ligan medan lemah → orbital luar (<LaTeX>{'sp^3d^2'}</LaTeX>), spin tinggi. Ligan medan kuat → orbital dalam (<LaTeX>{'d^2sp^3'}</LaTeX>), spin rendah. Jenis ligan menentukan apakah orbital <LaTeX>{'3d'}</LaTeX> dalam ikut dipakai untuk hibridisasi.</p>,
              },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>VBT dapat memprediksi geometri dan warna kompleks hanya dari konfigurasi elektron logamnya.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>VBT memerlukan data magnetik eksperimen lebih dahulu untuk memilih skema hibridisasi (mis. <LaTeX>{'dsp^2'}</LaTeX> vs. <LaTeX>{'sp^3'}</LaTeX>) dan sama sekali tidak menjelaskan spektrum serapan (warna). Untuk itu diperlukan CFT/LFT.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Bandingkan kedua kompleks <LaTeX>{'Fe(III)'}</LaTeX> oktahedral. Pilih tab untuk melihat bagaimana kekuatan medan ligan menentukan skema hibridisasi dan sifat magnetiknya.</p>
          <TabbedExplorer
            tabs={[
              {
                label: '[FeF₆]³⁻',
                color: '#f59e0b',
                heading: <span>Kompleks orbital luar (medan lemah)</span>,
                body: (
                  <div>
                    <ul>
                      <li>Ligan: <LaTeX>{'F^-'}</LaTeX> — medan lemah, tidak memaksa pemasangan.</li>
                      <li>Konfigurasi: <LaTeX>{'3d^5'}</LaTeX> tetap tak berpasangan.</li>
                      <li>Hibridisasi: <strong><LaTeX>{'sp^3d^2'}</LaTeX></strong> (memakai orbital <LaTeX>{'4d'}</LaTeX> luar).</li>
                      <li>Spin: <strong>tinggi</strong>; 5 elektron tak berpasangan.</li>
                      <li>Magnetik: sangat <strong>paramagnetik</strong>, <LaTeX>{'\\mu \\approx 5.92\\ \\text{BM}'}</LaTeX>.</li>
                    </ul>
                  </div>
                ),
              },
              {
                label: '[Fe(CN)₆]³⁻',
                color: '#38bdf8',
                heading: <span>Kompleks orbital dalam (medan kuat)</span>,
                body: (
                  <div>
                    <ul>
                      <li>Ligan: <LaTeX>{'CN^-'}</LaTeX> — medan kuat, memaksa pemasangan.</li>
                      <li>Konfigurasi: <LaTeX>{'3d^5'}</LaTeX> ditekan menjadi <LaTeX>{'t_{2g}^5'}</LaTeX> dengan 1 elektron tak berpasangan.</li>
                      <li>Hibridisasi: <strong><LaTeX>{'d^2sp^3'}</LaTeX></strong> (memakai orbital <LaTeX>{'3d'}</LaTeX> dalam yang kosong).</li>
                      <li>Spin: <strong>rendah</strong>; 1 elektron tak berpasangan.</li>
                      <li>Magnetik: <strong>paramagnetik</strong> lemah, <LaTeX>{'\\mu \\approx 1.73\\ \\text{BM}'}</LaTeX>.</li>
                    </ul>
                  </div>
                ),
              },
            ]}
          />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Apa skema hibridisasi nikel dalam <LaTeX>{'[Ni(CN)_4]^{2-}'}</LaTeX>, mengingat kompleks ini diamagnetik?</span>,
              options: [
                { text: <LaTeX>{'sp^3'}</LaTeX>, isCorrect: false },
                { text: <LaTeX>{'dsp^2'}</LaTeX>, isCorrect: true },
                { text: <LaTeX>{'sp^3d^2'}</LaTeX>, isCorrect: false },
                { text: <LaTeX>{'d^2sp^3'}</LaTeX>, isCorrect: false },
              ],
              explanation: <span>Nikel(II) adalah sistem <LaTeX>{'d^8'}</LaTeX>. Agar diamagnetik, kedelapan elektron harus berpasangan sehingga satu orbital <LaTeX>{'3d'}</LaTeX> kosong. Hibridisasi orbital <LaTeX>{'3d'}</LaTeX> kosong ini dengan <LaTeX>{'4s'}</LaTeX> dan dua <LaTeX>{'4p'}</LaTeX> menghasilkan <LaTeX>{'dsp^2'}</LaTeX> (square planar).</span>,
            },
            {
              question: <span>Mengapa <LaTeX>{'[FeF_6]^{3-}'}</LaTeX> disebut kompleks orbital luar?</span>,
              options: [
                { text: <span><LaTeX>{'F^-'}</LaTeX> adalah ligan medan lemah sehingga elektron <LaTeX>{'3d'}</LaTeX> tidak berpasangan; logam memakai orbital <LaTeX>{'4d'}</LaTeX> luar untuk hibridisasi <LaTeX>{'sp^3d^2'}</LaTeX>.</span>, isCorrect: true },
                { text: <span><LaTeX>{'F^-'}</LaTeX> adalah ligan medan kuat yang memaksa pemakaian orbital <LaTeX>{'3d'}</LaTeX> dalam.</span>, isCorrect: false },
                { text: <span>Besi terlalu besar untuk hibridisasi orbital dalam.</span>, isCorrect: false },
                { text: <span>Kompleks bersifat diamagnetik sehingga harus orbital luar.</span>, isCorrect: false },
              ],
              explanation: <span>Karena <LaTeX>{'F^-'}</LaTeX> medan lemah, kelima elektron <LaTeX>{'3d'}</LaTeX> tetap tak berpasangan dan orbital <LaTeX>{'3d'}</LaTeX> dalam tidak tersedia. Logam terpaksa memakai orbital <LaTeX>{'4d'}</LaTeX> luar, menghasilkan hibridisasi <LaTeX>{'sp^3d^2'}</LaTeX> spin tinggi.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: '1.2', moduleId: 'c2', moduleTitle: 'Isomerisme dalam Kompleks Koordinasi' }]}
            feedsInto={[{ label: '1.4', moduleId: 'c4', moduleTitle: 'Teori Medan Kristal (CFT)' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
