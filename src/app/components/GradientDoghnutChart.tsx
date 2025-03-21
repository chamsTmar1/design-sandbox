"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Issues", value: 36 },
  { name: "Snoozed", value: 20 },
  { name: "Good Health", value: 44 },
];

const COLORS = ["url(#redGradient)", "url(#greenGradient)", "url(#whiteGradient)"];

export default function GradientDoughnutChart() {
  return (
    <ResponsiveContainer width={400} height={300}>
      <PieChart>
        <defs>
          {/* Red Gradient - Stronger at the edges */}
          <radialGradient id="redGradient" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="rgba(254, 59, 59, 0.1)" />
            <stop offset="70%" stopColor="rgba(254, 59, 59, 0.5)" />
            <stop offset="100%" stopColor="rgba(254, 59, 59, 1)" />
          </radialGradient>

          {/* Green Gradient - Stronger at the edges */}
          <radialGradient id="greenGradient" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="rgba(35, 193, 147, 0.1)" />
            <stop offset="70%" stopColor="rgba(35, 193, 147, 0.5)" />
            <stop offset="100%" stopColor="rgba(35, 193, 147, 1)" />
          </radialGradient>

          {/* White Gradient - Stronger at the edges */}
          <radialGradient id="whiteGradient" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
            <stop offset="70%" stopColor="rgba(255, 255, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
          </radialGradient>
        </defs>

        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          stroke="none"
          cornerRadius={10}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
      </PieChart>
    </ResponsiveContainer>
  );
}
