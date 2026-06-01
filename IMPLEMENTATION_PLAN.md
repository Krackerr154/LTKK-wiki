# LTKK-wiki Implementation Plan
**Project:** Interactive Chemistry Education Platform for KI 3231  
**Target:** Transition Metals & Complex Chemistry (full course — Parts 1, 2, 3)  
**Created:** 2026-05-28  
**Deployment:** NAT VPS (Port 3009)

---

## Overview
This plan breaks down the LTKK-wiki project into **bite-sized, testable phases** designed for AI agent execution without context overflow. Each phase has clear entry/exit criteria and verification steps.

The course is organized into **three parts** (see `KI_3231_Curriculum_new.md`):
- **Part 1 — Coordination Chemistry, Bonding Theories & Electronic Spectroscopy** (Modules 1.1–1.9). *Planned.*
- **Part 2 — Descriptive Inorganic Chemistry of Transition Metals** (Modules 2.1–2.5). *Planned.*
- **Part 3 — Reaction Mechanisms & Organometallic Chemistry** (Blocks A & B, 13 modules). **✅ Done** (Phases 0–17).

> **Routing note:** The site now opens on a **part selector** (`/`) → each part has an index at `/parts/[partId]` → articles live at `/modules/[id]`. Part 3 articles use ids `a1–a7`, `b1–b6`. Part 1 modules are reserved ids `c1–c9`; Part 2 modules are reserved ids `d1–d5` (already declared in `lib/modules.ts` with `available: false`). Flipping `available: true` after building a module page exposes it in search and the part index.

---

## Stage 1 — Foundation & Landing Page (Phases 0-1) ✅ COMPLETE

## Phase 0: Foundation & Infrastructure Setup
**Goal:** Establish the Next.js project skeleton and deployment pipeline.

### Checklist
- [x] **0.1** Initialize Next.js 14+ project with TypeScript
  - Test: `npm run dev` starts without errors
  - Test: Navigate to `http://localhost:3000` shows default Next.js page
  
- [x] **0.2** Install core dependencies
  - `recharts` or `d3` (for graphs)
  - `katex` or `mathjax` (for LaTeX rendering)
  - `framer-motion` (for animations)
  - Test: `npm install` completes, `package.json` has all deps
  
- [x] **0.3** Create project structure
  ```
  /app
    /modules
      /block-a
      /block-b
    /components
      /interactive
      /ui
    /lib
  /public
    /assets
  ```
  - Test: All directories exist, `tree` command shows structure
  
- [x] **0.4** Create Dockerfile
  - Multi-stage build (build -> production)
  - Expose port 3000
  - Test: `docker build -t ltkk-wiki .` succeeds
  - Test: `docker run -p 3000:3000 ltkk-wiki` serves the app
  
- [x] **0.5** Create docker-compose.yml
  - Map `0.0.0.0:3009->3000/tcp`
  - Test: `docker-compose up` starts container
  - Test: `curl http://localhost:3009` returns HTML
  
- [x] **0.6** Create infra.md deployment guide
  - NAT VPS deployment steps
  - Nginx Proxy Manager configuration
  - Test: Document is readable and complete

**Exit Criteria:** Docker container runs locally on port 3009, serves Next.js app.

---

## Phase 1: Landing Page & Navigation
**Goal:** Build the hero page and module navigation structure.

### Checklist
- [x] **1.1** Design landing page layout
  - Hero section with course title
  - Two-column grid: Block A (Mechanisms) | Block B (Organometallics)
  - Test: Page renders, responsive on mobile
  
- [x] **1.2** Create module card component
  - Props: `code`, `title`, `status` (locked/available/completed)
  - Visual: Icon, title, progress indicator
  - Test: Render 12 module cards (A1-A7, B1-B6)
  
- [x] **1.3** Implement routing structure
  - `/` -> Landing page
  - `/modules/a1` -> Module A1 page
  - `/modules/a2` -> Module A2 page
  - (etc. for all 12 modules)
  - Test: Navigate to `/modules/a1`, URL changes, page renders
  
- [x] **1.4** Create progress tracker component
  - Display: "Block A: 3/7 completed"
  - Persist state in localStorage
  - Test: Mark module complete, refresh page, state persists
  
- [x] **1.5** Add glossary modal
  - Hover/click technical terms -> definition popup
  - Test: Click "CFSE" -> popup shows "Crystal Field Stabilization Energy"

**Exit Criteria:** Landing page navigates to all 12 module routes, progress persists.

---

---

