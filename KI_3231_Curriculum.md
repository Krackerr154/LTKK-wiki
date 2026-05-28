# KI 3231 – Transition Metals & Complex Chemistry (Part 3)
## Comprehensive Interactive Web Curriculum Content Manual

---

# BLOCK A — Reaction Mechanisms

## Module A1 – Kinetics Foundations

### Concept Overview
Chemical kinetics is the study of the rates of chemical processes and the molecular pathways by which reactants are converted into products. While thermodynamics dictates whether a reaction is spontaneous ($\Delta G^\circ < 0$) and defines the equilibrium state of a system, it is kinetics that governs the real-time velocity of a chemical change. A reaction mechanism is the step-by-step sequence of elementary reactions by which an overall chemical change occurs.

Within any multi-step mechanism, the individual elementary steps occur at different rates. The slowest elementary step is designated as the **rate-determining step (RDS)**, acting as the kinetic bottleneck for the entire reaction. The rate of the overall reaction cannot proceed faster than the rate of this bottleneck step. The energy barrier that must be overcome to pass through this step is the **activation energy ($E_a$)**.

It is crucial to distinguish between a **transition state** and a **reaction intermediate**:
1. **Transition State (Activated Complex):** This is a state corresponding to a local potential energy maximum along the reaction coordinate. It represents a highly unstable, fleeting arrangement of atoms (with a lifetime on the order of femtoseconds, $\approx 10^{-13}\ \text{s}$) where reactant bonds are in the process of breaking while product bonds are in the process of forming. By definition, a transition state cannot be isolated or directly observed in a stable state.
2. **Reaction Intermediate:** This is a distinct chemical species that lies in a local potential energy minimum (a "valley") along the reaction coordinate. Intermediates have fully formed chemical bonds, possess a finite lifetime, and can under appropriate conditions be spectroscopically detected, trapped, or even isolated.

The mathematical relationship between the rate of reaction and the concentration of the reactants is expressed by the **rate law**. The reaction order (zeroth, first, or second order) provides deep mechanistic insights into the molecularity of the rate-determining step.

### Key Equations
The general rate law for a chemical reaction is expressed as:
$$ \text{Rate} = k [A]^m [B]^n $$
Where:
- $k$ is the rate constant, whose temperature dependence is defined by the Arrhenius equation: $k = A e^{-E_a/RT}$.
- $[A]$ and $[B]$ are the molar concentrations of the reactants.
- $m$ and $n$ are the partial orders of the reaction with respect to reactants $A$ and $B$, determined solely by experiment.

For elementary steps, the reaction order corresponds directly to molecularity:
- **First-order (Unimolecular):**
  $$ \text{Rate} = k[A] $$
- **Second-order (Bimolecular):**
  $$ \text{Rate} = k[A][B] \quad \text{or} \quad \text{Rate} = k[A]^2 $$

### Worked Examples
**Example 1: Determination of Rate Law and Mechanism**
For the ligand substitution reaction:
$$ [ML_5X]^{n+} + Y^- \rightarrow [ML_5Y]^{n+} + X^- $$
The following initial rates were measured experimentally at $298\ \text{K}$:

| Run | $[ML_5X]^{n+}\ (\text{M})$ | $[Y^-]\ (\text{M})$ | Initial Rate ($\text{M}\cdot\text{s}^{-1}$) |
|-----|----------------------------|---------------------|------------------------------------------|
| 1   | $1.0 \times 10^{-3}$       | $0.10$              | $1.5 \times 10^{-5}$                     |
| 2   | $2.0 \times 10^{-3}$       | $0.10$              | $3.0 \times 10^{-5}$                     |
| 3   | $1.0 \times 10^{-3}$       | $0.20$              | $1.5 \times 10^{-5}$                     |

*Step-by-Step Analysis:*
1. Compare Run 1 and Run 2: The concentration of $[Y^-]$ is kept constant at $0.10\ \text{M}$. When the concentration of the complex $[ML_5X]^{n+}$ is doubled ($1.0 \times 10^{-3}\ \text{M}$ to $2.0 \times 10^{-3}\ \text{M}$), the initial rate doubles from $1.5 \times 10^{-5}\ \text{M}\cdot\text{s}^{-1}$ to $3.0 \times 10^{-5}\ \text{M}\cdot\text{s}^{-1}$. Thus, the reaction is first-order with respect to the complex ($m = 1$).
2. Compare Run 1 and Run 3: The concentration of the complex is kept constant at $1.0 \times 10^{-3}\ \text{M}$. When the concentration of $[Y^-]$ is doubled ($0.10\ \text{M}$ to $0.20\ \text{M}$), the initial rate remains unchanged at $1.5 \times 10^{-5}\ \text{M}\cdot\text{s}^{-1}$. Thus, the reaction is zeroth-order with respect to the entering ligand $Y^-$ ($n = 0$).
3. Write the overall rate law:
   $$ \text{Rate} = k[ML_5X]^{n+} $$
4. **Mechanistic Conclusion:** Because the rate of the reaction depends exclusively on the concentration of the transition metal complex and is independent of the entering ligand, the rate-determining step must involve only the parent complex. This strongly points to a dissociative mechanism ($D$) where the slow step is the dissociation of the leaving group $X^-$.

### Common Misconceptions
- **Misconception:** A large negative Gibbs free energy of reaction ($\Delta G^\circ \ll 0$) guarantees a fast, highly reactive process.
  **Correction:** Thermodynamics only dictates the difference in energy between the initial reactants and the final products (the equilibrium constant $K_{eq}$). It does not describe the height of the activation energy barrier ($E_a$). A reaction can be highly spontaneous thermodynamically but kinetically inert due to a massive activation barrier.

### Visual/Animation Description
- **Main View:** An interactive 2D potential energy profile chart ($\text{Potential Energy}$ on the y-axis, $\text{Reaction Coordinate}$ on the x-axis).
- **Interactive Elements:**
  - **Slider "Activation Energy":** Dragging this slider dynamically changes the height of the energy peak. Simultaneously, a dials-and-needles speedometer graphic labeled "Reaction Rate" rotates to show real-time changes in rate.
  - **Toggle "Reaction Profile Mode":**
    - *Single Peak:* Displays a simple transition state. Hovering over the peak displays a 3D ball-and-stick model of the complex with the leaving bond shown as a stretched, dashed red line.
    - *Double Peak (Intermediate):* Displays a profile with a local valley. Hovering over the valley highlights the 5-coordinate intermediate.
- **Color Coding:** Gold metal center, red leaving group (X), green entering group (Y).

### Formative Quiz
1. **Question:** In an energy profile, what does a local minimum (a valley) between two transition states represent?
   - A) The activation energy barrier.
   - B) The transition state.
   - C) The reaction intermediate.
   - D) The catalyst.
   *Answer:* C. *Explanation:* An intermediate resides in a local energy minimum, meaning it has a finite lifetime and stable, fully formed bonds.

2. **Question:** If the rate law for a substitution is $\text{Rate} = k[Complex][Ligand]$, what is the molecularity of the rate-determining step?
   - A) Unimolecular.
   - B) Bimolecular.
   - C) Termolecular.
   - D) Zeroth-order.
   *Answer:* B. *Explanation:* Since both the complex and the entering ligand appear in the rate law with a partial order of 1, the rate-determining step is bimolecular.

### Connections
- **Builds on:** Standard university kinetics (reaction coordinate diagrams, rate laws).
- **Feeds into:** Module A3 (Substitution Mechanisms) and Module A4 (Activation Parameters).

---

## Module A2 – Labile and Inert Complexes

### Concept Overview
The terms **labile** and **inert** are purely kinetic descriptions coined by Henry Taube to classify coordination complexes based on how quickly they undergo ligand substitution:
- **Labile complexes:** Undergo rapid ligand exchange, typically having a half-life ($t_{1/2}$) of less than 1 minute at $25^\circ\text{C}$ in a $0.1\ \text{M}$ solution.
- **Inert complexes:** Undergo slow ligand exchange, with a half-life exceeding 1 minute, often taking hours, days, or even months to react.

The kinetic lability of a coordination compound is primarily determined by its **Crystal Field Stabilization Energy (CFSE)** and its specific $d$-electron configuration. When a 6-coordinate octahedral complex reacts, it must deform into either a 5-coordinate or 7-coordinate transition state. If this deformation causes a massive loss of CFSE (a high activation barrier), the complex is inert.
- **Inert Configurations:** Octahedral $d^3$ (e.g., $Cr^{3+}$) and low-spin $d^6$ (e.g., $Co^{3+}, Fe^{2+}$ with strong-field ligands). These configurations possess highly stabilized ground states that resist geometric distortion.
- **Labile Configurations:** Octahedral $d^1, d^2$, high-spin $d^4, d^5, d^6$, and $d^7, d^9, d^{10}$. These have low or zero CFSE barriers, allowing fast ligand exchange.

### Key Equations
The Crystal Field Stabilization Energy (CFSE) for an octahedral complex is calculated as:
$$ \text{CFSE} = (-0.4 \cdot n_{t_{2g}} + 0.6 \cdot n_{e_g})\Delta_o + P \cdot n_{pair} $$
Where:
- $n_{t_{2g}}$ is the number of electrons in the lower-energy $t_{2g}$ orbitals.
- $n_{e_g}$ is the number of electrons in the higher-energy $e_g$ orbitals.
- $\Delta_o$ is the octahedral crystal field splitting energy.
- $P$ is the spin-pairing energy, and $n_{pair}$ is the number of paired electron pairs.

### Worked Examples
**Example 1: The Thermodynamic vs. Kinetic Stability Trap**
Analyze the stability and lability of $[Ni(CN)_4]^{2-}$ and $[Co(NH_3)_6]^{3+}$ in acidic media.
1. $[Ni(CN)_4]^{2-}$ has a thermodynamic formation constant $K_f \approx 10^{30}$. However, when exposed to radiolabeled $^{13}CN^-$, it undergoes instantaneous ligand exchange at room temperature.
2. $[Co(NH_3)_6]^{3+}$ is thermodynamically unstable in acidic aqueous solution and should decompose into $[Co(OH_2)_6]^{3+}$ and $NH_4^+$ ($K_{eq} \approx 10^{25}$). Yet, it remains unchanged in concentrated acid for days.

*Reasoning:*
- For $[Ni(CN)_4]^{2-}$, the huge $K_f$ means it is **thermodynamically highly stable**. However, because it is a $d^8$ square planar complex, it undergoes ligand substitution via an associative pathway with a negligible kinetic barrier, making it **kinetically labile**.
- For $[Co(NH_3)_6]^{3+}$, the reaction is thermodynamically highly spontaneous. However, $Co^{3+}$ is a low-spin $d^6$ system ($t_{2g}^6 e_g^0$) with maximum CFSE stabilization ($-2.4\Delta_o$). Deforming the coordination shell to let a ligand leave or enter has a massive energy penalty, making it **kinetically inert**.

