import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Select from "react-select";
import { FaTrash } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

const ProductRightBar = ({ setSide }) => {
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
      className={`fixed top-0 right-0 h-full w-[42%] bg-white p-3 px-5 overflow-y-auto rounded-l-md 
      transform transition-transform duration-300 ease-in-out 
      ${setSide ? "translate-x-0" : "translate-x-full"} z-50 shadow-xl`}
    >
      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-poppins font-semibold text-lg">
            Add New Product
          </h1>
          <RxCross2
            className="text-2xl cursor-pointer"
            onClick={() => setSide(false)}
          />
        </div>

        <div className="mt-3 space-y-4">
          {/* Product Name */}
          <div>
            <h1 className="font-poppins text-sm uppercase">Product Name</h1>
            <input
              type="text"
              className="placeholder:uppercase w-full p-3 focus:outline-none border border-[#00000080] rounded-md"
              placeholder="Enter product name"
            />
          </div>

          {/* SKU */}
          <div>
            <h1 className="font-poppins text-sm uppercase">SKU</h1>
            <input
              type="text"
              className="w-full p-3 focus:outline-none border border-[#00000080] rounded-md"
              placeholder="Enter SKU"
            />
          </div>

          {/* Category and Subcategory */}
          <div className="flex gap-3">
            <div className="w-full">
              <h1 className="font-poppins text-sm uppercase mb-1">Category</h1>
              <Select
                options={categoryOptions}
                value={category}
                onChange={setCategory}
                placeholder="Select Category"
                className="focus:outline-none"
              />
            </div>
            <div className="w-full">
              <h1 className="font-poppins text-sm uppercase mb-1">
                Subcategory
              </h1>
              <Select
                options={subCategoryOptions}
                value={subCategory}
                onChange={setSubCategory}
                placeholder="Select Subcategory"
                className="focus:outline-none"
              />
            </div>
          </div>

          {/* Multi Select (Gender) and Size */}
          <div className="flex gap-3">
            <div className="w-full">
              <h1 className="font-poppins text-sm uppercase mb-1">
                Select Categories
              </h1>
              <Select
                isMulti
                options={options}
                value={selectedOptions}
                onChange={setSelectedOptions}
                placeholder="Select..."
                className="focus:outline-none"
              />
            </div>
            <div className="w-full">
              <h1 className="font-poppins text-sm uppercase mb-1">Size</h1>
              <Select
                options={sizeOptions}
                value={size}
                onChange={setSize}
                placeholder="Select Size"
                className="focus:outline-none"
              />
            </div>
          </div>
          <div>
            <h1 className="font-poppins text-sm uppercase">
              Product Description 1
            </h1>
            <textarea
              name=""
              id=""
              rows={5}
              className="w-full border border-[#00000080] placeholder:text-[#00000080] rounded-md p-1 mt-2"
              placeholder="Enter product Description"
            ></textarea>
          </div>
          <div>
            <h1 className="font-poppins text-sm uppercase">
              Product Description 2
            </h1>
            <textarea
              name=""
              id=""
              rows={5}
              className="w-full border border-[#00000080] placeholder:text-[#00000080] rounded-md p-1 mt-2"
              placeholder="Enter product Description"
            ></textarea>
          </div>
          <div>
            <h1 className="font-poppins text-sm uppercase">Product Images</h1>
            <textarea
              name=""
              id=""
              rows={7}
              className="w-full border border-dashed border-[#00000080] placeholder:text-[#00000080] rounded-md p-1 mt-2"
              // placeholder="Enter product Description"
            ></textarea>
          </div>
          <div>
            <h1 className="font-poppins text-sm uppercase">Tags</h1>
            <input
              name=""
              id=""
              className="w-full border border-[#00000080] uppercase pl-4 placeholder:text-[#00000080] rounded-md p-2 mt-1"
              placeholder="Enter tags seprated by commas"
            />
          </div>
          <div className="">
            <h1 className="uppercase font-poppins mt-10">Status</h1>
            <div className="flex gap-4">
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  className="h-4 w-4 accent-black cursor-pointer"
                />
                <h1 className="uppercase text-sm">Active</h1>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  className="h-4 w-4 accent-black cursor-pointer"
                />
                <h1 className="uppercase text-sm">Inactive</h1>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-md overflow-hidden">
                <thead className="bg-white text-black text-sm font-semibold">
                  <tr className="uppercase text-[10px] font-poppins text-left">
                    <th className="p-3"></th>
                    <th className="p-3">Product</th>
                    <th className="p-3">SKU</th>
                    <th className="p-3">Barcode</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Sale Price</th>
                    <th className="p-3">Qty</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody className="">
                  {rows.map((row, i) => (
                    <tr key={row.id} className="border-b">
                      <div className="w-fit">
                        <img src={row.image} alt="" className="w-10 h-10" />
                        <h1 className="text-center uppercase text-[9px] font-poppins font-medium">
                          Change
                        </h1>
                      </div>
                      <td className="font-poppins pl-2 text-[9px]">
                        <div className="w-full">
                          Size : {row.size}
                          <span className="flex justify-between uppercase text-[9px]">
                            COLOR : {row.color}
                          </span>
                        </div>
                      </td>
                      <td className="px-1">
                        <div className="h-full flex justify-center items-center bg-[#F8F9F9] py-2 rounded-xl border border-[#0000001A] text-center">
                          <h1 className="capitalize text-[9px] font-medium font-poppins">
                            {row.sku}
                          </h1>
                        </div>
                      </td>

                      <td className="px-1">
                        <div className="h-full flex justify-center items-center bg-[#F8F9F9] py-2 rounded-xl border border-[#0000001A] text-center">
                          <h1 className="capitalize text-[9px] font-medium font-poppins">
                            {row.barcode}
                          </h1>
                        </div>
                      </td>
                      <td className="px-1">
                        <div className="h-full flex justify-center items-center bg-[#F8F9F9] py-2 rounded-xl border border-[#0000001A] text-center">
                          <h1 className="capitalize text-[9px] font-medium font-poppins">
                            {row.price}
                          </h1>
                        </div>
                      </td>
                      <td className="px-1">
                        <div className="h-full flex justify-center items-center bg-[#F8F9F9] py-2 rounded-xl border border-[#0000001A] text-center">
                          <h1 className="capitalize text-[9px] font-medium font-poppins">
                            {row.salePrice}
                          </h1>
                        </div>
                      </td>
                      <td className="px-1">
                        <div className="h-full flex justify-center items-center bg-[#F8F9F9] py-2 rounded-xl border border-[#0000001A] text-center">
                          <h1 className="capitalize text-[9px] font-medium font-poppins">
                            {row.qty}
                          </h1>
                        </div>
                      </td>
                      <td className="px-5">
                        <div>
                          <FiTrash className="" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="uppercase font-medium font-poppins mt-5 flex justify-end gap-2">
              <button className="border border-black px-4 py-3 rounded-lg">
                Cancel
              </button>
              <button className="bg-black text-white px-4 py-3 rounded-lg">
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRightBar;
