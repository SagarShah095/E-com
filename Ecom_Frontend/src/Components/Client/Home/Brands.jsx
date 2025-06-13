import React from "react";

const Brands = () => {
  return (
    <div>
      <div className="pl-6 sm:pl-12 md:pl-24 flex flex-col gap-5 mt-14 relative">
        <div>
          <div>
            <h1 className="text-2xl font-semibold font-poppins uppercase">
              Trusted by Top Shoes Brands
            </h1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <img
          src="/assets/Client/Home/Brand.png"
          alt=""
          className="md:w-[80%]"
        />
      </div>
    </div>
  );
};

export default Brands;
