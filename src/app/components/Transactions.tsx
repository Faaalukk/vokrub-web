type Transaction = {
  initials: string;
  color: string;
  name: string;
  plan: string;
  status: "Paid" | "Failed";
  date: string;
  amount: string;
};

const transactions: Transaction[] = [
  {
    initials: "AT",
    color: "#c9a96e",
    name: "Aiko Tanaka",
    plan: "Pro · monthly",
    status: "Paid",
    date: "Today, 09:12",
    amount: "$6",
  },
  {
    initials: "OH",
    color: "#e07b6a",
    name: "Omar Haddad",
    plan: "Pro · monthly",
    status: "Paid",
    date: "Today, 07:48",
    amount: "$6",
  },
  {
    initials: "DR",
    color: "#6ab0a8",
    name: "Daniel Reyes",
    plan: "Pro · annual",
    status: "Paid",
    date: "Yesterday",
    amount: "$58",
  },
  {
    initials: "LW",
    color: "#8faa7c",
    name: "Liam Walsh",
    plan: "Pro · monthly",
    status: "Failed",
    date: "Yesterday",
    amount: "$6",
  },
  {
    initials: "MO",
    color: "#7b9ec9",
    name: "Maya Okafor",
    plan: "Pro · monthly",
    status: "Paid",
    date: "May 28",
    amount: "$6",
  },
];

export default function Transactions() {
  return (
    <div className="bg-muted rounded-2xl p-6 border-2 border-border">
      <h2 className="text-lg font-bold mb-4">Recent transactions</h2>
      <div className="flex flex-col divide-y divide-gray-800">
        {transactions.map((tx) => (
          <div key={tx.name} className="flex items-center gap-4 py-3">
            {/* Avatar */}
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-gray-900 shrink-0"
              style={{ backgroundColor: tx.color }}
            >
              {tx.initials}
            </div>

            {/* Name */}
            <span className="w-32 text-sm font-medium">{tx.name}</span>

            {/* Plan */}
            <span className="w-32 text-sm text-gray-400">{tx.plan}</span>

            {/* Status */}
            <div className="w-24 flex items-center gap-1.5">
              <span
                className={`w-2 h-2 rounded-full ${tx.status === "Paid" ? "bg-green-400" : "bg-red-400"}`}
              />
              <span
                className={`text-sm ${tx.status === "Paid" ? "text-green-400" : "text-red-400"}`}
              >
                {tx.status}
              </span>
            </div>

            {/* Date */}
            <span className="flex-1 text-sm text-gray-500">{tx.date}</span>

            {/* Amount */}
            <span className="text-sm font-semibold">{tx.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
