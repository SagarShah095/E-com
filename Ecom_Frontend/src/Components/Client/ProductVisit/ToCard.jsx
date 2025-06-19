import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";

const ToCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSize, setActiveSize] = useState(null);

  const shoes = [
    "/assets/Client/Products/Shoe1.png",
    "/assets/Client/Products/Shoe2.png",
    "/assets/Client/Products/Shoe3.png",
  ];

  const sizes = ["uk 6", "uk 7", "uk 8", "uk 9", "uk 10", "uk 11"];
  return (
    <div className="flex justify-center items-center w-1/2 ">
      <div className="flex flex-col justify-center items-center gap-2 mt-5">
        <div>
          <h1 className="uppercase p-2 bg-[#F2F2F2] w-fit font-poppins font-semibold text-base">
            new
          </h1>
        </div>
        <div className="text-center flex flex-col gap-1">
          <h1 className="uppercase font-poppins font-semibold text-2xl">
            Nike Mercurial Superfly 10 Academy
          </h1>
          <p className="text-[#00000080] font-poppins">
            Multi-Ground High-Top Football Boot
          </p>
          <h1 className="font-poppins font-semibold text-2xl">₹3,999</h1>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className="flex gap-2">
            <div className="bg-[#F2F2F2] w-fit px-6 cursor-pointer rounded-full p-3">
              <FaRegHeart className="h-5 w-5" />
            </div>
            <div className="bg-[#F2F2F2] flex gap-1 font-medium font-poppins w-fit px-6 cursor-pointer rounded-full p-3">
              <IoIosStar className="h-5 w-5" />4
            </div>
          </div>
          <div className="flex gap-2">
            {shoes.map((src, index) => (
              <img
                key={index}
                src={src}
                alt=""
                className={`cursor-pointer border border-black/0 rounded-xl ${
                  activeIndex === index ? " border-black/100" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <div>
            <h1 className="font-poppins font-semibold text-[#00000080]">
              Black / Sport Black
            </h1>
          </div>
          <div className="w-full flex flex-col gap-3">
            <div className="flex justify-between w-full">
              <h1 className="font-medium font-poppins">Select A Size</h1>
              <h1 className="font-medium font-poppins">Size Guide</h1>
            </div>
            <div className="flex gap-2 bg-[#F2F2F2] p-5 rounded-lg">
              {sizes.map((item, index) => (
                <h1
                  key={index}
                  className={`uppercase p-2 pl-3 font-poppins font-semibold rounded-lg text-lg cursor-pointer
            ${
              activeSize === index
                ? "bg-black text-white"
                : "bg-white text-black"
            }
          `}
                  onClick={() => setActiveSize(index)}
                >
                  {item}
                </h1>
              ))}
            </div>
            <div className="w-full">
              <button className="bg-black font-poppins uppercase text-white p-3 font-semibold w-full rounded-full">
                ADD TO CART
              </button>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between w-full cursor-pointer">
                <h1 className="uppercase font-poppins font-semibold">DESCRIPTION</h1>
                <FaChevronRight />
            </div>
            <div className="flex justify-between w-full cursor-pointer my-2">
                <h1 className="uppercase font-poppins font-semibold">DELIVERY & RETURNS</h1>
                <FaChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToCard;
