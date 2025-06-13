import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Common/Clint/Navbar";
import Home from "./Pages/Clint/Home";
import Footer from "./Common/Clint/Footer";

// Sample pages

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
