import React from "react";
import Banner3 from "../../Components/Client/Sales/Banner3";
import SalesFilter from "../../Components/Client/Sales/SalesFilter";
import SalesHero from "../../Components/Client/Sales/SalesHero";

const Sales = () => {
  return (
    <div className="pt-28">
      <Banner3 />
      <div className="px-24 ">
        <div>
          <h1 className="uppercase font-semibold font-poppins">SALES</h1>
        </div>
        <div className="flex items-center gap-3 pb-5">
          <h1 className="text-2xl font-poppins uppercase font-semibold">
            shoes
          </h1>
          <p className="text-[#00000080] uppercase text-sm font-medium font-poppins">
            50 products
          </p>
        </div>
        <div className="flex gap-3 justify-between">
          <SalesFilter />
          <SalesHero />
        </div>
      </div>
    </div>
  );
};

export default Sales;
