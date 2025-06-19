import React from "react";

const Fact = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className="font-poppins mt-5 mb-2 font-semibold text-2xl uppercase">feature fact</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {/* <img src="/assets/Client/Products/f1.png" alt="" className="w-[95%] h-[95%]" /> */}
          <div
            className={`bg-[url('/assets/Client/Products/f1.png')] flex justify-end items-end p-3 bg-cover bg-no-repeat bg-center h-[50vh]`}
          >
            <p className="text-white text-base font-semibold capitalize font-poppins">
              Strategically placed studs for enhanced traction on grass and turf
              fields.
            </p>
          </div>

          <div
            className={`bg-[url('/assets/Client/Products/f2.png')] flex justify-end items-end p-3 bg-cover bg-no-repeat bg-center h-[50vh]`}
          >
            <p className="text-white text-base font-semibold capitalize font-poppins">
              Snug lace structure and heel lock for maximum foot stability
              during play.
            </p>
          </div>

          <div
            className={`bg-[url('/assets/Client/Products/f3.png')] flex justify-end items-end p-3 bg-cover bg-no-repeat bg-center h-[50vh]`}
          >
            <p className="text-white text-base font-semibold capitalize font-poppins">
              Synthetic leather or knit upper resists wear and tear through
              rough matches.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fact;
