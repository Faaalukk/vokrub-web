import { TrendingUp } from "lucide-react";

type SummaryCardProps = {
  icon: React.ReactNode;
  amount: string;
  label: string;
  change?: number;
};

export default function SummaryCard({
  icon,
  amount,
  label,
  change,
}: SummaryCardProps) {
  return (
    <div className="bg-muted rounded-2xl p-4 flex-1 flex flex-col gap-4 border-2 border-border">
      {/* Top row — icon + change */}
      <div className="flex items-center justify-between">
        <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-accent">
          {icon}
        </div>
        {change !== undefined && (
          <span
            className={`text-xs flex items-center gap-1 ${change >= 0 ? "text-green-400" : "text-red-400"}`}
          >
            <TrendingUp size={12} />
            {change >= 0 ? "+" : ""}
            {change}%
          </span>
        )}
      </div>

      {/* Amount + label */}
      <div>
        <p className="text-2xl font-bold">{amount}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
}
