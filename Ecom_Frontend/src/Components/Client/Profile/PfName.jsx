import React from "react";

const PfName = () => {
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
            className="w-full px-4 py-2 bg-[#F2F2F2] rounded-md outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium font-poppins">
            Second Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Second Name"
            className="w-full px-4 py-2 bg-[#F2F2F2] rounded-md outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium font-poppins">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-2 bg-[#F2F2F2] rounded-md outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium font-poppins">Phone</label>
          <input
            type="number"
            placeholder="Wnter Your Phone Number"
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
                className="accent-black"
                defaultChecked
              />{" "}
              Men
            </label>
            <label className="cursor-pointer">
              <input type="radio" name="gender" className="accent-black" />{" "}
              Women
            </label>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-black text-white font-medium font-poppins px-4 py-2 text-sm rounded-md mt-4 w-fit">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default PfName;
