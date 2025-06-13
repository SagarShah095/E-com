import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";

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

const Sports = () => {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3.5);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 480) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(3.5);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: (
      <NextArrow
        currentSlide={current}
        slideCount={6}
        slidesToShow={slidesToShow}
      />
    ),
    prevArrow: <PrevArrow currentSlide={current} />,
    beforeChange: (_, next) => setCurrent(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const data = [
    { img: "/assets/Client/Home/sport1.png", title: "cricket" },
    { img: "/assets/Client/Home/sport2.png", title: "FOOTBALL" },
    { img: "/assets/Client/Home/sport3.png", title: "RUNNING" },
    { img: "/assets/Client/Home/sport1.png", title: "cricket" },
    { img: "/assets/Client/Home/sport2.png", title: "FOOTBALL" },
    { img: "/assets/Client/Home/sport3.png", title: "RUNNING" },
  ];

  return (
    <div className="pl-6 sm:pl-12 md:pl-24 flex flex-col gap-5 mt-14 relative">
      <div>
        <h1 className="uppercase text-2xl font-semibold font-poppins">
          SHOP BY SPORTS
        </h1>
        <p className="text-sm font-poppins w-[55%]">
          Push your limits, one stride at a time. Explore our performance-driven
          running gear built for comfort, speed, and endurance—so you can chase
          your goals without looking back.
        </p>
        <div className="mt-5">
          <Slider {...settings}>
            {data.map((item, i) => (
              <div key={i} className="p-2 space-y-2">
                <div
                  style={{ backgroundImage: `url(${item.img})` }}
                  className="h-[25vh] bg-cover bg-no-repeat relative bg-center"
                >
                  <button className="bg-white hover:bg-[#dadce0] duration-300 w-fit py-1 absolute bottom-4 left-4 rounded-md uppercase font-poppins text-sm font-medium px-3">
                    {item.title}
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Sports;
