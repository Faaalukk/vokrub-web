"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";
import FilterTabs from "./components/FilterTab";
import { api, type Customer } from "../../lib/api";

const columns = [
  {
    key: "name" as const,
    label: "CUSTOMER",
    render: (_value: Customer["name"], row: Customer) => (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-gray-900">
          {row.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <span>{row.name}</span>
      </div>
    ),
  },
  { key: "plan" as const, label: "PLAN" },
  { key: "role" as const, label: "ROLE" },
  { key: "streak" as const, label: "STREAK" },
  {
    key: "status" as const,
    label: "STATUS",
    render: (value: Customer["status"]) => (
      <span className={value === "active" ? "text-green-400" : "text-red-400"}>
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </span>
    ),
  },
];

export default function CustomerPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    api.getCustomers().then(setCustomers).catch(console.error);
  }, []);

  const filtered = customers.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === "All" ||
      (filter === "Pro" && c.plan.includes("pro")) ||
      (filter === "Free" && c.plan === "free");
    return matchSearch && matchFilter;
  });

  return (
    <div>
      <Header title="Customers" />
      <div className="py-6 px-6 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <SearchBar placeholder="Search customers..." value={search} onChange={setSearch} />
          <FilterTabs options={["All", "Pro", "Free"]} value={filter} onChange={setFilter} />
        </div>
        <Table columns={columns} data={filtered} total={filtered.length} />
      </div>
    </div>
  );
}
