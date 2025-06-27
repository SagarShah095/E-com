import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Select from "react-select";
import { FaTrash } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import axios from "axios";

const AddNewCategory = ({ setCate }) => {
  const [data, setData] = useState({
    img: "",
    category: "",
    desc: "",
    status: "",
  });

  console.log(data, "dtat");

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("img", data.img);
    formData.append("category", data.category);
    formData.append("desc", data.desc);
    formData.append("status", data.status);

    try {
      const token = localStorage.getItem("token"); // 👈 or from context, cookies, etc.

      const response = await axios.post(
        `${API_URL}/api/cate/post-cate`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // 👈 token added here
            // Do NOT manually set Content-Type for FormData
          },
        }
      );

      if (response.data) {
        console.log("Data successfully stored");
      } else {
        console.log("Error in category post data");
      }

      setData({
        img: "",
        category: "",
        desc: "",
        status: "",
      });
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={
        `fixed top-0 right-0 h-full w-[42%] scrollbar-hide bg-white p-3 px-5 overflow-y-auto rounded-l-md 
      transform transition-transform duration-300 ease-in-out 
      `
        //   ${setSide ? "translate-x-0" : "translate-x-full"} z-50 shadow-xl
      }
    >
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-between">
          <h1 className="font-poppins font-semibold text-lg">
            Add New Category
          </h1>
          <RxCross2
            className="text-2xl cursor-pointer"
            onClick={() => setCate(false)}
          />
        </div>
        <div className="flex flex-col justify-between h-[90vh]">
          <div className="mt-3 space-y-4">
            {/* Product Name */}
            <div>
              <h1 className="font-poppins text-sm uppercase">Category Name</h1>
              <input
                type="text"
                name="category"
                onChange={handleChange}
                value={data.category}
                className="placeholder:capitalize font-poppins mt-2  w-full p-3 focus:outline-none border border-[#00000080] rounded-md"
                placeholder="Enter Category name"
              />
            </div>

            {/* SKU */}
            <div>
              <h1 className="font-poppins text-sm uppercase">Description</h1>
              <textarea
                rows={6}
                type="date"
                name="desc"
                onChange={handleChange}
                value={data.desc}
                placeholder="Enter category description"
                className="w-full mt-2 font-poppins placeholder:capitalize placeholder:text-[#00000080] p-3 focus:outline-none border border-[#00000080] rounded-md"
              />
            </div>

            {/* Category and Subcategory */}
            <div>
              <h1 className="font-poppins text-sm uppercase">Category Image</h1>
              <div className="h-fit  rounded-md mt-2">
                <input
                  type="file"
                  name="img"
                  accept="image/*"
                  onChange={(e) => setData({ ...data, img: e.target.files[0] })}
                  className="w-full font-poppins cursor-pointer border-dashed h-[25vh] text-[#00000080] p-3 focus:outline-none border border-[#00000080] rounded-md"
                />
              </div>
            </div>
            <div>
              <h1 className="font-poppins text-sm uppercase">Status</h1>
              <div className="flex gap-3 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    value="active"
                    checked={data.status === "active"}
                    onChange={handleChange}
                    className="accent-black cursor-pointer"
                  />
                  <span className="font-poppins text-sm">Active</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    value="inactive"
                    checked={data.status === "inactive"}
                    onChange={handleChange}
                    className="accent-black cursor-pointer"
                  />
                  <span className="font-poppins text-sm">Inactive</span>
                </label>
              </div>
            </div>
          </div>
          <div className="">
            <div className="uppercase font-medium font-poppins mt-5 flex justify-end gap-2">
              <button
                className="border border-black px-4 py-3 rounded-lg"
                onClick={() => setCate(false)}
              >
                Cancel
              </button>
              <button
                className="bg-black text-white px-4 py-3 rounded-lg"
                type="submit"
              >
                Add Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewCategory;
