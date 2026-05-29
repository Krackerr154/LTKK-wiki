'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import pageStyles from '../[moduleId]/page.module.css';

const METALLOCENES = [
  { metal: 'Fe', name: 'Ferosena', electrons: 18, stability: 'Sangat Stabil', color: '#10b981', desc: 'Kulit tertutup 18e⁻. Stabil di udara. Mengalami substitusi aromatik elektrofilik (asilasi Friedel-Crafts).' },
  { metal: 'Co', name: 'Kobaltosena', electrons: 19, stability: 'Agen Pereduksi', color: '#f59e0b', desc: '19e⁻ — elektron ekstra dalam orbital anti-ikatan. Agen pereduksi 1e⁻ yang kuat. Mudah teroksidasi menjadi [CoCp₂]⁺ (18e⁻) yang stabil.' },
  { metal: 'Ni', name: 'Nikelosena', electrons: 20, stability: 'Reaktif', color: '#ef4444', desc: '20e⁻ — dua elektron dalam orbital anti-ikatan. Secara kimiawi tidak stabil dan sangat reaktif.' },
];

export default function ModuleB5() {
  const [selectedMetal, setSelectedMetal] = useState(0);
  const mc = METALLOCENES[selectedMetal];

  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Kursus</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul B5" moduleTitle="Metalosena (Senyawa Sandwich)" block="B">
        <ConceptOverview>
          <p>Metalosena memiliki <strong>struktur sandwich</strong> — sebuah atom logam transisi di antara dua cincin siklopentadienil (Cp, <LaTeX>{'C_5H_5^-'}</LaTeX>) yang sejajar.</p>
          <p><strong>Ferosena</strong> (<LaTeX>{'Fe(\\eta^5\\text{-}C_5H_5)_2'}</LaTeX>) adalah induk metalosena dengan tepat 18 elektron valensi. Cincin Cp⁻ memiliki elektron 6π dan bersifat aromatik, sehingga ferosena mengalami substitusi aromatik elektrofilik.</p>
          <p>Mengubah pusat logam akan mengubah jumlah elektron dan stabilitas:</p>
          <ul>
            <li><strong>Kobaltosena (19e⁻):</strong> Orbital anti-ikatan terisi → agen pereduksi yang kuat.</li>
            <li><strong>Nikelosena (20e⁻):</strong> Dua elektron anti-ikatan → sangat reaktif dan tidak stabil.</li>
          </ul>
        </ConceptOverview>

        <KeyEquations>
          <p style={{ color: 'var(--text-secondary)' }}>Penghitungan elektron untuk metalosena mengikuti metode ionik standar: elektron M<sup>n+</sup> + 2 × Cp⁻ (masing-masing 6e⁻) = total.</p>
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Perbandingan Reaktivitas Metalosena"
            problem={<p>Jelaskan mengapa Kobaltosena bereaksi dengan cepat dengan udara sedangkan Ferosena benar-benar stabil di udara.</p>}
            steps={[
              { title: 'Ferosena (18e⁻)', content: <p>Kulit tertutup: semua orbital ikatan terisi, anti-ikatan kosong. Stabil secara termodinamika dan kinetika.</p> },
              { title: 'Kobaltosena (19e⁻)', content: <p>Elektron ekstra dalam orbital anti-ikatan. Kehilangannya melalui oksidasi → kobaltosenium 18e⁻ [CoCp₂]⁺, yang sangat stabil. Oleh karena itu, kobaltosena adalah <strong>agen pereduksi yang kuat</strong>.</p> },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Siklopentadienil hanya berkoordinasi dalam mode pentahapto (η⁵).</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Cp dapat berkoordinasi dalam mode monohapto (η¹) atau trihapto (η³) tergantung pada persyaratan sterik/elektronik.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Pilih logam untuk membandingkan struktur dan stabilitas metalosena:</p>
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
            {METALLOCENES.map((m, i) => (
              <button key={i} onClick={() => setSelectedMetal(i)} style={{
                padding: '0.75rem 1.5rem', borderRadius: '10px',
                border: `2px solid ${selectedMetal === i ? m.color : 'var(--border-light)'}`,
                background: selectedMetal === i ? `${m.color}15` : 'rgba(255,255,255,0.03)',
                color: selectedMetal === i ? m.color : 'var(--text-muted)',
                cursor: 'pointer', fontFamily: "'Outfit', sans-serif", fontSize: '1rem', fontWeight: 700,
                transition: 'all 150ms',
              }}>
                {m.metal}
              </button>
            ))}
          </div>

          {/* Sandwich SVG Visualization */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <svg viewBox="0 0 200 200" style={{ width: '200px', height: '200px' }}>
              {/* Top Cp ring */}
              <ellipse cx={100} cy={55} rx={60} ry={15} fill="none" stroke={mc.color} strokeWidth={2} opacity={0.7} />
              <text x={100} y={60} textAnchor="middle" fill={mc.color} fontSize={10} opacity={0.6}>Cp⁻</text>
              {/* Bottom Cp ring */}
              <ellipse cx={100} cy={145} rx={60} ry={15} fill="none" stroke={mc.color} strokeWidth={2} opacity={0.7} />
              <text x={100} y={150} textAnchor="middle" fill={mc.color} fontSize={10} opacity={0.6}>Cp⁻</text>
              {/* Metal center */}
              <circle cx={100} cy={100} r={18} fill={mc.color} opacity={0.9} />
              <text x={100} y={105} textAnchor="middle" fill="#1a1a1a" fontSize={14} fontWeight={700}>{mc.metal}</text>
              {/* Bonds */}
              <line x1={100} y1={70} x2={100} y2={82} stroke={mc.color} strokeWidth={2} opacity={0.5} />
              <line x1={100} y1={118} x2={100} y2={130} stroke={mc.color} strokeWidth={2} opacity={0.5} />
            </svg>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${mc.color}40`, borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.25rem', color: mc.color, marginBottom: '0.5rem' }}>{mc.name}</h4>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{mc.electrons}e⁻</div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: mc.color, marginBottom: '0.75rem' }}>{mc.stability}</div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.875rem' }}>{mc.desc}</p>
          </div>
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Metalosena manakah yang merupakan agen pereduksi 1-elektron yang sangat kuat?</span>,
              options: [
                { text: 'Ferosena.', isCorrect: false },
                { text: 'Kobaltosena.', isCorrect: true },
                { text: 'Kromosena.', isCorrect: false },
              ],
              explanation: <span>Dengan 19 elektron, kobaltosena dengan mudah kehilangan satu elektron untuk mencapai ion kobaltosenium 18e⁻ yang stabil.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[
              { label: 'B2', moduleId: 'b2', moduleTitle: 'Ligan dan Tata Nama' },
              { label: 'B3', moduleId: 'b3', moduleTitle: 'Aturan 18-Elektron' },
            ]}
            feedsInto={[{ label: 'B6', moduleId: 'b6', moduleTitle: 'Katalisis Organologam' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
