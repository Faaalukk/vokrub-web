"use client";

import { useState } from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";
import FilterTabs from "./components/FilterTab";

type Customer = {
  id: number;
  image?: string;
  name: string;
  plan: string;
  role: string;
  words: number;
  streak: number;
  status: string;
  mrr: string;
};

const customers: Customer[] = [
  {
    id: 1,
    image: "",
    name: "Aiko Tanaka",
    plan: "Pro · monthly",
    role: "Learner",
    words: 1840,
    streak: 12,
    status: "Active",
    mrr: "$6",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5CHxFsm3oy6-RLHIH_86pJTJQG0NfBFwuL-VBlZ0RWEvR8S-I4_EdiLaUSpI3a7y5on6dzicBciZuQRkRALKG009wpZQHd8GnGCEsjQ&s=10",
    name: "Omar Haddad",
    plan: "Pro · monthly",
    role: "Learner",
    words: 1622,
    streak: 7,
    status: "Inactive",
    mrr: "$6",
  },
];

const columns = [
  {
    key: "name" as const,
    label: "CUSTOMER",
    render: (_value: Customer["name"], row: Customer) => (
      <div className="flex items-center gap-3">
        {row.image ? (
          <img src={row.image} className="w-8 h-8 rounded-full object-cover" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-gray-900">
            {row.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        )}
        <span>{row.name}</span>
      </div>
    ),
  },
  { key: "plan" as const, label: "PLAN" },
  { key: "role" as const, label: "ROLE" },
  { key: "words" as const, label: "WORDS" },
  { key: "streak" as const, label: "STREAK" },
  {
    key: "status" as const,
    label: "STATUS",
    render: (value: Customer["status"]) => (
      <span className={value === "Active" ? "text-green-400" : "text-red-400"}>
        {value}
      </span>
    ),
  },
  { key: "mrr" as const, label: "MRR" },
];

export default function CustomerPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  return (
    <div>
      <Header title="Customers" />
      <div className="py-6 px-6 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <SearchBar
            placeholder="Search customers..."
            value={search}
            onChange={setSearch}
          />
          <FilterTabs
            options={["All", "Pro", "Free"]}
            value={filter}
            onChange={setFilter}
          />
        </div>
        <Table columns={columns} data={customers} total={customers.length} />
      </div>
    </div>
  );
}
