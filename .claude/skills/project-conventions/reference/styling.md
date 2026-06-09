## Styling

### Tailwind v4

Imported via `@import "tailwindcss"` in `globals.css`. PostCSS plugin: `@tailwindcss/postcss`. No `tailwind.config.*` file — configuration lives inside CSS.

### Design tokens

Defined in `:root` and mapped to Tailwind via `@theme inline` in `globals.css`:

```css
:root {
  --background: #121915;
  --foreground: #e8f0eb;
  --primary: oklch(0.248 0.013 160);
  --accent: #52b788;
  --border: #333a35;
  --card: #1a2620;
  --muted: #1e2d24;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-border: var(--border);
  --color-card: var(--card);
  --color-primary: var(--primary);
  --color-accent: var(--accent);
  --color-muted: var(--muted);
}
```

Use as Tailwind utilities: `bg-background`, `bg-primary`, `bg-card`, `bg-muted`, `bg-accent`, `text-foreground`, `border-border`.

### Font utilities

- `font-sans` → LINE Seed (loaded via `@font-face` in globals.css)
- `font-mono` → Geist Mono
- `font-jetbrains` → JetBrains Mono (for eyebrow/monospace text)

### Common patterns

```tsx
// page wrapper
<div className="bg-background">

// card
<div className="bg-muted rounded-2xl p-4 border-2 border-border">

// header/sidebar surface
<div className="bg-primary border-b-2 border-border">

// accent button
<button className="px-3 py-1.5 border border-gray-700 rounded-lg text-sm hover:bg-muted">

// active nav link
className="bg-gray-800 text-green-400"
// inactive nav link
className="text-gray-300 hover:bg-gray-800 hover:text-white"
```

### Never

- Arbitrary hex values in className (use tokens)
- `style={{}}` for static values (use Tailwind)
- Inline styles except: recharts `Cell fill`, dynamic computed values
