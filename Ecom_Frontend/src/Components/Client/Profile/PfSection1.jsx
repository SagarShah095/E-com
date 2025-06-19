import React, { useState } from "react";
import PfName from "./PfName";
import PfOrders from "./PfOrder";

const PfSection1 = () => {
  const [selected, setSelected] = useState("personal information");

  const data = [
    { title: "personal information" },
    { title: "my order" },
    { title: "my address" },
    { title: "my wishlist" },
    { title: "notification" },
  ];

  const renderSection = () => {
    switch (selected) {
      case "personal information":
        return <PfName />;
      case "my order":
        return <PfOrders/>;
      case "my address":
        return <div>Address Component Here</div>;
      case "my wishlist":
        return <div>Wishlist Component Here</div>;
      case "notification":
        return <div>Notification Component Here</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-10 p-10">
      {/* Sidebar */}
      <div className="w-1/3 border-r pr-8">
        <h1 className="font-poppins font-semibold text-2xl uppercase mb-2">
          Akshay Dholakiya
        </h1>
        <p className="lowercase font-poppins font-medium bg-[#F2F2F2] p-3 rounded-md mb-6">
          akshay2004vbi@gmail.com
        </p>

        <div className="flex flex-col gap-3">
          {data.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelected(item.title)}
              className={`flex items-center gap-3 p-2 rounded-md cursor-pointer ${
                selected === item.title
                  ? "text-black"
                  : "text-[#00000080] hover:bg-gray-100"
              }`}
            >
              <span className="capitalize font-medium font-poppins">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Section */}
      <div className="w-2/3">{renderSection()}</div>
    </div>
  );
};

export default PfSection1;
