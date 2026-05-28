'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModuleLayout, ConceptOverview, KeyEquations, WorkedExamples, Misconceptions, InteractiveVisual, FormativeQuiz, Connections } from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { EyringCalculator } from '../../components/interactive/EyringCalculator';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleA4() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}><ArrowLeft size={16} /><span>Back to Course</span></Link>
        </div>
      </header>
      <ModuleLayout moduleCode="Module A4" moduleTitle="Activation Parameters" block="A">
        <ConceptOverview>
          <p>To determine a reaction mechanism experimentally, we study the dependence of the rate constant on temperature and pressure to extract the thermodynamic parameters of the transition state:</p>
          <ol>
            <li><strong><LaTeX>{'\\Delta H^\\ddagger'}</LaTeX> (Enthalpy of Activation):</strong> The energy required to stretch and weaken bonds. Highly positive values correspond to dissociative processes.</li>
            <li><strong><LaTeX>{'\\Delta S^\\ddagger'}</LaTeX> (Entropy of Activation):</strong> Indicates the change in order at the transition state.
              <ul>
                <li><LaTeX>{'\\Delta S^\\ddagger > 0'}</LaTeX>: <strong>Dissociative</strong> (increase in disorder).</li>
                <li><LaTeX>{'\\Delta S^\\ddagger < 0'}</LaTeX>: <strong>Associative</strong> (decrease in disorder).</li>
              </ul>
            </li>
            <li><strong><LaTeX>{'\\Delta V^\\ddagger'}</LaTeX> (Volume of Activation):</strong> The volume change during activation.
              <ul>
                <li><LaTeX>{'\\Delta V^\\ddagger > 0'}</LaTeX>: <strong>Dissociative</strong> (system expands).</li>
                <li><LaTeX>{'\\Delta V^\\ddagger < 0'}</LaTeX>: <strong>Associative</strong> (system contracts).</li>
              </ul>
            </li>
          </ol>
        </ConceptOverview>

        <KeyEquations>
          <EquationBlock
            label="The Eyring Equation"
            latex="\\ln\\left(\\frac{k}{T}\\right) = -\\frac{\\Delta H^\\ddagger}{R} \\cdot \\frac{1}{T} + \\left[ \\ln\\left(\\frac{k_B}{h}\\right) + \\frac{\\Delta S^\\ddagger}{R} \\right]"
            variables={[
              { symbol: 'k_B', definition: 'Boltzmann constant (1.381 × 10⁻²³ J/K)' },
              { symbol: 'h', definition: "Planck's constant (6.626 × 10⁻³⁴ J·s)" },
              { symbol: 'R', definition: 'gas constant (8.314 J/mol·K)' },
            ]}
          />
          <EquationBlock
            label="Activation Volume"
            latex="\\ln(k) = -\\frac{\\Delta V^\\ddagger}{RT} \\cdot P + \\ln(k_0)"
          />
        </KeyEquations>

        <WorkedExamples>
          <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
            Use the interactive Eyring Calculator below to input temperature-rate data and extract activation parameters. The calculator automatically performs the linear regression and assigns the mechanism.
          </p>
        </WorkedExamples>

        <Misconceptions>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Misconception</p>
            <p>Solutions are completely incompressible, so pressure cannot affect reaction rates.</p>
          </div>
          <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>✅ Correction</p>
            <p>Solvent reorganization and bond changes alter the volume of the cavity surrounding the complex, making rate constants highly pressure-dependent.</p>
          </div>
        </Misconceptions>

        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>Enter (T, k) data pairs and watch the Eyring plot generate automatically. The slope gives <LaTeX>{'\\Delta H^\\ddagger'}</LaTeX> and the intercept gives <LaTeX>{'\\Delta S^\\ddagger'}</LaTeX>.</p>
          <EyringCalculator />
        </InteractiveVisual>

        <FormativeQuiz>
          <Quiz questions={[
            {
              question: <span>An activation entropy <LaTeX>{'\\Delta S^\\ddagger = +115\\ \\text{J/mol·K}'}</LaTeX> implies:</span>,
              options: [
                { text: 'Associative mechanism.', isCorrect: false },
                { text: 'Dissociative mechanism.', isCorrect: true },
                { text: 'No change in order.', isCorrect: false },
                { text: 'Absolute zero.', isCorrect: false },
              ],
              explanation: <span>A positive entropy of activation means the transition state is more disordered, consistent with dissociation (bond breaking releases fragments).</span>,
            },
            {
              question: <span>If the rate constant decreases under high pressure, then <LaTeX>{'\\Delta V^\\ddagger'}</LaTeX> is:</span>,
              options: [
                { text: 'Negative, indicating an associative mechanism.', isCorrect: false },
                { text: 'Positive, indicating a dissociative mechanism.', isCorrect: true },
                { text: 'Zero.', isCorrect: false },
                { text: 'Complex.', isCorrect: false },
              ],
              explanation: <span>A positive volume of activation means the system expands at the transition state. High pressure inhibits this expansion, slowing the rate.</span>,
            },
          ]} />
        </FormativeQuiz>

        <Connections>
          <ConnectionLinks
            buildsOn={[{ label: 'A3', moduleId: 'a3', moduleTitle: 'Substitution Mechanisms' }]}
            feedsInto={[
              { label: 'A5', moduleId: 'a5', moduleTitle: 'Square Planar Substitution' },
              { label: 'A6', moduleId: 'a6', moduleTitle: 'Octahedral Substitution' },
            ]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
