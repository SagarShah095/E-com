import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

const ManDrp = ({ setShow }) => {
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setShow(true);
  };

  const handleMouseLeave = () => {
    // Small delay before hiding
    timerRef.current = setTimeout(() => {
      setShow(false);
    }, 200); // Adjust delay as needed (200ms = smooth)
  };

  return (
    <div
      className="bg-white absolute w-full top-[5.5rem] z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-center mx-auto pl-10">
        <div className="p-6 w-[94.5%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 ">
          {/* Featured */}
          <div>
            <h3 className="font-bold text-lg mb-2">Featured</h3>
            <ul className="space-y-1 text-sm text-[#8D8D8D] flex flex-col gap-1">
              <li className="cursor-pointer hover:text-gray-600 duration-200 font-medium">
                New & Limited Releases
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200 font-medium">
                TRENDING NOW
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200 font-medium">
                BEST SELLER
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200 font-medium">
                EXCLUSIVE ONLINE DROPS
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200 font-medium">
                CUSTOMIZATION YOUR KICKS
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200 font-medium">
                COLLABS & SPECIAL EDITIONS
              </li>
            </ul>
          </div>

          {/* Trending */}
          <div>
            <h3 className="font-bold text-lg mb-2">Trending</h3>
            <ul className="space-y-1 text-sm text-[#8D8D8D] flex flex-col gap-1 font-medium">
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Summer Styles
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Eco-Friendly Shoes
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Streetwear Picks
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Performance Boosters
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Retro Classics
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Daily Essentials
              </li>
            </ul>
          </div>

          {/* Shop By Category */}
          <div>
            <h3 className="font-bold text-lg mb-2">Shop By Category</h3>
            <ul className="space-y-1 text-sm text-[#8D8D8D] flex flex-col gap-1 font-medium">
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Sneakers
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Running Shoes
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Basketball Shoes
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Training & Gym Shoes
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Casual & Lifestyle
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Skateboarding
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Hiking & Trail
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Formal Sneakers
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Slip-Ons & Loafers
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Cleats (Football/Cricket)
              </li>
            </ul>
          </div>

          {/* Popular Shoe Names */}
          <div>
            <h3 className="font-bold text-lg mb-2">Popular Shoe Names</h3>
            <ul className="space-y-1 text-sm text-[#8D8D8D] flex flex-col gap-1 font-medium">
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Air Max Zoom X
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Ultra Boost 23
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Gel-Kayano 30
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Chuck Taylor Classic
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                React Infinity Run
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Pegasus Turbo
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Metcon Edge
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Yeezy Boost 350
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Air Jordan Legacy
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Suede Classic Puma
              </li>
            </ul>
          </div>

          {/* Shop By User */}
          <div>
            <h3 className="font-bold text-lg mb-2">Shop By User</h3>
            <div className="space-y-1 text-sm text-[#8D8D8D] flex flex-col gap-1 font-medium">
              <NavLink to="/mens-collection" className="cursor-pointer hover:text-gray-600 duration-200">
                Men's Collection
              </NavLink>
              <NavLink className="cursor-pointer hover:text-gray-600 duration-200">
                Women's Picks
              </NavLink>
              <NavLink className="cursor-pointer hover:text-gray-600 duration-200">
                Kids & Juniors
              </NavLink>
              <NavLink className="cursor-pointer hover:text-gray-600 duration-200">
                Unisex Designs
              </NavLink>
            </div>
          </div>

          {/* Shop By Sport */}
          <div>
            <h3 className="font-bold text-lg mb-2">Shop By Sport</h3>
            <ul className="space-y-1 text-sm text-[#8D8D8D] flex flex-col gap-1 font-medium">
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Running
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Basketball
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Football
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Cricket
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Tennis
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Gym & Training
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Hiking
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Skateboarding
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Yoga
              </li>
              <li className="cursor-pointer hover:text-gray-600 duration-200">
                Golf
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManDrp;
