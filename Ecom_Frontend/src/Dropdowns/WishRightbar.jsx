import React, { useEffect, useState } from "react";
import { FaHeart, FaTrash } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Cart from "../Components/Client/Wishlist/Cart";
import Wishlist from "../Components/Client/Wishlist/Wishlist";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "../index.css";

const WishRightbar = ({ setCart }) => {
  const [activeTab, setActiveTab] = useState("cart");
  const [prdData, setPrdData] = useState([]);
  const [isVisible, setIsVisible] = useState(false); // for animation state

  const API_URL = import.meta.env.VITE_API_URL;
  const { refreshAuth } = useAuth();

  const fetchPrdData = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/product/getPoduct`);
      setPrdData(response?.data?.getPrd);
    } catch (error) {
      console.error("error in getProduct", error);
    }
  };

  useEffect(() => {
    fetchPrdData();

    setTimeout(() => setIsVisible(true), 10);

    // Prevent background scroll
    document.body.style.overflow = "hidden";

    // Cleanup: Re-enable scroll when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [refreshAuth]);

 const handleClose = () => {
  setIsVisible(false);
  document.body.style.overflow = "auto"; // Reset scroll
  setTimeout(() => setCart(false), 300);
};

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isVisible ? "opacity-50" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Right Sidebar */}
      <div
        className={`absolute top-0 right-0 h-full w-[50%] bg-white shadow-lg flex flex-col transform transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-poppins font-semibold uppercase">
            {activeTab === "cart" ? "Your Cart" : "Your Wishlist"}
          </h2>
          <div className="flex">
            <div className="flex gap-[2px] p-1 rounded-full bg-[#f2f2f2]">
              <div
                className={`p-1 px-2 rounded-full cursor-pointer ${
                  activeTab === "cart" ? "bg-black text-white" : "text-black"
                }`}
                onClick={() => setActiveTab("cart")}
              >
                <IoBagOutline />
              </div>
              <div
                className={`p-1 px-2 rounded-full cursor-pointer ${
                  activeTab === "wishlist"
                    ? "bg-black text-white"
                    : "text-black"
                }`}
                onClick={() => setActiveTab("wishlist")}
              >
                <FaRegHeart />
              </div>
            </div>
            <div
              className="p-2 hover:bg-[#f2f2f2] duration-200 cursor-pointer rounded-full"
              onClick={handleClose}
            >
              <IoMdClose className="text-xl w-full h-full" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {activeTab === "cart" ? <Cart /> : <Wishlist prdData={prdData} />}
        </div>
      </div>
    </div>
  );
};

export default WishRightbar;
