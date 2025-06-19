// PfOrders.js
import { MdLocationOn } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa6";
const PfOrders = () => {
  const data = [
    {
      img: "/assets/Client/Products/sho.png",
      type: "in tranit",
      brand: "NIKE AIR 1 LOW",
      gender: "Men’S Shoes",
      size: "Size UK 10",
      price: "₹1,999.00 ",
      qty: "qty: 1",
      icon: <MdLocationOn />,
      icon2: <RxCross2 />,
    },
    {
      img: "/assets/Client/Products/sho.png",
      type: "complete",
      brand: "NIKE AIR 1 LOW",
      gender: "Men’S Shoes",
      size: "Size UK 10",
      price: "₹1,999.00 ",
      qty: "qty: 1",
      icon: <MdLocationOn />,
      icon2: <RxCross2 />,
    },
    {
      img: "/assets/Client/Products/sho.png",
      type: "cancel",
      brand: "NIKE AIR 1 LOW",
      gender: "Men’S Shoes",
      size: "Size UK 10",
      price: "₹1,999.00 ",
      qty: "qty: 1",
      icon: <MdLocationOn />,
      icon2: <RxCross2 />,
    },
  ];

  return (
    <div className="flex flex-col w-[60%] gap-4">
      {/* Sample Order Card */}
      {data.map((item, i) => (
        <div
          key={i}
          className="border p-1 rounded-lg shadow-sm flex  justify-between"
        >
          <div className="flex gap-4 items-center">
            <img
              src={item.img}
              alt="shoe"
              className="w-[7.5rem] h-[7.5rem] object-cover"
            />
            <div className="flex flex-col gap-1">
              <p className="text-xs w-fit font-poppins font-semibold bg-[#F2F2F2] capitalize px-2 py-1 rounded">
                {item.type}
              </p>
              <p className="text-sm font-poppins ">{item.brand}</p>
              <p className="text-sm font-poppins font-medium text-[#00000099]">
                {item.gender}
              </p>
              <p className="text-sm font-poppins font-medium text-[#00000099]">
                {item.size}
              </p>
              <p className="text-sm font-poppins font-medium text-black">
                {item.price}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-1">
            <div className="flex gap-2  cursor-pointer h-fit items-centers ">
              <p className="text-sm font-poppins font-semibold text-black  uppercase">
                {item.qty}
              </p>
              <FaAngleDown />
            </div>
            <div className="flex gap-1  ">
              <div className="bg-[#F2F2F2] cursor-pointer p-2 rounded-full">
                {item.icon}
              </div>
              <div className="bg-[#F2F2F2] cursor-pointer p-2 rounded-full">
                {item.icon2}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PfOrders;
