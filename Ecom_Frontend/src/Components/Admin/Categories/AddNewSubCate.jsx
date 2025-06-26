import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Select from "react-select";
import { FaTrash } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

const AddNewSubCate = ({setSubCate}) => {
  return (
    <div
      className={
        `fixed top-0 right-0 h-full w-[42%] scrollbar-hide bg-white p-3 px-5 overflow-y-auto rounded-l-md 
      transform transition-transform duration-300 ease-in-out 
      `
        //   ${setSide ? "translate-x-0" : "translate-x-full"} z-50 shadow-xl
      }
    >
      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-poppins font-semibold text-lg">Add New Subcategory</h1>
          <RxCross2
            className="text-2xl cursor-pointer"
            onClick={() => setSubCate(false)}
          />
        </div>
        <div className="flex flex-col justify-between h-[90vh]">
          <div className="mt-3 space-y-4">
            {/* Product Name */}
            <div>
              <h1 className="font-poppins text-sm uppercase">Subcategory Name</h1>
              <input
                type="dropdown"
                className="placeholder:capitalize cursor-pointer font-poppins mt-2 uppercase w-full p-3 focus:outline-none border border-[#00000080] rounded-md"
                placeholder="Enter Subcategory name"
              />
            </div>

            {/* SKU */}
            <div>
              <h1 className="font-poppins text-sm uppercase">Description</h1>
              <textarea
                rows={6}
                type="date"
                placeholder="Enter Subcategory description"
                className="w-full uppercase mt-2 font-poppins placeholder:capitalize text-[#00000080] p-3 focus:outline-none border border-[#00000080] rounded-md"
              />
            </div>

            {/* Category and Subcategory */}
            <div>
              <h1 className="font-poppins text-sm uppercase">Subcategory Image</h1>
              <div className="h-fit  rounded-md mt-2">
                <input
                  type="file"
                  placeholder="Enter category description"
                  className="w-full uppercase font-poppins cursor-pointer hide border-dashed h-[25vh] placeholder:capitalize text-[#00000080] p-3 focus:outline-none border border-[#00000080] rounded-md"
                />
              </div>
            </div>
            <div>
              <h1 className="font-poppins text-sm uppercase">Status</h1>
              <div className="flex gap-3 mt-2">
                <div className="flex gap-2">
                  <input type="radio" className="accent-black cursor-pointer" />
                  <h1 className="font-poppins text-sm">Active</h1>
                </div>
                <div className="flex gap-2">
                  <input type="radio" className="accent-black cursor-pointer" />
                  <h1 className="font-poppins text-sm">Inactive</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="uppercase font-medium font-poppins mt-5 flex justify-end gap-2">
              <button className="border border-black px-4 py-3 rounded-lg">
                Cancel
              </button>
              <button className="bg-black text-white px-4 py-3 rounded-lg">
                Add Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewSubCate;