## Stage 2 — Module Template & First Content (Phases 2-3) ✅ COMPLETE

## Phase 2: Module Template & Content Structure
**Goal:** Create reusable module layout before filling content.

### Checklist
- [x] **2.1** Create ModuleLayout component
  - Sections: Concept Overview, Key Equations, Worked Examples, Misconceptions, Visual, Quiz, Connections
  - Test: Render empty module, all section headers appear
  
- [x] **2.2** Implement LaTeX rendering
  - Use KaTeX for inline `$...$` and display `$$...$$`
  - Test: Render `$E_a = \Delta H^\ddagger$` -> displays formatted equation
  
- [x] **2.3** Create EquationBlock component
  - Props: `latex`, `variables` (array of {symbol, definition})
  - Test: Render Eyring equation with variable definitions below
  
- [x] **2.4** Create WorkedExample component
  - Collapsible steps (Step 1, Step 2, ...)
  - Test: Click "Show Step 2" -> step expands
  
- [x] **2.5** Create Quiz component
  - Multiple choice questions
  - Immediate feedback (correct/incorrect + explanation)
  - Test: Select wrong answer -> red highlight + explanation appears

**Exit Criteria:** Empty module page renders with all section scaffolding.

---

## Phase 3: Block A - Module A1 (Kinetics Foundations)
**Goal:** Fully implement the first module as a reference template.

### Checklist
- [x] **3.1** Write content for A1
  - Concept Overview (prose)
  - Key Equations (rate laws, orders)
  - Worked Example (determining reaction order from data)
  - Common Misconceptions (transition state vs intermediate)
  - Test: Content renders, no LaTeX errors
  
- [x] **3.2** Build interactive energy profile
  - SVG diagram: Energy vs Reaction Coordinate
  - Slider: Adjust activation energy -> curve height changes
  - Toggle: Single-step vs Two-step profile
  - Test: Drag slider -> peak moves, toggle -> valley appears
  
- [x] **3.3** Add color coding
  - Gold (metal center), Red (leaving group X), Green (entering group Y), Blue (spectator)
  - Test: Visual matches color scheme
  
- [x] **3.4** Implement formative quiz (2-3 questions)
  - Test: Answer all questions, feedback appears
  
- [x] **3.5** Add cross-module connections
  - "Feeds into: Module A3"
  - Test: Click link -> navigates to A3

**Exit Criteria:** Module A1 is fully functional, interactive, and testable.

---

---

## Stage 3 — Block A Completion (Phases 4-9) ✅ COMPLETE

## Phase 4: Block A - Modules A2 & A3
**Goal:** Implement labile/inert complexes and substitution mechanisms.

### Checklist
- [x] **4.1** Module A2: Write content
  - CFSE tables, labile/inert definitions
  - Mandatory examples: [Ni(CN)4]�?, [Co(NH3)6]�?, [Cr(OH2)6]�? vs [Fe(OH2)6]�?
  - Test: Content renders correctly
  
- [x] **4.2** Module A2: Interactive periodic table (d-block)
  - Click ion -> popup shows d-config, CFSE, labile/inert prediction
  - Toggle: High-spin / Low-spin
  - Test: Click Cr�? -> shows d�, inert
  
- [x] **4.3** Module A2: "Myth vs Fact" cards
  - Flip card interaction
  - Test: Click card -> flips, shows correction
  
- [x] **4.4** Module A3: Write content
  - D, A, I mechanisms with rate law derivations
  - Test: All equations render
  
- [x] **4.5** Module A3: Three-column mechanism animator
  - Side-by-side: D | A | I
  - Ball-and-stick SVG animations
  - Play/Pause/Step controls
  - Test: Click Play -> all three animate simultaneously
  
- [x] **4.6** Module A3: Energy profile comparison
  - Show intermediate (D, A) vs transition state only (I)
  - Test: Profiles match mechanism descriptions

**Exit Criteria:** A2 and A3 are complete, interactive elements work.

---

## Phase 5: Block A - Module A4 (Activation Parameters)
**Goal:** Build the Eyring and ?V� calculators.

### Checklist
- [x] **5.1** Write content for A4
  - Eyring equation derivation
  - ?V� interpretation table
  - Test: Content complete
  
- [x] **5.2** Build Eyring Calculator
  - Input: Table of (T, k) data pairs
  - Output: Plot ln(k/T) vs 1/T
  - Extract: ?H�, ?S� from slope/intercept
  - Conclusion: Mechanism assignment
  - Test: Input sample data -> correct ?H� and ?S� displayed
  
