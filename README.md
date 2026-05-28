# LTKK Wiki — KI 3231 Interactive Chemistry Platform

Interactive education platform for **KI 3231: Transition Metals & Complex Chemistry**, featuring 13 modules across two blocks with interactive calculators, quizzes, and visualizations.

## 🧪 Modules

### Block A — Reaction Mechanisms
| Module | Topic | Interactive Feature |
|--------|-------|---------------------|
| A1 | Kinetics Foundations | Energy profile diagram with Eₐ slider |
| A2 | Labile and Inert Complexes | D-block periodic table with CFSE |
| A3 | Substitution Mechanisms | D/A/I mechanism animator |
| A4 | Activation Parameters | Eyring plot calculator |
| A5 | Square Planar Substitution | Trans-effect visualizer |
| A6 | Octahedral Substitution | 6-factor interactive dashboard |
| A7 | Electron Transfer | Marcus-Hush calculator |

### Block B — Organometallics
| Module | Topic | Interactive Feature |
|--------|-------|---------------------|
| B1 | History & Characteristics | Interactive timeline |
| B2 | Ligands & Nomenclature | Ligand gallery browser |
| B3 | 18-Electron Rule | Electron counting calculator |
| B4 | Metal Carbonyl Compounds | IR frequency vs charge slider |
| B5 | Metallocenes | Sandwich structure visualizer |
| B6 | Organometallic Catalysis | Wilkinson cycle stepper |

## 🚀 Getting Started

### Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

### Production (Docker)
```bash
docker-compose up -d
```
The app runs on port **3009** (maps to container port 3000).

### Deployment
- **Target:** NAT VPS via Nginx Proxy Manager
- **URL:** `https://ltkk.g-labs.my.id`
- See [infra_guideline.md](./infra_guideline.md) for deployment details.

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** CSS Modules (Glassmorphism dark theme)
- **Math:** KaTeX for LaTeX rendering
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Docker (standalone output)

## 📁 Structure

```
app/
├── components/
│   ├── interactive/    # Calculators, visualizers
│   └── ui/             # ModuleLayout, Quiz, etc.
├── glossary/           # Searchable glossary page
├── modules/
│   ├── a1–a7/          # Block A module pages
│   ├── b1–b6/          # Block B module pages
│   └── [moduleId]/     # Dynamic route (fallback)
lib/
├── glossary.ts         # Term definitions
└── progress.ts         # localStorage persistence
```

## ✅ Features

- **Progress Tracking:** Mark modules complete, persists in localStorage
- **Interactive Tools:** 8+ custom calculators and visualizers
- **Formative Quizzes:** Instant feedback with explanations
- **Cross-Module Links:** Navigate between related modules
- **Glossary:** 20+ searchable chemistry terms
- **Print-Ready:** Clean print layout for offline study
- **Accessible:** Reduced-motion support, semantic HTML
- **SEO:** Open Graph, meta descriptions, structured titles
