import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F5] ">
      <div className="px-6 sm:px-12 md:px-24 flex justify-between gap-5 pt-14 relative">
        <div>
          <div>
            <h1 className="font-medium text-lg font-poppins">Explore</h1>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            {[
              "Men's Shoes",
              "Women's Shoes",
              "New Arrivals",
              "Best Sellers",
              "Limited Edition",
            ].map((item, i) => (
              <div key={i} className="text-[#8D8D8D] font-poppins">
                <h1 className="cursor-pointer w-fit relative after:content-[''] after:absolute after:-bottom-1 
                after:w-0 hover:after:w-full after:left-0 after:h-[2px] after:bg-black/20 after:transition-all after:duration-300">{item}</h1>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <h1 className="font-medium text-lg font-poppins">Help</h1>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            {[
              "faq’S",
              "Track Order",
              "Shipping & Delivery",
              "Returns & Exchanges",
              "Size Guide",
            ].map((item, i) => (
              <div key={i} className="text-[#8D8D8D] font-poppins">
                <h1 className="cursor-pointer w-fit relative after:content-[''] after:absolute after:-bottom-1 
                after:w-0 hover:after:w-full after:left-0 after:h-[2px] after:bg-black/20 after:transition-all after:duration-300">
                  {item}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <h1 className="font-medium text-lg font-poppins">Company</h1>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            {["About Us", "Careers", "Sustainability", "Contact Us"].map(
              (item, i) => (
                <div key={i} className="text-[#8D8D8D] font-poppins">
                  <h1  className="cursor-pointer w-fit relative after:content-[''] after:absolute after:-bottom-1 
                after:w-0 hover:after:w-full after:left-0 after:h-[2px] after:bg-black/20 after:transition-all after:duration-300">{item}</h1>
                </div>
              )
            )}
          </div>
        </div>
        <div>
          <div>
            <h1 className="font-medium text-lg font-poppins uppercase">
              hAVE YOUR SAY
            </h1>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <div>
              <h1 className="text-[#8D8D8D] font-poppins">
                Help us improve the website and leave{" "}
                <span className="text-black underline"> feedback </span>
              </h1>
            </div>
            <div>
              <h1 className="font-medium text-lg font-poppins uppercase">
                hAVE YOUR SAY
              </h1>
            </div>
            <div className="flex gap-3">
              <div className="w-fit">
                <img src="/assets/Client/Home/ft1.png" alt="" />
                <h1 className="bg-white p-2 uppercase font-semibold font-poppins">
                  Blog
                </h1>
              </div>
              <div className="w-fit">
                <img src="/assets/Client/Home/ft2.png" alt="" />
                <h1 className="bg-white p-2 uppercase font-semibold font-poppins">
                  email sign up
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 sm:px-12 md:px-24 justify-between flex gap-2 pt-14 relative">
        <div className="flex gap-2">
          <img
            src="/assets/Client/Home/visa.png"
            alt=""
            className="w-14 h-full"
          />
          <img
            src="/assets/Client/Home/mastercard.png"
            alt=""
            className="w-14 h-full"
          />
          <img
            src="/assets/Client/Home/applePay.png"
            alt=""
            className="w-14 h-full"
          />
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/assets/Client/Home/instagram.png"
            alt=""
            className="cursor-pointer"
          />
          <img
            src="/assets/Client/Home/youtube.png"
            alt=""
            className="cursor-pointer"
          />
          <img
            src="/assets/Client/Home/pintrest.png"
            alt=""
            className="cursor-pointer"
          />
          <img
            src="/assets/Client/Home/facebook.png"
            alt=""
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