- [x] **5.3** Build ?V� Calculator
  - Input: (P, k) data pairs
  - Output: Plot ln(k) vs P
  - Extract: ?V� from slope
  - Test: Input sample data -> correct ?V� and mechanism
  
- [x] **5.4** Interactive ?V� table
  - Click ion -> highlights corresponding mechanism
  - Test: Click [Ni(OH2)6]�? -> "Interchange" highlights

**Exit Criteria:** Both calculators work with sample data, produce correct outputs.

---

## Phase 6: Block A - Module A5 (Square Planar)
**Goal:** Implement trans effect and synthesis simulator.

### Checklist
- [x] **6.1** Write content for A5
  - Pt(II) model system
  - Four factors: entering ligand, stereochemistry, trans effect, steric
  - Test: Content complete
  
- [x] **6.2** Build nucleophilicity slider
  - Range: OH? -> PR3
  - Display: Rate change as slider moves
  - Test: Drag slider -> rate value updates
  
- [x] **6.3** Build trans effect visualizer
  - SVG square planar complex
  - Select trans ligand T -> highlights which ligand leaves
  - Test: Select Cl? trans -> correct ligand highlighted
  
- [x] **6.4** Build synthesis simulator
  - Input: Starting complex + reagent sequence
  - Output: Predict cis or trans product
  - Test: [PtBr4]�? + NH3 + py + Cl? -> correct isomer predicted
  
- [x] **6.5** Integrate Exercise 5 & 6
  - Test: Solve exercises in simulator, verify answers

**Exit Criteria:** Synthesis simulator correctly predicts cis/trans products.

---

## Phase 7: Block A - Module A6 (Octahedral - Part 1)
**Goal:** Implement first 3 sub-factors (leaving ligand, spectator, steric).

### Checklist
- [x] **7.1** Write content for A6.1-A6.3
  - Leaving ligand effect, spectator effect, steric effect
  - Test: Content complete
  
- [x] **7.2** Build interactive rate table (A6.1)
  - Bar chart: k values for [Co(NH3)5X]�?
  - Hover/click -> explanation
  - Test: Click Cl? -> shows k value and M-Cl bond strength
  
- [x] **7.3** Build spectator ligand toggle (A6.2)
  - Octahedral diagram
  - Toggle: NH3 ? H2O
  - Display: Rate change
  - Test: Toggle -> rate updates
  
- [x] **7.4** Build steric effect animator (A6.3)
  - Animation: Bulky group "pushes" ligand out
  - Test: Animation plays smoothly

**Exit Criteria:** First 3 A6 sub-modules are complete and interactive.

---

## Phase 8: Block A - Module A6 (Octahedral - Part 2)
**Goal:** Implement remaining 3 sub-factors (charge, stereochemistry, base hydrolysis).

### Checklist
- [x] **8.1** Write content for A6.4-A6.6
  - Ion charge effect, stereochemistry, CB mechanism
  - Test: Content complete
  
- [x] **8.2** Build charge effect slider (A6.4)
  - Slider: +1 -> +3 charge
  - Graph: k decreases
  - Test: Drag slider -> graph updates
  
- [x] **8.3** Build stereochemistry animator (A6.5)
  - Trigonal bipyramidal intermediate
  - Show 3 attack positions -> 2:1 cis:trans ratio
  - Test: Animation shows all pathways
  
- [x] **8.4** Build base hydrolysis mechanism (A6.6)
  - 3-step animation: deprotonation -> Cl? leaves -> H2O enters
  - Rate law derivation appears step-by-step
  - Test: Animation syncs with equations
  
- [x] **8.5** Integrate Exercises 7-11
  - Include narrative Exercise 11 (Fe(III) in acid)
  - Test: All exercises solvable, hints work

**Exit Criteria:** All 6 A6 sub-modules complete, exercises integrated.

---

## Phase 9: Block A - Module A7 (Electron Transfer)
**Goal:** Implement inner/outer-sphere mechanisms and Marcus-Hush calculator.

### Checklist
- [x] **9.1** Write content for A7
  - Inner-sphere, outer-sphere, Marcus-Hush theory
  - Test: Content complete
  
- [x] **9.2** Build inner-sphere animator
  - 3 stages: bridge formation -> e? transfer (color change) -> bridge cleavage
  - Toggle: Different bridging ligands (Cl?, OH?, etc.)
  - Test: Animation shows all 3 stages, color changes on e? transfer
  
