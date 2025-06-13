import React from "react";
import { NavLink } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { GoPerson } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div className="">
        <div className="font-poppins p-2 bg-[#F5F5F5]">
          <h1 className="text-center ">
            New Drop Alert: Fresh Kicks Just Landed — Shop Now!
          </h1>
        </div>
        <div className="bg-white flex justify-evenly p-4 items-center">
          <div>
            <h1 className="text-4xl uppercase font-poppins font-semibold">
              LaceUp
            </h1>
          </div>
          {/* mid nav */}
          <div className="uppercase flex w-[55%] justify-evenly font-poppins font-medium">
            {["NEW ARIVAL", "MEN", "WOMEN", "KIDS", "SALE"].map(
              (label, idx) => (
                <NavLink
                  key={idx}
                  to={`/${label.replace(/\s+/g, "-").toLowerCase()}`} // optional: define route path
                  className={({ isActive }) =>
                    `relative cursor-pointer after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 ${
                      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                    }`
                  }
                >
                  {label}
                </NavLink>
              )
            )}
          </div>

          <div className="uppercase font-poppins font-semibold w-[7%] flex justify-between ">
            <NavLink>
              <CgSearch className="font-poppins font-semibold" />
            </NavLink>
            <NavLink>
              <GoPerson className="font-poppins font-semibold" />
            </NavLink>
            <NavLink>
              <IoBagOutline className="font-poppins font-semibold" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
