---
name: project-conventions
description: Canonical conventions for vokrub-web — Next.js 16 App Router admin dashboard. Load the relevant reference file before writing any page, component, or style code.
metadata:
  type: project
---

# vokrub-web — Project Conventions Index

Stack: **Next.js 16.2 · React 19 · TypeScript 5 · Tailwind CSS v4 · lucide-react · recharts**

This is the **admin dashboard** — manages customers, revenue, permissions. Dark green design system.

## Reference files

Load from `.claude/skills/project-conventions/reference/`:

| Topic | File | When to load |
|---|---|---|
| App Router layout & routing | `architecture.md` | Any routing or layout change |
| File & directory placement | `directory-structure.md` | Adding any new file |
| Component anatomy & props | `component-patterns.md` | Writing a new component |
| Tailwind + design tokens | `styling.md` | Styling anything |
| API / data fetching | `data-fetching.md` | Connecting to vokrub-api |

## Quick rules (always active)

- App Router only — no `pages/` directory.
- `"use client"` required for any component using React hooks or browser APIs.
- Server Components are the default — prefer them for read-only data display.
- Tailwind v4: use `@theme inline` CSS vars (`bg-background`, `text-foreground`, `border-border`, etc.) — not arbitrary hex values.
- All icons from `lucide-react`.
- Charts from `recharts` — no other chart library.
- No inline style blocks except for dynamic values (e.g. recharts `Cell` fill).
- Shared components in `src/app/components/`. Route-scoped components next to their page.
- TypeScript strict mode — no `any`, explicit prop types.
