import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Select from "react-select";
import { FaTrash } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import axios from "axios";
import { useAuth } from "../../../context/AuthContext";

const AddNewCategory = ({ setCate }) => {
  const [data, setData] = useState({
    img: "",
    category: "",
    desc: "",
    status: "",
    subcategory: "",
  });
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const { refreshAuth } = useAuth();

  console.log(data, "dtat");

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      // 1. Upload to Cloudinary
      const cloudData = new FormData();
      cloudData.append("file", data.img);
      cloudData.append("upload_preset", "E-commerce"); // Replace this
      cloudData.append("cloud_name", "de7xfobxo"); // Replace this

      const cloudRes = await axios.post(
        "https://api.cloudinary.com/v1_1/de7xfobxo/image/upload", // Replace this
        cloudData
      );

      const imageUrl = cloudRes.data.secure_url;

      // 2. Send to your own backend
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${API_URL}/api/cate/post-cate`,
        {
          img: imageUrl, // 👈 Use uploaded Cloudinary URL
          category: data.category,
          desc: data.desc,
          status: data.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data) {
        console.log("Category added with Cloudinary image");
      }

      setData({
        img: "",
        category: "",
        desc: "",
        status: "",
      });
      setPreview(null);
    } catch (err) {
      console.error("Upload failed", err);
    } finally {
      setUploading(false);
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

            <div>
              <h1 className="font-poppins text-sm uppercase">Sub Category</h1>
              <input
                type="text"
                name="subcategory"
                onChange={handleChange}
                value={data.subcategory}
                className="placeholder:capitalize font-poppins mt-2  w-full p-3 focus:outline-none border border-[#00000080] rounded-md"
                placeholder="Enter Sub Category name"
              />
            </div>

            {/* Category and Subcategory */}
            <div>
              <h1 className="font-poppins text-sm uppercase">Category Image</h1>
              <div className="h-fit rounded-md mt-2">
                <input
                  type="file"
                  name="img"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setData({ ...data, img: file });
                      setPreview(URL.createObjectURL(file));
                    }
                  }}
                  className="w-full cursor-pointer border-dashed border rounded-md p-3"
                />
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full max-h-60 object-contain mt-2 rounded-md border"
                  />
                )}
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
