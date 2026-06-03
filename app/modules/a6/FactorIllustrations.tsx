'use client';

import { motion, useReducedMotion, type Transition } from 'framer-motion';

export function FactorIllustration({ activeTab }: { activeTab: string }) {
  switch (activeTab) {
    case 'leaving': return <LeavingGroupAnimation />;
    case 'spectator': return <SpectatorAnimation />;
    case 'steric': return <StericAnimation />;
    case 'charge': return <ChargeAnimation />;
    case 'stereo': return <StereoAnimation />;
    case 'base': return <BaseHydrolysisAnimation />;
    default: return null;
  }
}

const LeavingGroupAnimation = () => {
  const prefersReduced = useReducedMotion();
  const loop: Transition = prefersReduced
    ? { duration: 0 }
    : { duration: 3.2, repeat: Infinity, ease: 'easeInOut' };

  // Center of the octahedral complex
  const cx = 128;
  const cy = 68;

  // 5 spectator ligands in octahedral-like positions
  const spectators = [
    { x: cx, y: cy - 44, label: 'L' },
    { x: cx, y: cy + 44, label: 'L' },
    { x: cx - 48, y: cy, label: 'L' },
    { x: cx - 31, y: cy - 31, label: 'L' },
    { x: cx - 31, y: cy + 31, label: 'L' },
  ];

  const halides = [
    { label: 'F⁻', x: 94, strength: 0.18 },
    { label: 'Cl⁻', x: 138, strength: 0.38 },
    { label: 'Br⁻', x: 182, strength: 0.66 },
    { label: 'I⁻', x: 226, strength: 0.95 },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '242px', background: '#0f172a', border: '1px solid rgba(74,222,128,0.18)', borderRadius: '12px', width: '100%', position: 'relative', overflow: 'hidden', marginBottom: '1.5rem', marginTop: '1rem', boxShadow: 'inset 0 0 32px rgba(74,222,128,0.05)', paddingTop: '0.35rem' }}>
      <svg width="340" height="190" viewBox="0 0 340 190" style={{ width: '100%', maxWidth: '360px', height: 'auto' }} role="img" aria-label="Animasi gugus pergi halida pada kompleks oktahedral">
        <defs>
          <radialGradient id="metalGlow" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#db2777" />
          </radialGradient>
        </defs>

        <motion.circle
          cx={cx}
          cy={cy}
          r={34}
          fill="none"
          stroke="#4ade80"
          strokeWidth="1.5"
          animate={{ opacity: prefersReduced ? 0.25 : [0.1, 0.45, 0.1], r: prefersReduced ? 34 : [28, 42, 28] }}
          transition={loop}
        />

        {/* Bonds to spectator ligands */}
        {spectators.map((s, i) => (
          <motion.line
            key={`sb-${i}`}
            x1={cx}
            y1={cy}
            x2={s.x}
            y2={s.y}
            stroke="rgba(148,163,184,0.55)"
            strokeWidth="2"
            animate={{ opacity: prefersReduced ? 0.7 : [0.45, 0.8, 0.45] }}
            transition={{ ...loop, delay: i * 0.08 }}
          />
        ))}

        {/* Bond to leaving group (horizontal right, weakening) */}
        <motion.line
          x1={cx + 20}
          y1={cy}
          x2={cx + 72}
          y2={cy}
          stroke="#4ade80"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="7 5"
          animate={{
            opacity: prefersReduced ? 0.45 : [0.95, 0.18, 0.95],
            pathLength: prefersReduced ? 0.65 : [1, 0.34, 1],
          }}
          transition={loop}
        />

        <motion.line
          x1={cx + 82}
          y1={cy}
          x2={cx + 126}
          y2={cy}
          stroke="#4ade80"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ opacity: prefersReduced ? 0.18 : [0, 0.35, 0], pathLength: prefersReduced ? 0.8 : [0, 0.8, 0] }}
          transition={loop}
        />

        {/* Spectator ligand circles */}
        {spectators.map((s, i) => (
          <g key={`sc-${i}`}>
            <circle cx={s.x} cy={s.y} r="11" fill="#64748b" />
            <text x={s.x} y={s.y + 4} fill="#cbd5e1" fontSize="9" textAnchor="middle" fontWeight="700">{s.label}</text>
          </g>
        ))}

        {/* Metal center */}
        <motion.circle
          cx={cx}
          cy={cy}
          r="21"
          fill="url(#metalGlow)"
          animate={{ scale: prefersReduced ? 1 : [1, 1.06, 1] }}
          transition={loop}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
        <text x={cx} y={cy + 6} fill="white" fontSize="15" textAnchor="middle" fontWeight="bold">M</text>

        {/* Leaving Group X — departs to the right */}
        <motion.g
          animate={{
            x: prefersReduced ? 20 : [0, 46, 0],
            opacity: prefersReduced ? 0.82 : [1, 0.62, 1],
            scale: prefersReduced ? 1 : [1, 0.96, 1],
          }}
          transition={loop}
        >
          <circle cx={cx + 88} cy={cy} r="17" fill="#4ade80" />
          <text x={cx + 88} y={cy + 5} fill="#064e3b" fontSize="13" textAnchor="middle" fontWeight="bold">X⁻</text>
        </motion.g>

        <g transform="translate(0 116)">
          <text x="170" y="0" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="Inter, sans-serif">
            ikatan lebih lemah ke bawah golongan
          </text>
          <line x1="82" y1="24" x2="238" y2="24" stroke="rgba(74,222,128,0.22)" strokeWidth="2" strokeLinecap="round" />
          <motion.line
            x1="82"
            y1="24"
            x2="238"
            y2="24"
            stroke="#4ade80"
            strokeWidth="3"
            strokeLinecap="round"
            animate={{ pathLength: prefersReduced ? 0.95 : [0.1, 0.95, 0.1] }}
            transition={loop}
          />
          {halides.map((h, i) => (
            <g key={h.label}>
              <motion.circle
                cx={h.x}
                cy="24"
                r={6 + h.strength * 4}
                fill={i === halides.length - 1 ? '#4ade80' : 'rgba(148,163,184,0.95)'}
                animate={{ opacity: prefersReduced ? 0.85 : [0.55, i === halides.length - 1 ? 1 : 0.82, 0.55] }}
                transition={{ ...loop, delay: i * 0.18 }}
              />
              <text x={h.x} y="47" fill={i === halides.length - 1 ? '#86efac' : '#94a3b8'} fontSize="10" textAnchor="middle" fontWeight="700">
                {h.label}
              </text>
            </g>
          ))}
          <text x="170" y="68" fill="#93c5fd" fontSize="11" textAnchor="middle" fontFamily="Inter, sans-serif">
            F⁻ ≪ Cl⁻ &lt; Br⁻ &lt; I⁻ → laju meningkat
          </text>
        </g>
      </svg>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', color: '#93c5fd', fontSize: '0.8125rem', fontFamily: 'Inter, sans-serif', padding: '0 1rem 0.65rem', textAlign: 'center' }}>
        <span style={{ color: '#86efac', fontWeight: 700 }}>Ikatan M-X melemah</span>
        <span style={{ color: '#64748b' }}>→</span>
        <span>X lepas lebih cepat</span>
      </div>
    </div>
  );
};

