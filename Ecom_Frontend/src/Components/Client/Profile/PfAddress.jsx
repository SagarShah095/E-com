import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";

const PfAddress = () => {
  const [add, setAdd] = useState({
    _id: "",
    addfname: "",
    addsname: "",
    addpnumber: "",
    address: "",
    address2: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });

  const { matchId } = useAuth();

  const API_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  const postAddress = async () => {
    try {
      const response = await axios.put(
        `${API_URL}/api/auth/updateAddress`,
        add,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        console.log("Added successful:", response.data);
      }
    } catch (error) {
      console.error("Address failed:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (matchId?._id) {
      setAdd({
        _id: matchId._id,
        addfname: matchId?.addfname || "",
        addsname: matchId?.addsname || "",
        addpnumber: matchId?.addpnumber || "",
        address: matchId?.address || "",
        address2: matchId?.address2 || "",
        pincode: matchId?.pincode || "",
        city: matchId?.city || "",
        state: matchId?.state || "",
        country: matchId?.country || "",
      });
    }
  }, [matchId]);

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <form className="space-y-6 w-[80%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 font-medium">First Name</label>
          <input
            type="text"
            value={add.addfname}
            onChange={(e) => setAdd({ ...add, addfname: e.target.value })}
            className="w-full border bg-[#F2F2F2] focus:outline-none font-medium text-sm rounded-md p-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Second Name</label>
          <input
            type="text"
            value={add.addsname}
            onChange={(e) => setAdd({ ...add, addsname: e.target.value })}
            className="w-full border bg-[#F2F2F2] focus:outline-none font-medium text-sm rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="text"
            value={add.addpnumber}
            onChange={(e) => setAdd({ ...add, addpnumber: e.target.value })}
            className="w-full border bg-[#F2F2F2] focus:outline-none font-medium text-sm rounded-md p-2"
          />
        </div>

        <div className="col-span-2">
          <label className="block mb-1 font-medium">Address Line 1</label>
          <input
            type="text"
            value={add.address}
            onChange={(e) => setAdd({ ...add, address: e.target.value })}
            className="w-full border bg-[#F2F2F2] focus:outline-none font-medium text-sm rounded-md p-2"
          />
        </div>

        <div className="col-span-2">
          <label className="block mb-1 font-medium">Address Line 2</label>
          <input
            type="text"
            value={add.address2}
            onChange={(e) => setAdd({ ...add, address2: e.target.value })}
            className="w-full border bg-[#F2F2F2] focus:outline-none font-medium text-sm rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Pincode</label>
          <input
            type="text"
            value={add.pincode}
            onChange={(e) => setAdd({ ...add, pincode: e.target.value })}
            className="w-full border bg-[#F2F2F2] focus:outline-none font-medium text-sm rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Town / City</label>
          <input
            type="text"
            value={add.city}
            onChange={(e) => setAdd({ ...add, city: e.target.value })}
            className="w-full border bg-[#F2F2F2] focus:outline-none font-medium text-sm rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Select State</label>
          <select
            value={add.state}
            onChange={(e) => setAdd({ ...add, state: e.target.value })}
            className="w-full bg-[#F2F2F2] focus:outline-none cursor-pointer border font-medium text-sm rounded-md p-2"
          >
            <option value="">Select State</option>
            {indianStates.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Country</label>
          <select
            value={add.country}
            onChange={(e) => setAdd({ ...add, country: e.target.value })}
            className="w-full bg-[#F2F2F2] focus:outline-none font-medium text-sm cursor-pointer border rounded-md p-2"
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            {/* Add more options */}
          </select>
        </div>
      </div>

      <div className="text-right">
        <button
          onClick={(e) => {
            e.preventDefault();
            postAddress();
          }}
          className="bg-black font-medium font-poppins text-sm text-white px-5 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default PfAddress;
