import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Select from "react-select";
import { FaTrash } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

const AddOrderSidebar = ({  setIsOpen }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [size, setSize] = useState(null);

  const options = [
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
    { value: "kids", label: "Kids" },
    { value: "unisex", label: "Unisex" },
  ];

  const categoryOptions = [
    { value: "sport", label: "Sport" },
    { value: "casual", label: "Casual" },
    { value: "formal", label: "Formal" },
  ];

  const subCategoryOptions = [
    { value: "running", label: "Running" },
    { value: "walking", label: "Walking" },
    { value: "gym", label: "Gym" },
  ];

  const sizeOptions = [
    { value: "s", label: "S" },
    { value: "m", label: "M" },
    { value: "l", label: "L" },
    { value: "xl", label: "XL" },
  ];

  const rows = [
    {
      id: 1,
      image: "/assets/Admin/Dashboard/product.png", // Replace with your image path
      sku: "sku",
      barcode: "barcode",
      price: "5000.00",
      salePrice: "5000.00",
      qty: "20",
      size: "UKB",
      color: "black",
    },
    {
      id: 2,
      image: "/assets/Admin/Dashboard/product.png", // Replace with your image path
      sku: "sku",
      barcode: "barcode",
      price: "5000.00",
      salePrice: "5000.00",
      qty: "20",
      size: "UKB",
      color: "black",
    },
  ];

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
          <h1 className="font-poppins font-semibold text-lg">Add New Order</h1>
          <RxCross2 className="text-2xl cursor-pointer" 
          onClick={() => setIsOpen(false)}/>
        </div>
        <div className="flex flex-col justify-between h-[90vh]">
          <div className="mt-3 space-y-4">
            {/* Product Name */}
            <div>
              <h1 className="font-poppins text-sm uppercase">Customer</h1>
              <select
                type="dropdown"
                className="placeholder:uppercase cursor-pointer font-poppins uppercase w-full p-3 focus:outline-none border border-[#00000080] rounded-md"
                placeholder="Enter product name"
              >
                <option value="" defaultChecked>
                  Select Option
                </option>
              </select>
            </div>

            {/* SKU */}
            <div>
              <h1 className="font-poppins text-sm uppercase">Order Date</h1>
              <input
                type="date"
                className="w-full uppercase font-poppins text-[#00000080] p-3 focus:outline-none border border-[#00000080] rounded-md"
              />
            </div>

            {/* Category and Subcategory */}
            <div>
              <h1 className="font-poppins text-sm uppercase">Payment Method</h1>
              <select
                type="dropdown"
                className="placeholder:uppercase cursor-pointer font-poppins uppercase w-full p-3 focus:outline-none border border-[#00000080] rounded-md"
                placeholder="Enter product name"
              >
                <option value="" defaultChecked>
                  Select Option
                </option>
              </select>
            </div>

            {/* Multi Select (Gender) and Size */}

            <div>
              <h1 className="font-poppins text-sm uppercase">
                Shipping Address
              </h1>
              <textarea
                name=""
                id=""
                rows={5}
                className="w-full border border-[#00000080] placeholder:text-[#00000080] rounded-md p-1 mt-2"
                placeholder="Enter Shipping Address"
              ></textarea>
            </div>
            <div>
              <h1 className="font-poppins text-sm uppercase">Order Notes</h1>
              <textarea
                name=""
                id=""
                rows={5}
                className="w-full border border-[#00000080] placeholder:text-[#00000080] rounded-md p-1 mt-2"
                placeholder="Enter Order Notes (optional)"
              ></textarea>
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

export default AddOrderSidebar;