### Common Misconceptions
- **CRITICAL TRAP:** "Thermodynamically stable" is equivalent to "kinetically inert."
  **Correction:** Thermodynamics dictates the position of the equilibrium ($\Delta G^\circ$, $K_f$). Kinetics dictates the speed of the reaction ($E_a$, $k$). A compound can be extremely unstable thermodynamically but survive indefinitely due to kinetic inertness (e.g. metallocenes or cobalt ammine complexes in acid).

### Visual/Animation Description
- **Main View:** An interactive periodic table of the transition metals.
- **Interactive Elements:**
  - Clicking any transition metal ion (e.g., $Co^{3+}$, $Fe^{3+}$, $Cr^{3+}$) pops up a 3D orbital level panel.
  - A slider labeled "Ligand Field Strength ($\Delta_o$)" allows the user to shift from weak-field to strong-field.
  - The electron spin configurations in the $t_{2g}$ and $e_g$ energy levels automatically rearrange. The calculated CFSE is displayed in real-time, and a bold visual stamp displays **"LABILE"** (green) or **"INERT"** (red) based on the calculated configuration.

### Formative Quiz
1. **Question:** Why is $[Cr(OH_2)_6]^{3+}$ highly kinetically inert compared to $[Fe(OH_2)_6]^{3+}$?
   - A) $Cr^{3+}$ is a $d^3$ ion with strong CFSE, whereas $Fe^{3+}$ is high-spin $d^5$ with zero CFSE.
   - B) Water binds much more tightly to chromium than iron.
   - C) Iron is larger than chromium, accelerating substitution.
   - D) Chromium undergoes associative substitution exclusively.
   *Answer:* A. *Explanation:* Octahedral $d^3$ has a stable $t_{2g}^3$ ground state with strong CFSE ($-1.2\Delta_o$). High-spin $d^5$ ($t_{2g}^3 e_g^2$) has a CFSE of zero, meaning there is no electronic barrier to ligand dissociation.

2. **Question:** A complex has a half-life of $10^{-6}$ seconds for water exchange. How is this complex classified?
   - A) Thermodynamically stable.
   - B) Kinetically inert.
   - C) Kinetically labile.
   - D) Thermodynamically unstable.
   *Answer:* C. *Explanation:* Any complex with a half-life of less than a minute at room temperature is classified as kinetically labile.

### Connections
- **Builds on:** Crystal Field splitting and CFSE math.
- **Feeds into:** Module A6 (Octahedral substitution factors) and Module A7 (Electron transfer).

---

## Module A3 – Three Substitution Mechanisms: D, A, and I

### Concept Overview
Ligand substitution reactions in transition metal complexes are divided into three major pathways based on the molecularity and structural features of the rate-determining transition state:

1. **Dissociative (D) Mechanism:**
   A two-step process where the leaving ligand X fully dissociates first, forming a stable intermediate with a reduced coordination number ($ML_n$). The entering ligand Y then coordinates in a rapid second step.
   $$ ML_n X \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} ML_n + X \quad (\text{Slow}) $$
   $$ ML_n + Y \xrightarrow{k_2} ML_n Y \quad (\text{Fast}) $$

2. **Associative (A) Mechanism:**
   A two-step process where the entering ligand Y coordinates first to form an expanded coordination intermediate ($ML_n XY$). The leaving ligand X then departs in a fast second step.
   $$ ML_n X + Y \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} ML_n XY \quad (\text{Slow}) $$
   $$ ML_n XY \xrightarrow{k_2} ML_n Y + X \quad (\text{Fast}) $$

3. **Interchange (I) Mechanism:**
   A concerted, single-step reaction. The leaving ligand X and entering ligand Y swap positions in a single transition state without forming a stable intermediate.
   - **$I_d$ (Interchange-dissociative):** The transition state is dominated by the stretching/breaking of the $M-X$ bond.
   - **$I_a$ (Interchange-associative):** The transition state is dominated by the forming $M-Y$ bond.

### Key Equations
For a **Dissociative (D)** mechanism, applying the steady-state approximation to the $[ML_n]$ intermediate yields:
$$ \text{Rate} = \frac{k_1 k_2 [ML_n X][Y]}{k_{-1}[X] + k_2[Y]} $$
Under high concentrations of the entering ligand ($k_2[Y] \gg k_{-1}[X]$), the rate law simplifies to first-order saturation kinetics:
$$ \text{Rate} = k_1 [ML_n X] \quad (\text{Pseudo-first-order}) $$

For an **Associative (A)** mechanism, the rate law is strictly second-order overall:
$$ \text{Rate} = k_1 [ML_n X][Y] $$

### Worked Examples
**Example 1: Deciphering the Rate-Determining Step**
For the substitution $[Co(CN)_5(OH_2)]^{2-} + I^- \rightarrow [Co(CN)_5I]^{3-} + H_2O$, the rate remains completely unchanged when the concentration of iodide ($I^-$) is increased from $0.05\ \text{M}$ to $2.0\ \text{M}$. Identify the mechanism.

*Reasoning:*
1. Because the reaction rate is independent of the entering ligand concentration ($I^-$), the entering ligand does not participate in the rate-determining step.
2. The rate law must be: $\text{Rate} = k[Co(CN)_5(OH_2)]^{2-}$.
3. This is characteristic of a **Dissociative (D)** mechanism, where the rate-determining step is the slow dissociation of water to form a 5-coordinate intermediate, $[Co(CN)_5]^{2-}$.

### Common Misconceptions
- **Misconception:** The Interchange (I) mechanism has a transient intermediate.
  **Correction:** The I mechanism is a single-step concerted process with **no intermediate**. If an intermediate has a physical lifetime ($>10^{-13}$ s), the reaction is D or A.

### Visual/Animation Description
- **Main View:** Side-by-side 3-column panel (D | A | I).
- **Animations:**
  - **D Column:** A 6-coordinate gold complex ejects a red ball (X) to become 5-coordinate (square pyramidal). Then a green ball (Y) attaches.
  - **A Column:** A green ball (Y) attacks a 6-coordinate gold complex to become 7-coordinate (pentagonal bipyramidal). Then the red ball (X) is ejected.
  - **I Column:** Green and red balls move simultaneously in a concerted swap.
- **Coordination Number Display:** Real-time counter showing changes.

### Formative Quiz
1. **Question:** In an Associative (A) mechanism, what is the effect of changing the nucleophilicity of the entering ligand Y?
   - A) No effect.
   - B) The rate decreases for better nucleophiles.
   - C) The rate increases for better nucleophiles because bond formation is the RDS.
   - D) The reaction shifts to a D mechanism.
   *Answer:* C. *Explanation:* Bond formation is the slow step, so a better nucleophile reacts faster.

2. **Question:** An octahedral complex undergoes substitution with a rate law of $\text{Rate} = k[Complex][Y]$. What is the mechanism?
   - A) Pure Dissociative (D).
   - B) Associative (A) or Interchange-associative ($I_a$).
   - C) Zero-order kinetics.
   - D) Cannot be determined.
   *Answer:* B. *Explanation:* Second-order kinetics proves that the entering ligand Y is involved in the rate-determining step.

### Connections
- **Builds on:** Basic rate law principles.
- **Feeds into:** Modules A5 and A6.

---

## Module A4 – Activation Parameters

### Concept Overview
To determine a reaction mechanism experimentally, physical chemists study the dependence of the rate constant on temperature and pressure to extract the thermodynamic parameters of the transition state:
1. **$\Delta H^\ddagger$ (Enthalpy of Activation):** The energy required to stretch and weaken bonds. Highly positive values correspond to dissociative processes.
2. **$\Delta S^\ddagger$ (Entropy of Activation):** Indicates the change in order at the transition state.
   - $\Delta S^\ddagger > 0$: **Dissociative** (increase in disorder as a ligand departs).
   - $\Delta S^\ddagger < 0$: **Associative** (decrease in disorder as two molecules combine).
3. **$\Delta V^\ddagger$ (Volume of Activation):** The volume change of the system during activation.
   - $\Delta V^\ddagger > 0$: **Dissociative** (system expands as a bond breaks).
   - $\Delta V^\ddagger < 0$: **Associative** (system contracts as a bond forms).

### Key Equations
**The Eyring Equation:**
$$ \ln\left(\frac{k}{T}\right) = -\frac{\Delta H^\ddagger}{R} \cdot \frac{1}{T} + \left[ \ln\left(\frac{k_B}{h}\right) + \frac{\Delta S^\ddagger}{R} \right] $$
Where:
- $k_B$ is Boltzmann's constant ($1.381 \times 10^{-23}\ \text{J/K}$).
- $h$ is Planck's constant ($6.626 \times 10^{-34}\ \text{J}\cdot\text{s}$).
- $R$ is the gas constant ($8.314\ \text{J/mol}\cdot\text{K}$).

**Activation Volume ($\Delta V^\ddagger$):**
$$ \ln(k) = -\frac{\Delta V^\ddagger}{RT} \cdot P + \ln(k_0) $$

### Worked Examples
*Refer to the complete solved mathematical steps for the Eyring derivation and volume analysis in the supplementary exercise index (Latihan A4-04).*

### Common Misconceptions
- **Misconception:** Solutions are completely incompressible, so pressure cannot affect reaction rates.
  **Correction:** Solvent reorganization and bond changes alter the volume of the cavity surrounding the complex, making rate constants highly pressure-dependent.

### Visual/Animation Description
- **Eyring Plotter:** Interactive data entry where students input $(T, k)$ pairs and see a linear plot generated. The slope is linked directly to the calculated $\Delta H^\ddagger$ and $\Delta S^\ddagger$ boxes.
- **Piston Animation:** Compressing a cylinder containing the reacting complexes. Students see the reaction rate speed up for associative processes ($\Delta V^\ddagger < 0$) and slow down for dissociative processes ($\Delta V^\ddagger > 0$).

### Formative Quiz
1. **Question:** An activation entropy $\Delta S^\ddagger = +115\ \text{J/mol}\cdot\text{K}$ implies:
   - A) Associative mechanism.
   - B) Dissociative mechanism.
   - C) No change in order.
   - D) Absolute zero.
   *Answer:* B. *Explanation:* A positive entropy of activation means the transition state is more disordered, consistent with dissociation.

2. **Question:** If the rate constant decreases under high pressure, then $\Delta V^\ddagger$ is:
   - A) Negative, indicating an associative mechanism.
   - B) Positive, indicating a dissociative mechanism.
   - C) Zero.
   - D) Complex.
   *Answer:* B. *Explanation:* A positive volume of activation means the system expands during the transition state. Compression (increased pressure) inhibits this expansion, slowing down the rate.

### Connections
- **Builds on:** Mechanism definitions from A3.
- **Feeds into:** Mechanism validation in A5 and A6.

---

## Module A5 – Substitution in Square Planar Complexes

