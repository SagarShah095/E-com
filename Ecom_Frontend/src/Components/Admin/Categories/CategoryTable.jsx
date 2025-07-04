import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiDownload, FiTrash } from "react-icons/fi";
import { RiSearch2Line, RiPencilLine } from "react-icons/ri";
import SubCategoryTable from "./SubCategoryTable";
import axios from "axios";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CategoryTable = ({
  category,
  setCategory,
  setSubCate,
  setUpdate,
  update,
  setOpen,
  getCate,
  setGetCate,
  refresh,
  setCurrentPage,
  currentPage,
}) => {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "category";
  });
  const [deleteCate, setDeleteCate] = useState("");

  const itemsPerPage = 10;
  const API_URL = import.meta.env.VITE_API_URL;
  // const [update, setUpdate] = useState("");

  // Pagination logic
  const totalPages = Math.ceil(getCate.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = getCate.slice(startIndex, startIndex + itemsPerPage);
  // console.log(currentItems, "currentItemscurrentItemscurrentItems");
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token"); // 👈 or from context, cookies, etc.

      const response = await axios.get(`${API_URL}/api/cate/get-cate`, {
        headers: {
          Authorization: `Bearer ${token}`, // 👈 token added here
          // Do NOT manually set Content-Type for FormData
        },
      });
      setGetCate(response?.data?.category);
    } catch (error) {
      console.error(error);
    }
  };
  const navigate = useNavigate();

  // console.log(getCate, "getCategetCategetCate");

  useEffect(() => {
    fetchData();
  }, [category === false]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("activeTab", tab);
  };

  const handleUpdate = (id) => {
    setUpdate(id);
    setOpen(true);
    navigate(`/admin/categories?id=${id}`);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (number) => setCurrentPage(number);

  const DeleteCate = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(`${API_URL}/api/cate/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        setGetCate(() => getCate.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2  my-2 p-1 rounded-full">
          <div
            onClick={() => handleTabChange("category")}
            className={`font-poppins rounded-full uppercase font-semibold py-3`}
          >
            Category
          </div>
        </div>
        <div>
          <button
            onClick={() => setCategory(!category)}
            className="bg-black cursor-pointer text-white font-poppins font-medium uppercase p-3 rounded-md 
            text-sm flex items-center gap-2"
          >
            <FaPlus className="text-sm" /> NEW Category{" "}
          </button>
        </div>
      </div>

      <div className="bg-white p-6 overflow-y-scroll max-h-screen scrollbar-hide rounded-md  w-full overflow-x-auto">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-md w-full">
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
            <button className="border border-[#00000029] whitespace-nowrap text-[#00000080] font-poppins font-medium uppercase px-4 py-3 rounded-md text-sm flex items-center gap-2">
              <FiDownload className="text-base text-[#00000080]" /> IMPORT CSV
            </button>
          </div>
        </div>

        {/* Table */}

        {activeTab === "category" && (
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
                  <th className="px-4 py-3">CATEGORY NAME</th>
                  <th className="px-4 py-3">DESCRIPTION</th>
                  <th className="px-4 py-3 text-center">SUB CATEGORY</th>
                  <th className="px-4 py-3 text-center">STATUS</th>
                  <th className="px-4 py-3 text-center">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {currentItems?.map((item, i) => (
                  <tr key={i} className="border-b text-sm hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        className="accent-black cursor-pointer"
                      />
                    </td>
                    <td className="px-4 py-3 flex items-center gap-2 whitespace-nowrap">
                      <img
                        src={`${item?.img}`} // ✅ add full path
                        alt="product"
                        className="w-10 h-10 object-contain"
                      />

                      {item?.category}
                    </td>
                    <td className="px-4 py-3 font-medium ">{item?.desc}</td>
                    <td className="px-4 py-3 text-center">
                      {item?.subcategory}
                    </td>
                    <td className={`px-4 py-3 text-center uppercase`}>
                      <div
                        className={`font-poppins text-sm rounded-md py-2 ${
                          item?.status === "active"
                            ? "bg-black text-white"
                            : "bg-[#00000066] text-white"
                        }`}
                      >
                        {item?.status}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-3">
                        <RiPencilLine
                          className="cursor-pointer text-xl"
                          onClick={() => handleUpdate(item?._id)}
                        />
                        <FiTrash
                          className="cursor-pointer text-xl"
                          onClick={() => DeleteCate(item?._id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Footer */}
            <div className="mt-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-sm font-poppins">
              <p className="text-black font-medium">
                SHOWING {startIndex + 1} TO
                {Math.min(startIndex + itemsPerPage, getCate.length)} OF{" "}
                {getCate.length} PRODUCTS
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
        )}
      </div>
    </div>
  );
};

export default CategoryTable;
