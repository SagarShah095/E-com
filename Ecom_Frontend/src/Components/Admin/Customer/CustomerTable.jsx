import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiDownload, FiTrash } from "react-icons/fi";
import { RiSearch2Line, RiPencilLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

const products = [
  {
    id: 1,
    image: "/assets/Admin/Dashboard/product.png",
    name: "User123",
    email: "User123@gmail.com",
    pno: "XXXXXXXX9",
    price: "₹4999",
    status: "Active",
  },
  {
    id: 2,
    image: "/assets/Admin/Dashboard/product.png",
    name: "User123",
    email: "User123@gmail.com",
    pno: "XXXXXXXX9",
    price: "₹4999",
    status: "Active",
  },
  {
    id: 3,
    image: "/assets/Admin/Dashboard/product.png",
    name: "User123",
    email: "User123@gmail.com",
    pno: "XXXXXXXX9",
    price: "₹4999",
    status: "Active",
  },
  {
    id: 4,
    image: "/assets/Admin/Dashboard/product.png",
    name: "User123",
    email: "User123@gmail.com",
    pno: "XXXXXXXX9",
    price: "₹4999",
    status: "Active",
  },
  {
    id: 5,
    image: "/assets/Admin/Dashboard/product.png",
    name: "User123",
    email: "User123@gmail.com",
    pno: "XXXXXXXX9",
    price: "₹4999",
    status: "Active",
  },
  {
    id: 6,
    image: "/assets/Admin/Dashboard/product.png",
    name: "User123",
    email: "User123@gmail.com",
    pno: "XXXXXXXX9",
    price: "₹4999",
    status: "Active",
  },
  {
    id: 7,
    image: "/assets/Admin/Dashboard/product.png",
    name: "User123",
    email: "User123@gmail.com",
    pno: "XXXXXXXX9",
    price: "₹4999",
    status: "Active",
  },
  {
    id: 8,
    image: "/assets/Admin/Dashboard/product.png",
    name: "User123",
    email: "User123@gmail.com",
    pno: "XXXXXXXX9",
    price: "₹4999",
    status: "Active",
  },
  {
    id: 9,
    image: "/assets/Admin/Dashboard/product.png",
    name: "User123",
    email: "User123@gmail.com",
    pno: "XXXXXXXX9",
    price: "₹4999",
    status: "Active",
  },
  {
    id: 10,
    image: "/assets/Admin/Dashboard/product.png",
    name: "User123",
    email: "User123@gmail.com",
    pno: "XXXXXXXX9",
    price: "₹4999",
    status: "Active",
  },
  {
    id: 11,
    image: "/assets/Admin/Dashboard/product.png",
    name: "User123",
    email: "User123@gmail.com",
    pno: "XXXXXXXX9",
    price: "₹4999",
    status: "Active",
  },
  {
    id: 12,
    image: "/assets/Admin/Dashboard/product.png",
    name: "User123",
    email: "User123@gmail.com",
    pno: "XXXXXXXX9",
    price: "₹4999",
    status: "Active",
  },
];

const CustomerTable = ({ setSide, setOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Pagination logic
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (number) => setCurrentPage(number);

  return (
    <div>
      <h1 className="font-poppins uppercase font-semibold my-3">CUSTOMER</h1>
      <div className="bg-white p-6 overflow-y-scroll max-h-screen scrollbar-hide rounded-md w-full overflow-x-auto">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-md w-[35vw]">
            <RiSearch2Line className="text-lg" />
            <input
              type="text"
              placeholder="What are you looking for today ?"
              className="bg-[#F5F5F5] outline-none text-base w-full font-poppins font-medium placeholder:text-[#0000008F]"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <select
              name=""
              id=""
              className="text-[#6B6B6B] font-poppins px-4 text-base py-3 rounded-md border border-[#DDDDDD]"
            >
              <option value="">ALL STATUS</option>
            </select>
            <select
              name=""
              id=""
              className="text-[#6B6B6B] font-poppins px-4 text-base py-3 rounded-md border border-[#DDDDDD]"
            >
              <option value="">CUSTOMER TYPE</option>
            </select>
            <select
              name=""
              id=""
              className="text-[#6B6B6B] font-poppins px-4 text-base py-3 rounded-md border border-[#DDDDDD]"
            >
              <option value="">SORT BY</option>
            </select>
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
              <th className="px-4 py-3">CUSTOMER</th>
              <th className="px-4 py-3">EMAIL</th>
              <th className="px-4 py-3">PHONE</th>
              <th className="px-4 py-3">PURCHASE</th>
              <th className="px-4 py-3 text-center">STATUS</th>
              <th className="px-4 py-3 text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} className="border-b text-sm hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    className="accent-black cursor-pointer"
                  />
                </td>
                <td className="px-4 py-3 flex items-center gap-2 whitespace-nowrap">
                  <img
                    src={item.image}
                    alt="product"
                    className="w-10 h-10 object-contain"
                  />
                  {item.name}
                </td>
                <td className="px-4 py-3 font-medium">{item.email}</td>
                <td className="px-4 py-3">{item.pno}</td>
                <td className="px-4 py-3">{item.price}</td>
                <td className="px-4 py-3 text-center">
                  <div className="bg-black p-2 text-white rounded-md">
                    {item.status}
                  </div>
                </td>

                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-3">
                    <BsThreeDotsVertical className="cursor-pointer text-xl" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Footer */}
        <div className="mt-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-sm font-poppins">
          <p className="text-black font-medium">
            SHOWING {startIndex + 1} TO{" "}
            {Math.min(startIndex + itemsPerPage, products.length)} OF{" "}
            {products.length} PRODUCTS
          </p>

          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="border px-3 py-1 rounded-md text-lg disabled:opacity-40"
            >
              &lt;
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(index + 1)}
                className={`border px-4 py-2 rounded-md ${
                  currentPage === index + 1
                    ? "bg-black text-white"
                    : "text-black bg-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="border px-3 py-1 rounded-md text-lg disabled:opacity-40"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
