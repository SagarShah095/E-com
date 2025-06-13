import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import { FaRegHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const NextArrow = ({ onClick, currentSlide, slideCount, slidesToShow }) => {
  const isDisabled = currentSlide >= slideCount - slidesToShow;

  return (
    <div
      className="absolute -top-16 right-10 z-10"
      onClick={!isDisabled ? onClick : undefined}
    >
      <div
        className={`w-12 h-12 cursor-pointer ${
          isDisabled ? "bg-[#E9E9E9] text-black" : "bg-black text-white"
        } flex items-center justify-center rounded-full`}
      >
        <MdKeyboardArrowRight className="w-8 h-8" />
      </div>
    </div>
  );
};

const PrevArrow = ({ onClick, currentSlide }) => {
  const isDisabled = currentSlide === 0;

  return (
    <div
      className="absolute -top-16 right-24 z-10"
      onClick={!isDisabled ? onClick : undefined}
    >
      <div
        className={`w-12 h-12 cursor-pointer ${
          isDisabled ? "bg-[#E9E9E9] text-black" : "bg-black text-white"
        } flex items-center justify-center rounded-full`}
      >
        <MdKeyboardArrowLeft className="w-8 h-8" />
      </div>
    </div>
  );
};

const Popular = () => {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4.5);

  const data = [
    { img: "/assets/Client/Home/shoes1.png", type: "Football TShoes", title: "SpeedPro X1 Football Cleats", color1: "#C53332", color2: "#3261C5", color3: "#000000", price: "₹3,999" },
    { img: "/assets/Client/Home/shoes2.png", type: "Football TShoes", title: "SpeedPro X1 Football Cleats", color1: "#C53332", color2: "#3261C5", color3: "#000000", price: "₹3,999" },
    { img: "/assets/Client/Home/shoes3.png", type: "Football TShoes", title: "SpeedPro X1 Football Cleats", color1: "#B67F8B", color2: "#B6967F", color3: "#84B67F", price: "₹3,999" },
    { img: "/assets/Client/Home/shoes2.png", type: "Football TShoes", title: "SpeedPro X1 Football Cleats", color1: "#C53332", color2: "#3261C5", color3: "#000000", price: "₹3,999" },
    { img: "/assets/Client/Home/shoes2.png", type: "Football TShoes", title: "SpeedPro X1 Football Cleats", color1: "#C53332", color2: "#3261C5", color3: "#000000", price: "₹3,999" },
    { img: "/assets/Client/Home/shoes3.png", type: "Football TShoes", title: "SpeedPro X1 Football Cleats", color1: "#C53332", color2: "#3261C5", color3: "#000000", price: "₹3,999" },
  ];

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 480) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4.5);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    nextArrow: (
      <NextArrow
        currentSlide={current}
        slideCount={data.length}
        slidesToShow={slidesToShow}
      />
    ),
    prevArrow: <PrevArrow currentSlide={current} />,
    beforeChange: (_, next) => setCurrent(next),
  };

  const [activeColors, setActiveColors] = useState({});

  return (
    <div className="pl-6 sm:pl-12 md:pl-24 flex flex-col gap-5 mt-14 relative">
      <div>
        <div className="flex flex-col gap-1">
          <h1 className="uppercase w-fit text-2xl font-semibold font-poppins">
            POPULAR RIGHT NOW
          </h1>
          <p className="text-sm font-poppins">
            Trending Styles Loved By Thousands. Shop Our Most Popular Picks Before They’re Gone.
          </p>
        </div>
        <div className="mt-5">
          <Slider {...settings}>
            {data.map((item, i) => (
              <div key={i} className="p-2 space-y-2">
                <div className="bg-[#EBEDEF] relative p-3">
                  <img src={item.img} alt="" className="h-full mt-8" />
                  <button className="bg-white hover:bg-[#dadce0] duration-300  mt-5 p-2 uppercase text-sm font-medium font-poppins">
                    {item.type}
                  </button>
                  <p className="bg-white hover:bg-[#dadce0] duration-300 cursor-pointer p-3 rounded-full w-fit absolute top-2 right-2">
                    <FaRegHeart />
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="uppercase  text-xs font-poppins font-medium">
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
                          [i]: color,
                        }))
                      }
                      style={{ backgroundColor: color }}
                      className={`w-5 h-5 cursor-pointer rounded-full border-2 ${
                        activeColors[i] === color ? "border-black" : "border-transparent"
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
