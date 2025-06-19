import React from "react";

const PfAddress = () => {
  return (
    <form className="space-y-6 w-[80%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 font-medium">First Name</label>
          <input
            type="text"
            defaultValue="Akshay"
            className="w-full border bg-[#F2F2F2] focus:outline-none font-medium text-sm rounded-md p-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Second Name</label>
          <input
            type="text"
            defaultValue="Dholakiya"
            className="w-full border bg-[#F2F2F2] focus:outline-none font-medium text-sm rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="text"
            defaultValue="7096888838"
            className="w-full border bg-[#F2F2F2] focus:outline-none font-medium text-sm rounded-md p-2"
          />
        </div>

        <div className="col-span-2">
          <label className="block mb-1 font-medium">Address Line 1</label>
          <input
            type="text"
            defaultValue="360 newsh katargam"
            className="w-full border bg-[#F2F2F2] focus:outline-none font-medium text-sm rounded-md p-2"
          />
        </div>

        <div className="col-span-2">
          <label className="block mb-1 font-medium">Address Line 2</label>
          <input
            type="text"
            defaultValue="chhermew"
            className="w-full border bg-[#F2F2F2] focus:outline-none font-medium text-sm rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Pincode</label>
          <input
            type="text"
            defaultValue="395004"
            className="w-full border bg-[#F2F2F2] focus:outline-none font-medium text-sm rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Town / City</label>
          <input
            type="text"
            defaultValue="Surat"
            className="w-full border bg-[#F2F2F2] focus:outline-none font-medium text-sm rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Select State</label>
          <select className="w-full bg-[#F2F2F2] focus:outline-none cursor-pointer border font-medium text-sm rounded-md p-2">
            <option value="gujarat" selected>
              Gujarat
            </option>
            {/* Add more states if needed */}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Country</label>
          <select className="w-full bg-[#F2F2F2] focus:outline-none font-medium text-sm cursor-pointer border rounded-md p-2">
            <option value="india" selected>
              India
            </option>
            {/* Add more countries if needed */}
          </select>
        </div>
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="bg-black font-medium font-poppins text-sm text-white px-5 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default PfAddress;
