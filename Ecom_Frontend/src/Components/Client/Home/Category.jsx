import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
  const [active, setActive] = useState("MEN");
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    [
      "/assets/Client/Home/imgg.png",
      "/assets/Client/Home/imgg.png",
      "/assets/Client/Home/imgg.png",
      "/assets/Client/Home/imgg.png",
    ],
    [
      "/assets/Client/Home/imgg.png",
      "/assets/Client/Home/imgg.png",
      "/assets/Client/Home/imgg.png",
      "/assets/Client/Home/imgg.png",
    ],
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="px-24 flex flex-col gap-5 mt-14">
      <div>
        <h1 className="uppercase font-poppins font-semibold text-xl">
          Category
        </h1>
      </div>

      <div>
        <div className="uppercase gap-4 flex font-poppins font-medium">
          {["MEN", "WOMEN", "KIDS"].map((label, idx) => (
            <NavLink
              key={idx}
              className={`relative cursor-pointer p-2 px-4 rounded-full ${
                active === label ? "bg-black text-white" : "bg-white text-black"
              }`}
              onClick={() => setActive(label)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="">
        
      </div>
    </div>
  );
};

export default Category;
