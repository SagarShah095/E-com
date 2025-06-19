import React, { useState } from "react";
import Banner from "../../Components/Client/Home/Banner";
import Category from "../../Components/Client/Home/Category";
import Popular from "../../Components/Client/Home/Popular";
import Sports from "../../Components/Client/Home/Sports";
import Brands from "../../Components/Client/Home/Brands";
import Comment from "../../Components/Client/Home/Comment";

const Home = () => {

  

  return (
    <div className="bg-[#F5F5F5] pt-28">
      <Banner />
      <Category />
      <Popular />
      <Sports />
      <Comment />
      <Brands />
    </div>
  );
};

export default Home;