### Concept Overview
Ligand substitution in 4-coordinate square planar $d^8$ complexes (typically $Pt(II)$, $Pd(II)$, $Au(III)$) occurs exclusively via the **Associative (A)** or **Interchange-associative ($I_a$)** mechanisms. $Pt(II)$ is the universal model system because its reactions are slow enough to be measured easily.

The reaction kinetics follow a two-pathway rate law, which is driven by two competing pathways:
1. **Solvent-assisted pathway ($k_1$):** Water (or solvent) coordinates first to form a 5-coordinate intermediate, followed by leaving group displacement.
2. **Direct attack pathway ($k_2$):** The entering nucleophile Y attacks directly to form a 5-coordinate trigonal bipyramidal intermediate.

Four major factors control the rate of square planar substitution:
1. **Entering Ligand (Y):** Higher nucleophilicity increases the rate (following soft-soft interactions under the HSAB principle).
2. **Leaving Group (X):** Good leaving groups (weak M-X bonds, stable anions) depart faster.
3. **Stereochemistry:** The reaction occurs with absolute **retention of configuration** (*cis* reactants yield *cis* products) via a trigonal bipyramidal intermediate where the entering group, leaving group, and trans ligand lie in the equatorial plane.
4. **The Trans Effect:** The ability of a spectator ligand to facilitate the substitution of the ligand positioned *trans* to itself.
   - **$\sigma$-bonding mechanism:** Strong $\sigma$-donors polarize the metal-ligand bond opposite to them, weakening it (ground-state thermodynamic effect, or *trans-influence*).
   - **$\pi$-bonding mechanism:** Strong $\pi$-acceptors ($CO$, $CN^-$, olefins) stabilize the 5-coordinate trigonal bipyramidal transition state by accepting electron density from the metal $d$-orbitals, lowering the activation energy (transition-state kinetic effect, or *trans-effect*).

### Key Equations
**The Two-Pathway Rate Law:**
$$ \text{Rate} = (k_1 + k_2[Y]) [Complex] $$
$$ k_{obs} = k_1 + k_2[Y] $$
Where:
- $k_1$ is the first-order rate constant for solvent attack.
- $k_2$ is the second-order rate constant for direct nucleophilic attack.

**The Trans Effect Series (in order of decreasing directing power):**
$$ CO \approx CN^- \approx C_2H_4 > PR_3 \approx H^- > CH_3^- \approx I^- \approx SCN^- > Br^- > Cl^- > py > NH_3 > OH^- > H_2O $$

### Worked Examples
*Refer to the complete solved step-by-step synthetic sequences for synthesizing both cis- and trans-[PtBrCl(NH_3)(py)] in the supplementary index (Latihan A5-05 & 06).*

### Common Misconceptions
- **Misconception:** The trans effect and trans influence are identical.
  **Correction:** The trans influence is a ground-state thermodynamic phenomenon (reflected in bond lengths and coupling constants). The trans effect is a kinetic phenomenon describing the rate of substitution (governed by transition state stabilization).

### Visual/Animation Description
- **Main View:** An interactive 3D square planar molecule builder.
- **Interactive Elements:**
  - **Ligand Selector:** Students can attach different ligands to a square planar $Pt(II)$ core.
  - **Trans Influence Heat Map:** The program dynamically calculates and colors the four platinum-ligand bonds. The bond positioned *trans* to the strongest trans-director glows bright orange to indicate it has been weakened.
  - **Synthesis Simulator:** Students select a reagent addition order to construct a targeted isomer. If the order is correct, they get a green check; if incorrect, the trans effect redirects the synthesis and shows the wrong product.

### Formative Quiz
1. **Question:** Which ligand will exert the strongest kinetic trans effect?
   - A) $Cl^-$
   - B) $NH_3$
   - C) $CN^-$
   - D) $H_2O$
   *Answer:* C. *Explanation:* Cyanide is an excellent $\pi$-acceptor, stabilizing the 5-coordinate intermediate and accelerating trans substitution.

2. **Question:** What is the geometry of the intermediate formed during square planar substitution?
   - A) Square pyramidal.
   - B) Pentagonal bipyramidal.
   - C) Trigonal bipyramidal.
   - D) Tetrahedral.
   *Answer:* C. *Explanation:* Square planar complexes undergo associative substitution to form a 5-coordinate trigonal bipyramidal intermediate.

### Connections
- **Builds on:** Associative mechanisms (A3).
- **Feeds into:** Organometallic catalytic cycles (B6).

---

## Module A6 – Substitution in Octahedral Complexes

### Concept Overview
Ligand substitution in 6-coordinate octahedral complexes (primarily studied in $Co(III)$ and $Cr(III)$ due to their inertness) proceeds almost exclusively via **Dissociative (D)** or **Interchange-dissociative ($I_d$)** mechanisms. 

The substitution rates are controlled by six sub-factors:
1. **Leaving Group (X) Effect:** The weaker the $M-X$ bond, the faster the reaction. The rate increases down the halogen group ($F^- \ll Cl^- < Br^- < I^-$).
2. **Spectator Ligand Effect:** Spectator ligands that are strong $\sigma$-donors increase electron density at the metal center, stabilizing the transition state during dissociation.
3. **Steric Effect (Steric Acceleration):** Bulky ligands crowd the 6-coordinate ground state. Dissociation of the leaving group reduces crowding, causing a significant rate acceleration (steric relief).
4. **Ion Charge Effect:** Higher positive charge on the metal center strengthens the electrostatic attraction to the leaving group, making dissociation difficult and slowing the rate.
5. **Stereochemistry:** Dissociation of a ligand can lead to a square pyramidal intermediate (retaining cis/trans configuration) or a trigonal bipyramidal intermediate (which allows isomerization and yields a mixture of cis and trans products).
6. **Base Hydrolysis ($S_N1cb$ mechanism):** In the presence of $OH^-$, substitution occurs via an exceptionally fast pathway where $OH^-$ acts as a Brønsted base to deprotonate an amine ligand, creating a conjugate base with a highly reactive amide ($NH_2^-$) intermediate that rapidly ejects the leaving group.

### Key Equations
**Conjugate Base ($S_N1cb$) Rate Law:**
$$ \text{Rate} = k K [Co(NH_3)_5Cl^{2+}][OH^-] = k_{obs} [Complex][OH^-] $$
Where:
- $K$ is the equilibrium constant for the deprotonation pre-equilibrium step.
- $k$ is the rate constant for the rate-determining dissociation of the conjugate base.

### Worked Examples
*Refer to the complete solved step-by-step logic for Latihan A6-07 to A6-11 in the supplementary index.*

### Common Misconceptions
- **Misconception:** Since the rate law for base hydrolysis depends on $[OH^-]$ ($\text{Rate} = k_{obs}[Complex][OH^-]$), the mechanism must be an associative ($S_N2$) attack by hydroxide.
  **Correction:** The mechanism is strictly dissociative ($S_N1cb$). Hydroxide acts as a base to deprotonate a ligand, not as a nucleophile. The rate depends on $[OH^-]$ because it shifts the pre-equilibrium concentration of the highly reactive deprotonated conjugate base.

### Visual/Animation Description
- **Main View:** An interactive 6-tab dashboard, with one tab dedicated to each factor.
- **Base Hydrolysis Tab:** A three-stage interactive animation:
  1. *Deprotonation:* A green $OH^-$ ball attacks an $NH_3$ ligand, removing a proton to form a blue water molecule, leaving an $NH_2^-$ amide group.
  2. *Ejection:* The amide group uses its lone pair to donate $\pi$-electron density to the metal, pushing the red leaving group ($Cl^-$) out.
  3. *Aquation:* A water molecule coordinates to the resulting 5-coordinate intermediate to restore the amine structure.

### Formative Quiz
1. **Question:** Why does $[Co(NH_2Me)_5Cl]^{2+}$ undergo aquation faster than $[Co(NH_3)_5Cl]^{2+}$?
   - A) Methylamine is a weaker base.
   - B) The bulky methyl groups cause steric strain, which is relieved upon leaving group dissociation.
   - C) Iron impurities catalyze the reaction.
   - D) Methylamine acts as a better leaving group.
   *Answer:* B. *Explanation:* Steric crowding in the reactant is relieved when the coordination number drops from 6 to 5 during dissociation, driving steric acceleration.

2. **Question:** In the $S_N1cb$ mechanism, what is the role of the amide ($NH_2^-$) ligand?
   - A) It acts as the leaving group.
   - B) It acts as a strong $\pi$-donor, facilitating the dissociation of the leaving group opposite to it.
   - C) It coordinates water.
   - D) It serves as a spectator with no role.
   *Answer:* B. *Explanation:* The amide group is a powerful $\pi$-donor, stabilizing the transition state and accelerating the ejection of the leaving group.

### Connections
- **Builds on:** Inert complexes (A2).
- **Feeds into:** Inner-sphere electron transfer (A7).

---

## Module A7 – Electron Transfer Reactions

### Concept Overview
Electron transfer (redox) reactions in coordination chemistry occur via two distinct mechanistic pathways:

1. **Inner-Sphere Mechanism:**
   Requires the formation of a bridged binuclear intermediate where one ligand (the bridging ligand) is bonded to both metal centers simultaneously. 
   - One reactant must be substitutionally **labile** (to allow the bridge to form) and the other **inert**.
   - The bridging ligand must have a lone pair available to bind to the second metal.
   - Electron transfer occurs through this covalent bridge, and the bridge is often transferred to the newly formed inert metal center upon cleavage.
   - **Classic Example:**
     $$ [Co^{III}(NH_3)_5Cl]^{2+} + [Cr^{II}(H_2O)_6]^{2+} \rightarrow [Co^{II}(NH_3)_5(Cl)-Cr^{II}(H_2O)_5]^{4+} \rightarrow [Cr^{III}(H_2O)_5Cl]^{2+} + Co^{2+} + 5NH_4^+ $$

2. **Outer-Sphere Mechanism:**
   Occurs when both reactants are substitutionally **inert**, preventing the formation of a bridged intermediate.
   - The electron must tunnel through space from the donor to the acceptor.
   - The rate of outer-sphere electron transfer is governed by the Frank-Condon principle, meaning the metal-ligand bonds must adjust to match the transition state before the electron can tunnel.
   - **Marcus-Hush Theory** provides the mathematical framework to calculate these rates.

### Key Equations
**Marcus Cross-Relation Equation:**
$$ k_{12} = (k_{11} \cdot k_{22} \cdot K_{12} \cdot f_{12})^{1/2} $$
Where:
- $k_{12}$ is the calculated rate constant for the cross-reaction.
- $k_{11}$ and $k_{22}$ are the self-exchange rate constants for the two redox couples.
- $K_{12}$ is the equilibrium constant for the overall cross-reaction.
- $f_{12}$ is a correction factor, typically assumed to be close to $1.0$ for structurally similar systems.

