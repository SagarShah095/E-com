import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { LuCheck } from "react-icons/lu";

const Review = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const data = [
    {
      value: "5(5)",
      color: "#000000",
    },
    {
      value: "4(4)",
      color: "#F2F2F2",
    },
    {
      value: "3(0)",
      color: "#F2F2F2",
    },
    {
      value: "2(2)",
      color: "#F2F2F2",
    },
    {
      value: "1(0)",
      color: "#F2F2F2",
    },
  ];
  return (
    <div className="flex gap-10 my-16">
      <div className="w-full  flex flex-col gap-3">
        <div>
          <h1 className="uppercase font-poppins text-2xl font-semibold">
            reviews
          </h1>
        </div>
        <div className="flex gap-3">
          <h1 className="font-poppins text-2xl font-semibold">4.8</h1>
          <div className="flex items-center text-2xl font-semibold text-[#F2AE14] gap-1">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <span className="text-[#0000000F]">
              <IoIosStar />
            </span>
          </div>
        </div>
        <div>
          <h1 className="font-poppins font-medium text-base capitalize">
            based in 41 review
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <LuCheck className="bg-black p-1 h-[23px] w-[23px] rounded-full text-white" />
          <h1 className="font-poppins font-medium text-lg capitalize">
            100% who purchased would recommend this
          </h1>
        </div>
        <div>
          <h1 className="uppercase font-poppins font-semibold text-xl">
            rating snapshort
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          {data.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <h1 className="w-fit font-poppins font-medium ">{item.value}</h1>
              <hr
                style={{
                  backgroundColor: item.color || "#000",
                  height: "7px",
                  width: "100%",
                  border: "none",
                  display: "block",
                }}
                className="rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div>
          <h1 className="font-poppins font-semibold uppercase text-xl">
            avrage rating
          </h1>
        </div>
        <div className="flex gap-3">
          {["length", "value", "sizing", "quality", "comfort"].map(
            (item, i) => (
              <div key={i} className="flex">
                <h1
                  className={`font-poppins font-semibold cursor-pointer w-fit rounded-full px-4 py-1 
              ${
                activeIndex === i
                  ? "bg-black text-white"
                  : "bg-[#F2F2F2] text-black"
              }`}
                  onClick={() => setActiveIndex(i)}
                >
                  {item}
                </h1>
              </div>
            )
          )}
        </div>
        <div>
          <hr
            style={{
              backgroundColor: "#F2F2F2" || "#000",
              height: "7px",
              width: "100%",
              border: "none",
              display: "block",
            }}
            className="rounded-full"
          />
        </div>
        <div className="w-full flex justify-between items-center">
            <h1 className="uppercase font-semibold font-poppins">
                1 star
            </h1>
            <h1 className="uppercase font-semibold font-poppins">
                5 star
            </h1>
        </div>
      </div>
    </div>
  );
};

export default Review;
