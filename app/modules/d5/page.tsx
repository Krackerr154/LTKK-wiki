'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { ResultBox } from '../../components/ui/StepVisuals';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { TabbedExplorer } from '../../components/interactive/TabbedExplorer';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleD5() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/2" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 2</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul 2.5" moduleTitle="Analisis Kualitatif & Skema Pemisahan" block="B" partId="2" articleId="d5">
        <ConceptOverview>
          <p>
            <strong>Analisis kualitatif anorganik</strong> adalah identifikasi dan pemisahan sistematis kation
            logam dalam larutan air. Pemisahan dicapai melalui pengendapan selektif menggunakan reagen golongan
            tertentu, diikuti reaksi kompleksasi konfirmasi.
          </p>
          <p>Modul ini merinci kimia dan pemisahan <strong>kation Golongan 3</strong> (<LaTeX>{'Fe^{3+}, Al^{3+}, Cr^{3+}, Mn^{2+}, Co^{2+}, Ni^{2+}, Zn^{2+}'}</LaTeX>):</p>
          <ol>
            <li><strong>Pengendapan:</strong> larutan diberi <LaTeX>{'NH_4Cl'}</LaTeX>, <LaTeX>{'NH_3'}</LaTeX>, dan <LaTeX>{'(NH_4)_2S'}</LaTeX>. <LaTeX>{'Fe^{3+}, Cr^{3+}, Al^{3+}'}</LaTeX> mengendap sebagai hidroksida; <LaTeX>{'Ni^{2+}, Co^{2+}, Mn^{2+}, Zn^{2+}'}</LaTeX> sebagai sulfida.</li>
            <li><strong>Pelarutan selektif (HCl dingin 2 M):</strong> <LaTeX>{'MnS, ZnS'}</LaTeX> dan hidroksida larut; <LaTeX>{'NiS'}</LaTeX> dan <LaTeX>{'CoS'}</LaTeX> tetap sebagai residu hitam.</li>
            <li><strong>Residu Ni/Co:</strong> dilarutkan dalam asam panas. Ni dikonfirmasi dengan dimetilglioksima (endapan merah stroberi <LaTeX>{'[Ni(HDMG)_2]'}</LaTeX>); Co dengan tiosianat (biru <LaTeX>{'[Co(NCS)_4]^{2-}'}</LaTeX>).</li>
            <li><strong>Filtrat (Fe, Mn, Cr, Al, Zn):</strong> diolah dengan <LaTeX>{'NaOH'}</LaTeX> berlebih + <LaTeX>{'H_2O_2'}</LaTeX>, lalu uji konfirmasi masing-masing.</li>
          </ol>
        </ConceptOverview>

        <WorkedExamples>
          <WorkedExample
            title="Mengidentifikasi Campuran Golongan 3"
            problem={<p>Suatu larutan tak dikenal menghasilkan endapan hitam yang tidak larut dalam HCl dingin. Setelah dilarutkan dalam asam panas dan diberi dimetilglioksima dalam buffer amonia, terbentuk endapan merah stroberi. Logam apakah ini?</p>}
            steps={[
              {
                title: 'Tafsirkan endapan hitam',
                content: <p>Endapan hitam yang tak larut dalam HCl dingin menandakan <LaTeX>{'NiS'}</LaTeX> atau <LaTeX>{'CoS'}</LaTeX> (sulfida paling tak larut di Golongan 3).</p>,
              },
              {
                title: 'Tafsirkan uji DMG',
                content: <p>Endapan merah stroberi dengan dimetilglioksima adalah uji konfirmasi spesifik untuk nikel: <LaTeX>{'Ni^{2+} + 2H_2DMG \\rightarrow [Ni(HDMG)_2]'}</LaTeX> (square planar, diamagnetik).</p>,
              },
              {
                title: 'Kesimpulan',
                content: (
                  <ResultBox tone="success" label="Identifikasi">
                    Logam tersebut adalah <strong>nikel(II)</strong>. Endapan merah stroberi <LaTeX>{'[Ni(HDMG)_2]'}</LaTeX> bersifat diagnostik.
                  </ResultBox>
                ),
              },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Endapan hitam apa pun di Golongan 3 harus diabaikan sebagai belerang latar.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Endapan hitam adalah indikator utama <LaTeX>{'NiS'}</LaTeX> dan <LaTeX>{'CoS'}</LaTeX>. Ia harus dipisahkan hati-hati dan dilarutkan dalam asam panas untuk mengonfirmasi kedua logam katalitik penting ini.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Telusuri skema pemisahan sistematis kation Golongan 3 langkah demi langkah. Pilih tab untuk tiap tahap.</p>
          <TabbedExplorer
            tabs={[
              {
                label: 'Pengendapan', color: '#38bdf8', heading: <span>Tahap 1 — Pengendapan</span>,
                body: <div><p>Tambahkan <LaTeX>{'NH_4Cl + NH_3 + (NH_4)_2S'}</LaTeX>. Hidroksida: <LaTeX>{'Fe(OH)_3'}</LaTeX> (merah-cokelat), <LaTeX>{'Cr(OH)_3'}</LaTeX> (hijau), <LaTeX>{'Al(OH)_3'}</LaTeX> (putih). Sulfida: <LaTeX>{'NiS, CoS'}</LaTeX> (hitam), <LaTeX>{'MnS'}</LaTeX> (merah muda), <LaTeX>{'ZnS'}</LaTeX> (putih).</p></div>,
              },
              {
                label: 'Pelarutan HCl', color: '#f59e0b', heading: <span>Tahap 2 — Pelarutan Selektif</span>,
                body: <div><p>HCl 2 M dingin melarutkan <LaTeX>{'MnS, ZnS'}</LaTeX> dan semua hidroksida. <strong><LaTeX>{'NiS'}</LaTeX> dan <LaTeX>{'CoS'}</LaTeX> tidak larut</strong> dan tertinggal sebagai residu hitam.</p></div>,
              },
              {
                label: 'Residu Ni/Co', color: '#ef4444', heading: <span>Tahap 3 — Uji Ni & Co</span>,
                body: <div><p>Larutkan residu dalam asam panas. <strong>Ni:</strong> DMG → endapan merah stroberi <LaTeX>{'[Ni(HDMG)_2]'}</LaTeX>. <strong>Co:</strong> <LaTeX>{'NH_4SCN'}</LaTeX> dalam amil alkohol → biru royal <LaTeX>{'[Co(NCS)_4]^{2-}'}</LaTeX>.</p></div>,
              },
              {
                label: 'Filtrat', color: '#34d399', heading: <span>Tahap 4 — Analisis Filtrat</span>,
                body: <div><p>Filtrat (Fe, Mn, Cr, Al, Zn) diberi <LaTeX>{'NaOH'}</LaTeX> berlebih + <LaTeX>{'H_2O_2'}</LaTeX>. Endapan: <LaTeX>{'Fe(OH)_3'}</LaTeX> merah-cokelat dan <LaTeX>{'MnO_2'}</LaTeX> cokelat. Fe dikonfirmasi uji tiosianat merah-darah.</p></div>,
              },
            ]}
          />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Mengapa <LaTeX>{'ZnS'}</LaTeX> mengendap dengan <LaTeX>{'(NH_4)_2S'}</LaTeX> dalam media basa, sedangkan <LaTeX>{'CuS'}</LaTeX> mengendap dalam media sangat asam?</span>,
              options: [
                { text: 'Tembaga sulfida lebih larut daripada seng sulfida.', isCorrect: false },
                { text: <span>Media basa menaikkan konsentrasi <LaTeX>{'S^{2-}'}</LaTeX> bebas. <LaTeX>{'ZnS'}</LaTeX> memiliki <LaTeX>{'K_{sp}'}</LaTeX> relatif besar dan butuh <LaTeX>{'[S^{2-}]'}</LaTeX> tinggi, sedangkan <LaTeX>{'CuS'}</LaTeX> ber-<LaTeX>{'K_{sp}'}</LaTeX> sangat kecil sehingga mengendap bahkan di kondisi asam.</span>, isCorrect: true },
                { text: 'Seng tidak membentuk sulfida.', isCorrect: false },
                { text: 'Media basa mengoksidasi seng.', isCorrect: false },
              ],
              explanation: <span>Dalam asam, <LaTeX>{'H^+'}</LaTeX> tinggi menekan disosiasi <LaTeX>{'H_2S'}</LaTeX> sehingga <LaTeX>{'[S^{2-}]'}</LaTeX> sangat rendah — cukup hanya untuk sulfida sangat tak larut seperti <LaTeX>{'CuS'}</LaTeX> (<LaTeX>{'K_{sp}\\approx 10^{-36}'}</LaTeX>). Dalam basa, <LaTeX>{'[S^{2-}]'}</LaTeX> tinggi mengendapkan sulfida yang lebih larut seperti <LaTeX>{'ZnS'}</LaTeX>.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[
              { label: '2.3', moduleId: 'd3', moduleTitle: 'Kimia Deskriptif Logam 3d (Sc–Zn)' },
              { label: '2.4', moduleId: 'd4', moduleTitle: 'Kimia Deskriptif Logam 4d & 5d (PGM)' },
            ]}
            feedsInto={[]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
