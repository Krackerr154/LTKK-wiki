'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { ResultBox } from '../../components/ui/StepVisuals';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { TabbedExplorer } from '../../components/interactive/TabbedExplorer';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleC9() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/1" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 1</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul 1.9" moduleTitle="Senyawa Spin Crossover (SCO)" block="A" partId="1" articleId="c9">
        <ConceptOverview>
          <p>
            <strong>Spin Crossover (SCO)</strong> adalah fenomena ketika kompleks logam transisi oktahedral
            dengan konfigurasi <LaTeX>{'d^4'}</LaTeX> hingga <LaTeX>{'d^7'}</LaTeX> beralih antara keadaan
            <strong> spin rendah (LS)</strong> dan <strong>spin tinggi (HS)</strong>. Peralihan ini terjadi ketika
            energi pembelahan medan kristal hampir setara dengan energi pemasangan spin (<LaTeX>{'\\Delta_o \\approx P'}</LaTeX>).
          </p>
          <p>SCO paling umum diamati pada kompleks <strong>besi(II)</strong> oktahedral (konfigurasi <LaTeX>{'d^6'}</LaTeX>):</p>
          <ul>
            <li><strong>Keadaan LS (<LaTeX>{'t_{2g}^6 e_g^0'}</LaTeX>):</strong> semua elektron berpasangan (<LaTeX>{'S = 0'}</LaTeX>, diamagnetik). Karena orbital anti-ikatan <LaTeX>{'e_g'}</LaTeX> kosong, ikatan <LaTeX>{'Fe-L'}</LaTeX> pendek dan kuat.</li>
            <li><strong>Keadaan HS (<LaTeX>{'t_{2g}^4 e_g^2'}</LaTeX>):</strong> empat elektron tak berpasangan (<LaTeX>{'S = 2'}</LaTeX>, paramagnetik). Pengisian orbital anti-ikatan <LaTeX>{'e_g'}</LaTeX> melemahkan ikatan dan memuaikan kulit koordinasi sebesar <LaTeX>{'0.15 - 0.22\\ \\text{\\AA}'}</LaTeX>.</li>
          </ul>
          <p>SCO dipicu oleh rangsangan eksternal:</p>
          <ol>
            <li><strong>Suhu:</strong> pada suhu rendah sistem meminimalkan entalpi dengan mengambil keadaan LS yang lebih stabil; saat suhu naik, sistem beralih ke HS untuk memaksimalkan entropi.</li>
            <li><strong>Tekanan:</strong> menaikkan tekanan menekan sistem sehingga menguntungkan volume LS yang lebih kecil.</li>
            <li><strong>Cahaya (Efek LIESST):</strong> iradiasi laser pada suhu kriogenik dapat menjebak kompleks dalam keadaan HS metastabil.</li>
          </ol>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="Fraksi Spin Tinggi"
            latex={'\\gamma_{\\text{HS}} = \\frac{\\chi_T}{\\chi_{\\text{HS}}}'}
            variables={[{ symbol: '\\chi', definition: 'suseptibilitas magnetik' }]}
          />
          <EquationBlock
            label="Suhu Titik Tengah Transisi"
            latex={'\\gamma_{\\text{HS}}(T_{1/2}) = 0.5'}
          />
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Menafsirkan Profil Spin Crossover"
            problem={<p>Polimer koordinasi <LaTeX>{'[Fe(Htrz)_3](TFA)_2'}</LaTeX> menunjukkan transisi spin termal dengan titik tengah pemanasan <LaTeX>{'T_{1/2}\\uparrow = 313\\ \\text{K}'}</LaTeX> dan titik tengah pendinginan <LaTeX>{'T_{1/2}\\downarrow = 295\\ \\text{K}'}</LaTeX>. Hitung lebar lengkung histeresis dan jelaskan maknanya.</p>}
            steps={[
              {
                title: 'Hitung lebar histeresis',
                content: <p><LaTeX>{'\\Delta T = T_{1/2}\\uparrow - T_{1/2}\\downarrow = 313 - 295 = 18\\ \\text{K}'}</LaTeX>.</p>,
              },
              {
                title: 'Maknai signifikansinya',
                content: (
                  <ResultBox tone="info" label="Bistabilitas">
                    Lengkung histeresis <strong>18 K</strong> ini melingkupi suhu ruang. Di dalam jendela suhu
                    tersebut material bersifat <strong>bistabil</strong>: dapat berada dalam keadaan LS diamagnetik
                    atau HS paramagnetik pada suhu yang sama, bergantung pada riwayat termalnya. Efek memori termal
                    ini berguna untuk perangkat elektronik molekuler, sakelar optik, dan penyimpanan data.
                  </ResultBox>
                ),
              },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Spin crossover adalah reaksi redoks.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Tingkat oksidasi pusat besi tetap <LaTeX>{'+2'}</LaTeX> selama transisi. Hanya konfigurasi elektron (keadaan spin) yang berubah, bukan jumlah elektron.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Jelajahi keadaan spin, pemicu transisi, dan profil histeresis SCO. Pilih tab untuk meninjau masing-masing aspek.</p>
          <TabbedExplorer
            tabs={[
              {
                label: 'Keadaan LS vs HS',
                color: '#38bdf8',
                heading: <span>Dua keadaan spin pada Fe(II) d⁶</span>,
                body: (
                  <div>
                    <ul>
                      <li><strong>LS (<LaTeX>{'t_{2g}^6 e_g^0'}</LaTeX>):</strong> <LaTeX>{'S = 0'}</LaTeX>, diamagnetik, ikatan <LaTeX>{'Fe-L'}</LaTeX> pendek/kuat.</li>
                      <li><strong>HS (<LaTeX>{'t_{2g}^4 e_g^2'}</LaTeX>):</strong> <LaTeX>{'S = 2'}</LaTeX>, paramagnetik, ikatan memuai <LaTeX>{'0.15-0.22\\ \\text{\\AA}'}</LaTeX>.</li>
                    </ul>
                  </div>
                ),
              },
              {
                label: 'Pemicu suhu',
                color: '#f59e0b',
                heading: <span>Keseimbangan entalpi–entropi</span>,
                body: (
                  <div>
                    <p>Suhu rendah → entalpi mendominasi → keadaan LS yang stabil. Suhu tinggi → entropi mendominasi (kebebasan vibrasi ikatan panjang HS lebih besar) → beralih ke HS.</p>
                  </div>
                ),
              },
              {
                label: 'Tekanan & cahaya',
                color: '#c084fc',
                heading: <span>Tekanan dan efek LIESST</span>,
                body: (
                  <div>
                    <ul>
                      <li><strong>Tekanan:</strong> menekan sistem → menguntungkan volume LS yang lebih kecil.</li>
                      <li><strong>LIESST:</strong> iradiasi laser pada suhu kriogenik menjebak kompleks dalam HS metastabil.</li>
                    </ul>
                  </div>
                ),
              },
              {
                label: 'Profil & histeresis',
                color: '#ef4444',
                heading: <span>Profil transisi spin</span>,
                body: (
                  <div>
                    <p>Plot fraksi HS (<LaTeX>{'\\gamma_{\\text{HS}}'}</LaTeX>) terhadap suhu memberi empat profil:</p>
                    <ul>
                      <li><strong>Abrupt:</strong> material kooperatif tinggi (mis. <LaTeX>{'[Fe(phen)_2(NCS)_2]'}</LaTeX>).</li>
                      <li><strong>Histeresis:</strong> <LaTeX>{'T_{1/2}\\uparrow \\neq T_{1/2}\\downarrow'}</LaTeX> → bistabilitas (efek memori).</li>
                      <li><strong>Gradual:</strong> kooperativitas rendah.</li>
                      <li><strong>Dua langkah / tidak lengkap.</strong></li>
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
              question: <span>Apa keadaan spin dan suseptibilitas magnetik besi(II) pada fase suhu rendah suatu kompleks spin crossover standar?</span>,
              options: [
                { text: <span>Spin tinggi (<LaTeX>{'S=2'}</LaTeX>), paramagnetik</span>, isCorrect: false },
                { text: <span>Spin rendah (<LaTeX>{'S=0'}</LaTeX>), diamagnetik</span>, isCorrect: true },
                { text: <span>Spin tinggi (<LaTeX>{'S=0'}</LaTeX>), diamagnetik</span>, isCorrect: false },
                { text: <span>Spin rendah (<LaTeX>{'S=1'}</LaTeX>), paramagnetik</span>, isCorrect: false },
              ],
              explanation: <span>Pada suhu rendah entalpi mendominasi sehingga konfigurasi spin rendah <LaTeX>{'t_{2g}^6 e_g^0'}</LaTeX> (<LaTeX>{'S = 0'}</LaTeX>) yang diamagnetik lebih disukai.</span>,
            },
            {
              question: <span>Mengapa lengkung histeresis pada SCO bernilai penting untuk aplikasi?</span>,
              options: [
                { text: 'Karena mengubah tingkat oksidasi besi secara reversibel.', isCorrect: false },
                { text: 'Karena memberi bistabilitas — dua keadaan spin dapat ada pada suhu sama bergantung riwayat termal (efek memori).', isCorrect: true },
                { text: 'Karena menghilangkan sifat paramagnetik sepenuhnya.', isCorrect: false },
                { text: 'Karena menurunkan energi pemasangan menjadi nol.', isCorrect: false },
              ],
              explanation: <span>Histeresis berarti suhu transisi saat pemanasan berbeda dari saat pendinginan, menghasilkan jendela bistabilitas yang berguna sebagai sakelar/penyimpan data molekuler.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: '1.8', moduleId: 'c8', moduleTitle: 'Spektroskopi Elektronik & Warna Kompleks' }]}
            feedsInto={[]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
