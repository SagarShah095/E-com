import React from "react";
import { FaTrash } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";

const Wishlist = ({ prdData }) => {
  const { matchId } = useAuth();

  const matchData = prdData.filter((item) => item?.user_id === matchId._id);

  console.log(matchData, "matchDatamatchData");

  return (
    <div className="w-full">
      {matchData.map((item, i) => (
        <div key={i} className="flex gap-7  ">
          <div>
            <img
              src="https://via.placeholder.com/80"
              alt="wishlist-item"
              className="w-36 h-36 object-cover"
            />
          </div>

          <div className="w-fit">
            <h1 className="font-poppins font-semibold uppercase text-sm rounded-sm px-2 bg-[#F5F5F5] p-1 w-fit">
              New
            </h1>
            <h3 className="font-poppins uppercase">{item?.prdName}</h3>
            <p className="font-medium font-poppins text-[#00000099]">
              {item?.prdCategory}
            </p>
            <p className="font-poppins font-medium text-[#00000099]">
              {item?.material}
            </p>
            <p className="font-poppins font-semibold">₹ {item?.Price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
