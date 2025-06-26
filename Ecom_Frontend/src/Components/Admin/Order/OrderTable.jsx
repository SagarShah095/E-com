import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiDownload, FiTrash } from "react-icons/fi";
import { RiSearch2Line, RiPencilLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import { RiRefund2Line } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

const products = [
  {
    id: "ORD123456",
    customer: "Rahul Mehta",
    email: "rahul.mehta@gmail.com",
    date: "25/JUN/2025",
    items: 3,
    total: "₹5,499",
    paymentStatus: "Paid",
    status: "Shipped",
  },
  {
    id: "ORD123457",
    customer: "Pooja Sharma",
    email: "pooja.sharma123@gmail.com",
    date: "24/JUN/2025",
    items: 2,
    total: "₹3,199",
    paymentStatus: "Pending",
    status: "Processing",
  },
  {
    id: "ORD123458",
    customer: "Ankit Patel",
    email: "ankit.patel@gmail.com",
    date: "23/JUN/2025",
    items: 5,
    total: "₹9,899",
    paymentStatus: "Paid",
    status: "Delivered",
  },
  {
    id: "ORD123459",
    customer: "Sneha Iyer",
    email: "sneha.iyer22@gmail.com",
    date: "22/JUN/2025",
    items: 1,
    total: "₹1,299",
    paymentStatus: "Refund",
    status: "Cancelled",
  },
  {
    id: "ORD123460",
    customer: "Rohan Desai",
    email: "rohandesai99@gmail.com",
    date: "20/JUN/2025",
    items: 4,
    total: "₹7,450",
    paymentStatus: "Paid",
    status: "Delivered",
  },
  {
    id: "ORD123461",
    customer: "Neha Singh",
    email: "neha.singh@gmail.com",
    date: "19/JUN/2025",
    items: 2,
    total: "₹2,850",
    paymentStatus: "Refunded",
    status: "Returned",
  },
  {
    id: "ORD123462",
    customer: "Aman Jain",
    email: "aman.jain123@gmail.com",
    date: "18/JUN/2025",
    items: 3,
    total: "₹4,799",
    paymentStatus: "Paid",
    status: "Shipped",
  },
  {
    id: "ORD123463",
    customer: "Disha Shah",
    email: "disha.shah07@gmail.com",
    date: "17/JUN/2025",
    items: 1,
    total: "₹1,199",
    paymentStatus: "Pending",
    status: "Processing",
  },
  {
    id: "ORD123464",
    customer: "Kunal Verma",
    email: "kunal.verma02@gmail.com",
    date: "16/JUN/2025",
    items: 6,
    total: "₹11,599",
    paymentStatus: "Paid",
    status: "Delivered",
  },
  {
    id: "ORD123465",
    customer: "Priya Joshi",
    email: "priya.joshi555@gmail.com",
    date: "15/JUN/2025",
    items: 2,
    total: "₹3,299",
    paymentStatus: "Refund",
    status: "Cancelled",
  },
];

const OrderTable = ({ setIsOpen }) => {
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
      <div className="flex flex-col mt-5 md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <h1 className="font-poppins uppercase font-semibold my-3">ORDER</h1>
        {/* Search Bar */}

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
          onClick={() => setIsOpen(true)}
          className="bg-black cursor-pointer text-white font-poppins font-medium uppercase px-4 py-3 rounded-md text-sm flex items-center gap-2">
            <FaPlus className="text-sm" /> NEW Order
          </button>
        </div>
      </div>
      <div className="bg-white p-6 overflow-y-scroll max-h-screen scrollbar-hide rounded-md shadow-md w-full overflow-x-auto">
        {/* Top Bar */}

        {/* Table */}
        <table className="min-w-full table-auto font-poppins">
          <thead>
            <tr className="text-left text-xs uppercase font-semibold font-poppins bg-gray-50 border-y">
              <th className="px-4 py-3">
                <input
                  type="checkbox"
                  className="accent-black cursor-pointer"
                />
              </th>
              <th className="px-4 py-3">Order Id</th>
              <th className="px-4 py-3">CUSTOMER</th>
              <th className="px-4 py-3">DATE</th>
              <th className="px-4 py-3">ITEMS</th>
              <th className="px-4 py-3">TOTAL</th>
              <th className="px-4 py-3">PAYMENT STATUS</th>
              <th className="px-4 py-3">STATUS</th>
              <th className="px-4 py-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((order) => (
              <tr
                key={order.id}
                className="border-b text-sm font-poppins hover:bg-gray-50"
              >
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
                    <div className="text-xs ">{order.email}</div>
                  </div>
                </td>
                <td className="whitespace-nowrap">{order.date}</td>
                <td className="px-4 py-3">{order.items}</td>
                <td className="px-4 py-3">{order.total}</td>
                <td className="px-4 py-3">
                  <div
                    className={`bg-black  text-center p-1 rounded-md py-2 ${
                      order.paymentStatus === "Pending"
                        ? "bg-white text-black border border-black"
                        : "text-white"
                    } ${
                      order.paymentStatus === "Refund"
                        ? "bg-white text-[#FF0000] border border-[#FF0000]"
                        : ""
                    }`}
                  >
                    {order.paymentStatus}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div
                    className={`bg-black  text-center p-1 rounded-md py-2 ${
                      order.status === "Processing"
                        ? "bg-white text-black border border-black"
                        : "text-white"
                    } ${
                      order.status === "Cancelled"
                        ? "bg-white text-[#FF0000] border border-[#FF0000]"
                        : ""
                    }`}
                  >
                    {order.status}
                  </div>
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

export default OrderTable;
