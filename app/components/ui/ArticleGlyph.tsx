import type { ArticleGlyph as GlyphKind } from '../../../lib/modules';

/**
 * Small decorative SVG glyph per article topic, used as the card thumbnail.
 * Kept lightweight (pure inline SVG, no state) so cards stay cheap to render.
 */
export function ArticleGlyph({ kind, color }: { kind: GlyphKind; color: string }) {
  const common = {
    width: 44,
    height: 44,
    viewBox: '0 0 48 48',
    fill: 'none' as const,
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  const dim = `${color}55`;

  switch (kind) {
    case 'kinetics': // energy profile curve
      return (
        <svg {...common}>
          <path d="M6 36 C16 36, 18 12, 24 12 C30 12, 32 36, 42 36" />
          <line x1="6" y1="40" x2="42" y2="40" stroke={dim} />
        </svg>
      );
    case 'lability': // fast vs slow (two arrows)
      return (
        <svg {...common}>
          <path d="M8 18 H34 l-5 -5 M34 18 l-5 5" />
          <path d="M8 32 H26" strokeDasharray="3 4" />
          <circle cx="40" cy="32" r="3" fill={color} stroke="none" />
        </svg>
      );
    case 'mechanism': // branching paths D/A/I
      return (
        <svg {...common}>
          <circle cx="10" cy="24" r="4" />
          <path d="M14 24 H22 M26 24 l6 -10 M26 24 l6 10 M26 24 H34" />
          <circle cx="26" cy="24" r="3" fill={color} stroke="none" />
        </svg>
      );
    case 'activation': // gauge / thermometer
      return (
        <svg {...common}>
          <path d="M10 34 A16 16 0 0 1 38 34" />
          <line x1="24" y1="34" x2="32" y2="20" />
          <circle cx="24" cy="34" r="2.5" fill={color} stroke="none" />
        </svg>
      );
    case 'squareplanar': // square planar complex
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="4" fill={color} stroke="none" />
          <line x1="24" y1="24" x2="24" y2="8" /><circle cx="24" cy="7" r="3" />
          <line x1="24" y1="24" x2="24" y2="40" /><circle cx="24" cy="41" r="3" />
          <line x1="24" y1="24" x2="8" y2="24" /><circle cx="7" cy="24" r="3" />
          <line x1="24" y1="24" x2="40" y2="24" /><circle cx="41" cy="24" r="3" />
        </svg>
      );
    case 'octahedral': // octahedron
      return (
        <svg {...common}>
          <path d="M24 6 L40 24 L24 42 L8 24 Z" />
          <path d="M8 24 H40 M24 6 V42" stroke={dim} />
        </svg>
      );
    case 'electron': // electron transfer between centers
      return (
        <svg {...common}>
          <circle cx="12" cy="24" r="5" /><circle cx="36" cy="24" r="5" />
          <path d="M18 24 H30 l-4 -4 M30 24 l-4 4" />
          <circle cx="24" cy="24" r="2" fill={color} stroke="none" />
        </svg>
      );
    case 'history': // timeline
      return (
        <svg {...common}>
          <line x1="8" y1="24" x2="40" y2="24" stroke={dim} />
          <circle cx="12" cy="24" r="3" fill={color} stroke="none" />
          <circle cx="24" cy="24" r="3" />
          <circle cx="36" cy="24" r="3" fill={color} stroke="none" />
        </svg>
      );
    case 'ligand': // metal with hapticity ring
      return (
        <svg {...common}>
          <circle cx="16" cy="30" r="4" fill={color} stroke="none" />
          <polygon points="34,10 40,16 38,24 30,24 28,16" />
          <path d="M19 28 L30 20 M19 30 L34 22" stroke={dim} />
        </svg>
      );
    case 'electron18': // 18 in a shell
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="16" />
          <text x="24" y="29" textAnchor="middle" fontSize="13" fontWeight="700" fill={color} stroke="none" fontFamily="sans-serif">18</text>
        </svg>
      );
    case 'carbonyl': // M-C≡O
      return (
        <svg {...common}>
          <circle cx="10" cy="24" r="4" fill={color} stroke="none" />
          <path d="M14 24 H24 M26 21 H38 M26 24 H38 M26 27 H38" />
          <circle cx="24" cy="24" r="2.5" />
          <circle cx="40" cy="24" r="3" />
        </svg>
      );
    case 'sandwich': // sandwich compound
      return (
        <svg {...common}>
          <ellipse cx="24" cy="12" rx="14" ry="4" />
          <ellipse cx="24" cy="36" rx="14" ry="4" />
          <circle cx="24" cy="24" r="3.5" fill={color} stroke="none" />
        </svg>
      );
    case 'catalysis': // catalytic cycle
      return (
        <svg {...common}>
          <path d="M38 16 A16 16 0 1 0 40 28" />
          <path d="M38 10 L40 18 L32 18" />
          <circle cx="24" cy="24" r="2.5" fill={color} stroke="none" />
        </svg>
      );
    case 'generic': // book / article
      return (
        <svg {...common}>
          <path d="M10 12 H22 a4 4 0 0 1 4 4 V38 a3 3 0 0 0 -3 -3 H10 Z" />
          <path d="M38 12 H26 a4 4 0 0 0 -4 4 V38 a3 3 0 0 1 3 -3 H38 Z" />
        </svg>
      );

    /* ===== Part 1 — coordination chemistry, bonding & spectroscopy ===== */
    case 'coordination': // central metal + 6 ligands (octahedral coordination)
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="5" fill={color} stroke="none" />
          <line x1="24" y1="19" x2="24" y2="9" /><circle cx="24" cy="7" r="3" />
          <line x1="24" y1="29" x2="24" y2="39" /><circle cx="24" cy="41" r="3" />
          <line x1="19" y1="24" x2="9" y2="24" /><circle cx="7" cy="24" r="3" />
          <line x1="29" y1="24" x2="39" y2="24" /><circle cx="41" cy="24" r="3" />
          <line x1="20" y1="20" x2="13" y2="13" /><circle cx="11" cy="11" r="2.5" />
          <line x1="28" y1="28" x2="35" y2="35" /><circle cx="37" cy="37" r="2.5" />
        </svg>
      );
    case 'isomer': // mirror-image molecules (chirality)
      return (
        <svg {...common}>
          <line x1="24" y1="8" x2="24" y2="40" strokeDasharray="3 3" stroke={dim} />
          <path d="M18 16 L10 24 L18 32" />
          <circle cx="8" cy="24" r="2.5" fill={color} stroke="none" />
          <path d="M30 16 L38 24 L30 32" />
          <circle cx="40" cy="24" r="2.5" fill={color} stroke="none" />
        </svg>
      );
    case 'orbital': // hybrid orbital lobes (VBT)
      return (
        <svg {...common}>
          <ellipse cx="24" cy="16" rx="6" ry="10" />
          <ellipse cx="16" cy="30" rx="6" ry="10" transform="rotate(-45 16 30)" />
          <ellipse cx="32" cy="30" rx="6" ry="10" transform="rotate(45 32 30)" />
          <circle cx="24" cy="24" r="2" fill={color} stroke="none" />
        </svg>
      );
    case 'splitting': // d-orbital energy splitting (CFT) — eg over t2g
      return (
        <svg {...common}>
          <line x1="28" y1="14" x2="40" y2="14" /><line x1="14" y1="14" x2="20" y2="14" stroke={dim} />
          <line x1="8" y1="24" x2="20" y2="24" strokeDasharray="2 3" stroke={dim} />
          <line x1="26" y1="33" x2="34" y2="33" /><line x1="36" y1="33" x2="44" y2="33" stroke={dim} />
          <line x1="6" y1="33" x2="14" y2="33" />
          <path d="M20 24 L26 14 M20 24 L26 33" stroke={dim} />
        </svg>
      );
    case 'spectro': // ascending series bars (spectrochemical series)
      return (
        <svg {...common}>
          <line x1="8" y1="40" x2="44" y2="40" stroke={dim} />
          <line x1="12" y1="40" x2="12" y2="32" />
          <line x1="20" y1="40" x2="20" y2="26" />
          <line x1="28" y1="40" x2="28" y2="18" />
          <line x1="36" y1="40" x2="36" y2="9" />
          <path d="M40 12 l4 -3 M40 12 l-1 -4" stroke={dim} />
        </svg>
      );
    case 'distortion': // tetragonal elongation (Jahn-Teller) — stretched octahedron
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="4" fill={color} stroke="none" />
          <line x1="24" y1="20" x2="24" y2="7" /><circle cx="24" cy="5" r="2.5" />
          <line x1="24" y1="28" x2="24" y2="41" /><circle cx="24" cy="43" r="2.5" />
          <line x1="20" y1="24" x2="12" y2="24" /><circle cx="10" cy="24" r="2.5" />
          <line x1="28" y1="24" x2="36" y2="24" /><circle cx="38" cy="24" r="2.5" />
          <path d="M24 5 v-1 M24 43 v1" stroke={dim} />
        </svg>
      );
    case 'mo': // molecular orbital interaction diagram
      return (
        <svg {...common}>
          <line x1="8" y1="16" x2="16" y2="16" />
          <line x1="32" y1="16" x2="40" y2="16" />
          <line x1="20" y1="10" x2="28" y2="10" />
          <line x1="20" y1="32" x2="28" y2="32" />
          <path d="M16 16 L20 10 M16 16 L20 32 M32 16 L28 10 M32 16 L28 32" stroke={dim} />
        </svg>
      );
    case 'spectrum': // prism splitting light (electronic spectroscopy)
      return (
        <svg {...common}>
          <path d="M22 10 L34 34 H10 Z" />
          <line x1="4" y1="22" x2="16" y2="22" />
          <path d="M30 24 L44 18 M30 27 L44 26 M30 30 L44 34" stroke={dim} />
        </svg>
      );
    case 'spin': // two spin states (up vs paired arrows)
      return (
        <svg {...common}>
          <path d="M14 12 V36 M14 12 l-3 4 M14 12 l3 4" />
          <path d="M30 12 V36 M30 12 l-3 4 M30 12 l3 4" />
          <path d="M36 36 V12 M36 36 l-3 -4 M36 36 l3 -4" stroke={dim} />
        </svg>
      );

    /* ===== Part 2 — descriptive inorganic chemistry ===== */
    case 'periodic': // periodic table block
      return (
        <svg {...common}>
          <rect x="8" y="14" width="32" height="20" rx="2" />
          <line x1="8" y1="24" x2="40" y2="24" stroke={dim} />
          <line x1="18.7" y1="14" x2="18.7" y2="34" stroke={dim} />
          <line x1="29.3" y1="14" x2="29.3" y2="34" stroke={dim} />
          <rect x="18.7" y="24" width="10.6" height="10" fill={color} stroke="none" opacity="0.6" />
        </svg>
      );
    case 'furnace': // blast furnace with flame
      return (
        <svg {...common}>
          <path d="M14 40 L12 16 H36 L34 40 Z" />
          <line x1="10" y1="40" x2="38" y2="40" />
          <path d="M24 22 c4 3 4 7 0 10 c-4 -3 -4 -7 0 -10 Z" fill={color} stroke="none" opacity="0.7" />
        </svg>
      );
    case 'testtube': // test tube rack (descriptive reactions)
      return (
        <svg {...common}>
          <path d="M16 8 V32 a5 5 0 0 0 10 0 V8" />
          <line x1="13" y1="8" x2="29" y2="8" />
          <path d="M16 24 a5 5 0 0 0 10 0 Z" fill={color} stroke="none" opacity="0.6" />
          <path d="M34 8 V32 a4 4 0 0 0 8 0 V8" />
          <line x1="32" y1="8" x2="44" y2="8" />
        </svg>
      );
    case 'gem': // precious metal / gemstone (PGMs)
      return (
        <svg {...common}>
          <path d="M16 12 H32 L40 22 L24 42 L8 22 Z" />
          <path d="M8 22 H40 M16 12 L24 22 L32 12 M24 22 V42" stroke={dim} />
        </svg>
      );
    case 'flask': // erlenmeyer flask (qualitative analysis)
      return (
        <svg {...common}>
          <path d="M20 8 V20 L10 38 a3 3 0 0 0 3 4 H35 a3 3 0 0 0 3 -4 L28 20 V8" />
          <line x1="17" y1="8" x2="31" y2="8" />
          <path d="M15 30 H33 L37 38 a3 3 0 0 1 -3 4 H14 a3 3 0 0 1 -3 -4 Z" fill={color} stroke="none" opacity="0.5" />
        </svg>
      );
  }
}
