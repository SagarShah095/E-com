import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

const orders = [
  {
    id: "#O-123",
    customer: "uSER123",
    product: "SPORT SHOES",
    date: "May 2, 2025",
    amount: "₹4999",
    status: "Completed",
    avatar: "/assets/Admin/Dashboard/user.png",
  },
  {
    id: "#O-123",
    customer: "uSER123",
    product: "SPORT SHOES",
    date: "May 2, 2025",
    amount: "₹4999",
    status: "Completed",
    avatar: "/assets/Admin/Dashboard/user.png",
  },
  {
    id: "#O-123",
    customer: "uSER123",
    product: "SPORT SHOES",
    date: "May 2, 2025",
    amount: "₹4999",
    status: "Completed",
    avatar: "/assets/Admin/Dashboard/user.png",
  },
  {
    id: "#O-123",
    customer: "uSER123",
    product: "SPORT SHOES",
    date: "May 2, 2025",
    amount: "₹4999",
    status: "Completed",
    avatar: "/assets/Admin/Dashboard/user.png",
  },
  {
    id: "#O-123",
    customer: "uSER123",
    product: "SPORT SHOES",
    date: "May 2, 2025",
    amount: "₹4999",
    status: "Completed",
    avatar: "/assets/Admin/Dashboard/user.png",
  },
  {
    id: "#O-123",
    customer: "uSER123",
    product: "SPORT SHOES",
    date: "May 2, 2025",
    amount: "₹4999",
    status: "Completed",
    avatar: "/assets/Admin/Dashboard/user.png",
  },
  // ... repeat or map more items
];

const StatusBadge = ({ status }) => {
  const baseStyle = "px-3 py-[2px] rounded-full text-sm font-medium border";
  const statusStyles =
    status === "Completed"
      ? "bg-black text-white border-black"
      : "bg-white text-black border-black";
  return <span className={`${baseStyle} ${statusStyles}`}>{status}</span>;
};

const RecentOrders = () => {
  return (
    <div className="bg-white p-6 rounded-lg w-full md:w-1/2 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold font-poppins uppercase">RECENT ORDER</h2>
        <button className="text-sm font-semibold font-poppins text-black flex items-center gap-1">
          VIEW ALL <FaArrowRight />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto scrollbar-hide">
        <table className="min-w-max w-full text-left table-auto font-poppins">
          <thead>
            <tr className="text-sm font-semibold text-[#00000099] ">
              <th className="px-4 py-2">ORDER ID</th>
              <th className="px-4 py-2">CUSTOMER</th>
              <th className="px-4 py-2">PRODUCT</th>
              <th className="px-4 py-2">DATE</th>
              <th className="px-4 py-2">AMOUNT</th>
              <th className="px-4 py-2 text-center">STATUS</th>
              <th className="px-4 py-2 text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="hover:bg-gray-50 text-sm ">
                <td className="px-4 py-3 whitespace-nowrap">{order.id}</td>
                <td className="px-4 py-3 whitespace-nowrap flex items-center gap-2">
                  <img
                    src={order.avatar}
                    alt="avatar"
                    className="w-6 h-6 rounded-full"
                  />
                  {order.customer}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">{order.product}</td>
                <td className="px-4 py-3 whitespace-nowrap">{order.date}</td>
                <td className="px-4 py-3 whitespace-nowrap">{order.amount}</td>
                <td className="px-4 py-3 text-center">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-4 py-3 text-center">
                  <BsThreeDotsVertical className="inline-block cursor-pointer text-lg" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
