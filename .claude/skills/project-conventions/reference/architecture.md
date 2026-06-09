## Architecture

### App Router

Next.js 16 App Router. All routes under `src/app/`. `layout.tsx` at the root wraps every page with the sidebar shell. No `pages/` directory exists.

### Root layout (`src/app/layout.tsx`)

- Loads `Geist`, `Geist_Mono`, `JetBrains_Mono` via `next/font/google`
- Passes font CSS variables to `<html>` className
- Renders `<Sidebar />` + `<main>` in a flex row
- `<main>` is `flex-1 flex flex-col overflow-y-auto` — each page controls its own internal scroll

### Sidebar shell

`src/app/components/Sidebar.tsx` — `"use client"` (uses `usePathname`). Fixed left nav, `w-64 h-screen`. Active link detection via `pathname === href`. Bottom user avatar block.

### Page anatomy

Every page file is `src/app/<route>/page.tsx`. Pages import `<Header />` as first child, then content in a padded flex column.

```tsx
// typical page shell
export default function OverviewPage() {
  return (
    <div className="bg-background">
      <Header title="Overview" />
      <div className="py-6 px-6 flex flex-col gap-6">
        {/* content */}
      </div>
    </div>
  )
}
```

### Client vs Server Components

- Default: Server Component (no directive) — safe for static data and layout.
- Add `"use client"` only when: `useState`, `useEffect`, `usePathname`, event handlers, recharts (requires DOM).
- Data-fetching pages without interactivity: Server Component + async function.

### Font convention

JetBrains Mono used for monospace/eyebrow text via `font-jetbrains` Tailwind utility (mapped from `--font-jetbrains-mono` CSS var).
