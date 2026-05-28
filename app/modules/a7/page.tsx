'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { MarcusCalculator } from '../../components/interactive/MarcusCalculator';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleA7() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Back to Course</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Module A7" moduleTitle="Electron Transfer Reactions" block="A">
        <ConceptOverview>
          <p>Electron transfer (redox) reactions in coordination chemistry occur via two distinct mechanistic pathways:</p>
          <ol>
            <li><strong>Inner-Sphere Mechanism:</strong>
              <ul>
                <li>Requires a bridged binuclear intermediate — one ligand bonds to both metals simultaneously.</li>
                <li>One reactant must be <strong>labile</strong> (to form the bridge), the other <strong>inert</strong>.</li>
                <li>Electron transfer occurs through the covalent bridge, which is often transferred to the newly inert center.</li>
              </ul>
              <p style={{ marginTop: '0.5rem' }}>Classic example:</p>
              <LaTeX display>{'[Co^{III}(NH_3)_5Cl]^{2+} + [Cr^{II}(H_2O)_6]^{2+} \\rightarrow [Cr^{III}(H_2O)_5Cl]^{2+} + Co^{2+}_{(aq)}'}</LaTeX>
            </li>
            <li><strong>Outer-Sphere Mechanism:</strong>
              <ul>
                <li>Both reactants are <strong>inert</strong> — no bridge can form.</li>
                <li>The electron tunnels through space from donor to acceptor.</li>
                <li>Metal-ligand bonds must reorganize (Frank-Condon principle) before transfer.</li>
                <li><strong>Marcus-Hush Theory</strong> provides the quantitative framework.</li>
              </ul>
            </li>
          </ol>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="Marcus Cross-Relation Equation"
            latex="k_{12} = (k_{11} \\cdot k_{22} \\cdot K_{12} \\cdot f_{12})^{1/2}"
            variables={[
              { symbol: 'k_{12}', definition: 'calculated rate constant for the cross-reaction' },
              { symbol: 'k_{11}, k_{22}', definition: 'self-exchange rate constants for the two redox couples' },
              { symbol: 'K_{12}', definition: 'equilibrium constant for the overall cross-reaction' },
              { symbol: 'f_{12}', definition: 'correction factor (≈ 1.0 for structurally similar systems)' },
            ]}
          />
        </KeyEquations>

        <WorkedExamples>
          <p style={{ color: 'var(--text-secondary)' }}>Use the Marcus-Hush Calculator below to input self-exchange rates and equilibrium constants, compute the theoretical cross-rate, and compare with experimental values to confirm the mechanism.</p>
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Misconception</p>
            <p>Electron transfer always involves a ligand transfer.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Correction</p>
            <p>Ligand transfer only occurs in specific inner-sphere mechanisms. In outer-sphere mechanisms, <strong>no bonds are broken or formed</strong> — the electron tunnels through space.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Input self-exchange rates and equilibrium constant to compute the theoretical cross-rate using the Marcus equation. Compare with experimental values to determine if the reaction follows an outer-sphere mechanism.</p>
          <MarcusCalculator />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Why can <LaTeX>{'[Co(NH_3)_6]^{3+}'}</LaTeX> only react via an outer-sphere electron transfer mechanism?</span>,
              options: [
                { text: 'Ammonia is too large.', isCorrect: false },
                { text: 'Ammonia has no free lone pairs to form a bridge.', isCorrect: true },
                { text: 'It is thermodynamically unstable.', isCorrect: false },
                { text: 'It contains a transition metal.', isCorrect: false },
              ],
              explanation: <span>To form a bridge, a ligand must have at least two lone pairs (e.g., halides, azide). Ammonia has only one lone pair, already bonded to cobalt.</span>,
            },
            {
              question: <span>In Marcus theory, what is the significance of <LaTeX>{'k_{11}'}</LaTeX> and <LaTeX>{'k_{22}'}</LaTeX>?</span>,
              options: [
                { text: 'They are the rates of ligand exchange.', isCorrect: false },
                { text: 'They are the self-exchange rates, reflecting the energy required for bond reorganization.', isCorrect: true },
                { text: 'They represent equilibrium constants.', isCorrect: false },
                { text: 'They are pressure factors.', isCorrect: false },
              ],
              explanation: <span>Self-exchange rates reflect the internal activation barrier (bond length adjustments) for electron transfer with no thermodynamic driving force.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[
              { label: 'A2', moduleId: 'a2', moduleTitle: 'Labile and Inert Complexes' },
              { label: 'A6', moduleId: 'a6', moduleTitle: 'Octahedral Substitution' },
            ]}
            feedsInto={[{ label: 'B6', moduleId: 'b6', moduleTitle: 'Organometallic Catalysis (Redox in catalytic cycles)' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
