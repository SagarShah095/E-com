import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const SalesHero = () => {
  const [current, setCurrent] = useState(0);
    const [activeColors, setActiveColors] = useState({});

  const data = [
    {
      img: "/assets/Client/Home/shoes1.png",
      type: "Football Shoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#C53332",
      color2: "#3261C5",
      color3: "#000000",
      price: "₹3,999",
    },
    {
      img: "/assets/Client/Home/shoes2.png",
      type: "Football Shoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#C53332",
      color2: "#3261C5",
      color3: "#000000",
      price: "₹3,999",
    },
    {
      img: "/assets/Client/Home/shoes3.png",
      type: "Football Shoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#B67F8B",
      color2: "#B6967F",
      color3: "#84B67F",
      price: "₹3,999",
    },
    {
      img: "/assets/Client/Home/shoes2.png",
      type: "Football Shoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#C53332",
      color2: "#3261C5",
      color3: "#000000",
      price: "₹3,999",
    },
    {
      img: "/assets/Client/Home/shoes2.png",
      type: "Football Shoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#C53332",
      color2: "#3261C5",
      color3: "#000000",
      price: "₹3,999",
    },
    {
      img: "/assets/Client/Home/shoes3.png",
      type: "Football Shoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#C53332",
      color2: "#3261C5",
      color3: "#000000",
      price: "₹3,999",
    },
  ];

  return (
        <div className="grid w-[80%] grid-cols-3">
          {data.map((item, i) => (
            <div key={i} className="p-2 space-y-2">
              <div className="bg-[#EBEDEF] relative p-3">
                <img src={item.img} alt="" className="h-[70%] mt-8" />
                <button className="bg-white hover:bg-[#dadce0] duration-300  mt-5 p-2 uppercase text-sm font-semibold font-poppins">
                  {item.type}
                </button>
                <p className="bg-white hover:bg-[#dadce0] duration-300 cursor-pointer p-3 rounded-full w-fit absolute top-2 right-2">
                  <FaRegHeart />
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="uppercase text-xs font-poppins font-medium">
                  {item.title}
                </div>
                <div className="flex items-center text-sm gap-1">
                  <IoStar /> 4
                </div>
              </div>
              <div className="flex gap-1">
                {[item.color1, item.color2, item.color3].map((color, idx) => (
                  <div
                    key={idx}
                    onClick={() =>
                      setActiveColors((prev) => ({
                        ...prev,
                        [i]: color,
                      }))
                    }
                    style={{ backgroundColor: color }}
                    className={`w-5 h-5 cursor-pointer rounded-full border-2 ${
                      activeColors[i] === color
                        ? "border-black"
                        : "border-transparent"
                    }`}
                  ></div>
                ))}
              </div>
              <div>
                <h1 className="font-poppins font-medium">{item.price}</h1>
              </div>
            </div>
          ))}
        </div>
  );
};

export default SalesHero;
