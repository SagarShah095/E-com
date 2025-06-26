import React, { useState } from "react";
import OrderTable from "../../../Components/Admin/Order/OrderTable";
import AddOrderSidebar from "../../../Components/Admin/Order/AddOrderSidebar";

const Order = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <OrderTable setIsOpen={setIsOpen} />
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex justify-end transition-all duration-300 ease-in-out">
          <AddOrderSidebar setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
};

export default Order;
