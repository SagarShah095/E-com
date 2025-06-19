import React from "react";
import Filter from "../../Components/Client/NewArival/Filter";
import Hero from "../../Components/Client/NewArival/Hero";

const NewArival = () => {
  return (
    <div className="bg-[#F9F9F9] px-24 pt-32 py-7">
      <div className="flex items-center gap-3 pb-5">
        <h1 className="text-2xl font-poppins font-semibold">NEW ARRIVALS</h1>
        <p className="text-[#00000080] uppercase text-sm font-medium font-poppins">100 products</p>
      </div>
      <div className="flex gap-3 justify-between">
        <Filter />
        <Hero/>
      </div>
    </div>
  );
};

export default NewArival;
