import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Common/Clint/Navbar";
import Home from "./Pages/Clint/Home";
import Footer from "./Common/Clint/Footer";
import Login from "./Shared/Login";
import Signup from "./Shared/Signup";

const AppContent = () => {
  const location = useLocation();
  const hideNavFooter = location.pathname === "/login" || "/signup";

  return (
    <>
      {!hideNavFooter && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add more routes here */}
      </Routes>

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
