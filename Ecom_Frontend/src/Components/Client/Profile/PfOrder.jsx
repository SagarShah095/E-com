// PfOrders.js
import { MdLocationOn } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
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
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Sample Order Card */}
      {[1, 2, 3].map((_, i) => (
        <div
          key={i}
          className="border p-1 rounded-lg shadow-sm flex items-center justify-between"
        >
          <div className="flex gap-4">
            <img
              src="/assets/Client/Products/sho.png"
              alt="shoe"
              className="w-24 h-24 object-cover"
            />
            <div>
              <p className="text-sm font-semibold">NIKE AIR 1 LOW</p>
              <p className="text-xs text-gray-600">Men's Shoes - Size UK 10</p>
              <p className="text-sm font-bold mt-1">₹ 1,999.00</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold bg-gray-200 px-2 py-1 rounded">
              {i === 0 ? "In Transit" : i === 1 ? "Complete" : "Cancelled"}
            </p>
            <p className="text-xs text-gray-600 mt-1">QTY: 1</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PfOrders;
