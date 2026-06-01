export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      padding: '2rem',
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid var(--border-light)',
        borderTopColor: 'var(--accent-primary)',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
        marginBottom: '1.5rem',
      }} />
      <p style={{
        color: 'var(--text-muted)',
        fontSize: '0.875rem',
        fontFamily: 'var(--font-inter), sans-serif',
      }}>
        Memuat modul...
      </p>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
