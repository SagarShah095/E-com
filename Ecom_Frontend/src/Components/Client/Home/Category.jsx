import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

// Custom arrow components
const NextArrow = (props) => {
  const { onClick, currentSlide, slideCount } = props;
  const isDisabled = currentSlide === slideCount - 4;

  return (
    <div
      className={`absolute -top-16 right-10 cursor-pointer z-10 ${
        isDisabled ? "bg-[#E9E9E9] rounded-full pointer-events-none" : ""
      }`}
      onClick={onClick}
    >
      <div
        className={`w-12 h-12 bg-black text-white flex items-center justify-center rounded-full ${
          isDisabled
            ? "bg-[#E9E9E9] rounded-full text-black pointer-events-none"
            : ""
        }`}
      >
        <MdKeyboardArrowRight
          className={`w-8 h-8 ${isDisabled ? "text-black" : "text-white"}`}
        />
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick, currentSlide } = props;
  const isDisabled = currentSlide === 0;

  return (
    <div
      className={`absolute -top-16 right-24 cursor-pointer z-10 ${
        isDisabled ? "bg-[#E9E9E9] rounded-full pointer-events-none" : ""
      }`}
      onClick={onClick}
    >
      <div
        className={`w-12 h-12 bg-black text-white flex items-center justify-center rounded-full ${
          isDisabled
            ? "bg-[#E9E9E9] rounded-full text-black pointer-events-none"
            : ""
        }`}
      >
        <MdKeyboardArrowLeft
          className={`w-8 h-8 ${isDisabled ? "text-black" : "text-white"}`}
        />
      </div>
    </div>
  );
};

const Category = () => {
  const [active, setActive] = useState("MEN");
  const [current, setCurrent] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow currentSlide={current} slideCount={6} />,
    prevArrow: <PrevArrow currentSlide={current} />,
    beforeChange: (oldIndex, newIndex) => {
      setCurrent(newIndex);
    },
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

  return (
    <div className="pl-6 sm:pl-12 md:pl-24 flex flex-col gap-5 mt-14 relative">
      <div>
        <h1 className="uppercase font-poppins font-semibold text-[34px]">
          Category
        </h1>
      </div>

      <div>
        <div className="uppercase gap-2 sm:gap-4 flex font-poppins font-medium">
          {["MEN", "WOMEN", "KIDS"].map((label, idx) => (
            <NavLink
              key={idx}
              className={`relative cursor-pointer text-center py-[10px] px-[20px] rounded-full transition duration-300 ${
                active === label ? "bg-black text-white" : "bg-white text-black"
              }`}
              onClick={() => setActive(label)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      <div>
        <Slider {...settings}>
          {data.map((item, i) => (
            <div key={i} className="p-2 space-y-2">
              <img src={item.img} alt="" className="h-full" />
              <h1 className="text-3xl font-semibold font-poppins uppercase">
                {item.title}
              </h1>
              <h1 className="text-xs w-[95%] font-poppins ">{item.desc}</h1>
              <button className="uppercase bg-black text-white py-2 px-4 rounded-full">
                SHOP NOW
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Category;