- [x] **9.3** Build outer-sphere animator
  - Two complexes approach -> electron "jumps" -> separate
  - No bridge formation
  - Test: Animation clearly distinct from inner-sphere
  
- [x] **9.4** Build Marcus-Hush calculator
  - Input: k11, k22, K12, f12
  - Output: k12 (theoretical)
  - Input: k12 (experimental)
  - Comparison: Consistent with outer-sphere?
  - Test: Use [Fe(CN)6]4? + [Mo(CN)6]�? data -> correct k12
  
- [x] **9.5** Build mechanism determination quiz
  - Given two reactants -> student picks inner/outer
  - Feedback explains why
  - Test: All quiz questions work
  
- [x] **9.6** Integrate Exercises 12-17
  - Test: All exercises solvable

**Exit Criteria:** Block A is 100% complete, all 7 modules functional.

---

---

## Stage 4 — Block B Completion (Phases 10-13) ✅ COMPLETE

## Phase 10: Block B - Modules B1 & B2
**Goal:** Implement organometallic intro and nomenclature.

### Checklist
- [x] **10.1** Write content for B1
  - M-C bond, pyrophoric nature, historical timeline
  - Test: Content complete
  
- [x] **10.2** Build historical timeline
  - Interactive: Zeise (1827) -> Ferrocene (1951) -> Nobel prizes
  - Test: Click event -> details appear
  
- [x] **10.3** Write content for B2
  - ? notation, � notation, naming rules
  - Test: Content complete
  
- [x] **10.4** Build ligand gallery
  - Click ligand -> shows ? value, electron donation
  - Test: Click Cp -> shows ?5, 6e? donor
  
- [x] **10.5** Build nomenclature builder
  - Drag ligands + metal -> generates IUPAC name
  - Test: Build [CpFe(CO)2]2 -> correct name displayed

**Exit Criteria:** B1 and B2 complete, nomenclature builder works.

---

## Phase 11: Block B - Module B3 (18-Electron Rule)
**Goal:** Build the electron counting calculator.

### Checklist
- [x] **11.1** Write content for B3
  - Electron counting rules, ligand contribution table
  - 16-electron species, odd-electron dimerization
  - Test: Content complete
  
- [x] **11.2** Build 18-electron calculator
  - Select metal + ligands
  - Auto-calculate total electrons
  - Highlight: 18e (stable), 16e (allowed for d8), other (unstable)
  - Test: Input ferrocene -> shows 18e
  - Test: Input [Ni(CO)4] -> shows 18e
  
- [x] **11.3** Build ligand contribution table
  - Expandable/collapsible
  - Test: Expand -> full table visible
  
- [x] **11.4** Add worked examples
  - Ferrocene, Cr(CO)6, Mn2(CO)10, [CpFe(CO)2]2
  - Test: All examples render with step-by-step counting

**Exit Criteria:** Calculator correctly counts electrons for all test cases.

---

## Phase 12: Block B - Module B4 (Metal Carbonyls)
**Goal:** Build back-bonding visualizer and IR graph.

### Checklist
- [x] **12.1** Write content for B4
  - s-donor and p-back bonding
  - IR spectroscopy evidence
  - Three carbonyl types (terminal, �2, �3)
  - Mond process
  - Test: Content complete
  
- [x] **12.2** Build back-bonding animator
  - Orbital diagram: d(metal) -> p*(CO)
  - Animated electron flow
  - Test: Animation shows electron donation clearly
  
- [x] **12.3** Build interactive IR graph
  - Slider: Complex charge (-2 -> +2)
  - Graph: ?(CO) shifts (higher charge -> higher ?)
  - Explanation: More back-bonding -> lower ?
  - Test: Drag slider -> ?(CO) value updates, explanation appears
  
- [x] **12.4** Build carbonyl type comparison
  - Side-by-side: terminal (2000 cm?�), �2 (1850 cm?�), �3 (1700 cm?�)
  - Test: All three types display with correct ? values
  
- [x] **12.5** Add ancillary ligand comparison
  - PMe3 vs PF3 effect on ?(CO)
  - Test: Toggle ligand -> ?(CO) changes correctly

**Exit Criteria:** IR graph and back-bonding animator work correctly.

---

## Phase 13: Block B - Modules B5 & B6
**Goal:** Complete organometallic block with metallocenes and catalysis.

### Checklist
- [x] **13.1** Write content for B5
  - Ferrocene structure, aromaticity, applications
  - Cobaltocene (19e), nickelocene (20e)
  - Test: Content complete
  
