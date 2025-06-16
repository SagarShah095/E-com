import React from "react";
import { NavLink } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { GoPerson } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";

const Navbar = ({ setShow }) => {
  return (
    <div>
      <div className="font-poppins p-2 bg-[#F5F5F5]">
        <h1 className="text-center">
          New Drop Alert: Fresh Kicks Just Landed — Shop Now!
        </h1>
      </div>
      <div className="bg-white flex justify-evenly p-4 items-center">
        <div>
          <h1 className="text-4xl uppercase font-poppins font-semibold">
            LaceUp
          </h1>
        </div>
        <div className="uppercase flex w-[55%] justify-evenly font-poppins font-medium">
          {["NEW ARIVAL", "MEN", "WOMEN", "KIDS", "SALE"].map((label, idx) => (
            <NavLink
              key={idx}
              to={`/${label.replace(/\s+/g, "-").toLowerCase()}`}
              className={({ isActive }) =>
                `relative cursor-pointer font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 ${
                  isActive
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`
              }
              onMouseEnter={label === "MEN" ? () => setShow(true) : undefined}
              onMouseLeave={label === "MEN" ? () => setShow(false) : undefined}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="uppercase font-poppins font-semibold w-[7%] flex justify-between ">
          <NavLink className="hover:bg-[#F5F5F5] p-2 rounded-full duration-300">
            <CgSearch className="h-full w-5" />
          </NavLink>
          <NavLink className="hover:bg-[#F5F5F5] p-2 rounded-full duration-300">
            <GoPerson className="h-full w-5" />
          </NavLink>
          <NavLink className="hover:bg-[#F5F5F5] p-2 rounded-full duration-300">
            <IoBagOutline className="h-full w-5" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
