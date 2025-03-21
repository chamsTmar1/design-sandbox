"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Malware", value: 15 },
  { name: "Runtime Detections", value: 7 },
  { name: "Potentially Unwanted", value: 10 },
  { name: "Mobile Devices", value: 5 },
  { name: "Security", value: 14 },
];

export default function GradientBarChart() {
  return (
    <div className="flex items-center justify-centear w-full p-4 rounded-xl">
      <ResponsiveContainer width={1000} height={300}>
        <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="barGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>

          {/* Y-Axis (Categories) */}
          <YAxis
            dataKey="name"
            type="category"
            tick={{ textAnchor: "start", dy: 0, dx: -175, fill: "#ffffff" }}
            tickLine={false}
            axisLine={false}
            width={300}
          />

          {/* X-Axis (Values) */}
          <XAxis type="number" tick={{ fill: "gray" }} tickLine={false} axisLine={false} />

          <Tooltip
            cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
            contentStyle={{ background: "#222", borderRadius: "10px", color: "#fff" }}
          />

          {/* Bars */}
          <Bar dataKey="value" fill="url(#barGradient)" radius={[5, 5, 5, 5]} barSize={23}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
