'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { HighlightTable, ResultBox } from '../../components/ui/StepVisuals';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { TabbedExplorer } from '../../components/interactive/TabbedExplorer';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleD1() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/2" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 2</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul 2.1" moduleTitle="Tren Periodik & Karakteristik Logam Transisi" block="B" partId="2" articleId="d1">
        <ConceptOverview>
          <p>
            <strong>Logam transisi</strong> (unsur blok-<LaTeX>{'d'}</LaTeX> pada Golongan 3–12) dicirikan oleh
            pengisian subkulit <LaTeX>{'d'}</LaTeX> secara bertahap. Sifatnya sangat berbeda dari unsur golongan
            utama karena tiga tren periodik utama berikut.
          </p>

          <h3>1. Sifat Fisik</h3>
          <p>
            Logam transisi adalah logam khas: keras, sangat rapat, serta memiliki titik leleh dan titik didih
            tinggi. Hal ini disebabkan keterlibatan elektron <LaTeX>{'s'}</LaTeX> terluar maupun elektron
            <LaTeX>{'d'}</LaTeX> bagian dalam dalam ikatan logam, yang menghasilkan kisi sangat kohesif.
          </p>
          <ul>
            <li><strong>Pengecualian Golongan 12:</strong> Seng (<LaTeX>{'Zn'}</LaTeX>), kadmium (<LaTeX>{'Cd'}</LaTeX>), dan raksa (<LaTeX>{'Hg'}</LaTeX>) memiliki titik leleh sangat rendah (raksa cair pada suhu kamar). Konfigurasi <LaTeX>{'d^{10}'}</LaTeX> penuh menyebabkan elektron <LaTeX>{'d'}</LaTeX> tidak ikut dalam ikatan logam.</li>
          </ul>

          <h3>2. Jari-jari Atom dan Ion (Kontraksi Lantanida)</h3>
          <ul>
            <li>Menuruni golongan, ukuran atom umumnya bertambah karena kulit baru ditambahkan (<LaTeX>{'3d \\rightarrow 4d'}</LaTeX>).</li>
            <li>Namun, ukuran unsur <LaTeX>{'4d'}</LaTeX> <strong>hampir identik</strong> dengan unsur <LaTeX>{'5d'}</LaTeX>.</li>
            <li><strong>Kontraksi Lantanida:</strong> Pengisian kulit <LaTeX>{'4f'}</LaTeX> sebelum deret <LaTeX>{'5d'}</LaTeX> menambah 14 proton, tetapi elektron <LaTeX>{'f'}</LaTeX> memberi perisai yang sangat lemah terhadap muatan inti tersebut. Elektron <LaTeX>{'5d'}</LaTeX> terluar mengalami muatan inti efektif (<LaTeX>{'Z_{\\text{eff}}'}</LaTeX>) yang kuat, sehingga tertarik mendekat dan membatalkan kenaikan ukuran yang diharapkan.</li>
            <li><strong>Akibat:</strong> logam <LaTeX>{'5d'}</LaTeX> luar biasa rapat (mis. osmium memiliki densitas <LaTeX>{'22{,}59\\ \\text{g/cm}^3'}</LaTeX>, tertinggi di antara semua unsur).</li>
          </ul>

          <h3>3. Tingkat Oksidasi dan Kestabilan</h3>
          <ul>
            <li>Logam transisi menunjukkan beragam tingkat oksidasi karena tingkat energi elektron <LaTeX>{'ns'}</LaTeX> dan <LaTeX>{'(n-1)d'}</LaTeX> berdekatan. Mangan memiliki rentang terbanyak (+2 hingga +7).</li>
            <li>Pada deret <LaTeX>{'3d'}</LaTeX>, tingkat oksidasi rendah (+2, +3) sangat stabil.</li>
            <li><strong>Pada deret <LaTeX>{'4d'}</LaTeX> dan <LaTeX>{'5d'}</LaTeX>, tingkat oksidasi tinggi jauh lebih stabil</strong> (mis. <LaTeX>{'Cr(VI)'}</LaTeX> adalah oksidator kuat yang tidak stabil, sedangkan <LaTeX>{'Mo(VI)'}</LaTeX> dan <LaTeX>{'W(VI)'}</LaTeX> sangat stabil dan sukar tereduksi).</li>
          </ul>

          <h3>4. Potensial Reduksi (<LaTeX>{'E^\\circ'}</LaTeX>)</h3>
          <ul>
            <li>Potensial reduksi standar pasangan <LaTeX>{'M^{2+}/M'}</LaTeX> untuk logam <LaTeX>{'3d'}</LaTeX> sebagian besar negatif, artinya logam tersebut dioksidasi oleh asam encer sambil melepaskan gas hidrogen:</li>
          </ul>
          <EquationBlock latex={'Fe(s) + 2H^+(aq) \\rightarrow Fe^{2+}(aq) + H_2(g) \\quad (E^\\circ = -0{,}44\\ \\text{V})'} />
          <ul>
            <li><strong>Pengecualian tembaga:</strong> tembaga memiliki potensial reduksi positif (<LaTeX>{'E^\\circ = +0{,}34\\ \\text{V}'}</LaTeX>) dan tidak bereaksi dengan asam non-oksidator seperti <LaTeX>{'HCl'}</LaTeX>.</li>
          </ul>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="Potensial Oksidasi Ion Divalen 3d"
            latex={'M^{2+}(aq) + 2e^- \\rightleftharpoons M(s)'}
          />
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
            Potensial menjadi makin kurang negatif dari Sc ke Cu, mencerminkan reaktivitas yang menurun di
            sepanjang deret. Beberapa nilai acuan:
          </p>
          <HighlightTable
            columns={[{ header: 'Pasangan' }, { header: <LaTeX>{'E^\\circ'}</LaTeX>, align: 'center' }, { header: 'Catatan' }]}
            rows={[
              { cells: [<LaTeX key="zn">{'Zn^{2+}/Zn'}</LaTeX>, '−0,76 V', 'paling reduktif'], highlight: 'amber' },
              { cells: [<LaTeX key="fe">{'Fe^{2+}/Fe'}</LaTeX>, '−0,44 V', 'larut dalam asam encer'] },
              { cells: [<LaTeX key="cu">{'Cu^{2+}/Cu'}</LaTeX>, '+0,34 V', 'tidak larut dalam HCl'], highlight: 'green' },
            ]}
          />
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Menyelesaikan Soal Pendesakan Logam dan Reaktivitas"
            problem={<p>Dengan potensial standar, jelaskan mengapa menambahkan logam seng ke larutan biru tembaga(II) sulfat menghasilkan larutan tak berwarna dan endapan cokelat-kemerahan, sedangkan menambahkan tembaga ke larutan seng sulfat tidak menghasilkan reaksi. Diketahui <LaTeX>{'E^\\circ(Zn^{2+}/Zn) = -0{,}76\\ \\text{V}'}</LaTeX> dan <LaTeX>{'E^\\circ(Cu^{2+}/Cu) = +0{,}34\\ \\text{V}'}</LaTeX>.</p>}
            steps={[
              {
                title: 'Tulis setengah reaksi dan hitung potensial sel',
                content: (
                  <div>
                    <ul>
                      <li>Oksidasi: <LaTeX>{'Zn(s) \\rightarrow Zn^{2+}(aq) + 2e^- \\quad (E^\\circ = +0{,}76\\ \\text{V})'}</LaTeX></li>
                      <li>Reduksi: <LaTeX>{'Cu^{2+}(aq) + 2e^- \\rightarrow Cu(s) \\quad (E^\\circ = +0{,}34\\ \\text{V})'}</LaTeX></li>
                      <li>Reaksi total: <LaTeX>{'Zn(s) + Cu^{2+}(aq) \\rightarrow Zn^{2+}(aq) + Cu(s)'}</LaTeX></li>
                    </ul>
                    <EquationBlock latex={'E^\\circ_{\\text{sel}} = +0{,}76 + 0{,}34 = +1{,}10\\ \\text{V}'} />
                  </div>
                ),
              },
              {
                title: 'Interpretasi spontanitas',
                content: (
                  <ResultBox tone="success" label="Hasil">
                    Karena <LaTeX>{'E^\\circ_{\\text{sel}} = +1{,}10\\ \\text{V} > 0'}</LaTeX>, reaksi sangat
                    spontan (<LaTeX>{'\\Delta G^\\circ < 0'}</LaTeX>). Seng bertindak sebagai reduktor, mendesak
                    ion biru <LaTeX>{'Cu^{2+}'}</LaTeX> menjadi ion tak berwarna <LaTeX>{'Zn^{2+}'}</LaTeX>
                    (<LaTeX>{'d^{10}'}</LaTeX>) dan mengendapkan logam tembaga cokelat-kemerahan.
                  </ResultBox>
                ),
              },
              {
                title: 'Reaksi sebaliknya',
                content: <p>Untuk <LaTeX>{'Cu + Zn^{2+} \\rightarrow Cu^{2+} + Zn'}</LaTeX>, potensialnya <LaTeX>{'E^\\circ_{\\text{sel}} = -1{,}10\\ \\text{V}'}</LaTeX> sehingga tidak spontan. Karena itu tidak ada reaksi yang teramati.</p>,
              },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Densitas unsur pasti meningkat secara mulus menuruni setiap golongan karena massa atom bertambah.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Densitas memang naik, tetapi lonjakan dari <LaTeX>{'4d'}</LaTeX> ke <LaTeX>{'5d'}</LaTeX> sangat besar karena massa atom hampir menggandakan diri sementara volume atom tetap akibat kontraksi lantanida.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Jelajahi empat tren periodik kunci logam transisi. Pilih tab untuk meninjau sifat fisik, jari-jari, keadaan oksidasi, dan potensial reduksi.</p>
          <TabbedExplorer
            tabs={[
              {
                label: 'Sifat fisik',
                color: '#38bdf8',
                heading: <span>Kekerasan dan titik leleh tinggi</span>,
                body: (
                  <div>
                    <p>Elektron <LaTeX>{'s'}</LaTeX> dan <LaTeX>{'d'}</LaTeX> bersama-sama memperkuat ikatan logam sehingga kisi sangat kohesif: logam transisi keras, rapat, dan bertitik leleh tinggi.</p>
                    <p>Pengecualian Golongan 12 (<LaTeX>{'Zn, Cd, Hg'}</LaTeX>): konfigurasi <LaTeX>{'d^{10}'}</LaTeX> penuh membuat elektron <LaTeX>{'d'}</LaTeX> tidak ikut berikatan, sehingga titik lelehnya rendah dan raksa bahkan cair pada suhu kamar.</p>
                  </div>
                ),
              },
              {
                label: 'Jari-jari & kontraksi lantanida',
                color: '#c084fc',
                heading: <span>Plateau ukuran 4d–5d</span>,
                body: (
                  <div>
                    <p>Pengisian kulit <LaTeX>{'4f'}</LaTeX> menambah 14 proton dengan perisai yang buruk, sehingga <LaTeX>{'Z_{\\text{eff}}'}</LaTeX> pada elektron <LaTeX>{'5d'}</LaTeX> meningkat dan ukuran atom tidak bertambah.</p>
                    <ul>
                      <li>Jari-jari <LaTeX>{'4d \\approx 5d'}</LaTeX> (plateau ukuran).</li>
                      <li>Densitas <LaTeX>{'5d'}</LaTeX> sangat besar; osmium <LaTeX>{'= 22{,}59\\ \\text{g/cm}^3'}</LaTeX>.</li>
                    </ul>
                  </div>
                ),
              },
              {
                label: 'Keadaan oksidasi',
                color: '#f59e0b',
                heading: <span>Variasi tingkat oksidasi</span>,
                body: (
                  <div>
                    <p>Energi <LaTeX>{'ns'}</LaTeX> dan <LaTeX>{'(n-1)d'}</LaTeX> yang berdekatan menghasilkan banyak tingkat oksidasi. Mangan memiliki rentang +2 hingga +7.</p>
                    <ul>
                      <li><LaTeX>{'3d'}</LaTeX>: tingkat rendah (+2, +3) stabil.</li>
                      <li><LaTeX>{'4d/5d'}</LaTeX>: tingkat tinggi lebih stabil, mis. <LaTeX>{'Mo(VI)'}</LaTeX> dan <LaTeX>{'W(VI)'}</LaTeX> sukar direduksi.</li>
                    </ul>
                  </div>
                ),
              },
              {
                label: 'Potensial reduksi',
                color: '#34d399',
                heading: <span>Tren reaktivitas Sc → Cu</span>,
                body: (
                  <div>
                    <p>Potensial <LaTeX>{'M^{2+}/M'}</LaTeX> makin kurang negatif dari Sc ke Cu (reaktivitas menurun):</p>
                    <ul>
                      <li>Logam <LaTeX>{'3d'}</LaTeX> umumnya <LaTeX>{'E^\\circ < 0'}</LaTeX> → larut dalam asam encer melepas <LaTeX>{'H_2'}</LaTeX>.</li>
                      <li>Tembaga <LaTeX>{'E^\\circ = +0{,}34\\ \\text{V}'}</LaTeX> → tidak bereaksi dengan <LaTeX>{'HCl'}</LaTeX>.</li>
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
              question: <span>Mengapa raksa (<LaTeX>{'Hg'}</LaTeX>) memiliki titik leleh luar biasa rendah (<LaTeX>{'-39\\,^\\circ\\text{C}'}</LaTeX>) dibandingkan emas (<LaTeX>{'Au'}</LaTeX>, <LaTeX>{'1064\\,^\\circ\\text{C}'}</LaTeX>)?</span>,
              options: [
                { text: 'Raksa memiliki nomor atom yang lebih tinggi.', isCorrect: false },
                { text: <span>Emas adalah logam <LaTeX>{'5d'}</LaTeX>, sedangkan raksa adalah logam <LaTeX>{'4d'}</LaTeX>.</span>, isCorrect: false },
                { text: <span>Raksa memiliki konfigurasi kulit tertutup <LaTeX>{'6s^2 5d^{10}'}</LaTeX>; elektron terluarnya terikat kuat dan tidak terlibat dalam ikatan logam terdelokalisasi.</span>, isCorrect: true },
                { text: 'Raksa mengalami oksidasi yang cepat.', isCorrect: false },
              ],
              explanation: <span>Konfigurasi <LaTeX>{'d^{10}'}</LaTeX> penuh dan <LaTeX>{'s^2'}</LaTeX> stabil pada Golongan 12 meminimalkan ikatan logam, sehingga kohesi kisinya lemah dan titik lelehnya sangat rendah.</span>,
            },
            {
              question: <span>Mengapa logam tembaga tidak larut dalam <LaTeX>{'HCl'}</LaTeX> encer, sedangkan besi larut?</span>,
              options: [
                { text: <span>Potensial <LaTeX>{'Cu^{2+}/Cu'}</LaTeX> positif (<LaTeX>{'+0{,}34\\ \\text{V}'}</LaTeX>) sehingga <LaTeX>{'H^+'}</LaTeX> tidak mampu mengoksidasinya, sedangkan <LaTeX>{'Fe'}</LaTeX> bernilai negatif.</span>, isCorrect: true },
                { text: 'Tembaga membentuk lapisan oksida pelindung di dalam HCl.', isCorrect: false },
                { text: 'Besi adalah logam mulia.', isCorrect: false },
                { text: 'HCl bukan asam yang cukup kuat untuk besi.', isCorrect: false },
              ],
              explanation: <span>Hanya logam dengan <LaTeX>{'E^\\circ(M^{2+}/M) < 0'}</LaTeX> yang dapat dioksidasi oleh <LaTeX>{'H^+'}</LaTeX> dari asam non-oksidator. Tembaga (<LaTeX>{'+0{,}34\\ \\text{V}'}</LaTeX>) berada di atas hidrogen sehingga inert terhadap <LaTeX>{'HCl'}</LaTeX>.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            feedsInto={[{ label: '2.2', moduleId: 'd2', moduleTitle: 'Metalurgi & Proses Ekstraksi Industri' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
