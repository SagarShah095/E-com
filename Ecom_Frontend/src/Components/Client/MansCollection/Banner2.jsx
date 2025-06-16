import React from "react";

const Banner2 = () => {
  return (
    <div>
      <div>
        <div>
          <img src="/assets/Client/Home/Banner2.png" alt=""  className="w-full"/>
        </div>
        <div className="flex text-center my-10 gap-2   flex-col justify-center items-center">
            <h1 className="uppercase font-poppins font-semibold text-[#000000B2]">
              mens
            </h1>
            <h1 className="uppercase font-poppins text-3xl font-semibold">
              cricket shoes
            </h1>
            <h1 className=" font-poppins font-medium max-w-[50%] w-full text-[#000000B2]">
              Gear up for every match with the perfect pair. Explore cricket
              shoes built for grip, comfort, and peak performance — whether you
              bat, bowl, or field, we've got your game covered.
            </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
