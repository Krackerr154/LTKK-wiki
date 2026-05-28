'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import styles from './Quiz.module.css';

interface QuizOption {
  text: React.ReactNode;
  isCorrect: boolean;
}

interface QuizQuestion {
  question: React.ReactNode;
  options: QuizOption[];
  explanation: React.ReactNode;
}

interface QuizProps {
  questions: QuizQuestion[];
}

function QuizItem({ question, options, explanation }: QuizQuestion) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSelect = (index: number) => {
    if (hasAnswered) return;
    setSelectedIndex(index);
    setHasAnswered(true);
  };

  const isCorrect = selectedIndex !== null && options[selectedIndex].isCorrect;

  return (
    <div className={styles.question}>
      <div className={styles.questionText}>{question}</div>
      <div className={styles.options}>
        {options.map((option, i) => {
          let optionClass = styles.option;
          if (hasAnswered) {
            if (option.isCorrect) {
              optionClass += ` ${styles.correct}`;
            } else if (i === selectedIndex && !option.isCorrect) {
              optionClass += ` ${styles.incorrect}`;
            } else {
              optionClass += ` ${styles.disabled}`;
            }
          }

          return (
            <button
              key={i}
              className={optionClass}
              onClick={() => handleSelect(i)}
              disabled={hasAnswered}
            >
              <span className={styles.optionLetter}>
                {String.fromCharCode(65 + i)}
              </span>
              <span className={styles.optionText}>{option.text}</span>
              {hasAnswered && option.isCorrect && <CheckCircle size={18} className={styles.iconCorrect} />}
              {hasAnswered && i === selectedIndex && !option.isCorrect && <XCircle size={18} className={styles.iconIncorrect} />}
            </button>
          );
        })}
      </div>
      {hasAnswered && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`${styles.feedback} ${isCorrect ? styles.feedbackCorrect : styles.feedbackIncorrect}`}
        >
          <div className={styles.feedbackHeader}>
            {isCorrect ? (
              <><CheckCircle size={18} /> Correct!</>
            ) : (
              <><XCircle size={18} /> Incorrect</>
            )}
          </div>
          <div className={styles.feedbackBody}>{explanation}</div>
        </motion.div>
      )}
      {hasAnswered && (
        <button
          className={styles.retryButton}
          onClick={() => {
            setSelectedIndex(null);
            setHasAnswered(false);
          }}
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export function Quiz({ questions }: QuizProps) {
  return (
    <div className={styles.quiz}>
      {questions.map((q, i) => (
        <div key={i}>
          <div className={styles.questionNumber}>Question {i + 1}</div>
          <QuizItem {...q} />
        </div>
      ))}
    </div>
  );
}
