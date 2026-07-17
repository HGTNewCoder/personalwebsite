# Copilot instructions — personalwebsite

Purpose: Help Copilot agents and future sessions understand how this repo is built, where editable content lives, and any repo-specific conventions to produce accurate suggestions and safe edits.

---

## Quick commands (run from repo root)

- Install dependencies: `npm install`
- Dev server: `npm run dev`  # Next.js dev (watch mode)
- Production build: `npm run build`
- Serve production build: `npm run start`
- Lint: `npm run lint`  # runs ESLint
- Lint a single file: `npm run lint -- <path/to/file>` (e.g. `npm run lint -- src/components/sections/Hero.tsx`) or `npx eslint <path>`

> Tests: This repository does not include a test script in package.json. Add a `test` script if you add a test runner.

---

## High-level architecture

- Framework: Next.js (App Router) + TypeScript. App entry is `src/app/`.
- UI: Tailwind CSS v4 + Framer Motion for animations.
- Content-first site: canonical content lives in `src/data/`:
  - `src/data/resume.ts` — primary resume content and exported `Resume` types.
  - `src/data/projects.ts` — list of projects and `Project` interface.
- Components:
  - `src/components/layout/` — Navbar, Footer, Section wrapper
  - `src/components/sections/` — Hero, About, ExperienceTimeline, Projects, Skills, Contact
  - `src/components/ui/` — small UI helpers (AnimatedSection, MotionProvider)
- Assets: `public/projects/` holds project screenshot images referenced by `projects.ts`.
- Utilities: `src/lib/` contains animation helpers and utilities.
- Build config:
  - `next.config.ts` enables `image` formats `avif` and `webp` (prefer modern formats).
  - `tsconfig.json` defines an import alias: `@/*` -> `./src/*` — prefer `@/` imports.

---

## Key repository conventions for Copilot

- Content edits belong in `src/data/*` (resume.ts and projects.ts). Prefer editing those files rather than changing component code to update copy or project entries.
- Follow the exported TypeScript interfaces in `src/data/` when adding or editing entries (field names, types, and optional values). Example: project entries must include `title`, `description`, `image`, `tags`, `githubUrl`, `liveUrl`.
- Image workflow: add images to `public/projects/` and reference them as `/projects/<filename>` in `projects.ts`. Use avif/webp when possible (next.config supports them).
- Use the `@/` path alias for imports (e.g., `import { resume } from '@/data/resume'`).
- Keep animations and motion logic inside `src/lib` or `src/components/ui` to avoid duplicating behavior across sections.
- Linting: `eslint` is configured; run `npm run lint` before committing edits that change code style.

---

## Agent-specific notes (important)

- See `AGENTS.md` in the repo root: this project uses a Next.js variant with breaking changes. When proposing code edits or examples, prefer referencing the local Next.js docs at `node_modules/next/dist/docs/` to avoid using APIs that no longer apply.
- CLAUDE.md in the repo references `AGENTS.md` and should be considered part of guidance for assistant agents.

---

## Where to look for context

- Small changes to content: `src/data/resume.ts`, `src/data/projects.ts`.
- Visual/structure changes: `src/components/*` and `src/app/*`.
- Tailwind and global styles: `src/app/globals.css`.
- image and asset additions: `public/projects/`.

---

## If you add CI or tests

If you add automated tests or CI workflows, update this file with:
- test command and an example of running a single test (e.g., `npm test -- <testNamePattern>`)
- any headless browser runners and the commands to run them in CI

---

Created by Copilot CLI — ask if you want this expanded to include CI or tests.
