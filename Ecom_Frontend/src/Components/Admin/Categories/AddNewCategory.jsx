import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Select from "react-select";
import { FaTrash } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import axios from "axios";
import { useAuth } from "../../../context/AuthContext";

const AddNewCategory = ({ setCate, update, setOpen, setGetCate, getData }) => {
  const [data, setData] = useState({
    img: "",
    category: "",
    desc: "",
    status: "",
    subcategory: "",
  });

  const [formData, setFormData] = useState({
    _id: "",
    img: "",
    category: "",
    desc: "",
    status: "",
    subcategory: "",
  });

  const [mainData, setMaindata] = useState([]);
  const [ogData, setOgdata] = useState({});

  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const { refreshAuth } = useAuth();

  console.log(data, "dtat");
  console.log(getData, "getDatagetData");

  const API_URL = import.meta.env.VITE_API_URL;

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

  const updateData = async () => {
    try {
      const response = await axios.put(`${API_URL}/api/cate/put-cate`, data);
      if (response.data.success) {
        console.log("updateData updated successfully:", response.data);
      }

      setOgdata(response.data);
    } catch (error) {
      console.error(
        "updateData update failed:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    if (update && open && matchPrd) {
      setFormData({
        _id: matchPrd._id,
        category: matchPrd.category || "",
        desc: matchPrd.desc || "",
        status: matchPrd.status || "",
        subcategory: matchPrd.subcategory || "",
        img: matchPrd.img || "",
      });
      setPreview(matchPrd.img || null);
    }
  }, [update, open, matchPrd]);

  console.log(ogData, "ogDataogDataogDataogData");

  console.log(mainData, "mainDatamainData");

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = formData.img;

      // If image is a File, upload to Cloudinary
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
        ...formData,
        img: imageUrl,
      };

      const token = localStorage.getItem("token");

      if (open) {
        // UPDATE
        await axios.put(`${API_URL}/api/cate/put-cate`, payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Category updated");
      } else {
        // ADD
        await axios.post(`${API_URL}/api/cate/post-cate`, payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Category added");
      }

      setFormData({
        _id: "",
        img: "",
        category: "",
        desc: "",
        status: "",
        subcategory: "",
      });
      setPreview(null);
      setCate(false);
      setOpen(false);
      setGetCate && setGetCate([]); // optional refresh
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setCate(false);
    setOpen(false);
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
            {open ? "Update Category" : "Add New Category"}
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
                value={open ? `${matchPrd?.category}` : data.category}
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
