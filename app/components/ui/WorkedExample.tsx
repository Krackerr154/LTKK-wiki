'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import styles from './WorkedExample.module.css';

interface Step {
  title: string;
  content: React.ReactNode;
}

interface WorkedExampleProps {
  title: string;
  problem: React.ReactNode;
  steps: Step[];
}

/**
 * A collapsible worked example with step-by-step reveal.
 */
export function WorkedExample({ title, problem, steps }: WorkedExampleProps) {
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const toggleStep = (index: number) => {
    const next = new Set(expandedSteps);
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }
    setExpandedSteps(next);
  };

  const toggleAll = () => {
    if (showAll) {
      setExpandedSteps(new Set());
    } else {
      setExpandedSteps(new Set(steps.map((_, i) => i)));
    }
    setShowAll(!showAll);
  };

  return (
    <div className={styles.example}>
      <div className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
        <button className={styles.toggleAll} onClick={toggleAll}>
          {showAll ? 'Hide All' : 'Show All'}
        </button>
      </div>

      <div className={styles.problem}>{problem}</div>

      <div className={styles.steps}>
        {steps.map((step, index) => {
          const isExpanded = expandedSteps.has(index);
          return (
            <div key={index} className={styles.step}>
              <button
                className={`${styles.stepButton} ${isExpanded ? styles.expanded : ''}`}
                onClick={() => toggleStep(index)}
              >
                <span className={styles.stepNumber}>Step {index + 1}</span>
                <span className={styles.stepTitle}>{step.title}</span>
                {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className={styles.stepContent}
                  >
                    <div className={styles.stepBody}>{step.content}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
