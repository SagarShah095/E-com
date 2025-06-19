import React from "react";
import { LuCheck } from "react-icons/lu";
import { IoIosStar } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const CustReview = () => {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <div>
          <h1 className="capitalize font-poppins font-medium">
            akshay dholakya
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <LuCheck className="bg-[#008E26] p-1 text-white rounded-full font-semibold" />
          <p className="font-poppins text-[#00000080] text-sm">
            Verified buyer
          </p>
        </div>
        <div className="flex gap-3">
          <h1 className="font-poppins  font-semibold">4</h1>
          <div className="flex items-center font-semibold text-[#F2AE14] gap-1">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <span className="text-[#0000000F]">
              <IoIosStar />
            </span>
          </div>
          <div>
            <li className="font-poppins text-[#00000080]">05 day ago</li>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-poppins font-semibold text-2xl">
            “Great traction and grip!”
          </h1>
          <p className="font-poppins">
            Wore these on both turf and grass — no slipping at all. Perfect for
            quick direction changes.
          </p>
        </div>
        <div className="flex gap-4">
          <BiSolidLike className="cursor-pointer" />
          <BiDislike className="cursor-pointer" />
        </div>
      </div>

      <hr className="border border-[#0000001A] my-7 " />

      <div className="flex flex-col pb-7 gap-1">
        <div>
          <h1 className="capitalize font-poppins font-medium">
            akshay dholakya
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <LuCheck className="bg-[#008E26] p-1 text-white rounded-full font-semibold" />
          <p className="font-poppins text-[#00000080] text-sm">
            Verified buyer
          </p>
        </div>
        <div className="flex gap-3">
          <h1 className="font-poppins  font-semibold">4</h1>
          <div className="flex items-center font-semibold text-[#F2AE14] gap-1">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <span className="text-[#0000000F]">
              <IoIosStar />
            </span>
          </div>
          <div>
            <li className="font-poppins text-[#00000080]">05 day ago</li>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-poppins font-semibold text-2xl">
            “Great traction and grip!”
          </h1>
          <p className="font-poppins">
            Wore these on both turf and grass — no slipping at all. Perfect for
            quick direction changes.
          </p>
        </div>
        <div className="flex gap-4">
          <BiSolidLike className="cursor-pointer" />
          <BiDislike className="cursor-pointer" />
        </div>
      </div>


    </div>
  );
};

export default CustReview;
