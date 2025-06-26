import React, { useState } from "react";
import { GoPerson } from "react-icons/go";
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import Dashboard from "../../Pages/Admin/AdminPages/Dashboard";
import Product from "../../Pages/Admin/AdminPages/Product";
import Order from "../../Pages/Admin/AdminPages/Order";
import Customer from "../../Pages/Admin/AdminPages/Customer";
import Categories from "../../Pages/Admin/AdminPages/Categories";

// Optional: You can customize this
const PageHeader = () => {
  const location = useLocation();

  const [side, setSide] = useState(false);
  const [open, setOpen] = useState(false);

  const pathNameMap = {
    "/admin/product": (
      <Product setSide={setSide} side={side} setOpen={setOpen} open={open} />
    ),
    "/admin/dashboard": <Dashboard />,
    "/admin/order": <Order />,
    "/admin/customer": <Customer />,
    "/admin/categories": <Categories />,
    "/admin/notification": "Notifications",
  };

  return (
    <div className="">
      <h1 className="">{pathNameMap[location.pathname] || "Admin Panel"}</h1>
    </div>
  );
};

const Sidebar = () => {
  const navigate = useNavigate() 

  const location = useLocation();

  const menuItems = [
    { name: "DASHBOARD", path: "/admin/dashboard" },
    { name: "PRODUCT", path: "/admin/product" },
    { name: "ORDER", path: "/admin/order" },
    { name: "CUSTOMER", path: "/admin/customer" },
    { name: "CATEGORIES", path: "/admin/categories" },
    { name: "NOTIFICATION", path: "/admin/notification" },
  ];

  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("token");
  };

  return (
    <div className="flex bg-[#FAFAFA] relative min-h-screen">
      {/* Sidebar */}
      <div className="h-screen min-w-1/4 px-3 text-center bg-white shadow-md flex flex-col justify-between">
        <div className="flex flex-col gap-7">
          {/* Logo */}
          <div className="p-6 mt-5 text-xl">
            <div className="font-poppins font-bold text-3xl text-black uppercase">
              LaceUp
              <span className="font-poppins text-xs font-medium">Admin</span>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex flex-col space-y-4 px-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-semibold font-poppins text-lg py-2 px-3 rounded-md transition ${
                  location.pathname === item.path
                    ? "bg-gray-100 text-black"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <div className="px-6 pb-6">
          <button
            onClick={handleLogout}
            className="font-semibold font-poppins text-lg py-2 px-3 rounded-md transition hover:bg-gray-100 text-black"
          >
            LOGOUT
          </button>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="w-full p-5">
        {/* Top bar */}
        <div className="flex justify-end gap-2">
          <div className="rounded-full cursor-pointer bg-white p-4">
            <img
              src="/assets/Admin/Dashboard/Notification.svg"
              alt=""
              className="w-5 h-5"
            />
          </div>
          <div className="rounded-full flex cursor-pointer items-center px-2 gap-2 bg-white">
            <div>
              <GoPerson className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-medium font-poppins">xyz</h1>
              <h1 className="font-medium text-[10px] font-poppins pr-2">
                Store Manager
              </h1>
            </div>
          </div>
        </div>

        {/* Custom Component: Page Header */}
        <PageHeader />

        {/* Render Route-specific Component */}
        <div className="mt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