### Worked Examples
*Refer to the complete solved step-by-step logic for Latihan A7-12 to A7-17 in the supplementary index.*

### Common Misconceptions
- **Misconception:** Electron transfer always involves a ligand transfer.
  **Correction:** Ligand transfer only occurs in specific inner-sphere mechanisms where the product coordination stability changes. In outer-sphere mechanisms, no bonds are broken or formed.

### Visual/Animation Description
- **Main View:** Side-by-side split screen showing Inner-Sphere vs. Outer-Sphere pathways.
- **Interactive Elements:**
  - **Inner-Sphere Panel:** Watch the labile $Cr(II)$ complex approach the inert $Co(III)$ complex. A chloride bridge forms, a flash of light represents electron transfer, and the bridge splits, leaving the chloride on the newly inert $Cr(III)$ center.
  - **Marcus Calculator:** Input values for $k_{11}$, $k_{22}$, and $K_{12}$ to compute the theoretical cross-rate $k_{12}$ and compare it to experimental values to confirm the mechanism.

### Formative Quiz
1. **Question:** Why can $[Co(NH_3)_6]^{3+}$ only react via an outer-sphere electron transfer mechanism?
   - A) Ammonia is too large.
   - B) Ammonia has no free lone pairs to form a bridge.
   - C) It is thermodynamically unstable.
   - D) It contains a transition metal.
   *Answer:* B. *Explanation:* To form a bridge, a ligand must have at least two lone pairs (e.g., halides, azide). Ammonia has only one lone pair, which is already fully bonded to the cobalt.

2. **Question:** In Marcus theory, what is the significance of $k_{11}$ and $k_{22}$?
   - A) They are the rates of ligand exchange.
   - B) They are the self-exchange rates, reflecting the energy required for bond reorganization without a net thermodynamic drive.
   - C) They represent equilibrium constants.
   - D) They are pressure factors.
   *Answer:* B. *Explanation:* Self-exchange rates reflect the internal activation barrier (bond length adjustments) required for electron transfer to occur in the absence of a thermodynamic driving force.

### Connections
- **Builds on:** Lability (A2) and Octahedral mechanisms (A6).
- **Feeds into:** Redox processes in organic catalysis.

---

# BLOCK B — Organometallic Chemistry

## Module B1 – General Characteristics and History

### Concept Overview
Organometallic chemistry is the study of chemical compounds containing at least one direct **Metal-Carbon covalent bond**. It bridges classical inorganic coordination chemistry and organic chemistry. 

Unlike classical complexes where metals typically reside in high oxidation states coordinated to highly electronegative donor atoms (N, O, halogens), organometallic complexes often stabilize **low oxidation states** (0, -1, or low positive values). This is achieved through the use of strong $\sigma$-donor and $\pi$-acceptor ligands (like $CO$, phosphines, and cyclopentadienyl rings).

Because transition metals in low oxidation states are highly electron-rich, many organometallic compounds are **pyrophoric** (ignite spontaneously on contact with oxygen or moisture) and require specialized synthetic techniques under an **inert atmosphere** (using Schlenk lines or gloveboxes).

#### Key Historical Milestones:
- **1827:** Synthesis of **Zeise's Salt** ($K[PtCl_3(\eta^2\text{-}C_2H_4)]$), the first transition metal-olefin complex.
- **1951:** The discovery and structural elucidation of **Ferrocene** ($Fe(\eta^5\text{-}C_5H_5)_2$), which established the sandwich structure and opened the field of metallocenes.
- **1973:** Nobel Prize awarded to Ernst Otto Fischer and Geoffrey Wilkinson for their pioneering work on metallocenes.
- **1983:** Nobel Prize awarded to Henry Taube for his mechanisms of electron transfer.

### Worked Examples
**Example 1: Classical Complex vs. Organometallic Complex**
Classify $[Co(NH_3)_6]Cl_3$ and $[Co(CO)_4]^-$ as classical or organometallic.

*Reasoning:*
- $[Co(NH_3)_6]Cl_3$ contains coordinate covalent bonds between cobalt and the nitrogen atoms of ammonia. Since there are no metal-carbon bonds, it is a **classical coordination complex**.
- $[Co(CO)_4]^-$ contains direct covalent bonds between the cobalt metal and the carbon atoms of the carbon monoxide ligands. Furthermore, the cobalt center is in a very low oxidation state (-1). This is an **organometallic complex**.

### Common Misconceptions
- **Misconception:** Any metal-containing compound that coordinates carbon is organometallic.
  **Correction:** Coordination compounds where the carbon is part of a non-metal-carbon bond (such as carbonates or cyanides in some traditional coordination networks) are not classified as organometallic. There must be a direct, covalent-type metal-carbon bond.

### Visual/Animation Description
- **Timeline Engine:** An interactive timeline from 1820 to the present day. Clicking on key dates (1827, 1951, 1973) opens a 3D structural viewer showing the molecules (Zeise's salt showing the perpendicular ethylene coordinate, Ferrocene showing the parallel cyclopentadienyl rings).

### Formative Quiz
1. **Question:** What is the oxidation state of the metal in Vaska's complex, $[IrCl(CO)(PPh_3)_2]$?
   - A) 0
   - B) +1
   - C) +2
   - D) +3
   *Answer:* B. *Explanation:* Chloride is anionic ($Cl^-$), while $CO$ and $PPh_3$ are neutral. Thus, the iridium center has an oxidation state of +1.

2. **Question:** Why are many organometallic compounds synthesized under nitrogen or argon atmospheres?
   - A) Nitrogen acts as a catalyst.
   - B) Organometallic complexes in low oxidation states are highly air-sensitive and pyrophoric.
   - C) Argon stabilizes the glass reaction vessels.
   - D) Oxygen coordinates to form metallocenes.
   *Answer:* B. *Explanation:* Low-valent metals are highly electron-rich, making them highly susceptible to rapid, exothermic oxidation by atmospheric oxygen or moisture.

### Connections
- **Builds on:** Basic chemical bonding.
- **Feeds into:** Ligands and Nomenclature (B2) and the 18-Electron Rule (B3).

---

## Module B2 – Ligands and Nomenclature

### Concept Overview
Organometallic nomenclature introduces specific terms and notations to describe how organic molecules bind to metal centers:

1. **Hapticity ($\eta$ notation):**
   Refers to the number of contiguous atoms in a ligand that are directly coordinated to the metal center.
   - $\eta^1$-alkyl (e.g., a methyl group coordinates through one carbon).
   - $\eta^3$-allyl (three carbons in a delocalized $\pi$-system coordinate to the metal).
   - $\eta^5$-cyclopentadienyl (all five carbon atoms of the Cp ring coordinate equally).
   - $\eta^6$-benzene (all six carbon atoms are coordinated).

2. **Bridging Ligands ($\mu$ notation):**
   Indicates that a ligand is shared between two or more metal centers. A subscript designates the number of metal centers bridged (e.g., $\mu_2$-carbonyl bridges two metals, while $\mu_3$-carbonyl bridges three metals).

3. **Nomenclature Rules:**
   - List ligands alphabetically.
   - Specify hapticity ($\eta^n$) before the ligand name.
   - Specify bridging ($\mu_n$) before the ligand name.
   - Name the metal center, followed by its formal oxidation state in parentheses.

### Worked Examples
**Example 1: Naming a Metallocene Derivative**
Determine the formal IUPAC name for $[Fe(\eta^5\text{-}C_5H_5)_2]$.
*Reasoning:*
- The ligands are two cyclopentadienyl rings ($C_5H_5^-$), which coordinate through all five carbon atoms ($\eta^5$).
- The metal is iron.
- The overall complex is neutral. Cyclopentadienyl is anionic ($C_5H_5^-$), meaning the iron center must be in the +2 oxidation state to balance the charge.
- Naming: **bis($\eta^5$-cyclopentadienyl)iron(II)**.

### Common Misconceptions
- **Misconception:** Hapticity ($\eta$) is the same as denticity.
  **Correction:** Denticity refers to the number of distinct coordinate bonds formed by non-contiguous donor atoms (e.g. EDTA). Hapticity refers to the contiguous coordination of a continuous $\pi$-electron system.

### Visual/Animation Description
- **Name Builder Tool:** Drag-and-drop structural pieces (ligands, hapticity designations, metals) to dynamically construct IUPAC names. The name changes color-coded to match the highlighted part of the structural drawing.

### Formative Quiz
1. **Question:** What is the hapticity of the ethylene ligand in Zeise's salt, $[PtCl_3(\eta^2\text{-}C_2H_4)]^-$?
   - A) 1
   - B) 2
   - C) 3
   - D) 4
   *Answer:* B. *Explanation:* Ethylene coordinates through both carbons of the double bond, giving it a hapticity of 2 ($\eta^2$).

### Connections
- **Builds on:** B1 history.
- **Feeds into:** Module B3 (18-Electron Rule).

---

## Module B3 – The 18-Electron Rule

### Concept Overview
The **18-Electron Rule** is a powerful heuristic tool used to predict the stability of transition metal complexes. It is the inorganic equivalent of the octet rule in organic chemistry.

The transition metal has 9 valence orbitals in its outer shell (one $s$, three $p$, and five $d$ orbitals). Filling all of these orbitals with paired electrons requires exactly **18 electrons**. When a complex reaches an 18-electron count, it adopts a highly stable, closed-shell electronic configuration.

There are two methods used for counting electrons:
1. **The Neutral Atom (Covalent) Method:**
   The metal is treated as neutral (oxidation state 0). Ligands are treated as neutral radicals donating their valence electrons.
2. **The Donor-Pair (Ionic) Method:**
   The metal is assigned its formal oxidation state. Ligands are treated as closed-shell ions (e.g., $Cl^-$, $Cp^-$) donating pairs of electrons.

Both methods yield the exact same total electron count when done correctly.

#### Important Exceptions:
- **16-Electron Complexes:** Very common for $d^8$ metals in square planar geometries ($Pt(II)$, $Pd(II)$, $Rh(I)$, $Ir(I)$). The high-energy $d_{x^2-y^2}$ orbital is left empty, resulting in a stable 16-electron configuration.

| Ligand | Neutral (Covalent) Count | Ionic Count |
|--------|-------------------------|-------------|
| Carbonyl ($CO$) | 2 | 2 |
| Phosphine ($PR_3$) | 2 | 2 |
| Halide ($Cl^-$) | 1 | 2 |
| Cyclopentadienyl ($\eta^5$-Cp) | 5 | 6 |
| Alkene ($\eta^2$-ethylene) | 2 | 2 |
| Hydride ($H^-$) | 1 | 2 |

