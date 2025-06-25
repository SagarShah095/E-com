import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { GoPerson } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import PfDrp from "../../Dropdowns/PfDrp";

const Navbar = ({ setShow, setSearch, setProfile, profile, setCart, cart }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const handleProfileClick = () => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/profile");
    }
  };

  const handleCart = () => {
    if (!token) {
      setCart(false);
      return navigate("/login");
    }
    setCart(true);
  };

  console.log(cart, "cart123");
  return (
    <div className="fixed w-full z-50">
      <div className="font-poppins p-2 bg-[#F5F5F5]">
        <h1 className="text-center">
          New Drop Alert: Fresh Kicks Just Landed — Shop Now!
        </h1>
      </div>
      <div className="bg-white flex justify-evenly p-4 items-center">
        <div>
          <NavLink to="/" className="text-4xl uppercase font-poppins font-semibold">
            LaceUp
          </NavLink>
        </div>

        <div className="uppercase flex w-[55%] justify-evenly font-poppins font-medium">
          {["NEW ARIVAL", "MEN", "WOMEN", "KIDS", "SALE"].map((label, idx) => (
            <NavLink
              key={idx}
              to={`/${label.replace(/\s+/g, "-").toLowerCase()}`}
              className={({ isActive }) =>
                `relative cursor-pointer font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 ${
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`
              }
              onMouseEnter={label === "MEN" ? () => setShow(true) : undefined}
              onMouseLeave={label === "MEN" ? () => setShow(false) : undefined}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="uppercase font-poppins font-semibold w-[7%] flex justify-between">
          {/* Search Icon */}
          <NavLink
            onClick={() => setSearch(true)}
            className="hover:bg-[#F5F5F5] p-2 rounded-full duration-300"
          >
            <CgSearch className="h-full w-5" />
          </NavLink>

          {/* ✅ Profile icon + dropdown wrapper */}
          <div
            onClick={handleProfileClick}
            className="relative hover:bg-[#F5F5F5] p-2 rounded-full duration-300 cursor-pointer"
            onMouseEnter={() => setProfile(true)}
            onMouseLeave={() => setProfile(false)}
          >
            <GoPerson className="h-full w-5" />
          </div>

          {/* Cart Icon */}
          <div
            className="hover:bg-[#F5F5F5] p-2 rounded-full cursor-pointer  duration-300"
            onClick={handleCart}
          >
            <IoBagOutline className="h-full w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
