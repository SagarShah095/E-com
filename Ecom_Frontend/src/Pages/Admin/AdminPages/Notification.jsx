import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiDownload, FiTrash } from "react-icons/fi";
import { RiSearch2Line, RiPencilLine } from "react-icons/ri";
import { LuCalendar } from "react-icons/lu";

const products = [
  {
    id: 1,
    image: "/assets/Admin/Dashboard/product.png",
    name: "INVENTORY ALEART",
    desc: "Low Stock Warning: “18K Gold Ring” stock is below the set threshold.",
  },
  {
    id: 2,
    image: "/assets/Admin/Dashboard/product.png",
    name: "INVENTORY ALEART",
    desc: "Low Stock Warning: “18K Gold Ring” stock is below the set threshold.",
  },
  {
    id: 3,
    image: "/assets/Admin/Dashboard/product.png",
    name: "INVENTORY ALEART",
    desc: "Low Stock Warning: “18K Gold Ring” stock is below the set threshold.",
  },
  {
    id: 4,
    image: "/assets/Admin/Dashboard/product.png",
    name: "INVENTORY ALEART",
    desc: "Low Stock Warning: “18K Gold Ring” stock is below the set threshold.",
  },
];

const NotificationTable = () => {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "category";
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Pagination logic
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("activeTab", tab);
    // {
    //   activeTab === 'category' ? setCate(true) : setCate(false)
    // }
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (number) => setCurrentPage(number);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-5">
          <h1 className="font-poppins font-semibold uppercase py-3">
            Notification
          </h1>
        </div>
        <div></div>
      </div>

      <div className="bg-white p-6 overflow-y-scroll max-h-screen scrollbar-hide rounded-md w-full overflow-x-auto">
        {/* Top Bar */}
        <div className="flex flex-col justify-between md:flex-row md:items-center gap-4 mb-4">
          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-[#F5F5F5] pl-4 w-[40%] py-3 rounded-md">
            <RiSearch2Line className="text-lg" />
            <input
              type="text"
              placeholder="What are you looking for today ?"
              className="bg-[#F5F5F5] outline-none text-base w-[100%] font-poppins font-medium placeholder:text-[#0000008F]"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button className="border border-[#00000029] whitespace-nowrap text-[#00000080] font-poppins font-medium uppercase px-4 py-3 rounded-md text-base flex items-center gap-2">
              Delete all
            </button>
            <select
              name=""
              id=""
              className="text-[#6B6B6B] font-poppins px-4 text-base py-3 rounded-md border border-[#DDDDDD]"
            >
              <option value="">SORT BY</option>
            </select>
            <button className="border border-[#00000029] whitespace-nowrap text-[#00000080] font-poppins font-medium uppercase px-4 py-3 rounded-md text-base flex items-center gap-2">
              <LuCalendar className="text-base text-[#00000080]" /> Export CSV
            </button>
          </div>
        </div>

        {/* Table */}

        <div>
          <table className="min-w-full table-auto font-poppins">
            <thead>
              <tr className="text-left text-xs font-semibold font-poppins bg-gray-50 border-y">
                <th className="px-4 py-3">
                  <input
                    type="checkbox"
                    className="accent-black cursor-pointer"
                  />
                </th>
                <th className="px-4 py-3 uppercase">NOTIFICaTION</th>
                <th className="px-4 py-3 text-center">ACTION</th>
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
                  <td className="px-4 py-3 flex flex-col gap-2 whitespace-nowrap">
                    <h1 className="font-poppins uppercase">{item.name}</h1>
                    <span className="font-poppins font-medium text-sm">
                      {item.desc}
                    </span>
                  </td>
                  <td className="px-4 py-3 ">
                    <div className="flex items-center justify-center gap-3">
                      <div className="hover:bg-[#f2f2f2] cursor-pointer duration-200 p-2 rounded-full">
                        <FiTrash className="cursor-pointer  text-xl" />
                      </div>
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
    </div>
  );
};

export default NotificationTable;
