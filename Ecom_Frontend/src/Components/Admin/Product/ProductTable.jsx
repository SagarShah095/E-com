import React from "react";
import { FaSearch, FaPlus, FaPen, FaTrash } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { RiSearch2Line } from "react-icons/ri";
import { RiPencilLine } from "react-icons/ri";
import { FiTrash } from "react-icons/fi";

const products = [
  {
    id: 1,
    image: "/assets/Admin/Dashboard/product.png",
    name: "Nike CITY 'Sand'",
    category: "SPORT",
    stock: 220,
    price: "₹4999",
  },
  {
    id: 2,
    image: "/assets/Admin/Dashboard/product.png",
    name: "Nike CITY 'Sand'",
    category: "CASUAL",
    stock: 220,
    price: "₹4999",
  },
  {
    id: 3,
    image: "/assets/Admin/Dashboard/product.png",
    name: "Nike CITY 'Sand'",
    category: "HEELS",
    stock: 220,
    price: "₹4999",
  },
  {
    id: 4,
    image: "/assets/Admin/Dashboard/product.png",
    name: "Nike CITY 'Sand'",
    category: "BOOTS",
    stock: 220,
    price: "₹4999",
  },
  {
    id: 5,
    image: "/assets/Admin/Dashboard/product.png",
    name: "Nike CITY 'Sand'",
    category: "BOOTS",
    stock: 220,
    price: "₹4999",
  },
  {
    id: 6,
    image: "/assets/Admin/Dashboard/product.png",
    name: "Nike CITY 'Sand'",
    category: "BOOTS",
    stock: 220,
    price: "₹4999",
  },
];

const ProductTable = ({ setSide, setOpen }) => {
  return (
    <div>
      <h1 className="font-poppins uppercase font-semibold my-3">PRODUCT</h1>
      <div className="bg-white p-6 overflow-y-scroll max-h-screen scrollbar-hide rounded-md shadow-md w-full overflow-x-auto">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-md w-full md:w-1/3">
            <RiSearch2Line className=" text-lg" />
            <input
              type="text"
              placeholder="What are you looking for today ?"
              className="bg-[#F5F5F5] outline-none text-sm w-full font-poppins font-medium placeholder:text-[#0000008F]"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSide(true)}
              className="bg-black cursor-pointer text-white font-poppins font-medium uppercase px-4 py-3 rounded-md text-sm flex items-center gap-2"
            >
              <FaPlus className="text-sm" /> NEW PRODUCT
            </button>
            <button
            onClick={() => setOpen(true)}
            className="border border-[#00000029] text-[#00000080] font-poppins font-medium uppercase px-4 py-3 rounded-md text-sm flex items-center gap-2">
              <FiDownload className="text-base text-[#00000080]" /> IMPORT CSV
            </button>
          </div>
        </div>

        {/* Table */}
        <table className="min-w-full table-auto font-poppins">
          <thead>
            <tr className="text-left text-xs font-semibold font-poppins bg-gray-50 border-y">
              <th className="px-4 py-3">
                <input
                  type="checkbox"
                  className="accent-black cursor-pointer"
                />
              </th>
              <th className="px-4 py-3">PRODUCT</th>
              <th className="px-4 py-3">CATEGORY</th>
              <th className="px-4 py-3">STOCK</th>
              <th className="px-4 py-3">PRICE</th>
              <th className="px-4 py-3 text-center">ACTION</th>
            </tr>
          </thead>
          <tbody className="">
            {products.map((item) => (
              <tr key={item.id} className="border-b text-sm hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    className="accent-black cursor-pointer"
                  />
                </td>
                <td className="px-4 py-3 flex items-center font-poppins gap-2 whitespace-nowrap">
                  <img
                    src={item.image}
                    alt="product"
                    className="w-10 h-10 object-contain"
                  />
                  {item.name}
                </td>
                <td className="px-4 py-3 font-medium font-poppins">
                  {item.category}
                </td>
                <td className="px-4 py-3 font-poppins">{item.stock}</td>
                <td className="px-4 py-3 font-poppins">{item.price}</td>
                <td className="px-4 py-3 ">
                  <div className="flex items-center justify-center gap-3">
                    <RiPencilLine className="cursor-pointer text-xl " />
                    <FiTrash className="cursor-pointer text-xl " />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <div className="mt-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-sm font-poppins">
          <p className="text-black font-medium">
            SHOWING 1 TO 8 OF 100 PRODUCT
          </p>

          <div className="flex items-center gap-1">
            <button className="border px-3 py-1 rounded-md text-lg">
              &lt;
            </button>
            <button className="border px-4 py-2 rounded-md bg-black text-white">
              1
            </button>
            <button className="border px-3 py-1 rounded-md text-lg">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
