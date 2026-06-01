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
import { CrystalFieldSplitter } from '../../components/interactive/CrystalFieldSplitter';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleC4() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/1" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 1</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul 1.4" moduleTitle="Teori Medan Kristal (CFT)" block="A" partId="1" articleId="c4">
        <ConceptOverview>
          <p>
            <strong>Teori Medan Kristal (CFT)</strong> adalah model elektrostatik yang memperlakukan ligan
            sebagai muatan titik negatif. Model ini mengabaikan ikatan kovalen dan berfokus pada tolakan
            elektrostatik antara muatan negatif ligan dengan elektron pada orbital <LaTeX>{'d'}</LaTeX> logam.
          </p>
          <p>
            Pada ion logam transisi bebas, kelima orbital <LaTeX>{'d'}</LaTeX> (<LaTeX>{'d_{xy}, d_{xz}, d_{yz}, d_{z^2}, d_{x^2-y^2}'}</LaTeX>)
            bersifat <strong>terdegenerasi</strong> (berenergi sama). Ketika ligan mendekat, mereka menciptakan
            medan elektrostatik yang memecah degenerasi ini.
          </p>

          <h3>1. Pembelahan Medan Oktahedral (<LaTeX>{'O_h'}</LaTeX>)</h3>
          <p>Enam ligan mendekat di sepanjang sumbu Kartesian (<LaTeX>{'x, y, z'}</LaTeX>):</p>
          <ul>
            <li><strong>Orbital <LaTeX>{'e_g'}</LaTeX> (<LaTeX>{'d_{z^2}, d_{x^2-y^2}'}</LaTeX>):</strong> mengarah langsung ke muatan ligan, mengalami tolakan kuat dan naik energinya sebesar <LaTeX>{'+0.6\\Delta_o'}</LaTeX> (<LaTeX>{'+3/5\\,\\Delta_o'}</LaTeX>).</li>
            <li><strong>Orbital <LaTeX>{'t_{2g}'}</LaTeX> (<LaTeX>{'d_{xy}, d_{xz}, d_{yz}'}</LaTeX>):</strong> mengarah di antara sumbu, mengalami tolakan lebih kecil dan turun energinya sebesar <LaTeX>{'-0.4\\Delta_o'}</LaTeX> (<LaTeX>{'-2/5\\,\\Delta_o'}</LaTeX>).</li>
            <li><strong><LaTeX>{'\\Delta_o'}</LaTeX>:</strong> selisih energi antara <LaTeX>{'t_{2g}'}</LaTeX> dan <LaTeX>{'e_g'}</LaTeX>.</li>
          </ul>

          <h3>2. Pembelahan Medan Tetrahedral (<LaTeX>{'T_d'}</LaTeX>)</h3>
          <p>Empat ligan mendekat ke sudut kubus, di antara sumbu Kartesian. Polanya kebalikan dari oktahedral: tiga orbital <LaTeX>{'t_2'}</LaTeX> naik (<LaTeX>{'+0.4\\Delta_t'}</LaTeX>), dua orbital <LaTeX>{'e'}</LaTeX> turun (<LaTeX>{'-0.6\\Delta_t'}</LaTeX>). Karena ligan lebih sedikit dan tumpang tindih lebih buruk, pembelahannya jauh lebih kecil. <strong>Konsekuensi penting:</strong> karena <LaTeX>{'\\Delta_t'}</LaTeX> sangat kecil dan tak pernah melampaui energi pemasangan (<LaTeX>{'P'}</LaTeX>), <strong>semua kompleks tetrahedral selalu spin tinggi</strong>.</p>

          <h3>3. Pembelahan Medan Square Planar (<LaTeX>{'C_{4v}'}</LaTeX>)</h3>
          <p>Diturunkan dengan melepas dua ligan aksial (sumbu z) dari oktahedron. Tanpa tolakan aksial, orbital yang punya komponen z (<LaTeX>{'d_{z^2}, d_{xz}, d_{yz}'}</LaTeX>) turun energinya, sedangkan <LaTeX>{'d_{x^2-y^2}'}</LaTeX> yang mengarah langsung ke empat ligan ekuatorial tetap tertinggi:</p>
          <EquationBlock latex={'d_{xz}, d_{yz}\\ (\\text{terendah}) < d_{z^2} < d_{xy} < d_{x^2-y^2}\\ (\\text{tertinggi})'} />

          <h3>Konfigurasi Spin Tinggi vs. Spin Rendah (<LaTeX>{'d^4 - d^7'}</LaTeX>)</h3>
          <ul>
            <li><strong>Spin tinggi (medan lemah):</strong> <LaTeX>{'\\Delta_o < P'}</LaTeX>. Elektron mengisi orbital <LaTeX>{'e_g'}</LaTeX> yang lebih tinggi sebelum berpasangan.</li>
            <li><strong>Spin rendah (medan kuat):</strong> <LaTeX>{'\\Delta_o > P'}</LaTeX>. Elektron berpasangan penuh di <LaTeX>{'t_{2g}'}</LaTeX> sebelum mengisi <LaTeX>{'e_g'}</LaTeX>.</li>
          </ul>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="CFSE Oktahedral"
            latex={'\\text{CFSE}_{O_h} = (-0.4 \\cdot n_{t_{2g}} + 0.6 \\cdot n_{e_g})\\Delta_o + n_{\\text{ekstra}}\\cdot P'}
            variables={[
              { symbol: 'n_{t_{2g}}', definition: 'jumlah elektron pada orbital t₂g' },
              { symbol: 'n_{e_g}', definition: 'jumlah elektron pada orbital eg' },
              { symbol: 'n_{\\text{ekstra}}', definition: 'jumlah pasangan elektron baru yang terbentuk akibat kekuatan medan ligan (dibanding ion bebas)' },
              { symbol: 'P', definition: 'energi pemasangan spin' },
            ]}
          />
          <EquationBlock
            label="CFSE Tetrahedral"
            latex={'\\text{CFSE}_{T_d} = (-0.6 \\cdot n_{e} + 0.4 \\cdot n_{t_2})\\Delta_t'}
          />
          <EquationBlock
            label="Momen Magnetik Spin-Only"
            latex={'\\mu_{\\text{eff}} = \\sqrt{n(n+2)}\\ \\text{BM}'}
            variables={[{ symbol: 'n', definition: 'jumlah elektron tak berpasangan' }]}
          />
          <EquationBlock label="Hubungan Δₜ dan Δₒ" latex={'\\Delta_t \\approx \\tfrac{4}{9}\\Delta_o'} />
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Menghitung CFSE untuk Kompleks Oktahedral d⁶"
            problem={
              <div>
                <p>Hitung CFSE (dalam satuan <LaTeX>{'\\Delta_o'}</LaTeX>) dan momen magnetik untuk ion logam <LaTeX>{'d^6'}</LaTeX> (mis. <LaTeX>{'Co^{3+}'}</LaTeX>) dalam medan oktahedral spin tinggi dan spin rendah.</p>
                <ComplexStructure
                  geometry="octahedral"
                  metal="Co"
                  ligands={['L', 'L', 'L', 'L', 'L', 'L']}
                  caption={<>Kompleks oktahedral <LaTeX>{'[CoL_6]'}</LaTeX> — enam ligan menentukan pembelahan t₂g/eg</>}
                />
              </div>
            }
            steps={[
              {
                title: 'Konfigurasi spin tinggi (Δₒ < P)',
                content: (
                  <div>
                    <p>Keenam elektron tersebar untuk memaksimalkan spin: <LaTeX>{'t_{2g}^4 e_g^2'}</LaTeX>.</p>
                    <ul>
                      <li>Elektron tak berpasangan <LaTeX>{'n = 4'}</LaTeX>.</li>
                      <li><LaTeX>{'\\text{CFSE} = [4(-0.4) + 2(+0.6)]\\Delta_o = -1.6 + 1.2 = -0.4\\Delta_o'}</LaTeX>.</li>
                      <li><LaTeX>{'\\mu_{\\text{eff}} = \\sqrt{4(4+2)} = \\sqrt{24} = 4.90\\ \\text{BM}'}</LaTeX>.</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: 'Konfigurasi spin rendah (Δₒ > P)',
                content: (
                  <div>
                    <p>Keenam elektron berpasangan penuh di tingkat bawah: <LaTeX>{'t_{2g}^6 e_g^0'}</LaTeX>.</p>
                    <ul>
                      <li>Elektron tak berpasangan <LaTeX>{'n = 0'}</LaTeX> (diamagnetik).</li>
                      <li>Dibanding ion bebas <LaTeX>{'d^6'}</LaTeX> (1 pasangan), kini ada 3 pasangan, sehingga <strong>2 pasangan ekstra</strong> dipaksakan.</li>
                      <li><LaTeX>{'\\text{CFSE} = [6(-0.4) + 0(+0.6)]\\Delta_o + 2P = -2.4\\Delta_o + 2P'}</LaTeX>.</li>
                      <li><LaTeX>{'\\mu_{\\text{eff}} = \\sqrt{0(0+2)} = 0\\ \\text{BM}'}</LaTeX>.</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: 'Bandingkan',
                content: <p>Konfigurasi spin rendah memberi stabilisasi elektronik jauh lebih besar (<LaTeX>{'-2.4\\Delta_o'}</LaTeX>) namun harus membayar energi pemasangan <LaTeX>{'2P'}</LaTeX>. Pilihan spin ditentukan oleh perbandingan <LaTeX>{'\\Delta_o'}</LaTeX> terhadap <LaTeX>{'P'}</LaTeX>.</p>,
              },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Energi pemasangan (<LaTeX>{'P'}</LaTeX>) harus ditambahkan ke perhitungan CFSE untuk <em>setiap</em> pasangan elektron pada diagram.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Hanya tambahkan <LaTeX>{'P'}</LaTeX> untuk pasangan elektron <strong>baru (ekstra)</strong> yang terbentuk akibat pembelahan medan ligan. Pasangan keadaan dasar yang sudah ada pada atom bebas (seperti pasangan pertama pada ion bebas <LaTeX>{'d^6'}</LaTeX>) tidak memerlukan energi pemasangan tambahan.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Pilih geometri, atur jumlah elektron <LaTeX>{'d'}</LaTeX>, lalu alihkan antara spin tinggi dan spin rendah. Amati bagaimana pengisian orbital, CFSE, jumlah elektron tak berpasangan, dan momen magnetik <LaTeX>{'\\mu'}</LaTeX> berubah secara langsung.</p>
          <CrystalFieldSplitter />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Mengapa tidak ada kompleks tetrahedral spin rendah?</span>,
              options: [
                { text: 'Kompleks tetrahedral hanya terbentuk dengan ligan netral.', isCorrect: false },
                { text: <span>Energi pembelahan <LaTeX>{'\\Delta_t'}</LaTeX> terlalu kecil (sekitar <LaTeX>{'4/9\\,\\Delta_o'}</LaTeX>), sehingga lebih menguntungkan bagi elektron untuk mengisi orbital <LaTeX>{'t_2'}</LaTeX> yang lebih tinggi daripada berpasangan.</span>, isCorrect: true },
                { text: 'Kompleks tetrahedral memiliki pusat inversi.', isCorrect: false },
                { text: 'Hanya seng(II) yang membentuk kompleks tetrahedral.', isCorrect: false },
              ],
              explanation: <span>Karena <LaTeX>{'\\Delta_t'}</LaTeX> sangat kecil, ia tak pernah mengatasi energi pemasangan (<LaTeX>{'P'}</LaTeX>). Pemasangan elektron di orbital <LaTeX>{'e'}</LaTeX> bawah tak pernah lebih disukai daripada promosi, sehingga keadaan selalu spin tinggi.</span>,
            },
            {
              question: <span>Untuk medan oktahedral, orbital manakah yang naik energinya sebesar <LaTeX>{'+0.6\\Delta_o'}</LaTeX>?</span>,
              options: [
                { text: <span><LaTeX>{'t_{2g}'}</LaTeX> (<LaTeX>{'d_{xy}, d_{xz}, d_{yz}'}</LaTeX>)</span>, isCorrect: false },
                { text: <span><LaTeX>{'e_g'}</LaTeX> (<LaTeX>{'d_{z^2}, d_{x^2-y^2}'}</LaTeX>)</span>, isCorrect: true },
                { text: <span>Kelima orbital <LaTeX>{'d'}</LaTeX> secara merata</span>, isCorrect: false },
                { text: <span>Hanya <LaTeX>{'d_{xy}'}</LaTeX></span>, isCorrect: false },
              ],
              explanation: <span>Orbital <LaTeX>{'e_g'}</LaTeX> (<LaTeX>{'d_{z^2}, d_{x^2-y^2}'}</LaTeX>) mengarah langsung ke ligan di sepanjang sumbu sehingga mengalami tolakan maksimum dan naik <LaTeX>{'+0.6\\Delta_o'}</LaTeX>; <LaTeX>{'t_{2g}'}</LaTeX> turun <LaTeX>{'-0.4\\Delta_o'}</LaTeX>.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: '1.3', moduleId: 'c3', moduleTitle: 'Teori Ikatan Valensi (VBT)' }]}
            feedsInto={[{ label: '1.5', moduleId: 'c5', moduleTitle: 'Faktor Penentu Pembelahan Medan Kristal (Δ)' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
