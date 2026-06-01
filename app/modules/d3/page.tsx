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

export default function ModuleD3() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/2" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 2</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul 2.3" moduleTitle="Kimia Deskriptif Logam 3d (Sc–Zn)" block="B" partId="2" articleId="d3">
        <ConceptOverview>
          <p>
            Modul ini memberikan profil kimia kelompok-demi-kelompok deret transisi <LaTeX>{'3d'}</LaTeX>,
            menyoroti warna khas, keadaan oksidasi, dan reaksi identifikasi yang penting.
          </p>
          <ul>
            <li><strong>Titanium:</strong> <LaTeX>{'TiO_2'}</LaTeX> pigmen putih inert; <LaTeX>{'TiCl_4'}</LaTeX> cairan tak berwarna yang berasap di udara lembap.</li>
            <li><strong>Vanadium:</strong> empat keadaan oksidasi berwarna — kuning <LaTeX>{'V(V)'}</LaTeX> → biru <LaTeX>{'V(IV)'}</LaTeX> → hijau <LaTeX>{'V(III)'}</LaTeX> → ungu <LaTeX>{'V(II)'}</LaTeX>.</li>
            <li><strong>Kromium:</strong> kesetimbangan kromat (kuning) ⇌ dikromat (oranye) bergantung pH; dikromat oksidan kuat menjadi <LaTeX>{'Cr^{3+}'}</LaTeX> hijau.</li>
            <li><strong>Mangan:</strong> permanganat (<LaTeX>{'MnO_4^-'}</LaTeX>) ungu, oksidan kuat → <LaTeX>{'Mn^{2+}'}</LaTeX> tak berwarna (asam) atau <LaTeX>{'MnO_2'}</LaTeX> cokelat (netral/basa).</li>
            <li><strong>Besi:</strong> uji Prussian Blue, uji tiosianat merah-darah; <LaTeX>{'FeI_3'}</LaTeX> tidak ada karena <LaTeX>{'Fe^{3+}'}</LaTeX> mengoksidasi <LaTeX>{'I^-'}</LaTeX>.</li>
            <li><strong>Kobalt:</strong> kesetimbangan oktahedral merah muda ⇌ tetrahedral biru (indikator kelembapan).</li>
            <li><strong>Nikel:</strong> proses Mond; uji DMG merah stroberi.</li>
            <li><strong>Tembaga & Seng:</strong> kompleks amina biru tua; <LaTeX>{'Zn(OH)_2'}</LaTeX> amfoter.</li>
          </ul>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock label="Kesetimbangan kromat–dikromat" latex={'2CrO_4^{2-} + 2H^+ \\rightleftharpoons Cr_2O_7^{2-} + H_2O'} />
          <EquationBlock label="Kesetimbangan kobalt (indikator kelembapan)" latex={'[Co(OH_2)_6]^{2+} + 4Cl^- \\rightleftharpoons [CoCl_4]^{2-} + 6H_2O'} />
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Oksidasi Etanol oleh Dikromat Asam"
            problem={<p>Tulis persamaan redoks setara untuk oksidasi etanol (<LaTeX>{'C_2H_5OH'}</LaTeX>) menjadi asetaldehida oleh kalium dikromat asam, dan jelaskan perubahan warnanya.</p>}
            steps={[
              {
                title: 'Setengah reaksi',
                content: <p>Oksidasi: <LaTeX>{'C_2H_5OH \\rightarrow CH_3CHO + 2H^+ + 2e^-'}</LaTeX>. Reduksi: <LaTeX>{'Cr_2O_7^{2-} + 14H^+ + 6e^- \\rightarrow 2Cr^{3+} + 7H_2O'}</LaTeX>.</p>,
              },
              {
                title: 'Gabungkan (kalikan oksidasi ×3)',
                content: <EquationBlock latex={'3C_2H_5OH + Cr_2O_7^{2-} + 8H^+ \\rightarrow 3CH_3CHO + 2Cr^{3+} + 7H_2O'} />,
              },
              {
                title: 'Pengamatan visual',
                content: <p>Larutan berubah dari <strong>oranye terang</strong> (<LaTeX>{'Cr_2O_7^{2-}'}</LaTeX>) menjadi <strong>hijau tua</strong> (<LaTeX>{'Cr^{3+}'}</LaTeX> terhidrasi). Perubahan ini dipakai dalam uji breathalyzer.</p>,
              },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Besi(III) iodida (<LaTeX>{'FeI_3'}</LaTeX>) dapat dibuat dengan mencampur <LaTeX>{'FeCl_3'}</LaTeX> dan <LaTeX>{'KI'}</LaTeX>.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p><LaTeX>{'Fe^{3+}'}</LaTeX> oksidan moderat dan <LaTeX>{'I^-'}</LaTeX> reduktor baik; keduanya bereaksi redoks spontan menghasilkan <LaTeX>{'Fe^{2+}'}</LaTeX> dan <LaTeX>{'I_2'}</LaTeX>, sehingga <LaTeX>{'FeI_3'}</LaTeX> tak terbentuk.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Jelajahi kimia deskriptif deret <LaTeX>{'3d'}</LaTeX> per kelompok. Pilih tab untuk meninjau warna, keadaan oksidasi, dan reaksi khasnya.</p>
          <TabbedExplorer
            tabs={[
              {
                label: 'Ti & V', color: '#38bdf8', heading: <span>Titanium & Vanadium</span>,
                body: <div><p>Ti: <LaTeX>{'TiO_2'}</LaTeX> pigmen putih; <LaTeX>{'TiCl_4'}</LaTeX> berasap. V: deret reduksi oleh Zn → <strong>kuning → biru → hijau → ungu</strong>; <LaTeX>{'V_2O_5'}</LaTeX> katalis proses kontak.</p></div>,
              },
              {
                label: 'Cr & Mn', color: '#f59e0b', heading: <span>Kromium & Mangan</span>,
                body: <div><p>Cr: kromat kuning ⇌ dikromat oranye (pH); reaksi gunung berapi amonium dikromat. Mn: permanganat ungu → <LaTeX>{'Mn^{2+}'}</LaTeX> tak berwarna (asam) atau <LaTeX>{'MnO_2'}</LaTeX> cokelat (netral/basa).</p></div>,
              },
              {
                label: 'Fe & Co', color: '#ef4444', heading: <span>Besi & Kobalt</span>,
                body: <div><p>Fe: Prussian Blue, tiosianat merah-darah, <LaTeX>{'FeI_3'}</LaTeX> tak ada. Co: merah muda oktahedral ⇌ biru tetrahedral dengan <LaTeX>{'Cl^-'}</LaTeX>; <LaTeX>{'Co(III)'}</LaTeX> distabilkan ligan amina.</p></div>,
              },
              {
                label: 'Ni, Cu & Zn', color: '#34d399', heading: <span>Nikel, Tembaga & Seng</span>,
                body: <div><p>Ni: uji DMG merah stroberi; <LaTeX>{'[Ni(CN)_4]^{2-}'}</LaTeX> kuning square planar. Cu: <LaTeX>{'CuSO_4'}</LaTeX> putih→biru; amina biru royal. Zn: <LaTeX>{'Zn(OH)_2'}</LaTeX> amfoter → <LaTeX>{'[Zn(OH)_4]^{2-}'}</LaTeX>.</p></div>,
              },
            ]}
          />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Apa produk reduksi akhir <LaTeX>{'KMnO_4'}</LaTeX> dalam (a) media sangat asam dan (b) media netral/basa?</span>,
              options: [
                { text: <span>(a) <LaTeX>{'Mn^{2+}'}</LaTeX> tak berwarna, (b) <LaTeX>{'MnO_2'}</LaTeX> cokelat tak larut</span>, isCorrect: true },
                { text: <span>(a) <LaTeX>{'MnO_4^{2-}'}</LaTeX> hijau, (b) <LaTeX>{'Mn^{2+}'}</LaTeX> tak berwarna</span>, isCorrect: false },
                { text: <span>(a) <LaTeX>{'MnO_2'}</LaTeX> cokelat, (b) <LaTeX>{'Mn^{2+}'}</LaTeX> tak berwarna</span>, isCorrect: false },
                { text: <span>(a) <LaTeX>{'Mn^{2+}'}</LaTeX> tak berwarna, (b) <LaTeX>{'Mn^{3+}'}</LaTeX> merah muda</span>, isCorrect: false },
              ],
              explanation: <span>Dalam asam, <LaTeX>{'MnO_4^-'}</LaTeX> mengalami reduksi 5e⁻ menjadi <LaTeX>{'Mn^{2+}'}</LaTeX> stabil. Dalam netral/basa, reduksi 3e⁻ menjadi <LaTeX>{'MnO_2'}</LaTeX> cokelat tak larut.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: '2.1', moduleId: 'd1', moduleTitle: 'Tren Periodik & Karakteristik Logam Transisi' }]}
            feedsInto={[{ label: '2.5', moduleId: 'd5', moduleTitle: 'Analisis Kualitatif & Skema Pemisahan' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
