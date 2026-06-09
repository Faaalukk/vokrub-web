## Data Fetching

### Current state

All data is static mock data defined inside component files. No API calls yet.

### Connecting to vokrub-api

Base URL: `process.env.NEXT_PUBLIC_API_URL` (set in `.env.local`).

#### Server Component (preferred for read-only)

```tsx
// src/app/customer/page.tsx
async function getCustomers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/customer`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store', // or revalidate
  })
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}

export default async function CustomerPage() {
  const customers = await getCustomers()
  return <Table data={customers} ... />
}
```

#### Client Component (interactive pages with state)

```tsx
"use client"
import { useEffect, useState } from 'react'

export default function CustomerPage() {
  const [customers, setCustomers] = useState([])
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/customer`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(r => r.json())
      .then(setCustomers)
  }, [])
  ...
}
```

### Auth token

Admin token from login (`POST /api/auth/login` → `{ token }`). Store in `localStorage` or a cookie. Pass as `Authorization: Bearer <token>` header.

### Response types

Define TypeScript types matching the API model shapes:

```ts
type Customer = {
  id: number
  name: string
  email: string
  plan: string
  words: number
  streak: number
  status: string
  mrr: string
}
```
