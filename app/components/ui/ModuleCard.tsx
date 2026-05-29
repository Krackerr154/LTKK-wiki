'use client';

import Link from 'next/link';
import { useProgress } from '../../../lib/progress';
import { BookOpen, CheckCircle, Lock } from 'lucide-react';
import styles from './ModuleCard.module.css';

interface ModuleCardProps {
  id: string;
  title: string;
  code: string;
  isLocked?: boolean;
  block: 'A' | 'B';
}

export function ModuleCard({ id, title, code, isLocked, block }: ModuleCardProps) {
  const { completedModules } = useProgress();
  const isCompleted = completedModules.includes(id);

  const blockClass = block === 'A' ? styles.blockA : styles.blockB;

  return (
    <Link href={isLocked ? '#' : `/modules/${id}`} className={`${styles.card} ${blockClass} ${isLocked ? styles.locked : ''}`}>
      <div className={styles.header}>
        <span className={styles.code}>{code}</span>
        {isCompleted ? (
          <CheckCircle className={styles.iconCompleted} size={20} />
        ) : isLocked ? (
          <Lock className={styles.iconLocked} size={20} />
        ) : (
          <BookOpen className={styles.iconAvailable} size={20} />
        )}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.footer}>
        <div className={styles.progressRing}>
          {isCompleted ? 'Selesai' : isLocked ? 'Terkunci' : 'Tersedia'}
        </div>
      </div>
    </Link>
  );
}
