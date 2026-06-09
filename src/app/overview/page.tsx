"use client";

import { useEffect, useState } from "react";
import { Coins, Crown, Users } from "lucide-react";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import RevenueCard from "../components/RevenueCard";
import MostStoredWords from "../components/MostStoredWord";
import Transactions from "../components/Transactions";
import { api, type Metrics, type TopWord, type Transaction } from "../../lib/api";

export default function OverviewPage() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [topWords, setTopWords] = useState<TopWord[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.metrics().then(setMetrics).catch(console.error);
    api.topWords().then(setTopWords).catch(console.error);
    api.transactions().then(setTransactions).catch(console.error);
  }, []);

  return (
    <div className="bg-background">
      <Header title="Overview" />
      <div className="py-6 px-6 flex flex-col gap-6">
        <div className="flex items-stretch gap-4">
          <SummaryCard
            icon={<Coins size={18} />}
            amount={metrics ? `$${metrics.mrr.toFixed(0)}` : "—"}
            label="Monthly revenue"
            change={metrics?.mrr_delta}
          />
          <SummaryCard
            icon={<Users size={18} />}
            amount={metrics ? String(metrics.customers) : "—"}
            label="Total customers"
            change={metrics?.customers_delta}
          />
          <SummaryCard
            icon={<Crown size={18} />}
            amount={metrics ? String(metrics.pro_count) : "—"}
            label="Pro users"
            change={metrics?.pro_delta}
          />
          <SummaryCard
            icon={<Coins size={18} />}
            amount={metrics ? String(metrics.active_today) : "—"}
            label="Active today"
            change={metrics?.active_delta}
          />
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-4">
            <RevenueCard />
          </div>
          <div className="col-span-2">
            <MostStoredWords topWords={topWords} />
          </div>
        </div>
        <Transactions transactions={transactions} />
      </div>
    </div>
  );
}
