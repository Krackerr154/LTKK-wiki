'use client';

import { useState, useEffect } from 'react';

const PROGRESS_KEY = 'ltkk-wiki-progress';

interface ProgressData {
  completedModules: string[];
}

export function getProgress(): ProgressData {
  if (typeof window === 'undefined') return { completedModules: [] };
  const stored = localStorage.getItem(PROGRESS_KEY);
  if (stored) {
    try {
      return JSON.parse(stored) as ProgressData;
    } catch (e) {
      console.error('Failed to parse progress from localStorage', e);
    }
  }
  return { completedModules: [] };
}

export function markModuleComplete(moduleId: string) {
  if (typeof window === 'undefined') return;
  const current = getProgress();
  if (!current.completedModules.includes(moduleId)) {
    const updated = {
      completedModules: [...current.completedModules, moduleId]
    };
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(updated));
    // Dispatch a custom event so other components can update
    window.dispatchEvent(new Event('ltkk-progress-updated'));
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>({ completedModules: [] });

  useEffect(() => {
    setProgress(getProgress());

    const handleProgressUpdate = () => {
      setProgress(getProgress());
    };

    window.addEventListener('ltkk-progress-updated', handleProgressUpdate);
    return () => {
      window.removeEventListener('ltkk-progress-updated', handleProgressUpdate);
    };
  }, []);

  return progress;
}
