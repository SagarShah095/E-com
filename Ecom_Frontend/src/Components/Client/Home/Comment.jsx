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
        className={`hidden w-12 h-12 bg-black text-white  items-center justify-center rounded-full ${
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
        className={`w-12 hidden h-12 bg-black text-white  items-center justify-center rounded-full ${
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

const Comment = () => {
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
      title: "Great quality and really comfortable. Worth the price!",
    },
    {
      title:
        "I was a bit skeptical at first, but the shoes exceeded my expectations. The material feels premium, the cushioning is excellent, and I’ve worn them for long walks without any discomfort. Delivery was fast and the size guide was spot on. Definitely recommending this to friends!",
    },
    {
      title:
        "I was a bit skeptical at first, but the shoes exceeded my expectations. The material feels premium, the cushioning is excellent, and I’ve worn them for long walks without any discomfort. Delivery was fast and the size guide was spot on. Definitely recommending this to friends!",
    },
    {
      title: "Great quality and really comfortable. Worth the price!",
    },
    {
      title:
        "I was a bit skeptical at first, but the shoes exceeded my expectations. The material feels premium, the cushioning is excellent, and I’ve worn them for long walks without any discomfort. Delivery was fast and the size guide was spot on. Definitely recommending this to friends!",
    },
    {
      title:
        "I was a bit skeptical at first, but the shoes exceeded my expectations. The material feels premium, the cushioning is excellent, and I’ve worn them for long walks without any discomfort. Delivery was fast and the size guide was spot on. Definitely recommending this to friends!",
    },
  ];

  return (
    <div className="pl-6 sm:pl-12 md:pl-24 flex flex-col gap-5 mt-14 relative">
      <div>
        <div>
          <h1 className="text-2xl uppercase font-semibold font-poppins">
            What Our Customers Say
          </h1>
        </div>
        <div>
          <div className="mt-5 ">
            <Slider {...settings}>
              {data.map((item, i) => (
                <div key={i} className="p-2">
                  <div className="flex flex-col space-y-2 bg-white justify-between w-full p-2 items-center">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar /> 4
                      </div>
                      <div>12 May 2025</div>
                    </div>

                    <div>
                      <h1>"{item.title}"</h1>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
