import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { MdOutlineArrowUpward } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import Dashboard from "./../../../Pages/Admin/AdminPages/Dashboard";

const Revenue = () => {
  const Data = [
    {
      title: "Total Revenue",
      price: "₹89,452",
      icon1: <MdOutlineArrowUpward />,
      desc: "12.5% vs last month",
      icon2: <FaIndianRupeeSign className="w-7 h-full" />,
    },
    {
      title: "order",
      price: "9,452",
      icon1: <MdOutlineArrowUpward />,
      desc: "12.5% vs last month",
      icon2: <FiShoppingBag className="w-7 h-full" />,
    },
    {
      title: "customer",
      price: "7,452",
      icon1: <MdOutlineArrowUpward />,
      desc: "12.5% vs last month",
      icon2: <GoPerson className="w-7 h-full" />,
    },
    {
      title: "order",
      price: "9,452",
      icon1: <MdOutlineArrowUpward />,
      desc: "12.5% vs last month",
      icon2: <BsBoxSeam className="w-7 h-full" />,
    },
  ];

  return (
    <div>
      <div>
        <div>
          <h1 className="font-poppins font-semibold uppercase text-lg">
            Dashboard
          </h1>
        </div>
        <div className="flex justify-between mt-6">
          {Data.map((item, i) => (
            <div key={i} className="flex bg-white p-4 rounded-md ">
              <div className="flex flex-col gap-6">
                <div>
                  <h1 className="font-poppins uppercase text-sm font-medium">
                    {item.title}
                  </h1>
                  <h1 className="font-poppins font-semibold text-lg">
                    {item.price}
                  </h1>
                </div>
                <div className="flex items-center">
                  {item.icon1}
                  <h1 className="font-poppins font-medium text-sm">
                    {item.desc}
                  </h1>
                </div>
              </div>
              <div className="bg-[#EEEEEE] rounded-full p-3 h-fit">
                {item.icon2}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Revenue;
