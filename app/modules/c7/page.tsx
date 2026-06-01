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

export default function ModuleC7() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/1" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 1</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul 1.7" moduleTitle="Teori Medan Ligan (LFT)" block="A" partId="1" articleId="c7">
        <ConceptOverview>
          <p>
            Teori Medan Kristal berhasil menjelaskan pembelahan orbital, tetapi cacat secara mendasar karena
            mengasumsikan interaksi murni elektrostatik. CFT tidak dapat menjelaskan mengapa molekul netral
            seperti <LaTeX>{'CO'}</LaTeX> memecah orbital <LaTeX>{'d'}</LaTeX> jauh lebih kuat daripada anion kecil
            seperti <LaTeX>{'I^-'}</LaTeX>.
          </p>
          <p>
            <strong>Teori Medan Ligan (LFT)</strong> mengatasi hal ini dengan menerapkan teori Orbital Molekul (MO)
            pada kompleks koordinasi. LFT membangun orbital molekul dengan menumpangtindihkan orbital valensi logam
            (<LaTeX>{'3d, 4s, 4p'}</LaTeX>) dengan <strong>Orbital Golongan Ligan (LGO)</strong> yang bersimetri sama.
          </p>

          <h3>Orbital Golongan Ligan (LGO) Oktahedral</h3>
          <p>Pada kompleks oktahedral, 6 ligan menyumbang 6 pasang elektron untuk ikatan <LaTeX>{'\\sigma'}</LaTeX>. LGO terbelah menjadi tiga kelas simetri:</p>
          <ul>
            <li><strong><LaTeX>{'a_{1g}'}</LaTeX></strong> (cocok dengan <LaTeX>{'4s'}</LaTeX> logam)</li>
            <li><strong><LaTeX>{'t_{1u}'}</LaTeX></strong> (cocok dengan <LaTeX>{'4p_x, 4p_y, 4p_z'}</LaTeX> logam)</li>
            <li><strong><LaTeX>{'e_g'}</LaTeX></strong> (cocok dengan <LaTeX>{'3d_{z^2}, 3d_{x^2-y^2}'}</LaTeX> logam)</li>
          </ul>
          <p>
            Tiga orbital <LaTeX>{'3d'}</LaTeX> logam yang tersisa (<LaTeX>{'d_{xy}, d_{xz}, d_{yz}'}</LaTeX>) bersimetri <LaTeX>{'t_{2g}'}</LaTeX>.
            Karena tidak ada orbital ligan-<LaTeX>{'\\sigma'}</LaTeX> bersimetri <LaTeX>{'t_{2g}'}</LaTeX>, orbital ini tetap
            <strong> non-ikatan</strong> pada kompleks <LaTeX>{'\\sigma'}</LaTeX>-saja (seperti <LaTeX>{'[Co(NH_3)_6]^{3+}'}</LaTeX>).
            Dalam LFT, <LaTeX>{'\\Delta_o'}</LaTeX> didefinisikan ulang sebagai selisih energi antara tingkat <LaTeX>{'t_{2g}'}</LaTeX> non-ikatan
            dan tingkat anti-ikatan <LaTeX>{'e_g^*'}</LaTeX>.
          </p>

          <h3>Peran Ikatan <LaTeX>{'\\pi'}</LaTeX></h3>
          <p>Deret spektrokimia sepenuhnya dijelaskan LFT bila kita memasukkan interaksi orbital <LaTeX>{'\\pi'}</LaTeX> ligan dengan orbital <LaTeX>{'t_{2g}'}</LaTeX> non-ikatan logam:</p>
          <ul>
            <li><strong>Ligan <LaTeX>{'\\pi'}</LaTeX>-donor (medan lemah, mis. <LaTeX>{'Cl^-, I^-'}</LaTeX>):</strong> memiliki orbital <LaTeX>{'p'}</LaTeX> terisi berenergi lebih rendah daripada orbital <LaTeX>{'d'}</LaTeX> logam. Tumpang tindih dengan <LaTeX>{'t_{2g}'}</LaTeX> menaikkan tingkat logam menjadi <LaTeX>{'t_{2g}^*'}</LaTeX>, sehingga celah ke <LaTeX>{'e_g^*'}</LaTeX> mengecil → <strong><LaTeX>{'\\Delta_o'}</LaTeX> turun</strong> (menstabilkan spin tinggi).</li>
            <li><strong>Ligan <LaTeX>{'\\pi'}</LaTeX>-akseptor (medan kuat, mis. <LaTeX>{'CO, CN^-'}</LaTeX>):</strong> memiliki orbital <LaTeX>{'\\pi^*'}</LaTeX> kosong berenergi lebih tinggi daripada orbital <LaTeX>{'d'}</LaTeX> logam. Tumpang tindih menstabilkan (menurunkan) <LaTeX>{'t_{2g}'}</LaTeX> logam, sehingga celah ke <LaTeX>{'e_g^*'}</LaTeX> melebar → <strong><LaTeX>{'\\Delta_o'}</LaTeX> naik</strong> (menstabilkan spin rendah).</li>
          </ul>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="Pembelahan LFT (σ-saja / π-akseptor)"
            latex={'\\Delta_o = E(e_g^*) - E(t_{2g})'}
          />
          <EquationBlock
            label="Pembelahan LFT (π-donor)"
            latex={'\\Delta_o = E(e_g^*) - E(t_{2g}^*)'}
          />
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Membandingkan [Cr(CN)₆]³⁻ dan [CrF₆]³⁻"
            problem={
              <div>
                <p>Dengan LFT, jelaskan mengapa <LaTeX>{'[Cr(CN)_6]^{3-}'}</LaTeX> memiliki energi pembelahan yang sangat besar dibandingkan <LaTeX>{'[CrF_6]^{3-}'}</LaTeX>.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                  <ComplexStructure geometry="octahedral" metal="Cr" ligands={['F', 'F', 'F', 'F', 'F', 'F']} caption={<><LaTeX>{'[CrF_6]^{3-}'}</LaTeX> — F⁻ π-donor (Δₒ kecil)</>} />
                  <ComplexStructure geometry="octahedral" metal="Cr" ligands={['CN', 'CN', 'CN', 'CN', 'CN', 'CN']} caption={<><LaTeX>{'[Cr(CN)_6]^{3-}'}</LaTeX> — CN⁻ π-akseptor (Δₒ besar)</>} />
                </div>
              </div>
            }
            steps={[
              {
                title: 'Identifikasi logam',
                content: <p>Kromium(III) adalah ion logam <LaTeX>{'d^3'}</LaTeX>. Pada kedua kompleks, ketiga elektron <LaTeX>{'d'}</LaTeX> menempati tingkat <LaTeX>{'t_{2g}'}</LaTeX>.</p>,
              },
              {
                title: 'Analisis [CrF₆]³⁻ (π-donor)',
                content: (
                  <div>
                    <ul>
                      <li>Fluorida (<LaTeX>{'F^-'}</LaTeX>) adalah <LaTeX>{'\\pi'}</LaTeX>-donor dengan orbital <LaTeX>{'2p'}</LaTeX> terisi sebagai tingkat donor.</li>
                      <li>Orbital terisi ini tumpang tindih dengan <LaTeX>{'t_{2g}'}</LaTeX> logam, membentuk <LaTeX>{'t_{2g}'}</LaTeX> ikatan dan menaikkan tingkat logam ke <LaTeX>{'t_{2g}^*'}</LaTeX>.</li>
                      <li>Pembelahan diukur antara <LaTeX>{'t_{2g}^*'}</LaTeX> dan <LaTeX>{'e_g^*'}</LaTeX>. Karena <LaTeX>{'t_{2g}^*'}</LaTeX> dinaikkan, <LaTeX>{'\\Delta_o'}</LaTeX> kecil (<LaTeX>{'15000\\ \\text{cm}^{-1}'}</LaTeX>).</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: 'Analisis [Cr(CN)₆]³⁻ (π-akseptor)',
                content: (
                  <div>
                    <ul>
                      <li>Sianida (<LaTeX>{'CN^-'}</LaTeX>) adalah <LaTeX>{'\\pi'}</LaTeX>-akseptor kuat dengan orbital <LaTeX>{'\\pi^*'}</LaTeX> kosong berenergi tinggi.</li>
                      <li>Orbital kosong ini tumpang tindih dengan <LaTeX>{'t_{2g}'}</LaTeX> logam dan menstabilkannya ke tingkat lebih rendah.</li>
                      <li>Pembelahan diukur antara <LaTeX>{'t_{2g}'}</LaTeX> yang distabilkan dan <LaTeX>{'e_g^*'}</LaTeX>. Karena tingkat bawah turun, celah melebar drastis (<LaTeX>{'\\Delta_o = 26600\\ \\text{cm}^{-1}'}</LaTeX>).</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: 'Kesimpulan',
                content: <p>Perbedaan <LaTeX>{'\\Delta_o'}</LaTeX> bukan karena muatan ligan, melainkan simetri orbital <LaTeX>{'\\pi'}</LaTeX>: <LaTeX>{'\\pi'}</LaTeX>-donor menaikkan <LaTeX>{'t_{2g}'}</LaTeX> (memperkecil <LaTeX>{'\\Delta_o'}</LaTeX>), <LaTeX>{'\\pi'}</LaTeX>-akseptor menurunkan <LaTeX>{'t_{2g}'}</LaTeX> (memperbesar <LaTeX>{'\\Delta_o'}</LaTeX>).</p>,
              },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Semua ligan kuat membentuk ikatan kovalen, sedangkan semua ligan lemah membentuk ikatan ionik.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Semua kompleks koordinasi memiliki karakter kovalen yang tinggi. LFT menunjukkan bahwa kekuatan ligan ditentukan oleh simetri orbital molekulnya dan kemampuannya melakukan <LaTeX>{'\\pi'}</LaTeX>-backdonation, bukan oleh sifat ionik/kovalen semata.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Bandingkan tiga jenis interaksi ligan dalam kerangka LFT. Pilih tab untuk melihat bagaimana ikatan <LaTeX>{'\\sigma'}</LaTeX> dan <LaTeX>{'\\pi'}</LaTeX> mengubah besar <LaTeX>{'\\Delta_o'}</LaTeX>.</p>
          <TabbedExplorer
            tabs={[
              {
                label: 'Ligan σ-only',
                color: '#38bdf8',
                heading: <span>Ligan <LaTeX>{'\\sigma'}</LaTeX>-saja</span>,
                body: (
                  <div>
                    <p>Contoh: <LaTeX>{'NH_3'}</LaTeX> dalam <LaTeX>{'[Co(NH_3)_6]^{3+}'}</LaTeX>. Hanya menyumbang pasangan elektron <LaTeX>{'\\sigma'}</LaTeX>.</p>
                    <p>Orbital <LaTeX>{'t_{2g}'}</LaTeX> logam tetap <strong>non-ikatan</strong> karena tak ada LGO-<LaTeX>{'\\sigma'}</LaTeX> bersimetri <LaTeX>{'t_{2g}'}</LaTeX>.</p>
                    <EquationBlock latex={'\\Delta_o = E(e_g^*) - E(t_{2g})'} />
                  </div>
                ),
              },
              {
                label: 'Ligan π-donor (medan lemah)',
                color: '#f59e0b',
                heading: <span>Ligan <LaTeX>{'\\pi'}</LaTeX>-donor</span>,
                body: (
                  <div>
                    <p>Contoh: <LaTeX>{'Cl^-, I^-'}</LaTeX>. Orbital <LaTeX>{'p'}</LaTeX> terisi berenergi rendah menyumbang kerapatan ke <LaTeX>{'t_{2g}'}</LaTeX> logam.</p>
                    <p>Tingkat logam terangkat menjadi <LaTeX>{'t_{2g}^*'}</LaTeX>, mendekati <LaTeX>{'e_g^*'}</LaTeX> → <strong><LaTeX>{'\\Delta_o'}</LaTeX> mengecil</strong>, menstabilkan spin tinggi.</p>
                    <EquationBlock latex={'\\Delta_o = E(e_g^*) - E(t_{2g}^*)'} />
                  </div>
                ),
              },
              {
                label: 'Ligan π-acceptor (medan kuat)',
                color: '#c084fc',
                heading: <span>Ligan <LaTeX>{'\\pi'}</LaTeX>-akseptor</span>,
                body: (
                  <div>
                    <p>Contoh: <LaTeX>{'CO, CN^-'}</LaTeX>. Orbital <LaTeX>{'\\pi^*'}</LaTeX> kosong berenergi tinggi menerima kerapatan dari <LaTeX>{'t_{2g}'}</LaTeX> logam (<LaTeX>{'\\pi'}</LaTeX>-backdonation).</p>
                    <p>Tingkat <LaTeX>{'t_{2g}'}</LaTeX> logam turun, menjauh dari <LaTeX>{'e_g^*'}</LaTeX> → <strong><LaTeX>{'\\Delta_o'}</LaTeX> membesar</strong>, menstabilkan spin rendah.</p>
                  </div>
                ),
              },
            ]}
          />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Apa pengaruh <LaTeX>{'\\pi'}</LaTeX>-donasi terhadap besar energi pembelahan medan kristal (<LaTeX>{'\\Delta_o'}</LaTeX>)?</span>,
              options: [
                { text: <span>Menaikkan <LaTeX>{'\\Delta_o'}</LaTeX> dengan menstabilkan orbital <LaTeX>{'e_g^*'}</LaTeX>.</span>, isCorrect: false },
                { text: <span>Menurunkan <LaTeX>{'\\Delta_o'}</LaTeX> dengan menaikkan energi tingkat <LaTeX>{'t_{2g}'}</LaTeX> logam melalui tumpang tindih anti-ikatan.</span>, isCorrect: true },
                { text: <span>Tidak berpengaruh terhadap <LaTeX>{'\\Delta_o'}</LaTeX>.</span>, isCorrect: false },
                { text: 'Mengubah geometri kompleks menjadi tetrahedral.', isCorrect: false },
              ],
              explanation: <span><LaTeX>{'\\pi'}</LaTeX>-donor memiliki orbital terisi yang tumpang tindih dengan <LaTeX>{'t_{2g}'}</LaTeX> logam, membentuk tingkat <LaTeX>{'t_{2g}^*'}</LaTeX> yang lebih tinggi. Tingkat ini lebih dekat ke <LaTeX>{'e_g^*'}</LaTeX> sehingga energi pembelahan mengecil.</span>,
            },
            {
              question: <span>Mengapa orbital <LaTeX>{'t_{2g}'}</LaTeX> logam bersifat non-ikatan pada kompleks oktahedral <LaTeX>{'\\sigma'}</LaTeX>-saja?</span>,
              options: [
                { text: <span>Karena orbital <LaTeX>{'t_{2g}'}</LaTeX> berenergi terlalu tinggi untuk berikatan.</span>, isCorrect: false },
                { text: <span>Karena tidak ada orbital golongan ligan-<LaTeX>{'\\sigma'}</LaTeX> yang bersimetri <LaTeX>{'t_{2g}'}</LaTeX> untuk ditumpangtindihkan.</span>, isCorrect: true },
                { text: <span>Karena orbital <LaTeX>{'t_{2g}'}</LaTeX> selalu kosong.</span>, isCorrect: false },
                { text: <span>Karena ligan hanya berikatan dengan orbital <LaTeX>{'4s'}</LaTeX>.</span>, isCorrect: false },
              ],
              explanation: <span>LGO-<LaTeX>{'\\sigma'}</LaTeX> hanya bersimetri <LaTeX>{'a_{1g}, t_{1u}, e_g'}</LaTeX>. Karena tidak ada pasangan bersimetri <LaTeX>{'t_{2g}'}</LaTeX>, orbital <LaTeX>{'d_{xy}, d_{xz}, d_{yz}'}</LaTeX> tetap non-ikatan kecuali ada interaksi <LaTeX>{'\\pi'}</LaTeX>.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: '1.5', moduleId: 'c5', moduleTitle: 'Faktor Penentu Pembelahan Medan Kristal (Δ)' }]}
            feedsInto={[{ label: '1.8', moduleId: 'c8', moduleTitle: 'Spektroskopi Elektronik & Warna Kompleks' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
