# ChaiCode-ReactJs

React.js Learning Repository

Learning React with guidance from Hitesh Choudhary (Chai Aur Code). This repo is a structured playground collecting cohort lessons (numbered sequentially) and a parallel self‑study playlist that is still in progress.

## Folder Overview

| Folder | Purpose | Status |
|--------|---------|--------|
| `ChaiAurCohort/` | Numbered cohort modules (foundation → routing) | Stable (iterate when new cohort topics appear) |
| `ChaiAurYT/` | Personal practice while following the public YouTube playlist | Ongoing |

### Cohort Modules (`ChaiAurCohort/`)

Numbering uses a three‑digit prefix so sorting in editors & git diffs stays chronological.

| Module | Focus | Notes / Highlights |
|--------|-------|-------------------|
| 000-Warm-Up-React-V18 | First React render via CDN | Classic root render (v18) without build tooling |
| 001-React-V19-CDN | React 19 CDN basics | Try newer APIs / differences (where applicable) |
| 002-React-Components | Components & composition | Splitting UI into multiple files (`App.js`, `App2.js`) |
| 003-Code-Linting-&-Formatting | ESLint + formatting setup | Central `eslint.config.mjs` exploration |
| 004-Babel-for-JSX-format | Manual JSX transform with Babel | Understand build step before Vite |
| 005-Vite-Intro | Vite project bootstrap | Fast dev server, hot module reload |
| 006-Handling-Web-Requests-React | Data fetching patterns | Basic async + side effects |
| 007-Handling-arrays-and-vite-build | Array rendering + build output | Iteration & production build test |
| 008-Custom-Hooks-in-React | Reusable logic via hooks | `hooks/useSpecialChai.js` example |
| 009-Routing-in-React | Routing (TanStack Router JS) | Generated `routeTree.gen.ts`, nested routes |
| 010-React-based-TanStack-Routing-Project-Sample | Routing sample (TypeScript) | Cleaner structure + types, production style |

### YouTube Playlist Practice (`ChaiAurYT/`)

| Subfolder | Focus | Status |
|-----------|-------|--------|
| 01viteReact | Intro Vite + React setup + basic components | In progress |

Add more folders here matching playlist progression (02state, 03hooks, 04router, etc.).

## Getting Started

### Prerequisites

- Node.js >= 18 (recommend 20 LTS)
- npm (bundled with Node) or pnpm/yarn if you prefer (examples use npm)
- Optional: VS Code + Live Server extension (for pure CDN examples)

### Running CDN Examples (Modules 000–004)

1. Open the module folder.
2. Open `index.html` directly in the browser (or serve with a lightweight server to avoid CORS issues if you later fetch assets).

### Running Vite Projects (Modules 005+ and `ChaiAurYT/01viteReact`)

From the repo root (PowerShell examples):

```powershell
cd ChaiAurCohort/005-Vite-Intro
npm install
npm run dev    # starts Vite dev server (default: http://localhost:5173)

# When ready to produce a production build:
npm run build
npm run preview # (optional) serves the built assets
```

Repeat for any other Vite module by changing into its directory first.

### Routing Projects (Modules 009 & 010)

TanStack Router generates a `routeTree.gen.ts` (or `.tsx`) file. If routing definitions change drastically, you can delete the generated file and rerun the dev server— the plugin/regeneration step recreates it. Avoid manual edits to that file; edit route components instead (`src/routes/*`).

## Project Conventions

- Folder numbering: `NNN-Short-Description` to keep git history & linear learning order.
- Keep each module self‑contained (its own `package.json` if tooling is needed) to avoid dependency collisions.
- Prefer small, focused examples over large monolith changes.
- Commit messages: `module(<number>): <short action>` e.g. `module(008): add loading state to useSpecialChai`.

## Typical Learning Flow

1. Read module README comments / inline comments.
2. Run the module.
3. Experiment (change props, add state, introduce an error deliberately, observe outcomes).
4. Compare cohort code vs. playlist practice implementation.
5. Document insights in this root README (append to Notes) or inside the module as comments.

## Progress Tracker (Playlist)

| Concept | Planned Folder | Status | Notes |
|---------|----------------|--------|-------|
| Vite Intro | 01viteReact | ✅ | Basic structure running |
| State & Events | 02stateEvents | ⏳ | To add |
| Forms & Controlled Inputs | 03forms | ⏳ | |
| Custom Hooks Deep Dive | 04customHooks | ⏳ | |
| Routing (TanStack) | 05routing | ⏳ | |
| Performance (memo, useCallback, Suspense) | 06performance | ⏳ | |

Legend: ✅ done, ⏳ in progress, 💤 pending.

## Notes & Learnings (Add Continuously)

- Difference between CDN React (script tags) vs. build tooling: bundling, fast refresh, JSX transform.
- Custom hooks: emphasize that a hook is just a function following naming + calling rule (never conditionally). Extracts reusable stateful logic, not UI.
- TanStack Router vs. React Router: file‑based route generation with typed route trees and data APIs.

## Adding a New Module

1. Copy an existing minimal Vite module (e.g. `005-Vite-Intro`).
2. Rename folder with next number and concise topic.
3. Update internal references if needed (`package.json` name field optional but nice).
4. Implement the new concept; keep changes isolated.
5. Document highlights in this README under Notes.

## Troubleshooting

| Issue | Cause | Quick Fix |
|-------|-------|-----------|
| Dev server port conflict | Another Vite instance running | Pass `--port 5174` or close old process |
| JSX not compiling (CDN example) | Missing Babel transform | Use modules 004+ or switch to Vite |
| Stale route tree | Generated file outdated | Delete `routeTree.gen.ts` & rerun dev |
| ESLint not running | Using flat config needs Node >= 18 | Upgrade Node; run `npx eslint .` inside module |

## Suggested Next Topics

- Error boundaries (React 18+ patterns & upcoming 19 changes)
- Suspense for data fetching
- Performance profiling (React DevTools Profiler)
- Testing basics (Vitest + React Testing Library) in a dedicated module
- State management comparison: Context vs. Zustand vs. Jotai (small examples)

## License

MIT (educational use). Attribution to original educator (Hitesh Choudhary / Chai Aur Code) for conceptual guidance; all example implementation code here written/modified for personal learning.

---
Happy brewing ☕ – keep iterating and push small, meaningful commits.
