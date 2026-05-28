'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { MechanismAnimator } from '../../components/interactive/MechanismAnimator';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleA3() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Back to Course</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Module A3" moduleTitle="Three Substitution Mechanisms: D, A, and I" block="A">
        <ConceptOverview>
          <p>Ligand substitution reactions in transition metal complexes follow three major pathways:</p>
          <ol>
            <li><strong>Dissociative (D):</strong> A two-step process. The leaving ligand X fully dissociates first, forming a stable intermediate with reduced coordination number. The entering ligand Y then coordinates in a rapid second step.</li>
            <li><strong>Associative (A):</strong> A two-step process. The entering ligand Y coordinates first to form an expanded coordination intermediate. The leaving ligand X then departs in a fast second step.</li>
            <li><strong>Interchange (I):</strong> A concerted, single-step reaction with no intermediate.
              <ul>
                <li><strong>I<sub>d</sub>:</strong> Dominated by M–X bond stretching (dissociative character).</li>
                <li><strong>I<sub>a</sub>:</strong> Dominated by M–Y bond forming (associative character).</li>
              </ul>
            </li>
          </ol>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="Dissociative (D) — Saturation Kinetics"
            latex="\\text{Rate} = \\frac{k_1 k_2 [ML_nX][Y]}{k_{-1}[X] + k_2[Y]}"
            variables={[
              { symbol: 'k_1', definition: 'rate constant for dissociation of X' },
              { symbol: 'k_2', definition: 'rate constant for association of Y' },
            ]}
          />
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Under high [Y]: <LaTeX display>{'\\text{Rate} = k_1[ML_nX] \\quad \\text{(pseudo-first-order)}'}</LaTeX>
          </p>
          <EquationBlock
            label="Associative (A) — Second-Order"
            latex="\\text{Rate} = k_1[ML_nX][Y]"
          />
        </KeyEquations>

        <WorkedExamples>
          <WorkedExample
            title="Deciphering the Rate-Determining Step"
            problem={<p>For <LaTeX>{'[Co(CN)_5(OH_2)]^{2-} + I^- \\rightarrow [Co(CN)_5I]^{3-} + H_2O'}</LaTeX>, the rate remains unchanged when [I⁻] is increased from 0.05 M to 2.0 M. Identify the mechanism.</p>}
            steps={[
              { title: 'Observe rate dependence', content: <p>The rate is independent of [I⁻], so the entering ligand does not participate in the RDS.</p> },
              { title: 'Write the rate law', content: <div><LaTeX display>{'\\text{Rate} = k[Co(CN)_5(OH_2)]^{2-}'}</LaTeX></div> },
              { title: 'Assign mechanism', content: <p>This is a <strong>Dissociative (D)</strong> mechanism — the slow step is the dissociation of water to form the 5-coordinate intermediate <LaTeX>{'[Co(CN)_5]^{2-}'}</LaTeX>.</p> },
            ]}
          />
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Misconception</p>
            <p>The Interchange (I) mechanism has a transient intermediate.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Correction</p>
            <p>The I mechanism is a single-step concerted process with <strong>no intermediate</strong>. If an intermediate has a physical lifetime (&gt;10⁻¹³ s), the reaction is D or A, not I.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Watch all three substitution mechanisms animate side-by-side. Use the Play button to step through or auto-play the entire sequence.</p>
          <MechanismAnimator />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>In an Associative (A) mechanism, what is the effect of changing the nucleophilicity of Y?</span>,
              options: [
                { text: 'No effect.', isCorrect: false },
                { text: 'The rate decreases for better nucleophiles.', isCorrect: false },
                { text: 'The rate increases for better nucleophiles because bond formation is the RDS.', isCorrect: true },
                { text: 'The reaction shifts to a D mechanism.', isCorrect: false },
              ],
              explanation: <span>Bond formation is the slow step in A mechanisms, so a better nucleophile reacts faster.</span>,
            },
            {
              question: <span>An octahedral complex undergoes substitution with Rate = k[Complex][Y]. What is the mechanism?</span>,
              options: [
                { text: 'Pure Dissociative (D).', isCorrect: false },
                { text: <span>Associative (A) or Interchange-associative (I<sub>a</sub>).</span>, isCorrect: true },
                { text: 'Zero-order kinetics.', isCorrect: false },
                { text: 'Cannot be determined.', isCorrect: false },
              ],
              explanation: <span>Second-order kinetics proves the entering ligand Y is involved in the RDS, consistent with A or I<sub>a</sub> mechanisms.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: 'A1', moduleId: 'a1', moduleTitle: 'Kinetics Foundations' }]}
            feedsInto={[
              { label: 'A5', moduleId: 'a5', moduleTitle: 'Substitution in Square Planar Complexes' },
              { label: 'A6', moduleId: 'a6', moduleTitle: 'Substitution in Octahedral Complexes' },
            ]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
