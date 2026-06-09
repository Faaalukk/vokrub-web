## Component Patterns

### Props type

Always define a named props type above the component:

```tsx
type SummaryCardProps = {
  icon: React.ReactNode
  amount: string
  label: string
  change?: number
}

export default function SummaryCard({ icon, amount, label, change }: SummaryCardProps) { ... }
```

### Header component

Every page starts with `<Header title="Page Name" />`. Header is sticky, shows page title + optional export button + bell icon.

### SummaryCard

Metric tile — icon badge (top-left) + trend indicator (top-right) + amount + label. Use `change` prop (positive/negative number → green/red). Used in 2-col or 4-col grids.

### Table component

Generic typed table: `<Table columns={columns} data={data} total={data.length} />`. Columns define `key`, `label`, optional `render` function for custom cells.

### RevenueCard / charts

`"use client"` required (recharts uses DOM). `ResponsiveContainer` wraps every chart. Last bar highlighted in `#52b788` (accent), others in `#2d4a38`.

### FilterTab

Pill-style filter group — `options: string[]`, `value: string`, `onChange: (v: string) => void`. Active pill has `bg-accent text-gray-900`.

### Sidebar navItems

```ts
const navItems = [
  { href: "/overview", label: "Overview", icon: Sun },
  // ...
]
```

Add new pages here. Icon from `lucide-react`.

### "use client" decision

Add only when the component uses: hooks (`useState`, `useEffect`, `usePathname`), event handlers that capture state, or recharts. Otherwise omit.
