import React from "react";
import Banner2 from "../Components/Client/MansCollection/Banner2";
import MansFilter from "../Components/Client/MansCollection/MansFilter";
import MansHero from "../Components/Client/MansCollection/MansHero";

const ManCollection = () => {
  return (
    <div>
      <Banner2 />
      <div className="px-24">
        <div>
          <h1 className="uppercase font-medium font-poppins">mens</h1>
        </div>
        <div className="flex items-center gap-3 pb-5">
          <h1 className="text-2xl font-poppins uppercase font-semibold">
            cricket shoes
          </h1>
          <p className="text-[#00000080] uppercase text-sm font-medium font-poppins">
            50 products
          </p>
        </div>
        <div className="flex gap-3 justify-between">
          <MansFilter />
          <MansHero />
        </div>
      </div>
    </div>
  );
};

export default ManCollection;