const SpectatorAnimation = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px', background: '#0f172a', borderRadius: '8px', width: '100%', position: 'relative', overflow: 'hidden', marginBottom: '1.5rem', marginTop: '1rem' }}>
    <svg width="240" height="100" viewBox="0 0 240 100">
      {/* Spectator L */}
      <circle cx="40" cy="50" r="16" fill="#60a5fa" />
      <text x="40" y="55" fill="#1e3a8a" fontSize="12" textAnchor="middle" fontWeight="bold">L</text>
      
      {/* Electron density push */}
      <motion.path
        d="M 58 50 L 85 50"
        stroke="#60a5fa" strokeWidth="3" markerEnd="url(#arrow)"
        animate={{ x: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Metal */}
      <motion.circle 
        cx="110" cy="50" r="20" fill="#ec4899"
        animate={{ filter: ["brightness(1)", "brightness(1.4)", "brightness(1)"] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <text x="110" y="55" fill="white" fontSize="14" textAnchor="middle" fontWeight="bold">M</text>
      
      {/* Bond to Leaving Group */}
      <motion.line
        x1="130" y1="50" x2="170" y2="50"
        stroke="#4ade80" strokeWidth="4" strokeDasharray="4 4"
      />
      
      {/* Leaving Group */}
      <motion.g
        animate={{ x: [0, 25, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <circle cx="170" cy="50" r="16" fill="#4ade80" />
        <text x="170" y="55" fill="#064e3b" fontSize="12" textAnchor="middle" fontWeight="bold">X</text>
      </motion.g>

      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa" />
        </marker>
      </defs>
    </svg>
    <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.5rem', fontFamily: 'Inter, sans-serif' }}>Donasi elektron mempercepat pengusiran gugus pergi</p>
  </div>
);

const StericAnimation = () => {
  // Pre-calculate ligand positions around the metal center (5 spectator ligands)
  const cx = 120;
  const cy = 70;
  const bondLen = 35;
  const ligandR = 14;
  const angles = [90, 162, 234, 306, 18]; // degrees, evenly spaced in upper hemisphere

  const ligands = angles.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return {
      lx: cx + Math.cos(rad) * (bondLen + ligandR),
      ly: cy - Math.sin(rad) * (bondLen + ligandR),
      bx: cx + Math.cos(rad) * bondLen,
      by: cy - Math.sin(rad) * bondLen,
      // push direction for "relief" animation
      dx: Math.cos(rad) * 4,
      dy: -Math.sin(rad) * 4,
    };
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '220px', background: '#0f172a', borderRadius: '8px', width: '100%', position: 'relative', overflow: 'hidden', marginBottom: '1.5rem', marginTop: '1rem' }}>
      <svg width="240" height="170" viewBox="0 0 240 170">
        {/* Bonds to spectator ligands */}
        {ligands.map((l, i) => (
          <motion.line
            key={`bond-${i}`}
            x1={cx} y1={cy} x2={l.bx} y2={l.by}
            stroke="#94a3b8" strokeWidth="3"
            animate={{ x2: [l.bx, l.bx + l.dx, l.bx], y2: [l.by, l.by + l.dy, l.by] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Bond to leaving group (downward) */}
        <motion.line
          x1={cx} y1={cy} x2={cx} y2={cy + 35}
          stroke="#4ade80" strokeWidth="3" strokeDasharray="4 4"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Spectator ligands (bulky) */}
        {ligands.map((l, i) => (
          <motion.circle
            key={`lig-${i}`}
            cx={l.lx} cy={l.ly} r={ligandR}
            fill="#94a3b8"
            animate={{ cx: [l.lx, l.lx + l.dx, l.lx], cy: [l.ly, l.ly + l.dy, l.ly] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Metal center (on top) */}
        <circle cx={cx} cy={cy} r="16" fill="#ec4899" />
        <text x={cx} y={cy + 5} fill="white" fontSize="13" textAnchor="middle" fontWeight="bold">M</text>

        {/* Leaving group */}
        <motion.g
          animate={{ y: [0, 30, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx={cx} cy={cy + 50} r={ligandR} fill="#4ade80" />
          <text x={cx} y={cy + 54} fill="#064e3b" fontSize="11" textAnchor="middle" fontWeight="bold">X</text>
        </motion.g>

        {/* Labels */}
        <text x={cx} y="165" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="Inter, sans-serif">Kesesakan sterik → X lepas → lega</text>
      </svg>
      <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem', fontFamily: 'Inter, sans-serif' }}>Pelepasan tegangan sterik saat gugus pergi lepas</p>
    </div>
  );
};

const ChargeAnimation = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px', background: '#0f172a', borderRadius: '8px', width: '100%', position: 'relative', overflow: 'hidden', marginBottom: '1.5rem', marginTop: '1rem' }}>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%', padding: '0 2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <svg width="120" height="60" viewBox="0 0 120 60">
          <circle cx="30" cy="30" r="18" fill="#ec4899" />
          <text x="30" y="34" fill="white" fontSize="12" textAnchor="middle" fontWeight="bold">M⁺</text>
          <line x1="48" y1="30" x2="82" y2="30" stroke="#4ade80" strokeWidth="2" />
          <motion.g animate={{ x: [0, 18, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <circle cx="95" cy="30" r="12" fill="#4ade80" />
          </motion.g>
        </svg>
        <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.5rem', fontFamily: 'Inter, sans-serif' }}>Tarikan Lemah → Cepat</p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <svg width="120" height="60" viewBox="0 0 120 60">
          <circle cx="30" cy="30" r="18" fill="#ec4899" />
          <text x="30" y="34" fill="white" fontSize="12" textAnchor="middle" fontWeight="bold">M³⁺</text>
          <line x1="48" y1="30" x2="82" y2="30" stroke="#4ade80" strokeWidth="5" />
          <motion.g animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <circle cx="95" cy="30" r="12" fill="#4ade80" />
          </motion.g>
        </svg>
        <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.5rem', fontFamily: 'Inter, sans-serif' }}>Tarikan Kuat → Lambat</p>
      </div>
    </div>
  </div>
);

const StereoAnimation = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px', background: '#0f172a', borderRadius: '8px', width: '100%', position: 'relative', overflow: 'hidden', marginBottom: '1.5rem', marginTop: '1rem' }}>
    <svg width="250" height="150" viewBox="0 0 250 150">
      {/* Reactant */}
      <g transform="translate(50, 75)">
        <circle cx="0" cy="0" r="12" fill="#ec4899" />
        <line x1="0" y1="0" x2="-25" y2="-10" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="-25" cy="-10" r="6" fill="#94a3b8" />
        <line x1="0" y1="0" x2="25" y2="-10" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="25" cy="-10" r="6" fill="#94a3b8" />
        <line x1="0" y1="0" x2="-20" y2="15" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="-20" cy="15" r="6" fill="#94a3b8" />
        <line x1="0" y1="0" x2="20" y2="15" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="20" cy="15" r="6" fill="#94a3b8" />
        
        <line x1="0" y1="0" x2="0" y2="-30" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="0" cy="-30" r="6" fill="#94a3b8" />
        
        <line x1="0" y1="0" x2="0" y2="30" stroke="#4ade80" strokeWidth="2" strokeDasharray="2 2"/>
        <circle cx="0" cy="30" r="6" fill="#4ade80" />
      </g>
      
      {/* Arrow */}
      <motion.path 
        d="M 95 75 L 140 75" 
        stroke="white" strokeWidth="2" markerEnd="url(#arrow-stereo)"
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <defs>
        <marker id="arrow-stereo" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="white" />
        </marker>
      </defs>
      
      {/* Product (Square Pyramidal) */}
      <g transform="translate(190, 75)">
        <circle cx="0" cy="0" r="12" fill="#ec4899" />
        <line x1="0" y1="0" x2="-25" y2="-10" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="-25" cy="-10" r="6" fill="#94a3b8" />
        <line x1="0" y1="0" x2="25" y2="-10" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="25" cy="-10" r="6" fill="#94a3b8" />
        <line x1="0" y1="0" x2="-20" y2="15" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="-20" cy="15" r="6" fill="#94a3b8" />
        <line x1="0" y1="0" x2="20" y2="15" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="20" cy="15" r="6" fill="#94a3b8" />
        
        <line x1="0" y1="0" x2="0" y2="-30" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="0" cy="-30" r="6" fill="#94a3b8" />
      </g>
      
      {/* Leaving Group Separated */}
      <motion.g
        animate={{ y: [0, 20, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        transform="translate(190, 110)"
      >
        <circle cx="0" cy="0" r="6" fill="#4ade80" />
      </motion.g>
    </svg>
    <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.5rem', fontFamily: 'Inter, sans-serif' }}>Pembentukan zat antara berkoordinasi 5</p>
  </div>
);

const BaseHydrolysisAnimation = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px', background: '#0f172a', borderRadius: '8px', width: '100%', position: 'relative', overflow: 'hidden', marginBottom: '1.5rem', marginTop: '1rem' }}>
    <svg width="280" height="100" viewBox="0 0 280 100">
      {/* OH- */}
      <motion.g
        animate={{ x: [0, 45, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="20" cy="50" r="14" fill="#f87171" />
        <text x="20" y="54" fill="white" fontSize="12" textAnchor="middle" fontWeight="bold">OH⁻</text>
      </motion.g>

      {/* Amine H */}
      <motion.g
        animate={{ x: [0, -15, 0], opacity: [1, 0, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="85" cy="50" r="6" fill="white" />
        <text x="85" y="42" fill="white" fontSize="10" textAnchor="middle">H</text>
      </motion.g>

      {/* Nitrogen */}
      <circle cx="105" cy="50" r="14" fill="#60a5fa" />
      <text x="105" y="54" fill="white" fontSize="11" textAnchor="middle" fontWeight="bold">NH₂</text>

      {/* Bond to Metal */}
      <line x1="119" y1="50" x2="145" y2="50" stroke="#60a5fa" strokeWidth="3" />

      {/* Metal */}
      <circle cx="165" cy="50" r="18" fill="#ec4899" />
      <text x="165" y="55" fill="white" fontSize="14" textAnchor="middle" fontWeight="bold">M</text>

      {/* Bond to Leaving Group */}
      <motion.line 
        x1="183" y1="50" x2="225" y2="50" stroke="#4ade80" strokeWidth="3" strokeDasharray="3 3"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Leaving Group */}
      <motion.g
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="235" cy="50" r="14" fill="#4ade80" />
        <text x="235" y="55" fill="#064e3b" fontSize="12" textAnchor="middle" fontWeight="bold">X</text>
      </motion.g>

    </svg>
    <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.5rem', fontFamily: 'Inter, sans-serif' }}>OH⁻ mendeprotonasi ligan amina memicu disosiasi X</p>
  </div>
);
