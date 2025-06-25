import React from "react";

// Sample low-stock items
const lowStockItems = [
  {
    id: 1,
    name: "Nike CITY 'Sand'",
    stockLeft: 2,
    image: "/assets/Admin/Dashboard/product.png", // Replace with your actual image path
  },
  {
    id: 2,
    name: "Nike CITY 'Sand'",
    stockLeft: 2,
    image: "/assets/Admin/Dashboard/product.png",
  },
  {
    id: 3,
    name: "Nike CITY 'Sand'",
    stockLeft: 2,
    image: "/assets/Admin/Dashboard/product.png",
  },
];

const LowStockAlert = () => {
  return (
    <div className="bg-white rounded-lg p-6 w-[70%]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold font-poppins  uppercase">
          LOW STOCK ALERT
        </h2>
        <span className="text-xs text-[#FF5656] bg-[#F5F5F5] px-3 py-1 rounded-md font-semibold cursor-default">
          {lowStockItems.length} ITEMS
        </span>
      </div>

      {/* List of low-stock items */}
      <div className="space-y-3">
        {lowStockItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-[#F5F5F5] p-3 rounded-md"
          >
            <img
              src={item.image}
              alt="product"
              className="w-14 h-14 object-contain"
            />
            <div>
              <h3 className=" font-poppins ">{item.name}</h3>
              <p className="text-xs text-[#FF5656] font-poppins">
                {item.stockLeft} left{" "}
                <span className="text-black font-normal">Restock</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="mt-6">
        <button className="w-full font-poppins capitalize font-medium bg-[#F3F3F3] hover:bg-gray-200 transition rounded-md py-2  text-black">
          View Inventory Report
        </button>
      </div>
    </div>
  );
};

export default LowStockAlert;
