import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { RiPencilLine, RiRefund2Line } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";

const products = [
  {
    id: "#001",
    customer: "asdas",
    email: "test@gmail.com",
    date: "23/7/2005",
    items: "shoes",
    total: 121,
    paymentStatus: "Paid",
    status: "Delivered",
  },
];

const OrderTable = ({ setIsOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handlePageClick = (number) => setCurrentPage(number);

  return (
    <div className="w-full font-poppins">
      {/* Header */}
      <div className="flex flex-col  md:flex-row md:items-center md:justify-between w-full mx-auto mt-5 gap-4">
        <h1 className="font-poppins uppercase font-semibold">Order</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white font-poppins font-medium uppercase px-4 py-3 rounded-md text-sm flex items-center gap-2"
        >
          <FaPlus className="text-sm" /> New Order
        </button>
      </div>

      {/* Table Wrapper */}
      <div className="bg-white w-[95%] mx-auto mt-4 p-4 rounded-md shadow-md overflow-x-auto max-h-[80vh]">
        <table className="w-full min-w-fit table-auto font-poppins">
          <thead>
            <tr className="text-left text-xs uppercase font-semibold bg-gray-50 border-y">
              <th className="px-4 py-3">
                <input
                  type="checkbox"
                  className="accent-black cursor-pointer"
                />
              </th>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Items</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Payment Status</th>
              <th className="px-4 py-3 text-center">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((order) => (
              <tr key={order.id} className="border-b text-sm hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    className="accent-black cursor-pointer"
                  />
                </td>
                <td className="px-4 py-3">{order.id}</td>
                <td className="px-4 py-3">
                  <div>
                    <div className="font-medium">{order.customer}</div>
                    <div className="text-xs text-gray-500">{order.email}</div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">{order.date}</td>
                <td className="px-4 py-3">{order.items}</td>
                <td className="px-4 py-3">{order.total}</td>
                <td className="px-4 py-3">
                  <span
                    className={`block px-2 py-1 rounded-md text-center text-sm font-medium ${
                      order.paymentStatus === "Paid"
                        ? "bg-black text-white"
                        : order.paymentStatus === "Pending"
                        ? "bg-white text-black border border-black"
                        : order.paymentStatus === "Refund"
                        ? "bg-white text-red-700"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order.paymentStatus}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`block px-2 py-1 rounded-md text-center text-sm font-medium ${
                      order.status === "Delivered"
                        ? "bg-black text-white"
                        : order.status === "Processing"
                        ? "bg-white text-black border border-black"
                        : order.status === "Cancelled"
                        ? "bg-white text-red-700"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <MdOutlineRemoveRedEye className="cursor-pointer text-xl" />
                    <LuArrowUpDown className="cursor-pointer text-xl" />
                    <RiRefund2Line className="cursor-pointer text-xl" />
                    <BsThreeDotsVertical className="cursor-pointer text-xl" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-sm font-poppins">
          <p className="text-black font-medium">
            Showing {startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, products.length)} of{" "}
            {products.length} Orders
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

export default OrderTable;
