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

const Sports = () => {
  const [current, setCurrent] = useState(0);
  const [activeColors, setActiveColors] = useState({});

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
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
      img: "/assets/Client/Home/sport1.png",
      title: "cricket",
    },
    {
      img: "/assets/Client/Home/sport2.png",
      title: "FOOTBALL",
    },
    {
      img: "/assets/Client/Home/sport3.png",
      title: "RUNINNG",
    },
    {
      img: "/assets/Client/Home/sport1.png",
      title: "cricket",
    },
    {
      img: "/assets/Client/Home/sport2.png",
      title: "FOOTBALL",
    },
    {
      img: "/assets/Client/Home/sport3.png",
      title: "RUNINNG",
    },
  ];

  return (
    <div className="pl-6 sm:pl-12 md:pl-24 flex flex-col gap-5 mt-14 relative">
      <div>
        <div className="flex flex-col gap-1">
          <h1 className="uppercase text-2xl font-semibold font-poppins">
            SHOP BY SPORTS
          </h1>
          <p className="text-sm font-poppins w-[55%]">
            Push your limits, one stride at a time. Explore our
            performance-driven running gear built for comfort, speed, and
            endurance—so you can chase your goals without looking back.
          </p>
        </div>
        <div>
          <div className="mt-5">
            <Slider {...settings}>
              {data.map((item, i) => (
                <div key={i} className="p-2 space-y-2">
                  {/* <img src={item.img} alt="" className="h-full mt-8" /> */}
                  <div
                    style={{
                      backgroundImage: `url(${item.img})`,
                    }}
                    className="h-[25vh] bg-cover bg-no-repeat relative bg-center"
                  >
                    <button className="bg-white w-fit py-1 absolute bottom-4 left-4 rounded-md uppercase font-poppins 
                    text-sm font-medium px-3">
                      {item.title}
                    </button>
                  </div>
                  <button className="bg-white mt-5 p-2 uppercase text-sm font-medium font-poppins">
                    {item.type}
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