### Worked Examples
**Example 1: Electron Counting for Ferrocene ($Fe(\eta^5\text{-}Cp)_2$)**
*Using the Ionic Method:*
1. Cyclopentadienyl is anionic ($Cp^-$). Two $Cp^-$ ligands contribute a total charge of -2.
2. The complex is neutral, so the iron must be $Fe(II)$.
3. Valence electron contribution:
   - $Fe^{2+}$ (Group 8, $d^6$ configuration) = $6e^-$
   - Two $\eta^5$-Cp ligands ($2 \times 6e^-$) = $12e^-$
   - Total electron count: $6 + 12 = \mathbf{18e^-}$ (Highly stable).

**Example 2: Electron Counting for $Mn_2(CO)_{10}$**
*Using the Covalent Method:*
1. Neutral $Mn$ (Group 7) = $7e^-$
2. Five neutral $CO$ ligands ($5 \times 2e^-$) = $10e^-$
3. One $Mn-Mn$ covalent single bond contributing to each metal center = $1e^-$
4. Total electron count per manganese center: $7 + 10 + 1 = \mathbf{18e^-}$.

### Common Misconceptions
- **Misconception:** Any complex that does not have 18 electrons is unstable and cannot exist.
  **Correction:** The 18-electron rule is a guideline. Many highly stable complexes exist with other counts, such as 16-electron square planar catalysts or metallocenes with anti-bonding electron states.

### Visual/Animation Description
- **Main View: Interactive 18e Calculator**
  - Grid showing standard transition metals and a drawer of common ligands ($CO$, $Cl^-$, $Cp$, phosphines).
  - Dragging a ligand onto the metal center dynamically recalculates and displays the valence electron count. A 3D orbital energy diagram fills with colored electron pairs in real-time, glowing green when exactly 18 electrons are reached.

### Formative Quiz
1. **Question:** What is the electron count of Vaska's complex, $[IrCl(CO)(PPh_3)_2]$? (Iridium is in Group 9).
   - A) 18
   - B) 16
   - C) 14
   - D) 12
   *Answer:* B. *Explanation:* Using the ionic method: $Ir(I)$ ($d^8$ configuration) = $8e^-$. $Cl^-$ = $2e^-$, $CO$ = $2e^-$, two $PPh_3$ ligands = $4e^-$. Total: $8 + 2 + 2 + 4 = 16e^-$.

2. **Question:** How many electrons does a $\mu_2$-carbonyl ligand contribute to the overall electron count of a binuclear complex?
   - A) 1
   - B) 2
   - C) 3
   - D) 4
   *Answer:* B. *Explanation:* A bridging carbonyl ligand donates 2 electrons in total (one electron pair shared between the two metal centers).

### Connections
- **Builds on:** B2 ligand nomenclature.
- **Feeds into:** Carbonyl bonding (B4) and Catalysis mechanisms (B6).

---

## Module B4 – Metal Carbonyl Compounds

### Concept Overview
Metal carbonyl complexes are among the most important compounds in organometallic chemistry. The bonding between carbon monoxide ($CO$) and a transition metal is described by the **synergic bonding mechanism**:

1. **$\sigma$-donation:** The lone pair on the carbon atom of the $CO$ molecule (residing in its HOMO orbital) donates electron density into an empty $d$-orbital of the metal center, forming a $M-C$ $\sigma$-bond.
2. **$\pi$-backbonding:** The metal center, now electron-rich, shifts electron density from its filled $d$-orbitals back into the empty, anti-bonding $\pi^*$ orbital (LUMO) of the $CO$ ligand.

This back-donation has two major consequences:
- It strengthens and shortens the $M-C$ bond.
- It weakens and lengthens the $C-O$ triple bond.

This bond weakening is easily monitored using **Infrared (IR) Spectroscopy**. A free $CO$ molecule has a stretching frequency ($\nu_{CO}$) of $2143\ \text{cm}^{-1}$. When coordinated, $\pi$-backbonding shifts this frequency to lower wavenumbers ($1800 - 2000\ \text{cm}^{-1}$). 

The degree of backbonding is highly sensitive to the overall charge of the complex. Anionic complexes have excess electron density, leading to massive backbonding and extremely low $\nu_{CO}$ values, whereas cationic complexes retain higher frequencies.

Carbonyls can coordinate in three distinct modes:
- **Terminal:** $\nu_{CO} \approx 1850 - 2120\ \text{cm}^{-1}$.
- **$\mu_2$-bridging:** $\nu_{CO} \approx 1750 - 1850\ \text{cm}^{-1}$.
- **$\mu_3$-bridging:** $\nu_{CO} \approx 1620 - 1730\ \text{cm}^{-1}$.

### Worked Examples
**Example 1: Predicting IR Shifts from Complex Charge**
Order the following metal carbonyl complexes in order of increasing $\nu_{CO}$ stretching frequency:
$$ [Fe(CO)_4]^{2-}, \quad [Ni(CO)_4], \quad [Co(CO)_4]^- $$

*Reasoning:*
1. Identify the overall charge: $[Fe(CO)_4]^{2-}$ is dianionic, $[Co(CO)_4]^-$ is monoanionic, and $[Ni(CO)_4]$ is neutral.
2. The more negative the charge on the complex, the more electron-dense the metal center.
3. Increased electron density at the metal leads to greater $\pi$-backbonding into the $\pi^*$ orbital of the $CO$ ligands.
4. Greater backbonding weakens the $C-O$ bond, lowering the IR stretching frequency.
5. Therefore, the order of increasing frequency is:
   $$ [Fe(CO)_4]^{2-} < [Co(CO)_4]^- < [Ni(CO)_4] $$

### Common Misconceptions
- **Misconception:** $\pi$-backbonding only happens in anionic complexes.
  **Correction:** Backbonding occurs in neutral and even some cationic complexes, though its strength is significantly enhanced by negative charges.

### Visual/Animation Description
- **Synergic Bonding Engine:** A 3D orbital overlap diagram.
  - Electrons are animated as flowing streams of light. 
  - The student can slide a "Metal Oxidation State" slider from +2 down to -2. As the charge becomes more negative, the stream of light representing back-bonding into the $\pi^*$ orbital becomes thicker and brighter, and a simulated IR spectrum window shows the $CO$ peak sliding dynamically to the left (lower wavenumbers).

### Formative Quiz
1. **Question:** Free carbon monoxide has a stretching frequency of $2143\ \text{cm}^{-1}$. What stretching frequency would you expect for a cationic carbonyl complex like $[Mn(CO)_6]^+$?
   - A) $1700\ \text{cm}^{-1}$
   - B) $1850\ \text{cm}^{-1}$
   - C) $2090\ \text{cm}^{-1}$
   - D) $2500\ \text{cm}^{-1}$
   *Answer:* C. *Explanation:* Because the complex is cationic, the metal center has less electron density to donate via backbonding. The $C-O$ bond remains very strong, keeping its frequency high (close to free $CO$).

### Connections
- **Builds on:** 18-Electron Rule (B3).
- **Feeds into:** Metallocene stability (B5) and Catalysis (B6).

---

## Module B5 – Metallocenes (Sandwich Compounds)

### Concept Overview
Metallocenes are a classic family of organometallic compounds featuring a **sandwich structure** where a single transition metal atom is situated between two parallel cyclopentadienyl ($Cp$, $C_5H_5^-$) rings.

**Ferrocene ($Fe(\eta^5\text{-}C_5H_5)_2$)** is the parent and most stable metallocene. It has exactly 18 valence electrons. Because the $Cp^-$ ring possesses $6\pi$ electrons, it is highly aromatic. Consequently, Ferrocene undergoes classic electrophilic aromatic substitution (EAS) reactions (like Friedel-Crafts acylation) rather than direct addition.

When the metal center is changed, we obtain metallocenes with different electron counts:
- **Cobaltocene ($Co(\eta^5\text{-}C_5H_5)_2$):** 19-electron complex. The 19th electron must reside in a high-energy metal-ligand anti-bonding orbital, making Cobaltocene a powerful reducing agent that is easily oxidized to the highly stable, 18-electron cobaltocenium cation ($[Co(Cp)_2]^+$).
- **Nickelocene ($Ni(\eta^5\text{-}C_5H_5)_2$):** 20-electron complex. With two electrons occupying anti-bonding orbitals, it is highly reactive and chemically unstable.

### Worked Examples
**Example 1: Comparative Reactivity of Metallocenes**
Explain why Cobaltocene rapidly reacts with air to form $[Co(Cp)_2]^+$, while Ferrocene is completely air-stable.

*Reasoning:*
- Ferrocene is an 18-electron complex, possessing a closed-shell configuration with all bonding orbitals filled and anti-bonding orbitals empty. It is thermodynamically and kinetically highly stable.
- Cobaltocene is a 19-electron complex. The extra electron occupies a high-energy anti-bonding orbital. Losing this electron via oxidation to form $[Co(Cp)_2]^+$ allows it to achieve a highly stable 18-electron configuration. Thus, it acts as a powerful reducing agent and reacts rapidly with atmospheric oxygen.

### Common Misconceptions
- **Misconception:** Cyclopentadienyl only coordinates in a pentahapto ($\eta^5$) sandwich mode.
  **Correction:** Cp can coordinate in monohapto ($\eta^1$) or trihapto ($\eta^3$) modes depending on the steric and electronic requirements of the metal center.

### Visual/Animation Description
- **3D Sandwich Viewer:** Rotatable 3D metallocene model.
  - Interactive dropdown: Select Metal (Fe, Co, Ni).
  - Selecting different metals dynamically highlights which orbitals are populated. When Co or Ni are selected, the anti-bonding levels glow red, and the cyclopentadienyl rings physically push further away from the metal center to represent the bond lengthening caused by anti-bonding orbital occupancy.

### Formative Quiz
1. **Question:** Which metallocene is a highly potent 1-electron reducing agent?
   - A) Ferrocene.
   - B) Cobaltocene.
   - C) Chromocene.
   *Answer:* B. *Explanation:* With a 19-electron count, Cobaltocene readily loses an electron to reach the stable 18-electron cobaltocenium ion.

### Connections
- **Builds on:** B2 nomenclature and B3 electron counting.
- **Feeds into:** Catalytic oxidation-reduction loops.

---

## Module B6 – Organometallics as Catalysts and Key Reaction Types

### Concept Overview
Organometallic compounds are widely utilized as homogeneous catalysts in industrial processes. Their catalytic power relies on the metal's ability to cycle through key reaction steps, changing its coordination number and oxidation state.

#### The Four Key Reaction Types:
1. **Ligand Substitution:**
   Exchange of a spectator or reactant ligand, typically following an associative pathway for 16-electron complexes or dissociative for 18-electron complexes.
2. **Oxidative Addition (OA):**
   A reaction where a metal center inserts into a covalent bond ($A-B$).
   - The metal's oxidation state increases by **+2**.
   - The metal's coordination number increases by **+2**.
   - Requires a highly electron-rich metal center with a starting count of 16 electrons or less.
