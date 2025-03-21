"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 190, mobile: 73 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 250, mobile: 160 },
  { month: "August", desktop: 270, mobile: 180 },
  { month: "September", desktop: 290, mobile: 190 },
  { month: "October", desktop: 310, mobile: 200 },
  { month: "November", desktop: 330, mobile: 220 },
  { month: "December", desktop: 350, mobile: 240 },
];

export function YearBarChart() {
    return (
      <div className="space-y-4">
        <div 
          className="w-full overflow-x-auto bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('/bg-image.jpg')" }}
        >
          <ResponsiveContainer width={1500} height={300}>
            <BarChart data={chartData} margin={{ left: 10, right: 30 }}>
              <defs>
                <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(254, 59, 59, 1)" />
                  <stop offset="100%" stopColor="rgba(254, 59, 59, 0.5)" />
                </linearGradient>
                <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(35, 193, 147, 1)" />
                  <stop offset="100%" stopColor="rgba(35, 193, 147, 0.5)" />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip cursor={{ fill: "rgba(255, 255, 255, 0.1)" }} />
              <Bar dataKey="desktop" fill="url(#redGradient)" radius={4} barSize={15} />
              <Bar dataKey="mobile" fill="url(#greenGradient)" radius={4} barSize={15} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
  