import React, { useState } from "react";
import { FiTrash } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";

const SubCategoryTable = () => {
  const products = [
    {
      id: 1,
      image: "/assets/Admin/Dashboard/product.png",
      name: "Nike CITY 'Sand'",
      category: "SPORT",
      stock: 220,
      price: "₹4999",
    },
    {
      id: 2,
      image: "/assets/Admin/Dashboard/product.png",
      name: "Adidas UltraBoost",
      category: "SPORT",
      stock: 150,
      price: "₹6999",
    },
    {
      id: 3,
      image: "/assets/Admin/Dashboard/product.png",
      name: "Puma RS-X",
      category: "CASUAL",
      stock: 120,
      price: "₹5999",
    },
    {
      id: 4,
      image: "/assets/Admin/Dashboard/product.png",
      name: "Reebok Classic",
      category: "CASUAL",
      stock: 80,
      price: "₹3499",
    },
    {
      id: 5,
      image: "/assets/Admin/Dashboard/product.png",
      name: "Bata Leather Boots",
      category: "BOOTS",
      stock: 70,
      price: "₹3999",
    },
    {
      id: 6,
      image: "/assets/Admin/Dashboard/product.png",
      name: "Woodland Trekker",
      category: "BOOTS",
      stock: 60,
      price: "₹4999",
    },
    {
      id: 7,
      image: "/assets/Admin/Dashboard/product.png",
      name: "Sketchers Walk",
      category: "WALKING",
      stock: 130,
      price: "₹2999",
    },
    {
      id: 8,
      image: "/assets/Admin/Dashboard/product.png",
      name: "Converse All Star",
      category: "CASUAL",
      stock: 90,
      price: "₹2899",
    },
    {
      id: 9,
      image: "/assets/Admin/Dashboard/product.png",
      name: "Nike Air Max",
      category: "SPORT",
      stock: 110,
      price: "₹7599",
    },
    {
      id: 10,
      image: "/assets/Admin/Dashboard/product.png",
      name: "Fila Everyday",
      category: "CASUAL",
      stock: 140,
      price: "₹1999",
    },
    {
      id: 11,
      image: "/assets/Admin/Dashboard/product.png",
      name: "Lancer QuickRun",
      category: "SPORT",
      stock: 180,
      price: "₹1599",
    },
    {
      id: 12,
      image: "/assets/Admin/Dashboard/product.png",
      name: "Liberty Formal",
      category: "FORMAL",
      stock: 60,
      price: "₹3999",
    },
    {
      id: 13,
      image: "/assets/Admin/Dashboard/product.png",
      name: "Nike Jordan High",
      category: "SPORT",
      stock: 40,
      price: "₹8999",
    },
    {
      id: 14,
      image: "/assets/Admin/Dashboard/product.png",
      name: "Zara Stylish Heels",
      category: "HEELS",
      stock: 70,
      price: "₹4499",
    },
    {
      id: 15,
      image: "/assets/Admin/Dashboard/product.png",
      name: "Gucci Leather",
      category: "FORMAL",
      stock: 30,
      price: "₹10999",
    },
    {
      id: 16,
      image: "/assets/Admin/Dashboard/product.png",
      name: "Crocs Comfort",
      category: "SANDALS",
      stock: 200,
      price: "₹2499",
    },
    {
      id: 17,
      image: "/assets/Admin/Dashboard/product.png",
      name: "HRX Sprint",
      category: "RUNNING",
      stock: 100,
      price: "₹3799",
    },
    {
      id: 18,
      image: "/assets/Admin/Dashboard/product.png",
      name: "Adidas Predator",
      category: "SPORT",
      stock: 95,
      price: "₹6799",
    },
    {
      id: 19,
      image: "/assets/Admin/Dashboard/product.png",
      name: "Campus Bold",
      category: "CASUAL",
      stock: 150,
      price: "₹1499",
    },
    {
      id: 20,
      image: "/assets/Admin/Dashboard/product.png",
      name: "RedTape Elite",
      category: "FORMAL",
      stock: 85,
      price: "₹5599",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (number) => setCurrentPage(number);
  return (
    <div>
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
              <th className="px-4 py-3 text-center">PRODUCT COUNT</th>
              <th className="px-4 py-3 text-center">STATUS</th>
              <th className="px-4 py-3 text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} className="border-b text-sm hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    className="accent-black cursor-pointer"
                  />
                </td>
                <td className="px-4 py-3 flex items-center gap-2 whitespace-nowrap">
                  <img
                    src={item.image}
                    alt="product"
                    className="w-10 h-10 object-contain"
                  />
                  {item.name}
                </td>
                <td className="px-4 py-3 font-medium ">{item.category}</td>
                <td className="px-4 py-3 text-center">{item.stock}</td>
                <td className="px-4 py-3 text-center">{item.price}</td>
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
            {Math.min(startIndex + itemsPerPage, products.length)} OF{" "}
            {products.length} PRODUCTS
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

export default SubCategoryTable;