3. **Reductive Elimination (RE):**
   The microscopic reverse of oxidative addition. Two cis ligands couple together and depart the metal center.
   - The metal's oxidation state decreases by **-2**.
   - The metal's coordination number decreases by **-2**.
   - Favored by electron-poor metal centers and sterically crowded geometries.
4. **Migratory Insertion:**
   An unsaturated ligand (like $CO$ or an alkene) inserts into an adjacent $M$-alkyl or $M$-hydride bond, generating a vacant coordination site.

#### Model System: Wilkinson's Catalyst
Wilkinson's catalyst, $[RhCl(PPh_3)_3]$, is a 16-electron complex used for the homogeneous **hydrogenation of alkenes**. Its catalytic cycle involves a series of these steps:
1. Dissociation of a phosphine ligand to open a coordination site.
2. **Oxidative Addition** of $H_2$ to form a 6-coordinate $Rh(III)$ dihydride.
3. Coordination of the alkene.
4. **Migratory Insertion** of the hydride into the alkene to form an alkyl group.
5. **Reductive Elimination** of the alkyl and remaining hydride to release the hydrogenated alkane and regenerate the active catalyst.

### Worked Examples
**Example 1: Identifying Reaction Steps**
Classify this sequence: $[IrCl(CO)(PPh_3)_2] + H_2 \rightarrow [Ir(H)_2Cl(CO)(PPh_3)_2]$
*Reasoning:*
- Reactant: $Ir(I)$ ($16e^-$, coordination number 4).
- Product: $Ir(III)$ ($18e^-$, coordination number 6).
- The metal oxidation state increased by 2, and the coordination number increased by 2. This is an **Oxidative Addition**.

### Common Misconceptions
- **Misconception:** Oxidative addition can occur at any metal center.
  **Correction:** Oxidative addition requires the metal to have a stable oxidation state $+2$ units higher than its current state, and sufficient space to accommodate two new ligands. Thus, 18-electron complexes must lose a ligand first.

### Visual/Animation Description
- **Wilkinson Catalytic Cycle Loop:** An interactive circular flowchart.
  - The student can click a "Step Forward" button to progress through the 6 distinct steps of the hydrogenation cycle.
  - At each step, the molecule's structural rendering updates, and a floating HUD panel tracks the Metal Oxidation State and the Valence Electron Count (showing the 16e $\rightarrow$ 18e $\rightarrow$ 16e transitions).

### Formative Quiz
1. **Question:** What happens to the oxidation state of the metal during a reductive elimination step?
   - A) It increases by 2.
   - B) It decreases by 2.
   - C) It remains unchanged.
   - D) It drops to zero.
   *Answer:* B. *Explanation:* Reductive elimination is the reverse of oxidative addition, reducing the oxidation state by 2.

### Connections
- **Builds on:** Entire Block B organometallic principles.
- **Feeds into:** Advanced industrial chemical engineering design.

---

# SUPPLEMENTARY: Latihan 1 – 17 Solutions

This section contains the highly rigorous, step-by-step analytical solutions to all 17 exercises from the KI 3231 course slides, designed as a comprehensive companion to the interactive simulator modules (A1-B6).

---

### Latihan A2-01: Lability Prediction of High-Spin and Low-Spin Systems
#### The Problem
Predict whether the following complexes are kinetically labile or inert based on their $d$-electron configurations and crystal field stabilization energies:
1. $[Co(NH_3)_6]^{3+}$ (Low-spin $d^6$)
2. $[Fe(OH_2)_6]^{2+}$ (High-spin $d^6$)
3. $[Cr(OH_2)_6]^{3+}$ ($d^3$)

#### Step-by-Step Solution
##### 1. $[Co(NH_3)_6]^{3+}$ (Low-spin $d^6$)
- **Ground State Configuration ($O_h$):** Ammonia ($NH_3$) is a strong-field ligand for $Co(III)$. The 6 valence $d$-electrons fully occupy the lower $t_{2g}$ orbitals: $t_{2g}^6 e_g^0$.
- **Ground State LFSE:**
  $$\text{LFSE}_{O_h} = [6 \times (-0.4)]\Delta_o + 2P = -2.4\Delta_o + 2P$$
- **Transition State Configuration ($SP$):** During dissociation, one ligand leaves. The $d$-orbital splitting changes to square pyramidal ($C_{4v}$). Placing 6 electrons in the lowest square pyramidal orbitals:
  $$\text{LFSE}_{SP} = [4 \times (-0.457) + 2 \times (-0.086)]\Delta_o + 2P = -2.0\Delta_o + 2P$$
- **Stabilization Energy Loss ($\Delta \text{LFSE}$):**
  $$\Delta \text{LFSE} = \text{LFSE}_{SP} - \text{LFSE}_{O_h} = (-2.0\Delta_o) - (-2.4\Delta_o) = +0.4\Delta_o$$
- **Conclusion:** A loss of $+0.4\Delta_o$ represents a massive kinetic barrier. Therefore, $[Co(NH_3)_6]^{3+}$ is highly **inert**.

##### 2. $[Fe(OH_2)_6]^{2+}$ (High-spin $d^6$)
- **Ground State Configuration ($O_h$):** Water ($H_2O$) is a weak-field ligand. The 6 electrons distribute to maintain high spin: $t_{2g}^4 e_g^2$.
- **Ground State LFSE:**
  $$\text{LFSE}_{O_h} = [4 \times (-0.4) + 2 \times (+0.6)]\Delta_o + 0P = -0.4\Delta_o$$
- **Transition State Configuration ($SP$):** Populating the square pyramidal levels under high-spin conditions:
  $$\text{LFSE}_{SP} = (-1.371 - 0.086 + 0.086 + 0.914)\Delta_o = -0.457\Delta_o$$
- **Stabilization Energy Change:**
  $$\Delta \text{LFSE} = (-0.457\Delta_o) - (-0.400\Delta_o) = -0.057\Delta_o$$
- **Conclusion:** The change in stabilization energy is practically zero. Hence, $[Fe(OH_2)_6]^{2+}$ is highly **labile**.

##### 3. $[Cr(OH_2)_6]^{3+}$ ($d^3$)
- **Ground State Configuration ($O_h$):** $t_{2g}^3 e_g^0$.
- **Ground State LFSE:**
  $$\text{LFSE}_{O_h} = [3 \times (-0.4)]\Delta_o = -1.2\Delta_o$$
- **Transition State Configuration ($SP$):** Populating the 3 electrons in $SP$ levels:
  $$\text{LFSE}_{SP} = [3 \times (-0.457)]\Delta_o = -1.371\Delta_o$$
- **Conclusion:** Octahedral $d^3$ complexes lose substantial crystal field stabilization upon any deformation of their symmetric geometry. This makes $[Cr(OH_2)_6]^{3+}$ highly **inert**.

---

### Latihan A3-03: Energy Profile Sketching for Mechanisms
#### The Problem
Sketch the reaction energy profiles ($\text{Potential Energy}$ vs. $\text{Reaction Coordinate}$) and write the complete step-by-step mechanisms and overall rate laws for:
1. A pure **Dissociative (D)** substitution pathway.
2. A pure **Associative (A)** substitution pathway.

#### Step-by-Step Solution

##### 1. Dissociative (D) Mechanism
- **Step 1: Dissociation of the leaving group (Slow, Rate-determining step):**
  $$ML_5X \xrightarrow{k_1} ML_5 + X$$
- **Step 2: Coordination of the entering ligand (Fast):**
  $$ML_5 + Y \xrightarrow{k_2} ML_5Y$$
- **Energy Profile Description:**
  - The profile starts with the reactants $ML_5X + Y$ at a stable ground state energy.
  - The system climbs a large energy barrier to **Transition State 1 (TS1)**, where the $M-X$ bond is highly stretched.
  - The curve drops into a distinct **local energy minimum (intermediate valley)** representing the 5-coordinate intermediate, $ML_5$.
  - The system then climbs a minor energy barrier **Transition State 2 (TS2)** as the entering ligand $Y$ coordinates, before falling to the final product state $ML_5Y + X$.
- **Rate Law Derivation:**
  Since Step 1 is the bottleneck:
  $$\text{Rate} = k_1 [ML_5X]$$

##### 2. Associative (A) Mechanism
- **Step 1: Attack of the entering ligand (Slow, Rate-determining step):**
  $$ML_5X + Y \xrightarrow{k_1} ML_5XY$$
- **Step 2: Departure of the leaving group (Fast):**
  $$ML_5XY \xrightarrow{k_2} ML_5Y + X$$
- **Energy Profile Description:**
  - The curve starts at the reactants $ML_5X + Y$.
  - It climbs to **Transition State 1 (TS1)**, where the entering ligand $Y$ is partially bonded.
  - It drops into a **local energy minimum (intermediate valley)** representing the 7-coordinate intermediate, $ML_5XY$.
  - It then climbs the second peak **Transition State 2 (TS2)** as the $M-X$ bond breaks, before dropping to the thermodynamic products $ML_5Y + X$.
- **Rate Law Derivation:**
  Since the rate-determining step involves both the complex and the entering ligand:
  $$\text{Rate} = k_1 [ML_5X][Y]$$

---

### Latihan A4-04: Eyring Equation and Activation Volumes
#### The Problem
The substitution reaction:
$$[Co(NH_3)_5(H_2O)]^{3+} + X^- \rightarrow [Co(NH_3)_5X]^{2+} + H_2O$$
was studied as a function of temperature and pressure.
1. The rate constant $k$ at $25^\circ\text{C}$ is $1.2 \times 10^{-6}\ \text{M}^{-1}\text{s}^{-1}$. At $40^\circ\text{C}$, the rate constant is $2.1 \times 10^{-5}\ \text{M}^{-1}\text{s}^{-1}$. Calculate $\Delta H^\ddagger$ and $\Delta S^\ddagger$ using the linearized Eyring equation.
2. Under high pressure, the volume of activation $\Delta V^\ddagger$ was measured to be $+1.2\ \text{cm}^3/\text{mol}$. Conclude the mechanism.

#### Step-by-Step Solution
##### Part 1: Calculating Activation Parameters ($\Delta H^\ddagger$ and $\Delta S^\ddagger$)
- **Data Points:**
  - $T_1 = 298.15\ \text{K}$ (at $25^\circ\text{C}$), $k_1 = 1.2 \times 10^{-6}\ \text{s}^{-1}$
  - $T_2 = 313.15\ \text{K}$ (at $40^\circ\text{C}$), $k_2 = 2.1 \times 10^{-5}\ \text{s}^{-1}$
- **Linearized Eyring Equation:**
  $$\ln\left(\frac{k}{T}\right) = -\frac{\Delta H^\ddagger}{R} \cdot \frac{1}{T} + \ln\left(\frac{k_B}{h}\right) + \frac{\Delta S^\ddagger}{R}$$
- Calculate $\ln(k_1/T_1)$ and $\ln(k_2/T_2)$:
  $$\ln\left(\frac{1.2 \times 10^{-6}}{298.15}\right) = -19.330$$
  $$\ln\left(\frac{2.1 \times 10^{-5}}{313.15}\right) = -16.519$$
