import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Like = () => {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4.5);
  const [activeColors, setActiveColors] = useState({});

  const navigate = useNavigate();

  const data = [
    {
      img: "/assets/Client/Home/shoes1.png",
      type: "Football TShoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#C53332",
      color2: "#3261C5",
      color3: "#000000",
      price: "₹3,999",
    },
    {
      img: "/assets/Client/Home/shoes2.png",
      type: "Football TShoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#C53332",
      color2: "#3261C5",
      color3: "#000000",
      price: "₹3,999",
    },
    {
      img: "/assets/Client/Home/shoes3.png",
      type: "Football TShoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#B67F8B",
      color2: "#B6967F",
      color3: "#84B67F",
      price: "₹3,999",
    },
    {
      img: "/assets/Client/Home/shoes2.png",
      type: "Football TShoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#C53332",
      color2: "#3261C5",
      color3: "#000000",
      price: "₹3,999",
    },
    {
      img: "/assets/Client/Home/shoes2.png",
      type: "Football TShoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#C53332",
      color2: "#3261C5",
      color3: "#000000",
      price: "₹3,999",
    },
    {
      img: "/assets/Client/Home/shoes3.png",
      type: "Football TShoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#C53332",
      color2: "#3261C5",
      color3: "#000000",
      price: "₹3,999",
    },
    {
      img: "/assets/Client/Home/shoes2.png",
      type: "Football TShoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#C53332",
      color2: "#3261C5",
      color3: "#000000",
      price: "₹3,999",
    },
    {
      img: "/assets/Client/Home/shoes3.png",
      type: "Football TShoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#C53332",
      color2: "#3261C5",
      color3: "#000000",
      price: "₹3,999",
    },
  ];
  return (
    <div>
      <div>
        <div className="mt-5 mb-2 pl-2">
            <h1 className="font-poppins font-semibold text-2xl uppercase">YOU MIGHT LIKE </h1>
            <p className="capitalize font-poppins font-normal text-base">we think these product is perfect for you.</p>
        </div>
        <div className=" grid grid-cols-4">
          {data.map((item, i) => (
            <div key={i} className="p-2 space-y-2">
              <div
                className="bg-[#EBEDEF] cursor-pointer relative p-3"
                onClick={() => navigate("/product-shoes")}
              >
                <img src={item.img} alt="" className="h-full mt-8" />
                <button className="bg-white hover:bg-[#dadce0] duration-300  mt-5 p-2 uppercase text-sm font-medium font-poppins">
                  {item.type}
                </button>
                <p className="bg-white hover:bg-[#dadce0] duration-300 cursor-pointer p-3 rounded-full w-fit absolute top-2 right-2">
                  <FaRegHeart />
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="uppercase  text-xs font-poppins font-medium">
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
      </div>
    </div>
  );
};

export default Like;
