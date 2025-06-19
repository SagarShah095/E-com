import React from "react";
import ShoesScroll from "../Components/Client/ProductVisit/ShoesScroll";
import ToCard from "../Components/Client/ProductVisit/ToCard";
import Fact from "../Components/Client/ProductVisit/fact";
import Like from "../Components/Client/ProductVisit/Like";
import Review from "../Components/Client/ProductVisit/Review";
import CustReview from "../Components/Client/ProductVisit/CustReview";

const ProductVisit = () => {
  return (
    <div className="bg-[#f9f9f9] pt-28">
      <div className="flex">
        <ShoesScroll />
        <ToCard />
      </div>
      <div className="px-24 ">
        <Fact />
        <Like />
        <Review />
        <CustReview />
      </div>
    </div>
  );
};

export default ProductVisit;
