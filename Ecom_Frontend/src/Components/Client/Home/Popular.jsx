import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

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

const Popular = () => {
  const [current, setCurrent] = useState(0);
  const [activeColors, setActiveColors] = useState({});

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: false,
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
      img: "/assets/Client/Home/shoes1.png",
      type: "Football TShoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#C53332",
      color2: "#3261C5",
      color3: "#000000",
      price: "₹3,999",
    },
    {
      img: "/assets/Client/Home/shoes2.png",
      type: "Football TShoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#C53332",
      color2: "#3261C5",
      color3: "#000000",
      price: "₹3,999",
    },
    {
      img: "/assets/Client/Home/shoes3.png",
      type: "Football TShoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#B67F8B",
      color2: "#B6967F",
      color3: "#84B67F",
      price: "₹3,999",
    },
    {
      img: "/assets/Client/Home/shoes2.png",
      type: "Football TShoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#C53332",
      color2: "#3261C5",
      color3: "#000000",
      price: "₹3,999",
    },
    {
      img: "/assets/Client/Home/shoes2.png",
      type: "Football TShoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#C53332",
      color2: "#3261C5",
      color3: "#000000",
      price: "₹3,999",
    },
    {
      img: "/assets/Client/Home/shoes3.png",
      type: "Football TShoes",
      title: "SpeedPro X1 Football Cleats",
      color1: "#C53332",
      color2: "#3261C5",
      color3: "#000000",
      price: "₹3,999",
    },
  ];

  return (
    <div className="pl-6 sm:pl-12 md:pl-24 flex flex-col gap-5 mt-14 relative">
      <div>
        <div className="flex flex-col gap-1">
          <h1 className="uppercase text-2xl font-semibold font-poppins">
            POPULAR RIGHT NOW
          </h1>
          <p className="text-sm font-poppins">
            Trending Styles Loved By Thousands. Shop Our Most Popular Picks
            Before They’re Gone.
          </p>
        </div>
        <div className="mt-5">
          <Slider {...settings}>
            {data.map((item, i) => (
              <div key={i} className="p-2 space-y-2">
                <div className="bg-[#EBEDEF] relative p-3">
                  <img src={item.img} alt="" className="h-full mt-8" />
                  <button className="bg-white mt-5 p-2 uppercase text-sm font-medium font-poppins">
                    {item.type}
                  </button>
                  <p className="bg-white cursor-pointer p-3 rounded-full w-fit absolute top-2 right-2">
                    <FaRegHeart />
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="uppercase text-xs font-poppins font-medium">
                    {item.title}
                  </div>
                  <div className="flex items-center text-sm gap-1">
                    <IoStar /> 4
                  </div>
                </div>
                <div className="flex gap-1">
                  {[item.color1, item.color2, item.color3].map((color, idx) => (
                    <div
                      key={idx}
                      onClick={() =>
                        setActiveColors((prev) => ({
                          ...prev,
                          [i]: color, // store active color for this item index
                        }))
                      }
                      style={{ backgroundColor: color }}
                      className={`w-5 h-5 cursor-pointer rounded-full border-2 ${
                        activeColors[i] === color
                          ? "border-black"
                          : "border-transparent"
                      }`}
                    ></div>
                  ))}
                </div>
                <div>
                  <h1 className="font-poppins font-medium">{item.price}</h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Popular;
