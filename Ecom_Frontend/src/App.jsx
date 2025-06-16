import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Common/Clint/Navbar";
import Home from "./Pages/Clint/Home";
import Footer from "./Common/Clint/Footer";
import Login from "./Shared/Login";
import Signup from "./Shared/Signup";
import NewArival from "./Pages/Clint/NewArival";
import ManDrp from "./Dropdowns/ManDrp";

const AppContent = () => {
  const [show, setShow] = useState(false);

  const location = useLocation();
  const hideNavFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      <div className="relative">
        {!hideNavFooter && <Navbar setShow={setShow} show={show} />}

        <Routes>
          <Route path="/" element={<Home setShow={setShow} show={show} />} />
          <Route path="/new-arival" element={<NewArival />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Add more routes here */}
        </Routes>
        {show && <ManDrp setShow={setShow}/>}
      </div>

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
