const BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

function getToken(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem("vokrub_admin_token") ?? "";
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
      ...options?.headers,
    },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error ?? res.statusText);
  }
  return res.json();
}

export const api = {
  // Auth
  login: (email: string, password: string) =>
    request<{ token: string; user: AdminUser }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  me: () => request<AdminUser>("/api/auth/me"),

  // Metrics
  metrics: () => request<Metrics>("/api/metrics"),
  topWords: () => request<TopWord[]>("/api/analytics/top-words"),
  transactions: () => request<Transaction[]>("/api/analytics/transactions"),

  // Customers
  getCustomers: () => request<Customer[]>("/api/customer"),
  getCustomer: (id: number) => request<Customer>(`/api/customer/${id}`),
  deleteCustomer: (id: number) =>
    request<{ message: string }>(`/api/customer/${id}`, { method: "DELETE" }),
};

export type AdminUser = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export type Metrics = {
  mrr: number;
  mrr_delta: number;
  customers: number;
  customers_delta: number;
  pro_count: number;
  pro_delta: number;
  active_today: number;
  active_delta: number;
};

export type TopWord = { word: string; count: number };

export type Transaction = {
  customer_id: number;
  name: string;
  plan: string;
  amount: number;
  status: string;
};

export type Customer = {
  id: number;
  name: string;
  email: string;
  image: string;
  plan: string;
  role: string;
  streak: number;
  status: string;
};
