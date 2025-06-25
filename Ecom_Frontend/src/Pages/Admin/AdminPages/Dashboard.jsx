import React from "react";
import Revenue from "../../../Components/Admin/Dashboard/Revenue";
import Chart from "../../../Components/Admin/Dashboard/Chart";
import SalesByCategory from "../../../Components/Admin/Dashboard/SalesByCategory";
import RecentOrders from "../../../Components/Admin/Dashboard/RecentOrders";
import LowStockAlert from "../../../Components/Admin/Dashboard/LowStockAlert";

const Dashboard = () => {
  return (
    <div className="overflow-y-scroll mt-3 scrollbar-hide h-[90vh]">
      <Revenue />
      <div className="mt-5 flex gap-3">
        <Chart />
        <SalesByCategory />
      </div>
      <div className="flex mt-5 gap-3">
        <RecentOrders />
        <LowStockAlert />
      </div>
    </div>
  );
};

export default Dashboard;
