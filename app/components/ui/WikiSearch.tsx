'use client';

import { useMemo, useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, FileText, BookOpen, CornerDownLeft } from 'lucide-react';
import { ALL_ARTICLES } from '../../../lib/modules';
import { glossaryData } from '../../../lib/glossary';
import styles from './WikiSearch.module.css';

interface Hit {
  kind: 'article' | 'term';
  title: string;
  subtitle: string;
  href: string;
}

const ARTICLE_HITS: Hit[] = ALL_ARTICLES.map((a) => ({
  kind: 'article',
  title: `${a.code} · ${a.title}`,
  subtitle: a.summary,
  href: `/modules/${a.id}`,
}));

// Precompute a lowercase haystack for each article for cheap filtering.
const ARTICLE_INDEX = ALL_ARTICLES.map((a) => ({
  hit: ARTICLE_HITS[ALL_ARTICLES.indexOf(a)],
  haystack: `${a.code} ${a.title} ${a.summary} ${a.tags.join(' ')}`.toLowerCase(),
}));

const TERM_INDEX = glossaryData.map((t) => ({
  hit: {
    kind: 'term' as const,
    title: t.term,
    subtitle: t.definition,
    href: '/glossary',
  },
  haystack: `${t.term} ${t.definition}`.toLowerCase(),
}));

const MAX_RESULTS = 8;

export function WikiSearch() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const results = useMemo<Hit[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const articleMatches = ARTICLE_INDEX.filter((e) => e.haystack.includes(q)).map((e) => e.hit);
    const termMatches = TERM_INDEX.filter((e) => e.haystack.includes(q)).map((e) => e.hit);
    return [...articleMatches, ...termMatches].slice(0, MAX_RESULTS);
  }, [query]);

  // Clamp the highlighted index if the result list shrank (derived during
  // render rather than via an effect to avoid cascading re-renders).
  const activeIndex = active < results.length ? active : 0;

  // Close on outside click.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const go = (hit: Hit) => {
    setOpen(false);
    setQuery('');
    router.push(hit.href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open || results.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => (a + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => (a - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      go(results[activeIndex]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const showDropdown = open && query.trim().length > 0;

  return (
    <div className={styles.root} ref={rootRef}>
      <div className={styles.box}>
        <Search size={18} className={styles.searchIcon} />
        <input
          type="text"
          className={styles.input}
          placeholder="Cari topik, istilah, atau konsep…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          role="combobox"
          aria-expanded={showDropdown}
          aria-controls="wiki-search-results"
          aria-autocomplete="list"
        />
      </div>

      {showDropdown && (
        <div className={styles.dropdown} id="wiki-search-results" role="listbox">
          {results.length === 0 ? (
            <div className={styles.empty}>Tidak ada hasil untuk &quot;{query}&quot;</div>
          ) : (
            results.map((hit, i) => (
              <button
                key={`${hit.kind}-${hit.href}-${hit.title}`}
                type="button"
                role="option"
                aria-selected={i === activeIndex}
                className={`${styles.result} ${i === activeIndex ? styles.active : ''}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => go(hit)}
              >
                <span className={`${styles.resultIcon} ${hit.kind === 'article' ? styles.iconArticle : styles.iconTerm}`}>
                  {hit.kind === 'article' ? <FileText size={15} /> : <BookOpen size={15} />}
                </span>
                <span className={styles.resultText}>
                  <span className={styles.resultTitle}>{hit.title}</span>
                  <span className={styles.resultSub}>{hit.subtitle}</span>
                </span>
                <span className={styles.resultBadge}>{hit.kind === 'article' ? 'Artikel' : 'Istilah'}</span>
                {i === activeIndex && <CornerDownLeft size={14} className={styles.enterHint} />}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
