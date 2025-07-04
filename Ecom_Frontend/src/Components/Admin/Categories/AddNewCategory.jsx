import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Select from "react-select";
import { FaTrash } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import axios from "axios";
import { useAuth } from "../../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const AddNewCategory = ({
  setCategory,
  update,
  setOpen,
  setGetCate,
  getData,
  setRefresh,
  setCurrentPage,
  currentPage,
}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get("id");

  const [formData, setFormData] = useState({
    _id: "",
    img: "",
    category: "",
    desc: "",
    status: "",
    subcategory: "",
  });
  const [mainData, setMaindata] = useState([]);
  const [preview, setPreview] = useState(null);
  console.log(getData, "getDatagetData");
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  const { refreshAuth } = useAuth();
  //  useEffect(() => {
  //   if (setCurrentPage) {
  //     setCurrentPage((prev) => prev + 1);
  //   }
  // }, []); // empty dependency array to run only once

  React.useEffect(() => {
    if (categoryId) {
      setOpen(true);
    }
  }, [categoryId]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token"); // 👈 or from context, cookies, etc.

      const response = await axios.get(`${API_URL}/api/cate/get-cate`, {
        headers: {
          Authorization: `Bearer ${token}`, // 👈 token added here
          // Do NOT manually set Content-Type for FormData
        },
      });
      setMaindata(response?.data?.category);
      refreshAuth();
    } catch (error) {
      console.error(error);
    }
  };

  const matchPrd = mainData?.find((item) => item?._id === update);

  // const updateData = async () => {
  //   try {
  //     const response = await axios.put(`${API_URL}/api/cate/${formData._id}`, data);
  //     if (response.data.success) {
  //       console.log("updateData updated successfully:", response.data);
  //     }

  //     setOgdata(response.data);
  //   } catch (error) {
  //     console.error(
  //       "updateData update failed:",
  //       error.response?.data || error.message
  //     );
  //   }
  // };

  useEffect(() => {
    if (categoryId && mainData.length > 0) {
      const match = mainData.find((item) => item._id === categoryId);
      if (match) {
        setFormData({
          _id: match._id,
          category: match.category || "",
          desc: match.desc || "",
          status: match.status || "",
          subcategory: match.subcategory || "",
          img: match.img || "",
        });
        setPreview(match.img || null);
      }
    } else {
      // Reset form if adding new
      setFormData({
        _id: "",
        img: "",
        category: "",
        desc: "",
        status: "",
        subcategory: "",
      });
      setPreview(null);
    }
  }, [categoryId, mainData]);

  console.log(matchPrd, update, "matchPrdmatchPrd");

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = formData.img;

      // Upload image to Cloudinary if it's a File
      if (formData.img instanceof File) {
        const cloudData = new FormData();
        cloudData.append("file", formData.img);
        cloudData.append("upload_preset", "E-commerce");

        const cloudRes = await axios.post(
          "https://api.cloudinary.com/v1_1/de7xfobxo/image/upload",
          cloudData
        );
        imageUrl = cloudRes.data.secure_url;
      }

      const payload = {
        category: formData.category,
        desc: formData.desc,
        status: formData.status,
        subcategory: formData.subcategory,
        img: imageUrl,
      };

      const token = localStorage.getItem("token");

      if (formData._id) {
        // UPDATE (PUT)
        const res = await axios.put(
          `${API_URL}/api/cate/${formData._id}`,
          payload,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("Category updated");

        const updatedCategory = res.data.category || {
          ...payload,
          _id: formData._id,
        };

        console.log({ ...payload, _id: formData._id }, "res.data.category");

        // 🔄 Update the UI state directly
        if (setGetCate) {
          setGetCate((prev) =>
            prev.map((item) =>
              item._id === formData._id ? { ...item, ...updatedCategory } : item
            )
          );
        }
        if (getData) {
          getData();
        }
      } else {
        // CREATE (POST)
        const res = await axios.post(`${API_URL}/api/cate/post-cate`, payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Category added");

        const newCategory = res.data.category || res.data;
        console.log(res.data, "newCategorynewCategory");

        // 🆕 Push new category into list
        if (setGetCate) {
          setGetCate((prev) => [...prev, newCategory]);
        }

        if (getData) {
          getData();
        }
      }

      // Reset form
      setFormData({
        _id: "",
        img: "",
        category: "",
        desc: "",
        status: "",
        subcategory: "",
      });
      setPreview(null);
      setOpen(false);
      setCategory(false);
      // refreshAuth();
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
    fetchData();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setCategory(false);
    setOpen(false);
    navigate(`/admin/categories`);
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
            {categoryId ? "Update Category" : "Add New Category"}
          </h1>
          <RxCross2
            className="text-2xl cursor-pointer"
            onClick={handleCancel}
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
                value={formData.category}
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
                value={formData.desc}
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
                value={formData.subcategory}
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
                      setFormData((prev) => ({ ...prev, img: file }));
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
                    checked={formData.status === "active"}
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
                    checked={formData.status === "inactive"}
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
                onClick={() => setCategory(false)}
              >
                Cancel
              </button>
              <button
                className="bg-black text-white px-4 py-3 rounded-lg"
                type="submit"
              >
                {categoryId ? "Update Category" : "Add Category"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewCategory;
