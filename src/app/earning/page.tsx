import { Calendar, Check, Coins, Crown, Users, X } from "lucide-react";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import RevenueCard from "../components/RevenueCard";
import Table from "../components/Table";

type Transaction = {
  id: number;
  image?: string;
  name: string;
  plan: string;
  date: string;
  status: string;
  amount: string;
};

const transaction: Transaction[] = [
  {
    id: 1,
    image: "",
    name: "Dragon Night",
    plan: "Pro",
    date: "Today",
    status: "Paid",
    amount: "$6",
  },
  {
    id: 2,
    image: "",
    name: "Weaver",
    plan: "Pro",
    date: "Today",
    status: "Paid",
    amount: "$6",
  },
  {
    id: 3,
    image: "",
    name: "Riki",
    plan: "Pro",
    date: "Yesterday",
    status: "Failed",
    amount: "$6",
  },
  {
    id: 4,
    image: "",
    name: "Morphing",
    plan: "Pro",
    date: "Yesterday",
    status: "Paid",
    amount: "$6",
  },
];

const columns = [
  {
    key: "name" as const,
    label: "CUSTOMER",
    render: (_value: Transaction["name"], row: Transaction) => (
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
  { key: "date" as const, label: "DATE" },
  {
    key: "status" as const,
    label: "STATUS",
    render: (value: Transaction["status"]) => (
      <span className={value === "Paid" ? "text-green-400" : "text-red-400"}>
        {value}
      </span>
    ),
  },
  { key: "amount" as const, label: "AMOUNT" },
];
export default function EarningPage() {
  return (
    <div className="bg-background">
      <Header title="Earnings & transactions" />
      <div className="py-6 px-6 flex flex-col gap-6">
        <div className="flex items-stretch gap-4">
          <SummaryCard
            icon={<Coins size={18} />}
            amount="$3,540"
            label="Net this month"
          ></SummaryCard>
          <SummaryCard
            icon={<Check size={18} />}
            amount="$88"
            label="Collected (7d)"
          ></SummaryCard>
          <SummaryCard
            icon={<X size={18} />}
            amount="$1"
            label="Failed (7d)"
          ></SummaryCard>
          <SummaryCard
            icon={<Calendar size={18} />}
            amount="Jun 1"
            label="Next payout"
          ></SummaryCard>
        </div>
        <div>
          <RevenueCard />
        </div>
        <div>
          <Table
            columns={columns}
            data={transaction}
            total={transaction.length}
          />
        </div>
      </div>
    </div>
  );
}
