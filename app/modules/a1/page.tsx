'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import {
  ModuleLayout,
  ConceptOverview,
  KeyEquations,
  WorkedExamples,
  Misconceptions,
  InteractiveVisual,
  FormativeQuiz,
  Connections,
} from '../../components/ui/ModuleLayout';
import { LaTeX } from '../../components/ui/LaTeX';
import { EquationBlock } from '../../components/ui/EquationBlock';
import { WorkedExample } from '../../components/ui/WorkedExample';
import { Quiz } from '../../components/ui/Quiz';
import { ConnectionLinks } from '../../components/ui/ConnectionLinks';
import { EnergyProfileDiagram } from '../../components/interactive/EnergyProfileDiagram';
import pageStyles from '../[moduleId]/page.module.css';

export default function ModuleA1() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.header}>
        <div className={pageStyles.headerContent}>
          <Link href="/" className={pageStyles.backLink}>
            <ArrowLeft size={16} />
            <span>Back to Course</span>
          </Link>
        </div>
      </header>

      <ModuleLayout moduleCode="Module A1" moduleTitle="Kinetics Foundations" block="A">
        {/* ===================== CONCEPT OVERVIEW ===================== */}
        <ConceptOverview>
          <p>
            Chemical kinetics is the study of the rates of chemical processes and the molecular pathways
            by which reactants are converted into products. While thermodynamics dictates whether a reaction
            is spontaneous (<LaTeX>{'\\Delta G^\\circ < 0'}</LaTeX>) and defines the equilibrium state,
            it is <strong>kinetics</strong> that governs the real-time velocity of a chemical change.
          </p>
          <p>
            A <strong>reaction mechanism</strong> is the step-by-step sequence of elementary reactions
            by which an overall chemical change occurs. Within any multi-step mechanism, the individual
            elementary steps occur at different rates. The slowest elementary step is designated as
            the <strong>rate-determining step (RDS)</strong>, acting as the kinetic bottleneck for the
            entire reaction.
          </p>
          <p>
            It is crucial to distinguish between two key concepts:
          </p>
          <ol>
            <li>
              <strong>Transition State (Activated Complex):</strong> A state corresponding to a local
              potential energy <em>maximum</em> along the reaction coordinate. It represents a highly
              unstable, fleeting arrangement of atoms (lifetime ≈ <LaTeX>{'10^{-13}\\ \\text{s}'}</LaTeX>)
              where bonds are simultaneously breaking and forming. It <strong>cannot be isolated</strong>.
            </li>
            <li>
              <strong>Reaction Intermediate:</strong> A distinct chemical species that lies in a local
              potential energy <em>minimum</em> (a &quot;valley&quot;) along the reaction coordinate.
              Intermediates have fully formed bonds, possess a finite lifetime, and can sometimes be
              spectroscopically detected, trapped, or even isolated.
            </li>
          </ol>
          <p>
            The mathematical relationship between the rate of reaction and the concentration of the
            reactants is expressed by the <strong>rate law</strong>. The reaction order (zeroth, first,
            or second order) provides deep mechanistic insights into the molecularity of the
            rate-determining step.
          </p>
        </ConceptOverview>

        {/* ===================== KEY EQUATIONS ===================== */}
        <KeyEquations>
          <EquationBlock
            label="General Rate Law"
            latex="\\text{Rate} = k [A]^m [B]^n"
            variables={[
              { symbol: 'k', definition: 'rate constant, temperature-dependent via the Arrhenius equation k = Ae^{-E_a/RT}' },
              { symbol: '[A], [B]', definition: 'molar concentrations of the reactants' },
              { symbol: 'm, n', definition: 'partial orders of the reaction, determined experimentally' },
            ]}
          />
          <EquationBlock
            label="First-order (Unimolecular)"
            latex="\\text{Rate} = k[A]"
          />
          <EquationBlock
            label="Second-order (Bimolecular)"
            latex="\\text{Rate} = k[A][B] \\quad \\text{or} \\quad \\text{Rate} = k[A]^2"
          />
        </KeyEquations>

        {/* ===================== WORKED EXAMPLES ===================== */}
        <WorkedExamples>
          <WorkedExample
            title="Determination of Rate Law and Mechanism"
            problem={
              <div>
                <p>For the ligand substitution reaction:</p>
                <LaTeX display>{'[ML_5X]^{n+} + Y^- \\rightarrow [ML_5Y]^{n+} + X^-'}</LaTeX>
                <p>The following initial rates were measured at 298 K:</p>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '0.75rem', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <th style={{ padding: '0.5rem', textAlign: 'left', color: 'var(--text-muted)' }}>Run</th>
                      <th style={{ padding: '0.5rem', textAlign: 'left', color: 'var(--text-muted)' }}>[ML₅X]ⁿ⁺ (M)</th>
                      <th style={{ padding: '0.5rem', textAlign: 'left', color: 'var(--text-muted)' }}>[Y⁻] (M)</th>
                      <th style={{ padding: '0.5rem', textAlign: 'left', color: 'var(--text-muted)' }}>Rate (M·s⁻¹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '0.5rem' }}>1</td>
                      <td style={{ padding: '0.5rem' }}>1.0 × 10⁻³</td>
                      <td style={{ padding: '0.5rem' }}>0.10</td>
                      <td style={{ padding: '0.5rem' }}>1.5 × 10⁻⁵</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '0.5rem' }}>2</td>
                      <td style={{ padding: '0.5rem' }}>2.0 × 10⁻³</td>
                      <td style={{ padding: '0.5rem' }}>0.10</td>
                      <td style={{ padding: '0.5rem' }}>3.0 × 10⁻⁵</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.5rem' }}>3</td>
                      <td style={{ padding: '0.5rem' }}>1.0 × 10⁻³</td>
                      <td style={{ padding: '0.5rem' }}>0.20</td>
                      <td style={{ padding: '0.5rem' }}>1.5 × 10⁻⁵</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }
            steps={[
              {
                title: 'Compare Run 1 and Run 2',
                content: (
                  <p>
                    The concentration of <LaTeX>{'[Y^-]'}</LaTeX> is held constant. When{' '}
                    <LaTeX>{'[ML_5X]^{n+}'}</LaTeX> is doubled (1.0×10⁻³ → 2.0×10⁻³ M), the rate
                    doubles (1.5×10⁻⁵ → 3.0×10⁻⁵ M·s⁻¹). The reaction is <strong>first-order</strong> with
                    respect to the complex (<LaTeX>{'m = 1'}</LaTeX>).
                  </p>
                ),
              },
              {
                title: 'Compare Run 1 and Run 3',
                content: (
                  <p>
                    The concentration of <LaTeX>{'[ML_5X]^{n+}'}</LaTeX> is held constant. When{' '}
                    <LaTeX>{'[Y^-]'}</LaTeX> is doubled (0.10 → 0.20 M), the rate stays
                    at 1.5×10⁻⁵ M·s⁻¹. The reaction is <strong>zeroth-order</strong> with respect
                    to the entering ligand (<LaTeX>{'n = 0'}</LaTeX>).
                  </p>
                ),
              },
              {
                title: 'Write the rate law',
                content: (
                  <div>
                    <LaTeX display>{'\\text{Rate} = k[ML_5X]^{n+}'}</LaTeX>
                  </div>
                ),
              },
              {
                title: 'Mechanistic Conclusion',
                content: (
                  <p>
                    Because the rate depends exclusively on the complex concentration and is independent
                    of the entering ligand, the RDS must involve only the parent complex. This strongly
                    points to a <strong>dissociative mechanism (D)</strong> where the slow step is the
                    dissociation of the leaving group X⁻.
                  </p>
                ),
              },
            ]}
          />
        </WorkedExamples>

        {/* ===================== MISCONCEPTIONS ===================== */}
        <Misconceptions>
          <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: '0.5rem' }}>
              ❌ Misconception
            </p>
            <p>A large negative Gibbs free energy (<LaTeX>{'\\Delta G^\\circ \\ll 0'}</LaTeX>) guarantees a fast reaction.</p>
          </div>
          <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '8px', padding: '1rem' }}>
            <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.5rem' }}>
              ✅ Correction
            </p>
            <p>
              Thermodynamics only dictates the energy difference between reactants and products
              (<LaTeX>{'K_{eq}'}</LaTeX>). It says nothing about the activation energy barrier
              (<LaTeX>{'E_a'}</LaTeX>). A reaction can be highly spontaneous thermodynamically but
              kinetically <strong>inert</strong> due to a massive activation barrier.
            </p>
          </div>
        </Misconceptions>

        {/* ===================== INTERACTIVE VISUAL ===================== */}
        <InteractiveVisual>
          <p style={{ marginBottom: '1rem' }}>
            Explore how activation energy affects reaction rate. Drag the slider to adjust{' '}
            <LaTeX>{'E_a'}</LaTeX>, and toggle between a single-step and two-step energy profile
            to see the difference between a transition state and a reaction intermediate.
          </p>
          <EnergyProfileDiagram />
        </InteractiveVisual>

        {/* ===================== FORMATIVE QUIZ ===================== */}
        <FormativeQuiz>
          <Quiz
            questions={[
              {
                question: (
                  <span>In an energy profile, what does a local minimum (a valley) between two transition states represent?</span>
                ),
                options: [
                  { text: 'The activation energy barrier.', isCorrect: false },
                  { text: 'The transition state.', isCorrect: false },
                  { text: 'The reaction intermediate.', isCorrect: true },
                  { text: 'The catalyst.', isCorrect: false },
                ],
                explanation: (
                  <span>
                    An intermediate resides in a local energy minimum, meaning it has a finite
                    lifetime and stable, fully formed bonds. This distinguishes it from a transition
                    state, which sits at an energy maximum.
                  </span>
                ),
              },
              {
                question: (
                  <span>
                    If the rate law for a substitution is <LaTeX>{'\\text{Rate} = k[\\text{Complex}][\\text{Ligand}]'}</LaTeX>,
                    what is the molecularity of the rate-determining step?
                  </span>
                ),
                options: [
                  { text: 'Unimolecular.', isCorrect: false },
                  { text: 'Bimolecular.', isCorrect: true },
                  { text: 'Termolecular.', isCorrect: false },
                  { text: 'Zeroth-order.', isCorrect: false },
                ],
                explanation: (
                  <span>
                    Since both the complex and the entering ligand appear in the rate law with a
                    partial order of 1, the rate-determining step is bimolecular — it requires
                    simultaneous participation of both species.
                  </span>
                ),
              },
            ]}
          />
        </FormativeQuiz>

        {/* ===================== CONNECTIONS ===================== */}
        <Connections>
          <ConnectionLinks
            buildsOn={[
              { label: 'Prerequisites', moduleId: 'a1', moduleTitle: 'Standard university kinetics (reaction coordinate diagrams, rate laws)' },
            ]}
            feedsInto={[
              { label: 'A3', moduleId: 'a3', moduleTitle: 'Substitution Mechanisms: D, A, and I' },
              { label: 'A4', moduleId: 'a4', moduleTitle: 'Activation Parameters' },
            ]}
          />
        </Connections>
      </ModuleLayout>
    </main>
  );
}
