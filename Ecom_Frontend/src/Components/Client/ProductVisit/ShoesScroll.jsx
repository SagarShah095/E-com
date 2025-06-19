import React from "react";
import "../../../index.css";

const ShoesScroll = () => {
  return (
    <div className="h-screen w-1/2 overflow-y-scroll scrollbar-hide">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 w-1/2">
          <img src="/assets/Client/Products/s1.png" alt="" />
          <img src="/assets/Client/Products/s8.png" alt="" />
        </div>
        <div>
          <img src="/assets/Client/Products/s7.png" alt="" className="w-fit" />
        </div>
        <div className="flex gap-3 w-1/2">
          <img src="/assets/Client/Products/s2.png" alt="" />
          <img src="/assets/Client/Products/s3.png" alt="" />
        </div>
        <div>
          <img src="/assets/Client/Products/s4.png" alt="" className="w-fit" />
        </div>
        <div className="flex gap-3 w-1/2">
          <img src="/assets/Client/Products/s5.png" alt="" />
          <img src="/assets/Client/Products/s6.png" alt="" />
        </div>
        <div>
          <img src="/assets/Client/Products/s9.png" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ShoesScroll;
