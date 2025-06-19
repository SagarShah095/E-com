import React from "react";
import { useAuth } from "../../../context/AuthContext";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const PfName = () => {
  const [info, setInfo] = useState({
    _id: "",
    firstname: "",
    secondname: "",
    phonenumber: "",
    gender: "",
  });

  const { matchId } = useAuth();

  const API_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  const UpdateData = async () => {
    try {
      const response = await axios.put(`${API_URL}/api/auth/updateinfo`, info, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        console.log("Update successful:", response.data);
      }
    } catch (error) {
      console.error("Update failed:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (matchId?._id) {
      setInfo({
        _id: matchId._id,
        firstname: matchId.firstname || "",
        secondname: matchId.secondname || "",
        phonenumber: matchId.phonenumber || "",
        gender: matchId.gender || "",
      });
    }
  }, [matchId]);

  return (
    <div className="w-[60%]">
      <div className="flex flex-col gap-4 w-full max-w-xl">
        <div>
          <label className="block mb-1 font-medium font-poppins">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter Your First Name"
            value={info.firstname}
            onChange={(e) => setInfo({ ...info, firstname: e.target.value })}
            className="w-full px-4 py-2 capitalize bg-[#F2F2F2] rounded-md outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium font-poppins">
            Second Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Second Name"
            value={info.secondname}
            onChange={(e) => setInfo({ ...info, secondname: e.target.value })}
            className="w-full px-4 py-2 capitalize bg-[#F2F2F2] rounded-md outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium font-poppins">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={matchId?.email}
            disabled
            className="w-full px-4 py-2  bg-[#F2F2F2] rounded-md outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium font-poppins">Phone</label>
          <input
            type="number"
            placeholder="Wnter Your Phone Number"
            value={info.phonenumber}
            onChange={(e) => setInfo({ ...info, phonenumber: e.target.value })}
            className="w-full px-4 py-2 bg-[#F2F2F2] rounded-md outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium font-poppins">Gender</label>
          <div className="flex gap-4 clear-start font-medium font-poppins text-sm">
            <label className="cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={info.gender === "male"}
                onChange={(e) => setInfo({ ...info, gender: e.target.value })}
                className="accent-black"
              />{" "}
              Men
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={info.gender === "female"}
                onChange={(e) => setInfo({ ...info, gender: e.target.value })}
                className="accent-black"
              />{" "}
              Women
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-black text-white font-medium font-poppins px-4 py-2 text-sm rounded-md mt-4 w-fit"
            onClick={UpdateData}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default PfName;
