import React from "react";

const Search = ({ setSearch }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50"> {/* Black transparent background */}
      <div className="w-full bg-white">
        <div className="relative">
          <div className="flex relative w-[40%] mx-auto justify-center py-2">
            <input
              type="text"
              className="h-[50px] w-full pl-12 bg-[#F5F5F5] placeholder:font-medium placeholder:font-poppins border border-[#0000007D] rounded-md focus:outline-none"
              placeholder="What are you looking for today ?"
            />
            <img
              src="/assets/Client/Products/search.svg"
              alt=""
              className="left-3 absolute top-6 w-5"
            />
          </div>
          <img
            src="/assets/Client/Products/cancel.svg"
            alt=""
            className="right-5 cursor-pointer hover:bg-[#F5F5F5] p-2 rounded-full duration-300 absolute top-3   w-10"
            onClick={() => setSearch(false)}
          />
          <hr className="border-1 border-[#0000003B]" />
          <div className="flex justify-evenly py-10 bg-white">
            <div className="flex flex-col gap-2">
              <div>
                <h1 className="uppercase font-semibold font-poppins text-xl">
                  TRANDING SEARCHES
                </h1>
              </div>
              <div className="flex gap-2">
                <h1 className="uppercase font-semibold font-poppins text-lg p-2 cursor-pointer bg-[#F5F5F5] rounded-md">
                  SPORT SHOES
                </h1>
                <h1 className="uppercase font-semibold font-poppins text-lg p-2 cursor-pointer bg-[#F5F5F5] rounded-md">
                  NIKE AIR JORDEN 1
                </h1>
                <h1 className="uppercase font-semibold font-poppins text-lg p-2 cursor-pointer bg-[#F5F5F5] rounded-md">
                  NIKE AIR MAX DN
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex gap-5 items-center">
                <h1 className="font-poppins font-semibold text-lg">
                  RECENTLY VIEWED
                </h1>
                <p className="bg-[#F5F5F5] px-4 py-1 cursor-pointer uppercase font-poppins font-semibold rounded-full w-fit">
                  CLEAR
                </p>
              </div>
              <div className="flex gap-2">
                {[...Array(6)].map((_, i) => (
                  <img
                    key={i}
                    src="/assets/Client/Products/ss1.png"
                    alt=""
                    className="py-3 bg-[#EAEEEF] px-1 h-[70px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
