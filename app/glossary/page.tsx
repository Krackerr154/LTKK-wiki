'use client';

import Link from 'next/link';
import { ArrowLeft, Search, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { glossaryData } from '../../lib/glossary';
import styles from './page.module.css';

export default function GlossaryPage() {
  const [search, setSearch] = useState('');

  const filtered = glossaryData.filter(t =>
    t.term.toLowerCase().includes(search.toLowerCase()) ||
    t.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={16} /><span>Kembali ke Beranda</span>
          </Link>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.titleRow}>
          <BookOpen size={28} className={styles.icon} />
          <h1 className={styles.title}>Glosarium</h1>
        </div>
        <p className={styles.subtitle}>Istilah utama dari KI 3231 — Logam Transisi & Kimia Kompleks</p>

        <div className={styles.searchBox}>
          <Search size={16} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Cari istilah..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.termList}>
          {filtered.map(term => (
            <div key={term.id} className={styles.termCard}>
              <h3 className={styles.termName}>{term.term}</h3>
              <p className={styles.termDef}>{term.definition}</p>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className={styles.noResults}>Tidak ada istilah yang cocok dengan &quot;{search}&quot;</p>
          )}
        </div>
      </div>
    </main>
  );
}