- Let $y = \ln(k/T)$ and $x = 1/T$:
  - $x_1 = 1/298.15 = 3.354 \times 10^{-3}\ \text{K}^{-1}$
  - $x_2 = 1/313.15 = 3.193 \times 10^{-3}\ \text{K}^{-1}$
- **Calculate Slope ($m$):**
  $$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{-16.519 - (-19.330)}{(3.193 - 3.354) \times 10^{-3}} = -17,460\ \text{K}$$
- **Calculate Enthalpy of Activation ($\Delta H^\ddagger$):**
  $$\text{Slope} = -\frac{\Delta H^\ddagger}{R} \implies \Delta H^\ddagger = 17,460 \times 8.314 \approx 145,160\ \text{J/mol} = \mathbf{145.2\ \text{kJ/mol}}$$
- **Calculate Entropy of Activation ($\Delta S^\ddagger$):**
  Use one data point to find the y-intercept ($C$):
  $$y_1 = m x_1 + C \implies -19.330 = (-17,460 \times 3.354 \times 10^{-3}) + C \implies C = 39.231$$
  Since $C = \ln(k_B/h) + \Delta S^\ddagger/R$, and $\ln(k_B/h) \approx 23.760$:
  $$39.231 = 23.760 + \frac{\Delta S^\ddagger}{R} \implies \frac{\Delta S^\ddagger}{R} = 15.471$$
  $$\Delta S^\ddagger = 15.471 \times 8.314 = \mathbf{+128.6\ \text{J/mol}\cdot\text{K}}$$

##### Part 2: Concluding the Mechanism
- The activation volume $\Delta V^\ddagger$ is positive ($+1.2\ \text{cm}^3/\text{mol}$).
- A positive value means the transition state has a larger partial molar volume than the starting reactants, indicating an expansion.
- This positive expansion, combined with the large positive entropy of activation ($\Delta S^\ddagger = +128.6\ \text{J/mol}\cdot\text{K}$), provides conclusive evidence for a **Dissociative (D)** or **Interchange-dissociative ($I_d$)** pathway.

---

### Latihan A5-05 & 06: Trans Effect Synthesis Design
#### The Problem
Design a step-by-step synthetic route to prepare both ***cis* and *trans*-[PtBrCl(NH_3)(py)]** starting from the tetrabromoplatinate(II) anion, $[PtBr_4]^{2-}$. Use the trans-directing power series to guide your sequence:
$$\text{Trans effect series: } Br^- > Cl^- > py > NH_3$$

#### Step-by-Step Solution

##### 1. Synthesis of *cis*-[PtBrCl(NH_3)(py)]
- **Step 1: Introduction of chloride**
  Add one equivalent of $Cl^-$ to the starting $[PtBr_4]^{2-}$ complex:
  $$[PtBr_4]^{2-} + Cl^- \rightarrow [PtBr_3Cl]^{2-} + Br^-$$
- **Step 2: Introduction of ammonia**
  Add one equivalent of $NH_3$. We compare the trans-directing power of the spectator ligands in $[PtBr_3Cl]^{2-}$:
  - The $Br^-$ ligands have a stronger trans effect than $Cl^-$ ($Br^- > Cl^-$).
  - The ligand *trans* to a $Br^-$ will be replaced. 
  - There is a $Br^-$ *trans* to another $Br^-$, and a $Br^-$ *trans* to a $Cl^-$. Because $Br^-$ directing power beats $Cl^-$, the $Br^-$ *trans* to $Br^-$ is preferentially substituted over the $Cl^-$ *trans* to $Br^-$.
  - This selective substitution places the incoming $NH_3$ ***cis*** to the $Cl^-$, yielding:
    $$[PtBr_2Cl(NH_3)]^-$$
- **Step 3: Introduction of pyridine**
  Add one equivalent of $py$. The current complex is $[PtBr_2Cl(NH_3)]^-$. 
  - We have a $Br^-$ *trans* to $Cl^-$, and a $Br^-$ *trans* to $NH_3$.
  - Comparing directing forces: $Br^-$ and $Cl$ are much stronger trans directors than $NH_3$.
  - The $Br^-$ *trans* to the $NH_3$ is labilized because the $Br^-$ ligand opposite to it is a stronger director than $NH_3$. This selective substitution yields:
    $$\mathbf{cis\text{-}[PtBrCl(NH_3)(py)]}$$

##### 2. Synthesis of *trans*-[PtBrCl(NH_3)(py)]
- **Step 1: Introduction of pyridine**
  Start with $[PtBr_4]^{2-}$ and add one equivalent of $py$:
  $$[PtBr_4]^{2-} + py \rightarrow [PtBr_3(py)]^- + Br^-$$
- **Step 2: Introduction of ammonia**
  Add one equivalent of $NH_3$. 
  - In $[PtBr_3(py)]^-$, we have $Br^-$ *trans* to $Br^-$, and $Br^-$ *trans* to $py$.
  - Since $Br^-$ is a stronger trans-director than $py$ ($Br^- > py$), the $Br^-$ *trans* to $Br^-$ is substituted.
  - This places the incoming $NH_3$ ***trans*** to the first $Br^-$ (which puts it *cis* to the $py$), giving:
    $$[PtBr_2(NH_3)(py)]$$ (where the two $Br^-$ are *trans* to each other).
- **Step 3: Introduction of chloride**
  Add one equivalent of $Cl^-$.
  - In $[PtBr_2(NH_3)(py)]$, the two $Br^-$ ligands are *trans* to one another. Their mutual strong trans effect labilizes both.
  - An incoming $Cl^-$ will displace one of these $Br^-$ ligands.
  - This leaves the $NH_3$ and $py$ unchanged in their relative *cis* positions, while the new $Cl^-$ is placed *trans* to the remaining $Br^-$. The resulting complex is:
    $$\mathbf{trans\text{-}[PtBrCl(NH_3)(py)]}$$

---

### Latihan A6-07 to A6-11: Octahedral Factors and Base Hydrolysis
#### The Problem
Solve the following exercises covering octahedral substitution mechanisms:
1. **Latihan A6-07 (Leaving Group Effect):** Compare the rate of substitution of $[Co(NH_3)_5X]^{2+}$ by water when $X = F^-, Cl^-, Br^-, I^-$. Explain the trend.
2. **Latihan A6-08 (Spectator Ligand Effect):** Why does substituting $NH_3$ spectators for water spectators in $[Co(L)_5Cl]^{2+}$ increase the rate of aquation?
3. **Latihan A6-09 (Steric Acceleration):** Explain why $[Co(NH_2Me)_5Cl]^{2+}$ undergoes substitution significantly faster than $[Co(NH_3)_5Cl]^{2+}$.
4. **Latihan A6-10 (Charge Influence):** Why does $[Co(NH_3)_5Cl]^{2+}$ react much slower than $[Co(NH_3)_4(H_2O)Cl]^{2+}$?
5. **Latihan A6-11 (Base Hydrolysis Mechanism & Rate Law):** Write the step-by-step mechanism and derive the rate law for the base hydrolysis of $[Co(NH_3)_5Cl]^{2+}$ in the presence of $OH^-$.

#### Step-by-Step Solution

##### 1. Latihan A6-07: Leaving Group Effect
- **Rate Trend:** The rate of aquation follows the order:
  $$[Co(NH_3)_5F]^{2+} \ll [Co(NH_3)_5Cl]^{2+} < [Co(NH_3)_5Br]^{2+} < [Co(NH_3)_5I]^{2+}$$
- **Explanation:** 
  - This reaction proceeds via a dissociative-type mechanism ($I_d$). The rate-determining step is dominated by the breaking of the $Co-X$ bond.
  - The bond strength of $Co-X$ decreases down the halogen group: $Co-F > Co-Cl > Co-Br > Co-I$.
  - Because $I^-$ forms the weakest bond to $Co(III)$, it is the best leaving group and departs fastest.

##### 2. Latihan A6-08: Spectator Ligand Effect
- **Observation:** Replacing $NH_3$ with $H_2O$ spectators in the complex increases the rate of substitution.
- **Explanation:**
  - Ammonia ($NH_3$) is a stronger $\sigma$-donor than water ($H_2O$). 
  - Stronger $\sigma$-donors increase the electron density at the metal center, which stabilizes the higher-coordination ground state relative to the lower-coordination transition state.
  - Alternatively, because $H_2O$ is a weaker ligand, it exerts less stabilization on the starting complex, reducing the energy barrier required for the leaving group to dissociate.

##### 3. Latihan A6-09: Steric Acceleration
- **Observation:** $[Co(NH_2Me)_5Cl]^{2+}$ is far more reactive than $[Co(NH_3)_5Cl]^{2+}$.
- **Explanation:**
  - Methylamine ($NH_2Me$) is much bulkier than ammonia ($NH_3$) due to the methyl group.
  - In a 6-coordinate octahedral complex, these bulky spectator ligands crowd the metal center, creating steric strain.
  - When the leaving group ($Cl^-$) dissociates to form a 5-coordinate intermediate, this crowding is relieved (steric relief).
  - This steric relief lowers the activation energy for dissociation, driving **Steric Acceleration**.

##### 4. Latihan A6-10: Charge Influence
- **Observation:** The divalent complex $[Co(NH_3)_5Cl]^{2+}$ reacts significantly slower than the trivalent aqua complex.
- **Explanation:**
  - The electrostatic attraction between the metal center and the anionic leaving group ($Cl^-$) is highly sensitive to the overall positive charge of the complex.
  - Higher positive charge on the reactant strengthens the metal-ligand electrostatic attraction.
  - In a dissociative mechanism, breaking the bond of an anionic leaving group away from a highly positive center is energetically difficult, resulting in a much slower rate.

##### 5. Latihan A6-11: Base Hydrolysis ($S_N1cb$)
- **Step 1: Proton Transfer (Fast equilibrium, $K$)**
  The hydroxide ion acts as a Brønsted base, deprotonating an acidic amine ligand to create a conjugate base:
  $$[Co(NH_3)_5Cl]^{2+} + OH^- \overset{K}{\rightleftharpoons} [Co(NH_3)_4(NH_2)Cl]^+ + H_2O$$
- **Step 2: Dissociation of the Leaving Group (Slow, Rate-determining step, $k$)**
  The conjugate base dissociates to form a 5-coordinate intermediate. The amide ($NH_2^-$) group is a powerful $\pi$-donor, which pushes electron density to help eject the leaving group ($Cl^-$):
  $$[Co(NH_3)_4(NH_2)Cl]^+ \xrightarrow{k} [Co(NH_3)_4(NH_2)]^{2+} + Cl^-$$
- **Step 3: Coordination of Water (Fast)**
  Water coordinates to the highly reactive intermediate, returning the amide ligand to amine:
  $$[Co(NH_3)_4(NH_2)]^{2+} + H_2O \xrightarrow{\text{fast}} [Co(NH_3)_5(OH)]^{2+}$$
