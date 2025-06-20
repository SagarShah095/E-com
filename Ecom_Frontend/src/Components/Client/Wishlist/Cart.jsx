import React from "react";
import { FaHeart, FaRegHeart, FaTrash } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  return (
    <>
      {[1, 2].map((_, i) => (
        <div key={i} className="flex gap-7  ">
          <div>
            <img
              src="https://via.placeholder.com/80"
              alt="wishlist-item"
              className="w-36 h-36 object-cover"
            />
          </div>
          <div className="flex justify-between w-full">
            <div className="w-fit">
              <h1 className="font-poppins font-semibold uppercase text-sm rounded-sm px-2 bg-[#F5F5F5] p-1 w-fit">
                New
              </h1>
              <h3 className="font-poppins uppercase">
                UrbanFlex Knit Sneakers
              </h3>
              <p className="font-medium font-poppins text-[#00000099]">
                Men’S Shoes
              </p>
              <p className="font-poppins font-medium text-[#00000099]">
                Size UK 10
              </p>
              <p className="font-poppins font-semibold">₹ 1,999.00 </p>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex gap-3 w-fit cursor-pointer h-fit items-center">
                <p className="uppercase font-poppins font-semibold">qty: 1</p>
                <FaChevronDown />
              </div>
              <div className="flex gap-1">
                <div className="bg-[#F5F5F5] p-2 cursor-pointer rounded-full">
                  <FaRegHeart />
                </div>
                <div className="bg-[#F5F5F5] p-2 cursor-pointer rounded-full">
                  <MdDeleteOutline className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="">
        <div className=" py-5 border-t h-full w-full space-y-4">
          <div className="space-y-4">
            <div className="text-sm flex flex-col gap-3">
              <label
                htmlFor="discount"
                className="block font-poppins font-semibold uppercase text-lg"
              >
                DISCOUNT CODE ?
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="discount"
                  placeholder="Enter Code"
                  className="border px-2 py-2 bg-[#F5F5F5] flex-1 focus:outline-none rounded-md border-[#00000026] text-sm"
                />
                <button className="bg-black text-white text-sm font-semibold rounded-full px-10 py-1 uppercase border border-[#00000026] duration-200  hover:bg-white hover:text-black">
                  APPLY
                </button>
              </div>
            </div>
            <hr />
            <div className="h-full flex">
              <div className="flex flex-col justify-between h-full w-full">
                <div className="text-sm  space-y-2 h-full">
                  <div className="flex justify-between">
                    <span className="font-poppins font-semibold uppercase text-[#00000080] text-sm">
                      SUB TOTAL
                    </span>
                    <span className="font-poppins font-semibold uppercase text-[#00000080] text-sm">
                      ₹3,998.00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins font-semibold uppercase text-[#00000080] text-sm">
                      ESTIMATED SHIPPING
                    </span>
                    <span className="font-poppins font-semibold uppercase text-[#00000080] text-sm">
                      ₹100.00
                    </span>
                  </div>
                  <div className="flex justify-between font-semibold text-base">
                    <span className="font-poppins font-semibold uppercase text-sm">
                      TOTAL
                    </span>
                    <span className="font-poppins font-semibold uppercase text-sm">
                      ₹4,088.00
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full">
              <button
                className="w-full gap-3 bg-black text-white py-3 text-sm rounded-full font-poppins font-bold 
              flex items-center justify-center mt-3"
              >
                <img src="/assets/Client/Home/bag.png" alt="" />
                <span>CHECKOUT SECURELY</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-2 justify-center mt-3">
          <img
            src="https://img.icons8.com/color/48/visa.png"
            alt="visa"
            className="w-10"
          />
          <img
            src="https://img.icons8.com/color/48/apple-pay.png"
            alt="apple-pay"
            className="w-10"
          />
          <img
            src="https://img.icons8.com/color/48/google-pay-india.png"
            alt="google-pay"
            className="w-10"
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
