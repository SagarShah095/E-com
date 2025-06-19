import React from "react";
import { GoPerson } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { TfiLocationPin } from "react-icons/tfi";
import { BiHeart } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { useAuth } from "../context/AuthContext";

const PfDrp = ({ setProfile }) => {
  const { setUser, user, isAuthenticated, matchId } = useAuth();

  console.log(matchId, "matchIdmatchIdmatchIdmatchIdmatchId");
  console.log(user, "useruseruser");
  const data = [
    {
      icon: <GoPerson className="w-6 h-6" />,
      title: "personal information",
      icon2: <FaAngleRight />,
    },
    {
      icon: <IoBagOutline className="w-6 h-6" />,
      title: "my orders",
      icon2: <FaAngleRight />,
    },
    {
      icon: <TfiLocationPin className="w-6 h-6" />,
      title: "my address",
      icon2: <FaAngleRight />,
    },
    {
      icon: <BiHeart className="w-6 h-6" />,
      title: "my wishlist",
      icon2: <FaAngleRight />,
    },
    {
      icon: <MdNotificationsNone className="w-6 h-6" />,
      title: "notification",
      icon2: <FaAngleRight />,
    },
  ];

  return (
    <div className="fixed top-24 shadow-2xl w-fit right-20 z-50">
      {/* Semi-transparent black background behind dropdown */}

      {/* Dropdown Panel */}
      <div
        className="w-[27%] fixed bg-white shadow-2xl rounded-lg p-5 right-20 z-10"
        onMouseEnter={() => setProfile(true)}
        onMouseLeave={() => setProfile(false)}
      >
        <div className="pb-5">
          <h1 className="font-semibold font-poppins uppercase">
            {matchId?.username || ""}
          </h1>
          <p className="text-sm font-normal lowercase">
            {matchId?.email || ""}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between hover:bg-gray-100 cursor-pointer p-2 rounded-lg"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <h1 className="font-poppins font-medium capitalize text-sm">
                  {item.title}
                </h1>
              </div>
              <div>{item.icon2}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PfDrp;
