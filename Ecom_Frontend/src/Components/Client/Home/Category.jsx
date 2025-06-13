import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

// Custom Next Arrow
const NextArrow = ({ onClick, currentSlide, slideCount, slidesToShow }) => {
  const isDisabled = currentSlide >= slideCount - slidesToShow;

  return (
    <div
      className="absolute -top-16 right-10 z-10"
      onClick={!isDisabled ? onClick : undefined}
    >
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full cursor-pointer ${
          isDisabled ? "bg-[#E9E9E9] text-black" : "bg-black text-white"
        }`}
      >
        <MdKeyboardArrowRight className="w-8 h-8" />
      </div>
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick, currentSlide }) => {
  const isDisabled = currentSlide === 0;

  return (
    <div
      className="absolute -top-16 right-24 z-10"
      onClick={!isDisabled ? onClick : undefined}
    >
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full cursor-pointer ${
          isDisabled ? "bg-[#E9E9E9] text-black" : "bg-black text-white"
        }`}
      >
        <MdKeyboardArrowLeft className="w-8 h-8" />
      </div>
    </div>
  );
};

const Category = () => {
  const [active, setActive] = useState("MEN");
  const [current, setCurrent] = useState(0);

  const data = [
    {
      img: "/assets/Client/Home/img1.png",
      title: "Sports Shoes",
      desc: "Gear up with shoes built for performance, speed, and power — made for athletes at every level.",
    },
    {
      img: "/assets/Client/Home/img2.png",
      title: "Casual Shoes",
      desc: "Step out with confidence. These shoes keep it chill while making you look sharp.",
    },
    {
      img: "/assets/Client/Home/img3.png",
      title: "Formal Shoes",
      desc: "Crafted for class, designed to impress. Perfect your look with timeless formals.",
    },
    {
      img: "/assets/Client/Home/img2.png",
      title: "Casual Shoes",
      desc: "Step out with confidence. These shoes keep it chill while making you look sharp.",
    },
    {
      img: "/assets/Client/Home/img2.png",
      title: "Casual Shoes",
      desc: "Step out with confidence. These shoes keep it chill while making you look sharp.",
    },
    {
      img: "/assets/Client/Home/img2.png",
      title: "Casual Shoes",
      desc: "Step out with confidence. These shoes keep it chill while making you look sharp.",
    },
    {
      img: "/assets/Client/Home/img2.png",
      title: "Casual Shoes",
      desc: "Step out with confidence. These shoes keep it chill while making you look sharp.",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: (
      <NextArrow
        currentSlide={current}
        slideCount={data.length}
        slidesToShow={3.5}
      />
    ),
    prevArrow: <PrevArrow currentSlide={current} />,
    beforeChange: (oldIndex, newIndex) => setCurrent(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="pl-6 sm:pl-12 md:pl-24 flex flex-col gap-5 mt-14 relative">
      <h1 className="uppercase font-poppins font-semibold text-[34px]">
        Category
      </h1>

      <div className="uppercase gap-2 sm:gap-4 flex font-poppins font-medium">
        {["MEN", "WOMEN", "KIDS"].map((label, idx) => (
          <NavLink
            key={idx}
            className={`relative cursor-pointer text-center py-[10px] px-[20px] rounded-full transition duration-300 ${
              active === label ? "bg-black text-white" : "bg-white hover:bg-[#dadce0]/50 text-black"
            }`}
            onClick={() => setActive(label)}
          >
            {label}
          </NavLink>
        ))}
      </div>

      <Slider {...settings}>
        {data.map((item, i) => (
          <div key={i} className="p-2 space-y-2">
            <img src={item.img} alt={item.title} className="h-full" />
            <h1 className="text-3xl font-semibold font-poppins uppercase">
              {item.title}
            </h1>
            <h1 className="text-xs w-[95%] font-poppins">{item.desc}</h1>
            <button className="uppercase hover:scale-105 duration-300 bg-black text-white py-2 px-4 rounded-full">
              SHOP NOW
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Category;