- **Rate Law Derivation:**
  - The rate is determined by the slow step:
    $$\text{Rate} = k [[Co(NH_3)_4(NH_2)Cl]^+]$$
  - From the fast equilibrium step:
    $$K = \frac{[[Co(NH_3)_4(NH_2)Cl]^+]}{[[Co(NH_3)_5(Cl)]^{2+}][OH^-]} \implies [[Co(NH_3)_4(NH_2)Cl]^+] = K [[Co(NH_3)_5(Cl)]^{2+}][OH^-]$$
  - Substituting this back into the rate expression:
    $$\text{Rate} = k K [[Co(NH_3)_5(Cl)]^{2+}][OH^-] = k_{obs} [[Co(NH_3)_5(Cl)]^{2+}][OH^-]$$
  - This derivation explains why the reaction rate depends on the concentration of $[OH^-]$ even though the rate-determining step is strictly dissociative.

---

### Latihan A7-12 to A7-17: Electron Transfer and Marcus Theory
#### The Problem
Solve the following exercises covering redox pathways and Marcus theory:
1. **Latihan A7-12 & A7-13 (Inner-Sphere Stages):** Write the three detailed mechanistic stages for the inner-sphere electron transfer between $[Co(NH_3)_5Cl]^{2+}$ and $[Cr(H_2O)_6]^{2+}$. Label the oxidation states and explain which bonds break and form.
2. **Latihan A7-14 & A7-15 (Mechanism Identification):** Classify the following as Inner-Sphere or Outer-Sphere:
   - Reaction A: $[Co(NH_3)_6]^{3+} + [Ru(NH_3)_6]^{2+} \rightarrow [Co(NH_3)_6]^{2+} + [Ru(NH_3)_6]^{3+}$
   - Reaction B: $[Co(NH_3)_5(N_3)]^{2+} + [Cr(H_2O)_6]^{2+} \rightarrow [Cr(H_2O)_5(N_3)]^{2+} + Co^{2+} + 5NH_4^+$
3. **Latihan A7-16 & A7-17 (Marcus Cross-Relation):** The self-exchange rate constants for $[Ru(NH_3)_6]^{3+/2+}$ and $[Fe(H_2O)_6]^{3+/2+}$ are $9.5 \times 10^3\ M^{-1}s^{-1}$ and $4.0\ M^{-1}s^{-1}$, respectively. The equilibrium constant $K_{12}$ for the cross-reaction is $2.0 \times 10^5$. Calculate the theoretical cross-reaction rate constant ($k_{12}$) assuming $f_{12} = 1.0$.

#### Step-by-Step Solution

##### 1. Latihan A7-12 & A7-13: Inner-Sphere Stages
- **Reactants:** $[Co^{III}(NH_3)_5Cl]^{2+}$ (inert, $d^6$ low-spin) and $[Cr^{II}(H_2O)_6]^{2+}$ (labile, $d^4$ high-spin).
- **Stage 1: Precursor Complex Formation (Bridging)**
  The labile $Cr(II)$ complex loses a water molecule, allowing the chloride ligand on the inert $Co(III)$ complex to coordinate to both metals, forming a binuclear bridge:
  $$[Co^{III}(NH_3)_5Cl]^{2+} + [Cr^{II}(H_2O)_6]^{2+} \rightleftharpoons [(NH_3)_5Co^{III}-Cl-Cr^{II}(H_2O)_5]^{4+} + H_2O$$
- **Stage 2: Electron Transfer (Within the Bridge)**
  An electron travels through the chloride bridge from the electron-rich $Cr(II)$ ($d^4$) to the $Co(III)$ ($d^6$), changing their oxidation states:
  $$[(NH_3)_5Co^{III}-Cl-Cr^{II}(H_2O)_5]^{4+} \rightarrow [(NH_3)_5Co^{II}-Cl-Cr^{III}(H_2O)_5]^{4+}$$
- **Stage 3: Successor Complex Fission (Cleavage)**
  - The bridge breaks. The $Co(II)$ center is now a $d^7$ high-spin ion, which is highly labile. The $Cr(III)$ center is now a $d^3$ ion, which is kinetically inert.
  - Because $Cr(III)$ is inert, it keeps the chloride ligand. The labile $Co(II)$ complex rapidly loses its ammonia ligands to water in the acidic medium:
  $$[(NH_3)_5Co^{II}-Cl-Cr^{III}(H_2O)_5]^{4+} + H_2O \rightarrow [Co(H_2O)_6]^{2+} + [Cr^{III}(H_2O)_5Cl]^{2+} + 5NH_4^+$$

##### 2. Latihan A7-14 & A7-15: Mechanism Identification
- **Reaction A:** $[Co(NH_3)_6]^{3+} + [Ru(NH_3)_6]^{2+} \rightarrow [Co(NH_3)_6]^{2+} + [Ru(NH_3)_6]^{3+}$
  - **Classification: Outer-Sphere**
  - **Reasoning:** Neither reactant has a ligand that can act as a bridge. Ammonia ($NH_3$) has no lone pairs available to bind to a second metal center once coordinated. Therefore, the electron must tunnel through space without a covalent bridge.
- **Reaction B:** $[Co(NH_3)_5(N_3)]^{2+} + [Cr(H_2O)_6]^{2+} \rightarrow [Cr(H_2O)_5(N_3)]^{2+} + Co^{2+} + 5NH_4^+$
  - **Classification: Inner-Sphere**
  - **Reasoning:** The azide ligand ($N_3^-$) is an excellent bridging ligand with free lone pairs on both ends. The transfer of the azide ligand to the chromium product is direct chemical proof that an inner-sphere bridged intermediate was formed.

##### 3. Latihan A7-16 & A7-17: Marcus Cross-Relation Calculation
- **Given Parameters:**
  - $k_{11} = 9.5 \times 10^3\ M^{-1}s^{-1}$ (Ru self-exchange)
  - $k_{22} = 4.0\ M^{-1}s^{-1}$ (Fe self-exchange)
  - $K_{12} = 2.0 \times 10^5$ (Cross equilibrium constant)
  - $f_{12} = 1.0$ (Assumed)
- **Marcus Equation:**
  $$k_{12} = (k_{11} \cdot k_{22} \cdot K_{12} \cdot f_{12})^{1/2}$$
- **Substitution:**
  $$k_{12} = (9.5 \times 10^3 \times 4.0 \times 2.0 \times 10^5 \times 1.0)^{1/2} = (7.6 \times 10^9)^{1/2}$$
  $$k_{12} \approx 87,178\ M^{-1}s^{-1} = \mathbf{8.7 \times 10^4\ M^{-1}s^{-1}}$$
- **Conclusion:** The calculated rate constant of $8.7 \times 10^4\ M^{-1}s^{-1}$ matches experimental measurements, confirming that this cross-reaction follows an outer-sphere electron transfer mechanism.

---

## GLOSSARY
- **Activation Energy ($E_a$):** The minimum energy required for a chemical reaction to occur.
- **Activation Entropy ($\Delta S^\ddagger$):** A measure of the change in disorder when moving from reactants to the transition state; negative values suggest an associative process.
- **Activation Volume ($\Delta V^\ddagger$):** The change in volume between reactants and transition state; measured via pressure dependence of the rate.
- **Back-bonding:** A bonding mode where electron density shifts from a metal $d$-orbital into the $\pi^*$ anti-bonding orbital of a ligand like $CO$.
- **Bridging Ligand ($\mu$):** A ligand that coordinates to two or more metal centers simultaneously, forming a bridge.
- **CFSE (Crystal Field Stabilization Energy):** The energy gain resulting from the splitting of $d$-orbitals in a coordination complex.
- **Conjugate Base Mechanism ($S_N1cb$):** A substitution pathway triggered by the deprotonation of a ligand by a strong base ($OH^-$).
- **Eyring Equation:** A theoretical equation relating reaction rate to temperature and activation parameters ($\Delta H^\ddagger, \Delta S^\ddagger$).
- **Hapticity ($\eta$):** The number of contiguous atoms of a ligand that are coordinated to the metal center.
- **Inert Complex:** A complex that undergoes ligand substitution very slowly ($t_{1/2} > 1$ min).
- **Labile Complex:** A complex that undergoes ligand substitution rapidly ($t_{1/2} < 1$ min).
- **Marcus-Hush Theory:** A theory describing the rates of electron transfer reactions, particularly outer-sphere pathways.
- **Oxidative Addition:** A reaction where a metal center inserts into a covalent bond, increasing its oxidation state and coordination number by 2.
- **Pyrophoric:** A substance that ignites spontaneously upon contact with air.
- **Reductive Elimination:** The reverse of oxidative addition; two ligands couple and leave the metal, reducing its oxidation state and coordination number by 2.
- **Trans Effect:** The kinetic ability of a ligand to direct substitution to the position *trans* to itself.
- **Zeise’s Salt:** The first synthesized organometallic complex, $K[PtCl_3(\eta^2\text{-}C_2H_4)]$.

---

## HINT SYSTEM (For Interactive UI)
### Latihan 1 – 2 (Lability)
- **Hint 1:** Check the oxidation state and identify the $d$-electron count for the metal ion.
- **Hint 2:** Calculate the CFSE for the octahedral ground state. Is there a high penalty (large loss) if a ligand leaves?

### Latihan 4 (Eyring Plot)
- **Hint 1:** Plot $\ln(k/T)$ on the y-axis against $1/T$ on the x-axis. The slope is $-\Delta H^\ddagger/R$.
- **Hint 2:** For the entropy, remember that the intercept equals $\ln(k_B/h) + \Delta S^\ddagger/R$.

### Latihan 5 – 6 (Trans Effect Synthesis)
- **Hint 1:** Look at the "Trans Effect Series." Which ligand is the strongest "director"? $Br^-$ or $NH_3$?
- **Hint 2:** In $[PtBr_3Cl]^{2-}$, substitution will happen at the site *trans* to the stronger director.

### Latihan 11 (Fe-III in Acid)
- **Hint 1:** Consider the equilibrium between $[Fe(H_2O)_6]^{3+}$ and its deprotonated form $[Fe(H_2O)_5(OH)]^{2+}$.
- **Hint 2:** The $OH^-$ ligand is a strong $\pi$-donor. How does $\pi$-donation affect the rate of a dissociative ($D$) mechanism?

### Latihan 16 – 17 (Marcus-Hush)
- **Hint 1:** Identify the self-exchange rate constants ($k_{11}$ and $k_{22}$) and the overall equilibrium constant ($K_{12}$).
- **Hint 2:** Plug the values into $k_{12} = \sqrt{k_{11} \cdot k_{22} \cdot K_{12} \cdot f_{12}}$. Ensure your units for $M^{-1}s^{-1}$ are consistent.