- [x] **13.2** Build sandwich structure visualizer
  - 3D-style SVG: Cp rings above/below metal
  - Toggle metal: Fe (18e) -> Co (19e) -> Ni (20e)
  - Display: Stability comparison
  - Test: Toggle -> structure and stability info updates
  
- [x] **13.3** Write content for B6
  - Wilkinson's catalyst mechanism (6 steps)
  - Vaska's compound
  - Four reaction types (substitution, OA, RE, insertion)
  - Test: Content complete
  
- [x] **13.4** Build Wilkinson cycle animator
  - 6-step catalytic cycle
  - Electron count at each step
  - Play/Pause/Step controls
  - Test: Animation cycles through all 6 steps, electron counts correct
  
- [x] **13.5** Build reaction type table
  - Click reaction type -> animated example
  - Test: Click "Oxidative Addition" -> animation shows OA mechanism
  
- [x] **13.6** Add electron counting for OA/RE
  - Before/after comparison
  - Test: Shows coordination number +2, oxidation state +2 for OA

**Exit Criteria:** Block B is 100% complete, all 6 modules functional.

---

---

## Stage 5 — Integration & Deployment (Phases 14-16) ✅ COMPLETE

## Phase 14: Cross-Module Integration
**Goal:** Connect modules, add progress tracking, glossary.

### Checklist
- [x] **14.1** Implement progress persistence
  - Mark module complete -> saves to localStorage
  - Landing page shows progress bars
  - Test: Complete A1 -> landing page shows "Block A: 1/7"
  
- [x] **14.2** Add cross-module navigation
  - "Builds on: Module A2" -> clickable link
  - "Feeds into: Module A6" -> clickable link
  - Test: Click link -> navigates to correct module
  
- [x] **14.3** Build global glossary
  - Hover any technical term -> tooltip definition
  - Click -> full glossary modal
  - Test: Hover "CFSE" -> tooltip appears
  
- [x] **14.4** Add module completion badges
  - Visual indicator on landing page
  - Test: Complete module -> badge appears
  
- [x] **14.5** Implement hint system for exercises
  - Hint 1 (direction) -> Hint 2 (first step) -> Full solution
  - Test: Click hints in sequence -> progressive reveal works

**Exit Criteria:** All modules connected, progress tracking works end-to-end.

---

## Phase 15: Deployment & Testing
**Goal:** Deploy to NAT VPS and verify production readiness.

### Checklist
- [x] **15.1** Build production Docker image
  - Test: `docker build -t ltkk-wiki:prod .` succeeds
  - Test: Image size < 500MB (optimized)
  
- [x] **15.2** Deploy to NAT VPS
  - SSH to NAT VPS
  - Pull image or build on server
  - Run docker-compose up -d
  - Test: Container starts, no errors in logs
  
- [x] **15.3** Configure Nginx Proxy Manager
  - Subdomain: `ltkk-wiki.g-labs.my.id`
  - Forward to: `10.66.66.2:3009`
  - SSL: Let's Encrypt
  - Test: Visit `https://ltkk-wiki.g-labs.my.id` -> site loads
  
- [x] **15.4** End-to-end testing
  - Navigate all 12 modules
  - Test all interactive elements
  - Test all calculators with sample data
  - Test all quizzes
  - Test progress persistence across sessions
  - Test mobile responsiveness
  - Test: No console errors, all features work
  
- [x] **15.5** Performance audit
  - Lighthouse score > 90
  - First Contentful Paint < 1.5s
  - Test: Run Lighthouse, verify scores
  
- [x] **15.6** Create user documentation
  - README with usage instructions
  - Test: Documentation is clear and complete

**Exit Criteria:** Site is live, fully functional, and performant.

---

## Phase 16: Polish & Optimization
**Goal:** Final refinements and optimizations.

### Checklist
- [x] **16.1** Add loading states
  - Skeleton screens for calculators
  - Test: Slow network -> skeletons appear
  
- [x] **16.2** Add error boundaries
  - Graceful error handling
  - Test: Trigger error -> boundary catches, shows fallback
  
- [x] **16.3** Optimize animations
  - Reduce motion for accessibility
  - Test: Enable "Reduce motion" -> animations simplified
  
- [x] **16.4** Add print styles
  - Modules printable for offline study
  - Test: Print module -> clean layout, no broken elements
  
- [x] **16.5** SEO optimization
  - Meta tags, Open Graph, structured data
  - Test: Share link -> correct preview appears
  
