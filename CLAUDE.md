## Read this first — Project skill

Before doing any non-trivial work in this repo, read the project skill index at `.claude/skills/project-conventions/SKILL.md` and then load the relevant topic file under `.claude/skills/project-conventions/reference/`. The skill is the canonical convention set for this codebase (one H2 topic per reference file): architecture, directory structure, component patterns, styling, data fetching.

Pull from it rather than inventing a parallel pattern.

## Commands

Package manager is **npm**.

```bash
npm install        # install deps
npm run dev        # Next.js dev server on :8080
npm run build      # production build
npm run start      # serve production build
npm run lint       # eslint
```

## Architecture

This is the **admin dashboard** for Vokrub — manages customers, revenue, and permissions. It is a Next.js 16 App Router application with TypeScript and Tailwind CSS v4.

### Entry & layout

`src/app/layout.tsx` — root layout. Loads Geist + JetBrains Mono via `next/font/google`, renders `<Sidebar />` on the left and `<main>` on the right. No auth layer yet — all routes are public.

### Routing (App Router)

Pages live under `src/app/<route>/page.tsx`. Current routes:

| URL | File |
|---|---|
| `/overview` | `src/app/overview/page.tsx` |
| `/customer` | `src/app/customer/page.tsx` |
| `/earning` | `src/app/earning/page.tsx` |

`src/app/page.tsx` is currently empty — add a redirect to `/overview` if needed.

### Component location

Shared components: `src/app/components/`. Route-scoped components live next to their `page.tsx` (e.g. `src/app/customer/components/`).

### Styling

Tailwind CSS v4 via `@tailwindcss/postcss`. Design tokens defined in `src/app/globals.css` under `:root` and mapped via `@theme inline`. Theme is dark green:

```
--background  #121915     page background
--primary     oklch(0.248 0.013 160)  sidebar + header bg
--accent      #52b788     sage green highlights
--card        #1a2620     card background
--muted       #1e2d24     subtle surface
--border      #333a35     divider color
```

Font: LINE Seed (woff2 from `public/fonts/`). JetBrains Mono for monospace/eyebrow text (`font-jetbrains`).

### Data

All data is currently static mock data inside component files. When connecting to `vokrub-api`, use `fetch` in Server Components or `useEffect` in Client Components. Base URL from `NEXT_PUBLIC_API_URL` env var.

## Naming

- Components: `PascalCase.tsx`
- Page files: `page.tsx` (Next.js convention)
- Route dirs: `kebab-case/`
- CSS variables follow `--color-name` for Tailwind mapping

## When in doubt

Consult `.claude/skills/project-conventions/reference/`. Quick map:

- Adding page → `directory-structure.md` + `component-patterns.md`
- Styling → `styling.md`
- API integration → `data-fetching.md`
- Component anatomy → `component-patterns.md`
