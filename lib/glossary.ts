export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
}

export const glossaryData: GlossaryTerm[] = [
  // Block A terms
  { id: "activation-energy", term: "Activation Energy (Eₐ)", definition: "The minimum energy required for a chemical reaction to occur." },
  { id: "activation-entropy", term: "Activation Entropy (ΔS‡)", definition: "Change in disorder between reactants and the transition state. Negative values suggest an associative process." },
  { id: "activation-volume", term: "Activation Volume (ΔV‡)", definition: "Change in volume between reactants and the transition state; measured via pressure dependence of the rate." },
  { id: "cfse", term: "CFSE", definition: "Crystal Field Stabilization Energy. The energy gain from d-orbital splitting in a coordination complex." },
  { id: "conjugate-base", term: "Conjugate Base Mechanism (SN1cb)", definition: "A substitution pathway triggered by the deprotonation of a ligand by a strong base (OH⁻)." },
  { id: "eyring", term: "Eyring Equation", definition: "Relates reaction rate to temperature and activation parameters (ΔH‡, ΔS‡)." },
  { id: "inert", term: "Inert Complex", definition: "A complex that undergoes ligand substitution very slowly (t₁/₂ > 1 min)." },
  { id: "labile", term: "Labile Complex", definition: "A complex that undergoes ligand substitution rapidly (t₁/₂ < 1 min)." },
  { id: "marcus", term: "Marcus-Hush Theory", definition: "A theory describing the rates of electron transfer reactions, particularly outer-sphere pathways." },
  { id: "rds", term: "RDS", definition: "Rate-Determining Step. The slowest step in a reaction mechanism, which determines the overall rate." },
  { id: "trans-effect", term: "Trans Effect", definition: "The kinetic ability of a ligand to direct substitution to the position trans to itself." },
  { id: "bridging-ligand", term: "Bridging Ligand (μ)", definition: "A ligand that coordinates to two or more metal centers simultaneously, forming a bridge." },
  // Block B terms
  { id: "back-bonding", term: "π-Backbonding", definition: "Electron density shifts from a metal d-orbital into the π* anti-bonding orbital of a ligand like CO." },
  { id: "hapticity", term: "Hapticity (η)", definition: "The number of contiguous atoms in a ligand that are directly coordinated to the metal center." },
  { id: "oxidative-addition", term: "Oxidative Addition", definition: "A metal center inserts into a covalent bond, increasing its oxidation state and coordination number by 2." },
  { id: "reductive-elimination", term: "Reductive Elimination", definition: "The reverse of oxidative addition; two ligands couple and leave the metal, reducing OS and CN by 2." },
  { id: "pyrophoric", term: "Pyrophoric", definition: "A substance that ignites spontaneously upon contact with air." },
  { id: "zeise", term: "Zeise's Salt", definition: "The first synthesized organometallic complex, K[PtCl₃(η²-C₂H₄)]." },
  { id: "18e-rule", term: "18-Electron Rule", definition: "A stability rule predicting that transition metal complexes with 18 valence electrons have closed-shell configurations." },
  { id: "migratory-insertion", term: "Migratory Insertion", definition: "An unsaturated ligand inserts into an adjacent M-alkyl or M-hydride bond, generating a vacant site." },
];