- [x] **16.6** Analytics integration (optional)
  - Track module completion rates
  - Test: Complete module -> event logged

**Exit Criteria:** Site is polished, accessible, and production-ready.

---

## Phase 17: Part-Based Restructure & Navigation ✅ COMPLETE
**Goal:** Convert the single-course layout into a 3-part wiki with a part selector entry point.

### Checklist
- [x] **17.1** Restructure `lib/modules.ts` into a `WikiPart` model (parts → sections → articles), with `available` flags
  - Test: Part 3 articles resolve; Parts 1 & 2 declared as planned outlines
- [x] **17.2** Build `PartSelector` (home page) with 3 part cards, status badges, accent colors
  - Test: `/` shows Bagian 1/2 (Segera Hadir) and Bagian 3 (Tersedia)
- [x] **17.3** Build `/parts/[partId]` route + `PartIndex` (search for available parts, outline for coming-soon)
  - Test: `/parts/1` shows outline notice; `/parts/3` shows search + article grid
- [x] **17.4** `ModuleCard` handles unavailable state (locked, non-clickable)
  - Test: Coming-soon modules render without a link
- [x] **17.5** Repoint article back-links to `/parts/3`; add part links to in-article sidebar nav
  - Test: Back-link returns to Part 3 index
- [x] **17.6** Remove progression system; dynamic TOC; mobile sidebar toggle; remove "Wiki" wording
  - Test: lint + build pass, mobile nav collapses

**Exit Criteria:** Users choose a part before entering its module menu; Part 3 fully linked, Parts 1 & 2 show outlines.

---

---

## Stage 6 — Part 1: Coordination Chemistry & Bonding (Phases 18-21) ✅ COMPLETE

**Source:** `KI_3231_Curriculum_new.md` → PART 1. **Article ids:** `c1`–`c9`.
**Per-module convention:** reuse the existing `ModuleLayout` sections (Concept Overview, Key Equations, Worked Examples, Misconceptions, Interactive Visual, Formative Quiz, Connections), `EquationBlock`, `WorkedExample` + `StepVisuals`, `Quiz`, `StructureDiagram`, and `ConnectionLinks`. Create page at `/app/modules/<id>/page.tsx`, then set `available: true` in `lib/modules.ts`.

## Phase 18: Part 1 — Foundations (Modules 1.1–1.3) ✅ COMPLETE
**Goal:** Werner's theory, isomerism, and Valence Bond Theory.

### Checklist
- [x] **18.1** Module 1.1 (`c1`) Senyawa Koordinasi & Teori Werner
  - Content: primary/secondary valency, coordination numbers/geometries, denticity
  - Interactive: **Werner precipitation simulator** (`WernerPrecipitation`) — pick `[Co(NH₃)₆]Cl₃`, `[Co(NH₃)₅Cl]Cl₂`, etc.; "Add AgNO₃" precipitates only outer-sphere Cl⁻ (count moles of AgCl)
  - Worked example: deduce coordination formula from AgCl precipitation
- [x] **18.2** Module 1.2 (`c2`) Isomerisme dalam Kompleks Koordinasi
  - Content: structural (ionization, coordination, hydrate, linkage) + stereo (cis/trans, fac/mer, optical)
  - Interactive: `TabbedExplorer` comparing cis/trans, fac/mer, and optical isomerism *(substituted for the 3D fac/mer viewer — no 3D engine in stack)*
- [x] **18.3** Module 1.3 (`c3`) Teori Ikatan Valensi (VBT)
  - Content: sp/sp³/dsp²/d²sp³/sp³d² hybridization, inner vs outer orbital, magnetism
  - Interactive: `TabbedExplorer` comparing `[FeF₆]³⁻` (sp³d², high-spin) vs `[Fe(CN)₆]³⁻` (d²sp³, low-spin)
  - Worked example: `[FeF₆]³⁻` vs `[Fe(CN)₆]³⁻`

**Exit Criteria:** Modules 1.1–1.3 live, interactive, `available: true`. ✅

---

## Phase 19: Part 1 — Crystal/Ligand Field (Modules 1.4–1.5) ✅ COMPLETE
**Goal:** CFT splitting and the factors governing Δ.

### Checklist
- [x] **19.1** Module 1.4 (`c4`) Teori Medan Kristal (CFT)
  - Content: octahedral/tetrahedral/square-planar splitting, t2g/eg, high vs low spin, CFSE
  - Interactive: **CFT splitting engine** (`CrystalFieldSplitter`) — geometry selector, d-count slider, spin toggle, live CFSE + unpaired + μ_eff readouts
  - Worked example: d⁶ high-spin vs low-spin CFSE
