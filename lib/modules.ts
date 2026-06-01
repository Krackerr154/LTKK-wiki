// Central article index for the wiki. Single source of truth for
// navigation: part selector -> part index -> in-article sidebar.

export type ArticleGlyph =
  | 'kinetics'
  | 'lability'
  | 'mechanism'
  | 'activation'
  | 'squareplanar'
  | 'octahedral'
  | 'electron'
  | 'history'
  | 'ligand'
  | 'electron18'
  | 'carbonyl'
  | 'sandwich'
  | 'catalysis'
  | 'generic'
  // Part 1 — coordination chemistry, bonding & spectroscopy
  | 'coordination'
  | 'isomer'
  | 'orbital'
  | 'splitting'
  | 'spectro'
  | 'distortion'
  | 'mo'
  | 'spectrum'
  | 'spin'
  // Part 2 — descriptive inorganic chemistry
  | 'periodic'
  | 'furnace'
  | 'testtube'
  | 'gem'
  | 'flask';

export interface WikiArticle {
  id: string;
  code: string;
  title: string;
  summary: string;
  tags: string[];
  glyph: ArticleGlyph;
  block: 'A' | 'B';
  available: boolean;
}

export interface WikiSection {
  block: 'A' | 'B';
  title: string;
  description: string;
  articles: WikiArticle[];
}

export interface WikiPart {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'available' | 'coming-soon';
  accent: 'a' | 'b' | 'c';
  sections: WikiSection[];
}

/* ===================== PART 3 (done) ===================== */

export const BLOCK_A: WikiArticle[] = [
  { id: 'a1', code: 'A1', title: 'Dasar-dasar Kinetika', summary: 'Laju reaksi, hukum laju, dan tahap penentu laju.', tags: ['hukum laju', 'RDS', 'orde reaksi'], glyph: 'kinetics', block: 'A', available: true },
  { id: 'a2', code: 'A2', title: 'Kompleks Labil dan Inert', summary: 'Mengapa sebagian kompleks bereaksi cepat dan lainnya lambat.', tags: ['CFSE', 'labil', 'inert'], glyph: 'lability', block: 'A', available: true },
  { id: 'a3', code: 'A3', title: 'Mekanisme Substitusi: D, A, dan I', summary: 'Tiga jalur substitusi ligan dan profil energinya.', tags: ['disosiatif', 'asosiatif', 'pertukaran'], glyph: 'mechanism', block: 'A', available: true },
  { id: 'a4', code: 'A4', title: 'Parameter Aktivasi', summary: 'Persamaan Eyring serta interpretasi ΔH‡, ΔS‡, dan ΔV‡.', tags: ['Eyring', 'ΔS‡', 'ΔV‡'], glyph: 'activation', block: 'A', available: true },
  { id: 'a5', code: 'A5', title: 'Substitusi pada Kompleks Square Planar', summary: 'Efek trans dan sintesis isomer cis/trans pada Pt(II).', tags: ['efek trans', 'Pt(II)', 'cis/trans'], glyph: 'squareplanar', block: 'A', available: true },
  { id: 'a6', code: 'A6', title: 'Substitusi pada Kompleks Oktahedral', summary: 'Enam faktor pengendali laju dan mekanisme basa konjugasi.', tags: ['oktahedral', 'SN1cb', 'stereokimia'], glyph: 'octahedral', block: 'A', available: true },
  { id: 'a7', code: 'A7', title: 'Reaksi Transfer Elektron', summary: 'Jalur inner-sphere, outer-sphere, dan teori Marcus-Hush.', tags: ['inner-sphere', 'outer-sphere', 'Marcus'], glyph: 'electron', block: 'A', available: true },
];

