import React from "react";
import Banner from "../../Components/Client/Home/Banner";
import Category from "../../Components/Client/Home/Category";
import Popular from "../../Components/Client/Home/Popular";

const Home = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Banner />
      <Category />
      <Popular />
    </div>
  );
};

export default Home;