- [x] **19.2** Module 1.5 (`c5`) Faktor Penentu Pembelahan (Δ)
  - Content: spectrochemical series, oxidation state, 3d/4d/5d, coordination number, hydration double-hump curve
  - Interactive: `TabbedExplorer` over the four Δ factors *(spectrochemical/oxidation/period/coordination)*
  - Worked example: `[Fe(ox)₃]³⁻` vs `[Ru(ox)₃]³⁻`

**Exit Criteria:** Modules 1.4–1.5 live with working CFT engine. ✅

---

## Phase 20: Part 1 — Distortion & MO Theory (Modules 1.6–1.7) ✅ COMPLETE
**Goal:** Jahn-Teller distortion and Ligand Field (MO) theory.

### Checklist
- [x] **20.1** Module 1.6 (`c6`) Distorsi Jahn-Teller
  - Content: degeneracy, weak (t2g) vs strong (eg) distortion, tetragonal elongation/compression
  - Interactive: `TabbedExplorer` over weak/strong distortion + elongation/compression cases
- [x] **20.2** Module 1.7 (`c7`) Teori Medan Ligan (LFT)
  - Content: MO construction, LGOs, σ-only, π-donor vs π-acceptor effect on Δo
  - Interactive: `TabbedExplorer` over σ-only / π-donor / π-acceptor
  - Worked example: `[Cr(CN)₆]³⁻` vs `[CrF₆]³⁻`

**Exit Criteria:** Modules 1.6–1.7 live with MO/distortion visualizers. ✅

---

## Phase 21: Part 1 — Spectroscopy & SCO (Modules 1.8–1.9) ✅ COMPLETE
**Goal:** Electronic spectroscopy, color, and spin crossover. Completes Part 1.

### Checklist
- [x] **21.1** Module 1.8 (`c8`) Spektroskopi Elektronik & Warna
  - Content: d-d transitions, Laporte + spin selection rules, CT bands (LMCT/MLCT), complementary color, Beer-Lambert
  - Interactive: `TabbedExplorer` over Laporte / spin / CT / complementary-color
  - Worked example: Ti(III) d¹ Δo from absorption band + Jahn-Teller shoulder
- [x] **21.2** Module 1.9 (`c9`) Senyawa Spin Crossover (SCO)
  - Content: LS↔HS transition (d⁴–d⁷), temperature/pressure/LIESST triggers, transition profiles
  - Interactive: `TabbedExplorer` over LS/HS, triggers, hysteresis profiles
  - Worked example: `[Fe(Htrz)₃](TFA)₂` hysteresis width (18 K)
- [x] **21.3** Set Part 1 `status: 'available'` in `lib/modules.ts`; add Part 1 glossary terms
  - 18 Part 1 glossary terms added (Werner, dentisitas, VBT, CFT, Δₒ, spektrokimia, Jahn-Teller, LFT, Laporte, CT, SCO, etc.)

**Exit Criteria:** Part 1 is 100% complete, all 9 modules functional and searchable. ✅

---

---

## Stage 7 — Part 2: Descriptive Inorganic Chemistry (Phases 22-24) ✅ COMPLETE

**Source:** `KI_3231_Curriculum_new.md` → PART 2. **Article ids:** `d1`–`d5`.
Same per-module convention as Stage 6. Descriptive chemistry leans on tables and reaction visuals (reuse `HighlightTable`, color-coded reaction cards).

## Phase 22: Part 2 — Periodicity & Metallurgy (Modules 2.1–2.2) ✅ COMPLETE
**Goal:** Periodic trends and industrial extraction.

### Checklist
- [x] **22.1** Module 2.1 (`d1`) Tren Periodik & Karakteristik
  - Content: physical properties, lanthanide contraction, oxidation states, reduction potentials
  - Interactive: `TabbedExplorer` over physical/size/oxidation/reduction trends
  - Worked example: Zn + Cu²⁺ displacement via E° (+1.10 V)
- [x] **22.2** Module 2.2 (`d2`) Metalurgi & Ekstraksi Industri
  - Content: Kroll (Ti), Blast Furnace (Fe), Mond (Ni), copper extraction/electro-refining
  - Interactive: `TabbedExplorer` over Kroll/Blast Furnace/Mond/Copper
  - Worked example: ΔG° of hematite vs siderite reduction

**Exit Criteria:** Modules 2.1–2.2 live. ✅

