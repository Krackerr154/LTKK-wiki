'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { TransEffectVisualizer } from '../../components/interactive/TransEffectVisualizer';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleA5() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Back to Course</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Module A5" moduleTitle="Substitution in Square Planar Complexes" block="A">
        <ConceptOverview>
          <p>Ligand substitution in 4-coordinate square planar <LaTeX>{'d^8'}</LaTeX> complexes (typically <LaTeX>{'Pt(II), Pd(II), Au(III)'}</LaTeX>) occurs exclusively via the <strong>Associative (A)</strong> or <strong>Interchange-associative (I<sub>a</sub>)</strong> mechanisms.</p>
          <p>The reaction kinetics follow a two-pathway rate law driven by competing routes:</p>
          <ol>
            <li><strong>Solvent-assisted pathway (<LaTeX>{'k_1'}</LaTeX>):</strong> Solvent coordinates first, then leaving group is displaced.</li>
            <li><strong>Direct attack pathway (<LaTeX>{'k_2'}</LaTeX>):</strong> The nucleophile Y attacks directly to form a 5-coordinate trigonal bipyramidal intermediate.</li>
          </ol>
          <p>Four major factors control the rate:</p>
          <ol>
            <li><strong>Entering Ligand (Y):</strong> Higher nucleophilicity increases rate (HSAB soft-soft).</li>
            <li><strong>Leaving Group (X):</strong> Weak M–X bonds facilitate departure.</li>
            <li><strong>Stereochemistry:</strong> Retention of configuration via trigonal bipyramidal intermediate.</li>
            <li><strong>The Trans Effect:</strong> A spectator ligand can facilitate substitution of the ligand <em>trans</em> to itself.
              <ul>
                <li><strong>σ-bonding (trans-influence):</strong> Ground-state bond weakening.</li>
                <li><strong>π-bonding (trans-effect):</strong> Transition-state stabilization by π-acceptors.</li>
              </ul>
            </li>
          </ol>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="Two-Pathway Rate Law"
            latex="k_{\\text{obs}} = k_1 + k_2[Y]"
            variables={[
              { symbol: 'k_1', definition: 'first-order rate constant for solvent attack' },
              { symbol: 'k_2', definition: 'second-order rate constant for direct nucleophilic attack' },
            ]}
          />
          <EquationBlock
            label="Trans Effect Series"
            latex="CO \\approx CN^- \\approx C_2H_4 > PR_3 \\approx H^- > CH_3^- \\approx I^- > Br^- > Cl^- > py > NH_3 > OH^- > H_2O"
          />
        </KeyEquations>

        <WorkedExamples>
          <p style={{ color: 'var(--text-secondary)' }}>Use the interactive Trans Effect Visualizer below to build square planar complexes and observe how different trans-directing ligands weaken specific bonds.</p>
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Misconception</p>
            <p>The trans effect and trans influence are identical.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Correction</p>
            <p>The <strong>trans influence</strong> is a ground-state thermodynamic phenomenon (bond lengths, coupling constants). The <strong>trans effect</strong> is a kinetic phenomenon (rate of substitution via transition state stabilization).</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Click on any ligand position to assign a different ligand. The bond trans to the strongest trans-directing ligand will glow red to indicate it has been weakened.</p>
          <TransEffectVisualizer />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>Which ligand will exert the strongest kinetic trans effect?</span>,
              options: [
                { text: <span><LaTeX>{'Cl^-'}</LaTeX></span>, isCorrect: false },
                { text: <span><LaTeX>{'NH_3'}</LaTeX></span>, isCorrect: false },
                { text: <span><LaTeX>{'CN^-'}</LaTeX></span>, isCorrect: true },
                { text: <span><LaTeX>{'H_2O'}</LaTeX></span>, isCorrect: false },
              ],
              explanation: <span>Cyanide is an excellent π-acceptor, stabilizing the 5-coordinate intermediate and accelerating trans substitution.</span>,
            },
            {
              question: <span>What is the geometry of the intermediate formed during square planar substitution?</span>,
              options: [
                { text: 'Square pyramidal.', isCorrect: false },
                { text: 'Pentagonal bipyramidal.', isCorrect: false },
                { text: 'Trigonal bipyramidal.', isCorrect: true },
                { text: 'Tetrahedral.', isCorrect: false },
              ],
              explanation: <span>Square planar complexes undergo associative substitution to form a 5-coordinate trigonal bipyramidal intermediate.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: 'A3', moduleId: 'a3', moduleTitle: 'Substitution Mechanisms' }]}
            feedsInto={[{ label: 'B6', moduleId: 'b6', moduleTitle: 'Organometallic Catalysis' }]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
