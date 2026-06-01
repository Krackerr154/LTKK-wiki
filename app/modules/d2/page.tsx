'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { ResultBox } from '../../components/ui/StepVisuals';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { TabbedExplorer } from '../../components/interactive/TabbedExplorer';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleD2() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/parts/2" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Kembali ke Bagian 2</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Modul 2.2" moduleTitle="Metalurgi & Proses Ekstraksi Industri" block="B" partId="2" articleId="d2">
        <ConceptOverview>
          <p>
            <strong>Metalurgi</strong> adalah ilmu mengekstraksi logam murni dari bijih mineralnya. Proses
            ekstraksi sangat bergantung pada karakteristik termodinamika logam. Beberapa proses industri utama:
          </p>
          <h3>1. Ekstraksi Titanium (Proses Kroll)</h3>
          <p>Titanium tidak dapat diekstraksi dengan reduksi karbon langsung karena membentuk titanium karbida (<LaTeX>{'TiC'}</LaTeX>) yang rapuh. Proses Kroll memakai dua tahap:</p>
          <EquationBlock latex={'TiO_2(s) + C(s) + 2Cl_2(g) \\rightarrow TiCl_4(g) + CO_2(g)'} />
          <EquationBlock latex={'TiCl_4(g) + 2Mg(l) \\xrightarrow{1000^\\circ C} Ti(s) + 2MgCl_2(l)'} />
          <p>Reduksi magnesium dilakukan di bawah atmosfer argon inert agar titanium panas tidak bereaksi dengan N₂/O₂.</p>
          <h3>2. Ekstraksi Besi (Tanur Hembus)</h3>
          <p>Besi diekstraksi dari hematit (<LaTeX>{'Fe_2O_3'}</LaTeX>) memakai gas <LaTeX>{'CO'}</LaTeX> sebagai reduktor dan batu kapur sebagai fluks:</p>
          <EquationBlock latex={'Fe_2O_3(s) + 3CO(g) \\rightarrow 2Fe(l) + 3CO_2(g)'} />
          <EquationBlock latex={'CaO(s) + SiO_2(s) \\rightarrow CaSiO_3(l)\\ (\\text{terak})'} />
          <h3>3. Pemurnian Nikel (Proses Mond)</h3>
          <p>Bergantung pada kesetimbangan gas–logam yang sangat reversibel:</p>
          <EquationBlock latex={'Ni(s) + 4CO(g) \\xrightarrow{60^\\circ C} Ni(CO)_4(g) \\xrightarrow{200^\\circ C} Ni(s) + 4CO(g)'} />
          <h3>4. Ekstraksi & Pemurnian Tembaga</h3>
          <p>Diekstraksi dari kalkopirit (<LaTeX>{'CuFeS_2'}</LaTeX>) melalui pemanggangan, lalu dimurnikan dengan elektrorefining (kotoran Au/Ag mengendap sebagai <em>anode slime</em>).</p>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock label="Pemanggangan kalkopirit" latex={'2CuFeS_2(s) + 4O_2(g) \\rightarrow Cu_2S(s) + 2FeO(s) + 3SO_2(g)'} />
          <EquationBlock label="Reduksi bersama menjadi blister copper" latex={'2Cu_2O(s) + Cu_2S(s) \\rightarrow 6Cu(s) + SO_2(g)'} />
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Perbandingan Termodinamika Reduksi Bijih Besi"
            problem={<p>Hitung <LaTeX>{'\\Delta G^\\circ'}</LaTeX> pada 298 K untuk reduksi hematit (<LaTeX>{'Fe_2O_3'}</LaTeX>) dan siderit (<LaTeX>{'FeCO_3'}</LaTeX>) oleh CO untuk menentukan bijih mana yang lebih efisien direduksi.</p>}
            steps={[
              {
                title: 'Reaksi hematit',
                content: <p><LaTeX>{'Fe_2O_3 + 3CO \\rightarrow 2Fe + 3CO_2'}</LaTeX>: <LaTeX>{'\\Delta H^\\circ = -25\\ \\text{kJ}'}</LaTeX>, <LaTeX>{'\\Delta S^\\circ = +15\\ \\text{J/K}'}</LaTeX>, sehingga <LaTeX>{'\\Delta G^\\circ = -25 - 298(0.015) = -29.5\\ \\text{kJ}'}</LaTeX> (spontan).</p>,
              },
              {
                title: 'Reaksi siderit',
                content: <p><LaTeX>{'FeCO_3 + CO \\rightarrow Fe + 2CO_2'}</LaTeX>: <LaTeX>{'\\Delta H^\\circ = +64\\ \\text{kJ}'}</LaTeX>, <LaTeX>{'\\Delta S^\\circ = +164\\ \\text{J/K}'}</LaTeX>, sehingga <LaTeX>{'\\Delta G^\\circ = +64 - 298(0.164) = +15.1\\ \\text{kJ}'}</LaTeX> (tidak spontan pada suhu ruang).</p>,
              },
              {
                title: 'Kesimpulan',
                content: (
                  <ResultBox tone="success" label="Hasil">
                    Reduksi hematit spontan dan eksotermik pada suhu ruang, lebih efisien secara termodinamika.
                    Reduksi siderit memerlukan energi termal signifikan untuk berlangsung.
                  </ResultBox>
                ),
              },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Miskonsepsi</p>
            <p>Bijih besi direduksi langsung oleh pembakaran kokas (karbon).</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Koreksi</p>
            <p>Karbon terbakar menghasilkan gas <LaTeX>{'CO'}</LaTeX>. Gas <LaTeX>{'CO'}</LaTeX> inilah reduktor utama yang berdifusi melalui bijih berpori di bagian atas tanur.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Jelajahi empat proses ekstraksi industri utama. Pilih tab untuk meninjau reaksi dan kondisi masing-masing.</p>
          <TabbedExplorer
            tabs={[
              {
                label: 'Kroll (Ti)', color: '#38bdf8', heading: <span>Proses Kroll — Titanium</span>,
                body: <div><p>Klorinasi rutil → <LaTeX>{'TiCl_4'}</LaTeX> cair, lalu reduksi oleh Mg di bawah argon pada 1000°C. Wajib inert agar Ti tidak membentuk <LaTeX>{'TiN'}</LaTeX>/<LaTeX>{'TiO_2'}</LaTeX> yang rapuh.</p></div>,
              },
              {
                label: 'Tanur Hembus (Fe)', color: '#f59e0b', heading: <span>Tanur Hembus — Besi</span>,
                body: <div><p>Kokas terbakar → <LaTeX>{'CO'}</LaTeX>; <LaTeX>{'CO'}</LaTeX> mereduksi <LaTeX>{'Fe_2O_3 \\rightarrow Fe_3O_4 \\rightarrow FeO \\rightarrow Fe'}</LaTeX>. Batu kapur membentuk terak <LaTeX>{'CaSiO_3'}</LaTeX> yang mengapung.</p></div>,
              },
              {
                label: 'Mond (Ni)', color: '#34d399', heading: <span>Proses Mond — Nikel</span>,
                body: <div><p>Nikel kotor + CO pada 60°C → <LaTeX>{'Ni(CO)_4'}</LaTeX> gas volatil (meninggalkan kotoran); dipanaskan ke 200°C untuk mengurai kembali menjadi Ni murni 99,95% + CO daur ulang.</p></div>,
              },
              {
                label: 'Tembaga', color: '#c084fc', heading: <span>Ekstraksi Tembaga</span>,
                body: <div><p>Pemanggangan kalkopirit, reduksi bersama menjadi <em>blister copper</em>, lalu elektrorefining: kotoran Zn larut, Au/Ag jatuh sebagai <em>anode slime</em> bernilai tinggi.</p></div>,
              },
            ]}
          />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Dalam proses Kroll, mengapa reduksi magnesium harus di bawah atmosfer argon inert?</span>,
              options: [
                { text: 'Argon bertindak sebagai katalis.', isCorrect: false },
                { text: <span>Nitrogen dan oksigen bereaksi agresif dengan titanium panas membentuk <LaTeX>{'TiN'}</LaTeX> dan <LaTeX>{'TiO_2'}</LaTeX> yang rapuh, merusak logam.</span>, isCorrect: true },
                { text: 'Argon membantu mengembunkan uap magnesium.', isCorrect: false },
                { text: 'Untuk mencegah magnesium larut.', isCorrect: false },
              ],
              explanation: <span>Titanium sangat reaktif pada suhu tinggi (1000°C) dan akan terbakar di udara atau bereaksi dengan nitrogen. Atmosfer argon murni mencegah kontaminasi.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: '2.1', moduleId: 'd1', moduleTitle: 'Tren Periodik & Karakteristik Logam Transisi' }]}
            feedsInto={[{ label: '2.3', moduleId: 'd3', moduleTitle: 'Kimia Deskriptif Logam 3d (Sc–Zn)' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
