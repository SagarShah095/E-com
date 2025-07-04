import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Select from "react-select";
import { FiTrash } from "react-icons/fi";
import axios from "axios";
import { useAuth } from "../../../context/AuthContext";
import { useEffect } from "react";

const ProductRightBar = ({ setSide }) => {
  const [formData, setFormData] = useState({
    productName: "",
    sku: "",
    category: null,
    subCategory: null,
    gender: [],
    size: null,
    description1: "",
    description2: "",
    images: "",
    tags: "",
    status: "active",
    price: "",
    stock: "",
  });

  const API_URL = import.meta.env.VITE_API_URL;

  const options = [
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
    { value: "kids", label: "Kids" },
    { value: "unisex", label: "Unisex" },
  ];

  const categoryOptions = [
    { value: "sport", label: "Sport" },
    { value: "casual", label: "Casual" },
    { value: "formal", label: "Formal" },
  ];

  const subCategoryOptions = [
    { value: "running", label: "Running" },
    { value: "walking", label: "Walking" },
    { value: "gym", label: "Gym" },
  ];

  const sizeOptions = [
    { value: "s", label: "S" },
    { value: "m", label: "M" },
    { value: "l", label: "L" },
    { value: "xl", label: "XL" },
  ];

  const { refreshAuth } = useAuth();
  const [productData, setProductData] = useState([]);

  console.log(productData, "Product Data in Right Bar");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;


    const imageForm = new FormData();
    imageForm.append("file", file); // ✅ Use selected file
    imageForm.append("upload_preset", "E-commerce"); // ✅ Replace with your actual preset

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/de7xfobxo/image/upload", // ✅ Replace with your Cloudinary cloud name
        imageForm
      );
      const imageUrl = res.data.secure_url;
      setFormData((prev) => ({ ...prev, images: imageUrl }));
    } catch (err) {
      console.error("Image upload failed", err);
    }
  };

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
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");

  // ✅ Format fields for backend
  const formattedData = {
    ...formData,
    category: formData.category?.value || "",
    subCategory: formData.subCategory?.value || "",
    gender: formData.gender?.map((item) => item.value) || [],
    size: formData.size?.value ? [formData.size.value] : [],
    stock: parseInt(formData.stock) || 0,
    price: parseFloat(formData.price) || 0,
  };

  try {
    const res = await axios.post(
      `${API_URL}/api/product/addPoduct`,
      formattedData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data.success) {
      setSide(false);
      // Reset form
      setFormData({
        productName: "",
        sku: "",
        category: null,
        subCategory: null,
        gender: [],
        size: null,
        stock: "",
        description1: "",
        description2: "",
        images: "",
        tags: "",
        price: "",
        status: "active",
      });
    }
  } catch (error) {
    console.error("Error in Add Product", error);
  }
};


  return (
    <div
      className={`fixed top-0 right-0 h-full w-[42%] bg-white p-3 px-5 overflow-y-auto rounded-l-md transform transition-transform duration-300 ease-in-out ${
        setSide ? "translate-x-0" : "translate-x-full"
      } z-50 shadow-xl`}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-between">
          <h1 className="font-poppins font-semibold text-lg">
            Add New Product
          </h1>
          <RxCross2
            className="text-2xl cursor-pointer"
            onClick={() => setSide(false)}
          />
        </div>

        <div className="mt-3 space-y-4">
          {/* Product Name */}
          <div>
            <h1 className="font-poppins text-sm uppercase">Product Name</h1>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              placeholder="Enter product name"
              className="w-full p-3 border border-[#00000080] rounded-md placeholder:uppercase"
            />
          </div>

          {/* SKU */}
          <div>
            <h1 className="font-poppins text-sm uppercase">SKU</h1>
            <input
              type="text"
              name="sku"
              value={formData.sku}
              onChange={handleInputChange}
              placeholder="Enter SKU"
              className="w-full p-3 border border-[#00000080] rounded-md"
            />
          </div>

          {/* Category & Subcategory */}
          <div className="flex gap-3">
            <div className="w-full">
              <h1 className="font-poppins text-sm uppercase mb-1">Category</h1>
              <Select
                options={categoryOptions}
                value={formData.category}
                onChange={(selected) =>
                  setFormData((prev) => ({ ...prev, category: selected }))
                }
                placeholder="Select Category"
              />
            </div>
            <div className="w-full">
              <h1 className="font-poppins text-sm uppercase mb-1">
                Subcategory
              </h1>
              <Select
                options={subCategoryOptions}
                value={formData.subCategory}
                onChange={(selected) =>
                  setFormData((prev) => ({ ...prev, subCategory: selected }))
                }
                placeholder="Select Subcategory"
              />
            </div>
          </div>

          {/* Gender & Size */}
          <div className="flex gap-3">
            <div className="w-full">
              <h1 className="font-poppins text-sm uppercase mb-1">Gender</h1>
              <Select
                isMulti
                options={options}
                value={formData.gender}
                onChange={(selected) =>
                  setFormData((prev) => ({ ...prev, gender: selected }))
                }
                placeholder="Select Gender"
              />
            </div>
            <div className="w-full">
              <h1 className="font-poppins text-sm uppercase mb-1">Size</h1>
              <Select
                options={sizeOptions}
                value={formData.size}
                onChange={(selected) =>
                  setFormData((prev) => ({ ...prev, size: selected }))
                }
                placeholder="Select Size"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-full">
              <h1 className="font-poppins text-sm uppercase mb-1">Price</h1>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, price: e.target.value }))
                }
                placeholder="Enter Price"
                className="w-full p-3 border border-[#00000080] rounded-md placeholder:uppercase"
              />
            </div>
            <div className="w-full">
              <h1 className="font-poppins text-sm uppercase mb-1">Stock</h1>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, stock: e.target.value }))
                }
                placeholder="Enter Stock"
                className="w-full p-3 border border-[#00000080] rounded-md placeholder:uppercase"
              />
            </div>
          </div>

          {/* Description 1 */}
          <div>
            <h1 className="font-poppins text-sm uppercase">
              Product Description 1
            </h1>
            <textarea
              name="description1"
              value={formData.description1}
              onChange={handleInputChange}
              rows={5}
              placeholder="Enter product description"
              className="w-full border border-[#00000080] rounded-md p-2 mt-2"
            />
          </div>

          {/* Description 2 */}
          <div>
            <h1 className="font-poppins text-sm uppercase">
              Product Description 2
            </h1>
            <textarea
              name="description2"
              value={formData.description2}
              onChange={handleInputChange}
              rows={5}
              placeholder="Enter product description"
              className="w-full border border-[#00000080] rounded-md p-2 mt-2"
            />
          </div>

          {/* Image Upload */}
          <div>
            <h1 className="font-poppins text-sm uppercase">Product Images</h1>
            <input
              type="file"
              name="images"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full border border-dashed border-[#00000080] rounded-md p-2 mt-2"
            />
            {formData.images && (
              <img
                src={formData.images}
                alt="Uploaded Preview"
                className="mt-2 w-full max-h-60 object-contain border rounded-md"
              />
            )}
          </div>

          {/* Tags */}
          <div>
            <h1 className="font-poppins text-sm uppercase">Tags</h1>
            <input
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="Enter tags separated by commas"
              className="w-full border border-[#00000080] uppercase pl-4 placeholder:text-[#00000080] rounded-md p-2 mt-1"
            />
          </div>

          {/* Status */}
          <div>
            <h1 className="uppercase font-poppins mt-10">Status</h1>
            <div className="flex gap-4">
              <label className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={formData.status === "active"}
                  onChange={handleInputChange}
                  className="h-4 w-4 accent-black cursor-pointer"
                />
                <span className="text-sm">Active</span>
              </label>
              <label className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  checked={formData.status === "inactive"}
                  onChange={handleInputChange}
                  className="h-4 w-4 accent-black cursor-pointer"
                />
                <span className="text-sm">Inactive</span>
              </label>
            </div>
          </div>

          {/* Submit & Cancel */}
          <div className="uppercase font-medium font-poppins mt-5 flex justify-end gap-2">
            <button
              type="button"
              className="border border-black px-4 py-3 rounded-lg"
              onClick={() => setSide(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white px-4 py-3 rounded-lg"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductRightBar;
