'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { TabbedExplorer } from '../../components/interactive/TabbedExplorer';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleC2() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/1" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 1</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul 1.2" moduleTitle="Isomerisme dalam Kompleks Koordinasi" block="A" partId="1" articleId="c2">
        <ConceptOverview>
          <p>
            <strong>Isomer</strong> adalah senyawa dengan rumus molekul yang sama namun susunan atomnya berbeda.
            Dalam kimia koordinasi, isomerisme dibagi menjadi dua kategori utama: isomerisme struktural dan
            stereoisomerisme.
          </p>

          <h3>1. Isomerisme Struktural</h3>
          <ul>
            <li><strong>Isomerisme ionisasi:</strong> Pertukaran ligan antara bola koordinasi dalam dan ion lawan di bola luar (mis. <LaTeX>{'[Co(NH_3)_5(SO_4)]Br'}</LaTeX> vs. <LaTeX>{'[Co(NH_3)_5Br]SO_4'}</LaTeX>).</li>
            <li><strong>Isomerisme koordinasi:</strong> Terjadi pada garam yang baik kation maupun anionnya merupakan kompleks, dengan ligan terdistribusi ulang di antara keduanya (mis. <LaTeX>{'[Co(NH_3)_6][Cr(CN)_6]'}</LaTeX> vs. <LaTeX>{'[Cr(NH_3)_6][Co(CN)_6]'}</LaTeX>).</li>
            <li><strong>Isomerisme hidrat (pelarut):</strong> Pertukaran molekul air antara bola koordinasi dan pelarut (mis. <LaTeX>{'[Cr(OH_2)_6]Cl_3'}</LaTeX> ungu vs. <LaTeX>{'[Cr(OH_2)_5Cl]Cl_2 \\cdot H_2O'}</LaTeX> hijau muda vs. <LaTeX>{'[Cr(OH_2)_4Cl_2]Cl \\cdot 2H_2O'}</LaTeX> hijau tua).</li>
            <li><strong>Isomerisme tautan (linkage):</strong> Terjadi pada ligan <strong>ambidentat</strong>, yaitu ligan yang dapat berkoordinasi melalui atom donor berbeda, seperti <LaTeX>{'NO_2^-'}</LaTeX> (nitro/nitrito) atau <LaTeX>{'SCN^-'}</LaTeX> (tiosianato/isotiosianato). Contoh klasik: <LaTeX>{'[Pt(PEt_3)_3(SCN)]^+'}</LaTeX> (terikat via S) vs. <LaTeX>{'[Pt(PEt_3)_3(NCS)]^+'}</LaTeX> (terikat via N).</li>
          </ul>

          <h3>2. Stereoisomerisme (Isomer Ruang)</h3>
          <ul>
            <li><strong>Isomerisme geometri (cis/trans):</strong> Terjadi pada kompleks square planar (mis. <em>cis</em>-<LaTeX>{'[Pt(NH_3)_2Cl_2]'}</LaTeX> / Cisplatin vs. <em>trans</em>-<LaTeX>{'[Pt(NH_3)_2Cl_2]'}</LaTeX> / Transplatin) dan oktahedral (mis. <em>cis</em>- vs. <em>trans</em>-<LaTeX>{'[Co(NH_3)_4Cl_2]^+'}</LaTeX>).</li>
            <li><strong>Isomerisme fac/mer:</strong> Terjadi pada kompleks oktahedral berformula <LaTeX>{'ML_3X_3'}</LaTeX>. Pada isomer <em>facial (fac)</em> ketiga ligan sejenis menempati sudut satu muka segitiga oktahedron (semua sudut <LaTeX>{'90^\\circ'}</LaTeX>); pada <em>meridional (mer)</em> ketiga ligan terletak pada bidang yang membelah oktahedron (dua ligan saling <em>trans</em> pada <LaTeX>{'180^\\circ'}</LaTeX>, satu lagi <em>cis</em> pada <LaTeX>{'90^\\circ'}</LaTeX>).</li>
            <li><strong>Isomerisme optik (kiralitas):</strong> Molekul kiral tidak memiliki bidang atau pusat simetri internal sehingga membentuk bayangan cermin yang tidak dapat ditumpangtindihkan (enantiomer). Sistem oktahedral terkelat seperti <LaTeX>{'[Co(en)_3]^{3+}'}</LaTeX> sangat kiral (membentuk isomer baling-baling <LaTeX>{'\\Lambda'}</LaTeX> dan <LaTeX>{'\\Delta'}</LaTeX>). Untuk <LaTeX>{'[Co(en)_2Cl_2]^+'}</LaTeX>, isomer <strong><em>cis</em> bersifat kiral</strong> dan punya enantiomer, sedangkan isomer <strong><em>trans</em> memiliki bidang inversi</strong> sehingga akiral.</li>
          </ul>
        </ConceptOverview>

        <WorkedExamples>
          <WorkedExample
            title="Menggambar dan Menghitung Isomer Oktahedral"
            problem={<p>Gambar dan hitung semua stereoisomer yang mungkin untuk kompleks <LaTeX>{'Cr(acac)_2(H_2O)_2'}</LaTeX>, dengan <LaTeX>{'acac^-'}</LaTeX> adalah ligan asetilasetonat bidentat yang simetris.</p>}
            steps={[
              {
                title: 'Identifikasi tipe ligan',
                content: <p><LaTeX>{'acac^-'}</LaTeX> adalah kelat bidentat. Rumus kompleks dapat ditulis sebagai <LaTeX>{'M(L\\text{-}L)_2X_2'}</LaTeX>, dengan dua ligan monodentat <LaTeX>{'H_2O'}</LaTeX>.</p>,
              },
              {
                title: 'Tentukan isomer geometri',
                content: (
                  <div>
                    <p>Kedua <LaTeX>{'H_2O'}</LaTeX> dapat ditempatkan saling <em>cis</em> (<LaTeX>{'90^\\circ'}</LaTeX>) atau <em>trans</em> (<LaTeX>{'180^\\circ'}</LaTeX>):</p>
                    <ul>
                      <li><strong>Isomer trans:</strong> Kedua <LaTeX>{'H_2O'}</LaTeX> saling trans, kedua <LaTeX>{'acac^-'}</LaTeX> berada di bidang ekuatorial. Sangat simetris (punya bidang simetri) sehingga akiral.</li>
                      <li><strong>Isomer cis:</strong> Kedua <LaTeX>{'H_2O'}</LaTeX> saling cis, kedua <LaTeX>{'acac^-'}</LaTeX> terpaksa berorientasi tegak lurus (tidak sebidang).</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: 'Periksa isomerisme optik',
                content: <p>Isomer <em>cis</em> tidak memiliki bidang simetri sehingga bersifat kiral. Ia berwujud sepasang bayangan cermin yang tidak dapat ditumpangtindihkan (enantiomer <LaTeX>{'\\Delta'}</LaTeX> dan <LaTeX>{'\\Lambda'}</LaTeX>).</p>,
              },
              {
                title: 'Hitung total isomer',
                content: <p>Total terdapat tepat <strong>3 stereoisomer</strong>: 1 isomer trans akiral, dan 2 enantiomer cis yang kiral.</p>,
              },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Kompleks tetrahedral (<LaTeX>{'CN = 4'}</LaTeX>) dapat menunjukkan isomerisme <em>cis/trans</em>.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Pada tetrahedron sempurna, keempat sudut berjarak sama dan saling berdekatan (semua sudut <LaTeX>{'109.5^\\circ'}</LaTeX>), sehingga mustahil ada hubungan <em>trans</em> (<LaTeX>{'180^\\circ'}</LaTeX>). Kompleks tetrahedral hanya dapat menunjukkan isomerisme optik bila keempat ligannya berbeda (<LaTeX>{'MABCD'}</LaTeX>).</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Jelajahi tiap jenis stereoisomer pada kompleks koordinasi. Pilih tab untuk membandingkan hubungan geometri dan simetrinya.</p>
          <TabbedExplorer
            tabs={[
              {
                label: 'cis / trans',
                color: '#38bdf8',
                heading: <span>Isomerisme geometri pada <LaTeX>{'[Co(NH_3)_4Cl_2]^+'}</LaTeX></span>,
                body: (
                  <div>
                    <p>Dua ligan sejenis dapat saling berdekatan atau berseberangan:</p>
                    <ul>
                      <li><strong>cis:</strong> Kedua <LaTeX>{'Cl^-'}</LaTeX> berdampingan dengan sudut <LaTeX>{'90^\\circ'}</LaTeX>.</li>
                      <li><strong>trans:</strong> Kedua <LaTeX>{'Cl^-'}</LaTeX> berseberangan dengan sudut <LaTeX>{'180^\\circ'}</LaTeX>.</li>
                    </ul>
                    <p>Pada square planar, <em>cis</em>-<LaTeX>{'[Pt(NH_3)_2Cl_2]'}</LaTeX> (Cisplatin) aktif sebagai obat antikanker, sedangkan isomer <em>trans</em>-nya tidak.</p>
                  </div>
                ),
              },
              {
                label: 'fac / mer',
                color: '#34d399',
                heading: <span>Isomerisme fasial/meridional pada <LaTeX>{'[Co(NH_3)_3Cl_3]'}</LaTeX></span>,
                body: (
                  <div>
                    <p>Berlaku untuk oktahedral <LaTeX>{'ML_3X_3'}</LaTeX>:</p>
                    <ul>
                      <li><strong>fac (facial):</strong> Ketiga <LaTeX>{'Cl^-'}</LaTeX> menempati satu muka segitiga; semua sudut antar-Cl <LaTeX>{'90^\\circ'}</LaTeX>.</li>
                      <li><strong>mer (meridional):</strong> Ketiga <LaTeX>{'Cl^-'}</LaTeX> terletak pada satu bidang meridian; dua saling <em>trans</em> (<LaTeX>{'180^\\circ'}</LaTeX>) dan satu <em>cis</em> (<LaTeX>{'90^\\circ'}</LaTeX>), membentuk susunan huruf T.</li>
                    </ul>
                  </div>
                ),
              },
              {
                label: 'optik (kiral)',
                color: '#c084fc',
                heading: <span>Isomerisme optik pada <LaTeX>{'[Co(en)_2Cl_2]^+'}</LaTeX></span>,
                body: (
                  <div>
                    <p>Molekul kiral tidak punya bidang/pusat simetri dan membentuk bayangan cermin yang tidak dapat ditumpangtindihkan:</p>
                    <ul>
                      <li><strong>cis:</strong> Kiral, berwujud sepasang enantiomer <LaTeX>{'\\Delta'}</LaTeX> dan <LaTeX>{'\\Lambda'}</LaTeX>.</li>
                      <li><strong>trans:</strong> Memiliki bidang simetri/pusat inversi sehingga akiral.</li>
                    </ul>
                    <p>Kompleks tris-kelat seperti <LaTeX>{'[Co(en)_3]^{3+}'}</LaTeX> bersifat kiral kuat dengan bentuk baling-baling.</p>
                  </div>
                ),
              },
            ]}
          />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Kompleks manakah yang bersifat aktif optik (kiral)?</span>,
              options: [
                { text: <span><em>trans</em>-<LaTeX>{'[Co(en)_2Cl_2]^+'}</LaTeX></span>, isCorrect: false },
                { text: <span><em>cis</em>-<LaTeX>{'[Co(en)_2Cl_2]^+'}</LaTeX></span>, isCorrect: true },
                { text: <span><LaTeX>{'[Pt(NH_3)_2Cl_2]'}</LaTeX> (square planar)</span>, isCorrect: false },
                { text: <span><LaTeX>{'[Co(NH_3)_4Cl_2]^+'}</LaTeX></span>, isCorrect: false },
              ],
              explanation: <span>Isomer <em>cis</em> dari <LaTeX>{'[Co(en)_2Cl_2]^+'}</LaTeX> tidak memiliki bidang simetri akibat orientasi kelat yang tegak lurus, sehingga kiral. Isomer <em>trans</em> memiliki pusat inversi dan bidang simetri.</span>,
            },
            {
              question: <span>Isomerisme jenis apa yang ditunjukkan oleh pasangan <LaTeX>{'[Co(NH_3)_5(NO_2)]Cl_2'}</LaTeX> dan <LaTeX>{'[Co(NH_3)_5(ONO)]Cl_2'}</LaTeX>?</span>,
              options: [
                { text: 'Ionisasi', isCorrect: false },
                { text: 'Hidrat', isCorrect: false },
                { text: 'Tautan (linkage)', isCorrect: true },
                { text: 'Koordinasi', isCorrect: false },
              ],
              explanation: <span>Ligan nitrit (<LaTeX>{'NO_2^-'}</LaTeX>) bersifat ambidentat, berkoordinasi melalui nitrogen (nitro) pada kompleks pertama dan melalui oksigen (nitrito) pada kompleks kedua.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: '1.1', moduleId: 'c1', moduleTitle: 'Senyawa Koordinasi & Teori Werner' }]}
            feedsInto={[{ label: '1.3', moduleId: 'c3', moduleTitle: 'Teori Ikatan Valensi (VBT)' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
