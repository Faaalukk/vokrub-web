## Directory Structure

```
vokrub-web/
├── src/app/
│   ├── layout.tsx              # root layout — sidebar + main
│   ├── globals.css             # design tokens + Tailwind import
│   ├── page.tsx                # root redirect (empty or → /overview)
│   ├── components/             # shared components
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   ├── SummaryCard.tsx
│   │   ├── RevenueCard.tsx
│   │   ├── MostStoredWord.tsx
│   │   ├── Transactions.tsx
│   │   ├── Table.tsx
│   │   └── SearchBar.tsx
│   ├── overview/
│   │   └── page.tsx
│   ├── customer/
│   │   ├── page.tsx
│   │   └── components/
│   │       └── FilterTab.tsx
│   └── earning/
│       └── page.tsx
└── public/
    └── fonts/
        ├── LINESeedSansTH_W_Rg.woff2
        └── LINESeedSansTH_W_Bd.woff2
```

### Adding a new route

1. Create `src/app/<route>/page.tsx`
2. Add nav entry in `src/app/components/Sidebar.tsx` → `navItems` array
3. Route-scoped components go in `src/app/<route>/components/`

### Shared vs scoped

- Used by 2+ routes → `src/app/components/`
- Used by 1 route → `src/app/<route>/components/`
- Never put page-level logic in `components/`
