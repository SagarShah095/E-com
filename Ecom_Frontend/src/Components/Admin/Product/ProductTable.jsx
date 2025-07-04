import axios from "axios";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiDownload, FiTrash } from "react-icons/fi";
import { RiSearch2Line, RiPencilLine } from "react-icons/ri";
import { useAuth } from "../../../context/AuthContext";
import { useEffect } from "react";

const ProductTable = ({ setSide, setOpen, open, side }) => {
  const [productData, setProductData] = useState([]);
  const { refreshAuth } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Pagination logic
  const totalPages = Math.ceil(productData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = productData.slice(startIndex, startIndex + itemsPerPage);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchAddData = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/product/getPoduct`);
      if (res.data.success) {
        console.log("Product data fetched successfully", res.data.getPrd);
      }
      setProductData(res.data.getPrd);
      refreshAuth();
    } catch (error) {
      console.error("Error in Add Product", error);
    }
  };

  useEffect(() => {
    fetchAddData();
    refreshAuth();
  }, [side === false, open === false]);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (number) => setCurrentPage(number);

  return (
    <div>
      <h1 className="font-poppins uppercase font-semibold my-3">PRODUCT</h1>
      <div className="bg-white p-6 overflow-y-scroll max-h-screen scrollbar-hide rounded-md shadow-md w-full overflow-x-auto">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-md w-full md:w-1/3">
            <RiSearch2Line className="text-lg" />
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
              className="border border-[#00000029] text-[#00000080] font-poppins font-medium uppercase px-4 py-3 rounded-md text-sm flex items-center gap-2"
            >
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
          <tbody>
            {currentItems.map((item, id) => (
              <tr key={id} className="border-b text-sm hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    className="accent-black cursor-pointer"
                  />
                </td>
                <td className="px-4 py-3 flex items-center gap-2 whitespace-nowrap">
                  <img
                    src={item.images}
                    alt="product"
                    className="w-10 h-10 object-contain"
                  />
                  {item.productName}
                </td>
                <td className="px-4 py-3 font-medium">{item.category}</td>
                <td className="px-4 py-3">{item.stock}</td>
                <td className="px-4 py-3">{item.price}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-3">
                    <RiPencilLine className="cursor-pointer text-xl" />
                    <FiTrash className="cursor-pointer text-xl" />
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
            {Math.min(startIndex + itemsPerPage, productData.length)} OF{" "}
            {productData.length} PRODUCTS
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

export default ProductTable;
