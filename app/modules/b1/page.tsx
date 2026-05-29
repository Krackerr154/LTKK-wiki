'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import pageStyles from '../[moduleId]/page.module.css';

const TIMELINE = [
  { year: 1827, title: "Garam Zeise", desc: 'William Zeise mensintesis K[PtCl₃(η²-C₂H₄)]⁻, kompleks logam transisi-olefin pertama.' },
  { year: 1890, title: 'Proses Mond', desc: 'Ludwig Mond menemukan Ni(CO)₄, memungkinkan pemurnian nikel melalui pembentukan karbonil yang mudah menguap.' },
  { year: 1951, title: 'Penemuan Ferosena', desc: 'Kealy & Pauson mensintesis Fe(η⁵-C₅H₅)₂, senyawa sandwich pertama. Woodward dan Wilkinson menjelaskan strukturnya.' },
  { year: 1965, title: "Katalis Wilkinson", desc: 'Geoffrey Wilkinson mengembangkan RhCl(PPh₃)₃, katalis hidrogenasi homogen praktis pertama.' },
  { year: 1973, title: 'Hadiah Nobel', desc: 'Ernst Otto Fischer dan Geoffrey Wilkinson menerima Hadiah Nobel Kimia untuk metalosena.' },
  { year: 2005, title: 'Grubbs & Schrock', desc: 'Hadiah Nobel untuk katalis metatesis olefin — katalisis organologam pada kondisi terbaiknya.' },
];

export default function ModuleB1() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Kursus</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul B1" moduleTitle="Karakteristik Umum dan Sejarah" block="B">
        <ConceptOverview>
          <p>Kimia organologam mempelajari senyawa yang mengandung setidaknya satu <strong>ikatan kovalen Logam–Karbon langsung</strong>. Ini menjembatani kimia koordinasi anorganik klasik dan kimia organik.</p>
          <p>Berbeda dengan kompleks klasik (keadaan oksidasi tinggi, donor N/O/halogen), kompleks organologam sering menstabilkan <strong>keadaan oksidasi rendah</strong> (0, -1, atau nilai positif rendah) melalui ligan donor-σ dan akseptor-π yang kuat (CO, fosfin, siklopentadienil).</p>
          <p>Karena logam dengan keadaan oksidasi rendah sangat kaya elektron, banyak senyawa organologam bersifat <strong>piroforik</strong> (menyala jika terkena udara/kelembaban) dan memerlukan sintesis di bawah atmosfer lembam (jalur Schlenk, glovebox).</p>
        </ConceptOverview>

        <KeyEquations>
          <p style={{ color: 'var(--text-secondary)' }}>Modul ini bersifat konseptual — tidak ada persamaan utama. Kerangka kerja kuantitatif dimulai di Modul B3 (Aturan 18-Elektron).</p>
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Kompleks Klasik vs. Kompleks Organologam"
            problem={<p>Klasifikasikan <LaTeX>{'[Co(NH_3)_6]Cl_3'}</LaTeX> dan <LaTeX>{'[Co(CO)_4]^-'}</LaTeX> sebagai klasik atau organologam.</p>}
            steps={[
              { title: 'Analisis [Co(NH₃)₆]Cl₃', content: <p>Mengandung ikatan koordinasi Co–N (donor nitrogen). Tidak ada ikatan logam–karbon → <strong>kompleks koordinasi klasik</strong>.</p> },
              { title: 'Analisis [Co(CO)₄]⁻', content: <p>Mengandung ikatan kovalen Co–C langsung ke karbon monoksida. Co berada dalam keadaan oksidasi -1 (sangat rendah) → <strong>kompleks organologam</strong>.</p> },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Senyawa apa pun yang mengandung logam yang berkoordinasi dengan karbon adalah organologam.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Senyawa di mana karbon merupakan bagian dari ikatan non-logam-karbon (karbonat, beberapa sianida) bukanlah organologam. Harus ada <strong>ikatan logam–karbon</strong> yang langsung dan bertipe kovalen.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1.5rem' }}>Tonggak penting dalam kimia organologam:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {TIMELINE.map((event, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.25rem', paddingBottom: '1.5rem', position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '60px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#8b5cf6', border: '2px solid rgba(139,92,246,0.4)', zIndex: 1 }}></div>
                  {i < TIMELINE.length - 1 && <div style={{ width: '2px', flex: 1, background: 'rgba(139,92,246,0.2)' }}></div>}
                </div>
                <div style={{ flex: 1, paddingBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1.125rem', color: '#a78bfa' }}>{event.year}</span>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{event.title}</span>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Berapakah keadaan oksidasi Ir dalam kompleks Vaska, <LaTeX>{'[IrCl(CO)(PPh_3)_2]'}</LaTeX>?</span>,
              options: [
                { text: '0', isCorrect: false },
                { text: '+1', isCorrect: true },
                { text: '+2', isCorrect: false },
                { text: '+3', isCorrect: false },
              ],
              explanation: <span>Cl⁻ bersifat anionik, CO dan PPh₃ netral. Untuk kompleks netral: Ir + (-1) = 0, sehingga Ir = +1.</span>,
            },
            {
              question: <span>Mengapa banyak senyawa organologam disintesis di bawah atmosfer lembam?</span>,
              options: [
                { text: 'Nitrogen bertindak sebagai katalis.', isCorrect: false },
                { text: 'Logam dengan keadaan oksidasi rendah sangat sensitif terhadap udara dan piroforik.', isCorrect: true },
                { text: 'Argon menstabilkan bejana kaca.', isCorrect: false },
                { text: 'Oksigen berkoordinasi untuk membentuk metalosena.', isCorrect: false },
              ],
              explanation: <span>Logam bervalensi rendah kaya elektron dan mengalami oksidasi eksotermik yang cepat oleh O₂ atmosfer atau kelembaban.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[]}
            feedsInto={[
              { label: 'B2', moduleId: 'b2', moduleTitle: 'Ligan dan Tata Nama' },
              { label: 'B3', moduleId: 'b3', moduleTitle: 'Aturan 18-Elektron' },
            ]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