export const BLOCK_B: WikiArticle[] = [
  { id: 'b1', code: 'B1', title: 'Karakteristik Umum dan Sejarah', summary: 'Ikatan M–C, sifat piroforik, dan tonggak sejarah organologam.', tags: ['ikatan M–C', 'Zeise', 'sejarah'], glyph: 'history', block: 'B', available: true },
  { id: 'b2', code: 'B2', title: 'Ligan dan Tata Nama', summary: 'Notasi haptisitas (η), penjembatan (μ), dan aturan penamaan.', tags: ['haptisitas', 'μ-jembatan', 'IUPAC'], glyph: 'ligand', block: 'B', available: true },
  { id: 'b3', code: 'B3', title: 'Aturan 18 Elektron', summary: 'Penghitungan elektron valensi dan stabilitas kelopak tertutup.', tags: ['18e', 'penghitungan', '16e'], glyph: 'electron18', block: 'B', available: true },
  { id: 'b4', code: 'B4', title: 'Senyawa Karbonil Logam', summary: 'Ikatan balik-π, bukti IR, dan mode penjembatan CO.', tags: ['ikatan balik', 'ν(CO)', 'IR'], glyph: 'carbonyl', block: 'B', available: true },
  { id: 'b5', code: 'B5', title: 'Metalosena dan Senyawa Sandwich', summary: 'Struktur ferosena, aromatisitas, dan stabilitas 18/19/20e.', tags: ['ferosena', 'sandwich', 'aromatik'], glyph: 'sandwich', block: 'B', available: true },
  { id: 'b6', code: 'B6', title: 'Katalisis Organologam', summary: 'Siklus Wilkinson dan empat tipe reaksi elementer.', tags: ['Wilkinson', 'adisi oksidatif', 'katalisis'], glyph: 'catalysis', block: 'B', available: true },
];

/* ===================== PART 1 (planned) ===================== */

export const PART1_MODULES: WikiArticle[] = [
  { id: 'c1', code: '1.1', title: 'Senyawa Koordinasi & Teori Werner', summary: 'Bilangan koordinasi, valensi primer/sekunder, dan dentisitas ligan.', tags: ['Werner', 'ligan', 'dentisitas'], glyph: 'coordination', block: 'A', available: true },
  { id: 'c2', code: '1.2', title: 'Isomerisme dalam Kompleks Koordinasi', summary: 'Isomer struktural, geometris (cis/trans, fac/mer), dan optik.', tags: ['isomer', 'cis/trans', 'kiralitas'], glyph: 'isomer', block: 'A', available: true },
  { id: 'c3', code: '1.3', title: 'Teori Ikatan Valensi (VBT)', summary: 'Hibridisasi, kompleks orbital dalam/luar, dan sifat magnetik.', tags: ['VBT', 'hibridisasi', 'magnetik'], glyph: 'orbital', block: 'A', available: true },
  { id: 'c4', code: '1.4', title: 'Teori Medan Kristal (CFT)', summary: 'Pembelahan d-orbital oktahedral, tetrahedral, dan square planar.', tags: ['CFT', 'Δo', 'high/low-spin'], glyph: 'splitting', block: 'A', available: true },
  { id: 'c5', code: '1.5', title: 'Faktor Penentu Pembelahan Medan Kristal (Δ)', summary: 'Deret spektrokimia, keadaan oksidasi, dan identitas logam.', tags: ['spektrokimia', 'Δ', '4d/5d'], glyph: 'spectro', block: 'A', available: true },
  { id: 'c6', code: '1.6', title: 'Distorsi Jahn-Teller', summary: 'Degenerasi elektronik, elongasi/kompresi tetragonal.', tags: ['Jahn-Teller', 'd⁹', 'distorsi'], glyph: 'distortion', block: 'A', available: true },
  { id: 'c7', code: '1.7', title: 'Teori Medan Ligan (LFT)', summary: 'Pendekatan orbital molekul dan ikatan-π pada kompleks.', tags: ['LFT', 'orbital molekul', 'ikatan-π'], glyph: 'mo', block: 'A', available: true },
  { id: 'c8', code: '1.8', title: 'Spektroskopi Elektronik & Warna Kompleks', summary: 'Transisi d-d, diagram Tanabe-Sugano, dan asal warna.', tags: ['spektroskopi', 'd-d', 'warna'], glyph: 'spectrum', block: 'A', available: true },
  { id: 'c9', code: '1.9', title: 'Senyawa Spin Crossover (SCO)', summary: 'Peralihan spin akibat suhu, tekanan, dan cahaya.', tags: ['spin crossover', 'histeresis', 'LIESST'], glyph: 'spin', block: 'A', available: true },
];

