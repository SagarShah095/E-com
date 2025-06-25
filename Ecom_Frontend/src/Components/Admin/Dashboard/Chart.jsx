import React, { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const weeklyData = [
  { month: "JAN", value: 2000 },
  { month: "MAR", value: 4500 },
  { month: "MAY", value: 4300 },
  { month: "JUN", value: 7500 },
  { month: "JULY", value: 5900 },
  { month: "AUG", value: 7800 },
  { month: "SEP", value: 9000 },
];

const monthlyData = [
  { month: "JAN", value: 2300 },
  { month: "MAR", value: 4900 },
  { month: "MAY", value: 6700 },
  { month: "JUN", value: 8300 },
  { month: "JULY", value: 5600 },
  { month: "AUG", value: 7400 },
  { month: "SEP", value: 9600 },
];

const yearlyData = [
  { month: "JAN", value: 2500 },
  { month: "MAR", value: 5200 },
  { month: "MAY", value: 8000 },
  { month: "JUN", value: 9000 },
  { month: "JULY", value: 6000 },
  { month: "AUG", value: 8900 },
  { month: "SEP", value: 12000 },
];


const Chart = () => {
  const [active, setActive] = useState("monthly");

  const getData = () => {
    switch (active) {
      case "weekly":
        return weeklyData;
      case "monthly":
        return monthlyData;
      case "yearly":
        return yearlyData;
      default:
        return monthlyData;
    }
  };

  return (
    <div className="bg-white p-5 rounded-md  w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-poppins uppercase font-semibold">SALES OVERVIEW</h2>
        <div className="flex gap-2">
          {["weekly", "monthly", "yearly"].map((label) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={`px-4 py-1 rounded-full text-sm font-medium font-poppins capitalize ${
                active === label
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={getData()} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000000" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#000000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#000"
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};


export default Chart