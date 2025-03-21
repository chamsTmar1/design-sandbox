"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Malware", value: 15 },
  { name: "Runtime Detections", value: 7 },
  { name: "Potentially Unwanted", value: 10 },
  { name: "Mobile Devices", value: 5 },
  { name: "Security", value: 14 },
];

const barColors = ["#3F7CD5", "#3F7CD5", "#3F7CD5", "#3F7CD5", "#3F7CD5"];

export default function SolidBarChart() {
  return (
    <div className="flex items-center justify-center w-full p-4 rounded-xl">
      <ResponsiveContainer width={1000} height={300}>
        <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
          {/* Y-Axis (Categories) */}
          <YAxis
            dataKey="name"
            type="category"
            tick={{ textAnchor: "start", dy: 0, dx: -175, fill: "#333" }}
            tickLine={false}
            axisLine={false}
            width={300}
          />

          {/* X-Axis (Values) */}
          <XAxis type="number" tick={{ fill: "#666" }} tickLine={false} axisLine={false} />

          <Tooltip
            cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
            contentStyle={{ background: "#fff", borderRadius: "10px", color: "#000", border: "1px solid #ddd" }}
          />

          {/* Bars */}
          <Bar dataKey="value" radius={[5, 5, 5, 5]} barSize={23}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
