import React from "react";
import ProductTable from "../../../Components/Admin/Product/ProductTable";
import ProductRightBar from "../../../Components/Admin/Product/ProductRightBar";
import ImportCVS from "../../../Components/Admin/Product/ImportCVS";

const Product = ({ side, setSide, setOpen, open }) => {
  return (
    <div>
      <ProductTable setSide={setSide} setOpen={setOpen} />
      {side && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex justify-end transition-all duration-300 ease-in-out">
          <ProductRightBar setSide={setSide} />
        </div>
      )}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex justify-end transition-all duration-300 ease-in-out">
          <ImportCVS setOpen={setOpen} />
        </div>
      )}
    </div>
  );
};

export default Product;
