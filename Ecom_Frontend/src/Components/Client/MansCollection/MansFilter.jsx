import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import ReactSlider from "react-slider";

const MansFilter = () => {
  const [selected, setSelected] = useState(null);
  const [gender, setGender] = useState(null);
  const [kid, setKid] = useState(null);
  const [brand, setBrand] = useState(null);
  const [launch, setLaunch] = useState(null);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 150000]);

  const [sortOpen, setSortOpen] = useState(true);
  const [genderOpen, setGenderOpen] = useState(true);
  const [kidOpen, setKidOpen] = useState(true);
  const [brandOpen, setBrandOpen] = useState(true);
  const [launchOpen, setLaunchOpen] = useState(true);
  const [sizeOpen, setSizeOpen] = useState(true);
  const [colorOpen, setColorOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);

  const options = [
    "PRICE: LOW TO HIGH",
    "PRICE: HIGH TO LOW",
    "RELEVANCY",
    "NEWEST",
  ];

  const handleSingleSelect = (stateSetter, currentValue, item) => {
    if (currentValue === item) {
      stateSetter(null);
    } else {
      stateSetter(item);
    }
  };

  const toggleClass = "transition-all duration-300 ease-in-out overflow-hidden";

  return (
    <div className="h-screen overflow-y-scroll">
      <div className="flex justify-between w-full items-center my-3">
        <h1 className="uppercase font-medium font-poppins">MansFilter & SORT</h1>
        <h1 className="text-xs cursor-pointer font-medium font-poppins">
          CLEAR ALL
        </h1>
      </div>

      {/* SORT */}
      <div className="border-y-[1px] py-3 border-y-[#00000033]/20">
        <div
          className="flex items-center justify-between py-1 font-poppins cursor-pointer"
          onClick={() => setSortOpen(!sortOpen)}
        >
          <h1 className="uppercase font-medium">Sort</h1>
          <IoIosArrowUp
            className={`w-5 h-5 transform transition-transform duration-300 ${
              sortOpen ? "" : "rotate-180"
            }`}
          />
        </div>
        <div
          className={`${toggleClass}`}
          style={{ maxHeight: sortOpen ? "500px" : "0px" }}
        >
          {options.map((item, i) => (
            <label
              key={i}
              className="flex gap-2 text-sm font-poppins cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected === item}
                onChange={() => handleSingleSelect(setSelected, selected, item)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* GENDER */}
      <div className="border-y-[1px] py-3 border-y-[#00000033]/20">
        <div
          className="flex items-center justify-between py-1 font-poppins cursor-pointer"
          onClick={() => setGenderOpen(!genderOpen)}
        >
          <h1 className="uppercase font-medium">Gender</h1>
          <IoIosArrowUp
            className={`w-5 h-5 transform transition-transform duration-300 ${
              genderOpen ? "" : "rotate-180"
            }`}
          />
        </div>
        <div
          className={`${toggleClass}`}
          style={{ maxHeight: genderOpen ? "500px" : "0px" }}
        >
          {["MALE", "FEMALE"].map((item, i) => (
            <label
              key={i}
              className="flex gap-2 text-sm font-poppins cursor-pointer"
            >
              <input
                type="checkbox"
                checked={gender === item}
                onChange={() => handleSingleSelect(setGender, gender, item)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* KIDS */}
      <div className="border-y-[1px] py-3 border-y-[#00000033]/20">
        <div
          className="flex items-center justify-between py-1 font-poppins cursor-pointer"
          onClick={() => setKidOpen(!kidOpen)}
        >
          <h1 className="uppercase font-medium">Kids</h1>
          <IoIosArrowUp
            className={`w-5 h-5 transform transition-transform duration-300 ${
              kidOpen ? "" : "rotate-180"
            }`}
          />
        </div>
        <div
          className={`${toggleClass}`}
          style={{ maxHeight: kidOpen ? "500px" : "0px" }}
        >
          {["GIRL", "BOY"].map((item, i) => (
            <label
              key={i}
              className="flex gap-2 text-sm font-poppins cursor-pointer"
            >
              <input
                type="checkbox"
                checked={kid === item}
                onChange={() => handleSingleSelect(setKid, kid, item)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* BRAND */}
      <div className="border-y-[1px] py-3 border-y-[#00000033]/20">
        <div
          className="flex items-center justify-between py-1 font-poppins cursor-pointer"
          onClick={() => setBrandOpen(!brandOpen)}
        >
          <h1 className="uppercase font-medium">Brand</h1>
          <IoIosArrowUp
            className={`w-5 h-5 transform transition-transform duration-300 ${
              brandOpen ? "" : "rotate-180"
            }`}
          />
        </div>
        <div
          className={`${toggleClass}`}
          style={{ maxHeight: brandOpen ? "500px" : "0px" }}
        >
          <div className="grid grid-cols-2 gap-1">
            {[
              "NIKE",
              "ADIDAS",
              "PUMA",
              "REEBOK",
              "SKECHERS",
              "VANS",
              "BATA",
              "Relaxo",
            ].map((item, i) => (
              <label
                key={i}
                className="flex gap-2 text-sm font-poppins cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={brand === item}
                  onChange={() => handleSingleSelect(setBrand, brand, item)}
                />
                {item}
              </label>
            ))}
          </div>
          {["Sparx", "Gucci", "Balenciaga", "Prada", "Louis Vuitton"].map(
            (item, i) => (
              <label
                key={i}
                className="flex gap-2 text-sm font-poppins cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={brand === item}
                  onChange={() => handleSingleSelect(setBrand, brand, item)}
                />
                {item}
              </label>
            )
          )}
        </div>
      </div>

      {/* LAUNCH DATE */}
      <div className="border-y-[1px] py-3 border-y-[#00000033]/20">
        <div
          className="flex items-center justify-between py-1 font-poppins cursor-pointer"
          onClick={() => setLaunchOpen(!launchOpen)}
        >
          <h1 className="uppercase font-medium">Launch Date</h1>
          <IoIosArrowUp
            className={`w-5 h-5 transform transition-transform duration-300 ${
              launchOpen ? "" : "rotate-180"
            }`}
          />
        </div>
        <div
          className={`${toggleClass}`}
          style={{ maxHeight: launchOpen ? "500px" : "0px" }}
        >
          {[
            "7 DAY AGO",
            "1 MONTH AGO",
            "3 MONTH AGO",
            "6 MONTH AGO",
            "1 YEAR AGO",
          ].map((item, i) => (
            <label
              key={i}
              className="flex gap-2 text-sm font-poppins cursor-pointer"
            >
              <input
                type="checkbox"
                checked={launch === item}
                onChange={() => handleSingleSelect(setLaunch, launch, item)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* SIZE */}
      <div className="border-y-[1px] py-3 border-y-[#00000033]/20">
        <div
          className="flex items-center justify-between py-1 font-poppins cursor-pointer"
          onClick={() => setSizeOpen(!sizeOpen)}
        >
          <h1 className="uppercase font-medium">Size</h1>
          <IoIosArrowUp
            className={`w-5 h-5 transform transition-transform duration-300 ${
              sizeOpen ? "" : "rotate-180"
            }`}
          />
        </div>
        <div
          className={`${toggleClass}`}
          style={{ maxHeight: sizeOpen ? "500px" : "0px" }}
        >
          <div className="grid grid-cols-3 gap-1">
            {["6 UK", "7 UK", "8 UK", "9 UK", "10 UK", "11 UK", "12 UK"].map(
              (item, i) => (
                <label
                  key={i}
                  className="flex gap-2 text-sm font-poppins cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={size === item}
                    onChange={() => handleSingleSelect(setSize, size, item)}
                  />
                  {item}
                </label>
              )
            )}
          </div>
        </div>
      </div>

      {/* COLOR */}
      <div className="border-y-[1px] py-3 border-y-[#00000033]/20">
        <div
          className="flex items-center justify-between py-1 font-poppins cursor-pointer"
          onClick={() => setColorOpen(!colorOpen)}
        >
          <h1 className="uppercase font-medium">Color</h1>
          <IoIosArrowUp
            className={`w-5 h-5 transform transition-transform duration-300 ${
              colorOpen ? "" : "rotate-180"
            }`}
          />
        </div>
        <div
          className={`${toggleClass}`}
          style={{ maxHeight: colorOpen ? "500px" : "0px" }}
        >
          <div className="grid grid-cols-3 gap-1">
            {[
              "#eb2e21",
              "#e3891b",
              "#1a1919",
              "#dedbd7",
              "#656907",
              "#206dba",
              "#5820ba",
              "#bd193f",
            ].map((item, i) => (
              <label
                key={i}
                className="flex gap-2 items-center text-sm font-poppins cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={color === item}
                  onChange={() => handleSingleSelect(setColor, color, item)}
                />
                <span
                  className="p-2 rounded-full border"
                  style={{ backgroundColor: item }}
                ></span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* PRICE */}
      <div className="border-y border-y-[#00000033]/20 py-3">
        <div
          className="flex items-center justify-between py-1 font-poppins cursor-pointer"
          onClick={() => setPriceOpen(!priceOpen)}
        >
          <h1 className="uppercase font-medium">Price</h1>
          <IoIosArrowUp
            className={`w-5 h-5 transform transition-transform duration-300 ${
              priceOpen ? "" : "rotate-180"
            }`}
          />
        </div>
        <div
          className={`${toggleClass}`}
          style={{ maxHeight: priceOpen ? "500px" : "0px" }}
        >
          <ReactSlider
            className="w-full h-2 mt-4 rounded-full relative"
            thumbClassName="bg-black w-5 h-5 rounded-full cursor-pointer shadow-md transition-transform duration-150 -mt-1.5 hover:scale-110"
            min={0}
            max={150000}
            value={priceRange}
            onChange={setPriceRange}
            pearling={false}
            minDistance={1}
            renderTrack={(props, state) => {
              let color = "bg-gray-200";
              if (state.index === 1) color = "bg-black";
              return <div {...props} className={`h-2 rounded-full ${color}`} />;
            }}
            renderThumb={(props) => <div {...props}></div>}
          />
          <div className="flex justify-between text-sm mt-2 font-poppins text-gray-700">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MansFilter;