/* ===================== PART 2 (planned) ===================== */

export const PART2_MODULES: WikiArticle[] = [
  { id: 'd1', code: '2.1', title: 'Tren Periodik & Karakteristik Logam Transisi', summary: 'Jari-jari, keadaan oksidasi, dan sifat khas blok-d.', tags: ['tren periodik', 'oksidasi', 'blok-d'], glyph: 'periodic', block: 'B', available: true },
  { id: 'd2', code: '2.2', title: 'Metalurgi & Proses Ekstraksi Industri', summary: 'Pemanggangan, reduksi, dan pemurnian logam transisi.', tags: ['metalurgi', 'ekstraksi', 'reduksi'], glyph: 'furnace', block: 'B', available: true },
  { id: 'd3', code: '2.3', title: 'Kimia Deskriptif Logam 3d (Sc–Zn)', summary: 'Sifat, senyawa, dan reaksi khas logam baris pertama.', tags: ['logam 3d', 'Sc–Zn', 'senyawa'], glyph: 'testtube', block: 'B', available: true },
  { id: 'd4', code: '2.4', title: 'Kimia Deskriptif Logam 4d & 5d (PGM)', summary: 'Logam golongan platina dan logam mulia.', tags: ['PGM', '4d/5d', 'logam mulia'], glyph: 'gem', block: 'B', available: true },
  { id: 'd5', code: '2.5', title: 'Analisis Kualitatif & Skema Pemisahan', summary: 'Pemisahan kation logam transisi dan uji identifikasi.', tags: ['analisis kualitatif', 'pemisahan', 'kation'], glyph: 'flask', block: 'B', available: true },
];

/* ===================== Parts ===================== */

export const WIKI_PARTS: WikiPart[] = [
  {
    id: '1',
    label: 'Bagian 1',
    title: 'Kimia Koordinasi & Ikatan',
    subtitle: 'Coordination Chemistry, Bonding Theories & Electronic Spectroscopy',
    description: 'Senyawa koordinasi, teori ikatan (VBT, CFT, LFT), dan spektroskopi elektronik.',
    status: 'available',
    accent: 'a',
    sections: [
      { block: 'A', title: 'Modul Bagian 1', description: 'Kimia koordinasi, teori ikatan, dan spektroskopi.', articles: PART1_MODULES },
    ],
  },
  {
    id: '2',
    label: 'Bagian 2',
    title: 'Kimia Anorganik Deskriptif',
    subtitle: 'Descriptive Inorganic Chemistry of Transition Metals',
    description: 'Tren periodik, metalurgi, dan kimia deskriptif logam transisi 3d/4d/5d.',
    status: 'available',
    accent: 'b',
    sections: [
      { block: 'B', title: 'Modul Bagian 2', description: 'Sifat dan kimia deskriptif logam transisi.', articles: PART2_MODULES },
    ],
  },
  {
    id: '3',
    label: 'Bagian 3',
    title: 'Mekanisme Reaksi & Organologam',
    subtitle: 'Reaction Mechanisms & Organometallic Chemistry',
    description: 'Kinetika, mekanisme substitusi, transfer elektron, dan kimia organologam.',
    status: 'available',
    accent: 'c',
    sections: [
      { block: 'A', title: 'Blok A — Mekanisme Reaksi', description: 'Kinetika dan mekanisme reaksi kompleks logam transisi.', articles: BLOCK_A },
      { block: 'B', title: 'Blok B — Organologam', description: 'Senyawa organologam, ikatan, dan katalisis.', articles: BLOCK_B },
    ],
  },
];

export function getPart(id: string): WikiPart | undefined {
  return WIKI_PARTS.find((p) => p.id === id);
}

// Part 3 sections — kept for the in-article sidebar nav (articles live here).
export const WIKI_SECTIONS: WikiSection[] = getPart('3')!.sections;

// All built/available articles, used by the global search index.
export const ALL_ARTICLES: WikiArticle[] = WIKI_PARTS.flatMap((p) =>
  p.sections.flatMap((s) => s.articles)
).filter((a) => a.available);
