'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import pageStyles from '../[moduleId]/page.module.css';

const FACTORS = [
  { id: 'leaving', label: '1. Gugus Pergi', content: 'Semakin lemah ikatan M–X, semakin cepat reaksinya. Laju meningkat ke bawah golongan halogen: F⁻ ≪ Cl⁻ < Br⁻ < I⁻. Hal ini karena energi disosiasi ikatan menurun seiring bertambahnya jari-jari halida.' },
  { id: 'spectator', label: '2. Ligan Spektator', content: 'Ligan spektator donor σ yang kuat meningkatkan rapatan elektron pada pusat logam, menstabilkan keadaan transisi selama disosiasi dan mempercepat laju.' },
  { id: 'steric', label: '3. Efek Sterik', content: 'Ligan yang besar menjejali keadaan dasar berkoordinasi 6. Disosiasi gugus pergi mengurangi kesesakan, menyebabkan percepatan laju yang signifikan (pelepasan sterik).' },
  { id: 'charge', label: '4. Muatan Ion', content: 'Muatan positif yang lebih tinggi pada logam memperkuat tarikan elektrostatik terhadap gugus pergi, sehingga menyulitkan disosiasi. Laju menurun seiring peningkatan muatan: M+ > M²⁺ > M³⁺.' },
  { id: 'stereo', label: '5. Stereokimia', content: 'Disosiasi dapat menghasilkan zat antara square pyramidal (mempertahankan cis/trans) atau zat antara trigonal bipyramidal (memungkinkan isomerisasi, menghasilkan rasio cis:trans ~2:1).' },
  { id: 'base', label: '6. Hidrolisis Basa (SN1cb)', content: 'Di hadapan OH⁻, substitusi terjadi melalui jalur yang sangat cepat: OH⁻ bertindak sebagai basa Brønsted untuk mendeprotonasi ligan amina, menciptakan basa konjugat (NH₂⁻) yang dengan cepat mengeluarkan gugus pergi melalui donasi π.' },
];

export default function ModuleA6() {
  const [activeTab, setActiveTab] = useState('leaving');
  const activeFactor = FACTORS.find(f => f.id === activeTab);

  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/3" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 3</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul A6" moduleTitle="Substitusi pada Kompleks Oktahedral" block="A">
        <ConceptOverview>
          <p>Substitusi ligan dalam kompleks oktahedral berkoordinasi 6 (terutama <LaTeX>{'Co(III)'}</LaTeX> dan <LaTeX>{'Cr(III)'}</LaTeX>) berlangsung hampir secara eksklusif melalui mekanisme <strong>Disosiatif (D)</strong> atau <strong>Pertukaran-disosiatif (I<sub>d</sub>)</strong>.</p>
          <p>Laju substitusi dikendalikan oleh enam sub-faktor, yang dieksplorasi di dasbor interaktif di bawah ini.</p>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="Hukum Laju Basa Konjugat (SN1cb)"
            latex={'\\text{Laju} = kK[Co(NH_3)_5Cl^{2+}][OH^-] = k_{\\text{obs}}[\\text{Kompleks}][OH^-]'}
            variables={[
              { symbol: 'K', definition: 'konstanta kesetimbangan untuk pra-kesetimbangan deprotonasi' },
              { symbol: 'k', definition: 'konstanta laju untuk RDS disosiasi basa konjugat' },
            ]}
          />
        </KeyEquations>

        <WorkedExamples>
          <p style={{ color: 'var(--text-secondary)' }}>Jelajahi masing-masing dari enam faktor yang mengendalikan substitusi oktahedral di dasbor interaktif di bawah ini.</p>
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Karena laju hidrolisis basa bergantung pada [OH⁻], mekanismenya pastilah serangan asosiatif (S<sub>N</sub>2) oleh hidroksida.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Mekanismenya secara ketat disosiatif (S<sub>N</sub>1cb). OH⁻ bertindak sebagai <strong>basa</strong> untuk mendeprotonasi ligan, bukan sebagai nukleofil. Kebergantungan pada [OH⁻] berasal dari pra-kesetimbangan.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Jelajahi enam faktor yang mengendalikan laju substitusi oktahedral:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {FACTORS.map(f => (
              <button
                key={f.id}
                onClick={() => setActiveTab(f.id)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  border: `1px solid ${activeTab === f.id ? 'rgba(59,130,246,0.4)' : 'var(--border-light)'}`,
                  background: activeTab === f.id ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.03)',
                  color: activeTab === f.id ? '#60a5fa' : 'var(--text-muted)',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.8125rem',
                  fontWeight: activeTab === f.id ? 600 : 400,
                  transition: 'all 150ms',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
          {activeFactor && (
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '1.5rem' }}>
              <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.125rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{activeFactor.label}</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{activeFactor.content}</p>
            </div>
          )}
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Mengapa <LaTeX>{'[Co(NH_2Me)_5Cl]^{2+}'}</LaTeX> mengalami akuasi lebih cepat dari <LaTeX>{'[Co(NH_3)_5Cl]^{2+}'}</LaTeX>?</span>,
              options: [
                { text: 'Metilamina adalah basa yang lebih lemah.', isCorrect: false },
                { text: 'Gugus metil yang besar menyebabkan tegangan sterik, yang berkurang pada saat disosiasi.', isCorrect: true },
                { text: 'Pengotor besi mengkatalisis reaksi.', isCorrect: false },
                { text: 'Metilamina bertindak sebagai gugus pergi yang lebih baik.', isCorrect: false },
              ],
              explanation: <span>Kesesakan sterik pada reaktan berkurang ketika bilangan koordinasi turun dari 6 menjadi 5, yang mendorong percepatan sterik.</span>,
            },
            {
              question: <span>Dalam mekanisme S<sub>N</sub>1cb, apa peran ligan amida (NH₂⁻)?</span>,
              options: [
                { text: 'Ia bertindak sebagai gugus pergi.', isCorrect: false },
                { text: 'Ia bertindak sebagai donor π yang kuat, memfasilitasi disosiasi gugus pergi.', isCorrect: true },
                { text: 'Ia mengoordinasikan air.', isCorrect: false },
                { text: 'Ia berfungsi sebagai spektator tanpa peran apa pun.', isCorrect: false },
              ],
              explanation: <span>Gugus amida adalah donor π yang kuat, menstabilkan keadaan transisi dan mempercepat pengeluaran gugus pergi.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: 'A2', moduleId: 'a2', moduleTitle: 'Kompleks Labil dan Inert' }]}
            feedsInto={[{ label: 'A7', moduleId: 'a7', moduleTitle: 'Reaksi Transfer Elektron' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
