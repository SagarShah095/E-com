import React from "react";
import { RxCross2 } from "react-icons/rx";

const ImportCVS = ({ setOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[42%] bg-white p-3 px-5 overflow-y-auto rounded-l-md 
          transform transition-transform duration-300 ease-in-out 
          z-50 shadow-xl`}
      //   ${setSide ? "translate-x-0" : "translate-x-full"}
    >
      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-poppins font-semibold text-lg">
            Import Product Data
          </h1>
          <RxCross2
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="h-[40vh] border-2 border-dashed">
          <input
            type="file"
            id=""
            className=" border-2 opacity-0 cursor-pointer border-dashed focus:outline-none h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ImportCVS;
