'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { DBlockPeriodicTable } from '../../components/interactive/DBlockPeriodicTable';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleA2() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Back to Course</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Module A2" moduleTitle="Labile and Inert Complexes" block="A">
        <ConceptOverview>
          <p>The terms <strong>labile</strong> and <strong>inert</strong> are purely kinetic descriptions coined by Henry Taube:</p>
          <ul>
            <li><strong>Labile complexes:</strong> Undergo rapid ligand exchange, typically with <LaTeX>{'t_{1/2} < 1\\ \\text{min}'}</LaTeX> at 25°C.</li>
            <li><strong>Inert complexes:</strong> Undergo slow ligand exchange, with <LaTeX>{'t_{1/2} > 1\\ \\text{min}'}</LaTeX>, often taking hours or days.</li>
          </ul>
          <p>The kinetic lability is primarily determined by the <strong>Crystal Field Stabilization Energy (CFSE)</strong> and the specific <LaTeX>{'d'}</LaTeX>-electron configuration. When a 6-coordinate octahedral complex reacts, it must deform into either a 5-coordinate or 7-coordinate transition state. If this deformation causes a massive loss of CFSE, the complex is inert.</p>
          <ul>
            <li><strong>Inert:</strong> Octahedral <LaTeX>{'d^3'}</LaTeX> (e.g., <LaTeX>{'Cr^{3+}'}</LaTeX>) and low-spin <LaTeX>{'d^6'}</LaTeX> (e.g., <LaTeX>{'Co^{3+}'}</LaTeX>). These possess highly stabilized ground states.</li>
            <li><strong>Labile:</strong> <LaTeX>{'d^1, d^2'}</LaTeX>, high-spin <LaTeX>{'d^4, d^5, d^6'}</LaTeX>, and <LaTeX>{'d^7, d^9, d^{10}'}</LaTeX>. Low or zero CFSE barriers.</li>
          </ul>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="Crystal Field Stabilization Energy"
            latex="\\text{CFSE} = (-0.4 \\cdot n_{t_{2g}} + 0.6 \\cdot n_{e_g})\\Delta_o + P \\cdot n_{\\text{pair}}"
            variables={[
              { symbol: 'n_{t_{2g}}', definition: 'number of electrons in the lower-energy t₂g orbitals' },
              { symbol: 'n_{e_g}', definition: 'number of electrons in the higher-energy eg orbitals' },
              { symbol: '\\Delta_o', definition: 'octahedral crystal field splitting energy' },
              { symbol: 'P', definition: 'spin-pairing energy' },
            ]}
          />
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="The Thermodynamic vs. Kinetic Stability Trap"
            problem={<p>Analyze the stability and lability of <LaTeX>{'[Ni(CN)_4]^{2-}'}</LaTeX> and <LaTeX>{'[Co(NH_3)_6]^{3+}'}</LaTeX> in acidic media.</p>}
            steps={[
              { title: 'Analyze [Ni(CN)₄]²⁻', content: <p><LaTeX>{'[Ni(CN)_4]^{2-}'}</LaTeX> has <LaTeX>{'K_f \\approx 10^{30}'}</LaTeX> — <strong>thermodynamically highly stable</strong>. However, as a <LaTeX>{'d^8'}</LaTeX> square planar complex, it undergoes associative ligand exchange with a negligible kinetic barrier, making it <strong>kinetically labile</strong>.</p> },
              { title: 'Analyze [Co(NH₃)₆]³⁺', content: <p><LaTeX>{'[Co(NH_3)_6]^{3+}'}</LaTeX> is thermodynamically unstable in acid (<LaTeX>{'K_{eq} \\approx 10^{25}'}</LaTeX> for decomposition). However, <LaTeX>{'Co^{3+}'}</LaTeX> is low-spin <LaTeX>{'d^6'}</LaTeX> (<LaTeX>{'t_{2g}^6 e_g^0'}</LaTeX>) with maximum CFSE (<LaTeX>{'-2.4\\Delta_o'}</LaTeX>). This makes it <strong>kinetically inert</strong>.</p> },
              { title: 'Key Takeaway', content: <p>Thermodynamic stability ≠ kinetic lability. A complex can be thermodynamically unstable yet kinetically inert (or vice versa).</p> },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Critical Trap</p>
            <p>&quot;Thermodynamically stable&quot; is equivalent to &quot;kinetically inert.&quot;</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Correction</p>
            <p>Thermodynamics dictates equilibrium (<LaTeX>{'\\Delta G^\\circ, K_f'}</LaTeX>). Kinetics dictates speed (<LaTeX>{'E_a, k'}</LaTeX>). A compound can be extremely unstable thermodynamically but survive indefinitely due to kinetic inertness.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Click any transition metal ion to see its d-electron configuration, CFSE, and labile/inert classification. Toggle between high-spin and low-spin to see how the ligand field strength changes the prediction.</p>
          <DBlockPeriodicTable />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Why is <LaTeX>{'[Cr(OH_2)_6]^{3+}'}</LaTeX> highly kinetically inert compared to <LaTeX>{'[Fe(OH_2)_6]^{3+}'}</LaTeX>?</span>,
              options: [
                { text: <span><LaTeX>{'Cr^{3+}'}</LaTeX> is d³ with strong CFSE, whereas <LaTeX>{'Fe^{3+}'}</LaTeX> is high-spin d⁵ with zero CFSE.</span>, isCorrect: true },
                { text: 'Water binds much more tightly to chromium than iron.', isCorrect: false },
                { text: 'Iron is larger than chromium, accelerating substitution.', isCorrect: false },
                { text: 'Chromium undergoes associative substitution exclusively.', isCorrect: false },
              ],
              explanation: <span>Octahedral d³ has a stable <LaTeX>{'t_{2g}^3'}</LaTeX> ground state with CFSE of <LaTeX>{'-1.2\\Delta_o'}</LaTeX>. High-spin d⁵ has zero CFSE, meaning no electronic barrier to ligand dissociation.</span>,
            },
            {
              question: <span>A complex has a half-life of 10⁻⁶ seconds for water exchange. How is it classified?</span>,
              options: [
                { text: 'Thermodynamically stable.', isCorrect: false },
                { text: 'Kinetically inert.', isCorrect: false },
                { text: 'Kinetically labile.', isCorrect: true },
                { text: 'Thermodynamically unstable.', isCorrect: false },
              ],
              explanation: <span>Any complex with t₁/₂ &lt; 1 minute at room temperature is classified as kinetically labile.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: 'A1', moduleId: 'a1', moduleTitle: 'Kinetics Foundations' }]}
            feedsInto={[
              { label: 'A6', moduleId: 'a6', moduleTitle: 'Substitution in Octahedral Complexes' },
              { label: 'A7', moduleId: 'a7', moduleTitle: 'Electron Transfer Reactions' },
            ]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
