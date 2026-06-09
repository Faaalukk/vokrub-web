"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { month: "Dec", value: 1800 },
  { month: "Jan", value: 2100 },
  { month: "Feb", value: 2400 },
  { month: "Mar", value: 2700 },
  { month: "Apr", value: 3100 },
  { month: "May", value: 3500 },
];

function formatValue(value: number) {
  return `$${(value / 1000).toFixed(1)}k`;
}

export default function RevenueCard() {
  return (
    <div className="bg-muted rounded-2xl p-6 flex-1 border-2 border-border">
      <h2 className="text-lg font-bold mb-6">Revenue</h2>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart
          data={data}
          barCategoryGap="30%"
          margin={{ top: 24, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12 }}
          />
          <YAxis hide />
          <Tooltip
            cursor={{ fill: "transparent" }}
            formatter={(value) => [formatValue(Number(value)), "Revenue"]}
            contentStyle={{
              background: "#1e2d24",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
          />
          <Bar
            dataKey="value"
            radius={[6, 6, 4, 4]}
            label={{
              position: "top",
              formatter: (v: unknown) => formatValue(Number(v)),
              fill: "#9ca3af",
              fontSize: 11,
            }}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={index === data.length - 1 ? "#52b788" : "#2d4a38"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
