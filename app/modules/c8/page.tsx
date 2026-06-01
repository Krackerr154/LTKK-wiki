'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { TabbedExplorer } from '../../components/interactive/TabbedExplorer';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleC8() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/1" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 1</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul 1.8" moduleTitle="Spektroskopi Elektronik & Warna Kompleks" block="A" partId="1" articleId="c8">
        <ConceptOverview>
          <p>
            Warna cerah kompleks logam transisi muncul dari penyerapan cahaya tampak yang mengeksitasi elektron
            dari orbital <LaTeX>{'d'}</LaTeX> berenergi rendah ke orbital <LaTeX>{'d'}</LaTeX> berenergi tinggi
            (sebuah <strong>transisi <LaTeX>{'d-d'}</LaTeX></strong>). Warna yang kita lihat adalah <strong>warna
            komplementer</strong> dari cahaya yang diserap (mis. menyerap cahaya hijau-biru pada <LaTeX>{'520\\ \\text{nm}'}</LaTeX>
            membuat <LaTeX>{'[Ti(H_2O)_6]^{3+}'}</LaTeX> tampak ungu).
          </p>
          <p>Agar transisi terjadi, eksitasi elektron harus mematuhi dua <strong>aturan seleksi</strong> mekanika kuantum:</p>

          <h3>1. Aturan Seleksi Laporte (aturan simetri/paritas)</h3>
          <p>Pada molekul dengan pusat simetri (seperti kompleks oktahedral teratur), transisi antar keadaan dengan paritas sama bersifat terlarang:</p>
          <EquationBlock latex={'g \\not\\leftrightarrow g \\quad \\text{dan} \\quad u \\not\\leftrightarrow u'} />
          <ul>
            <li>Karena orbital <LaTeX>{'d'}</LaTeX> simetris terhadap inversi (<LaTeX>{'g'}</LaTeX>), semua transisi <LaTeX>{'d-d'}</LaTeX> bersifat <strong>terlarang-Laporte</strong>.</li>
            <li>Transisi tetap terjadi dengan intensitas rendah (<LaTeX>{'\\epsilon \\approx 1-100\\ \\text{M}^{-1}\\text{cm}^{-1}'}</LaTeX>) karena pusat simetri sesaat hilang akibat vibrasi molekul (<em>vibronic coupling</em>).</li>
            <li>Kompleks <strong>tetrahedral</strong> tidak punya pusat inversi, sehingga transisi <LaTeX>{'d-d'}</LaTeX>-nya sebagian diizinkan dan jauh lebih intens (<LaTeX>{'\\epsilon \\approx 100-1000\\ \\text{M}^{-1}\\text{cm}^{-1}'}</LaTeX>).</li>
          </ul>

          <h3>2. Aturan Seleksi Spin</h3>
          <p>Transisi antar keadaan dengan multiplisitas spin berbeda bersifat terlarang ketat:</p>
          <EquationBlock latex={'\\Delta S = 0'} />
          <ul>
            <li>Eksitasi yang mengharuskan elektron membalik spin sangat terlarang.</li>
            <li><strong>Contoh:</strong> kompleks spin tinggi <LaTeX>{'d^5'}</LaTeX> (<LaTeX>{'[Mn(OH_2)_6]^{2+}'}</LaTeX>) memiliki keadaan dasar <LaTeX>{'t_{2g}^3 e_g^2'}</LaTeX> dengan 5 elektron tak berpasangan (<LaTeX>{'S = 5/2'}</LaTeX>). Setiap transisi <LaTeX>{'d-d'}</LaTeX> memaksa pemasangan elektron sehingga mengubah keadaan spin.</li>
            <li><strong>Hasil:</strong> semua transisi <LaTeX>{'d-d'}</LaTeX> pada spin tinggi <LaTeX>{'d^5'}</LaTeX> terlarang-spin, membuat <LaTeX>{'[Mn(OH_2)_6]^{2+}'}</LaTeX> sangat pucat hampir tak berwarna (<LaTeX>{'\\epsilon \\approx 0{,}01-0{,}1\\ \\text{M}^{-1}\\text{cm}^{-1}'}</LaTeX>).</li>
          </ul>

          <h3>Pita Muatan Transfer (Charge Transfer / CT)</h3>
          <p>Pita CT terjadi ketika elektron berpindah antara orbital logam dan orbital ligan. Transisi ini <strong>diizinkan baik secara Laporte maupun spin</strong>, sehingga sangat intens (<LaTeX>{'\\epsilon \\approx 1000-50000\\ \\text{M}^{-1}\\text{cm}^{-1}'}</LaTeX>).</p>
          <ul>
            <li><strong>LMCT (ligan ke logam):</strong> terjadi pada logam bertingkat oksidasi tinggi yang terikat ke ligan kaya elektron; elektron melompat dari ligan ke logam (mis. ungu pekat <LaTeX>{'MnO_4^-'}</LaTeX>, jingga <LaTeX>{'Cr_2O_7^{2-}'}</LaTeX>, kuning <LaTeX>{'PbCrO_4'}</LaTeX>).</li>
            <li><strong>MLCT (logam ke ligan):</strong> terjadi pada logam bertingkat oksidasi rendah yang terikat ke ligan <LaTeX>{'\\pi'}</LaTeX>-akseptor (mis. merah pekat <LaTeX>{'[Fe(bpy)_3]^{2+}'}</LaTeX>).</li>
          </ul>

          <h3>Warna Komplementer</h3>
          <p>Mata melihat warna yang <em>diteruskan</em>, bukan yang diserap. Kompleks yang menyerap pada satu rentang panjang gelombang akan tampak berwarna komplementernya: menyerap kuning → tampak ungu; menyerap hijau-biru → tampak ungu/merah. Ligan medan kuat menaikkan <LaTeX>{'\\Delta_o'}</LaTeX> sehingga pita serapan bergeser ke energi lebih tinggi (panjang gelombang lebih pendek), mengubah warna yang teramati (mis. <LaTeX>{'[Ni(H_2O)_6]^{2+}'}</LaTeX> hijau, <LaTeX>{'[Ni(NH_3)_6]^{2+}'}</LaTeX> biru, <LaTeX>{'[Ni(en)_3]^{2+}'}</LaTeX> ungu).</p>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="Hukum Beer-Lambert"
            latex={'A = \\epsilon b c'}
            variables={[
              { symbol: 'A', definition: 'absorbansi (tanpa satuan)' },
              { symbol: '\\epsilon', definition: 'absorptivitas molar (M⁻¹cm⁻¹)' },
              { symbol: 'b', definition: 'panjang lintasan sel (cm)' },
              { symbol: 'c', definition: 'konsentrasi (M)' },
            ]}
          />
          <EquationBlock
            label="Hubungan Energi Transisi"
            latex={'\\Delta = E = h\\nu = \\frac{hc}{\\lambda} = hc\\bar{\\nu}'}
            variables={[
              { symbol: 'h', definition: 'tetapan Planck (6{,}626 × 10⁻³⁴ J·s)' },
              { symbol: 'c', definition: 'laju cahaya (2{,}998 × 10⁸ m/s)' },
              { symbol: '\\bar{\\nu}', definition: 'bilangan gelombang (cm⁻¹)' },
            ]}
          />
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Menganalisis Spektrum Serapan Ti(III) d¹"
            problem={<p>Kompleks oktahedral <LaTeX>{'Ti(III)'}</LaTeX> (<LaTeX>{'d^1'}</LaTeX>) menunjukkan satu pita serapan pada <LaTeX>{'20300\\ \\text{cm}^{-1}'}</LaTeX>. (1) Hitung energi pembelahan <LaTeX>{'\\Delta_o'}</LaTeX> dalam kJ/mol. (2) Pita menampilkan bahu asimetris — jelaskan asal-usulnya.</p>}
            steps={[
              {
                title: 'Hitung Δₒ dari bilangan gelombang',
                content: (
                  <div>
                    <ul>
                      <li>Bilangan gelombang <LaTeX>{'\\bar{\\nu} = 20300\\ \\text{cm}^{-1} = 20300 \\times 10^2\\ \\text{m}^{-1}'}</LaTeX>.</li>
                      <li>Energi per foton: <LaTeX>{'E = hc\\bar{\\nu} = (6{,}626\\times10^{-34})(2{,}998\\times10^{8})(20300\\times10^{2}) = 4{,}032\\times10^{-19}\\ \\text{J}'}</LaTeX>.</li>
                      <li>Konversi ke energi molar: <LaTeX>{'E_{\\text{molar}} = (4{,}032\\times10^{-19})(6{,}022\\times10^{23}) = 242{,}8\\ \\text{kJ/mol}'}</LaTeX>.</li>
                      <li><strong><LaTeX>{'\\Delta_o = 242{,}8\\ \\text{kJ/mol}'}</LaTeX></strong>.</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: 'Jelaskan asal bahu (shoulder)',
                content: (
                  <div>
                    <ul>
                      <li><LaTeX>{'Ti(III)'}</LaTeX> adalah <LaTeX>{'d^1'}</LaTeX>. Eksitasi mempromosikan satu elektron: <LaTeX>{'t_{2g}^1 e_g^0 \\rightarrow t_{2g}^0 e_g^1'}</LaTeX>.</li>
                      <li>Keadaan tereksitasi (<LaTeX>{'e_g^1'}</LaTeX>) terdegenerasi secara elektronik, sehingga memicu <strong>distorsi Jahn-Teller</strong> pada keadaan tereksitasi.</li>
                      <li>Distorsi memecah tingkat <LaTeX>{'e_g'}</LaTeX> menjadi dua keadaan berenergi sedikit berbeda, sehingga transisi tunggal terpecah menjadi dua transisi berdekatan yang tampak sebagai bahu pada satu pita.</li>
                    </ul>
                  </div>
                ),
              },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Jika kompleks menyerap cahaya kuning, kompleks itu tampak kuning.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Kompleks meneruskan/memantulkan warna <strong>komplementer</strong>-nya. Kompleks yang menyerap cahaya kuning justru tampak ungu (violet).</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Jelajahi aturan seleksi dan asal warna kompleks. Pilih tab untuk meninjau aturan Laporte, aturan spin, pita muatan transfer, dan warna komplementer.</p>
          <TabbedExplorer
            tabs={[
              {
                label: 'Aturan Laporte',
                color: '#38bdf8',
                heading: <span>Aturan seleksi Laporte</span>,
                body: (
                  <div>
                    <p>Pada pusat simetri, transisi <LaTeX>{'g \\leftrightarrow g'}</LaTeX> terlarang. Karena orbital <LaTeX>{'d'}</LaTeX> bersifat <LaTeX>{'g'}</LaTeX>, semua transisi <LaTeX>{'d-d'}</LaTeX> oktahedral terlarang-Laporte.</p>
                    <p>Vibrasi molekul (<em>vibronic coupling</em>) sesaat menghilangkan pusat simetri, memberi serapan lemah <LaTeX>{'\\epsilon \\approx 1-100'}</LaTeX>. Kompleks tetrahedral (tanpa inversi) jauh lebih intens.</p>
                  </div>
                ),
              },
              {
                label: 'Aturan spin',
                color: '#f59e0b',
                heading: <span>Aturan seleksi spin (<LaTeX>{'\\Delta S = 0'}</LaTeX>)</span>,
                body: (
                  <div>
                    <p>Transisi yang memaksa elektron membalik spin sangat terlarang.</p>
                    <p>Spin tinggi <LaTeX>{'d^5'}</LaTeX> (<LaTeX>{'[Mn(OH_2)_6]^{2+}'}</LaTeX>) memiliki <LaTeX>{'S = 5/2'}</LaTeX>; setiap transisi <LaTeX>{'d-d'}</LaTeX> mengubah spin, sehingga warnanya sangat pucat (<LaTeX>{'\\epsilon \\approx 0{,}01-0{,}1'}</LaTeX>).</p>
                  </div>
                ),
              },
              {
                label: 'Transisi muatan (CT)',
                color: '#c084fc',
                heading: <span>Pita muatan transfer</span>,
                body: (
                  <div>
                    <p>Diizinkan Laporte <em>dan</em> spin → sangat intens (<LaTeX>{'\\epsilon \\approx 1000-50000'}</LaTeX>).</p>
                    <ul>
                      <li><strong>LMCT:</strong> elektron ligan → logam (mis. <LaTeX>{'MnO_4^-'}</LaTeX> ungu, <LaTeX>{'Cr_2O_7^{2-}'}</LaTeX> jingga).</li>
                      <li><strong>MLCT:</strong> elektron logam → ligan <LaTeX>{'\\pi'}</LaTeX>-akseptor (mis. <LaTeX>{'[Fe(bpy)_3]^{2+}'}</LaTeX> merah).</li>
                    </ul>
                  </div>
                ),
              },
              {
                label: 'Warna komplementer',
                color: '#34d399',
                heading: <span>Warna yang teramati</span>,
                body: (
                  <div>
                    <p>Warna yang terlihat = komplementer dari yang diserap. Menyerap kuning → tampak ungu.</p>
                    <p>Ligan lebih kuat menaikkan <LaTeX>{'\\Delta_o'}</LaTeX> → serapan bergeser ke energi tinggi: <LaTeX>{'[Ni(H_2O)_6]^{2+}'}</LaTeX> hijau → <LaTeX>{'[Ni(NH_3)_6]^{2+}'}</LaTeX> biru → <LaTeX>{'[Ni(en)_3]^{2+}'}</LaTeX> ungu.</p>
                  </div>
                ),
              },
            ]}
          />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Mengapa ion permanganat (<LaTeX>{'MnO_4^-'}</LaTeX>) menampilkan warna ungu yang sangat intens meskipun <LaTeX>{'Mn(VII)'}</LaTeX> tidak punya elektron <LaTeX>{'d'}</LaTeX>?</span>,
              options: [
                { text: <span>Ia mengalami transisi <LaTeX>{'d-d'}</LaTeX> terlarang-spin.</span>, isCorrect: false },
                { text: <span>Warna berasal dari transisi muatan transfer ligan-ke-logam (LMCT) yang sepenuhnya diizinkan, di mana elektron melompat dari pasangan mandiri oksigen ke orbital <LaTeX>{'d'}</LaTeX> kosong mangan.</span>, isCorrect: true },
                { text: <span>Vibronic coupling pada geometri tetrahedral.</span>, isCorrect: false },
                { text: 'Mangan bersifat paramagnetik.', isCorrect: false },
              ],
              explanation: <span><LaTeX>{'Mn(VII)'}</LaTeX> adalah <LaTeX>{'d^0'}</LaTeX>. Transisi LMCT yang diizinkan paritas memindahkan kerapatan elektron dari ligan oksigen ke orbital <LaTeX>{'d'}</LaTeX> kosong logam yang sangat positif, menghasilkan absorptivitas molar sangat tinggi.</span>,
            },
            {
              question: <span>Jika sebuah larutan kompleks menyerap kuat pada <LaTeX>{'\\sim 570\\ \\text{nm}'}</LaTeX> (kuning), warna apa yang teramati?</span>,
              options: [
                { text: 'Kuning', isCorrect: false },
                { text: 'Ungu (violet)', isCorrect: true },
                { text: 'Hijau', isCorrect: false },
                { text: 'Tak berwarna', isCorrect: false },
              ],
              explanation: <span>Warna yang teramati adalah komplementer dari yang diserap. Kompleks yang menyerap cahaya kuning tampak ungu.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: '1.6', moduleId: 'c6', moduleTitle: 'Distorsi Jahn-Teller' }]}
            feedsInto={[{ label: '1.9', moduleId: 'c9', moduleTitle: 'Senyawa Spin Crossover (SCO)' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
