import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Common/Clint/Navbar";
import Home from "./Pages/Clint/Home";
import Footer from "./Common/Clint/Footer";
import Login from "./Shared/Login";
import Signup from "./Shared/Signup";
import NewArival from "./Pages/Clint/NewArival";
import ManDrp from "./Dropdowns/ManDrp";
import ManCollection from "./ManCategory/ManCollection";
import Sales from "./Pages/Clint/Sales";
import ProductVisit from "./ManCategory/ProductVisit";
import Search from "./Dropdowns/Search";
import PfDrp from "./Dropdowns/PfDrp";
import Profile from "./Pages/Clint/Profile";
import { useEffect } from "react";
import WishRightbar from "./Dropdowns/WishRightbar";
import ForgotPass from "./Shared/ForgotPass";
import ReserPass from "./Shared/ReserPass";

const AppContent = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false);
  const [profile, setProfile] = useState(false);
  const [cart, setCart] = useState(false);

  const location = useLocation();
  const hideNavFooter =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/reset-password";
  const token = localStorage.getItem("token");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setProfile(false);
    }
  }, [profile]);

  return (
    <>
      <div className="relative">
        {!hideNavFooter && (
          <Navbar
            setShow={setShow}
            show={show}
            setSearch={setSearch}
            profile={profile}
            setProfile={setProfile}
            setCart={setCart}
            cart={cart}
          />
        )}

        <Routes className={``}>
          <Route path="/" element={<Home setShow={setShow} show={show} />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/reset-password" element={<ReserPass />} />
          <Route path="/mens-collection" element={<ManCollection />} />
          <Route path="/new-arival" element={<NewArival />} />
          <Route path="/sale" element={<Sales />} />
          <Route path="/product-shoes" element={<ProductVisit />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Add more routes here */}
        </Routes>
        {profile && localStorage.getItem("token") && (
          <PfDrp setProfile={setProfile} />
        )}

        {cart && localStorage.getItem("token") && (
          <WishRightbar setCart={setCart} />
        )}
        {show && <ManDrp setShow={setShow} />}
        {search && <Search setSearch={setSearch} />}
      </div>
      {/* mens-collection */}
      {!hideNavFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
