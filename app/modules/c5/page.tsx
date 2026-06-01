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

export default function ModuleC5() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/1" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 1</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul 1.5" moduleTitle="Faktor Penentu Pembelahan Medan Kristal (Δ)" block="A" partId="1" articleId="c5">
        <ConceptOverview>
          <p>
            Besarnya energi pembelahan medan kristal (<LaTeX>{'\\Delta'}</LaTeX>) ditentukan oleh empat faktor utama:
            deret spektrokimia ligan, tingkat oksidasi logam, identitas ion logam (3d/4d/5d), dan bilangan koordinasi.
          </p>

          <h3>1. Deret Spektrokimia Ligan</h3>
          <p>Ligan diurutkan menurut kemampuannya memecah orbital <LaTeX>{'d'}</LaTeX>, dari <strong>medan lemah</strong> (<LaTeX>{'\\Delta'}</LaTeX> kecil) hingga <strong>medan kuat</strong> (<LaTeX>{'\\Delta'}</LaTeX> besar):</p>
          <EquationBlock latex={'I^- < Br^- < Cl^- < F^- < OH^- < H_2O < NH_3 < en < bpy < phen < NO_2^- < CN^- \\approx CO'} />
          <ul>
            <li><strong>Halida (<LaTeX>{'I^-'}</LaTeX> hingga <LaTeX>{'F^-'}</LaTeX>):</strong> medan lemah, membentuk kompleks spin tinggi.</li>
            <li><strong>Amina netral (<LaTeX>{'NH_3'}</LaTeX>, <LaTeX>{'en'}</LaTeX>):</strong> ligan menengah.</li>
            <li><strong>Karbonil dan sianida (<LaTeX>{'CO'}</LaTeX>, <LaTeX>{'CN^-'}</LaTeX>):</strong> medan kuat, membentuk kompleks spin rendah.</li>
          </ul>

          <h3>2. Tingkat Oksidasi Logam</h3>
          <p>Muatan positif yang lebih tinggi pada pusat logam memperkuat tarikan elektrostatik, menarik ligan lebih dekat. Pendekatan ini meningkatkan tolakan terhadap elektron <LaTeX>{'d'}</LaTeX> sehingga menaikkan <LaTeX>{'\\Delta'}</LaTeX>. Contoh: <LaTeX>{'[CrF_6]^{3-}'}</LaTeX> memiliki <LaTeX>{'\\Delta_o = 15000\\ \\text{cm}^{-1}'}</LaTeX>, sedangkan <LaTeX>{'[CrF_6]^{2-}'}</LaTeX> memiliki <LaTeX>{'\\Delta_o = 22000\\ \\text{cm}^{-1}'}</LaTeX>.</p>

          <h3>3. Identitas Ion Logam (3d vs. 4d vs. 5d)</h3>
          <p>Menuruni golongan, orbital <LaTeX>{'d'}</LaTeX> menjadi lebih besar dan menyebar (<LaTeX>{'3d \\rightarrow 4d \\rightarrow 5d'}</LaTeX>), sehingga tumpang tindih dengan ligan menguat. <LaTeX>{'\\Delta'}</LaTeX> naik 30–50% dari 3d ke 4d, dan 20–30% lagi dari 4d ke 5d. <strong>Konsekuensi penting:</strong> karena <LaTeX>{'\\Delta'}</LaTeX> sangat besar untuk logam 4d dan 5d, energi pembelahan selalu melampaui energi pemasangan, sehingga <strong>semua kompleks 4d dan 5d selalu spin rendah</strong>.</p>

          <h3>4. Bilangan Koordinasi</h3>
          <p>Kompleks oktahedral memiliki 6 ligan, sedangkan tetrahedral hanya 4. Lebih sedikit ligan dan tumpang tindih yang kurang langsung menghasilkan pembelahan yang jauh lebih kecil: <LaTeX>{'\\Delta_t \\approx \\tfrac{4}{9}\\Delta_o'}</LaTeX>.</p>

          <h3>Konsekuensi Termodinamika: Tren Entalpi Hidrasi</h3>
          <p>Efek CFSE teramati langsung pada sifat termodinamika seperti entalpi hidrasi ion logam transisi:</p>
          <EquationBlock latex={'M^{2+}(g) + 6H_2O(l) \\rightarrow [M(OH_2)_6]^{2+}(aq)'} />
          <p>Plot energi hidrasi sepanjang deret <LaTeX>{'3d'}</LaTeX> membentuk <strong>kurva berpunuk ganda</strong>: ion dengan CFSE nol (<LaTeX>{'d^0'}</LaTeX> <LaTeX>{'Ca^{2+}'}</LaTeX>, <LaTeX>{'d^5'}</LaTeX> <LaTeX>{'Mn^{2+}'}</LaTeX>, <LaTeX>{'d^{10}'}</LaTeX> <LaTeX>{'Zn^{2+}'}</LaTeX>) tepat berada di garis dasar, sedangkan ion dengan CFSE penstabil (<LaTeX>{'d^3'}</LaTeX> <LaTeX>{'V^{2+}'}</LaTeX>, <LaTeX>{'d^8'}</LaTeX> <LaTeX>{'Ni^{2+}'}</LaTeX>) berada jauh di bawah garis dasar.</p>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock label="Hubungan Δₜ dan Δₒ" latex={'\\Delta_t \\approx \\tfrac{4}{9}\\Delta_o'} />
          <EquationBlock
            label="Momen Magnetik Spin-Only"
            latex={'\\mu_{\\text{eff}} = \\sqrt{n(n+2)}\\ \\text{BM}'}
            variables={[{ symbol: 'n', definition: 'jumlah elektron tak berpasangan' }]}
          />
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Memprediksi Keadaan Spin dari Periode dan Ligan"
            problem={
              <div>
                <p>Prediksi keadaan spin dan hitung jumlah elektron tak berpasangan untuk: (1) <LaTeX>{'[Fe(ox)_3]^{3-}'}</LaTeX> dan (2) <LaTeX>{'[Ru(ox)_3]^{3-}'}</LaTeX>.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                  <ComplexStructure geometry="octahedral" metal="Fe" ligands={['O', 'O', 'O', 'O', 'O', 'O']} caption={<><LaTeX>{'[Fe(ox)_3]^{3-}'}</LaTeX> — 3 oksalat bidentat (6 donor O), logam 3d</>} />
                  <ComplexStructure geometry="octahedral" metal="Ru" ligands={['O', 'O', 'O', 'O', 'O', 'O']} caption={<><LaTeX>{'[Ru(ox)_3]^{3-}'}</LaTeX> — geometri sama, logam 4d</>} />
                </div>
              </div>
            }
            steps={[
              {
                title: 'Analisis [Fe(ox)₃]³⁻',
                content: (
                  <div>
                    <ul>
                      <li>Logam: <LaTeX>{'Fe^{3+}'}</LaTeX> adalah logam transisi <LaTeX>{'3d'}</LaTeX>.</li>
                      <li>Ligan: oksalat (<LaTeX>{'ox^{2-}'}</LaTeX>) bidentat donor oksigen, berada di batas lemah/menengah deret spektrokimia.</li>
                      <li>Untuk logam <LaTeX>{'3d'}</LaTeX>, <LaTeX>{'ox^{2-}'}</LaTeX> berlaku sebagai <strong>ligan medan lemah</strong> (<LaTeX>{'\\Delta_o < P'}</LaTeX>).</li>
                      <li>Konfigurasi: <LaTeX>{'Fe(III)'}</LaTeX> adalah <LaTeX>{'d^5'}</LaTeX>, spin tinggi <LaTeX>{'t_{2g}^3 e_g^2'}</LaTeX>.</li>
                      <li><strong>5 elektron tak berpasangan</strong> (<LaTeX>{'\\mu_{\\text{eff}} = 5.92\\ \\text{BM}'}</LaTeX>).</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: 'Analisis [Ru(ox)₃]³⁻',
                content: (
                  <div>
                    <ul>
                      <li>Logam: <LaTeX>{'Ru^{3+}'}</LaTeX> tepat di bawah besi (logam transisi <LaTeX>{'4d'}</LaTeX>).</li>
                      <li>Karena <LaTeX>{'Ru'}</LaTeX> adalah logam <LaTeX>{'4d'}</LaTeX>, energi pembelahan <LaTeX>{'\\Delta_o'}</LaTeX> sangat besar.</li>
                      <li><strong>Semua logam 4d bersifat spin rendah</strong>, terlepas dari jenis ligannya.</li>
                      <li>Konfigurasi: <LaTeX>{'Ru(III)'}</LaTeX> adalah <LaTeX>{'d^5'}</LaTeX>, spin rendah <LaTeX>{'t_{2g}^5 e_g^0'}</LaTeX>.</li>
                      <li><strong>1 elektron tak berpasangan</strong> (<LaTeX>{'\\mu_{\\text{eff}} = 1.73\\ \\text{BM}'}</LaTeX>).</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: 'Kesimpulan',
                content: <p>Meski ligan identik (<LaTeX>{'ox^{2-}'}</LaTeX>) dan keduanya <LaTeX>{'d^5'}</LaTeX>, posisi periode logam menentukan keadaan spin: faktor 3d/4d/5d mengalahkan kekuatan medan ligan.</p>,
              },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Oksalat adalah ligan kuat karena membentuk cincin kelat yang sangat stabil.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Kelasi meningkatkan kestabilan termodinamika (tetapan pembentukan <LaTeX>{'K_f'}</LaTeX>), tetapi tidak mengatur energi pembelahan elektronik (<LaTeX>{'\\Delta'}</LaTeX>). Oksalat tetap merupakan donor oksigen medan lemah.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Jelajahi keempat faktor penentu besarnya <LaTeX>{'\\Delta'}</LaTeX>. Pilih tab untuk meninjau pengaruh masing-masing faktor terhadap pembelahan medan kristal.</p>
          <TabbedExplorer
            tabs={[
              {
                label: 'Deret spektrokimia',
                color: '#38bdf8',
                heading: <span>Identitas ligan</span>,
                body: (
                  <div>
                    <p>Urutan kekuatan medan ligan dari lemah ke kuat:</p>
                    <EquationBlock latex={'I^- < Br^- < Cl^- < F^- < H_2O < NH_3 < en < NO_2^- < CN^- \\approx CO'} />
                    <p>Ligan medan kuat (<LaTeX>{'CN^-'}</LaTeX>, <LaTeX>{'CO'}</LaTeX>) memberi <LaTeX>{'\\Delta'}</LaTeX> besar → spin rendah; ligan medan lemah (halida) memberi <LaTeX>{'\\Delta'}</LaTeX> kecil → spin tinggi.</p>
                  </div>
                ),
              },
              {
                label: 'Tingkat oksidasi',
                color: '#f59e0b',
                heading: <span>Muatan pusat logam</span>,
                body: (
                  <div>
                    <p>Muatan logam lebih tinggi → ligan tertarik lebih dekat → tolakan terhadap elektron <LaTeX>{'d'}</LaTeX> naik → <LaTeX>{'\\Delta'}</LaTeX> naik.</p>
                    <ul>
                      <li><LaTeX>{'[CrF_6]^{3-}'}</LaTeX>: <LaTeX>{'\\Delta_o = 15000\\ \\text{cm}^{-1}'}</LaTeX>.</li>
                      <li><LaTeX>{'[CrF_6]^{2-}'}</LaTeX>: <LaTeX>{'\\Delta_o = 22000\\ \\text{cm}^{-1}'}</LaTeX>.</li>
                    </ul>
                  </div>
                ),
              },
              {
                label: '3d / 4d / 5d',
                color: '#c084fc',
                heading: <span>Identitas dan periode logam</span>,
                body: (
                  <div>
                    <p>Menuruni golongan, orbital <LaTeX>{'d'}</LaTeX> makin besar dan menyebar sehingga tumpang tindih dengan ligan menguat:</p>
                    <ul>
                      <li><LaTeX>{'3d \\rightarrow 4d'}</LaTeX>: <LaTeX>{'\\Delta'}</LaTeX> naik ~30–50%.</li>
                      <li><LaTeX>{'4d \\rightarrow 5d'}</LaTeX>: <LaTeX>{'\\Delta'}</LaTeX> naik ~20–30%.</li>
                    </ul>
                    <p>Akibatnya <strong>semua kompleks 4d dan 5d selalu spin rendah</strong>.</p>
                  </div>
                ),
              },
              {
                label: 'Bilangan koordinasi',
                color: '#34d399',
                heading: <span>Geometri dan jumlah ligan</span>,
                body: (
                  <div>
                    <p>Oktahedral (6 ligan) memberi pembelahan jauh lebih besar daripada tetrahedral (4 ligan) karena tumpang tindih lebih langsung:</p>
                    <EquationBlock latex={'\\Delta_t \\approx \\tfrac{4}{9}\\Delta_o'} />
                    <p>Inilah sebabnya kompleks tetrahedral hampir selalu spin tinggi.</p>
                  </div>
                ),
              },
            ]}
          />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Mengapa <LaTeX>{'[Rh(NH_3)_6]^{3+}'}</LaTeX> bersifat spin rendah, sedangkan <LaTeX>{'[Co(NH_3)_6]^{3+}'}</LaTeX> lebih berkecenderungan menuju konfigurasi spin tinggi pada suhu tinggi?</span>,
              options: [
                { text: 'Kobalt berada di Golongan 9, sedangkan Rodium di Golongan 10.', isCorrect: false },
                { text: <span>Rodium adalah logam <LaTeX>{'4d'}</LaTeX> yang menunjukkan ekspansi orbital <LaTeX>{'d'}</LaTeX> jauh lebih besar dan tumpang tindih ligan lebih kuat, sehingga selalu spin rendah.</span>, isCorrect: true },
                { text: 'Amonia adalah ligan medan lemah untuk Rodium.', isCorrect: false },
                { text: 'Rodium memiliki energi pemasangan yang lebih rendah.', isCorrect: false },
              ],
              explanation: <span>Rodium adalah logam transisi baris kedua (<LaTeX>{'4d'}</LaTeX>). Ukuran orbital <LaTeX>{'4d'}</LaTeX> yang besar menyebabkan tumpang tindih ligan kuat dan <LaTeX>{'\\Delta_o'}</LaTeX> besar, membuat semua kompleks <LaTeX>{'4d'}</LaTeX> spin rendah.</span>,
            },
            {
              question: <span>Bagaimana pengaruh kenaikan tingkat oksidasi logam terhadap <LaTeX>{'\\Delta_o'}</LaTeX> untuk set ligan yang sama?</span>,
              options: [
                { text: <span><LaTeX>{'\\Delta_o'}</LaTeX> meningkat karena ligan tertarik lebih dekat sehingga tolakan terhadap elektron <LaTeX>{'d'}</LaTeX> menguat.</span>, isCorrect: true },
                { text: <span><LaTeX>{'\\Delta_o'}</LaTeX> menurun karena logam menjadi lebih kecil.</span>, isCorrect: false },
                { text: <span><LaTeX>{'\\Delta_o'}</LaTeX> tidak berubah; hanya ligan yang menentukan <LaTeX>{'\\Delta_o'}</LaTeX>.</span>, isCorrect: false },
                { text: <span><LaTeX>{'\\Delta_o'}</LaTeX> menjadi nol pada muatan tinggi.</span>, isCorrect: false },
              ],
              explanation: <span>Muatan positif lebih tinggi memperkuat tarikan logam–ligan, memperpendek jarak ikatan dan meningkatkan tolakan terhadap orbital <LaTeX>{'d'}</LaTeX>, sehingga <LaTeX>{'\\Delta_o'}</LaTeX> naik (mis. <LaTeX>{'[CrF_6]^{2-}'}</LaTeX> &gt; <LaTeX>{'[CrF_6]^{3-}'}</LaTeX>).</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: '1.4', moduleId: 'c4', moduleTitle: 'Teori Medan Kristal (CFT)' }]}
            feedsInto={[{ label: '1.6', moduleId: 'c6', moduleTitle: 'Distorsi Jahn-Teller' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
