'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Module error:', error);
  }, [error]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        background: 'rgba(239,68,68,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
        fontSize: '1.5rem',
      }}>
        ⚠️
      </div>
      <h2 style={{
        fontFamily: 'var(--font-outfit), sans-serif',
        fontSize: '1.5rem',
        color: 'var(--text-primary)',
        marginBottom: '0.75rem',
      }}>
        Terjadi kesalahan
      </h2>
      <p style={{
        color: 'var(--text-muted)',
        fontSize: '0.9375rem',
        marginBottom: '1.5rem',
        maxWidth: '400px',
      }}>
        Terjadi kesalahan saat memuat modul ini. Silakan coba lagi.
      </p>
      <button
        onClick={reset}
        style={{
          padding: '0.75rem 2rem',
          borderRadius: '10px',
          background: 'rgba(59,130,246,0.15)',
          border: '1px solid rgba(59,130,246,0.3)',
          color: '#60a5fa',
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '0.875rem',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Coba Lagi
      </button>
    </div>
  );
}
