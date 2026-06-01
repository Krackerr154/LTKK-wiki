'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { StructureDiagram, StructureGrid, type StructureKind } from '../../components/ui/StructureDiagram';
import { ComplexStructure } from '../../components/ui/ComplexStructure';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import pageStyles from '../[moduleId]/page.module.css';

const LIGAND_GALLERY: {
  name: string;
  hapticity: string;
  electrons: string;
  charge: string;
  desc: string;
  structure: StructureKind;
}[] = [
  { name: 'Metil (CH₃⁻)', hapticity: 'η¹', electrons: '1 (kov) / 2 (ionik)', charge: '−1', desc: 'Hanya donor-σ. Membentuk ikatan M–C tunggal.', structure: 'eta1' },
  { name: 'Alil (C₃H₅⁻)', hapticity: 'η³', electrons: '3 (kov) / 4 (ionik)', charge: '−1', desc: 'Sistem π terdelokalisasi berkoordinasi melalui 3 karbon yang berdekatan.', structure: 'eta3' },
  { name: 'Siklopentadienil (Cp⁻)', hapticity: 'η⁵', electrons: '5 (kov) / 6 (ionik)', charge: '−1', desc: 'Kelima karbon berkoordinasi secara merata. Cincin aromatik 6π.', structure: 'eta5' },
  { name: 'Benzena (C₆H₆)', hapticity: 'η⁶', electrons: '6 (kov) / 6 (ionik)', charge: '0', desc: 'Keenam karbon dari cincin aromatik berkoordinasi dengan logam.', structure: 'eta6' },
  { name: 'Etilena (C₂H₄)', hapticity: 'η²', electrons: '2 (kov) / 2 (ionik)', charge: '0', desc: 'Ikatan π mendonorkan ke logam (model Dewar-Chatt-Duncanson).', structure: 'eta2' },
  { name: 'Karbonil (CO)', hapticity: 'η¹', electrons: '2 (kov) / 2 (ionik)', charge: '0', desc: 'Terminal: donor-σ + akseptor-π. Bisa juga menjembatani (μ₂, μ₃).', structure: 'co_terminal' },
  { name: 'Hidrida (H⁻)', hapticity: 'η¹', electrons: '1 (kov) / 2 (ionik)', charge: '−1', desc: 'Membentuk ikatan M–H langsung. Penting dalam hidrogenasi katalitik.', structure: 'hydride' },
  { name: 'Fosfin (PR₃)', hapticity: 'η¹', electrons: '2 (kov) / 2 (ionik)', charge: '0', desc: 'Donor-σ kuat, akseptor-π lemah. Rintangan sterik dapat disesuaikan melalui gugus R.', structure: 'phosphine' },
];

