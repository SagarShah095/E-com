import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// Sample data (you can use actual prices instead of % if needed)
const data = [
  { name: "MEN", value: 4300, color: "#FF6B6B" },
  { name: "WOMEN", value: 3800, color: "#FFBD59" },
  { name: "KIDS", value: 1900, color: "#A0FF83" },
];

const SalesByCategory = () => {
  return (
    <div className="bg-white rounded-lg p-6 w-full ">
      <div className="flex justify-between items-center w-full">
        <h2 className="font-poppins uppercase font-semibold">
          SALES BY CATEGORY
        </h2>
        <button className="text-sm font-poppins font-semibold ">
          VIEW REPORT
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Donut Chart */}
        <div className="w-full flex md:w-1/2 h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={4}
                stroke="none"
                className="flex"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              {/* ✅ Tooltip shows value on hover */}
              <Tooltip
                formatter={(value, name) => [`₹${value}`, name]}
                contentStyle={{
                  borderRadius: "8px",
                  fontSize: "14px",
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Right: Legends */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col gap-2 mt-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center w-40"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <span className="text-sm font-medium">₹{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesByCategory;
