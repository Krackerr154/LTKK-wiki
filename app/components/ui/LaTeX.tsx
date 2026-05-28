'use client';

import 'katex/dist/katex.min.css';
import katex from 'katex';
import { useMemo } from 'react';

interface LaTeXProps {
  children: string;
  display?: boolean;
}

/**
 * Renders LaTeX math using KaTeX.
 * - Inline mode: <LaTeX>E_a</LaTeX>
 * - Display mode: <LaTeX display>\\text{Rate} = k[A]^m</LaTeX>
 */
export function LaTeX({ children, display = false }: LaTeXProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(children, {
        displayMode: display,
        throwOnError: false,
        trust: true,
        strict: 'ignore',
      });
    } catch (e) {
      console.error('KaTeX rendering error:', e);
      return `<span style="color: red;">${children}</span>`;
    }
  }, [children, display]);

  if (display) {
    return (
      <div
        className="katex-display-wrapper"
        dangerouslySetInnerHTML={{ __html: html }}
        style={{ margin: '1.5rem 0', overflowX: 'auto' }}
      />
    );
  }

  return (
    <span
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