export default function ModuleB2() {
  const [selectedLigand, setSelectedLigand] = useState(0);

  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/3" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 3</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul B2" moduleTitle="Ligan dan Tata Nama" block="B">
        <ConceptOverview>
          <p>Tata nama organologam memperkenalkan istilah-istilah khusus:</p>
          <ol>
            <li><strong>Haptisitas (notasi <LaTeX>{'\\eta'}</LaTeX>):</strong> Jumlah atom yang berdekatan dalam suatu ligan yang berkoordinasi langsung dengan logam.
              <ul>
                <li><LaTeX>{'\\eta^1'}</LaTeX>-alkil: satu karbon berkoordinasi</li>
                <li><LaTeX>{'\\eta^5'}</LaTeX>-siklopentadienil: kelima karbon berkoordinasi</li>
                <li><LaTeX>{'\\eta^6'}</LaTeX>-benzena: keenam karbon berkoordinasi</li>
              </ul>
            </li>
            <li><strong>Ligan Penjembatan (notasi <LaTeX>{'\\mu'}</LaTeX>):</strong> Ligan yang digunakan bersama oleh dua atau lebih pusat logam (misalnya, <LaTeX>{'\\mu_2'}</LaTeX>-CO menjembatani dua logam).</li>
            <li><strong>Aturan Tata Nama:</strong> Urutkan ligan berdasarkan abjad, tentukan haptisitas sebelum nama ligan, namai logam dengan keadaan oksidasi di dalam tanda kurung.</li>
          </ol>

          <p style={{ marginTop: '1rem' }}>
            Lihat bagaimana setiap notasi diterjemahkan menjadi struktur nyata — jumlah pada <LaTeX>{'\\eta'}</LaTeX> dan{' '}
            <LaTeX>{'\\mu'}</LaTeX> persis sama dengan jumlah ikatan ungu (koordinasi) pada diagram:
          </p>
          <StructureGrid>
            <StructureDiagram kind="eta1" caption={<><strong>η¹</strong> — 1 atom (mis. M–CH₃)</>} />
            <StructureDiagram kind="eta2" caption={<><strong>η²</strong> — 2 atom (mis. C₂H₄)</>} />
            <StructureDiagram kind="eta3" caption={<><strong>η³</strong> — 3 atom (alil)</>} />
            <StructureDiagram kind="eta5" caption={<><strong>η⁵</strong> — 5 atom (Cp⁻)</>} />
            <StructureDiagram kind="eta6" caption={<><strong>η⁶</strong> — 6 atom (benzena)</>} />
            <StructureDiagram kind="mu2" caption={<><strong>μ₂</strong> — menjembatani 2 logam (μ₂-CO)</>} />
            <StructureDiagram kind="mu3" caption={<><strong>μ₃</strong> — menutup 3 logam</>} />
          </StructureGrid>
        </ConceptOverview>

        <KeyEquations>
          <p style={{ color: 'var(--text-secondary)' }}>Modul ini berfokus pada konvensi tata nama alih-alih persamaan matematika. Rujuklah Galeri Ligan di bawah ini untuk jumlah kontribusi elektron.</p>
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Menamai Turunan Metalosena"
            problem={
              <div>
                <p>Tentukan nama IUPAC untuk <LaTeX>{'[Fe(\\eta^5\\text{-}C_5H_5)_2]'}</LaTeX>.</p>
                <ComplexStructure geometry="sandwich" metal="Fe" ring="η⁵-Cp" caption={<>Ferosena — dua cincin Cp⁻ mengapit Fe(II)</>} />
              </div>
            }
            steps={[
              { title: 'Identifikasi ligan', content: <p>Dua cincin siklopentadienil (Cp⁻), berkoordinasi melalui kelima karbonnya (η⁵).</p> },
              { title: 'Tentukan keadaan oksidasi', content: <p>Kompleks bersifat netral. Setiap Cp⁻ memiliki muatan -1, sehingga Fe harus +2 untuk mengimbangi.</p> },
              { title: 'Susun nama', content: <p><strong>bis(η⁵-siklopentadienil)besi(II)</strong> — umumnya dikenal sebagai ferosena.</p> },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Haptisitas (η) sama dengan dentisitas.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p><strong>Dentisitas</strong> = jumlah ikatan koordinasi yang berbeda dari atom donor yang tidak berdekatan (misalnya, EDTA). <strong>Haptisitas</strong> = koordinasi yang berdekatan dari sistem elektron π yang kontinu.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Klik ligan apa pun untuk melihat haptisitas, kontribusi elektron, dan deskripsi ikatannya:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {LIGAND_GALLERY.map((lig, i) => (
              <button key={i} onClick={() => setSelectedLigand(i)} style={{
                padding: '0.5rem 1rem', borderRadius: '8px',
                border: `1px solid ${selectedLigand === i ? 'rgba(139,92,246,0.4)' : 'var(--border-light)'}`,
                background: selectedLigand === i ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.03)',
                color: selectedLigand === i ? '#a78bfa' : 'var(--text-muted)',
                cursor: 'pointer', fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.8125rem',
                fontWeight: selectedLigand === i ? 600 : 400, transition: 'all 150ms',
              }}>
                {lig.name}
              </button>
            ))}
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '1.5rem' }}>
            <h4 style={{ fontFamily: 'var(--font-outfit), sans-serif', fontSize: '1.125rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              {LIGAND_GALLERY[selectedLigand].name}
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(140px, 180px) 1fr', gap: '1.25rem', alignItems: 'center', marginBottom: '1rem' }}>
              <StructureDiagram
                kind={LIGAND_GALLERY[selectedLigand].structure}
                caption={<>Koordinasi {LIGAND_GALLERY[selectedLigand].hapticity}</>}
              />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '0.75rem' }}>
                <div style={{ background: 'rgba(139,92,246,0.08)', borderRadius: '8px', padding: '0.75rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Haptisitas</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#a78bfa' }}>{LIGAND_GALLERY[selectedLigand].hapticity}</div>
                </div>
                <div style={{ background: 'rgba(59,130,246,0.08)', borderRadius: '8px', padding: '0.75rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Elektron</div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: '#60a5fa' }}>{LIGAND_GALLERY[selectedLigand].electrons}</div>
                </div>
                <div style={{ background: 'rgba(16,185,129,0.08)', borderRadius: '8px', padding: '0.75rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Muatan</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#6ee7b7' }}>{LIGAND_GALLERY[selectedLigand].charge}</div>
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.875rem' }}>{LIGAND_GALLERY[selectedLigand].desc}</p>
          </div>
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Berapakah haptisitas dari ligan etilena dalam garam Zeise, <LaTeX>{'[PtCl_3(\\eta^2\\text{-}C_2H_4)]^-'}</LaTeX>?</span>,
              options: [
                { text: '1', isCorrect: false },
                { text: '2', isCorrect: true },
                { text: '3', isCorrect: false },
                { text: '4', isCorrect: false },
              ],
              explanation: <span>Etilena berkoordinasi melalui kedua karbon dari ikatan rangkap, memberikan haptisitas η² = 2.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: 'B1', moduleId: 'b1', moduleTitle: 'Sejarah dan Karakteristik Umum' }]}
            feedsInto={[{ label: 'B3', moduleId: 'b3', moduleTitle: 'Aturan 18-Elektron' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
