import type { Transaction as ApiTransaction } from "../../lib/api";

type DisplayTx = {
  initials: string;
  color: string;
  name: string;
  plan: string;
  status: "Paid" | "Failed";
  amount: string;
};

const COLORS = ["#c9a96e", "#e07b6a", "#6ab0a8", "#8faa7c", "#7b9ec9", "#a891c9", "#c98a71"];

function toDisplay(tx: ApiTransaction, i: number): DisplayTx {
  return {
    initials: tx.name.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase(),
    color: COLORS[i % COLORS.length],
    name: tx.name,
    plan: tx.plan === "pro_annual" ? "Pro · annual" : "Pro · monthly",
    status: tx.status === "paid" ? "Paid" : "Failed",
    amount: `$${tx.amount}`,
  };
}

const FALLBACK: DisplayTx[] = [
  { initials: "AT", color: "#c9a96e", name: "Aiko Tanaka", plan: "Pro · monthly", status: "Paid", amount: "$6" },
  { initials: "OH", color: "#e07b6a", name: "Omar Haddad", plan: "Pro · monthly", status: "Paid", amount: "$6" },
  { initials: "DR", color: "#6ab0a8", name: "Daniel Reyes", plan: "Pro · annual", status: "Paid", amount: "$58" },
];

export default function Transactions({ transactions }: { transactions?: ApiTransaction[] }) {
  const rows: DisplayTx[] =
    transactions && transactions.length > 0
      ? transactions.map(toDisplay)
      : FALLBACK;

  return (
    <div className="bg-muted rounded-2xl p-6 border-2 border-border">
      <h2 className="text-lg font-bold mb-4">Recent transactions</h2>
      <div className="flex flex-col divide-y divide-gray-800">
        {rows.map((tx) => (
          <div key={tx.name} className="flex items-center gap-4 py-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-gray-900 shrink-0"
              style={{ backgroundColor: tx.color }}
            >
              {tx.initials}
            </div>
            <span className="w-32 text-sm font-medium">{tx.name}</span>
            <span className="w-32 text-sm text-gray-400">{tx.plan}</span>
            <div className="w-24 flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${tx.status === "Paid" ? "bg-green-400" : "bg-red-400"}`} />
              <span className={`text-sm ${tx.status === "Paid" ? "text-green-400" : "text-red-400"}`}>{tx.status}</span>
            </div>
            <span className="flex-1 text-sm text-gray-500">Recent</span>
            <span className="text-sm font-semibold">{tx.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