---

## Phase 23: Part 2 — Descriptive Chemistry (Modules 2.3–2.4) ✅ COMPLETE
**Goal:** 3d series and 4d/5d PGM descriptive chemistry.

### Checklist
- [x] **23.1** Module 2.3 (`d3`) Kimia Deskriptif Logam 3d (Sc–Zn)
  - Content: element-by-element (Ti→Zn) colors, oxidation states, key reactions/tests
  - Interactive: `TabbedExplorer` grouped by element pairs (Ti&V, Cr&Mn, Fe&Co, Ni/Cu/Zn)
  - Worked example: dichromate–ethanol oxidation (orange→green)
- [x] **23.2** Module 2.4 (`d4`) Kimia Deskriptif Logam 4d & 5d (PGM)
  - Content: Pt (cisplatin, Magnus' green salt), Au (aqua regia), Hg (mercurous dimer, calomel, Nessler)
  - Interactive: `TabbedExplorer` over Pt/Au/Hg
  - Worked example: molar conductivity of Pt(IV) ammine-chloro complexes (`HighlightTable`)

**Exit Criteria:** Modules 2.3–2.4 live. ✅

---

## Phase 24: Part 2 — Qualitative Analysis (Module 2.5) ✅ COMPLETE
**Goal:** Systematic cation separation. Completes Part 2.

### Checklist
- [x] **24.1** Module 2.5 (`d5`) Analisis Kualitatif & Skema Pemisahan
  - Content: Group 3 separation scheme (Fe³⁺, Al³⁺, Cr³⁺, Mn²⁺, Co²⁺, Ni²⁺, Zn²⁺), confirmatory tests (DMG for Ni, SCN for Co/Fe)
  - Interactive: `TabbedExplorer` stepping through precipitation / HCl dissolution / Ni-Co residue / filtrate
  - Worked example: identify an unknown Group 3 mixture (Ni via DMG)
- [x] **24.2** Set Part 2 `status: 'available'`; add Part 2 glossary terms
  - 7 Part 2 glossary terms added (kontraksi lantanida, Kroll, Mond, aqua regia, dimer merkuro, uji DMG, analisis kualitatif)

**Exit Criteria:** Part 2 is 100% complete, all 5 modules functional and searchable. ✅

---

### Per-Phase Testing
Each phase must pass all its tests before moving to the next phase. If a test fails:
1. Fix the issue
2. Re-run the test
3. Document the fix
4. Proceed only when all tests pass

### Integration Testing
After every 3 phases, run integration tests:
- Navigate between completed modules
- Verify data persistence
- Check for console errors
- Test on mobile device

### Rollback Plan
If a phase introduces breaking changes:
1. Git revert to last working commit
2. Document the issue
3. Redesign the approach
4. Re-implement with tests

---

## Context Window Management

### For AI Agents
- **Work on ONE phase at a time**
- **Read only the current phase checklist**
- **After completing a phase, summarize results in < 500 tokens**
- **Do not load multiple phases into context simultaneously**
- **Use this plan as the single source of truth**

### Handoff Protocol
When handing off between agents or sessions:
1. State: "Phase X complete, all tests passed"
2. List: Any deviations from the plan
3. Note: Any new dependencies or blockers
4. Next: "Ready to begin Phase X+1"

---

## Success Criteria

### Part 3 (done)
- ✅ Phases 0–17 checked off
- ✅ All 13 Part 3 modules functional and interactive
- ✅ Site deployed at `https://ltkk.g-labs.my.id`
- ✅ All calculators correct, animations smooth, quizzes give feedback
- ✅ Mobile-responsive, Lighthouse > 90, part selector live

### Part 1 (Stage 6) ✅
- ✅ Phases 18–21 checked off
- ✅ All 9 modules (1.1–1.9 / `c1`–`c9`) live and interactive
- ✅ Part 1 set `available: true`, included in search; 18 glossary terms added

### Part 2 (Stage 7) ✅
- ✅ Phases 22–24 checked off
- ✅ All 5 modules (2.1–2.5 / `d1`–`d5`) live and interactive
- ✅ Part 2 set `available: true`, included in search; 7 glossary terms added

**Whole project complete when:** all three parts are `available`, every module is interactive and searchable, lint + build pass, and the site remains mobile-responsive with Lighthouse > 90.

---

**Last Updated:** 2026-06-01  
**Status:** All three parts complete — 27 module pages (A1–A7, B1–B6, c1–c9, d1–d5), 35 static routes, lint + build clean.
